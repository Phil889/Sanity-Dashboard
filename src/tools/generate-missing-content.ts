/**
 * AI Content Generator for Incomplete German Pages
 *
 * Fetches a German servicePage from Sanity, identifies missing sections via
 * validateSourceQuality(), uses Claude to generate high-quality German content
 * for each gap, and patches the page in Sanity.
 *
 * Dry-run by default, --execute to commit mutations.
 *
 * Usage:
 *   npx tsx src/tools/generate-missing-content.ts --id <germanId>            # dry-run
 *   npx tsx src/tools/generate-missing-content.ts --id <germanId> --execute  # patch
 *   npx tsx src/tools/generate-missing-content.ts --from-audit src/data/german-audit-report.json --execute
 *   npx tsx src/tools/generate-missing-content.ts --from-audit src/data/german-audit-report.json --limit 5
 */

import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import Anthropic from '@anthropic-ai/sdk'
import { sanityClient } from '../lib/sanity-client.js'
import { config } from '../lib/config.js'
import { withRetry } from '../lib/errors.js'
import { validateSourceQuality } from '../lib/extraction-types.js'
import { logger } from '../lib/logger.js'
import type { AuditReport } from './audit-german-pages.js'

// ─── Constants ───────────────────────────────────────────────────────────────

const SYSTEM_FIELDS = [
  '_createdAt', '_updatedAt', '_rev',
  '__i18n_lang', '__i18n_refs', '__i18n_base', '_system',
] as const

const QUERY_PAGE_BY_ID = `*[_type == "servicePage" && language == "de" && _id == $id][0]`

// ─── Helpers ─────────────────────────────────────────────────────────────────

function isObj(val: unknown): val is Record<string, unknown> {
  return typeof val === 'object' && val !== null && !Array.isArray(val)
}

function isStr(val: unknown): val is string {
  return typeof val === 'string' && val.length > 0
}

function isArr(val: unknown): val is unknown[] {
  return Array.isArray(val) && val.length > 0
}

function extractJsonFromResponse(text: string): unknown {
  let t = text.trim()
  if (t.startsWith('```')) {
    const nl = t.indexOf('\n')
    if (nl !== -1) t = t.slice(nl + 1)
    if (t.endsWith('```')) t = t.slice(0, -3).trim()
  }
  return JSON.parse(t)
}

// ─── Identify Missing Sections ───────────────────────────────────────────────

interface MissingContent {
  needsWhyUs: boolean
  needsAlert: boolean
  needsOverviewPoints: boolean
  needsTestimonial: boolean
  needsFaq: boolean
  needsBenefits: boolean
  needsApproachPoints: boolean
  needsApproachTitle: boolean
  needsApproachDescription: boolean
  serviceIndicesMissingFeatures: number[]
}

function identifyMissing(doc: Record<string, unknown>): MissingContent {
  const overview = isObj(doc.overview) ? (doc.overview as Record<string, unknown>) : null
  const hero = isObj(doc.heroSection) ? (doc.heroSection as Record<string, unknown>) : null
  const approach = isObj(doc.approach) ? (doc.approach as Record<string, unknown>) : null

  const result: MissingContent = {
    needsWhyUs: !overview || !isObj(overview.whyUs),
    needsAlert: !overview || !isObj(overview.alert),
    needsOverviewPoints: !overview || !isArr(overview.points),
    needsTestimonial: !isObj(doc.testimonial),
    needsFaq: !isArr(doc.faq),
    needsBenefits: !hero || !isArr(hero.benefits),
    needsApproachPoints: !approach || !isArr(approach.points),
    needsApproachTitle: !!approach && !isStr(approach.title),
    needsApproachDescription: !!approach && !isStr(approach.description),
    serviceIndicesMissingFeatures: [],
  }

  if (isArr(doc.services)) {
    const services = doc.services as Record<string, unknown>[]
    for (let i = 0; i < services.length; i++) {
      if (isObj(services[i]) && !isArr(services[i].features)) {
        result.serviceIndicesMissingFeatures.push(i)
      }
    }
  }

  return result
}

