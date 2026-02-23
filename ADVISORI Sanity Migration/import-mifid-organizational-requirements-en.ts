import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Import the main page creation function
import { createMifidOrganizationalRequirementsEn } from './create-mifid-organizational-requirements-en'

// Import FAQ batch functions
import { addFaqsBatch1 } from './mifid-organizational-requirements-en-faqs-batch1'
import { addFaqsBatch2 } from './mifid-organizational-requirements-en-faqs-batch2'
import { addFaqsBatch3 } from './mifid-organizational-requirements-en-faqs-batch3'
import { addFaqsBatch4 } from './mifid-organizational-requirements-en-faqs-batch4'
import { addFaqsBatch5 } from './mifid-organizational-requirements-en-faqs-batch5'

async function importMifidOrganizationalRequirementsEn() {
  console.log('Starting MiFID Organizational Requirements EN import...')
  
  try {
    // Step 1: Create the main page
    console.log('\n=== Step 1: Creating main page ===')
    await createMifidOrganizationalRequirementsEn()
    console.log('Main page created successfully')
    
    // Wait a moment for the document to be available
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Step 2: Add FAQ batches
    console.log('\n=== Step 2: Adding FAQ batches ===')
    
    console.log('Adding FAQ batch 1 (FAQs 1-4)...')
    await addFaqsBatch1()
    console.log('FAQ batch 1 added successfully')
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Adding FAQ batch 2 (FAQs 5-8)...')
    await addFaqsBatch2()
    console.log('FAQ batch 2 added successfully')
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Adding FAQ batch 3 (FAQs 9-12)...')
    await addFaqsBatch3()
    console.log('FAQ batch 3 added successfully')
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Adding FAQ batch 4 (FAQs 13-16)...')
    await addFaqsBatch4()
    console.log('FAQ batch 4 added successfully')
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Adding FAQ batch 5 (FAQs 17-20)...')
    await addFaqsBatch5()
    console.log('FAQ batch 5 added successfully')
    
    // Step 3: Verify the import
    console.log('\n=== Step 3: Verifying import ===')
    const result = await client.fetch(`*[_id == "mifid-organizational-requirements-en"][0]{
      _id,
      title,
      language,
      "faqCount": count(faq),
      "servicesCount": count(services),
      "slug": slug.current
    }`)
    
    console.log('\nImport verification:')
    console.log(JSON.stringify(result, null, 2))
    
    console.log('\n=== MiFID Organizational Requirements EN import completed successfully! ===')
    
  } catch (error) {
    console.error('Error during import:', error)
    throw error
  }
}

importMifidOrganizationalRequirementsEn()
