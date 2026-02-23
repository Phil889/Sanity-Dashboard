import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const run = async () => {
  try {
    console.log('Checking for existing standards-related documents...')
    
    const docs = await client.fetch(`
      *[_type == "servicePage" && (_id match "*standards*" || _id match "*regulatory*")] | order(_id) {
        _id,
        title,
        slug
      }
    `)
    
    console.log('Found documents:', JSON.stringify(docs, null, 2))
  } catch (error) {
    console.error('Error:', error)
  }
}

run()
