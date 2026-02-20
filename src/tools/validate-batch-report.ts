/**
 * Batch Validation Report Generator
 *
 * Generates a comprehensive markdown report showing translation pipeline
 * coverage and upload readiness across all translated pages. Combines
 * data from the translation queue, extracted pages, and validated translations.
 *
 * Usage:
 *   npx tsx src/tools/validate-batch-report.ts
 *   npx tsx src/tools/validate-batch-report.ts --output report.md
 *   npx tsx src/tools/validate-batch-report.ts --translated-dir src/data/translated
 *   npx tsx src/tools/validate-batch-report.ts --json
 *   npx tsx src/tools/validate-batch-report.ts --extracted-dir src/data/extracted --output report.md
 *
 * Exit codes:
 *   0 — report generated successfully
 *   1 — error occurred
 *
 * Exported for module use:
 *   import { generateValidationReport } from './validate-batch-report.js'
 */

import { readFile, writeFile, readdir } from 'node:fs/promises'
import { resolve, extname, basename, join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { logger } from '../lib/logger.js'
import { validateTranslationDirectory, type DirectoryTranslationReport } from './validate-translation.js'

// ─── Types ──────────────────────────────────────────────────────────────────

/** Options for report generation. */
export interface ReportOptions {
  /** Directory containing translated *-en.json files. */
  translatedDir?: string
  /** Directory containing German extracted .json files (for cross-validation). */
  extractedDir?: string
  /** Path to the translation queue JSON file. */
  queuePath?: string
  /** Write report to this file path. */
  outputPath?: string
  /** Output raw data as JSON instead of markdown. */
  json?: boolean
}

/** Structured report data (used for JSON output). */
interface ReportData {
  timestamp: string
  pipeline: {
    totalInQueue: number
    extracted: number
    translated: number
    valid: number
    uploadReady: number
  }
  pipelinePercentages: {
    extracted: string
    translated: string
    valid: string
    uploadReady: string
  }
  validation: {
    averageScore: number
    pagesWithWarnings: number
    pagesWithGermanRemnants: number
    pagesWithForbiddenTerms: number
  }
  commonFailures: Array<{ rule: number; name: string; failCount: number }>
  invalidPages: Array<{
    page: string
    score: number
    failedRules: string[]
    issues: string[]
  }>
  pagesWithWarnings: Array<{
    page: string
    warnings: string[]
  }>
}

// ─── Defaults ───────────────────────────────────────────────────────────────

const DEFAULT_TRANSLATED_DIR = 'src/data/translated'
const DEFAULT_EXTRACTED_DIR = 'src/data/extracted'
const DEFAULT_QUEUE_PATH = 'src/data/translation-queue.json'

// ─── Report Generation ──────────────────────────────────────────────────────

/**
 * Generates a validation report for the translation pipeline.
 *
 * 1. Loads translation-queue.json for total page count
 * 2. Scans extracted/ for extracted page count
 * 3. Scans translated/ for translated page count
 * 4. Runs validateTranslationDirectory() on all translated files
 * 5. Produces a markdown report or JSON data
 *
 * @param options - Report generation options
 * @returns Markdown report string (or JSON string if options.json)
 */
export async function generateValidationReport(options?: ReportOptions): Promise<string> {
  const translatedDir = resolve(options?.translatedDir ?? DEFAULT_TRANSLATED_DIR)
  const extractedDir = resolve(options?.extractedDir ?? DEFAULT_EXTRACTED_DIR)
  const queuePath = resolve(options?.queuePath ?? DEFAULT_QUEUE_PATH)

  // ── 1. Load translation queue ──
  let totalInQueue = 0
  try {
    const queueContent = await readFile(queuePath, 'utf-8')
    const queue = JSON.parse(queueContent) as { summary?: { totalPages?: number } }
    totalInQueue = queue.summary?.totalPages ?? 0
  } catch {
    logger.warn(`Could not load translation queue at ${queuePath}, using 0`)
  }

  // ── 2. Count extracted pages ──
  let extractedCount = 0
  try {
    const extractedEntries = await readdir(extractedDir)
    extractedCount = extractedEntries.filter(
      (f) => extname(f) === '.json',
    ).length
  } catch {
    logger.warn(`Could not scan extracted dir at ${extractedDir}`)
  }

  // ── 3. Count translated pages ──
  let translatedCount = 0
  try {
    const translatedEntries = await readdir(translatedDir)
    translatedCount = translatedEntries.filter(
      (f) => extname(f) === '.json' && f.endsWith('-en.json'),
    ).length
  } catch {
    logger.warn(`Could not scan translated dir at ${translatedDir}`)
  }

  // ── 4. Run validation ──
  let report: DirectoryTranslationReport | null = null
  try {
    if (translatedCount > 0) {
      report = await validateTranslationDirectory(translatedDir, extractedDir)
    }
  } catch (err) {
    logger.warn(`Validation error: ${err instanceof Error ? err.message : String(err)}`)
  }

  // ── 5. Build report data ──
  const validCount = report?.validCount ?? 0
  // Upload-ready = valid (11/11 score)
  const uploadReady = validCount

  const pct = (n: number, total: number): string => {
    if (total === 0) return '0%'
    return `${Math.round((n / total) * 100)}%`
  }

  const pagesWithWarnings = report?.fileResults.filter(
    (r) => r.result.warnings.length > 0,
  ).length ?? 0

  const pagesWithGermanRemnants = report?.fileResults.filter(
    (r) =>
      r.result.qualityChecks.germanWordsFound.length > 0 ||
      r.result.qualityChecks.domainTermsUntranslated.length > 0,
  ).length ?? 0

  const pagesWithForbiddenTerms = report?.fileResults.filter(
    (r) => r.result.qualityChecks.forbiddenTermsFound.length > 0,
  ).length ?? 0

  const invalidPages = (report?.fileResults ?? [])
    .filter((r) => !r.result.valid)
    .map((r) => ({
      page: r.file,
      score: r.result.score,
      failedRules: r.result.ruleResults
        .filter((rr) => !rr.passed)
        .map((rr) => `R${rr.rule}: ${rr.name}`),
      issues: r.result.ruleResults
        .filter((rr) => !rr.passed && rr.details)
        .map((rr) => rr.details as string),
    }))

  const warningPages = (report?.fileResults ?? [])
    .filter((r) => r.result.warnings.length > 0)
    .map((r) => ({
      page: r.file,
      warnings: r.result.warnings,
    }))

  const reportData: ReportData = {
    timestamp: new Date().toISOString(),
    pipeline: {
      totalInQueue: totalInQueue,
      extracted: extractedCount,
      translated: translatedCount,
      valid: validCount,
      uploadReady,
    },
    pipelinePercentages: {
      extracted: pct(extractedCount, totalInQueue),
      translated: pct(translatedCount, totalInQueue),
      valid: pct(validCount, totalInQueue),
      uploadReady: pct(uploadReady, totalInQueue),
    },
    validation: {
      averageScore: report?.averageScore ?? 0,
      pagesWithWarnings,
      pagesWithGermanRemnants,
      pagesWithForbiddenTerms,
    },
    commonFailures: report?.commonFailures ?? [],
    invalidPages,
    pagesWithWarnings: warningPages,
  }

  // ── 6. Generate output ──
  if (options?.json) {
    return JSON.stringify(reportData, null, 2)
  }

  return generateMarkdown(reportData)
}

// ─── Markdown Generation ────────────────────────────────────────────────────

function generateMarkdown(data: ReportData): string {
  const lines: string[] = []

  lines.push('# Translation Validation Report')
  lines.push('')
  lines.push(`Generated: ${data.timestamp}`)
  lines.push('')

  // Pipeline Coverage
  lines.push('## Pipeline Coverage')
  lines.push('')
  lines.push('| Stage | Count | % of Total |')
  lines.push('|-------|-------|------------|')
  lines.push(`| Total in queue | ${data.pipeline.totalInQueue} | 100% |`)
  lines.push(`| Extracted | ${data.pipeline.extracted} | ${data.pipelinePercentages.extracted} |`)
  lines.push(`| Translated | ${data.pipeline.translated} | ${data.pipelinePercentages.translated} |`)
  lines.push(`| Valid (11/11) | ${data.pipeline.valid} | ${data.pipelinePercentages.valid} |`)
  lines.push(`| Upload-ready | ${data.pipeline.uploadReady} | ${data.pipelinePercentages.uploadReady} |`)
  lines.push('')

  // Validation Summary
  lines.push('## Validation Summary')
  lines.push('')
  lines.push(`- Average score: ${data.validation.averageScore}/11`)
  lines.push(`- Pages with warnings: ${data.validation.pagesWithWarnings}`)
  lines.push(`- Pages with German remnants: ${data.validation.pagesWithGermanRemnants}`)
  lines.push(`- Pages with forbidden terms: ${data.validation.pagesWithForbiddenTerms}`)
  lines.push('')

  // Common Failures
  if (data.commonFailures.length > 0) {
    lines.push('## Common Failures')
    lines.push('')
    lines.push('| Rule | Name | Fail Count |')
    lines.push('|------|------|------------|')
    for (const f of data.commonFailures) {
      lines.push(`| R${f.rule} | ${f.name} | ${f.failCount} |`)
    }
    lines.push('')
  }

  // Invalid Pages
  if (data.invalidPages.length > 0) {
    lines.push('## Invalid Pages (Require Attention)')
    lines.push('')
    lines.push('| Page | Score | Failed Rules | Issues |')
    lines.push('|------|-------|-------------|--------|')
    for (const p of data.invalidPages) {
      const failedStr = p.failedRules.map((r) => r.split(':')[0]).join(', ')
      const issueStr = p.issues.length > 0
        ? p.issues[0].slice(0, 80) + (p.issues.length > 1 ? ` (+${p.issues.length - 1} more)` : '')
        : '-'
      lines.push(`| ${p.page} | ${p.score}/11 | ${failedStr} | ${issueStr} |`)
    }
    lines.push('')
  } else {
    lines.push('## Invalid Pages (Require Attention)')
    lines.push('')
    lines.push('None — all translated pages pass validation.')
    lines.push('')
  }

  // Pages with Warnings
  if (data.pagesWithWarnings.length > 0) {
    lines.push('## Pages with Warnings')
    lines.push('')
    lines.push('| Page | Warnings |')
    lines.push('|------|----------|')
    for (const p of data.pagesWithWarnings) {
      const warnStr = p.warnings.length <= 2
        ? p.warnings.join('; ')
        : `${p.warnings[0]}; ${p.warnings[1]} (+${p.warnings.length - 2} more)`
      lines.push(`| ${p.page} | ${warnStr} |`)
    }
    lines.push('')
  } else {
    lines.push('## Pages with Warnings')
    lines.push('')
    lines.push('None — no warnings detected.')
    lines.push('')
  }

  return lines.join('\n')
}

// ─── CLI Argument Parsing ───────────────────────────────────────────────────

interface CliArgs {
  translatedDir: string | null
  extractedDir: string | null
  queue: string | null
  output: string | null
  json: boolean
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2)
  let translatedDir: string | null = null
  let extractedDir: string | null = null
  let queue: string | null = null
  let output: string | null = null
  let json = false

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--translated-dir':
        if (i + 1 < args.length) translatedDir = args[++i]
        break
      case '--extracted-dir':
        if (i + 1 < args.length) extractedDir = args[++i]
        break
      case '--queue':
        if (i + 1 < args.length) queue = args[++i]
        break
      case '--output':
        if (i + 1 < args.length) output = args[++i]
        break
      case '--json':
        json = true
        break
    }
  }

  return { translatedDir, extractedDir, queue, output, json }
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const { translatedDir, extractedDir, queue, output, json } = parseArgs()

  logger.info('📋 Generating translation validation report...')

  const options: ReportOptions = {
    translatedDir: translatedDir ?? undefined,
    extractedDir: extractedDir ?? undefined,
    queuePath: queue ?? undefined,
    outputPath: output ?? undefined,
    json,
  }

  const report = await generateValidationReport(options)

  if (output) {
    const absOutput = resolve(output)
    await writeFile(absOutput, report + '\n', 'utf-8')
    logger.success(`Report written to ${absOutput}`)
  } else {
    process.stdout.write(report + '\n')
  }
}

// Only run CLI entry point when executed directly (not when imported)
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((err) => {
    logger.error(`Fatal error: ${err instanceof Error ? err.message : String(err)}`)
    process.exit(1)
  })
}
