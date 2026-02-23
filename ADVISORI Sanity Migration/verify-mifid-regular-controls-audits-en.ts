import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function verify() {
  const doc = await client.fetch(`*[_id == "mifid-regular-controls-audits-en"][0]{
    _id,
    title,
    "slug": slug.current,
    language,
    __i18n_lang,
    "faqCount": count(faq),
    "servicesCount": count(services),
    "hasHero": defined(heroSection),
    "hasOverview": defined(overview),
    "hasApproach": defined(approach),
    "hasTestimonial": defined(testimonial)
  }`)
  
  console.log(JSON.stringify(doc, null, 2))
}

verify()
