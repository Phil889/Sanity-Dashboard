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

// English translation of Lieferkettenbewertung page
// Source: lieferkettenbewertung (German)
// Title: Supply Chain Assessment
// Parent: dienstleisterauswahl
// Top Level Parent: informationssicherheit
// 20 FAQs, 3 services

const lieferkettenbewertungEnPage = {
  _id: 'lieferkettenbewertung-en',
  _type: 'servicePage',
  language: 'en',
  title: 'Supply Chain Assessment',
  slug: {
    _type: 'slug',
    current: 'informationssicherheit/business-continuity-resilience/auslagerungsmanagement/dienstleisterauswahl/supply-chain-assessment-en'
  },
  parent: {
    _ref: 'dienstleisterauswahl',
    _type: 'reference'
  },
  __i18n_lang: 'en',
  __i18n_base: {
    _ref: 'lieferkettenbewertung',
    _type: 'reference'
  },
  references: {
    _type: 'object',
    topLevelParent: {
      _ref: 'informationssicherheit',
      _type: 'reference'
    }
  },
  seo: {
    _type: 'seo',
    title: 'Supply Chain Assessment | ADVISORI',
    description: 'Professional support for assessing and optimizing your supply chains. We help you identify, evaluate, and mitigate risks along your supply chain for greater resilience and sustainability.',
    keywords: 'Supply Chain Assessment, Supply Chain Evaluation, Supply Chain Risks, Resilience, Supply Chain Management, Due Diligence, Sustainability, Compliance, Risk Management'
  },
  heroSection: {
    _type: 'object',
    tagline: 'Transparent. Resilient. Sustainable.',
    heading: 'Supply Chain Assessment',
    description: 'We support you in the systematic assessment and optimization of your supply chains. From risk identification to the implementation of resilience measures – for a transparent and future-proof supply chain.',
    heroImage: {
      _type: 'image',
      alt: 'Supply Chain Assessment'
    },
    benefits: [
      {
        _key: `benefit_${timestamp}_1`,
        _type: 'object',
        text: 'Identification and assessment of supply chain risks'
      },
      {
        _key: `benefit_${timestamp}_2`,
        _type: 'object',
        text: 'Increased transparency and resilience'
      },
      {
        _key: `benefit_${timestamp}_3`,
        _type: 'object',
        text: 'Compliance with regulatory requirements'
      },
      {
        _key: `benefit_${timestamp}_4`,
        _type: 'object',
        text: 'Strategic optimization of supplier relationships'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'Supply Chain Assessment',
    description: 'Global supply chains are increasingly exposed to complex risks. Systematic assessment and continuous monitoring are essential for your company\'s resilience. We support you in developing and implementing a holistic supply chain assessment approach.',
    additionalInfo: 'The complexity of global supply chains and increasing regulatory requirements make systematic assessment indispensable. Companies that invest early in the transparency and resilience of their supply chains not only secure competitive advantages but also minimize long-term risks and compliance costs.',
    alert: {
      _type: 'object',
      title: 'Expert Tip',
      content: 'An integrated supply chain assessment that considers both operational risks and compliance and sustainability aspects creates significant added value. Investments in transparency and resilience pay off through reduced failure risks and improved stakeholder relationships.'
    },
    points: [
      {
        _key: `point_${timestamp}_1`,
        _type: 'object',
        text: 'Risk assessment and supply chain mapping'
      },
      {
        _key: `point_${timestamp}_2`,
        _type: 'object',
        text: 'Development of supplier scoring models'
      },
      {
        _key: `point_${timestamp}_3`,
        _type: 'object',
        text: 'Implementation of early warning systems'
      },
      {
        _key: `point_${timestamp}_4`,
        _type: 'object',
        text: 'Compliance with LkSG and ESG criteria'
      },
      {
        _key: `point_${timestamp}_5`,
        _type: 'object',
        text: 'Strategic realignment of the supply chain'
      }
    ],
    serviceDescription: 'Our offering includes comprehensive support for assessing and optimizing your supply chains. From initial risk analysis to the development of assessment models to the implementation of monitoring systems and strategic realignment.',
    servicePoints: [
      {
        _key: `servicePoint_${timestamp}_1`,
        _type: 'object',
        text: 'Supply Chain Risk Assessment'
      },
      {
        _key: `servicePoint_${timestamp}_2`,
        _type: 'object',
        text: 'Supplier assessment and management'
      },
      {
        _key: `servicePoint_${timestamp}_3`,
        _type: 'object',
        text: 'Compliance review and due diligence'
      },
      {
        _key: `servicePoint_${timestamp}_4`,
        _type: 'object',
        text: 'Implementation of monitoring systems'
      },
      {
        _key: `servicePoint_${timestamp}_5`,
        _type: 'object',
        text: 'Strategic optimization of the supply chain'
      }
    ],
    whyUs: {
      title: 'Our Strengths',
      points: [
        {
          _key: `whyUs_${timestamp}_1`,
          _type: 'object',
          text: 'Comprehensive expertise in supply chain risk management'
        },
        {
          _key: `whyUs_${timestamp}_2`,
          _type: 'object',
          text: 'Experience with international supply chains and regulatory requirements'
        },
        {
          _key: `whyUs_${timestamp}_3`,
          _type: 'object',
          text: 'Proven methods for risk assessment and mitigation'
        },
        {
          _key: `whyUs_${timestamp}_4`,
          _type: 'object',
          text: 'Interdisciplinary expertise in compliance, sustainability, and risk management'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'Our approach to supply chain assessment is systematic, risk-oriented, and tailored to your specific requirements.',
    points: [
      {
        _key: `approach_${timestamp}_1`,
        _type: 'object',
        text: 'Analysis of existing supply chain and risk potentials'
      },
      {
        _key: `approach_${timestamp}_2`,
        _type: 'object',
        text: 'Development of a customized assessment model'
      },
      {
        _key: `approach_${timestamp}_3`,
        _type: 'object',
        text: 'Conducting the assessment and risk analysis'
      },
      {
        _key: `approach_${timestamp}_4`,
        _type: 'object',
        text: 'Derivation of optimization measures'
      },
      {
        _key: `approach_${timestamp}_5`,
        _type: 'object',
        text: 'Implementation and continuous monitoring'
      }
    ]
  },
  services: [
    {
      _key: `service_${timestamp}_1`,
      _type: 'object',
      title: 'Supply Chain Risk Assessment',
      description: 'Comprehensive identification and assessment of risks along your supply chain.',
      features: [
        {
          _key: `serviceFeature_${timestamp}_1`,
          _type: 'object',
          text: 'Supply chain mapping and visualization'
        },
        {
          _key: `serviceFeature_${timestamp}_2`,
          _type: 'object',
          text: 'Risk assessment and categorization'
        },
        {
          _key: `serviceFeature_${timestamp}_3`,
          _type: 'object',
          text: 'Vulnerability analysis and optimization potentials'
        },
        {
          _key: `serviceFeature_${timestamp}_4`,
          _type: 'object',
          text: 'Prioritization of action areas'
        }
      ]
    },
    {
      _key: `service_${timestamp}_2`,
      _type: 'object',
      title: 'Supplier Due Diligence',
      description: 'Systematic review and assessment of suppliers according to various criteria.',
      features: [
        {
          _key: `serviceFeature_${timestamp}_5`,
          _type: 'object',
          text: 'Development of assessment models'
        },
        {
          _key: `serviceFeature_${timestamp}_6`,
          _type: 'object',
          text: 'Conducting supplier audits'
        },
        {
          _key: `serviceFeature_${timestamp}_7`,
          _type: 'object',
          text: 'Compliance reviews (LkSG, ESG)'
        },
        {
          _key: `serviceFeature_${timestamp}_8`,
          _type: 'object',
          text: 'Supplier assessment and classification'
        }
      ]
    },
    {
      _key: `service_${timestamp}_3`,
      _type: 'object',
      title: 'Implementation & Monitoring',
      description: 'Implementation of measures for continuous monitoring and optimization.',
      features: [
        {
          _key: `serviceFeature_${timestamp}_9`,
          _type: 'object',
          text: 'Development of KPIs and monitoring systems'
        },
        {
          _key: `serviceFeature_${timestamp}_10`,
          _type: 'object',
          text: 'Implementation of early warning systems'
        },
        {
          _key: `serviceFeature_${timestamp}_11`,
          _type: 'object',
          text: 'Building governance structures'
        },
        {
          _key: `serviceFeature_${timestamp}_12`,
          _type: 'object',
          text: 'Continuous improvement and reporting'
        }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'A resilient supply chain is a decisive competitive advantage today. The systematic assessment and optimization of supply chain risks not only creates more security but also opens up strategic opportunities through improved transparency and agility.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI FTC GmbH'
  },
  faq: []
}

export async function createLieferkettenbewertungEn() {
  console.log('Creating Supply Chain Assessment EN page...')
  
  try {
    const result = await client.createOrReplace(lieferkettenbewertungEnPage)
    console.log(`✅ Created page: ${result._id}`)
    return result
  } catch (error) {
    console.error('Error creating page:', error)
    throw error
  }
}

// Execute if run directly
createLieferkettenbewertungEn().catch(console.error)