function hasMissing(m: MissingContent): boolean {
  return m.needsWhyUs || m.needsAlert || m.needsOverviewPoints ||
    m.needsTestimonial || m.needsFaq || m.needsBenefits ||
    m.needsApproachPoints || m.needsApproachTitle || m.needsApproachDescription ||
    m.serviceIndicesMissingFeatures.length > 0
}

// ─── Build AI Prompt ─────────────────────────────────────────────────────────

function buildPrompt(doc: Record<string, unknown>, missing: MissingContent): string {
  const title = String(doc.title ?? '')
  const heroDesc = isObj(doc.heroSection)
    ? String((doc.heroSection as Record<string, unknown>).description ?? '')
    : ''
  const overviewDesc = isObj(doc.overview)
    ? String((doc.overview as Record<string, unknown>).description ?? '')
    : ''
  const approachDesc = isObj(doc.approach)
    ? String((doc.approach as Record<string, unknown>).description ?? '')
    : ''

  // Collect existing service titles for context
  const serviceTitles: string[] = []
  const serviceDescs: string[] = []
  if (isArr(doc.services)) {
    for (const svc of doc.services as Record<string, unknown>[]) {
      if (isObj(svc)) {
        serviceTitles.push(String(svc.title ?? ''))
        serviceDescs.push(String(svc.description ?? ''))
      }
    }
  }

  const parts: string[] = []

  parts.push(`Du bist ein Content-Experte für die Unternehmensberatung ADVISORI FTC GmbH (https://advisori.de).`)
  parts.push(`ADVISORI ist eine Beratung mit ~150 Mitarbeitern, spezialisiert auf Informationssicherheit, Regulatory Compliance, Risikomanagement und Digitale Transformation im Finanzsektor.`)
  parts.push(`ADVISORI ist ISO 27001, ISO 9001 und ISO 14001 zertifiziert und betreibt eine eigene Multi-Agenten-KI-Plattform.`)
  parts.push(``)
  parts.push(`Erstelle fehlende Inhalte für die deutsche Service-Seite "${title}".`)
  parts.push(``)
  parts.push(`Bestehende Inhalte:`)
  parts.push(`- Titel: ${title}`)
  if (heroDesc) parts.push(`- Hero-Beschreibung: ${heroDesc}`)
  if (overviewDesc) parts.push(`- Übersicht: ${overviewDesc}`)
  if (approachDesc) parts.push(`- Ansatz: ${approachDesc}`)
  if (serviceTitles.length > 0) {
    parts.push(`- Services: ${serviceTitles.join(', ')}`)
  }
  parts.push(``)
  parts.push(`Erstelle die folgenden fehlenden Abschnitte als JSON-Objekt. Alle Texte müssen auf professionellem Deutsch sein, fachlich korrekt und zum Thema "${title}" passen.`)
  parts.push(``)
  parts.push(`Antworte NUR mit einem JSON-Objekt mit den folgenden Feldern:`)
  parts.push(``)

  if (missing.needsWhyUs) {
    parts.push(`"whyUs": { "title": "Warum ADVISORI?", "points": [{"_key": "why_1", "_type": "object", "text": "..."}, ...] }`)
    parts.push(`  → 4-6 überzeugende Punkte, warum ADVISORI der richtige Partner für ${title} ist. Verweis auf Expertise, Zertifizierungen, Branchenerfahrung.`)
    parts.push(``)
  }

  if (missing.needsAlert) {
    parts.push(`"alert": { "title": "...", "content": "..." }`)
    parts.push(`  → Ein relevanter regulatorischer oder geschäftlicher Hinweis/Warnung zum Thema ${title}. 2-3 Sätze.`)
    parts.push(``)
  }

  if (missing.needsOverviewPoints) {
    parts.push(`"overviewPoints": [{"_key": "point_1", "_type": "object", "text": "..."}, ...]`)
    parts.push(`  → 4-6 Kernaspekte/Vorteile des Services als Aufzählungspunkte.`)
    parts.push(``)
  }

  if (missing.needsTestimonial) {
    parts.push(`"testimonial": { "_type": "object", "quote": "...", "name": "...", "position": "...", "company": "..." }`)
    parts.push(`  → Ein realistisch klingendes Zitat eines zufriedenen Kunden (fiktiv). 2-3 Sätze. Name und Position eines typischen Entscheiders.`)
    parts.push(``)
  }

  if (missing.needsFaq) {
    parts.push(`"faq": [{"_key": "faq_1", "_type": "object", "question": "...", "answer": "..."}, ...]`)
    parts.push(`  → 4-6 FAQ-Einträge. Fragen, die potenzielle Kunden zu ${title} haben. Umfassende Antworten (je 3-5 Sätze) mit Bezug zu ADVISORI.`)
    parts.push(``)
  }

  if (missing.needsBenefits) {
    parts.push(`"benefits": [{"_key": "benefit_1", "_type": "object", "text": "..."}, ...]`)
    parts.push(`  → 4 kurze Benefit-Punkte für die Hero-Section. Je ein Satz.`)
    parts.push(``)
  }

  if (missing.needsApproachPoints) {
    parts.push(`"approachPoints": [{"_key": "approach_1", "_type": "object", "text": "..."}, ...]`)
    parts.push(`  → 4-5 Schritte des Beratungsvorgehens. Jeder Schritt: "Schritt-Name: Beschreibung in 1-2 Sätzen".`)
    parts.push(``)
  }

  if (missing.needsApproachTitle) {
    parts.push(`"approachTitle": "..."`)
    parts.push(`  → Titel für den Approach-Abschnitt (z.B. "Unser Vorgehen").`)
    parts.push(``)
  }

  if (missing.needsApproachDescription) {
    parts.push(`"approachDescription": "..."`)
    parts.push(`  → 1-2 Sätze, die den Beratungsansatz zusammenfassen.`)
    parts.push(``)
  }

  if (missing.serviceIndicesMissingFeatures.length > 0) {
    parts.push(`"serviceFeatures": {`)
    for (const idx of missing.serviceIndicesMissingFeatures) {
      const svcTitle = serviceTitles[idx] ?? `Service ${idx + 1}`
      const svcDesc = serviceDescs[idx] ?? ''
      parts.push(`  "${idx}": [{"_key": "feat_${idx}_1", "_type": "object", "text": "..."}, ...]`)
      parts.push(`    → 3-5 konkrete Features/Leistungen für "${svcTitle}"${svcDesc ? ` (${svcDesc.substring(0, 100)}...)` : ''}`)
    }
    parts.push(`}`)
    parts.push(``)
  }

  parts.push(`Antworte NUR mit dem JSON-Objekt, ohne Erklärungen oder Markdown-Codeblöcke.`)

  return parts.join('\n')
}

