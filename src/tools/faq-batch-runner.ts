/**
 * EN FAQ Batch Runner
 *
 * CLI tool that discovers and processes the 377 EN FAQ batch files
 * in "ADVISORI Sanity Migration/", uploading FAQ arrays to their
 * corresponding English service pages in Sanity.
 *
 * Usage:
 *   npx tsx src/tools/faq-batch-runner.ts              # dry-run: list all batch files
 *   npx tsx src/tools/faq-batch-runner.ts --slug X     # dry-run: filter by slug
 *   npx tsx src/tools/faq-batch-runner.ts --execute    # run all batches against Sanity
 *   npx tsx src/tools/faq-batch-runner.ts --slug X --execute  # run one slug
 *
 * Safety: Default is dry-run. The --execute flag is required to write to Sanity.
 */

import { readdir } from 'node:fs/promises'
import { resolve, join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { sanityClient } from '../lib/sanity-client.js'
import { withRetry, SanityApiError } from '../lib/errors.js'
import { logger } from '../lib/logger.js'

// ─── Types ──────────────────────────────────────────────────────────────────

interface FaqItem {
  _type: string
  _key: string
  question: string
  answer: string
}

interface BatchFile {
  /** Absolute path to the .ts file */
  path: string
  /** Filename without directory (e.g., "crisis-management-bcm-en-faqs-batch1.ts") */
  filename: string
  /** Page slug (e.g., "crisis-management-bcm") */
  slug: string
  /** Derived Sanity document ID (e.g., "crisis-management-bcm-en") */
  docId: string
  /** Batch number extracted from filename */
  batchNumber: number
}

interface SlugGroup {
  slug: string
  docId: string
  batches: BatchFile[]
}

interface RunSummary {
  totalFiles: number
  totalSlugs: number
  processed: number
  faqsAdded: number
  skipped: number
  failed: number
  errors: Array<{ file: string; error: string }>
}

// ─── CLI Argument Parsing ───────────────────────────────────────────────────

function parseArgs(): { slug: string | null; execute: boolean } {
  const args = process.argv.slice(2)
  let slug: string | null = null
  let execute = false

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--slug' && i + 1 < args.length) {
      slug = args[i + 1]
      i++ // skip next arg (slug value)
    } else if (args[i] === '--execute') {
      execute = true
    }
  }

  return { slug, execute }
}

// ─── Discovery ──────────────────────────────────────────────────────────────

const BATCH_DIR = resolve('ADVISORI Sanity Migration')
const FILENAME_PATTERN = /^(.+)-en-faqs-batch(\d+)\.ts$/

/**
 * Scans the batch directory for FAQ batch files matching the pattern
 * `{slug}-en-faqs-batch{N}.ts` and returns them grouped by slug.
 */
async function discoverBatchFiles(slugFilter: string | null): Promise<SlugGroup[]> {
  const entries = await readdir(BATCH_DIR)

  const batchFiles: BatchFile[] = []

  for (const filename of entries) {
    const match = filename.match(FILENAME_PATTERN)
    if (!match) continue

    const slug = match[1]
    const batchNumber = parseInt(match[2], 10)

    if (slugFilter && slug !== slugFilter) continue

    batchFiles.push({
      path: join(BATCH_DIR, filename),
      filename,
      slug,
      docId: `${slug}-en`,
      batchNumber,
    })
  }

  // Group by slug
  const groupMap = new Map<string, SlugGroup>()

  for (const batch of batchFiles) {
    let group = groupMap.get(batch.slug)
    if (!group) {
      group = { slug: batch.slug, docId: batch.docId, batches: [] }
      groupMap.set(batch.slug, group)
    }
    group.batches.push(batch)
  }

  // Sort batches within each group numerically
  for (const group of groupMap.values()) {
    group.batches.sort((a, b) => a.batchNumber - b.batchNumber)
  }

  // Sort groups alphabetically by slug
  return Array.from(groupMap.values()).sort((a, b) => a.slug.localeCompare(b.slug))
}

// ─── Dynamic Import ─────────────────────────────────────────────────────────

/**
 * Dynamically imports a batch file and extracts the FAQ array from its exports.
 *
 * Looks for:
 * 1. A default export that is an array
 * 2. The first named export that is an array
 *
 * Returns null if no exportable array is found (Pattern B files with no exports).
 */
async function extractFaqArray(batchFile: BatchFile): Promise<FaqItem[] | null> {
  const fileUrl = pathToFileURL(batchFile.path).href

  let mod: Record<string, unknown>
  try {
    mod = await import(fileUrl)
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    throw new Error(`Failed to import ${batchFile.filename}: ${message}`)
  }

  // Check default export first
  if (Array.isArray(mod.default)) {
    return mod.default as FaqItem[]
  }

  // Find first named export that is an array
  for (const [key, value] of Object.entries(mod)) {
    if (key === 'default') continue
    if (Array.isArray(value)) {
      return value as FaqItem[]
    }
  }

  return null
}

// ─── Sanity Operations ──────────────────────────────────────────────────────

/**
 * Checks whether a document with the given _id exists in Sanity.
 */
async function documentExists(docId: string): Promise<boolean> {
  const result = await sanityClient.fetch<number>(
    `count(*[_id == $docId])`,
    { docId },
  )
  return result > 0
}

/**
 * Appends FAQ items to a Sanity document's `faq` array field.
 * Uses setIfMissing to initialize the field if absent.
 */
