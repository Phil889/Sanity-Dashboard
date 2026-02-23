/**
 * Single-Page Upload Tool with Validation Gate
 *
 * Uploads a validated translated English servicePage JSON to Sanity CMS
 * using createOrReplace. Includes a pre-upload validation gate that
 * refuses uploads for pages scoring below 11/11 (unless --force).
 *
 * Usage:
 *   npx tsx src/tools/upload-page.ts --file path/to/page-en.json
 *   npx tsx src/tools/upload-page.ts --file page-en.json --german page.json
 *   npx tsx src/tools/upload-page.ts --file page-en.json --execute
 *   npx tsx src/tools/upload-page.ts --file page-en.json --execute --force
 *   npx tsx src/tools/upload-page.ts --file page-en.json --skip-validation --execute
 *   npx tsx src/tools/upload-page.ts --file page-en.json --json
 *
 * Exit codes:
 *   0 - success (uploaded or dry-run)
 *   1 - validation failed or upload error
 *
 * Exported for module use:
 *   import { uploadPage, type UploadResult, type UploadOptions } from './upload-page.js'
 */

import { readFile } from 'node:fs/promises'
import { resolve, basename } from 'node:path'
import { pathToFileURL } from 'node:url'
import { sanityClient } from '../lib/sanity-client.js'
import { withRetry, SanityApiError } from '../lib/errors.js'
import { logger } from '../lib/logger.js'
import { validateTranslation, type TranslationValidationResult } from './validate-translation.js'
import type { TranslatedPage } from '../lib/translation-types.js'

// ─── Types ──────────────────────────────────────────────────────────────────

export type UploadStatus = 'uploaded' | 'dry-run' | 'skipped' | 'failed'

export interface UploadResult {
  documentId: string
  germanId: string
  slug: string
  status: UploadStatus
  validationScore: number
  validationPassed: boolean
  previousRevision: string | null
  newRevision: string | null
  error?: string
  durationMs: number
}

export interface UploadOptions {
  /** Path to the translated English JSON file */
  filePath: string
  /** Optional path to the German source JSON for cross-validation */
  germanPath?: string
  /** If true, actually write to Sanity (default: false = dry-run) */
  execute?: boolean
  /** If true, upload even if validation score < 11 */
  force?: boolean
  /** If true, skip validation entirely */
  skipValidation?: boolean
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function isObject(val: unknown): val is Record<string, unknown> {
  return typeof val === 'object' && val !== null && !Array.isArray(val)
}

/**
 * Validates basic required fields on the translated page JSON.
 * Returns an error message if invalid, or null if OK.
 */
function validateBasicFields(page: Record<string, unknown>): string | null {
  if (typeof page._id !== 'string' || page._id.length === 0) {
    return '_id is missing or empty'
  }
  if (typeof page._type !== 'string' || page._type.length === 0) {
    return '_type is missing or empty'
  }
  if (page.language !== 'en') {
    return `language is "${String(page.language)}" instead of "en"`
  }
  if (!isObject(page.slug) || typeof (page.slug as Record<string, unknown>).current !== 'string') {
    return 'slug.current is missing'
  }
  return null
}

/**
 * Fetches the current revision of a document in Sanity, if it exists.
 * Returns the _rev string or null if the document doesn't exist.
 */
async function fetchExistingRevision(docId: string): Promise<string | null> {
  const result = await withRetry(
    async () => {
      return sanityClient.fetch<{ _rev: string } | null>(
        `*[_id == $docId][0]{_rev}`,
        { docId },
      )
    },
    { maxRetries: 3, delayMs: 1000, backoffMultiplier: 2 },
  )
  return result?._rev ?? null
}

// ─── Core Upload Function ───────────────────────────────────────────────────

/**
 * Uploads a single translated page to Sanity CMS.
 *
 * Flow:
 * 1. Read and parse translated JSON, validate basic fields
 * 2. Pre-upload validation gate (unless --skip-validation)
 * 3. Check for existing document to capture previousRevision
 * 4. Dry-run gate (unless --execute)
 * 5. Upload via createOrReplace with retry
 * 6. Return result with metadata
 */
export async function uploadPage(options: UploadOptions): Promise<UploadResult> {
  const startTime = Date.now()
  const absPath = resolve(options.filePath)

  // ── Step 1: Read and parse translated JSON ──
  let rawContent: string
  try {
    rawContent = await readFile(absPath, 'utf-8')
  } catch (err) {
    return {
      documentId: '',
      germanId: '',
      slug: '',
      status: 'failed',
      validationScore: 0,
      validationPassed: false,
      previousRevision: null,
      newRevision: null,
      error: `Failed to read file: ${err instanceof Error ? err.message : String(err)}`,
      durationMs: Date.now() - startTime,
    }
  }

  let page: Record<string, unknown>
  try {
    page = JSON.parse(rawContent) as Record<string, unknown>
  } catch {
    return {
      documentId: '',
      germanId: '',
      slug: '',
      status: 'failed',
      validationScore: 0,
      validationPassed: false,
      previousRevision: null,
      newRevision: null,
      error: 'File is not valid JSON',
      durationMs: Date.now() - startTime,
    }
  }

  // Validate basic fields
  const basicError = validateBasicFields(page)
  if (basicError) {
    return {
      documentId: String(page._id ?? ''),
      germanId: '',
      slug: '',
      status: 'failed',
      validationScore: 0,
      validationPassed: false,
      previousRevision: null,
      newRevision: null,
      error: `Basic field validation failed: ${basicError}`,
      durationMs: Date.now() - startTime,
    }
  }

  const documentId = page._id as string
  const slug = ((page.slug as Record<string, unknown>).current as string)
  // German ID is the document ID without the '-en' suffix
  const germanId = documentId.endsWith('-en')
    ? documentId.slice(0, -3)
    : documentId

  // ── Step 2: Pre-upload validation gate ──
  let validationScore = 0
  let validationPassed = false

  if (options.skipValidation) {
    validationScore = -1 // indicates skipped
    validationPassed = true
  } else {
    let validationResult: TranslationValidationResult
    try {
      validationResult = await validateTranslation(
        absPath,
        options.germanPath ? resolve(options.germanPath) : undefined,
      )
      validationScore = validationResult.score
      validationPassed = validationResult.valid // score === 11
    } catch (err) {
      return {
        documentId,
        germanId,
        slug,
        status: 'failed',
        validationScore: 0,
        validationPassed: false,
        previousRevision: null,
        newRevision: null,
        error: `Validation error: ${err instanceof Error ? err.message : String(err)}`,
        durationMs: Date.now() - startTime,
      }
    }

    // Gate: refuse upload if validation failed (unless --force)
    if (!validationPassed && !options.force) {
      return {
        documentId,
        germanId,
        slug,
        status: 'skipped',
        validationScore,
        validationPassed,
        previousRevision: null,
        newRevision: null,
        error: `Validation failed: score ${validationScore}/11 (use --force to override)`,
        durationMs: Date.now() - startTime,
      }
    }
  }

  // ── Step 3: Check existing document for previousRevision ──
  let previousRevision: string | null = null
  try {
    previousRevision = await fetchExistingRevision(documentId)
  } catch (err) {
    // Non-fatal — we can still upload, just won't have previous revision
    logger.warn(`Could not fetch existing revision for ${documentId}: ${err instanceof Error ? err.message : String(err)}`)
  }

  // ── Step 4: Dry-run gate ──
  if (!options.execute) {
    return {
      documentId,
      germanId,
      slug,
      status: 'dry-run',
      validationScore,
      validationPassed,
      previousRevision,
      newRevision: null,
      durationMs: Date.now() - startTime,
    }
  }

  // ── Step 5: Upload via createOrReplace ──
  try {
    const response = await withRetry(
      async () => {
        return sanityClient.createOrReplace(page as unknown as TranslatedPage & { _id: string; _type: string })
      },
      { maxRetries: 3, delayMs: 1000, backoffMultiplier: 2 },
    )

    const newRevision = typeof response._rev === 'string' ? response._rev : null

    return {
      documentId,
      germanId,
      slug,
      status: 'uploaded',
      validationScore,
      validationPassed,
      previousRevision,
      newRevision,
      durationMs: Date.now() - startTime,
    }
  } catch (err) {
    return {
      documentId,
      germanId,
      slug,
      status: 'failed',
      validationScore,
      validationPassed,
      previousRevision,
      newRevision: null,
      error: `Upload failed: ${err instanceof Error ? err.message : String(err)}`,
      durationMs: Date.now() - startTime,
    }
  }
}

// ─── CLI ────────────────────────────────────────────────────────────────────

interface CliArgs {
  file: string | null
  german: string | null
  execute: boolean
  force: boolean
  skipValidation: boolean
  json: boolean
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2)
  let file: string | null = null
  let german: string | null = null
  let execute = false
  let force = false
  let skipValidation = false
  let json = false

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--file':
        if (i + 1 < args.length) file = args[++i]
        break
      case '--german':
        if (i + 1 < args.length) german = args[++i]
        break
      case '--execute':
        execute = true
        break
      case '--force':
        force = true
        break
      case '--skip-validation':
        skipValidation = true
        break
      case '--json':
        json = true
        break
    }
  }

  return { file, german, execute, force, skipValidation, json }
}

