// Import script for MaRisk Outsourcing Requirements - English Translation
// Source: marisk-outsourcing-requirements (German)
// Target: marisk-outsourcing-requirements-en (English)

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01'
})

// Import FAQ batches
import { mariskOutsourcingRequirementsEnFaqsBatch1 } from './marisk-outsourcing-requirements-en-faqs-batch1'
import { mariskOutsourcingRequirementsEnFaqsBatch2 } from './marisk-outsourcing-requirements-en-faqs-batch2'
import { mariskOutsourcingRequirementsEnFaqsBatch3 } from './marisk-outsourcing-requirements-en-faqs-batch3'
import { mariskOutsourcingRequirementsEnFaqsBatch4 } from './marisk-outsourcing-requirements-en-faqs-batch4'
import { mariskOutsourcingRequirementsEnFaqsBatch5 } from './marisk-outsourcing-requirements-en-faqs-batch5'

// Combine all FAQ batches
const allFaqs = [
  ...mariskOutsourcingRequirementsEnFaqsBatch1,
  ...mariskOutsourcingRequirementsEnFaqsBatch2,
  ...mariskOutsourcingRequirementsEnFaqsBatch3,
  ...mariskOutsourcingRequirementsEnFaqsBatch4,
  ...mariskOutsourcingRequirementsEnFaqsBatch5
]

