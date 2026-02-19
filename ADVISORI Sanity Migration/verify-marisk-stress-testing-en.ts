import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function verify() {
  const page = await client.fetch(`*[_id == 'marisk-stress-testing-en'][0]{
    _id,
    title,
    language,
    __i18n_lang,
    'slug': slug.current,
    'heroHeading': heroSection.heading,
    'heroTagline': heroSection.tagline,
    'heroDescription': coalesce(heroSection.description, 'MISSING'),
    'heroBenefits': count(heroSection.benefits),
    'overviewHeading': overview.heading,
    'overviewDescription': coalesce(overview.description, 'MISSING'),
    'overviewAdditionalInfo': coalesce(overview.additionalInfo, 'MISSING'),
    'overviewAlertTitle': overview.alert.title,
    'overviewAlertContent': coalesce(overview.alert.content, 'MISSING'),
    'overviewPoints': count(overview.points),
    'overviewServiceDescription': coalesce(overview.serviceDescription, 'MISSING'),
    'overviewServicePoints': count(overview.servicePoints),
    'overviewWhyUsTitle': overview.whyUs.title,
    'overviewWhyUsPoints': count(overview.whyUs.points),
    'approachTitle': approach.title,
    'approachDescription': coalesce(approach.description, 'MISSING'),
    'approachPoints': count(approach.points),
    'servicesCount': count(services),
    'faqCount': count(faq),
    'testimonialQuote': coalesce(testimonial.quote, 'MISSING'),
    'testimonialName': testimonial.name,
    'testimonialPosition': testimonial.position,
    'testimonialCompany': testimonial.company,
    'seoTitle': seo.title,
    'seoDescription': coalesce(seo.description, 'MISSING'),
    'seoKeywords': seo.keywords
  }`)
  
  console.log('=== MaRisk Stress Testing EN Page Verification ===')
  console.log('ID:', page._id)
  console.log('Title:', page.title)
  console.log('Language:', page.language)
  console.log('i18n Lang:', page.__i18n_lang)
  console.log('Slug:', page.slug)
  console.log('')
  console.log('=== Hero Section ===')
  console.log('Heading:', page.heroHeading)
  console.log('Tagline:', page.heroTagline)
  console.log('Description:', page.heroDescription?.substring(0, 100) + '...')
  console.log('Benefits count:', page.heroBenefits)
  console.log('')
  console.log('=== Overview Section ===')
  console.log('Heading:', page.overviewHeading)
  console.log('Description:', page.overviewDescription?.substring(0, 80) + '...')
  console.log('Additional Info:', page.overviewAdditionalInfo?.substring(0, 80) + '...')
  console.log('Alert Title:', page.overviewAlertTitle)
  console.log('Alert Content:', page.overviewAlertContent?.substring(0, 80) + '...')
  console.log('Points count:', page.overviewPoints)
  console.log('Service Description:', page.overviewServiceDescription?.substring(0, 80) + '...')
  console.log('Service Points count:', page.overviewServicePoints)
  console.log('Why Us Title:', page.overviewWhyUsTitle)
  console.log('Why Us Points count:', page.overviewWhyUsPoints)
  console.log('')
  console.log('=== Approach Section ===')
  console.log('Title:', page.approachTitle)
  console.log('Description:', page.approachDescription?.substring(0, 80) + '...')
  console.log('Points count:', page.approachPoints)
  console.log('')
  console.log('=== Services ===')
  console.log('Services count:', page.servicesCount)
  console.log('')
  console.log('=== FAQs ===')
  console.log('FAQ count:', page.faqCount)
  console.log('')
  console.log('=== Testimonial ===')
  console.log('Quote:', page.testimonialQuote?.substring(0, 80) + '...')
  console.log('Name:', page.testimonialName)
  console.log('Position:', page.testimonialPosition)
  console.log('Company:', page.testimonialCompany)
  console.log('')
  console.log('=== SEO ===')
  console.log('Title:', page.seoTitle)
  console.log('Description:', page.seoDescription?.substring(0, 80) + '...')
  console.log('Keywords:', page.seoKeywords)
  
  // Check for any missing sections
  console.log('')
  console.log('=== VALIDATION ===')
  const issues: string[] = []
  
  if (page.language !== 'en') issues.push('Language is not "en"')
  if (page.__i18n_lang !== 'en') issues.push('__i18n_lang is not "en"')
  if (!page.heroHeading) issues.push('Hero heading missing')
  if (!page.heroTagline) issues.push('Hero tagline missing')
  if (page.heroDescription === 'MISSING') issues.push('Hero description missing')
  if (page.heroBenefits !== 4) issues.push(`Hero benefits: expected 4, got ${page.heroBenefits}`)
  if (!page.overviewHeading) issues.push('Overview heading missing')
  if (page.overviewDescription === 'MISSING') issues.push('Overview description missing')
  if (page.overviewAdditionalInfo === 'MISSING') issues.push('Overview additionalInfo missing')
  if (!page.overviewAlertTitle) issues.push('Overview alert title missing')
  if (page.overviewAlertContent === 'MISSING') issues.push('Overview alert content missing')
  if (page.overviewPoints !== 5) issues.push(`Overview points: expected 5, got ${page.overviewPoints}`)
  if (page.overviewServiceDescription === 'MISSING') issues.push('Overview serviceDescription missing')
  if (page.overviewServicePoints !== 5) issues.push(`Overview servicePoints: expected 5, got ${page.overviewServicePoints}`)
  if (!page.overviewWhyUsTitle) issues.push('Overview whyUs title missing')
  if (page.overviewWhyUsPoints !== 4) issues.push(`Overview whyUs points: expected 4, got ${page.overviewWhyUsPoints}`)
  if (!page.approachTitle) issues.push('Approach title missing')
  if (page.approachDescription === 'MISSING') issues.push('Approach description missing')
  if (page.approachPoints !== 5) issues.push(`Approach points: expected 5, got ${page.approachPoints}`)
  if (page.servicesCount !== 6) issues.push(`Services: expected 6, got ${page.servicesCount}`)
  if (page.faqCount !== 20) issues.push(`FAQs: expected 20, got ${page.faqCount}`)
  if (page.testimonialQuote === 'MISSING') issues.push('Testimonial quote missing')
  if (!page.testimonialName) issues.push('Testimonial name missing')
  if (!page.testimonialPosition) issues.push('Testimonial position missing')
  if (!page.testimonialCompany) issues.push('Testimonial company missing')
  if (!page.seoTitle) issues.push('SEO title missing')
  if (page.seoDescription === 'MISSING') issues.push('SEO description missing')
  
  if (issues.length === 0) {
    console.log('✅ ALL SECTIONS COMPLETE - No issues found!')
  } else {
    console.log('❌ Issues found:')
    issues.forEach(issue => console.log('  -', issue))
  }
}

verify()
