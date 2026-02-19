import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function fetchKritisMeldepflichten() {
  console.log('Searching for KRITIS Meldepflichten Behördenkommunikation page...\n')
  
  // Search for the page
  const pages = await client.fetch(`*[_type == 'servicePage' && (
    title match '*Meldepflichten*' ||
    title match '*Behördenkommunikation*' ||
    slug.current match '*meldepflichten*'
  )]{
    _id,
    title,
    "slug": slug.current,
    language
  }`)
  
  console.log('Found pages:')
  pages.forEach((page: any) => {
    console.log(`- ${page._id}: ${page.title}`)
    console.log(`  Slug: ${page.slug}`)
    console.log(`  Language: ${page.language || 'de'}`)
  })
}

fetchKritisMeldepflichten().catch(console.error)
