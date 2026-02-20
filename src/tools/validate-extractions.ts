/**
 * Extraction Validation CLI Tool
 *
 * Validates extracted German servicePage JSON files against the canonical
 * ExtractedPageSchema. Supports single-file and directory validation modes.
 *
 * Usage:
 *   npx tsx src/tools/validate-extractions.ts --file path/to/page.json
 *   npx tsx src/tools/validate-extractions.ts --dir src/data/extracted
 *   npx tsx src/tools/validate-extractions.ts --dir src/data/extracted --json
 *   npx tsx src/tools/validate-extractions.ts --dir src/data/extracted --strict
 *
 * Exit codes:
 *   0 — all files valid (or all valid in non-strict mode)
 *   1 — one or more files invalid (or warnings in strict mode)
 *
 * Exported for module use:
 *   import { validateFile, validateDirectory } from './validate-extractions.js'
 */

import { readFile, readdir } from 'node:fs/promises'
import { resolve, basename, extname } from 'node:path'
import { pathToFileURL } from 'node:url'
import { logger } from '../lib/logger.js'
import {
  validateExtractedPage,
  getFieldCompleteness,
  type ValidationResult,
} from '../lib/extraction-types.js'

// ─── Types ──────────────────────────────────────────────────────────────────

/** Result for a single validated file */
export interface FileValidationResult {
  file: string
  result: ValidationResult
}

/** Aggregate report for directory validation */
export interface DirectoryValidationReport {
  timestamp: string
  directory: string
  totalFiles: number
  validCount: number
  invalidCount: number
  fileResults: FileValidationResult[]
  fieldCoverage: Record<string, { present: number; total: number; percent: number }>
  faqStats: { min: number; max: number; avg: number }
  servicesStats: { min: number; max: number; avg: number }
}

// ─── Single File Validation ─────────────────────────────────────────────────

/**
 * Reads and validates a single extracted JSON file.
 *
 * @param filePath - Path to the JSON file
 * @returns FileValidationResult with the file name and validation result
 */
export async function validateFile(filePath: string): Promise<FileValidationResult> {
  const absPath = resolve(filePath)
  const content = await readFile(absPath, 'utf-8')
  let data: unknown

  try {
    data = JSON.parse(content)
  } catch {
    return {
      file: basename(absPath),
      result: {
        valid: false,
        errors: [`Failed to parse JSON: invalid JSON in ${basename(absPath)}`],
        warnings: [],
        stats: {
          faqCount: 0,
          servicesCount: 0,
          hasBenefits: false,
          hasHeroImage: false,
          hasTestimonialAuthor: false,
          hasWhyUs: false,
          hasAlert: false,
        },
      },
    }
  }

  const result = validateExtractedPage(data)
  return { file: basename(absPath), result }
}

// ─── Directory Validation ───────────────────────────────────────────────────

/**
 * Validates all *.json files in a directory and produces an aggregate report.
 *
 * @param dirPath - Path to directory containing extracted JSON files
 * @returns DirectoryValidationReport with aggregate statistics
 */
