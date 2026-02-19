import { createClient } from '@sanity/client'
import * as fs from 'fs'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function fetchMariskReadiness() {
  console.log('Fetching MaRisk Readiness page by ID...')
  
  // Fetch the specific MaRisk Readiness page by its known ID
  const fullPage = await client.fetch(`
    *[_id == "marisk-readiness"][0] {
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
  `)
  
  if (fullPage) {
    fs.writeFileSync(
      'marisk-readiness-source.json',
      JSON.stringify(fullPage, null, 2)
    )
    console.log('\nSaved to marisk-readiness-source.json')
    console.log('Title:', fullPage.title)
    console.log('Slug:', fullPage.slug?.current)
    console.log('FAQ count:', fullPage.faq?.length || 0)
    console.log('Services count:', fullPage.services?.length || 0)
  } else {
    console.log('Page not found!')
  }
}

fetchMariskReadiness().catch(console.error)
