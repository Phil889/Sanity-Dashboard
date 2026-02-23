/**
 * Batch Translation Pipeline
 *
 * CLI tool that processes multiple extracted German servicePages through
 * the AI translation engine, with rate limiting, cost tracking, resume
 * support (skip-existing), and progress reporting. Mirrors the pattern
 * of `extract-batch.ts` (Phase 5) but for translation.
 *
 * Usage:
 *   npx tsx src/tools/translate-batch.ts --limit 5          # translate first 5 pages
 *   npx tsx src/tools/translate-batch.ts                     # translate all pages
 *   npx tsx src/tools/translate-batch.ts --force             # re-translate even if output exists
 *   npx tsx src/tools/translate-batch.ts --delay 3000        # 3s between API calls
 *   npx tsx src/tools/translate-batch.ts --json              # JSON summary to stdout
 *
 * CLI flags:
 *   --limit <N>             Translate at most N pages (default: all)
 *   --force                 Re-translate even if output file already exists
 *   --delay <ms>            Delay between API calls in ms (default: 2000)
 *   --output-dir <path>     Output directory (default: src/data/translated)
 *   --extracted-dir <path>  Extracted files directory (default: src/data/extracted)
 *   --queue <path>          Path to translation queue JSON (default: src/data/translation-queue.json)
 *   --json                  Output summary as JSON to stdout
 *
 * Exported for module use:
 *   import { runBatchTranslation, type BatchTranslationSummary } from './translate-batch.js'
 */

import { readFile, writeFile, mkdir, access } from 'node:fs/promises'
import { resolve, join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { translatePage } from './translate-page.js'
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
  slug: string
  error: string
}

/** Summary of a batch translation run. */
export interface BatchTranslationSummary {
  translated: number
  skipped: number
  failed: number
  total: number
  totalInputTokens: number
  totalOutputTokens: number
  estimatedCostUsd: number
  outputDir: string
  failures: FailedPage[]
  durationMs: number
}

/** Options for the batch translation function. */
export interface BatchTranslationOptions {
  /** Max pages to translate (for testing). */
  limit?: number | null
  /** Re-translate even if output exists. */
  force?: boolean
  /** Delay between API calls in ms (default: 2000). */
  delay?: number
  /** Abort threshold for consecutive failures (default: 3). */
  maxConsecutiveFailures?: number
  /** Override output directory. */
  outputDir?: string
  /** Override extracted files directory. */
  extractedDir?: string
  /** Override queue file path. */
  queuePath?: string
  /** Output summary as JSON (suppresses progress logging). */
  jsonOutput?: boolean
}

// ─── CLI Argument Parsing ───────────────────────────────────────────────────

interface CliArgs {
  limit: number | null
  force: boolean
  delay: number
  outputDir: string
  extractedDir: string
  queuePath: string
  json: boolean
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2)
  let limit: number | null = null
  let force = false
  let delay = 2000
  let outputDir = resolve('src/data/translated')
  let extractedDir = resolve('src/data/extracted')
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
    } else if (args[i] === '--force') {
      force = true
    } else if (args[i] === '--delay' && i + 1 < args.length) {
      delay = parseInt(args[i + 1], 10)
      if (isNaN(delay) || delay < 0) {
        logger.error('--delay must be a non-negative integer')
        process.exit(1)
      }
      i++
    } else if (args[i] === '--output-dir' && i + 1 < args.length) {
      outputDir = resolve(args[i + 1])
      i++
    } else if (args[i] === '--extracted-dir' && i + 1 < args.length) {
      extractedDir = resolve(args[i + 1])
      i++
    } else if (args[i] === '--queue' && i + 1 < args.length) {
      queuePath = resolve(args[i + 1])
      i++
    } else if (args[i] === '--json') {
      json = true
    }
  }

  return { limit, force, delay, outputDir, extractedDir, queuePath, json }
}

