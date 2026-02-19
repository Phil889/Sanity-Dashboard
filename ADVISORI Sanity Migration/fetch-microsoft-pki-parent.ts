import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

async function fetchMicrosoftPkiParent() {
  // Search for Microsoft PKI parent page
  const query = `*[_type == "servicePage" && _id == "microsoft-pki"][0] {
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
    const page = await client.fetch(query)
    console.log('Microsoft PKI parent page:')
    console.log(JSON.stringify(page, null, 2))
    
    if (!page) {
      console.log('\nNo Microsoft PKI parent page found.')
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

fetchMicrosoftPkiParent()
