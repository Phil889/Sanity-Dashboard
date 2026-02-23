import 'dotenv/config'
// Import script for Maßnahmenverfolgung (Action Tracking) - English Translation
// Source: massnahmenverfolgung (German)
// Target: massnahmenverfolgung-en (English)

import { createClient } from '@sanity/client'
import { massnahmenverfolgungEnFaqsBatch1 } from './massnahmenverfolgung-en-faqs-batch1'
import { massnahmenverfolgungEnFaqsBatch2 } from './massnahmenverfolgung-en-faqs-batch2'
import { massnahmenverfolgungEnFaqsBatch3 } from './massnahmenverfolgung-en-faqs-batch3'
import { massnahmenverfolgungEnFaqsBatch4 } from './massnahmenverfolgung-en-faqs-batch4'
import { massnahmenverfolgungEnFaqsBatch5 } from './massnahmenverfolgung-en-faqs-batch5'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Combine all FAQ batches (20 FAQs)
const allFaqs = [
  ...massnahmenverfolgungEnFaqsBatch1,
  ...massnahmenverfolgungEnFaqsBatch2,
  ...massnahmenverfolgungEnFaqsBatch3,
  ...massnahmenverfolgungEnFaqsBatch4,
  ...massnahmenverfolgungEnFaqsBatch5,
]

