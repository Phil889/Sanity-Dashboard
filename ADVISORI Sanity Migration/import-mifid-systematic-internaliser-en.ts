import { execSync } from 'child_process'
import path from 'path'

// Import script for MiFID Systematic Internaliser EN
// This script runs all the individual scripts in sequence

const scripts = [
  'create-mifid-systematic-internaliser-en.ts',
  'mifid-systematic-internaliser-en-faqs-batch1.ts',
  'mifid-systematic-internaliser-en-faqs-batch2.ts',
  'mifid-systematic-internaliser-en-faqs-batch3.ts',
  'mifid-systematic-internaliser-en-faqs-batch4.ts',
  'mifid-systematic-internaliser-en-faqs-batch5.ts',
]

const baseDir = path.dirname(new URL(import.meta.url).pathname).replace(/^\/([A-Za-z]:)/, '$1')

console.log('🚀 Starting MiFID Systematic Internaliser EN import...\n')

for (const script of scripts) {
  console.log(`\n📄 Running ${script}...`)
  console.log('='.repeat(50))
  
  try {
    execSync(`npx tsx "${path.join(baseDir, script)}"`, {
      stdio: 'inherit',
      cwd: baseDir,
    })
    console.log(`✅ ${script} completed successfully`)
  } catch (error) {
    console.error(`❌ Error running ${script}:`, error)
    process.exit(1)
  }
}

console.log('\n' + '='.repeat(50))
console.log('🎉 MiFID Systematic Internaliser EN import completed successfully!')
console.log('='.repeat(50))
