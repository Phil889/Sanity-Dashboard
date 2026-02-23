# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-02-19)

**Core value:** A reliable, automated pipeline that can translate, upload, and link service pages from German to English without breaking existing content.
**Current focus:** Phase 8 -- Automated Upload (Phase 7 complete)

## Current Position

Phase: 7 of 10 **COMPLETE** (Translation Validation)
Next phase: 8 (Automated Upload)
Status: Phase 7 complete, ready to plan Phase 8
Last activity: 2026-02-20 -- Phase 7 Translation Validation completed (2 plans: German remnant detection + extended validation, auto-fix pipeline + batch report)

Progress: [================] 70% (Phase 7 of 10 complete)

## Performance Metrics

**Velocity:**
- Total plans completed: 24
- Average duration: ~19 minutes per plan
- Total execution time: ~9.5 hours (Phase 1-7)

**By Phase:**

| Phase | Plans | Total | Avg/Plan |
|-------|-------|-------|----------|
| 1. Audit & Assessment | 5/5 | ~3.75 hrs | ~45 min |
| 2. Security Hardening | 3/3 | ~1.5 hrs | ~30 min |
| 3. Core Infrastructure | 4/4 | ~1.0 hr | ~15 min |
| 4. Untranslated Page Detection | 3/3 | ~1.0 hr | ~20 min |
| 5. Content Extraction | 3/3 | ~0.5 hr | ~10 min |
| 6. AI Translation Engine | 4/4 | ~1.0 hr | ~15 min |
| 7. Translation Validation | 2/2 | ~0.5 hr | ~13 min |

**Recent Trend:**
- Last 5 plans: 06-02, 06-03, 06-04, 07-01, 07-02 (all complete)
- Trend: Accelerating -- Phase 7 used 2-wave sequential execution (Wave 1: 07-01, Wave 2: 07-02)

## Accumulated Context

### Key Numbers from Audit

| Metric | Value |
|--------|-------|
| German servicePages in Sanity | 996 |
| English servicePages in Sanity | 422 |
| German pages needing translation | 586 (updated Phase 4) |
| English pages properly linked | 409 |
| English pages floating (unlinked) | 12 (updated Phase 4) |
| Broken refs in translation.metadata | 1 (updated Phase 4) |
| Draft-only English pages | 4 |
| Total .ts files in ADVISORI Sanity Migration/ | 637 |
| Files with hardcoded API token | 0 (was ~569, fixed in Phase 2) |
| Source JSON files (scattered) | 64 |
| EN FAQ batch files (dead code) | 377 |
| de-pages-created/ files (reference only) | 3,229 |

### Phase 2 Security Hardening Results

| Metric | Before | After |
|--------|--------|-------|
| Files with hardcoded token | ~569 .ts + 1 .md | 0 |
| Files using process.env | 68 | All (~637) |
| .gitignore | None | Comprehensive |
| .env infrastructure | None | Root + subdirectory .env files |
| Scripts with wrong project ID | 9 | 0 |
| Credential scan | Not done | Clean |

### Decisions

Decisions are logged in PROJECT.md Key Decisions table.
Recent decisions affecting current work:

