import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import * as fs from 'fs'

dotenv.config()

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'wwmm9rbb',
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
})

async function fetchMifidSystematicInternaliser() {
  // Fetch the document directly by ID
  const fullDoc = await client.fetch(`*[_id == "mifid-systematic-internaliser"][0]`)
  
  if (fullDoc) {
    fs.writeFileSync('ADVISORI Sanity Migration/mifid-systematic-internaliser-source.json', JSON.stringify(fullDoc, null, 2))
    console.log('Full document saved to mifid-systematic-internaliser-source.json')
    console.log('Title:', fullDoc.title)
    console.log('FAQ count:', fullDoc.faq?.length || 0)
    console.log('Services count:', fullDoc.services?.length || 0)
  } else {
    console.log('Document not found')
  }
}

fetchMifidSystematicInternaliser()
