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

async function fetchMifidResearchUnbundling() {
  console.log('Searching for MiFID Research Unbundling document...')
  
  // Search for the document
  const docs = await client.fetch(`*[_type == "servicePage" && title match "Research Unbundling*"]{
    _id,
    title,
    slug
  }`)
  
  console.log('Found documents:', JSON.stringify(docs, null, 2))
  
  if (docs.length > 0) {
    // Fetch the full document
    const fullDoc = await client.fetch(`*[_id == "${docs[0]._id}"][0]`)
    
    // Save to file
    fs.writeFileSync(
      'ADVISORI Sanity Migration/mifid-research-unbundling-source.json',
      JSON.stringify(fullDoc, null, 2)
    )
    
    console.log(`\nFull document saved to mifid-research-unbundling-source.json`)
    console.log(`Document ID: ${fullDoc._id}`)
    console.log(`Title: ${fullDoc.title}`)
    console.log(`FAQ count: ${fullDoc.faq?.length || 0}`)
    console.log(`Services count: ${fullDoc.services?.length || 0}`)
  }
}

fetchMifidResearchUnbundling()
