import { createMifidPositionLimitsEn } from './create-mifid-position-limits-en'
import { addFaqsBatch1 } from './mifid-position-limits-en-faqs-batch1'
import { addFaqsBatch2 } from './mifid-position-limits-en-faqs-batch2'
import { addFaqsBatch3 } from './mifid-position-limits-en-faqs-batch3'
import { addFaqsBatch4 } from './mifid-position-limits-en-faqs-batch4'
import { addFaqsBatch5 } from './mifid-position-limits-en-faqs-batch5'

async function importMifidPositionLimitsEn() {
  console.log('Starting MiFID Position Limits EN import...')
  console.log('=' .repeat(50))
  
  try {
    // Step 1: Create the main page
    console.log('\n📄 Step 1: Creating main page...')
    await createMifidPositionLimitsEn()
    console.log('✅ Main page created successfully')
    
    // Step 2: Add FAQs in batches
    console.log('\n📝 Step 2: Adding FAQs in batches...')
    
    console.log('\n  Batch 1 (FAQs 1-4)...')
    await addFaqsBatch1()
    console.log('  ✅ Batch 1 complete')
    
    console.log('\n  Batch 2 (FAQs 5-8)...')
    await addFaqsBatch2()
    console.log('  ✅ Batch 2 complete')
    
    console.log('\n  Batch 3 (FAQs 9-12)...')
    await addFaqsBatch3()
    console.log('  ✅ Batch 3 complete')
    
    console.log('\n  Batch 4 (FAQs 13-16)...')
    await addFaqsBatch4()
    console.log('  ✅ Batch 4 complete')
    
    console.log('\n  Batch 5 (FAQs 17-20)...')
    await addFaqsBatch5()
    console.log('  ✅ Batch 5 complete')
    
    console.log('\n' + '=' .repeat(50))
    console.log('🎉 MiFID Position Limits EN import completed successfully!')
    console.log('   - Document ID: mifid-position-limits-en')
    console.log('   - Total FAQs: 20')
    console.log('   - Total Services: 6')
    console.log('=' .repeat(50))
    
  } catch (error) {
    console.error('\n❌ Import failed:', error)
    throw error
  }
}

importMifidPositionLimitsEn()
