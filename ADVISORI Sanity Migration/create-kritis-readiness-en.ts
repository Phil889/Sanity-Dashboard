import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

const timestamp = Date.now()

const kritisReadinessEn = {
  _id: 'kritis-readiness-en',
  _type: 'servicePage',
  title: 'KRITIS Readiness',
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/kritis/kritis-readiness-en'
  },
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'kritis-readiness'
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
    title: 'KRITIS Readiness Assessment | ADVISORI',
    description: 'Professional KRITIS readiness assessment for critical infrastructures. Gap analyses, vulnerability assessment, and strategic preparation.',
    keywords: 'KRITIS Readiness, Gap Analysis, Vulnerability Analysis, Risk Assessment, Emergency Concepts, BSI, Critical Infrastructures'
  },
  heroSection: {
    _type: 'object',
    tagline: 'Systematic Preparation for KRITIS Compliance',
    heading: 'KRITIS Readiness Assessment',
    description: 'A well-founded KRITIS readiness assessment is the first step toward successful compliance. We systematically analyze your readiness, identify gaps, and develop tailored strategies for a resilient and compliance-conformant critical infrastructure.',
    heroImage: {
      _type: 'image',
      alt: 'KRITIS Readiness Assessment'
    },
    benefits: [
      {
        _key: `benefit_en_${timestamp}_1`,
        _type: 'object',
        text: 'Comprehensive assessment of KRITIS compliance readiness'
      },
      {
        _key: `benefit_en_${timestamp}_2`,
        _type: 'object',
        text: 'Systematic vulnerability analysis and risk assessment'
      },
      {
        _key: `benefit_en_${timestamp}_3`,
        _type: 'object',
        text: 'Gap analysis for organizational and technical areas'
      },
      {
        _key: `benefit_en_${timestamp}_4`,
        _type: 'object',
        text: 'Strategic emergency concepts and resource planning'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'KRITIS Readiness Assessment',
    description: 'Preparing for KRITIS compliance requires a systematic assessment of all relevant areas of your critical infrastructure. We support you with structured assessments that create a solid foundation for your compliance strategy.',
    additionalInfo: 'Over 90% of our clients achieve KRITIS compliance faster and more cost-effectively through our structured readiness assessment than without professional support.',
    serviceDescription: 'Our KRITIS Readiness Services cover all aspects of compliance preparation. From initial assessment through detailed analyses to strategic planning, we provide you with comprehensive support.',
    alert: {
      _type: 'object',
      title: 'Compliance Tip',
      content: 'A professional KRITIS readiness assessment reduces implementation risk by up to 70% and significantly accelerates compliance achievement. Invest in thorough preparation for sustainable success.'
    },
    points: [
      {
        _key: `point_en_${timestamp}_1`,
        _type: 'object',
        text: 'Vulnerability analysis and comprehensive risk assessment'
      },
      {
        _key: `point_en_${timestamp}_2`,
        _type: 'object',
        text: 'Gap analysis for organizational structures and technical systems'
      },
      {
        _key: `point_en_${timestamp}_3`,
        _type: 'object',
        text: 'Development of emergency concepts and resource planning'
      },
      {
        _key: `point_en_${timestamp}_4`,
        _type: 'object',
        text: 'Strategic roadmap development for KRITIS compliance'
      },
      {
        _key: `point_en_${timestamp}_5`,
        _type: 'object',
        text: 'Prioritized action planning and budgeting'
      }
    ],
    servicePoints: [
      {
        _key: `servicePoint_en_${timestamp}_1`,
        _type: 'object',
        text: 'Comprehensive vulnerability analysis and risk assessment'
      },
      {
        _key: `servicePoint_en_${timestamp}_2`,
        _type: 'object',
        text: 'Detailed gap analysis for organization and technology'
      },
      {
        _key: `servicePoint_en_${timestamp}_3`,
        _type: 'object',
        text: 'Strategic emergency concepts and resource planning'
      },
      {
        _key: `servicePoint_en_${timestamp}_4`,
        _type: 'object',
        text: 'Compliance roadmap and implementation planning'
      },
      {
        _key: `servicePoint_en_${timestamp}_5`,
        _type: 'object',
        text: 'Continuous support during compliance preparation'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our Strengths',
      points: [
        {
          _key: `whyUs_en_${timestamp}_1`,
          _type: 'object',
          text: 'Deep expertise in KRITIS regulation and BSI standards'
        },
        {
          _key: `whyUs_en_${timestamp}_2`,
          _type: 'object',
          text: 'Proven assessment methods for critical infrastructures'
        },
        {
          _key: `whyUs_en_${timestamp}_3`,
          _type: 'object',
          text: 'Cross-industry experience with various KRITIS sectors'
        },
        {
          _key: `whyUs_en_${timestamp}_4`,
          _type: 'object',
          text: 'Holistic approach from strategy to operational implementation'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We use a structured and proven approach for KRITIS Readiness Assessments that systematically covers all relevant areas and delivers concrete recommendations for action.',
    points: [
      {
        _key: `approach_en_${timestamp}_1`,
        _type: 'object',
        text: 'Comprehensive as-is analysis of your critical infrastructures'
      },
      {
        _key: `approach_en_${timestamp}_2`,
        _type: 'object',
        text: 'Systematic assessment of vulnerabilities and risks'
      },
      {
        _key: `approach_en_${timestamp}_3`,
        _type: 'object',
        text: 'Detailed gap analysis for all compliance areas'
      },
      {
        _key: `approach_en_${timestamp}_4`,
        _type: 'object',
        text: 'Development of prioritized action and implementation plans'
      },
      {
        _key: `approach_en_${timestamp}_5`,
        _type: 'object',
        text: 'Strategic roadmap creation for sustainable compliance'
      }
    ]
  },
  services: [
    {
      _key: `service_en_${timestamp}_1`,
      _type: 'object',
      title: 'Vulnerability Analysis & Risk Assessment',
      description: 'Systematic identification and assessment of vulnerabilities in your critical infrastructures with comprehensive risk analysis.',
      features: [
        {
          _key: `feature_en_${timestamp}_1`,
          _type: 'object',
          text: 'Technical vulnerability analysis'
        },
        {
          _key: `feature_en_${timestamp}_2`,
          _type: 'object',
          text: 'Organizational risk assessment'
        },
        {
          _key: `feature_en_${timestamp}_3`,
          _type: 'object',
          text: 'Threat analysis and scenario assessment'
        },
        {
          _key: `feature_en_${timestamp}_4`,
          _type: 'object',
          text: 'Prioritized risk matrix'
        }
      ]
    },
    {
      _key: `service_en_${timestamp}_2`,
      _type: 'object',
      title: 'Gap Analysis Organization & Technology',
      description: 'Comprehensive assessment of gaps between your current status and KRITIS requirements in organizational and technical areas.',
      features: [
        {
          _key: `feature_en_${timestamp}_5`,
          _type: 'object',
          text: 'Organizational structure analysis'
        },
        {
          _key: `feature_en_${timestamp}_6`,
          _type: 'object',
          text: 'Technical system analysis'
        },
        {
          _key: `feature_en_${timestamp}_7`,
          _type: 'object',
          text: 'Compliance gap identification'
        },
        {
          _key: `feature_en_${timestamp}_8`,
          _type: 'object',
          text: 'Action recommendations'
        }
      ]
    },
    {
      _key: `service_en_${timestamp}_3`,
      _type: 'object',
      title: 'Emergency Concepts & Resource Planning',
      description: 'Development of comprehensive emergency concepts and strategic resource planning for critical scenarios.',
      features: [
        {
          _key: `feature_en_${timestamp}_9`,
          _type: 'object',
          text: 'Business Continuity Planning'
        },
        {
          _key: `feature_en_${timestamp}_10`,
          _type: 'object',
          text: 'Incident Response Concepts'
        },
        {
          _key: `feature_en_${timestamp}_11`,
          _type: 'object',
          text: 'Resource requirements analysis'
        },
        {
          _key: `feature_en_${timestamp}_12`,
          _type: 'object',
          text: 'Escalation and communication plans'
        }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'With our KRITIS Readiness Assessment, we create clarity for our clients about their current compliance status – structured, traceable, and practical. The concrete recommendations for action enable focused further development of the KRITIS strategy and help deploy resources specifically where the greatest need for action exists.',
    name: 'Dipl.-Ing. Sandra Mueller',
    position: 'Head of IT Security',
    company: 'Water Supply Company'
  },
  faq: []
}

export async function createKritisReadinessEn() {
  console.log('Creating KRITIS Readiness English page...')
  
  try {
    const result = await client.createOrReplace(kritisReadinessEn)
    console.log('✅ Created page:', result._id)
    return result
  } catch (error) {
    console.error('Error creating page:', error)
    throw error
  }
}

createKritisReadinessEn()
