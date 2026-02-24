/**
 * German Source Page Fix Tool
 *
 * Patches German servicePages in Sanity to fix specific validation errors.
 * Dry-run by default, use --execute to actually commit mutations.
 *
 * Auto-fix rules (deterministic, no AI):
 *   - seo.title missing       → copy from title
 *   - seo.description missing → first 160 chars of overview.description
 *   - seo.keywords missing    → generate from title words
 *   - seo object missing      → build from title + overview
 *   - heroSection.heading     → copy from title
 *   - heroSection.tagline     → first sentence of overview.description or seo.description
 *   - heroSection.description → copy from overview.description
 *   - overview.description    → copy from heroSection.description
 *
 * Unfixable errors (missing services, missing overview entirely, etc.) are
 * flagged for manual review.
 *
 * Usage:
 *   npx tsx src/tools/fix-german-source.ts --id <germanId>                   # dry-run single page
 *   npx tsx src/tools/fix-german-source.ts --id <germanId> --execute         # patch single page
 *   npx tsx src/tools/fix-german-source.ts --from-audit audit.json           # dry-run from audit
 *   npx tsx src/tools/fix-german-source.ts --from-audit audit.json --execute # patch from audit
 *   npx tsx src/tools/fix-german-source.ts --from-audit audit.json --limit 5 # limit batch
 *
 * Exported for module use:
 *   import { fixGermanSource, type FixResult } from './fix-german-source.js'
 */

import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { sanityClient } from '../lib/sanity-client.js'
import { withRetry } from '../lib/errors.js'
import { validateSourceQuality } from '../lib/extraction-types.js'
import { logger } from '../lib/logger.js'
import type { AuditReport } from './audit-german-pages.js'

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

const QUERY_PAGE_BY_ID = `*[_type == "servicePage" && language == "de" && _id == $id][0]`

// ─── Types ───────────────────────────────────────────────────────────────────

export interface FixAction {
  field: string
  value: string
  reason: string
}

