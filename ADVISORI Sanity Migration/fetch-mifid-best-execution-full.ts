import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  useCdn: false,
})

async function fetchMifidBestExecutionFull() {
  const result = await client.fetch(`*[_id == 'mifid-best-execution'][0]`)
  console.log(JSON.stringify(result, null, 2))
}

fetchMifidBestExecutionFull()
