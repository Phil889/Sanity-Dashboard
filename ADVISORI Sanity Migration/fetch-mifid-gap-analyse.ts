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
  // Search for MiFID Gap-Analyse & Roadmap document
  const query = `*[_type == "servicePage" && (
    title match "*Gap-Analyse*" ||
    title match "*Gap Analyse*" ||
    slug.current match "*gap-analyse*"
  ) && language == "de"]{
    _id,
    title,
    "slug": slug.current,
    language,
    "faqCount": count(faq),
    "servicesCount": count(services)
  }`
  
  const results = await client.fetch(query)
  console.log('Search results:', JSON.stringify(results, null, 2))
  
  // If found, fetch the full document
  if (results.length > 0) {
    const fullDoc = await client.fetch(`*[_id == "${results[0]._id}"][0]`)
    console.log('\n\nFull document:')
    console.log(JSON.stringify(fullDoc, null, 2))
  }
}

fetchMifidGapAnalyse()
