import { createClient } from '@sanity/client'
import * as fs from 'fs'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
})

async function fetchLowCostIntelligentAutomation() {
  console.log('Fetching Low-Cost Intelligent Automation page...')

  // First, let's search for pages with "low-cost" or "intelligent automation" in the title or slug
  const query = `*[_type == "servicePage" && (
    title match "*Low*Cost*" ||
    title match "*Intelligent*Automation*" ||
    title match "*low-cost*" ||
    slug.current match "*low-cost*" ||
    slug.current match "*intelligent-automation*"
  )]{
    _id,
    _type,
    title,
    language,
    slug,
    parent,
    references,
    seo,
    heroSection,
    overview,
    approach,
    services,
    faq,
    testimonial
  }`

  try {
    const pages = await client.fetch(query)
    
    if (pages.length === 0) {
      console.log('No pages found with Low-Cost Intelligent Automation. Searching broader...')
      
      // Try broader search
      const broaderQuery = `*[_type == "servicePage" && (
        title match "*Automation*" ||
        title match "*Automatisierung*" ||
        slug.current match "*automation*"
      ) && language == "de"]{
        _id,
        title,
        slug
      }`
      
      const broaderPages = await client.fetch(broaderQuery)
      console.log('Found automation-related pages:')
      broaderPages.forEach((p: any) => {
        console.log(`  - ${p._id}: ${p.title} (${p.slug?.current})`)
      })
      return
    }

    console.log(`Found ${pages.length} page(s)`)
    
    pages.forEach((page: any) => {
      console.log(`\nPage: ${page._id}`)
      console.log(`Title: ${page.title}`)
      console.log(`Slug: ${page.slug?.current}`)
      console.log(`Language: ${page.language}`)
      console.log(`FAQs: ${page.faq?.length || 0}`)
      console.log(`Services: ${page.services?.length || 0}`)
    })

    // Save the first German page
    const germanPage = pages.find((p: any) => p.language === 'de') || pages[0]
    if (germanPage) {
      fs.writeFileSync(
        'low-cost-intelligent-automation-source.json',
        JSON.stringify(germanPage, null, 2)
      )
      console.log('\nSaved to low-cost-intelligent-automation-source.json')
    }
  } catch (error) {
    console.error('Error fetching:', error)
  }
}

fetchLowCostIntelligentAutomation()
