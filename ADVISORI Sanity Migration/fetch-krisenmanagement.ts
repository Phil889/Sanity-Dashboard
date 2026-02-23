import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function fetchKrisenmanagement() {
  // First search for the page
  const results = await client.fetch(`*[_type == "servicePage" && title match "Krisenmanagement*"][0...5]{
    _id,
    title,
    language,
    "slug": slug.current
  }`)
  console.log('Search results:', JSON.stringify(results, null, 2))
  
  if (results.length > 0) {
    // Fetch full document
    const doc = await client.fetch(`*[_id == "${results[0]._id}"][0]`)
    console.log('\nFull document:')
    console.log(JSON.stringify(doc, null, 2))
  }
}

fetchKrisenmanagement()
