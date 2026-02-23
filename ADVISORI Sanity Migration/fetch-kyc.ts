import 'dotenv/config'
import { createClient } from '@sanity/client'
import * as fs from 'fs'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
})

async function fetchKYC() {
  console.log('Searching for KYC page...')
  
  // Search for KYC page
  const results = await client.fetch(`*[_type == "servicePage" && (title match "KYC*" || title match "*Know Your Customer*" || slug.current match "*kyc*")]{
    _id,
    title,
    "slug": slug.current,
    language
  }`)
  
  console.log('Search results:')
  console.log(JSON.stringify(results, null, 2))
  
  if (results.length > 0) {
    // Fetch the full page
    const pageId = results[0]._id
    console.log(`\nFetching full page: ${pageId}`)
    
    const fullPage = await client.fetch(`*[_id == "${pageId}"][0]{
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
    }`)
    
    // Save to file - use absolute path
    const path = require('path')
    const filename = path.join(__dirname, '..', 'kyc-source.json')
    fs.writeFileSync(filename, JSON.stringify(fullPage, null, 2))
    console.log(`\nSaved to ${filename}`)
    console.log(`FAQ count: ${fullPage.faq?.length || 0}`)
    console.log(`Services count: ${fullPage.services?.length || 0}`)
  }
}

fetchKYC().catch(console.error)
