import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function fetchMifidEsmaLeitlinienFull() {
  const fullDoc = await client.fetch(`*[_id == "mifid-esma-guidelines"][0]`)
  const fs = require('fs')
  fs.writeFileSync('ADVISORI Sanity Migration/mifid-esma-guidelines-source.json', JSON.stringify(fullDoc, null, 2))
  console.log('Saved to mifid-esma-guidelines-source.json')
  console.log('FAQ count:', fullDoc.faq?.length)
  console.log('Services count:', fullDoc.services?.length)
}

fetchMifidEsmaLeitlinienFull()
