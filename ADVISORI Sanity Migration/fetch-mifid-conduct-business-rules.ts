import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function fetchMifidConductBusinessRules() {
  // Search for conduct of business rules document
  const query = `*[_type == "servicePage" && (
    title match "*Conduct*" ||
    title match "*Wohlverhalten*" ||
    title match "*Business Rules*" ||
    slug.current match "*conduct*" ||
    slug.current match "*wohlverhalten*"
  )]{
    _id,
    title,
    "slug": slug.current,
    language,
    parent
  }`
  
  const results = await client.fetch(query)
  console.log('Search results:', JSON.stringify(results, null, 2))
}

fetchMifidConductBusinessRules()
