import { createMifidIIComplianceFrameworkEn } from './create-mifid-ii-compliance-framework-en'
import { addFaqsBatch1 } from './mifid-ii-compliance-framework-en-faqs-batch1'
import { addFaqsBatch2 } from './mifid-ii-compliance-framework-en-faqs-batch2'
import { addFaqsBatch3 } from './mifid-ii-compliance-framework-en-faqs-batch3'
import { addFaqsBatch4 } from './mifid-ii-compliance-framework-en-faqs-batch4'
import { addFaqsBatch5 } from './mifid-ii-compliance-framework-en-faqs-batch5'

async function importMifidIIComplianceFrameworkEn() {
  console.log('Starting MiFID II Compliance Framework EN import...')
  console.log('=' .repeat(60))
  
  try {
    // Step 1: Create the main page
    console.log('\n📄 Step 1: Creating main page...')
    await createMifidIIComplianceFrameworkEn()
    console.log('✅ Main page created successfully')
    
    // Step 2: Add FAQ batches
    console.log('\n📝 Step 2: Adding FAQ batches...')
    
    console.log('\n  Adding batch 1 (FAQs 1-4)...')
    await addFaqsBatch1()
    console.log('  ✅ Batch 1 complete')
    
    console.log('\n  Adding batch 2 (FAQs 5-8)...')
    await addFaqsBatch2()
    console.log('  ✅ Batch 2 complete')
    
    console.log('\n  Adding batch 3 (FAQs 9-12)...')
    await addFaqsBatch3()
    console.log('  ✅ Batch 3 complete')
    
    console.log('\n  Adding batch 4 (FAQs 13-16)...')
    await addFaqsBatch4()
    console.log('  ✅ Batch 4 complete')
    
    console.log('\n  Adding batch 5 (FAQs 17-20)...')
    await addFaqsBatch5()
    console.log('  ✅ Batch 5 complete')
    
    console.log('\n' + '=' .repeat(60))
    console.log('🎉 MiFID II Compliance Framework EN import completed successfully!')
    console.log('   - Main page with 6 services')
    console.log('   - 20 FAQs added in 5 batches')
    console.log('=' .repeat(60))
    
  } catch (error) {
    console.error('❌ Import failed:', error)
    throw error
  }
}

importMifidIIComplianceFrameworkEn()
