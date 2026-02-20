/**
 * Translation Queue Generator
 *
 * CLI tool that merges Sanity detection results with local file scan to produce
 * a prioritized translation queue. Pages are ordered by:
 *   1. Hierarchy depth (parents first, depth 0 = root)
 *   2. Local file status (hasLocalFile = true first within each depth)
 *   3. Alphabetical by slug (tiebreaker)
 *
 * Supports two input approaches:
 *   A) Run upstream tools internally (default):
 *      npx tsx src/tools/generate-queue.ts
 *
 *   B) Accept pre-generated JSON files:
 *      npx tsx src/tools/generate-queue.ts \
 *        --detection src/data/detection-report.json \
 *        --local-scan src/data/local-scan-report.json
 *
 * Output: src/data/translation-queue.json (default)
 *
 * CLI flags:
 *   --detection <path>   Use pre-generated detection JSON (from 04-01)
 *   --local-scan <path>  Use pre-generated local scan JSON (from 04-02)
 *   --output <path>      Custom output path (default: src/data/translation-queue.json)
 *   --limit <N>          Only include first N pages in queue (for testing)
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { detectTranslationStatus, type DetectionReport } from './detect-untranslated.js'
import { scanLocalTranslations, type LocalScanReport, type PageEntry } from './scan-local-translations.js'
import { sanityClient } from '../lib/sanity-client.js'
import { withRetry } from '../lib/errors.js'
import { logger } from '../lib/logger.js'

// ─── Types ──────────────────────────────────────────────────────────────────

interface QueueEntry {
  position: number
  germanId: string
  title: string
  slug: string
  depth: number
  parentRef: string | null
  topLevelRef: string | null
  hasLocalFile: boolean
  localFile: string | null
  localCompleteness: string | null
}

interface TranslationQueue {
  generatedAt: string
  summary: {
    totalPages: number
    withLocalFiles: number
    withoutLocalFiles: number
    byDepth: Record<number, number>
  }
  queue: QueueEntry[]
}

interface CliArgs {
  detectionPath: string | null
  localScanPath: string | null
  outputPath: string
  limit: number | null
}

// ─── CLI Argument Parsing ───────────────────────────────────────────────────

function parseArgs(): CliArgs {
  const args = process.argv.slice(2)
  let detectionPath: string | null = null
  let localScanPath: string | null = null
  let outputPath = resolve('src/data/translation-queue.json')
  let limit: number | null = null

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--detection' && i + 1 < args.length) {
      detectionPath = args[i + 1]
      i++
    } else if (args[i] === '--local-scan' && i + 1 < args.length) {
      localScanPath = args[i + 1]
      i++
    } else if (args[i] === '--output' && i + 1 < args.length) {
      outputPath = resolve(args[i + 1])
      i++
    } else if (args[i] === '--limit' && i + 1 < args.length) {
      limit = parseInt(args[i + 1], 10)
      if (isNaN(limit) || limit <= 0) {
        logger.error('--limit must be a positive integer')
        process.exit(1)
      }
      i++
    }
  }

  return { detectionPath, localScanPath, outputPath, limit }
}

// ─── Data Loading ───────────────────────────────────────────────────────────

async function loadDetectionReport(path: string | null): Promise<DetectionReport> {
  if (path) {
    logger.search(`Loading detection report from ${path}...`)
    const raw = await readFile(resolve(path), 'utf-8')
    const report = JSON.parse(raw) as DetectionReport
    logger.stats(`Loaded detection report: ${report.summary.untranslated} untranslated pages`)
    return report
  }

  logger.search('Running detection tool internally...')
  const report = await detectTranslationStatus()
  logger.stats(`Detection complete: ${report.summary.untranslated} untranslated pages`)
  return report
}

async function loadLocalScanReport(path: string | null): Promise<LocalScanReport> {
  if (path) {
    logger.search(`Loading local scan report from ${path}...`)
    const raw = await readFile(resolve(path), 'utf-8')
    const report = JSON.parse(raw) as LocalScanReport
    logger.stats(`Loaded local scan: ${report.summary.uniqueSlugs} unique slugs`)
    return report
  }

  logger.search('Running local scan tool internally...')
  const report = await scanLocalTranslations(true) // quiet mode
  logger.stats(`Local scan complete: ${report.summary.uniqueSlugs} unique slugs`)
  return report
}

// ─── Hierarchy Depth Computation ────────────────────────────────────────────

/**
 * GROQ query to get the parent hierarchy for all German servicePages.
 * Returns _id and parentRef for each page so we can compute tree depth.
 */
const QUERY_HIERARCHY = `*[_type == "servicePage" && language == "de"]{ _id, "parentRef": parent._ref }`

interface HierarchyNode {
  _id: string
  parentRef: string | null
}

