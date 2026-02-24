/**
 * German Source Page Audit Tool
 *
 * Batch audit that fetches ALL German servicePages from Sanity, validates each
 * with validateExtractedPage(), classifies errors as "auto-fixable" vs
 * "manual-fix", and produces a quality report with aggregate stats.
 *
 * Usage:
 *   npx tsx src/tools/audit-german-pages.ts                # full report to stdout
 *   npx tsx src/tools/audit-german-pages.ts --json          # JSON output
 *   npx tsx src/tools/audit-german-pages.ts --errors-only   # only pages with errors
 *   npx tsx src/tools/audit-german-pages.ts --limit 10      # audit first 10 pages
 *   npx tsx src/tools/audit-german-pages.ts --output audit.json  # write JSON report to file
 *
 * Exported for module use:
 *   import { auditGermanPages, type AuditReport } from './audit-german-pages.js'
 */

import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { sanityClient } from '../lib/sanity-client.js'
import { withRetry } from '../lib/errors.js'
import { validateSourceQuality, type ValidationResult } from '../lib/extraction-types.js'
import { logger } from '../lib/logger.js'

// ─── System fields to strip (same as extract-page.ts) ───────────────────────

const SYSTEM_FIELDS = [
  '_createdAt',
  '_updatedAt',
  '_rev',
  '__i18n_lang',
  '__i18n_refs',
  '__i18n_base',
  '_system',
] as const

// ─── GROQ Query ──────────────────────────────────────────────────────────────

const QUERY_ALL_GERMAN = `*[_type == "servicePage" && language == "de"] | order(slug.current asc)`

// ─── Auto-fixable error patterns ─────────────────────────────────────────────

/**
 * Errors matching these patterns can be auto-fixed by fix-german-source.ts.
 * The pattern is tested against the error string from validateExtractedPage().
 */
const AUTO_FIXABLE_PATTERNS: RegExp[] = [
  /^seo\.title is missing or empty$/,
  /^seo\.description is missing or empty$/,
  /^seo\.keywords is missing or empty$/,
  /^Missing seo$/,
  /^heroSection\.heading is missing or empty$/,
  /^heroSection\.tagline is missing or empty$/,
  /^heroSection\.description is missing or empty$/,
  /^overview\.heading is missing or empty$/,
  /^overview\.description is missing or empty$/,
]

function isAutoFixable(error: string): boolean {
  return AUTO_FIXABLE_PATTERNS.some((pattern) => pattern.test(error))
}

// ─── Types ───────────────────────────────────────────────────────────────────

export interface PageAuditResult {
  _id: string
  title: string
  slug: string
  validation: ValidationResult
  autoFixableErrors: string[]
  manualFixErrors: string[]
}

export interface AuditStats {
  totalPages: number
  validPages: number
  invalidPages: number
  totalErrors: number
  autoFixableCount: number
  manualFixCount: number
  errorBreakdown: Record<string, number>
  fieldCoverage: Record<string, { present: number; total: number; pct: string }>
}

export interface AuditReport {
  generatedAt: string
  stats: AuditStats
  pages: PageAuditResult[]
}

// ─── Core Audit Function ─────────────────────────────────────────────────────

export interface AuditOptions {
  /** Only include pages with errors */
  errorsOnly?: boolean
  /** Limit number of pages to audit */
  limit?: number
}

/**
 * Fetches all German servicePages from Sanity, validates each, and returns
 * a structured audit report with auto-fix classification and aggregate stats.
 */
