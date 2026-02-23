import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function fetchKpiManagement() {
  // Fetch the specific page by ID
  const fullQuery = `*[_id == "kpi-management"][0]`
  const fullDoc = await client.fetch(fullQuery)
  console.log('Full document:')
  console.log(JSON.stringify(fullDoc, null, 2))
}

fetchKpiManagement().catch(console.error)
