import { createClient } from '@sanity/client'
import * as fs from 'fs'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01'
})

async function fetchManagementReportingPerformance() {
  console.log('Fetching Management Reporting & Performance page...')
  
  // Fetch by exact ID
  const query = `*[_id == "management-reporting-performance"][0]{
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
  
  const page = await client.fetch(query)
  
  if (page) {
    console.log('Found page:', page.title)
    console.log('ID:', page._id)
    console.log('FAQs:', page.faq?.length || 0)
    console.log('Services:', page.services?.length || 0)
    
    fs.writeFileSync(
      'management-reporting-performance-source.json',
      JSON.stringify(page, null, 2)
    )
    console.log('Saved to management-reporting-performance-source.json')
  } else {
    console.log('Page not found with ID "management-reporting-performance"')
    console.log('Searching for similar pages...')
    
    const searchQuery = `*[_type == "servicePage" && (
      title match "*Management Reporting*" ||
      title match "*Performance*" ||
      slug.current match "*management-reporting*" ||
      slug.current match "*performance*"
    )]{
      _id,
      title,
      "slug": slug.current
    }`
    
    const results = await client.fetch(searchQuery)
    console.log('Similar pages found:', results)
  }
}

fetchManagementReportingPerformance()
  .then(() => console.log('Done'))
  .catch(console.error)
