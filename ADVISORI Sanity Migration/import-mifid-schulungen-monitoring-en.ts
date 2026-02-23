import 'dotenv/config'
// Import script for MiFID Ongoing Training & Monitoring - English Translation
// Combines main page with all FAQ batches and imports to Sanity

import { createClient } from '@sanity/client'
import { mifidSchulungenMonitoringEn } from './create-mifid-schulungen-monitoring-en'
import { mifidSchulungenMonitoringEnFaqsBatch1 } from './mifid-schulungen-monitoring-en-faqs-batch1'
import { mifidSchulungenMonitoringEnFaqsBatch2 } from './mifid-schulungen-monitoring-en-faqs-batch2'
import { mifidSchulungenMonitoringEnFaqsBatch3 } from './mifid-schulungen-monitoring-en-faqs-batch3'
import { mifidSchulungenMonitoringEnFaqsBatch4 } from './mifid-schulungen-monitoring-en-faqs-batch4'
import { mifidSchulungenMonitoringEnFaqsBatch5 } from './mifid-schulungen-monitoring-en-faqs-batch5'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function importMifidSchulungenMonitoringEn() {
  console.log('Starting import of MiFID Ongoing Training & Monitoring English page...\n')
  
  // Combine all FAQs
  const allFaqs = [
    ...mifidSchulungenMonitoringEnFaqsBatch1,
    ...mifidSchulungenMonitoringEnFaqsBatch2,
    ...mifidSchulungenMonitoringEnFaqsBatch3,
    ...mifidSchulungenMonitoringEnFaqsBatch4,
    ...mifidSchulungenMonitoringEnFaqsBatch5
  ]
  
  console.log(`Total FAQs to import: ${allFaqs.length}`)
  
  // Create complete document with FAQs
  const completeDocument = {
    ...mifidSchulungenMonitoringEn,
    faq: allFaqs
  }
  
  // Verify document structure
  console.log('\n=== Document Verification ===')
  console.log(`ID: ${completeDocument._id}`)
  console.log(`Type: ${completeDocument._type}`)
  console.log(`Title: ${completeDocument.title}`)
  console.log(`Language: ${completeDocument.language}`)
  console.log(`__i18n_lang: ${completeDocument.__i18n_lang}`)
  console.log(`Slug: ${completeDocument.slug.current}`)
  console.log(`Parent Ref: ${completeDocument.parent._ref}`)
  console.log(`Top Level Parent Ref: ${completeDocument.references.topLevelParent._ref}`)
  console.log(`Base Ref (German): ${completeDocument.__i18n_base._ref}`)
  console.log(`Hero Benefits: ${completeDocument.heroSection.benefits.length}`)
  console.log(`Overview Points: ${completeDocument.overview.points.length}`)
  console.log(`Service Points: ${completeDocument.overview.servicePoints.length}`)
  console.log(`Why Us Points: ${completeDocument.overview.whyUs.points.length}`)
  console.log(`Approach Points: ${completeDocument.approach.points.length}`)
  console.log(`Services: ${completeDocument.services.length}`)
  console.log(`FAQs: ${completeDocument.faq.length}`)
  console.log(`Testimonial Name: ${completeDocument.testimonial.name}`)
  console.log(`Testimonial Company: ${completeDocument.testimonial.company}`)
  
  // Check for required fields
  const requiredChecks = [
    { field: 'language', value: completeDocument.language, expected: 'en' },
    { field: '__i18n_lang', value: completeDocument.__i18n_lang, expected: 'en' },
    { field: 'FAQ count', value: completeDocument.faq.length, expected: 20 },
    { field: 'testimonial.name', value: !!completeDocument.testimonial.name, expected: true },
    { field: 'testimonial.position', value: !!completeDocument.testimonial.position, expected: true },
    { field: 'testimonial.company', value: !!completeDocument.testimonial.company, expected: true },
    { field: 'testimonial.quote', value: !!completeDocument.testimonial.quote, expected: true },
  ]
  
  console.log('\n=== Validation Checks ===')
  let allPassed = true
  for (const check of requiredChecks) {
    const passed = check.value === check.expected
    console.log(`${passed ? '✅' : '❌'} ${check.field}: ${check.value} (expected: ${check.expected})`)
    if (!passed) allPassed = false
  }
  
  if (!allPassed) {
    console.log('\n❌ Validation failed! Please fix issues before importing.')
    return
  }
  
  console.log('\n✅ All validation checks passed!')
  
  try {
    // Check if document already exists
    const existing = await client.fetch(`*[_id == $id][0]`, { id: completeDocument._id })
    
    if (existing) {
      console.log('\n⚠️ Document already exists. Updating...')
      const result = await client.createOrReplace(completeDocument)
      console.log(`\n✅ Document updated successfully!`)
      console.log(`Document ID: ${result._id}`)
    } else {
      console.log('\nCreating new document...')
      const result = await client.create(completeDocument)
      console.log(`\n✅ Document created successfully!`)
      console.log(`Document ID: ${result._id}`)
    }
    
    // Verify the import
    console.log('\n=== Verifying Import ===')
    const imported = await client.fetch(`*[_id == $id][0]{
      _id,
      title,
      language,
      __i18n_lang,
      "slug": slug.current,
      "faqCount": count(faq),
      "benefitsCount": count(heroSection.benefits),
      "servicesCount": count(services)
    }`, { id: completeDocument._id })
    
    if (imported) {
      console.log(`✅ Verified: ${imported.title}`)
      console.log(`   Language: ${imported.language}`)
      console.log(`   Slug: ${imported.slug}`)
      console.log(`   FAQs: ${imported.faqCount}`)
      console.log(`   Benefits: ${imported.benefitsCount}`)
      console.log(`   Services: ${imported.servicesCount}`)
    }
    
  } catch (error) {
    console.error('\n❌ Error during import:', error)
    throw error
  }
}

importMifidSchulungenMonitoringEn().catch(console.error)
