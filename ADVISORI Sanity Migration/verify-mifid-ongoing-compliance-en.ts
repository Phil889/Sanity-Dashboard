import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function verify() {
  console.log('Checking for MiFID Ongoing Compliance EN document...')
  
  // Check by ID
  const byId = await client.fetch(`*[_id == "mifid-ongoing-compliance-en"][0]{
    _id,
    _type,
    title,
    language,
    "faqCount": count(faq),
    "servicesCount": count(services),
    "slug": slug.current
  }`)
  
  console.log('\nBy ID (mifid-ongoing-compliance-en):')
  console.log(JSON.stringify(byId, null, 2))
  
  // Check by slug pattern
  const bySlug = await client.fetch(`*[_type == "servicePage" && slug.current match "*ongoing-compliance*en*"][0]{
    _id,
    _type,
    title,
    language,
    "faqCount": count(faq),
    "servicesCount": count(services),
    "slug": slug.current
  }`)
  
  console.log('\nBy slug pattern (*ongoing-compliance*en*):')
  console.log(JSON.stringify(bySlug, null, 2))
  
  // List all documents with "ongoing" in slug
  const allOngoing = await client.fetch(`*[_type == "servicePage" && slug.current match "*ongoing*"]{
    _id,
    title,
    language,
    "slug": slug.current
  }`)
  
  console.log('\nAll documents with "ongoing" in slug:')
  console.log(JSON.stringify(allOngoing, null, 2))
}

verify()
