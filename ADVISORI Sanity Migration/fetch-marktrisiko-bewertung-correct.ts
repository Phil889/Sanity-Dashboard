import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import * as fs from 'fs'

dotenv.config()

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function fetchMarktrisikoBewertung() {
  console.log('Fetching Marktrisiko Bewertung & Limitsysteme page...\n')
  
  // Fetch the exact page by ID
  const query = `*[_id == "marktrisiko-bewertung-limitsysteme"][0]{
    _id,
    _type,
    title,
    language,
    slug,
    seo,
    heroSection,
    overview,
    approach,
    services,
    faq,
    testimonial,
    parent,
    references
  }`
  
  const page = await client.fetch(query)
  
  if (page) {
    console.log('Found page:', page.title)
    console.log('ID:', page._id)
    console.log('Language:', page.language)
    console.log('Slug:', page.slug?.current)
    console.log('FAQ count:', page.faq?.length || 0)
    
    // Save to file for reference
    fs.writeFileSync(
      'marktrisiko-bewertung-source.json',
      JSON.stringify(page, null, 2)
    )
    console.log('\nSaved to marktrisiko-bewertung-source.json')
    
    // Print FAQs
    if (page.faq && page.faq.length > 0) {
      console.log('\n=== FAQs ===')
      page.faq.forEach((faq: any, index: number) => {
        console.log(`\nFAQ ${index + 1}:`)
        console.log('Q:', faq.question)
        console.log('A:', faq.answer?.substring(0, 200) + '...')
      })
    }
  } else {
    console.log('Page not found!')
  }
}

fetchMarktrisikoBewertung()
  .then(() => {
    console.log('\nDone!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Error:', error)
    process.exit(1)
  })
