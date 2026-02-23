import 'dotenv/config'
import { createClient } from '@sanity/client'
import { faqsBatch1 } from './kreditrisiko-management-en-faqs-batch1'
import { faqsBatch2 } from './kreditrisiko-management-en-faqs-batch2'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

const allFaqs = [...faqsBatch1, ...faqsBatch2]

console.log('Total FAQs to import:', allFaqs.length)

const kreditrisikoManagementEn = {
  _id: 'kreditrisiko-management-ratingverfahren-en',
  _type: 'servicePage',
  title: 'Credit Risk Management & Rating Procedures',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'kreditrisiko-management-ratingverfahren'
  },
  i18n: {
    base: 'kreditrisiko-management-ratingverfahren'
  },
  slug: {
    _type: 'slug',
    current: 'risk-management/financial-risk/credit-risk-management-rating-procedures-en'
  },
  parent: {
    _type: 'reference',
    _ref: 'financial-risk'
  },
  references: {
    topLevelParent: {
      _type: 'reference',
      _ref: 'risikomanagement'
    }
  },
  seo: {
    _type: 'seo',
    title: 'Credit Risk Management & Rating Procedures | ADVISORI',
    description: 'Professional consulting for effective credit risk management and rating procedures. Optimize your credit risk strategy and improve your rating models.',
    keywords: 'Credit Risk Management, Rating Procedures, IRB Approach, PD Models, LGD Models, Credit Portfolio Management, Basel IV, Risk-Weighted Assets'
  },
  heroSection: {
    _type: 'object',
    heading: 'Credit Risk Management & Rating Procedures',
    tagline: 'Effective Management of Credit Risks',
    description: 'Comprehensive consulting for the development and implementation of credit risk models, rating procedures, and portfolio management strategies.',
    heroImage: {
      _type: 'image',
      alt: 'Credit Risk Management & Rating Procedures - Professional Consulting for Your Business',
      asset: {
        _ref: 'image-88620cd67ae6797e9f92ec838be2237b98f2d0dd-1024x768-jpg',
        _type: 'reference'
      }
    },
    benefits: [
      {
        _key: 'benefit_kreditrisiko_en_1',
        _type: 'object',
        text: 'Optimized Risk-Weighted Assets (RWA)'
      },
      {
        _key: 'benefit_kreditrisiko_en_2',
        _type: 'object',
        text: 'Improved Credit Decision Processes'
      },
      {
        _key: 'benefit_kreditrisiko_en_3',
        _type: 'object',
        text: 'Regulatory Compliance (Basel IV)'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'Comprehensive Credit Risk Management',
    description: 'We support you in developing and implementing effective credit risk management that meets both regulatory requirements and supports your business objectives.',
    additionalInfo: 'According to EBA forecasts, an increase in NPL volumes of 15-20% is expected by 2026, requiring improved risk provisioning and secondary market structures.',
    alert: {
      title: 'Expert Tip',
      content: 'The combination of regulatory pressure (Basel IV) and digital innovations (AI, Blockchain) is fundamentally transforming credit risk management. Early adaptation secures competitive advantages.'
    },
    points: [
      {
        _key: 'point_kreditrisiko_en_1',
        _type: 'object',
        text: 'Development and validation of rating models'
      },
      {
        _key: 'point_kreditrisiko_en_2',
        _type: 'object',
        text: 'Optimization of credit portfolios'
      },
      {
        _key: 'point_kreditrisiko_en_3',
        _type: 'object',
        text: 'Implementation of risk mitigation techniques'
      }
    ],
    serviceDescription: 'Our consulting services in credit risk management and rating procedures include the development and validation of PD, LGD, and EAD models, the optimization of credit portfolios through advanced quantification methods, and the implementation of risk mitigation techniques. We support you in adapting to regulatory requirements such as Basel IV and in integrating innovative technologies such as AI and Blockchain into your credit risk processes.',
    servicePoints: [
      {
        _key: 'servicePoint_kreditrisiko_en_1',
        _type: 'object',
        text: 'Rating model development and validation'
      },
      {
        _key: 'servicePoint_kreditrisiko_en_2',
        _type: 'object',
        text: 'Credit portfolio management'
      },
      {
        _key: 'servicePoint_kreditrisiko_en_3',
        _type: 'object',
        text: 'Regulatory compliance'
      }
    ],
    whyUs: {
      title: 'Our Strengths',
      points: [
        {
          _key: 'whyUs_kreditrisiko_en_1',
          _type: 'object',
          text: 'Deep expertise in regulatory requirements'
        },
        {
          _key: 'whyUs_kreditrisiko_en_2',
          _type: 'object',
          text: 'Experience with advanced quantification models'
        },
        {
          _key: 'whyUs_kreditrisiko_en_3',
          _type: 'object',
          text: 'Proven implementation strategies'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We accompany you with a structured approach in developing and implementing your credit risk management.',
    points: [
      {
        _key: 'approach_kreditrisiko_en_1',
        _type: 'object',
        text: 'Analysis of existing rating models and credit risk processes'
      },
      {
        _key: 'approach_kreditrisiko_en_2',
        _type: 'object',
        text: 'Development of customized solutions for your credit portfolio'
      },
      {
        _key: 'approach_kreditrisiko_en_3',
        _type: 'object',
        text: 'Implementation, training, and continuous improvement'
      }
    ]
  },
  services: [
    {
      _key: 'service_kreditrisiko_en_1',
      _type: 'object',
      title: 'Rating Model Development',
      description: 'Development and validation of PD, LGD, and EAD models',
      features: [
        {
          _key: 'serviceFeature_kreditrisiko_en_1',
          _type: 'object',
          text: 'Statistical modeling and calibration'
        },
        {
          _key: 'serviceFeature_kreditrisiko_en_2',
          _type: 'object',
          text: 'Model validation and backtesting'
        },
        {
          _key: 'serviceFeature_kreditrisiko_en_3',
          _type: 'object',
          text: 'Regulatory documentation'
        }
      ]
    },
    {
      _key: 'service_kreditrisiko_en_2',
      _type: 'object',
      title: 'Credit Portfolio Management',
      description: 'Optimization of credit portfolios through advanced quantification methods',
      features: [
        {
          _key: 'serviceFeature_kreditrisiko_en_4',
          _type: 'object',
          text: 'Portfolio analysis and segmentation'
        },
        {
          _key: 'serviceFeature_kreditrisiko_en_5',
          _type: 'object',
          text: 'Risk-return optimization'
        },
        {
          _key: 'serviceFeature_kreditrisiko_en_6',
          _type: 'object',
          text: 'Concentration and correlation analysis'
        }
      ]
    },
    {
      _key: 'service_kreditrisiko_en_3',
      _type: 'object',
      title: 'Basel IV Implementation',
      description: 'Support in adapting to new regulatory requirements',
      features: [
        {
          _key: 'serviceFeature_kreditrisiko_en_7',
          _type: 'object',
          text: 'Output floor calculation and optimization'
        },
        {
          _key: 'serviceFeature_kreditrisiko_en_8',
          _type: 'object',
          text: 'Adaptation of internal models to new requirements'
        },
        {
          _key: 'serviceFeature_kreditrisiko_en_9',
          _type: 'object',
          text: 'Strategic capital planning'
        }
      ]
    }
  ],
  faq: allFaqs,
  testimonial: {
    _type: 'object',
    quote: 'Effective credit risk management is not only a regulatory necessity but a strategic competitive advantage in an increasingly complex market environment.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI FTC GmbH'
  }
}

async function importKreditrisikoManagementEn() {
  console.log('Creating Kreditrisiko Management EN page...')
  
  try {
    const result = await client.createOrReplace(kreditrisikoManagementEn)
    console.log('Successfully created/updated kreditrisiko-management-ratingverfahren-en:', result._id)
    console.log('Total FAQs:', result.faq?.length || 0)
    console.log('Total Services:', result.services?.length || 0)
  } catch (error) {
    console.error('Error creating page:', error)
    throw error
  }
}

importKreditrisikoManagementEn().catch(console.error)
