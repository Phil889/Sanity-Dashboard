import 'dotenv/config'
import { createMifidIIReadinessEn } from './create-mifid-ii-readiness-en'
import { addFaqsBatch1 } from './mifid-ii-readiness-en-faqs-batch1'
import { addFaqsBatch2 } from './mifid-ii-readiness-en-faqs-batch2'
import { addFaqsBatch3 } from './mifid-ii-readiness-en-faqs-batch3'
import { addFaqsBatch4 } from './mifid-ii-readiness-en-faqs-batch4'
import { addFaqsBatch5 } from './mifid-ii-readiness-en-faqs-batch5'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function importMifidIIReadinessEn() {
  console.log('Starting MiFID II Readiness EN import...')
  console.log('=' .repeat(50))
  
  try {
    // Step 1: Create the main page
    console.log('\n📄 Step 1: Creating main page...')
    await createMifidIIReadinessEn()
    console.log('✅ Main page created')
    
    // Step 2: Add FAQ batches
    console.log('\n📝 Step 2: Adding FAQ batches...')
    
    console.log('  Adding batch 1 (FAQs 1-4)...')
    await addFaqsBatch1()
    console.log('  ✅ Batch 1 added')
    
    console.log('  Adding batch 2 (FAQs 5-8)...')
    await addFaqsBatch2()
    console.log('  ✅ Batch 2 added')
    
    console.log('  Adding batch 3 (FAQs 9-12)...')
    await addFaqsBatch3()
    console.log('  ✅ Batch 3 added')
    
    console.log('  Adding batch 4 (FAQs 13-16)...')
    await addFaqsBatch4()
    console.log('  ✅ Batch 4 added')
    
    console.log('  Adding batch 5 (FAQs 17-20)...')
    await addFaqsBatch5()
    console.log('  ✅ Batch 5 added')
    
    // Step 3: Verify the import
    console.log('\n🔍 Step 3: Verifying import...')
    const result = await client.fetch(`*[_id == 'mifid-ii-readiness-en'][0]{
      _id,
      title,
      language,
      'slug': slug.current,
      'faqCount': count(faq),
      'servicesCount': count(services)
    }`)
    
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

importMifidIIReadinessEn()
