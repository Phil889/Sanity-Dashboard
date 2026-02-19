import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function fixType() {
  console.log('Fetching current page data...')
  
  // Get the current page data
  const currentPage = await client.fetch(`*[_id == 'kritis-schulungen-awareness-kampagnen-en'][0]`)
  
  if (!currentPage) {
    console.log('Page not found!')
    return
  }
  
  console.log('Current type:', currentPage._type)
  
  // Delete the old page
  console.log('Deleting old page...')
  await client.delete('kritis-schulungen-awareness-kampagnen-en')
  
  // Create new page with correct type
  console.log('Creating new page with servicePage type...')
  const newPage = {
    ...currentPage,
    _type: 'servicePage'
  }
  
  const result = await client.createOrReplace(newPage)
  console.log('Created new page with type:', result._type)
  console.log('Done!')
}

fixType()
