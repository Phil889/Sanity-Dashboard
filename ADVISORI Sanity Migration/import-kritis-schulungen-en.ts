import { createKritisSchulungenEn } from './create-kritis-schulungen-en'
import { addFaqsBatch1 } from './kritis-schulungen-en-faqs-batch1'
import { addFaqsBatch2 } from './kritis-schulungen-en-faqs-batch2'
import { addFaqsBatch3 } from './kritis-schulungen-en-faqs-batch3'
import { addFaqsBatch4 } from './kritis-schulungen-en-faqs-batch4'
import { addFaqsBatch5 } from './kritis-schulungen-en-faqs-batch5'

async function importKritisSchulungenEn() {
  console.log('='.repeat(60))
  console.log('Starting KRITIS Schulungen & Awareness-Kampagnen English Import')
  console.log('='.repeat(60))
  
  try {
    // Step 1: Create the main page
    console.log('\n📄 Step 1: Creating main page...')
    await createKritisSchulungenEn()
    
    // Step 2: Add FAQs in batches
    console.log('\n📝 Step 2: Adding FAQs...')
    
    console.log('\n  Batch 1 (FAQs 1-4)...')
    await addFaqsBatch1()
    
    console.log('\n  Batch 2 (FAQs 5-8)...')
    await addFaqsBatch2()
    
    console.log('\n  Batch 3 (FAQs 9-12)...')
    await addFaqsBatch3()
    
    console.log('\n  Batch 4 (FAQs 13-16)...')
    await addFaqsBatch4()
    
    console.log('\n  Batch 5 (FAQs 17-20)...')
    await addFaqsBatch5()
    
    console.log('\n' + '='.repeat(60))
    console.log('✅ KRITIS Schulungen & Awareness-Kampagnen English Import Complete!')
    console.log('='.repeat(60))
    console.log('\nSummary:')
    console.log('  - Page ID: kritis-schulungen-awareness-kampagnen-en')
    console.log('  - Title: KRITIS Training & Awareness Campaigns')
    console.log('  - FAQs: 20 total (5 batches of 4)')
    console.log('  - Services: 2')
    console.log('  - Parent: kritis-ongoing-compliance')
    console.log('  - Top Level Parent: regulatory-compliance-management')
    
  } catch (error) {
    console.error('\n❌ Import failed:', error)
    throw error
  }
}

importKritisSchulungenEn()
