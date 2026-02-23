import { createMifidDeutscheImplementationEn } from './create-mifid-deutsche-implementation-en'
import { addFaqsBatch1 } from './mifid-deutsche-implementation-en-faqs-batch1'
import { addFaqsBatch2 } from './mifid-deutsche-implementation-en-faqs-batch2'
import { addFaqsBatch3 } from './mifid-deutsche-implementation-en-faqs-batch3'
import { addFaqsBatch4 } from './mifid-deutsche-implementation-en-faqs-batch4'

async function importMifidDeutscheImplementationEn() {
  console.log('🚀 Starting MiFID German Implementation EN import...\n')
  
  try {
    // Step 1: Create the main page
    console.log('📄 Step 1: Creating main page...')
    await createMifidDeutscheImplementationEn()
    console.log('')
    
    // Step 2: Add FAQs in batches
    console.log('📝 Step 2: Adding FAQs in batches...')
    
    console.log('  Adding batch 1 (FAQs 1-4)...')
    await addFaqsBatch1()
    
    console.log('  Adding batch 2 (FAQs 5-8)...')
    await addFaqsBatch2()
    
    console.log('  Adding batch 3 (FAQs 9-12)...')
    await addFaqsBatch3()
    
    console.log('  Adding batch 4 (FAQs 13-16)...')
    await addFaqsBatch4()
    
    console.log('')
    console.log('🎉 MiFID German Implementation EN import completed successfully!')
    console.log('📊 Summary:')
    console.log('  - Document ID: mifid-deutsche-implementation-en')
    console.log('  - Total FAQs: 16')
    console.log('  - Services: 6')
    console.log('  - Parent: mifid')
    
  } catch (error) {
    console.error('❌ Import failed:', error)
    throw error
  }
}

importMifidDeutscheImplementationEn()
  .then(() => {
    process.exit(0)
  })
  .catch((error) => {
    console.error('Fatal error:', error)
    process.exit(1)
  })
