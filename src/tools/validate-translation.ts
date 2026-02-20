/**
 * Translation Validation CLI Tool
 *
 * Validates translated English servicePage JSON files against all 11 mandatory
 * translation rules and optionally cross-validates with the German source.
 * Detects structural issues, forbidden terms, and quality problems.
 *
 * Usage:
 *   npx tsx src/tools/validate-translation.ts --file path/to/page-en.json
 *   npx tsx src/tools/validate-translation.ts --file page-en.json --german page.json
 *   npx tsx src/tools/validate-translation.ts --dir src/data/translated
 *   npx tsx src/tools/validate-translation.ts --dir src/data/translated --german-dir src/data/extracted
 *   npx tsx src/tools/validate-translation.ts --dir src/data/translated --json
 *   npx tsx src/tools/validate-translation.ts --file page-en.json --strict
 *
 * Exit codes:
 *   0 — all files valid
 *   1 — one or more files invalid (or warnings in strict mode)
 *
 * Exported for module use:
 *   import { validateTranslation, type TranslationValidationResult } from './validate-translation.js'
 */

import { readFile, readdir } from 'node:fs/promises'
import { resolve, basename, extname, join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { logger } from '../lib/logger.js'
import { FORBIDDEN_TERMS, DOMAIN_TERMS, GERMAN_STOP_WORDS } from '../lib/glossary.js'

// ─── Types ──────────────────────────────────────────────────────────────────

/** Result for a single translation rule check. */
export interface RuleResult {
  rule: number
  name: string
  passed: boolean
  details?: string
}

/** Structural comparison checks (require German source). */
export interface StructuralChecks {
  faqCountMatch: boolean
  servicesCountMatch: boolean
  sectionsPresent: string[]
  sectionsMissing: string[]
}

/** Quality checks for translation output. */
export interface QualityChecks {
  forbiddenTermsFound: string[]
  testimonialNameMatch: boolean
  testimonialCompanyMatch: boolean
  seoTitleSuffix: boolean
  emojiPreserved: boolean
  germanWordsFound: string[]
  domainTermsUntranslated: string[]
  idFormatValid: boolean
  i18nFieldsConsistent: boolean
}

/** Full validation result for a translated page. */
export interface TranslationValidationResult {
  valid: boolean
  ruleResults: RuleResult[]
  structuralChecks: StructuralChecks
  qualityChecks: QualityChecks
  score: number
  warnings: string[]
}

/** Aggregate report for directory validation. */
export interface DirectoryTranslationReport {
  timestamp: string
  directory: string
  totalFiles: number
  validCount: number
  invalidCount: number
  averageScore: number
  commonFailures: Array<{ rule: number; name: string; failCount: number }>
  fileResults: Array<{ file: string; result: TranslationValidationResult }>
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function isObject(val: unknown): val is Record<string, unknown> {
  return typeof val === 'object' && val !== null && !Array.isArray(val)
}

function isNonEmptyString(val: unknown): val is string {
  return typeof val === 'string' && val.length > 0
}

function isNonEmptyArray(val: unknown): val is unknown[] {
  return Array.isArray(val) && val.length > 0
}

/** Counts emoji characters in a string using Unicode emoji regex. */
function countEmojis(text: string): number {
  // Match common emoji patterns including compound emojis
  const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}\u{1F100}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{200D}\u{20E3}\u{FE0F}]/gu
  const matches = text.match(emojiRegex)
  return matches ? matches.length : 0
}

/** Gets all text content from an object for scanning. */
function getAllTextContent(obj: unknown): string {
  if (typeof obj === 'string') return obj
  if (Array.isArray(obj)) return obj.map(getAllTextContent).join(' ')
  if (isObject(obj)) {
    return Object.values(obj).map(getAllTextContent).join(' ')
  }
  return ''
}

/** Known section keys on a servicePage. */
const SECTION_KEYS = [
  'heroSection',
  'overview',
  'approach',
  'services',
  'faq',
  'seo',
  'testimonial',
] as const

// ─── German Remnant Detection ────────────────────────────────────────────────

/**
 * Words that appear in GERMAN_STOP_WORDS but are also valid English words.
 * These are excluded from German remnant detection to avoid false positives.
 */
const ENGLISH_OVERLAP = new Set(['in', 'an', 'on', 'die', 'von', 'aus'])

/**
 * Proper nouns and acronyms that appear identically in German and English.
 * These should not be flagged as untranslated German text.
 */
const PROPER_NOUNS = new Set([
  'BaFin', 'BSI', 'MaRisk', 'BAIT', 'DORA', 'KWG', 'GwG', 'LkSG',
  'KRITIS', 'ISO', 'ISMS', 'BCM', 'MiFID', 'ESMA', 'EBA',
])

/** Result of German remnant detection scan. */
interface GermanRemnantResult {
  germanWordsFound: string[]
  domainTermsUntranslated: string[]
}

