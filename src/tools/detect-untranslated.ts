/**
 * Untranslated Page Detection Tool
 *
 * CLI tool that queries Sanity to detect all German servicePages and their
 * English translation status using `translation.metadata` documents.
 *
 * Usage:
 *   npx tsx src/tools/detect-untranslated.ts              # human-readable summary
 *   npx tsx src/tools/detect-untranslated.ts --json        # JSON report to stdout
 *   npx tsx src/tools/detect-untranslated.ts --json --output report.json  # JSON to file
 *
 * Detection uses `translation.metadata` (authoritative) — NOT legacy `__i18n_*` fields.
 */

import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { sanityClient } from '../lib/sanity-client.js'
import { withRetry } from '../lib/errors.js'
import { logger } from '../lib/logger.js'

// ─── Types ──────────────────────────────────────────────────────────────────

export interface GermanPage {
  _id: string
  title: string
  slug: string
  parentRef: string | null
  topLevelRef: string | null
}

interface EnglishPage {
  _id: string
  title: string
  slug: string
}

interface MetadataEntry {
  _id: string
  deRef: string | null
  enRef: string | null
}

export interface DetectionReport {
  timestamp: string
  summary: {
    totalGerman: number
    translated: number
    untranslated: number
    metadataOnly: number
    floatingEnglish: number
    brokenRefs: number
  }
  untranslated: Array<{ _id: string; title: string; slug: string; parentRef: string | null; topLevelRef: string | null }>
  translated: Array<{ _id: string; title: string; slug: string; enDocId: string }>
  metadataOnly: Array<{ _id: string; title: string; metadataId: string }>
  floatingEnglish: Array<{ _id: string; title: string; slug: string }>
  brokenRefs: Array<{ metadataId: string; deRef: string | null; enRef: string | null }>
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
      i++ // skip next arg (output path)
    }
  }

  return { json, output }
}

// ─── GROQ Queries ───────────────────────────────────────────────────────────

const QUERY_GERMAN_PAGES = `*[_type == "servicePage" && language == "de"]{
  _id, title, "slug": slug.current,
  "parentRef": parent._ref,
  "topLevelRef": references.topLevelParent._ref
}`

const QUERY_METADATA = `*[_type == "translation.metadata" && "servicePage" in schemaTypes]{
  _id,
  "deRef": translations[_key == "de"].value._ref,
  "enRef": translations[_key == "en"].value._ref
}`

const QUERY_ENGLISH_PAGES = `*[_type == "servicePage" && language == "en"]{
  _id, title, "slug": slug.current
}`

// ─── Detection Logic ────────────────────────────────────────────────────────

