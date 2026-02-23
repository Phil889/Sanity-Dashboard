import { createMifidEsgIntegrationEn } from './create-mifid-esg-integration-en'
import { addFaqsBatch1 } from './mifid-esg-integration-en-faqs-batch1'
import { addFaqsBatch2 } from './mifid-esg-integration-en-faqs-batch2'
import { addFaqsBatch3 } from './mifid-esg-integration-en-faqs-batch3'

async function importMifidEsgIntegrationEn() {
  console.log('🚀 Starting MiFID ESG Integration EN import...')
  console.log('=' .repeat(60))
  
  try {
    // Step 1: Create the main page
    console.log('\n📄 Step 1: Creating main page...')
    await createMifidEsgIntegrationEn()
    console.log('✅ Main page created successfully')
    
    // Wait a moment for Sanity to process
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Step 2: Add FAQ batches
    console.log('\n📝 Step 2: Adding FAQ batches...')
    
    console.log('\n  Adding batch 1 (FAQs 1-4)...')
    await addFaqsBatch1()
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('\n  Adding batch 2 (FAQs 5-8)...')
    await addFaqsBatch2()
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('\n  Adding batch 3 (FAQs 9-12)...')
    await addFaqsBatch3()
    
    console.log('\n' + '=' .repeat(60))
    console.log('🎉 MiFID ESG Integration EN import completed successfully!')
    console.log('=' .repeat(60))
    console.log('\n📊 Summary:')
    console.log('  - Document ID: mifid-esg-integration-en')
    console.log('  - Total FAQs: 12')
    console.log('  - Services: 6')
    console.log('  - Parent: regulatory-compliance-management')
    
  } catch (error) {
    console.error('\n❌ Import failed:', error)
    throw error
  }
}

// Run the import
importMifidEsgIntegrationEn()
  .then(() => {
    console.log('\n✅ All done!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('\n❌ Fatal error:', error)
    process.exit(1)
  })
