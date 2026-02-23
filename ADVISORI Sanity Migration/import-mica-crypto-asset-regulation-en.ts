import 'dotenv/config'
// Import script for MICA Crypto Asset Regulation - English Translation
// Source: mica-crypto-asset-regulation (German)
// Target: mica-crypto-asset-regulation-en (English)

import { createClient } from '@sanity/client'
import { micaCryptoAssetRegulationEnFaqsBatch1 } from './mica-crypto-asset-regulation-en-faqs-batch1'
import { micaCryptoAssetRegulationEnFaqsBatch2 } from './mica-crypto-asset-regulation-en-faqs-batch2'
import { micaCryptoAssetRegulationEnFaqsBatch3 } from './mica-crypto-asset-regulation-en-faqs-batch3'
import { micaCryptoAssetRegulationEnFaqsBatch4 } from './mica-crypto-asset-regulation-en-faqs-batch4'
import { micaCryptoAssetRegulationEnFaqsBatch5 } from './mica-crypto-asset-regulation-en-faqs-batch5'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Combine all FAQ batches (20 unique FAQs)
const allFaqs = [
  ...micaCryptoAssetRegulationEnFaqsBatch1,
  ...micaCryptoAssetRegulationEnFaqsBatch2,
  ...micaCryptoAssetRegulationEnFaqsBatch3,
  ...micaCryptoAssetRegulationEnFaqsBatch4,
  ...micaCryptoAssetRegulationEnFaqsBatch5,
]

