import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function verify() {
  const doc = await client.fetch(`*[_id == "model-governance-en"][0]{
    _id,
    title,
    language,
    "faqCount": count(faq),
    "slug": slug.current
  }`)
  
  console.log('Verification result:')
  console.log(JSON.stringify(doc, null, 2))
}

verify().catch(console.error)
