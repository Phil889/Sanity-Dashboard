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

async function fetchMifidImplementation() {
  const query = `*[_id == "mifid-implementation"][0]`
  
  const result = await client.fetch(query)
  
  if (result) {
    fs.writeFileSync('./mifid-implementation-source.json', JSON.stringify(result, null, 2))
    console.log('Source document saved to mifid-implementation-source.json')
    console.log('FAQ count:', result.faq?.length || 0)
    console.log('Services count:', result.services?.length || 0)
  } else {
    console.log('Document not found')
  }
}

fetchMifidImplementation().catch(console.error)
