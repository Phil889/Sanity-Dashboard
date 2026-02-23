---
phase: 07-translation-validation
plan: 01
title: German Remnant Detection and Extended Validation
subsystem: validation
tags: [validation, german-detection, i18n, quality-checks]
requires: [validate-translation.ts, glossary.ts]
provides: [german-remnant-detection, i18n-consistency-checks]
affects: [validate-translation.ts, glossary.ts]
tech-stack: [typescript, esm, regex]
key-files:
  - src/tools/validate-translation.ts
  - src/lib/glossary.ts
key-decisions:
  - German stop words use word boundary regex to avoid false positives
  - English-overlap words (in, an, on, die, von, aus) excluded from detection
  - Proper nouns (BaFin, BSI, MaRisk, etc.) excluded from domain term scan
  - New checks are quality warnings, NOT rule failures (11-rule score preserved)
  - i18n checks validate _id, __i18n_lang, __i18n_base cross-consistency
duration: 12min
completed: 2026-02-20
---

# Plan 07-01 Summary: German Remnant Detection and Extended Validation

## Status: COMPLETE

## Accomplishments

### Task 1: German Remnant Detection
- Added `GERMAN_STOP_WORDS` (30 common German function words) to `src/lib/glossary.ts` as a readonly string array
- Created `detectGermanRemnants()` helper in `validate-translation.ts` that:
  - Scans all text content against GERMAN_STOP_WORDS using `\b` word boundary regex (prevents "under" matching "und")
  - Excludes English-overlap words via `ENGLISH_OVERLAP` set: `in`, `an`, `on`, `die`, `von`, `aus`
  - Scans against DOMAIN_TERMS keys (German domain terms) for untranslated terminology
  - Excludes proper nouns/acronyms via `PROPER_NOUNS` set: BaFin, BSI, MaRisk, BAIT, DORA, etc.
  - Skips short domain terms (<=3 chars) to avoid false positives on acronyms
- Added `germanWordsFound` and `domainTermsUntranslated` fields to `QualityChecks` interface
- Integrated into `validateTranslation()` — results appear as warnings, not rule failures
- Updated `displaySingleResult()` and `displayDirectoryReport()` to show German remnant findings

### Task 2: i18n Field and _id Consistency Checks
- Added `idFormatValid` and `i18nFieldsConsistent` fields to `QualityChecks` interface
- Implemented 5 i18n consistency validations:
  1. `_id` must end with `-en`
  2. `_id` must equal `${german._id}-en` when German source provided
  3. `__i18n_lang` must be `'en'`
  4. `__i18n_base` must be object with `_ref` (string) and `_type: 'reference'`
  5. `_id` stripped of `-en` must equal `__i18n_base._ref` (cross-consistency)
- If German source provided, validates `__i18n_base._ref` matches `german._id`
- Updated display functions to show i18n consistency status
- Added directory report section for files with i18n consistency issues

## Task Commits

| Task | Commit | Description |
|------|--------|-------------|
| 1 | `55c7434` | feat(07-01): add German remnant detection to translation validator |
| 2 | `ff5b2a9` | feat(07-01): add i18n field and _id consistency checks |

## Files Modified

| File | Lines | Changes |
|------|-------|---------|
| `src/lib/glossary.ts` | 248 (was 220) | Added GERMAN_STOP_WORDS (30 words) |
| `src/tools/validate-translation.ts` | 1177 (was 975) | Added detectGermanRemnants(), i18n checks, display updates |

## Decisions

1. **Word boundary regex for stop words**: Using `\b` regex ensures "und" is matched as standalone word but not inside "under", "diesel" doesn't match "die", etc.
2. **English-overlap exclusion**: Words like "in", "an", "on" are valid in both languages, so they're excluded to prevent false positives on every English page.
3. **Quality warnings, not rule failures**: New checks add to `qualityChecks` and `warnings` arrays only, keeping the 11-rule score system from Phase 6 intact. In `--strict` mode, these warnings still cause exit code 1.
4. **Proper noun exclusion**: Regulatory acronyms (BaFin, BSI, MaRisk, etc.) appear identically in both languages and should not be flagged.

## Deviations

None.

## Issues

None.

## Next Phase Readiness

- validate-translation.ts now has 11 rules + German remnant detection + i18n consistency checks
- All checks are quality warnings that work in both --file and --dir modes
- --strict mode treats all warnings (including new checks) as errors
- --json output includes all new quality check fields
- Ready for 07-02 (additional validation enhancements if planned)
