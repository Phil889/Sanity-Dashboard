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

async function fetchKritisSchulungen() {
  console.log('Searching for KRITIS Schulungen & Awareness-Kampagnen page...')
  
  // Search for the page by title
  const query = `*[_type == "servicePage" && (title match "*Schulungen*" || title match "*Awareness*") && (title match "*KRITIS*" || slug.current match "*kritis*")]{
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
    const broadQuery = `*[_type == "servicePage" && slug.current match "*kritis*schulung*"]{
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
    
    const broadResults = await client.fetch(broadQuery)
    
    if (broadResults.length === 0) {
      // Try even broader
      const veryBroadQuery = `*[_type == "servicePage" && (title match "*Schulung*" || title match "*Awareness*")]{
        _id,
        title,
        slug,
        language
      }`
      
      const veryBroadResults = await client.fetch(veryBroadQuery)
      console.log('Schulung/Awareness pages found:')
      veryBroadResults.forEach((page: any) => {
        console.log(`- ${page._id}: ${page.title} (${page.slug?.current})`)
      })
      return
    }
    
    console.log(`Found ${broadResults.length} result(s):`)
    broadResults.forEach((page: any) => {
      console.log(`- ${page._id}: ${page.title}`)
      console.log(`  Slug: ${page.slug?.current}`)
      console.log(`  Language: ${page.language}`)
      console.log(`  Parent: ${page.parentTitle || page.parent?._ref}`)
      console.log(`  FAQs: ${page.faq?.length || 0}`)
      console.log(`  Services: ${page.services?.length || 0}`)
    })
    
    // Save the German source
    const germanPage = broadResults.find((p: any) => p.language === 'de' || !p.language)
    if (germanPage) {
      const outputPath = path.join(__dirname, '..', 'kritis-schulungen-source.json')
      fs.writeFileSync(outputPath, JSON.stringify(germanPage, null, 2))
      console.log(`\nSaved source to: ${outputPath}`)
    }
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
    const outputPath = path.join(__dirname, '..', 'kritis-schulungen-source.json')
    fs.writeFileSync(outputPath, JSON.stringify(germanPage, null, 2))
    console.log(`\nSaved source to: ${outputPath}`)
  }
}

fetchKritisSchulungen()
