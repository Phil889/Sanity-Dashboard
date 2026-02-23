/**
 * Single-Page Translation Tool
 *
 * CLI tool and programmatic API that translates a single extracted German
 * servicePage JSON to English using the Claude AI API. Applies hybrid
 * AI + code approach: AI translates text, code handles structural transforms.
 *
 * Usage:
 *   npx tsx src/tools/translate-page.ts --input src/data/extracted/kyc.json
 *   npx tsx src/tools/translate-page.ts --input kyc.json --output kyc-en.json
 *   npx tsx src/tools/translate-page.ts --input kyc.json --dry-run
 *   npx tsx src/tools/translate-page.ts --input kyc.json --model claude-sonnet-4-5-20250514 --quiet
 *
 * Exported for module use by batch translation tools:
 *   import { translatePage, type TranslateOptions } from './translate-page.js'
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { pathToFileURL } from 'node:url'
import Anthropic from '@anthropic-ai/sdk'
import { config } from '../lib/config.js'
import { withRetry, ValidationError } from '../lib/errors.js'
import { logger } from '../lib/logger.js'
import { SYSTEM_PROMPT, buildUserPrompt } from '../lib/translation-prompt.js'
import { validateExtractedPage } from '../lib/extraction-types.js'
import { translateSlug, generateKey, FORBIDDEN_TERMS } from '../lib/glossary.js'
import type { ExtractedPageSchema, SanityArrayItem, ServiceItem, FaqItem } from '../lib/extraction-types.js'
import type { TranslatedPage, TranslationResult } from '../lib/translation-types.js'

// ─── Types ──────────────────────────────────────────────────────────────────

/** Options for the translatePage function. */
export interface TranslateOptions {
  /** Path to write translated JSON output file. */
  outputPath?: string
  /** Override the default Claude model. */
  model?: string
  /** If true, print the prompt without calling the API. */
  dryRun?: boolean
  /** If true, suppress logger output. */
  quiet?: boolean
}

// ─── Cost Estimation ────────────────────────────────────────────────────────

/** Approximate cost per million tokens for Claude Sonnet 4 (as of 2025). */
const COST_PER_MILLION_INPUT = 3.0
const COST_PER_MILLION_OUTPUT = 15.0

function estimateCost(inputTokens: number, outputTokens: number): string {
  const inputCost = (inputTokens / 1_000_000) * COST_PER_MILLION_INPUT
  const outputCost = (outputTokens / 1_000_000) * COST_PER_MILLION_OUTPUT
  const totalCost = inputCost + outputCost
  return `$${totalCost.toFixed(4)}`
}

// ─── JSON Parsing Helper ────────────────────────────────────────────────────

/**
 * Extracts JSON from Claude's response, handling potential markdown code fences.
 * Claude sometimes wraps JSON in ```json ... ``` blocks despite instructions.
 */
function extractJsonFromResponse(responseText: string): unknown {
  let text = responseText.trim()

  // Strip markdown code fences if present
  if (text.startsWith('```')) {
    // Remove opening fence (```json or ```)
    const firstNewline = text.indexOf('\n')
    if (firstNewline !== -1) {
      text = text.slice(firstNewline + 1)
    }
    // Remove closing fence
    if (text.endsWith('```')) {
      text = text.slice(0, -3).trim()
    }
  }

  return JSON.parse(text)
}

// ─── Structural Transforms ──────────────────────────────────────────────────

/**
 * Regenerates all _key values in array fields using generateKey().
 * Iterates through all known array fields in a servicePage.
 */
