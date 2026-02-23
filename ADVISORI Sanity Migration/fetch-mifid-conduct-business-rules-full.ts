import 'dotenv/config'
import { createClient } from '@sanity/client'
import * as fs from 'fs'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function fetchMifidConductBusinessRulesFull() {
  const query = `*[_id == "mifid-conduct-of-business-rules"][0]`
  
  const result = await client.fetch(query)
  fs.writeFileSync('mifid-conduct-business-rules-source.json', JSON.stringify(result, null, 2))
  console.log('Full document saved to mifid-conduct-business-rules-source.json')
  console.log('FAQ count:', result.faq?.length || 0)
  console.log('Services count:', result.services?.length || 0)
}

fetchMifidConductBusinessRulesFull()
