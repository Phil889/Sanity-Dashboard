---
phase: 05-content-extraction
plan: 02
subsystem: extraction
tags: [sanity, batch, extraction, typescript, cli, rate-limiting]

# Dependency graph
requires:
  - phase: 05-01
    provides: extractPage() function, ExtractedPage type
  - phase: 04-queue-generation
    provides: src/data/translation-queue.json with 587 entries
provides:
  - runBatchExtraction() function for programmatic batch extraction
  - BatchSummary type for downstream consumption
  - CLI tool at src/tools/extract-batch.ts with --limit, --force, --delay, --output-dir, --queue, --json flags
  - npm script "extract-batch" for running the tool
  - src/data/extracted/ directory with .gitkeep for output storage
affects: [05-03-normalization, 06-translation]

# Tech tracking
tech-stack:
  added: []
  patterns: [sequential-with-delay, skip-existing-resume, consecutive-failure-abort]

key-files:
  created: [src/tools/extract-batch.ts, src/data/extracted/.gitkeep]
  modified: [package.json, .gitignore]

key-decisions:
  - "Sequential processing with configurable delay (default 200ms) to respect Sanity rate limits"
  - "Skip-existing by default for resume support; --force to override"
  - "Abort after 5 consecutive failures to detect systemic issues (auth/network)"
  - "Slug-to-filename: replace / with -- for flat filesystem-safe naming"

patterns-established:
  - "Pattern: runBatchExtraction(options) -> Promise<BatchSummary> as reusable module function"
  - "Pattern: consecutive failure counter for early abort on systemic errors"
  - "Pattern: .gitkeep + .gitignore for regenerable data directories"

issues-created: []

# Metrics
duration: 10min
completed: 2026-02-20
---

# Plan 05-02: Batch Extraction Pipeline Summary

**CLI tool that processes the translation queue in batch, extracting German servicePages to individual JSON files with rate limiting, skip-existing support, and graceful error handling**

## Performance

- **Duration:** 10 min
- **Started:** 2026-02-20T11:25:00Z
- **Completed:** 2026-02-20T11:35:00Z
- **Tasks:** 2
- **Files modified:** 4

## Accomplishments
- Built `extract-batch.ts` (~280 lines) with full CLI argument parsing and batch processing logic
- Implements rate limiting via configurable `--delay` (default 200ms between requests)
- Skip-existing for resume support: re-running skips already-extracted pages unless `--force` is set
- Consecutive failure abort: stops after 5 consecutive failures to detect systemic issues (auth/network)
- JSON summary output via `--json` flag for pipeline integration
- Exported `runBatchExtraction()` and `BatchSummary` type for programmatic use
- Added `src/data/extracted/` to `.gitignore` (regenerable data, not committed)
- Created `.gitkeep` marker for the extracted data directory

## Task Commits

Each task was committed atomically:

1. **Task 1: Create batch extraction pipeline** - `b392255` (feat)
2. **Task 2: Verify batch extraction with sample data** - verification-only, no files modified

**Plan metadata:** (this commit) (docs: complete plan)

## Files Created/Modified
- `src/tools/extract-batch.ts` - Batch extraction pipeline with CLI, rate limiting, skip-existing (~280 lines)
- `src/data/extracted/.gitkeep` - Directory marker for extracted page output
- `package.json` - Added "extract-batch" npm script
- `.gitignore` - Added `src/data/extracted/*.json` exclusion

## Decisions Made
- Sequential processing with configurable delay rather than parallel -- Sanity API rate limits make parallel requests risky at 587 pages
- Default 200ms delay between requests -- conservative but fast enough for full queue (~2 min)
- Skip-existing by default for interrupted run resume; `--force` flag overrides
- Abort after 5 consecutive failures -- likely indicates auth token expiry or network issue, not individual page problems
- Flat filename convention: slug `/` replaced with `--` (e.g., `informationssicherheit/kritis/meldepflichten` becomes `informationssicherheit--kritis--meldepflichten.json`)

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None - all tests passed on first attempt.

## Verification Results

All verification criteria passed:

- `npx tsx src/tools/extract-batch.ts --limit 5` extracted 5 pages to `src/data/extracted/` in 2.0s
- Each output file is valid JSON with all ExtractedPage fields (_id, _type, title, slug, language, sections)
- Filenames use slug with `/` to `--` replacement (verified: `informationssicherheit--identity-access-management-iam--identity-access-management.json`)
- Skip-existing works: re-running `--limit 5` shows "0 extracted, 5 skipped"
- `--force` overrides skip behavior: `--limit 2 --force` re-extracted 2 files
- `--json` outputs clean JSON summary to stdout
- `--delay` controls inter-request timing (verified in output duration)
- Summary at end shows: extracted count, skipped count, failed count, duration
- `npm run extract-batch -- --limit 5` works via npm script
- Test files cleaned up after verification

## Next Phase Readiness
- `runBatchExtraction()` and `BatchSummary` are exported for programmatic use
- Full 587-page extraction can run with: `npx tsx src/tools/extract-batch.ts` (estimated ~2 min)
- Output files in `src/data/extracted/` ready for 05-03 (normalization/validation)
- Resume support means interrupted runs can be continued without re-extracting

---
*Phase: 05-content-extraction*
*Completed: 2026-02-20*