const mariskOutsourcingRequirementsEnPage = {
  _id: 'marisk-outsourcing-requirements-en',
  _type: 'servicePage',
  title: 'MaRisk Outsourcing Requirements',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'marisk-outsourcing-requirements'
  },
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/marisk/marisk-outsourcing-requirements-en'
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
    title: 'MaRisk Outsourcing Requirements | ADVISORI',
    description: 'Comprehensive MaRisk Outsourcing Requirements frameworks for Austrian and German banks. We develop robust outsourcing governance structures, implement regulatory compliance systems, and create sustainable outsourcing excellence through innovative RegTech integration and strategic outsourcing optimization.',
    keywords: 'MaRisk Outsourcing Requirements, Banking Outsourcing, MaRisk Compliance, Outsourcing Governance, Risk Management, Vendor Management, Third Party Risk, Outsourcing Contracts'
  },
  heroSection: {
    _type: 'object',
    heading: 'MaRisk Outsourcing Requirements',
    tagline: 'Holistic MaRisk Outsourcing Requirements Excellence for Strategic Banking Partnerships',
    description: 'Modern banks need more than isolated outsourcing approaches – they need integrated outsourcing governance frameworks that connect MaRisk requirements with strategic partnership management and operational excellence. Successful outsourcing excellence requires holistic approaches that seamlessly combine risk assessment, contract design, technology integration, and continuous monitoring. We develop comprehensive MaRisk Outsourcing Requirements systems that not only ensure regulatory compliance but also create strategic competitive advantages, enable business innovation, and establish sustainable outsourcing excellence for banking institutions.',
    heroImage: {
      _type: 'image',
      alt: 'MaRisk Outsourcing Requirements'
    },
    benefits: [
      {
        _key: 'benefit_en_1',
        _type: 'object',
        text: 'Integrated outsourcing governance frameworks with holistic MaRisk compliance'
      },
      {
        _key: 'benefit_en_2',
        _type: 'object',
        text: 'Strategic risk assessment for operational excellence and business value'
      },
      {
        _key: 'benefit_en_3',
        _type: 'object',
        text: 'Innovative RegTech integration for intelligent outsourcing management'
      },
      {
        _key: 'benefit_en_4',
        _type: 'object',
        text: 'Sustainable outsourcing culture for continuous partnership optimization'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'MaRisk Outsourcing Requirements as Strategic Foundation for Banking Partnerships',
    description: 'Effective MaRisk Outsourcing Requirements are the strategic backbone of successful banking institutions and connect regulatory compliance with partnership optimization and outsourcing excellence. Modern outsourcing systems go beyond traditional vendor management approaches and create integrated frameworks that seamlessly connect risk assessment, business alignment, technology, and governance. Our outsourcing expertise combines proven risk management principles with innovative technologies for sustainable MaRisk excellence.',
    additionalInfo: 'Successful outsourcing systems require not only technical implementation but also organizational integration and cultural anchoring. Our holistic approach combines outsourcing design with change management and continuous optimization.',
    alert: {
      _type: 'object',
      title: 'Strategic Outsourcing Innovation',
      content: 'MaRisk Outsourcing Requirements systems are more than compliance tools – they are strategic enablers for operational excellence and business innovation. Our integrated approaches create not only regulatory security but also enable strategic flexibility and sustainable business development.'
    },
    points: [
      {
        _key: 'point_en_1',
        _type: 'object',
        text: 'Holistic outsourcing governance architecture for integrated risk management excellence'
      },
      {
        _key: 'point_en_2',
        _type: 'object',
        text: 'Strategic due diligence systems with precise business-risk alignment'
      },
      {
        _key: 'point_en_3',
        _type: 'object',
        text: 'Contract management framework for continuous outsourcing assessment and optimization'
      },
      {
        _key: 'point_en_4',
        _type: 'object',
        text: 'Technology-integrated monitoring platforms for real-time outsourcing monitoring and management'
      },
      {
        _key: 'point_en_5',
        _type: 'object',
        text: 'Continuous outsourcing evolution through performance monitoring and best practice integration'
      }
    ],
    serviceDescription: 'We develop and implement comprehensive MaRisk Outsourcing Requirements systems that meet regulatory requirements while increasing strategic flexibility, enabling business innovation, and creating sustainable competitive advantages. From risk assessment to technical implementation.',
    servicePoints: [
      {
        _key: 'servicePoint_en_1',
        _type: 'object',
        text: 'Integrated outsourcing governance architecture development for holistic risk management excellence'
      },
      {
        _key: 'servicePoint_en_2',
        _type: 'object',
        text: 'Strategic due diligence with precise business-risk alignment and assessment'
      },
      {
        _key: 'servicePoint_en_3',
        _type: 'object',
        text: 'Contract management framework for continuous outsourcing assessment and optimization'
      },
      {
        _key: 'servicePoint_en_4',
        _type: 'object',
        text: 'Technology integration for intelligent outsourcing monitoring and management'
      },
      {
        _key: 'servicePoint_en_5',
        _type: 'object',
        text: 'Continuous outsourcing development and performance optimization'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our Outsourcing Expertise',
      points: [
        {
          _key: 'whyUs_en_1',
          _type: 'object',
          text: 'Comprehensive experience in developing integrated outsourcing governance frameworks'
        },
        {
          _key: 'whyUs_en_2',
          _type: 'object',
          text: 'Proven expertise in MaRisk-compliant outsourcing implementation and optimization'
        },
        {
          _key: 'whyUs_en_3',
          _type: 'object',
          text: 'Innovative technology integration for future-proof outsourcing solutions'
        },
        {
          _key: 'whyUs_en_4',
          _type: 'object',
          text: 'Holistic consulting approaches for sustainable outsourcing excellence and business value'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Strategic Outsourcing Development Approach',
    description: 'We develop together with you a customized MaRisk Outsourcing Requirements system that not only ensures regulatory compliance but also increases strategic flexibility and creates sustainable competitive advantages for banking institutions.',
    points: [
      {
        _key: 'approach_en_1',
        _type: 'object',
        text: 'Comprehensive risk assessment and current-state analysis of your outsourcing position'
      },
      {
        _key: 'approach_en_2',
        _type: 'object',
        text: 'Strategic governance design with focus on business integration and operational excellence'
      },
      {
        _key: 'approach_en_3',
        _type: 'object',
        text: 'Agile implementation with continuous stakeholder engagement and feedback integration'
      },
      {
        _key: 'approach_en_4',
        _type: 'object',
        text: 'Technology integration with modern RegTech solutions for intelligent outsourcing management'
      },
      {
        _key: 'approach_en_5',
        _type: 'object',
        text: 'Continuous optimization and performance monitoring for long-term outsourcing excellence'
      }
    ]
  },
  services: [
    {
      _key: 'service_en_1',
      _type: 'object',
      title: 'Integrated Outsourcing Governance Architecture Development',
      description: 'We develop holistic outsourcing governance architectures that seamlessly integrate all aspects of strategic outsourcing management while connecting MaRisk compliance with strategic flexibility.',
      features: [
        {
          _key: 'feature_en_1_1',
          _type: 'object',
          text: 'Holistic outsourcing design principles for integrated risk management excellence'
        },
        {
          _key: 'feature_en_1_2',
          _type: 'object',
          text: 'Modular governance architecture components for flexible system adaptation and extension'
        },
        {
          _key: 'feature_en_1_3',
          _type: 'object',
          text: 'Cross-functional integration of different outsourcing categories and business areas'
        },
        {
          _key: 'feature_en_1_4',
          _type: 'object',
          text: 'Scalable outsourcing structures for growing business requirements'
        }
      ]
    },
    {
      _key: 'service_en_2',
      _type: 'object',
      title: 'Strategic Due Diligence',
      description: 'We implement comprehensive due diligence structures that create strategic outsourcing management while ensuring optimal balance between risk control and business flexibility.',
      features: [
        {
          _key: 'feature_en_2_1',
          _type: 'object',
          text: 'Due diligence framework development for precise outsourcing management and assessment'
        },
        {
          _key: 'feature_en_2_2',
          _type: 'object',
          text: 'Strategic risk assessment structures based on business requirements and regulation'
        },
        {
          _key: 'feature_en_2_3',
          _type: 'object',
          text: 'Vendor evaluation processes for comprehensive outsourcing integration and efficiency optimization'
        },
        {
          _key: 'feature_en_2_4',
          _type: 'object',
          text: 'Continuous due diligence assessment and adaptive structure optimization'
        }
      ]
    },
    {
      _key: 'service_en_3',
      _type: 'object',
      title: 'Contract Management Framework',
      description: 'We develop comprehensive contract management frameworks that define strategic contract management while systematically monitoring outsourcing performance, efficiency, and business alignment.',
      features: [
        {
          _key: 'feature_en_3_1',
          _type: 'object',
          text: 'Contract design methodologies for systematic outsourcing assessment'
        },
        {
          _key: 'feature_en_3_2',
          _type: 'object',
          text: 'Key Performance Indicators (KPIs) for continuous outsourcing performance monitoring'
        },
        {
          _key: 'feature_en_3_3',
          _type: 'object',
          text: 'Contract compliance management and adjustment processes for proactive improvement'
        },
        {
          _key: 'feature_en_3_4',
          _type: 'object',
          text: 'Continuous contract management optimization and best practice integration'
        }
      ]
    },
    {
      _key: 'service_en_4',
      _type: 'object',
      title: 'Technology-Integrated Monitoring Platforms',
      description: 'We implement modern RegTech solutions that automate outsourcing systems while enabling real-time monitoring, intelligent analytics, and efficient outsourcing management.',
      features: [
        {
          _key: 'feature_en_4_1',
          _type: 'object',
          text: 'Integrated monitoring platforms for central outsourcing administration'
        },
        {
          _key: 'feature_en_4_2',
          _type: 'object',
          text: 'Real-time outsourcing monitoring and automated performance adjustment systems'
        },
        {
          _key: 'feature_en_4_3',
          _type: 'object',
          text: 'Advanced analytics and machine learning for intelligent outsourcing assessment'
        },
        {
          _key: 'feature_en_4_4',
          _type: 'object',
          text: 'Automated outsourcing reporting and dashboard solutions for management transparency'
        }
      ]
    },
    {
      _key: 'service_en_5',
      _type: 'object',
      title: 'Third Party Risk Management',
      description: 'We create sustainable third party risk management systems that anchor outsourcing frameworks throughout the organization while promoting employee engagement and risk excellence.',
      features: [
        {
          _key: 'feature_en_5_1',
          _type: 'object',
          text: 'Third party risk structures for sustainable outsourcing anchoring'
        },
        {
          _key: 'feature_en_5_2',
          _type: 'object',
          text: 'Employee training and competency development for outsourcing excellence'
        },
        {
          _key: 'feature_en_5_3',
          _type: 'object',
          text: 'Change management programs for successful outsourcing transformation'
        },
        {
          _key: 'feature_en_5_4',
          _type: 'object',
          text: 'Continuous third party risk assessment and optimization'
        }
      ]
    },
    {
      _key: 'service_en_6',
      _type: 'object',
      title: 'Continuous Outsourcing Optimization',
      description: 'We ensure long-term outsourcing excellence through continuous monitoring, performance assessment, and proactive optimization of your MaRisk Outsourcing Requirements systems.',
      features: [
        {
          _key: 'feature_en_6_1',
          _type: 'object',
          text: 'Outsourcing performance monitoring and effectiveness assessment'
        },
        {
          _key: 'feature_en_6_2',
          _type: 'object',
          text: 'Continuous improvement through best practice integration and innovation'
        },
        {
          _key: 'feature_en_6_3',
          _type: 'object',
          text: 'Regulatory updates and outsourcing adjustments for sustainable compliance'
        },
        {
          _key: 'feature_en_6_4',
          _type: 'object',
          text: 'Strategic outsourcing evolution for future business requirements'
        }
      ]
    }
  ],
  faq: allFaqs,
  testimonial: {
    _type: 'object',
    quote: 'Effective MaRisk Outsourcing Requirements are the strategic foundation for sustainable banking partnerships and connect regulatory compliance with risk assessment optimization and outsourcing integration. Modern outsourcing systems create not only compliance security but also enable strategic flexibility and operational efficiency. Our integrated outsourcing approaches transform traditional vendor management practices into strategic business enablers that ensure sustainable business success and operational excellence for banking institutions.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI FTC GmbH'
  }
}

async function importMariskOutsourcingRequirementsEn() {
  console.log('Starting import of MaRisk Outsourcing Requirements EN page...')
  console.log(`Total FAQs to import: ${allFaqs.length}`)
  
  try {
    // Check if document already exists
    const existing = await client.fetch(`*[_id == "marisk-outsourcing-requirements-en"][0]`)
    
    if (existing) {
      console.log('Document already exists, updating...')
      const result = await client.createOrReplace(mariskOutsourcingRequirementsEnPage)
      console.log('Document updated successfully:', result._id)
    } else {
      console.log('Creating new document...')
      const result = await client.create(mariskOutsourcingRequirementsEnPage)
      console.log('Document created successfully:', result._id)
    }
    
    // Verify the import
    const verification = await client.fetch(`*[_id == "marisk-outsourcing-requirements-en"]{
      _id,
      title,
      language,
      "faqCount": count(faq),
      "servicesCount": count(services)
    }[0]`)
    
    console.log('\nVerification:')
    console.log(`- ID: ${verification._id}`)
    console.log(`- Title: ${verification.title}`)
    console.log(`- Language: ${verification.language}`)
    console.log(`- FAQ Count: ${verification.faqCount}`)
    console.log(`- Services Count: ${verification.servicesCount}`)
    
  } catch (error) {
    console.error('Error importing document:', error)
    throw error
  }
}

importMariskOutsourcingRequirementsEn()
  .then(() => {
    console.log('\nImport completed successfully!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('\nImport failed:', error)
    process.exit(1)
  })