// ─── Helpers ────────────────────────────────────────────────────────────────

/**
 * Derives a flat output filename from a page slug.
 * Replaces `/` with `--` to create filesystem-safe names while preserving
 * hierarchy information.
 *
 * Examples:
 *   "ai-governance" -> "ai-governance-en.json"
 *   "informationssicherheit/kritis/meldepflichten" -> "informationssicherheit--kritis--meldepflichten-en.json"
 */
function slugToTranslatedFilename(slug: string): string {
  return slug.replace(/\//g, '--') + '-en.json'
}

/**
 * Derives the extracted filename from a page slug (same convention as extract-batch).
 */
function slugToExtractedFilename(slug: string): string {
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

// ─── Cost Estimation ────────────────────────────────────────────────────────

/** Approximate cost per million tokens for Claude Sonnet 4.5 (as of 2025). */
const COST_PER_MILLION_INPUT = 3.0
const COST_PER_MILLION_OUTPUT = 15.0

function calculateCost(inputTokens: number, outputTokens: number): number {
  const inputCost = (inputTokens / 1_000_000) * COST_PER_MILLION_INPUT
  const outputCost = (outputTokens / 1_000_000) * COST_PER_MILLION_OUTPUT
  return inputCost + outputCost
}

function formatCost(costUsd: number): string {
  return `$${costUsd.toFixed(4)}`
}

// ─── Core Batch Translation ─────────────────────────────────────────────────

/** Default maximum consecutive failures before aborting. */
const DEFAULT_MAX_CONSECUTIVE_FAILURES = 3

/**
 * Runs batch translation on the translation queue.
 *
 * For each queue entry:
 * 1. Check if translated output already exists (skip if not --force)
 * 2. Check if extracted input exists (skip with warning if not)
 * 3. Call translatePage() with the extracted input
 * 4. Write output to the translated directory
 * 5. Track token usage and costs
 * 6. Wait --delay ms before next request
 *
 * Aborts after N consecutive failures (default 3) to avoid burning API credits
 * on systemic issues (auth errors, rate limits, etc.).
 *
 * @param options - Batch translation configuration
 * @returns Summary of the translation run
 */
export async function runBatchTranslation(
  options: BatchTranslationOptions = {},
): Promise<BatchTranslationSummary> {
  const {
    limit = null,
    force = false,
    delay = 2000,
    maxConsecutiveFailures = DEFAULT_MAX_CONSECUTIVE_FAILURES,
    outputDir = resolve('src/data/translated'),
    extractedDir = resolve('src/data/extracted'),
    queuePath = resolve('src/data/translation-queue.json'),
    jsonOutput = false,
  } = options

  const quiet = jsonOutput
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
  let translated = 0
  let skipped = 0
  let failed = 0
  let consecutiveFailures = 0
  let totalInputTokens = 0
  let totalOutputTokens = 0
  const failures: FailedPage[] = []

  // Process each queue entry sequentially
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i]
    const translatedFilename = slugToTranslatedFilename(entry.slug)
    const extractedFilename = slugToExtractedFilename(entry.slug)
    const outputPath = join(outputDir, translatedFilename)
    const inputPath = join(extractedDir, extractedFilename)

    // Check if already translated (skip-existing)
    if (!force && await fileExists(outputPath)) {
      skipped++
      if (!quiet) {
        logger.progress(i + 1, total, `Skipped (exists): ${entry.slug}`)
      }
      consecutiveFailures = 0 // reset on any non-failure
      continue
    }

    // Check if extracted input exists
    if (!await fileExists(inputPath)) {
      skipped++
      if (!quiet) {
        logger.warn(`[${i + 1}/${total}] Skipped (no extracted input): ${entry.slug}`)
      }
      consecutiveFailures = 0 // not a failure, just missing input
      continue
    }

    // Translate the page
    try {
      const result = await translatePage(inputPath, {
        outputPath,
        quiet: true, // suppress per-page logging; batch handles progress
      })

      translated++
      consecutiveFailures = 0
      totalInputTokens += result.inputTokens
      totalOutputTokens += result.outputTokens

      const pageCost = calculateCost(result.inputTokens, result.outputTokens)
      const runningCost = calculateCost(totalInputTokens, totalOutputTokens)

      if (!quiet) {
        logger.progress(
          i + 1,
          total,
          `Translated: ${entry.slug} (${result.inputTokens}+${result.outputTokens} tokens, ${formatCost(pageCost)}) [running: ${formatCost(runningCost)}]`,
        )
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err)

      failed++
      consecutiveFailures++
      failures.push({
        slug: entry.slug,
        error: message,
      })

      if (!quiet) {
        logger.error(`[${i + 1}/${total}] Failed: ${entry.slug} — ${message}`)
      }

      // Abort early if too many consecutive failures (likely auth/network issue)
      if (consecutiveFailures >= maxConsecutiveFailures) {
        if (!quiet) {
          logger.error(
            `Aborting: ${maxConsecutiveFailures} consecutive failures detected. ` +
            'This may indicate an authentication, rate limit, or network issue.',
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
  const estimatedCostUsd = calculateCost(totalInputTokens, totalOutputTokens)

  return {
    translated,
    skipped,
    failed,
    total,
    totalInputTokens,
    totalOutputTokens,
    estimatedCostUsd,
    outputDir,
    failures,
    durationMs,
  }
}

// ─── Display ────────────────────────────────────────────────────────────────

function displaySummary(summary: BatchTranslationSummary): void {
  logger.info('')
  logger.info('='.repeat(60))
  logger.info('  Batch Translation Summary')
  logger.info('='.repeat(60))
  logger.info('')
  logger.stats(`Total in queue:    ${summary.total}`)
  logger.success(`Translated:        ${summary.translated}`)
  if (summary.skipped > 0) {
    logger.info(`  Skipped:           ${summary.skipped} (already exist or no input)`)
  }
  if (summary.failed > 0) {
    logger.error(`Failed:            ${summary.failed}`)
    logger.info('')
    logger.info('  Failed pages:')
    for (const f of summary.failures) {
      logger.info(`    ${f.slug}: ${f.error}`)
    }
  }
  logger.info('')
  logger.stats(`Input tokens:      ${summary.totalInputTokens.toLocaleString()}`)
  logger.stats(`Output tokens:     ${summary.totalOutputTokens.toLocaleString()}`)
  logger.stats(`Estimated cost:    ${formatCost(summary.estimatedCostUsd)}`)
  logger.stats(`Output directory:  ${summary.outputDir}`)
  logger.stats(`Duration:          ${(summary.durationMs / 1000).toFixed(1)}s`)
  logger.info('')
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const { limit, force, delay, outputDir, extractedDir, queuePath, json } = parseArgs()

  if (!json) {
    logger.enableTimestamps()
    logger.info('')
    logger.info('='.repeat(60))
    logger.info('  Batch Translation Pipeline')
    logger.info('='.repeat(60))
    logger.info('')

    if (force) {
      logger.warn('Force mode enabled — will re-translate existing files')
    }
    if (limit) {
      logger.info(`  Limit: ${limit} pages`)
    }
    logger.info(`  Delay: ${delay}ms between API calls`)
    logger.info(`  Output: ${outputDir}`)
    logger.info(`  Extracted: ${extractedDir}`)
    logger.info('')
  }

  const summary = await runBatchTranslation({
    limit,
    force,
    delay,
    outputDir,
    extractedDir,
    queuePath,
    jsonOutput: json,
  })

  if (json) {
    process.stdout.write(JSON.stringify(summary, null, 2) + '\n')
  } else {
    displaySummary(summary)
  }

  // Exit with error code if all attempts failed
  if (summary.failed > 0 && summary.translated === 0) {
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
