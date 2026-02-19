import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

async function fetchPage() {
  const doc = await client.fetch('*[_id == "kritis-gap-analyse-organisation-technik"][0]')
  console.log(JSON.stringify(doc, null, 2))
}

fetchPage().catch(console.error)
