import 'dotenv/config'
import { createClient } from '@sanity/client'
import * as fs from 'fs'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function fetchMifidParent() {
  // First, search for all pages with "mifid" in slug or title
  const searchQuery = `*[title == "MiFID" || slug.current == "mifid"]{
    _id,
    _type,
    title,
    language,
    slug
  }`
  
  const searchResults = await client.fetch(searchQuery)
  console.log('Search results for MiFID:')
  console.log(JSON.stringify(searchResults, null, 2))
  
  // Fetch the MiFID parent page
  const query = `*[title == "MiFID" && language == "de"][0]{
    _id,
    _type,
    title,
    language,
    slug,
    seo,
    hero,
    heroSection,
    overview,
    approach,
    services,
    faq,
    testimonial,
    references,
    parent
  }`

  const result = await client.fetch(query)
  
  console.log('MiFID Parent Page:')
  console.log(JSON.stringify(result, null, 2))
  
  // Save to file
  fs.writeFileSync('mifid-parent-source.json', JSON.stringify(result, null, 2))
  console.log('\nSaved to mifid-parent-source.json')
  
  // Count FAQs if present
  if (result?.faq) {
    console.log(`\nFAQ count: ${result.faq.length}`)
  }
}

fetchMifidParent()
