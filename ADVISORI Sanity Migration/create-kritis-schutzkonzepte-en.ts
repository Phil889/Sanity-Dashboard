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

// KRITIS Protection Concepts Physical Digital - English Translation
const kritisSchutzkonzepteEn = {
  _id: 'kritis-schutzkonzepte-physisch-digital-en',
  _type: 'servicePage',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'kritis-schutzkonzepte-physisch-digital'
  },
  title: 'KRITIS Protection Concepts Physical Digital',
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/kritis/kritis-implementation/kritis-protection-concepts-physical-digital-en'
  },
  parent: {
    _ref: 'kritis-implementation',
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
    title: 'KRITIS Protection Concepts Physical Digital | ADVISORI',
    description: 'Comprehensive physical and digital protection concepts for critical infrastructures. We develop integrated security architectures according to KRITIS requirements.',
    keywords: 'KRITIS protection concepts, physical security, digital security, critical infrastructures, security architecture, BSI IT-Grundschutz'
  },
  heroSection: {
    _type: 'object',
    tagline: 'Integrated physical and digital protection concepts for critical infrastructures',
    heading: 'KRITIS Protection Concepts Physical Digital',
    description: 'We develop comprehensive protection concepts that seamlessly integrate physical and digital security measures to comprehensively secure your critical infrastructure.',
    heroImage: {
      _type: 'image',
      alt: 'KRITIS Protection Concepts Physical Digital'
    },
    benefits: [
      {
        _key: `benefit_${timestamp}_1`,
        _type: 'object',
        text: 'Holistic integration of physical and digital security measures'
      },
      {
        _key: `benefit_${timestamp}_2`,
        _type: 'object',
        text: 'KRITIS-compliant protection concepts according to BSI standards'
      },
      {
        _key: `benefit_${timestamp}_3`,
        _type: 'object',
        text: 'Risk-based security architecture for critical infrastructures'
      },
      {
        _key: `benefit_${timestamp}_4`,
        _type: 'object',
        text: 'Continuous monitoring and adaptive security measures'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'KRITIS Protection Concepts Physical Digital',
    description: 'Modern critical infrastructures require a holistic security approach that addresses physical and digital threats equally. We develop integrated protection concepts that cover all relevant security aspects and provide robust defense against complex attacks.',
    additionalInfo: 'Our integrated protection concepts consider the specific requirements of your critical infrastructure and create a robust security architecture that effectively addresses both current and future threats.',
    alert: {
      title: 'Security Notice',
      content: 'Physical and digital security are inseparably connected. A holistic approach is crucial for effective protection of critical infrastructures against modern threats.'
    },
    points: [
      {
        _key: `point_${timestamp}_1`,
        _type: 'object',
        text: 'Development of integrated security architectures for physical and digital assets'
      },
      {
        _key: `point_${timestamp}_2`,
        _type: 'object',
        text: 'Implementation of access controls and perimeter protection'
      },
      {
        _key: `point_${timestamp}_3`,
        _type: 'object',
        text: 'Establishment of monitoring and detection systems'
      },
      {
        _key: `point_${timestamp}_4`,
        _type: 'object',
        text: 'Development of incident response procedures for physical and digital incidents'
      },
      {
        _key: `point_${timestamp}_5`,
        _type: 'object',
        text: 'Continuous assessment and adaptation of protective measures'
      }
    ],
    serviceDescription: 'We offer comprehensive consulting for the development and implementation of integrated physical and digital protection concepts that meet and exceed all relevant KRITIS requirements.',
    servicePoints: [
      {
        _key: `servicePoint_${timestamp}_1`,
        _type: 'object',
        text: 'Risk analysis and protection requirements assessment'
      },
      {
        _key: `servicePoint_${timestamp}_2`,
        _type: 'object',
        text: 'Security architecture design'
      },
      {
        _key: `servicePoint_${timestamp}_3`,
        _type: 'object',
        text: 'Physical security measures integration'
      },
      {
        _key: `servicePoint_${timestamp}_4`,
        _type: 'object',
        text: 'Digital security systems implementation'
      },
      {
        _key: `servicePoint_${timestamp}_5`,
        _type: 'object',
        text: 'Continuous monitoring and optimization'
      }
    ],
    whyUs: {
      title: 'Our Expertise',
      points: [
        {
          _key: `whyUs_${timestamp}_1`,
          _type: 'object',
          text: 'Comprehensive expertise in physical and digital security'
        },
        {
          _key: `whyUs_${timestamp}_2`,
          _type: 'object',
          text: 'Deep knowledge of KRITIS requirements and BSI standards'
        },
        {
          _key: `whyUs_${timestamp}_3`,
          _type: 'object',
          text: 'Proven methodologies for integrated security concepts'
        },
        {
          _key: `whyUs_${timestamp}_4`,
          _type: 'object',
          text: 'Years of experience with critical infrastructures'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Integrated Security Approach',
    description: 'We pursue a systematic approach to developing holistic protection concepts that considers physical and digital security aspects in an integrated manner from the start.',
    points: [
      {
        _key: `approach_${timestamp}_1`,
        _type: 'object',
        text: 'Comprehensive inventory of all physical and digital assets'
      },
      {
        _key: `approach_${timestamp}_2`,
        _type: 'object',
        text: 'Risk-based assessment and prioritization of protective measures'
      },
      {
        _key: `approach_${timestamp}_3`,
        _type: 'object',
        text: 'Development of integrated security architectures'
      },
      {
        _key: `approach_${timestamp}_4`,
        _type: 'object',
        text: 'Phased implementation with continuous validation'
      },
      {
        _key: `approach_${timestamp}_5`,
        _type: 'object',
        text: 'Establishment of continuous monitoring and improvement processes'
      }
    ]
  },
  services: [
    {
      _key: `service_${timestamp}_1`,
      _type: 'object',
      title: 'Physical Security Concepts',
      description: 'Development and implementation of comprehensive physical security measures to protect critical infrastructures from physical threats.',
      features: [
        {
          _key: `feature_${timestamp}_1`,
          _type: 'object',
          text: 'Perimeter protection and access controls'
        },
        {
          _key: `feature_${timestamp}_2`,
          _type: 'object',
          text: 'Surveillance and detection systems'
        },
        {
          _key: `feature_${timestamp}_3`,
          _type: 'object',
          text: 'Security policies and procedures'
        },
        {
          _key: `feature_${timestamp}_4`,
          _type: 'object',
          text: 'Emergency and evacuation plans'
        }
      ]
    },
    {
      _key: `service_${timestamp}_2`,
      _type: 'object',
      title: 'Digital Security Architectures',
      description: 'Implementation of robust digital security measures to protect against cyber threats and ensure system integrity.',
      features: [
        {
          _key: `feature_${timestamp}_5`,
          _type: 'object',
          text: 'Network segmentation and firewalls'
        },
        {
          _key: `feature_${timestamp}_6`,
          _type: 'object',
          text: 'Intrusion detection and prevention systems'
        },
        {
          _key: `feature_${timestamp}_7`,
          _type: 'object',
          text: 'Encryption and authentication measures'
        },
        {
          _key: `feature_${timestamp}_8`,
          _type: 'object',
          text: 'Security Information and Event Management (SIEM)'
        }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'The integration of physical and digital protection concepts by ADVISORI has elevated our security architecture to a new level. The holistic consideration of all security aspects provides us with comprehensive protection against modern threats.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI FTC GmbH',
    author: 'Asan Stefanski'
  },
  faq: []
}

export async function createKritisSchutzkonzepteEn() {
  console.log('Creating KRITIS Protection Concepts Physical Digital English page...')
  
  try {
    const result = await client.createOrReplace(kritisSchutzkonzepteEn)
    console.log(`✅ Created page: ${result._id}`)
    return result
  } catch (error) {
    console.error('Error creating page:', error)
    throw error
  }
}

// Execute if run directly
createKritisSchutzkonzepteEn()
