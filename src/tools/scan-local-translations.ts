/**
 * Local Translation File Scanner
 *
 * CLI tool that scans the local filesystem for existing English translation
 * files in "ADVISORI Sanity Migration/", mapping them to page slugs to
 * identify work already done locally.
 *
 * Purpose: Reconcile local filesystem state with Sanity state — avoid
 * re-translating pages that already have local translation files.
 *
 * Usage:
 *   npx tsx src/tools/scan-local-translations.ts             # human-readable summary
 *   npx tsx src/tools/scan-local-translations.ts --json       # full JSON to stdout
 *   npx tsx src/tools/scan-local-translations.ts --json --output report.json  # JSON to file
 */

import { readdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { logger } from '../lib/logger.js'

// ─── Types ──────────────────────────────────────────────────────────────────

export interface PageEntry {
  slug: string
  mainFile: string | null
  faqBatchFiles: string[]
  sourceJsonFile: string | null
  hasFaqs: boolean
  estimatedCompleteness: 'full' | 'main-only' | 'faqs-only' | 'source-only'
}

export interface LocalScanReport {
  timestamp: string
  scanDirectory: string
  summary: {
    totalMainFiles: number
    totalFaqBatchFiles: number
    totalSourceJsonFiles: number
    uniqueSlugs: number
  }
  pages: PageEntry[]
}

// ─── CLI Argument Parsing ───────────────────────────────────────────────────

function parseArgs(): { json: boolean; output: string | null } {
  const args = process.argv.slice(2)
  let json = false
  let output: string | null = null

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--json') {
      json = true
    } else if (args[i] === '--output' && i + 1 < args.length) {
      output = args[i + 1]
      i++ // skip next arg (output path value)
    }
  }

  return { json, output }
}

// ─── File Pattern Matchers ──────────────────────────────────────────────────

/**
 * Matches create-{slug}-en.ts or import-{slug}-en.ts
 * Group 1: "create" or "import"
 * Group 2: slug
 */
const MAIN_FILE_PATTERN = /^(create|import)-(.+)-en\.ts$/

/**
 * Matches {slug}-en-faqs-batch{N}.ts
 * Group 1: slug
 * Group 2: batch number
 */
const FAQ_BATCH_PATTERN = /^(.+)-en-faqs-batch(\d+)\.ts$/

/**
 * Matches {slug}-source.json or {slug}-source-correct.json
 * Group 1: slug
 * Group 2: optional "-correct" suffix
 */
const SOURCE_JSON_PATTERN = /^(.+)-source(-correct)?\.json$/

// ─── Slug Extraction ────────────────────────────────────────────────────────

function extractMainFileSlug(filename: string): string | null {
  const match = filename.match(MAIN_FILE_PATTERN)
  return match ? match[2] : null
}

function extractFaqBatchSlug(filename: string): string | null {
  const match = filename.match(FAQ_BATCH_PATTERN)
  return match ? match[1] : null
}

function extractSourceJsonSlug(filename: string): string | null {
  const match = filename.match(SOURCE_JSON_PATTERN)
  return match ? match[1] : null
}

// ─── Scanner ────────────────────────────────────────────────────────────────

const SCAN_DIR = resolve('ADVISORI Sanity Migration')

export async function scanLocalTranslations(quiet = false): Promise<LocalScanReport> {
  if (!quiet) logger.search(`Scanning ${SCAN_DIR} for translation files...`)

  const entries = await readdir(SCAN_DIR)

  // Collect files into categories using maps keyed by slug
  const mainFiles = new Map<string, string>()       // slug -> filename
  const faqBatchFiles = new Map<string, string[]>()  // slug -> filenames
  const sourceJsonFiles = new Map<string, string>()  // slug -> filename

  let totalMainFiles = 0
  let totalFaqBatchFiles = 0
  let totalSourceJsonFiles = 0

  for (const filename of entries) {
    // Check main translation files
    const mainSlug = extractMainFileSlug(filename)
    if (mainSlug) {
      // If both create-* and import-* exist for the same slug, prefer import-* (newer pattern)
      const existing = mainFiles.get(mainSlug)
      if (!existing || filename.startsWith('import-')) {
        mainFiles.set(mainSlug, filename)
      }
      totalMainFiles++
      if (!quiet) logger.file(`Main: ${filename} -> slug: ${mainSlug}`)
      continue
    }

    // Check FAQ batch files
    const faqSlug = extractFaqBatchSlug(filename)
    if (faqSlug) {
      const existing = faqBatchFiles.get(faqSlug) ?? []
      existing.push(filename)
      faqBatchFiles.set(faqSlug, existing)
      totalFaqBatchFiles++
      continue
    }

    // Check source JSON files
    const sourceSlug = extractSourceJsonSlug(filename)
    if (sourceSlug) {
      // Prefer -source-correct.json over -source.json
      const existing = sourceJsonFiles.get(sourceSlug)
      if (!existing || filename.includes('-correct')) {
        sourceJsonFiles.set(sourceSlug, filename)
      }
      totalSourceJsonFiles++
      continue
    }
  }

  // Collect all unique slugs
  const allSlugs = new Set<string>([
    ...mainFiles.keys(),
    ...faqBatchFiles.keys(),
    ...sourceJsonFiles.keys(),
  ])

  // Build page entries
  const pages: PageEntry[] = []

  for (const slug of allSlugs) {
    const mainFile = mainFiles.get(slug) ?? null
    const faqBatches = faqBatchFiles.get(slug) ?? []
    const sourceJson = sourceJsonFiles.get(slug) ?? null
    const hasFaqs = faqBatches.length > 0

    // Sort FAQ batch files by batch number
    faqBatches.sort((a, b) => {
      const matchA = a.match(FAQ_BATCH_PATTERN)
      const matchB = b.match(FAQ_BATCH_PATTERN)
      const numA = matchA ? parseInt(matchA[2], 10) : 0
      const numB = matchB ? parseInt(matchB[2], 10) : 0
      return numA - numB
    })

    let estimatedCompleteness: PageEntry['estimatedCompleteness']
    if (mainFile && hasFaqs) {
      estimatedCompleteness = 'full'
    } else if (mainFile) {
      estimatedCompleteness = 'main-only'
    } else if (hasFaqs) {
      estimatedCompleteness = 'faqs-only'
    } else {
      estimatedCompleteness = 'source-only'
    }

    pages.push({
      slug,
      mainFile,
      faqBatchFiles: faqBatches,
      sourceJsonFile: sourceJson,
      hasFaqs,
      estimatedCompleteness,
    })
  }

  // Sort pages alphabetically by slug
  pages.sort((a, b) => a.slug.localeCompare(b.slug))

  return {
    timestamp: new Date().toISOString(),
    scanDirectory: SCAN_DIR,
    summary: {
      totalMainFiles,
      totalFaqBatchFiles,
      totalSourceJsonFiles,
      uniqueSlugs: allSlugs.size,
    },
    pages,
  }
}

