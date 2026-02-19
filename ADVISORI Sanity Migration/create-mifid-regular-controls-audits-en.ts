import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const mifidRegularControlsAuditsEn = {
  _id: 'mifid-regular-controls-audits-en',
  _type: 'servicePage',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'mifid-regelmaessige-kontrollen-audits'
  },
  title: 'MiFID Regular Controls & Audits',
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/mifid/mifid-ongoing-compliance/mifid-regular-controls-audits-en'
  },
  parent: {
    _ref: 'mifid-ongoing-compliance',
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
    title: 'MiFID Regular Controls & Audits | ADVISORI',
    description: 'Ensure continuous MiFID compliance through our specialized control and audit services. We develop robust audit mechanisms and implement systematic audit approaches that ensure sustainable compliance and early risk detection in your institution.',
    keywords: 'MiFID controls, MiFID audits, compliance audits, MiFID II audits, regulatory controls, compliance audits, securities regulation, MiFID controls, investor protection, compliance risk management'
  },
  heroSection: {
    _type: 'object',
    heading: 'MiFID Regular Controls & Audits',
    tagline: 'Effective Audit Mechanisms for Sustainable MiFID Compliance',
    description: 'Ensure continuous compliance with MiFID requirements through our comprehensive control and audit solutions. We develop customized audit mechanisms that identify critical compliance risks early and implement systematic audit approaches that sustainably ensure the quality of your MiFID compliance.',
    heroImage: {
      _type: 'image',
      alt: 'MiFID Regular Controls & Audits'
    },
    benefits: [
      {
        _key: `benefit_${Date.now()}_1`,
        _type: 'object',
        text: 'Risk-based control systems for efficient monitoring of critical MiFID requirements'
      },
      {
        _key: `benefit_${Date.now()}_2`,
        _type: 'object',
        text: 'Systematic audit approaches with clear audit trails and comprehensive documentation'
      },
      {
        _key: `benefit_${Date.now()}_3`,
        _type: 'object',
        text: 'Early identification of compliance risks and proactive measure development'
      },
      {
        _key: `benefit_${Date.now()}_4`,
        _type: 'object',
        text: 'Demonstration of compliance diligence to supervisory authorities and stakeholders'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'MiFID Regular Controls & Audits',
    description: 'The complex and dynamic MiFID requirements demand robust control and audit mechanisms that go far beyond point-in-time compliance checks. Our integrated control and audit approach establishes systematic audit processes that not only identify compliance violations but also promote continuous improvement of MiFID compliance and provide reliable evidence for supervisory authorities and internal stakeholders.',
    serviceDescription: 'Our MiFID Regular Controls & Audits service provides a comprehensive solution for continuous monitoring and auditing of your MiFID compliance. We support you in establishing efficient control systems, implementing systematic audit processes, and developing reliable documentation and evidence mechanisms.',
    alert: {
      _type: 'object',
      title: 'Expert Tip',
      content: 'Implement a risk-based control system that differentiates audit intensity and frequency according to actual risk exposure. Combine this with automated control mechanisms and AI-powered analysis tools that detect patterns and anomalies. This dual approach not only increases the effectiveness of MiFID controls but also reduces operational effort by up to 60% while improving risk detection.'
    },
    additionalInfo: 'Our clients report significant improvement in their compliance security after implementing our MiFID control and audit solutions. On average, they were able to reduce the number of critical MiFID compliance gaps by 75% while simultaneously reducing the effort for controls and audits by 40%. The combination of targeted, risk-based controls and systematic audit processes leads to sustainable compliance security that goes far beyond formal requirements.',
    points: [
      {
        _key: `point_${Date.now()}_1`,
        _type: 'object',
        text: 'Development of risk-based control systems for MiFID requirements'
      },
      {
        _key: `point_${Date.now()}_2`,
        _type: 'object',
        text: 'Implementation of systematic audit processes with clear audit trails'
      },
      {
        _key: `point_${Date.now()}_3`,
        _type: 'object',
        text: 'Establishment of automated controls and testing procedures'
      },
      {
        _key: `point_${Date.now()}_4`,
        _type: 'object',
        text: 'Integration of KPI-based compliance reporting and risk management'
      },
      {
        _key: `point_${Date.now()}_5`,
        _type: 'object',
        text: 'Development of comprehensive documentation and evidence systems'
      }
    ],
    servicePoints: [
      {
        _key: `servicePoint_${Date.now()}_1`,
        _type: 'object',
        text: 'Assessment of existing MiFID control and audit structures'
      },
      {
        _key: `servicePoint_${Date.now()}_2`,
        _type: 'object',
        text: 'Development of risk-based control systems for MiFID requirements'
      },
      {
        _key: `servicePoint_${Date.now()}_3`,
        _type: 'object',
        text: 'Implementation of systematic audit processes with clear audit trails'
      },
      {
        _key: `servicePoint_${Date.now()}_4`,
        _type: 'object',
        text: 'Establishment of automated controls and AI-powered analysis procedures'
      },
      {
        _key: `servicePoint_${Date.now()}_5`,
        _type: 'object',
        text: 'Development of comprehensive documentation and evidence systems'
      }
    ],
    whyUs: {
      title: 'Our Strengths',
      points: [
        {
          _key: `whyUs_${Date.now()}_1`,
          _type: 'object',
          text: 'Deep expertise in MiFID requirements and regulatory audit practice'
        },
        {
          _key: `whyUs_${Date.now()}_2`,
          _type: 'object',
          text: 'Proven methodology for efficient and effective control and audit processes'
        },
        {
          _key: `whyUs_${Date.now()}_3`,
          _type: 'object',
          text: 'Combination of regulatory know-how and practical audit competence'
        },
        {
          _key: `whyUs_${Date.now()}_4`,
          _type: 'object',
          text: 'Demonstrated success in optimizing compliance controls'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We follow a structured and proven approach for implementing sustainable MiFID control and audit structures that ensure long-term regulatory compliance in the securities business.',
    points: [
      {
        _key: `approach_${Date.now()}_1`,
        _type: 'object',
        text: 'Comprehensive analysis of existing MiFID control and audit mechanisms'
      },
      {
        _key: `approach_${Date.now()}_2`,
        _type: 'object',
        text: 'Development of a customized control and audit framework'
      },
      {
        _key: `approach_${Date.now()}_3`,
        _type: 'object',
        text: 'Implementation of risk-based controls and systematic audit processes'
      },
      {
        _key: `approach_${Date.now()}_4`,
        _type: 'object',
        text: 'Establishment of automated monitoring mechanisms and AI-powered analyses'
      },
      {
        _key: `approach_${Date.now()}_5`,
        _type: 'object',
        text: 'Integration of control and audit results into continuous improvement processes'
      }
    ]
  },
  services: [
    {
      _key: `service_${Date.now()}_1`,
      _type: 'object',
      title: 'MiFID Control System Design & Implementation',
      description: 'We develop customized control systems precisely tailored to your MiFID risk profiles that efficiently ensure continuous monitoring of critical compliance requirements.',
      features: [
        {
          _key: `feature_${Date.now()}_1`,
          _type: 'object',
          text: 'Development of risk-based control frameworks for MiFID requirements'
        },
        {
          _key: `feature_${Date.now()}_2`,
          _type: 'object',
          text: 'Design of automated controls and monitoring mechanisms'
        },
        {
          _key: `feature_${Date.now()}_3`,
          _type: 'object',
          text: 'Implementation of AI-powered analysis tools for anomaly detection'
        },
        {
          _key: `feature_${Date.now()}_4`,
          _type: 'object',
          text: 'Integration of control systems into existing governance structures'
        }
      ]
    },
    {
      _key: `service_${Date.now()}_2`,
      _type: 'object',
      title: 'MiFID Audit Methodology & Execution',
      description: 'We establish systematic audit processes that comprehensively audit MiFID compliance, provide reliable evidence, and catalyze continuous improvements.',
      features: [
        {
          _key: `feature_${Date.now()}_5`,
          _type: 'object',
          text: 'Development of structured audit methodologies for MiFID requirements'
        },
        {
          _key: `feature_${Date.now()}_6`,
          _type: 'object',
          text: 'Execution of specialized MiFID compliance audits'
        },
        {
          _key: `feature_${Date.now()}_7`,
          _type: 'object',
          text: 'Establishment of comprehensive documentation and evidence systems'
        },
        {
          _key: `feature_${Date.now()}_8`,
          _type: 'object',
          text: 'Integration of audit results into continuous improvement processes'
        }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'The effectiveness of MiFID controls and audits significantly determines the quality and sustainability of compliance in the securities business. Our integrated approach combines risk-based controls with systematic audit processes, creating a robust compliance architecture that not only meets regulatory requirements but also generates operational added value. The combination of automated control mechanisms, AI-powered analysis tools, and structured audit processes not only significantly reduces compliance risks but also optimizes resource deployment and provides valuable insights for continuous improvement of business processes.',
    name: 'Dr. Martin Weber',
    position: 'Senior Director Compliance Audit',
    company: 'ADVISORI FTC GmbH'
  },
  faq: []
}

async function createMifidRegularControlsAuditsEn() {
  console.log('Creating MiFID Regular Controls & Audits EN page...')
  
  try {
    const result = await client.createOrReplace(mifidRegularControlsAuditsEn)
    console.log('✅ MiFID Regular Controls & Audits EN page created successfully!')
    console.log(`Document ID: ${result._id}`)
  } catch (error) {
    console.error('Error creating page:', error)
    throw error
  }
}

createMifidRegularControlsAuditsEn()
