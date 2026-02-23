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
  // Search for all KPI-related pages
  const query = `*[_type == "servicePage" && (title match "*KPI*" || _id match "*kpi*")]{
    _id,
    title,
    "slug": slug.current,
    language
  }`
  
  const results = await client.fetch(query)
  console.log('KPI-related pages:')
  console.log(JSON.stringify(results, null, 2))
}

fetchKpiFramework().catch(console.error)
