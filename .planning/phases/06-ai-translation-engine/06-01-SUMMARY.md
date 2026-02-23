---
phase: 06-ai-translation-engine
plan: 01
status: complete
started: 2026-02-20T12:00:00Z
completed: 2026-02-20T12:30:00Z
---

# Plan 06-01 Summary: Translation Infrastructure and Glossary

## What Was Done

Established the foundational infrastructure for Phase 6 AI translation engine: installed the Anthropic SDK, extended pipeline configuration with lazy-validated Claude API credentials, defined TypeScript output types for translated pages, and created a glossary module for consistent slug translation and terminology.

### Task 1: Install Anthropic SDK and Extend Configuration

- Installed `@anthropic-ai/sdk` as production dependency (4 packages added)
- Extended `src/lib/config.ts` with:
  - `AnthropicConfig` interface (`apiKey: string`, `model: string`)
  - Added `anthropic` getter to `Config` interface with **lazy validation**
  - ANTHROPIC_API_KEY is only validated when `config.anthropic` is first accessed, not at module load time
  - This ensures tools that don't need Claude API (extract, detect, scan-local, etc.) won't fail on missing ANTHROPIC_API_KEY
  - Throws `ConfigError` from `errors.ts` if ANTHROPIC_API_KEY is missing
  - Default model: `claude-sonnet-4-5-20250514` (overridable via ANTHROPIC_MODEL env var)
- Added ANTHROPIC_API_KEY and ANTHROPIC_MODEL to `.env.example`

### Task 2: Create Translation Types Module

- Created `src/lib/translation-types.ts` with:
  - `I18nBaseReference` interface for `__i18n_base` field
  - `TranslatedPage` interface — mirrors ExtractedPageSchema + `__i18n_lang` and `__i18n_base` fields
  - `TranslationResult` interface — includes `translatedPage`, `germanId`, `slug`, `model`, `inputTokens`, `outputTokens`, `durationMs`
  - `TranslationConfig` interface — `model`, `maxTokens`, `temperature`
  - `DEFAULT_TRANSLATION_CONFIG` constant — maxTokens=8192, temperature=0.3

### Task 3: Create Glossary Module

- Created `src/lib/glossary.ts` with:
  - `SLUG_TRANSLATIONS`: 22 German-to-English slug segment mappings sourced from ~80 existing translations
  - `translateSlug()`: splits slug by '/', translates each segment, appends '-en' to final segment
  - `FORBIDDEN_TERMS`: 26 marketing buzzwords AI must not inject (from audit finding 01-03)
  - `DOMAIN_TERMS`: 48 financial/regulatory terms for consistent DE→EN translation
  - `generateKey()`: standardized `${prefix}_${Date.now()}_${index}` format replacing 4 inconsistent patterns from audit

## Verification

- [x] `@anthropic-ai/sdk` installed in package.json dependencies
- [x] `ANTHROPIC_API_KEY` in .env.example
- [x] config.ts validates ANTHROPIC_API_KEY lazily (only on first access of `config.anthropic`)
- [x] TranslatedPage type defined with `__i18n_lang` and `__i18n_base` fields
- [x] TranslationResult type includes token counts and duration
- [x] SLUG_TRANSLATIONS covers 22 known parent segments from existing translations
- [x] `translateSlug('informationssicherheit/kritis/meldepflichten')` returns `'information-security/kritis/meldepflichten-en'`
- [x] `translateSlug('risikomanagement/non-financial-risk/kyc')` returns `'risk-management/non-financial-risk/kyc-en'`
- [x] FORBIDDEN_TERMS list contains 26 terms
- [x] DOMAIN_TERMS map contains 48 terms
- [x] `generateKey('benefit', 1)` matches pattern `benefit_\d+_1`
- [x] `npm run typecheck` passes after all tasks

## Files Modified

| File | Action |
|------|--------|
| `package.json` | Modified — added @anthropic-ai/sdk dependency |
| `package-lock.json` | Modified — lockfile updated |
| `.env.example` | Modified — added ANTHROPIC_API_KEY and ANTHROPIC_MODEL |
| `src/lib/config.ts` | Modified — added AnthropicConfig interface, lazy getter |
| `src/lib/translation-types.ts` | Created — TranslatedPage, TranslationResult, TranslationConfig |
| `src/lib/glossary.ts` | Created — slug translations, forbidden terms, domain terms, generateKey |

## Commits

| Task | Hash | Message |
|------|------|---------|
| 1 | `cd25f7a` | `feat(06-01): install anthropic sdk and extend config` |
| 2 | `e689bc6` | `feat(06-01): create translation types module` |
| 3 | `09a9697` | `feat(06-01): create glossary module` |

## Deviations

- **Lazy validation (as instructed)**: The plan said "Validate ANTHROPIC_API_KEY is present (throw ConfigError if missing)" which could imply eager validation at import time. Per the prompt instructions, validation is lazy — only triggered when `config.anthropic` is accessed. This is the correct design since many tools don't need Claude API.
- **Added DEFAULT_TRANSLATION_CONFIG**: The plan did not explicitly mention exporting a defaults constant, but it is useful for consumers and follows the pattern of sensible defaults mentioned in the TranslationConfig description.

## Implications for Next Plans

- **06-02 (Translation Engine)**: Can import `TranslatedPage`, `TranslationResult`, `TranslationConfig` from `translation-types.ts` and `translateSlug`, `FORBIDDEN_TERMS`, `DOMAIN_TERMS`, `generateKey` from `glossary.ts`. Config is available via `config.anthropic`.
- **06-03 (Prompt Builder)**: The FORBIDDEN_TERMS and DOMAIN_TERMS from glossary.ts will be injected into the system prompt for Claude.
- **06-04 (Batch Runner)**: Can use `config.anthropic.model` and `DEFAULT_TRANSLATION_CONFIG` for batch processing.
