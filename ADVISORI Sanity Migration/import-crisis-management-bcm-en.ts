import 'dotenv/config'
import { createClient } from '@sanity/client'
import { crisisManagementBcmEnFaqsBatch1 } from './crisis-management-bcm-en-faqs-batch1'
import { crisisManagementBcmEnFaqsBatch2 } from './crisis-management-bcm-en-faqs-batch2'
import { crisisManagementBcmEnFaqsBatch3 } from './crisis-management-bcm-en-faqs-batch3'
import { crisisManagementBcmEnFaqsBatch4 } from './crisis-management-bcm-en-faqs-batch4'
import { crisisManagementBcmEnFaqsBatch5 } from './crisis-management-bcm-en-faqs-batch5'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function importCrisisManagementBcmEn() {
  const timestamp = Date.now()
  
  // Combine all FAQ batches
  const allFaqs = [
    ...crisisManagementBcmEnFaqsBatch1,
    ...crisisManagementBcmEnFaqsBatch2,
    ...crisisManagementBcmEnFaqsBatch3,
    ...crisisManagementBcmEnFaqsBatch4,
    ...crisisManagementBcmEnFaqsBatch5,
  ]
  
  console.log(`Total FAQs to import: ${allFaqs.length}`)
  
  const doc = {
    _id: 'crisis-management-bcm-en',
    _type: 'servicePage',
    title: 'Crisis Management (BCM)',
    language: 'en',
    __i18n_lang: 'en',
    __i18n_base: {
      _type: 'reference',
      _ref: 'crisis-management'
    },
    slug: {
      _type: 'slug',
      current: 'information-security/business-continuity-resilience/bcm-framework/crisis-management-en'
    },
    parent: {
      _type: 'reference',
      _ref: 'bcm-framework'
    },
    seo: {
      _type: 'seo',
      title: 'Crisis Management | Professional Crisis Management with ADVISORI',
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
        title: 'Crisis Management Governance',
        description: 'Development and implementation of crisis management governance structures and processes for effective crisis prevention and management.',
        features: [
          {
            _key: `feature_${timestamp}_1`,
            _type: 'object',
            text: 'Development of crisis management policies and principles'
          },
          {
            _key: `feature_${timestamp}_2`,
            _type: 'object',
            text: 'Establishment of crisis management responsibilities and roles'
          },
          {
            _key: `feature_${timestamp}_3`,
            _type: 'object',
            text: 'Implementation of decision and escalation processes'
          },
          {
            _key: `feature_${timestamp}_4`,
            _type: 'object',
            text: 'Integration of crisis management into the overarching BCM framework'
          }
        ]
      },
      {
        _key: `service_${timestamp}_2`,
        _type: 'object',
        title: 'Crisis Staff & Crisis Teams',
        description: 'Building and training of effective crisis staffs and crisis teams with clear structures, roles, and responsibilities.',
        features: [
          {
            _key: `feature_${timestamp}_5`,
            _type: 'object',
            text: 'Design of crisis staff and crisis team structures'
          },
          {
            _key: `feature_${timestamp}_6`,
            _type: 'object',
            text: 'Definition of roles, responsibilities, and competencies'
          },
          {
            _key: `feature_${timestamp}_7`,
            _type: 'object',
            text: 'Development of collaboration and coordination structures'
          },
          {
            _key: `feature_${timestamp}_8`,
            _type: 'object',
            text: 'Implementation of crisis team activation and mobilization processes'
          }
        ]
      },
      {
        _key: `service_${timestamp}_3`,
        _type: 'object',
        title: 'Crisis Management Plans',
        description: 'Development and implementation of crisis management plans, playbooks, and checklists for various crisis scenarios.',
        features: [
          {
            _key: `feature_${timestamp}_9`,
            _type: 'object',
            text: 'Development of crisis management plans and processes'
          },
          {
            _key: `feature_${timestamp}_10`,
            _type: 'object',
            text: 'Creation of crisis management playbooks and guides'
          },
          {
            _key: `feature_${timestamp}_11`,
            _type: 'object',
            text: 'Implementation of checklists and decision aids'
          },
          {
            _key: `feature_${timestamp}_12`,
            _type: 'object',
            text: 'Development of scenario-specific action instructions'
          }
        ]
      },
      {
        _key: `service_${timestamp}_4`,
        _type: 'object',
        title: 'Crisis Communication',
        description: 'Development and implementation of effective crisis communication strategies and processes for internal and external stakeholders.',
        features: [
          {
            _key: `feature_${timestamp}_13`,
            _type: 'object',
            text: 'Development of crisis communication strategies and principles'
          },
          {
            _key: `feature_${timestamp}_14`,
            _type: 'object',
            text: 'Creation of crisis communication plans and templates'
          },
          {
            _key: `feature_${timestamp}_15`,
            _type: 'object',
            text: 'Establishment of communication channels and processes'
          },
          {
            _key: `feature_${timestamp}_16`,
            _type: 'object',
            text: 'Training of communication managers and spokespersons'
          }
        ]
      },
      {
        _key: `service_${timestamp}_5`,
        _type: 'object',
        title: 'Crisis Management Exercises',
        description: 'Planning and conducting crisis management exercises, simulations, and workshops to validate and improve crisis readiness.',
        features: [
          {
            _key: `feature_${timestamp}_17`,
            _type: 'object',
            text: 'Development of crisis exercise scenarios and concepts'
          },
          {
            _key: `feature_${timestamp}_18`,
            _type: 'object',
            text: 'Conducting tabletop exercises and planning games'
          },
          {
            _key: `feature_${timestamp}_19`,
            _type: 'object',
            text: 'Organization of realistic simulations and live exercises'
          },
          {
            _key: `feature_${timestamp}_20`,
            _type: 'object',
            text: 'Systematic evaluation and improvement management'
          }
        ]
      },
      {
        _key: `service_${timestamp}_6`,
        _type: 'object',
        title: 'Crisis Management Training',
        description: 'Conducting training and workshops on crisis management topics for executives, crisis teams, and employees.',
        features: [
          {
            _key: `feature_${timestamp}_21`,
            _type: 'object',
            text: 'Development of training concepts and materials'
          },
          {
            _key: `feature_${timestamp}_22`,
            _type: 'object',
            text: 'Conducting crisis management basic training'
          },
          {
            _key: `feature_${timestamp}_23`,
            _type: 'object',
            text: 'Organization of workshops for crisis teams and executives'
          },
          {
            _key: `feature_${timestamp}_24`,
            _type: 'object',
            text: 'Conducting crisis communication training'
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
    console.log('Successfully created/updated crisis-management-bcm-en:', result._id)
    console.log(`Total FAQs: ${allFaqs.length}`)
    console.log(`Total Services: ${doc.services.length}`)
  } catch (error) {
    console.error('Error creating document:', error)
    throw error
  }
}

importCrisisManagementBcmEn()
