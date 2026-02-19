import 'dotenv/config'
import { createClient } from '@sanity/client'
import { createMifidInvestorProtectionEn } from './create-mifid-investor-protection-en'
import { addFaqsBatch1 } from './mifid-investor-protection-en-faqs-batch1'
import { addFaqsBatch2 } from './mifid-investor-protection-en-faqs-batch2'
import { addFaqsBatch3 } from './mifid-investor-protection-en-faqs-batch3'
import { addFaqsBatch4 } from './mifid-investor-protection-en-faqs-batch4'
import { addFaqsBatch5 } from './mifid-investor-protection-en-faqs-batch5'
import { addFaqsBatch6 } from './mifid-investor-protection-en-faqs-batch6'
import { addFaqsBatch7 } from './mifid-investor-protection-en-faqs-batch7'
import { addFaqsBatch8 } from './mifid-investor-protection-en-faqs-batch8'
import { addFaqsBatch9 } from './mifid-investor-protection-en-faqs-batch9'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function importMifidInvestorProtectionEn() {
  console.log('Starting MiFID Investor Protection EN import...')
  console.log('='.repeat(50))
  
  try {
    // Step 1: Create the main page
    console.log('\n📄 Step 1: Creating main page...')
    await createMifidInvestorProtectionEn()
    console.log('✅ Main page created')
    
    // Step 2: Add FAQ batches
    console.log('\n📝 Step 2: Adding FAQ batches...')
    
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
    
    console.log('  Adding batch 6 (FAQs 21-24)...')
    await addFaqsBatch6()
    
    console.log('  Adding batch 7 (FAQs 25-28)...')
    await addFaqsBatch7()
    
    console.log('  Adding batch 8 (FAQs 29-32)...')
    await addFaqsBatch8()
    
    console.log('  Adding batch 9 (FAQs 33-36)...')
    await addFaqsBatch9()
    
    console.log('✅ All FAQ batches added')
    
    // Step 3: Verify the import
    console.log('\n🔍 Step 3: Verifying import...')
    const result = await client.fetch(`*[_id == "mifid-investor-protection-en"][0]{
      _id,
      title,
      language,
      "faqCount": count(faq),
      "servicesCount": count(services)
    }`)
    
    console.log('\n' + '='.repeat(50))
    console.log('📊 Import Summary:')
    console.log(JSON.stringify(result, null, 2))
    console.log('='.repeat(50))
    
    if (result.faqCount === 36 && result.servicesCount === 6) {
      console.log('\n✅ SUCCESS: MiFID Investor Protection EN imported with 36 FAQs and 6 services!')
    } else {
      console.log(`\n⚠️ WARNING: Expected 36 FAQs and 6 services, got ${result.faqCount} FAQs and ${result.servicesCount} services`)
    }
    
    return result
  } catch (error) {
    console.error('❌ Error during import:', error)
    throw error
  }
}

importMifidInvestorProtectionEn().catch(console.error)
