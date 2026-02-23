import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function verifyMifidPositionLimitsEn() {
  console.log('Verifying MiFID Position Limits EN page...')
  
  const query = `*[_id == "mifid-position-limits-en"][0]{
    _id,
    title,
    language,
    __i18n_lang,
    "faqCount": count(faq),
    "servicesCount": count(services),
    "slug": slug.current,
    "hasHeroSection": defined(heroSection),
    "hasOverview": defined(overview),
    "hasApproach": defined(approach),
    "hasTestimonial": defined(testimonial),
    "hasSeo": defined(seo),
    "hasI18nBase": defined(__i18n_base)
  }`
  
  const result = await client.fetch(query)
  
  if (result) {
    console.log('\n✅ Verification successful!')
    console.log(JSON.stringify(result, null, 2))
  } else {
    console.log('\n❌ Document not found!')
  }
}

verifyMifidPositionLimitsEn()