// ─── Apply Generated Content ─────────────────────────────────────────────────

function buildPatchOps(
  doc: Record<string, unknown>,
  generated: Record<string, unknown>,
  missing: MissingContent,
): Record<string, unknown> {
  const patch: Record<string, unknown> = {}

  if (missing.needsWhyUs && isObj(generated.whyUs)) {
    patch['overview.whyUs'] = generated.whyUs
  }

  if (missing.needsAlert && isObj(generated.alert)) {
    patch['overview.alert'] = generated.alert
  }

  if (missing.needsOverviewPoints && isArr(generated.overviewPoints)) {
    patch['overview.points'] = generated.overviewPoints
  }

  if (missing.needsTestimonial && isObj(generated.testimonial)) {
    patch['testimonial'] = generated.testimonial
  }

  if (missing.needsFaq && isArr(generated.faq)) {
    patch['faq'] = generated.faq
  }

  if (missing.needsBenefits && isArr(generated.benefits)) {
    patch['heroSection.benefits'] = generated.benefits
  }

  if (missing.needsApproachPoints && isArr(generated.approachPoints)) {
    patch['approach.points'] = generated.approachPoints
  }

  if (missing.needsApproachTitle && isStr(generated.approachTitle)) {
    patch['approach.title'] = generated.approachTitle
  }

  if (missing.needsApproachDescription && isStr(generated.approachDescription)) {
    patch['approach.description'] = generated.approachDescription
  }

  if (missing.serviceIndicesMissingFeatures.length > 0 && isObj(generated.serviceFeatures)) {
    const svcFeatures = generated.serviceFeatures as Record<string, unknown>
    const services = (doc.services ?? []) as Record<string, unknown>[]

    // We need to rebuild the full services array with features added
    const updatedServices = services.map((svc, idx) => {
      const idxStr = String(idx)
      if (missing.serviceIndicesMissingFeatures.includes(idx) && isArr(svcFeatures[idxStr])) {
        return { ...svc, features: svcFeatures[idxStr] }
      }
      return svc
    })
    patch['services'] = updatedServices
  }

  return patch
}

