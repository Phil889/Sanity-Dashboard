import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function fetchKritisOngoingCompliance() {
  // Search for KRITIS Ongoing Compliance page
  const searchResults = await client.fetch(`*[_type == 'servicePage' && _id == 'kritis-ongoing-compliance']{
    _id,
    title,
    'slug': slug.current
  }`)
  
  console.log('Search results for KRITIS Ongoing Compliance:')
  console.log(JSON.stringify(searchResults, null, 2))
  
  // Also search by title
  const titleSearch = await client.fetch(`*[_type == 'servicePage' && title match '*Ongoing Compliance*' && title match '*KRITIS*']{
    _id,
    title,
    'slug': slug.current
  }`)
  
  console.log('\nTitle search results:')
  console.log(JSON.stringify(titleSearch, null, 2))
}

fetchKritisOngoingCompliance()