export interface FixResult {
  _id: string
  title: string
  slug: string
  fixes: FixAction[]
  unfixable: string[]
  applied: boolean
  validBefore: boolean
  validAfter: boolean | null
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function isObj(val: unknown): val is Record<string, unknown> {
  return typeof val === 'object' && val !== null && !Array.isArray(val)
}

function isStr(val: unknown): val is string {
  return typeof val === 'string' && val.length > 0
}

function firstSentence(text: string): string {
  // Match up to first sentence-ending punctuation followed by space or end
  const match = text.match(/^[^.!?]+[.!?]/)
  return match ? match[0].trim() : text.substring(0, 120).trim()
}

function truncate(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text
  return text.substring(0, maxLen - 3).trim() + '...'
}

function generateKeywords(title: string): string {
  // Filter out short/common words, join with commas
  const stopWords = new Set(['und', 'der', 'die', 'das', 'für', 'von', 'mit', 'in', 'im', 'am', 'an', 'zu', 'zur', 'zum', 'den', 'dem', 'des', 'ein', 'eine', 'eines', 'einem', 'einer', 'auf', 'als', 'bei', 'aus', 'nach', 'über', 'und', 'oder', 'the', 'and', 'for', 'with'])
  const words = title
    .replace(/[^a-zA-ZäöüßÄÖÜ\s-]/g, '')
    .split(/\s+/)
    .filter((w) => w.length > 2 && !stopWords.has(w.toLowerCase()))
  return words.join(', ')
}

// ─── Core Fix Logic ──────────────────────────────────────────────────────────

/**
 * Computes deterministic fixes for a German servicePage document.
 * Does NOT apply the fixes — returns a list of planned patches.
 */
export function computeFixes(doc: Record<string, unknown>): { fixes: FixAction[]; unfixable: string[] } {
  const fixes: FixAction[] = []
  const unfixable: string[] = []

  const title = isStr(doc.title) ? doc.title : null
  const hero = isObj(doc.heroSection) ? (doc.heroSection as Record<string, unknown>) : null
  const overview = isObj(doc.overview) ? (doc.overview as Record<string, unknown>) : null
  const seo = isObj(doc.seo) ? (doc.seo as Record<string, unknown>) : null

  const heroDesc = hero && isStr(hero.description) ? hero.description : null
  const overviewDesc = overview && isStr(overview.description) ? overview.description : null
  const seoDesc = seo && isStr(seo.description) ? seo.description : null

  // Run validation to see what's actually broken
  const validation = validateSourceQuality(doc)
  const errors = new Set(validation.errors)

  // ── SEO object entirely missing ──
  if (errors.has('Missing seo')) {
    if (title) {
      const desc = overviewDesc ?? heroDesc ?? ''
      fixes.push({
        field: 'seo',
        value: JSON.stringify({
          _type: 'seo',
          title: title,
          description: truncate(desc, 160),
          keywords: generateKeywords(title),
        }),
        reason: 'Build seo object from title + overview',
      })
    } else {
      unfixable.push('Missing seo: cannot fix without title')
    }
  } else {
    // ── Individual SEO fields ──
    if (errors.has('seo.title is missing or empty')) {
      if (title) {
        fixes.push({ field: 'seo.title', value: title, reason: 'Copy from title' })
      } else {
        unfixable.push('seo.title: no title to copy from')
      }
    }

    if (errors.has('seo.description is missing or empty')) {
      const source = overviewDesc ?? heroDesc
      if (source) {
        fixes.push({ field: 'seo.description', value: truncate(source, 160), reason: 'First 160 chars of overview/hero description' })
      } else {
        unfixable.push('seo.description: no overview.description or heroSection.description available')
      }
    }

    if (errors.has('seo.keywords is missing or empty')) {
      if (title) {
        fixes.push({ field: 'seo.keywords', value: generateKeywords(title), reason: 'Generated from title words' })
      } else {
        unfixable.push('seo.keywords: no title to generate from')
      }
    }
  }

  // ── Hero section fields ──
  if (errors.has('heroSection.heading is missing or empty')) {
    if (hero && title) {
      fixes.push({ field: 'heroSection.heading', value: title, reason: 'Copy from title' })
    } else if (!hero) {
      unfixable.push('heroSection.heading: heroSection object is missing entirely')
    } else {
      unfixable.push('heroSection.heading: no title to copy from')
    }
  }

  if (errors.has('heroSection.tagline is missing or empty')) {
    const source = overviewDesc ?? seoDesc
    if (hero && source) {
      fixes.push({ field: 'heroSection.tagline', value: firstSentence(source), reason: 'First sentence of overview/seo description' })
    } else if (!hero) {
      unfixable.push('heroSection.tagline: heroSection object is missing entirely')
    } else {
      unfixable.push('heroSection.tagline: no description source available')
    }
  }

  if (errors.has('heroSection.description is missing or empty')) {
    if (hero && overviewDesc) {
      fixes.push({ field: 'heroSection.description', value: overviewDesc, reason: 'Copy from overview.description' })
    } else if (!hero) {
      unfixable.push('heroSection.description: heroSection object is missing entirely')
    } else {
      unfixable.push('heroSection.description: no overview.description to copy from')
    }
  }

  // ── Overview fields ──
  if (errors.has('overview.heading is missing or empty')) {
    if (overview && title) {
      fixes.push({ field: 'overview.heading', value: title, reason: 'Copy from title' })
    } else if (!overview) {
      unfixable.push('overview.heading: overview object is missing entirely')
    } else {
      unfixable.push('overview.heading: no title to copy from')
    }
  }

  if (errors.has('overview.description is missing or empty')) {
    if (overview && heroDesc) {
      fixes.push({ field: 'overview.description', value: heroDesc, reason: 'Copy from heroSection.description' })
    } else if (!overview) {
      unfixable.push('overview.description: overview object is missing entirely')
    } else {
      unfixable.push('overview.description: no heroSection.description to copy from')
    }
  }

  // ── Structural sections that cannot be auto-created ──
  if (errors.has('Missing approach')) {
    unfixable.push('Missing approach: cannot auto-create entire section')
  }
  if (errors.has('approach.title is missing or empty')) {
    unfixable.push('approach.title: requires manual content')
  }
  if (errors.has('approach.description is missing or empty')) {
    unfixable.push('approach.description: requires manual content')
  }
  if (errors.has('approach.points is missing or empty')) {
    unfixable.push('approach.points: requires manual content')
  }
  if (errors.has('Missing testimonial')) {
    unfixable.push('Missing testimonial: cannot auto-create')
  }
  if (errors.has('testimonial.quote is missing or empty')) {
    unfixable.push('testimonial.quote: requires manual content')
  }
  if (errors.has('overview.whyUs is missing')) {
    unfixable.push('overview.whyUs: cannot auto-create section')
  }
  if (errors.has('overview.whyUs.title is missing or empty')) {
    unfixable.push('overview.whyUs.title: requires manual content')
  }
  if (errors.has('overview.whyUs.points is missing or empty')) {
    unfixable.push('overview.whyUs.points: requires manual content')
  }
  if (errors.has('overview.alert is missing')) {
    unfixable.push('overview.alert: cannot auto-create section')
  }
  if (errors.has('overview.alert.title is missing or empty')) {
    unfixable.push('overview.alert.title: requires manual content')
  }
  if (errors.has('overview.alert.content is missing or empty')) {
    unfixable.push('overview.alert.content: requires manual content')
  }
  if (errors.has('overview.points is missing or empty')) {
    unfixable.push('overview.points: requires manual content')
  }
  if (errors.has('heroSection.benefits is missing or empty')) {
    unfixable.push('heroSection.benefits: requires manual content')
  }
  if (errors.has('faq is missing or empty (min 1 required)')) {
    unfixable.push('Missing FAQ: cannot auto-create FAQ entries')
  }

  // ── Completely unfixable structural errors ──
  if (errors.has('Missing heroSection')) {
    unfixable.push('Missing heroSection: cannot auto-create entire section')
  }
  if (errors.has('Missing overview')) {
    unfixable.push('Missing overview: cannot auto-create entire section')
  }
  if (errors.has('services is missing or empty (min 1 required)')) {
    unfixable.push('Missing services: cannot auto-create service entries')
  }
  if (errors.has('Missing or empty title')) {
    unfixable.push('Missing title: fundamental data issue')
  }
  if (errors.has('Missing slug object') || errors.has('slug.current is missing or empty')) {
    unfixable.push('Missing/empty slug: cannot auto-generate')
  }

  // Service-level errors
  for (const err of validation.errors) {
    if (err.startsWith('services[') && !unfixable.includes(err)) {
      unfixable.push(err)
    }
    if (err.startsWith('faq[') && !unfixable.includes(err)) {
      unfixable.push(err)
    }
  }

  return { fixes, unfixable }
}

// ─── Apply Fixes ─────────────────────────────────────────────────────────────

/**
 * Fetches a German page, computes fixes, and optionally applies them to Sanity.
 *
 * @param germanId - Sanity document _id
 * @param execute - If true, actually patch Sanity; otherwise dry-run
 * @returns FixResult with planned/applied fixes and unfixable errors
 */
export async function fixGermanSource(germanId: string, execute = false): Promise<FixResult> {
  // Fetch the document
  const doc = await withRetry<Record<string, unknown> | null>(
    () => sanityClient.fetch(QUERY_PAGE_BY_ID, { id: germanId }),
    { maxRetries: 3, delayMs: 1000, backoffMultiplier: 2 },
  )

  if (!doc) {
    return {
      _id: germanId,
      title: '(not found)',
      slug: '(not found)',
      fixes: [],
      unfixable: [`Document not found: ${germanId}`],
      applied: false,
      validBefore: false,
      validAfter: null,
    }
  }

  // Strip system fields for validation
  const cleanDoc = { ...doc }
  for (const field of SYSTEM_FIELDS) {
    delete cleanDoc[field]
  }

  const slug = isObj(doc.slug) ? String((doc.slug as Record<string, unknown>).current ?? '') : ''
  const title = isStr(doc.title) ? doc.title : '(no title)'

  // Validate before
  const validationBefore = validateSourceQuality(cleanDoc)
  if (validationBefore.valid) {
    return {
      _id: germanId,
      title,
      slug,
      fixes: [],
      unfixable: [],
      applied: false,
      validBefore: true,
      validAfter: true,
    }
  }

  // Compute fixes
  const { fixes, unfixable } = computeFixes(cleanDoc)

  if (fixes.length === 0) {
    return {
      _id: germanId,
      title,
      slug,
      fixes: [],
      unfixable,
      applied: false,
      validBefore: false,
      validAfter: null,
    }
  }

  // Apply fixes
  if (execute) {
    const patchOps: Record<string, unknown> = {}

    for (const fix of fixes) {
      if (fix.field === 'seo') {
        // Full seo object replacement
        patchOps[fix.field] = JSON.parse(fix.value)
      } else {
        patchOps[fix.field] = fix.value
      }
    }

    await withRetry(
      () => sanityClient.patch(germanId).set(patchOps).commit(),
      { maxRetries: 3, delayMs: 1000, backoffMultiplier: 2 },
    )

    // Re-fetch and validate after fix
    const updatedDoc = await withRetry<Record<string, unknown> | null>(
      () => sanityClient.fetch(QUERY_PAGE_BY_ID, { id: germanId }),
      { maxRetries: 2, delayMs: 500 },
    )

    let validAfter = false
    if (updatedDoc) {
      for (const field of SYSTEM_FIELDS) delete updatedDoc[field]
      validAfter = validateSourceQuality(updatedDoc).valid
    }

    return {
      _id: germanId,
      title,
      slug,
      fixes,
      unfixable,
      applied: true,
      validBefore: false,
      validAfter,
    }
  }

  return {
    _id: germanId,
    title,
    slug,
    fixes,
    unfixable,
    applied: false,
    validBefore: false,
    validAfter: null,
  }
}

// ─── CLI ─────────────────────────────────────────────────────────────────────

interface CliArgs {
  id: string | null
  fromAudit: string | null
  execute: boolean
  limit: number | undefined
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2)
  let id: string | null = null
  let fromAudit: string | null = null
  let execute = false
  let limit: number | undefined

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--id':
        if (i + 1 < args.length) id = args[++i]
        break
      case '--from-audit':
        if (i + 1 < args.length) fromAudit = args[++i]
        break
      case '--execute':
        execute = true
        break
      case '--limit':
        if (i + 1 < args.length) limit = parseInt(args[++i], 10)
        break
    }
  }

  return { id, fromAudit, execute, limit }
}

