import { createKritisOngoingComplianceEn } from './create-kritis-ongoing-compliance-en'
import { addFaqsBatch1 } from './kritis-ongoing-compliance-en-faqs-batch1'
import { addFaqsBatch2 } from './kritis-ongoing-compliance-en-faqs-batch2'
import { addFaqsBatch3 } from './kritis-ongoing-compliance-en-faqs-batch3'
import { addFaqsBatch4 } from './kritis-ongoing-compliance-en-faqs-batch4'
import { addFaqsBatch5 } from './kritis-ongoing-compliance-en-faqs-batch5'

async function importKritisOngoingComplianceEn() {
  console.log('=== Starting KRITIS Ongoing Compliance EN Import ===\n')
  
  try {
    // Step 1: Create the main page
    console.log('Step 1: Creating main page...')
    await createKritisOngoingComplianceEn()
    console.log('✓ Main page created\n')
    
    // Step 2: Add FAQs in batches
    console.log('Step 2: Adding FAQs...')
    
    console.log('  Adding batch 1 (FAQs 1-4)...')
    await addFaqsBatch1()
    console.log('  ✓ Batch 1 complete')
    
    console.log('  Adding batch 2 (FAQs 5-8)...')
    await addFaqsBatch2()
    console.log('  ✓ Batch 2 complete')
    
    console.log('  Adding batch 3 (FAQs 9-12)...')
    await addFaqsBatch3()
    console.log('  ✓ Batch 3 complete')
    
    console.log('  Adding batch 4 (FAQs 13-16)...')
    await addFaqsBatch4()
    console.log('  ✓ Batch 4 complete')
    
    console.log('  Adding batch 5 (FAQs 17-20)...')
    await addFaqsBatch5()
    console.log('  ✓ Batch 5 complete')
    
    console.log('\n=== Import Complete ===')
    console.log('Page ID: kritis-ongoing-compliance-en')
    console.log('Total FAQs: 20')
    console.log('Total Services: 2')
    
  } catch (error) {
    console.error('Import failed:', error)
    throw error
  }
}

importKritisOngoingComplianceEn()