/**
 * Detects untranslated German text remnants in translated content.
 *
 * Scans all text content for:
 * 1. German stop words (function words like "der", "und", "für") using word
 *    boundary regex to avoid false positives (e.g. "under" != "und")
 * 2. Untranslated DOMAIN_TERMS keys — German domain terms that should appear
 *    in their English form in the translation
 *
 * @param allText - All text content from the translated page (concatenated)
 * @returns Lists of German stop words and untranslated domain terms found
 */
function detectGermanRemnants(allText: string): GermanRemnantResult {
  const germanWordsFound: string[] = []
  const domainTermsUntranslated: string[] = []

  // Check German stop words with word boundary matching
  for (const word of GERMAN_STOP_WORDS) {
    // Skip words that overlap with English
    if (ENGLISH_OVERLAP.has(word)) continue

    // Use word boundary regex for case-insensitive match
    // \b ensures "und" matches as a standalone word but not inside "under"
    const regex = new RegExp(`\\b${word}\\b`, 'i')
    if (regex.test(allText)) {
      germanWordsFound.push(word)
    }
  }

  // Check DOMAIN_TERMS keys (German terms that should be translated)
  for (const germanTerm of Object.keys(DOMAIN_TERMS)) {
    // Skip proper nouns / acronyms that are identical in both languages
    if (PROPER_NOUNS.has(germanTerm)) continue

    // Skip short terms (<=3 chars) that could be acronyms or abbreviations
    if (germanTerm.length <= 3) continue

    // Case-insensitive word boundary check for the German domain term
    // Escape special regex chars in the term
    const escaped = germanTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(`\\b${escaped}\\b`, 'i')
    if (regex.test(allText)) {
      domainTermsUntranslated.push(germanTerm)
    }
  }

  return { germanWordsFound, domainTermsUntranslated }
}

// ─── Core Validation ────────────────────────────────────────────────────────

/**
 * Validates a translated English page JSON against all 11 mandatory rules.
 * Optionally cross-validates with the German source if provided.
 *
 * @param translatedPath - Path to the translated English JSON file
 * @param germanPath - Optional path to the German source JSON file
 * @returns TranslationValidationResult with rule results, checks, and score
 */
