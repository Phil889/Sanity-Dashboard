import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  useCdn: false,
})

async function fetchMifidEsgIntegration() {
  // Search for MiFID ESG Integration document
  const query = `*[_type == "servicePage" && (
    title match "*ESG*" || 
    title match "*Nachhaltigkeits*" ||
    slug.current match "*esg*"
  ) && language == "de"]{
    _id,
    title,
    "slug": slug.current,
    language,
    "parentRef": parent._ref,
    "faqCount": count(faq),
    "serviceCount": count(services)
  }`
  
  const results = await client.fetch(query)
  console.log('MiFID ESG Integration search results:')
  console.log(JSON.stringify(results, null, 2))
}

fetchMifidEsgIntegration()
