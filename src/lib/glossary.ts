/**
 * Glossary Module
 *
 * Provides consistent terminology for the AI translation engine:
 * - SLUG_TRANSLATIONS: German→English slug segment mapping
 * - translateSlug(): translates full slug paths with -en suffix
 * - FORBIDDEN_TERMS: marketing buzzwords the AI must NOT add
 * - DOMAIN_TERMS: financial/regulatory terms for consistent translation
 * - generateKey(): standardized _key generation for Sanity array items
 *
 * @see .planning/phases/01-audit-assessment/01-03-SUMMARY.md for audit findings
 *   on inconsistent slugs, AI-embellished buzzwords, and key generation patterns
 */

// ─── Slug Translation Map ───────────────────────────────────────────────────

/**
 * Maps German slug path segments to their English equivalents.
 * Sourced from ~80 existing translations in ADVISORI Sanity Migration/.
 *
 * Segments already in English (e.g. 'regulatory-compliance-management',
 * 'data-analytics') are included for completeness — translateSlug()
 * passes through unknown segments unchanged, so these serve as documentation.
 */
export const SLUG_TRANSLATIONS: Record<string, string> = {
  // Top-level parent segments (German → English)
  'informationssicherheit': 'information-security',
  'digitale-transformation': 'digital-transformation',
  'risikomanagement': 'risk-management',
  'prozessautomatisierung': 'process-automation',

  // Mid-level parent segments (German → English)
  'it-risikomanagement': 'it-risk-management',
  'auslagerungsmanagement': 'outsourcing-management',
  'dienstleisterauswahl': 'service-provider-selection',

  // Already-English segments included for documentation/completeness
  'regulatory-compliance-management': 'regulatory-compliance-management',
  'data-protection-encryption': 'data-protection-encryption',
  'business-continuity-resilience': 'business-continuity-resilience',
  'security-awareness': 'security-awareness',
  'security-operations-secops': 'security-operations-secops',
  'non-financial-risk': 'non-financial-risk',
  'financial-risk': 'financial-risk',
  'internal-control-system-ics': 'internal-control-system-ics',
  'data-analytics': 'data-analytics',
  'business-intelligence': 'business-intelligence',
  'intelligent-automation': 'intelligent-automation',
  'regulatory-reporting': 'regulatory-reporting',
  'information-security-management-system-isms': 'information-security-management-system-isms',
  'bcm-framework': 'bcm-framework',
  'process-automation': 'process-automation',
}

/**
 * Translates a full German slug path to English.
 *
 * - Splits the slug by '/'
 * - Translates each segment using SLUG_TRANSLATIONS (pass-through if not found)
 * - Appends '-en' to the final segment
 *
 * @param germanSlug - The German slug path (e.g. 'informationssicherheit/kritis/meldepflichten')
 * @returns The English slug path (e.g. 'information-security/kritis/meldepflichten-en')
 *
 * @example
 * translateSlug('informationssicherheit/kritis/meldepflichten')
 * // → 'information-security/kritis/meldepflichten-en'
 *
 * translateSlug('risikomanagement/non-financial-risk/kyc')
 * // → 'risk-management/non-financial-risk/kyc-en'
 */
export function translateSlug(germanSlug: string): string {
  const segments = germanSlug.split('/')
  const translated = segments.map((segment) =>
    SLUG_TRANSLATIONS[segment] ?? segment,
  )
  // Append -en to the final segment
  translated[translated.length - 1] = `${translated[translated.length - 1]}-en`
  return translated.join('/')
}

// ─── Forbidden Terms ────────────────────────────────────────────────────────

/**
 * Marketing buzzwords the AI translation engine must NOT add to translations.
 *
 * From audit finding (01-03-SUMMARY.md): "Translations show AI-embellished
 * content with excessive buzzwords... that likely do not exist in the German
 * originals." These terms may appear if they were in the German source but
 * must not be injected by the translator.
 */
export const FORBIDDEN_TERMS: string[] = [
  'AI-powered',
  'AI-driven',
  'revolutionize',
  'revolutionary',
  'cutting-edge',
  'game-changing',
  'game-changer',
  'world-class',
  'best-in-class',
  'next-generation',
  'next-gen',
  'state-of-the-art',
  'groundbreaking',
  'transformative',
  'disruptive',
  'synergy',
  'paradigm shift',
  'leverage',
  'holistic',
  'seamless',
  'robust',
  'scalable',
  'innovative',
  'machine learning-based',
  'blockchain-powered',
  'cloud-native',
]