function regenerateKeys(page: Record<string, unknown>): void {
  // heroSection.benefits
  const hero = page.heroSection as Record<string, unknown> | undefined
  if (hero && Array.isArray(hero.benefits)) {
    hero.benefits = (hero.benefits as SanityArrayItem[]).map((item, i) => ({
      ...item,
      _key: generateKey('benefit', i),
    }))
  }

  // overview.points
  const overview = page.overview as Record<string, unknown> | undefined
  if (overview) {
    if (Array.isArray(overview.points)) {
      overview.points = (overview.points as SanityArrayItem[]).map((item, i) => ({
        ...item,
        _key: generateKey('point', i),
      }))
    }
    if (Array.isArray(overview.servicePoints)) {
      overview.servicePoints = (overview.servicePoints as SanityArrayItem[]).map((item, i) => ({
        ...item,
        _key: generateKey('servicePoint', i),
      }))
    }
    // overview.whyUs.points
    const whyUs = overview.whyUs as Record<string, unknown> | undefined
    if (whyUs && Array.isArray(whyUs.points)) {
      whyUs.points = (whyUs.points as SanityArrayItem[]).map((item, i) => ({
        ...item,
        _key: generateKey('whyUs', i),
      }))
    }
  }

  // approach.points
  const approach = page.approach as Record<string, unknown> | undefined
  if (approach && Array.isArray(approach.points)) {
    approach.points = (approach.points as SanityArrayItem[]).map((item, i) => ({
      ...item,
      _key: generateKey('approach', i),
    }))
  }

  // services[].features and services[] keys
  if (Array.isArray(page.services)) {
    page.services = (page.services as ServiceItem[]).map((svc, svcIdx) => {
      const newSvc = {
        ...svc,
        _key: generateKey('service', svcIdx),
      }
      if (Array.isArray(svc.features)) {
        newSvc.features = svc.features.map((feat, featIdx) => ({
          ...feat,
          _key: generateKey(`feature_s${svcIdx}`, featIdx),
        }))
      }
      return newSvc
    })
  }

  // faq[] keys
  if (Array.isArray(page.faq)) {
    page.faq = (page.faq as FaqItem[]).map((item, i) => ({
      ...item,
      _key: generateKey('faq', i),
    }))
  }
}

/**
 * Applies all deterministic structural transforms to the AI-translated output.
 * These transforms ensure structural correctness regardless of AI output quality.
 */
function applyStructuralTransforms(
  aiOutput: Record<string, unknown>,
  germanSource: ExtractedPageSchema,
): TranslatedPage {
  const germanId = germanSource._id

  // Core identity fields
  aiOutput._id = `${germanId}-en`
  aiOutput._type = 'servicePage'
  aiOutput.language = 'en'

  // i18n linkage
  aiOutput.__i18n_lang = 'en'
  aiOutput.__i18n_base = { _ref: germanId, _type: 'reference' }

  // Slug translation (code, not AI)
  aiOutput.slug = {
    _type: 'slug',
    current: translateSlug(germanSource.slug.current),
  }

  // Preserve parent and references from German source (not AI output)
  if (germanSource.parent) {
    aiOutput.parent = { ...germanSource.parent }
  } else {
    delete aiOutput.parent
  }
  if (germanSource.references) {
    aiOutput.references = JSON.parse(JSON.stringify(germanSource.references))
  } else {
    delete aiOutput.references
  }

  // Preserve heroImage from German source
  const aiHero = aiOutput.heroSection as Record<string, unknown> | undefined
  if (aiHero && germanSource.heroSection?.heroImage) {
    aiHero.heroImage = JSON.parse(JSON.stringify(germanSource.heroSection.heroImage))
  }

  // Ensure seo.title ends with " | ADVISORI"
  const aiSeo = aiOutput.seo as Record<string, unknown> | undefined
  if (aiSeo && typeof aiSeo.title === 'string') {
    if (!aiSeo.title.endsWith(' | ADVISORI')) {
      // Strip any existing ADVISORI suffix variations and re-add
      aiSeo.title = aiSeo.title.replace(/\s*\|\s*ADVISORI\s*$/, '').trim() + ' | ADVISORI'
    }
  }

  // Ensure testimonial.name and testimonial.company match German source
  const aiTestimonial = aiOutput.testimonial as Record<string, unknown> | undefined
  if (aiTestimonial && germanSource.testimonial) {
    if (germanSource.testimonial.name) {
      aiTestimonial.name = germanSource.testimonial.name
    }
    if (germanSource.testimonial.company) {
      aiTestimonial.company = germanSource.testimonial.company
    }
  }

  // Regenerate all _key values
  regenerateKeys(aiOutput)

  return aiOutput as unknown as TranslatedPage
}

// ─── Quick Validation ───────────────────────────────────────────────────────

