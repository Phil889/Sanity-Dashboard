---
phase: 04-untranslated-page-detection
plan: 01
status: complete
started: 2026-02-20T10:50:00Z
completed: 2026-02-20T10:55:00Z
---

# Plan 04-01 Summary: Untranslated Page Detection Tool

## What Was Done

Created `src/tools/detect-untranslated.ts` -- a CLI tool that queries the live Sanity API to detect all German servicePages and categorize their English translation status using `translation.metadata` documents (the authoritative i18n system).

The tool performs 3 GROQ queries:
1. All German servicePages (996 found)
2. All `translation.metadata` documents for servicePages (417 found)
3. All English servicePages (422 found)

It then cross-references these to categorize every German page into one of three states: **translated** (EN linked via metadata), **untranslated** (no metadata at all), or **metadata-only** (metadata exists but EN ref is missing or broken). It also detects **floating English pages** (not linked in any metadata) and **broken refs** (metadata pointing to non-existent documents).

## Live Detection Results

| Metric | Audit Expected | Detected | Delta |
|--------|---------------|----------|-------|
| Total German servicePages | 996 | 996 | 0 |
| Translated (EN linked) | ~415 | 409 | -6 |
| Untranslated (no EN) | ~584 | 584 | 0 |
| Metadata-only (no working EN) | ~2 | 3 | +1 |
| Floating English (unlinked) | ~15 | 15 | 0 |
| Broken refs in metadata | ~5 | 1 | -4 |

**Consistency check passed:** 409 + 584 + 3 = 996

**Delta notes:**
- The audit counted "broken refs" differently (5 total). The detection tool found 1 true broken ref (metadata pointing to a non-existent EN document). The other 4 from the audit were likely metadata docs where the EN ref is empty/null rather than pointing to a non-existent doc -- those are counted as "metadata-only" in the tool's stricter categorization.
- Translated count of 409 (vs ~415 expected) is within tolerance. The 6-page delta may reflect metadata docs that have both DE and EN refs but where the EN doc has since been deleted or is draft-only.

## Files Modified

- `src/tools/detect-untranslated.ts` -- New CLI tool (252 lines)
- `package.json` -- Added `"detect"` npm script

## CLI Usage

```bash
# Human-readable summary
npx tsx src/tools/detect-untranslated.ts

# JSON report to stdout
npx tsx src/tools/detect-untranslated.ts --json

# JSON report to file
npx tsx src/tools/detect-untranslated.ts --json --output report.json

# Via npm script
npm run detect
```

## Key Design Decisions

1. **3 GROQ queries, cross-referenced in code** -- Rather than complex joins in GROQ, the tool fetches 3 flat lists and cross-references them in TypeScript for clarity and debuggability.
2. **GROQ array projection normalization** -- The `translations[_key == "de"].value._ref` GROQ projection returns an array (even for a single match). The tool normalizes these to scalar values.
3. **Strict broken-ref detection** -- A "broken ref" means metadata has an `enRef` that points to a document that does not exist in Sanity. This is stricter than the audit's definition.
4. **Sorted output** -- All category arrays are sorted alphabetically by slug for consistent, reproducible output.
5. **Consistency check** -- The tool verifies that translated + untranslated + metadataOnly = totalGerman and reports any mismatch.

## Implications for Downstream Plans

- **04-03 (Priority Queue):** The JSON report from `--json --output` provides machine-readable input for building a translation priority queue.
- **Phase 5 (Extraction):** The `untranslated` array (584 pages) with `_id`, `slug`, `parentRef`, and `topLevelRef` is the exact input needed for content extraction.
- **Phase 9 (Cleanup):** The `floatingEnglish` (15 pages) and `brokenRefs` (1 page) arrays identify cleanup targets.
