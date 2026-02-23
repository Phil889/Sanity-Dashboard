import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import * as fs from 'fs'

dotenv.config()

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
})

async function fetchLogManagement() {
  console.log('Fetching Log Management page...')
  
  // First try to find by slug containing log-management
  const query = `*[_type == "servicePage" && (
    _id == "log-management" ||
    slug.current match "*log-management*" ||
    title match "*Log Management*" ||
    title match "*Log-Management*"
  ) && language == "de"][0]`
  
  const page = await client.fetch(query)
  
  if (page) {
    console.log('Found page:', page._id)
    console.log('Title:', page.title)
    console.log('Slug:', page.slug?.current)
    console.log('FAQ count:', page.faq?.length || 0)
    console.log('Services count:', page.services?.length || 0)
    
    // Save to file
    fs.writeFileSync(
      'log-management-source.json',
      JSON.stringify(page, null, 2)
    )
    console.log('Saved to log-management-source.json')
  } else {
    console.log('Page not found, searching for similar pages...')
    
    // Search for pages with "log" in title or slug
    const searchQuery = `*[_type == "servicePage" && (
      title match "*Log*" ||
      slug.current match "*log*"
    ) && language == "de"] {
      _id,
      title,
      "slug": slug.current,
      "faqCount": count(faq)
    }`
    
    const results = await client.fetch(searchQuery)
    console.log('Found pages with "log":', results)
  }
}

fetchLogManagement()
  .then(() => console.log('Done'))
  .catch(console.error)
