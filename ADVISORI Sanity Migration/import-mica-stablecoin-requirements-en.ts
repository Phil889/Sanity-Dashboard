import 'dotenv/config'
// Import script for MICA Stablecoin Requirements - English Translation
import { createClient } from '@sanity/client'
import { micaStablecoinRequirementsEnFaqsBatch1 } from './mica-stablecoin-requirements-en-faqs-batch1'
import { micaStablecoinRequirementsEnFaqsBatch2 } from './mica-stablecoin-requirements-en-faqs-batch2'
import { micaStablecoinRequirementsEnFaqsBatch3 } from './mica-stablecoin-requirements-en-faqs-batch3'
import { micaStablecoinRequirementsEnFaqsBatch4 } from './mica-stablecoin-requirements-en-faqs-batch4'
import { micaStablecoinRequirementsEnFaqsBatch5 } from './mica-stablecoin-requirements-en-faqs-batch5'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Combine all FAQ batches (20 unique FAQs)
const allFaqs = [
  ...micaStablecoinRequirementsEnFaqsBatch1,
  ...micaStablecoinRequirementsEnFaqsBatch2,
  ...micaStablecoinRequirementsEnFaqsBatch3,
  ...micaStablecoinRequirementsEnFaqsBatch4,
  ...micaStablecoinRequirementsEnFaqsBatch5
]