export async function auditGermanPages(options: AuditOptions = {}): Promise<AuditReport> {
  // Fetch all German pages
  const docs = await withRetry<Record<string, unknown>[]>(
    () => sanityClient.fetch(QUERY_ALL_GERMAN),
    { maxRetries: 3, delayMs: 1000, backoffMultiplier: 2 },
  )

  let pages = docs
  if (options.limit && options.limit > 0) {
    pages = pages.slice(0, options.limit)
  }

  // Track field coverage across all pages
  const fieldPresence: Record<string, { present: number; total: number }> = {}
  const errorBreakdown: Record<string, number> = {}

  const results: PageAuditResult[] = []

  for (const doc of pages) {
    // Strip system fields (same as extract-page.ts)
    for (const field of SYSTEM_FIELDS) {
      delete doc[field]
    }

    const validation = validateSourceQuality(doc)

    // Classify errors
    const autoFixableErrors = validation.errors.filter(isAutoFixable)
    const manualFixErrors = validation.errors.filter((e) => !isAutoFixable(e))

    // Count error types
    for (const err of validation.errors) {
      errorBreakdown[err] = (errorBreakdown[err] ?? 0) + 1
    }

    // Track field coverage from key fields
    const slug = typeof doc.slug === 'object' && doc.slug !== null
      ? (doc.slug as Record<string, unknown>).current
      : undefined

    const result: PageAuditResult = {
      _id: String(doc._id ?? ''),
      title: String(doc.title ?? '(no title)'),
      slug: String(slug ?? '(no slug)'),
      validation,
      autoFixableErrors,
      manualFixErrors,
    }

    // Track key fields for coverage stats
    trackFieldPresence(fieldPresence, doc)

    if (options.errorsOnly && validation.valid) {
      continue
    }

    results.push(result)
  }

  // Build stats
  const validPages = pages.filter((doc) => {
    for (const field of SYSTEM_FIELDS) delete doc[field]
    return validateSourceQuality(doc).valid
  }).length

  const totalErrors = Object.values(errorBreakdown).reduce((a, b) => a + b, 0)
  const autoFixableCount = results.reduce((sum, r) => sum + r.autoFixableErrors.length, 0)
  const manualFixCount = results.reduce((sum, r) => sum + r.manualFixErrors.length, 0)

  // Build field coverage percentages
  const fieldCoverage: Record<string, { present: number; total: number; pct: string }> = {}
  for (const [field, counts] of Object.entries(fieldPresence)) {
    fieldCoverage[field] = {
      present: counts.present,
      total: counts.total,
      pct: counts.total > 0 ? ((counts.present / counts.total) * 100).toFixed(1) + '%' : '0%',
    }
  }

  return {
    generatedAt: new Date().toISOString(),
    stats: {
      totalPages: pages.length,
      validPages,
      invalidPages: pages.length - validPages,
      totalErrors,
      autoFixableCount,
      manualFixCount,
      errorBreakdown,
      fieldCoverage,
    },
    pages: results,
  }
}

// ─── Field Presence Tracking ─────────────────────────────────────────────────

function isObj(val: unknown): val is Record<string, unknown> {
  return typeof val === 'object' && val !== null && !Array.isArray(val)
}

function isStr(val: unknown): val is string {
  return typeof val === 'string' && val.length > 0
}

function isArr(val: unknown): val is unknown[] {
  return Array.isArray(val) && val.length > 0
}

function trackFieldPresence(
  tracker: Record<string, { present: number; total: number }>,
  doc: Record<string, unknown>,
): void {
  const hero = isObj(doc.heroSection) ? (doc.heroSection as Record<string, unknown>) : null
  const overview = isObj(doc.overview) ? (doc.overview as Record<string, unknown>) : null
  const seo = isObj(doc.seo) ? (doc.seo as Record<string, unknown>) : null
  const approach = isObj(doc.approach) ? (doc.approach as Record<string, unknown>) : null
  const testimonial = isObj(doc.testimonial) ? (doc.testimonial as Record<string, unknown>) : null
  const whyUs = overview && isObj(overview.whyUs) ? (overview.whyUs as Record<string, unknown>) : null
  const alert = overview && isObj(overview.alert) ? (overview.alert as Record<string, unknown>) : null

  const fields: Array<{ name: string; present: boolean }> = [
    // Top-level
    { name: 'title', present: isStr(doc.title) },
    // SEO
    { name: 'seo', present: seo !== null },
    { name: 'seo.title', present: seo !== null && isStr(seo.title) },
    { name: 'seo.description', present: seo !== null && isStr(seo.description) },
    { name: 'seo.keywords', present: seo !== null && isStr(seo.keywords) },
    // Hero Section
    { name: 'heroSection', present: hero !== null },
    { name: 'heroSection.heading', present: hero !== null && isStr(hero.heading) },
    { name: 'heroSection.tagline', present: hero !== null && isStr(hero.tagline) },
    { name: 'heroSection.description', present: hero !== null && isStr(hero.description) },
    { name: 'heroSection.benefits', present: hero !== null && isArr(hero.benefits) },
    // Overview
    { name: 'overview', present: overview !== null },
    { name: 'overview.heading', present: overview !== null && isStr(overview.heading) },
    { name: 'overview.description', present: overview !== null && isStr(overview.description) },
    { name: 'overview.points', present: overview !== null && isArr(overview.points) },
    // Why Us
    { name: 'overview.whyUs', present: whyUs !== null },
    { name: 'overview.whyUs.title', present: whyUs !== null && isStr(whyUs.title) },
    { name: 'overview.whyUs.points', present: whyUs !== null && isArr(whyUs.points) },
    // Alert
    { name: 'overview.alert', present: alert !== null },
    { name: 'overview.alert.title', present: alert !== null && isStr(alert.title) },
    { name: 'overview.alert.content', present: alert !== null && isStr(alert.content) },
    // Approach
    { name: 'approach', present: approach !== null },
    { name: 'approach.title', present: approach !== null && isStr(approach.title) },
    { name: 'approach.description', present: approach !== null && isStr(approach.description) },
    { name: 'approach.points', present: approach !== null && isArr(approach.points) },
    // Services
    { name: 'services', present: isArr(doc.services) },
    // Testimonial
    { name: 'testimonial', present: testimonial !== null },
    { name: 'testimonial.quote', present: testimonial !== null && isStr(testimonial.quote) },
    // FAQ
    { name: 'faq', present: isArr(doc.faq) },
  ]

  for (const { name, present } of fields) {
    if (!tracker[name]) tracker[name] = { present: 0, total: 0 }
    tracker[name].total++
    if (present) tracker[name].present++
  }
}

