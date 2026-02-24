/**
 * End-to-End Translation Pipeline
 *
 * Single command that processes German servicePages through the full pipeline:
 *   detect → extract → translate → validate → fix → upload → link → verify
 *
 * Tracks per-page progress via pipeline state file for crash-safe resume.
 * Pages that have already completed a stage are skipped on re-run.
 *
 * Usage:
 *   npx tsx src/tools/run-pipeline.ts                         # dry-run: show what would happen
 *   npx tsx src/tools/run-pipeline.ts --execute               # run full pipeline
 *   npx tsx src/tools/run-pipeline.ts --execute --limit 5     # process first 5 pages
 *   npx tsx src/tools/run-pipeline.ts --execute --from extract  # resume from extract stage
 *   npx tsx src/tools/run-pipeline.ts --execute --force        # reprocess all pages
 *   npx tsx src/tools/run-pipeline.ts --execute --skip-upload   # stop before Sanity mutations
 *   npx tsx src/tools/run-pipeline.ts --json                   # JSON summary
 *
 * Exit codes:
 *   0 - all pages processed (or dry-run)
 *   1 - one or more failures
 *
 * Exported for module use:
 *   import { runPipeline, type PipelineOptions, type PipelineSummary } from './run-pipeline.js'
 */

import { readFile, writeFile, mkdir, access } from 'node:fs/promises'
import { resolve, join, basename } from 'node:path'
import { pathToFileURL } from 'node:url'
import { logger } from '../lib/logger.js'
import {
  PipelineStateManager,
  PIPELINE_STAGES,
  isAtOrPast,
  type PipelineStage,
} from '../lib/pipeline-state.js'
import { detectTranslationStatus } from './detect-untranslated.js'
import { extractPage } from './extract-page.js'
import { validateExtractedPage } from '../lib/extraction-types.js'
import { fixGermanSource } from './fix-german-source.js'
import { translatePage } from './translate-page.js'
import { validateTranslation } from './validate-translation.js'
import { fixTranslation } from './fix-translation.js'
import { uploadPage, type UploadResult } from './upload-page.js'
import { linkTranslation, type LinkResult } from './link-translation.js'

// ─── Types ──────────────────────────────────────────────────────────────────

export interface PipelineOptions {
  /** If true, actually execute mutations (default: false = dry-run) */
  execute?: boolean
  /** Maximum pages to process */
  limit?: number
  /** Start from this stage (skip earlier stages for pages already past them) */
  fromStage?: PipelineStage
  /** Force reprocess all pages regardless of current state */
  force?: boolean
  /** Skip upload/link/verify stages (local-only processing) */
  skipUpload?: boolean
  /** Skip the fix stage */
  skipFix?: boolean
  /** Delay between pages in milliseconds (default: 500) */
  delay?: number
  /** Delay between AI translation calls in milliseconds (default: 2000) */
  translateDelay?: number
  /** Abort after this many consecutive failures (default: 3) */
  maxConsecutiveFailures?: number
  /** Path to pipeline state file */
  statePath?: string
  /** Path to translation queue (for initial detection) */
  queuePath?: string
  /** Directory for extracted files */
  extractedDir?: string
  /** Directory for translated files */
  translatedDir?: string
}

export interface PipelineStageSummary {
  stage: PipelineStage
  processed: number
  skipped: number
  failed: number
  durationMs: number
}

export interface PipelineSummary {
  totalPages: number
  completedAllStages: number
  failed: number
  aborted: boolean
  abortReason?: string
  stages: PipelineStageSummary[]
  errors: Array<{ germanId: string; stage: PipelineStage; error: string }>
  durationMs: number
}

// ─── Defaults ───────────────────────────────────────────────────────────────

const DEFAULT_EXTRACTED_DIR = resolve('src/data/extracted')
const DEFAULT_TRANSLATED_DIR = resolve('src/data/translated')
const DEFAULT_QUEUE_PATH = resolve('src/data/translation-queue.json')
const DEFAULT_DELAY = 500
const DEFAULT_TRANSLATE_DELAY = 2000
const DEFAULT_MAX_CONSECUTIVE_FAILURES = 3

