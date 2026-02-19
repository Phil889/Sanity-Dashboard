import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01'
})

async function check() {
  // Check for existing English pages with marisk in the slug
  const results = await client.fetch(`*[_type == 'servicePage' && (slug.current match '*marisk*' || slug.current match '*-en')]{_id, title, slug, language}[0...50]`)
  console.log('Existing pages:', JSON.stringify(results, null, 2))
  
  // Also check for the German source
  const source = await client.fetch(`*[_id == 'marisk-stress-testing']{_id, title, slug}`)
  console.log('German source:', JSON.stringify(source, null, 2))
}

check()
