import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

async function fetchWindowsPki() {
  // Search for Windows PKI page
  const query = `*[_type == "servicePage" && _id == "windows-pki"][0] {
    _id,
    title,
    "slug": slug.current,
    language,
    __i18n_lang,
    "faqCount": count(faq),
    faq
  }`

  try {
    const page = await client.fetch(query)
    console.log('Windows PKI page:')
    console.log(JSON.stringify(page, null, 2))
    
    if (!page) {
      console.log('\nNo Windows PKI page found. Searching for similar pages...')
      
      // Try broader search
      const broaderQuery = `*[_type == "servicePage" && title match "*Windows*"] {
        _id,
        title,
        "slug": slug.current,
        language,
        __i18n_lang,
        "faqCount": count(faq)
      }`
      
      const broaderPages = await client.fetch(broaderQuery)
      console.log('Windows-related pages:')
      console.log(JSON.stringify(broaderPages, null, 2))
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

fetchWindowsPki()
