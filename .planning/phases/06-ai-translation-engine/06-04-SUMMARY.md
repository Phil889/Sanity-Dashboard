# 06-04 Summary: Translation Quality Validation

## Status: COMPLETE

## Tasks Completed: 2/2

### Task 1: Create translation validation tool
- **File**: `src/tools/validate-translation.ts` (530 lines)
- **Exports**: `validateTranslation()`, `validateTranslationDirectory()`, `TranslationValidationResult`, `DirectoryTranslationReport`
- **npm script**: `validate-translation` added to package.json
- **Commit**: `234d66b` — `feat(06-04): create translation validation tool`

**11 Rule Checks Implemented:**
1. Language is "en"
2. Content non-empty for all sections present in German source
3. No duplicate FAQ questions
4. Testimonial has quote, name, position, company
5. Emoji count preserved in FAQ answers
6. Optional fields only present if in German source (no hallucinated sections)
7. All _key values match prefix_timestamp_index pattern and are unique
8. slug.current ends with "-en" and is kebab-case
9. FAQ count matches German source (requires germanPath)
10. All sections present in German are in translation
11. All array items have _type: "object"

**Quality Checks:**
- FORBIDDEN_TERMS scanning across all text fields
- Testimonial name/company match with German source
- SEO title suffix "| ADVISORI" check
- Emoji preservation in FAQ answers

**CLI Modes:**
- `--file <path>` — single file validation
- `--german <path>` — optional German source for cross-validation
- `--dir <path>` — directory mode (all *-en.json files)
- `--german-dir <path>` — German source directory for directory mode
- `--json` — JSON output
- `--strict` — treat warnings as errors

### Task 2: Verify with synthetic data
- Created synthetic "good" translation from kyc-source.json
  - Scored 11/11 with all rules passing
  - Exit code 0
- Created synthetic "bad" translation with 10 intentional errors:
  - Wrong language (de instead of en)
  - FAQ count mismatch (5 vs 20)
  - Slug without -en suffix
  - Forbidden terms (AI-powered, cutting-edge, revolutionize, next-generation)
  - Duplicate FAQ questions
  - Missing testimonial name/company
  - Missing approach section
  - Bad _key pattern
  - Wrong _type on array item
  - SEO title missing ADVISORI suffix
- Bad translation scored 1/11, correctly catching all failures
- Directory mode aggregated results correctly (2 files, 1 valid, 1 invalid)
- JSON output mode produced valid JSON
- npm script `validate-translation` works via npm run
- Test files cleaned up after verification

## Verification Checklist
- [x] validate-translation.ts exports validateTranslation() and TranslationValidationResult
- [x] All 11 rules checked individually with pass/fail
- [x] Cross-validation with German source works (FAQ count, services count, sections)
- [x] Quality checks: forbidden terms, testimonial consistency, SEO suffix, emoji preservation
- [x] Single-file mode works with --file and --german
- [x] Directory mode works with --dir and --german-dir
- [x] --json outputs valid JSON report
- [x] Aggregate report shows average score and common failures
- [x] npm run typecheck passes
- [x] Valid translations score 11/11
- [x] Synthetic bad translation detected with specific rule failures
- [x] FAQ count mismatch detected when German source provided
- [x] FORBIDDEN_TERMS detected in text content
- [x] Directory mode aggregates results correctly
- [x] Exit code 0 for valid, 1 for invalid
- [x] npm run validate-translation works via npm script

## Deviations
- None. All tasks completed as specified in the plan.
