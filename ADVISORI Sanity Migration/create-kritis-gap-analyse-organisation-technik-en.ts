import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

export const kritisGapAnalyseOrganisationTechnikEn = {
  _id: 'kritis-gap-analyse-organisation-technik-en',
  _type: 'servicePage',
  title: 'CRITIS Gap Analysis Organization & Technology',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'kritis-gap-analyse-organisation-technik'
  },
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/kritis/kritis-readiness/kritis-gap-analysis-organization-technology-en'
  },
  parent: {
    _type: 'reference',
    _ref: 'kritis-readiness'
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
    title: 'CRITIS Gap Analysis Organization & Technology | ADVISORI',
    description: 'Comprehensive gap analysis for CRITIS compliance in organizational and technical areas. Identification of vulnerabilities and development of targeted solution strategies.',
    keywords: 'CRITIS, Gap Analysis, Critical Infrastructure, Organization, Technology, IT Security, BSI, Compliance, Infrastructure Security'
  },
  heroSection: {
    _type: 'object',
    heroImage: {
      _type: 'image',
      alt: 'CRITIS Gap Analysis Organization & Technology'
    },
    tagline: 'Systematic Analysis for Resilient Critical Infrastructures',
    heading: 'CRITIS Gap Analysis Organization & Technology',
    description: 'CRITIS regulations present critical infrastructures with complex challenges. Our comprehensive gap analysis systematically identifies vulnerabilities in organizational structures and technical systems to ensure a resilient and compliance-conformant infrastructure.',
    benefits: [
      {
        _type: 'object',
        _key: 'benefit_en_1739889600001_1',
        text: 'Comprehensive assessment of organizational and technical CRITIS compliance'
      },
      {
        _type: 'object',
        _key: 'benefit_en_1739889600001_2',
        text: 'Systematic identification of critical vulnerabilities and security gaps'
      },
      {
        _type: 'object',
        _key: 'benefit_en_1739889600001_3',
        text: 'Prioritized action planning for efficient resource allocation'
      },
      {
        _type: 'object',
        _key: 'benefit_en_1739889600001_4',
        text: 'Future-oriented strategies for sustainable infrastructure security'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'CRITIS Gap Analysis Organization & Technology',
    description: 'Critical infrastructures form the backbone of our society and economy. A well-founded gap analysis is the first step toward achieving complete CRITIS compliance. We systematically evaluate your organizational structures and technical systems to identify vulnerabilities and develop targeted improvement measures.',
    points: [
      {
        _type: 'object',
        _key: 'point_en_1739889600001_1',
        text: 'Complete assessment of CRITIS compliance requirements'
      },
      {
        _type: 'object',
        _key: 'point_en_1739889600001_2',
        text: 'Analysis of organizational structures and security processes'
      },
      {
        _type: 'object',
        _key: 'point_en_1739889600001_3',
        text: 'Technical system analysis and IT security assessment'
      },
      {
        _type: 'object',
        _key: 'point_en_1739889600001_4',
        text: 'Risk assessment and threat analysis'
      },
      {
        _type: 'object',
        _key: 'point_en_1739889600001_5',
        text: 'Development of prioritized action plans and roadmaps'
      }
    ],
    alert: {
      _type: 'object',
      title: 'Compliance Note',
      content: 'CRITIS operators are obligated to take appropriate organizational and technical precautions to maintain, monitor, and control the security and functionality of their critical infrastructures. A structured gap analysis is the foundation for effective compliance.'
    },
    whyUs: {
      _type: 'object',
      title: 'Our Expertise',
      points: [
        {
          _type: 'object',
          _key: 'whyUs_en_1739889600001_1',
          text: 'Deep knowledge of CRITIS regulations and BSI standards'
        },
        {
          _type: 'object',
          _key: 'whyUs_en_1739889600001_2',
          text: 'Cross-industry experience with critical infrastructures'
        },
        {
          _type: 'object',
          _key: 'whyUs_en_1739889600001_3',
          text: 'Holistic approach for organizational and technical aspects'
        },
        {
          _type: 'object',
          _key: 'whyUs_en_1739889600001_4',
          text: 'Proven methods for sustainable security improvements'
        }
      ]
    },
    additionalInfo: 'A professional CRITIS gap analysis reduces the risk of security incidents by up to 60% and accelerates compliance achievement by an average of 40%. Invest in systematic analysis for maximum infrastructure security!',
    serviceDescription: 'We offer comprehensive gap analyses for CRITIS compliance with a focus on organizational structures and technical systems. Our structured approach ensures complete transparency about your current compliance status and develops targeted improvement strategies.',
    servicePoints: [
      {
        _type: 'object',
        _key: 'servicePoint_en_1739889600001_1',
        text: 'CRITIS compliance assessment and as-is analysis'
      },
      {
        _type: 'object',
        _key: 'servicePoint_en_1739889600001_2',
        text: 'Organizational structure analysis and process assessment'
      },
      {
        _type: 'object',
        _key: 'servicePoint_en_1739889600001_3',
        text: 'Technical system analysis and IT security evaluation'
      },
      {
        _type: 'object',
        _key: 'servicePoint_en_1739889600001_4',
        text: 'Risk and threat analysis for critical processes'
      },
      {
        _type: 'object',
        _key: 'servicePoint_en_1739889600001_5',
        text: 'Development of prioritized action plans and implementation roadmaps'
      }
    ]
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We conduct a systematic and comprehensive gap analysis that considers both organizational and technical aspects of your critical infrastructure and delivers concrete recommendations for CRITIS compliance.',
    points: [
      {
        _type: 'object',
        _key: 'approach_en_1739889600001_1',
        text: 'Complete capture and assessment of your critical infrastructures'
      },
      {
        _type: 'object',
        _key: 'approach_en_1739889600001_2',
        text: 'Analysis of organizational structures and security processes'
      },
      {
        _type: 'object',
        _key: 'approach_en_1739889600001_3',
        text: 'Technical evaluation of IT systems and security measures'
      },
      {
        _type: 'object',
        _key: 'approach_en_1739889600001_4',
        text: 'Identification and prioritization of compliance gaps'
      },
      {
        _type: 'object',
        _key: 'approach_en_1739889600001_5',
        text: 'Development of concrete action plans and implementation strategies'
      }
    ]
  },
  testimonial: {
    _type: 'object',
    company: 'Energy Supply Company',
    name: 'Dipl.-Ing. Michael Schmidt',
    position: 'Head of IT Security & Compliance',
    quote: 'The CRITIS gap analysis from ADVISORI provided us with a comprehensive and structured overview of our compliance situation. Particularly valuable was the holistic consideration of organizational and technical aspects as well as the prioritized recommendations for action. This enabled us to deploy our resources in a targeted manner and achieve CRITIS compliance much more efficiently.'
  },
  services: [
    {
      _type: 'object',
      _key: 'service_en_1739889600001_1',
      title: 'Organizational Gap Analysis',
      description: 'Comprehensive assessment of your organizational structures, processes, and procedures in the context of CRITIS requirements to identify optimization potential.',
      features: [
        {
          _type: 'object',
          _key: 'serviceFeature_en_1739889600001_1',
          text: 'Analysis of governance structures and responsibilities'
        },
        {
          _type: 'object',
          _key: 'serviceFeature_en_1739889600001_2',
          text: 'Assessment of security processes and procedures'
        },
        {
          _type: 'object',
          _key: 'serviceFeature_en_1739889600001_3',
          text: 'Evaluation of emergency and crisis management structures'
        },
        {
          _type: 'object',
          _key: 'serviceFeature_en_1739889600001_4',
          text: 'Assessment of personnel and competency structures'
        }
      ]
    },
    {
      _type: 'object',
      _key: 'service_en_1739889600001_2',
      title: 'Technical Gap Analysis',
      description: 'Detailed evaluation of your technical systems, IT infrastructure, and security measures to identify technical vulnerabilities and improvement opportunities.',
      features: [
        {
          _type: 'object',
          _key: 'serviceFeature_en_1739889600001_5',
          text: 'IT security architecture and system analysis'
        },
        {
          _type: 'object',
          _key: 'serviceFeature_en_1739889600001_6',
          text: 'Assessment of protective measures and security controls'
        },
        {
          _type: 'object',
          _key: 'serviceFeature_en_1739889600001_7',
          text: 'Analysis of monitoring and detection systems'
        },
        {
          _type: 'object',
          _key: 'serviceFeature_en_1739889600001_8',
          text: 'Evaluation of backup and recovery concepts'
        }
      ]
    }
  ],
  faq: []
}

export async function createKritisGapAnalyseOrganisationTechnikEn() {
  console.log('Creating CRITIS Gap Analysis Organization & Technology EN page...')
  
  try {
    const result = await client.createOrReplace(kritisGapAnalyseOrganisationTechnikEn)
    console.log(`✅ CRITIS Gap Analysis Organization & Technology EN page created: ${result._id}`)
    return result
  } catch (error) {
    console.error('❌ Error creating page:', error)
    throw error
  }
}

if (require.main === module) {
  createKritisGapAnalyseOrganisationTechnikEn()
}