/**
 * Performs quick structural validation on the translated page.
 * Checks the most critical rules that must never be violated.
 */
function quickValidate(
  translated: TranslatedPage,
  germanSource: ExtractedPageSchema,
): string[] {
  const issues: string[] = []

  // Rule 1: Language must be 'en'
  if (translated.language !== 'en') {
    issues.push(`Language is "${translated.language}" instead of "en"`)
  }

  // Rule 8: Slug must end with '-en'
  if (!translated.slug.current.endsWith('-en')) {
    issues.push(`Slug "${translated.slug.current}" does not end with "-en"`)
  }

  // Rule 9: FAQ count must match
  const germanFaqCount = germanSource.faq?.length ?? 0
  const translatedFaqCount = translated.faq?.length ?? 0
  if (germanFaqCount !== translatedFaqCount) {
    issues.push(`FAQ count mismatch: German has ${germanFaqCount}, translated has ${translatedFaqCount}`)
  }

  // Services count must match
  const germanSvcCount = germanSource.services?.length ?? 0
  const translatedSvcCount = translated.services?.length ?? 0
  if (germanSvcCount !== translatedSvcCount) {
    issues.push(`Services count mismatch: German has ${germanSvcCount}, translated has ${translatedSvcCount}`)
  }

  // Rule 10: All required sections present
  if (!translated.heroSection) issues.push('Missing heroSection')
  if (!translated.overview) issues.push('Missing overview')
  if (!translated.approach) issues.push('Missing approach')
  if (!translated.services || translated.services.length === 0) issues.push('Missing services')
  if (!translated.faq || translated.faq.length === 0) issues.push('Missing faq')
  if (!translated.seo) issues.push('Missing seo')
  if (!translated.testimonial) issues.push('Missing testimonial')

  // i18n fields
  if (translated.__i18n_lang !== 'en') {
    issues.push(`__i18n_lang is "${translated.__i18n_lang}" instead of "en"`)
  }
  if (translated.__i18n_base?._ref !== germanSource._id) {
    issues.push(`__i18n_base._ref is "${translated.__i18n_base?._ref}" instead of "${germanSource._id}"`)
  }

  // _id check
  if (translated._id !== `${germanSource._id}-en`) {
    issues.push(`_id is "${translated._id}" instead of "${germanSource._id}-en"`)
  }

  return issues
}

/**
 * Checks for FORBIDDEN_TERMS in the translated output text.
 * Returns a list of found terms (case-insensitive).
 */
function checkForbiddenTerms(translated: TranslatedPage): string[] {
  const found: string[] = []
  const jsonText = JSON.stringify(translated).toLowerCase()
  for (const term of FORBIDDEN_TERMS) {
    if (jsonText.includes(term.toLowerCase())) {
      found.push(term)
    }
  }
  return found
}

// ─── Core Translation Function ──────────────────────────────────────────────

/**
 * Translates a single extracted German servicePage to English.
 *
 * Flow: load JSON -> validate -> build prompts -> call Claude API ->
 * parse response -> structural transforms -> quick validation -> return
 *
 * @param inputPath - Path to the extracted German page JSON file
 * @param options - Translation options (output, model, dry-run, quiet)
 * @returns TranslationResult with translated page, token counts, and duration
 */
