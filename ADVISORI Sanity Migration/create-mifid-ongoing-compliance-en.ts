import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const mifidOngoingComplianceEn = {
  _id: 'mifid-ongoing-compliance-en',
  _type: 'servicePage',
  title: 'MiFID Ongoing Compliance',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'mifid-ongoing-compliance'
  },
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/mifid/mifid-ongoing-compliance-en'
  },
  parent: {
    _type: 'reference',
    _ref: 'mifid'
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
    title: 'MiFID Ongoing Compliance | ADVISORI',
    description: 'Ensure long-term compliance with our specialized MiFID Ongoing Compliance services. We implement sustainable processes and controls for continuous adherence to MiFID requirements, proactive adaptation to ESMA and BaFin guidelines, and operational excellence in compliance management.',
    keywords: 'MiFID Ongoing Compliance, continuous MiFID compliance, MiFID II, regulatory requirements, compliance management, securities regulation, continuous conformity, compliance monitoring, ESMA, BaFin'
  },
  heroSection: {
    _type: 'object',
    heading: 'MiFID Ongoing Compliance',
    tagline: 'Sustainable Conformity with MiFID Requirements',
    description: 'Ensure your institution\'s long-term compliance with complex MiFID requirements through our holistic ongoing compliance approach. We implement robust governance structures, automated monitoring mechanisms, and proactive adaptation processes that guarantee continuous compliance and minimize regulatory risks.',
    heroImage: {
      _type: 'image',
      alt: 'MiFID Ongoing Compliance'
    },
    benefits: [
      {
        _key: `benefit_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Continuous adherence to MiFID requirements through systematic monitoring'
      },
      {
        _key: `benefit_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Proactive adaptation to new ESMA and BaFin guidelines and interpretations'
      },
      {
        _key: `benefit_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Reduced compliance risk through automated controls and early warning systems'
      },
      {
        _key: `benefit_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Optimized resource utilization through efficient compliance processes'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'MiFID Ongoing Compliance',
    description: 'Continuous adherence to MiFID requirements presents financial institutions with complex challenges that extend far beyond initial implementation. Our MiFID Ongoing Compliance approach establishes sustainable structures and processes that ensure long-term conformity, minimize regulatory risks, and simultaneously guarantee operational efficiency – a comprehensive framework for regulatory excellence in the securities business.',
    serviceDescription: 'Our MiFID Ongoing Compliance service provides a comprehensive solution for continuous adherence to complex MiFID requirements. We support you in establishing sustainable compliance structures, implementing effective controls, and proactively adapting to regulatory developments in the securities business.',
    additionalInfo: 'Through implementing our MiFID Ongoing Compliance approach, our clients have not only reduced their compliance costs by an average of 30% but also significantly improved the quality of their regulatory processes. The automation of monitoring activities and proactive adaptation to regulatory changes have led to a substantial reduction in compliance risks and supervisory objections.',
    alert: {
      _type: 'object',
      title: 'Expert Tip',
      content: 'For effective MiFID Ongoing Compliance, integrating regulatory requirements into daily sales processes is crucial. Establish a "Regulatory Change Management Office" that proactively tracks regulatory developments and assesses their impacts. This approach reduces response effort for regulatory changes by up to 60% and significantly minimizes compliance risks.'
    },
    points: [
      {
        _key: `point_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Implementation of a robust MiFID compliance governance structure'
      },
      {
        _key: `point_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Establishment of automated compliance monitoring systems for MiFID requirements'
      },
      {
        _key: `point_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Integration of regulatory change management processes for ESMA and BaFin updates'
      },
      {
        _key: `point_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Development of comprehensive compliance controls and tests for investor and product protection'
      },
      {
        _key: `point_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Building continuous training and awareness programs for all employees'
      }
    ],
    servicePoints: [
      {
        _key: `servicePoint_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Assessment of existing MiFID compliance structures and processes'
      },
      {
        _key: `servicePoint_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Development and implementation of a MiFID compliance governance framework'
      },
      {
        _key: `servicePoint_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Establishment of automated monitoring and control systems for investor and product protection'
      },
      {
        _key: `servicePoint_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Implementation of regulatory change management for ESMA and BaFin updates'
      },
      {
        _key: `servicePoint_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Development of MiFID-specific training and awareness programs'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our Strengths',
      points: [
        {
          _key: `whyUs_en_${Date.now()}_1`,
          _type: 'object',
          text: 'Deep expertise in MiFID requirements and supervisory practice'
        },
        {
          _key: `whyUs_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Proven methodology for implementing sustainable MiFID compliance structures'
        },
        {
          _key: `whyUs_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Combination of regulatory know-how and operational implementation competence in the securities business'
        },
        {
          _key: `whyUs_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Demonstrated success in optimizing MiFID compliance processes'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We pursue a structured and proven approach for implementing sustainable MiFID Ongoing Compliance structures that ensure long-term regulatory conformity in the securities business.',
    points: [
      {
        _key: `approach_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Comprehensive analysis of existing MiFID compliance structures and processes'
      },
      {
        _key: `approach_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Development of a customized MiFID compliance governance framework'
      },
      {
        _key: `approach_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Implementation of automated monitoring and control mechanisms for investor protection'
      },
      {
        _key: `approach_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Establishment of proactive regulatory change management for MiFID updates'
      },
      {
        _key: `approach_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Integration of MiFID compliance training and continuous process optimization'
      }
    ]
  },
  services: [
    {
      _key: `service_en_${Date.now()}_1`,
      _type: 'object',
      title: 'MiFID Compliance Governance & Monitoring',
      description: 'We establish robust governance structures and automated monitoring systems that ensure continuous MiFID compliance, identify risks early, and signal action requirements.',
      features: [
        {
          _key: `feature_en_${Date.now()}_1`,
          _type: 'object',
          text: 'Development of a customized MiFID compliance governance framework'
        },
        {
          _key: `feature_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Implementation of automated compliance monitoring systems for investor protection'
        },
        {
          _key: `feature_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Establishment of clear responsibilities and escalation paths for MiFID compliance'
        },
        {
          _key: `feature_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Integration of KPI-based MiFID compliance reporting'
        }
      ]
    },
    {
      _key: `service_en_${Date.now()}_2`,
      _type: 'object',
      title: 'MiFID Regulatory Change Management',
      description: 'We implement proactive processes for identifying, assessing, and implementing regulatory MiFID changes that protect your institution from regulatory surprises and minimize adaptation efforts.',
      features: [
        {
          _key: `feature_en_${Date.now()}_5`,
          _type: 'object',
          text: 'Establishment of a regulatory early warning system for ESMA and BaFin guidelines'
        },
        {
          _key: `feature_en_${Date.now()}_6`,
          _type: 'object',
          text: 'Development of structured impact analysis processes for MiFID updates'
        },
        {
          _key: `feature_en_${Date.now()}_7`,
          _type: 'object',
          text: 'Implementation of standardized change management procedures for sales processes'
        },
        {
          _key: `feature_en_${Date.now()}_8`,
          _type: 'object',
          text: 'Integration of stakeholder management and communication for regulatory changes'
        }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'Sustainable adherence to MiFID requirements is not a one-time project but a continuous process that must be integrated into the DNA of the financial institution. Our Ongoing Compliance approach creates the structures, processes, and cultural prerequisites for this integration and enables our clients not only to meet regulatory requirements but to use them as a strategic advantage. The combination of automated monitoring, proactive change management, and integrated control systems not only reduces compliance risks but also significantly optimizes resource deployment and strengthens investor confidence.',
    name: 'Dr. Claudia Müller',
    position: 'Senior Director Regulatory Compliance',
    company: 'ADVISORI FTC GmbH'
  },
  faq: []
}

export async function createMifidOngoingComplianceEn() {
  console.log('Creating MiFID Ongoing Compliance EN page...')
  
  const result = await client.createOrReplace(mifidOngoingComplianceEn)
  console.log('Created MiFID Ongoing Compliance EN page:', result._id)
  return result
}

createMifidOngoingComplianceEn()
