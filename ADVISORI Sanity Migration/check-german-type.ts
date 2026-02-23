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
  const page = await client.fetch(`*[_id == 'kritis-schulungen-awareness-kampagnen'][0]{
    _id,
    _type,
    title
  }`)
  console.log('German source page type:')
  console.log(JSON.stringify(page, null, 2))
}

check()
