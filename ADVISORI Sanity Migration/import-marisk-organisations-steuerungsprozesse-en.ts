// Import script for MaRisk Organisations- & Steuerungsprozesse - English Translation
// Source: marisk-organisations-steuerungsprozesse (German)
// Target: marisk-organisations-steuerungsprozesse-en (English)

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
import { mariskOrganisationsSteuerungsprozesseEnFaqsBatch1 } from './marisk-organisations-steuerungsprozesse-en-faqs-batch1'
import { mariskOrganisationsSteuerungsprozesseEnFaqsBatch2 } from './marisk-organisations-steuerungsprozesse-en-faqs-batch2'
import { mariskOrganisationsSteuerungsprozesseEnFaqsBatch3 } from './marisk-organisations-steuerungsprozesse-en-faqs-batch3'
import { mariskOrganisationsSteuerungsprozesseEnFaqsBatch4 } from './marisk-organisations-steuerungsprozesse-en-faqs-batch4'
import { mariskOrganisationsSteuerungsprozesseEnFaqsBatch5 } from './marisk-organisations-steuerungsprozesse-en-faqs-batch5'

// Combine all FAQ batches
const allFaqs = [
  ...mariskOrganisationsSteuerungsprozesseEnFaqsBatch1,
  ...mariskOrganisationsSteuerungsprozesseEnFaqsBatch2,
  ...mariskOrganisationsSteuerungsprozesseEnFaqsBatch3,
  ...mariskOrganisationsSteuerungsprozesseEnFaqsBatch4,
  ...mariskOrganisationsSteuerungsprozesseEnFaqsBatch5
]

