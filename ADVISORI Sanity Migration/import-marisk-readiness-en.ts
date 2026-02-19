// Import script for MaRisk Readiness - English Translation
// Source: marisk-readiness (German) -> marisk-readiness-en (English)

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

// Import FAQ batches
import { mariskReadinessEnFaqsBatch1 } from './marisk-readiness-en-faqs-batch1'
import { mariskReadinessEnFaqsBatch2 } from './marisk-readiness-en-faqs-batch2'
import { mariskReadinessEnFaqsBatch3 } from './marisk-readiness-en-faqs-batch3'
import { mariskReadinessEnFaqsBatch4 } from './marisk-readiness-en-faqs-batch4'
import { mariskReadinessEnFaqsBatch5 } from './marisk-readiness-en-faqs-batch5'

// Combine all FAQs
const allFaqs = [
  ...mariskReadinessEnFaqsBatch1,
  ...mariskReadinessEnFaqsBatch2,
  ...mariskReadinessEnFaqsBatch3,
  ...mariskReadinessEnFaqsBatch4,
  ...mariskReadinessEnFaqsBatch5
]

const mariskReadinessEnPage = {
  _id: 'marisk-readiness-en',
  _type: 'servicePage',
  title: 'MaRisk Readiness',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'marisk-readiness'
  },
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/marisk/marisk-readiness-en'
  },
  parent: {
    _ref: 'marisk',
    _type: 'reference'
  },
  references: {
    _type: 'object',
    topLevelParent: {
      _ref: 'regulatory-compliance-management',
      _type: 'reference'
    }
  },
  heroSection: {
    _type: 'object',
    heading: 'MaRisk Readiness',
    tagline: 'Comprehensive Preparation for MaRisk Requirements',
    description: 'MaRisk Readiness encompasses the strategic preparation of your company for the Minimum Requirements for Risk Management. We support you in assessing your current processes and implementing MaRisk-compliant structures.',
    heroImage: {
      _type: 'image',
      alt: 'MaRisk Readiness'
    },
    benefits: [
      {
        _key: 'benefit_en_1739284800000_1',
        _type: 'object',
        text: 'Early identification of compliance gaps'
      },
      {
        _key: 'benefit_en_1739284800000_2',
        _type: 'object',
        text: 'Strategic planning for MaRisk implementation'
      },
      {
        _key: 'benefit_en_1739284800000_3',
        _type: 'object',
        text: 'Efficiency gains through process-oriented implementation'
      },
      {
        _key: 'benefit_en_1739284800000_4',
        _type: 'object',
        text: 'Minimization of regulatory risks and audit security'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'MaRisk Readiness',
    description: 'MaRisk Readiness is the strategic preparation of your company for the Minimum Requirements for Risk Management (MaRisk) of BaFin. Our experts support you in analyzing your current processes, identifying compliance gaps, and developing a customized implementation plan.',
    additionalInfo: 'A thorough MaRisk Readiness assessment can reduce implementation effort by up to 30% and significantly increase audit security. Invest in solid preparation to benefit from efficient and compliant processes in the long term.',
    alert: {
      title: 'Expert Tip',
      content: 'Early preparation for MaRisk requirements not only reduces compliance risks but also creates the foundation for efficient processes and improved risk management throughout the company.'
    },
    points: [
      {
        _key: 'point_en_1739284800000_1',
        _type: 'object',
        text: 'Gap analyses to identify compliance gaps'
      },
      {
        _key: 'point_en_1739284800000_2',
        _type: 'object',
        text: 'Assessment of organizational structures and control processes'
      },
      {
        _key: 'point_en_1739284800000_3',
        _type: 'object',
        text: 'Development of resource concepts for specialist and IT capacities'
      },
      {
        _key: 'point_en_1739284800000_4',
        _type: 'object',
        text: 'Creation of a roadmap for MaRisk implementation'
      },
      {
        _key: 'point_en_1739284800000_5',
        _type: 'object',
        text: 'Prioritization of measures by risk and effort'
      }
    ],
    serviceDescription: 'Our MaRisk Readiness Services encompass comprehensive analysis of your current situation, identification of compliance gaps, and development of a customized implementation strategy. We accompany you from the initial assessment to complete MaRisk conformity.',
    servicePoints: [
      {
        _key: 'servicePoint_en_1739284800000_1',
        _type: 'object',
        text: 'MaRisk gap analysis and compliance assessment'
      },
      {
        _key: 'servicePoint_en_1739284800000_2',
        _type: 'object',
        text: 'Assessment of organizational structures and control processes'
      },
      {
        _key: 'servicePoint_en_1739284800000_3',
        _type: 'object',
        text: 'Development of resource concepts for specialist and IT capacities'
      },
      {
        _key: 'servicePoint_en_1739284800000_4',
        _type: 'object',
        text: 'Creation of an implementation roadmap'
      },
      {
        _key: 'servicePoint_en_1739284800000_5',
        _type: 'object',
        text: 'Training and sensitization of employees'
      }
    ],
    whyUs: {
      title: 'Our Strengths',
      points: [
        {
          _key: 'whyUs_en_1739284800000_1',
          _type: 'object',
          text: 'Many years of experience with MaRisk implementations in financial institutions'
        },
        {
          _key: 'whyUs_en_1739284800000_2',
          _type: 'object',
          text: 'Combination of regulatory know-how and practical implementation competence'
        },
        {
          _key: 'whyUs_en_1739284800000_3',
          _type: 'object',
          text: 'Pragmatic approach to integrating MaRisk into existing processes'
        },
        {
          _key: 'whyUs_en_1739284800000_4',
          _type: 'object',
          text: 'Experienced team with background in banks, supervision, and consulting'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We develop a customized MaRisk Readiness strategy together with you that is tailored to your specific requirements.',
    points: [
      {
        _key: 'approach_en_1739284800000_1',
        _type: 'object',
        text: 'Analysis of your existing processes and structures'
      },
      {
        _key: 'approach_en_1739284800000_2',
        _type: 'object',
        text: 'Identification of compliance gaps and action needs'
      },
      {
        _key: 'approach_en_1739284800000_3',
        _type: 'object',
        text: 'Development of a customized implementation strategy'
      },
      {
        _key: 'approach_en_1739284800000_4',
        _type: 'object',
        text: 'Prioritization of measures by risk and effort'
      },
      {
        _key: 'approach_en_1739284800000_5',
        _type: 'object',
        text: 'Support during implementation and continuous optimization'
      }
    ]
  },
  services: [
    {
      _key: 'service_en_1739284800000_1',
      _type: 'object',
      title: 'MaRisk Gap Analysis',
      description: 'We analyze your existing processes and identify compliance gaps with respect to MaRisk requirements.',
      features: [
        {
          _key: 'feature_en_1739284800000_1',
          _type: 'object',
          text: 'Detailed analysis of your processes and structures'
        },
        {
          _key: 'feature_en_1739284800000_2',
          _type: 'object',
          text: 'Identification of compliance gaps and action needs'
        },
        {
          _key: 'feature_en_1739284800000_3',
          _type: 'object',
          text: 'Assessment of identified gaps by risk and urgency'
        },
        {
          _key: 'feature_en_1739284800000_4',
          _type: 'object',
          text: 'Development of an action plan to close the gaps'
        }
      ]
    },
    {
      _key: 'service_en_1739284800000_2',
      _type: 'object',
      title: 'Organizational Structures and Control Processes',
      description: 'We assess your organizational structures and control processes with respect to MaRisk conformity.',
      features: [
        {
          _key: 'feature_en_1739284800000_5',
          _type: 'object',
          text: 'Analysis of your organizational and process structure'
        },
        {
          _key: 'feature_en_1739284800000_6',
          _type: 'object',
          text: 'Assessment of control and management processes'
        },
        {
          _key: 'feature_en_1739284800000_7',
          _type: 'object',
          text: 'Recommendations for optimizing the organizational structure'
        },
        {
          _key: 'feature_en_1739284800000_8',
          _type: 'object',
          text: 'Development of an implementation plan for MaRisk-compliant structures'
        }
      ]
    },
    {
      _key: 'service_en_1739284800000_3',
      _type: 'object',
      title: 'Resource Concept for Specialist and IT Capacities',
      description: 'We develop a customized resource concept for implementing MaRisk requirements.',
      features: [
        {
          _key: 'feature_en_1739284800000_9',
          _type: 'object',
          text: 'Analysis of resource requirements for MaRisk implementation'
        },
        {
          _key: 'feature_en_1739284800000_10',
          _type: 'object',
          text: 'Development of a capacity plan for specialist and IT resources'
        },
        {
          _key: 'feature_en_1739284800000_11',
          _type: 'object',
          text: 'Identification of qualification needs and training measures'
        },
        {
          _key: 'feature_en_1739284800000_12',
          _type: 'object',
          text: 'Support with resource planning and allocation'
        }
      ]
    }
  ],
  faq: allFaqs,
  testimonial: {
    _type: 'object',
    quote: 'We prepare our clients early and specifically for MaRisk requirements – with a structured analysis and clear recommendations for action. This allows processes to be efficiently adapted, risks minimized, and the organization optimally aligned for current and future regulatory challenges.',
    name: 'Michael Stelter',
    position: 'Director',
    company: 'ADVISORI FTC GmbH'
  },
  seo: {
    _type: 'seo',
    title: 'MaRisk Readiness | ADVISORI',
    description: 'Secure your compliance with comprehensive MaRisk Readiness solutions. We support you in preparing, analyzing, and implementing MaRisk-compliant processes.',
    keywords: 'MaRisk, BaFin, Compliance, Risk Management, Banking Supervision, Regulatory, Risk Control'
  }
}

async function importMariskReadinessEn() {
  console.log('Starting import of MaRisk Readiness EN page...')
  console.log(`Total FAQs: ${allFaqs.length}`)
  console.log(`Total Services: ${mariskReadinessEnPage.services.length}`)
  
  try {
    const result = await client.createOrReplace(mariskReadinessEnPage)
    console.log('Successfully imported MaRisk Readiness EN page!')
    console.log('Document ID:', result._id)
    return result
  } catch (error) {
    console.error('Error importing page:', error)
    throw error
  }
}

importMariskReadinessEn()
  .then(() => {
    console.log('Import completed successfully!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Import failed:', error)
    process.exit(1)
  })
