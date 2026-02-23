import 'dotenv/config'
// Import script for MaRisk Risk Strategy - English Translation
// Complete translation with ALL sections from German source

import { createClient } from '@sanity/client'

// Import FAQ batches
import { mariskRiskStrategyEnFaqsBatch1 } from './marisk-risk-strategy-en-faqs-batch1'
import { mariskRiskStrategyEnFaqsBatch2 } from './marisk-risk-strategy-en-faqs-batch2'
import { mariskRiskStrategyEnFaqsBatch3 } from './marisk-risk-strategy-en-faqs-batch3'
import { mariskRiskStrategyEnFaqsBatch4 } from './marisk-risk-strategy-en-faqs-batch4'
import { mariskRiskStrategyEnFaqsBatch5 } from './marisk-risk-strategy-en-faqs-batch5'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

// Combine all FAQ batches
const allFaqs = [
  ...mariskRiskStrategyEnFaqsBatch1,
  ...mariskRiskStrategyEnFaqsBatch2,
  ...mariskRiskStrategyEnFaqsBatch3,
  ...mariskRiskStrategyEnFaqsBatch4,
  ...mariskRiskStrategyEnFaqsBatch5
]

const timestamp = Date.now()

const mariskRiskStrategyEnPage = {
  _id: 'marisk-risk-strategy-en',
  _type: 'servicePage',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'marisk-risk-strategy'
  },
  title: 'MaRisk Risk Strategy',
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/marisk/marisk-risk-strategy-en'
  },
  parent: {
    _type: 'reference',
    _ref: 'marisk'
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
    title: 'MaRisk Risk Strategy | ADVISORI',
    description: 'Strategic MaRisk Risk Strategy development for Austrian and German banks. We implement holistic risk strategy frameworks, develop risk-based governance structures, and create sustainable risk excellence through innovative RegTech integration and strategic risk management optimization.',
    keywords: 'MaRisk Risk Strategy, Risk Strategy, Banking Risk Management, MaRisk Compliance, Risk Governance, Strategic Risk Management, Banking Risk Strategy, Risk Appetite Framework'
  },
  heroSection: {
    _type: 'object',
    heading: 'MaRisk Risk Strategy',
    tagline: 'Comprehensive MaRisk Risk Strategy Excellence for Strategic Banking Innovation',
    description: 'Modern banks need more than isolated risk management approaches – they require integrated Risk Strategies that connect MaRisk requirements with strategic business objectives and operational excellence. Successful risk strategy excellence demands holistic approaches that seamlessly combine Risk Governance, strategic risk management, technology integration, and continuous optimization. We develop comprehensive MaRisk Risk Strategies that not only ensure regulatory compliance but also create strategic competitive advantages, enable business innovation, and establish sustainable Risk Excellence for banking institutions.',
    heroImage: {
      _type: 'image',
      alt: 'MaRisk Risk Strategy'
    },
    benefits: [
      {
        _key: `benefit_${timestamp}_1`,
        _type: 'object',
        text: 'Integrated Risk Strategy frameworks with comprehensive MaRisk compliance'
      },
      {
        _key: `benefit_${timestamp}_2`,
        _type: 'object',
        text: 'Strategic Risk Governance for operational excellence and business value'
      },
      {
        _key: `benefit_${timestamp}_3`,
        _type: 'object',
        text: 'Innovative RegTech integration for intelligent risk strategy management'
      },
      {
        _key: `benefit_${timestamp}_4`,
        _type: 'object',
        text: 'Sustainable Risk Culture for continuous strategy optimization'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'MaRisk Risk Strategy as Strategic Foundation for Banking Excellence',
    description: 'An effective MaRisk Risk Strategy is the strategic backbone of successful banking institutions, connecting regulatory compliance with business strategy optimization and risk management excellence. Modern Risk Strategies go beyond traditional risk management approaches and create integrated frameworks that seamlessly connect risk strategy, business alignment, technology, and governance. Our risk strategy expertise combines proven Risk Management principles with innovative technologies for sustainable MaRisk excellence.',
    additionalInfo: 'Successful Risk Strategies require not only strategic planning but also organizational integration and cultural anchoring. Our holistic approach combines risk strategy design with change management and continuous optimization.',
    alert: {
      _type: 'object',
      title: 'Strategic Risk Strategy Innovation',
      content: 'MaRisk Risk Strategies are more than compliance tools – they are strategic enablers for operational excellence and business innovation. Our integrated approaches create not only regulatory security but also enable strategic flexibility and sustainable business development.'
    },
    points: [
      {
        _key: `point_${timestamp}_1`,
        _type: 'object',
        text: 'Holistic risk strategy architecture for integrated Risk Management excellence'
      },
      {
        _key: `point_${timestamp}_2`,
        _type: 'object',
        text: 'Strategic Risk Governance systems with precise business-risk alignment'
      },
      {
        _key: `point_${timestamp}_3`,
        _type: 'object',
        text: 'Risk Appetite framework for continuous strategy assessment and optimization'
      },
      {
        _key: `point_${timestamp}_4`,
        _type: 'object',
        text: 'Technology-integrated risk platforms for real-time strategy monitoring and management'
      },
      {
        _key: `point_${timestamp}_5`,
        _type: 'object',
        text: 'Continuous risk strategy evolution through performance monitoring and best practice integration'
      }
    ],
    serviceDescription: 'We develop and implement comprehensive MaRisk Risk Strategies that meet regulatory requirements while increasing strategic flexibility, enabling business innovation, and creating sustainable competitive advantages. From strategy development to technical implementation.',
    servicePoints: [
      {
        _key: `servicePoint_${timestamp}_1`,
        _type: 'object',
        text: 'Integrated risk strategy architecture development for holistic Risk Management excellence'
      },
      {
        _key: `servicePoint_${timestamp}_2`,
        _type: 'object',
        text: 'Strategic Risk Governance with precise business-risk alignment and assessment'
      },
      {
        _key: `servicePoint_${timestamp}_3`,
        _type: 'object',
        text: 'Risk Appetite framework for continuous strategy assessment and optimization'
      },
      {
        _key: `servicePoint_${timestamp}_4`,
        _type: 'object',
        text: 'Technology integration for intelligent risk strategy monitoring and management'
      },
      {
        _key: `servicePoint_${timestamp}_5`,
        _type: 'object',
        text: 'Continuous risk strategy advancement and performance optimization'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our Risk Strategy Expertise',
      points: [
        {
          _key: `whyUs_${timestamp}_1`,
          _type: 'object',
          text: 'Extensive experience in developing integrated Risk Strategy frameworks'
        },
        {
          _key: `whyUs_${timestamp}_2`,
          _type: 'object',
          text: 'Proven expertise in MaRisk-compliant risk strategy implementation and optimization'
        },
        {
          _key: `whyUs_${timestamp}_3`,
          _type: 'object',
          text: 'Innovative technology integration for future-proof risk strategy solutions'
        },
        {
          _key: `whyUs_${timestamp}_4`,
          _type: 'object',
          text: 'Holistic consulting approaches for sustainable Risk Strategy excellence and business value'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Strategic Risk Strategy Development Approach',
    description: 'We work with you to develop a customized MaRisk Risk Strategy that not only ensures regulatory compliance but also increases strategic flexibility and creates sustainable competitive advantages for banking institutions.',
    points: [
      {
        _key: `approach_${timestamp}_1`,
        _type: 'object',
        text: 'Comprehensive Risk Assessment and current-state analysis of your Risk Strategy position'
      },
      {
        _key: `approach_${timestamp}_2`,
        _type: 'object',
        text: 'Strategic Risk Design with focus on business integration and operational excellence'
      },
      {
        _key: `approach_${timestamp}_3`,
        _type: 'object',
        text: 'Agile implementation with continuous stakeholder engagement and feedback integration'
      },
      {
        _key: `approach_${timestamp}_4`,
        _type: 'object',
        text: 'Technology integration with modern RegTech solutions for intelligent risk strategy management'
      },
      {
        _key: `approach_${timestamp}_5`,
        _type: 'object',
        text: 'Continuous optimization and performance monitoring for long-term Risk Strategy excellence'
      }
    ]
  },
  services: [
    {
      _key: `service_${timestamp}_1`,
      _type: 'object',
      title: 'Integrated Risk Strategy Architecture Development',
      description: 'We develop holistic Risk Strategy architectures that seamlessly integrate all aspects of strategic risk management while connecting MaRisk compliance with strategic flexibility.',
      features: [
        {
          _key: `feature_${timestamp}_1`,
          _type: 'object',
          text: 'Holistic risk strategy design principles for integrated Risk Management excellence'
        },
        {
          _key: `feature_${timestamp}_2`,
          _type: 'object',
          text: 'Modular strategy architecture components for flexible system adaptation and expansion'
        },
        {
          _key: `feature_${timestamp}_3`,
          _type: 'object',
          text: 'Cross-functional integration of various risk categories and business areas'
        },
        {
          _key: `feature_${timestamp}_4`,
          _type: 'object',
          text: 'Scalable risk strategy structures for growing business requirements'
        }
      ]
    },
    {
      _key: `service_${timestamp}_2`,
      _type: 'object',
      title: 'Strategic Risk Governance',
      description: 'We implement comprehensive Risk Governance structures that create strategic risk management while ensuring optimal balance between risk control and business flexibility.',
      features: [
        {
          _key: `feature_${timestamp}_5`,
          _type: 'object',
          text: 'Risk Governance framework development for precise risk strategy management and assessment'
        },
        {
          _key: `feature_${timestamp}_6`,
          _type: 'object',
          text: 'Strategic Risk Committee structures based on business requirements and regulation'
        },
        {
          _key: `feature_${timestamp}_7`,
          _type: 'object',
          text: 'Risk Decision-Making processes for comprehensive strategy integration and efficiency optimization'
        },
        {
          _key: `feature_${timestamp}_8`,
          _type: 'object',
          text: 'Continuous Risk Governance assessment and adaptive structure optimization'
        }
      ]
    },
    {
      _key: `service_${timestamp}_3`,
      _type: 'object',
      title: 'Risk Appetite Framework',
      description: 'We develop comprehensive Risk Appetite frameworks that define strategic risk tolerance while systematically monitoring risk strategy performance, efficiency, and business alignment.',
      features: [
        {
          _key: `feature_${timestamp}_9`,
          _type: 'object',
          text: 'Risk Appetite methodologies for systematic risk strategy assessment'
        },
        {
          _key: `feature_${timestamp}_10`,
          _type: 'object',
          text: 'Key Risk Indicators (KRIs) for continuous strategy performance monitoring'
        },
        {
          _key: `feature_${timestamp}_11`,
          _type: 'object',
          text: 'Risk Tolerance management and adjustment processes for proactive improvement'
        },
        {
          _key: `feature_${timestamp}_12`,
          _type: 'object',
          text: 'Continuous Risk Appetite optimization and best practice integration'
        }
      ]
    },
    {
      _key: `service_${timestamp}_4`,
      _type: 'object',
      title: 'Technology-Integrated Risk Platforms',
      description: 'We implement modern RegTech solutions that automate Risk Strategies while enabling real-time monitoring, intelligent analytics, and efficient strategy management.',
      features: [
        {
          _key: `feature_${timestamp}_13`,
          _type: 'object',
          text: 'Integrated risk platforms for central Risk Strategy administration'
        },
        {
          _key: `feature_${timestamp}_14`,
          _type: 'object',
          text: 'Real-time Risk Monitoring and automated Strategy adjustment systems'
        },
        {
          _key: `feature_${timestamp}_15`,
          _type: 'object',
          text: 'Advanced Analytics and Machine Learning for intelligent risk strategy assessment'
        },
        {
          _key: `feature_${timestamp}_16`,
          _type: 'object',
          text: 'Automated Risk Reporting and dashboard solutions for management transparency'
        }
      ]
    },
    {
      _key: `service_${timestamp}_5`,
      _type: 'object',
      title: 'Risk Culture and Transformation',
      description: 'We create sustainable risk cultures that anchor Risk Strategies throughout the organization while promoting employee engagement and Risk Excellence.',
      features: [
        {
          _key: `feature_${timestamp}_17`,
          _type: 'object',
          text: 'Risk Culture structures for sustainable risk strategy anchoring'
        },
        {
          _key: `feature_${timestamp}_18`,
          _type: 'object',
          text: 'Employee training and competency development for Risk Strategy excellence'
        },
        {
          _key: `feature_${timestamp}_19`,
          _type: 'object',
          text: 'Change Management programs for successful risk strategy transformation'
        },
        {
          _key: `feature_${timestamp}_20`,
          _type: 'object',
          text: 'Continuous Risk Culture assessment and optimization'
        }
      ]
    },
    {
      _key: `service_${timestamp}_6`,
      _type: 'object',
      title: 'Continuous Risk Strategy Optimization',
      description: 'We ensure long-term Risk Strategy excellence through continuous monitoring, performance assessment, and proactive optimization of your MaRisk Risk Strategies.',
      features: [
        {
          _key: `feature_${timestamp}_21`,
          _type: 'object',
          text: 'Risk Strategy performance monitoring and effectiveness assessment'
        },
        {
          _key: `feature_${timestamp}_22`,
          _type: 'object',
          text: 'Continuous improvement through best practice integration and innovation'
        },
        {
          _key: `feature_${timestamp}_23`,
          _type: 'object',
          text: 'Regulatory updates and risk strategy adjustments for sustainable compliance'
        },
        {
          _key: `feature_${timestamp}_24`,
          _type: 'object',
          text: 'Strategic risk strategy evolution for future business requirements'
        }
      ]
    }
  ],
  faq: allFaqs,
  testimonial: {
    _type: 'object',
    quote: 'An effective MaRisk Risk Strategy is the strategic foundation for sustainable banking excellence, connecting regulatory compliance with business strategy optimization and risk management integration. Modern risk strategies create not only compliance security but also enable strategic flexibility and operational efficiency. Our integrated Risk Strategy approaches transform traditional risk management practices into strategic business enablers that ensure sustainable business success and operational excellence for banking institutions.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI FTC GmbH'
  }
}

async function importMariskRiskStrategyEn() {
  console.log('Starting MaRisk Risk Strategy English page import...')
  console.log(`Total FAQs to import: ${allFaqs.length}`)
  
  try {
    const result = await client.createOrReplace(mariskRiskStrategyEnPage)
    console.log(`✅ Successfully imported: ${result._id}`)
    console.log(`   Title: ${result.title}`)
    console.log(`   Language: ${result.language}`)
    console.log(`   FAQs: ${result.faq?.length || 0}`)
    console.log(`   Services: ${result.services?.length || 0}`)
    return result
  } catch (error) {
    console.error('❌ Error importing page:', error)
    throw error
  }
}

importMariskRiskStrategyEn()
  .then(() => {
    console.log('Import completed successfully!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Import failed:', error)
    process.exit(1)
  })
