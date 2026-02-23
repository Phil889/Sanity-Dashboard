---
phase: 05-content-extraction
plan: 03
status: complete
started: 2026-02-20T00:00:00Z
completed: 2026-02-20T00:30:00Z
---

# Plan 05-03 Summary: Extraction Validation and Normalization

## What Was Done

Built the extraction validation and normalization layer that defines the contract between Phase 5 (extraction) and Phase 6 (translation engine). Two files were created:

1. **`src/lib/extraction-types.ts`** -- Canonical type definitions and validation functions
2. **`src/tools/validate-extractions.ts`** -- CLI validation tool for extracted JSON files

## Files Modified

| File | Action | Description |
|------|--------|-------------|
| `src/lib/extraction-types.ts` | Created | Canonical types + validators (~300 lines) |
| `src/tools/validate-extractions.ts` | Created | Validation CLI tool (~380 lines) |
| `package.json` | Modified | Added `validate-extractions` npm script |

## Implementation Details

### Canonical Types (`extraction-types.ts`)

Defines standalone TypeScript interfaces compatible with `ExtractedPage` from `extract-page.ts`:

- `HeroSection` -- heading, tagline, description, benefits[], heroImage?
- `OverviewSection` -- heading, description, additionalInfo?, alert?, points[], serviceDescription?, servicePoints?, whyUs?
- `ApproachSection` -- title, description, points[]
- `ServiceItem` -- title, description, features[]
- `FaqItem` -- question, answer
- `SeoMeta` -- title, description, keywords
- `Testimonial` -- quote (required), name?, position?, company?
- `ExtractedPageSchema` -- full canonical schema combining all sections

### Validation Function (`validateExtractedPage`)

Returns a `ValidationResult` with:
- `valid: boolean` -- true if all required fields pass
- `errors: string[]` -- required field failures (blocking)
- `warnings: string[]` -- optional field absences (informational)
- `stats: ValidationStats` -- faqCount, servicesCount, hasBenefits, hasHeroImage, hasTestimonialAuthor, hasWhyUs, hasAlert

Required field checks:
- `_id` is non-empty string
- `_type` is `"servicePage"`
- `language` is `"de"`
- `slug.current` is non-empty string
- `heroSection` has heading, tagline, description, benefits (non-empty array)
- `overview` has heading and description
- `approach` has title, description, points (non-empty array)
- `services` is non-empty array; each item has title, description, features
- `faq` is non-empty array; each item has question and answer
- `seo` has title, description, keywords
- `testimonial` has quote

Optional field warnings (not blocking):
- `heroSection.heroImage.asset` (~20% of pages)
- `testimonial.name`, `testimonial.position` (~80% missing)
- `overview.additionalInfo`, `overview.alert`, `overview.whyUs`, `overview.serviceDescription`, `overview.servicePoints`
- `parent`, `references.topLevelParent` (null for root pages)

### Field Completeness Helper (`getFieldCompleteness`)

Maps every expected field path to present/missing boolean. Returns `Record<string, boolean>` for Phase 6 to know which fields to translate.

### Validation CLI Tool (`validate-extractions.ts`)

Two modes:
- **Single file**: `--file <path>` -- validates one JSON, shows errors/warnings/stats
- **Directory**: `--dir <path>` -- validates all `*.json` files, produces aggregate report

Flags:
- `--json` -- output full report as JSON (for programmatic consumption)
- `--strict` -- treat warnings as errors (for quality gates)

Exit codes: 0 if valid, 1 if invalid (or warnings in strict mode)

Exported functions for module use:
- `validateFile(filePath)` -- single file validation
- `validateDirectory(dirPath)` -- directory aggregate validation

## Verification Results

Tested with 3 extracted pages:

| File | Valid | FAQs | Services | Errors | Warnings |
|------|-------|------|----------|--------|----------|
| test-kyc.json | YES | 20 | 4 | 0 | 0 |
| test-access-governance.json | YES | 2 | 6 | 0 | 0 |
| test-invalid.json (synthetic) | NO | 0 | 0 | 7 | 2 |

Directory mode correctly:
- Reports 2 valid, 1 invalid
- Calculates field coverage percentages (67% for optional fields since 2/3 files had them)
- Shows FAQ stats (min: 0, max: 20, avg: 7) and Services stats (min: 0, max: 6, avg: 3)
- Lists invalid files with first error + count of additional errors
- Returns exit code 1 when any file is invalid

All verification criteria met:
- `ExtractedPageSchema` type covers all fields from 01-04 audit
- `validateExtractedPage()` correctly identifies valid pages
- `validateExtractedPage()` correctly reports missing required fields as errors
- `validateExtractedPage()` correctly reports missing optional fields as warnings
- `--file` mode validates a single JSON file
- `--dir` mode validates all files and produces aggregate report
- Field coverage statistics are accurate
- Exit codes: 0 for valid, 1 for invalid
- `npm run validate-extractions` works via npm script

## Commits

| Hash | Message |
|------|---------|
| `0103c4c` | feat(05-03): create extraction types and validators |
| `e732b43` | feat(05-03): create extraction validation CLI tool |