// ─── CLI ─────────────────────────────────────────────────────────────────────

interface CliArgs {
  json: boolean
  errorsOnly: boolean
  limit: number | undefined
  output: string | null
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2)
  let json = false
  let errorsOnly = false
  let limit: number | undefined
  let output: string | null = null

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--json':
        json = true
        break
      case '--errors-only':
        errorsOnly = true
        break
      case '--limit':
        if (i + 1 < args.length) limit = parseInt(args[++i], 10)
        break
      case '--output':
        if (i + 1 < args.length) output = args[++i]
        break
    }
  }

  return { json, errorsOnly, limit, output }
}

function displayReport(report: AuditReport): void {
  const { stats } = report

  logger.info('')
  logger.info('='.repeat(70))
  logger.info('  German Source Page Audit Report')
  logger.info('='.repeat(70))
  logger.info('')

  // Summary
  logger.stats(`Total pages:        ${stats.totalPages}`)
  logger.success(`Valid pages:        ${stats.validPages}`)
  if (stats.invalidPages > 0) {
    logger.error(`Invalid pages:      ${stats.invalidPages}`)
  }
  logger.stats(`Total errors:       ${stats.totalErrors}`)
  logger.stats(`Auto-fixable:       ${stats.autoFixableCount}`)
  logger.warn(`Manual fix needed:  ${stats.manualFixCount}`)
  logger.info('')

  // Error breakdown (sorted by frequency)
  if (Object.keys(stats.errorBreakdown).length > 0) {
    logger.info('Error Breakdown (by frequency)')
    logger.info('-'.repeat(70))
    const sorted = Object.entries(stats.errorBreakdown).sort((a, b) => b[1] - a[1])
    for (const [error, count] of sorted) {
      const fixable = isAutoFixable(error) ? ' [AUTO-FIX]' : ' [MANUAL]'
      logger.info(`  ${String(count).padStart(4)}x  ${error}${fixable}`)
    }
    logger.info('')
  }

  // Field coverage
  if (Object.keys(stats.fieldCoverage).length > 0) {
    logger.info('Field Coverage')
    logger.info('-'.repeat(70))
    for (const [field, coverage] of Object.entries(stats.fieldCoverage)) {
      const bar = makeProgressBar(coverage.present, coverage.total)
      logger.info(`  ${field.padEnd(28)} ${bar} ${coverage.pct} (${coverage.present}/${coverage.total})`)
    }
    logger.info('')
  }

  // Per-page details (only pages with errors)
  const pagesWithErrors = report.pages.filter((p) => !p.validation.valid)
  if (pagesWithErrors.length > 0) {
    logger.info(`Pages with Errors (${pagesWithErrors.length})`)
    logger.info('-'.repeat(70))
    for (const page of pagesWithErrors) {
      logger.info(`  ${page._id} (${page.slug})`)
      if (page.autoFixableErrors.length > 0) {
        for (const err of page.autoFixableErrors) {
          logger.info(`    [AUTO-FIX] ${err}`)
        }
      }
      if (page.manualFixErrors.length > 0) {
        for (const err of page.manualFixErrors) {
          logger.error(`    [MANUAL]   ${err}`)
        }
      }
    }
    logger.info('')
  }
}

function makeProgressBar(value: number, total: number, width = 20): string {
  if (total === 0) return '[' + '.'.repeat(width) + ']'
  const filled = Math.round((value / total) * width)
  return '[' + '#'.repeat(filled) + '.'.repeat(width - filled) + ']'
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const cliArgs = parseArgs()
  logger.enableTimestamps()

  logger.search('Auditing all German servicePages...')

  const report = await auditGermanPages({
    errorsOnly: cliArgs.errorsOnly,
    limit: cliArgs.limit,
  })

  if (cliArgs.output) {
    const outputPath = resolve(cliArgs.output)
    await writeFile(outputPath, JSON.stringify(report, null, 2), 'utf-8')
    logger.file(`Audit report written to ${outputPath}`)
  }

  if (cliArgs.json) {
    process.stdout.write(JSON.stringify(report, null, 2) + '\n')
  } else {
    displayReport(report)
  }
}

// Only run CLI when executed directly
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((err) => {
    logger.error(`Fatal error: ${err instanceof Error ? err.message : String(err)}`)
    process.exit(1)
  })
}
