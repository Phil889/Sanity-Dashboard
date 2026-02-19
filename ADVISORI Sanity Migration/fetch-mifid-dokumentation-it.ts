import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function fetchMifidDokumentationIt() {
  // Search for MiFID Dokumentation und IT-Anbindung
  const query = `*[_type == "servicePage" && (
    title match "*Dokumentation*IT*" ||
    title match "*IT-Anbindung*" ||
    slug.current match "*dokumentation*it*"
  )]{
    _id,
    title,
    "slug": slug.current,
    language,
    "faqCount": count(faq),
    "servicesCount": count(services),
    "parent": parent->title
  }`
  
  const results = await client.fetch(query)
  console.log('Search results:', JSON.stringify(results, null, 2))
  
  // Also search with broader terms
  const query2 = `*[_type == "servicePage" && title match "*MiFID*" && title match "*IT*"]{
    _id,
    title,
    "slug": slug.current
  }`
  
  const results2 = await client.fetch(query2)
  console.log('\nBroader search:', JSON.stringify(results2, null, 2))
}

fetchMifidDokumentationIt()
