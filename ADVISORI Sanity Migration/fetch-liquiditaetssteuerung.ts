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
  console.log('Fetching Liquiditätssteuerung page...')
  
  // First, let's search for the page
  const query = `*[_type == "servicePage" && (
    slug.current match "*liquidit*" ||
    title match "*Liquidität*" ||
    title match "*Liquidity*"
  )]{
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
  
  const pages = await client.fetch(query)
  
  if (pages.length === 0) {
    console.log('No pages found with liquidit* in slug or title')
    
    // Try broader search
    const broaderQuery = `*[_type == "servicePage" && (
      title match "*steuerung*" ||
      slug.current match "*steuerung*"
    )]{
      _id,
      title,
      slug
    }`
    
    const broaderPages = await client.fetch(broaderQuery)
    console.log('\nPages with "steuerung" in title/slug:')
    broaderPages.forEach((p: any) => {
      console.log(`  - ${p._id}: ${p.title} (${p.slug?.current})`)
    })
    
    return
  }
  
  console.log(`Found ${pages.length} page(s)`)
  
  pages.forEach((page: any) => {
    console.log(`\n=== ${page.title} ===`)
    console.log(`ID: ${page._id}`)
    console.log(`Slug: ${page.slug?.current}`)
    console.log(`Language: ${page.language}`)
    console.log(`Parent: ${page.parentTitle || page.parent?._ref}`)
    console.log(`FAQs: ${page.faq?.length || 0}`)
    console.log(`Services: ${page.services?.length || 0}`)
  })
  
  // Save the German source
  const germanPage = pages.find((p: any) => !p._id.includes('-en'))
  if (germanPage) {
    fs.writeFileSync(
      'ADVISORI Sanity Migration/liquiditaetssteuerung-source.json',
      JSON.stringify(germanPage, null, 2)
    )
    console.log('\nSaved to liquiditaetssteuerung-source.json')
  }
}

fetchLiquiditaetssteuerung()
  .then(() => console.log('\nDone!'))
  .catch(console.error)
