import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function checkKritisNotfallkonzepteEn() {
  console.log('Checking KRITIS Notfallkonzepte & Ressourcenplanung EN page...\n')
  
  const page = await client.fetch(`*[_id == 'kritis-notfallkonzepte-ressourcenplanung-en'][0]{
    _id,
    title,
    language,
    __i18n_lang,
    "faqCount": count(faq),
    "servicesCount": count(services),
    "slug": slug.current,
    "seoTitle": seo.title
  }`)
  
  if (page) {
    console.log('✅ Page found!')
    console.log('ID:', page._id)
    console.log('Title:', page.title)
    console.log('Language:', page.language)
    console.log('i18n Lang:', page.__i18n_lang)
    console.log('Slug:', page.slug)
    console.log('SEO Title:', page.seoTitle)
    console.log('FAQ Count:', page.faqCount)
    console.log('Services Count:', page.servicesCount)
  } else {
    console.log('❌ Page not found!')
  }
}

checkKritisNotfallkonzepteEn().catch(console.error)
