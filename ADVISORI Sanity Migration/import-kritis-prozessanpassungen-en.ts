import { createKritisProzessanpassungenEn } from './create-kritis-prozessanpassungen-en'
import { addFaqsBatch1 } from './kritis-prozessanpassungen-en-faqs-batch1'
import { addFaqsBatch2 } from './kritis-prozessanpassungen-en-faqs-batch2'
import { addFaqsBatch3 } from './kritis-prozessanpassungen-en-faqs-batch3'
import { addFaqsBatch4 } from './kritis-prozessanpassungen-en-faqs-batch4'
import { addFaqsBatch5 } from './kritis-prozessanpassungen-en-faqs-batch5'

async function importKritisProzessanpassungenEn() {
  console.log('='.repeat(60))
  console.log('Starting KRITIS Prozessanpassungen bei neuen Bedrohungen EN Import')
  console.log('='.repeat(60))
  
  try {
    // Step 1: Create the main page
    console.log('\n📄 Step 1: Creating main page...')
    await createKritisProzessanpassungenEn()
    console.log('✅ Main page created successfully')
    
    // Step 2: Add FAQ batches
    console.log('\n📝 Step 2: Adding FAQ batches...')
    
    console.log('  Adding batch 1 (FAQs 1-4)...')
    await addFaqsBatch1()
    console.log('  ✅ Batch 1 complete')
    
    console.log('  Adding batch 2 (FAQs 5-8)...')
    await addFaqsBatch2()
    console.log('  ✅ Batch 2 complete')
    
    console.log('  Adding batch 3 (FAQs 9-12)...')
    await addFaqsBatch3()
    console.log('  ✅ Batch 3 complete')
    
    console.log('  Adding batch 4 (FAQs 13-16)...')
    await addFaqsBatch4()
    console.log('  ✅ Batch 4 complete')
    
    console.log('  Adding batch 5 (FAQs 17-20)...')
    await addFaqsBatch5()
    console.log('  ✅ Batch 5 complete')
    
    console.log('\n' + '='.repeat(60))
    console.log('✅ KRITIS Prozessanpassungen bei neuen Bedrohungen EN Import Complete!')
    console.log('='.repeat(60))
    console.log('\nSummary:')
    console.log('- Page ID: kritis-prozessanpassungen-bei-neuen-bedrohungen-en')
    console.log('- Type: servicePage')
    console.log('- FAQs: 20 total (5 batches of 4)')
    console.log('- Services: 2')
    console.log('- Parent: kritis-ongoing-compliance')
    console.log('- Top Level Parent: regulatory-compliance-management')
    
  } catch (error) {
    console.error('\n❌ Import failed:', error)
    throw error
  }
}

importKritisProzessanpassungenEn()
