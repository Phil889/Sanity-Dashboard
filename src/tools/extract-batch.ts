/**
 * Batch Extraction Pipeline
 *
 * CLI tool that processes the translation queue in batch, extracting all (or a
 * subset of) German servicePages from Sanity and writing individual JSON files
 * to `src/data/extracted/`. This is the production workhorse that processes
 * 587 pages reliably with rate limiting, skip-existing support, and graceful
 * error handling.
 *
 * Usage:
 *   npx tsx src/tools/extract-batch.ts --limit 5          # extract first 5 pages
 *   npx tsx src/tools/extract-batch.ts                     # extract all 587 pages
 *   npx tsx src/tools/extract-batch.ts --force             # re-extract even if file exists
 *   npx tsx src/tools/extract-batch.ts --delay 500         # 500ms between API requests
 *   npx tsx src/tools/extract-batch.ts --json              # JSON summary to stdout
 *
 * CLI flags:
 *   --limit <N>         Process only first N pages from queue (default: all)
 *   --output-dir <path> Output directory (default: src/data/extracted)
 *   --delay <ms>        Delay between API requests in ms (default: 200)
 *   --force             Re-extract pages even if output file already exists
 *   --queue <path>      Path to translation queue JSON (default: src/data/translation-queue.json)
 *   --json              Output summary as JSON to stdout
 *
 * Exported for module use:
 *   import { runBatchExtraction, type BatchSummary } from './extract-batch.js'
 */

import { readFile, writeFile, mkdir, access } from 'node:fs/promises'
import { resolve, join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { extractPage, type ExtractedPage } from './extract-page.js'
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

interface FailedPage {
  germanId: string
  slug: string
  error: string
}

/** Summary of a batch extraction run */
export interface BatchSummary {
  extracted: number
  skipped: number
  failed: number
  total: number
  outputDir: string
  failures: FailedPage[]
  durationMs: number
}

// ─── CLI Argument Parsing ───────────────────────────────────────────────────

interface CliArgs {
  limit: number | null
  outputDir: string
  delay: number
  force: boolean
  queuePath: string
  json: boolean
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2)
  let limit: number | null = null
  let outputDir = resolve('src/data/extracted')
  let delay = 200
  let force = false
  let queuePath = resolve('src/data/translation-queue.json')
  let json = false

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--limit' && i + 1 < args.length) {
      limit = parseInt(args[i + 1], 10)
      if (isNaN(limit) || limit <= 0) {
        logger.error('--limit must be a positive integer')
        process.exit(1)
      }
      i++
    } else if (args[i] === '--output-dir' && i + 1 < args.length) {
      outputDir = resolve(args[i + 1])
      i++
    } else if (args[i] === '--delay' && i + 1 < args.length) {
      delay = parseInt(args[i + 1], 10)
      if (isNaN(delay) || delay < 0) {
        logger.error('--delay must be a non-negative integer')
        process.exit(1)
      }
      i++
    } else if (args[i] === '--force') {
      force = true
    } else if (args[i] === '--queue' && i + 1 < args.length) {
      queuePath = resolve(args[i + 1])
      i++
    } else if (args[i] === '--json') {
      json = true
    }
  }

  return { limit, outputDir, delay, force, queuePath, json }
}

// ─── Helpers ────────────────────────────────────────────────────────────────

/**
 * Derives a flat output filename from a page slug.
 * Replaces `/` with `--` to create filesystem-safe names while preserving
 * hierarchy information.
 *
 * Examples:
 *   "ai-governance" -> "ai-governance.json"
 *   "informationssicherheit/kritis/meldepflichten" -> "informationssicherheit--kritis--meldepflichten.json"
 */
