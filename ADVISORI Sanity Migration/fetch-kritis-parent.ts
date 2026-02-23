import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function fetchKritisParent() {
  const doc = await client.fetch('*[_id == "kritis"][0]')
  console.log(JSON.stringify(doc, null, 2))
}

fetchKritisParent()
