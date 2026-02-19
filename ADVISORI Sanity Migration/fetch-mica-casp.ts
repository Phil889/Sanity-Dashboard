import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function fetchMicaCasp() {
  // Search for MICA Crypto Asset Service Providers page
  const query = `*[_type == "servicePage" && (
    title match "*Crypto Asset Service*" ||
    title match "*CASP*" ||
    slug.current match "*crypto-asset-service*" ||
    slug.current match "*casp*"
  )] {
    _id,
    title,
    "slug": slug.current,
    language,
    __i18n_lang,
    "faqCount": count(faq)
  }`
  
  console.log('Searching for MICA Crypto Asset Service Providers page...')
  const pages = await client.fetch(query)
  
  if (pages.length === 0) {
    console.log('No pages found. Trying broader search...')
    
    // Broader search
    const broaderQuery = `*[_type == "servicePage" && slug.current match "*mica*"] {
      _id,
      title,
      "slug": slug.current,
      language,
      __i18n_lang,
      "faqCount": count(faq)
    }`
    
    const broaderPages = await client.fetch(broaderQuery)
    console.log('MICA pages found:')
    console.log(JSON.stringify(broaderPages, null, 2))
    return
  }
  
  console.log('Pages found:')
  console.log(JSON.stringify(pages, null, 2))
  
  // Get full content of the first matching page
  if (pages.length > 0) {
    const fullQuery = `*[_id == "${pages[0]._id}"][0]`
    const fullPage = await client.fetch(fullQuery)
    console.log('\n\nFull page content:')
    console.log(JSON.stringify(fullPage, null, 2))
  }
}

fetchMicaCasp()