export async function translatePage(
  inputPath: string,
  options: TranslateOptions = {},
): Promise<TranslationResult> {
  const { outputPath, model, dryRun = false, quiet = false } = options
  const resolvedInput = resolve(inputPath)

  // ── Load and parse the extracted page ──
  if (!quiet) logger.search(`Loading extracted page: ${resolvedInput}`)

  const rawJson = await readFile(resolvedInput, 'utf-8')
  const parsedData: unknown = JSON.parse(rawJson)

  // ── Validate input ──
  const validation = validateExtractedPage(parsedData)
  if (!validation.valid) {
    throw new ValidationError(
      `Input validation failed for ${resolvedInput}:\n  - ${validation.errors.join('\n  - ')}`,
      { context: { inputPath: resolvedInput, errors: validation.errors } },
    )
  }

  const germanSource = parsedData as ExtractedPageSchema
  if (!quiet) {
    logger.info(`  Page: ${germanSource._id} (${germanSource.title})`)
    logger.stats(`  FAQs: ${validation.stats.faqCount}, Services: ${validation.stats.servicesCount}`)
    if (validation.warnings.length > 0) {
      logger.warn(`  ${validation.warnings.length} warning(s) (non-blocking)`)
    }
  }

  // ── Build prompts ──
  const userPrompt = buildUserPrompt(germanSource)

  if (dryRun) {
    if (!quiet) {
      logger.info('')
      logger.info('='.repeat(60))
      logger.info('  DRY RUN — Prompt Preview')
      logger.info('='.repeat(60))
      logger.info('')
      logger.info('--- SYSTEM PROMPT ---')
      logger.info(SYSTEM_PROMPT)
      logger.info('')
      logger.info('--- USER PROMPT ---')
      logger.info(userPrompt)
      logger.info('')
      logger.info('='.repeat(60))
      logger.info('  Dry run complete. No API call made.')
      logger.info('='.repeat(60))
    }

    // Return a stub result for dry-run (avoid accessing config.anthropic if no model override)
    return {
      translatedPage: {} as TranslatedPage,
      germanId: germanSource._id,
      slug: translateSlug(germanSource.slug.current),
      model: model ?? 'dry-run',
      inputTokens: 0,
      outputTokens: 0,
      durationMs: 0,
    }
  }

  // ── Call Claude API ──
  const translationModel = model ?? config.anthropic.model
  if (!quiet) logger.search(`Calling Claude API (model: ${translationModel})...`)

  const startTime = Date.now()

  const anthropic = new Anthropic({ apiKey: config.anthropic.apiKey })

  let response: Anthropic.Message

  response = await withRetry(
    async () => {
      return anthropic.messages.create({
        model: translationModel,
        max_tokens: 16384,
        temperature: 0.3,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: userPrompt }],
      })
    },
    { maxRetries: 3, delayMs: 2000, backoffMultiplier: 2 },
  )

  const durationMs = Date.now() - startTime
  const inputTokens = response.usage.input_tokens
  const outputTokens = response.usage.output_tokens

  if (!quiet) {
    logger.stats(`  API response in ${(durationMs / 1000).toFixed(1)}s`)
    logger.stats(`  Tokens: ${inputTokens} input, ${outputTokens} output`)
    logger.stats(`  Estimated cost: ${estimateCost(inputTokens, outputTokens)}`)
  }

  // ── Parse response ──
  const responseText = response.content[0].type === 'text'
    ? response.content[0].text
    : ''

  let aiOutput: Record<string, unknown>

  try {
    aiOutput = extractJsonFromResponse(responseText) as Record<string, unknown>
  } catch (parseError) {
    // Retry once with a more explicit prompt
    if (!quiet) logger.warn('JSON parse failed, retrying with explicit JSON-only instruction...')

    const retryResponse = await withRetry(
      async () => {
        return anthropic.messages.create({
          model: translationModel,
          max_tokens: 16384,
          temperature: 0.1,
          system: SYSTEM_PROMPT,
          messages: [
            { role: 'user', content: userPrompt },
            { role: 'assistant', content: responseText },
            {
              role: 'user',
              content: 'Your response could not be parsed as valid JSON. Please return ONLY the translated JSON object. No markdown code fences, no explanations, no text before or after the JSON. Start with { and end with }.',
            },
          ],
        })
      },
      { maxRetries: 2, delayMs: 2000, backoffMultiplier: 2 },
    )

    const retryText = retryResponse.content[0].type === 'text'
      ? retryResponse.content[0].text
      : ''

    try {
      aiOutput = extractJsonFromResponse(retryText) as Record<string, unknown>
    } catch {
      throw new ValidationError(
        `Failed to parse Claude response as JSON after retry.\nFirst attempt snippet: ${responseText.slice(0, 200)}\nRetry snippet: ${retryText.slice(0, 200)}`,
        { context: { germanId: germanSource._id } },
      )
    }
  }

  // ── Structural transforms (deterministic code) ──
  if (!quiet) logger.info('  Applying structural transforms...')
  const translatedPage = applyStructuralTransforms(aiOutput, germanSource)

  // ── Quick validation ──
  const issues = quickValidate(translatedPage, germanSource)
  if (issues.length > 0) {
    if (!quiet) {
      logger.warn(`  Validation issues (${issues.length}):`)
      for (const issue of issues) {
        logger.warn(`    - ${issue}`)
      }
    }
  }

  // Check for forbidden terms
  const forbiddenFound = checkForbiddenTerms(translatedPage)
  if (forbiddenFound.length > 0 && !quiet) {
    logger.warn(`  Forbidden terms detected: ${forbiddenFound.join(', ')}`)
  }

  // ── Write output ──
  if (outputPath) {
    const resolvedOutput = resolve(outputPath)
    await mkdir(dirname(resolvedOutput), { recursive: true })
    await writeFile(resolvedOutput, JSON.stringify(translatedPage, null, 2), 'utf-8')
    if (!quiet) logger.file(`Written to ${resolvedOutput}`)
  }

  // ── Build result ──
  const result: TranslationResult = {
    translatedPage,
    germanId: germanSource._id,
    slug: translatedPage.slug.current,
    model: translationModel,
    inputTokens,
    outputTokens,
    durationMs,
  }

  if (!quiet) {
    logger.info('')
    logger.info('='.repeat(60))
    logger.info('  Translation Summary')
    logger.info('='.repeat(60))
    logger.stats(`  German ID:   ${result.germanId}`)
    logger.stats(`  English ID:  ${translatedPage._id}`)
    logger.stats(`  Slug:        ${result.slug}`)
    logger.stats(`  Model:       ${result.model}`)
    logger.stats(`  Tokens:      ${result.inputTokens} in / ${result.outputTokens} out`)
    logger.stats(`  Cost:        ${estimateCost(result.inputTokens, result.outputTokens)}`)
    logger.stats(`  Duration:    ${(result.durationMs / 1000).toFixed(1)}s`)
    if (issues.length > 0) {
      logger.warn(`  Issues:      ${issues.length}`)
    } else {
      logger.success('All validation checks passed.')
    }
    if (forbiddenFound.length > 0) {
      logger.warn(`  Forbidden:   ${forbiddenFound.join(', ')}`)
    }
    logger.info('')
  }

  return result
}