export async function validateTranslation(
  translatedPath: string,
  germanPath?: string,
): Promise<TranslationValidationResult> {
  const absTranslated = resolve(translatedPath)
  const ruleResults: RuleResult[] = []
  const warnings: string[] = []

  // ── Load translated page ──
  const translatedContent = await readFile(absTranslated, 'utf-8')
  let translated: Record<string, unknown>
  try {
    translated = JSON.parse(translatedContent) as Record<string, unknown>
  } catch {
    // Cannot parse — fail all rules
    return {
      valid: false,
      ruleResults: Array.from({ length: 11 }, (_, i) => ({
        rule: i + 1,
        name: `Rule ${i + 1}`,
        passed: false,
        details: 'Cannot validate: translated file is not valid JSON',
      })),
      structuralChecks: {
        faqCountMatch: false,
        servicesCountMatch: false,
        sectionsPresent: [],
        sectionsMissing: [],
      },
      qualityChecks: {
        forbiddenTermsFound: [],
        testimonialNameMatch: false,
        testimonialCompanyMatch: false,
        seoTitleSuffix: false,
        emojiPreserved: false,
        germanWordsFound: [],
        domainTermsUntranslated: [],
        idFormatValid: false,
        i18nFieldsConsistent: false,
      },
      score: 0,
      warnings: ['Failed to parse translated JSON'],
    }
  }

  // ── Load German source (optional) ──
  let german: Record<string, unknown> | null = null
  if (germanPath) {
    const absGerman = resolve(germanPath)
    try {
      const germanContent = await readFile(absGerman, 'utf-8')
      german = JSON.parse(germanContent) as Record<string, unknown>
    } catch {
      warnings.push(`Failed to load German source: ${germanPath}`)
    }
  }

  // ── Rule 1: language === 'en' ──
  ruleResults.push({
    rule: 1,
    name: 'Language is "en"',
    passed: translated.language === 'en',
    details: translated.language === 'en'
      ? undefined
      : `language is "${String(translated.language)}" instead of "en"`,
  })

  // ── Rule 2: Content non-empty for all sections present in German source ──
  {
    let passed = true
    const details: string[] = []

    if (german) {
      for (const key of SECTION_KEYS) {
        const germanVal = german[key]
        const translatedVal = translated[key]
        if (germanVal !== undefined && germanVal !== null) {
          if (translatedVal === undefined || translatedVal === null) {
            passed = false
            details.push(`${key}: present in German but null/undefined in translation`)
          } else if (typeof translatedVal === 'string' && translatedVal.length === 0) {
            passed = false
            details.push(`${key}: empty string in translation`)
          }
        }
      }
    } else {
      // Without German source, check that sections with content are non-empty
      for (const key of SECTION_KEYS) {
        const val = translated[key]
        if (val !== undefined && val !== null) {
          if (typeof val === 'string' && val.length === 0) {
            passed = false
            details.push(`${key}: empty string`)
          } else if (isObject(val)) {
            // Check key fields within sections
            const textFields = Object.entries(val).filter(
              ([k, v]) => typeof v === 'string' && k !== '_type' && k !== '_key',
            )
            if (textFields.length > 0 && textFields.every(([, v]) => (v as string).length === 0)) {
              passed = false
              details.push(`${key}: all text fields are empty`)
            }
          }
        }
      }
    }

    ruleResults.push({
      rule: 2,
      name: 'Content non-empty for all sections',
      passed,
      details: passed ? undefined : details.join('; '),
    })
  }

  // ── Rule 3: No duplicate FAQ questions ──
  {
    let passed = true
    let details: string | undefined

    if (isNonEmptyArray(translated.faq)) {
      const faq = translated.faq as Record<string, unknown>[]
      const questions = faq
        .map((f) => (isObject(f) ? String(f.question ?? '') : ''))
        .filter((q) => q.length > 0)
      const seen = new Set<string>()
      const duplicates: string[] = []
      for (const q of questions) {
        if (seen.has(q)) {
          duplicates.push(q)
        }
        seen.add(q)
      }
      if (duplicates.length > 0) {
        passed = false
        details = `Duplicate FAQ questions: ${duplicates.map((d) => `"${d.slice(0, 60)}..."`).join(', ')}`
      }
    }

    ruleResults.push({
      rule: 3,
      name: 'No duplicate FAQ questions',
      passed,
      details,
    })
  }

  // ── Rule 4: Testimonial has quote, name, position, company ──
  {
    let passed = true
    const missing: string[] = []

    if (isObject(translated.testimonial)) {
      const t = translated.testimonial as Record<string, unknown>
      if (!isNonEmptyString(t.quote)) { passed = false; missing.push('quote') }
      if (!isNonEmptyString(t.name)) { passed = false; missing.push('name') }
      if (!isNonEmptyString(t.position)) { passed = false; missing.push('position') }
      if (!isNonEmptyString(t.company)) { passed = false; missing.push('company') }
      // author is optional — just warn
      if (!isNonEmptyString(t.author)) {
        warnings.push('testimonial.author is not present (optional)')
      }
    } else if (german && isObject(german.testimonial)) {
      // German has testimonial but translation doesn't
      passed = false
      missing.push('entire testimonial section')
    }
    // If neither has testimonial, rule passes (nothing to check)

    ruleResults.push({
      rule: 4,
      name: 'Testimonial has quote, name, position, company',
      passed,
      details: passed ? undefined : `Missing: ${missing.join(', ')}`,
    })
  }

  // ── Rule 5: Emoji count preserved (compare FAQ answers) ──
  {
    let passed = true
    let details: string | undefined

    if (german && isNonEmptyArray(german.faq) && isNonEmptyArray(translated.faq)) {
      const germanFaq = german.faq as Record<string, unknown>[]
      const translatedFaq = translated.faq as Record<string, unknown>[]
      let germanTotal = 0
      let translatedTotal = 0

      for (const item of germanFaq) {
        if (isObject(item) && typeof item.answer === 'string') {
          germanTotal += countEmojis(item.answer)
        }
      }
      for (const item of translatedFaq) {
        if (isObject(item) && typeof item.answer === 'string') {
          translatedTotal += countEmojis(item.answer)
        }
      }

      if (translatedTotal < germanTotal) {
        passed = false
        details = `Emoji count: German FAQs have ${germanTotal}, translated have ${translatedTotal}`
      }
    } else if (!german) {
      // Without German source, skip (pass by default)
      warnings.push('Rule 5 (emoji preservation) skipped: no German source provided')
    }

    ruleResults.push({
      rule: 5,
      name: 'Emoji count preserved in FAQ answers',
      passed,
      details,
    })
  }

  // ── Rule 6: Optional fields only present if in German source ──
  {
    let passed = true
    const hallucinated: string[] = []

    if (german) {
      // Check optional top-level sections
      const optionalSections = ['heroSection', 'overview', 'approach', 'testimonial'] as const
      for (const section of optionalSections) {
        if (translated[section] !== undefined && german[section] === undefined) {
          passed = false
          hallucinated.push(section)
        }
      }

      // Check optional fields within overview
      if (isObject(translated.overview) && isObject(german.overview)) {
        const tOverview = translated.overview as Record<string, unknown>
        const gOverview = german.overview as Record<string, unknown>
        const optionalOverviewFields = ['additionalInfo', 'alert', 'whyUs', 'serviceDescription', 'servicePoints'] as const
        for (const field of optionalOverviewFields) {
          if (tOverview[field] !== undefined && tOverview[field] !== null && (gOverview[field] === undefined || gOverview[field] === null)) {
            passed = false
            hallucinated.push(`overview.${field}`)
          }
        }
      }
    } else {
      warnings.push('Rule 6 (no hallucinated sections) skipped: no German source provided')
    }

    ruleResults.push({
      rule: 6,
      name: 'Optional fields only present if in German source',
      passed,
      details: passed ? undefined : `Hallucinated fields: ${hallucinated.join(', ')}`,
    })
  }

  // ── Rule 7: All _key values match prefix_timestamp_index pattern and are unique ──
  {
    let passed = true
    const issues: string[] = []
    const allKeys = new Set<string>()
    const keyPattern = /^[a-zA-Z][a-zA-Z0-9]*_\d+_\d+$/

    function checkKeys(obj: unknown, path: string): void {
      if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
          checkKeys(obj[i], `${path}[${i}]`)
        }
      } else if (isObject(obj)) {
        if (typeof obj._key === 'string') {
          const key = obj._key
          if (!keyPattern.test(key)) {
            passed = false
            issues.push(`${path}._key "${key}" does not match prefix_timestamp_index pattern`)
          }
          if (allKeys.has(key)) {
            passed = false
            issues.push(`${path}._key "${key}" is duplicated`)
          }
          allKeys.add(key)
        }
        for (const [k, v] of Object.entries(obj)) {
          if (k !== '_key') {
            checkKeys(v, `${path}.${k}`)
          }
        }
      }
    }

    checkKeys(translated, 'root')

    ruleResults.push({
      rule: 7,
      name: 'All _key values match pattern and are unique',
      passed,
      details: passed ? undefined : issues.slice(0, 5).join('; ') + (issues.length > 5 ? ` (+${issues.length - 5} more)` : ''),
    })
  }

  // ── Rule 8: slug.current ends with '-en' and is kebab-case ──
  {
    let passed = true
    const issues: string[] = []
    const kebabCaseRegex = /^[a-z0-9]+(-[a-z0-9]+)*$/

    if (isObject(translated.slug) && typeof (translated.slug as Record<string, unknown>).current === 'string') {
      const slug = (translated.slug as Record<string, unknown>).current as string

      if (!slug.endsWith('-en')) {
        passed = false
        issues.push(`slug "${slug}" does not end with "-en"`)
      }

      // Check that each segment is kebab-case
      const segments = slug.split('/')
      for (const seg of segments) {
        if (!kebabCaseRegex.test(seg)) {
          passed = false
          issues.push(`slug segment "${seg}" is not kebab-case`)
        }
      }
    } else {
      passed = false
      issues.push('slug.current is missing')
    }

    ruleResults.push({
      rule: 8,
      name: 'Slug ends with "-en" and is kebab-case',
      passed,
      details: passed ? undefined : issues.join('; '),
    })
  }

  // ── Rule 9: FAQ count matches German source ──
  {
    let passed = true
    let details: string | undefined

    if (german) {
      const germanFaqCount = Array.isArray(german.faq) ? german.faq.length : 0
      const translatedFaqCount = Array.isArray(translated.faq) ? translated.faq.length : 0
      if (germanFaqCount !== translatedFaqCount) {
        passed = false
        details = `FAQ count mismatch: German has ${germanFaqCount}, translated has ${translatedFaqCount}`
      }
    } else {
      warnings.push('Rule 9 (FAQ count match) skipped: no German source provided')
    }

    ruleResults.push({
      rule: 9,
      name: 'FAQ count matches German source',
      passed,
      details,
    })
  }

  // ── Rule 10: All sections present in German are in translation ──
  {
    let passed = true
    const missing: string[] = []

    if (german) {
      for (const key of SECTION_KEYS) {
        if (german[key] !== undefined && german[key] !== null) {
          if (translated[key] === undefined || translated[key] === null) {
            passed = false
            missing.push(key)
          }
        }
      }
    } else {
      // Without German source, check basic sections exist
      const requiredSections = ['heroSection', 'overview', 'approach', 'services', 'faq', 'seo'] as const
      for (const key of requiredSections) {
        if (translated[key] === undefined || translated[key] === null) {
          passed = false
          missing.push(key)
        }
      }
    }

    ruleResults.push({
      rule: 10,
      name: 'All sections present in German are in translation',
      passed,
      details: passed ? undefined : `Missing sections: ${missing.join(', ')}`,
    })
  }

  // ── Rule 11: All array items have _type: 'object' ──
  {
    let passed = true
    const issues: string[] = []

    function checkArrayTypes(obj: unknown, path: string): void {
      if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
          const item = obj[i]
          if (isObject(item)) {
            if (item._type !== 'object') {
              passed = false
              issues.push(`${path}[${i}]._type is "${String(item._type)}" instead of "object"`)
            }
            // Recurse into nested objects
            for (const [k, v] of Object.entries(item)) {
              checkArrayTypes(v, `${path}[${i}].${k}`)
            }
          }
        }
      } else if (isObject(obj)) {
        for (const [k, v] of Object.entries(obj)) {
          checkArrayTypes(v, `${path}.${k}`)
        }
      }
    }

    // Check all known array-containing sections
    checkArrayTypes(translated.heroSection, 'heroSection')
    checkArrayTypes(translated.overview, 'overview')
    checkArrayTypes(translated.approach, 'approach')
    checkArrayTypes(translated.services, 'services')
    checkArrayTypes(translated.faq, 'faq')

    ruleResults.push({
      rule: 11,
      name: 'All array items have _type: "object"',
      passed,
      details: passed ? undefined : issues.slice(0, 5).join('; ') + (issues.length > 5 ? ` (+${issues.length - 5} more)` : ''),
    })
  }

  // ── Structural checks ──
  const structuralChecks: StructuralChecks = {
    faqCountMatch: true,
    servicesCountMatch: true,
    sectionsPresent: [],
    sectionsMissing: [],
  }

  for (const key of SECTION_KEYS) {
    if (translated[key] !== undefined && translated[key] !== null) {
      structuralChecks.sectionsPresent.push(key)
    } else if (german && german[key] !== undefined && german[key] !== null) {
      structuralChecks.sectionsMissing.push(key)
    }
  }

  if (german) {
    const germanFaqCount = Array.isArray(german.faq) ? german.faq.length : 0
    const translatedFaqCount = Array.isArray(translated.faq) ? translated.faq.length : 0
    structuralChecks.faqCountMatch = germanFaqCount === translatedFaqCount

    const germanSvcCount = Array.isArray(german.services) ? german.services.length : 0
    const translatedSvcCount = Array.isArray(translated.services) ? translated.services.length : 0
    structuralChecks.servicesCountMatch = germanSvcCount === translatedSvcCount
  }

  // ── Quality checks ──
  const qualityChecks: QualityChecks = {
    forbiddenTermsFound: [],
    testimonialNameMatch: true,
    testimonialCompanyMatch: true,
    seoTitleSuffix: false,
    emojiPreserved: true,
    germanWordsFound: [],
    domainTermsUntranslated: [],
    idFormatValid: true,
    i18nFieldsConsistent: true,
  }

  // Scan for FORBIDDEN_TERMS
  const allText = getAllTextContent(translated).toLowerCase()
  for (const term of FORBIDDEN_TERMS) {
    if (allText.includes(term.toLowerCase())) {
      qualityChecks.forbiddenTermsFound.push(term)
    }
  }

  // Testimonial name/company match
  if (german && isObject(german.testimonial) && isObject(translated.testimonial)) {
    const gTest = german.testimonial as Record<string, unknown>
    const tTest = translated.testimonial as Record<string, unknown>
    qualityChecks.testimonialNameMatch = !isNonEmptyString(gTest.name) || tTest.name === gTest.name
    qualityChecks.testimonialCompanyMatch = !isNonEmptyString(gTest.company) || tTest.company === gTest.company
  }

  // SEO title suffix
  if (isObject(translated.seo)) {
    const seo = translated.seo as Record<string, unknown>
    qualityChecks.seoTitleSuffix = typeof seo.title === 'string' && seo.title.endsWith('| ADVISORI')
  }

  // Emoji preservation
  if (german && isNonEmptyArray(german.faq) && isNonEmptyArray(translated.faq)) {
    const germanFaq = german.faq as Record<string, unknown>[]
    const translatedFaq = translated.faq as Record<string, unknown>[]
    let germanTotal = 0
    let translatedTotal = 0

    for (const item of germanFaq) {
      if (isObject(item) && typeof item.answer === 'string') {
        germanTotal += countEmojis(item.answer)
      }
    }
    for (const item of translatedFaq) {
      if (isObject(item) && typeof item.answer === 'string') {
        translatedTotal += countEmojis(item.answer)
      }
    }
    qualityChecks.emojiPreserved = translatedTotal >= germanTotal
  }

  // Add quality warnings
  if (qualityChecks.forbiddenTermsFound.length > 0) {
    warnings.push(`Forbidden terms found: ${qualityChecks.forbiddenTermsFound.join(', ')}`)
  }
  if (!qualityChecks.testimonialNameMatch) {
    warnings.push('Testimonial name does not match German source')
  }
  if (!qualityChecks.testimonialCompanyMatch) {
    warnings.push('Testimonial company does not match German source')
  }
  if (!qualityChecks.seoTitleSuffix) {
    warnings.push('seo.title does not end with "| ADVISORI"')
  }
  if (!qualityChecks.emojiPreserved) {
    warnings.push('Emoji count in translation is less than German source')
  }

  // ── German remnant detection ──
  const remnants = detectGermanRemnants(allText)
  qualityChecks.germanWordsFound = remnants.germanWordsFound
  qualityChecks.domainTermsUntranslated = remnants.domainTermsUntranslated

  if (remnants.germanWordsFound.length > 0) {
    warnings.push(`German stop words found: ${remnants.germanWordsFound.join(', ')}`)
  }
  if (remnants.domainTermsUntranslated.length > 0) {
    warnings.push(`Untranslated domain terms found: ${remnants.domainTermsUntranslated.join(', ')}`)
  }

  // ── i18n field and _id consistency checks ──
  {
    const idStr = typeof translated._id === 'string' ? translated._id : ''
    const i18nLang = translated.__i18n_lang
    const i18nBase = translated.__i18n_base

    // _id format check: must end with '-en'
    if (!idStr.endsWith('-en')) {
      qualityChecks.idFormatValid = false
      warnings.push(`_id "${idStr}" does not end with "-en"`)
    }

    // If German source provided, _id must equal ${german._id}-en
    if (german && typeof german._id === 'string') {
      const expectedId = `${german._id}-en`
      if (idStr !== expectedId) {
        qualityChecks.idFormatValid = false
        warnings.push(`_id "${idStr}" does not match expected "${expectedId}" (german._id + "-en")`)
      }
    }

    // __i18n_lang must be 'en'
    if (i18nLang !== 'en') {
      qualityChecks.i18nFieldsConsistent = false
      warnings.push(`__i18n_lang is "${String(i18nLang)}" instead of "en"`)
    }

    // __i18n_base must be an object with _ref (string) and _type: 'reference'
    if (isObject(i18nBase)) {
      const base = i18nBase as Record<string, unknown>
      if (typeof base._ref !== 'string' || base._ref.length === 0) {
        qualityChecks.i18nFieldsConsistent = false
        warnings.push('__i18n_base._ref is missing or empty')
      }
      if (base._type !== 'reference') {
        qualityChecks.i18nFieldsConsistent = false
        warnings.push(`__i18n_base._type is "${String(base._type)}" instead of "reference"`)
      }

      // If German source provided, __i18n_base._ref must equal german._id
      if (german && typeof german._id === 'string' && typeof base._ref === 'string') {
        if (base._ref !== german._id) {
          qualityChecks.i18nFieldsConsistent = false
          warnings.push(`__i18n_base._ref "${base._ref}" does not match german._id "${german._id}"`)
        }
      }

      // Cross-consistency: _id stripped of '-en' must equal __i18n_base._ref
      if (idStr.endsWith('-en') && typeof base._ref === 'string') {
        const idWithoutSuffix = idStr.slice(0, -3) // strip '-en'
        if (idWithoutSuffix !== base._ref) {
          qualityChecks.i18nFieldsConsistent = false
          warnings.push(`_id without "-en" suffix ("${idWithoutSuffix}") does not match __i18n_base._ref ("${base._ref}")`)
        }
      }
    } else {
      qualityChecks.i18nFieldsConsistent = false
      warnings.push('__i18n_base is missing or not an object')
    }
  }

  // ── Score ──
  const score = ruleResults.filter((r) => r.passed).length

  return {
    valid: score === 11,
    ruleResults,
    structuralChecks,
    qualityChecks,
    score,
    warnings,
  }
}

