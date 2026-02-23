/**
 * Batch i18n Linking Pipeline with Repair
 *
 * Links all uploaded English translations to their German source pages
 * by creating/updating `translation.metadata` documents. Supports two
 * input modes: reading the upload manifest from Phase 8, or scanning
 * translated JSON files directly.
 *
 * Includes a --repair mode that fixes known issues:
 * - Floating English pages (exist but have no metadata link)
 * - Broken metadata refs (metadata points to non-existent documents)
 *
 * Usage:
 *   npx tsx src/tools/link-batch.ts                             # dry-run from manifest
 *   npx tsx src/tools/link-batch.ts --execute                   # link all from manifest
 *   npx tsx src/tools/link-batch.ts --scan-dir src/data/translated  # scan translated files
 *   npx tsx src/tools/link-batch.ts --repair                    # dry-run repair mode
 *   npx tsx src/tools/link-batch.ts --repair --execute          # execute repairs
 *   npx tsx src/tools/link-batch.ts --execute --limit 5         # link first 5 only
 *   npx tsx src/tools/link-batch.ts --json                      # JSON output
 *
 * Exit codes:
 *   0 - all entries processed successfully (or dry-run)
 *   1 - one or more failures
 *
 * Exported for module use:
 *   import { runBatchLink, type BatchLinkSummary } from './link-batch.js'
 */

import { readFile, readdir } from 'node:fs/promises'
import { resolve, join, basename, extname } from 'node:path'
import { pathToFileURL } from 'node:url'
import { sanityClient } from '../lib/sanity-client.js'
import { withRetry } from '../lib/errors.js'
import { logger } from '../lib/logger.js'
import { linkTranslation, type LinkResult } from './link-translation.js'
import type { UploadManifest } from './upload-batch.js'

// ─── Types ──────────────────────────────────────────────────────────────────

export interface LinkPair {
  germanId: string
  englishId: string
  source: 'manifest' | 'scan' | 'repair-floating' | 'repair-broken'
}

export interface BatchLinkSummary {
  totalPairs: number
  created: number
  updated: number
  alreadyLinked: number
  dryRun: number
  failed: number
  repairFloating: number
  repairBroken: number
  results: LinkResult[]
  durationMs: number
}

export interface BatchLinkOptions {
  /** If true, actually write to Sanity (default: false = dry-run) */
  execute?: boolean
  /** Maximum number of pairs to process */
  limit?: number
  /** If true, skip patching legacy __i18n_refs on German documents */
  skipLegacy?: boolean
  /** Path to the upload manifest from Phase 8 */
  manifestPath?: string
  /** Directory to scan for *-en.json files (alternative to manifest) */
  scanDir?: string
  /** If true, also detect and repair floating English pages + broken refs */
  repair?: boolean
  /** Delay between operations in milliseconds (default: 300) */
  delay?: number
  /** Output JSON instead of human-readable */
  json?: boolean
}

// ─── Defaults ───────────────────────────────────────────────────────────────

const DEFAULT_MANIFEST_PATH = resolve('src/data/upload-manifest.json')
const DEFAULT_DELAY_MS = 300

// ─── GROQ Queries for Repair ────────────────────────────────────────────────

/** All translation.metadata docs for servicePages */
const QUERY_ALL_METADATA = `*[_type == "translation.metadata" && "servicePage" in schemaTypes]{
  _id,
  "deRef": translations[_key == "de"].value._ref,
  "enRef": translations[_key == "en"].value._ref
}`

/** All English servicePages */
const QUERY_ENGLISH_PAGES = `*[_type == "servicePage" && language == "en"]{
  _id, title, "slug": slug.current
}`

// ─── Pair Discovery ─────────────────────────────────────────────────────────

/**
 * Reads the upload manifest and extracts german/english ID pairs.
 */
async function pairsFromManifest(manifestPath: string): Promise<LinkPair[]> {
  let content: string
  try {
    content = await readFile(manifestPath, 'utf-8')
  } catch {
    logger.warn(`Manifest not found: ${manifestPath}`)
    return []
  }

  const manifest = JSON.parse(content) as UploadManifest
  return manifest.entries.map((entry) => ({
    germanId: entry.germanId,
    englishId: entry.documentId,
    source: 'manifest' as const,
  }))
}

/**
 * Scans a directory of *-en.json files to extract german/english ID pairs.
 */
async function pairsFromScanDir(dirPath: string): Promise<LinkPair[]> {
  const absDir = resolve(dirPath)
  let entries: string[]
  try {
    entries = await readdir(absDir)
  } catch {
    logger.warn(`Directory not found: ${absDir}`)
    return []
  }

  const jsonFiles = entries
    .filter((f) => extname(f) === '.json' && f.endsWith('-en.json'))
    .sort()

  const pairs: LinkPair[] = []

  for (const file of jsonFiles) {
    try {
      const content = await readFile(join(absDir, file), 'utf-8')
      const page = JSON.parse(content) as Record<string, unknown>

      if (typeof page._id !== 'string') continue

      const englishId = page._id
      // Derive German ID: strip '-en' suffix
      const germanId = englishId.endsWith('-en')
        ? englishId.slice(0, -3)
        : englishId

      pairs.push({ germanId, englishId, source: 'scan' })
    } catch {
      logger.warn(`Failed to parse ${file}, skipping`)
    }
  }

  return pairs
}

