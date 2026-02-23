import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function fetchCrisisManagementBCM() {
  // Fetch by ID from the URL
  const doc = await client.fetch(`*[_id == "crisis-management"][0]`)
  console.log('Full document:')
  console.log(JSON.stringify(doc, null, 2))
}

fetchCrisisManagementBCM()
