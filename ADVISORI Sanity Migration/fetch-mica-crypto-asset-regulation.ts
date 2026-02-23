import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function fetchMicaCryptoAssetRegulation() {
  console.log('Searching for MICA Crypto Asset Regulation page...')
  
  // Search for MICA Crypto Asset Regulation page
  const pages = await client.fetch(`*[_type == "servicePage" && (
    title match "*MICA*Crypto*Asset*Regulation*" ||
    title match "*MICA*Krypto*" ||
    slug.current match "*mica*crypto*asset*regulation*" ||
    slug.current match "*mica-regulation*"
  )]{
    _id,
    title,
    slug,
    language,
    __i18n_lang,
    "faqCount": count(faq)
  }`)
  
  console.log('Pages found:')
  console.log(JSON.stringify(pages, null, 2))
  
  if (pages.length > 0) {
    // Get full content of the first matching page
    const fullPage = await client.fetch(`*[_id == "${pages[0]._id}"][0]`)
    console.log('\n\nFull page content:')
    console.log(JSON.stringify(fullPage, null, 2))
  } else {
    // Try broader search
    console.log('\nNo exact match found. Trying broader search...')
    const broaderPages = await client.fetch(`*[_type == "servicePage" && slug.current match "*mica*"]{
      _id,
      title,
      slug,
      language,
      "faqCount": count(faq)
    }`)
    console.log('MICA-related pages:')
    console.log(JSON.stringify(broaderPages, null, 2))
  }
}

fetchMicaCryptoAssetRegulation()
  .then(() => console.log('\nFetch completed'))
  .catch(console.error)