// ─── Domain Terms ───────────────────────────────────────────────────────────

/**
 * German→English domain terminology for consistent translation of
 * financial, regulatory, and technical terms.
 *
 * The AI translator should prefer these translations when encountering
 * the German term to ensure consistency across all 840+ pages.
 */
export const DOMAIN_TERMS: Record<string, string> = {
  // Anti-Money Laundering / KYC
  'Geldwäschegesetz': 'Anti-Money Laundering Act (GwG)',
  'Sorgfaltspflichten': 'due diligence obligations',
  'Kundenidentifizierung': 'customer identification',
  'Verdachtsmeldung': 'suspicious activity report',
  'Geldwäscheprävention': 'anti-money laundering prevention',

  // Risk Management
  'Risikotragfähigkeit': 'risk-bearing capacity',
  'Risikosteuerung': 'risk control',
  'Risikobewertung': 'risk assessment',
  'Kreditrisiko': 'credit risk',
  'Marktrisiko': 'market risk',
  'Liquiditätsrisiko': 'liquidity risk',
  'Operationelles Risiko': 'operational risk',
  'Stresstests': 'stress tests',

  // Regulatory
  'BaFin': 'BaFin',
  'Bundesanstalt für Finanzdienstleistungsaufsicht': 'Federal Financial Supervisory Authority (BaFin)',
  'MaRisk': 'MaRisk',
  'Mindestanforderungen an das Risikomanagement': 'Minimum Requirements for Risk Management (MaRisk)',
  'Auslagerung': 'outsourcing',
  'Aufsichtsrecht': 'supervisory law',
  'Meldepflichten': 'reporting obligations',

  // KRITIS
  'Kritische Infrastruktur': 'critical infrastructure',
  'BSI': 'BSI',
  'Bundesamt für Sicherheit in der Informationstechnik': 'Federal Office for Information Security (BSI)',
  'Notfallkonzept': 'emergency concept',
  'Schwachstellenanalyse': 'vulnerability analysis',
  'Schutzkonzept': 'protection concept',

  // Information Security
  'Informationssicherheit': 'information security',
  'Datenschutz': 'data protection',
  'Verschlüsselung': 'encryption',
  'Zugriffskontrolle': 'access control',
  'Identitätsmanagement': 'identity management',
  'Sicherheitsvorfall': 'security incident',

  // MiFID
  'Finanzmarktrichtlinie': 'Financial Markets Directive',
  'Anlegerschutz': 'investor protection',
  'Transaktionsmeldung': 'transaction reporting',
  'Best Execution': 'best execution',
  'Vertriebssteuerung': 'sales management',
  'Produktgovernance': 'product governance',

  // ESG / Supply Chain
  'Lieferkettensorgfaltspflichtengesetz': 'Supply Chain Due Diligence Act (LkSG)',
  'Lieferkettengesetz': 'Supply Chain Due Diligence Act',
  'Sorgfaltspflicht': 'due diligence obligation',
  'Nachhaltigkeitsberichterstattung': 'sustainability reporting',

  // General financial
  'Liquiditätssteuerung': 'liquidity management',
  'Geschäftsfortführung': 'business continuity',
  'Wirksamkeitsprüfung': 'effectiveness review',
  'Modellentwicklung': 'model development',
  'Berichtswesen': 'reporting',
  'Prüfungswesen': 'audit',
}

// ─── Key Generation ─────────────────────────────────────────────────────────

/**
 * Generates a standardized Sanity _key for array items.
 *
 * Replaces the 4 inconsistent key generation patterns found in the audit:
 * 1. Template literal with stored timestamp variable
 * 2. Static descriptive strings
 * 3. Hardcoded numeric timestamps
 * 4. Inline Date.now() calls
 *
 * Standardized format: `${prefix}_${timestamp}_${index}`
 *
 * @param prefix - Descriptive prefix (e.g. 'benefit', 'faq', 'service', 'feature', 'point')
 * @param index - Zero-based or one-based index of the item in its array
 * @returns A unique key string like 'benefit_1708012345678_1'
 *
 * @example
 * generateKey('benefit', 1) // → 'benefit_1708012345678_1'
 * generateKey('faq', 0)     // → 'faq_1708012345678_0'
 */
export function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}
