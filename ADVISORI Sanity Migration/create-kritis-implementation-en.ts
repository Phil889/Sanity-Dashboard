import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const kritisImplementationEn = {
  _id: 'kritis-implementation-en',
  _type: 'servicePage',
  title: 'CRITIS Implementation',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'kritis-implementation'
  },
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/kritis/kritis-implementation-en'
  },
  parent: {
    _type: 'reference',
    _ref: 'kritis'
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
    title: 'CRITIS Implementation | ADVISORI',
    description: 'Professional CRITIS implementation for critical infrastructures. We support you in the complete implementation of CRITIS regulations and BSI requirements.',
    keywords: 'CRITIS Implementation, Critical Infrastructure, BSI IT-Grundschutz, Cybersecurity, CRITIS Regulation, Information Security'
  },
  heroSection: {
    _type: 'object',
    heroImage: {
      _type: 'image',
      alt: 'CRITIS Implementation'
    },
    tagline: 'Comprehensive CRITIS Implementation for Critical Infrastructures',
    heading: 'CRITIS Implementation',
    description: 'We accompany you through the complete implementation of CRITIS regulations and ensure that your critical infrastructure meets the highest security standards.',
    benefits: [
      {
        _type: 'object',
        _key: 'benefit_en_1739889600001_1',
        text: 'Complete implementation of CRITIS regulations and BSI requirements'
      },
      {
        _type: 'object',
        _key: 'benefit_en_1739889600001_2',
        text: 'Implementation of Information Security Management Systems (ISMS)'
      },
      {
        _type: 'object',
        _key: 'benefit_en_1739889600001_3',
        text: 'Building effective cybersecurity and risk management processes'
      },
      {
        _type: 'object',
        _key: 'benefit_en_1739889600001_4',
        text: 'Continuous monitoring and adaptation to regulatory changes'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'CRITIS Implementation',
    description: 'The implementation of CRITIS regulations requires a systematic and structured approach. We support operators of critical infrastructures in the complete implementation of all regulatory requirements and the establishment of a robust cybersecurity framework.',
    points: [
      {
        _type: 'object',
        _key: 'point_en_1739889600001_1',
        text: 'Building and implementing an ISMS according to BSI IT-Grundschutz'
      },
      {
        _type: 'object',
        _key: 'point_en_1739889600001_2',
        text: 'Development and implementation of cybersecurity policies and processes'
      },
      {
        _type: 'object',
        _key: 'point_en_1739889600001_3',
        text: 'Implementation of incident response and reporting procedures'
      },
      {
        _type: 'object',
        _key: 'point_en_1739889600001_4',
        text: 'Building monitoring and surveillance systems'
      },
      {
        _type: 'object',
        _key: 'point_en_1739889600001_5',
        text: 'Employee training and awareness programs'
      }
    ],
    alert: {
      _type: 'object',
      title: 'Regulatory Note',
      content: 'CRITIS implementation is a continuous process that requires regular reviews and adjustments. Professional guidance ensures that all requirements are met and maintained.'
    },
    whyUs: {
      _type: 'object',
      title: 'Our Expertise',
      points: [
        {
          _type: 'object',
          _key: 'whyUs_en_1739889600001_1',
          text: 'Deep expertise in CRITIS regulation and BSI standards'
        },
        {
          _type: 'object',
          _key: 'whyUs_en_1739889600001_2',
          text: 'Years of experience in implementing critical infrastructures'
        },
        {
          _type: 'object',
          _key: 'whyUs_en_1739889600001_3',
          text: 'Holistic approach from analysis to complete implementation'
        },
        {
          _type: 'object',
          _key: 'whyUs_en_1739889600001_4',
          text: 'Continuous support with regulatory changes'
        }
      ]
    },
    additionalInfo: 'A professional CRITIS implementation not only reduces regulatory risks but also strengthens operational resilience and stakeholder confidence in the security of your critical infrastructure.',
    serviceDescription: 'We offer comprehensive support for CRITIS implementation, from initial analysis through system implementation to continuous optimization and compliance monitoring.',
    servicePoints: [
      {
        _type: 'object',
        _key: 'servicePoint_en_1739889600001_1',
        text: 'ISMS setup and implementation'
      },
      {
        _type: 'object',
        _key: 'servicePoint_en_1739889600001_2',
        text: 'Cybersecurity framework development'
      },
      {
        _type: 'object',
        _key: 'servicePoint_en_1739889600001_3',
        text: 'Technical security measures implementation'
      },
      {
        _type: 'object',
        _key: 'servicePoint_en_1739889600001_4',
        text: 'Incident response system setup'
      },
      {
        _type: 'object',
        _key: 'servicePoint_en_1739889600001_5',
        text: 'Continuous compliance monitoring'
      }
    ]
  },
  approach: {
    _type: 'object',
    title: 'Our Implementation Approach',
    description: 'We follow a systematic and phased approach to CRITIS implementation that considers both technical and organizational aspects.',
    points: [
      {
        _type: 'object',
        _key: 'approach_en_1739889600001_1',
        text: 'Detailed as-is analysis and requirements assessment'
      },
      {
        _type: 'object',
        _key: 'approach_en_1739889600001_2',
        text: 'Development of a customized implementation strategy'
      },
      {
        _type: 'object',
        _key: 'approach_en_1739889600001_3',
        text: 'Phased implementation with continuous quality control'
      },
      {
        _type: 'object',
        _key: 'approach_en_1739889600001_4',
        text: 'Integration of existing systems and processes'
      },
      {
        _type: 'object',
        _key: 'approach_en_1739889600001_5',
        text: 'Final validation and documentation'
      }
    ]
  },
  testimonial: {
    _type: 'object',
    company: 'ADVISORI FTC GmbH',
    name: 'Asan Stefanski',
    position: 'Director',
    quote: 'CRITIS implementation by ADVISORI was a decisive step for our cybersecurity strategy. The structured approach and deep expertise helped us meet all regulatory requirements while strengthening our operational security.'
  },
  services: [
    {
      _type: 'object',
      _key: 'service_en_1739889600001_1',
      title: 'ISMS Setup and Implementation',
      description: 'We develop and implement a complete Information Security Management System according to BSI IT-Grundschutz for your critical infrastructure.',
      features: [
        {
          _type: 'object',
          _key: 'serviceFeature_en_1739889600001_1',
          text: 'BSI IT-Grundschutz compliant ISMS architecture'
        },
        {
          _type: 'object',
          _key: 'serviceFeature_en_1739889600001_2',
          text: 'Risk analysis and protection requirements assessment'
        },
        {
          _type: 'object',
          _key: 'serviceFeature_en_1739889600001_3',
          text: 'Policy and process development'
        },
        {
          _type: 'object',
          _key: 'serviceFeature_en_1739889600001_4',
          text: 'Continuous improvement processes'
        }
      ]
    },
    {
      _type: 'object',
      _key: 'service_en_1739889600001_2',
      title: 'Technical Security Measures',
      description: 'Implementation of technical security measures to meet CRITIS requirements and protect critical systems.',
      features: [
        {
          _type: 'object',
          _key: 'serviceFeature_en_1739889600001_5',
          text: 'Security monitoring and SIEM integration'
        },
        {
          _type: 'object',
          _key: 'serviceFeature_en_1739889600001_6',
          text: 'Network segmentation and access controls'
        },
        {
          _type: 'object',
          _key: 'serviceFeature_en_1739889600001_7',
          text: 'Incident detection and response systems'
        },
        {
          _type: 'object',
          _key: 'serviceFeature_en_1739889600001_8',
          text: 'Backup and recovery solutions'
        }
      ]
    }
  ],
  faq: []
}

async function createKritisImplementationEn() {
  console.log('Creating CRITIS Implementation EN page...')
  
  try {
    const result = await client.createOrReplace(kritisImplementationEn)
    console.log(`✅ CRITIS Implementation EN page created: ${result._id}`)
    return result
  } catch (error) {
    console.error('❌ Error creating page:', error)
    throw error
  }
}

createKritisImplementationEn()