async function appendFaqs(docId: string, items: FaqItem[]): Promise<void> {
  await withRetry(
    async () => {
      await sanityClient
        .patch(docId)
        .setIfMissing({ faq: [] })
        .append('faq', items)
        .commit()
    },
    { maxRetries: 3, delayMs: 1000, backoffMultiplier: 2 },
  )
}

// ─── Dry-Run Display ────────────────────────────────────────────────────────

function displayDryRun(groups: SlugGroup[]): void {
  const totalFiles = groups.reduce((sum, g) => sum + g.batches.length, 0)

  logger.info('')
  logger.info('='.repeat(70))
  logger.info('  EN FAQ Batch Runner — DRY RUN')
  logger.info('='.repeat(70))
  logger.info('')
  logger.stats(`${groups.length} slugs, ${totalFiles} batch files discovered`)
  logger.info('')

  for (const group of groups) {
    logger.info(`  ${group.slug}`)
    logger.info(`    Target document: ${group.docId}`)
    logger.info(`    Batches: ${group.batches.length}`)
    for (const batch of group.batches) {
      logger.info(`      - ${batch.filename}`)
    }
    logger.info('')
  }

  logger.info('-'.repeat(70))
  logger.warn('No mutations performed. Use --execute to run against Sanity.')
  logger.info('')
}

// ─── Execute Mode ───────────────────────────────────────────────────────────

async function executeRun(groups: SlugGroup[]): Promise<RunSummary> {
  const totalFiles = groups.reduce((sum, g) => sum + g.batches.length, 0)

  const summary: RunSummary = {
    totalFiles,
    totalSlugs: groups.length,
    processed: 0,
    faqsAdded: 0,
    skipped: 0,
    failed: 0,
    errors: [],
  }

  logger.info('')
  logger.info('='.repeat(70))
  logger.info('  EN FAQ Batch Runner — EXECUTE MODE')
  logger.info('='.repeat(70))
  logger.info('')
  logger.stats(`${groups.length} slugs, ${totalFiles} batch files to process`)
  logger.info('')

  let fileIndex = 0

  for (const group of groups) {
    logger.info(`--- ${group.slug} (${group.batches.length} batches) ---`)

    // Verify target document exists
    let docExists: boolean
    try {
      docExists = await documentExists(group.docId)
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err)
      logger.error(`Failed to check document ${group.docId}: ${message}`)
      // Skip all batches in this group
      for (const batch of group.batches) {
        fileIndex++
        summary.skipped++
        summary.errors.push({ file: batch.filename, error: `Document check failed: ${message}` })
      }
      continue
    }

    if (!docExists) {
      logger.warn(`Document ${group.docId} not found in Sanity — skipping ${group.batches.length} batches`)
      for (const batch of group.batches) {
        fileIndex++
        summary.skipped++
      }
      continue
    }

    for (const batch of group.batches) {
      fileIndex++
      logger.progress(fileIndex, totalFiles, `Processing ${batch.filename}`)

      // Extract FAQ array from the batch file
      let faqItems: FaqItem[] | null
      try {
        faqItems = await extractFaqArray(batch)
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err)
        logger.error(`Import error: ${batch.filename} — ${message}`)
        summary.failed++
        summary.errors.push({ file: batch.filename, error: message })
        continue
      }

      if (!faqItems || faqItems.length === 0) {
        logger.warn(`No exported FAQ array found in ${batch.filename} — skipping`)
        summary.skipped++
        continue
      }

      // Append FAQs to Sanity
      try {
        await appendFaqs(group.docId, faqItems)
        logger.success(`Appended ${faqItems.length} FAQs to ${group.docId} from ${batch.filename}`)
        summary.processed++
        summary.faqsAdded += faqItems.length
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err)
        logger.error(`Patch failed for ${group.docId} from ${batch.filename}: ${message}`)
        summary.failed++
        summary.errors.push({ file: batch.filename, error: message })
      }
    }

    logger.info('')
  }

  return summary
}

function displaySummary(summary: RunSummary): void {
  logger.info('='.repeat(70))
  logger.info('  Summary')
  logger.info('='.repeat(70))
  logger.stats(`Total files:    ${summary.totalFiles}`)
  logger.stats(`Total slugs:    ${summary.totalSlugs}`)
  logger.success(`Processed:      ${summary.processed} batches (${summary.faqsAdded} FAQs added)`)
  if (summary.skipped > 0) {
    logger.warn(`Skipped:        ${summary.skipped}`)
  }
  if (summary.failed > 0) {
    logger.error(`Failed:         ${summary.failed}`)
    logger.info('')
    logger.info('  Errors:')
    for (const err of summary.errors) {
      logger.info(`    ${err.file}: ${err.error}`)
    }
  }
  logger.info('')
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const { slug, execute } = parseArgs()

  logger.enableTimestamps()

  // Discover batch files
  logger.search(`Scanning ${BATCH_DIR} for FAQ batch files...`)

  const groups = await discoverBatchFiles(slug)

  if (groups.length === 0) {
    if (slug) {
      logger.warn(`No batch files found for slug "${slug}"`)
    } else {
      logger.warn('No FAQ batch files found')
    }
    return
  }

  if (!execute) {
    // Dry-run mode
    displayDryRun(groups)
    return
  }

  // Execute mode
  const summary = await executeRun(groups)
  displaySummary(summary)
}

main().catch((err) => {
  logger.error(`Fatal error: ${err instanceof Error ? err.message : String(err)}`)
  process.exit(1)
})
