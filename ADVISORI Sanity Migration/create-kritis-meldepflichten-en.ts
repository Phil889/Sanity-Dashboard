import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

const kritisMeldepflichtenEn = {
  _id: 'kritis-meldepflichten-behoerdenkommunikation-en',
  _type: 'servicePage',
  title: 'KRITIS Reporting Obligations Authority Communication',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'kritis-meldepflichten-behoerdenkommunikation'
  },
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/kritis/kritis-implementation/kritis-meldepflichten-behoerdenkommunikation-en'
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
    title: 'KRITIS Reporting Obligations Authority Communication | ADVISORI',
    description: 'Professional support for KRITIS reporting obligations and structured authority communication. Secure compliance with all reporting requirements for critical infrastructures.',
    keywords: 'KRITIS Reporting Obligations, Authority Communication, IT Security Act, Incident Reporting, BSI Notification, Critical Infrastructures'
  },
  heroSection: {
    _type: 'object',
    heading: 'KRITIS Reporting Obligations Authority Communication',
    tagline: 'Legally Compliant Fulfillment of All KRITIS Reporting Obligations',
    description: 'Professional support for the structured fulfillment of all KRITIS reporting obligations and legally compliant communication with relevant authorities.',
    heroImage: {
      _type: 'image',
      alt: 'KRITIS Reporting Obligations Authority Communication'
    },
    benefits: [
      {
        _key: `benefit_${Date.now()}_1`,
        _type: 'object',
        text: 'Legally compliant fulfillment of all BSI reporting obligations under IT-SiG'
      },
      {
        _key: `benefit_${Date.now()}_2`,
        _type: 'object',
        text: 'Structured authority communication and escalation processes'
      },
      {
        _key: `benefit_${Date.now()}_3`,
        _type: 'object',
        text: 'Automated reporting procedures and documentation systems'
      },
      {
        _key: `benefit_${Date.now()}_4`,
        _type: 'object',
        text: 'Proactive compliance monitoring and risk management'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'KRITIS Reporting Obligations Authority Communication',
    description: 'Fulfilling KRITIS reporting obligations requires precise knowledge of regulatory requirements and structured communication with the responsible authorities. We support you in the legally compliant implementation of all reporting duties.',
    additionalInfo: 'Professional implementation of KRITIS reporting obligations not only reduces the risk of fines but also strengthens the trust of supervisory authorities and improves operational resilience.',
    serviceDescription: 'We offer you comprehensive support in implementing and operating your KRITIS reporting procedures, from initial analysis to continuous compliance monitoring.',
    alert: {
      _type: 'object',
      title: 'Legal Requirement',
      content: 'KRITIS operators are legally obligated to report significant IT security incidents to the BSI without delay. Failures can lead to substantial fines.'
    },
    points: [
      {
        _key: `point_${Date.now()}_1`,
        _type: 'object',
        text: 'Analysis and categorization of all relevant reporting obligations'
      },
      {
        _key: `point_${Date.now()}_2`,
        _type: 'object',
        text: 'Development of structured reporting and communication processes'
      },
      {
        _key: `point_${Date.now()}_3`,
        _type: 'object',
        text: 'Implementation of automated reporting systems and workflows'
      },
      {
        _key: `point_${Date.now()}_4`,
        _type: 'object',
        text: 'Training of responsible employees and executives'
      },
      {
        _key: `point_${Date.now()}_5`,
        _type: 'object',
        text: 'Continuous monitoring and adaptation of reporting procedures'
      }
    ],
    servicePoints: [
      {
        _key: `servicePoint_${Date.now()}_1`,
        _type: 'object',
        text: 'Regulatory requirements analysis and gap assessment'
      },
      {
        _key: `servicePoint_${Date.now()}_2`,
        _type: 'object',
        text: 'Development of reporting processes and escalation procedures'
      },
      {
        _key: `servicePoint_${Date.now()}_3`,
        _type: 'object',
        text: 'Implementation of automated reporting systems'
      },
      {
        _key: `servicePoint_${Date.now()}_4`,
        _type: 'object',
        text: 'Training and change management'
      },
      {
        _key: `servicePoint_${Date.now()}_5`,
        _type: 'object',
        text: 'Continuous compliance support and updates'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our Expertise',
      points: [
        {
          _key: `whyUs_${Date.now()}_1`,
          _type: 'object',
          text: 'Comprehensive knowledge of KRITIS regulation and BSI requirements'
        },
        {
          _key: `whyUs_${Date.now()}_2`,
          _type: 'object',
          text: 'Years of experience in authority communication'
        },
        {
          _key: `whyUs_${Date.now()}_3`,
          _type: 'object',
          text: 'Field-tested reporting systems and automation solutions'
        },
        {
          _key: `whyUs_${Date.now()}_4`,
          _type: 'object',
          text: 'Continuous support and legal compliance monitoring'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We develop a customized solution with you for the legally compliant fulfillment of all KRITIS reporting obligations.',
    points: [
      {
        _key: `approach_${Date.now()}_1`,
        _type: 'object',
        text: 'Analysis of your KRITIS classification and regulatory obligations'
      },
      {
        _key: `approach_${Date.now()}_2`,
        _type: 'object',
        text: 'Gap assessment of existing reporting processes and documentation'
      },
      {
        _key: `approach_${Date.now()}_3`,
        _type: 'object',
        text: 'Design of structured reporting and communication processes'
      },
      {
        _key: `approach_${Date.now()}_4`,
        _type: 'object',
        text: 'Implementation and integration into existing systems'
      },
      {
        _key: `approach_${Date.now()}_5`,
        _type: 'object',
        text: 'Testing, training, and continuous optimization'
      }
    ]
  },
  testimonial: {
    _type: 'object',
    quote: 'With ADVISORI, we have implemented a legally compliant and efficient solution for our KRITIS reporting obligations. The structured processes and automated systems give us the confidence to meet all regulatory requirements.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI FTC GmbH'
  },
  services: [
    {
      _key: `service_${Date.now()}_1`,
      _type: 'object',
      title: 'Reporting Obligations Assessment & Compliance Gap Analysis',
      description: 'Comprehensive analysis of your KRITIS reporting obligations and existing compliance gaps.',
      features: [
        {
          _key: `serviceFeature_${Date.now()}_1`,
          _type: 'object',
          text: 'Categorization of all relevant reporting obligations under IT-SiG'
        },
        {
          _key: `serviceFeature_${Date.now()}_2`,
          _type: 'object',
          text: 'Assessment of existing reporting processes and documentation'
        },
        {
          _key: `serviceFeature_${Date.now()}_3`,
          _type: 'object',
          text: 'Identification of compliance risks and gaps'
        },
        {
          _key: `serviceFeature_${Date.now()}_4`,
          _type: 'object',
          text: 'Development of a prioritized action roadmap'
        }
      ]
    },
    {
      _key: `service_${Date.now()}_2`,
      _type: 'object',
      title: 'Automated Reporting Systems & Workflow Integration',
      description: 'Implementation of efficient and legally compliant automated reporting systems.',
      features: [
        {
          _key: `serviceFeature_${Date.now()}_5`,
          _type: 'object',
          text: 'Design and implementation of automated reporting procedures'
        },
        {
          _key: `serviceFeature_${Date.now()}_6`,
          _type: 'object',
          text: 'Integration into existing SIEM and monitoring systems'
        },
        {
          _key: `serviceFeature_${Date.now()}_7`,
          _type: 'object',
          text: 'Development of escalation and notification workflows'
        },
        {
          _key: `serviceFeature_${Date.now()}_8`,
          _type: 'object',
          text: 'Quality assurance and compliance testing of systems'
        }
      ]
    }
  ],
  faq: []
}

export async function createKritisMeldepflichtenEn() {
  console.log('Creating KRITIS Meldepflichten Behördenkommunikation EN page...')
  
  const result = await client.createOrReplace(kritisMeldepflichtenEn)
  console.log('Created KRITIS Meldepflichten EN page:', result._id)
  
  return result
}

// Execute if run directly
createKritisMeldepflichtenEn().catch(console.error)
