import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function checkPage() {
  console.log('Checking CRITIS Continuous Monitoring Incident Management English page...\n')
  
  const doc = await client.fetch(`*[_id == "kritis-kontinuierliche-ueberwachung-incident-management-en"][0]{
    _id,
    _type,
    title,
    language,
    __i18n_lang,
    "slug": slug.current,
    "parentRef": parent._ref,
    "topLevelParentRef": references.topLevelParent._ref,
    "baseRef": __i18n_base._ref,
    "seoTitle": seo.title,
    "heroTagline": heroSection.tagline,
    "benefitsCount": count(heroSection.benefits),
    "overviewPointsCount": count(overview.points),
    "servicePointsCount": count(overview.servicePoints),
    "whyUsPointsCount": count(overview.whyUs.points),
    "approachPointsCount": count(approach.points),
    "servicesCount": count(services),
    "faqCount": count(faq),
    "testimonialName": testimonial.name,
    "testimonialCompany": testimonial.company
  }`)
  
  if (!doc) {
    console.log('❌ Document not found!')
    return
  }
  
  console.log('✅ Document found!\n')
  console.log('='.repeat(60))
  console.log('DOCUMENT DETAILS')
  console.log('='.repeat(60))
  console.log(`ID: ${doc._id}`)
  console.log(`Type: ${doc._type}`)
  console.log(`Title: ${doc.title}`)
  console.log(`Language: ${doc.language}`)
  console.log(`__i18n_lang: ${doc.__i18n_lang}`)
  console.log(`Slug: ${doc.slug}`)
  console.log(`Parent Ref: ${doc.parentRef}`)
  console.log(`Top Level Parent Ref: ${doc.topLevelParentRef}`)
  console.log(`Base Ref (German): ${doc.baseRef}`)
  console.log(`SEO Title: ${doc.seoTitle}`)
  console.log(`Hero Tagline: ${doc.heroTagline}`)
  console.log('')
  console.log('='.repeat(60))
  console.log('CONTENT COUNTS')
  console.log('='.repeat(60))
  console.log(`Benefits: ${doc.benefitsCount}`)
  console.log(`Overview Points: ${doc.overviewPointsCount}`)
  console.log(`Service Points: ${doc.servicePointsCount}`)
  console.log(`Why Us Points: ${doc.whyUsPointsCount}`)
  console.log(`Approach Points: ${doc.approachPointsCount}`)
  console.log(`Services: ${doc.servicesCount}`)
  console.log(`FAQs: ${doc.faqCount}`)
  console.log('')
  console.log('='.repeat(60))
  console.log('TESTIMONIAL')
  console.log('='.repeat(60))
  console.log(`Name: ${doc.testimonialName}`)
  console.log(`Company: ${doc.testimonialCompany}`)
}

checkPage().catch(console.error)
