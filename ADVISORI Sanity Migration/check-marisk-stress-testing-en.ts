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
  // Check for existing English version
  const results = await client.fetch(`*[_type == 'servicePage' && (_id == 'marisk-stress-testing-en' || _id == 'drafts.marisk-stress-testing-en' || slug.current match '*marisk-stress*')]{_id, title, slug, language}`)
  console.log('MaRisk Stress Testing pages:', JSON.stringify(results, null, 2))
  
  // Check for any MaRisk English pages
  const mariskEn = await client.fetch(`*[_type == 'servicePage' && slug.current match '*marisk*' && language == 'en']{_id, title, slug}`)
  console.log('MaRisk English pages:', JSON.stringify(mariskEn, null, 2))
}

check()
