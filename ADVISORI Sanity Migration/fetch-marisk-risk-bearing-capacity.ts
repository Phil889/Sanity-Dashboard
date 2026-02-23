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

async function fetchMariskRiskBearingCapacity() {
  console.log('Searching for MaRisk Risk Bearing Capacity page...')
  
  // Search for the page
  const pages = await client.fetch(`
    *[_type == "servicePage" && (
      title match "*Risikotragfähigkeit*" ||
      title match "*Risk Bearing*" ||
      slug.current match "*risikotragfaehigkeit*" ||
      slug.current match "*risk-bearing*"
    )] {
      _id,
      title,
      slug,
      language
    }
  `)
  
  console.log('Found pages:', JSON.stringify(pages, null, 2))
  
  if (pages.length > 0) {
    // Get the German version
    const germanPage = pages.find((p: any) => p.language === 'de') || pages[0]
    console.log(`\nFetching full content for: ${germanPage._id}`)
    
    const fullPage = await client.fetch(`
      *[_id == $id][0] {
        _id,
        _type,
        title,
        slug,
        language,
        parent,
        references,
        heroSection,
        overview,
        approach,
        services,
        faq,
        testimonial,
        seo
      }
    `, { id: germanPage._id })
    
    // Save to file
    fs.writeFileSync(
      'marisk-risk-bearing-capacity-source.json',
      JSON.stringify(fullPage, null, 2)
    )
    
    console.log('\nSaved to marisk-risk-bearing-capacity-source.json')
    console.log(`FAQ count: ${fullPage.faq?.length || 0}`)
    console.log(`Services count: ${fullPage.services?.length || 0}`)
  }
}

fetchMariskRiskBearingCapacity()
