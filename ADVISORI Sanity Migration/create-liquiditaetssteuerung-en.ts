import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
})

const timestamp = Date.now()

// English translation of Liquiditätssteuerung page
// Source: liquiditaetssteuerung (German)
// This is the Liquidity Management page under Financial Risk

const liquiditaetssteuerungEnPage = {
  _id: 'liquiditaetssteuerung-en',
  _type: 'servicePage',
  language: 'en',
  title: 'Liquidity Management',
  slug: {
    _type: 'slug',
    current: 'risk-management/financial-risk/liquidity-management-en'
  },
  parent: {
    _ref: 'financial-risk',
    _type: 'reference'
  },
  __i18n_lang: 'en',
  __i18n_base: {
    _ref: 'liquiditaetssteuerung',
    _type: 'reference'
  },
  seo: {
    _type: 'seo',
    title: 'Liquidity Management | ADVISORI',
    description: 'Professional consulting for effective liquidity management. Optimize your cash flow forecasts, liquidity buffers, and treasury management processes.',
    keywords: 'Liquidity Management, Treasury Management, Cash Flow Forecasting, Liquidity Metrics, Cash Pooling, LCR, NSFR, Liquidity Risk'
  },
  heroSection: {
    _type: 'object',
    tagline: 'Effective Management of Solvency',
    heading: 'Liquidity Management',
    description: 'Comprehensive consulting for optimizing your liquidity planning, management, and monitoring to ensure the financial stability of your organization.',
    heroImage: {
      _type: 'image',
      alt: 'Liquidity Management - Professional Consulting for Your Organization',
      asset: {
        _ref: 'image-ee8e33f02f057deab647173621698149a47c8ead-1536x1024-jpg',
        _type: 'reference'
      }
    },
    benefits: [
      {
        _key: `benefit_${timestamp}_1`,
        _type: 'object',
        text: 'Optimized Capital Costs'
      },
      {
        _key: `benefit_${timestamp}_2`,
        _type: 'object',
        text: 'Improved Cash Flow Forecasts'
      },
      {
        _key: `benefit_${timestamp}_3`,
        _type: 'object',
        text: 'Regulatory Compliance'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'Comprehensive Liquidity Management',
    description: 'We support you in developing and implementing effective liquidity management that meets both operational and strategic requirements while complying with regulatory standards.',
    points: [
      {
        _key: `point_${timestamp}_1`,
        _type: 'object',
        text: 'Development of integrated liquidity management concepts'
      },
      {
        _key: `point_${timestamp}_2`,
        _type: 'object',
        text: 'Optimization of treasury management processes'
      },
      {
        _key: `point_${timestamp}_3`,
        _type: 'object',
        text: 'Implementation of early warning systems and stress tests'
      }
    ],
    alert: {
      _type: 'object',
      title: 'Expert Tip',
      content: 'By using predictive analytics and integrated treasury systems, companies can reduce their liquidity costs by an average of 19% while significantly improving their forecast accuracy.'
    },
    additionalInfo: 'According to a study of 200 mid-sized companies, 62% still use Excel-based solutions without bank API integration, which offers significant optimization potential.',
    serviceDescription: 'Our consulting services in liquidity management include the development of integrated management concepts, optimization of treasury management processes, and implementation of AI-powered forecasting models. We support you in establishing effective cash pooling structures, developing contingency funding plans, and implementing regulatory requirements such as LCR and NSFR.',
    servicePoints: [
      {
        _key: `servicePoint_${timestamp}_1`,
        _type: 'object',
        text: 'Liquidity Planning and Forecasting'
      },
      {
        _key: `servicePoint_${timestamp}_2`,
        _type: 'object',
        text: 'Cash Management and Pooling'
      },
      {
        _key: `servicePoint_${timestamp}_3`,
        _type: 'object',
        text: 'Liquidity Risk Management'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our Strengths',
      points: [
        {
          _key: `whyUs_${timestamp}_1`,
          _type: 'object',
          text: 'Comprehensive expertise in all areas of treasury management'
        },
        {
          _key: `whyUs_${timestamp}_2`,
          _type: 'object',
          text: 'Experience with advanced forecasting and simulation models'
        },
        {
          _key: `whyUs_${timestamp}_3`,
          _type: 'object',
          text: 'Proven implementation strategies'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We accompany you with a structured approach in developing and implementing your liquidity management.',
    points: [
      {
        _key: `approach_${timestamp}_1`,
        _type: 'object',
        text: 'Analysis of existing liquidity situation and processes'
      },
      {
        _key: `approach_${timestamp}_2`,
        _type: 'object',
        text: 'Development of customized liquidity management concepts'
      },
      {
        _key: `approach_${timestamp}_3`,
        _type: 'object',
        text: 'Implementation, training, and continuous improvement'
      }
    ]
  },
  services: [
    {
      _key: `service_${timestamp}_1`,
      _type: 'object',
      title: 'Liquidity Planning and Forecasting',
      description: 'Development and implementation of advanced cash flow forecasting models',
      features: [
        {
          _key: `feature_${timestamp}_1`,
          _type: 'object',
          text: 'AI-powered forecasting models'
        },
        {
          _key: `feature_${timestamp}_2`,
          _type: 'object',
          text: 'Scenario analyses and stress tests'
        },
        {
          _key: `feature_${timestamp}_3`,
          _type: 'object',
          text: 'Integration of business and financial planning'
        }
      ]
    },
    {
      _key: `service_${timestamp}_2`,
      _type: 'object',
      title: 'Cash Management and Pooling',
      description: 'Optimization of group-wide liquidity management',
      features: [
        {
          _key: `feature_${timestamp}_4`,
          _type: 'object',
          text: 'Cash pooling structures'
        },
        {
          _key: `feature_${timestamp}_5`,
          _type: 'object',
          text: 'Bank relationship management'
        },
        {
          _key: `feature_${timestamp}_6`,
          _type: 'object',
          text: 'Treasury management systems'
        }
      ]
    },
    {
      _key: `service_${timestamp}_3`,
      _type: 'object',
      title: 'Liquidity Risk Management',
      description: 'Development and implementation of early warning systems and contingency plans',
      features: [
        {
          _key: `feature_${timestamp}_7`,
          _type: 'object',
          text: 'Liquidity metrics and limits'
        },
        {
          _key: `feature_${timestamp}_8`,
          _type: 'object',
          text: 'Contingency funding plans'
        },
        {
          _key: `feature_${timestamp}_9`,
          _type: 'object',
          text: 'Regulatory compliance (LCR, NSFR)'
        }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'Effective liquidity management is the key to financial stability and operational capability in an increasingly volatile market environment.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI FTC GmbH'
  },
  faq: []
}

export async function createLiquiditaetssteuerungEn() {
  console.log('Creating Liquidity Management EN page...')
  
  try {
    const result = await client.createOrReplace(liquiditaetssteuerungEnPage)
    console.log('Created Liquidity Management EN page:', result._id)
    return result
  } catch (error) {
    console.error('Error creating Liquidity Management EN page:', error)
    throw error
  }
}

export { liquiditaetssteuerungEnPage }
