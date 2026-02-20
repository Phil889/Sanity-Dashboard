---
phase: 07-translation-validation
plan: 02
title: Auto-Fix Pipeline and Batch Validation Report
subsystem: validation
tags: [auto-fix, validation-report, pipeline, batch-processing]
requires: [validate-translation.ts, glossary.ts, translation-queue.json]
provides: [fix-translation, validate-batch-report, fix-pipeline]
affects: [src/tools/fix-translation.ts, src/tools/validate-batch-report.ts, package.json]
tech-stack: [typescript, esm, node-fs]
key-files:
  - src/tools/fix-translation.ts
  - src/tools/validate-batch-report.ts
  - package.json
key-decisions:
  - 7 deterministic fix types applied in order (language, _id, i18n_lang, i18n_base, seo title, array _type, _key)
  - Fixes only write file if at least one fix was applied (no unnecessary rewrites)
  - _key prefix inferred from parent property name via mapping (faq->faq, services->service, etc.)
  - Report combines queue/extracted/translated/valid counts for pipeline coverage
  - Upload-ready defined as valid (11/11 score)
  - Both tools support --json output for programmatic consumption
  - fix-translation supports --dry-run mode showing fixes without writing
duration: 14min
completed: 2026-02-20
---

# Plan 07-02 Summary: Auto-Fix Pipeline and Batch Validation Report

## Status: COMPLETE

## Accomplishments

### Task 1: Auto-Fix Translation Tool
- Created `src/tools/fix-translation.ts` (~320 lines) with 7 deterministic fix types:
  1. **Language fix**: Sets `language` to `'en'` if not already
  2. **_id fix**: Appends `-en` suffix to `_id` if missing
  3. **__i18n_lang fix**: Sets `__i18n_lang` to `'en'`
  4. **__i18n_base fix**: Constructs `{_ref, _type: 'reference'}` from `_id`
  5. **SEO title fix**: Appends ` | ADVISORI` to `seo.title` if missing
  6. **Array _type fix**: Sets `_type: 'object'` on all array item objects
  7. **_key fix**: Regenerates keys not matching `prefix_timestamp_index` pattern using `generateKey()`
- Exports `fixTranslation()` for single-file fixing and `fixTranslationDirectory()` for batch
- CLI supports `--file`, `--dir`, `--german`, `--german-dir`, `--dry-run`, `--json`
- Added `fix-translation` npm script to package.json

### Task 2: Batch Validation Report Generator
- Created `src/tools/validate-batch-report.ts` (~280 lines) with comprehensive markdown reporting
- Report includes 5 sections:
  1. **Pipeline Coverage** table: queue -> extracted -> translated -> valid -> upload-ready with percentages
  2. **Validation Summary**: average score, warnings, German remnants, forbidden terms counts
  3. **Common Failures** table: rule-by-rule fail counts sorted by frequency
  4. **Invalid Pages** table: page name, score, failed rules, issue descriptions
  5. **Pages with Warnings** table: page name and warning list
- Exports `generateValidationReport()` for programmatic use
- CLI supports `--translated-dir`, `--extracted-dir`, `--queue`, `--output`, `--json`
- Added `validate-report` npm script to package.json

## Task Commits

| Task | Commit | Description |
|------|--------|-------------|
| 1 | ec0c821 | feat(07-02): create auto-fix translation pipeline tool |
| 2 | 9af65a2 | feat(07-02): create batch validation report generator |

## Files Modified

| File | Action | Lines |
|------|--------|-------|
| `src/tools/fix-translation.ts` | Created | ~320 |
| `src/tools/validate-batch-report.ts` | Created | ~280 |
| `package.json` | Modified | +2 scripts |

## Decisions

1. **7 fix types in deterministic order** — Language and _id fixes run first since __i18n_base construction depends on the corrected _id
2. **Prefix inference from parent key** — Maps `services` -> `service`, `faq` -> `faq`, `benefits` -> `benefit`, etc. with fallback stripping trailing 's'
3. **Upload-ready = valid (11/11)** — Simplest meaningful definition; pages passing all 11 rules are ready for Sanity upload
4. **Report combines 3 data sources** — translation-queue.json (total count), extracted dir (extraction count), translated dir (validation results)
5. **Both tools support JSON output** — Enables programmatic consumption by other tools in the pipeline

## Deviations

None.

## Issues

None.

## Next Phase Readiness

Phase 7 translation validation is now complete with:
- **07-01**: German remnant detection and extended validation (i18n consistency checks)
- **07-02**: Auto-fix pipeline and batch validation report generator

The full fix-then-validate pipeline is operational:
1. `npm run fix-translation -- --dir src/data/translated` — auto-repair common issues
2. `npm run validate-translation -- --dir src/data/translated --german-dir src/data/extracted` — validate all rules
3. `npm run validate-report` — generate markdown pipeline coverage report

Ready for Phase 8 (Sanity Upload).
