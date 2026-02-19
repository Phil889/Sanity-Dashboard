import { createKritisKontinuierlicheUeberwachungEn } from './create-kritis-kontinuierliche-ueberwachung-en'
import { addFaqsBatch1 } from './kritis-kontinuierliche-ueberwachung-en-faqs-batch1'
import { addFaqsBatch2 } from './kritis-kontinuierliche-ueberwachung-en-faqs-batch2'
import { addFaqsBatch3 } from './kritis-kontinuierliche-ueberwachung-en-faqs-batch3'
import { addFaqsBatch4 } from './kritis-kontinuierliche-ueberwachung-en-faqs-batch4'
import { addFaqsBatch5 } from './kritis-kontinuierliche-ueberwachung-en-faqs-batch5'

async function importKritisKontinuierlicheUeberwachungEn() {
  console.log('='.repeat(60))
  console.log('Starting CRITIS Continuous Monitoring Incident Management English import...')
  console.log('='.repeat(60))
  
  try {
    // Step 1: Create the main page
    console.log('\n📄 Step 1: Creating main page...')
    await createKritisKontinuierlicheUeberwachungEn()
    console.log('✅ Main page created successfully')
    
    // Step 2: Add FAQ batches
    console.log('\n📝 Step 2: Adding FAQ batch 1 (FAQs 1-4)...')
    await addFaqsBatch1()
    console.log('✅ FAQ batch 1 added successfully')
    
    console.log('\n📝 Step 3: Adding FAQ batch 2 (FAQs 5-8)...')
    await addFaqsBatch2()
    console.log('✅ FAQ batch 2 added successfully')
    
    console.log('\n📝 Step 4: Adding FAQ batch 3 (FAQs 9-12)...')
    await addFaqsBatch3()
    console.log('✅ FAQ batch 3 added successfully')
    
    console.log('\n📝 Step 5: Adding FAQ batch 4 (FAQs 13-16)...')
    await addFaqsBatch4()
    console.log('✅ FAQ batch 4 added successfully')
    
    console.log('\n📝 Step 6: Adding FAQ batch 5 (FAQs 17-20)...')
    await addFaqsBatch5()
    console.log('✅ FAQ batch 5 added successfully')
    
    console.log('\n' + '='.repeat(60))
    console.log('🎉 CRITIS Continuous Monitoring Incident Management English import completed!')
    console.log('='.repeat(60))
    console.log('\nSummary:')
    console.log('- Document ID: kritis-kontinuierliche-ueberwachung-incident-management-en')
    console.log('- Title: CRITIS Continuous Monitoring Incident Management')
    console.log('- Language: English')
    console.log('- Services: 2')
    console.log('- FAQs: 20 (5 batches x 4 FAQs)')
    console.log('- Parent: kritis-implementation-en')
    
  } catch (error) {
    console.error('\n❌ Import failed:', error)
    throw error
  }
}

importKritisKontinuierlicheUeberwachungEn()
