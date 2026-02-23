/**
 * Upload Rollback Tool
 *
 * Reads an upload manifest and deletes the uploaded documents from Sanity
 * in reverse order (most recent first). After rollback, the manifest is
 * renamed to prevent accidental re-rollback.
 *
 * Usage:
 *   npx tsx src/tools/rollback-upload.ts                      # dry-run: show what would be deleted
 *   npx tsx src/tools/rollback-upload.ts --execute            # delete all uploaded documents
 *   npx tsx src/tools/rollback-upload.ts --execute --limit 5  # delete last 5 only
 *   npx tsx src/tools/rollback-upload.ts --manifest path.json # use custom manifest
 *
 * Exit codes:
 *   0 - success (rollback complete or dry-run)
 *   1 - error (manifest not found, delete failures)
 *
 * Exported for module use:
 *   import { rollbackUpload, type RollbackResult } from './rollback-upload.js'
 */

import { readFile, writeFile, rename } from 'node:fs/promises'
import { resolve, dirname, basename } from 'node:path'
import { pathToFileURL } from 'node:url'
import { sanityClient } from '../lib/sanity-client.js'
import { withRetry } from '../lib/errors.js'
import { logger } from '../lib/logger.js'
import type { UploadManifest, ManifestEntry } from './upload-batch.js'

// ─── Types ──────────────────────────────────────────────────────────────────

export type RollbackEntryStatus = 'deleted' | 'not-found' | 'dry-run' | 'failed'

export interface RollbackEntryResult {
  documentId: string
  germanId: string
  slug: string
  status: RollbackEntryStatus
  error?: string
}

export interface RollbackResult {
  totalEntries: number
  processed: number
  deleted: number
  notFound: number
  dryRun: number
  failed: number
  results: RollbackEntryResult[]
  manifestPath: string
  renamedTo: string | null
  durationMs: number
}

export interface RollbackOptions {
  /** Path to the upload manifest file */
  manifestPath?: string
  /** If true, actually delete from Sanity (default: false = dry-run) */
  execute?: boolean
  /** Maximum number of entries to rollback (from most recent) */
  limit?: number
}

// ─── Defaults ───────────────────────────────────────────────────────────────

const DEFAULT_MANIFEST_PATH = resolve('src/data/upload-manifest.json')

// ─── Core Rollback Function ─────────────────────────────────────────────────

/**
 * Rolls back uploads by deleting documents listed in the manifest.
 *
 * Flow:
 * 1. Read upload manifest
 * 2. Process entries in reverse order (most recent first)
 * 3. For each entry: check if document exists, delete if --execute
 * 4. Rename manifest to upload-manifest.rolled-back-{timestamp}.json
 */
export async function rollbackUpload(options: RollbackOptions = {}): Promise<RollbackResult> {
  const startTime = Date.now()
  const manifestPath = options.manifestPath ? resolve(options.manifestPath) : DEFAULT_MANIFEST_PATH

  // ── Step 1: Read manifest ──
  let manifest: UploadManifest
  try {
    const content = await readFile(manifestPath, 'utf-8')
    manifest = JSON.parse(content) as UploadManifest
  } catch (err) {
    return {
      totalEntries: 0,
      processed: 0,
      deleted: 0,
      notFound: 0,
      dryRun: 0,
      failed: 0,
      results: [],
      manifestPath,
      renamedTo: null,
      durationMs: Date.now() - startTime,
    }
  }

  // ── Step 2: Reverse order, apply limit ──
  let entries = [...manifest.entries].reverse()
  if (options.limit && options.limit > 0) {
    entries = entries.slice(0, options.limit)
  }

  const result: RollbackResult = {
    totalEntries: manifest.entries.length,
    processed: entries.length,
    deleted: 0,
    notFound: 0,
    dryRun: 0,
    failed: 0,
    results: [],
    manifestPath,
    renamedTo: null,
    durationMs: 0,
  }

  // ── Step 3: Process each entry ──
  for (const entry of entries) {
    // Check if document exists
    let exists: boolean
    try {
      const doc = await withRetry(
        async () => sanityClient.fetch<{ _id: string } | null>(
          `*[_id == $docId][0]{_id}`,
          { docId: entry.documentId },
        ),
        { maxRetries: 2, delayMs: 500, backoffMultiplier: 2 },
      )
      exists = doc !== null
    } catch (err) {
      result.failed++
      result.results.push({
        documentId: entry.documentId,
        germanId: entry.germanId,
        slug: entry.slug,
        status: 'failed',
        error: `Check failed: ${err instanceof Error ? err.message : String(err)}`,
      })
      continue
    }

    if (!exists) {
      result.notFound++
      result.results.push({
        documentId: entry.documentId,
        germanId: entry.germanId,
        slug: entry.slug,
        status: 'not-found',
      })
      continue
    }

    // Dry-run gate
    if (!options.execute) {
      result.dryRun++
      result.results.push({
        documentId: entry.documentId,
        germanId: entry.germanId,
        slug: entry.slug,
        status: 'dry-run',
      })
      continue
    }

    // Delete the document
    try {
      await withRetry(
        async () => sanityClient.delete(entry.documentId),
        { maxRetries: 3, delayMs: 1000, backoffMultiplier: 2 },
      )
      result.deleted++
      result.results.push({
        documentId: entry.documentId,
        germanId: entry.germanId,
        slug: entry.slug,
        status: 'deleted',
      })
    } catch (err) {
      result.failed++
      result.results.push({
        documentId: entry.documentId,
        germanId: entry.germanId,
        slug: entry.slug,
        status: 'failed',
        error: `Delete failed: ${err instanceof Error ? err.message : String(err)}`,
      })
    }
  }

  // ── Step 4: Rename manifest after successful rollback ──
  if (options.execute && result.deleted > 0) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const dir = dirname(manifestPath)
    const base = basename(manifestPath, '.json')
    const renamedPath = resolve(dir, `${base}.rolled-back-${timestamp}.json`)

    try {
      // If we rolled back all entries, rename the manifest
      // If partial (limit), update manifest to remove rolled-back entries
      if (entries.length >= manifest.entries.length) {
        await rename(manifestPath, renamedPath)
        result.renamedTo = renamedPath
      } else {
        // Partial rollback: remove deleted entries from manifest
        const deletedIds = new Set(
          result.results
            .filter((r) => r.status === 'deleted')
            .map((r) => r.documentId),
        )
        manifest.entries = manifest.entries.filter(
          (e) => !deletedIds.has(e.documentId),
        )
        manifest.updatedAt = new Date().toISOString()
        await writeFile(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8')

        // Also write a backup of what was rolled back
        const rollbackManifest: UploadManifest = {
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          entries: entries.filter((e) => deletedIds.has(e.documentId)),
        }
        await writeFile(renamedPath, JSON.stringify(rollbackManifest, null, 2), 'utf-8')
        result.renamedTo = renamedPath
      }
    } catch (err) {
      logger.warn(`Could not rename manifest: ${err instanceof Error ? err.message : String(err)}`)
    }
  }

  result.durationMs = Date.now() - startTime
  return result
}

