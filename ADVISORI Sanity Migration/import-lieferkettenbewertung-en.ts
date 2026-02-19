import { createLieferkettenbewertungEn } from './create-lieferkettenbewertung-en'
import { addFaqsBatch1 } from './lieferkettenbewertung-en-faqs-batch1'
import { addFaqsBatch2 } from './lieferkettenbewertung-en-faqs-batch2'
import { addFaqsBatch3 } from './lieferkettenbewertung-en-faqs-batch3'
import { addFaqsBatch4 } from './lieferkettenbewertung-en-faqs-batch4'
import { addFaqsBatch5 } from './lieferkettenbewertung-en-faqs-batch5'

async function importLieferkettenbewertungEn() {
  console.log('🚀 Starting Supply Chain Assessment EN import...')
  console.log('=' .repeat(50))
  
  try {
    // Step 1: Create main page
    console.log('\n📄 Step 1: Creating main page...')
    await createLieferkettenbewertungEn()
    
    // Step 2: Add FAQs in batches
    console.log('\n📝 Step 2: Adding FAQs in batches...')
    
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
    
    console.log('\n' + '=' .repeat(50))
    console.log('🎉 Supply Chain Assessment EN import completed successfully!')
    console.log('   - Main page with 3 services')
    console.log('   - 20 FAQs added in 5 batches')
    console.log('=' .repeat(50))
    
  } catch (error) {
    console.error('\n❌ Import failed:', error)
    throw error
  }
}

// Execute
importLieferkettenbewertungEn().catch(console.error)
