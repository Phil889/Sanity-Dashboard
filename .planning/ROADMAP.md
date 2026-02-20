# Roadmap: ADVISORI Sanity Translation Pipeline

## Overview

Transform a manual, script-by-script German-to-English translation workflow into a fully automated pipeline. Starting with an audit of the existing 6,000+ file codebase, we fix critical security issues, build shared infrastructure, then systematically automate each step: detection, extraction, translation, validation, upload, and i18n linking. The end goal is a single command that processes hundreds of pages reliably.

## Domain Expertise

None

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

- [ ] **Phase 1: Audit & Assessment** - Map existing workflow, test scripts, identify what works/breaks/is redundant
- [ ] **Phase 2: Security Hardening** - Fix hardcoded API tokens in 6,000+ files, centralize credentials
- [x] **Phase 3: Core Infrastructure** - Shared Sanity client, error handling, utilities for all later phases
- [x] **Phase 4: Untranslated Page Detection** - Automated query to find German servicePages without English counterparts
- [x] **Phase 5: Content Extraction** - Reliable batch extraction of German page content into structured format
- [ ] **Phase 6: AI-Assisted Translation Engine** - Translation system following all 11 rules with quality output
- [ ] **Phase 7: Translation Validation** - Automated checks against all 11 rules, schema, and quality standards
- [ ] **Phase 8: Automated Upload** - Programmatic upload of translated content to Sanity with error handling
- [ ] **Phase 9: i18n Linking** - Automatically link English/German page versions via __i18n_lang and __i18n_base
- [ ] **Phase 10: End-to-End Pipeline** - Wire everything together: detect → extract → translate → validate → upload → link → verify at scale

## Phase Details

### Phase 1: Audit & Assessment
**Goal**: Complete understanding of current workflow — what works, what's broken, what's redundant, what to keep
**Depends on**: Nothing (first phase)
**Research**: Unlikely (internal codebase analysis)
**Plans**: 5 plans

Plans:
- [ ] 01-01: Inventory and test existing npm scripts (query, next, status, workflow)
- [ ] 01-02: Audit extraction and template generation scripts
- [ ] 01-03: Audit completed translations — verify quality and Sanity upload status
- [ ] 01-04: Map Sanity schema and i18n document structure
- [ ] 01-05: Produce audit report with recommendations

### Phase 2: Security Hardening
**Goal**: Eliminate hardcoded API tokens, centralize credentials, add .gitignore
**Depends on**: Phase 1
**Research**: Unlikely (established .env patterns)
**Plans**: 3 plans

Plans:
- [ ] 02-01: Create .gitignore, .env, .env.example — centralize all credentials
- [ ] 02-02: Replace hardcoded tokens across codebase with env var references
- [ ] 02-03: Validate no credentials remain exposed, verify all scripts still work

### Phase 3: Core Infrastructure
**Goal**: Shared Sanity client module, error handling utilities, and config used by all subsequent phases
**Depends on**: Phase 2
**Research**: Unlikely (existing @sanity/client patterns)
**Plans**: 4 plans

Plans:
- [x] 03-01: Project foundation (package.json, tsconfig.json, directory structure)
- [x] 03-02: Shared Sanity client module with centralized config
- [x] 03-03: Error handling and logging utilities
- [x] 03-04: EN FAQ batch runner tool

### Phase 4: Untranslated Page Detection
**Goal**: Automated, accurate detection of all German servicePages without English translations
**Depends on**: Phase 3
**Research**: Likely (Sanity GROQ queries for i18n document relationships)
**Research topics**: GROQ query patterns for __i18n_lang and __i18n_base references, efficient querying of large datasets, Sanity API pagination
**Plans**: 3 plans

Plans:
- [x] 04-01: Sanity translation status detection tool (GROQ-based)
- [x] 04-02: Local translation file scanner (filesystem-based)
- [x] 04-03: Translation queue generator (merged + prioritized)

### Phase 5: Content Extraction
**Goal**: Reliable batch extraction of German page content into clean, structured JSON ready for translation
**Depends on**: Phase 4
**Research**: Unlikely (existing extraction script to improve)
**Plans**: 3 plans