function displayFixResult(result: FixResult): void {
  logger.info('')
  logger.info(`  Page: ${result._id} (${result.slug})`)
  logger.info(`  Title: ${result.title}`)
  logger.info(`  Valid before: ${result.validBefore ? 'yes' : 'no'}`)

  if (result.fixes.length > 0) {
    logger.info(`  Fixes (${result.fixes.length}):`)
    for (const fix of result.fixes) {
      const applied = result.applied ? 'APPLIED' : 'PLANNED'
      const valuePreview = fix.value.length > 80 ? fix.value.substring(0, 77) + '...' : fix.value
      logger.info(`    [${applied}] ${fix.field} = "${valuePreview}"`)
      logger.info(`             Reason: ${fix.reason}`)
    }
  }

  if (result.unfixable.length > 0) {
    logger.info(`  Unfixable (${result.unfixable.length}):`)
    for (const err of result.unfixable) {
      logger.error(`    ${err}`)
    }
  }

  if (result.validAfter !== null) {
    if (result.validAfter) {
      logger.success(`  Valid after fix: yes`)
    } else {
      logger.warn(`  Valid after fix: no (some errors remain)`)
    }
  }
}

async function main(): Promise<void> {
  const cliArgs = parseArgs()
  logger.enableTimestamps()

  if (!cliArgs.id && !cliArgs.fromAudit) {
    logger.error('Provide --id <germanId> or --from-audit <audit.json>')
    process.exit(1)
  }

  if (!cliArgs.execute) {
    logger.warn('DRY RUN mode — no Sanity mutations. Use --execute to apply fixes.')
    logger.info('')
  }

  if (cliArgs.id) {
    // Single page mode
    logger.search(`Fixing page: ${cliArgs.id}`)
    const result = await fixGermanSource(cliArgs.id, cliArgs.execute)
    displayFixResult(result)
  } else if (cliArgs.fromAudit) {
    // Batch from audit report
    const auditPath = resolve(cliArgs.fromAudit)
    const raw = await readFile(auditPath, 'utf-8')
    const report = JSON.parse(raw) as AuditReport

    let pages = report.pages.filter((p) => p.autoFixableErrors.length > 0)
    if (cliArgs.limit && cliArgs.limit > 0) {
      pages = pages.slice(0, cliArgs.limit)
    }

    logger.stats(`${pages.length} pages with auto-fixable errors`)
    logger.info('')

    let applied = 0
    let stillInvalid = 0

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i]
      logger.progress(i + 1, pages.length, page._id)

      const result = await fixGermanSource(page._id, cliArgs.execute)
      displayFixResult(result)

      if (result.applied) applied++
      if (result.validAfter === false) stillInvalid++
    }

    logger.info('')
    logger.info('='.repeat(60))
    logger.stats(`Processed: ${pages.length}`)
    if (cliArgs.execute) {
      logger.success(`Applied:   ${applied}`)
      if (stillInvalid > 0) {
        logger.warn(`Still invalid after fix: ${stillInvalid}`)
      }
    } else {
      logger.info(`Fixes planned (use --execute to apply): ${pages.length}`)
    }
    logger.info('')
  }
}

// Only run CLI when executed directly
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((err) => {
    logger.error(`Fatal error: ${err instanceof Error ? err.message : String(err)}`)
    process.exit(1)
  })
}