/**
 * Compute the hierarchy depth for each German page.
 * Depth 0 = root page (no parent), depth 1 = child of root, etc.
 * Uses iterative parent-walking to avoid stack overflow on deep hierarchies.
 */
async function computeHierarchyDepths(): Promise<Map<string, number>> {
  logger.search('Querying Sanity for page hierarchy...')

  const nodes = await withRetry<HierarchyNode[]>(
    () => sanityClient.fetch(QUERY_HIERARCHY),
    { maxRetries: 3, delayMs: 1000, backoffMultiplier: 2 },
  )

  logger.stats(`Fetched hierarchy for ${nodes.length} German pages`)

  // Build parent lookup: _id -> parentRef
  const parentMap = new Map<string, string | null>()
  for (const node of nodes) {
    parentMap.set(node._id, node.parentRef ?? null)
  }

  // Compute depth for each node by walking up the parent chain
  const depthCache = new Map<string, number>()

  function getDepth(id: string): number {
    if (depthCache.has(id)) {
      return depthCache.get(id)!
    }

    const parentRef = parentMap.get(id)
    if (!parentRef || !parentMap.has(parentRef)) {
      // No parent or parent not in the German page set -> root level
      depthCache.set(id, 0)
      return 0
    }

    // Walk up the parent chain with cycle detection
    const visited = new Set<string>()
    let current = id
    let depth = 0

    while (true) {
      if (depthCache.has(current)) {
        depth += depthCache.get(current)!
        break
      }

      visited.add(current)
      const parent = parentMap.get(current)

      if (!parent || !parentMap.has(parent)) {
        // Reached root
        break
      }

      if (visited.has(parent)) {
        // Cycle detected -- treat as root to avoid infinite loop
        logger.warn(`Cycle detected in hierarchy at ${current} -> ${parent}`)
        break
      }

      current = parent
      depth++
    }

    depthCache.set(id, depth)
    return depth
  }

  // Compute depth for all nodes
  let processed = 0
  const total = nodes.length
  for (const node of nodes) {
    getDepth(node._id)
    processed++
    if (processed % 200 === 0 || processed === total) {
      logger.progress(processed, total, 'Computing hierarchy depths')
    }
  }

  return depthCache
}

// ─── Queue Generation ───────────────────────────────────────────────────────

async function generateQueue(
  detection: DetectionReport,
  localScan: LocalScanReport,
  limit: number | null,
): Promise<TranslationQueue> {
  // Build local file lookup: slug -> PageEntry
  const localFileMap = new Map<string, PageEntry>()
  for (const page of localScan.pages) {
    localFileMap.set(page.slug, page)
  }

  // Compute hierarchy depths from Sanity
  const depthMap = await computeHierarchyDepths()

  // Build the queue from untranslated pages + metadataOnly pages
  // (metadataOnly pages have metadata but no working EN link -- they still need translation)
  const untranslatedPages = [
    ...detection.untranslated,
    ...detection.metadataOnly.map(p => ({
      _id: p._id,
      title: p.title,
      slug: '', // metadataOnly pages don't have slug in their interface; we'll look it up
      parentRef: null as string | null,
      topLevelRef: null as string | null,
    })),
  ]

  // For metadataOnly pages, we need to look up their slug/parentRef from the full German pages query.
  // The detection report doesn't include these fields for metadataOnly pages.
  // We'll query Sanity for these specific pages if there are metadataOnly entries.
  if (detection.metadataOnly.length > 0) {
    logger.search(`Looking up details for ${detection.metadataOnly.length} metadata-only pages...`)
    const metadataOnlyIds = detection.metadataOnly.map(p => p._id)
    const metadataOnlyDetails = await withRetry<Array<{
      _id: string
      slug: string
      parentRef: string | null
      topLevelRef: string | null
    }>>(
      () => sanityClient.fetch(
        `*[_type == "servicePage" && language == "de" && _id in $ids]{
          _id, "slug": slug.current, "parentRef": parent._ref, "topLevelRef": references.topLevelParent._ref
        }`,
        { ids: metadataOnlyIds },
      ),
      { maxRetries: 3, delayMs: 1000, backoffMultiplier: 2 },
    )

    // Update the untranslated pages with the looked-up details
    const detailsMap = new Map(metadataOnlyDetails.map(d => [d._id, d]))
    for (const page of untranslatedPages) {
      if (page.slug === '' && detailsMap.has(page._id)) {
        const details = detailsMap.get(page._id)!
        page.slug = details.slug
        page.parentRef = details.parentRef
        page.topLevelRef = details.topLevelRef
      }
    }
  }

  // Build queue entries with depth and local file info
  // Local files use leaf slugs (e.g., "kritis-meldepflichten") while Sanity slugs
  // can be full paths (e.g., "informationssicherheit/kritis-meldepflichten").
  // Try matching by full slug first, then by leaf segment.
  const entries: QueueEntry[] = []

  for (const page of untranslatedPages) {
    const depth = depthMap.get(page._id) ?? 0
    const leafSlug = page.slug.includes('/') ? page.slug.split('/').pop()! : page.slug
    const localEntry = localFileMap.get(page.slug) ?? localFileMap.get(leafSlug)
    const hasLocalFile = !!localEntry
    const localFile = localEntry?.mainFile ?? null
    const localCompleteness = localEntry?.estimatedCompleteness ?? null

    entries.push({
      position: 0, // will be set after sorting
      germanId: page._id,
      title: page.title,
      slug: page.slug,
      depth,
      parentRef: page.parentRef,
      topLevelRef: page.topLevelRef,
      hasLocalFile,
      localFile,
      localCompleteness,
    })
  }

  // Sort by: depth (asc), hasLocalFile (true first), slug (alphabetical)
  entries.sort((a, b) => {
    // 1. Depth: lower depth first
    if (a.depth !== b.depth) return a.depth - b.depth

    // 2. Local file: pages with local files first
    if (a.hasLocalFile !== b.hasLocalFile) return a.hasLocalFile ? -1 : 1

    // 3. Alphabetical by slug
    return a.slug.localeCompare(b.slug)
  })

  // Apply limit if specified
  const finalEntries = limit ? entries.slice(0, limit) : entries

  // Set positions (1-based)
  for (let i = 0; i < finalEntries.length; i++) {
    finalEntries[i].position = i + 1
  }

  // Compute summary
  const withLocalFiles = finalEntries.filter(e => e.hasLocalFile).length
  const withoutLocalFiles = finalEntries.length - withLocalFiles

  const byDepth: Record<number, number> = {}
  for (const entry of finalEntries) {
    byDepth[entry.depth] = (byDepth[entry.depth] ?? 0) + 1
  }

  return {
    generatedAt: new Date().toISOString(),
    summary: {
      totalPages: finalEntries.length,
      withLocalFiles,
      withoutLocalFiles,
      byDepth,
    },
    queue: finalEntries,
  }
}

