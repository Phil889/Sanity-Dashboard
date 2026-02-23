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

async function fetchMicrosoftPki() {
  // Search for the page by title containing "Microsoft PKI"
  const query = `*[_type == "servicePage" && title match "*Microsoft PKI*" && language == "de"][0]{
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
    faq,
    testimonial
  }`

  const result = await client.fetch(query)
  
  if (!result) {
    console.log('Microsoft PKI page not found. Searching for alternatives...')
    
    // Search for any page with PKI in title
    const searchQuery = `*[_type == "servicePage" && (title match "*PKI*" || title match "*pki*") && language == "de"]{
      _id,
      title,
      slug,
      language
    }`
    
    const searchResults = await client.fetch(searchQuery)
    console.log('PKI-related pages found:')
    console.log(JSON.stringify(searchResults, null, 2))
    return
  }
  
  console.log('Microsoft PKI Page:')
  console.log(JSON.stringify(result, null, 2))
  
  // Save to file
  fs.writeFileSync('microsoft-pki-source.json', JSON.stringify(result, null, 2))
  console.log('\nSaved to microsoft-pki-source.json')
  
  // Count FAQs if present
  if (result?.faq) {
    console.log(`\nFAQ count: ${result.faq.length}`)
  }
}

fetchMicrosoftPki()