// ─── CLI ────────────────────────────────────────────────────────────────────

interface CliArgs {
  manifestPath: string | undefined
  execute: boolean
  limit: number | undefined
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2)
  let manifestPath: string | undefined
  let execute = false
  let limit: number | undefined

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--manifest':
        if (i + 1 < args.length) manifestPath = args[++i]
        break
      case '--execute':
        execute = true
        break
      case '--limit':
        if (i + 1 < args.length) limit = parseInt(args[++i], 10)
        break
    }
  }

  return { manifestPath, execute, limit }
}

function displayResult(result: RollbackResult): void {
  logger.info('')
  logger.info('='.repeat(60))
  logger.info(result.deleted > 0
    ? '  Upload Rollback — EXECUTE MODE'
    : '  Upload Rollback — DRY RUN')
  logger.info('='.repeat(60))
  logger.info('')
  logger.stats(`Manifest:          ${result.manifestPath}`)
  logger.stats(`Total entries:     ${result.totalEntries}`)
  logger.stats(`Processing:        ${result.processed}`)
  logger.info('')

  if (result.deleted > 0) {
    logger.success(`Deleted:     ${result.deleted}`)
  }
  if (result.dryRun > 0) {
    logger.info(`  Dry-run:     ${result.dryRun}`)
  }
  if (result.notFound > 0) {
    logger.warn(`Not found:   ${result.notFound}`)
  }
  if (result.failed > 0) {
    logger.error(`Failed:      ${result.failed}`)
  }
  logger.info('')

  // Show individual results
  if (result.results.length > 0) {
    logger.info('Details')
    logger.info('-'.repeat(60))
    for (const entry of result.results) {
      const icon = entry.status === 'deleted' ? 'DEL'
        : entry.status === 'dry-run' ? 'DR'
        : entry.status === 'not-found' ? 'N/F'
        : 'FL'
      logger.info(`  [${icon}] ${entry.documentId} (${entry.slug})`)
      if (entry.error) {
        logger.info(`        ${entry.error}`)
      }
    }
    logger.info('')
  }

  if (result.renamedTo) {
    logger.file(`Manifest archived: ${result.renamedTo}`)
    logger.info('')
  }

  logger.stats(`Duration:    ${result.durationMs}ms`)
  logger.info('')

  if (result.dryRun > 0 && result.deleted === 0) {
    logger.warn('No mutations performed. Use --execute to delete from Sanity.')
    logger.info('')
  }
}

async function main(): Promise<void> {
  const cliArgs = parseArgs()

  logger.enableTimestamps()

  const result = await rollbackUpload({
    manifestPath: cliArgs.manifestPath,
    execute: cliArgs.execute,
    limit: cliArgs.limit,
  })

  if (result.totalEntries === 0) {
    logger.warn('No manifest found or manifest is empty.')
    logger.info(`Looked at: ${result.manifestPath}`)
    process.exit(1)
  }

  displayResult(result)

  process.exit(result.failed > 0 ? 1 : 0)
}

// Only run CLI when executed directly
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((err) => {
    logger.error(`Fatal error: ${err instanceof Error ? err.message : String(err)}`)
    process.exit(1)
  })
}