/**
 * Detects floating English pages and broken metadata refs for repair.
 */
async function discoverRepairPairs(): Promise<LinkPair[]> {
  const pairs: LinkPair[] = []

  // Fetch all metadata and English pages
  logger.search('Fetching metadata and English pages for repair analysis...')

  const [rawMetadata, englishPages] = await Promise.all([
    withRetry(
      () => sanityClient.fetch<Array<{ _id: string; deRef: string[] | null; enRef: string[] | null }>>(
        QUERY_ALL_METADATA,
      ),
      { maxRetries: 2, delayMs: 500 },
    ),
    withRetry(
      () => sanityClient.fetch<Array<{ _id: string; title: string; slug: string }>>(
        QUERY_ENGLISH_PAGES,
      ),
      { maxRetries: 2, delayMs: 500 },
    ),
  ])

  // Normalize metadata refs (GROQ array projections return arrays)
  const metadataEntries = rawMetadata.map((m) => ({
    _id: m._id,
    deRef: Array.isArray(m.deRef) ? (m.deRef[0] ?? null) : (m.deRef ?? null),
    enRef: Array.isArray(m.enRef) ? (m.enRef[0] ?? null) : (m.enRef ?? null),
  }))

  // Build set of English IDs that are linked in metadata
  const linkedEnglishIds = new Set<string>()
  for (const meta of metadataEntries) {
    if (meta.enRef) linkedEnglishIds.add(meta.enRef)
  }

  // Detect floating English pages (exist but not in any metadata)
  for (const page of englishPages) {
    if (!linkedEnglishIds.has(page._id)) {
      // Derive German ID from English ID
      const germanId = page._id.endsWith('-en')
        ? page._id.slice(0, -3)
        : page._id

      pairs.push({
        germanId,
        englishId: page._id,
        source: 'repair-floating',
      })
    }
  }

  // Detect broken refs (metadata enRef points to non-existent doc)
  const existingEnglishIds = new Set(englishPages.map((p) => p._id))
  for (const meta of metadataEntries) {
    if (meta.enRef && !existingEnglishIds.has(meta.enRef) && meta.deRef) {
      // The English ref is broken — the expected English ID would be germanId-en
      const expectedEnglishId = `${meta.deRef}-en`
      if (existingEnglishIds.has(expectedEnglishId)) {
        pairs.push({
          germanId: meta.deRef,
          englishId: expectedEnglishId,
          source: 'repair-broken',
        })
      }
    }
  }

  logger.stats(`Found ${pairs.filter((p) => p.source === 'repair-floating').length} floating English pages`)
  logger.stats(`Found ${pairs.filter((p) => p.source === 'repair-broken').length} broken refs with fixable targets`)

  return pairs
}

// ─── Core Batch Function ────────────────────────────────────────────────────

/**
 * Runs the batch linking pipeline.
 *
 * Flow:
 * 1. Discover pairs from manifest, scan dir, or repair analysis
 * 2. Deduplicate pairs by englishId
 * 3. Process each pair via linkTranslation()
 * 4. Return summary
 */
