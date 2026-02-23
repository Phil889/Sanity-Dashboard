/**
 * Translation Types
 *
 * Type definitions for the AI translation engine output. Defines the contract
 * between Phase 6 (translation) and Phase 7/8 (upload/verification).
 *
 * TranslatedPage mirrors ExtractedPageSchema but represents the English output
 * with additional i18n linkage fields (__i18n_lang, __i18n_base).
 *
 * @see ./extraction-types.ts for the input contract (German extracted pages)
 */

import type {
  HeroSection,
  OverviewSection,
  ApproachSection,
  ServiceItem,
  FaqItem,
  SeoMeta,
  Testimonial,
  SanityReference,
  SlugObject,
} from './extraction-types.js'

// ─── i18n Reference ─────────────────────────────────────────────────────────

/** Sanity i18n base reference linking an English page back to its German source. */
export interface I18nBaseReference {
  _ref: string
  _type: string
}

// ─── Translated Page ────────────────────────────────────────────────────────

/**
 * A fully translated English servicePage ready for Sanity upload.
 *
 * Mirrors ExtractedPageSchema but with:
 * - `_id`: `${germanId}-en`
 * - `language`: `'en'`
 * - `slug.current`: English path segments + `-en` suffix
 * - `__i18n_lang`: `'en'`
 * - `__i18n_base`: reference back to German source document
 * - All text fields translated to English
 * - All `_key` values regenerated with standardized format
 * - `seo.title`: translated + ` | ADVISORI` appended
 */
export interface TranslatedPage {
  _id: string
  _type: string
  title: string
  slug: SlugObject
  language: string
  __i18n_lang: string
  __i18n_base: I18nBaseReference
  heroSection?: HeroSection
  overview?: OverviewSection
  approach?: ApproachSection
  services?: ServiceItem[]
  faq?: FaqItem[]
  seo?: SeoMeta
  testimonial?: Testimonial
  parent?: SanityReference
  references?: {
    topLevelParent?: SanityReference
  }
}

// ─── Translation Result ─────────────────────────────────────────────────────

/**
 * Result of translating a single page, including the translated content
 * and metadata about the translation process (model, tokens, timing).
 */
export interface TranslationResult {
  /** The fully translated English page. */
  translatedPage: TranslatedPage
  /** The _id of the German source document. */
  germanId: string
  /** The English slug (slug.current) of the translated page. */
  slug: string
  /** Which Claude model was used for translation. */
  model: string
  /** Number of input tokens consumed. */
  inputTokens: number
  /** Number of output tokens generated. */
  outputTokens: number
  /** Wall-clock duration of the translation API call in milliseconds. */
  durationMs: number
}

// ─── Translation Config ─────────────────────────────────────────────────────

/**
 * Configuration for a single translation API call.
 * Sensible defaults: maxTokens=8192, temperature=0.3 (low for consistency).
 */
export interface TranslationConfig {
  /** Claude model identifier. */
  model: string
  /** Maximum output tokens for the translation response. */
  maxTokens: number
  /** Sampling temperature (lower = more deterministic). */
  temperature: number
}

/** Default translation configuration values. */
export const DEFAULT_TRANSLATION_CONFIG: TranslationConfig = {
  model: 'claude-sonnet-4-6',
  maxTokens: 16384,
  temperature: 0.3,
}
