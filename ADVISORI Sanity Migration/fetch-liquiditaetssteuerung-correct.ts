import { createClient } from '@sanity/client'
import * as fs from 'fs'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function fetchLiquiditaetssteuerung() {
  console.log('Fetching Liquiditätssteuerung page by ID...')
  
  // Fetch the specific page by ID
  const query = `*[_id == "liquiditaetssteuerung"][0]{
    _id,
    _type,
    title,
    language,
    slug,
    parent,
    "parentTitle": parent->title,
    references,
    seo,
    heroSection,
    overview,
    approach,
    services,
    faq,
    testimonial
  }`
  
  const page = await client.fetch(query)
  
  if (!page) {
    console.log('Page not found!')
    return
  }
  
  console.log(`\n=== ${page.title} ===`)
  console.log(`ID: ${page._id}`)
  console.log(`Slug: ${page.slug?.current}`)
  console.log(`Language: ${page.language}`)
  console.log(`Parent: ${page.parentTitle || page.parent?._ref}`)
  console.log(`FAQs: ${page.faq?.length || 0}`)
  console.log(`Services: ${page.services?.length || 0}`)
  
  // Save the source
  fs.writeFileSync(
    'ADVISORI Sanity Migration/liquiditaetssteuerung-source.json',
    JSON.stringify(page, null, 2)
  )
  console.log('\nSaved to liquiditaetssteuerung-source.json')
}

fetchLiquiditaetssteuerung()
  .then(() => console.log('\nDone!'))
  .catch(console.error)
