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

async function fetchKritisTestsAudits() {
  console.log('Fetching KRITIS Regelmäßige Tests & Audits page...')
  
  const fullPage = await client.fetch(`*[_id == "kritis-regelmaessige-tests-audits"][0]{
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
    parent->{_id, title},
    "parentTitle": parent->title,
    references
  }`)
  
  console.log('\nFull page data:')
  console.log('ID:', fullPage._id)
  console.log('Title:', fullPage.title)
  console.log('Type:', fullPage._type)
  console.log('Language:', fullPage.language)
  console.log('Slug:', fullPage.slug?.current)
  console.log('Parent:', fullPage.parentTitle)
  console.log('FAQ count:', fullPage.faq?.length || 0)
  console.log('Services count:', fullPage.services?.length || 0)
  
  // Save to file
  fs.writeFileSync('../kritis-tests-audits-source.json', JSON.stringify(fullPage, null, 2))
  console.log('\nSaved to kritis-tests-audits-source.json')
}

fetchKritisTestsAudits()