export async function runBatchLink(options: BatchLinkOptions = {}): Promise<BatchLinkSummary> {
  const startTime = Date.now()
  const delay = options.delay ?? DEFAULT_DELAY_MS

  // ── Step 1: Discover pairs ──
  let pairs: LinkPair[] = []

  if (options.scanDir) {
    pairs = await pairsFromScanDir(options.scanDir)
    logger.stats(`Discovered ${pairs.length} pairs from scan directory`)
  } else {
    const manifestPath = options.manifestPath ? resolve(options.manifestPath) : DEFAULT_MANIFEST_PATH
    pairs = await pairsFromManifest(manifestPath)
    logger.stats(`Discovered ${pairs.length} pairs from manifest`)
  }

  // Add repair pairs if requested
  let repairFloatingCount = 0
  let repairBrokenCount = 0
  if (options.repair) {
    const repairPairs = await discoverRepairPairs()
    repairFloatingCount = repairPairs.filter((p) => p.source === 'repair-floating').length
    repairBrokenCount = repairPairs.filter((p) => p.source === 'repair-broken').length
    pairs = pairs.concat(repairPairs)
  }

  // ── Step 2: Deduplicate by englishId ──
  const seen = new Set<string>()
  const uniquePairs: LinkPair[] = []
  for (const pair of pairs) {
    if (!seen.has(pair.englishId)) {
      seen.add(pair.englishId)
      uniquePairs.push(pair)
    }
  }

  // Apply limit
  let pairsToProcess = uniquePairs
  if (options.limit && options.limit > 0) {
    pairsToProcess = uniquePairs.slice(0, options.limit)
  }

  const summary: BatchLinkSummary = {
    totalPairs: pairsToProcess.length,
    created: 0,
    updated: 0,
    alreadyLinked: 0,
    dryRun: 0,
    failed: 0,
    repairFloating: repairFloatingCount,
    repairBroken: repairBrokenCount,
    results: [],
    durationMs: 0,
  }

  // ── Step 3: Process pairs ──
  for (let i = 0; i < pairsToProcess.length; i++) {
    const pair = pairsToProcess[i]

    const result = await linkTranslation({
      germanId: pair.germanId,
      englishId: pair.englishId,
      execute: options.execute,
      skipLegacy: options.skipLegacy,
    })

    summary.results.push(result)

    switch (result.status) {
      case 'created': summary.created++; break
      case 'updated': summary.updated++; break
      case 'already-linked': summary.alreadyLinked++; break
      case 'dry-run': summary.dryRun++; break
      case 'failed': summary.failed++; break
    }

    // Delay between operations
    if (i < pairsToProcess.length - 1 && delay > 0) {
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
  skipLegacy: boolean
  manifestPath: string | undefined
  scanDir: string | undefined
  repair: boolean
  delay: number | undefined
  json: boolean
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2)
  let execute = false
  let limit: number | undefined
  let skipLegacy = false
  let manifestPath: string | undefined
  let scanDir: string | undefined
  let repair = false
  let delay: number | undefined
  let json = false

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--execute':
        execute = true
        break
      case '--limit':
        if (i + 1 < args.length) limit = parseInt(args[++i], 10)
        break
      case '--skip-legacy':
        skipLegacy = true
        break
      case '--manifest':
        if (i + 1 < args.length) manifestPath = args[++i]
        break
      case '--scan-dir':
        if (i + 1 < args.length) scanDir = args[++i]
        break
      case '--repair':
        repair = true
        break
      case '--delay':
        if (i + 1 < args.length) delay = parseInt(args[++i], 10)
        break
      case '--json':
        json = true
        break
    }
  }

  return { execute, limit, skipLegacy, manifestPath, scanDir, repair, delay, json }
}

function displaySummary(summary: BatchLinkSummary): void {
  logger.info('')
  logger.info('='.repeat(60))
  logger.info(summary.created > 0 || summary.updated > 0
    ? '  Batch i18n Linking — EXECUTE MODE'
    : '  Batch i18n Linking — DRY RUN')
  logger.info('='.repeat(60))
  logger.info('')
  logger.stats(`Total pairs:       ${summary.totalPairs}`)
  if (summary.repairFloating > 0 || summary.repairBroken > 0) {
    logger.stats(`Repair floating:   ${summary.repairFloating}`)
    logger.stats(`Repair broken:     ${summary.repairBroken}`)
  }
  logger.info('')

  if (summary.created > 0) {
    logger.success(`Created:       ${summary.created} new metadata documents`)
  }
  if (summary.updated > 0) {
    logger.success(`Updated:       ${summary.updated} existing metadata documents`)
  }
  if (summary.alreadyLinked > 0) {
    logger.info(`  Already linked:  ${summary.alreadyLinked}`)
  }
  if (summary.dryRun > 0) {
    logger.info(`  Dry-run:         ${summary.dryRun}`)
  }
  if (summary.failed > 0) {
    logger.error(`Failed:        ${summary.failed}`)
  }
  logger.info('')

  // Show individual results
  if (summary.results.length > 0) {
    logger.info('Results')
    logger.info('-'.repeat(60))
    for (const result of summary.results) {
      const icon = result.status === 'created' ? 'NEW'
        : result.status === 'updated' ? 'UPD'
        : result.status === 'already-linked' ? 'OK '
        : result.status === 'dry-run' ? 'DR '
        : 'FL '
      const legacy = result.legacyPatched ? ' +legacy' : ''
      logger.info(`  [${icon}] ${result.germanId} -> ${result.englishId}${legacy}`)
      if (result.error) {
        logger.info(`        ${result.error}`)
      }
    }
    logger.info('')
  }

  logger.stats(`Duration:    ${summary.durationMs}ms`)
  logger.info('')

  if (summary.dryRun > 0 && summary.created === 0 && summary.updated === 0) {
    logger.warn('No mutations performed. Use --execute to link translations in Sanity.')
    logger.info('')
  }
}

async function main(): Promise<void> {
  const cliArgs = parseArgs()

  logger.enableTimestamps()

  const summary = await runBatchLink({
    execute: cliArgs.execute,
    limit: cliArgs.limit,
    skipLegacy: cliArgs.skipLegacy,
    manifestPath: cliArgs.manifestPath,
    scanDir: cliArgs.scanDir,
    repair: cliArgs.repair,
    delay: cliArgs.delay,
  })

  if (cliArgs.json) {
    process.stdout.write(JSON.stringify(summary, null, 2) + '\n')
  } else {
    displaySummary(summary)
  }

  process.exit(summary.failed > 0 ? 1 : 0)
}

// Only run CLI when executed directly
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((err) => {
    logger.error(`Fatal error: ${err instanceof Error ? err.message : String(err)}`)
    process.exit(1)
  })
}
