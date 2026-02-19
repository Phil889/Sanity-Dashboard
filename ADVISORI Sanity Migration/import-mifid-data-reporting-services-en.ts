import { createMifidDataReportingServicesEn } from './create-mifid-data-reporting-services-en'
import { addFaqsBatch1 } from './mifid-data-reporting-services-en-faqs-batch1'
import { addFaqsBatch2 } from './mifid-data-reporting-services-en-faqs-batch2'
import { addFaqsBatch3 } from './mifid-data-reporting-services-en-faqs-batch3'
import { addFaqsBatch4 } from './mifid-data-reporting-services-en-faqs-batch4'
import { addFaqsBatch5 } from './mifid-data-reporting-services-en-faqs-batch5'

async function importMifidDataReportingServicesEn() {
  console.log('🚀 Starting MiFID Data Reporting Services EN import...\n')
  
  try {
    // Step 1: Create the main page
    console.log('Step 1: Creating main page...')
    await createMifidDataReportingServicesEn()
    console.log('✅ Main page created\n')
    
    // Wait a bit between operations
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Step 2: Add FAQ batches
    console.log('Step 2: Adding FAQ batches...')
    
    await addFaqsBatch1()
    await new Promise(resolve => setTimeout(resolve, 500))
    
    await addFaqsBatch2()
    await new Promise(resolve => setTimeout(resolve, 500))
    
    await addFaqsBatch3()
    await new Promise(resolve => setTimeout(resolve, 500))
    
    await addFaqsBatch4()
    await new Promise(resolve => setTimeout(resolve, 500))
    
    await addFaqsBatch5()
    
    console.log('\n✅ MiFID Data Reporting Services EN import completed successfully!')
    console.log('📊 Total: 20 FAQs added in 5 batches')
    console.log('🔗 Document ID: mifid-data-reporting-services-en')
    
  } catch (error) {
    console.error('❌ Import failed:', error)
    throw error
  }
}

importMifidDataReportingServicesEn()
  .then(() => {
    console.log('\n🎉 All done!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Fatal error:', error)
    process.exit(1)
  })