1. `translation.metadata` is authoritative for i18n linking (not `__i18n_base`)
2. Extraction scripts must be built from scratch (do not exist in repo)
3. ~~EN FAQ batch runner is a priority (377 export-only files are dead code)~~ **BUILT in Phase 3 Plan 03-04**
4. Tracker is unreliable; use Sanity queries for status
5. `de-pages-created/` is reference only, not part of active pipeline
6. Keep `createOrReplace` pattern for publishing
7. AI translation needed but must avoid embellishment found in existing translations
8. All credentials via environment variables with dotenv (Phase 2)
9. Fallback project IDs in code use correct `wwmm9rbb` (Phase 2)
10. Shared Sanity client singleton with env validation (Phase 3)
11. Typed errors: SanityApiError (retryable 429/5xx), ValidationError, ConfigError (Phase 3)
12. withRetry exponential backoff for all retryable operations (Phase 3)
13. EN FAQ batch runner: 377 files across 78 slugs, dry-run default, --execute for mutations (Phase 3)
14. Detection via translation.metadata cross-reference, not __i18n_base (Phase 4)
15. Local file scan: 82 unique slugs with local files, all correspond to already-translated pages (Phase 4)
16. Translation queue: 587 entries ordered by hierarchy depth → local file status → alphabetical slug (Phase 4)
17. Fetch full document via GROQ then strip system fields in TypeScript (simpler than GROQ projection) (Phase 5)
18. Strip 7 system fields: _createdAt, _updatedAt, _rev, __i18n_lang, __i18n_refs, __i18n_base, _system (Phase 5)
19. Batch extraction: sequential with 200ms delay, skip-existing for resume, abort after 5 consecutive failures (Phase 5)
20. Slug-to-filename: replace / with -- for flat filesystem-safe naming (Phase 5)
21. Canonical ExtractedPageSchema defines the Phase 5→6 contract with required vs optional field distinction (Phase 5)
22. Claude API via @anthropic-ai/sdk with Sonnet 4.5 default model (Phase 6)
23. ANTHROPIC_API_KEY validation is LAZY -- only when config.anthropic is accessed, so non-translation tools don't fail (Phase 6)
24. Hybrid AI+code translation: AI translates text, deterministic code handles _id, slug, _key, i18n, asset preservation (Phase 6)
25. Glossary: 22 slug translations, 26 forbidden terms, 48 domain terms, standardized generateKey() (Phase 6)
26. Cost estimate: ~$0.054/page ($3/MTok input + $15/MTok output Sonnet 4.5), ~$32 for full 587-page batch (Phase 6)
27. Translation validation: 11-rule checker with structural cross-validation and quality checks (Phase 6)
28. German remnant detection uses word boundary regex with English-overlap exclusion (in, an, on, die, von, aus) and proper noun exclusion (BaFin, BSI, MaRisk) (Phase 7)
29. New quality checks (German remnants, i18n consistency) are warnings, NOT rule failures -- 11-rule score preserved (Phase 7)
30. Auto-fix pipeline: 7 deterministic fixes (language, _id, i18n_lang, i18n_base, SEO title, array _type, _key) applied in order (Phase 7)
31. Upload-ready = valid (11/11 score) for batch report purposes (Phase 7)

### Deferred Issues

1. 15 floating English pages need `translation.metadata` documents (Phase 9)
2. 5 broken refs in existing `translation.metadata` documents (Phase 9)
3. 4 draft-only English pages need publishing (Phase 9)
4. Missing `author` field in ~80% of testimonials (Phase 7)
5. ~~9 scripts with wrong project ID `b0o7vqwz` (Phase 2)~~ **RESOLVED in Plan 02-03**
6. AI-embellished content in existing translations (Phase 6 glossary)
7. 1 document missing `language` field entirely (Phase 9)

### Blockers/Concerns

- ~~**CRITICAL:** Sanity API token hardcoded in ~569 files~~ **RESOLVED in Phase 2**
- ~~**HIGH:** No extraction scripts exist -- Phase 5 must build from scratch~~ **RESOLVED in Phase 5**
- **HIGH:** EN FAQ batch files are dead code (377 files) -- pages may have 0 FAQs in production
- **MEDIUM:** Two coexisting i18n systems add complexity to detection and linking
- **MEDIUM:** `__i18n_base` has inconsistent types (string, reference, `[object Object]`)
- **LOW:** `translation-batch/` directory contains broken, abandoned code

## Session Continuity

Last session: 2026-02-20
Stopped at: Phase 7 complete. German remnant detection, i18n consistency checks, auto-fix pipeline, and batch validation report all built and verified.
Resume file: .planning/phases/07-translation-validation/07-02-SUMMARY.md
Next action: Plan Phase 8 (Automated Upload) -- programmatic upload of validated translations to Sanity with error handling
