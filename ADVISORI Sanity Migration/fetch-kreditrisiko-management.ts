import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function fetchKreditrisikoManagement() {
  // First, search for the page by title
  const searchQuery = `*[_type == "servicePage" && (title match "Kreditrisiko*" || title match "Ratingverfahren*")]{
    _id,
    title,
    "slug": slug.current,
    language
  }`
  
  console.log('Searching for Kreditrisiko Management page...')
  const searchResults = await client.fetch(searchQuery)
  console.log('Search results:', JSON.stringify(searchResults, null, 2))
  
  if (searchResults.length > 0) {
    // Fetch the full document
    const fullQuery = `*[_id == "${searchResults[0]._id}"][0]`
    const fullDoc = await client.fetch(fullQuery)
    console.log('\n\nFull document:')
    console.log(JSON.stringify(fullDoc, null, 2))
  }
}

fetchKreditrisikoManagement().catch(console.error)
