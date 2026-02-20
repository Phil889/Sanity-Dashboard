---
phase: 04-untranslated-page-detection
plan: 02
status: complete
started: 2026-02-20T10:45:00Z
completed: 2026-02-20T10:55:00Z
---

# Plan 04-02 Summary: Local Translation File Scanner

## What Was Done

Built `src/tools/scan-local-translations.ts` -- a CLI tool that scans the `ADVISORI Sanity Migration/` directory for existing English translation files and maps them to page slugs with completeness estimation.

### File Patterns Detected

| Pattern | Regex | Count | Example |
|---------|-------|-------|---------|
| Main translation (create) | `create-{slug}-en.ts` | 49 | `create-kyc-en.ts` |
| Main translation (import) | `import-{slug}-en.ts` | 78 | `import-crisis-management-bcm-en.ts` |
| FAQ batch files | `{slug}-en-faqs-batch{N}.ts` | 377 | `mifid-best-execution-en-faqs-batch1.ts` |
| Source JSON | `{slug}-source.json` | 38 | `marisk-gap-analyse-source.json` |

### Scanner Results

| Metric | Value |
|--------|-------|
| Total main files | 127 (49 create + 78 import) |
| Total FAQ batch files | 377 |
| Total source JSON files | 38 |
| Unique page slugs | 82 |

### Completeness Breakdown

| Category | Count | Description |
|----------|-------|-------------|
| Full | 77 | Has main file AND FAQ batch files |
| Main-only | 3 | Has main file but no FAQ batches (kritis-implementation, kritis-parent, kritis-readiness) |
| FAQs-only | 1 | Has FAQ batches but no main file (nis2-compliance-roadmap) |
| Source-only | 1 | Has source JSON only (marisk-ueberwachung-reporting) |

### CLI Interface

```
npx tsx src/tools/scan-local-translations.ts             # human-readable summary
npx tsx src/tools/scan-local-translations.ts --json       # clean JSON to stdout
npx tsx src/tools/scan-local-translations.ts --json --output report.json  # JSON to file
npm run scan-local                                        # via npm script
```

### Design Decisions

- When both `create-*-en.ts` and `import-*-en.ts` exist for the same slug, the import file (newer pattern) is preferred as the canonical `mainFile`
- When both `*-source.json` and `*-source-correct.json` exist, the corrected version is preferred
- In `--json` mode (stdout), verbose file-by-file logging is suppressed to keep output pipeable
- In `--json --output` mode, verbose logging is shown since JSON goes to file

## Files Modified

- `src/tools/scan-local-translations.ts` -- new CLI scanner tool (321 lines)
- `package.json` -- added `"scan-local"` npm script

## Verification

- [x] `npx tsc --noEmit` passes with zero errors
- [x] `npx tsx src/tools/scan-local-translations.ts` produces human-readable summary
- [x] `npx tsx src/tools/scan-local-translations.ts --json` produces valid JSON (validated via JSON.parse)
- [x] FAQ batch file count is exactly 377 (matches expected)
- [x] `npm run scan-local` works via npm script
- [x] Main file count 127 = 49 create + 78 import (matches filesystem counts)
- [x] 82 unique slugs is reasonable (80 with main files + 1 faqs-only + 1 source-only)

## Implications for Next Plans

- **04-03 (reconciler)** can consume the `--json` output to reconcile local files vs Sanity state
- The 82 local slugs represent pages that have some level of local translation work done
- The 1 "source-only" slug (marisk-ueberwachung-reporting) indicates extraction done but translation not started
- The 1 "faqs-only" slug (nis2-compliance-roadmap) indicates orphaned FAQ batch files with no main translation file
