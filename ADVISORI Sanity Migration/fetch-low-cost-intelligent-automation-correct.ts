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

  const query = `*[_id == "low-cost-intelligent-automation"]{
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
  }[0]`

  try {
    const page = await client.fetch(query)
    
    if (!page) {
      console.log('Page not found')
      return
    }

    console.log(`\nPage: ${page._id}`)
    console.log(`Title: ${page.title}`)
    console.log(`Slug: ${page.slug?.current}`)
    console.log(`Language: ${page.language}`)
    console.log(`FAQs: ${page.faq?.length || 0}`)
    console.log(`Services: ${page.services?.length || 0}`)

    fs.writeFileSync(
      'low-cost-intelligent-automation-source.json',
      JSON.stringify(page, null, 2)
    )
    console.log('\nSaved to low-cost-intelligent-automation-source.json')
  } catch (error) {
    console.error('Error fetching:', error)
  }
}

fetchLowCostIntelligentAutomation()
