import 'dotenv/config'
import { createClient } from '@sanity/client'
import * as fs from 'fs'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function fetchKritisOngoingComplianceFull() {
  const fullData = await client.fetch(`*[_type == 'servicePage' && _id == 'kritis-ongoing-compliance'][0]{
    _id,
    _type,
    title,
    slug,
    language,
    __i18n_lang,
    parent,
    references,
    seo,
    heroSection,
    overview,
    approach,
    testimonial,
    faq,
    services
  }`)
  
  console.log('Full KRITIS Ongoing Compliance data:')
  console.log(JSON.stringify(fullData, null, 2))
  
  // Save to file
  fs.writeFileSync('../kritis-ongoing-compliance-source.json', JSON.stringify(fullData, null, 2))
  console.log('\nSaved to kritis-ongoing-compliance-source.json')
  
  // Count FAQs and services
  console.log('\n--- Summary ---')
  console.log('FAQ count:', fullData.faq?.length || 0)
  console.log('Services count:', fullData.services?.length || 0)
}

fetchKritisOngoingComplianceFull()
