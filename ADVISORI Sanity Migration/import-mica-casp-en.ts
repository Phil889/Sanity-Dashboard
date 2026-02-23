import 'dotenv/config'
// Import script for MICA Crypto Asset Service Providers - English Translation
// Source: mica-crypto-asset-service-providers (German)
// Target: mica-crypto-asset-service-providers-en (English)

import { createClient } from '@sanity/client'
import { micaCaspEnFaqsBatch1 } from './mica-casp-en-faqs-batch1'
import { micaCaspEnFaqsBatch2 } from './mica-casp-en-faqs-batch2'
import { micaCaspEnFaqsBatch3 } from './mica-casp-en-faqs-batch3'
import { micaCaspEnFaqsBatch4 } from './mica-casp-en-faqs-batch4'
import { micaCaspEnFaqsBatch5 } from './mica-casp-en-faqs-batch5'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Combine all FAQ batches
const allFaqs = [
  ...micaCaspEnFaqsBatch1,
  ...micaCaspEnFaqsBatch2,
  ...micaCaspEnFaqsBatch3,
  ...micaCaspEnFaqsBatch4,
  ...micaCaspEnFaqsBatch5,
]

// English translation of MICA Crypto Asset Service Providers page
const micaCaspEnPage = {
  _id: 'mica-crypto-asset-service-providers-en',
  _type: 'servicePage',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'mica-crypto-asset-service-providers'
  },
  title: 'MICA Crypto Asset Service Providers',
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/mica/mica-crypto-asset-service-providers-en'
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
    title: 'MICA Crypto Asset Service Providers (CASP) Compliance | ADVISORI',
    description: 'Specialized MICA CASP authorization and compliance services for Crypto Asset Service Providers. Comprehensive consulting for CASP licensing, operational resilience, custody requirements, and market abuse prevention under MICA.',
    keywords: 'MICA CASP, Crypto Asset Service Provider, CASP Authorization, MICA Compliance, Crypto Asset Custody, CASP Licensing, MICA Regulation'
  },
  heroSection: {
    _type: 'object',
    heading: 'MICA Crypto Asset Service Providers',
    tagline: 'CASP Excellence through Strategic MICA Compliance for Sustainable Crypto Asset Service Leadership',
    description: 'Crypto Asset Service Providers are at the center of the MICA revolution and require comprehensive compliance strategies for successful authorization and sustainable market leadership. MICA establishes differentiated CASP categories with specific requirements for custody, trading, portfolio management, and advisory services. We develop tailored CASP compliance frameworks that not only ensure regulatory excellence but also create strategic competitive advantages and enable innovative crypto asset services.',
    heroImage: {
      _type: 'image',
      alt: 'MICA Crypto Asset Service Providers Compliance Services'
    },
    benefits: [
      {
        _key: `benefit_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Comprehensive CASP authorization strategies for successful MICA licensing'
      },
      {
        _key: `benefit_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Innovative operational resilience frameworks for robust CASP operations'
      },
      {
        _key: `benefit_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Advanced custody and safeguarding solutions for asset protection excellence'
      },
      {
        _key: `benefit_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Strategic market abuse prevention for crypto asset market integrity'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'CASP Excellence as Strategic Enabler for Crypto Asset Service Leadership',
    description: 'MICA Crypto Asset Service Provider regulation transforms the European crypto asset service landscape through unified standards and creates new opportunities for compliant market participants. CASP authorization requires comprehensive compliance frameworks that combine operational excellence with regulatory adherence. Our CASP compliance services combine deep MICA expertise with practical implementation experience for sustainable crypto asset service success and strategic market differentiation.',
    additionalInfo: 'Successful CASP compliance requires more than regulatory adaptation – it needs strategic vision, operational excellence, and continuous innovation. Our holistic approach ensures sustainable crypto asset service success.',
    alert: {
      _type: 'object',
      title: 'CASP Authorization as Competitive Advantage',
      content: 'Successful MICA CASP compliance creates not only regulatory security but enables strategic market differentiation and EU-wide scaling. Proactive CASP excellence becomes the decisive success factor for sustainable crypto asset service leadership.'
    },
    serviceDescription: 'We offer comprehensive MICA CASP compliance services from strategic authorization consulting to operational compliance implementation. Our crypto asset service provider expertise helps companies optimally leverage the opportunities of MICA regulation.',
    points: [
      {
        _key: `point_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Strategic CASP authorization consulting for all MICA service categories'
      },
      {
        _key: `point_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Comprehensive operational resilience implementation for business continuity'
      },
      {
        _key: `point_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Advanced custody and safeguarding frameworks for asset protection'
      },
      {
        _key: `point_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Innovative market abuse prevention systems for market integrity'
      },
      {
        _key: `point_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Cross-border compliance strategies for EU-wide service provision'
      }
    ],
    servicePoints: [
      {
        _key: `servicePoint_en_${Date.now()}_1`,
        _type: 'object',
        text: 'CASP authorization strategies for all MICA service categories and business models'
      },
      {
        _key: `servicePoint_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Operational resilience framework design for robust CASP operations'
      },
      {
        _key: `servicePoint_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Custody and safeguarding solutions for comprehensive asset protection'
      },
      {
        _key: `servicePoint_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Market abuse prevention implementation for crypto asset market integrity'
      },
      {
        _key: `servicePoint_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Cross-border compliance strategies for EU-wide CASP service expansion'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our CASP Compliance Expertise',
      points: [
        {
          _key: `whyUs_en_${Date.now()}_1`,
          _type: 'object',
          text: 'Leading MICA CASP regulatory expertise and crypto asset service specialization'
        },
        {
          _key: `whyUs_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Proven experience in CASP authorization and operational compliance implementation'
        },
        {
          _key: `whyUs_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Innovative RegTech solutions for automated CASP compliance monitoring'
        },
        {
          _key: `whyUs_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Holistic consulting approaches for sustainable crypto asset service excellence'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Strategic CASP Compliance Development Approach',
    description: 'We develop together with you a tailored CASP compliance strategy that not only meets MICA requirements but also creates operational excellence and strategic competitive advantages for sustainable crypto asset service leadership.',
    points: [
      {
        _key: `approach_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Comprehensive CASP readiness assessment and service category analysis'
      },
      {
        _key: `approach_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Strategic authorization framework design with focus on business model optimization'
      },
      {
        _key: `approach_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Agile compliance implementation with continuous regulatory monitoring'
      },
      {
        _key: `approach_en_${Date.now()}_4`,
        _type: 'object',
        text: 'RegTech integration with modern CASP compliance management solutions'
      },
      {
        _key: `approach_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Continuous CASP excellence optimization and performance enhancement'
      }
    ]
  },
  services: [
    {
      _key: `service_en_${Date.now()}_1`,
      _type: 'object',
      title: 'CASP Authorization Excellence',
      description: 'Comprehensive consulting for Crypto Asset Service Provider authorization under MICA with strategic focus on all service categories and business models.',
      features: [
        {
          _key: `feature_en_${Date.now()}_1`,
          _type: 'object',
          text: 'Strategic CASP licensing consulting'
        },
        {
          _key: `feature_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Service category optimization'
        },
        {
          _key: `feature_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Authorization application support'
        },
        {
          _key: `feature_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Regulatory stakeholder management'
        }
      ]
    },
    {
      _key: `service_en_${Date.now()}_2`,
      _type: 'object',
      title: 'Operational Resilience Framework',
      description: 'Comprehensive business continuity and operational resilience solutions for robust CASP operations under all market conditions.',
      features: [
        {
          _key: `feature_en_${Date.now()}_5`,
          _type: 'object',
          text: 'Business continuity planning'
        },
        {
          _key: `feature_en_${Date.now()}_6`,
          _type: 'object',
          text: 'Disaster recovery implementation'
        },
        {
          _key: `feature_en_${Date.now()}_7`,
          _type: 'object',
          text: 'Cybersecurity framework design'
        },
        {
          _key: `feature_en_${Date.now()}_8`,
          _type: 'object',
          text: 'Incident response procedures'
        }
      ]
    },
    {
      _key: `service_en_${Date.now()}_3`,
      _type: 'object',
      title: 'Custody and Safeguarding Solutions',
      description: 'Advanced asset protection and custody frameworks for secure crypto asset custody and client asset protection excellence.',
      features: [
        {
          _key: `feature_en_${Date.now()}_9`,
          _type: 'object',
          text: 'Custody architecture design'
        },
        {
          _key: `feature_en_${Date.now()}_10`,
          _type: 'object',
          text: 'Asset segregation implementation'
        },
        {
          _key: `feature_en_${Date.now()}_11`,
          _type: 'object',
          text: 'Security protocol development'
        },
        {
          _key: `feature_en_${Date.now()}_12`,
          _type: 'object',
          text: 'Insurance coverage optimization'
        }
      ]
    },
    {
      _key: `service_en_${Date.now()}_4`,
      _type: 'object',
      title: 'Market Abuse Prevention Systems',
      description: 'State-of-the-art surveillance and compliance systems for crypto asset market integrity and anti-market abuse excellence.',
      features: [
        {
          _key: `feature_en_${Date.now()}_13`,
          _type: 'object',
          text: 'Transaction monitoring systems'
        },
        {
          _key: `feature_en_${Date.now()}_14`,
          _type: 'object',
          text: 'Market surveillance implementation'
        },
        {
          _key: `feature_en_${Date.now()}_15`,
          _type: 'object',
          text: 'Compliance training programs'
        },
        {
          _key: `feature_en_${Date.now()}_16`,
          _type: 'object',
          text: 'Regulatory reporting automation'
        }
      ]
    },
    {
      _key: `service_en_${Date.now()}_5`,
      _type: 'object',
      title: 'Cross-Border Compliance Strategy',
      description: 'Strategic EU-wide CASP service expansion through MICA passporting and multi-jurisdictional compliance excellence.',
      features: [
        {
          _key: `feature_en_${Date.now()}_17`,
          _type: 'object',
          text: 'EU passporting strategies'
        },
        {
          _key: `feature_en_${Date.now()}_18`,
          _type: 'object',
          text: 'Multi-jurisdictional compliance'
        },
        {
          _key: `feature_en_${Date.now()}_19`,
          _type: 'object',
          text: 'Cross-border risk management'
        },
        {
          _key: `feature_en_${Date.now()}_20`,
          _type: 'object',
          text: 'International expansion support'
        }
      ]
    },
    {
      _key: `service_en_${Date.now()}_6`,
      _type: 'object',
      title: 'Ongoing Compliance Excellence',
      description: 'Ongoing compliance monitoring and regulatory change management for sustainable CASP excellence and adaptive compliance optimization.',
      features: [
        {
          _key: `feature_en_${Date.now()}_21`,
          _type: 'object',
          text: 'Regulatory change monitoring'
        },
        {
          _key: `feature_en_${Date.now()}_22`,
          _type: 'object',
          text: 'Compliance performance analytics'
        },
        {
          _key: `feature_en_${Date.now()}_23`,
          _type: 'object',
          text: 'Risk assessment updates'
        },
        {
          _key: `feature_en_${Date.now()}_24`,
          _type: 'object',
          text: 'Continuous improvement programs'
        }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'ADVISORI\'s MICA CASP expertise was decisive for our successful authorization. Their strategic approach and deep regulatory knowledge enabled us to efficiently navigate the complex licensing process and establish ourselves as a leading crypto asset service provider.',
    name: 'Dr. Michael Schneider',
    position: 'CEO',
    company: 'Digital Asset Services GmbH',
    author: 'Dr. Michael Schneider'
  },
  faq: allFaqs
}

async function importMicaCaspEn() {
  console.log('Starting import of MICA Crypto Asset Service Providers English page...')
  console.log(`Total FAQs to import: ${allFaqs.length}`)
  
  try {
    // Check if document already exists
    const existing = await client.fetch(`*[_id == "mica-crypto-asset-service-providers-en"][0]`)
    
    if (existing) {
      console.log('Document already exists, updating...')
      const result = await client.createOrReplace(micaCaspEnPage)
      console.log('Document updated successfully:', result._id)
    } else {
      console.log('Creating new document...')
      const result = await client.create(micaCaspEnPage)
      console.log('Document created successfully:', result._id)
    }
    
    // Verify the import
    const verification = await client.fetch(`*[_id == "mica-crypto-asset-service-providers-en"]{
      _id,
      title,
      language,
      "faqCount": count(faq)
    }[0]`)
    
    console.log('\nVerification:')
    console.log('- Document ID:', verification._id)
    console.log('- Title:', verification.title)
    console.log('- Language:', verification.language)
    console.log('- FAQ Count:', verification.faqCount)
    
    console.log('\n✅ Import completed successfully!')
    
  } catch (error) {
    console.error('Error during import:', error)
    throw error
  }
}

// Run the import
importMicaCaspEn()
  .then(() => {
    console.log('Import process finished')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Import failed:', error)
    process.exit(1)
  })
