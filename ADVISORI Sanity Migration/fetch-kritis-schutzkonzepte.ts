import 'dotenv/config'
import { createClient } from '@sanity/client'
import * as fs from 'fs'
import * as path from 'path'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function fetchKritisSchutzkonzepte() {
  console.log('Searching for KRITIS Schutzkonzepte Physisch Digital page...')
  
  // Search for the page by title
  const query = `*[_type == "servicePage" && (title match "*Schutzkonzept*" || title match "*schutzkonzept*" || slug.current match "*schutzkonzept*")]{
    _id,
    title,
    slug,
    language,
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
  
  const results = await client.fetch(query)
  
  if (results.length === 0) {
    console.log('No results found. Trying broader search...')
    
    // Try broader search
    const broadQuery = `*[_type == "servicePage" && (title match "*KRITIS*" || slug.current match "*kritis*")]{
      _id,
      title,
      slug,
      language
    }`
    
    const broadResults = await client.fetch(broadQuery)
    console.log('KRITIS pages found:')
    broadResults.forEach((page: any) => {
      console.log(`- ${page._id}: ${page.title} (${page.slug?.current})`)
    })
    return
  }
  
  console.log(`Found ${results.length} result(s):`)
  results.forEach((page: any) => {
    console.log(`- ${page._id}: ${page.title}`)
    console.log(`  Slug: ${page.slug?.current}`)
    console.log(`  Language: ${page.language}`)
    console.log(`  Parent: ${page.parentTitle || page.parent?._ref}`)
    console.log(`  FAQs: ${page.faq?.length || 0}`)
    console.log(`  Services: ${page.services?.length || 0}`)
  })
  
  // Save the German source
  const germanPage = results.find((p: any) => p.language === 'de' || !p.language)
  if (germanPage) {
    const outputPath = path.join(__dirname, '..', 'kritis-schutzkonzepte-source.json')
    fs.writeFileSync(outputPath, JSON.stringify(germanPage, null, 2))
    console.log(`\nSaved source to: ${outputPath}`)
  }
}

fetchKritisSchutzkonzepte()
