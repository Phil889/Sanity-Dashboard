import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

const kritisOngoingComplianceEn = {
  _id: 'kritis-ongoing-compliance-en',
  _type: 'servicePage',
  title: 'KRITIS Ongoing Compliance',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'kritis-ongoing-compliance'
  },
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/kritis/kritis-ongoing-compliance-en'
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
    title: 'KRITIS Ongoing Compliance | ADVISORI',
    description: 'Continuous KRITIS compliance for critical infrastructure operators. We support you in maintaining all IT security requirements and regulatory standards on an ongoing basis.',
    keywords: 'KRITIS, Ongoing Compliance, IT Security, Critical Infrastructure, BSI, Compliance Management, Information Security'
  },
  heroSection: {
    _type: 'object',
    heading: 'KRITIS Ongoing Compliance',
    tagline: 'Continuous Compliance for Critical Infrastructure',
    description: 'Maintaining KRITIS requirements on an ongoing basis requires continuous monitoring, regular adjustments, and proactive risk management. We ensure that your critical infrastructure remains compliant and resilient at all times.',
    heroImage: {
      _type: 'image',
      alt: 'KRITIS Ongoing Compliance'
    },
    benefits: [
      {
        _key: `benefit_${Date.now()}_1`,
        _type: 'object',
        text: 'Continuous monitoring of compliance status'
      },
      {
        _key: `benefit_${Date.now()}_2`,
        _type: 'object',
        text: 'Proactive identification and remediation of deviations'
      },
      {
        _key: `benefit_${Date.now()}_3`,
        _type: 'object',
        text: 'Automated monitoring and reporting systems'
      },
      {
        _key: `benefit_${Date.now()}_4`,
        _type: 'object',
        text: 'Timely adaptation to new regulatory requirements'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'KRITIS Ongoing Compliance',
    description: 'KRITIS compliance is not a one-time project but a continuous process. After successful implementation of IT security requirements, ongoing monitoring and adaptation are necessary to maintain compliance conformity and respond to new threats and regulatory changes. Our Ongoing Compliance service ensures continuous adherence to all KRITIS requirements.',
    additionalInfo: 'The KRITIS landscape is continuously evolving, new threats emerge, and regulatory requirements are tightened. Proactive Ongoing Compliance Management is therefore essential not only to ensure current compliance but also to remain future-proof.',
    serviceDescription: 'We offer comprehensive Ongoing Compliance services for KRITIS operators that ensure continuous monitoring, proactive risk management, and timely adaptation to new requirements. Our service combines automated technologies with expert consulting.',
    alert: {
      _type: 'object',
      title: 'Expert Tip',
      content: 'Effective KRITIS Ongoing Compliance requires not only technical monitoring but also the continuous development of organizational structures and processes to keep pace with the evolving threat landscape.'
    },
    points: [
      {
        _key: `point_${Date.now()}_1`,
        _type: 'object',
        text: 'Continuous monitoring of IT security measures and compliance status'
      },
      {
        _key: `point_${Date.now()}_2`,
        _type: 'object',
        text: 'Regular assessment and updating of risk evaluation'
      },
      {
        _key: `point_${Date.now()}_3`,
        _type: 'object',
        text: 'Proactive identification and remediation of compliance deviations'
      },
      {
        _key: `point_${Date.now()}_4`,
        _type: 'object',
        text: 'Adaptation to new threat situations and regulatory developments'
      },
      {
        _key: `point_${Date.now()}_5`,
        _type: 'object',
        text: 'Automated monitoring and alerting systems for critical security events'
      }
    ],
    servicePoints: [
      {
        _key: `servicePoint_${Date.now()}_1`,
        _type: 'object',
        text: 'Continuous compliance monitoring and status reporting'
      },
      {
        _key: `servicePoint_${Date.now()}_2`,
        _type: 'object',
        text: 'Regular risk assessments and gap analyses'
      },
      {
        _key: `servicePoint_${Date.now()}_3`,
        _type: 'object',
        text: 'Proactive adaptation to new regulatory requirements'
      },
      {
        _key: `servicePoint_${Date.now()}_4`,
        _type: 'object',
        text: 'Incident response and compliance recovery'
      },
      {
        _key: `servicePoint_${Date.now()}_5`,
        _type: 'object',
        text: 'Training and awareness programs for continuous improvement'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our Strengths',
      points: [
        {
          _key: `whyUs_${Date.now()}_1`,
          _type: 'object',
          text: 'Deep expertise in KRITIS regulation and continuous compliance management'
        },
        {
          _key: `whyUs_${Date.now()}_2`,
          _type: 'object',
          text: 'Years of experience supporting critical infrastructure across various sectors'
        },
        {
          _key: `whyUs_${Date.now()}_3`,
          _type: 'object',
          text: 'Innovative technology solutions for automated compliance monitoring'
        },
        {
          _key: `whyUs_${Date.now()}_4`,
          _type: 'object',
          text: 'Proactive approach with continuous adaptation to new requirements'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We work with you to develop a systematic Ongoing Compliance Management that combines continuous monitoring with proactive risk management.',
    points: [
      {
        _key: `approach_${Date.now()}_1`,
        _type: 'object',
        text: 'Establishing continuous monitoring and assessment processes'
      },
      {
        _key: `approach_${Date.now()}_2`,
        _type: 'object',
        text: 'Implementing automated compliance monitoring systems'
      },
      {
        _key: `approach_${Date.now()}_3`,
        _type: 'object',
        text: 'Regular risk assessments and adjustment of protective measures'
      },
      {
        _key: `approach_${Date.now()}_4`,
        _type: 'object',
        text: 'Proactive identification and treatment of compliance deviations'
      },
      {
        _key: `approach_${Date.now()}_5`,
        _type: 'object',
        text: 'Continuous optimization and adaptation to new requirements'
      }
    ]
  },
  testimonial: {
    _type: 'object',
    quote: 'KRITIS compliance is a continuous process that requires proactive monitoring and timely adjustments. Our Ongoing Compliance approach ensures that critical infrastructure remains permanently protected and compliant, even in the face of evolving threat landscapes.',
    name: 'Dr. Michael Höhle',
    position: 'Partner',
    company: 'ADVISORI FTC GmbH'
  },
  services: [
    {
      _key: `service_${Date.now()}_1`,
      _type: 'object',
      title: 'Continuous Compliance Monitoring',
      description: 'We establish comprehensive monitoring systems that continuously monitor the compliance status of your critical infrastructure and provide early warning of deviations.',
      features: [
        {
          _key: `serviceFeature_${Date.now()}_1`,
          _type: 'object',
          text: 'Automated monitoring of all relevant IT security measures'
        },
        {
          _key: `serviceFeature_${Date.now()}_2`,
          _type: 'object',
          text: 'Real-time alerting for critical security events'
        },
        {
          _key: `serviceFeature_${Date.now()}_3`,
          _type: 'object',
          text: 'Regular compliance dashboards and status reports'
        },
        {
          _key: `serviceFeature_${Date.now()}_4`,
          _type: 'object',
          text: 'Integration with existing monitoring and SIEM systems'
        }
      ]
    },
    {
      _key: `service_${Date.now()}_2`,
      _type: 'object',
      title: 'Proactive Risk and Gap Analyses',
      description: 'We conduct regular risk assessments and proactively identify potential compliance gaps before they become critical problems.',
      features: [
        {
          _key: `serviceFeature_${Date.now()}_5`,
          _type: 'object',
          text: 'Quarterly risk assessments and threat analyses'
        },
        {
          _key: `serviceFeature_${Date.now()}_6`,
          _type: 'object',
          text: 'Identification and prioritization of compliance gaps'
        },
        {
          _key: `serviceFeature_${Date.now()}_7`,
          _type: 'object',
          text: 'Development and implementation of action plans'
        },
        {
          _key: `serviceFeature_${Date.now()}_8`,
          _type: 'object',
          text: 'Continuous adaptation to new threat situations'
        }
      ]
    }
  ],
  faq: []
}

export async function createKritisOngoingComplianceEn() {
  console.log('Creating KRITIS Ongoing Compliance EN page...')
  
  const result = await client.createOrReplace(kritisOngoingComplianceEn)
  console.log('Created KRITIS Ongoing Compliance EN page:', result._id)
  
  return result
}

// Execute if run directly
createKritisOngoingComplianceEn().catch(console.error)
