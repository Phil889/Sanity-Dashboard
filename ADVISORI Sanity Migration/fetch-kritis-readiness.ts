import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function fetchKritisReadiness() {
  // First search for KRITIS Readiness page
  const searchResults = await client.fetch(`*[_type == 'servicePage' && title match '*KRITIS*' && title match '*Readiness*']{
    _id,
    title,
    'slug': slug.current
  }`)
  
  console.log('Search results for KRITIS Readiness:')
  console.log(JSON.stringify(searchResults, null, 2))
  
  // Also search by slug pattern
  const slugSearch = await client.fetch(`*[_type == 'servicePage' && slug.current match '*kritis*readiness*']{
    _id,
    title,
    'slug': slug.current
  }`)
  
  console.log('\nSlug search results:')
  console.log(JSON.stringify(slugSearch, null, 2))
}

fetchKritisReadiness()
