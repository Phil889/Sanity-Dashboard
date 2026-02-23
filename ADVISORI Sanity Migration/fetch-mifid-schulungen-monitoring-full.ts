import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function fetchMifidSchulungenMonitoringFull() {
  const fullDoc = await client.fetch(`*[_id == "mifid-fortlaufende-schulungen-monitoring"][0]`)
  const fs = require('fs')
  fs.writeFileSync('mifid-schulungen-monitoring-source.json', JSON.stringify(fullDoc, null, 2))
  console.log('Saved to mifid-schulungen-monitoring-source.json')
  console.log('FAQ count:', fullDoc.faq?.length)
  console.log('Services count:', fullDoc.services?.length)
}

fetchMifidSchulungenMonitoringFull()
