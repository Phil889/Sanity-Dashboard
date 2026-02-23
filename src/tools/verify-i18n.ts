/**
 * i18n Linking Verification Tool
 *
 * Queries Sanity to verify that all English translations are properly linked
 * to their German source documents via `translation.metadata`. Checks
 * bidirectional linking, document existence, and metadata consistency.
 *
 * This is the Phase 9 verification step — run after linking to confirm
 * everything is correct before proceeding to Phase 10.
 *
 * Usage:
 *   npx tsx src/tools/verify-i18n.ts                    # full verification report
 *   npx tsx src/tools/verify-i18n.ts --manifest path    # verify only manifest entries
 *   npx tsx src/tools/verify-i18n.ts --json             # JSON output
 *   npx tsx src/tools/verify-i18n.ts --verbose          # show all pairs, not just issues
 *
 * Exit codes:
 *   0 - all verifications passed
 *   1 - one or more issues found
 *
 * Exported for module use:
 *   import { verifyI18nLinks, type I18nVerificationReport } from './verify-i18n.js'
 */

import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { sanityClient } from '../lib/sanity-client.js'
import { withRetry } from '../lib/errors.js'
import { logger } from '../lib/logger.js'
import type { UploadManifest } from './upload-batch.js'

// ─── Types ──────────────────────────────────────────────────────────────────

export type VerifyStatus = 'ok' | 'missing-metadata' | 'missing-en-ref' | 'broken-en-ref' | 'broken-de-ref' | 'missing-german-doc' | 'missing-english-doc' | 'language-mismatch'

export interface VerifyEntry {
  germanId: string
  englishId: string
  metadataId: string | null
  status: VerifyStatus
  details?: string
}

export interface I18nVerificationReport {
  timestamp: string
  summary: {
    totalChecked: number
    ok: number
    issues: number
    missingMetadata: number
    missingEnRef: number
    brokenEnRef: number
    brokenDeRef: number
    missingGermanDoc: number
    missingEnglishDoc: number
    languageMismatch: number
    floatingEnglish: number
    totalMetadataDocs: number
    totalEnglishPages: number
  }
  entries: VerifyEntry[]
  floatingEnglish: Array<{ _id: string; title: string; slug: string }>
}

export interface VerifyOptions {
  /** Path to upload manifest — verify only these entries */
  manifestPath?: string
  /** Show all entries including OK ones */
  verbose?: boolean
}

// ─── GROQ Queries ───────────────────────────────────────────────────────────

const QUERY_ALL_METADATA = `*[_type == "translation.metadata" && "servicePage" in schemaTypes]{
  _id,
  translations
}`

const QUERY_ENGLISH_PAGES = `*[_type == "servicePage" && language == "en"]{
  _id, title, "slug": slug.current, language
}`

const QUERY_GERMAN_PAGES_IDS = `*[_type == "servicePage" && language == "de"]._id`

// ─── Core Verification ──────────────────────────────────────────────────────

/**
 * Verifies i18n linking integrity across all English translations.
 *
 * Checks:
 * 1. Every English page has a corresponding translation.metadata document
 * 2. Metadata has both "de" and "en" entries
 * 3. Both refs point to existing documents
 * 4. English document has language == "en"
 * 5. Detects floating English pages (not in any metadata)
 */
