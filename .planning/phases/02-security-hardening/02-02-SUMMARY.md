---
phase: 02-security-hardening
plan: 02
status: complete
started: 2026-02-19
completed: 2026-02-19
---

## Summary

Removed all hardcoded Sanity API tokens from TypeScript scripts across the entire ADVISORI Sanity Migration directory. Every file that previously contained the hardcoded token string now uses `process.env.SANITY_API_TOKEN` and has a proper dotenv import.

## Tasks Completed

### Task 1: Replace hardcoded token in active scripts
- **Status:** Complete
- **Commit:** 4e99266
- **Files scanned:** 638
- **Files modified:** 350
- **Files already clean:** 68
- **Files with no token:** 220
- **Details:** Created a temporary Node.js cleanup script that processed all .ts files in `ADVISORI Sanity Migration/` (excluding `de-pages-created/` and `node_modules/`). For each file containing the hardcoded token, replaced `'skNQVXst...'` with `process.env.SANITY_API_TOKEN` and added `import 'dotenv/config'` as the first import line where dotenv was not already imported. 68 files that already used environment variables were skipped. Cleanup script was deleted after execution.

### Task 2: Handle de-pages-created/ reference files
- **Status:** Complete
- **Commit:** 982e893
- **Files scanned:** 3,229
- **Files modified:** 3,229
- **Details:** Created a similar cleanup script for the `de-pages-created/` directory. All 3,229 files contained the hardcoded token and already had `import * as dotenv from 'dotenv'` with `dotenv.config()` — so only the token string was replaced with `process.env.SANITY_API_TOKEN`. Cleanup script was deleted after execution.

## Verification

- [x] Zero files in ADVISORI Sanity Migration/ (excluding node_modules/) contain the hardcoded token
- [x] All modified files have dotenv import (either `import 'dotenv/config'` or `import * as dotenv from 'dotenv'`)
- [x] Spot-checked files have valid TypeScript syntax (check-german-type.ts, check-kritis-meldepflichten-en.ts, check-kyc-en.ts)
- [x] Cleanup scripts deleted
- [x] Total files modified logged

## Metrics

- Active files modified: 350
- Reference files modified: 3,229
- Total files cleaned: 3,579
- Files already clean (skipped): 68
- Files with no token (data-only): 220
- Total files scanned: 3,867
