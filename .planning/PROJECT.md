# ADVISORI Sanity Translation Pipeline

## What This Is

An end-to-end translation pipeline for ADVISORI's German Sanity CMS website. 996 German service pages exist, of which 584 still need English translations created, uploaded to Sanity, and linked with their German counterparts. The project currently has a manual, script-based workflow that needs improvement and automation to scale.

## Core Value

A reliable, automated pipeline that can translate, upload, and link service pages from German to English without breaking existing content — audited and improved from the current manual workflow.

## Requirements

### Validated

- ~~✓ German content extraction from Sanity CMS via `extract-german-content.js` — existing~~ **INVALIDATED: Script does not exist in repo (deleted or never committed)**
- ~~✓ TypeScript translation template generation from German JSON — existing~~ **INVALIDATED: Script does not exist; `translation-batch/` templates are broken and abandoned**
- ✓ Manual translation workflow with 11 mandatory rules — existing and verified (sampled 5 translations, scores 8-11/11)
- ~~✓ Progress tracking via markdown documents and JSON inventory — existing~~ **INVALIDATED: Tracker shows 62 completed but Sanity has 396-422 English pages; severely inaccurate**
- ✓ Individual page import to Sanity via CLI — existing and working (`createOrReplace` pattern confirmed)
- ✓ FAQ batching for large pages (split into separate batch files) — existing (377 EN batch files, but execution mechanism is broken)
- ~~✓ NPM script entry points (query, next, status, workflow) — existing~~ **INVALIDATED: No npm scripts defined anywhere; no package.json at project root**

### Active

- [x] Audit existing workflow: understand what works, what's broken, what's redundant **(COMPLETE -- see AUDIT-REPORT.md)**
- [ ] Automate untranslated page detection by querying Sanity API directly (584 pages identified via `translation.metadata`)
- [ ] Automate German-to-English translation (AI-assisted, maintaining quality and tone)
- [ ] Automate upload of translated content to Sanity CMS
- [ ] Automate linking of English and German page versions in Sanity (via `translation.metadata` documents)
- [ ] Build end-to-end pipeline: detect → extract → translate → validate → upload → link → verify
- [x] Fix critical security issues (hardcoded API tokens in ~569 files) **(COMPLETE -- Phase 2)**
- [ ] Improve error handling and validation across all scripts
- [ ] Build extraction pipeline from scratch (no existing scripts to improve)
- [ ] Build EN FAQ batch runner (377 export-only files have no execution mechanism)

### Out of Scope

- Non-service page types (blog posts, landing pages, other content types) — focus on servicePage documents first
- Sanity schema or CMS structure changes — work within existing data model
- Visual/design changes to the website — translation and content only

## Context

- ADVISORI is a German consulting firm with a Sanity CMS-powered website (project ID: `wwmm9rbb`, dataset: `production`)
- **996 German servicePages** exist in Sanity; **422 English servicePages** already exist; **584 German pages still need translation**
- The tracker claiming 62 completed translations is severely inaccurate -- actual count is 396-422 English pages in Sanity
- **Two i18n systems coexist**: legacy `__i18n_*` fields (partial, unreliable) and `translation.metadata` documents (419 total, authoritative). Sanity Studio uses `translation.metadata` for the language switcher.
- `__i18n_base` field has inconsistent types (strings, reference objects, `[object Object]` bugs) -- NOT reliable for programmatic use
- **Extraction scripts do not exist.** `extract-german-content.js`, `generate-translation-scripts.js`, and `identify-next-page.js` are absent from the repository. The extraction pipeline must be built from scratch.
- **637 TypeScript scripts** in `ADVISORI Sanity Migration/` with zero shared modules -- every file creates its own Sanity client
- ~569 scripts have the API token hardcoded in plaintext; no `.gitignore` exists at project level
- The `de-pages-created/` directory (3,229 files) contains **German page creation scripts only** -- not English translations, not part of the active pipeline
- The `translation-batch/` directory is abandoned -- templates have broken TypeScript syntax and were superseded by per-page `create-*-en.ts` scripts
- 15 English pages are floating (no `translation.metadata` link); 5 broken refs in existing metadata documents; 4 draft-only English pages
- Only 276 of 1,419 servicePages have an actual `heroImage.asset` reference; most have only alt text
- Translation must follow 11 mandatory rules (language field, slug format, FAQ count, etc.)

## Constraints

- **Sanity API**: Token and credentials already configured; must use existing Sanity project/dataset (`wwmm9rbb` / `production`)
- **Translation Quality**: Translations must be accurate, professional, and consistent in tone — no hallucinated content, no AI embellishment
- **Existing Content Safety**: Already-translated and published pages must not be touched or overwritten
- **Tech Stack**: TypeScript/Node.js with @sanity/client — maintain compatibility with existing tooling
- **Content Type**: servicePage documents in Sanity with specific schema (title, slug, parent, references, seo, heroSection, overview, approach, services, testimonial, faq, language)
- **i18n Linking**: Must create `translation.metadata` documents (the authoritative system) for each translation; legacy `__i18n_*` fields are optional

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Audit-first approach | Understand existing workflow before automating -- avoid building on broken foundations | **Complete** -- Phase 1 audit done, all findings in AUDIT-REPORT.md |
| Focus on service pages only | 996 German servicePages is the primary scope; other content types can follow | Confirmed -- all 1,419 documents are servicePage type |
| AI-assisted translation | Manual translation at 2-4 hours/page doesn't scale to 584 remaining pages | Confirmed -- needed; but must avoid AI embellishment found in existing translations |
| `translation.metadata` is authoritative for i18n linking | Two i18n systems coexist; `translation.metadata` is what Sanity Studio reads; `__i18n_base` has type inconsistencies and bugs | Use `translation.metadata` for detection AND linking; set legacy fields optionally |
| Build extraction from scratch | Extraction scripts (`extract-german-content.js` etc.) do not exist in the repo -- confirmed missing | Phase 5 must build new extraction pipeline; 64 existing source JSONs serve as format reference |
| Keep `createOrReplace` pattern | Idempotent, safe for re-runs, proven across all sampled translations | Continue using for English page creation |
| `de-pages-created/` is reference only | Contains 3,229 German page creation scripts -- not part of translation pipeline | Use as structural reference; do not modify or include in active workflow |
| EN FAQ batch runner must be built | 377 existing EN FAQ batch files are export-only data with no execution logic | Priority for Phase 3 Core Infrastructure |
| Tracker is unreliable | Claims 62 completed; Sanity has 396-422 English pages | Replace with Sanity-queried status using `translation.metadata` |

---
*Last updated: 2026-02-19 after Phase 2 Security Hardening complete*