export async function validateDirectory(dirPath: string): Promise<DirectoryValidationReport> {
  const absDir = resolve(dirPath)
  const entries = await readdir(absDir)
  const jsonFiles = entries.filter(
    (f) => extname(f) === '.json' && f !== '.gitkeep'
  )

  const fileResults: FileValidationResult[] = []
  const allCompleteness: Record<string, boolean>[] = []
  const faqCounts: number[] = []
  const servicesCounts: number[] = []

  for (const file of jsonFiles) {
    const filePath = resolve(absDir, file)
    const fileResult = await validateFile(filePath)
    fileResults.push(fileResult)

    // Collect stats
    faqCounts.push(fileResult.result.stats.faqCount)
    servicesCounts.push(fileResult.result.stats.servicesCount)

    // Collect field completeness
    try {
      const content = await readFile(filePath, 'utf-8')
      const data = JSON.parse(content) as Record<string, unknown>
      allCompleteness.push(getFieldCompleteness(data))
    } catch {
      // Already reported as parse error in validation
    }
  }

  // Aggregate field coverage
  const fieldCoverage: Record<string, { present: number; total: number; percent: number }> = {}
  if (allCompleteness.length > 0) {
    const allFields = Object.keys(allCompleteness[0])
    for (const field of allFields) {
      const present = allCompleteness.filter((c) => c[field]).length
      const total = allCompleteness.length
      fieldCoverage[field] = {
        present,
        total,
        percent: Math.round((present / total) * 100),
      }
    }
  }

  // Aggregate FAQ / services stats
  const faqStats = {
    min: faqCounts.length > 0 ? Math.min(...faqCounts) : 0,
    max: faqCounts.length > 0 ? Math.max(...faqCounts) : 0,
    avg: faqCounts.length > 0 ? Math.round(faqCounts.reduce((a, b) => a + b, 0) / faqCounts.length) : 0,
  }

  const servicesStats = {
    min: servicesCounts.length > 0 ? Math.min(...servicesCounts) : 0,
    max: servicesCounts.length > 0 ? Math.max(...servicesCounts) : 0,
    avg: servicesCounts.length > 0 ? Math.round(servicesCounts.reduce((a, b) => a + b, 0) / servicesCounts.length) : 0,
  }

  const validCount = fileResults.filter((r) => r.result.valid).length
  const invalidCount = fileResults.length - validCount

  return {
    timestamp: new Date().toISOString(),
    directory: absDir,
    totalFiles: fileResults.length,
    validCount,
    invalidCount,
    fileResults,
    fieldCoverage,
    faqStats,
    servicesStats,
  }
}

// ─── Display Functions ──────────────────────────────────────────────────────

function displaySingleResult(result: FileValidationResult): void {
  logger.info('')
  logger.info('='.repeat(60))
  logger.info('  Extraction Validation')
  logger.info('='.repeat(60))
  logger.info('')
  logger.stats(`File:     ${result.file}`)
  logger.stats(`Valid:    ${result.result.valid ? 'YES' : 'NO'}`)
  logger.stats(`Errors:   ${result.result.errors.length}`)
  logger.stats(`Warnings: ${result.result.warnings.length}`)
  logger.info('')

  if (result.result.errors.length > 0) {
    logger.error('Errors:')
    for (const err of result.result.errors) {
      logger.info(`  - ${err}`)
    }
    logger.info('')
  }

  if (result.result.warnings.length > 0) {
    logger.warn('Warnings:')
    for (const w of result.result.warnings) {
      logger.info(`  - ${w}`)
    }
    logger.info('')
  }

  logger.info('Stats:')
  logger.stats(`  FAQ count:           ${result.result.stats.faqCount}`)
  logger.stats(`  Services count:      ${result.result.stats.servicesCount}`)
  logger.stats(`  Has benefits:        ${result.result.stats.hasBenefits}`)
  logger.stats(`  Has hero image:      ${result.result.stats.hasHeroImage}`)
  logger.stats(`  Has testimonial author: ${result.result.stats.hasTestimonialAuthor}`)
  logger.stats(`  Has whyUs:           ${result.result.stats.hasWhyUs}`)
  logger.stats(`  Has alert:           ${result.result.stats.hasAlert}`)
  logger.info('')
}

