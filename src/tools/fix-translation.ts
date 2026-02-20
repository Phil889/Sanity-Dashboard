/**
 * Translation Auto-Fix CLI Tool
 *
 * Applies deterministic fixes to translated English servicePage JSON files
 * without requiring AI re-translation. Repairs common structural and
 * metadata issues found during validation.
 *
 * 7 fix types:
 *   1. language → 'en'
 *   2. _id → append '-en' suffix
 *   3. __i18n_lang → 'en'
 *   4. __i18n_base → construct reference from _id
 *   5. seo.title → append ' | ADVISORI' suffix
 *   6. Array items → set _type: 'object'
 *   7. Array _key values → regenerate with generateKey()
 *
 * Usage:
 *   npx tsx src/tools/fix-translation.ts --file path/to/page-en.json
 *   npx tsx src/tools/fix-translation.ts --file page-en.json --german page.json
 *   npx tsx src/tools/fix-translation.ts --dir src/data/translated
 *   npx tsx src/tools/fix-translation.ts --dir src/data/translated --german-dir src/data/extracted
 *   npx tsx src/tools/fix-translation.ts --dir src/data/translated --dry-run
 *   npx tsx src/tools/fix-translation.ts --file page-en.json --json
 *
 * Exit codes:
 *   0 — completed successfully
 *   1 — error occurred
 *
 * Exported for module use:
 *   import { fixTranslation, fixTranslationDirectory } from './fix-translation.js'
 */