// ─── Directory Validation ───────────────────────────────────────────────────

/**
 * Validates all *-en.json files in a directory and produces an aggregate report.
 *
 * @param dirPath - Directory containing translated JSON files
 * @param germanDirPath - Optional directory containing German source JSON files
 * @returns DirectoryTranslationReport with aggregate statistics
 */
export async function validateTranslationDirectory(
  dirPath: string,
  germanDirPath?: string,
): Promise<DirectoryTranslationReport> {
  const absDir = resolve(dirPath)
  const entries = await readdir(absDir)
  const enFiles = entries.filter(
    (f) => extname(f) === '.json' && f.endsWith('-en.json'),
  )

  const fileResults: Array<{ file: string; result: TranslationValidationResult }> = []
  const ruleFailCounts = new Map<number, { name: string; count: number }>()

  for (const file of enFiles) {
    const filePath = join(absDir, file)

    // Try to match German source by stripping '-en' from filename
    let germanPath: string | undefined
    if (germanDirPath) {
      const germanFilename = file.replace(/-en\.json$/, '.json')
      const candidatePath = join(resolve(germanDirPath), germanFilename)
      try {
        await readFile(candidatePath, 'utf-8')
        germanPath = candidatePath
      } catch {
        // German source not found — validate without it
      }
    }

    const result = await validateTranslation(filePath, germanPath)
    fileResults.push({ file, result })

    // Track rule failures
    for (const rr of result.ruleResults) {
      if (!rr.passed) {
        const existing = ruleFailCounts.get(rr.rule)
        if (existing) {
          existing.count++
        } else {
          ruleFailCounts.set(rr.rule, { name: rr.name, count: 1 })
        }
      }
    }
  }

  // Aggregate
  const validCount = fileResults.filter((r) => r.result.valid).length
  const invalidCount = fileResults.length - validCount
  const averageScore =
    fileResults.length > 0
      ? Math.round(
          (fileResults.reduce((sum, r) => sum + r.result.score, 0) / fileResults.length) * 10,
        ) / 10
      : 0

  const commonFailures = Array.from(ruleFailCounts.entries())
    .map(([rule, { name, count }]) => ({ rule, name, failCount: count }))
    .sort((a, b) => b.failCount - a.failCount)

  return {
    timestamp: new Date().toISOString(),
    directory: absDir,
    totalFiles: fileResults.length,
    validCount,
    invalidCount,
    averageScore,
    commonFailures,
    fileResults,
  }
}

