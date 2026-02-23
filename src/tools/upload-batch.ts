/**
 * Batch Upload Pipeline with Manifest and Resume
 *
 * Scans the translated directory for *-en.json files and uploads each to
 * Sanity CMS using the single-page upload tool. Writes a manifest after
 * each successful upload for crash-safe resume support.
 *
 * Usage:
 *   npx tsx src/tools/upload-batch.ts                         # dry-run all files
 *   npx tsx src/tools/upload-batch.ts --execute               # upload all files
 *   npx tsx src/tools/upload-batch.ts --execute --limit 5     # upload first 5
 *   npx tsx src/tools/upload-batch.ts --execute --force       # upload even if validation < 11
 *   npx tsx src/tools/upload-batch.ts --execute --delay 1000  # 1s between uploads
 *   npx tsx src/tools/upload-batch.ts --json                  # JSON output
 *
 * Exit codes:
 *   0 - all files processed successfully (or dry-run)
 *   1 - one or more failures
 *
 * Exported for module use:
 *   import { runBatchUpload, type BatchUploadSummary } from './upload-batch.js'
 */

import { readFile, writeFile, readdir } from 'node:fs/promises'
import { resolve, join, basename, extname } from 'node:path'
import { pathToFileURL } from 'node:url'
import { logger } from '../lib/logger.js'
import { uploadPage, type UploadResult } from './upload-page.js'

// ─── Types ──────────────────────────────────────────────────────────────────

export interface ManifestEntry {
  documentId: string
  germanId: string
  slug: string
  previousRevision: string | null
  newRevision: string | null
  uploadedAt: string
}

export interface UploadManifest {
  createdAt: string
  updatedAt: string
  entries: ManifestEntry[]
}

export interface BatchUploadSummary {
  totalFiles: number
  uploaded: number
  dryRun: number
  skipped: number
  failed: number
  resumed: number
  aborted: boolean
  abortReason?: string
  results: UploadResult[]
  manifestPath: string
  durationMs: number
}

export interface BatchUploadOptions {
  /** If true, actually write to Sanity (default: false = dry-run) */
  execute?: boolean
  /** Maximum number of files to process */
  limit?: number
  /** If true, upload even if validation score < 11 */
  force?: boolean
  /** If true, skip validation entirely */
  skipValidation?: boolean
  /** Delay between uploads in milliseconds (default: 500) */
  delay?: number
  /** Directory containing translated *-en.json files */
  translatedDir?: string
  /** Directory containing extracted German source JSON files */
  extractedDir?: string
  /** Path to the upload manifest file */
  manifestPath?: string
}

// ─── Defaults ───────────────────────────────────────────────────────────────

const DEFAULT_TRANSLATED_DIR = resolve('src/data/translated')
const DEFAULT_EXTRACTED_DIR = resolve('src/data/extracted')
const DEFAULT_MANIFEST_PATH = resolve('src/data/upload-manifest.json')
const DEFAULT_DELAY_MS = 500
const CONSECUTIVE_FAILURE_LIMIT = 3

// ─── Manifest I/O ───────────────────────────────────────────────────────────

async function loadManifest(manifestPath: string): Promise<UploadManifest> {
  try {
    const content = await readFile(manifestPath, 'utf-8')
    return JSON.parse(content) as UploadManifest
  } catch {
    return {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      entries: [],
    }
  }
}

async function saveManifest(manifestPath: string, manifest: UploadManifest): Promise<void> {
  manifest.updatedAt = new Date().toISOString()
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8')
}

// ─── File Discovery ─────────────────────────────────────────────────────────

async function discoverTranslatedFiles(dirPath: string): Promise<string[]> {
  let entries: string[]
  try {
    entries = await readdir(dirPath)
  } catch {
    return []
  }

  return entries
    .filter((f) => extname(f) === '.json' && f.endsWith('-en.json'))
    .sort()
    .map((f) => join(dirPath, f))
}

/**
 * Attempts to find the matching German source file for a translated file.
 * Strips '-en' from the filename and looks in the extracted directory.
 */
async function findGermanSource(translatedPath: string, extractedDir: string): Promise<string | undefined> {
  const filename = basename(translatedPath)
  const germanFilename = filename.replace(/-en\.json$/, '.json')
  const candidatePath = join(extractedDir, germanFilename)
  try {
    await readFile(candidatePath, 'utf-8')
    return candidatePath
  } catch {
    return undefined
  }
}

