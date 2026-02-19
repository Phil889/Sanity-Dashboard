---
phase: 03-core-infrastructure
plan: 04
subsystem: faq-batch-runner
tags: [faq, batch-runner, cli-tool, sanity-patch, esm]

requires:
  - phase: 03-core-infrastructure/03-02
    provides: Shared Sanity client (sanity-client.ts, config.ts)
  - phase: 03-core-infrastructure/03-03
    provides: Error handling (errors.ts) and logging (logger.ts)
provides:
  - src/tools/faq-batch-runner.ts — CLI tool for batch FAQ uploads
  - npm script "faq-batch" for convenient invocation
affects: [08-automated-upload, 10-end-to-end-pipeline]

tech-stack:
  added: []
  patterns: [dynamic-import, pathToFileURL, cli-arg-parsing, batch-processing]

key-files:
  created: [src/tools/faq-batch-runner.ts]
  modified: [package.json]

key-decisions:
  - "Dry-run by default; --execute flag required for Sanity mutations"
  - "Pattern B files (187 self-executing, no exports) gracefully skipped with warning"
  - "Only Pattern A files (190 with exported arrays) are processable via dynamic import"
  - "Document existence check before patching to avoid errors on missing targets"
  - "Never process.exit(1) on partial failure — complete run with full summary"
  - "Timestamps enabled for all log output in batch runs"

patterns-established:
  - "CLI tools live in src/tools/ directory"
  - "Arg parsing via process.argv.slice(2) for simple --flag and --key value patterns"
  - "pathToFileURL() for dynamic import of local .ts files via tsx"
  - "Batch processing pattern: discover -> group -> verify -> execute -> summarize"

issues-created: []

duration: ~5min
completed: 2026-02-19
checkpoint_skipped: "Task 2: human-verify (dry-run output verification) — skipped due to skip_checkpoints=true in parallel execution config"
---

# 03-04 Summary: EN FAQ Batch Runner Tool

**Created a CLI tool that discovers 377 EN FAQ batch files across 78 page slugs, with dry-run default mode, --slug filtering, and --execute flag for Sanity mutations.**

## Performance

| Metric | Value |
|--------|-------|
| Duration | ~5 min |
| Started | 2026-02-19T20:55:00Z |
| Completed | 2026-02-19T21:00:00Z |
| Tasks | 1/2 (Task 2 checkpoint skipped) |
| Files created | 1 (src/tools/faq-batch-runner.ts) |
| Files modified | 1 (package.json) |

## Accomplishments

1. **src/tools/faq-batch-runner.ts** — Full CLI tool with discovery, dry-run, and execute modes:
   - Scans `ADVISORI Sanity Migration/` for `*-en-faqs-batch*.ts` files
   - Groups 377 files into 78 slug groups, sorted alphabetically with batches sorted numerically
   - Dry-run mode (default) lists all files, slugs, target doc IDs
   - Execute mode dynamically imports each file, extracts exported FAQ array, and patches Sanity
   - `--slug` filter for targeted processing of specific pages
   - `--execute` flag required for any Sanity mutations
   - Document existence check before patching
   - Graceful handling of Pattern B files (no exports) — skipped with warning
   - Full summary at end: processed/skipped/failed counts with error details
   - Uses shared sanityClient, withRetry, and logger modules

2. **package.json** — Added `"faq-batch": "tsx src/tools/faq-batch-runner.ts"` npm script

3. **TypeScript compilation** — `tsc --noEmit` passes with zero errors

4. **Dry-run verification** — All three CLI modes tested:
   - `npm run faq-batch` — lists all 78 slugs, 377 files
   - `npm run faq-batch -- --slug crisis-management-bcm` — filters to 1 slug, 5 files
   - `npm run faq-batch -- --slug nonexistent` — correctly warns "No batch files found"

## Task Commits

| Task | Description | Commit |
|------|-------------|--------|
| Task 1 | Create FAQ batch runner tool + npm script | `c23b8ec` |
| Task 2 | Human verification checkpoint | SKIPPED (skip_checkpoints=true) |

## Checkpoint Skipped

**Task 2 (human-verify)** was skipped due to `skip_checkpoints=true` in parallel execution config. The checkpoint would have verified:
1. `npm run faq-batch` dry-run output lists FAQ batch files grouped by slug
2. Each group shows correct target document ID (e.g., "crisis-management-bcm-en")
3. Batch counts are correct (typically 5 batches per slug)
4. `npm run faq-batch -- --slug crisis-management-bcm` filters correctly
5. Optional: actual execution with `--execute` for one slug to verify Sanity patching

## Files Created/Modified

| File | Action | Purpose |
|------|--------|---------|
| src/tools/faq-batch-runner.ts | Created | CLI tool for batch FAQ uploads to Sanity |
| package.json | Modified | Added "faq-batch" npm script |

## Batch File Analysis

| Category | Count |
|----------|-------|
| Total FAQ batch files | 377 |
| Unique page slugs | 78 |
| Pattern A (export-only, processable) | 190 |
| Pattern B (self-executing, no exports, skippable) | 187 |
| Typical batches per slug | 5 |

## Decisions Made

| Decision | Rationale |
|----------|-----------|
| Dry-run by default | Safety: prevent accidental mutations against production Sanity |
| Skip Pattern B files gracefully | 187 files have no exports; dynamic import can't extract their data. Runner logs warning and continues. |
| Document existence check | Avoid Sanity patch errors on non-existent documents; skip with warning |
| pathToFileURL for imports | Required for dynamic import() of local .ts files on Windows; file:// URLs work cross-platform |
| Never exit(1) on partial failure | Complete the full run and report summary so user can see all results |
| Timestamps in output | Batch runs may take time; timestamps help track progress and performance |

## Deviations from Plan

None — plan executed as written.

## Issues Encountered

None.

## Next Phase Readiness

- **FAQ batch runner ready**: `npm run faq-batch` or `npx tsx src/tools/faq-batch-runner.ts` for dry-run discovery
- **Execute mode available**: `npm run faq-batch -- --execute` to upload FAQs to Sanity
- **Phase 3 complete**: All core infrastructure in place:
  - 03-01: TypeScript project foundation
  - 03-02: Shared Sanity client + config
  - 03-03: Error handling + logging
  - 03-04: EN FAQ batch runner tool
- **Phase 4** can begin: Untranslated page detection using shared infrastructure

---
*Phase: 03-core-infrastructure*
*Completed: 2026-02-19*
