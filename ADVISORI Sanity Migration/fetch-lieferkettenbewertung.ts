import { createClient } from '@sanity/client'
import * as fs from 'fs'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-02-14',
})

async function fetchLieferkettenbewertung() {
  // Fetch the specific Lieferkettenbewertung page
  const query = `*[_id == "lieferkettenbewertung"][0] {
    _id,
    _type,
    title,
    slug,
    language,
    parent,
    references,
    seo,
    heroSection,
    overview,
    approach,
    services,
    testimonial,
    faq
  }`

  console.log('Fetching Lieferkettenbewertung page...')
  const fullData = await client.fetch(query)
  
  console.log('\n=== Full Page Data ===')
  console.log(JSON.stringify(fullData, null, 2))
  
  // Count FAQs and services
  if (fullData.faq) {
    console.log(`\nFAQ count: ${fullData.faq.length}`)
  }
  if (fullData.services) {
    console.log(`Services count: ${fullData.services.length}`)
  }
  
  // Save to file
  fs.writeFileSync('lieferkettenbewertung-source.json', JSON.stringify(fullData, null, 2))
  console.log('\nSaved to lieferkettenbewertung-source.json')
}

fetchLieferkettenbewertung().catch(console.error)
