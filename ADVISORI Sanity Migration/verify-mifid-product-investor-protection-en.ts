import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function verifyMifidProductInvestorProtectionEn() {
  console.log('Verifying MiFID Product Investor Protection EN page...\n')
  
  try {
    const doc = await client.fetch(`*[_id == "mifid-product-investor-protection-en"][0]{
      _id,
      title,
      language,
      __i18n_lang,
      "faqCount": count(faq),
      "servicesCount": count(services),
      "hasHeroSection": defined(heroSection),
      "hasOverview": defined(overview),
      "hasApproach": defined(approach),
      "hasTestimonial": defined(testimonial),
      "hasSeo": defined(seo),
      "slug": slug.current
    }`)
    
    if (!doc) {
      console.error('ERROR: Document not found!')
      return
    }
    
    console.log('Document found:')
    console.log(JSON.stringify(doc, null, 2))
    
    // Validation checks
    const issues = []
    
    if (doc.language !== 'en') issues.push('Language should be "en"')
    if (doc.__i18n_lang !== 'en') issues.push('__i18n_lang should be "en"')
    if (doc.faqCount !== 20) issues.push(`FAQ count should be 20, got ${doc.faqCount}`)
    if (doc.servicesCount !== 2) issues.push(`Services count should be 2, got ${doc.servicesCount}`)
    if (!doc.hasHeroSection) issues.push('Missing heroSection')
    if (!doc.hasOverview) issues.push('Missing overview')
    if (!doc.hasApproach) issues.push('Missing approach')
    if (!doc.hasTestimonial) issues.push('Missing testimonial')
    if (!doc.hasSeo) issues.push('Missing seo')
    if (!doc.slug?.endsWith('-en')) issues.push('Slug should end with -en')
    
    if (issues.length > 0) {
      console.log('\n⚠️ Issues found:')
      issues.forEach(issue => console.log(`  - ${issue}`))
    } else {
      console.log('\n✅ All validations passed!')
    }
    
  } catch (error) {
    console.error('Verification failed:', error)
    throw error
  }
}

verifyMifidProductInvestorProtectionEn()
