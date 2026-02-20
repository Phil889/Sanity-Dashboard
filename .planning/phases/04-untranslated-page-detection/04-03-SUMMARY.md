---
phase: 04-untranslated-page-detection
plan: 03
status: complete
started: 2026-02-20T10:55:00Z
completed: 2026-02-20T11:05:00Z
---

# Plan 04-03 Summary: Translation Queue Generator

## What Was Done

Built `src/tools/generate-queue.ts` -- a CLI tool that merges Sanity detection results with local file scan to produce a prioritized translation queue. The queue orders pages by hierarchy depth (parents first), local file status, and alphabetically by slug.

### Key Implementation Details

1. **Dual input approach:**
   - Approach A (default): Imports and runs `detectTranslationStatus()` and `scanLocalTranslations()` internally
   - Approach B: Accepts pre-generated JSON via `--detection` and `--local-scan` flags for cached results

2. **Upstream tool refactoring:**
   - Exported core functions and types from `detect-untranslated.ts` (DetectionReport, GermanPage, detectTranslationStatus)
   - Exported core functions and types from `scan-local-translations.ts` (LocalScanReport, PageEntry, scanLocalTranslations)
   - Added `import.meta.url` guard to both tools so `main()` only runs when executed directly (not when imported)

3. **Hierarchy depth computation:**
   - Queries Sanity for all German page parent references
   - Walks parent chains iteratively with cycle detection
   - Found 1 self-referencing page (informationssicherheit-iam points to itself) -- handled gracefully
   - Depths range from 0 (root) to 4 (deepest nesting)

4. **Local file matching:**
   - Sanity slugs can be hierarchical paths (e.g., `informationssicherheit/kritis-meldepflichten`)
   - Local file slugs are leaf segments (e.g., `kritis-meldepflichten`)
   - Matching checks both full slug and leaf segment

### Queue Results

| Metric | Value |
|--------|-------|
| Total pages in queue | 587 |
| Untranslated (no EN) | 584 |
| Metadata-only (broken EN) | 3 |
| With local files | 0 |
| Without local files | 587 |

**All 82 local file slugs correspond to already-translated pages** -- none are in the untranslated queue. This means `withLocalFiles: 0` is the correct result.

### Depth Breakdown

| Depth | Count | Description |
|-------|-------|-------------|
| 0 | 10 | Root-level pages (no parent) |
| 1 | 36 | Direct children of root pages |
| 2 | 353 | Grandchildren (most pages) |
| 3 | 177 | Great-grandchildren |
| 4 | 11 | Deepest nesting level |

### Ordering Verification

- Depth ordering: verified non-decreasing (all depth 0 before depth 1, etc.)
- Alphabetical within depth: verified correct
- Positions: verified sequential 1-based
- Parent-before-child: 412 of 413 parent references appear before their children; the 1 exception is a self-referencing page (data issue in Sanity)
- Summary math: 587 = 0 + 587 (withLocalFiles + withoutLocalFiles), depth sums match total

### CLI Interface

```bash
# Default: run detection + scan internally, output to src/data/translation-queue.json
npx tsx src/tools/generate-queue.ts

# From pre-generated JSON files
npx tsx src/tools/generate-queue.ts \
  --detection src/data/detection-report.json \
  --local-scan src/data/local-scan-report.json

# Custom output path
npx tsx src/tools/generate-queue.ts --output custom-queue.json

# Limit for testing
npx tsx src/tools/generate-queue.ts --limit 10

# Via npm script
npm run generate-queue
```

## Files Modified

- `src/tools/generate-queue.ts` -- new CLI tool (305 lines)
- `src/tools/detect-untranslated.ts` -- added exports + import guard (5 lines changed)
- `src/tools/scan-local-translations.ts` -- added exports + import guard (5 lines changed)
- `package.json` -- added `"generate-queue"` npm script
- `src/data/.gitkeep` -- new directory marker
- `src/data/translation-queue.json` -- 587-entry prioritized queue
- `src/data/detection-report.json` -- full detection results
- `src/data/local-scan-report.json` -- local file scan results

## Design Decisions

1. **587 pages (not 584):** The queue includes 584 untranslated + 3 metadata-only pages. Metadata-only pages have metadata documents but no working English link, so they still need translation.
2. **Leaf slug matching:** Because Sanity slugs include hierarchy paths but local filenames use only the leaf segment, the tool matches both full slug and leaf segment.
3. **Import guard pattern:** Used `import.meta.url === pathToFileURL(resolve(process.argv[1])).href` for cross-platform (Windows + Unix) compatibility when guarding CLI entry points.
4. **Self-referencing page:** One German page (`informationssicherheit-iam`) has its parent set to itself. The cycle detection handles this gracefully, treating it as depth 0.
5. **Hierarchy query separate from detection:** The queue generator makes its own Sanity query for hierarchy (`parent._ref` for all German pages) rather than relying solely on detection results, because detection only returns untranslated page parent refs.

## Deviations from Plan

1. **Import guard added to upstream tools:** Plan mentioned "refactor if needed" for upstream tools. Added `import.meta.url` guards and `pathToFileURL` import to prevent CLI main() from running on import.
2. **withLocalFiles is 0:** Plan expected local files to flag some pages. In practice, all 82 local file slugs correspond to already-translated pages, so no untranslated page has a local file. This is correct behavior.

## Implications for Downstream Plans

- **Phase 5 (Extraction):** `translation-queue.json` provides the ordered work list. Process in position order to ensure parents exist before children.
- **Phase 9 (Cleanup):** The 3 metadata-only pages and 1 self-referencing page are cleanup targets.
- **All 3 data files** in `src/data/` are machine-readable JSON for pipeline consumption.
- **Phase 4 is now complete:** All German pages detected (04-01), local files scanned (04-02), prioritized queue generated (04-03).
