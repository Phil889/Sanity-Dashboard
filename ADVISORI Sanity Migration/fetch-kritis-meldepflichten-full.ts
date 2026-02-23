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

async function fetchKritisMeldepflichtenFull() {
  console.log('Fetching full KRITIS Meldepflichten Behördenkommunikation data...\n')
  
  const fullData = await client.fetch(`*[_type == 'servicePage' && _id == 'kritis-meldepflichten-behoerdenkommunikation'][0]{
    _id,
    title,
    slug,
    language,
    parent,
    references,
    seo,
    heroSection,
    overview,
    approach,
    testimonial,
    services,
    faq
  }`)
  
  if (fullData) {
    console.log('Page ID:', fullData._id)
    console.log('Title:', fullData.title)
    console.log('FAQ Count:', fullData.faq?.length || 0)
    console.log('Services Count:', fullData.services?.length || 0)
    
    // Save to file
    fs.writeFileSync('kritis-meldepflichten-source.json', JSON.stringify(fullData, null, 2))
    console.log('\nSaved to kritis-meldepflichten-source.json')
  } else {
    console.log('Page not found!')
  }
}

fetchKritisMeldepflichtenFull().catch(console.error)