// English translation document for MICA Stablecoin Requirements
const micaStablecoinRequirementsEnglish = {
  _id: 'mica-stablecoin-requirements-en',
  _type: 'servicePage',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'mica-stablecoin-requirements'
  },
  title: 'MICA Stablecoin Requirements',
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/mica/mica-stablecoin-requirements-en'
  },
  seo: {
    _type: 'seo',
    title: 'MICA Stablecoin Requirements Services | ADVISORI',
    description: 'Specialized MICA Stablecoin Compliance Services for E-Money Tokens and Asset-Referenced Tokens. Comprehensive consulting for stablecoin issuance, reserve management, and regulatory requirements under the EU Markets in Crypto-Assets Regulation.',
    keywords: 'MICA Stablecoin Requirements, E-Money Token, Asset-Referenced Token, Stablecoin Compliance, MICA EMT, MICA ART, Stablecoin Regulation'
  },
  heroSection: {
    _type: 'object',
    heading: 'MICA Stablecoin Requirements',
    tagline: 'Strategic MICA Stablecoin Compliance Excellence for the Future of Digital Currencies',
    description: 'The Markets in Crypto-Assets Regulation establishes pioneering stablecoin regulatory standards for E-Money Tokens and Asset-Referenced Tokens in the European Union. MICA stablecoin requirements create clear compliance frameworks for token issuance, reserve management, redemption rights, and consumer protection. We support stablecoin issuers with strategic MICA implementation through tailored compliance architectures, innovative RegTech solutions, and future-proof stablecoin excellence strategies for sustainable digital currency leadership.',
    heroImage: {
      _type: 'image',
      alt: 'MICA Stablecoin Requirements Services'
    },
    benefits: [
      {
        _key: 'benefit_mica_stablecoin_en_1',
        _type: 'object',
        text: 'Comprehensive E-Money Token Compliance Frameworks for MICA-compliant EMT Issuance'
      },
      {
        _key: 'benefit_mica_stablecoin_en_2',
        _type: 'object',
        text: 'Advanced Asset-Referenced Token Regulatory Strategies for ART Excellence'
      },
      {
        _key: 'benefit_mica_stablecoin_en_3',
        _type: 'object',
        text: 'Innovative Reserve Management and Backing Solutions for Stablecoin Stability'
      },
      {
        _key: 'benefit_mica_stablecoin_en_4',
        _type: 'object',
        text: 'Strategic Consumer Protection and Redemption Rights Implementation'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'MICA Stablecoin Requirements as Strategic Enabler for Digital Currency Innovation',
    description: 'MICA stablecoin regulation revolutionizes the European digital currency landscape through differentiated compliance frameworks for E-Money Tokens and Asset-Referenced Tokens. These pioneering regulatory standards create not only legal clarity but also enable strategic market opportunities for compliant stablecoin issuers. Our MICA Stablecoin Services combine deep regulatory expertise with practical token design experience for sustainable stablecoin success and market leadership in the digital currency sector.',
    additionalInfo: 'Successful MICA stablecoin compliance requires more than regulatory adaptation – it needs strategic token design vision, technical innovation, and operational excellence. Our holistic approach ensures sustainable stablecoin success.',
    alert: {
      title: 'MICA Stablecoin Revolution',
      content: 'MICA stablecoin requirements create not only regulatory compliance but enable strategic differentiation and competitive advantages for innovative stablecoin issuers. Proactive MICA stablecoin excellence becomes the decisive success factor for sustainable digital currency leadership.'
    },
    points: [
      {
        _key: 'point_mica_stablecoin_en_1',
        _type: 'object',
        text: 'Comprehensive E-Money Token Compliance Strategies for MICA-compliant EMT Operations'
      },
      {
        _key: 'point_mica_stablecoin_en_2',
        _type: 'object',
        text: 'Advanced Asset-Referenced Token Regulatory Frameworks for Complex ART Structures'
      },
      {
        _key: 'point_mica_stablecoin_en_3',
        _type: 'object',
        text: 'Innovative Reserve Management and Backing Excellence for Stablecoin Stability'
      },
      {
        _key: 'point_mica_stablecoin_en_4',
        _type: 'object',
        text: 'Strategic Consumer Protection and Redemption Rights Implementation'
      },
      {
        _key: 'point_mica_stablecoin_en_5',
        _type: 'object',
        text: 'Continuous MICA Stablecoin Optimization and Performance Monitoring'
      }
    ],
    serviceDescription: 'Our MICA Stablecoin Services encompass the complete transformation from regulatory requirements to strategic stablecoin excellence. We develop customized compliance strategies that perfectly match your token design, business model, and market objectives.',
    servicePoints: [
      {
        _key: 'servicePoint_mica_stablecoin_en_1',
        _type: 'object',
        text: 'E-Money Token Compliance Excellence for MICA-compliant EMT Issuance'
      },
      {
        _key: 'servicePoint_mica_stablecoin_en_2',
        _type: 'object',
        text: 'Asset-Referenced Token Regulatory Strategies for Complex ART Structures'
      },
      {
        _key: 'servicePoint_mica_stablecoin_en_3',
        _type: 'object',
        text: 'Reserve Management Excellence and Backing Optimization for Stablecoin Stability'
      },
      {
        _key: 'servicePoint_mica_stablecoin_en_4',
        _type: 'object',
        text: 'Consumer Protection Implementation and Redemption Rights Management'
      },
      {
        _key: 'servicePoint_mica_stablecoin_en_5',
        _type: 'object',
        text: 'Continuous MICA Stablecoin Optimization and Performance Monitoring'
      }
    ],
    whyUs: {
      title: 'Our MICA Stablecoin Expertise',
      points: [
        {
          _key: 'whyUs_mica_stablecoin_en_1',
          _type: 'object',
          text: 'Leading MICA stablecoin regulatory expertise and token design specialization'
        },
        {
          _key: 'whyUs_mica_stablecoin_en_2',
          _type: 'object',
          text: 'Proven experience in EMT and ART compliance implementation'
        },
        {
          _key: 'whyUs_mica_stablecoin_en_3',
          _type: 'object',
          text: 'Innovative RegTech solutions for automated stablecoin compliance'
        },
        {
          _key: 'whyUs_mica_stablecoin_en_4',
          _type: 'object',
          text: 'Holistic consulting approaches for sustainable stablecoin excellence'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach to MICA Stablecoin Requirements',
    description: 'We pursue a strategic and innovation-oriented approach to MICA stablecoin compliance that combines regulatory expertise with practical token design experience.',
    points: [
      {
        _key: 'approach_mica_stablecoin_en_1',
        _type: 'object',
        text: 'Comprehensive MICA stablecoin assessment and token design analysis'
      },
      {
        _key: 'approach_mica_stablecoin_en_2',
        _type: 'object',
        text: 'Strategic compliance framework development for EMT and ART requirements'
      },
      {
        _key: 'approach_mica_stablecoin_en_3',
        _type: 'object',
        text: 'Reserve management and backing strategy implementation'
      },
      {
        _key: 'approach_mica_stablecoin_en_4',
        _type: 'object',
        text: 'Consumer protection and redemption rights integration'
      },
      {
        _key: 'approach_mica_stablecoin_en_5',
        _type: 'object',
        text: 'Continuous optimization and regulatory monitoring for sustainable compliance'
      }
    ]
  },
  services: [
    {
      _key: 'service_mica_stablecoin_en_1',
      _type: 'object',
      title: 'E-Money Token Compliance Excellence',
      description: 'Comprehensive EMT compliance services for MICA-compliant E-Money Token issuance with focus on regulatory excellence and operational efficiency.',
      features: [
        {
          _key: 'feature_mica_stablecoin_en_1',
          _type: 'object',
          text: 'Strategic EMT Authorization Consulting'
        },
        {
          _key: 'feature_mica_stablecoin_en_2',
          _type: 'object',
          text: 'Full-Backing Implementation'
        },
        {
          _key: 'feature_mica_stablecoin_en_3',
          _type: 'object',
          text: 'Redemption Rights Management'
        },
        {
          _key: 'feature_mica_stablecoin_en_4',
          _type: 'object',
          text: 'Consumer Protection Excellence'
        }
      ]
    },
    {
      _key: 'service_mica_stablecoin_en_2',
      _type: 'object',
      title: 'Asset-Referenced Token Framework',
      description: 'Advanced ART compliance solutions for complex Asset-Referenced Token structures with focus on reserve management and risk excellence.',
      features: [
        {
          _key: 'feature_mica_stablecoin_en_5',
          _type: 'object',
          text: 'Strategic ART Authorization Strategies'
        },
        {
          _key: 'feature_mica_stablecoin_en_6',
          _type: 'object',
          text: 'Diversified Reserve Management'
        },
        {
          _key: 'feature_mica_stablecoin_en_7',
          _type: 'object',
          text: 'Liquidity Risk Excellence'
        },
        {
          _key: 'feature_mica_stablecoin_en_8',
          _type: 'object',
          text: 'Governance Framework Implementation'
        }
      ]
    }
  ],
  faq: allFaqs,
  testimonial: {
    _type: 'object',
    quote: 'MICA Stablecoin Requirements mark a turning point for the European digital currency landscape and create differentiated regulatory standards that promote both innovation and consumer protection. The distinction between E-Money Tokens and Asset-Referenced Tokens enables tailored compliance approaches for different stablecoin models. Our MICA stablecoin expertise combines deep regulatory knowledge with practical token design experience to optimally prepare issuers for the new stablecoin regulatory landscape and create strategic competitive advantages.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI FTC GmbH'
  }
}

async function importMicaStablecoinRequirementsEn() {
  console.log('Starting import of MICA Stablecoin Requirements (English)...')
  console.log(`Total FAQs to import: ${allFaqs.length}`)
  
  try {
    const result = await client.createOrReplace(micaStablecoinRequirementsEnglish)
    console.log('Successfully imported MICA Stablecoin Requirements (English)')
    console.log(`Document ID: ${result._id}`)
    console.log(`FAQs imported: ${allFaqs.length}`)
    return result
  } catch (error) {
    console.error('Error importing document:', error)
    throw error
  }
}

// Run the import
importMicaStablecoinRequirementsEn()
  .then(() => {
    console.log('Import completed successfully!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Import failed:', error)
    process.exit(1)
  })

export { importMicaStablecoinRequirementsEn }