export async function verifyI18nLinks(options: VerifyOptions = {}): Promise<I18nVerificationReport> {
  // ── Fetch all data from Sanity ──
  logger.search('Fetching all metadata and English pages...')

  const [rawMetadata, englishPages, germanIds] = await Promise.all([
    withRetry(
      () => sanityClient.fetch<Array<{
        _id: string
        translations: Array<{
          _key: string
          _type: string
          value: { _ref: string; _type: string }
        }>
      }>>(QUERY_ALL_METADATA),
      { maxRetries: 3, delayMs: 1000 },
    ),
    withRetry(
      () => sanityClient.fetch<Array<{ _id: string; title: string; slug: string; language: string }>>(
        QUERY_ENGLISH_PAGES,
      ),
      { maxRetries: 3, delayMs: 1000 },
    ),
    withRetry(
      () => sanityClient.fetch<string[]>(QUERY_GERMAN_PAGES_IDS),
      { maxRetries: 3, delayMs: 1000 },
    ),
  ])

  logger.stats(`Metadata documents: ${rawMetadata.length}`)
  logger.stats(`English pages:      ${englishPages.length}`)
  logger.stats(`German pages:       ${germanIds.length}`)

  // Build lookup maps
  const germanIdSet = new Set(germanIds)
  const englishIdMap = new Map(englishPages.map((p) => [p._id, p]))

  // Map: germanId → metadata doc (for metadata that has a de ref)
  const germanToMetadata = new Map<string, { _id: string; deRef: string; enRef: string | null }>()
  // Set of all English IDs linked in metadata
  const linkedEnglishIds = new Set<string>()

  for (const meta of rawMetadata) {
    const deEntry = meta.translations.find((t) => t._key === 'de')
    const enEntry = meta.translations.find((t) => t._key === 'en')

    const deRef = deEntry?.value?._ref ?? null
    const enRef = enEntry?.value?._ref ?? null

    if (deRef) {
      germanToMetadata.set(deRef, { _id: meta._id, deRef, enRef })
    }
    if (enRef) {
      linkedEnglishIds.add(enRef)
    }
  }

  // ── Determine which pairs to verify ──
  let pairsToVerify: Array<{ germanId: string; englishId: string }>

  if (options.manifestPath) {
    // Verify only manifest entries
    try {
      const content = await readFile(resolve(options.manifestPath), 'utf-8')
      const manifest = JSON.parse(content) as UploadManifest
      pairsToVerify = manifest.entries.map((e) => ({
        germanId: e.germanId,
        englishId: e.documentId,
      }))
      logger.stats(`Verifying ${pairsToVerify.length} manifest entries`)
    } catch {
      logger.warn(`Could not read manifest: ${options.manifestPath}`)
      pairsToVerify = []
    }
  } else {
    // Verify all English pages
    pairsToVerify = englishPages.map((p) => {
      const germanId = p._id.endsWith('-en') ? p._id.slice(0, -3) : p._id
      return { germanId, englishId: p._id }
    })
    logger.stats(`Verifying all ${pairsToVerify.length} English pages`)
  }

  // ── Verify each pair ──
  const entries: VerifyEntry[] = []

  for (const pair of pairsToVerify) {
    const { germanId, englishId } = pair

    // Check German document exists
    if (!germanIdSet.has(germanId)) {
      entries.push({
        germanId,
        englishId,
        metadataId: null,
        status: 'missing-german-doc',
        details: `German document "${germanId}" not found in Sanity`,
      })
      continue
    }

    // Check English document exists
    const englishPage = englishIdMap.get(englishId)
    if (!englishPage) {
      entries.push({
        germanId,
        englishId,
        metadataId: null,
        status: 'missing-english-doc',
        details: `English document "${englishId}" not found in Sanity`,
      })
      continue
    }

    // Check language field
    if (englishPage.language !== 'en') {
      entries.push({
        germanId,
        englishId,
        metadataId: null,
        status: 'language-mismatch',
        details: `English document has language "${englishPage.language}" instead of "en"`,
      })
      continue
    }

    // Check metadata exists for this German page
    const meta = germanToMetadata.get(germanId)
    if (!meta) {
      entries.push({
        germanId,
        englishId,
        metadataId: null,
        status: 'missing-metadata',
        details: `No translation.metadata document references German page "${germanId}"`,
      })
      continue
    }

    // Check metadata has en ref
    if (!meta.enRef) {
      entries.push({
        germanId,
        englishId,
        metadataId: meta._id,
        status: 'missing-en-ref',
        details: `Metadata ${meta._id} has no "en" entry`,
      })
      continue
    }

    // Check en ref points to the correct English doc
    if (meta.enRef !== englishId) {
      entries.push({
        germanId,
        englishId,
        metadataId: meta._id,
        status: 'broken-en-ref',
        details: `Metadata en ref "${meta.enRef}" does not match expected "${englishId}"`,
      })
      continue
    }

    // Check de ref points to the correct German doc
    if (meta.deRef !== germanId) {
      entries.push({
        germanId,
        englishId,
        metadataId: meta._id,
        status: 'broken-de-ref',
        details: `Metadata de ref "${meta.deRef}" does not match expected "${germanId}"`,
      })
      continue
    }

    // All checks passed
    entries.push({
      germanId,
      englishId,
      metadataId: meta._id,
      status: 'ok',
    })
  }

  // ── Detect floating English pages ──
  const floatingEnglish = englishPages
    .filter((p) => !linkedEnglishIds.has(p._id))
    .map((p) => ({ _id: p._id, title: p.title, slug: p.slug }))
    .sort((a, b) => a._id.localeCompare(b._id))

  // ── Build summary ──
  const okCount = entries.filter((e) => e.status === 'ok').length

  return {
    timestamp: new Date().toISOString(),
    summary: {
      totalChecked: entries.length,
      ok: okCount,
      issues: entries.length - okCount,
      missingMetadata: entries.filter((e) => e.status === 'missing-metadata').length,
      missingEnRef: entries.filter((e) => e.status === 'missing-en-ref').length,
      brokenEnRef: entries.filter((e) => e.status === 'broken-en-ref').length,
      brokenDeRef: entries.filter((e) => e.status === 'broken-de-ref').length,
      missingGermanDoc: entries.filter((e) => e.status === 'missing-german-doc').length,
      missingEnglishDoc: entries.filter((e) => e.status === 'missing-english-doc').length,
      languageMismatch: entries.filter((e) => e.status === 'language-mismatch').length,
      floatingEnglish: floatingEnglish.length,
      totalMetadataDocs: rawMetadata.length,
      totalEnglishPages: englishPages.length,
    },
    entries,
    floatingEnglish,
  }
}

