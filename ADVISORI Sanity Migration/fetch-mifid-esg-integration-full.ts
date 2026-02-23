import { createClient } from '@sanity/client'
import * as fs from 'fs'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  useCdn: false,
})

async function fetchMifidEsgIntegrationFull() {
  const query = `*[_id == "mifid-esg-integration"][0]`
  
  const result = await client.fetch(query)
  
  // Save to file for reference
  fs.writeFileSync(
    'ADVISORI Sanity Migration/mifid-esg-integration-source.json',
    JSON.stringify(result, null, 2)
  )
  
  console.log('Full document saved to mifid-esg-integration-source.json')
  console.log('FAQ count:', result.faq?.length || 0)
  console.log('Services count:', result.services?.length || 0)
}

fetchMifidEsgIntegrationFull()
