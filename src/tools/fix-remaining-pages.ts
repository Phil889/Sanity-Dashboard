/**
 * One-off script to fix the 2 remaining pages that need AI-generated base content:
 * - vertragsgestaltung: missing descriptions, tagline, services
 * - synthara-ai-studio: too many services for single AI call, split into parts
 */

import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import Anthropic from '@anthropic-ai/sdk'
import { sanityClient } from '../lib/sanity-client.js'
import { config } from '../lib/config.js'
import { withRetry } from '../lib/errors.js'
import { validateSourceQuality } from '../lib/extraction-types.js'
import { logger } from '../lib/logger.js'

const SYSTEM_FIELDS = ['_createdAt', '_updatedAt', '_rev', '__i18n_lang', '__i18n_refs', '__i18n_base', '_system'] as const
const QUERY = `*[_type == "servicePage" && language == "de" && _id == $id][0]`

function extractJson(text: string): unknown {
  let t = text.trim()
  if (t.startsWith('```')) {
    const nl = t.indexOf('\n')
    if (nl !== -1) t = t.slice(nl + 1)
    if (t.endsWith('```')) t = t.slice(0, -3).trim()
  }
  return JSON.parse(t)
}

async function aiCall(prompt: string): Promise<Record<string, unknown>> {
  const anthropic = new Anthropic({ apiKey: config.anthropic.apiKey })
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
  logger.stats(`  Tokens: ${response.usage.input_tokens} in / ${response.usage.output_tokens} out`)
  return extractJson(text) as Record<string, unknown>
}

async function validate(id: string): Promise<boolean> {
  const doc = await sanityClient.fetch(QUERY, { id })
  if (!doc) return false
  for (const f of SYSTEM_FIELDS) delete (doc as Record<string, unknown>)[f]
  const result = validateSourceQuality(doc)
  if (!result.valid) {
    logger.warn(`  Remaining errors: ${result.errors.length}`)
    for (const e of result.errors) logger.info(`    - ${e}`)
  }
  return result.valid
}

// ─── Fix vertragsgestaltung ──────────────────────────────────────────────────

async function fixVertragsgestaltung(): Promise<void> {
  logger.info('')
  logger.search('Fixing vertragsgestaltung...')

  const generated = await aiCall(`Du bist ein Content-Experte für ADVISORI FTC GmbH, eine Beratung für Informationssicherheit, Regulatory Compliance und Risikomanagement im Finanzsektor (~150 Mitarbeiter, ISO 27001 zertifiziert).

Erstelle Inhalte für die Service-Seite "Vertragsgestaltung für Auslagerungsbeziehungen".
Thema: Gestaltung und Prüfung von Auslagerungsverträgen gemäß MaRisk/DORA/EBA-Anforderungen.

Erstelle ein JSON-Objekt mit:

"heroDescription": Ein fachlicher Absatz (3-4 Sätze) über die Bedeutung professioneller Vertragsgestaltung bei Auslagerungen.
"heroTagline": Ein kurzer Untertitel (1 Satz).
"overviewDescription": Ein detaillierter Absatz (4-5 Sätze) über ADVISORIs Beratungsangebot.
"seoDescription": Max 160 Zeichen SEO-Beschreibung.
"services": Array mit 4-6 Services, jeder mit: {"_key": "svc_N", "_type": "object", "title": "...", "description": "...", "features": [{"_key": "feat_N_1", "_type": "object", "text": "..."}, ...]}

Antworte NUR mit dem JSON-Objekt.`)

  const patch: Record<string, unknown> = {}

  if (typeof generated.heroDescription === 'string') {
    patch['heroSection.description'] = generated.heroDescription
    patch['heroSection.tagline'] = typeof generated.heroTagline === 'string'
      ? generated.heroTagline
      : generated.heroDescription.split('.')[0] + '.'
  }
  if (typeof generated.overviewDescription === 'string') {
    patch['overview.description'] = generated.overviewDescription
  }
  if (typeof generated.seoDescription === 'string') {
    patch['seo.description'] = generated.seoDescription
  }
  if (Array.isArray(generated.services)) {
    patch['services'] = generated.services
  }

  logger.info(`  Patching ${Object.keys(patch).length} fields...`)
  await withRetry(
    () => sanityClient.patch('vertragsgestaltung').set(patch).commit(),
    { maxRetries: 3, delayMs: 1000, backoffMultiplier: 2 },
  )

  const valid = await validate('vertragsgestaltung')
  if (valid) {
    logger.success('  vertragsgestaltung: now fully valid')
  } else {
    logger.warn('  vertragsgestaltung: some errors remain')
  }
}

