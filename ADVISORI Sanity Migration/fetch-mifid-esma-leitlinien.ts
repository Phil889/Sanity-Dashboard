import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function fetchMifidEsmaLeitlinien() {
  // Search for ESMA Leitlinien document
  const results = await client.fetch(`*[_type == "servicePage" && (title match "*ESMA*" || title match "*Leitlinien*" || _id match "*esma*")]{
    _id,
    title,
    language,
    "slug": slug.current,
    "parent": parent->title,
    "faqCount": count(faq),
    "servicesCount": count(services)
  }`)
  
  console.log('Search results for ESMA Leitlinien:')
  console.log(JSON.stringify(results, null, 2))
}

fetchMifidEsmaLeitlinien()