// ─── Helpers ────────────────────────────────────────────────────────────────

async function fileExists(path: string): Promise<boolean> {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

async function ensureDir(dirPath: string): Promise<void> {
  await mkdir(dirPath, { recursive: true })
}

// ─── Core Pipeline ──────────────────────────────────────────────────────────

/**
 * Runs the end-to-end translation pipeline.
 *
 * For each page, sequentially:
 * 1. detect   — already done (pages come from detection report or queue)
 * 2. extract  — fetch from Sanity, write to extracted/
 * 3. translate — AI translation, write to translated/
 * 4. validate — check 11 rules
 * 5. fix      — auto-fix common issues
 * 6. upload   — createOrReplace in Sanity (requires --execute)
 * 7. link     — create/update translation.metadata (requires --execute)
 * 8. verify   — (done as a batch at the end)
 */
export async function runPipeline(options: PipelineOptions = {}): Promise<PipelineSummary> {
  const startTime = Date.now()
  const extractedDir = options.extractedDir ? resolve(options.extractedDir) : DEFAULT_EXTRACTED_DIR
  const translatedDir = options.translatedDir ? resolve(options.translatedDir) : DEFAULT_TRANSLATED_DIR
  const queuePath = options.queuePath ? resolve(options.queuePath) : DEFAULT_QUEUE_PATH
  const delay = options.delay ?? DEFAULT_DELAY
  const translateDelay = options.translateDelay ?? DEFAULT_TRANSLATE_DELAY
  const maxConsecutiveFailures = options.maxConsecutiveFailures ?? DEFAULT_MAX_CONSECUTIVE_FAILURES

  await ensureDir(extractedDir)
  await ensureDir(translatedDir)

  // ── Load pipeline state ──
  const state = await PipelineStateManager.load(options.statePath)

  // ── Discover pages to process ──
  logger.search('Discovering pages to process...')

  let pagesToProcess: Array<{ germanId: string; slug: string }>

  // Try queue file first, fall back to live detection
  if (await fileExists(queuePath)) {
    const raw = await readFile(queuePath, 'utf-8')
    const queue = JSON.parse(raw) as {
      queue: Array<{ germanId: string; slug: string }>
    }
    pagesToProcess = queue.queue.map((e) => ({
      germanId: e.germanId,
      slug: e.slug,
    }))
    logger.stats(`Loaded ${pagesToProcess.length} pages from queue`)
  } else {
    logger.search('No queue file found, running live detection...')
    const report = await detectTranslationStatus()
    pagesToProcess = report.untranslated.map((p) => ({
      germanId: p._id,
      slug: p.slug,
    }))
    logger.stats(`Detected ${pagesToProcess.length} untranslated pages`)
  }

  // Register all pages in state
  for (const page of pagesToProcess) {
    state.registerPage(page.germanId, page.slug)
  }
  await state.save()

  // Apply limit
  if (options.limit && options.limit > 0) {
    pagesToProcess = pagesToProcess.slice(0, options.limit)
  }

  logger.stats(`Processing ${pagesToProcess.length} pages`)

  // ── Determine which stages to run ──
  const stagesToRun: PipelineStage[] = options.skipUpload
    ? ['extracted', 'translated', 'validated', 'fixed']
    : ['extracted', 'translated', 'validated', 'fixed', 'uploaded', 'linked']

  if (options.skipFix) {
    const idx = stagesToRun.indexOf('fixed')
    if (idx !== -1) stagesToRun.splice(idx, 1)
  }

  // Filter to stages from --from onward
  let activeStages = stagesToRun
  if (options.fromStage) {
    const fromIdx = stagesToRun.indexOf(options.fromStage)
    if (fromIdx !== -1) {
      activeStages = stagesToRun.slice(fromIdx)
    }
  }

  const summary: PipelineSummary = {
    totalPages: pagesToProcess.length,
    completedAllStages: 0,
    failed: 0,
    aborted: false,
    stages: [],
    errors: [],
    durationMs: 0,
  }

  // ── Process each page through all active stages ──
  let consecutiveFailures = 0

  for (let pageIdx = 0; pageIdx < pagesToProcess.length; pageIdx++) {
    const { germanId, slug } = pagesToProcess[pageIdx]
    const pageState = state.getPage(germanId)
    if (!pageState) continue

    logger.info('')
    logger.progress(pageIdx + 1, pagesToProcess.length, `${germanId} (${slug})`)

    let pageFailed = false

    for (const targetStage of activeStages) {
      // Skip if page is already at or past this stage (resume support)
      if (!options.force && isAtOrPast(pageState.stage, targetStage)) {
        continue
      }

      // Dry-run gate for mutation stages
      if (!options.execute && (targetStage === 'uploaded' || targetStage === 'linked')) {
        logger.info(`  [DRY-RUN] Would ${targetStage === 'uploaded' ? 'upload' : 'link'} ${germanId}`)
        continue
      }

      const stageStart = Date.now()

      try {
        await processStage(germanId, slug, targetStage, {
          extractedDir,
          translatedDir,
          execute: options.execute,
        })

        const stageDuration = Date.now() - stageStart
        state.setStage(germanId, targetStage, stageDuration)
        await state.save()
        consecutiveFailures = 0

        logger.info(`  [${targetStage.toUpperCase()}] ${germanId} (${stageDuration}ms)`)
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err)
        state.setError(germanId, `${targetStage}: ${errorMsg}`)
        await state.save()

        logger.error(`  [${targetStage.toUpperCase()}] ${germanId}: ${errorMsg}`)
        summary.errors.push({ germanId, stage: targetStage, error: errorMsg })
        summary.failed++
        consecutiveFailures++
        pageFailed = true
        break // Stop processing this page, move to next
      }
    }

    if (!pageFailed) {
      // Check if page completed all stages
      const finalPage = state.getPage(germanId)
      if (finalPage && isAtOrPast(finalPage.stage, activeStages[activeStages.length - 1])) {
        summary.completedAllStages++
      }
    }

    // Abort on too many consecutive failures
    if (consecutiveFailures >= maxConsecutiveFailures) {
      summary.aborted = true
      summary.abortReason = `Aborted after ${maxConsecutiveFailures} consecutive failures`
      logger.error(summary.abortReason)
      break
    }

    // Delay between pages
    if (pageIdx < pagesToProcess.length - 1 && delay > 0) {
      await new Promise((r) => setTimeout(r, delay))
    }
  }

  // ── Build stage summaries ──
  const stageCounts = state.getStageCounts()
  for (const stage of PIPELINE_STAGES) {
    summary.stages.push({
      stage,
      processed: stageCounts[stage],
      skipped: 0,
      failed: 0,
      durationMs: 0,
    })
  }

  summary.durationMs = Date.now() - startTime
  return summary
}