// ─── Display ────────────────────────────────────────────────────────────────

function displaySummary(queue: TranslationQueue): void {
  logger.info('')
  logger.info('='.repeat(70))
  logger.info('  Translation Queue Summary')
  logger.info('='.repeat(70))
  logger.info('')

  logger.stats(`Total pages in queue:        ${queue.summary.totalPages}`)
  logger.stats(`With local files:            ${queue.summary.withLocalFiles}`)
  logger.stats(`Without local files:         ${queue.summary.withoutLocalFiles}`)
  logger.info('')

  // Depth breakdown
  logger.info('  Pages by hierarchy depth:')
  const depths = Object.keys(queue.summary.byDepth)
    .map(Number)
    .sort((a, b) => a - b)
  for (const depth of depths) {
    const count = queue.summary.byDepth[depth]
    const label = depth === 0 ? 'root' : `level ${depth}`
    logger.info(`    Depth ${depth} (${label}): ${count} pages`)
  }
  logger.info('')

  // Show first 10 entries as sample
  logger.info('-'.repeat(70))
  logger.info(`  Queue preview (first 10 of ${queue.queue.length}):`)
  logger.info('-'.repeat(70))
  for (const entry of queue.queue.slice(0, 10)) {
    const localTag = entry.hasLocalFile ? ' [LOCAL]' : ''
    logger.info(`  #${entry.position} ${entry.slug} (depth=${entry.depth})${localTag}`)
    logger.info(`     ID: ${entry.germanId} | Title: ${entry.title}`)
  }
  if (queue.queue.length > 10) {
    logger.info(`  ... and ${queue.queue.length - 10} more`)
  }
  logger.info('')

  logger.success('Queue generation complete.')
  logger.info('')
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  logger.enableTimestamps()

  const { detectionPath, localScanPath, outputPath, limit } = parseArgs()

  // Load data from either upstream tools or pre-generated JSON
  const detection = await loadDetectionReport(detectionPath)
  const localScan = await loadLocalScanReport(localScanPath)

  // Generate the prioritized queue
  logger.search('Generating prioritized translation queue...')
  const queue = await generateQueue(detection, localScan, limit)

  // Write output
  const outputDir = dirname(outputPath)
  await mkdir(outputDir, { recursive: true })
  const jsonStr = JSON.stringify(queue, null, 2)
  await writeFile(outputPath, jsonStr, 'utf-8')
  logger.file(`Queue written to ${outputPath}`)

  // Display summary
  displaySummary(queue)
}

main().catch((err) => {
  logger.error(`Fatal error: ${err instanceof Error ? err.message : String(err)}`)
  process.exit(1)
})
