import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function fetchKpiFramework() {
  const query = `*[_id == "kpi-framework"][0]`
  
  const result = await client.fetch(query)
  console.log('KPI Framework full content:')
  console.log(JSON.stringify(result, null, 2))
}

fetchKpiFramework().catch(console.error)