function slugToFilename(slug: string): string {
  return slug.replace(/\//g, '--') + '.json'
}

/**
 * Check if a file exists at the given path.
 */
async function fileExists(path: string): Promise<boolean> {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

/**
 * Sleep for the specified number of milliseconds.
 */
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// ─── Core Batch Extraction ──────────────────────────────────────────────────

/** Maximum consecutive failures before aborting (e.g., auth error) */
const MAX_CONSECUTIVE_FAILURES = 5

/**
 * Runs batch extraction on the translation queue.
 *
 * @param options - Batch extraction configuration
 * @returns Summary of the extraction run
 */
export async function runBatchExtraction(options: {
  limit?: number | null
  outputDir?: string
  delay?: number
  force?: boolean
  queuePath?: string
  quiet?: boolean
}): Promise<BatchSummary> {
  const {
    limit = null,
    outputDir = resolve('src/data/extracted'),
    delay = 200,
    force = false,
    queuePath = resolve('src/data/translation-queue.json'),
    quiet = false,
  } = options

  const startTime = Date.now()

  // Read the translation queue
  const raw = await readFile(queuePath, 'utf-8')
  const queue: TranslationQueue = JSON.parse(raw)

  // Apply limit if specified
  const entries = limit ? queue.queue.slice(0, limit) : queue.queue
  const total = entries.length

  if (!quiet) {
    logger.search(`Loading translation queue from ${queuePath}`)
    logger.stats(`Queue contains ${queue.summary.totalPages} pages, processing ${total}`)
  }

  // Ensure output directory exists
  await mkdir(outputDir, { recursive: true })

  // Tracking
  let extracted = 0
  let skipped = 0
  let failed = 0
  let consecutiveFailures = 0
  const failures: FailedPage[] = []

  // Process each queue entry sequentially
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i]
    const filename = slugToFilename(entry.slug)
    const outputPath = join(outputDir, filename)

    // Check if already extracted (skip-existing)
    if (!force && await fileExists(outputPath)) {
      skipped++
      if (!quiet) {
        logger.progress(i + 1, total, `Skipped (exists): ${entry.slug}`)
      }
      consecutiveFailures = 0 // reset on any non-failure
      continue
    }

    // Extract the page
    try {
      const page: ExtractedPage = await extractPage(entry.germanId)

      // Write to output file
      const jsonString = JSON.stringify(page, null, 2)
      await writeFile(outputPath, jsonString, 'utf-8')

      extracted++
      consecutiveFailures = 0

      if (!quiet) {
        logger.progress(i + 1, total, `Extracted: ${entry.slug}`)
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err)

      failed++
      consecutiveFailures++
      failures.push({
        germanId: entry.germanId,
        slug: entry.slug,
        error: message,
      })

      if (!quiet) {
        logger.error(`[${i + 1}/${total}] Failed: ${entry.slug} — ${message}`)
      }

      // Abort early if too many consecutive failures (likely auth/network issue)
      if (consecutiveFailures >= MAX_CONSECUTIVE_FAILURES) {
        if (!quiet) {
          logger.error(
            `Aborting: ${MAX_CONSECUTIVE_FAILURES} consecutive failures detected. ` +
            'This may indicate an authentication or network issue.'
          )
        }
        break
      }
    }

    // Rate-limit delay between requests (skip after last request)
    if (delay > 0 && i < entries.length - 1) {
      await sleep(delay)
    }
  }

  const durationMs = Date.now() - startTime

  return {
    extracted,
    skipped,
    failed,
    total,
    outputDir,
    failures,
    durationMs,
  }
}

// ─── Display ────────────────────────────────────────────────────────────────

function displaySummary(summary: BatchSummary): void {
  logger.info('')
  logger.info('='.repeat(60))
  logger.info('  Batch Extraction Summary')
  logger.info('='.repeat(60))
  logger.info('')
  logger.stats(`Total in queue:  ${summary.total}`)
  logger.success(`Extracted:       ${summary.extracted}`)
  if (summary.skipped > 0) {
    logger.info(`  Skipped:         ${summary.skipped} (already exist)`)
  }
  if (summary.failed > 0) {
    logger.error(`Failed:          ${summary.failed}`)
    logger.info('')
    logger.info('  Failed pages:')
    for (const f of summary.failures) {
      logger.info(`    ${f.slug} (${f.germanId}): ${f.error}`)
    }
  }
  logger.info('')
  logger.stats(`Output directory: ${summary.outputDir}`)
  logger.stats(`Duration:         ${(summary.durationMs / 1000).toFixed(1)}s`)
  logger.info('')
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const { limit, outputDir, delay, force, queuePath, json } = parseArgs()

  if (!json) {
    logger.enableTimestamps()
    logger.info('')
    logger.info('='.repeat(60))
    logger.info('  Batch Extraction Pipeline')
    logger.info('='.repeat(60))
    logger.info('')

    if (force) {
      logger.warn('Force mode enabled — will re-extract existing files')
    }
    if (limit) {
      logger.info(`  Limit: ${limit} pages`)
    }
    logger.info(`  Delay: ${delay}ms between requests`)
    logger.info(`  Output: ${outputDir}`)
    logger.info('')
  }

  const summary = await runBatchExtraction({
    limit,
    outputDir,
    delay,
    force,
    queuePath,
    quiet: json,
  })

  if (json) {
    process.stdout.write(JSON.stringify(summary, null, 2) + '\n')
  } else {
    displaySummary(summary)
  }

  // Exit with error code if there were failures
  if (summary.failed > 0 && summary.extracted === 0) {
    process.exit(1)
  }
}

// Only run CLI entry point when executed directly (not when imported)
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((err) => {
    logger.error(`Fatal error: ${err instanceof Error ? err.message : String(err)}`)
    process.exit(1)
  })
}
