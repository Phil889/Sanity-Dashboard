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

const kritisSchulungenEn = {
  _id: 'kritis-schulungen-awareness-kampagnen-en',
  _type: 'servicePage',
  title: 'KRITIS Training & Awareness Campaigns',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _ref: 'kritis-schulungen-awareness-kampagnen',
    _type: 'reference'
  },
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/kritis/kritis-ongoing-compliance/kritis-training-awareness-campaigns-en'
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
    title: 'KRITIS Training & Awareness Campaigns | ADVISORI',
    description: 'Specialized KRITIS training and awareness campaigns for critical infrastructure operators. We strengthen your employees\' security awareness and ensure sustainable compliance.',
    keywords: 'KRITIS training, security awareness, IT security training, critical infrastructure, BSI, cyber security training, employee training'
  },
  heroSection: {
    _type: 'object',
    tagline: 'Security Awareness as the Foundation of KRITIS Compliance',
    heading: 'KRITIS Training & Awareness Campaigns',
    description: 'People are often the weakest link in the security chain. Our specialized KRITIS training and awareness campaigns strengthen your employees\' security awareness and create a robust human firewall for your critical infrastructure.',
    heroImage: {
      _type: 'image',
      alt: 'KRITIS Training & Awareness Campaigns'
    },
    benefits: [
      {
        _key: `benefit_${timestamp}_1`,
        _type: 'object',
        text: 'Target group-specific KRITIS training programs'
      },
      {
        _key: `benefit_${timestamp}_2`,
        _type: 'object',
        text: 'Practical simulation of real threat scenarios'
      },
      {
        _key: `benefit_${timestamp}_3`,
        _type: 'object',
        text: 'Continuous awareness campaigns with success measurement'
      },
      {
        _key: `benefit_${timestamp}_4`,
        _type: 'object',
        text: 'Sustainable improvement of security culture'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'KRITIS Training & Awareness Campaigns',
    description: 'In critical infrastructures, qualified and sensitized employees are the key to effective IT security. Technical protective measures alone are not sufficient if the human element is not appropriately trained and sensitized to cyber threats. Our KRITIS-specific training and awareness programs address the special requirements and threat situations of critical infrastructures.',
    additionalInfo: 'The threat landscape for critical infrastructures is continuously evolving. Cyber attackers are becoming increasingly sophisticated in their social engineering techniques. Therefore, it is essential that all employees are regularly trained and informed about current threats.',
    alert: {
      title: 'Expert Tip',
      content: 'Effective KRITIS training must go beyond pure knowledge transfer and develop practical action competencies for emergencies. Regular exercises and simulations are therefore indispensable.'
    },
    points: [
      {
        _key: `point_${timestamp}_1`,
        _type: 'object',
        text: 'Role-specific training programs for different employee groups'
      },
      {
        _key: `point_${timestamp}_2`,
        _type: 'object',
        text: 'Practical simulation of KRITIS-specific attack scenarios'
      },
      {
        _key: `point_${timestamp}_3`,
        _type: 'object',
        text: 'Continuous awareness campaigns with regular updates'
      },
      {
        _key: `point_${timestamp}_4`,
        _type: 'object',
        text: 'Measurement and evaluation of training effectiveness'
      },
      {
        _key: `point_${timestamp}_5`,
        _type: 'object',
        text: 'Integration into existing compliance and governance structures'
      }
    ],
    serviceDescription: 'We develop and implement comprehensive KRITIS-specific training and awareness programs that reach all levels of your organization and effect sustainable behavioral changes. Our approach combines theoretical knowledge with practical exercises and continuous reinforcement.',
    servicePoints: [
      {
        _key: `servicePoint_${timestamp}_1`,
        _type: 'object',
        text: 'Development of target group-specific training content and formats'
      },
      {
        _key: `servicePoint_${timestamp}_2`,
        _type: 'object',
        text: 'Conducting phishing simulations and social engineering tests'
      },
      {
        _key: `servicePoint_${timestamp}_3`,
        _type: 'object',
        text: 'Continuous awareness campaigns with current threat information'
      },
      {
        _key: `servicePoint_${timestamp}_4`,
        _type: 'object',
        text: 'Measurement and evaluation of training effectiveness and behavioral changes'
      },
      {
        _key: `servicePoint_${timestamp}_5`,
        _type: 'object',
        text: 'Integration into existing HR and compliance processes'
      }
    ],
    whyUs: {
      title: 'Our Strengths',
      points: [
        {
          _key: `whyUs_${timestamp}_1`,
          _type: 'object',
          text: 'Specialized expertise in KRITIS-specific threat landscapes'
        },
        {
          _key: `whyUs_${timestamp}_2`,
          _type: 'object',
          text: 'Years of experience in training critical infrastructure operators'
        },
        {
          _key: `whyUs_${timestamp}_3`,
          _type: 'object',
          text: 'Innovative training methods with high practical relevance'
        },
        {
          _key: `whyUs_${timestamp}_4`,
          _type: 'object',
          text: 'Measurable improvement of security awareness and incident response capabilities'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'Together with you, we develop a comprehensive KRITIS training and awareness program that reaches all employee levels and effects sustainable behavioral changes.',
    points: [
      {
        _key: `approach_${timestamp}_1`,
        _type: 'object',
        text: 'Analysis of current security awareness and identification of training needs'
      },
      {
        _key: `approach_${timestamp}_2`,
        _type: 'object',
        text: 'Development of role-specific training concepts and materials'
      },
      {
        _key: `approach_${timestamp}_3`,
        _type: 'object',
        text: 'Implementation of interactive training formats and practical exercises'
      },
      {
        _key: `approach_${timestamp}_4`,
        _type: 'object',
        text: 'Conducting continuous awareness campaigns and reinforcement measures'
      },
      {
        _key: `approach_${timestamp}_5`,
        _type: 'object',
        text: 'Measuring effectiveness and continuous optimization of programs'
      }
    ]
  },
  services: [
    {
      _key: `service_${timestamp}_1`,
      _type: 'object',
      title: 'Role-specific KRITIS Training Programs',
      description: 'We develop customized training programs for different roles and responsibilities in critical infrastructures, from management to operational employees.',
      features: [
        {
          _key: `serviceFeature_${timestamp}_1`,
          _type: 'object',
          text: 'Executive training on strategic KRITIS security aspects'
        },
        {
          _key: `serviceFeature_${timestamp}_2`,
          _type: 'object',
          text: 'IT administrator training on technical protective measures'
        },
        {
          _key: `serviceFeature_${timestamp}_3`,
          _type: 'object',
          text: 'Operator training on security-relevant operational processes'
        },
        {
          _key: `serviceFeature_${timestamp}_4`,
          _type: 'object',
          text: 'General employee awareness on basic security principles'
        }
      ]
    },
    {
      _key: `service_${timestamp}_2`,
      _type: 'object',
      title: 'Continuous Awareness Campaigns',
      description: 'We implement permanent awareness programs that continuously maintain security awareness and address current threats.',
      features: [
        {
          _key: `serviceFeature_${timestamp}_5`,
          _type: 'object',
          text: 'Regular threat intelligence updates and warnings'
        },
        {
          _key: `serviceFeature_${timestamp}_6`,
          _type: 'object',
          text: 'Phishing simulations and social engineering tests'
        },
        {
          _key: `serviceFeature_${timestamp}_7`,
          _type: 'object',
          text: 'Interactive e-learning modules and microlearning units'
        },
        {
          _key: `serviceFeature_${timestamp}_8`,
          _type: 'object',
          text: 'Gamification approaches to increase learning motivation'
        }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'People are often the weakest link in the security chain, but with the right training and sensitization, they become the strongest line of defense. Our KRITIS-specific awareness programs create a robust human firewall that optimally complements technical security measures.',
    name: 'Dr. Michael Höhle',
    position: 'Partner',
    company: 'ADVISORI FTC GmbH'
  },
  faq: []
}

export async function createKritisSchulungenEn() {
  console.log('Creating KRITIS Schulungen & Awareness-Kampagnen English page...')
  
  try {
    const result = await client.createOrReplace(kritisSchulungenEn)
    console.log(`✅ Created page: ${result._id}`)
    return result
  } catch (error) {
    console.error('Error creating page:', error)
    throw error
  }
}
