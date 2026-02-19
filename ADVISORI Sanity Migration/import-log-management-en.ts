// Import script for Log Management - English Translation
// Source: log-management (German)
// Target: log-management-en (English)

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
})

// Import FAQ batches
import { logManagementEnFaqsBatch1 } from './log-management-en-faqs-batch1'
import { logManagementEnFaqsBatch2 } from './log-management-en-faqs-batch2'
import { logManagementEnFaqsBatch3 } from './log-management-en-faqs-batch3'
import { logManagementEnFaqsBatch4 } from './log-management-en-faqs-batch4'
import { logManagementEnFaqsBatch5 } from './log-management-en-faqs-batch5'

// Combine all FAQ batches (20 unique FAQs - source has duplicates for 17-20)
const allFaqs = [
  ...logManagementEnFaqsBatch1,
  ...logManagementEnFaqsBatch2,
  ...logManagementEnFaqsBatch3,
  ...logManagementEnFaqsBatch4,
  ...logManagementEnFaqsBatch5,
]

const logManagementEnDocument = {
  _id: 'log-management-en',
  _type: 'servicePage',
  title: 'Log Management',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'log-management'
  },
  slug: {
    _type: 'slug',
    current: 'information-security/security-operations-secops/log-management-en'
  },
  parent: {
    _type: 'reference',
    _ref: 'security-operations-secops-service-page'
  },
  references: {
    _type: 'object',
    topLevelParent: {
      _type: 'reference',
      _ref: 'informationssicherheit'
    }
  },
  seo: {
    _type: 'seo',
    title: 'Log Management | ADVISORI',
    description: 'Professional support for implementing and optimizing log management solutions. We help you with collection, analysis, and correlation of logs to improve your IT security and compliance.',
    keywords: 'Log Management, SIEM, Log Data Analysis, Incident Response, Compliance, IT Security, Security Operations, Cyber Security, Real-time Monitoring, Audit'
  },
  heroSection: {
    _type: 'object',
    heading: 'Log Management',
    tagline: 'Transparent. Secure. Compliant.',
    description: 'We support you in the efficient collection, analysis, and management of log data. From strategy development to technical implementation – for a future-proof IT security infrastructure.',
    heroImage: {
      _type: 'image',
      alt: 'Log Management'
    },
    benefits: [
      {
        _key: 'benefit_en_1739456790001_1',
        _type: 'object',
        text: 'Optimization and automation of log management processes'
      },
      {
        _key: 'benefit_en_1739456790001_2',
        _type: 'object',
        text: 'Early detection of security incidents'
      },
      {
        _key: 'benefit_en_1739456790001_3',
        _type: 'object',
        text: 'Integration of modern SIEM solutions'
      },
      {
        _key: 'benefit_en_1739456790001_4',
        _type: 'object',
        text: 'Ensuring compliance requirements'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'Log Management',
    description: 'The constantly growing requirements for log management require efficient processes and modern technical solutions. We support you in optimizing your log management strategy and integrating forward-looking SIEM solutions.',
    additionalInfo: 'The complexity and volume of log data are constantly increasing. Companies that invest early in optimizing and automating their log management gain a sustainable security advantage through improved attack detection and incident response capabilities.',
    serviceDescription: 'Our offering includes comprehensive support for your log management. From analyzing existing processes to integrating SIEM solutions to continuous optimization and quality assurance.',
    alert: {
      title: 'Expert Tip',
      content: 'Early integration of SIEM solutions and automation of log management processes are key factors for proactive IT security. Investments in these areas pay off through faster detection of security incidents and improved compliance.'
    },
    points: [
      {
        _key: 'point_en_1739456790001_1',
        _type: 'object',
        text: 'Development of a comprehensive log management strategy'
      },
      {
        _key: 'point_en_1739456790001_2',
        _type: 'object',
        text: 'Integration of SIEM solutions and automation'
      },
      {
        _key: 'point_en_1739456790001_3',
        _type: 'object',
        text: 'Implementation of security monitoring and alerting'
      },
      {
        _key: 'point_en_1739456790001_4',
        _type: 'object',
        text: 'Analysis and correlation of log data for extended threat intelligence'
      },
      {
        _key: 'point_en_1739456790001_5',
        _type: 'object',
        text: 'Building incident response processes'
      }
    ],
    servicePoints: [
      {
        _key: 'servicePoint_en_1739456790001_1',
        _type: 'object',
        text: 'Log management strategy and architecture'
      },
      {
        _key: 'servicePoint_en_1739456790001_2',
        _type: 'object',
        text: 'Integration of SIEM solutions'
      },
      {
        _key: 'servicePoint_en_1739456790001_3',
        _type: 'object',
        text: 'Security monitoring and alerting'
      },
      {
        _key: 'servicePoint_en_1739456790001_4',
        _type: 'object',
        text: 'Incident response and forensics'
      },
      {
        _key: 'servicePoint_en_1739456790001_5',
        _type: 'object',
        text: 'Compliance and audit support'
      }
    ],
    whyUs: {
      title: 'Our Strengths',
      points: [
        {
          _key: 'whyUs_en_1739456790001_1',
          _type: 'object',
          text: 'Years of experience in log management and SIEM'
        },
        {
          _key: 'whyUs_en_1739456790001_2',
          _type: 'object',
          text: 'Deep understanding of modern security architectures'
        },
        {
          _key: 'whyUs_en_1739456790001_3',
          _type: 'object',
          text: 'Expertise in integrating SIEM solutions'
        },
        {
          _key: 'whyUs_en_1739456790001_4',
          _type: 'object',
          text: 'Proven methods for process optimization'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'Our approach to log management is systematic, practice-oriented, and tailored to your specific requirements.',
    points: [
      {
        _key: 'approach_en_1739456790001_1',
        _type: 'object',
        text: 'Analysis of existing log management processes'
      },
      {
        _key: 'approach_en_1739456790001_2',
        _type: 'object',
        text: 'Identification of optimization potentials'
      },
      {
        _key: 'approach_en_1739456790001_3',
        _type: 'object',
        text: 'Development of a target architecture'
      },
      {
        _key: 'approach_en_1739456790001_4',
        _type: 'object',
        text: 'Implementation of SIEM solutions'
      },
      {
        _key: 'approach_en_1739456790001_5',
        _type: 'object',
        text: 'Continuous optimization and further development'
      }
    ]
  },
  services: [
    {
      _key: 'service_en_1739456790001_1',
      _type: 'object',
      title: 'Strategy & SIEM Integration',
      description: 'Development of a holistic log management strategy and integration of modern SIEM solutions.',
      features: [
        {
          _key: 'feature_en_1739456790001_1',
          _type: 'object',
          text: 'Development of a log management strategy'
        },
        {
          _key: 'feature_en_1739456790001_2',
          _type: 'object',
          text: 'Evaluation and selection of SIEM solutions'
        },
        {
          _key: 'feature_en_1739456790001_3',
          _type: 'object',
          text: 'Integration into existing IT infrastructure'
        },
        {
          _key: 'feature_en_1739456790001_4',
          _type: 'object',
          text: 'Configuration and fine-tuning'
        }
      ]
    },
    {
      _key: 'service_en_1739456790001_2',
      _type: 'object',
      title: 'Security Monitoring & Incident Response',
      description: 'Implementation of real-time monitoring and building effective incident response processes.',
      features: [
        {
          _key: 'feature_en_1739456790001_5',
          _type: 'object',
          text: 'Development of use cases and alerting rules'
        },
        {
          _key: 'feature_en_1739456790001_6',
          _type: 'object',
          text: 'Implementation of security dashboards'
        },
        {
          _key: 'feature_en_1739456790001_7',
          _type: 'object',
          text: 'Building incident response processes'
        },
        {
          _key: 'feature_en_1739456790001_8',
          _type: 'object',
          text: 'Security forensics support'
        }
      ]
    },
    {
      _key: 'service_en_1739456790001_3',
      _type: 'object',
      title: 'Compliance & Audit',
      description: 'Ensuring regulatory compliance and support during audits.',
      features: [
        {
          _key: 'feature_en_1739456790001_9',
          _type: 'object',
          text: 'Compliance-compliant log retention'
        },
        {
          _key: 'feature_en_1739456790001_10',
          _type: 'object',
          text: 'Development of compliance reports'
        },
        {
          _key: 'feature_en_1739456790001_11',
          _type: 'object',
          text: 'Audit support and preparation'
        },
        {
          _key: 'feature_en_1739456790001_12',
          _type: 'object',
          text: 'Documentation and training'
        }
      ]
    }
  ],
  faq: allFaqs,
  testimonial: {
    _type: 'object',
    quote: 'Efficient log management is more than ever a decisive security factor today. The integration of modern SIEM solutions and optimized processes creates the foundation for proactive IT security, rapid incident response, and sustainable compliance.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI FTC GmbH'
  }
}

async function importLogManagementEn() {
  console.log('Starting import of Log Management EN...')
  console.log(`Total FAQs to import: ${allFaqs.length}`)
  
  try {
    // Check if document exists
    const existing = await client.fetch(`*[_id == "log-management-en"][0]`)
    
    if (existing) {
      console.log('Document exists, updating...')
      const result = await client
        .patch('log-management-en')
        .set(logManagementEnDocument)
        .commit()
      console.log('Updated document:', result._id)
    } else {
      console.log('Creating new document...')
      const result = await client.create(logManagementEnDocument)
      console.log('Created document:', result._id)
    }
    
    console.log('Import completed successfully!')
    console.log(`- FAQs: ${allFaqs.length}`)
    console.log(`- Services: ${logManagementEnDocument.services.length}`)
    
  } catch (error) {
    console.error('Import failed:', error)
    throw error
  }
}

importLogManagementEn()
  .then(() => {
    console.log('Done!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Error:', error)
    process.exit(1)
  })
