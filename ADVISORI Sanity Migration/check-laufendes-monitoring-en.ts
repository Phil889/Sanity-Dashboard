import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
})

async function checkPage() {
  const result = await client.fetch(`*[_id == "laufendes-monitoring-risk-assessment-en"][0]{
    _id,
    title,
    language,
    "faqCount": count(faq),
    "serviceCount": count(services)
  }`)
  console.log(JSON.stringify(result, null, 2))
}

checkPage().catch(console.error)
