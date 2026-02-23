import 'dotenv/config'
import { createClient } from '@sanity/client'
import * as fs from 'fs'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function fetchMifidIiiUpdates() {
  // Search for MiFID III Updates document
  const query = `*[_type == "servicePage" && (
    slug.current match "*mifid-iii*" ||
    slug.current match "*mifid-3*" ||
    title match "*MiFID III*" ||
    title match "*MiFID 3*" ||
    title match "*Updates*Changes*"
  ) && language == "de"][0...10] {
    _id,
    title,
    "slug": slug.current,
    language,
    "faqCount": count(faq),
    "servicesCount": count(services)
  }`
  
  console.log('Searching for MiFID III Updates document...')
  const results = await client.fetch(query)
  
  if (results && results.length > 0) {
    console.log('Found documents:')
    results.forEach((doc: any) => {
      console.log(`  - ${doc._id}: ${doc.title} (${doc.slug})`)
      console.log(`    FAQs: ${doc.faqCount}, Services: ${doc.servicesCount}`)
    })
    
    // Fetch the full document for the first match
    const fullDoc = await client.fetch(`*[_id == "${results[0]._id}"][0]`)
    fs.writeFileSync('mifid-iii-updates-source.json', JSON.stringify(fullDoc, null, 2))
    console.log('\nSource document saved to mifid-iii-updates-source.json')
    console.log('FAQ count:', fullDoc.faq?.length || 0)
    console.log('Services count:', fullDoc.services?.length || 0)
  } else {
    console.log('No documents found. Trying broader search...')
    
    // Broader search
    const broaderQuery = `*[_type == "servicePage" && (
      title match "*MiFID*" ||
      slug.current match "*mifid*"
    ) && language == "de"] {
      _id,
      title,
      "slug": slug.current,
      "faqCount": count(faq)
    } | order(title asc)`
    
    const allMifid = await client.fetch(broaderQuery)
    console.log('\nAll MiFID pages found:')
    allMifid.forEach((doc: any) => {
      console.log(`  - ${doc._id}: ${doc.title}`)
    })
  }
}

fetchMifidIiiUpdates()