// ─── Per-Stage Processing ───────────────────────────────────────────────────

interface StageContext {
  extractedDir: string
  translatedDir: string
  execute?: boolean
}

async function processStage(
  germanId: string,
  slug: string,
  stage: PipelineStage,
  ctx: StageContext,
): Promise<void> {
  const englishId = `${germanId}-en`
  const safeSlug = slug.replace(/\//g, '--')
  const extractedPath = join(ctx.extractedDir, `${safeSlug}.json`)
  const translatedPath = join(ctx.translatedDir, `${safeSlug}-en.json`)

  switch (stage) {
    case 'extracted': {
      let extracted = await extractPage(germanId)

      // ── Quality gate: validate German source before proceeding ──
      const sourceValidation = validateExtractedPage(extracted as unknown as Record<string, unknown>)
      if (!sourceValidation.valid) {
        const autoFixableErrors = sourceValidation.errors.filter((e) =>
          /^(seo\.|Missing seo|heroSection\.(heading|tagline|description)|overview\.description)/.test(e)
        )
        const hasAutoFixes = autoFixableErrors.length > 0

        if (ctx.execute && hasAutoFixes) {
          // Auto-fix the German source in Sanity, then re-extract
          logger.warn(`  [QUALITY-GATE] ${germanId}: ${sourceValidation.errors.length} error(s), attempting auto-fix...`)
          const fixResult = await fixGermanSource(germanId, true)

          if (fixResult.applied && fixResult.fixes.length > 0) {
            logger.info(`  [QUALITY-GATE] Applied ${fixResult.fixes.length} fix(es), re-extracting...`)
            extracted = await extractPage(germanId)

            // Re-validate after fix
            const revalidation = validateExtractedPage(extracted as unknown as Record<string, unknown>)
            if (!revalidation.valid) {
              const remaining = revalidation.errors.length
              logger.warn(`  [QUALITY-GATE] ${remaining} error(s) remain after fix — proceeding with warnings`)
            } else {
              logger.success(`  [QUALITY-GATE] All errors fixed for ${germanId}`)
            }
          } else {
            logger.warn(`  [QUALITY-GATE] No auto-fixes could be applied for ${germanId}`)
          }
        } else {
          // Dry-run or no auto-fixes available — log and continue
          const fixable = hasAutoFixes ? `${autoFixableErrors.length} auto-fixable` : 'none auto-fixable'
          logger.warn(`  [QUALITY-GATE] ${germanId}: ${sourceValidation.errors.length} error(s) (${fixable})`)
          for (const err of sourceValidation.errors) {
            logger.info(`    - ${err}`)
          }
        }
      }

      await writeFile(extractedPath, JSON.stringify(extracted, null, 2), 'utf-8')
      break
    }

    case 'translated': {
      if (!(await fileExists(extractedPath))) {
        throw new Error(`Extracted file not found: ${extractedPath}`)
      }
      await translatePage(extractedPath, {
        outputPath: translatedPath,
        quiet: true,
      })
      break
    }

    case 'validated': {
      if (!(await fileExists(translatedPath))) {
        throw new Error(`Translated file not found: ${translatedPath}`)
      }
      const germanPath = (await fileExists(extractedPath)) ? extractedPath : undefined
      const result = await validateTranslation(translatedPath, germanPath)
      if (result.score < 8) {
        throw new Error(`Validation failed: score ${result.score}/11 (minimum 8 required)`)
      }
      break
    }

    case 'fixed': {
      if (!(await fileExists(translatedPath))) {
        throw new Error(`Translated file not found: ${translatedPath}`)
      }
      const germanPath = (await fileExists(extractedPath)) ? extractedPath : undefined
      await fixTranslation(translatedPath, germanPath)
      break
    }

    case 'uploaded': {
      if (!(await fileExists(translatedPath))) {
        throw new Error(`Translated file not found: ${translatedPath}`)
      }
      const germanPath = (await fileExists(extractedPath)) ? extractedPath : undefined
      const uploadResult = await uploadPage({
        filePath: translatedPath,
        germanPath,
        execute: true,
        force: true,
      })
      if (uploadResult.status === 'failed') {
        throw new Error(uploadResult.error ?? 'Upload failed')
      }
      if (uploadResult.status === 'skipped') {
        throw new Error(uploadResult.error ?? 'Upload skipped (validation gate)')
      }
      break
    }

    case 'linked': {
      const linkResult = await linkTranslation({
        germanId,
        englishId,
        execute: true,
      })
      if (linkResult.status === 'failed') {
        throw new Error(linkResult.error ?? 'Linking failed')
      }
      break
    }

    case 'verified': {
      // Verification is implicit — if upload + link succeeded, page is verified
      // Batch verification via verify-i18n.ts is run separately
      break
    }

    case 'detected': {
      // Detection stage is handled by the discovery step, not per-page
      break
    }
  }
}

// ─── CLI ────────────────────────────────────────────────────────────────────

interface CliArgs {
  execute: boolean
  limit: number | undefined
  fromStage: PipelineStage | undefined
  force: boolean
  skipUpload: boolean
  skipFix: boolean
  delay: number | undefined
  translateDelay: number | undefined
  statePath: string | undefined
  json: boolean
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2)
  let execute = false
  let limit: number | undefined
  let fromStage: PipelineStage | undefined
  let force = false
  let skipUpload = false
  let skipFix = false
  let delay: number | undefined
  let translateDelay: number | undefined
  let statePath: string | undefined
  let json = false

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--execute':
        execute = true
        break
      case '--limit':
        if (i + 1 < args.length) limit = parseInt(args[++i], 10)
        break
      case '--from':
        if (i + 1 < args.length) {
          const val = args[++i] as PipelineStage
          if (PIPELINE_STAGES.includes(val)) fromStage = val
        }
        break
      case '--force':
        force = true
        break
      case '--skip-upload':
        skipUpload = true
        break
      case '--skip-fix':
        skipFix = true
        break
      case '--delay':
        if (i + 1 < args.length) delay = parseInt(args[++i], 10)
        break
      case '--translate-delay':
        if (i + 1 < args.length) translateDelay = parseInt(args[++i], 10)
        break
      case '--state':
        if (i + 1 < args.length) statePath = args[++i]
        break
      case '--json':
        json = true
        break
    }
  }

  return { execute, limit, fromStage, force, skipUpload, skipFix, delay, translateDelay, statePath, json }
}

