import 'dotenv/config'
import { createClient } from '@sanity/client'
import { createMifidImplementationEn } from './create-mifid-implementation-en'
import { addFaqsBatch1 } from './mifid-implementation-en-faqs-batch1'
import { addFaqsBatch2 } from './mifid-implementation-en-faqs-batch2'
import { addFaqsBatch3 } from './mifid-implementation-en-faqs-batch3'
import { addFaqsBatch4 } from './mifid-implementation-en-faqs-batch4'
import { addFaqsBatch5 } from './mifid-implementation-en-faqs-batch5'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function importMifidImplementationEn() {
  console.log('Starting MiFID Implementation EN import...')
  console.log('=' .repeat(50))
  
  try {
    // Step 1: Create the main page
    console.log('\n📄 Step 1: Creating main page...')
    await createMifidImplementationEn()
    console.log('✅ Main page created')
    
    // Step 2: Add FAQ batches
    console.log('\n📝 Step 2: Adding FAQs...')
    
    console.log('  Adding batch 1 (FAQs 1-4)...')
    await addFaqsBatch1()
    
    console.log('  Adding batch 2 (FAQs 5-8)...')
    await addFaqsBatch2()
    
    console.log('  Adding batch 3 (FAQs 9-12)...')
    await addFaqsBatch3()
    
    console.log('  Adding batch 4 (FAQs 13-16)...')
    await addFaqsBatch4()
    
    console.log('  Adding batch 5 (FAQs 17-20)...')
    await addFaqsBatch5()
    
    console.log('✅ All FAQs added')
    
    // Step 3: Verify the import
    console.log('\n🔍 Step 3: Verifying import...')
    const result = await client.fetch(`
      *[_id == "mifid-implementation-en"][0] {
        _id,
        title,
        language,
        "faqCount": count(faq),
        "servicesCount": count(services)
      }
    `)
    
    console.log('\n' + '=' .repeat(50))
    console.log('✅ IMPORT COMPLETE')
    console.log('=' .repeat(50))
    console.log(JSON.stringify(result, null, 2))
    
    return result
  } catch (error) {
    console.error('❌ Import failed:', error)
    throw error
  }
}

// Run the import
importMifidImplementationEn()
