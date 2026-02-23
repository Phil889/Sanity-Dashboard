import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function search() {
  // Search for KRITIS pages with Tests or Audits
  const pages = await client.fetch(`*[_type == 'servicePage' && (title match '*Tests*' || title match '*Audits*' || title match '*Prüfung*' || _id match '*tests*' || _id match '*audits*')]{
    _id,
    title,
    slug
  }`)
  console.log('Found pages with Tests/Audits:')
  pages.forEach((p: any) => console.log(`- ${p._id}: ${p.title}`))
  
  // Also search for all KRITIS ongoing compliance children
  console.log('\n\nSearching for KRITIS ongoing compliance children...')
  const kritisPages = await client.fetch(`*[_type == 'servicePage' && parent._ref == 'kritis-ongoing-compliance']{
    _id,
    title,
    slug
  }`)
  console.log('KRITIS Ongoing Compliance children:')
  kritisPages.forEach((p: any) => console.log(`- ${p._id}: ${p.title}`))
}

search()