Plans:
- [x] 05-01: Single-page extraction tool (GROQ fetch + system field stripping)
- [x] 05-02: Batch extraction pipeline (queue consumption + rate limiting + resume)
- [x] 05-03: Extraction validation and normalization (canonical types + CLI validator)

### Phase 6: AI-Assisted Translation Engine
**Goal**: Automated translation of German service pages to English, following all 11 rules, with professional quality
**Depends on**: Phase 5
**Research**: Complete (Claude API via @anthropic-ai/sdk, hybrid AI+code approach)
**Plans**: 4 plans

Plans:
- [ ] 06-01: Translation infrastructure and glossary (config, types, slug translations, forbidden terms)
- [ ] 06-02: Single-page translation engine (Claude API prompt, translate-page.ts CLI tool)
- [ ] 06-03: Batch translation pipeline (translate-batch.ts with rate limiting, cost tracking, resume)
- [ ] 06-04: Translation quality validation (11-rule checker, cross-validation with German source)

### Phase 7: Translation Validation
**Goal**: Automated validation that catches all structural, content, and quality issues before upload
**Depends on**: Phase 6
**Research**: Unlikely (11 rules already defined, implement checks)
**Plans**: 3 plans

Plans:
- [ ] 07-01: Implement structural validators (language field, slug format, _type, _key)
- [ ] 07-02: Implement content validators (FAQ count match, section completeness, no duplicates)
- [ ] 07-03: Build validation report with pass/fail per page and actionable error messages

### Phase 8: Automated Upload
**Goal**: Programmatic upload of validated translations to Sanity with error handling and rollback capability
**Depends on**: Phase 7
**Research**: Likely (Sanity mutation API for batch operations)
**Research topics**: Sanity createOrReplace vs create mutations, transaction batching, rate limits, error recovery patterns
**Plans**: 3 plans

Plans:
- [ ] 08-01: Build upload module using Sanity mutations API (not CLI import)
- [ ] 08-02: Add dry-run mode, rollback tracking, and error recovery
- [ ] 08-03: Test upload with sample batch, verify in Sanity Studio

### Phase 9: i18n Linking
**Goal**: Automatically link English pages to their German counterparts in Sanity using i18n references
**Depends on**: Phase 8
**Research**: Likely (Sanity i18n plugin patterns for document linking)
**Research topics**: __i18n_lang, __i18n_base, __i18n_refs field patterns, patching existing German documents to reference English versions
**Plans**: 3 plans

Plans:
- [ ] 09-01: Map i18n linking requirements (which fields, which direction)
- [ ] 09-02: Build linking module that patches both English and German documents
- [ ] 09-03: Test linking with sample batch, verify bidirectional navigation works

### Phase 10: End-to-End Pipeline
**Goal**: Single command that processes pages through the full pipeline: detect → extract → translate → validate → upload → link → verify
**Depends on**: Phase 9
**Research**: Unlikely (internal integration of completed phases)
**Plans**: 5 plans

Plans:
- [ ] 10-01: Wire all modules into unified pipeline with CLI interface
- [ ] 10-02: Add progress tracking, logging, and resume-on-failure capability
- [ ] 10-03: Add batch processing with configurable concurrency
- [ ] 10-04: Run pipeline on first real batch (10-20 pages), fix issues
- [ ] 10-05: Scale to larger batches, update TRANSLATION-TRACKER.md automatically

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Audit & Assessment | 5/5 | Complete | 2026-02-19 |
| 2. Security Hardening | 3/3 | Complete | 2026-02-19 |
| 3. Core Infrastructure | 4/4 | Complete | 2026-02-19 |
| 4. Untranslated Page Detection | 3/3 | Complete | 2026-02-20 |
| 5. Content Extraction | 3/3 | Complete | 2026-02-20 |
| 6. AI-Assisted Translation Engine | 0/4 | Planned | - |
| 7. Translation Validation | 0/3 | Not started | - |
| 8. Automated Upload | 0/3 | Not started | - |
| 9. i18n Linking | 0/3 | Not started | - |
| 10. End-to-End Pipeline | 0/5 | Not started | - |
