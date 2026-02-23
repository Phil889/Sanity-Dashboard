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

const kritisTestsAuditsEn = {
  _id: 'kritis-regelmaessige-tests-audits-en',
  _type: 'servicePage',
  title: 'KRITIS Regular Tests & Audits',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _ref: 'kritis-regelmaessige-tests-audits',
    _type: 'reference'
  },
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/kritis/kritis-ongoing-compliance/kritis-regular-tests-audits-en'
  },
  parent: {
    _ref: 'kritis-ongoing-compliance',
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
    title: 'KRITIS Regular Tests & Audits | ADVISORI',
    description: 'Professional execution of regular tests and audits for KRITIS operators. Ensuring continuous compliance through systematic review and validation of all IT security measures.',
    keywords: 'KRITIS, tests, audits, IT security, compliance, penetration tests, vulnerability assessments, BSI, critical infrastructure'
  },
  heroSection: {
    _type: 'object',
    tagline: 'Systematic Validation of Your IT Security Measures',
    heading: 'KRITIS Regular Tests & Audits',
    description: 'The KRITIS regulation requires regular tests and audits for continuous validation of IT security measures. We conduct systematic reviews that not only meet regulatory requirements but also provide valuable insights for continuous improvement of your security architecture.',
    heroImage: {
      _type: 'image',
      alt: 'KRITIS Regular Tests & Audits'
    },
    benefits: [
      {
        _key: `benefit_${timestamp}_1`,
        _type: 'object',
        text: 'Systematic validation of all IT security measures'
      },
      {
        _key: `benefit_${timestamp}_2`,
        _type: 'object',
        text: 'Proactive identification of security gaps'
      },
      {
        _key: `benefit_${timestamp}_3`,
        _type: 'object',
        text: 'Compliance-compliant documentation and reporting'
      },
      {
        _key: `benefit_${timestamp}_4`,
        _type: 'object',
        text: 'Continuous improvement of security posture'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'KRITIS Regular Tests & Audits',
    description: 'Regular tests and audits are central pillars of an effective KRITIS compliance strategy. They serve not only to fulfill regulatory requirements but also enable continuous validation and improvement of implemented IT security measures. Our systematic test and audit programs ensure that your critical infrastructure remains permanently protected and compliant.',
    additionalInfo: 'The quality and systematic nature of regular tests and audits significantly determines the effectiveness of your KRITIS compliance. While superficial tests only meet formal requirements, thorough, methodically sound reviews create real added value for organizational security.',
    alert: {
      title: 'Expert Tip',
      content: 'Effective tests and audits go beyond mere compliance fulfillment – they create continuous learning loops that contribute to systematic improvement of security architecture and organizational resilience.'
    },
    points: [
      {
        _key: `point_${timestamp}_1`,
        _type: 'object',
        text: 'Regular penetration tests to identify vulnerabilities'
      },
      {
        _key: `point_${timestamp}_2`,
        _type: 'object',
        text: 'Vulnerability assessments and security evaluations'
      },
      {
        _key: `point_${timestamp}_3`,
        _type: 'object',
        text: 'Compliance audits to verify regulatory conformity'
      },
      {
        _key: `point_${timestamp}_4`,
        _type: 'object',
        text: 'Business continuity and disaster recovery tests'
      },
      {
        _key: `point_${timestamp}_5`,
        _type: 'object',
        text: 'Incident response simulation and tabletop exercises'
      }
    ],
    serviceDescription: 'We offer comprehensive test and audit services for KRITIS operators, ranging from technical penetration tests to organizational compliance audits. Our approach combines regulatory conformity with continuous improvement of security posture.',
    servicePoints: [
      {
        _key: `servicePoint_${timestamp}_1`,
        _type: 'object',
        text: 'Systematic penetration tests and vulnerability assessments'
      },
      {
        _key: `servicePoint_${timestamp}_2`,
        _type: 'object',
        text: 'Compliance audits and regulatory conformity reviews'
      },
      {
        _key: `servicePoint_${timestamp}_3`,
        _type: 'object',
        text: 'Business continuity and disaster recovery tests'
      },
      {
        _key: `servicePoint_${timestamp}_4`,
        _type: 'object',
        text: 'Incident response simulations and crisis exercises'
      },
      {
        _key: `servicePoint_${timestamp}_5`,
        _type: 'object',
        text: 'Continuous improvement consulting based on test results'
      }
    ],
    whyUs: {
      title: 'Our Strengths',
      points: [
        {
          _key: `whyUs_${timestamp}_1`,
          _type: 'object',
          text: 'Specialized expertise in KRITIS-compliant test and audit methods'
        },
        {
          _key: `whyUs_${timestamp}_2`,
          _type: 'object',
          text: 'Comprehensive experience with critical infrastructures across various sectors'
        },
        {
          _key: `whyUs_${timestamp}_3`,
          _type: 'object',
          text: 'Methodological diversity from technical tests to organizational audits'
        },
        {
          _key: `whyUs_${timestamp}_4`,
          _type: 'object',
          text: 'Constructive consulting for continuous security improvement'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We develop customized test and audit programs with you that systematically validate all aspects of your IT security and enable continuous improvements.',
    points: [
      {
        _key: `approach_${timestamp}_1`,
        _type: 'object',
        text: 'Development of risk-based test and audit plans'
      },
      {
        _key: `approach_${timestamp}_2`,
        _type: 'object',
        text: 'Execution of systematic technical and organizational tests'
      },
      {
        _key: `approach_${timestamp}_3`,
        _type: 'object',
        text: 'Comprehensive documentation and compliance-compliant reporting'
      },
      {
        _key: `approach_${timestamp}_4`,
        _type: 'object',
        text: 'Development and prioritization of improvement measures'
      },
      {
        _key: `approach_${timestamp}_5`,
        _type: 'object',
        text: 'Continuous adaptation of test strategies to new threats'
      }
    ]
  },
  services: [
    {
      _key: `service_${timestamp}_1`,
      _type: 'object',
      title: 'Technical Security Tests',
      description: 'We conduct comprehensive technical tests ranging from automated vulnerability scans to manual penetration tests that validate all layers of your IT infrastructure.',
      features: [
        {
          _key: `serviceFeature_${timestamp}_1`,
          _type: 'object',
          text: 'Systematic penetration tests of all critical systems'
        },
        {
          _key: `serviceFeature_${timestamp}_2`,
          _type: 'object',
          text: 'Vulnerability assessments and weakness analyses'
        },
        {
          _key: `serviceFeature_${timestamp}_3`,
          _type: 'object',
          text: 'Red team exercises and advanced persistent threat simulations'
        },
        {
          _key: `serviceFeature_${timestamp}_4`,
          _type: 'object',
          text: 'Industrial Control Systems (ICS/SCADA) security tests'
        }
      ]
    },
    {
      _key: `service_${timestamp}_2`,
      _type: 'object',
      title: 'Organizational Compliance Audits',
      description: 'We systematically review the organizational aspects of your KRITIS compliance, from governance structures to operational processes and emergency plans.',
      features: [
        {
          _key: `serviceFeature_${timestamp}_5`,
          _type: 'object',
          text: 'Compliance audits for regulatory conformity review'
        },
        {
          _key: `serviceFeature_${timestamp}_6`,
          _type: 'object',
          text: 'Governance and risk management assessments'
        },
        {
          _key: `serviceFeature_${timestamp}_7`,
          _type: 'object',
          text: 'Business continuity and disaster recovery tests'
        },
        {
          _key: `serviceFeature_${timestamp}_8`,
          _type: 'object',
          text: 'Incident response simulations and crisis exercises'
        }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'Regular tests and audits are the backbone of a living KRITIS compliance. They not only create regulatory security but also enable continuous evolution of security architecture in a changing threat landscape.',
    name: 'Dr. Michael Höhle',
    position: 'Partner',
    company: 'ADVISORI FTC GmbH'
  },
  faq: []
}

export async function createKritisTestsAuditsEn() {
  console.log('Creating KRITIS Regular Tests & Audits English page...')
  
  try {
    const result = await client.createOrReplace(kritisTestsAuditsEn)
    console.log(`✅ Created page: ${result._id}`)
    return result
  } catch (error) {
    console.error('Error creating page:', error)
    throw error
  }
}
