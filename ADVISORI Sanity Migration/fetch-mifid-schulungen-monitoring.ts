import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function fetchMifidSchulungenMonitoring() {
  // Search for the document
  const results = await client.fetch(`*[_type == "servicePage" && (title match "*Schulung*" || title match "*Monitoring*" || title match "*Training*") && (slug.current match "*mifid*")]{
    _id,
    title,
    "slug": slug.current,
    "faqCount": count(faq),
    "servicesCount": count(services),
    "parent": parent._ref
  }`)
  
  console.log('Search results:')
  console.log(JSON.stringify(results, null, 2))
}

fetchMifidSchulungenMonitoring()
