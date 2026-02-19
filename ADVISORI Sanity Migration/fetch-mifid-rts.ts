import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import * as fs from 'fs'

dotenv.config()

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'b0o7vqwz',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function fetchMifidRts() {
  console.log('Fetching MiFID Transparenz- und Berichtspflichten (RTS 27/28) document...')
  
  // Get the specific document
  const fullDoc = await client.fetch(`*[_id == "mifid-transparenz-berichtspflichten-rts-27-28"][0]`)
  
  if (fullDoc) {
    fs.writeFileSync('mifid-rts-source.json', JSON.stringify(fullDoc, null, 2))
    console.log('Document saved to mifid-rts-source.json')
    console.log('Title:', fullDoc.title)
    console.log('Language:', fullDoc.language)
    console.log('FAQ count:', fullDoc.faq?.length || 0)
  } else {
    console.log('Document not found')
  }
}

fetchMifidRts().catch(console.error)