import { readFile, writeFile, readdir } from 'node:fs/promises'
import { resolve, basename, extname, join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { logger } from '../lib/logger.js'
import { generateKey } from '../lib/glossary.js'

// ─── Types ──────────────────────────────────────────────────────────────────

/** Options for the fix pipeline. */
export interface FixOptions {
  /** Show fixes without writing file. */
  dryRun?: boolean
  /** Write to a different file instead of overwriting. */
  outputPath?: string
}

/** Result of fixing a single translated file. */
export interface FixResult {
  /** The file path that was processed. */
  file: string
  /** Human-readable descriptions of fixes applied. */
  fixesApplied: string[]
  /** Total number of fixes applied. */
  fixCount: number
  /** Whether the file was modified (false if dry-run or no fixes needed). */
  wasModified: boolean
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function isObject(val: unknown): val is Record<string, unknown> {
  return typeof val === 'object' && val !== null && !Array.isArray(val)
}

/**
 * Infers a _key prefix from a parent key name.
 * Maps common array property names to their singular item prefix.
 */
function inferKeyPrefix(parentKey: string): string {
  const prefixMap: Record<string, string> = {
    faq: 'faq',
    services: 'service',
    benefits: 'benefit',
    features: 'feature',
    points: 'point',
    servicePoints: 'servicePoint',
  }
  return prefixMap[parentKey] ?? parentKey.replace(/s$/, '')
}

/** The pattern that valid _key values must match: prefix_digits_digits */
const KEY_PATTERN = /^[a-zA-Z][a-zA-Z0-9]*_\d+_\d+$/

// ─── Fix Functions ──────────────────────────────────────────────────────────

/**
 * Fix 1: Set language to 'en' if not already.
 */
function fixLanguage(page: Record<string, unknown>, fixes: string[]): void {
  if (page.language !== 'en') {
    const old = String(page.language ?? 'undefined')
    page.language = 'en'
    fixes.push(`language: "${old}" → "en"`)
  }
}

/**
 * Fix 2: Append '-en' to _id if missing.
 */
function fixId(page: Record<string, unknown>, fixes: string[]): void {
  if (typeof page._id === 'string' && !page._id.endsWith('-en')) {
    const old = page._id
    page._id = `${page._id}-en`
    fixes.push(`_id: "${old}" → "${page._id}"`)
  }
}

/**
 * Fix 3: Set __i18n_lang to 'en'.
 */
function fixI18nLang(page: Record<string, unknown>, fixes: string[]): void {
  if (page.__i18n_lang !== 'en') {
    const old = String(page.__i18n_lang ?? 'undefined')
    page.__i18n_lang = 'en'
    fixes.push(`__i18n_lang: "${old}" → "en"`)
  }
}

/**
 * Fix 4: Construct __i18n_base from _id if missing or malformed.
 */
function fixI18nBase(page: Record<string, unknown>, fixes: string[]): void {
  const id = typeof page._id === 'string' ? page._id : ''
  const germanId = id.replace(/-en$/, '')

  if (!germanId) return

  const currentBase = page.__i18n_base
  const needsFix =
    !isObject(currentBase) ||
    (currentBase as Record<string, unknown>)._ref !== germanId ||
    (currentBase as Record<string, unknown>)._type !== 'reference'

  if (needsFix) {
    const oldDesc = isObject(currentBase)
      ? `{_ref: "${String((currentBase as Record<string, unknown>)._ref ?? '')}", _type: "${String((currentBase as Record<string, unknown>)._type ?? '')}"}`
      : String(currentBase ?? 'undefined')
    page.__i18n_base = { _ref: germanId, _type: 'reference' }
    fixes.push(`__i18n_base: ${oldDesc} → {_ref: "${germanId}", _type: "reference"}`)
  }
}

/**
 * Fix 5: Append ' | ADVISORI' to seo.title if missing.
 */
function fixSeoTitle(page: Record<string, unknown>, fixes: string[]): void {
  if (!isObject(page.seo)) return

  const seo = page.seo as Record<string, unknown>
  if (typeof seo.title === 'string' && seo.title.length > 0 && !seo.title.endsWith('| ADVISORI')) {
    const old = seo.title
    seo.title = `${seo.title} | ADVISORI`
    fixes.push(`seo.title: appended " | ADVISORI" (was "${old}")`)
  }
}

/**
 * Fix 6: Set _type: 'object' on all array items that are objects.
 * Fix 7: Regenerate _key values that don't match the expected pattern.
 *
 * Both fixes walk the same object tree so they are combined for efficiency.
 */
function fixArrayItems(
  obj: unknown,
  parentKey: string,
  fixes: string[],
  path: string,
): void {
  if (Array.isArray(obj)) {
    const prefix = inferKeyPrefix(parentKey)
    for (let i = 0; i < obj.length; i++) {
      const item = obj[i]
      if (isObject(item)) {
        // Fix 6: _type
        if (item._type !== 'object') {
          const old = String(item._type ?? 'undefined')
          item._type = 'object'
          fixes.push(`${path}[${i}]._type: "${old}" → "object"`)
        }

        // Fix 7: _key
        if (typeof item._key !== 'string' || !KEY_PATTERN.test(item._key)) {
          const old = String(item._key ?? 'undefined')
          item._key = generateKey(prefix, i)
          fixes.push(`${path}[${i}]._key: "${old}" → "${item._key}"`)
        }

        // Recurse into nested objects/arrays within this item
        for (const [k, v] of Object.entries(item)) {
          if (k !== '_key' && k !== '_type') {
            fixArrayItems(v, k, fixes, `${path}[${i}].${k}`)
          }
        }
      }
    }
  } else if (isObject(obj)) {
    for (const [k, v] of Object.entries(obj)) {
      fixArrayItems(v, k, fixes, `${path}.${k}`)
    }
  }
}

// ─── Core Fix Function ──────────────────────────────────────────────────────

/**
 * Applies all deterministic fixes to a translated JSON file.
 *
 * Reads the file, applies 7 fix types, writes back if modified.
 * All fixes are deterministic string/object operations — no AI needed.
 *
 * @param filePath - Path to the translated English JSON file
 * @param _germanPath - Optional German source path (reserved for future use)
 * @param options - Fix options (dryRun, outputPath)
 * @returns FixResult with details of all fixes applied
 */
export async function fixTranslation(
  filePath: string,
  _germanPath?: string,
  options?: FixOptions,
): Promise<FixResult> {
  const absPath = resolve(filePath)
  const fixes: string[] = []

  // Read the file
  let content: string
  try {
    content = await readFile(absPath, 'utf-8')
  } catch (err) {
    return {
      file: absPath,
      fixesApplied: [`Error reading file: ${err instanceof Error ? err.message : String(err)}`],
      fixCount: 0,
      wasModified: false,
    }
  }

  // Parse JSON
  let page: Record<string, unknown>
  try {
    page = JSON.parse(content) as Record<string, unknown>
  } catch {
    return {
      file: absPath,
      fixesApplied: ['Error: file is not valid JSON'],
      fixCount: 0,
      wasModified: false,
    }
  }

  // Apply fixes in order
  fixLanguage(page, fixes)
  fixId(page, fixes)
  fixI18nLang(page, fixes)
  fixI18nBase(page, fixes)
  fixSeoTitle(page, fixes)

  // Walk the known section keys for array item fixes
  const sectionKeys = ['heroSection', 'overview', 'approach', 'services', 'faq'] as const
  for (const key of sectionKeys) {
    if (page[key] !== undefined) {
      fixArrayItems(page[key], key, fixes, key)
    }
  }

  // Write back if modified
  let wasModified = false
  if (fixes.length > 0 && !options?.dryRun) {
    const outputPath = options?.outputPath ? resolve(options.outputPath) : absPath
    const newContent = JSON.stringify(page, null, 2) + '\n'
    await writeFile(outputPath, newContent, 'utf-8')
    wasModified = true
  }

  return {
    file: absPath,
    fixesApplied: fixes,
    fixCount: fixes.length,
    wasModified,
  }
}

// ─── Directory Fix ──────────────────────────────────────────────────────────

/**
 * Applies fixes to all *-en.json files in a directory.
 *
 * @param dirPath - Directory containing translated JSON files
 * @param germanDirPath - Optional directory with German source files
 * @param options - Fix options (dryRun, outputPath)
 * @returns Array of FixResults for each processed file
 */
export async function fixTranslationDirectory(
  dirPath: string,
  germanDirPath?: string,
  options?: FixOptions,
): Promise<FixResult[]> {
  const absDir = resolve(dirPath)
  const entries = await readdir(absDir)
  const enFiles = entries.filter(
    (f) => extname(f) === '.json' && f.endsWith('-en.json'),
  )

  const results: FixResult[] = []

  for (const file of enFiles) {
    const filePath = join(absDir, file)

    // Try to match German source by stripping '-en' from filename
    let germanPath: string | undefined
    if (germanDirPath) {
      const germanFilename = file.replace(/-en\.json$/, '.json')
      const candidatePath = join(resolve(germanDirPath), germanFilename)
      try {
        await readFile(candidatePath, 'utf-8')
        germanPath = candidatePath
      } catch {
        // German source not found — fix without it
      }
    }

    const result = await fixTranslation(filePath, germanPath, options)
    results.push(result)

    // Log progress
    if (result.fixCount > 0) {
      if (options?.dryRun) {
        logger.info(`🔧 [dry-run] ${basename(file)}: ${result.fixCount} fix(es) would be applied`)
      } else {
        logger.success(`${basename(file)}: ${result.fixCount} fix(es) applied`)
      }
    }
  }

  return results
}

// ─── Display Functions ──────────────────────────────────────────────────────

function displaySingleResult(result: FixResult, dryRun: boolean): void {
  logger.info('')
  logger.info('='.repeat(60))
  logger.info(`  Translation Auto-Fix${dryRun ? ' (DRY RUN)' : ''}`)
  logger.info('='.repeat(60))
  logger.info('')
  logger.stats(`File:      ${basename(result.file)}`)
  logger.stats(`Fixes:     ${result.fixCount}`)
  logger.stats(`Modified:  ${result.wasModified ? 'yes' : 'no'}`)
  logger.info('')

  if (result.fixesApplied.length > 0) {
    logger.info('Fixes Applied')
    logger.info('-'.repeat(50))
    for (const fix of result.fixesApplied) {
      logger.info(`  ${dryRun ? '(would apply)' : '✓'} ${fix}`)
    }
    logger.info('')
  } else {
    logger.success('No fixes needed — file is clean')
    logger.info('')
  }
}

function displayDirectoryResults(results: FixResult[], dryRun: boolean): void {
  const modified = results.filter((r) => r.fixCount > 0)
  const totalFixes = results.reduce((sum, r) => sum + r.fixCount, 0)

  logger.info('')
  logger.info('='.repeat(60))
  logger.info(`  Translation Auto-Fix Summary${dryRun ? ' (DRY RUN)' : ''}`)
  logger.info('='.repeat(60))
  logger.info('')
  logger.stats(`Total files:     ${results.length}`)
  logger.stats(`Files modified:  ${modified.length}`)
  logger.stats(`Total fixes:     ${totalFixes}`)
  logger.info('')

  if (modified.length > 0) {
    logger.info('Files with Fixes')
    logger.info('-'.repeat(50))
    for (const r of modified) {
      const label = dryRun ? '(would fix)' : 'fixed'
      logger.info(`  ${basename(r.file)}: ${r.fixCount} fix(es) [${label}]`)
      for (const fix of r.fixesApplied) {
        logger.info(`    - ${fix}`)
      }
    }
    logger.info('')
  }

  const clean = results.filter((r) => r.fixCount === 0)
  if (clean.length > 0) {
    logger.success(`${clean.length} file(s) needed no fixes`)
    logger.info('')
  }
}

// ─── CLI Argument Parsing ───────────────────────────────────────────────────

interface CliArgs {
  file: string | null
  german: string | null
  dir: string | null
  germanDir: string | null
  dryRun: boolean
  json: boolean
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2)
  let file: string | null = null
  let german: string | null = null
  let dir: string | null = null
  let germanDir: string | null = null
  let dryRun = false
  let json = false

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--file':
        if (i + 1 < args.length) file = args[++i]
        break
      case '--german':
        if (i + 1 < args.length) german = args[++i]
        break
      case '--dir':
        if (i + 1 < args.length) dir = args[++i]
        break
      case '--german-dir':
        if (i + 1 < args.length) germanDir = args[++i]
        break
      case '--dry-run':
        dryRun = true
        break
      case '--json':
        json = true
        break
    }
  }

  return { file, german, dir, germanDir, dryRun, json }
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const { file, german, dir, germanDir, dryRun, json } = parseArgs()

  if (!file && !dir) {
    logger.error('Missing required argument: --file <path> or --dir <path>')
    logger.info('Usage:')
    logger.info('  npx tsx src/tools/fix-translation.ts --file <path> [--german <path>] [--dry-run] [--json]')
    logger.info('  npx tsx src/tools/fix-translation.ts --dir <path> [--german-dir <path>] [--dry-run] [--json]')
    process.exit(1)
  }

  const options: FixOptions = { dryRun }

  // Single-file mode
  if (file) {
    const result = await fixTranslation(file, german ?? undefined, options)

    if (json) {
      process.stdout.write(JSON.stringify(result, null, 2) + '\n')
    } else {
      displaySingleResult(result, dryRun)
    }

    process.exit(0)
  }

  // Directory mode
  if (dir) {
    const results = await fixTranslationDirectory(dir, germanDir ?? undefined, options)

    if (json) {
      process.stdout.write(JSON.stringify(results, null, 2) + '\n')
    } else {
      displayDirectoryResults(results, dryRun)
    }

    process.exit(0)
  }
}

// Only run CLI entry point when executed directly (not when imported)
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((err) => {
    logger.error(`Fatal error: ${err instanceof Error ? err.message : String(err)}`)
    process.exit(1)
  })
}