// ─── Core Batch Function ────────────────────────────────────────────────────

/**
 * Runs the batch upload pipeline.
 *
 * Flow:
 * 1. Discover translated files in the translated directory
 * 2. Load existing manifest for resume support (skip already-uploaded)
 * 3. Process each file sequentially via uploadPage()
 * 4. Write manifest entry after each successful upload
 * 5. Abort after CONSECUTIVE_FAILURE_LIMIT consecutive failures
 */
export async function runBatchUpload(options: BatchUploadOptions = {}): Promise<BatchUploadSummary> {
  const startTime = Date.now()
  const translatedDir = options.translatedDir ? resolve(options.translatedDir) : DEFAULT_TRANSLATED_DIR
  const extractedDir = options.extractedDir ? resolve(options.extractedDir) : DEFAULT_EXTRACTED_DIR
  const manifestPath = options.manifestPath ? resolve(options.manifestPath) : DEFAULT_MANIFEST_PATH
  const delay = options.delay ?? DEFAULT_DELAY_MS

  // ── Step 1: Discover files ──
  const allFiles = await discoverTranslatedFiles(translatedDir)

  // ── Step 2: Load manifest for resume ──
  const manifest = await loadManifest(manifestPath)
  const alreadyUploaded = new Set(manifest.entries.map((e) => e.documentId))

  // Filter out already-uploaded files (resume support)
  let filesToProcess = allFiles
  let resumedCount = 0

  if (options.execute && alreadyUploaded.size > 0) {
    const beforeCount = filesToProcess.length
    filesToProcess = filesToProcess.filter((f) => {
      // Parse the file to check _id — but we can approximate from filename
      const filename = basename(f, '.json')
      // filename is like "some-page-en", document ID would be "some-page-en"
      // Check if any manifest entry matches this pattern
      return !alreadyUploaded.has(filename)
    })
    resumedCount = beforeCount - filesToProcess.length
  }

  // Apply limit
  if (options.limit && options.limit > 0) {
    filesToProcess = filesToProcess.slice(0, options.limit)
  }

  const summary: BatchUploadSummary = {
    totalFiles: allFiles.length,
    uploaded: 0,
    dryRun: 0,
    skipped: 0,
    failed: 0,
    resumed: resumedCount,
    aborted: false,
    results: [],
    manifestPath,
    durationMs: 0,
  }

  // ── Step 3: Process files sequentially ──
  let consecutiveFailures = 0

  for (let i = 0; i < filesToProcess.length; i++) {
    const filePath = filesToProcess[i]

    // Find matching German source for cross-validation
    const germanPath = await findGermanSource(filePath, extractedDir)

    // Upload single page
    const result = await uploadPage({
      filePath,
      germanPath,
      execute: options.execute,
      force: options.force,
      skipValidation: options.skipValidation,
    })

    summary.results.push(result)

    // Track status
    switch (result.status) {
      case 'uploaded':
        summary.uploaded++
        consecutiveFailures = 0

        // Write manifest entry immediately (crash-safe)
        manifest.entries.push({
          documentId: result.documentId,
          germanId: result.germanId,
          slug: result.slug,
          previousRevision: result.previousRevision,
          newRevision: result.newRevision,
          uploadedAt: new Date().toISOString(),
        })
        await saveManifest(manifestPath, manifest)
        break

      case 'dry-run':
        summary.dryRun++
        consecutiveFailures = 0
        break

      case 'skipped':
        summary.skipped++
        consecutiveFailures = 0
        break

      case 'failed':
        summary.failed++
        consecutiveFailures++
        break
    }

    // Abort after too many consecutive failures
    if (consecutiveFailures >= CONSECUTIVE_FAILURE_LIMIT) {
      summary.aborted = true
      summary.abortReason = `Aborted after ${CONSECUTIVE_FAILURE_LIMIT} consecutive failures`
      break
    }

    // Delay between uploads (skip for last item and dry-run)
    if (i < filesToProcess.length - 1 && options.execute && delay > 0) {
      await new Promise((r) => setTimeout(r, delay))
    }
  }

  summary.durationMs = Date.now() - startTime
  return summary
}

// ─── CLI ────────────────────────────────────────────────────────────────────

