/**
 * Extraction Types and Validators
 *
 * Canonical type definitions and validation functions for extracted German
 * servicePages. Defines the contract between Phase 5 (extraction) and
 * Phase 6 (translation engine).
 *
 * Types are compatible with the ExtractedPage interface from extract-page.ts
 * but expressed as standalone canonical schemas for downstream consumers.
 *
 * @see .planning/phases/01-audit-assessment/01-04-SUMMARY.md for full schema audit
 */

// ─── Canonical Type Definitions ─────────────────────────────────────────────

/** A single array item with Sanity-required _key and _type */
export interface SanityArrayItem {
  _key: string
  _type: string
  text?: string
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
export interface OverviewAlert {
  title?: string
  content?: string
}

/** "Why Us" block within overview */
export interface WhyUs {
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
export interface ServiceItem {
  _key: string
  _type: string
  title?: string
  description?: string
  features?: SanityArrayItem[]
}

/** A single FAQ entry */
export interface FaqItem {
  _key: string
  _type: string
  question?: string
  answer?: string
}

/** SEO metadata */
export interface SeoMeta {
  _type: string
  title?: string
  description?: string
  keywords?: string
}

/** Testimonial section */
export interface Testimonial {
  _type: string
  name?: string
  position?: string
  company?: string
  quote?: string
}

/** Sanity reference */
export interface SanityReference {
  _ref: string
  _type: string
}

/** Slug object */
export interface SlugObject {
  _type: string
  current: string
}

/**
 * The full canonical extraction schema that Phase 6 will consume.
 * Mirrors ExtractedPage from extract-page.ts but serves as the
 * standalone contract for downstream consumers.
 */
export interface ExtractedPageSchema {
  _id: string
  _type: string
  title: string
  slug: SlugObject
  language: string
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

// ─── Validation Result ──────────────────────────────────────────────────────

/** Statistics about a validated extracted page */
export interface ValidationStats {
  faqCount: number
  servicesCount: number
  hasBenefits: boolean
  hasHeroImage: boolean
  hasTestimonialAuthor: boolean
  hasWhyUs: boolean
  hasAlert: boolean
}

/** Result of validating an extracted page */
export interface ValidationResult {
  valid: boolean
  errors: string[]
  warnings: string[]
  stats: ValidationStats
}

// ─── Validation Helpers ─────────────────────────────────────────────────────

function isObject(val: unknown): val is Record<string, unknown> {
  return typeof val === 'object' && val !== null && !Array.isArray(val)
}

function isNonEmptyString(val: unknown): val is string {
  return typeof val === 'string' && val.length > 0
}

function isNonEmptyArray(val: unknown): val is unknown[] {
  return Array.isArray(val) && val.length > 0
}

// ─── Core Validation Function ───────────────────────────────────────────────

/**
 * Validates an unknown data object against the ExtractedPageSchema.
 *
 * Checks all required fields and reports missing optional fields as warnings.
 * Returns a ValidationResult with errors (blocking), warnings (informational),
 * and statistics about the page content.
 *
 * @param data - Unknown data to validate (typically parsed JSON)
 * @returns ValidationResult with valid flag, errors, warnings, and stats
 */
export function validateExtractedPage(data: unknown): ValidationResult {
  const errors: string[] = []
  const warnings: string[] = []
  const stats: ValidationStats = {
    faqCount: 0,
    servicesCount: 0,
    hasBenefits: false,
    hasHeroImage: false,
    hasTestimonialAuthor: false,
    hasWhyUs: false,
    hasAlert: false,
  }

  // Top-level must be an object
  if (!isObject(data)) {
    return { valid: false, errors: ['Data is not an object'], warnings, stats }
  }

  const page = data as Record<string, unknown>

  // ── Required top-level fields ──
  if (!isNonEmptyString(page._id)) {
    errors.push('Missing or empty _id')
  }
  if (page._type !== 'servicePage') {
    errors.push(`_type must be "servicePage", got "${String(page._type)}"`)
  }
  if (!isNonEmptyString(page.title)) {
    errors.push('Missing or empty title')
  }
  if (page.language !== 'de') {
    errors.push(`language must be "de", got "${String(page.language)}"`)
  }

  // ── Slug ──
  if (isObject(page.slug)) {
    const slug = page.slug as Record<string, unknown>
    if (!isNonEmptyString(slug.current)) {
      errors.push('slug.current is missing or empty')
    }
  } else {
    errors.push('Missing slug object')
  }

  // ── Hero Section ──
  if (isObject(page.heroSection)) {
    const hero = page.heroSection as Record<string, unknown>
    if (!isNonEmptyString(hero.heading)) {
      errors.push('heroSection.heading is missing or empty')
    }
    if (!isNonEmptyString(hero.tagline)) {
      errors.push('heroSection.tagline is missing or empty')
    }
    if (!isNonEmptyString(hero.description)) {
      errors.push('heroSection.description is missing or empty')
    }
    if (isNonEmptyArray(hero.benefits)) {
      stats.hasBenefits = true
    } else {
      warnings.push('heroSection.benefits is missing or empty')
    }
    // heroImage is optional
    if (isObject(hero.heroImage)) {
      const img = hero.heroImage as Record<string, unknown>
      if (isObject(img.asset)) {
        stats.hasHeroImage = true
      } else {
        warnings.push('heroSection.heroImage.asset is missing (only ~20% of pages have this)')
      }
    } else {
      warnings.push('heroSection.heroImage is missing')
    }
  } else {
    errors.push('Missing heroSection')
  }

  // ── Overview ──
  if (isObject(page.overview)) {
    const overview = page.overview as Record<string, unknown>
    if (!isNonEmptyString(overview.heading)) {
      warnings.push('overview.heading is missing or empty')
    }
    if (!isNonEmptyString(overview.description)) {
      errors.push('overview.description is missing or empty')
    }
    // Optional overview fields
    if (!isNonEmptyString(overview.additionalInfo)) {
      warnings.push('overview.additionalInfo is missing')
    }
    if (isObject(overview.alert)) {
      stats.hasAlert = true
    } else {
      warnings.push('overview.alert is missing')
    }
    if (!isNonEmptyArray(overview.points)) {
      warnings.push('overview.points is missing or empty')
    }
    if (!isNonEmptyString(overview.serviceDescription)) {
      warnings.push('overview.serviceDescription is missing')
    }
    if (!isNonEmptyArray(overview.servicePoints)) {
      warnings.push('overview.servicePoints is missing or empty')
    }
    if (isObject(overview.whyUs)) {
      stats.hasWhyUs = true
    } else {
      warnings.push('overview.whyUs is missing')
    }
  } else {
    errors.push('Missing overview')
  }

  // ── Approach (optional — not all pages have this section) ──
  if (isObject(page.approach)) {
    const approach = page.approach as Record<string, unknown>
    if (!isNonEmptyString(approach.title)) {
      warnings.push('approach.title is missing or empty')
    }
    if (!isNonEmptyString(approach.description)) {
      warnings.push('approach.description is missing or empty')
    }
    if (!isNonEmptyArray(approach.points)) {
      warnings.push('approach.points is missing or empty')
    }
  } else {
    warnings.push('Missing approach')
  }

  // ── Services ──
  if (isNonEmptyArray(page.services)) {
    const services = page.services as Record<string, unknown>[]
    stats.servicesCount = services.length
    for (let i = 0; i < services.length; i++) {
      const svc = services[i]
      if (!isObject(svc)) {
        errors.push(`services[${i}] is not an object`)
        continue
      }
      if (!isNonEmptyString(svc.title)) {
        errors.push(`services[${i}].title is missing or empty`)
      }
      if (!isNonEmptyString(svc.description)) {
        errors.push(`services[${i}].description is missing or empty`)
      }
      if (!isNonEmptyArray(svc.features)) {
        warnings.push(`services[${i}].features is missing or empty`)
      }
    }
  } else {
    errors.push('services is missing or empty (min 1 required)')
  }

  // ── FAQ (optional — some pages may not have FAQs) ──
  if (isNonEmptyArray(page.faq)) {
    const faq = page.faq as Record<string, unknown>[]
    stats.faqCount = faq.length
    for (let i = 0; i < faq.length; i++) {
      const item = faq[i]
      if (!isObject(item)) {
        errors.push(`faq[${i}] is not an object`)
        continue
      }
      if (!isNonEmptyString(item.question)) {
        errors.push(`faq[${i}].question is missing or empty`)
      }
      if (!isNonEmptyString(item.answer)) {
        errors.push(`faq[${i}].answer is missing or empty`)
      }
    }
  } else {
    warnings.push('faq is missing or empty')
  }

  // ── SEO ──
  if (isObject(page.seo)) {
    const seo = page.seo as Record<string, unknown>
    if (!isNonEmptyString(seo.title)) {
      errors.push('seo.title is missing or empty')
    }
    if (!isNonEmptyString(seo.description)) {
      errors.push('seo.description is missing or empty')
    }
    if (!isNonEmptyString(seo.keywords)) {
      errors.push('seo.keywords is missing or empty')
    }
  } else {
    errors.push('Missing seo')
  }

  // ── Testimonial (optional — many pages lack testimonials) ──
  if (isObject(page.testimonial)) {
    const testimonial = page.testimonial as Record<string, unknown>
    if (!isNonEmptyString(testimonial.quote)) {
      warnings.push('testimonial.quote is missing or empty')
    }
    // Author details are optional (~80% missing)
    if (isNonEmptyString(testimonial.name) || isNonEmptyString(testimonial.position)) {
      stats.hasTestimonialAuthor = true
    } else {
      warnings.push('testimonial.name and testimonial.position are missing (~80% of pages lack author details)')
    }
    if (!isNonEmptyString(testimonial.company)) {
      warnings.push('testimonial.company is missing')
    }
  } else {
    warnings.push('Missing testimonial')
  }

  // ── Parent/References (optional for root pages) ──
  if (!isObject(page.parent)) {
    warnings.push('parent reference is missing (expected for root-level pages)')
  }
  if (!isObject(page.references)) {
    warnings.push('references.topLevelParent is missing (expected for root-level pages)')
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    stats,
  }
}

// ─── Field Completeness Helper ──────────────────────────────────────────────

/**
 * Maps every expected field path to present/missing for a given page.
 * Useful for Phase 6 to know which fields to translate.
 *
 * @param page - An extracted page (parsed JSON)
 * @returns Record mapping field paths to boolean (true = present, false = missing)
 */
export function getFieldCompleteness(page: Record<string, unknown>): Record<string, boolean> {
  const result: Record<string, boolean> = {}

  // Top-level fields
  result['_id'] = isNonEmptyString(page._id)
  result['_type'] = isNonEmptyString(page._type)
  result['title'] = isNonEmptyString(page.title)
  result['language'] = isNonEmptyString(page.language)
  result['slug.current'] = isObject(page.slug) && isNonEmptyString((page.slug as Record<string, unknown>).current)

  // Hero section
  const hero = isObject(page.heroSection) ? (page.heroSection as Record<string, unknown>) : null
  result['heroSection'] = hero !== null
  result['heroSection.heading'] = hero !== null && isNonEmptyString(hero.heading)
  result['heroSection.tagline'] = hero !== null && isNonEmptyString(hero.tagline)
  result['heroSection.description'] = hero !== null && isNonEmptyString(hero.description)
  result['heroSection.benefits'] = hero !== null && isNonEmptyArray(hero.benefits)
  result['heroSection.heroImage'] = hero !== null && isObject(hero.heroImage)
  result['heroSection.heroImage.asset'] = hero !== null && isObject(hero.heroImage) && isObject((hero.heroImage as Record<string, unknown>).asset)

  // Overview
  const overview = isObject(page.overview) ? (page.overview as Record<string, unknown>) : null
  result['overview'] = overview !== null
  result['overview.heading'] = overview !== null && isNonEmptyString(overview.heading)
  result['overview.description'] = overview !== null && isNonEmptyString(overview.description)
  result['overview.additionalInfo'] = overview !== null && isNonEmptyString(overview.additionalInfo)
  result['overview.alert'] = overview !== null && isObject(overview.alert)
  result['overview.points'] = overview !== null && isNonEmptyArray(overview.points)
  result['overview.serviceDescription'] = overview !== null && isNonEmptyString(overview.serviceDescription)
  result['overview.servicePoints'] = overview !== null && isNonEmptyArray(overview.servicePoints)
  result['overview.whyUs'] = overview !== null && isObject(overview.whyUs)

  // Approach
  const approach = isObject(page.approach) ? (page.approach as Record<string, unknown>) : null
  result['approach'] = approach !== null
  result['approach.title'] = approach !== null && isNonEmptyString(approach.title)
  result['approach.description'] = approach !== null && isNonEmptyString(approach.description)
  result['approach.points'] = approach !== null && isNonEmptyArray(approach.points)

  // Services
  result['services'] = isNonEmptyArray(page.services)
  if (isNonEmptyArray(page.services)) {
    const services = page.services as Record<string, unknown>[]
    result['services.allHaveTitles'] = services.every(s => isObject(s) && isNonEmptyString(s.title))
    result['services.allHaveDescriptions'] = services.every(s => isObject(s) && isNonEmptyString(s.description))
    result['services.allHaveFeatures'] = services.every(s => isObject(s) && isNonEmptyArray(s.features))
  } else {
    result['services.allHaveTitles'] = false
    result['services.allHaveDescriptions'] = false
    result['services.allHaveFeatures'] = false
  }

  // FAQ
  result['faq'] = isNonEmptyArray(page.faq)
  if (isNonEmptyArray(page.faq)) {
    const faq = page.faq as Record<string, unknown>[]
    result['faq.allHaveQuestions'] = faq.every(f => isObject(f) && isNonEmptyString(f.question))
    result['faq.allHaveAnswers'] = faq.every(f => isObject(f) && isNonEmptyString(f.answer))
  } else {
    result['faq.allHaveQuestions'] = false
    result['faq.allHaveAnswers'] = false
  }

  // SEO
  const seo = isObject(page.seo) ? (page.seo as Record<string, unknown>) : null
  result['seo'] = seo !== null
  result['seo.title'] = seo !== null && isNonEmptyString(seo.title)
  result['seo.description'] = seo !== null && isNonEmptyString(seo.description)
  result['seo.keywords'] = seo !== null && isNonEmptyString(seo.keywords)

  // Testimonial
  const testimonial = isObject(page.testimonial) ? (page.testimonial as Record<string, unknown>) : null
  result['testimonial'] = testimonial !== null
  result['testimonial.quote'] = testimonial !== null && isNonEmptyString(testimonial.quote)
  result['testimonial.name'] = testimonial !== null && isNonEmptyString(testimonial.name)
  result['testimonial.position'] = testimonial !== null && isNonEmptyString(testimonial.position)
  result['testimonial.company'] = testimonial !== null && isNonEmptyString(testimonial.company)

  // Parent / References (optional for root pages)
  result['parent'] = isObject(page.parent)
  result['references.topLevelParent'] = isObject(page.references) && isObject((page.references as Record<string, unknown>).topLevelParent)

  return result
}
