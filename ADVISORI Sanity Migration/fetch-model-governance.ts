import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import * as fs from 'fs'

dotenv.config()

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function fetchModelGovernance() {
  console.log('Fetching model-governance document...')
  
  const doc = await client.fetch(`*[_id == "model-governance"][0]`)
  
  if (doc) {
    fs.writeFileSync('model-governance-source.json', JSON.stringify(doc, null, 2))
    console.log('Document saved to model-governance-source.json')
    console.log('Title:', doc.title)
    console.log('Language:', doc.language)
    console.log('FAQ count:', doc.faq?.length || 0)
  } else {
    console.log('Document not found')
  }
}

fetchModelGovernance().catch(console.error)
