import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function fetchKritisKontinuierlicheUeberwachung() {
  // Search for all KRITIS pages to find the right one
  const query = `*[_type == "servicePage" && (
    slug.current match "*kritis*"
  ) && __i18n_lang == "de"]{
    _id,
    title,
    "slug": slug.current,
    __i18n_lang
  } | order(title asc)`

  console.log('Searching for KRITIS Kontinuierliche Überwachung Incident Management page...')
  const results = await client.fetch(query)
  
  console.log('\nFound pages:')
  results.forEach((page: any) => {
    console.log(`- ID: ${page._id}`)
    console.log(`  Title: ${page.title}`)
    console.log(`  Slug: ${page.slug}`)
    console.log(`  Language: ${page.__i18n_lang}`)
    console.log('')
  })
  
  return results
}

fetchKritisKontinuierlicheUeberwachung()