export async function detectTranslationStatus(): Promise<DetectionReport> {
  // Query 1: Fetch all German servicePages
  logger.search('Fetching all German servicePages...')
  const germanPages = await withRetry<GermanPage[]>(
    () => sanityClient.fetch(QUERY_GERMAN_PAGES),
    { maxRetries: 3, delayMs: 1000, backoffMultiplier: 2 },
  )
  logger.stats(`Found ${germanPages.length} German servicePages`)

  // Query 2: Fetch all translation.metadata documents
  logger.search('Fetching translation.metadata documents...')
  const rawMetadata = await withRetry<Array<{ _id: string; deRef: string[] | null; enRef: string[] | null }>>(
    () => sanityClient.fetch(QUERY_METADATA),
    { maxRetries: 3, delayMs: 1000, backoffMultiplier: 2 },
  )
  logger.stats(`Found ${rawMetadata.length} translation.metadata documents`)

  // Normalize metadata: GROQ projections on array elements return arrays
  // e.g., translations[_key == "de"].value._ref returns ["some-id"] or []
  const metadataEntries: MetadataEntry[] = rawMetadata.map((m) => ({
    _id: m._id,
    deRef: Array.isArray(m.deRef) ? (m.deRef[0] ?? null) : (m.deRef ?? null),
    enRef: Array.isArray(m.enRef) ? (m.enRef[0] ?? null) : (m.enRef ?? null),
  }))

  // Query 3: Fetch all English servicePages
  logger.search('Fetching all English servicePages...')
  const englishPages = await withRetry<EnglishPage[]>(
    () => sanityClient.fetch(QUERY_ENGLISH_PAGES),
    { maxRetries: 3, delayMs: 1000, backoffMultiplier: 2 },
  )
  logger.stats(`Found ${englishPages.length} English servicePages`)

  // Build lookup maps
  // Map: German _id → metadata entry (find metadata that references this German doc)
  const deIdToMetadata = new Map<string, MetadataEntry>()
  for (const meta of metadataEntries) {
    if (meta.deRef) {
      deIdToMetadata.set(meta.deRef, meta)
    }
  }

  // Set of all English _ids that exist in Sanity
  const existingEnglishIds = new Set(englishPages.map((p) => p._id))

  // Set of all enRef values in metadata (to detect floating English pages)
  const linkedEnglishIds = new Set<string>()
  for (const meta of metadataEntries) {
    if (meta.enRef) {
      linkedEnglishIds.add(meta.enRef)
    }
  }

  // Categorize German pages
  const translated: DetectionReport['translated'] = []
  const untranslated: DetectionReport['untranslated'] = []
  const metadataOnly: DetectionReport['metadataOnly'] = []
  const brokenRefs: DetectionReport['brokenRefs'] = []

  // Track broken refs we've already recorded (avoid duplicates)
  const recordedBrokenRefs = new Set<string>()

  for (const page of germanPages) {
    const meta = deIdToMetadata.get(page._id)

    if (!meta) {
      // No metadata at all → untranslated
      untranslated.push({
        _id: page._id,
        title: page.title,
        slug: page.slug,
        parentRef: page.parentRef,
        topLevelRef: page.topLevelRef,
      })
    } else if (meta.enRef && existingEnglishIds.has(meta.enRef)) {
      // Metadata exists with enRef pointing to an existing English doc → translated
      translated.push({
        _id: page._id,
        title: page.title,
        slug: page.slug,
        enDocId: meta.enRef,
      })
    } else if (meta.enRef && !existingEnglishIds.has(meta.enRef)) {
      // Metadata has enRef but the English doc doesn't exist → broken ref
      // Also count as metadata-only (the German page has metadata but no working EN link)
      metadataOnly.push({
        _id: page._id,
        title: page.title,
        metadataId: meta._id,
      })
      if (!recordedBrokenRefs.has(meta._id)) {
        brokenRefs.push({
          metadataId: meta._id,
          deRef: meta.deRef,
          enRef: meta.enRef,
        })
        recordedBrokenRefs.add(meta._id)
      }
    } else {
      // Metadata exists but enRef is empty/null → metadata-only
      metadataOnly.push({
        _id: page._id,
        title: page.title,
        metadataId: meta._id,
      })
    }
  }

  // Detect floating English pages (exist in Sanity but not linked in any metadata)
  const floatingEnglish: DetectionReport['floatingEnglish'] = []
  for (const page of englishPages) {
    if (!linkedEnglishIds.has(page._id)) {
      floatingEnglish.push({
        _id: page._id,
        title: page.title,
        slug: page.slug,
      })
    }
  }

  // Sort all arrays alphabetically by slug or _id for consistent output
  untranslated.sort((a, b) => (a.slug ?? a._id).localeCompare(b.slug ?? b._id))
  translated.sort((a, b) => (a.slug ?? a._id).localeCompare(b.slug ?? b._id))
  metadataOnly.sort((a, b) => a._id.localeCompare(b._id))
  floatingEnglish.sort((a, b) => (a.slug ?? a._id).localeCompare(b.slug ?? b._id))
  brokenRefs.sort((a, b) => a.metadataId.localeCompare(b.metadataId))

  return {
    timestamp: new Date().toISOString(),
    summary: {
      totalGerman: germanPages.length,
      translated: translated.length,
      untranslated: untranslated.length,
      metadataOnly: metadataOnly.length,
      floatingEnglish: floatingEnglish.length,
      brokenRefs: brokenRefs.length,
    },
    untranslated,
    translated,
    metadataOnly,
    floatingEnglish,
    brokenRefs,
  }
}

