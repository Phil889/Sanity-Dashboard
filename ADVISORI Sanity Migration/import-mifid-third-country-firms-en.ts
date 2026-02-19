import { execSync } from 'child_process'
import * as path from 'path'

const scriptsDir = __dirname

const scripts = [
  'create-mifid-third-country-firms-en.ts',
  'mifid-third-country-firms-en-faqs-batch1.ts',
  'mifid-third-country-firms-en-faqs-batch2.ts',
  'mifid-third-country-firms-en-faqs-batch3.ts',
  'mifid-third-country-firms-en-faqs-batch4.ts',
  'mifid-third-country-firms-en-faqs-batch5.ts',
]

console.log('='.repeat(60))
console.log('MiFID Third Country Firms EN - Full Import')
console.log('='.repeat(60))

for (const script of scripts) {
  const scriptPath = path.join(scriptsDir, script)
  console.log(`\n>>> Running: ${script}`)
  console.log('-'.repeat(40))
  
  try {
    execSync(`npx tsx "${scriptPath}"`, {
      stdio: 'inherit',
      cwd: scriptsDir,
    })
    console.log(`✓ ${script} completed successfully`)
  } catch (error) {
    console.error(`✗ ${script} failed:`, error)
    process.exit(1)
  }
}

console.log('\n' + '='.repeat(60))
console.log('MiFID Third Country Firms EN import completed!')
console.log('Document ID: mifid-third-country-firms-en')
console.log('Total FAQs: 20')
console.log('='.repeat(60))
