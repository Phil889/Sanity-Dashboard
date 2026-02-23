import 'dotenv/config'
import { createClient } from '@sanity/client'
import { execSync } from 'child_process'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function importMifidRegularControlsAuditsEn() {
  console.log('='.repeat(60))
  console.log('MiFID Regular Controls & Audits EN - Full Import')
  console.log('='.repeat(60))
  
  const cwd = process.cwd()
  
  try {
    // Step 1: Create main page
    console.log('\n📄 Step 1: Creating main page...')
    execSync('npx tsx "ADVISORI Sanity Migration/create-mifid-regular-controls-audits-en.ts"', { 
      cwd, 
      stdio: 'inherit' 
    })
    
    // Wait a moment for Sanity to process
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Step 2: Add FAQ Batch 1
    console.log('\n📝 Step 2: Adding FAQ Batch 1 (FAQs 1-4)...')
    execSync('npx tsx "ADVISORI Sanity Migration/mifid-regular-controls-audits-en-faqs-batch1.ts"', { 
      cwd, 
      stdio: 'inherit' 
    })
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Step 3: Add FAQ Batch 2
    console.log('\n📝 Step 3: Adding FAQ Batch 2 (FAQs 5-8)...')
    execSync('npx tsx "ADVISORI Sanity Migration/mifid-regular-controls-audits-en-faqs-batch2.ts"', { 
      cwd, 
      stdio: 'inherit' 
    })
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Step 4: Add FAQ Batch 3
    console.log('\n📝 Step 4: Adding FAQ Batch 3 (FAQs 9-12)...')
    execSync('npx tsx "ADVISORI Sanity Migration/mifid-regular-controls-audits-en-faqs-batch3.ts"', { 
      cwd, 
      stdio: 'inherit' 
    })
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Step 5: Add FAQ Batch 4
    console.log('\n📝 Step 5: Adding FAQ Batch 4 (FAQs 13-16)...')
    execSync('npx tsx "ADVISORI Sanity Migration/mifid-regular-controls-audits-en-faqs-batch4.ts"', { 
      cwd, 
      stdio: 'inherit' 
    })
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Step 6: Add FAQ Batch 5
    console.log('\n📝 Step 6: Adding FAQ Batch 5 (FAQs 17-20)...')
    execSync('npx tsx "ADVISORI Sanity Migration/mifid-regular-controls-audits-en-faqs-batch5.ts"', { 
      cwd, 
      stdio: 'inherit' 
    })
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Step 7: Verify the document
    console.log('\n✅ Step 7: Verifying document...')
    const doc = await client.fetch(`*[_id == "mifid-regular-controls-audits-en"][0]{
      _id,
      title,
      "slug": slug.current,
      language,
      __i18n_lang,
      "faqCount": count(faq),
      "servicesCount": count(services),
      "hasHero": defined(heroSection),
      "hasOverview": defined(overview),
      "hasApproach": defined(approach),
      "hasTestimonial": defined(testimonial)
    }`)
    
    console.log('\n' + '='.repeat(60))
    console.log('📊 IMPORT COMPLETE - Document Summary:')
    console.log('='.repeat(60))
    console.log(JSON.stringify(doc, null, 2))
    
    if (doc.faqCount === 20 && doc.servicesCount === 2) {
      console.log('\n✅ SUCCESS: Document has all 20 FAQs and 2 services!')
    } else {
      console.log(`\n⚠️ WARNING: Expected 20 FAQs and 2 services, got ${doc.faqCount} FAQs and ${doc.servicesCount} services`)
    }
    
  } catch (error) {
    console.error('❌ Import failed:', error)
    throw error
  }
}

importMifidRegularControlsAuditsEn()
