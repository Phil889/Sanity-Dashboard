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

async function fetchMifidTransactionReporting() {
  console.log('Searching for MiFID Transaction Reporting document...')
  
  // Search for the document by title
  const docs = await client.fetch(`*[_type == "servicePage" && title match "Transaction Reporting*"][0...5]{
    _id,
    title,
    language,
    "slug": slug.current
  }`)
  
  console.log('Found documents:', JSON.stringify(docs, null, 2))
  
  if (docs && docs.length > 0) {
    // Get the full document
    const fullDoc = await client.fetch(`*[_id == "${docs[0]._id}"][0]`)
    fs.writeFileSync('mifid-transaction-reporting-source.json', JSON.stringify(fullDoc, null, 2))
    console.log('\nFull document saved to mifid-transaction-reporting-source.json')
    console.log('Title:', fullDoc.title)
    console.log('Language:', fullDoc.language)
    console.log('FAQ count:', fullDoc.faq?.length || 0)
  }
}

fetchMifidTransactionReporting().catch(console.error)
