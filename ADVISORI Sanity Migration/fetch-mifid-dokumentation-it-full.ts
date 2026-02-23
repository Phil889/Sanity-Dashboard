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

async function fetchMifidDokumentationItFull() {
  const query = `*[_id == "mifid-dokumentation-it-anbindung"][0]`
  
  const result = await client.fetch(query)
  
  // Save to file
  fs.writeFileSync('mifid-dokumentation-it-source.json', JSON.stringify(result, null, 2))
  console.log('Saved to mifid-dokumentation-it-source.json')
  console.log('FAQs:', result.faq?.length || 0)
  console.log('Services:', result.services?.length || 0)
}

fetchMifidDokumentationItFull()
