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

// KRITIS Vulnerability Analysis & Risk Assessment - English Translation
const kritisVulnerabilityAnalysisEn = {
  _id: 'kritis-schwachstellenanalyse-risikobewertung-en',
  _type: 'servicePage',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'kritis-schwachstellenanalyse-risikobewertung'
  },
  title: 'KRITIS Vulnerability Analysis & Risk Assessment',
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/kritis/kritis-readiness/kritis-vulnerability-analysis-risk-assessment-en'
  },
  parent: {
    _ref: 'kritis-readiness',
    _type: 'reference'
  },
  references: {
    _type: 'object',
    topLevelParent: {
      _ref: 'regulatory-compliance-management',
      _type: 'reference'
    }
  },
  seo: {
    _type: 'seo',
    title: 'KRITIS Vulnerability Analysis & Risk Assessment | ADVISORI',
    description: 'Comprehensive vulnerability analysis and risk assessment for critical infrastructures according to KRITIS regulation. Identification of vulnerabilities and development of targeted protective measures.',
    keywords: 'KRITIS, vulnerability analysis, risk assessment, critical infrastructures, cybersecurity, threat analysis, BSI'
  },
  heroSection: {
    _type: 'object',
    tagline: 'Systematic Identification and Assessment of Security Risks',
    heading: 'KRITIS Vulnerability Analysis & Risk Assessment',
    description: 'A comprehensive vulnerability analysis and risk assessment forms the foundation for effective protective measures in critical infrastructures. We systematically identify potential threats and assess their impacts.',
    heroImage: {
      _type: 'image',
      alt: 'KRITIS Vulnerability Analysis & Risk Assessment'
    },
    benefits: [
      {
        _key: `benefit_${timestamp}_1`,
        _type: 'object',
        text: 'Complete identification of all security-relevant vulnerabilities'
      },
      {
        _key: `benefit_${timestamp}_2`,
        _type: 'object',
        text: 'Sound risk assessment according to established standards'
      },
      {
        _key: `benefit_${timestamp}_3`,
        _type: 'object',
        text: 'Prioritization of protective measures by criticality'
      },
      {
        _key: `benefit_${timestamp}_4`,
        _type: 'object',
        text: 'Compliance with KRITIS regulation and BSI standards'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'KRITIS Vulnerability Analysis & Risk Assessment',
    description: 'Systematic vulnerability analysis and risk assessment is a central building block of KRITIS compliance. It enables operators of critical infrastructures to identify potential threats, assess their impacts, and develop targeted protective measures.',
    additionalInfo: 'A professional vulnerability analysis forms the foundation for all further security measures and is essential for fulfilling the KRITIS regulation.',
    alert: {
      title: 'Expert Tip',
      content: 'An effective vulnerability analysis goes beyond technical aspects and also considers organizational, procedural, and human factors. Only then does a complete picture of the risk situation emerge.'
    },
    points: [
      {
        _key: `point_${timestamp}_1`,
        _type: 'object',
        text: 'Structured capture and cataloging of all assets and systems'
      },
      {
        _key: `point_${timestamp}_2`,
        _type: 'object',
        text: 'Identification of technical and organizational vulnerabilities'
      },
      {
        _key: `point_${timestamp}_3`,
        _type: 'object',
        text: 'Threat modeling and scenario analysis'
      },
      {
        _key: `point_${timestamp}_4`,
        _type: 'object',
        text: 'Quantitative and qualitative risk assessment'
      },
      {
        _key: `point_${timestamp}_5`,
        _type: 'object',
        text: 'Derivation and prioritization of action recommendations'
      }
    ],
    serviceDescription: 'We offer you a comprehensive vulnerability analysis and risk assessment that considers all aspects of your critical infrastructure and provides concrete action recommendations for improving your security posture.',
    servicePoints: [
      {
        _key: `servicePoint_${timestamp}_1`,
        _type: 'object',
        text: 'Asset inventory and system classification'
      },
      {
        _key: `servicePoint_${timestamp}_2`,
        _type: 'object',
        text: 'Technical vulnerability analysis and penetration tests'
      },
      {
        _key: `servicePoint_${timestamp}_3`,
        _type: 'object',
        text: 'Organizational security assessment'
      },
      {
        _key: `servicePoint_${timestamp}_4`,
        _type: 'object',
        text: 'Threat modeling according to STRIDE/PASTA'
      },
      {
        _key: `servicePoint_${timestamp}_5`,
        _type: 'object',
        text: 'Risk analysis and assessment according to ISO 27005'
      }
    ],
    whyUs: {
      title: 'Our Strengths',
      points: [
        {
          _key: `whyUs_${timestamp}_1`,
          _type: 'object',
          text: 'Deep expertise in KRITIS-relevant threat scenarios'
        },
        {
          _key: `whyUs_${timestamp}_2`,
          _type: 'object',
          text: 'Proven methods according to ISO 27005 and BSI standards'
        },
        {
          _key: `whyUs_${timestamp}_3`,
          _type: 'object',
          text: 'Industry-specific experience in critical infrastructures'
        },
        {
          _key: `whyUs_${timestamp}_4`,
          _type: 'object',
          text: 'Practical action recommendations for implementation'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We conduct a systematic and comprehensive vulnerability analysis that considers both technical and organizational aspects.',
    points: [
      {
        _key: `approach_${timestamp}_1`,
        _type: 'object',
        text: 'Complete capture and classification of all critical assets'
      },
      {
        _key: `approach_${timestamp}_2`,
        _type: 'object',
        text: 'Systematic identification of technical and organizational vulnerabilities'
      },
      {
        _key: `approach_${timestamp}_3`,
        _type: 'object',
        text: 'Development of realistic threat scenarios'
      },
      {
        _key: `approach_${timestamp}_4`,
        _type: 'object',
        text: 'Quantitative assessment of probabilities and impacts'
      },
      {
        _key: `approach_${timestamp}_5`,
        _type: 'object',
        text: 'Derivation of prioritized action recommendations'
      }
    ]
  },
  services: [
    {
      _key: `service_${timestamp}_1`,
      _type: 'object',
      title: 'Asset Inventory & System Classification',
      description: 'Complete capture and classification of all critical assets and systems as the foundation for vulnerability analysis.',
      features: [
        {
          _key: `feature_${timestamp}_1`,
          _type: 'object',
          text: 'Systematic capture of all IT and OT systems'
        },
        {
          _key: `feature_${timestamp}_2`,
          _type: 'object',
          text: 'Classification by criticality and protection requirements'
        },
        {
          _key: `feature_${timestamp}_3`,
          _type: 'object',
          text: 'Documentation of dependencies and interfaces'
        },
        {
          _key: `feature_${timestamp}_4`,
          _type: 'object',
          text: 'Establishment of a central asset register'
        }
      ]
    },
    {
      _key: `service_${timestamp}_2`,
      _type: 'object',
      title: 'Technical Vulnerability Analysis',
      description: 'Comprehensive technical analysis to identify vulnerabilities in IT and OT systems.',
      features: [
        {
          _key: `feature_${timestamp}_5`,
          _type: 'object',
          text: 'Automated vulnerability scans'
        },
        {
          _key: `feature_${timestamp}_6`,
          _type: 'object',
          text: 'Manual penetration tests and code reviews'
        },
        {
          _key: `feature_${timestamp}_7`,
          _type: 'object',
          text: 'Analysis of network architectures and access controls'
        },
        {
          _key: `feature_${timestamp}_8`,
          _type: 'object',
          text: 'Assessment of configurations and patch status'
        }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'The systematic vulnerability analysis from ADVISORI helped us objectively assess our security posture and identify targeted improvement measures. The results form a solid foundation for our KRITIS compliance.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI FTC GmbH',
    author: 'Asan Stefanski'
  },
  faq: []
}

export async function createKritisSchwachstellenanalyseEn() {
  console.log('Creating KRITIS Vulnerability Analysis & Risk Assessment English page...')
  
  try {
    const result = await client.createOrReplace(kritisVulnerabilityAnalysisEn)
    console.log(`✅ Created page: ${result._id}`)
    return result
  } catch (error) {
    console.error('Error creating page:', error)
    throw error
  }
}

// Execute if run directly
createKritisSchwachstellenanalyseEn()
