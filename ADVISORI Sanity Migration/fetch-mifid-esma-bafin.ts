import 'dotenv/config'
import { createClient } from '@sanity/client'
import * as fs from 'fs'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function fetchMifidEsmaBafin() {
  // Search for the page by title containing "ESMA" and "BaFin"
  const query = `*[_type == "servicePage" && title match "*ESMA*" && title match "*BaFin*" && language == "de"][0]{
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
  }`

  console.log('Fetching MiFID ESMA/BaFin page...')
  const result = await client.fetch(query)
  
  if (result) {
    console.log('Found page:', result.title)
    console.log('Document ID:', result._id)
    console.log('FAQ count:', result.faq?.length || 0)
    
    // Save to file
    fs.writeFileSync(
      '../mifid-esma-bafin-source.json',
      JSON.stringify(result, null, 2)
    )
    console.log('Saved to mifid-esma-bafin-source.json')
  } else {
    console.log('Page not found. Trying alternative query...')
    
    // Try searching by slug pattern
    const altQuery = `*[_type == "servicePage" && slug.current match "*esma*" && slug.current match "*bafin*" && language == "de"][0]{
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
    }`
    
    const altResult = await client.fetch(altQuery)
    if (altResult) {
      console.log('Found page:', altResult.title)
      console.log('Document ID:', altResult._id)
      console.log('FAQ count:', altResult.faq?.length || 0)
      
      fs.writeFileSync(
        '../mifid-esma-bafin-source.json',
        JSON.stringify(altResult, null, 2)
      )
      console.log('Saved to mifid-esma-bafin-source.json')
    } else {
      console.log('Still not found. Listing all MiFID pages...')
      
      // List all MiFID pages to find the correct one
      const listQuery = `*[_type == "servicePage" && title match "*MiFID*" && language == "de"]{
        _id,
        title,
        "slug": slug.current
      } | order(title asc)`
      
      const pages = await client.fetch(listQuery)
      console.log('\nAvailable MiFID pages:')
      pages.forEach((p: any) => {
        console.log(`- ${p.title}`)
        console.log(`  ID: ${p._id}`)
        console.log(`  Slug: ${p.slug}`)
      })
    }
  }
}

fetchMifidEsmaBafin().catch(console.error)