// ─── Display Functions ──────────────────────────────────────────────────────

function displaySingleResult(file: string, result: TranslationValidationResult): void {
  logger.info('')
  logger.info('='.repeat(60))
  logger.info('  Translation Validation')
  logger.info('='.repeat(60))
  logger.info('')
  logger.stats(`File:    ${file}`)
  logger.stats(`Valid:   ${result.valid ? 'YES' : 'NO'}`)
  logger.stats(`Score:   ${result.score}/11`)
  logger.info('')

  // Rule results
  logger.info('Rule Results')
  logger.info('-'.repeat(50))
  for (const rr of result.ruleResults) {
    const icon = rr.passed ? 'PASS' : 'FAIL'
    const prefix = rr.passed ? '  ' : '  '
    logger.info(`${prefix}[${icon}] Rule ${rr.rule}: ${rr.name}`)
    if (rr.details) {
      logger.info(`         ${rr.details}`)
    }
  }
  logger.info('')

  // Structural checks
  logger.info('Structural Checks')
  logger.info('-'.repeat(50))
  logger.stats(`  FAQ count match:      ${result.structuralChecks.faqCountMatch}`)
  logger.stats(`  Services count match: ${result.structuralChecks.servicesCountMatch}`)
  logger.stats(`  Sections present:     ${result.structuralChecks.sectionsPresent.join(', ') || 'none'}`)
  if (result.structuralChecks.sectionsMissing.length > 0) {
    logger.warn(`  Sections missing:     ${result.structuralChecks.sectionsMissing.join(', ')}`)
  }
  logger.info('')

  // Quality checks
  logger.info('Quality Checks')
  logger.info('-'.repeat(50))
  if (result.qualityChecks.forbiddenTermsFound.length > 0) {
    logger.warn(`  Forbidden terms:     ${result.qualityChecks.forbiddenTermsFound.join(', ')}`)
  } else {
    logger.stats('  Forbidden terms:     none')
  }
  logger.stats(`  Testimonial name:    ${result.qualityChecks.testimonialNameMatch ? 'match' : 'MISMATCH'}`)
  logger.stats(`  Testimonial company: ${result.qualityChecks.testimonialCompanyMatch ? 'match' : 'MISMATCH'}`)
  logger.stats(`  SEO title suffix:    ${result.qualityChecks.seoTitleSuffix ? 'ok' : 'MISSING'}`)
  logger.stats(`  Emoji preserved:     ${result.qualityChecks.emojiPreserved ? 'yes' : 'NO'}`)
  if (result.qualityChecks.germanWordsFound.length > 0) {
    logger.warn(`  German remnants:     ${result.qualityChecks.germanWordsFound.join(', ')}`)
  } else {
    logger.stats('  German remnants:     none')
  }
  if (result.qualityChecks.domainTermsUntranslated.length > 0) {
    logger.warn(`  Untranslated terms:  ${result.qualityChecks.domainTermsUntranslated.join(', ')}`)
  } else {
    logger.stats('  Untranslated terms:  none')
  }
  logger.stats(`  _id format:          ${result.qualityChecks.idFormatValid ? 'ok' : 'INVALID'}`)
  logger.stats(`  i18n consistency:    ${result.qualityChecks.i18nFieldsConsistent ? 'ok' : 'INCONSISTENT'}`)
  logger.info('')

  // Warnings
  if (result.warnings.length > 0) {
    logger.warn(`Warnings (${result.warnings.length}):`)
    for (const w of result.warnings) {
      logger.info(`  - ${w}`)
    }
    logger.info('')
  }
}

