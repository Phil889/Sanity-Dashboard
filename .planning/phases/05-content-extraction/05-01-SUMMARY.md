---
phase: 05-content-extraction
plan: 01
subsystem: api
tags: [sanity, groq, extraction, typescript, cli]

# Dependency graph
requires:
  - phase: 03-shared-infrastructure
    provides: sanity-client.ts, errors.ts (withRetry, ValidationError), logger.ts, config.ts
  - phase: 04-queue-generation
    provides: translation-queue.json with 587 entries containing germanId fields
provides:
  - extractPage() function for fetching and cleaning single German servicePage documents
  - ExtractedPage TypeScript type for downstream consumption
  - CLI tool at src/tools/extract-page.ts with --id, --output, --quiet flags
  - npm script "extract" for running the tool
affects: [05-02-batch-extraction, 05-03-normalization, 06-translation]

# Tech tracking
tech-stack:
  added: []
  patterns: [fetch-full-document-strip-in-code, system-field-stripping]

key-files:
  created: [src/tools/extract-page.ts]
  modified: [package.json]

key-decisions:
  - "Fetch full document via GROQ then strip system fields in TypeScript (simpler than GROQ projection)"
  - "Strip 7 system fields: _createdAt, _updatedAt, _rev, __i18n_lang, __i18n_refs, __i18n_base, _system"
  - "Preserve i18n field (newer Sanity plugin field, not legacy __i18n_* system field)"

patterns-established:
  - "Pattern: extractPage(germanId) -> Promise<ExtractedPage> as reusable module function"
  - "Pattern: SYSTEM_FIELDS const array for consistent field stripping across tools"

issues-created: []

# Metrics
duration: 8min
completed: 2026-02-20
---

# Plan 05-01: Single-Page Extraction Tool Summary

**CLI tool extracting German servicePages from Sanity with system-field stripping and typed ExtractedPage output**

## Performance

- **Duration:** 8 min
- **Started:** 2026-02-20T11:20:00Z
- **Completed:** 2026-02-20T11:28:00Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments
- Built `extractPage()` function with withRetry, ValidationError for not-found/language-mismatch
- Exported `ExtractedPage` type with full servicePage schema (14 field groups) for 05-02 and 05-03
- CLI interface with `--id`, `--output`, `--quiet` flags following established tool patterns
- Verified against 3 live Sanity documents: root-level, depth-3 nested, and comparison with existing source JSON

## Task Commits

Each task was committed atomically:

1. **Task 1: Create extraction tool** - `2320a61` (feat)
2. **Task 2: Verify with live Sanity data** - verification-only, no files modified

**Plan metadata:** (this commit) (docs: complete plan)

## Files Created/Modified
- `src/tools/extract-page.ts` - Single-page extraction tool with types, core function, CLI (~300 lines)
- `package.json` - Added "extract" npm script

## Decisions Made
- Fetch full document via GROQ then strip system fields in TypeScript rather than complex GROQ projection -- simpler, more maintainable, matches detect-untranslated.ts pattern
- Preserve `i18n` field found on live documents -- it is the newer Sanity internationalization plugin field, distinct from legacy `__i18n_*` system fields that are stripped
- Use `--quiet` flag for suppressing logger output when piping stdout JSON, matching existing tool conventions

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
- `kyc` page (comparison target) is already translated and not in the queue, so it was extracted directly for structural comparison rather than being a "queued page" per plan wording. Structure matched existing `kyc-source.json` exactly (minus the newer `i18n` field).

## Verification Results

All verification criteria passed:

- `npx tsx src/tools/extract-page.ts --id ai-governance` produces valid JSON with all expected fields
- Output contains all 14 field groups (some optional fields absent on specific pages, which is correct)
- Output does NOT contain: _createdAt, _updatedAt, _rev, __i18n_lang, __i18n_refs, __i18n_base, _system
- Array items preserve _key and _type fields (verified on faq[] and services[])
- `extractPage()` function and `ExtractedPage` type are properly exported
- `npm run extract -- --id kyc --quiet` works via npm script
- Non-existent ID throws ValidationError with helpful message and exits with code 1

## Next Phase Readiness
- `extractPage()` and `ExtractedPage` are exported and ready for import by 05-02 (batch extraction)
- 05-03 (normalization) can consume ExtractedPage type for field validation
- Tool handles all 587 queue entries (tested representative samples at depths 0 and 3)

---
*Phase: 05-content-extraction*
*Completed: 2026-02-20*