// English translation of Maßnahmenverfolgung (Action Tracking) page
const massnahmenverfolgungEnPage = {
  _id: 'massnahmenverfolgung-en',
  _type: 'servicePage',
  title: 'Action Tracking',
  slug: {
    _type: 'slug',
    current: 'information-security/it-risk-management/action-tracking-en'
  },
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'massnahmenverfolgung'
  },
  parent: {
    _type: 'reference',
    _ref: 'it-risikomanagement'
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
    title: 'Action Tracking in IT Risk Management | ADVISORI',
    description: 'Optimize your IT risk management processes with an effective action tracking system. Our experts support you in implementing and optimizing tracking solutions for your risk management measures.',
    keywords: 'Action Tracking, IT Risk Management, Measure Tracking, Risk Mitigation, Measure Controlling, ISMS, IT Security, Compliance, Risk Measures, Tracking System'
  },
  heroSection: {
    _type: 'object',
    heading: 'Action Tracking',
    tagline: 'Systematic Management of Risk Mitigation Measures',
    description: 'Implement structured action tracking to ensure the effectiveness of your IT risk management. With our tailored tracking solutions, you maintain an overview of all identified risk mitigation measures, their implementation status, and effectiveness.',
    heroImage: {
      _type: 'image',
      alt: 'Action Tracking in IT Risk Management',
      asset: {
        _ref: 'image-88620cd67ae6797e9f92ec838be2237b98f2d0dd-1024x768-jpg',
        _type: 'reference'
      }
    },
    benefits: [
      {
        _key: `benefit_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Transparent tracking and monitoring of all IT security measures in real-time'
      },
      {
        _key: `benefit_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Prioritization and efficient resource allocation for measures with highest risk reduction potential'
      },
      {
        _key: `benefit_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Complete documentation for internal and external audits as well as regulatory evidence'
      },
      {
        _key: `benefit_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Reduction of security incidents through consistent implementation and control of measures'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'Effective Action Tracking for Your IT Risk Management',
    description: 'Systematic action tracking is crucial for the success of your IT risk management. Often risks are identified and assessed, but the consistent implementation and follow-up of defined measures poses challenges for many companies. Our experts support you in establishing a structured process for action tracking that ensures transparency and sustainably improves the effectiveness of your risk management.',
    alert: {
      _type: 'object',
      title: 'Expert Tip',
      content: 'The effectiveness of an action tracking system depends significantly on its integration into existing processes and the acceptance of participants. Our experience shows that involving measure owners already in the conception phase, clear prioritization, and automated status updates can increase the implementation rate by up to 65%. Also implement regular management reviews to emphasize relevance and address resource conflicts early.'
    },
    additionalInfo: 'Studies show that companies with a systematic action tracking process achieve a 60% higher implementation rate of risk mitigation measures. This leads to a demonstrable reduction of security incidents by up to 45% and significantly increases the efficiency of risk management. Additionally, structured action tracking can significantly simplify preparation for audits and evidence provision to regulators.',
    serviceDescription: 'Our offering in action tracking includes the conception, implementation, and optimization of tailored tracking systems that are customized to your specific requirements and processes. We support you in defining suitable processes, selecting and configuring tools, and establishing effective governance for sustainable control of risk mitigation measures.',
    points: [
      {
        _key: `point_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Development of a tailored action tracking system adapted to your specific requirements'
      },
      {
        _key: `point_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Integration into existing GRC tools or implementation of standalone tracking solutions'
      },
      {
        _key: `point_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Establishment of clearly defined responsibilities, deadlines, and escalation paths'
      },
      {
        _key: `point_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Building an efficient reporting system for management and stakeholders'
      },
      {
        _key: `point_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Development of metrics for evaluating measure effectiveness and implementation progress'
      }
    ],
    servicePoints: [
      {
        _key: `servicePoint_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Analysis and assessment of existing action tracking processes and tools'
      },
      {
        _key: `servicePoint_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Conception of a tailored action tracking system'
      },
      {
        _key: `servicePoint_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Tool selection, implementation, and configuration for action tracking'
      },
      {
        _key: `servicePoint_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Definition of roles, responsibilities, and escalation paths'
      },
      {
        _key: `servicePoint_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Development of dashboard solutions and reporting structures for management and stakeholders'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our Strengths',
      points: [
        {
          _key: `whyUs_en_${Date.now()}_1`,
          _type: 'object',
          text: 'Years of experience in conception and implementation of action tracking systems'
        },
        {
          _key: `whyUs_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Deep understanding of IT risk management processes and standards (ISO 27001, NIST, etc.)'
        },
        {
          _key: `whyUs_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Expertise in integrating tracking solutions into existing IT and GRC landscapes'
        },
        {
          _key: `whyUs_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Pragmatic approach with focus on feasibility and acceptance in the organization'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'Establishing an effective action tracking system requires a structured approach that considers both organizational and technical aspects. Our proven implementation approach ensures that the system is optimally tailored to your requirements and seamlessly integrated into your existing processes.',
    points: [
      {
        _key: `approach_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Phase 1: Analysis - Inventory of existing action tracking processes, identification of weaknesses, and definition of requirements for an optimized system'
      },
      {
        _key: `approach_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Phase 2: Conception - Development of a tailored action tracking system with defined processes, roles, and workflows as well as selection of suitable tools'
      },
      {
        _key: `approach_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Phase 3: Implementation - Step-by-step introduction of action tracking, configuration of selected tools, and integration into existing systems'
      },
      {
        _key: `approach_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Phase 4: Training and Change Management - Comprehensive introduction of participants to processes and tools as well as measures to promote acceptance'
      },
      {
        _key: `approach_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Phase 5: Monitoring and Optimization - Continuous monitoring of process efficiency and iterative improvement of the action tracking system'
      }
    ]
  },
  services: [
    {
      _key: `service_en_${Date.now()}_1`,
      _type: 'object',
      title: 'Conception of Action Tracking Systems',
      description: 'Development of a tailored action tracking system that is optimally aligned with your specific requirements and IT risk management processes. We define efficient workflows, clear responsibilities, and escalation paths to ensure a high implementation rate.',
      features: [
        {
          _key: `feature_en_${Date.now()}_1`,
          _type: 'object',
          text: 'Analysis of existing processes and identification of optimization potentials'
        },
        {
          _key: `feature_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Definition of tailored tracking processes with clear responsibilities'
        },
        {
          _key: `feature_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Development of status and priority concepts for effective control'
        },
        {
          _key: `feature_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Integration into existing governance and risk management processes'
        }
      ]
    },
    {
      _key: `service_en_${Date.now()}_2`,
      _type: 'object',
      title: 'Tool Implementation for Action Tracking',
      description: 'Selection, configuration, and implementation of suitable tools for efficient action tracking. We support you in evaluating existing solutions, integrating into your IT landscape, and optimal configuration for your specific requirements.',
      features: [
        {
          _key: `feature_en_${Date.now()}_5`,
          _type: 'object',
          text: 'Requirements analysis and tool evaluation based on your specific needs'
        },
        {
          _key: `feature_en_${Date.now()}_6`,
          _type: 'object',
          text: 'Implementation and configuration of selected GRC or action tracking tools'
        },
        {
          _key: `feature_en_${Date.now()}_7`,
          _type: 'object',
          text: 'Development of tailored dashboard and reporting solutions'
        },
        {
          _key: `feature_en_${Date.now()}_8`,
          _type: 'object',
          text: 'Integration into existing systems and interfaces to relevant data sources'
        }
      ]
    },
    {
      _key: `service_en_${Date.now()}_3`,
      _type: 'object',
      title: 'Optimization of Existing Tracking Processes',
      description: 'Analysis and improvement of your current action tracking processes with focus on efficiency increase and raising the implementation rate. We identify weaknesses and develop practice-oriented optimization approaches.',
      features: [
        {
          _key: `feature_en_${Date.now()}_9`,
          _type: 'object',
          text: 'Assessment of existing tracking processes and identification of weaknesses'
        },
        {
          _key: `feature_en_${Date.now()}_10`,
          _type: 'object',
          text: 'Development of optimization approaches with focus on efficiency and user acceptance'
        },
        {
          _key: `feature_en_${Date.now()}_11`,
          _type: 'object',
          text: 'Improvement of escalation mechanisms and management reporting'
        },
        {
          _key: `feature_en_${Date.now()}_12`,
          _type: 'object',
          text: 'Implementation of KPIs for measuring process efficiency and measure effectiveness'
        }
      ]
    },
    {
      _key: `service_en_${Date.now()}_4`,
      _type: 'object',
      title: 'Effectiveness Control and Audit Support',
      description: 'Establishment of a systematic approach for reviewing the effectiveness of implemented measures and preparation for internal or external audits. We support you in developing suitable methods for effectiveness control and preparing relevant evidence.',
      features: [
        {
          _key: `feature_en_${Date.now()}_13`,
          _type: 'object',
          text: 'Development of methods for systematic effectiveness control of measures'
        },
        {
          _key: `feature_en_${Date.now()}_14`,
          _type: 'object',
          text: 'Establishment of a continuous improvement process for risk mitigation measures'
        },
        {
          _key: `feature_en_${Date.now()}_15`,
          _type: 'object',
          text: 'Support in preparation for internal and external audits'
        },
        {
          _key: `feature_en_${Date.now()}_16`,
          _type: 'object',
          text: 'Development of audit-compliant documentation standards for measures and their implementation'
        }
      ]
    }
  ],
  faq: allFaqs,
  testimonial: {
    _type: 'object',
    quote: 'Systematic action tracking is the key to effective IT risk management. Without consistent tracking and controlling, identified risks often remain untreated, which renders the entire risk management absurd. A well-implemented action tracking system not only creates transparency but also generates the necessary pressure to actually implement the defined measures.',
    name: 'Dr. Markus Schmidt',
    position: 'Director Information Security',
    company: 'ADVISORI DE',
    author: 'Dr. Markus Schmidt'
  }
}

async function importMassnahmenverfolgungEn() {
  console.log('Starting import of Maßnahmenverfolgung (Action Tracking) English page...')
  console.log(`Total FAQs to import: ${allFaqs.length}`)
  
  try {
    // Check if document already exists
    const existing = await client.fetch(`*[_id == "massnahmenverfolgung-en"][0]`)
    
    if (existing) {
      console.log('Document already exists. Updating...')
      const result = await client.createOrReplace(massnahmenverfolgungEnPage)
      console.log('Document updated successfully:', result._id)
    } else {
      console.log('Creating new document...')
      const result = await client.create(massnahmenverfolgungEnPage)
      console.log('Document created successfully:', result._id)
    }
    
    // Verify the import
    const verification = await client.fetch(`*[_id == "massnahmenverfolgung-en"]{
      _id,
      title,
      language,
      "faqCount": count(faq)
    }[0]`)
    
    console.log('\nVerification:')
    console.log(JSON.stringify(verification, null, 2))
    
  } catch (error) {
    console.error('Import failed:', error)
    throw error
  }
}

importMassnahmenverfolgungEn()
  .then(() => console.log('\nImport completed successfully!'))
  .catch((error) => {
    console.error('Import failed:', error)
    process.exit(1)
  })