function displayDirectoryReport(report: DirectoryTranslationReport, strict: boolean): void {
  logger.info('')
  logger.info('='.repeat(60))
  logger.info('  Translation Validation Summary')
  logger.info('='.repeat(60))
  logger.info('')
  logger.stats(`Total files:    ${report.totalFiles}`)
  logger.stats(`Valid:          ${report.validCount}`)
  logger.stats(`Invalid:        ${report.invalidCount}`)
  logger.stats(`Average score:  ${report.averageScore}/11`)
  logger.info('')

  // Common failures
  if (report.commonFailures.length > 0) {
    logger.info('Common Failures')
    logger.info('-'.repeat(50))
    for (const f of report.commonFailures) {
      logger.info(`  Rule ${f.rule} (${f.name}): ${f.failCount} file(s)`)
    }
    logger.info('')
  }

  // Invalid files
  const invalidFiles = report.fileResults.filter((r) => !r.result.valid)
  if (invalidFiles.length > 0) {
    logger.info('Invalid Files')
    logger.info('-'.repeat(50))
    for (const f of invalidFiles) {
      const failedRules = f.result.ruleResults
        .filter((rr) => !rr.passed)
        .map((rr) => `R${rr.rule}`)
        .join(', ')
      logger.error(`  ${f.file}: score ${f.result.score}/11 (failed: ${failedRules})`)
    }
    logger.info('')
  }

  // Quality warnings across all files
  const filesWithForbidden = report.fileResults.filter(
    (r) => r.result.qualityChecks.forbiddenTermsFound.length > 0,
  )
  if (filesWithForbidden.length > 0) {
    logger.info('Files with Forbidden Terms')
    logger.info('-'.repeat(50))
    for (const f of filesWithForbidden) {
      logger.warn(`  ${f.file}: ${f.result.qualityChecks.forbiddenTermsFound.join(', ')}`)
    }
    logger.info('')
  }

  // German remnant warnings across all files
  const filesWithGermanRemnants = report.fileResults.filter(
    (r) => r.result.qualityChecks.germanWordsFound.length > 0 || r.result.qualityChecks.domainTermsUntranslated.length > 0,
  )
  if (filesWithGermanRemnants.length > 0) {
    logger.info('Files with German Remnants')
    logger.info('-'.repeat(50))
    for (const f of filesWithGermanRemnants) {
      const words = f.result.qualityChecks.germanWordsFound
      const terms = f.result.qualityChecks.domainTermsUntranslated
      const parts: string[] = []
      if (words.length > 0) parts.push(`stop words: ${words.join(', ')}`)
      if (terms.length > 0) parts.push(`domain terms: ${terms.join(', ')}`)
      logger.warn(`  ${f.file}: ${parts.join('; ')}`)
    }
    logger.info('')
  }

  // i18n consistency warnings across all files
  const filesWithI18nIssues = report.fileResults.filter(
    (r) => !r.result.qualityChecks.idFormatValid || !r.result.qualityChecks.i18nFieldsConsistent,
  )
  if (filesWithI18nIssues.length > 0) {
    logger.info('Files with i18n Consistency Issues')
    logger.info('-'.repeat(50))
    for (const f of filesWithI18nIssues) {
      const issues: string[] = []
      if (!f.result.qualityChecks.idFormatValid) issues.push('_id format')
      if (!f.result.qualityChecks.i18nFieldsConsistent) issues.push('i18n fields')
      logger.warn(`  ${f.file}: ${issues.join(', ')}`)
    }
    logger.info('')
  }

  // Strict mode — show warnings
  if (strict) {
    const filesWithWarnings = report.fileResults.filter((r) => r.result.warnings.length > 0)
    if (filesWithWarnings.length > 0) {
      logger.info('Files with Warnings (strict mode)')
      logger.info('-'.repeat(50))
      for (const f of filesWithWarnings) {
        logger.warn(`  ${f.file}: ${f.result.warnings.length} warning(s)`)
      }
      logger.info('')
    }
  }
}

