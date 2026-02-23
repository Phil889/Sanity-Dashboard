import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function checkPage() {
  const result = await client.fetch(`*[_id == 'kritis-readiness-en'][0]{
    _id,
    _type,
    title,
    'slug': slug.current,
    language,
    'faqCount': count(faq),
    'servicesCount': count(services)
  }`)
  console.log(JSON.stringify(result, null, 2))
}

checkPage()
