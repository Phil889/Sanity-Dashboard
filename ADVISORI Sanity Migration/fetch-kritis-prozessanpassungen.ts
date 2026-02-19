import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function fetchKritisProzessanpassungen() {
  // Search for KRITIS Prozessanpassungen page
  const searchResults = await client.fetch(`*[_type == 'servicePage' && title match '*Prozessanpassungen*']{
    _id,
    title,
    'slug': slug.current
  }`)
  
  console.log('Search results for KRITIS Prozessanpassungen:')
  console.log(JSON.stringify(searchResults, null, 2))
  
  // Also search by slug pattern
  const slugSearch = await client.fetch(`*[_type == 'servicePage' && slug.current match '*prozessanpassungen*']{
    _id,
    title,
    'slug': slug.current
  }`)
  
  console.log('\nSlug search results:')
  console.log(JSON.stringify(slugSearch, null, 2))
  
  // Search for "Bedrohungen" as well
  const bedrohungenSearch = await client.fetch(`*[_type == 'servicePage' && title match '*Bedrohungen*']{
    _id,
    title,
    'slug': slug.current
  }`)
  
  console.log('\nBedrohungen search results:')
  console.log(JSON.stringify(bedrohungenSearch, null, 2))
}

fetchKritisProzessanpassungen()
