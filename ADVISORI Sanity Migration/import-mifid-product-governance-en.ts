import { createMifidProductGovernanceEn } from './create-mifid-product-governance-en'
import { addFaqsBatch1 } from './mifid-product-governance-en-faqs-batch1'
import { addFaqsBatch2 } from './mifid-product-governance-en-faqs-batch2'
import { addFaqsBatch3 } from './mifid-product-governance-en-faqs-batch3'
import { addFaqsBatch4 } from './mifid-product-governance-en-faqs-batch4'
import { addFaqsBatch5 } from './mifid-product-governance-en-faqs-batch5'

async function importMifidProductGovernanceEn() {
  console.log('=== Starting MiFID Product Governance EN Import ===\n')
  
  try {
    // Step 1: Create the main page
    console.log('Step 1: Creating main page...')
    await createMifidProductGovernanceEn()
    console.log('✓ Main page created\n')
    
    // Step 2: Add FAQ batches
    console.log('Step 2: Adding FAQ batch 1 (FAQs 1-4)...')
    await addFaqsBatch1()
    console.log('✓ FAQ batch 1 added\n')
    
    console.log('Step 3: Adding FAQ batch 2 (FAQs 5-8)...')
    await addFaqsBatch2()
    console.log('✓ FAQ batch 2 added\n')
    
    console.log('Step 4: Adding FAQ batch 3 (FAQs 9-12)...')
    await addFaqsBatch3()
    console.log('✓ FAQ batch 3 added\n')
    
    console.log('Step 5: Adding FAQ batch 4 (FAQs 13-16)...')
    await addFaqsBatch4()
    console.log('✓ FAQ batch 4 added\n')
    
    console.log('Step 6: Adding FAQ batch 5 (FAQs 17-20)...')
    await addFaqsBatch5()
    console.log('✓ FAQ batch 5 added\n')
    
    console.log('=== MiFID Product Governance EN Import Complete ===')
    console.log('Total FAQs: 20')
    console.log('Total Services: 6')
    
  } catch (error) {
    console.error('Import failed:', error)
    throw error
  }
}

importMifidProductGovernanceEn()
