import { createKritisMeldepflichtenEn } from './create-kritis-meldepflichten-en'
import { addFaqsBatch1 } from './kritis-meldepflichten-en-faqs-batch1'
import { addFaqsBatch2 } from './kritis-meldepflichten-en-faqs-batch2'
import { addFaqsBatch3 } from './kritis-meldepflichten-en-faqs-batch3'
import { addFaqsBatch4 } from './kritis-meldepflichten-en-faqs-batch4'
import { addFaqsBatch5 } from './kritis-meldepflichten-en-faqs-batch5'

async function importKritisMeldepflichtenEn() {
  console.log('=== Starting KRITIS Meldepflichten Behördenkommunikation EN Import ===\n')
  
  try {
    // Step 1: Create the main page
    console.log('Step 1: Creating main page...')
    await createKritisMeldepflichtenEn()
    console.log('✅ Main page created\n')
    
    // Step 2: Add FAQ batches
    console.log('Step 2: Adding FAQ batch 1 (1-4)...')
    await addFaqsBatch1()
    console.log('✅ FAQ batch 1 added\n')
    
    console.log('Step 3: Adding FAQ batch 2 (5-8)...')
    await addFaqsBatch2()
    console.log('✅ FAQ batch 2 added\n')
    
    console.log('Step 4: Adding FAQ batch 3 (9-12)...')
    await addFaqsBatch3()
    console.log('✅ FAQ batch 3 added\n')
    
    console.log('Step 5: Adding FAQ batch 4 (13-16)...')
    await addFaqsBatch4()
    console.log('✅ FAQ batch 4 added\n')
    
    console.log('Step 6: Adding FAQ batch 5 (17-20)...')
    await addFaqsBatch5()
    console.log('✅ FAQ batch 5 added\n')
    
    console.log('=== KRITIS Meldepflichten Behördenkommunikation EN Import Complete ===')
    console.log('Total FAQs: 20')
    console.log('Total Services: 2')
    
  } catch (error) {
    console.error('Import failed:', error)
    throw error
  }
}

// Execute
importKritisMeldepflichtenEn().catch(console.error)
