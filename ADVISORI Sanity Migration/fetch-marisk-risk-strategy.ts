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

async function fetchMariskRiskStrategy() {
  // First, find the page by searching for risk strategy related pages
  const pages = await client.fetch(`*[_type == "servicePage" && language == "de" && (
    title match "*Risikostrategie*" ||
    title match "*Risk Strategy*" ||
    slug.current match "*risikostrategie*" ||
    slug.current match "*risk-strategy*"
  )]{
    _id,
    title,
    "slug": slug.current,
    language
  }`)
  
  console.log('Found pages matching risk strategy:')
  pages.forEach((p: any) => {
    console.log(`  - ${p._id}: ${p.title} (${p.slug})`)
  })
  
  // Also search in MaRisk children
  const mariskChildren = await client.fetch(`*[_type == "servicePage" && language == "de" && parent._ref == "marisk"]{
    _id,
    title,
    "slug": slug.current,
    language
  }`)
  
  console.log('\nMaRisk children pages:')
  mariskChildren.forEach((p: any) => {
    console.log(`  - ${p._id}: ${p.title} (${p.slug})`)
  })
  
  // Try to fetch the specific page
  const page = await client.fetch(`*[_type == "servicePage" && _id == "marisk-risikostrategie"][0]`)
  
  if (page) {
    console.log('\n\nFound marisk-risikostrategie page!')
    console.log('Title:', page.title)
    console.log('FAQ count:', page.faq?.length || 0)
    
    // Save to file
    fs.writeFileSync('marisk-risk-strategy-source.json', JSON.stringify(page, null, 2))
    console.log('\nSaved to marisk-risk-strategy-source.json')
  } else {
    console.log('\nPage marisk-risikostrategie not found, trying alternative IDs...')
    
    // Try alternative IDs
    const alternatives = [
      'marisk-risk-strategy',
      'risikostrategie',
      'risk-strategy'
    ]
    
    for (const id of alternatives) {
      const altPage = await client.fetch(`*[_type == "servicePage" && _id == "${id}"][0]`)
      if (altPage) {
        console.log(`Found page with ID: ${id}`)
        console.log('Title:', altPage.title)
        fs.writeFileSync('marisk-risk-strategy-source.json', JSON.stringify(altPage, null, 2))
        console.log('Saved to marisk-risk-strategy-source.json')
        break
      }
    }
  }
}

fetchMariskRiskStrategy()
