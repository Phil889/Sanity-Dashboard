import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function check() {
  const page = await client.fetch(`*[_id == 'kritis-schulungen-awareness-kampagnen-en'][0]{
    _id,
    title,
    language,
    'faqCount': count(faq),
    'servicesCount': count(services)
  }`)
  console.log('Page verification:')
  console.log(JSON.stringify(page, null, 2))
}

check()