function displayResult(result: UploadResult): void {
  logger.info('')
  logger.info('='.repeat(60))
  logger.info('  Upload Page')
  logger.info('='.repeat(60))
  logger.info('')
  logger.stats(`Document ID:      ${result.documentId}`)
  logger.stats(`German ID:        ${result.germanId}`)
  logger.stats(`Slug:             ${result.slug}`)
  logger.stats(`Validation Score: ${result.validationScore === -1 ? 'skipped' : `${result.validationScore}/11`}`)
  logger.stats(`Validation:       ${result.validationPassed ? 'PASSED' : 'FAILED'}`)
  logger.stats(`Previous Rev:     ${result.previousRevision ?? 'none (new document)'}`)
  logger.info('')

  switch (result.status) {
    case 'uploaded':
      logger.success(`Uploaded to Sanity (rev: ${result.newRevision})`)
      break
    case 'dry-run':
      logger.warn('DRY RUN — no mutations performed. Use --execute to upload.')
      break
    case 'skipped':
      logger.warn(`Skipped: ${result.error}`)
      break
    case 'failed':
      logger.error(`Failed: ${result.error}`)
      break
  }

  logger.stats(`Duration:         ${result.durationMs}ms`)
  logger.info('')
}

async function main(): Promise<void> {
  const { file, german, execute, force, skipValidation, json } = parseArgs()

  if (!file) {
    logger.error('Missing required argument: --file <path>')
    logger.info('Usage:')
    logger.info('  npx tsx src/tools/upload-page.ts --file <path> [--german <path>] [--execute] [--force] [--skip-validation] [--json]')
    process.exit(1)
  }

  const result = await uploadPage({
    filePath: file,
    germanPath: german ?? undefined,
    execute,
    force,
    skipValidation,
  })

  if (json) {
    process.stdout.write(JSON.stringify(result, null, 2) + '\n')
  } else {
    displayResult(result)
  }

  process.exit(result.status === 'failed' ? 1 : 0)
}

// Only run CLI when executed directly
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((err) => {
    logger.error(`Fatal error: ${err instanceof Error ? err.message : String(err)}`)
    process.exit(1)
  })
}
