import 'dotenv/config'
import { createClient } from '@sanity/client'
import * as fs from 'fs'
import * as path from 'path'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
})

async function fetchKritisSchwachstellenanalyse() {
  console.log('Searching for KRITIS Schwachstellenanalyse page...')
  
  // Search for KRITIS Schwachstellenanalyse page
  const results = await client.fetch(`*[_type == "servicePage" && (title match "*KRITIS*" || title match "*Schwachstellenanalyse*" || slug.current match "*kritis*schwachstellen*")]{
    _id,
    title,
    "slug": slug.current,
    language
  }`)
  
  console.log('Search results:')
  console.log(JSON.stringify(results, null, 2))
  
  if (results.length > 0) {
    // Find the correct page
    const targetPage = results.find((r: any) => r.title.includes('Schwachstellenanalyse') && r.title.includes('Risikobewertung')) || results[0]
    const pageId = targetPage._id
    console.log(`\nFetching full page: ${pageId}`)
    
    const fullPage = await client.fetch(`*[_id == "${pageId}"][0]{
      _id,
      _type,
      title,
      slug,
      language,
      parent,
      references,
      seo,
      heroSection,
      overview,
      approach,
      services,
      testimonial,
      faq
    }`)
    
    // Save to file
    const filename = path.join(__dirname, '..', 'kritis-schwachstellenanalyse-source.json')
    fs.writeFileSync(filename, JSON.stringify(fullPage, null, 2))
    console.log(`\nSaved to ${filename}`)
    console.log(`FAQ count: ${fullPage.faq?.length || 0}`)
    console.log(`Services count: ${fullPage.services?.length || 0}`)
  }
}

fetchKritisSchwachstellenanalyse().catch(console.error)
