import { createMifidEsmaGuidelinesEn } from './create-mifid-esma-guidelines-en'
import { addFaqsBatch1 } from './mifid-esma-guidelines-en-faqs-batch1'
import { addFaqsBatch2 } from './mifid-esma-guidelines-en-faqs-batch2'
import { addFaqsBatch3 } from './mifid-esma-guidelines-en-faqs-batch3'
import { addFaqsBatch4 } from './mifid-esma-guidelines-en-faqs-batch4'
import { addFaqsBatch5 } from './mifid-esma-guidelines-en-faqs-batch5'

async function importMifidEsmaGuidelinesEn() {
  console.log('🚀 Starting MiFID ESMA Guidelines EN import...')
  console.log('=' .repeat(60))
  
  try {
    // Step 1: Create the main page
    console.log('\n📄 Step 1: Creating main page...')
    await createMifidEsmaGuidelinesEn()
    console.log('✅ Main page created successfully')
    
    // Wait a bit between operations
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Step 2: Add FAQ batches
    console.log('\n📝 Step 2: Adding FAQ batches...')
    
    console.log('\n  Adding batch 1 (FAQs 1-4)...')
    await addFaqsBatch1()
    await new Promise(resolve => setTimeout(resolve, 500))
    
    console.log('\n  Adding batch 2 (FAQs 5-8)...')
    await addFaqsBatch2()
    await new Promise(resolve => setTimeout(resolve, 500))
    
    console.log('\n  Adding batch 3 (FAQs 9-12)...')
    await addFaqsBatch3()
    await new Promise(resolve => setTimeout(resolve, 500))
    
    console.log('\n  Adding batch 4 (FAQs 13-16)...')
    await addFaqsBatch4()
    await new Promise(resolve => setTimeout(resolve, 500))
    
    console.log('\n  Adding batch 5 (FAQs 17-20)...')
    await addFaqsBatch5()
    
    console.log('\n' + '=' .repeat(60))
    console.log('🎉 MiFID ESMA Guidelines EN import completed successfully!')
    console.log('=' .repeat(60))
    console.log('\n📊 Summary:')
    console.log('  - Document ID: mifid-esma-guidelines-en')
    console.log('  - Total FAQs: 20')
    console.log('  - Total Services: 6')
    console.log('  - Parent: mifid')
    console.log('  - Language: en')
    
  } catch (error) {
    console.error('\n❌ Import failed:', error)
    throw error
  }
}

// Run the import
importMifidEsmaGuidelinesEn()
  .then(() => {
    console.log('\n✅ All done!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('\n💥 Fatal error:', error)
    process.exit(1)
  })
