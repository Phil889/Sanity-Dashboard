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

async function fetchMifidProductGovernance() {
  console.log('Fetching MiFID Product Governance source document...')
  
  // Search for the document by title pattern
  const docs = await client.fetch(`*[_type == "servicePage" && language == "de" && title match "Product Governance*"][0...5]{
    _id,
    title,
    "slug": slug.current,
    "faqCount": count(faq),
    "servicesCount": count(services)
  }`)
  
  console.log('Found documents:', JSON.stringify(docs, null, 2))
  
  if (docs && docs.length > 0) {
    // Fetch the full document
    const fullDoc = await client.fetch(`*[_id == "${docs[0]._id}"][0]`)
    fs.writeFileSync('mifid-product-governance-source.json', JSON.stringify(fullDoc, null, 2))
    console.log(`\nSaved full document to mifid-product-governance-source.json`)
    console.log(`Document ID: ${fullDoc._id}`)
    console.log(`Title: ${fullDoc.title}`)
    console.log(`FAQs: ${fullDoc.faq?.length || 0}`)
    console.log(`Services: ${fullDoc.services?.length || 0}`)
  }
}

fetchMifidProductGovernance()