// ─── CLI ────────────────────────────────────────────────────────────────────

interface CliArgs {
  manifestPath: string | undefined
  verbose: boolean
  json: boolean
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2)
  let manifestPath: string | undefined
  let verbose = false
  let json = false

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--manifest':
        if (i + 1 < args.length) manifestPath = args[++i]
        break
      case '--verbose':
        verbose = true
        break
      case '--json':
        json = true
        break
    }
  }

  return { manifestPath, verbose, json }
}

function displayReport(report: I18nVerificationReport, verbose: boolean): void {
  const s = report.summary

  logger.info('')
  logger.info('='.repeat(60))
  logger.info('  i18n Linking Verification')
  logger.info('='.repeat(60))
  logger.info('')
  logger.stats(`Total checked:       ${s.totalChecked}`)
  logger.stats(`OK:                  ${s.ok}`)
  if (s.issues > 0) {
    logger.error(`Issues:              ${s.issues}`)
  } else {
    logger.success(`Issues:              0`)
  }
  logger.info('')

  // Breakdown of issues
  if (s.issues > 0) {
    logger.info('Issue Breakdown')
    logger.info('-'.repeat(60))
    if (s.missingMetadata > 0) logger.warn(`Missing metadata:    ${s.missingMetadata}`)
    if (s.missingEnRef > 0) logger.warn(`Missing EN ref:      ${s.missingEnRef}`)
    if (s.brokenEnRef > 0) logger.warn(`Broken EN ref:       ${s.brokenEnRef}`)
    if (s.brokenDeRef > 0) logger.warn(`Broken DE ref:       ${s.brokenDeRef}`)
    if (s.missingGermanDoc > 0) logger.warn(`Missing German doc:  ${s.missingGermanDoc}`)
    if (s.missingEnglishDoc > 0) logger.warn(`Missing English doc: ${s.missingEnglishDoc}`)
    if (s.languageMismatch > 0) logger.warn(`Language mismatch:   ${s.languageMismatch}`)
    logger.info('')
  }

  // Show issue entries
  const issueEntries = report.entries.filter((e) => e.status !== 'ok')
  if (issueEntries.length > 0) {
    logger.info('Issues Detail')
    logger.info('-'.repeat(60))
    for (const entry of issueEntries) {
      logger.warn(`  [${entry.status}] ${entry.germanId} -> ${entry.englishId}`)
      if (entry.details) {
        logger.info(`    ${entry.details}`)
      }
    }
    logger.info('')
  }

  // Show OK entries if verbose
  if (verbose) {
    const okEntries = report.entries.filter((e) => e.status === 'ok')
    if (okEntries.length > 0) {
      logger.info(`Verified OK (${okEntries.length})`)
      logger.info('-'.repeat(60))
      for (const entry of okEntries) {
        logger.info(`  ${entry.germanId} -> ${entry.englishId} (meta: ${entry.metadataId})`)
      }
      logger.info('')
    }
  }

  // Floating English pages
  if (report.floatingEnglish.length > 0) {
    logger.info(`Floating English Pages (${report.floatingEnglish.length})`)
    logger.info('-'.repeat(60))
    for (const page of report.floatingEnglish) {
      logger.warn(`  ${page._id} — ${page.title}`)
    }
    logger.info('')
  }

  // Overall metadata stats
  logger.info('Sanity Stats')
  logger.info('-'.repeat(60))
  logger.stats(`Total metadata docs:   ${s.totalMetadataDocs}`)
  logger.stats(`Total English pages:   ${s.totalEnglishPages}`)
  logger.stats(`Floating English:      ${s.floatingEnglish}`)
  logger.info('')

  if (s.issues === 0 && report.floatingEnglish.length === 0) {
    logger.success('All i18n links verified successfully!')
  } else {
    logger.warn(`${s.issues} issue(s) and ${report.floatingEnglish.length} floating page(s) need attention.`)
    logger.info('Run: npx tsx src/tools/link-batch.ts --repair --execute')
  }
  logger.info('')
}

async function main(): Promise<void> {
  const { manifestPath, verbose, json } = parseArgs()

  logger.enableTimestamps()

  const report = await verifyI18nLinks({
    manifestPath,
    verbose,
  })

  if (json) {
    process.stdout.write(JSON.stringify(report, null, 2) + '\n')
  } else {
    displayReport(report, verbose)
  }

  const hasIssues = report.summary.issues > 0 || report.floatingEnglish.length > 0
  process.exit(hasIssues ? 1 : 0)
}

// Only run CLI when executed directly
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((err) => {
    logger.error(`Fatal error: ${err instanceof Error ? err.message : String(err)}`)
    process.exit(1)
  })
}
