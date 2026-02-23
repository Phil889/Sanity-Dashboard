import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  useCdn: false,
})

async function fetchMifidDeutscheImplementation() {
  // Search for MiFID Deutsche Implementation page
  const query = `*[_type == "servicePage" && (
    title match "*Deutsche*Implementation*" ||
    title match "*BaFin*" ||
    title match "*WpHG*" ||
    slug.current match "*deutsche*implementation*" ||
    slug.current match "*bafin*" ||
    slug.current match "*wphg*"
  )]{
    _id,
    title,
    "slug": slug.current,
    "faqCount": count(faq),
    "servicesCount": count(services),
    "parent": parent->slug.current
  }`
  
  const results = await client.fetch(query)
  console.log('Search results:', JSON.stringify(results, null, 2))
}

fetchMifidDeutscheImplementation()
