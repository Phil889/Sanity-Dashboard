# ADVISORI Sanity Translation Pipeline

## What This Is

An end-to-end translation pipeline for ADVISORI's German Sanity CMS website. Over 1,000 German service pages need English translations created, uploaded to Sanity, and linked with their German counterparts. The project currently has a manual, script-based workflow that needs auditing, improvement, and automation to scale.

## Core Value

A reliable, automated pipeline that can translate, upload, and link service pages from German to English without breaking existing content — audited and improved from the current manual workflow.

## Requirements

### Validated

- ✓ German content extraction from Sanity CMS via `extract-german-content.js` — existing
- ✓ TypeScript translation template generation from German JSON — existing
- ✓ Manual translation workflow with 11 mandatory rules — existing
- ✓ Progress tracking via markdown documents and JSON inventory — existing
- ✓ Individual page import to Sanity via CLI — existing
- ✓ FAQ batching for large pages (split into separate batch files) — existing
- ✓ NPM script entry points (query, next, status, workflow) — existing

### Active

- [ ] Audit existing workflow: understand what works, what's broken, what's redundant
- [ ] Automate untranslated page detection by querying Sanity API directly
- [ ] Automate German-to-English translation (AI-assisted, maintaining quality and tone)
- [ ] Automate upload of translated content to Sanity CMS
- [ ] Automate linking of English and German page versions in Sanity (i18n references)
- [ ] Build end-to-end pipeline: detect → translate → validate → upload → link → verify
- [ ] Fix critical security issues (hardcoded API tokens in 6,000+ files)
- [ ] Improve error handling and validation across all scripts

### Out of Scope

- Non-service page types (blog posts, landing pages, other content types) — focus on servicePage documents first
- Sanity schema or CMS structure changes — work within existing data model
- Visual/design changes to the website — translation and content only

## Context

- ADVISORI is a German consulting firm with a Sanity CMS-powered website
- The website has 1,000+ German service pages that need English versions
- Significant translation work has already been completed manually by the user
- Current workflow is manual and sequential: extract → generate template → translate → import → track
- Each page takes 2-4 hours manually, making the remaining workload enormous
- Sanity uses `__i18n_lang` and `__i18n_base` fields for language linking
- The codebase has 6,000+ TypeScript files with hardcoded API tokens (critical security issue)
- Translation must follow 11 mandatory rules (language field, slug format, FAQ count, etc.)
- A `translation-batch/` directory has 5 pages with templates ready but incomplete (TODO markers)

## Constraints

- **Sanity API**: Token and credentials already configured; must use existing Sanity project/dataset
- **Translation Quality**: Translations must be accurate, professional, and consistent in tone — no hallucinated content
- **Existing Content Safety**: Already-translated and published pages must not be touched or overwritten
- **Tech Stack**: TypeScript/Node.js with @sanity/client — maintain compatibility with existing tooling
- **Content Type**: servicePage documents in Sanity with specific schema (title, slug, parent, references, subServices, seo, heroSection, overview, approach, services, testimonial, faq, language)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Audit-first approach | Understand existing workflow before automating — avoid building on broken foundations | — Pending |
| Focus on service pages only | 1,000+ pages is already massive scope; other content types can follow | — Pending |
| AI-assisted translation | Manual translation at 2-4 hours/page doesn't scale to 1,000+ pages | — Pending |

---
*Last updated: 2026-02-19 after initialization*
