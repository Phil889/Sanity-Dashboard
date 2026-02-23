import { createKritisSchutzkonzepteEn } from './create-kritis-schutzkonzepte-en'
import { addFaqsBatch1 } from './kritis-schutzkonzepte-en-faqs-batch1'
import { addFaqsBatch2 } from './kritis-schutzkonzepte-en-faqs-batch2'
import { addFaqsBatch3 } from './kritis-schutzkonzepte-en-faqs-batch3'
import { addFaqsBatch4 } from './kritis-schutzkonzepte-en-faqs-batch4'
import { addFaqsBatch5 } from './kritis-schutzkonzepte-en-faqs-batch5'

async function importKritisSchutzkonzepteEn() {
  console.log('='.repeat(60))
  console.log('Starting KRITIS Protection Concepts Physical Digital EN import...')
  console.log('='.repeat(60))
  
  try {
    // Step 1: Create the main page
    console.log('\n📄 Step 1: Creating main page...')
    await createKritisSchutzkonzepteEn()
    
    // Wait a bit between operations
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Step 2: Add FAQs in batches
    console.log('\n📝 Step 2: Adding FAQs batch 1 (1-4)...')
    await addFaqsBatch1()
    await new Promise(resolve => setTimeout(resolve, 500))
    
    console.log('\n📝 Step 3: Adding FAQs batch 2 (5-8)...')
    await addFaqsBatch2()
    await new Promise(resolve => setTimeout(resolve, 500))
    
    console.log('\n📝 Step 4: Adding FAQs batch 3 (9-12)...')
    await addFaqsBatch3()
    await new Promise(resolve => setTimeout(resolve, 500))
    
    console.log('\n📝 Step 5: Adding FAQs batch 4 (13-16)...')
    await addFaqsBatch4()
    await new Promise(resolve => setTimeout(resolve, 500))
    
    console.log('\n📝 Step 6: Adding FAQs batch 5 (17-20)...')
    await addFaqsBatch5()
    
    console.log('\n' + '='.repeat(60))
    console.log('✅ KRITIS Protection Concepts Physical Digital EN import completed!')
    console.log('='.repeat(60))
    console.log('\nSummary:')
    console.log('- Page ID: kritis-schutzkonzepte-physisch-digital-en')
    console.log('- Title: KRITIS Protection Concepts Physical Digital')
    console.log('- FAQs: 20 (5 batches of 4)')
    console.log('- Services: 2')
    console.log('- Parent: kritis-implementation')
    console.log('- Top Level Parent: regulatory-compliance-management')
    
  } catch (error) {
    console.error('\n❌ Import failed:', error)
    throw error
  }
}

// Execute
importKritisSchutzkonzepteEn()
