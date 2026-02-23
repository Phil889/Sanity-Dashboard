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

async function fetchMifidVertriebssteuerung() {
  console.log('🔍 Searching for MiFID Vertriebssteuerung page...')
  
  // Search for the page by title pattern
  const query = `*[_type == "servicePage" && (
    title match "*Vertriebssteuerung*" ||
    title match "*Prozessabläufe*" ||
    slug.current match "*vertriebssteuerung*" ||
    slug.current match "*prozessablaeufe*"
  ) && language == "de"][0]`
  
  const result = await client.fetch(query)
  
  if (result) {
    console.log('✅ Found page:', result.title)
    console.log('   ID:', result._id)
    console.log('   Slug:', result.slug?.current)
    
    // Save to file
    fs.writeFileSync(
      'mifid-vertriebssteuerung-source.json',
      JSON.stringify(result, null, 2)
    )
    console.log('💾 Saved to mifid-vertriebssteuerung-source.json')
    return result
  } else {
    console.log('❌ Page not found. Searching for all MiFID pages...')
    
    // List all MiFID pages
    const allMifidPages = await client.fetch(`*[_type == "servicePage" && slug.current match "*mifid*" && language == "de"]{
      _id,
      title,
      "slug": slug.current
    }`)
    
    console.log('\n📋 Available MiFID pages:')
    allMifidPages.forEach((page: any, index: number) => {
      console.log(`${index + 1}. ${page.title}`)
      console.log(`   ID: ${page._id}`)
      console.log(`   Slug: ${page.slug}`)
      console.log('')
    })
    
    return null
  }
}

fetchMifidVertriebssteuerung()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Error:', error)
    process.exit(1)
  })
