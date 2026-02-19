# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-02-19)

**Core value:** A reliable, automated pipeline that can translate, upload, and link service pages from German to English without breaking existing content.
**Current focus:** Phase 4 -- Untranslated Page Detection (Phase 3 complete)

## Current Position

Phase: 3 of 10 **COMPLETE** (Core Infrastructure)
Next phase: 4 (Untranslated Page Detection)
Status: Phase 3 complete, ready to plan Phase 4
Last activity: 2026-02-19 -- Phase 3 Core Infrastructure completed (4 plans: foundation, Sanity client, error/logging, FAQ batch runner)

Progress: [======----] 30% (Phase 3 of 10 complete)

## Performance Metrics

**Velocity:**
- Total plans completed: 12
- Average duration: ~30 minutes per plan
- Total execution time: ~6.25 hours (Phase 1 + Phase 2 + Phase 3)

**By Phase:**

| Phase | Plans | Total | Avg/Plan |
|-------|-------|-------|----------|
| 1. Audit & Assessment | 5/5 | ~3.75 hrs | ~45 min |
| 2. Security Hardening | 3/3 | ~1.5 hrs | ~30 min |
| 3. Core Infrastructure | 4/4 | ~1.0 hr | ~15 min |

**Recent Trend:**
- Last 5 plans: 02-03, 03-01, 03-02, 03-03, 03-04 (all complete)
- Trend: Accelerating -- Phase 3 used parallel execution (Wave 2 ran 03-02 + 03-03 concurrently)

## Accumulated Context

### Key Numbers from Audit

| Metric | Value |
|--------|-------|
| German servicePages in Sanity | 996 |
| English servicePages in Sanity | 422 |
| German pages needing translation | 584 |
| English pages properly linked | 409 |
| English pages floating (unlinked) | 15 |
| Broken refs in translation.metadata | 5 |
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
- **HIGH:** No extraction scripts exist -- Phase 5 must build from scratch
- **HIGH:** EN FAQ batch files are dead code (377 files) -- pages may have 0 FAQs in production
- **MEDIUM:** Two coexisting i18n systems add complexity to detection and linking
- **MEDIUM:** `__i18n_base` has inconsistent types (string, reference, `[object Object]`)
- **LOW:** `translation-batch/` directory contains broken, abandoned code

## Session Continuity

Last session: 2026-02-19
Stopped at: Phase 2 complete. All credentials secured, project IDs fixed, codebase verified clean.
Resume file: .planning/phases/02-security-hardening/02-03-SUMMARY.md
Next action: Plan Phase 3 (Core Infrastructure) -- shared Sanity client, config module, EN FAQ batch runner
