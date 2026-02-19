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
  const doc = await client.fetch(`*[_id == "mifid-systematic-internaliser-en"][0]{
    _id,
    title,
    language,
    "faqCount": count(faq),
    "servicesCount": count(services)
  }`)
  
  console.log(JSON.stringify(doc, null, 2))
}

verify()
