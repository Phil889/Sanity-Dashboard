import { createClient } from '@sanity/client'
import * as fs from 'fs'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  useCdn: false,
})

async function fetchMifidIIReadiness() {
  // First search for the document
  const searchQuery = `*[_type == 'servicePage' && (slug.current match '*mifid*readiness*' || title match '*MiFID II Readiness*' || title match '*MiFID II-Readiness*')]{
    _id,
    title,
    'slug': slug.current,
    language,
    'faqCount': count(faq),
    'servicesCount': count(services)
  }`
  
  console.log('Searching for MiFID II Readiness document...')
  const searchResults = await client.fetch(searchQuery)
  console.log('Search results:', JSON.stringify(searchResults, null, 2))
  
  if (searchResults.length > 0) {
    // Fetch the full document
    const docId = searchResults[0]._id
    const fullQuery = `*[_id == '${docId}'][0]`
    const fullDoc = await client.fetch(fullQuery)
    
    fs.writeFileSync('mifid-ii-readiness-source.json', JSON.stringify(fullDoc, null, 2))
    console.log('Full document saved to mifid-ii-readiness-source.json')
  }
}

fetchMifidIIReadiness()