function displayDirectoryReport(report: DirectoryValidationReport, strict: boolean): void {
  logger.info('')
  logger.info('='.repeat(60))
  logger.info('  Validation Summary')
  logger.info('='.repeat(60))
  logger.info('')
  logger.stats(`Total files:   ${report.totalFiles}`)
  logger.stats(`Valid:         ${report.validCount}`)
  logger.stats(`Invalid:       ${report.invalidCount}`)
  logger.info('')

  // Field coverage — show optional fields that are noteworthy
  const noteworthyFields = [
    'heroSection.heroImage.asset',
    'testimonial.name',
    'testimonial.position',
    'testimonial.company',
    'overview.additionalInfo',
    'overview.alert',
    'overview.whyUs',
    'overview.serviceDescription',
    'overview.servicePoints',
    'parent',
    'references.topLevelParent',
  ]

  logger.info('Field Coverage')
  logger.info('-'.repeat(50))
  for (const field of noteworthyFields) {
    const coverage = report.fieldCoverage[field]
    if (coverage) {
      const bar = `${coverage.present}/${coverage.total} (${coverage.percent}%)`
      logger.stats(`  ${field.padEnd(35)} ${bar}`)
    }
  }
  logger.info('')

  // FAQ stats
  logger.info('FAQ Statistics')
  logger.info('-'.repeat(50))
  logger.stats(`  Min FAQs:    ${report.faqStats.min}`)
  logger.stats(`  Max FAQs:    ${report.faqStats.max}`)
  logger.stats(`  Avg FAQs:    ${report.faqStats.avg}`)
  logger.info('')

  // Services stats
  logger.info('Services Statistics')
  logger.info('-'.repeat(50))
  logger.stats(`  Min services: ${report.servicesStats.min}`)
  logger.stats(`  Max services: ${report.servicesStats.max}`)
  logger.stats(`  Avg services: ${report.servicesStats.avg}`)
  logger.info('')

  // Invalid files detail
  const invalidFiles = report.fileResults.filter((r) => !r.result.valid)
  if (invalidFiles.length > 0) {
    logger.info('Invalid Files')
    logger.info('-'.repeat(50))
    for (const f of invalidFiles) {
      logger.error(`  ${f.file}: ${f.result.errors[0]}${f.result.errors.length > 1 ? ` (+${f.result.errors.length - 1} more)` : ''}`)
    }
    logger.info('')
  }

  // Warnings summary in strict mode
  if (strict) {
    const filesWithWarnings = report.fileResults.filter((r) => r.result.warnings.length > 0)
    if (filesWithWarnings.length > 0) {
      logger.info('Files with Warnings (strict mode)')
      logger.info('-'.repeat(50))
      for (const f of filesWithWarnings) {
        logger.warn(`  ${f.file}: ${f.result.warnings.length} warning(s)`)
      }
      logger.info('')
    }
  }
}

// ─── CLI Argument Parsing ───────────────────────────────────────────────────

interface CliArgs {
  dir: string | null
  file: string | null
  json: boolean
  strict: boolean
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2)
  let dir: string | null = null
  let file: string | null = null
  let json = false
  let strict = false

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--dir' && i + 1 < args.length) {
      dir = args[i + 1]
      i++
    } else if (args[i] === '--file' && i + 1 < args.length) {
      file = args[i + 1]
      i++
    } else if (args[i] === '--json') {
      json = true
    } else if (args[i] === '--strict') {
      strict = true
    }
  }

  return { dir, file, json, strict }
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const { dir, file, json, strict } = parseArgs()

  if (!dir && !file) {
    logger.error('Missing required argument: --file <path> or --dir <path>')
    logger.info('Usage:')
    logger.info('  npx tsx src/tools/validate-extractions.ts --file <path>')
    logger.info('  npx tsx src/tools/validate-extractions.ts --dir <path> [--json] [--strict]')
    process.exit(1)
  }

  // Single-file mode
  if (file) {
    const result = await validateFile(file)

    if (json) {
      process.stdout.write(JSON.stringify(result, null, 2) + '\n')
    } else {
      displaySingleResult(result)
    }

    process.exit(result.result.valid ? 0 : 1)
  }

  // Directory mode
  if (dir) {
    const report = await validateDirectory(dir)

    if (json) {
      process.stdout.write(JSON.stringify(report, null, 2) + '\n')
    } else {
      displayDirectoryReport(report, strict)
    }

    // Exit code logic
    if (strict) {
      const hasWarnings = report.fileResults.some((r) => r.result.warnings.length > 0)
      process.exit(report.invalidCount > 0 || hasWarnings ? 1 : 0)
    } else {
      process.exit(report.invalidCount > 0 ? 1 : 0)
    }
  }
}

// Only run CLI entry point when executed directly (not when imported)
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((err) => {
    logger.error(`Fatal error: ${err instanceof Error ? err.message : String(err)}`)
    process.exit(1)
  })
}
