import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

async function fetchPkiPages() {
  // Search for all PKI-related pages
  const query = `*[_type == "page" && (
    title match "*PKI*" || 
    title match "*pki*" ||
    slug.current match "*pki*"
  )] {
    _id,
    title,
    "slug": slug.current,
    language,
    __i18n_lang,
    "faqCount": count(faq)
  }`

  try {
    const pages = await client.fetch(query)
    console.log('PKI-related pages found:')
    console.log(JSON.stringify(pages, null, 2))
    
    if (pages.length === 0) {
      console.log('\nNo PKI pages found. Searching broader...')
      
      // Try broader search
      const broaderQuery = `*[_type == "page" && (
        title match "*Zertifikat*" || 
        title match "*Certificate*" ||
        title match "*Encryption*" ||
        title match "*Verschlüsselung*"
      )] {
        _id,
        title,
        "slug": slug.current,
        language,
        __i18n_lang,
        "faqCount": count(faq)
      }`
      
      const broaderPages = await client.fetch(broaderQuery)
      console.log('Broader search results:')
      console.log(JSON.stringify(broaderPages, null, 2))
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

fetchPkiPages()
