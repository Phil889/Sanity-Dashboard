import { execSync } from 'child_process'
import * as path from 'path'

// Import script for Employee Training EN
// This script runs all the individual files in sequence to create the complete page
// Source: mitarbeiterschulungen (German)
// Target: employee-training-en (English)

const scripts = [
  'create-employee-training-en.ts',
  'employee-training-en-faqs-batch1.ts',
  'employee-training-en-faqs-batch2.ts',
  'employee-training-en-faqs-batch3.ts',
  'employee-training-en-faqs-batch4.ts',
  'employee-training-en-faqs-batch5.ts'
]

async function runImport() {
  console.log('Starting Employee Training EN import...')
  console.log('=' .repeat(50))
  
  for (const script of scripts) {
    console.log(`\nRunning: ${script}`)
    console.log('-'.repeat(40))
    
    try {
      const scriptPath = path.join(__dirname, script)
      execSync(`npx tsx "${scriptPath}"`, { 
        stdio: 'inherit',
        cwd: __dirname
      })
      console.log(`✓ ${script} completed successfully`)
    } catch (error) {
      console.error(`✗ Error running ${script}:`, error)
      process.exit(1)
    }
  }
  
  console.log('\n' + '='.repeat(50))
  console.log('Employee Training EN import completed successfully!')
  console.log('Document ID: employee-training-en')
  console.log('Total FAQs: 20')
}

runImport()
