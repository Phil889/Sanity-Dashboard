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

async function fetchLieferkettengesetz() {
  console.log('Searching for Lieferkettengesetz (LkSG) page...')
  
  // Search for the page by title or slug containing lieferkettengesetz or lksg
  const query = `*[_type == "servicePage" && (
    title match "*Lieferkettengesetz*" ||
    title match "*LkSG*" ||
    title match "*lieferkettengesetz*" ||
    slug.current match "*lieferkettengesetz*" ||
    slug.current match "*lksg*"
  )][0]{
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
    console.log('Page not found by title/slug match. Trying to list all service pages...')
    
    // List all service pages to find the correct one
    const allPages = await client.fetch(`*[_type == "servicePage" && language == "de"]{
      _id,
      title,
      "slug": slug.current
    } | order(title asc)`)
    
    console.log('\nAvailable German service pages:')
    allPages.forEach((p: any) => {
      if (p.title && (
        p.title.toLowerCase().includes('lieferkette') ||
        p.title.toLowerCase().includes('lksg') ||
        p.title.toLowerCase().includes('supply') ||
        p.slug?.toLowerCase().includes('lieferkette') ||
        p.slug?.toLowerCase().includes('lksg')
      )) {
        console.log(`  - ${p._id}: ${p.title} (${p.slug})`)
      }
    })
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
    'ADVISORI Sanity Migration/lieferkettengesetz-source.json',
    JSON.stringify(page, null, 2)
  )
  console.log('\nSaved to lieferkettengesetz-source.json')
}

fetchLieferkettengesetz()
  .then(() => console.log('\nDone!'))
  .catch(console.error)
