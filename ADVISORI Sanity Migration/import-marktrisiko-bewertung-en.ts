// Import script for Marktrisiko Bewertung & Limitsysteme - English Translation
// Market Risk Assessment & Limit Systems

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

import { marktrisikoBewertungEnFaqsBatch1 } from './marktrisiko-bewertung-en-faqs-batch1'
import { marktrisikoBewertungEnFaqsBatch2 } from './marktrisiko-bewertung-en-faqs-batch2'
import { marktrisikoBewertungEnFaqsBatch3 } from './marktrisiko-bewertung-en-faqs-batch3'

// Combine all FAQ batches
const allFaqs = [
  ...marktrisikoBewertungEnFaqsBatch1,
  ...marktrisikoBewertungEnFaqsBatch2,
  ...marktrisikoBewertungEnFaqsBatch3
]

// English translation document
const marktrisikoBewertungEnPage = {
  _id: 'marktrisiko-bewertung-limitsysteme-en',
  _type: 'servicePage',
  title: 'Market Risk Assessment & Limit Systems',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'marktrisiko-bewertung-limitsysteme'
  },
  slug: {
    _type: 'slug',
    current: 'risk-management/financial-risk/market-risk-assessment-limit-systems-en'
  },
  seo: {
    _type: 'seo',
    title: 'Market Risk Assessment & Limit Systems | ADVISORI',
    description: 'Professional consulting for effective market risk assessment and limit systems. Optimize your risk management with Value-at-Risk models, stress tests, and dynamic limit systems.',
    keywords: 'Market risk assessment, limit systems, Value at Risk, stress tests, CRR, MaRisk, risk-bearing capacity, issuer limits, correlation risk'
  },
  heroSection: {
    _type: 'object',
    heading: 'Market Risk Assessment & Limit Systems',
    tagline: 'Effective Management of Market Risks',
    description: 'Comprehensive consulting for the development and implementation of market risk assessment models and effective limit systems to manage your risk exposure.',
    heroImage: {
      _type: 'image',
      alt: 'Market Risk Assessment & Limit Systems - Professional Consulting for Your Company',
      asset: {
        _ref: 'image-88620cd67ae6797e9f92ec838be2237b98f2d0dd-1024x768-jpg',
        _type: 'reference'
      }
    },
    benefits: [
      {
        _key: 'benefit_en_1739456789001_1',
        _type: 'object',
        text: 'Regulatory Compliance (CRR, MaRisk)'
      },
      {
        _key: 'benefit_en_1739456789001_2',
        _type: 'object',
        text: 'Optimized Risk-Bearing Capacity'
      },
      {
        _key: 'benefit_en_1739456789001_3',
        _type: 'object',
        text: 'Improved Risk Management'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'Comprehensive Market Risk Assessment and Limit Systems',
    description: 'We support you in developing and implementing effective market risk assessment models and limit systems that meet regulatory requirements while supporting your business objectives.',
    additionalInfo: 'According to case studies, companies can reduce their backtesting outliers to 3 per year and lower risk capital requirements by up to 18% through the use of regime-switching GARCH models and regular stress tests.',
    alert: {
      title: 'Expert Tip',
      content: 'The integration of AI-supported limit systems (LSTM networks) and macroprudential stress test frameworks can significantly increase risk resilience and reduce limit breach alerts by up to 63%.'
    },
    points: [
      {
        _key: 'point_en_1739456789001_1',
        _type: 'object',
        text: 'Development and validation of Value-at-Risk models'
      },
      {
        _key: 'point_en_1739456789001_2',
        _type: 'object',
        text: 'Implementation of stress tests and scenario analyses'
      },
      {
        _key: 'point_en_1739456789001_3',
        _type: 'object',
        text: 'Building effective limit systems and monitoring processes'
      }
    ],
    serviceDescription: 'Our consulting services in market risk assessment and limit systems include the development and validation of Value-at-Risk models, implementation of stress tests and scenario analyses, and building effective limit systems and monitoring processes. We support you in adapting to regulatory requirements such as CRR and MaRisk and in integrating innovative technologies like AI-based early warning systems into your market risk processes.',
    servicePoints: [
      {
        _key: 'servicePoint_en_1739456789001_1',
        _type: 'object',
        text: 'Market risk assessment and modeling'
      },
      {
        _key: 'servicePoint_en_1739456789001_2',
        _type: 'object',
        text: 'Stress tests and scenario analyses'
      },
      {
        _key: 'servicePoint_en_1739456789001_3',
        _type: 'object',
        text: 'Limit systems and risk monitoring'
      }
    ],
    whyUs: {
      title: 'Our Strengths',
      points: [
        {
          _key: 'whyUs_en_1739456789001_1',
          _type: 'object',
          text: 'Deep expertise in regulatory requirements (CRR, MaRisk)'
        },
        {
          _key: 'whyUs_en_1739456789001_2',
          _type: 'object',
          text: 'Experience with advanced quantification models'
        },
        {
          _key: 'whyUs_en_1739456789001_3',
          _type: 'object',
          text: 'Proven implementation strategies'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We accompany you with a structured approach in developing and implementing your market risk assessment and limit systems.',
    points: [
      {
        _key: 'approach_en_1739456789001_1',
        _type: 'object',
        text: 'Analysis of existing risk models and processes'
      },
      {
        _key: 'approach_en_1739456789001_2',
        _type: 'object',
        text: 'Development of customized solutions for your specific requirements'
      },
      {
        _key: 'approach_en_1739456789001_3',
        _type: 'object',
        text: 'Implementation, training, and continuous improvement'
      }
    ]
  },
  services: [
    {
      _key: 'service_en_1739456789001_1',
      _type: 'object',
      title: 'Market Risk Assessment and Modeling',
      description: 'Development and validation of Value-at-Risk models and other risk measures',
      features: [
        {
          _key: 'serviceFeature_en_1739456789001_1',
          _type: 'object',
          text: 'Value-at-Risk (VaR) modeling'
        },
        {
          _key: 'serviceFeature_en_1739456789001_2',
          _type: 'object',
          text: 'Backtesting and model validation'
        },
        {
          _key: 'serviceFeature_en_1739456789001_3',
          _type: 'object',
          text: 'Regulatory compliance (CRR, MaRisk)'
        }
      ]
    },
    {
      _key: 'service_en_1739456789001_2',
      _type: 'object',
      title: 'Stress Tests and Scenario Analyses',
      description: 'Development and implementation of stress tests and scenario analyses',
      features: [
        {
          _key: 'serviceFeature_en_1739456789001_4',
          _type: 'object',
          text: 'Historical and hypothetical scenarios'
        },
        {
          _key: 'serviceFeature_en_1739456789001_5',
          _type: 'object',
          text: 'Reverse stress tests'
        },
        {
          _key: 'serviceFeature_en_1739456789001_6',
          _type: 'object',
          text: 'Integration into risk management'
        }
      ]
    },
    {
      _key: 'service_en_1739456789001_3',
      _type: 'object',
      title: 'Limit Systems and Risk Monitoring',
      description: 'Building effective limit systems and monitoring processes',
      features: [
        {
          _key: 'serviceFeature_en_1739456789001_7',
          _type: 'object',
          text: 'Hierarchical limit systems'
        },
        {
          _key: 'serviceFeature_en_1739456789001_8',
          _type: 'object',
          text: 'Dynamic limit adjustment'
        },
        {
          _key: 'serviceFeature_en_1739456789001_9',
          _type: 'object',
          text: 'AI-based early warning systems'
        }
      ]
    }
  ],
  faq: allFaqs,
  testimonial: {
    _type: 'object',
    quote: 'Effective market risk assessment and management is crucial for financial stability and competitiveness in an increasingly volatile market environment.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI FTC GmbH'
  },
  parent: {
    _ref: 'financial-risk',
    _type: 'reference'
  },
  references: {
    topLevelParent: {
      _ref: 'risikomanagement',
      _type: 'reference'
    }
  }
}

async function importMarktrisikoBewertungEn() {
  console.log('Starting import of Marktrisiko Bewertung & Limitsysteme English translation...')
  console.log('Document ID:', marktrisikoBewertungEnPage._id)
  console.log('Total FAQs:', allFaqs.length)
  
  try {
    const result = await client.createOrReplace(marktrisikoBewertungEnPage)
    console.log('Successfully imported:', result._id)
    console.log('Title:', result.title)
    console.log('Language:', result.language)
    console.log('FAQ count:', result.faq?.length || 0)
    return result
  } catch (error) {
    console.error('Error importing document:', error)
    throw error
  }
}

importMarktrisikoBewertungEn()
  .then(() => {
    console.log('\nImport completed successfully!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Import failed:', error)
    process.exit(1)
  })
