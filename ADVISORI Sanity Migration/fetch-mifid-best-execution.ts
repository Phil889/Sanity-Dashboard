import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  useCdn: false,
})

async function fetchMifidBestExecution() {
  const result = await client.fetch(`*[_type == 'servicePage' && (title match '*Best Execution*' || slug.current match '*best-execution*')]{_id, title, 'slug': slug.current}`)
  console.log(JSON.stringify(result, null, 2))
}

fetchMifidBestExecution()