// English translation of MICA Crypto Asset Regulation page
const micaCryptoAssetRegulationEnPage = {
  _id: 'mica-crypto-asset-regulation-en',
  _type: 'servicePage',
  title: 'MICA Crypto Asset Regulation',
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/mica-crypto-asset-regulation-en'
  },
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'mica-crypto-asset-regulation'
  },
  parent: {
    _type: 'reference',
    _ref: 'regulatory-compliance-management'
  },
  references: {
    _type: 'object',
    topLevelParent: {
      _type: 'reference',
      _ref: 'regulatory-compliance-management'
    }
  },
  seo: {
    _type: 'seo',
    title: 'MICA Crypto Asset Regulation Services | ADVISORI',
    description: 'Comprehensive MICA compliance services for Crypto Asset Service Providers. Strategic consulting for CASP authorization, stablecoin regulation, and market abuse prevention under the EU Markets in Crypto-Assets Regulation.',
    keywords: 'MICA Regulation, Crypto Asset Service Provider, CASP Authorization, Stablecoin Regulation, Crypto Asset Compliance, EU Crypto Regulation, MiCA Compliance, Digital Asset Regulation'
  },
  heroSection: {
    _type: 'object',
    heading: 'MICA Crypto Asset Regulation',
    tagline: 'Strategic MICA Compliance Excellence for the Future of Crypto Asset Markets',
    description: 'The Markets in Crypto-Assets Regulation (MICA) revolutionizes the European crypto asset landscape and creates unified regulatory standards for digital assets. As a groundbreaking EU regulation, MICA establishes comprehensive compliance requirements for Crypto Asset Service Providers, stablecoin issuers, and market participants. We support companies in strategic MICA implementation through tailored compliance frameworks, innovative RegTech solutions, and future-proof authorization strategies for sustainable crypto asset excellence.',
    heroImage: {
      _type: 'image',
      alt: 'MICA Crypto Asset Regulation Services'
    },
    benefits: [
      {
        _key: `benefit_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Comprehensive CASP authorization consulting for MICA-compliant market positioning'
      },
      {
        _key: `benefit_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Innovative stablecoin compliance frameworks for regulatory security'
      },
      {
        _key: `benefit_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Strategic market abuse prevention and consumer protection excellence'
      },
      {
        _key: `benefit_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Future-proof MICA implementation strategies for competitive advantages'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'MICA as a Strategic Game Changer for European Crypto Asset Markets',
    description: 'The Markets in Crypto-Assets Regulation transforms the European crypto asset industry through unified regulatory standards and creates new opportunities for compliant market participants. MICA establishes clear rules for Crypto Asset Service Providers, stablecoin issuers, and market infrastructures, while simultaneously promoting innovation and consumer protection. Our MICA compliance services combine deep regulatory expertise with practical implementation experience for sustainable crypto asset success and strategic market leadership.',
    alert: {
      _type: 'object',
      title: 'MICA Revolution in the Crypto Asset Sector',
      content: 'MICA creates not only regulatory clarity but also enables strategic market differentiation and competitive advantages for early adopters. Proactive MICA compliance becomes the decisive success factor for sustainable crypto asset leadership.'
    },
    additionalInfo: 'Successful MICA compliance requires more than regulatory adaptation – it needs strategic vision, technical innovation, and cultural transformation. Our holistic approach ensures sustainable crypto asset success.',
    serviceDescription: 'We offer comprehensive MICA compliance services from strategic consulting to operational implementation. Our crypto asset regulatory expertise helps companies optimally leverage the opportunities of the MICA revolution.',
    points: [
      {
        _key: `point_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Comprehensive CASP authorization strategies for successful MICA compliance'
      },
      {
        _key: `point_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Innovative stablecoin regulatory frameworks for E-Money Token excellence'
      },
      {
        _key: `point_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Strategic market abuse prevention for crypto asset market integrity'
      },
      {
        _key: `point_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Advanced consumer protection mechanisms for consumer security'
      },
      {
        _key: `point_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Continuous MICA optimization and regulatory change management'
      }
    ],
    servicePoints: [
      {
        _key: `servicePoint_en_${Date.now()}_1`,
        _type: 'object',
        text: 'CASP authorization consulting and licensing strategies for MICA compliance'
      },
      {
        _key: `servicePoint_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Stablecoin compliance framework design for E-Money Token regulation'
      },
      {
        _key: `servicePoint_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Market abuse prevention and consumer protection implementation'
      },
      {
        _key: `servicePoint_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Operational resilience and risk management for crypto asset services'
      },
      {
        _key: `servicePoint_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Continuous MICA optimization and regulatory change management'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our MICA Compliance Expertise',
      points: [
        {
          _key: `whyUs_en_${Date.now()}_1`,
          _type: 'object',
          text: 'Leading MICA regulatory expertise and crypto asset compliance specialization'
        },
        {
          _key: `whyUs_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Proven experience in CASP authorization and stablecoin regulation'
        },
        {
          _key: `whyUs_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Innovative RegTech solutions for automated MICA compliance'
        },
        {
          _key: `whyUs_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Holistic consulting approaches for sustainable crypto asset excellence'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Strategic MICA Compliance Development Approach',
    description: 'We develop together with you a tailored MICA compliance strategy that not only meets regulatory requirements but also identifies strategic opportunities and creates sustainable competitive advantages.',
    points: [
      {
        _key: `approach_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Comprehensive MICA readiness assessment and current-state analysis'
      },
      {
        _key: `approach_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Strategic compliance framework design with focus on CASP excellence'
      },
      {
        _key: `approach_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Agile implementation with continuous stakeholder engagement'
      },
      {
        _key: `approach_en_${Date.now()}_4`,
        _type: 'object',
        text: 'RegTech integration with modern crypto asset compliance solutions'
      },
      {
        _key: `approach_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Continuous MICA optimization and performance monitoring'
      }
    ]
  },
  services: [
    {
      _key: `service_en_${Date.now()}_1`,
      _type: 'object',
      title: 'CASP Authorization Excellence',
      description: 'Comprehensive consulting for Crypto Asset Service Provider authorization under MICA with focus on regulatory excellence and strategic market positioning.',
      features: [
        {
          _key: `feature_en_${Date.now()}_1`,
          _type: 'object',
          text: 'Strategic CASP licensing consulting'
        },
        {
          _key: `feature_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Compliance framework implementation'
        },
        {
          _key: `feature_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Operational resilience design'
        },
        {
          _key: `feature_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Continuous compliance monitoring'
        }
      ]
    }
  ],
  faq: allFaqs,
  testimonial: {
    _type: 'object',
    quote: 'The Markets in Crypto-Assets Regulation marks a turning point for the European crypto asset industry and creates unified regulatory standards that both promote innovation and ensure consumer protection. MICA compliance is not only a regulatory necessity but a strategic enabler for market differentiation and sustainable growth. Our MICA expertise combines deep regulatory knowledge with practical implementation experience to optimally prepare crypto asset companies for the new regulatory landscape and create competitive advantages.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI FTC GmbH',
    author: 'Asan Stefanski'
  }
}

async function importMicaCryptoAssetRegulationEn() {
  console.log('Starting import of MICA Crypto Asset Regulation English page...')
  console.log(`Total FAQs to import: ${allFaqs.length}`)
  
  try {
    // Check if document already exists
    const existing = await client.fetch(`*[_id == "mica-crypto-asset-regulation-en"][0]`)
    
    if (existing) {
      console.log('Document already exists. Updating...')
      const result = await client.createOrReplace(micaCryptoAssetRegulationEnPage)
      console.log('Document updated successfully:', result._id)
    } else {
      console.log('Creating new document...')
      const result = await client.create(micaCryptoAssetRegulationEnPage)
      console.log('Document created successfully:', result._id)
    }
    
    // Verify the import
    const verification = await client.fetch(`*[_id == "mica-crypto-asset-regulation-en"]{
      _id,
      title,
      language,
      "faqCount": count(faq)
    }[0]`)
    
    console.log('\nVerification:')
    console.log(JSON.stringify(verification, null, 2))
    
  } catch (error) {
    console.error('Import failed:', error)
    throw error
  }
}

importMicaCryptoAssetRegulationEn()
  .then(() => console.log('\nImport completed successfully!'))
  .catch((error) => {
    console.error('Import failed:', error)
    process.exit(1)
  })
