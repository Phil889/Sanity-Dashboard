import 'dotenv/config'
import { createClient } from '@sanity/client'
import { krisenmanagementEnFaqsBatch1 } from './krisenmanagement-en-faqs-batch1'
import { krisenmanagementEnFaqsBatch2 } from './krisenmanagement-en-faqs-batch2'
import { krisenmanagementEnFaqsBatch3 } from './krisenmanagement-en-faqs-batch3'
import { krisenmanagementEnFaqsBatch4 } from './krisenmanagement-en-faqs-batch4'
import { krisenmanagementEnFaqsBatch5 } from './krisenmanagement-en-faqs-batch5'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function importKrisenmanagementEn() {
  const timestamp = Date.now()
  
  // Combine all FAQ batches
  const allFaqs = [
    ...krisenmanagementEnFaqsBatch1,
    ...krisenmanagementEnFaqsBatch2,
    ...krisenmanagementEnFaqsBatch3,
    ...krisenmanagementEnFaqsBatch4,
    ...krisenmanagementEnFaqsBatch5,
  ]
  
  console.log(`Total FAQs to import: ${allFaqs.length}`)
  
  const doc = {
    _id: 'krisenmanagement-en',
    _type: 'servicePage',
    title: 'Crisis Management',
    language: 'en',
    __i18n_lang: 'en',
    __i18n_base: {
      _type: 'reference',
      _ref: 'krisenmanagement'
    },
    slug: {
      _type: 'slug',
      current: 'risk-management/non-financial-risk/crisis-management-en'
    },
    parent: {
      _type: 'reference',
      _ref: 'non-financial-risk'
    },
    references: {
      _type: 'object',
      topLevelParent: {
        _type: 'reference',
        _ref: 'risikomanagement'
      }
    },
    seo: {
      _type: 'seo',
      title: 'Crisis Management | ADVISORI',
      description: 'Professional crisis management for companies - from preparation through effective crisis management to follow-up. Establish robust crisis management structures and processes with ADVISORI.',
      keywords: 'Crisis Management, Crisis Team, Crisis Communication, Crisis Planning, Crisis Prevention, Crisis Response, Business Continuity, Crisis Staff, Emergency Management'
    },
    heroSection: {
      _type: 'object',
      heading: 'Crisis Management',
      tagline: 'Prepared. Capable. Resilient.',
      description: 'In times of crisis, the quality of crisis management determines operational capability and long-term success. We support you in developing and implementing a holistic crisis management system that optimally prepares your company for potential crises and enables structured, effective management.',
      heroImage: {
        _type: 'image',
        alt: 'Crisis Management'
      },
      benefits: [
        {
          _key: `benefit_${timestamp}_1`,
          _type: 'object',
          text: 'Establishment of effective crisis management structures and teams'
        },
        {
          _key: `benefit_${timestamp}_2`,
          _type: 'object',
          text: 'Development of clear decision processes and escalation paths for crisis situations'
        },
        {
          _key: `benefit_${timestamp}_3`,
          _type: 'object',
          text: 'Implementation of effective crisis communication for all relevant stakeholders'
        },
        {
          _key: `benefit_${timestamp}_4`,
          _type: 'object',
          text: 'Regular training and exercises for optimal crisis readiness'
        }
      ]
    },
    overview: {
      _type: 'object',
      heading: 'Crisis Management',
      description: 'Our approach to crisis management combines proven methodology with practical implementability. We support you in developing a holistic crisis management system that equally considers prevention, preparation, response, and follow-up and is optimally integrated into your corporate culture and structures.',
      additionalInfo: 'Studies show that companies with established crisis management structures manage crisis situations on average 30% faster and can reduce financial losses by up to 50%. The ability to respond quickly and appropriately in crisis situations is a decisive competitive advantage in today\'s volatile business world.',
      serviceDescription: 'Our service offering in crisis management includes the design, implementation, and optimization of all components of a holistic crisis management system.',
      alert: {
        _type: 'object',
        title: 'Expert Tip',
        content: 'A key success factor in crisis management is preparation for the unexpected. Crisis management structures should be flexible enough to respond to various scenarios rather than focusing on managing specific, predictable events. Particularly important is regular practice of crisis management processes under realistic conditions – only this way can weaknesses be identified and addressed before an actual emergency occurs.'
      },
      points: [
        {
          _key: `point_${timestamp}_1`,
          _type: 'object',
          text: 'Building efficient crisis management structures and governance'
        },
        {
          _key: `point_${timestamp}_2`,
          _type: 'object',
          text: 'Development of crisis management plans and playbooks for various scenarios'
        },
        {
          _key: `point_${timestamp}_3`,
          _type: 'object',
          text: 'Implementation of structured decision and escalation processes'
        },
        {
          _key: `point_${timestamp}_4`,
          _type: 'object',
          text: 'Establishment of effective crisis communication for internal and external stakeholders'
        },
        {
          _key: `point_${timestamp}_5`,
          _type: 'object',
          text: 'Conducting crisis exercises, simulations, and training for preparation'
        }
      ],
      servicePoints: [
        {
          _key: `servicePoint_${timestamp}_1`,
          _type: 'object',
          text: 'Analysis of existing crisis management structures and processes'
        },
        {
          _key: `servicePoint_${timestamp}_2`,
          _type: 'object',
          text: 'Development of crisis management governance and team structures'
        },
        {
          _key: `servicePoint_${timestamp}_3`,
          _type: 'object',
          text: 'Creation of crisis management plans, playbooks, and checklists'
        },
        {
          _key: `servicePoint_${timestamp}_4`,
          _type: 'object',
          text: 'Design and implementation of crisis communication strategies'
        },
        {
          _key: `servicePoint_${timestamp}_5`,
          _type: 'object',
          text: 'Conducting crisis management training, workshops, and exercises'
        }
      ],
      whyUs: {
        _type: 'object',
        title: 'Our Strengths',
        points: [
          {
            _key: `whyUs_${timestamp}_1`,
            _type: 'object',
            text: 'Comprehensive expertise from numerous crisis management projects across various industries'
          },
          {
            _key: `whyUs_${timestamp}_2`,
            _type: 'object',
            text: 'Proven methodologies and tools for effective crisis management'
          },
          {
            _key: `whyUs_${timestamp}_3`,
            _type: 'object',
            text: 'Holistic approach considering organizational, technical, and communication aspects'
          },
          {
            _key: `whyUs_${timestamp}_4`,
            _type: 'object',
            text: 'Experienced consultants with background in crisis teams and emergency management'
          }
        ]
      }
    },
    approach: {
      _type: 'object',
      title: 'Our Approach',
      description: 'Our approach to developing and implementing crisis management systems follows a structured yet flexible methodology that we adapt to your specific requirements and business circumstances.',
      points: [
        {
          _key: `approach_${timestamp}_1`,
          _type: 'object',
          text: 'Assessment of existing crisis management capabilities and structures'
        },
        {
          _key: `approach_${timestamp}_2`,
          _type: 'object',
          text: 'Development of a customized crisis management framework and governance model'
        },
        {
          _key: `approach_${timestamp}_3`,
          _type: 'object',
          text: 'Building and training of crisis teams and responsible persons'
        },
        {
          _key: `approach_${timestamp}_4`,
          _type: 'object',
          text: 'Creation of crisis management documentation and tools'
        },
        {
          _key: `approach_${timestamp}_5`,
          _type: 'object',
          text: 'Validation through exercises and continuous improvement of the crisis management system'
        }
      ]
    },
    services: [
      {
        _key: `service_${timestamp}_1`,
        _type: 'object',
        title: 'Organizational Structure',
        description: 'A clearly structured crisis team with defined roles and escalation levels ensures that the right decisions are made quickly in an emergency.',
        features: [
          {
            _key: `feature_${timestamp}_1`,
            _type: 'object',
            text: 'Definition and flexible staffing of the crisis team including escalation levels'
          },
          {
            _key: `feature_${timestamp}_2`,
            _type: 'object',
            text: 'Clarification of roles, competencies, and tasks in crisis management'
          },
          {
            _key: `feature_${timestamp}_3`,
            _type: 'object',
            text: 'Regular training of internal members'
          }
        ]
      },
      {
        _key: `service_${timestamp}_2`,
        _type: 'object',
        title: 'Process Organization',
        description: 'A standardized process ensures that no step is overlooked from alerting to follow-up.',
        features: [
          {
            _key: `feature_${timestamp}_4`,
            _type: 'object',
            text: 'Defined activation and alerting procedures (internal & external)'
          },
          {
            _key: `feature_${timestamp}_5`,
            _type: 'object',
            text: 'Documented action guides and systematic situation assessment'
          },
          {
            _key: `feature_${timestamp}_6`,
            _type: 'object',
            text: 'Regular exercises and process updates'
          }
        ]
      },
      {
        _key: `service_${timestamp}_3`,
        _type: 'object',
        title: 'Crisis Plan',
        description: 'A comprehensive crisis plan bundles strategy, handbook, and infrastructure in an audit-proof document.',
        features: [
          {
            _key: `feature_${timestamp}_7`,
            _type: 'object',
            text: 'Crisis strategy aligned with corporate objectives'
          },
          {
            _key: `feature_${timestamp}_8`,
            _type: 'object',
            text: 'Audit-proof handbook with responsibilities and technical specifications'
          },
          {
            _key: `feature_${timestamp}_9`,
            _type: 'object',
            text: 'Provision of a dedicated crisis team room'
          }
        ]
      },
      {
        _key: `service_${timestamp}_4`,
        _type: 'object',
        title: 'Early Warning System',
        description: 'An effective early warning system detects emerging crises in time and enables proactive action.',
        features: [
          {
            _key: `feature_${timestamp}_10`,
            _type: 'object',
            text: 'Building strategic monitoring with defined early indicators'
          },
          {
            _key: `feature_${timestamp}_11`,
            _type: 'object',
            text: 'Conducting and regularly updating business impact and risk analyses'
          },
          {
            _key: `feature_${timestamp}_12`,
            _type: 'object',
            text: 'Development of plausible crisis scenarios'
          }
        ]
      },
      {
        _key: `service_${timestamp}_5`,
        _type: 'object',
        title: 'Crisis Communication',
        description: 'Transparent, structured communication is crucial to maintain trust internally and externally.',
        features: [
          {
            _key: `feature_${timestamp}_13`,
            _type: 'object',
            text: 'Communication concept with clear channels and responsibilities'
          },
          {
            _key: `feature_${timestamp}_14`,
            _type: 'object',
            text: 'Maintenance of central contact data for all target groups'
          },
          {
            _key: `feature_${timestamp}_15`,
            _type: 'object',
            text: 'Test runs and continuous updating of the communication plan'
          }
        ]
      }
    ],
    testimonial: {
      _type: 'object',
      quote: 'The effectiveness of a crisis management system only becomes apparent in an actual emergency – which makes it all the more important to continuously test and improve crisis readiness through regular exercises and realistic simulations. Successful organizations are not characterized by not experiencing crises, but by their ability to manage them quickly and effectively and emerge stronger from them.',
      name: 'Asan Stefanski',
      position: 'Director',
      company: 'ADVISORI DE'
    },
    faq: allFaqs
  }
  
  try {
    const result = await client.createOrReplace(doc)
    console.log('Successfully created/updated krisenmanagement-en:', result._id)
    console.log(`Total FAQs: ${allFaqs.length}`)
    console.log(`Total Services: ${doc.services.length}`)
  } catch (error) {
    console.error('Error creating document:', error)
    throw error
  }
}

importKrisenmanagementEn()
