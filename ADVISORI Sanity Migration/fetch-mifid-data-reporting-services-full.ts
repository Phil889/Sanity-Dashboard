import { createClient } from '@sanity/client'
import * as fs from 'fs'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  useCdn: false,
})

async function fetchMifidDataReportingServicesFull() {
  const query = `*[_id == "mifid-data-reporting-services"][0]`
  const result = await client.fetch(query)
  fs.writeFileSync('mifid-data-reporting-services-source.json', JSON.stringify(result, null, 2))
  console.log('Saved to mifid-data-reporting-services-source.json')
}

fetchMifidDataReportingServicesFull()
