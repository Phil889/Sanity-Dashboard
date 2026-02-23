import { createLiquiditaetssteuerungEn } from './create-liquiditaetssteuerung-en'
import { addFaqsBatch1 } from './liquiditaetssteuerung-en-faqs-batch1'
import { addFaqsBatch2 } from './liquiditaetssteuerung-en-faqs-batch2'
import { addFaqsBatch3 } from './liquiditaetssteuerung-en-faqs-batch3'
import { addFaqsBatch4 } from './liquiditaetssteuerung-en-faqs-batch4'
import { addFaqsBatch5 } from './liquiditaetssteuerung-en-faqs-batch5'

async function importLiquiditaetssteuerungEn() {
  console.log('Starting Liquidity Management EN import...')
  console.log('=' .repeat(60))
  
  try {
    // Step 1: Create the main page
    console.log('\n📄 Step 1: Creating main page...')
    await createLiquiditaetssteuerungEn()
    console.log('✅ Main page created successfully')
    
    // Step 2: Add FAQ batches
    console.log('\n📝 Step 2: Adding FAQ batches...')
    
    console.log('\n  Adding batch 1 (FAQs 1-2)...')
    await addFaqsBatch1()
    console.log('  ✅ Batch 1 complete')
    
    console.log('\n  Adding batch 2 (FAQs 3-4)...')
    await addFaqsBatch2()
    console.log('  ✅ Batch 2 complete')
    
    console.log('\n  Adding batch 3 (FAQs 5-6)...')
    await addFaqsBatch3()
    console.log('  ✅ Batch 3 complete')
    
    console.log('\n  Adding batch 4 (FAQ 7)...')
    await addFaqsBatch4()
    console.log('  ✅ Batch 4 complete')
    
    console.log('\n  Adding batch 5 (FAQs 8-9)...')
    await addFaqsBatch5()
    console.log('  ✅ Batch 5 complete')
    
    console.log('\n' + '=' .repeat(60))
    console.log('🎉 Liquidity Management EN import completed successfully!')
    console.log('   - Main page with 3 services')
    console.log('   - 9 FAQs added in 5 batches')
    console.log('=' .repeat(60))
    
  } catch (error) {
    console.error('❌ Import failed:', error)
    throw error
  }
}

importLiquiditaetssteuerungEn()
