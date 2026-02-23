// Import script for Management Review - English Translation
// Source: management-review (German)
// Target: management-review-en (English)

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
import { managementReviewEnFaqsBatch1 } from './management-review-en-faqs-batch1'
import { managementReviewEnFaqsBatch2 } from './management-review-en-faqs-batch2'
import { managementReviewEnFaqsBatch3 } from './management-review-en-faqs-batch3'
import { managementReviewEnFaqsBatch4 } from './management-review-en-faqs-batch4'
import { managementReviewEnFaqsBatch5 } from './management-review-en-faqs-batch5'

// Combine all FAQs
const allFaqs = [
  ...managementReviewEnFaqsBatch1,
  ...managementReviewEnFaqsBatch2,
  ...managementReviewEnFaqsBatch3,
  ...managementReviewEnFaqsBatch4,
  ...managementReviewEnFaqsBatch5
]

// English translation of Management Review page
const managementReviewEnPage = {
  _id: 'management-review-en',
  _type: 'servicePage',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'management-review'
  },
  title: 'Management Review',
  slug: {
    _type: 'slug',
    current: 'information-security/it-risk-management/management-review-en'
  },
  parent: {
    _ref: 'it-risikomanagement',
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
    title: 'Management Review in IT Risk Management | ADVISORI',
    description: 'Strengthen your IT governance through structured Management Reviews. Our experts support you in establishing an effective review process for IT security measures and their continuous improvement.',
    keywords: 'Management Review, IT Governance, Risk Management, Information Security, ISMS, Leadership Responsibility, Risk Assessment, Compliance, Strategy Development, Decision Making'
  },
  heroSection: {
    _type: 'object',
    heading: 'Management Review',
    tagline: 'Informed Decisions for Your IT Security Strategy',
    description: 'Establish a systematic process for regular review and assessment of your IT security measures at the leadership level. Our structured Management Reviews create transparency about the status of your risk management, identify optimization potential, and support the strategic development of your IT security.',
    heroImage: {
      _type: 'image',
      alt: 'Management Review in IT Risk Management',
      asset: {
        _ref: 'image-88620cd67ae6797e9f92ec838be2237b98f2d0dd-1024x768-jpg',
        _type: 'reference'
      }
    },
    benefits: [
      {
        _key: `benefit_mr_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Solid decision-making foundation for strategic IT security direction'
      },
      {
        _key: `benefit_mr_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Transparent overview of security measure status and risks'
      },
      {
        _key: `benefit_mr_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Evidence of active leadership responsibility for information security'
      },
      {
        _key: `benefit_mr_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Continuous improvement through structured review processes'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'Systematic Monitoring and Control of Your IT Security',
    description: 'Management Reviews are a central element of effective IT governance and ensure leadership responsibility for information security. They provide a structured framework to assess the effectiveness of IT security management, make strategic decisions, and initiate continuous improvements. We support you in establishing, conducting, and optimizing Management Reviews that deliver valuable insights for your IT security strategy while meeting regulatory requirements.',
    additionalInfo: 'A recent study shows that companies with established Management Review processes can respond on average 40% faster to changed risk situations than organizations without structured reviews at the leadership level. Additionally, they show a 35% higher success rate in implementing security measures, as leadership support and understanding of the strategic importance of IT security are significantly greater. An effective Management Review process is therefore not only relevant for compliance but a real competitive advantage in an increasingly digitalized and threatened business world.',
    alert: {
      title: 'Expert Tip',
      content: 'Effective Management Reviews are more than a formal compliance exercise. Through the right rhythm, meaningful KPIs, and targeted preparation, they become a valuable strategic tool. Our experience shows that the combination of regular operational reviews and quarterly or semi-annual strategic reviews is particularly effective. This keeps leadership continuously informed without being overwhelmed by details, while also recognizing long-term developments and making strategic adjustments.'
    },
    points: [
      {
        _key: `point_mr_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Development of customized Management Review processes based on organizational structure and regulatory requirements'
      },
      {
        _key: `point_mr_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Preparation of metrics and KPIs for informed assessment of IT security status'
      },
      {
        _key: `point_mr_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Moderation and professional facilitation of Management Review sessions'
      },
      {
        _key: `point_mr_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Creation of meaningful management reports with action recommendations'
      },
      {
        _key: `point_mr_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Integration of review results into a continuous improvement process'
      }
    ],
    serviceDescription: 'Our Management Review offering includes the development, implementation, and execution of structured review processes at management level. From designing appropriate review formats and KPIs to moderating review sessions to deriving strategic measures, we support you in establishing an effective governance structure for your IT security.',
    servicePoints: [
      {
        _key: `servicePoint_mr_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Design and implementation of Management Review processes'
      },
      {
        _key: `servicePoint_mr_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Development of meaningful metrics and dashboards'
      },
      {
        _key: `servicePoint_mr_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Preparation and moderation of Management Review sessions'
      },
      {
        _key: `servicePoint_mr_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Creation of executive reports and decision templates'
      },
      {
        _key: `servicePoint_mr_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Support in implementation and tracking of measures'
      }
    ],
    whyUs: {
      title: 'Our Strengths',
      points: [
        {
          _key: `whyUs_mr_en_${Date.now()}_1`,
          _type: 'object',
          text: 'Many years of experience in developing and conducting Management Reviews'
        },
        {
          _key: `whyUs_mr_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Comprehensive expertise in IT governance, risk management, and compliance'
        },
        {
          _key: `whyUs_mr_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Practice-oriented approach with focus on added value and feasibility'
        },
        {
          _key: `whyUs_mr_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Experienced consultants with excellent moderation and communication skills'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'Establishing and conducting effective Management Reviews requires a structured approach that considers both organizational circumstances and regulatory requirements. Our proven approach comprises five phases that build upon each other and create a sustainable review process.',
    points: [
      {
        _key: `approach_mr_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Phase 1: Analysis and Conception - Assessment of existing governance structures, identification of relevant stakeholders, and definition of individual requirements for the Management Review process'
      },
      {
        _key: `approach_mr_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Phase 2: Development of Review Framework - Definition of review formats, content, and rhythms, establishment of appropriate KPIs and metric systems, establishment of escalation paths'
      },
      {
        _key: `approach_mr_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Phase 3: Implementation and Piloting - Development of document templates and reporting tools, training of participants, conducting a first Management Review as pilot'
      },
      {
        _key: `approach_mr_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Phase 4: Execution and Support - Support in preparation and moderation of regular Management Reviews, preparation of results, consulting on measure derivation'
      },
      {
        _key: `approach_mr_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Phase 5: Optimization and Further Development - Regular evaluation of the review process, adaptation to changed requirements, continuous improvement of decision bases'
      }
    ]
  },
  services: [
    {
      _key: `service_mr_en_${Date.now()}_1`,
      _type: 'object',
      title: 'Development of Management Review Frameworks',
      description: 'Customized design of structured review processes for leadership level that meet both regulatory requirements and provide practical added value for strategic management. We develop individually adapted review cycles, formats, and content optimally aligned with your organizational structure and IT security requirements.',
      features: [
        {
          _key: `feature_mr_en_${Date.now()}_1`,
          _type: 'object',
          text: 'Requirements analysis considering industry standards and compliance requirements'
        },
        {
          _key: `feature_mr_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Definition of review rhythms, participant groups, and responsibilities'
        },
        {
          _key: `feature_mr_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Development of standardized agendas and document templates'
        },
        {
          _key: `feature_mr_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Integration into existing governance structures and meeting cycles'
        }
      ]
    },
    {
      _key: `service_mr_en_${Date.now()}_2`,
      _type: 'object',
      title: 'Review Dashboards and KPI Systems',
      description: 'Development of meaningful metric systems and visual dashboards that transparently display your IT security status and facilitate decisions at management level. Our KPI systems connect technical metrics with business-relevant indicators, creating a solid basis for informed decisions.',
      features: [
        {
          _key: `feature_mr_en_${Date.now()}_5`,
          _type: 'object',
          text: 'Identification and definition of relevant security and risk metrics'
        },
        {
          _key: `feature_mr_en_${Date.now()}_6`,
          _type: 'object',
          text: 'Development of multi-dimensional assessment systems for IT security risks'
        },
        {
          _key: `feature_mr_en_${Date.now()}_7`,
          _type: 'object',
          text: 'Design of intuitive dashboards with traffic light systems and trend analyses'
        },
        {
          _key: `feature_mr_en_${Date.now()}_8`,
          _type: 'object',
          text: 'Implementation of automated data collection and reporting processes'
        }
      ]
    },
    {
      _key: `service_mr_en_${Date.now()}_3`,
      _type: 'object',
      title: 'Moderation and Execution of Management Reviews',
      description: 'Professional preparation and moderation of your Management Review sessions by experienced IT security experts. We ensure efficient execution, goal-oriented discussions, and clear results that can be directly translated into action recommendations.',
      features: [
        {
          _key: `feature_mr_en_${Date.now()}_9`,
          _type: 'object',
          text: 'Structured preparation of review sessions and materials'
        },
        {
          _key: `feature_mr_en_${Date.now()}_10`,
          _type: 'object',
          text: 'Professional moderation with focus on decision-relevant topics'
        },
        {
          _key: `feature_mr_en_${Date.now()}_11`,
          _type: 'object',
          text: 'Professional contextualization of security incidents and trends'
        },
        {
          _key: `feature_mr_en_${Date.now()}_12`,
          _type: 'object',
          text: 'Documentation of results and derived measures'
        }
      ]
    },
    {
      _key: `service_mr_en_${Date.now()}_4`,
      _type: 'object',
      title: 'Management Reporting and Decision Templates',
      description: 'Creation of meaningful management reports and decision templates that present complex security topics in an understandable way and show clear action options. Our reports connect technical details with business implications, supporting informed decision-making.',
      features: [
        {
          _key: `feature_mr_en_${Date.now()}_13`,
          _type: 'object',
          text: 'Target audience-appropriate preparation of complex security topics'
        },
        {
          _key: `feature_mr_en_${Date.now()}_14`,
          _type: 'object',
          text: 'Development of standardized reporting formats for different management levels'
        },
        {
          _key: `feature_mr_en_${Date.now()}_15`,
          _type: 'object',
          text: 'Creation of decision-oriented business cases for security measures'
        },
        {
          _key: `feature_mr_en_${Date.now()}_16`,
          _type: 'object',
          text: 'Visualization of risk scenarios and their potential business impacts'
        }
      ]
    }
  ],
  faq: allFaqs,
  testimonial: {
    _type: 'object',
    quote: 'A successful Management Review process is characterized by the fact that it is perceived by leadership not as an additional burden but as a valuable management tool. The key lies in the right balance between detail depth and strategic overview, between risk transparency and action orientation. Properly implemented, the Management Review becomes the central element of a vibrant security culture and effective IT governance.',
    name: 'Dr. Thomas Weber',
    position: 'Partner IT Governance & Compliance',
    company: 'ADVISORI DE'
  }
}

async function importManagementReviewEn() {
  console.log('Starting import of Management Review EN...')
  console.log(`Total FAQs to import: ${allFaqs.length}`)
  console.log(`Total Services to import: ${managementReviewEnPage.services.length}`)
  
  try {
    const result = await client.createOrReplace(managementReviewEnPage)
    console.log(`Successfully imported Management Review EN with ID: ${result._id}`)
    console.log(`- FAQs: ${allFaqs.length}`)
    console.log(`- Services: ${managementReviewEnPage.services.length}`)
    console.log(`- Benefits: ${managementReviewEnPage.heroSection.benefits.length}`)
    console.log(`- Approach Points: ${managementReviewEnPage.approach.points.length}`)
    return result
  } catch (error) {
    console.error('Error importing Management Review EN:', error)
    throw error
  }
}

importManagementReviewEn()
  .then(() => {
    console.log('Import completed successfully!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Import failed:', error)
    process.exit(1)
  })
