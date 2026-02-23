/**
 * Single-Page i18n Linking Tool
 *
 * Creates or updates a `translation.metadata` document in Sanity to link
 * a German servicePage to its English translation. This is the authoritative
 * linking mechanism used by Sanity Studio's language switcher.
 *
 * Optionally patches the legacy `__i18n_refs` field on the German document
 * for backward compatibility with older plugins.
 *
 * Usage:
 *   npx tsx src/tools/link-translation.ts --german-id access-governance --english-id access-governance-en
 *   npx tsx src/tools/link-translation.ts --german-id X --english-id Y --execute
 *   npx tsx src/tools/link-translation.ts --german-id X --english-id Y --execute --skip-legacy
 *   npx tsx src/tools/link-translation.ts --german-id X --english-id Y --json
 *
 * Exit codes:
 *   0 - success (linked or dry-run)
 *   1 - error (documents not found, linking failed)
 *
 * Exported for module use:
 *   import { linkTranslation, type LinkResult, type LinkOptions } from './link-translation.js'
 */

import { randomUUID } from 'node:crypto'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { sanityClient } from '../lib/sanity-client.js'
import { withRetry } from '../lib/errors.js'
import { logger } from '../lib/logger.js'

// ─── Types ──────────────────────────────────────────────────────────────────

export type LinkStatus = 'created' | 'updated' | 'already-linked' | 'dry-run' | 'failed'

export interface LinkResult {
  germanId: string
  englishId: string
  metadataId: string | null
  status: LinkStatus
  action: string
  legacyPatched: boolean
  error?: string
  durationMs: number
}

export interface LinkOptions {
  /** Sanity document _id of the German source page */
  germanId: string
  /** Sanity document _id of the English translation page */
  englishId: string
  /** If true, actually write to Sanity (default: false = dry-run) */
  execute?: boolean
  /** If true, skip patching legacy __i18n_refs on the German document */
  skipLegacy?: boolean
}

// ─── Sanity Types ───────────────────────────────────────────────────────────

interface TranslationEntry {
  _key: string
  _type: string
  value: {
    _ref: string
    _type: string
  }
}

interface MetadataDoc {
  _id: string
  _type: string
  translations: TranslationEntry[]
}

interface MetadataQueryResult {
  _id: string
  translations: TranslationEntry[]
}

// ─── GROQ Queries ───────────────────────────────────────────────────────────

/** Find existing translation.metadata that references a German document */
const QUERY_METADATA_BY_GERMAN_ID = `*[
  _type == "translation.metadata"
  && "servicePage" in schemaTypes
  && $germanId in translations[].value._ref
][0]{
  _id,
  translations
}`

/** Check if a document exists */
const QUERY_DOC_EXISTS = `*[_id == $docId][0]{_id}`

// ─── Helpers ────────────────────────────────────────────────────────────────

function makeTranslationEntry(key: string, ref: string): TranslationEntry {
  return {
    _key: key,
    _type: 'internationalizedArrayReferenceValue',
    value: {
      _ref: ref,
      _type: 'reference',
    },
  }
}

// ─── Core Linking Function ──────────────────────────────────────────────────

/**
 * Links a German servicePage to its English translation via translation.metadata.
 *
 * Flow:
 * 1. Verify both German and English documents exist in Sanity
 * 2. Check if translation.metadata already exists for the German page
 * 3. If metadata exists:
 *    a. Check if "en" entry already points to the correct English doc → already-linked
 *    b. Otherwise patch to add/update the "en" entry → updated
 * 4. If no metadata: create new translation.metadata with both de and en entries → created
 * 5. Optionally patch legacy __i18n_refs on the German document
 */
