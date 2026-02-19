import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  useCdn: false,
})

async function fetchMifidDataReportingServices() {
  // Search for MiFID Data Reporting Services page
  const query = `*[_type == "servicePage" && (
    title match "*Data Reporting*" ||
    title match "*Datenberichterstattung*" ||
    slug.current match "*data-reporting*" ||
    slug.current match "*datenberichterstattung*"
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

fetchMifidDataReportingServices()