// ─── Display: Human-Readable ────────────────────────────────────────────────

function displayHumanReadable(report: LocalScanReport): void {
  logger.info('')
  logger.info('='.repeat(70))
  logger.info('  Local Translation File Scanner')
  logger.info('='.repeat(70))
  logger.info('')

  logger.stats(`Main translation files (create-*-en.ts / import-*-en.ts): ${report.summary.totalMainFiles}`)
  logger.stats(`FAQ batch files (*-en-faqs-batch*.ts):                     ${report.summary.totalFaqBatchFiles}`)
  logger.stats(`Source JSON files (*-source.json):                         ${report.summary.totalSourceJsonFiles}`)
  logger.stats(`Unique page slugs:                                        ${report.summary.uniqueSlugs}`)
  logger.info('')

  // Group by completeness
  const full = report.pages.filter(p => p.estimatedCompleteness === 'full')
  const mainOnly = report.pages.filter(p => p.estimatedCompleteness === 'main-only')
  const faqsOnly = report.pages.filter(p => p.estimatedCompleteness === 'faqs-only')
  const sourceOnly = report.pages.filter(p => p.estimatedCompleteness === 'source-only')

  if (full.length > 0) {
    logger.info(`--- Full (main + FAQs): ${full.length} pages ---`)
    for (const page of full) {
      logger.info(`  ${page.slug}`)
      logger.info(`    Main: ${page.mainFile}`)
      logger.info(`    FAQs: ${page.faqBatchFiles.length} batch files`)
      if (page.sourceJsonFile) {
        logger.info(`    Source: ${page.sourceJsonFile}`)
      }
    }
    logger.info('')
  }

  if (mainOnly.length > 0) {
    logger.info(`--- Main Only (no FAQ batches): ${mainOnly.length} pages ---`)
    for (const page of mainOnly) {
      logger.info(`  ${page.slug}`)
      logger.info(`    Main: ${page.mainFile}`)
      if (page.sourceJsonFile) {
        logger.info(`    Source: ${page.sourceJsonFile}`)
      }
    }
    logger.info('')
  }

  if (faqsOnly.length > 0) {
    logger.info(`--- FAQs Only (no main file): ${faqsOnly.length} pages ---`)
    for (const page of faqsOnly) {
      logger.info(`  ${page.slug}`)
      logger.info(`    FAQs: ${page.faqBatchFiles.length} batch files`)
      if (page.sourceJsonFile) {
        logger.info(`    Source: ${page.sourceJsonFile}`)
      }
    }
    logger.info('')
  }

  if (sourceOnly.length > 0) {
    logger.info(`--- Source Only (extraction done, no translation): ${sourceOnly.length} pages ---`)
    for (const page of sourceOnly) {
      logger.info(`  ${page.slug}`)
      logger.info(`    Source: ${page.sourceJsonFile}`)
    }
    logger.info('')
  }

  logger.info('-'.repeat(70))
  logger.success(`Scan complete. ${report.summary.uniqueSlugs} unique slugs found.`)
  logger.info('')
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const { json, output } = parseArgs()

  // In JSON-to-stdout mode, suppress verbose logging to keep stdout clean
  const quiet = json && !output
  const report = await scanLocalTranslations(quiet)

  if (json) {
    const jsonStr = JSON.stringify(report, null, 2)

    if (output) {
      const outputPath = resolve(output)
      await writeFile(outputPath, jsonStr, 'utf-8')
      logger.success(`JSON report written to ${outputPath}`)
    } else {
      // Write raw JSON to stdout (no logger prefix)
      process.stdout.write(jsonStr + '\n')
    }
  } else {
    displayHumanReadable(report)
  }
}

// Only run CLI entry point when executed directly (not when imported)
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((err) => {
    logger.error(`Fatal error: ${err instanceof Error ? err.message : String(err)}`)
    process.exit(1)
  })
}