// ─── CLI Argument Parsing ───────────────────────────────────────────────────

interface CliArgs {
  file: string | null
  german: string | null
  dir: string | null
  germanDir: string | null
  json: boolean
  strict: boolean
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2)
  let file: string | null = null
  let german: string | null = null
  let dir: string | null = null
  let germanDir: string | null = null
  let json = false
  let strict = false

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--file':
        if (i + 1 < args.length) file = args[++i]
        break
      case '--german':
        if (i + 1 < args.length) german = args[++i]
        break
      case '--dir':
        if (i + 1 < args.length) dir = args[++i]
        break
      case '--german-dir':
        if (i + 1 < args.length) germanDir = args[++i]
        break
      case '--json':
        json = true
        break
      case '--strict':
        strict = true
        break
    }
  }

  return { file, german, dir, germanDir, json, strict }
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const { file, german, dir, germanDir, json, strict } = parseArgs()

  if (!file && !dir) {
    logger.error('Missing required argument: --file <path> or --dir <path>')
    logger.info('Usage:')
    logger.info('  npx tsx src/tools/validate-translation.ts --file <path> [--german <path>]')
    logger.info('  npx tsx src/tools/validate-translation.ts --dir <path> [--german-dir <path>] [--json] [--strict]')
    process.exit(1)
  }

  // Single-file mode
  if (file) {
    const result = await validateTranslation(file, german ?? undefined)

    if (json) {
      process.stdout.write(JSON.stringify(result, null, 2) + '\n')
    } else {
      displaySingleResult(basename(file), result)
    }

    if (strict && result.warnings.length > 0) {
      process.exit(1)
    }
    process.exit(result.valid ? 0 : 1)
  }

  // Directory mode
  if (dir) {
    const report = await validateTranslationDirectory(dir, germanDir ?? undefined)

    if (json) {
      process.stdout.write(JSON.stringify(report, null, 2) + '\n')
    } else {
      displayDirectoryReport(report, strict)
    }

    // Exit code logic
    if (strict) {
      const hasWarnings = report.fileResults.some((r) => r.result.warnings.length > 0)
      process.exit(report.invalidCount > 0 || hasWarnings ? 1 : 0)
    } else {
      process.exit(report.invalidCount > 0 ? 1 : 0)
    }
  }
}

// Only run CLI entry point when executed directly (not when imported)
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((err) => {
    logger.error(`Fatal error: ${err instanceof Error ? err.message : String(err)}`)
    process.exit(1)
  })
}
