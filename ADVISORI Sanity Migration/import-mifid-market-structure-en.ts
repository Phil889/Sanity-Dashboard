import 'dotenv/config'
import { createClient } from '@sanity/client'
import { mifidMarketStructureEn } from './create-mifid-market-structure-en'
import { faqsBatch1 } from './mifid-market-structure-en-faqs-batch1'
import { faqsBatch2 } from './mifid-market-structure-en-faqs-batch2'
import { faqsBatch3 } from './mifid-market-structure-en-faqs-batch3'
import { faqsBatch4 } from './mifid-market-structure-en-faqs-batch4'
import { faqsBatch5 } from './mifid-market-structure-en-faqs-batch5'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function importMifidMarketStructureEn() {
  const documentId = 'mifid-market-structure-en'
  
  console.log('='.repeat(60))
  console.log('Starting MiFID Market Structure EN Import')
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
    
    // Combine all FAQs
    const allFaqs = [
      ...faqsBatch1,
      ...faqsBatch2,
      ...faqsBatch3,
      ...faqsBatch4,
      ...faqsBatch5
    ]
    
    console.log(`   Total FAQs to add: ${allFaqs.length}`)
    
    // Create document with FAQs included
    const documentWithFaqs = {
      ...mifidMarketStructureEn,
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
importMifidMarketStructureEn()
  .then(() => {
    console.log('\n✅ Import completed successfully!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('\n❌ Import failed:', error)
    process.exit(1)
  })
