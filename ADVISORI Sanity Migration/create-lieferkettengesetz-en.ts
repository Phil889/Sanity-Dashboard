import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
})

const timestamp = Date.now()

// English translation of ESG Lieferkettengesetz page
// Source: esg-lieferkettengesetz (German)
// This is the German Supply Chain Due Diligence Act (LkSG) page under ESG

const lieferkettengesetzEnPage = {
  _id: 'esg-lieferkettengesetz-en',
  _type: 'servicePage',
  language: 'en',
  title: 'ESG Supply Chain Due Diligence Act',
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/esg/supply-chain-due-diligence-act-en'
  },
  parent: {
    _ref: 'regulatory-compliance-management',
    _type: 'reference'
  },
  __i18n_lang: 'en',
  __i18n_base: {
    _ref: 'esg-lieferkettengesetz',
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
    title: 'ESG Supply Chain Due Diligence Act Compliance | ADVISORI',
    description: 'Professional consulting for implementing the German Supply Chain Due Diligence Act (LkSG). From due diligence to risk analysis to reporting - we support you in achieving full compliance.',
    keywords: 'Supply Chain Due Diligence Act, LkSG, Supply Chain Due Diligence, ESG Compliance, Human Rights, Environmental Protection, Supply Chain'
  },
  heroSection: {
    _type: 'object',
    tagline: 'Full Compliance with the German Supply Chain Due Diligence Act',
    heading: 'ESG Supply Chain Due Diligence Act',
    description: 'The German Supply Chain Due Diligence Act (LkSG) requires companies to comply with human rights and environmental standards in their supply chains. We support you in achieving full implementation and sustainable compliance.',
    heroImage: {
      _type: 'image',
      alt: 'ESG Supply Chain Due Diligence Act Compliance'
    },
    benefits: [
      {
        _key: `benefit_${timestamp}_1`,
        _type: 'object',
        text: 'Full compliance with LkSG requirements and avoidance of fines'
      },
      {
        _key: `benefit_${timestamp}_2`,
        _type: 'object',
        text: 'Systematic risk identification and assessment in the supply chain'
      },
      {
        _key: `benefit_${timestamp}_3`,
        _type: 'object',
        text: 'Efficient due diligence processes and supplier evaluation'
      },
      {
        _key: `benefit_${timestamp}_4`,
        _type: 'object',
        text: 'Transparent reporting and stakeholder communication'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'ESG Supply Chain Due Diligence Act Compliance',
    description: 'The German Supply Chain Due Diligence Act (LkSG) places high demands on companies regarding compliance with human rights and environmental standards in their supply chains. We support you in systematically and efficiently meeting these requirements.',
    points: [
      {
        _key: `point_${timestamp}_1`,
        _type: 'object',
        text: 'Gap analysis of existing supply chain structures and processes'
      },
      {
        _key: `point_${timestamp}_2`,
        _type: 'object',
        text: 'Development and implementation of due diligence systems'
      },
      {
        _key: `point_${timestamp}_3`,
        _type: 'object',
        text: 'Risk analysis and assessment for human rights and environment'
      },
      {
        _key: `point_${timestamp}_4`,
        _type: 'object',
        text: 'Supplier evaluation and monitoring as well as contract design'
      },
      {
        _key: `point_${timestamp}_5`,
        _type: 'object',
        text: 'Grievance procedures and reporting according to LkSG requirements'
      }
    ],
    alert: {
      _type: 'object',
      title: 'Legal Notice',
      content: 'The Supply Chain Due Diligence Act has been mandatory since 2023 for companies with more than 3,000 employees and since 2024 for companies with more than 1,000 employees. Violations can lead to significant fines and exclusions from public contracts.'
    },
    additionalInfo: 'Professional implementation of the Supply Chain Due Diligence Act not only protects against legal risks but also strengthens the trust of investors, customers, and other stakeholders in your sustainability strategy.',
    serviceDescription: 'We offer you a comprehensive range of services for implementing the Supply Chain Due Diligence Act - from the initial gap analysis to the implementation of due diligence systems to ongoing compliance monitoring.',
    servicePoints: [
      {
        _key: `servicePoint_${timestamp}_1`,
        _type: 'object',
        text: 'LkSG Gap Analysis and Compliance Roadmap'
      },
      {
        _key: `servicePoint_${timestamp}_2`,
        _type: 'object',
        text: 'Implementation of Due Diligence Management Systems'
      },
      {
        _key: `servicePoint_${timestamp}_3`,
        _type: 'object',
        text: 'Risk Analysis and Supplier Evaluation'
      },
      {
        _key: `servicePoint_${timestamp}_4`,
        _type: 'object',
        text: 'Development of Grievance Procedures and Monitoring Systems'
      },
      {
        _key: `servicePoint_${timestamp}_5`,
        _type: 'object',
        text: 'LkSG-compliant Reporting and Documentation'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our Strengths',
      points: [
        {
          _key: `whyUs_${timestamp}_1`,
          _type: 'object',
          text: 'Deep expertise in ESG regulation and supply chain management'
        },
        {
          _key: `whyUs_${timestamp}_2`,
          _type: 'object',
          text: 'Proven implementation approaches and digital solutions'
        },
        {
          _key: `whyUs_${timestamp}_3`,
          _type: 'object',
          text: 'Interdisciplinary team of lawyers, compliance experts, and sustainability consultants'
        },
        {
          _key: `whyUs_${timestamp}_4`,
          _type: 'object',
          text: 'Long-term support and continuous optimization of compliance processes'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We develop a customized compliance strategy with you that takes into account your specific supply chain structures and business models.',
    points: [
      {
        _key: `approach_${timestamp}_1`,
        _type: 'object',
        text: 'Comprehensive analysis of your supply chain structures and existing processes'
      },
      {
        _key: `approach_${timestamp}_2`,
        _type: 'object',
        text: 'Identification of human rights and environmental risks along the value chain'
      },
      {
        _key: `approach_${timestamp}_3`,
        _type: 'object',
        text: 'Development and implementation of appropriate prevention and remediation measures'
      },
      {
        _key: `approach_${timestamp}_4`,
        _type: 'object',
        text: 'Establishment of effective monitoring and reporting systems'
      },
      {
        _key: `approach_${timestamp}_5`,
        _type: 'object',
        text: 'Continuous optimization and adaptation to new requirements'
      }
    ]
  },
  services: [
    {
      _key: `service_${timestamp}_1`,
      _type: 'object',
      title: 'LkSG Gap Analysis and Compliance Assessment',
      description: 'Comprehensive assessment of your current supply chain structures and identification of compliance gaps.',
      features: [
        {
          _key: `feature_${timestamp}_1`,
          _type: 'object',
          text: 'Detailed analysis of supply chain structures and processes'
        },
        {
          _key: `feature_${timestamp}_2`,
          _type: 'object',
          text: 'Assessment of existing due diligence measures'
        },
        {
          _key: `feature_${timestamp}_3`,
          _type: 'object',
          text: 'Identification of compliance gaps and risk areas'
        },
        {
          _key: `feature_${timestamp}_4`,
          _type: 'object',
          text: 'Development of a prioritized implementation roadmap'
        }
      ]
    },
    {
      _key: `service_${timestamp}_2`,
      _type: 'object',
      title: 'Due Diligence Management System',
      description: 'Implementation of systematic due diligence processes to meet LkSG requirements.',
      features: [
        {
          _key: `feature_${timestamp}_5`,
          _type: 'object',
          text: 'Establishment of structured risk analysis processes'
        },
        {
          _key: `feature_${timestamp}_6`,
          _type: 'object',
          text: 'Development of prevention and remediation measures'
        },
        {
          _key: `feature_${timestamp}_7`,
          _type: 'object',
          text: 'Implementation of monitoring and reporting systems'
        },
        {
          _key: `feature_${timestamp}_8`,
          _type: 'object',
          text: 'Establishment of effective grievance procedures'
        }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'ADVISORI helped us systematically and efficiently implement the complex requirements of the Supply Chain Due Diligence Act. Thanks to the professional consulting and practice-oriented solutions, we were able to successfully establish our compliance processes while advancing our sustainability goals.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI FTC GmbH'
  },
  faq: []
}

export async function createLieferkettengesetzEn() {
  console.log('Creating ESG Supply Chain Due Diligence Act EN page...')
  
  try {
    const result = await client.createOrReplace(lieferkettengesetzEnPage)
    console.log('Created ESG Supply Chain Due Diligence Act EN page:', result._id)
    return result
  } catch (error) {
    console.error('Error creating ESG Supply Chain Due Diligence Act EN page:', error)
    throw error
  }
}

export { lieferkettengesetzEnPage }