export async function linkTranslation(options: LinkOptions): Promise<LinkResult> {
  const startTime = Date.now()
  const { germanId, englishId } = options

  // ── Step 1: Verify documents exist ──
  let germanExists: boolean
  let englishExists: boolean

  try {
    const [germanDoc, englishDoc] = await Promise.all([
      withRetry(
        () => sanityClient.fetch<{ _id: string } | null>(QUERY_DOC_EXISTS, { docId: germanId }),
        { maxRetries: 2, delayMs: 500 },
      ),
      withRetry(
        () => sanityClient.fetch<{ _id: string } | null>(QUERY_DOC_EXISTS, { docId: englishId }),
        { maxRetries: 2, delayMs: 500 },
      ),
    ])
    germanExists = germanDoc !== null
    englishExists = englishDoc !== null
  } catch (err) {
    return {
      germanId,
      englishId,
      metadataId: null,
      status: 'failed',
      action: 'verify',
      legacyPatched: false,
      error: `Failed to verify documents: ${err instanceof Error ? err.message : String(err)}`,
      durationMs: Date.now() - startTime,
    }
  }

  if (!germanExists) {
    return {
      germanId,
      englishId,
      metadataId: null,
      status: 'failed',
      action: 'verify',
      legacyPatched: false,
      error: `German document "${germanId}" not found in Sanity`,
      durationMs: Date.now() - startTime,
    }
  }

  if (!englishExists) {
    return {
      germanId,
      englishId,
      metadataId: null,
      status: 'failed',
      action: 'verify',
      legacyPatched: false,
      error: `English document "${englishId}" not found in Sanity`,
      durationMs: Date.now() - startTime,
    }
  }

  // ── Step 2: Check for existing metadata ──
  let existingMetadata: MetadataQueryResult | null
  try {
    existingMetadata = await withRetry(
      () => sanityClient.fetch<MetadataQueryResult | null>(
        QUERY_METADATA_BY_GERMAN_ID,
        { germanId },
      ),
      { maxRetries: 2, delayMs: 500 },
    )
  } catch (err) {
    return {
      germanId,
      englishId,
      metadataId: null,
      status: 'failed',
      action: 'query-metadata',
      legacyPatched: false,
      error: `Failed to query metadata: ${err instanceof Error ? err.message : String(err)}`,
      durationMs: Date.now() - startTime,
    }
  }

  let metadataId: string
  let action: string
  let status: LinkStatus

  if (existingMetadata) {
    metadataId = existingMetadata._id

    // Check if "en" entry already exists and points to the right doc
    const enEntry = existingMetadata.translations.find((t) => t._key === 'en')
    if (enEntry && enEntry.value?._ref === englishId) {
      // Already correctly linked
      if (!options.execute) {
        return {
          germanId,
          englishId,
          metadataId,
          status: 'dry-run',
          action: 'already-linked (no changes needed)',
          legacyPatched: false,
          durationMs: Date.now() - startTime,
        }
      }

      // Even if already linked, still patch legacy if requested
      let legacyPatched = false
      if (!options.skipLegacy) {
        legacyPatched = await patchLegacyFields(germanId, englishId)
      }

      return {
        germanId,
        englishId,
        metadataId,
        status: 'already-linked',
        action: 'already-linked (no metadata changes)',
        legacyPatched,
        durationMs: Date.now() - startTime,
      }
    }

    // Need to update: add or replace the "en" entry
    action = enEntry ? 'update-en-ref' : 'add-en-entry'
    status = 'updated'

    if (!options.execute) {
      return {
        germanId,
        englishId,
        metadataId,
        status: 'dry-run',
        action: `would ${action} in metadata ${metadataId}`,
        legacyPatched: false,
        durationMs: Date.now() - startTime,
      }
    }

    // Patch the metadata document
    try {
      const newEntry = makeTranslationEntry('en', englishId)

      if (enEntry) {
        // Replace existing en entry: unset old, append new
        // Use a transaction to atomically remove and re-add
        const updatedTranslations = existingMetadata.translations
          .filter((t) => t._key !== 'en')
          .concat(newEntry)

        await withRetry(
          () => sanityClient.patch(metadataId).set({ translations: updatedTranslations }).commit(),
          { maxRetries: 3, delayMs: 1000, backoffMultiplier: 2 },
        )
      } else {
        // Append new en entry
        await withRetry(
          () => sanityClient.patch(metadataId).append('translations', [newEntry]).commit(),
          { maxRetries: 3, delayMs: 1000, backoffMultiplier: 2 },
        )
      }
    } catch (err) {
      return {
        germanId,
        englishId,
        metadataId,
        status: 'failed',
        action,
        legacyPatched: false,
        error: `Failed to patch metadata: ${err instanceof Error ? err.message : String(err)}`,
        durationMs: Date.now() - startTime,
      }
    }
  } else {
    // No metadata exists — create new
    metadataId = randomUUID()
    action = 'create-metadata'
    status = 'created'

    if (!options.execute) {
      return {
        germanId,
        englishId,
        metadataId: `(new: ${metadataId})`,
        status: 'dry-run',
        action: 'would create new translation.metadata',
        legacyPatched: false,
        durationMs: Date.now() - startTime,
      }
    }

    // Create translation.metadata document
    const metadataDoc: MetadataDoc = {
      _id: metadataId,
      _type: 'translation.metadata',
      translations: [
        makeTranslationEntry('de', germanId),
        makeTranslationEntry('en', englishId),
      ],
    }

    // Add schemaTypes as a separate field (not in the interface but needed)
    const docToCreate = {
      ...metadataDoc,
      schemaTypes: ['servicePage'],
    }

    try {
      await withRetry(
        () => sanityClient.createOrReplace(docToCreate),
        { maxRetries: 3, delayMs: 1000, backoffMultiplier: 2 },
      )
    } catch (err) {
      return {
        germanId,
        englishId,
        metadataId,
        status: 'failed',
        action,
        legacyPatched: false,
        error: `Failed to create metadata: ${err instanceof Error ? err.message : String(err)}`,
        durationMs: Date.now() - startTime,
      }
    }
  }

  // ── Step 5: Optionally patch legacy __i18n_refs ──
  let legacyPatched = false
  if (!options.skipLegacy && options.execute) {
    legacyPatched = await patchLegacyFields(germanId, englishId)
  }

  return {
    germanId,
    englishId,
    metadataId,
    status,
    action,
    legacyPatched,
    durationMs: Date.now() - startTime,
  }
}

