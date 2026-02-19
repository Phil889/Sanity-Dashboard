import { execSync } from 'child_process'
import path from 'path'

const scripts = [
  'create-mifid-rts-en.ts',
  'mifid-rts-en-faqs-batch1.ts',
  'mifid-rts-en-faqs-batch2.ts',
  'mifid-rts-en-faqs-batch3.ts',
  'mifid-rts-en-faqs-batch4.ts',
  'mifid-rts-en-faqs-batch5.ts',
]

async function runImport() {
  console.log('Starting MiFID RTS 27/28 EN page import...\n')
  
  for (const script of scripts) {
    console.log(`Running ${script}...`)
    try {
      const scriptPath = path.join(__dirname, script)
      execSync(`npx tsx "${scriptPath}"`, {
        stdio: 'inherit',
        env: process.env
      })
      console.log(`✓ ${script} completed successfully\n`)
    } catch (error) {
      console.error(`✗ Error running ${script}:`, error)
      process.exit(1)
    }
  }
  
  console.log('='.repeat(50))
  console.log('MiFID RTS 27/28 EN page import completed successfully!')
  console.log('Document ID: mifid-transparenz-berichtspflichten-rts-27-28-en')
  console.log('Total FAQs: 20')
  console.log('='.repeat(50))
}

runImport()