interface CliArgs {
  execute: boolean
  limit: number | undefined
  force: boolean
  skipValidation: boolean
  delay: number | undefined
  translatedDir: string | undefined
  extractedDir: string | undefined
  manifestPath: string | undefined
  json: boolean
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2)
  let execute = false
  let limit: number | undefined
  let force = false
  let skipValidation = false
  let delay: number | undefined
  let translatedDir: string | undefined
  let extractedDir: string | undefined
  let manifestPath: string | undefined
  let json = false

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--execute':
        execute = true
        break
      case '--limit':
        if (i + 1 < args.length) limit = parseInt(args[++i], 10)
        break
      case '--force':
        force = true
        break
      case '--skip-validation':
        skipValidation = true
        break
      case '--delay':
        if (i + 1 < args.length) delay = parseInt(args[++i], 10)
        break
      case '--translated-dir':
        if (i + 1 < args.length) translatedDir = args[++i]
        break
      case '--extracted-dir':
        if (i + 1 < args.length) extractedDir = args[++i]
        break
      case '--manifest':
        if (i + 1 < args.length) manifestPath = args[++i]
        break
      case '--json':
        json = true
        break
    }
  }

  return { execute, limit, force, skipValidation, delay, translatedDir, extractedDir, manifestPath, json }
}

function displaySummary(summary: BatchUploadSummary): void {
  logger.info('')
  logger.info('='.repeat(60))
  logger.info(summary.results.some((r) => r.status === 'uploaded')
    ? '  Batch Upload — EXECUTE MODE'
    : '  Batch Upload — DRY RUN')
  logger.info('='.repeat(60))
  logger.info('')
  logger.stats(`Total files found:     ${summary.totalFiles}`)
  if (summary.resumed > 0) {
    logger.stats(`Already uploaded:      ${summary.resumed} (skipped via manifest)`)
  }
  logger.stats(`Processed this run:    ${summary.results.length}`)
  logger.info('')

  if (summary.uploaded > 0) {
    logger.success(`Uploaded:    ${summary.uploaded}`)
  }
  if (summary.dryRun > 0) {
    logger.info(`  Dry-run:     ${summary.dryRun}`)
  }
  if (summary.skipped > 0) {
    logger.warn(`Skipped:     ${summary.skipped}`)
  }
  if (summary.failed > 0) {
    logger.error(`Failed:      ${summary.failed}`)
  }
  logger.info('')

  // Show individual results
  if (summary.results.length > 0) {
    logger.info('Results')
    logger.info('-'.repeat(60))
    for (const result of summary.results) {
      const icon = result.status === 'uploaded' ? 'UP'
        : result.status === 'dry-run' ? 'DR'
        : result.status === 'skipped' ? 'SK'
        : 'FL'
      const score = result.validationScore === -1 ? 'skip' : `${result.validationScore}/11`
      const rev = result.previousRevision ? `rev:${result.previousRevision.slice(0, 8)}` : 'new'
      logger.info(`  [${icon}] ${result.documentId} (${score}, ${rev})`)
      if (result.error) {
        logger.info(`       ${result.error}`)
      }
    }
    logger.info('')
  }

  if (summary.aborted) {
    logger.error(`ABORTED: ${summary.abortReason}`)
    logger.info('')
  }

  logger.stats(`Manifest:    ${summary.manifestPath}`)
  logger.stats(`Duration:    ${summary.durationMs}ms`)
  logger.info('')

  if (summary.dryRun > 0 && summary.uploaded === 0) {
    logger.warn('No mutations performed. Use --execute to upload to Sanity.')
    logger.info('')
  }
}

async function main(): Promise<void> {
  const cliArgs = parseArgs()

  logger.enableTimestamps()

  const summary = await runBatchUpload({
    execute: cliArgs.execute,
    limit: cliArgs.limit,
    force: cliArgs.force,
    skipValidation: cliArgs.skipValidation,
    delay: cliArgs.delay,
    translatedDir: cliArgs.translatedDir,
    extractedDir: cliArgs.extractedDir,
    manifestPath: cliArgs.manifestPath,
  })

  if (cliArgs.json) {
    process.stdout.write(JSON.stringify(summary, null, 2) + '\n')
  } else {
    displaySummary(summary)
  }

  process.exit(summary.failed > 0 || summary.aborted ? 1 : 0)
}

// Only run CLI when executed directly
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((err) => {
    logger.error(`Fatal error: ${err instanceof Error ? err.message : String(err)}`)
    process.exit(1)
  })
}