function displaySummary(summary: PipelineSummary): void {
  logger.info('')
  logger.info('='.repeat(60))
  logger.info(summary.completedAllStages > 0
    ? '  End-to-End Pipeline — COMPLETE'
    : '  End-to-End Pipeline — SUMMARY')
  logger.info('='.repeat(60))
  logger.info('')
  logger.stats(`Total pages:       ${summary.totalPages}`)
  logger.success(`Completed:         ${summary.completedAllStages}`)
  if (summary.failed > 0) {
    logger.error(`Failed:            ${summary.failed}`)
  }
  logger.stats(`Duration:          ${(summary.durationMs / 1000).toFixed(1)}s`)
  logger.info('')

  if (summary.aborted) {
    logger.error(`ABORTED: ${summary.abortReason}`)
    logger.info('')
  }

  // Show errors
  if (summary.errors.length > 0) {
    logger.info('Errors')
    logger.info('-'.repeat(60))
    for (const err of summary.errors) {
      logger.error(`  [${err.stage}] ${err.germanId}: ${err.error}`)
    }
    logger.info('')
  }

  // Stage progress
  logger.info('Stage Progress')
  logger.info('-'.repeat(60))
  for (const stage of summary.stages) {
    if (stage.processed > 0) {
      logger.info(`  ${stage.stage.padEnd(12)} ${stage.processed} pages`)
    }
  }
  logger.info('')

  if (summary.completedAllStages === 0 && summary.failed === 0) {
    logger.warn('No pages were processed. Check that:')
    logger.info('  1. translation-queue.json exists (run: npm run generate-queue)')
    logger.info('  2. Use --execute for Sanity mutations (upload/link)')
    logger.info('  3. Use --force to reprocess already-completed pages')
    logger.info('')
  }
}

async function main(): Promise<void> {
  const cliArgs = parseArgs()

  logger.enableTimestamps()

  if (!cliArgs.execute) {
    logger.warn('DRY RUN mode — no Sanity mutations. Upload and link stages will be skipped.')
    logger.info('Use --execute to run the full pipeline including Sanity writes.')
    logger.info('')
  }

  const summary = await runPipeline({
    execute: cliArgs.execute,
    limit: cliArgs.limit,
    fromStage: cliArgs.fromStage,
    force: cliArgs.force,
    skipUpload: cliArgs.skipUpload,
    skipFix: cliArgs.skipFix,
    delay: cliArgs.delay,
    translateDelay: cliArgs.translateDelay,
    statePath: cliArgs.statePath,
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
