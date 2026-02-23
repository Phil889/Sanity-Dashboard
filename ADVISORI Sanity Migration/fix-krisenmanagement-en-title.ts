import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function fixTitle() {
  // Update the title to distinguish from the other Crisis Management page
  // Using "Crisis Management (NFR)" to indicate it's under Non-Financial Risk
  const result = await client
    .patch('krisenmanagement-en')
    .set({
      title: 'Crisis Management (NFR)',
      'seo.title': 'Crisis Management (NFR) | ADVISORI',
      'heroSection.heading': 'Crisis Management (NFR)'
    })
    .commit()
  
  console.log('Updated krisenmanagement-en title:', result._id)
  console.log('New title:', result.title)
}

fixTitle()
