import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'wwmm9rbb',
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
})

async function verify() {
  const result = await client.fetch(`*[_id == "mifid-third-country-firms-en"][0]{
    _id,
    title,
    language,
    "faqCount": count(faq),
    "servicesCount": count(services),
    slug
  }`)
  
  console.log('MiFID Third Country Firms EN verification:')
  console.log(JSON.stringify(result, null, 2))
}

verify()