// ─── Fix synthara-ai-studio ─────────────────────────────────────────────────

async function fixSyntharaAiStudio(): Promise<void> {
  logger.info('')
  logger.search('Fixing synthara-ai-studio...')

  // Fetch the page to get service titles
  const doc = await sanityClient.fetch(QUERY, { id: 'synthara-ai-studio' }) as Record<string, unknown>
  if (!doc) { logger.error('  Not found'); return }

  const services = (doc.services ?? []) as Record<string, unknown>[]
  const svcInfo = services.map((s, i) => `${i}: "${s.title}" - ${String(s.description ?? '').substring(0, 100)}`).join('\n')

  // Part 1: Generate whyUs, alert, overviewPoints, testimonial
  logger.info('  Part 1: whyUs, alert, points, testimonial...')
  const part1 = await aiCall(`Du bist ein Content-Experte für ADVISORI FTC GmbH (~150 Mitarbeiter, ISO 27001 zertifiziert, eigene KI-Plattform).

Erstelle Inhalte für "Synthara AI Studio" – ADVISORIs eigene KI-Plattform für Enterprise AI.

JSON mit:
"whyUs": {"title": "Warum ADVISORI?", "points": [{"_key": "why_1", "_type": "object", "text": "..."}, ...]} → 4-5 Punkte
"alert": {"title": "...", "content": "..."} → regulatorischer Hinweis zu KI
"overviewPoints": [{"_key": "point_1", "_type": "object", "text": "..."}, ...] → 4-5 Vorteile
"testimonial": {"_type": "object", "quote": "...", "name": "...", "position": "...", "company": "..."} → fiktives Kundenzitat

NUR JSON.`)

  const patch1: Record<string, unknown> = {}
  if (part1.whyUs) patch1['overview.whyUs'] = part1.whyUs
  if (part1.alert) patch1['overview.alert'] = part1.alert
  if (Array.isArray(part1.overviewPoints)) patch1['overview.points'] = part1.overviewPoints
  if (part1.testimonial) patch1['testimonial'] = part1.testimonial

  await withRetry(
    () => sanityClient.patch('synthara-ai-studio').set(patch1).commit(),
    { maxRetries: 3, delayMs: 1000, backoffMultiplier: 2 },
  )
  logger.info(`  Part 1 applied: ${Object.keys(patch1).length} fields`)

  // Part 2: Generate features for all 8 services
  logger.info('  Part 2: service features...')
  const part2 = await aiCall(`Erstelle Features für diese 8 Services der "Synthara AI Studio" Seite von ADVISORI:

${svcInfo}

JSON mit:
"serviceFeatures": {
  "0": [{"_key": "feat_0_1", "_type": "object", "text": "..."}, ...],
  "1": [...], "2": [...], "3": [...], "4": [...], "5": [...], "6": [...], "7": [...]
}

Je 3-4 konkrete Features pro Service. NUR JSON.`)

  if (part2.serviceFeatures && typeof part2.serviceFeatures === 'object') {
    const svcFeatures = part2.serviceFeatures as Record<string, unknown[]>
    const updatedServices = services.map((svc, idx) => {
      const features = svcFeatures[String(idx)]
      if (Array.isArray(features)) {
        return { ...svc, features }
      }
      return svc
    })
    await withRetry(
      () => sanityClient.patch('synthara-ai-studio').set({ services: updatedServices }).commit(),
      { maxRetries: 3, delayMs: 1000, backoffMultiplier: 2 },
    )
    logger.info('  Part 2 applied: service features')
  }

  const valid = await validate('synthara-ai-studio')
  if (valid) {
    logger.success('  synthara-ai-studio: now fully valid')
  } else {
    logger.warn('  synthara-ai-studio: some errors remain')
  }
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  logger.enableTimestamps()
  await fixVertragsgestaltung()
  await fixSyntharaAiStudio()
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((err) => {
    logger.error(`Fatal error: ${err instanceof Error ? err.message : String(err)}`)
    process.exit(1)
  })
}