// ─── Legacy Field Patching ──────────────────────────────────────────────────

/**
 * Patches the legacy __i18n_refs field on the German document to reference
 * the English translation. This is for backward compatibility with older
 * i18n plugins that read __i18n_refs instead of translation.metadata.
 *
 * Sets __i18n_refs to an array containing a reference to the English doc.
 * Does NOT overwrite existing refs — merges them.
 */
async function patchLegacyFields(germanId: string, englishId: string): Promise<boolean> {
  try {
    // Fetch current __i18n_refs to avoid clobbering existing entries
    const current = await sanityClient.fetch<{ refs: Array<{ _ref: string }> | null } | null>(
      `*[_id == $docId][0]{"refs": __i18n_refs}`,
      { docId: germanId },
    )

    const existingRefs: Array<{ _key: string; _ref: string; _type: string }> = []
    if (Array.isArray(current?.refs)) {
      for (const ref of current.refs) {
        if (ref._ref && ref._ref !== englishId) {
          existingRefs.push({
            _key: ref._ref,
            _ref: ref._ref,
            _type: 'reference',
          })
        }
      }
    }

    // Add the English reference
    existingRefs.push({
      _key: englishId,
      _ref: englishId,
      _type: 'reference',
    })

    await withRetry(
      () => sanityClient.patch(germanId).set({ __i18n_refs: existingRefs }).commit(),
      { maxRetries: 2, delayMs: 500 },
    )

    return true
  } catch (err) {
    logger.warn(`Failed to patch legacy __i18n_refs on ${germanId}: ${err instanceof Error ? err.message : String(err)}`)
    return false
  }
}

// ─── CLI ────────────────────────────────────────────────────────────────────

interface CliArgs {
  germanId: string | null
  englishId: string | null
  execute: boolean
  skipLegacy: boolean
  json: boolean
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2)
  let germanId: string | null = null
  let englishId: string | null = null
  let execute = false
  let skipLegacy = false
  let json = false

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--german-id':
        if (i + 1 < args.length) germanId = args[++i]
        break
      case '--english-id':
        if (i + 1 < args.length) englishId = args[++i]
        break
      case '--execute':
        execute = true
        break
      case '--skip-legacy':
        skipLegacy = true
        break
      case '--json':
        json = true
        break
    }
  }

  return { germanId, englishId, execute, skipLegacy, json }
}

function displayResult(result: LinkResult): void {
  logger.info('')
  logger.info('='.repeat(60))
  logger.info('  Link Translation')
  logger.info('='.repeat(60))
  logger.info('')
  logger.stats(`German ID:    ${result.germanId}`)
  logger.stats(`English ID:   ${result.englishId}`)
  logger.stats(`Metadata ID:  ${result.metadataId ?? 'none'}`)
  logger.stats(`Action:       ${result.action}`)
  logger.stats(`Legacy patch: ${result.legacyPatched ? 'yes' : 'no'}`)
  logger.info('')

  switch (result.status) {
    case 'created':
      logger.success(`Created new translation.metadata document`)
      break
    case 'updated':
      logger.success(`Updated existing translation.metadata document`)
      break
    case 'already-linked':
      logger.success(`Already correctly linked (no changes needed)`)
      break
    case 'dry-run':
      logger.warn('DRY RUN — no mutations performed. Use --execute to link.')
      break
    case 'failed':
      logger.error(`Failed: ${result.error}`)
      break
  }

  logger.stats(`Duration:     ${result.durationMs}ms`)
  logger.info('')
}

async function main(): Promise<void> {
  const { germanId, englishId, execute, skipLegacy, json } = parseArgs()

  if (!germanId || !englishId) {
    logger.error('Missing required arguments: --german-id <id> --english-id <id>')
    logger.info('Usage:')
    logger.info('  npx tsx src/tools/link-translation.ts --german-id <id> --english-id <id> [--execute] [--skip-legacy] [--json]')
    process.exit(1)
  }

  const result = await linkTranslation({
    germanId,
    englishId,
    execute,
    skipLegacy,
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
