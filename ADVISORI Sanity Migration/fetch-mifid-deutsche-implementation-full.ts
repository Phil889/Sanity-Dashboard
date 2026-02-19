import { createClient } from '@sanity/client'
import * as fs from 'fs'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  useCdn: false,
})

async function fetchMifidDeutscheImplementationFull() {
  const query = `*[_id == "mifid-deutsche-implementation"][0]`
  const result = await client.fetch(query)
  fs.writeFileSync('mifid-deutsche-implementation-source.json', JSON.stringify(result, null, 2))
  console.log('Saved to mifid-deutsche-implementation-source.json')
}

fetchMifidDeutscheImplementationFull()
