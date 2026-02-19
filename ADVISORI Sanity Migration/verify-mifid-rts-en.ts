import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function verifyMifidRtsEn() {
  console.log('Verifying MiFID RTS 27/28 EN page...')
  
  const doc = await client.fetch(`*[_id == "mifid-transparenz-berichtspflichten-rts-27-28-en"][0]{
    _id,
    title,
    language,
    "slug": slug.current,
    "faqCount": count(faq)
  }`)
  
  if (doc) {
    console.log('Document found:')
    console.log(JSON.stringify(doc, null, 2))
  } else {
    console.log('Document not found!')
  }
}

verifyMifidRtsEn().catch(console.error)