// ─── Display ────────────────────────────────────────────────────────────────

function displayHumanReadable(report: DetectionReport): void {
  const s = report.summary

  logger.info('')
  logger.info('='.repeat(70))
  logger.info('  Untranslated Page Detection Report')
  logger.info('='.repeat(70))
  logger.info('')
  logger.stats(`Total German servicePages:     ${s.totalGerman}`)
  logger.stats(`Translated (EN linked):        ${s.translated}`)
  logger.stats(`Untranslated (no EN at all):   ${s.untranslated}`)
  logger.stats(`Metadata-only (no working EN): ${s.metadataOnly}`)
  logger.stats(`Floating English (unlinked):   ${s.floatingEnglish}`)
  logger.stats(`Broken refs in metadata:       ${s.brokenRefs}`)
  logger.info('')

  // Consistency check
  const accounted = s.translated + s.untranslated + s.metadataOnly
  if (accounted !== s.totalGerman) {
    logger.warn(`Consistency check: translated(${s.translated}) + untranslated(${s.untranslated}) + metadataOnly(${s.metadataOnly}) = ${accounted} != totalGerman(${s.totalGerman})`)
  } else {
    logger.success(`Consistency check passed: ${s.translated} + ${s.untranslated} + ${s.metadataOnly} = ${s.totalGerman}`)
  }

  logger.info('')

  // Show first 10 untranslated pages as a sample
  if (report.untranslated.length > 0) {
    logger.info('-'.repeat(70))
    logger.info(`  Untranslated pages (showing first 10 of ${report.untranslated.length}):`)
    logger.info('-'.repeat(70))
    for (const page of report.untranslated.slice(0, 10)) {
      logger.info(`  ${page.slug ?? page._id}`)
      logger.info(`    ID: ${page._id} | Title: ${page.title}`)
    }
    if (report.untranslated.length > 10) {
      logger.info(`  ... and ${report.untranslated.length - 10} more`)
    }
    logger.info('')
  }

  // Show floating English pages
  if (report.floatingEnglish.length > 0) {
    logger.info('-'.repeat(70))
    logger.info(`  Floating English pages (${report.floatingEnglish.length}):`)
    logger.info('-'.repeat(70))
    for (const page of report.floatingEnglish) {
      logger.info(`  ${page._id} — ${page.title}`)
    }
    logger.info('')
  }

  // Show broken refs
  if (report.brokenRefs.length > 0) {
    logger.info('-'.repeat(70))
    logger.info(`  Broken refs in translation.metadata (${report.brokenRefs.length}):`)
    logger.info('-'.repeat(70))
    for (const ref of report.brokenRefs) {
      logger.info(`  Metadata: ${ref.metadataId}`)
      logger.info(`    DE ref: ${ref.deRef} | EN ref: ${ref.enRef}`)
    }
    logger.info('')
  }

  // Show metadata-only pages
  if (report.metadataOnly.length > 0) {
    logger.info('-'.repeat(70))
    logger.info(`  Metadata-only pages (${report.metadataOnly.length}):`)
    logger.info('-'.repeat(70))
    for (const page of report.metadataOnly) {
      logger.info(`  ${page._id} — ${page.title} (metadata: ${page.metadataId})`)
    }
    logger.info('')
  }

  logger.success('Detection complete.')
  logger.info('')
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const { json, output } = parseArgs()

  logger.enableTimestamps()

  const report = await detectTranslationStatus()

  if (json) {
    const jsonString = JSON.stringify(report, null, 2)

    if (output) {
      const outputPath = resolve(output)
      await writeFile(outputPath, jsonString, 'utf-8')
      logger.file(`Report written to ${outputPath}`)
    } else {
      // Write JSON directly to stdout (without logger prefix)
      process.stdout.write(jsonString + '\n')
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