// ─── CLI Argument Parsing ───────────────────────────────────────────────────

interface CliArgs {
  input: string | null
  output: string | null
  model: string | null
  dryRun: boolean
  quiet: boolean
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2)
  let input: string | null = null
  let output: string | null = null
  let model: string | null = null
  let dryRun = false
  let quiet = false

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--input':
        if (i + 1 < args.length) {
          input = args[++i]
        }
        break
      case '--output':
        if (i + 1 < args.length) {
          output = args[++i]
        }
        break
      case '--model':
        if (i + 1 < args.length) {
          model = args[++i]
        }
        break
      case '--dry-run':
        dryRun = true
        break
      case '--quiet':
        quiet = true
        break
    }
  }

  return { input, output, model, dryRun, quiet }
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const { input, output, model, dryRun, quiet } = parseArgs()

  if (!input) {
    logger.error('Missing required argument: --input <path>')
    logger.info('Usage: npx tsx src/tools/translate-page.ts --input <path> [--output <path>] [--model <model>] [--dry-run] [--quiet]')
    process.exit(1)
  }

  if (!quiet) {
    logger.enableTimestamps()
    logger.info('')
    logger.info('='.repeat(60))
    logger.info('  ADVISORI Translation Engine')
    logger.info('='.repeat(60))
    logger.info('')
  }

  const result = await translatePage(input, {
    outputPath: output ?? undefined,
    model: model ?? undefined,
    dryRun,
    quiet,
  })

  // If no output path and not dry-run, print JSON to stdout
  if (!output && !dryRun) {
    process.stdout.write(JSON.stringify(result.translatedPage, null, 2) + '\n')
  }
}

// Only run CLI entry point when executed directly (not when imported)
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((err) => {
    logger.error(`Fatal error: ${err instanceof Error ? err.message : String(err)}`)
    process.exit(1)
  })
}
