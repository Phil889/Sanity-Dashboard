import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function checkKritisOngoingComplianceEn() {
  const page = await client.fetch(`*[_id == 'kritis-ongoing-compliance-en'][0]{
    _id,
    _type,
    title,
    language,
    __i18n_lang,
    'slug': slug.current,
    'faqCount': count(faq),
    'servicesCount': count(services),
    'hasHero': defined(heroSection),
    'hasOverview': defined(overview),
    'hasApproach': defined(approach),
    'hasTestimonial': defined(testimonial)
  }`)
  
  console.log('KRITIS Ongoing Compliance EN Page:')
  console.log(JSON.stringify(page, null, 2))
}

checkKritisOngoingComplianceEn()