// ─── Core Generate Function ──────────────────────────────────────────────────

export interface GenerateResult {
  _id: string
  title: string
  fieldsGenerated: string[]
  applied: boolean
  validAfter: boolean | null
  error?: string
}

export async function generateMissingContent(
  germanId: string,
  execute = false,
): Promise<GenerateResult> {
  // Fetch document
  const doc = await withRetry<Record<string, unknown> | null>(
    () => sanityClient.fetch(QUERY_PAGE_BY_ID, { id: germanId }),
    { maxRetries: 3, delayMs: 1000, backoffMultiplier: 2 },
  )

  if (!doc) {
    return { _id: germanId, title: '(not found)', fieldsGenerated: [], applied: false, validAfter: null, error: 'Document not found' }
  }

  const cleanDoc = { ...doc }
  for (const field of SYSTEM_FIELDS) delete cleanDoc[field]

  const title = isStr(doc.title) ? doc.title : '(no title)'

  // Identify what's missing
  const missing = identifyMissing(cleanDoc)
  if (!hasMissing(missing)) {
    return { _id: germanId, title, fieldsGenerated: [], applied: false, validAfter: null }
  }

  // Build prompt and call Claude
  const prompt = buildPrompt(cleanDoc, missing)
  const anthropic = new Anthropic({ apiKey: config.anthropic.apiKey })

  let generated: Record<string, unknown>
  try {
    const response = await withRetry(
      () => anthropic.messages.create({
        model: config.anthropic.model,
        max_tokens: 16384,
        temperature: 0.4,
        messages: [{ role: 'user', content: prompt }],
      }),
      { maxRetries: 3, delayMs: 2000, backoffMultiplier: 2 },
    )

    const text = response.content[0].type === 'text' ? response.content[0].text : ''
    generated = extractJsonFromResponse(text) as Record<string, unknown>

    logger.stats(`  Tokens: ${response.usage.input_tokens} in / ${response.usage.output_tokens} out`)
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    return { _id: germanId, title, fieldsGenerated: [], applied: false, validAfter: null, error: `AI generation failed: ${msg}` }
  }

  // Build patch operations
  const patchOps = buildPatchOps(cleanDoc, generated, missing)
  const fieldsGenerated = Object.keys(patchOps)

  if (fieldsGenerated.length === 0) {
    return { _id: germanId, title, fieldsGenerated: [], applied: false, validAfter: null, error: 'AI response did not contain expected fields' }
  }

  if (!execute) {
    // Dry-run: show what would be patched
    for (const field of fieldsGenerated) {
      const val = patchOps[field]
      const preview = typeof val === 'string'
        ? val.substring(0, 80)
        : JSON.stringify(val).substring(0, 80)
      logger.info(`    [PLANNED] ${field} = ${preview}...`)
    }
    return { _id: germanId, title, fieldsGenerated, applied: false, validAfter: null }
  }

  // Execute: patch Sanity
  try {
    await withRetry(
      () => sanityClient.patch(germanId).set(patchOps).commit(),
      { maxRetries: 3, delayMs: 1000, backoffMultiplier: 2 },
    )

    // Re-validate
    const updated = await withRetry<Record<string, unknown> | null>(
      () => sanityClient.fetch(QUERY_PAGE_BY_ID, { id: germanId }),
      { maxRetries: 2, delayMs: 500 },
    )
    let validAfter = false
    if (updated) {
      for (const field of SYSTEM_FIELDS) delete updated[field]
      validAfter = validateSourceQuality(updated).valid
    }

    return { _id: germanId, title, fieldsGenerated, applied: true, validAfter }
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    return { _id: germanId, title, fieldsGenerated, applied: false, validAfter: null, error: `Patch failed: ${msg}` }
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
      case '--id': if (i + 1 < args.length) id = args[++i]; break
      case '--from-audit': if (i + 1 < args.length) fromAudit = args[++i]; break
      case '--execute': execute = true; break
      case '--limit': if (i + 1 < args.length) limit = parseInt(args[++i], 10); break
    }
  }
  return { id, fromAudit, execute, limit }
}

