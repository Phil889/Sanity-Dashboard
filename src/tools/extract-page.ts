/**
 * Single-Page Extraction Tool
 *
 * CLI tool that fetches a single German servicePage from Sanity by `_id` and
 * outputs clean, structured JSON ready for downstream processing. Strips all
 * system and legacy i18n fields, preserving only translatable content and
 * structural metadata.
 *
 * Usage:
 *   npx tsx src/tools/extract-page.ts --id kyc                          # JSON to stdout
 *   npx tsx src/tools/extract-page.ts --id kyc --output kyc-extract.json  # JSON to file
 *   npx tsx src/tools/extract-page.ts --id kyc --quiet                   # suppress logger
 *
 * Exported for module use by 05-02 (batch) and 05-03 (normalization):
 *   import { extractPage, type ExtractedPage } from './extract-page.js'
 */

import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { sanityClient } from '../lib/sanity-client.js'
import { withRetry, ValidationError } from '../lib/errors.js'
import { logger } from '../lib/logger.js'

// ─── Types ──────────────────────────────────────────────────────────────────

/** A single array item with Sanity-required _key and _type */
interface SanityArrayItem {
  _key: string
  _type: string
  [key: string]: unknown
}

/** Hero section of a servicePage */
export interface HeroSection {
  _type: string
  heading?: string
  tagline?: string
  description?: string
  benefits?: SanityArrayItem[]
  heroImage?: {
    _type: string
    alt?: string
    asset?: {
      _ref: string
      _type: string
    }
  }
}

/** Alert block within overview */
interface OverviewAlert {
  title?: string
  content?: string
}

/** "Why Us" block within overview */
interface WhyUs {
  title?: string
  points?: SanityArrayItem[]
}

/** Overview section of a servicePage */
export interface OverviewSection {
  _type: string
  heading?: string
  description?: string
  additionalInfo?: string
  alert?: OverviewAlert
  points?: SanityArrayItem[]
  serviceDescription?: string
  servicePoints?: SanityArrayItem[]
  whyUs?: WhyUs
}

/** Approach section of a servicePage */
export interface ApproachSection {
  _type: string
  title?: string
  description?: string
  points?: SanityArrayItem[]
}

/** A single service entry */
export interface ServiceEntry {
  _key: string
  _type: string
  title?: string
  description?: string
  features?: SanityArrayItem[]
}

/** A single FAQ entry */
export interface FaqEntry {
  _key: string
  _type: string
  question?: string
  answer?: string
}

/** SEO metadata */
export interface SeoSection {
  _type: string
  title?: string
  description?: string
  keywords?: string
}

/** Testimonial section */
export interface TestimonialSection {
  _type: string
  name?: string
  position?: string
  company?: string
  quote?: string
}

/** Sanity reference */
interface SanityReference {
  _ref: string
  _type: string
}

/** Slug object */
interface SlugObject {
  _type: string
  current: string
}

/**
 * Clean extracted servicePage — all system/legacy fields stripped.
 * Contains translatable content fields and structural metadata.
 */
export interface ExtractedPage {
  _id: string
  _type: string
  title: string
  slug: SlugObject
  language: string
  heroSection?: HeroSection
  overview?: OverviewSection
  approach?: ApproachSection
  services?: ServiceEntry[]
  faq?: FaqEntry[]
  seo?: SeoSection
  testimonial?: TestimonialSection
  parent?: SanityReference
  references?: {
    topLevelParent?: SanityReference
  }
}

// ─── System fields to strip ─────────────────────────────────────────────────

const SYSTEM_FIELDS = [
  '_createdAt',
  '_updatedAt',
  '_rev',
  '__i18n_lang',
  '__i18n_refs',
  '__i18n_base',
  '_system',
] as const

// ─── GROQ Query ─────────────────────────────────────────────────────────────

const QUERY_PAGE_BY_ID = `*[_type == "servicePage" && language == "de" && _id == $id][0]`

// ─── Core Extraction Function ───────────────────────────────────────────────

/**
 * Fetches a single German servicePage from Sanity by `_id` and returns
 * a clean ExtractedPage with all system/legacy fields stripped.
 *
 * @param germanId - The Sanity document _id to extract
 * @returns Clean ExtractedPage ready for downstream processing
 * @throws ValidationError if document not found or language mismatch
 */
export async function extractPage(germanId: string): Promise<ExtractedPage> {
  // Fetch the full document from Sanity
  const doc = await withRetry<Record<string, unknown> | null>(
    () => sanityClient.fetch(QUERY_PAGE_BY_ID, { id: germanId }),
    { maxRetries: 3, delayMs: 1000, backoffMultiplier: 2 },
  )

  // Validate document exists
  if (!doc) {
    throw new ValidationError(
      `Document not found: no German servicePage with _id "${germanId}"`,
      { context: { germanId } },
    )
  }

  // Safety check: verify language is German
  if (doc.language !== 'de') {
    throw new ValidationError(
      `Language mismatch: expected "de" but got "${doc.language}" for _id "${germanId}"`,
      { context: { germanId, actualLanguage: doc.language } },
    )
  }

  // Strip system fields
  for (const field of SYSTEM_FIELDS) {
    delete doc[field]
  }

  return doc as unknown as ExtractedPage
}

// ─── CLI Argument Parsing ───────────────────────────────────────────────────

interface CliArgs {
  id: string | null
  output: string | null
  quiet: boolean
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2)
  let id: string | null = null
  let output: string | null = null
  let quiet = false

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--id' && i + 1 < args.length) {
      id = args[i + 1]
      i++
    } else if (args[i] === '--output' && i + 1 < args.length) {
      output = args[i + 1]
      i++
    } else if (args[i] === '--quiet') {
      quiet = true
    }
  }

  return { id, output, quiet }
}

// ─── Display ────────────────────────────────────────────────────────────────

function displaySummary(page: ExtractedPage): void {
  logger.info('')
  logger.info('='.repeat(60))
  logger.info('  Extracted Page Summary')
  logger.info('='.repeat(60))
  logger.info('')
  logger.stats(`ID:       ${page._id}`)
  logger.stats(`Title:    ${page.title}`)
  logger.stats(`Slug:     ${page.slug?.current ?? '(none)'}`)
  logger.stats(`Language: ${page.language}`)
  logger.stats(`FAQs:     ${page.faq?.length ?? 0}`)
  logger.stats(`Services: ${page.services?.length ?? 0}`)
  logger.stats(`Parent:   ${page.parent?._ref ?? '(none)'}`)
  logger.info('')
  logger.success('Extraction complete.')
  logger.info('')
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const { id, output, quiet } = parseArgs()

  if (!id) {
    logger.error('Missing required argument: --id <germanId>')
    logger.info('Usage: npx tsx src/tools/extract-page.ts --id <germanId> [--output <path>] [--quiet]')
    process.exit(1)
  }

  if (!quiet) {
    logger.enableTimestamps()
    logger.search(`Extracting page: ${id}`)
  }

  const page = await extractPage(id)

  const jsonString = JSON.stringify(page, null, 2)

  if (output) {
    const outputPath = resolve(output)
    await writeFile(outputPath, jsonString, 'utf-8')
    if (!quiet) {
      logger.file(`Written to ${outputPath}`)
    }
  } else {
    process.stdout.write(jsonString + '\n')
  }

  if (!quiet) {
    displaySummary(page)
  }
}

// Only run CLI entry point when executed directly (not when imported)
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((err) => {
    logger.error(`Fatal error: ${err instanceof Error ? err.message : String(err)}`)
    process.exit(1)
  })
}
