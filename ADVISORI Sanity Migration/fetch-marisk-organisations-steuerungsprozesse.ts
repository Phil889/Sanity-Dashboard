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

async function fetchMariskOrganisationsSteuerungsprozesse() {
  console.log('Fetching MaRisk Organisations- & Steuerungsprozesse page...')
  
  // First, let's search for pages with "organisation" or "steuerung" in the title
  const searchResults = await client.fetch(`*[_type == "servicePage" && (
    title match "*Organisation*" ||
    title match "*Steuerung*" ||
    slug.current match "*organisation*" ||
    slug.current match "*steuerung*"
  ) && language == "de"]{
    _id,
    title,
    "slug": slug.current,
    "parent": parent->title
  }`)
  
  console.log('\nSearch results for Organisation/Steuerung pages:')
  searchResults.forEach((p: any) => {
    console.log(`- ${p._id}: ${p.title} (parent: ${p.parent || 'none'})`)
    console.log(`  slug: ${p.slug}`)
  })
  
  // Also search for MaRisk child pages
  const mariskChildren = await client.fetch(`*[_type == "servicePage" && parent._ref == "marisk" && language == "de"]{
    _id,
    title,
    "slug": slug.current
  } | order(title asc)`)
  
  console.log('\n\nAll MaRisk child pages:')
  mariskChildren.forEach((p: any) => {
    console.log(`- ${p._id}: ${p.title}`)
    console.log(`  slug: ${p.slug}`)
  })
  
  // Try to fetch the specific page
  const page = await client.fetch(`*[_type == "servicePage" && (
    _id == "marisk-organisations-steuerungsprozesse" ||
    _id == "marisk-organisationssteuerungsprozesse" ||
    slug.current match "*organisation*steuerung*"
  )][0]`)
  
  if (page) {
    console.log('\n\nFound page:')
    console.log(`ID: ${page._id}`)
    console.log(`Title: ${page.title}`)
    console.log(`FAQs: ${page.faq?.length || 0}`)
    console.log(`Services: ${page.services?.length || 0}`)
    
    // Save to file
    fs.writeFileSync(
      'marisk-organisations-steuerungsprozesse-source.json',
      JSON.stringify(page, null, 2)
    )
    console.log('\nSaved to marisk-organisations-steuerungsprozesse-source.json')
  } else {
    console.log('\nPage not found with direct ID search')
  }
}

fetchMariskOrganisationsSteuerungsprozesse()
  .then(() => console.log('\nDone!'))
  .catch(console.error)
