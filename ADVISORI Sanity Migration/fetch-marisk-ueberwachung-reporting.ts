import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import * as fs from 'fs'

dotenv.config()

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function fetchMariskUeberwachungReporting() {
  console.log('Searching for MaRisk Überwachung & Reporting page...\n')
  
  // Search for pages with MaRisk in title
  const searchQuery = `*[_type == "servicePage" && (title match "*MaRisk*" || title match "*Überwachung*" || title match "*Reporting*")]{
    _id,
    title,
    language,
    slug,
    "faqCount": count(faq)
  }`
  
  const pages = await client.fetch(searchQuery)
  
  console.log('Found pages:')
  pages.forEach((p: any) => {
    console.log(`- ${p.title} (${p._id}) - ${p.faqCount} FAQs - lang: ${p.language}`)
  })
  
  // Try to find the exact page
  const exactQuery = `*[_type == "servicePage" && title match "*MaRisk*" && title match "*Überwachung*"][0]{
    _id,
    _type,
    title,
    language,
    slug,
    seo,
    heroSection,
    overview,
    approach,
    services,
    faq,
    testimonial,
    parent,
    references
  }`
  
  const page = await client.fetch(exactQuery)
  
  if (page) {
    console.log('\n=== Found exact page ===')
    console.log('Title:', page.title)
    console.log('ID:', page._id)
    console.log('Language:', page.language)
    console.log('Slug:', page.slug?.current)
    console.log('FAQ count:', page.faq?.length || 0)
    
    // Save to file for reference
    fs.writeFileSync(
      'marisk-ueberwachung-reporting-source.json',
      JSON.stringify(page, null, 2)
    )
    console.log('\nSaved to marisk-ueberwachung-reporting-source.json')
    
    // Print FAQs
    if (page.faq && page.faq.length > 0) {
      console.log('\n=== FAQs ===')
      page.faq.forEach((faq: any, index: number) => {
        console.log(`\nFAQ ${index + 1}:`)
        console.log('Q:', faq.question)
        console.log('A:', faq.answer?.substring(0, 200) + '...')
      })
    }
  } else {
    console.log('\nExact page not found. Trying alternative search...')
    
    // Try searching by slug
    const slugQuery = `*[_type == "servicePage" && slug.current match "*marisk*"][0]{
      _id,
      _type,
      title,
      language,
      slug,
      seo,
      heroSection,
      overview,
      approach,
      services,
      faq,
      testimonial,
      parent,
      references
    }`
    
    const slugPage = await client.fetch(slugQuery)
    
    if (slugPage) {
      console.log('\n=== Found page by slug ===')
      console.log('Title:', slugPage.title)
      console.log('ID:', slugPage._id)
      console.log('Language:', slugPage.language)
      console.log('Slug:', slugPage.slug?.current)
      console.log('FAQ count:', slugPage.faq?.length || 0)
      
      fs.writeFileSync(
        'marisk-ueberwachung-reporting-source.json',
        JSON.stringify(slugPage, null, 2)
      )
      console.log('\nSaved to marisk-ueberwachung-reporting-source.json')
    }
  }
}

fetchMariskUeberwachungReporting()
  .then(() => {
    console.log('\nDone!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Error:', error)
    process.exit(1)
  })
