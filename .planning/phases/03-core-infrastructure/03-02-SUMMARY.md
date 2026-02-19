---
phase: 03-core-infrastructure
plan: 02
subsystem: sanity-client
tags: [sanity-client, config, dotenv, singleton, esm, groq]
requires: [package.json, tsconfig.json, .env, src/lib/index.ts]
provides: [src/lib/config.ts, src/lib/sanity-client.ts]
affects: [all-pipeline-phases, phase-4-detection, phase-5-extraction, phase-8-upload, phase-9-linking]
tech-stack: [sanity-client-7, dotenv-16, typescript-5, esm]
key-files: [src/lib/config.ts, src/lib/sanity-client.ts, src/lib/index.ts]
key-decisions:
  - Singleton client pattern for pipeline-wide reuse
  - Throw on missing SANITY_API_TOKEN (fail-fast validation)
  - useCdn false for write-heavy migration pipeline
  - No retry logic in client (separation of concerns with error handling module)
  - Fallback values for projectId, dataset, apiVersion but NOT for token
patterns-established:
  - Import config from src/lib/config.js for all env-based settings
  - Import sanityClient from src/lib/sanity-client.js for all Sanity operations
  - Centralized env validation at module load time
duration: 2m 19s
completed: 2026-02-19T20:30:04Z
---

# 03-02 Summary: Shared Sanity Client

Created centralized config and singleton Sanity client modules verified against live production API, eliminating the need for 637+ scripts to each create their own client.

## Performance

| Metric | Value |
|--------|-------|
| Duration | 2m 19s |
| Start | 2026-02-19T20:27:45Z |
| End | 2026-02-19T20:30:04Z |
| Tasks | 2/2 |
| Files created | 2 (src/lib/config.ts, src/lib/sanity-client.ts) |
| Files modified | 1 (src/lib/index.ts) |

## Accomplishments

1. **src/lib/config.ts** -- Typed configuration module with dotenv loading, environment variable fallbacks (projectId, dataset, apiVersion), and fail-fast validation that throws a clear error when SANITY_API_TOKEN is missing
2. **src/lib/sanity-client.ts** -- Singleton Sanity client created from centralized config, with `useCdn: false` for write operations and `getClient()` function for lazy access patterns
3. **src/lib/index.ts** -- Updated to re-export config, types, and client for convenient barrel imports
4. **TypeScript compilation** -- All modules compile with `tsc --noEmit` with zero errors
5. **Live API verification** -- Client successfully queries production Sanity:
   - Total servicePage count: 1419 (matches audit)
   - German servicePage count: 996 (matches audit)
6. **Token validation verification** -- Missing SANITY_API_TOKEN correctly throws descriptive error in subprocess test

## Task Commits

| Task | Description | Commit |
|------|-------------|--------|
| Task 1 | Create config module and shared Sanity client | `75b4a6b` |
| Task 2 | Verify client works against live Sanity API | (verification only, no file changes) |

## Files Created/Modified

| File | Action | Purpose |
|------|--------|---------|
| src/lib/config.ts | Created | Centralized typed config with dotenv loading and env validation |
| src/lib/sanity-client.ts | Created | Singleton Sanity client using config values |
| src/lib/index.ts | Modified | Updated to re-export config and client modules |

## Decisions Made

| Decision | Rationale |
|----------|-----------|
| Singleton client pattern | Pipeline scripts share one client instance, avoiding connection overhead; migration is a single process |
| Throw on missing token | Fail fast with clear message instead of undefined errors deep in API calls |
| `useCdn: false` | Write-heavy migration pipeline needs real-time data, not cached CDN responses |
| No retry logic in client | Separation of concerns; Plan 03-03 error handling module will wrap operations with retry at the call site |
| Fallback values for non-secret config | projectId, dataset, apiVersion have safe defaults from existing patterns; token has no fallback (security) |
| Export types alongside values | `Config` and `SanityConfig` interfaces exported for use in downstream modules |

## Deviations from Plan

None.

## Issues Encountered

| Issue | Resolution |
|-------|------------|
| `tsx -e` inline eval fails with top-level await (CJS output format) | Created temporary `.ts` file for verification instead, then deleted it as specified in the plan |
| `tsx -e` has module resolution issues for relative imports | Used file-based scripts for all verification, which resolve correctly |

## Next Phase Readiness

- **Config module ready**: All pipeline phases can `import { config } from './lib/config.js'` for typed, validated configuration
- **Client module ready**: All pipeline phases can `import { sanityClient } from './lib/sanity-client.js'` for pre-configured Sanity access
- **Barrel export ready**: `import { sanityClient, config } from './lib/index.js'` works for convenience imports
- **API verified**: Client connects to production Sanity and executes GROQ queries successfully
- **Plan 03-03** can build error handling/retry utilities that wrap `sanityClient` operations
- **Phase 4** can use `sanityClient` for untranslated page detection queries
