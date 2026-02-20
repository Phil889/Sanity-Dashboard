---
phase: 06-ai-translation-engine
plan: 02
title: Single-Page Translation Engine
status: complete
completed: 2026-02-20
strategy: A
actual_duration: 20min
---

# Summary: 06-02 Single-Page Translation Engine

## What Was Done

### Task 1: Translation Prompt Module
Created `src/lib/translation-prompt.ts` with:
- **SYSTEM_PROMPT** constant (~100 lines): establishes professional German-to-English translator persona, embeds all 11 mandatory translation rules, includes full FORBIDDEN_TERMS list (26 buzzwords) and DOMAIN_TERMS glossary (40+ term pairs) inline for the AI model
- **buildUserPrompt(extractedPage)** function: serializes ExtractedPageSchema to formatted JSON with specific per-field translation instructions (SEO title suffix, testimonial name/company preservation, FAQ formatting, array item handling)

### Task 2: Single-Page Translation Engine
Created `src/tools/translate-page.ts` (~370 lines) with:
- **translatePage(inputPath, options?)** exported async function implementing hybrid AI + code approach:
  - AI translates text via Claude API (system + user prompt)
  - Code handles structural transforms: _id suffix, language, slug translation, i18n fields, _key regeneration, parent/references/heroImage preservation, SEO title suffix, testimonial identity preservation
- **CLI interface**: `--input`, `--output`, `--model`, `--dry-run`, `--quiet` flags
- **JSON parse resilience**: strips markdown code fences, retries with explicit JSON-only instruction on parse failure
- **withRetry() wrapping** for transient API failures (3 retries, 2s base delay, exponential backoff)
- **Quick validation**: checks FAQ count match, services count match, language, slug suffix, i18n fields, section presence
- **Forbidden term detection**: scans translated output for all 26 FORBIDDEN_TERMS
- **Cost estimation**: calculates approximate USD cost per translation based on token usage
- **npm script**: `"translate": "tsx src/tools/translate-page.ts"` added to package.json
- **Output directory**: `src/data/translated/.gitkeep` created, `src/data/translated/*.json` added to .gitignore

### Task 3: Verification with 3 Sample Pages
Extracted and verified 3 diverse pages via dry-run mode:
- **kyc** (20 FAQs, 4 services, heroImage present): validated input, dry-run prompt generation, slug translates to `risk-management/non-financial-risk/kyc-en`
- **mifid-best-execution** (20 FAQs, 6 services, no heroImage): validated input, dry-run prompt generation, slug translates to `regulatory-compliance-management/mifid/mifid-best-execution-en`
- **marisk-readiness** (20 FAQs, 3 services, no heroImage): validated input, dry-run prompt generation, slug translates to `regulatory-compliance-management/marisk/marisk-readiness-en`

**Note**: kritis-readiness was originally planned but has 0 FAQs (fails validation). Replaced with marisk-readiness which has 20 FAQs.

**Note**: ANTHROPIC_API_KEY was not available in the environment. Actual API translation was skipped as per plan instructions. All structural transforms, prompt generation, input validation, and dry-run functionality were verified successfully. When the API key is set, running `npm run translate -- --input src/data/extracted/kyc.json --output src/data/translated/kyc-en.json` will produce a fully translated page.

**Dry-run fix**: Discovered that dry-run mode was incorrectly triggering the ANTHROPIC_API_KEY lazy validator. Fixed to use a stub model name in dry-run mode, allowing prompt inspection without requiring the API key.

## Verification Results

| Check | Status |
|-------|--------|
| translation-prompt.ts exports SYSTEM_PROMPT and buildUserPrompt() | PASS |
| translate-page.ts exports translatePage() with CLI interface | PASS |
| `npm run translate -- --dry-run --input <file>` works | PASS |
| `npm run typecheck` passes | PASS |
| 3 sample pages pass input validation | PASS |
| 3 sample pages generate correct dry-run prompts | PASS |
| Slug translation produces correct `-en` suffixed paths | PASS |
| Dry-run mode works without ANTHROPIC_API_KEY | PASS |
| Actual API translation (requires key) | SKIPPED |
| Quality comparison vs create-kyc-en.ts | SKIPPED (requires API key) |

## Files Modified

- `src/lib/translation-prompt.ts` (new) — system prompt + user prompt builder
- `src/tools/translate-page.ts` (new) — single-page translation engine with CLI
- `package.json` — added "translate" npm script
- `src/data/translated/.gitkeep` (new) — output directory marker
- `.gitignore` — added `src/data/translated/*.json` entry

## Deviations

1. **Replaced kritis-readiness with marisk-readiness** — kritis-readiness has 0 FAQs, which fails the extraction validator's requirement for at least 1 FAQ. Substituted marisk-readiness (20 FAQs, 3 services) for more representative testing.
2. **Skipped actual API translations** — ANTHROPIC_API_KEY not set in .env. Per plan instructions, documented what would be verified rather than failing. All non-API functionality verified successfully.
3. **Added dry-run config fix** — dry-run mode initially triggered ANTHROPIC_API_KEY validation unnecessarily. Fixed to use stub model name, improving developer experience for prompt inspection.

## Commits

- `120577e` — feat(06-02): create translation prompt module
- `7a7d99b` — feat(06-02): create single-page translation engine
- `b8a29cf` — test(06-02): verify translation engine with 3 sample pages
