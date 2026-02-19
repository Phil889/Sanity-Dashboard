import 'dotenv/config'
import { createClient } from '@sanity/client'
import * as fs from 'fs'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function fetchKritisProzessanpassungenFull() {
  const page = await client.fetch(`*[_id == 'kritis-prozessanpassungen-bei-neuen-bedrohungen'][0]{
    _id,
    _type,
    title,
    slug,
    language,
    seo,
    heroSection,
    overview,
    approach,
    services,
    faq,
    testimonial,
    parent,
    references
  }`)
  
  console.log('KRITIS Prozessanpassungen page data:')
  console.log(JSON.stringify(page, null, 2))
  
  // Save to file
  fs.writeFileSync('kritis-prozessanpassungen-source.json', JSON.stringify(page, null, 2))
  console.log('\nSaved to kritis-prozessanpassungen-source.json')
  
  // Summary
  console.log('\n=== Summary ===')
  console.log('Page ID:', page._id)
  console.log('Title:', page.title)
  console.log('Slug:', page.slug?.current)
  console.log('FAQ count:', page.faq?.length || 0)
  console.log('Services count:', page.services?.length || 0)
  console.log('Parent:', page.parent?._ref)
}

fetchKritisProzessanpassungenFull()
