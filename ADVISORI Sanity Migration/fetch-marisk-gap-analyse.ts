import { createClient } from '@sanity/client'
import * as fs from 'fs'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01'
})

async function fetchMariskGapAnalyse() {
  console.log('Fetching MaRisk Gap-Analyse page...')
  
  // Search for MaRisk Gap-Analyse pages
  const searchResults = await client.fetch(`*[_type == "servicePage" && (
    title match "*Gap*Analyse*" ||
    title match "*Gap-Analyse*" ||
    slug.current match "*gap-analyse*"
  ) && language == "de"]{
    _id,
    title,
    "slug": slug.current,
    "parent": parent->title
  }`)
  
  console.log('\nSearch results for MaRisk Gap-Analyse pages:')
  searchResults.forEach((p: any) => {
    console.log(`- ${p._id}: ${p.title} (parent: ${p.parent || 'none'})`)
    console.log(`  slug: ${p.slug}`)
  })
  
  // Try to fetch the specific MaRisk Gap-Analyse page
  const page = await client.fetch(`*[_type == "servicePage" && (
    _id == "marisk-gap-analyse" ||
    (title match "*MaRisk*Gap*" && parent._ref == "marisk-readiness")
  )][0]`)
  
  if (page) {
    console.log('\n\nFound page:')
    console.log(`ID: ${page._id}`)
    console.log(`Title: ${page.title}`)
    console.log(`FAQs: ${page.faq?.length || 0}`)
    console.log(`Services: ${page.services?.length || 0}`)
    
    // Save to file
    fs.writeFileSync(
      'marisk-gap-analyse-source.json',
      JSON.stringify(page, null, 2)
    )
    console.log('\nSaved to marisk-gap-analyse-source.json')
  } else {
    console.log('\nPage not found with direct ID search')
  }
}

fetchMariskGapAnalyse()
  .then(() => console.log('\nDone!'))
  .catch(console.error)
