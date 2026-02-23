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
  // Check for existing documents
  const results = await client.fetch(`*[_type == 'page' && slug.current match 'marisk-stress*']{_id, title, slug, language}`)
  console.log('Existing MaRisk Stress Testing pages:', JSON.stringify(results, null, 2))
}

check()