const mariskOrganisationsSteuerungsprozesseEnPage = {
  _id: 'marisk-organisations-steuerungsprozesse-en',
  _type: 'servicePage',
  title: 'MaRisk Organization & Management Processes',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'marisk-organisations-steuerungsprozesse'
  },
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/marisk/marisk-readiness/marisk-organisations-steuerungsprozesse-en'
  },
  parent: {
    _type: 'reference',
    _ref: 'marisk-readiness'
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
    title: 'MaRisk Organization & Management Processes | ADVISORI',
    description: 'Optimize your organization and management processes for MaRisk compliance. ADVISORI supports effective design of governance structures and risk-oriented management mechanisms.',
    keywords: 'MaRisk, Organization Processes, Management Processes, Governance Structures, Compliance, Risk Management, Control Procedures'
  },
  heroSection: {
    _type: 'object',
    heading: 'MaRisk Organization & Management Processes',
    tagline: 'Effective Governance Structures for MaRisk Compliance',
    description: 'Establish effective organization and management processes that fully meet MaRisk requirements while optimizing your business operations. Our customized solutions support you in implementing risk-oriented management.',
    heroImage: {
      _type: 'image',
      alt: 'MaRisk Organization & Management Processes'
    },
    benefits: [
      {
        _key: 'benefit_en_1',
        _type: 'object',
        text: 'Compliance-compliant governance structures according to MaRisk'
      },
      {
        _key: 'benefit_en_2',
        _type: 'object',
        text: 'Clear responsibilities and efficient decision paths'
      },
      {
        _key: 'benefit_en_3',
        _type: 'object',
        text: 'Integration of control mechanisms into business processes'
      },
      {
        _key: 'benefit_en_4',
        _type: 'object',
        text: 'Optimized organizational and process structure'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'MaRisk Organization & Management Processes',
    description: 'MaRisk places high demands on the organizational design and management of institutions. We support you in establishing an effective organizational and process structure that meets regulatory requirements while optimizing your business operations.',
    additionalInfo: 'The right design of organization and management processes can increase the efficiency of your risk management by up to 40% while significantly reducing compliance costs.',
    alert: {
      _type: 'object',
      title: 'Expert Tip',
      content: 'An effective organizational and process structure is not only crucial for MaRisk compliance but also contributes significantly to the operational efficiency and strategic management capability of your institution.'
    },
    points: [
      {
        _key: 'point_en_1',
        _type: 'object',
        text: 'Design of a MaRisk-compliant organizational and process structure'
      },
      {
        _key: 'point_en_2',
        _type: 'object',
        text: 'Implementation of the Three Lines of Defence model'
      },
      {
        _key: 'point_en_3',
        _type: 'object',
        text: 'Establishment of risk management and control processes'
      },
      {
        _key: 'point_en_4',
        _type: 'object',
        text: 'Definition of clear responsibilities and reporting lines'
      },
      {
        _key: 'point_en_5',
        _type: 'object',
        text: 'Optimization of decision and escalation processes'
      }
    ],
    serviceDescription: 'Our services in the area of MaRisk organization and management processes cover the entire range from analysis to implementation. We help you establish a robust governance structure that meets MaRisk requirements and supports your business objectives.',
    servicePoints: [
      {
        _key: 'servicePoint_en_1',
        _type: 'object',
        text: 'Analysis of existing organizational structure and management processes'
      },
      {
        _key: 'servicePoint_en_2',
        _type: 'object',
        text: 'Development of a MaRisk-compliant organizational and process structure'
      },
      {
        _key: 'servicePoint_en_3',
        _type: 'object',
        text: 'Implementation of effective risk management and control processes'
      },
      {
        _key: 'servicePoint_en_4',
        _type: 'object',
        text: 'Optimization of decision and reporting paths'
      },
      {
        _key: 'servicePoint_en_5',
        _type: 'object',
        text: 'Training and support of employees in implementation'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our Strengths',
      points: [
        {
          _key: 'whyUs_en_1',
          _type: 'object',
          text: 'Deep expertise in regulatory requirements and best practices'
        },
        {
          _key: 'whyUs_en_2',
          _type: 'object',
          text: 'Years of experience in optimizing governance structures'
        },
        {
          _key: 'whyUs_en_3',
          _type: 'object',
          text: 'Practice-oriented solutions with focus on implementability'
        },
        {
          _key: 'whyUs_en_4',
          _type: 'object',
          text: 'Holistic approach that combines compliance and business requirements'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We pursue a structured and collaborative approach to design and optimize your organization and management processes in a MaRisk-compliant manner.',
    points: [
      {
        _key: 'approach_en_1',
        _type: 'object',
        text: 'Analysis of existing organizational structure and process landscape'
      },
      {
        _key: 'approach_en_2',
        _type: 'object',
        text: 'Identification of compliance gaps and optimization potential'
      },
      {
        _key: 'approach_en_3',
        _type: 'object',
        text: 'Development of a target organization considering MaRisk requirements'
      },
      {
        _key: 'approach_en_4',
        _type: 'object',
        text: 'Conception and implementation of management and control processes'
      },
      {
        _key: 'approach_en_5',
        _type: 'object',
        text: 'Support during implementation and continuous improvement'
      }
    ]
  },
  services: [
    {
      _key: 'service_en_1',
      _type: 'object',
      title: 'Design of Organizational and Process Structure',
      description: 'We support you in developing a MaRisk-compliant organizational structure that ensures clear responsibilities, appropriate separation of functions, and efficient processes.',
      features: [
        {
          _key: 'feature_en_1_1',
          _type: 'object',
          text: 'Analysis and optimization of organizational structure'
        },
        {
          _key: 'feature_en_1_2',
          _type: 'object',
          text: 'Implementation of the Three Lines of Defence model'
        },
        {
          _key: 'feature_en_1_3',
          _type: 'object',
          text: 'Design of efficient processes and interfaces'
        },
        {
          _key: 'feature_en_1_4',
          _type: 'object',
          text: 'Ensuring appropriate separation of functions'
        }
      ]
    },
    {
      _key: 'service_en_2',
      _type: 'object',
      title: 'Development of Management and Control Processes',
      description: 'We support you in establishing effective management and control mechanisms that enable risk-oriented leadership of your institution.',
      features: [
        {
          _key: 'feature_en_2_1',
          _type: 'object',
          text: 'Conception of a risk-oriented management model'
        },
        {
          _key: 'feature_en_2_2',
          _type: 'object',
          text: 'Development and implementation of control procedures'
        },
        {
          _key: 'feature_en_2_3',
          _type: 'object',
          text: 'Optimization of reporting and escalation paths'
        },
        {
          _key: 'feature_en_2_4',
          _type: 'object',
          text: 'Integration of risk management into decision processes'
        }
      ]
    }
  ],
  faq: allFaqs,
  testimonial: {
    _type: 'object',
    quote: 'The optimization of organization and management processes according to MaRisk is not only a regulatory obligation for institutions but also an opportunity to improve their operational efficiency. With the right approach, compliance requirements and business objectives can be harmoniously combined.',
    name: 'Dr. Martin Weber',
    position: 'Senior Manager',
    company: 'ADVISORI FTC GmbH'
  }
}

async function importMariskOrganisationsSteuerungsprozesseEn() {
  console.log('Starting import of MaRisk Organisations- & Steuerungsprozesse EN page...')
  console.log(`Total FAQs to import: ${allFaqs.length}`)
  
  try {
    // Check if document already exists
    const existing = await client.fetch(`*[_id == "marisk-organisations-steuerungsprozesse-en"][0]`)
    
    if (existing) {
      console.log('Document already exists, updating...')
      const result = await client.createOrReplace(mariskOrganisationsSteuerungsprozesseEnPage)
      console.log('Document updated successfully:', result._id)
    } else {
      console.log('Creating new document...')
      const result = await client.create(mariskOrganisationsSteuerungsprozesseEnPage)
      console.log('Document created successfully:', result._id)
    }
    
    // Verify the import
    const verification = await client.fetch(`*[_id == "marisk-organisations-steuerungsprozesse-en"]{
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

importMariskOrganisationsSteuerungsprozesseEn()
  .then(() => {
    console.log('\nImport completed successfully!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('\nImport failed:', error)
    process.exit(1)
  })
