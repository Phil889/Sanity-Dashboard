import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function fetchKritisNotfallkonzepte() {
  // Search for KRITIS Notfallkonzepte page
  const searchResults = await client.fetch(`*[_type == 'servicePage' && title match '*Notfallkonzepte*']{
    _id,
    title,
    'slug': slug.current
  }`)
  
  console.log('Search results for KRITIS Notfallkonzepte:')
  console.log(JSON.stringify(searchResults, null, 2))
  
  // Also search by title with Ressourcenplanung
  const titleSearch = await client.fetch(`*[_type == 'servicePage' && title match '*Ressourcenplanung*']{
    _id,
    title,
    'slug': slug.current
  }`)
  
  console.log('\nTitle search results (Ressourcenplanung):')
  console.log(JSON.stringify(titleSearch, null, 2))
  
  // Search all KRITIS pages
  const kritisPages = await client.fetch(`*[_type == 'servicePage' && slug.current match '*kritis*' && !(_id match '*-en')]{
    _id,
    title,
    'slug': slug.current
  }`)
  
  console.log('\nAll KRITIS pages:')
  console.log(JSON.stringify(kritisPages, null, 2))
}

fetchKritisNotfallkonzepte()
