import { createLaufendesMonitoringEn } from './create-laufendes-monitoring-en'
import { addFaqsBatch1 } from './laufendes-monitoring-en-faqs-batch1'
import { addFaqsBatch2 } from './laufendes-monitoring-en-faqs-batch2'
import { addFaqsBatch3 } from './laufendes-monitoring-en-faqs-batch3'
import { addFaqsBatch4 } from './laufendes-monitoring-en-faqs-batch4'
import { addFaqsBatch5 } from './laufendes-monitoring-en-faqs-batch5'

async function importLaufendesMonitoringEn() {
  console.log('='.repeat(60))
  console.log('Starting Continuous Monitoring & Risk Assessment English page import...')
  console.log('='.repeat(60))
  
  try {
    // Step 1: Create the main page
    console.log('\n📄 Step 1: Creating main page...')
    await createLaufendesMonitoringEn()
    console.log('✅ Main page created successfully')
    
    // Step 2: Add FAQ batches
    console.log('\n📝 Step 2: Adding FAQ batches...')
    
    console.log('\n  Adding batch 1 (FAQs 1-4)...')
    await addFaqsBatch1()
    console.log('  ✅ Batch 1 added')
    
    console.log('\n  Adding batch 2 (FAQs 5-8)...')
    await addFaqsBatch2()
    console.log('  ✅ Batch 2 added')
    
    console.log('\n  Adding batch 3 (FAQs 9-12)...')
    await addFaqsBatch3()
    console.log('  ✅ Batch 3 added')
    
    console.log('\n  Adding batch 4 (FAQs 13-16)...')
    await addFaqsBatch4()
    console.log('  ✅ Batch 4 added')
    
    console.log('\n  Adding batch 5 (FAQs 17-20)...')
    await addFaqsBatch5()
    console.log('  ✅ Batch 5 added')
    
    console.log('\n' + '='.repeat(60))
    console.log('🎉 Continuous Monitoring & Risk Assessment English page import completed!')
    console.log('   - Page ID: laufendes-monitoring-risk-assessment-en')
    console.log('   - Total FAQs: 20')
    console.log('   - Services: 4')
    console.log('='.repeat(60))
    
  } catch (error) {
    console.error('❌ Import failed:', error)
    throw error
  }
}

importLaufendesMonitoringEn().catch(console.error)
