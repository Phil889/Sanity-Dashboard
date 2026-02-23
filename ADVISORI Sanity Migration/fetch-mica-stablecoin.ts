import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

async function fetchMicaStablecoin() {
  // Search for MICA Stablecoin Requirements page
  const query = `*[_type == "servicePage" && (
    title match "*MICA*" || 
    title match "*Stablecoin*" ||
    title match "*MiCA*" ||
    slug.current match "*mica*" ||
    slug.current match "*stablecoin*"
  )] {
    _id,
    title,
    "slug": slug.current,
    language,
    __i18n_lang,
    "faqCount": count(faq),
    faq,
    approach,
    heroSection,
    overview,
    services,
    testimonial,
    seo
  }`

  try {
    const pages = await client.fetch(query)
    console.log('MICA/Stablecoin pages found:')
    console.log(JSON.stringify(pages, null, 2))
    
    if (pages.length === 0) {
      console.log('\nNo MICA pages found. Searching broader...')
      
      // Try broader search for crypto-related pages
      const broaderQuery = `*[_type == "servicePage" && (
        title match "*Crypto*" || 
        title match "*Krypto*" ||
        title match "*Token*"
      )] {
        _id,
        title,
        "slug": slug.current,
        language,
        __i18n_lang,
        "faqCount": count(faq)
      }`
      
      const broaderPages = await client.fetch(broaderQuery)
      console.log('Crypto-related pages:')
      console.log(JSON.stringify(broaderPages, null, 2))
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

fetchMicaStablecoin()
