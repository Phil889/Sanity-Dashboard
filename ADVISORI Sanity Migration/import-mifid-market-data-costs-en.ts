import 'dotenv/config'
import { createClient } from '@sanity/client'
import { mifidMarketDataCostsEn } from './create-mifid-market-data-costs-en'
import { faqsBatch1 } from './mifid-market-data-costs-en-faqs-batch1'
import { faqsBatch2 } from './mifid-market-data-costs-en-faqs-batch2'
import { faqsBatch3 } from './mifid-market-data-costs-en-faqs-batch3'
import { faqsBatch4 } from './mifid-market-data-costs-en-faqs-batch4'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function importMifidMarketDataCostsEn() {
  const documentId = 'mifid-market-data-costs-en'
  
  console.log('='.repeat(60))
  console.log('Starting MiFID Market Data Costs EN Import')
  console.log('='.repeat(60))
  
  try {
    // Step 1: Check if document exists
    console.log('\n1. Checking for existing document...')
    const existing = await client.getDocument(documentId)
    
    if (existing) {
      console.log('   Document exists, deleting...')
      await client.delete(documentId)
      console.log('   Deleted existing document')
    } else {
      console.log('   No existing document found')
    }
    
    // Step 2: Create the main document with all FAQs combined
    console.log('\n2. Creating main document with all content...')
    
    // Combine all FAQs (16 total - 4 batches of 4)
    const allFaqs = [
      ...faqsBatch1,
      ...faqsBatch2,
      ...faqsBatch3,
      ...faqsBatch4
    ]
    
    console.log(`   Total FAQs to add: ${allFaqs.length}`)
    
    // Create document with FAQs included
    const documentWithFaqs = {
      ...mifidMarketDataCostsEn,
      faq: allFaqs
    }
    
    const result = await client.createOrReplace(documentWithFaqs)
    
    console.log('\n3. Document created successfully!')
    console.log('='.repeat(60))
    console.log('IMPORT SUMMARY')
    console.log('='.repeat(60))
    console.log(`Document ID: ${result._id}`)
    console.log(`Title: ${result.title}`)
    console.log(`Language: ${result.language}`)
    console.log(`FAQs: ${result.faq?.length || 0}`)
    console.log(`Services: ${result.services?.length || 0}`)
    console.log('='.repeat(60))
    
    // Verify the document
    console.log('\n4. Verifying document...')
    const verification = await client.fetch(
      `*[_id == $id][0]{
        _id,
        title,
        language,
        "faqCount": count(faq),
        "servicesCount": count(services)
      }`,
      { id: documentId }
    )
    
    console.log('Verification result:', JSON.stringify(verification, null, 2))
    
    return result
  } catch (error) {
    console.error('Error during import:', error)
    throw error
  }
}

// Execute
importMifidMarketDataCostsEn()
  .then(() => {
    console.log('\n✅ Import completed successfully!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('\n❌ Import failed:', error)
    process.exit(1)
  })
