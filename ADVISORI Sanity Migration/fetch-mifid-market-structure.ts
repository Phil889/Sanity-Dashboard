import 'dotenv/config'
import { createClient } from '@sanity/client'
import * as fs from 'fs'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function fetchMifidMarketStructure() {
  console.log('Fetching MiFID Market Structure source document...')
  
  // Search for the document by ID
  const query = `*[_id == "mifid-market-structure"][0]{
    _id,
    title,
    slug,
    language,
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
  
  const result = await client.fetch(query)
  
  if (result) {
    console.log('Found document:', result._id)
    console.log('Title:', result.title)
    console.log('Slug:', result.slug?.current)
    console.log('FAQ count:', result.faq?.length || 0)
    console.log('Services count:', result.services?.length || 0)
    
    // Save to file
    fs.writeFileSync('./ADVISORI Sanity Migration/mifid-market-structure-source.json', JSON.stringify(result, null, 2))
    console.log('\nSaved to mifid-market-structure-source.json')
  } else {
    console.log('Document not found')
  }
}

fetchMifidMarketStructure()
