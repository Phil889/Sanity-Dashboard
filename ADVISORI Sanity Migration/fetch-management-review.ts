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

async function fetchManagementReview() {
  console.log('Fetching Management Review page...')
  
  // First, find the page by searching for management-review in slug or title
  const query = `*[_type == "servicePage" && (
    slug.current match "*management-review*" ||
    title match "*Management Review*" ||
    title match "*Management-Review*"
  ) && language == "de"][0]{
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
    faq,
    testimonial
  }`
  
  const page = await client.fetch(query)
  
  if (page) {
    console.log('Found page:', page._id)
    console.log('Title:', page.title)
    console.log('Slug:', page.slug?.current)
    console.log('FAQs:', page.faq?.length || 0)
    console.log('Services:', page.services?.length || 0)
    
    fs.writeFileSync(
      'management-review-source.json',
      JSON.stringify(page, null, 2)
    )
    console.log('Saved to management-review-source.json')
  } else {
    console.log('Page not found. Searching for similar pages...')
    
    // Search for pages with management in the title
    const searchQuery = `*[_type == "servicePage" && (
      title match "*Management*" ||
      slug.current match "*management*"
    ) && language == "de"]{
      _id,
      title,
      slug
    }`
    
    const pages = await client.fetch(searchQuery)
    console.log('Found pages with "management":')
    pages.forEach((p: any) => {
      console.log(`  - ${p._id}: ${p.title} (${p.slug?.current})`)
    })
  }
}

fetchManagementReview()
  .then(() => console.log('Done'))
  .catch(console.error)
