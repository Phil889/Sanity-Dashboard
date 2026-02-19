import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function fetchMifidGapAnalyse() {
  // Fetch the specific MiFID Gap-Analyse & Roadmap document
  const fullDoc = await client.fetch(`*[_id == "mifid-gap-analyse-roadmap"][0]`)
  console.log('Full document:')
  console.log(JSON.stringify(fullDoc, null, 2))
}

fetchMifidGapAnalyse()
