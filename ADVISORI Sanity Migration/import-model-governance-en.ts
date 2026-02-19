import { execSync } from 'child_process'
import * as path from 'path'

const scripts = [
  'create-model-governance-en.ts',
  'model-governance-en-faqs-batch1.ts',
  'model-governance-en-faqs-batch2.ts',
  'model-governance-en-faqs-batch3.ts',
  'model-governance-en-faqs-batch4.ts',
  'model-governance-en-faqs-batch5.ts'
]

async function runImport() {
  console.log('Starting Model Governance EN import...')
  console.log('=' .repeat(50))
  
  for (const script of scripts) {
    console.log(`\nRunning ${script}...`)
    try {
      execSync(`npx tsx ${script}`, {
        cwd: __dirname,
        stdio: 'inherit'
      })
      console.log(`✓ ${script} completed`)
      
      // Small delay between scripts
      await new Promise(resolve => setTimeout(resolve, 1000))
    } catch (error) {
      console.error(`✗ Error running ${script}:`, error)
      throw error
    }
  }
  
  console.log('\n' + '=' .repeat(50))
  console.log('Model Governance EN import completed successfully!')
  console.log('Document ID: model-governance-en')
  console.log('Total FAQs: 20')
}

runImport().catch(console.error)
