import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const kritisKontinuierlicheUeberwachungEnData = {
  _type: 'servicePage',
  _id: 'kritis-kontinuierliche-ueberwachung-incident-management-en',
  title: 'CRITIS Continuous Monitoring Incident Management',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'kritis-kontinuierliche-ueberwachung-incident-management'
  },
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/kritis/kritis-implementation/kritis-continuous-monitoring-incident-management-en'
  },
  parent: {
    _type: 'reference',
    _ref: 'kritis-implementation'
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
    title: 'CRITIS Continuous Monitoring Incident Management | ADVISORI',
    description: 'Professional CRITIS-compliant continuous monitoring and incident management. 24/7 monitoring, automated detection and structured response to security incidents.',
    keywords: 'CRITIS monitoring, incident management, 24/7 monitoring, security incidents, SIEM, SOC, critical infrastructure, real-time monitoring'
  },
  heroSection: {
    _type: 'object',
    heroImage: {
      _type: 'image',
      alt: 'CRITIS Continuous Monitoring Incident Management'
    },
    tagline: 'Proactive Threat Detection and Efficient Incident Management',
    heading: 'CRITIS Continuous Monitoring Incident Management',
    description: 'Comprehensive 24/7 monitoring of critical infrastructure with intelligent threat detection and structured incident management for maximum operational security.',
    benefits: [
      {
        _type: 'object',
        _key: generateKey('benefit', 1),
        text: '24/7 Real-Time Monitoring with AI-Powered Anomaly Detection'
      },
      {
        _type: 'object',
        _key: generateKey('benefit', 2),
        text: 'Automated Incident Response and Escalation Processes'
      },
      {
        _type: 'object',
        _key: generateKey('benefit', 3),
        text: 'CRITIS-Compliant Documentation and Reporting'
      },
      {
        _type: 'object',
        _key: generateKey('benefit', 4),
        text: 'Integrated Threat Intelligence and Forensics Capabilities'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'CRITIS Continuous Monitoring Incident Management',
    description: 'Continuous monitoring of critical infrastructure requires highly specialized monitoring systems and professional incident management. We implement comprehensive monitoring solutions that meet CRITIS requirements and provide proactive protection.',
    points: [
      {
        _type: 'object',
        _key: generateKey('point', 1),
        text: 'Design and implementation of 24/7 Security Operations Centers'
      },
      {
        _type: 'object',
        _key: generateKey('point', 2),
        text: 'AI-powered anomaly detection and threat intelligence integration'
      },
      {
        _type: 'object',
        _key: generateKey('point', 3),
        text: 'Automated incident response and orchestration'
      },
      {
        _type: 'object',
        _key: generateKey('point', 4),
        text: 'CRITIS-compliant documentation and forensics procedures'
      },
      {
        _type: 'object',
        _key: generateKey('point', 5),
        text: 'Integration into existing security and IT infrastructures'
      }
    ],
    alert: {
      _type: 'object',
      title: 'Critical Requirement',
      content: 'CRITIS operators must implement continuous monitoring and documented incident response procedures. Monitoring failures can lead to significant regulatory consequences.'
    },
    whyUs: {
      _type: 'object',
      title: 'Our Expertise',
      points: [
        {
          _type: 'object',
          _key: generateKey('whyUs', 1),
          text: 'Specialization in CRITIS-compliant monitoring architectures'
        },
        {
          _type: 'object',
          _key: generateKey('whyUs', 2),
          text: 'Experience with enterprise SIEM and SOC implementations'
        },
        {
          _type: 'object',
          _key: generateKey('whyUs', 3),
          text: 'Certified incident response and digital forensics experts'
        },
        {
          _type: 'object',
          _key: generateKey('whyUs', 4),
          text: 'Proven integration of AI and machine learning technologies'
        }
      ]
    },
    additionalInfo: 'Professional continuous monitoring not only significantly reduces threat detection time but also enables preventive measures and optimizes incident response times.',
    serviceDescription: 'We develop and implement customized monitoring and incident management solutions that meet both regulatory requirements and ensure operational excellence.',
    servicePoints: [
      {
        _type: 'object',
        _key: generateKey('servicePoint', 1),
        text: 'Security Operations Center (SOC) design and setup'
      },
      {
        _type: 'object',
        _key: generateKey('servicePoint', 2),
        text: 'SIEM implementation and threat intelligence integration'
      },
      {
        _type: 'object',
        _key: generateKey('servicePoint', 3),
        text: 'Incident response playbooks and automation'
      },
      {
        _type: 'object',
        _key: generateKey('servicePoint', 4),
        text: 'Forensics capabilities and evidence preservation'
      },
      {
        _type: 'object',
        _key: generateKey('servicePoint', 5),
        text: 'Continuous optimization and threat hunting'
      }
    ]
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We develop a comprehensive monitoring and incident management strategy with you for maximum operational security.',
    points: [
      {
        _type: 'object',
        _key: generateKey('approach', 1),
        text: 'Analysis of your critical assets and threat landscape'
      },
      {
        _type: 'object',
        _key: generateKey('approach', 2),
        text: 'Design of a customized monitoring architecture'
      },
      {
        _type: 'object',
        _key: generateKey('approach', 3),
        text: 'Implementation of SIEM, SOC and incident response systems'
      },
      {
        _type: 'object',
        _key: generateKey('approach', 4),
        text: 'Integration of AI-powered anomaly detection and automation'
      },
      {
        _type: 'object',
        _key: generateKey('approach', 5),
        text: 'Testing, training and continuous optimization of procedures'
      }
    ]
  },
  testimonial: {
    _type: 'object',
    company: 'ADVISORI FTC GmbH',
    name: 'Asan Stefanski',
    position: 'Director',
    quote: 'With ADVISORI, we implemented state-of-the-art continuous monitoring that reduced our detection times by 85% while meeting all CRITIS requirements. The AI-powered anomaly detection is a real game-changer.'
  },
  services: [
    {
      _type: 'object',
      _key: generateKey('service', 1),
      title: '24/7 Security Operations Center (SOC) Design & Implementation',
      description: 'Building professional Security Operations Centers for continuous monitoring of critical infrastructure.',
      features: [
        {
          _type: 'object',
          _key: generateKey('serviceFeature', 1),
          text: 'SOC architecture design and technology selection'
        },
        {
          _type: 'object',
          _key: generateKey('serviceFeature', 2),
          text: 'SIEM integration and dashboard development'
        },
        {
          _type: 'object',
          _key: generateKey('serviceFeature', 3),
          text: 'Analyst workstations and workflow optimization'
        },
        {
          _type: 'object',
          _key: generateKey('serviceFeature', 4),
          text: 'Staffing concepts and operating model development'
        }
      ]
    },
    {
      _type: 'object',
      _key: generateKey('service', 2),
      title: 'AI-Powered Incident Response & Automation',
      description: 'Intelligent incident detection and automated response systems for optimal response times.',
      features: [
        {
          _type: 'object',
          _key: generateKey('serviceFeature', 5),
          text: 'Machine learning-based anomaly detection'
        },
        {
          _type: 'object',
          _key: generateKey('serviceFeature', 6),
          text: 'Automated incident triage and classification'
        },
        {
          _type: 'object',
          _key: generateKey('serviceFeature', 7),
          text: 'SOAR integration and response orchestration'
        },
        {
          _type: 'object',
          _key: generateKey('serviceFeature', 8),
          text: 'Threat intelligence integration and enrichment'
        }
      ]
    }
  ],
  faq: []
}

export async function createKritisKontinuierlicheUeberwachungEn() {
  console.log('Creating CRITIS Continuous Monitoring Incident Management English page...')
  
  const transaction = client.transaction()
  transaction.createOrReplace(kritisKontinuierlicheUeberwachungEnData)
  
  await transaction.commit()
  console.log('✅ CRITIS Continuous Monitoring Incident Management English page created successfully')
  
  return kritisKontinuierlicheUeberwachungEnData._id
}

// Only run if executed directly
if (require.main === module) {
  createKritisKontinuierlicheUeberwachungEn().catch(console.error)
}