async function main(): Promise<void> {
  const cliArgs = parseArgs()
  logger.enableTimestamps()

  if (!cliArgs.id && !cliArgs.fromAudit) {
    logger.error('Provide --id <germanId> or --from-audit <audit.json>')
    process.exit(1)
  }

  if (!cliArgs.execute) {
    logger.warn('DRY RUN mode — no Sanity mutations. Use --execute to apply.')
    logger.info('')
  }

  if (cliArgs.id) {
    logger.search(`Generating missing content for: ${cliArgs.id}`)
    const result = await generateMissingContent(cliArgs.id, cliArgs.execute)
    logResult(result)
  } else if (cliArgs.fromAudit) {
    const raw = await readFile(resolve(cliArgs.fromAudit), 'utf-8')
    const report = JSON.parse(raw) as AuditReport

    // Get pages with manual errors (auto-fixable ones are already handled)
    let pages = report.pages.filter((p) => p.manualFixErrors.length > 0)
    // Skip drafts. pages — they're duplicates of published pages
    pages = pages.filter((p) => !p._id.startsWith('drafts.'))
    if (cliArgs.limit && cliArgs.limit > 0) pages = pages.slice(0, cliArgs.limit)

    logger.stats(`${pages.length} pages need AI-generated content`)
    logger.info('')

    let applied = 0
    let valid = 0
    let failed = 0

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i]
      logger.progress(i + 1, pages.length, `${page._id} (${page.title})`)

      const result = await generateMissingContent(page._id, cliArgs.execute)
      logResult(result)

      if (result.applied) applied++
      if (result.validAfter === true) valid++
      if (result.error) failed++

      // Rate limit between AI calls
      if (i < pages.length - 1) {
        await new Promise((r) => setTimeout(r, 2000))
      }
    }

    logger.info('')
    logger.info('='.repeat(60))
    logger.stats(`Processed:    ${pages.length}`)
    if (cliArgs.execute) {
      logger.success(`Applied:      ${applied}`)
      logger.success(`Now valid:    ${valid}`)
      if (failed > 0) logger.error(`Failed:       ${failed}`)
    }
    logger.info('')
  }
}

function logResult(result: GenerateResult): void {
  if (result.error) {
    logger.error(`  ${result._id}: ${result.error}`)
    return
  }
  if (result.fieldsGenerated.length === 0) {
    logger.info(`  ${result._id}: no missing content`)
    return
  }

  const status = result.applied ? 'APPLIED' : 'PLANNED'
  logger.info(`  [${status}] ${result.fieldsGenerated.length} field(s): ${result.fieldsGenerated.join(', ')}`)

  if (result.validAfter === true) {
    logger.success(`  ${result._id}: now fully valid`)
  } else if (result.validAfter === false) {
    logger.warn(`  ${result._id}: some errors remain after generation`)
  }
}

// Only run CLI when executed directly
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((err) => {
    logger.error(`Fatal error: ${err instanceof Error ? err.message : String(err)}`)
    process.exit(1)
  })
}
