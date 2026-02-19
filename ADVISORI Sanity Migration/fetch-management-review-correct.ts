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
  console.log('Fetching Management Review page by ID...')
  
  // Fetch by exact ID
  const query = `*[_id == "management-review"][0]{
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
      'management-review-source-correct.json',
      JSON.stringify(page, null, 2)
    )
    console.log('Saved to management-review-source-correct.json')
  } else {
    console.log('Page not found with ID management-review')
  }
}

fetchManagementReview()
  .then(() => console.log('Done'))
  .catch(console.error)
