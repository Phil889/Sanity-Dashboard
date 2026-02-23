import 'dotenv/config'
import { createClient } from '@sanity/client'
import { kritisGapAnalyseOrganisationTechnikEnFaqsBatch1 } from './kritis-gap-analyse-organisation-technik-en-faqs-batch1'
import { kritisGapAnalyseOrganisationTechnikEnFaqsBatch2 } from './kritis-gap-analyse-organisation-technik-en-faqs-batch2'
import { kritisGapAnalyseOrganisationTechnikEnFaqsBatch3 } from './kritis-gap-analyse-organisation-technik-en-faqs-batch3'
import { kritisGapAnalyseOrganisationTechnikEnFaqsBatch4 } from './kritis-gap-analyse-organisation-technik-en-faqs-batch4'
import { kritisGapAnalyseOrganisationTechnikEnFaqsBatch5 } from './kritis-gap-analyse-organisation-technik-en-faqs-batch5'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

const kritisGapAnalyseOrganisationTechnikEn = {
  _id: 'kritis-gap-analyse-organisation-technik-en',
  _type: 'servicePage',
  title: 'CRITIS Gap Analysis Organization & Technology',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'kritis-gap-analyse-organisation-technik'
  },
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/kritis/kritis-readiness/kritis-gap-analyse-organisation-technik-en'
  },
  parent: {
    _type: 'reference',
    _ref: 'kritis-readiness'
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
    title: 'CRITIS Gap Analysis Organization & Technology | ADVISORI',
    description: 'Comprehensive gap analysis for CRITIS compliance in organizational and technical areas. Identification of vulnerabilities and development of targeted solution strategies.',
    keywords: 'CRITIS, Gap Analysis, Critical Infrastructures, Organization, Technology, IT Security, BSI, Compliance, Infrastructure Security'
  },
  heroSection: {
    _type: 'object',
    heading: 'CRITIS Gap Analysis Organization & Technology',
    tagline: 'Systematic Analysis for Resilient Critical Infrastructures',
    description: 'The CRITIS regulation presents critical infrastructures with complex challenges. Our comprehensive gap analysis systematically identifies vulnerabilities in organizational structures and technical systems to ensure a resilient and compliance-conformant infrastructure.',
    heroImage: {
      _type: 'image',
      alt: 'CRITIS Gap Analysis Organization & Technology'
    },
    benefits: [
      {
        _key: `benefit_${Date.now()}_1`,
        _type: 'object',
        text: 'Comprehensive assessment of organizational and technical CRITIS compliance'
      },
      {
        _key: `benefit_${Date.now()}_2`,
        _type: 'object',
        text: 'Systematic identification of critical vulnerabilities and security gaps'
      },
      {
        _key: `benefit_${Date.now()}_3`,
        _type: 'object',
        text: 'Prioritized action planning for efficient resource allocation'
      },
      {
        _key: `benefit_${Date.now()}_4`,
        _type: 'object',
        text: 'Future-oriented strategies for sustainable infrastructure security'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'CRITIS Gap Analysis Organization & Technology',
    description: 'Critical infrastructures form the backbone of our society and economy. A well-founded gap analysis is the first step toward achieving complete CRITIS compliance. We systematically evaluate your organizational structures and technical systems to identify vulnerabilities and develop targeted improvement measures.',
    additionalInfo: 'A professional CRITIS gap analysis reduces the risk of security incidents by up to 60% and accelerates compliance achievement by an average of 40%. Invest in systematic analysis for maximum infrastructure security!',
    serviceDescription: 'We offer comprehensive gap analyses for CRITIS compliance with a focus on organizational structures and technical systems. Our structured approach ensures complete transparency about your current compliance status and develops targeted improvement strategies.',
    alert: {
      _type: 'object',
      title: 'Compliance Notice',
      content: 'CRITIS operators are obligated to take appropriate organizational and technical precautions to maintain, monitor, and control the security and functionality of their critical infrastructures. A structured gap analysis is the foundation for effective compliance.'
    },
    points: [
      {
        _key: `point_${Date.now()}_1`,
        _type: 'object',
        text: 'Complete assessment of CRITIS compliance requirements'
      },
      {
        _key: `point_${Date.now()}_2`,
        _type: 'object',
        text: 'Analysis of organizational structures and security processes'
      },
      {
        _key: `point_${Date.now()}_3`,
        _type: 'object',
        text: 'Technical system analysis and IT security assessment'
      },
      {
        _key: `point_${Date.now()}_4`,
        _type: 'object',
        text: 'Risk assessment and threat analysis'
      },
      {
        _key: `point_${Date.now()}_5`,
        _type: 'object',
        text: 'Development of prioritized action plans and roadmaps'
      }
    ],
    servicePoints: [
      {
        _key: `servicePoint_${Date.now()}_1`,
        _type: 'object',
        text: 'CRITIS compliance assessment and current state analysis'
      },
      {
        _key: `servicePoint_${Date.now()}_2`,
        _type: 'object',
        text: 'Organizational structure analysis and process assessment'
      },
      {
        _key: `servicePoint_${Date.now()}_3`,
        _type: 'object',
        text: 'Technical system analysis and IT security evaluation'
      },
      {
        _key: `servicePoint_${Date.now()}_4`,
        _type: 'object',
        text: 'Risk and threat analysis for critical processes'
      },
      {
        _key: `servicePoint_${Date.now()}_5`,
        _type: 'object',
        text: 'Development of prioritized action plans and implementation roadmaps'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our Expertise',
      points: [
        {
          _key: `whyUs_${Date.now()}_1`,
          _type: 'object',
          text: 'Deep knowledge of CRITIS regulations and BSI standards'
        },
        {
          _key: `whyUs_${Date.now()}_2`,
          _type: 'object',
          text: 'Cross-industry experience with critical infrastructures'
        },
        {
          _key: `whyUs_${Date.now()}_3`,
          _type: 'object',
          text: 'Holistic approach for organizational and technical aspects'
        },
        {
          _key: `whyUs_${Date.now()}_4`,
          _type: 'object',
          text: 'Proven methods for sustainable security improvements'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We conduct a systematic and comprehensive gap analysis that considers both organizational and technical aspects of your critical infrastructure and provides concrete recommendations for CRITIS compliance.',
    points: [
      {
        _key: `approach_${Date.now()}_1`,
        _type: 'object',
        text: 'Complete capture and assessment of your critical infrastructures'
      },
      {
        _key: `approach_${Date.now()}_2`,
        _type: 'object',
        text: 'Analysis of organizational structures and security processes'
      },
      {
        _key: `approach_${Date.now()}_3`,
        _type: 'object',
        text: 'Technical evaluation of IT systems and security measures'
      },
      {
        _key: `approach_${Date.now()}_4`,
        _type: 'object',
        text: 'Identification and prioritization of compliance gaps'
      },
      {
        _key: `approach_${Date.now()}_5`,
        _type: 'object',
        text: 'Development of concrete action plans and implementation strategies'
      }
    ]
  },
  testimonial: {
    _type: 'object',
    quote: 'The CRITIS gap analysis from ADVISORI provided us with a comprehensive and structured overview of our compliance situation. Particularly valuable was the holistic consideration of organizational and technical aspects as well as the prioritized recommendations for action. This enabled us to deploy our resources in a targeted manner and achieve CRITIS compliance much more efficiently.',
    name: 'Dipl.-Ing. Michael Schmidt',
    position: 'Head of IT Security & Compliance',
    company: 'Energy Supply Company'
  },
  services: [
    {
      _key: `service_${Date.now()}_1`,
      _type: 'object',
      title: 'Organizational Gap Analysis',
      description: 'Comprehensive assessment of your organizational structures, processes, and procedures in the context of CRITIS requirements to identify optimization potential.',
      features: [
        {
          _key: `serviceFeature_${Date.now()}_1`,
          _type: 'object',
          text: 'Analysis of governance structures and responsibilities'
        },
        {
          _key: `serviceFeature_${Date.now()}_2`,
          _type: 'object',
          text: 'Assessment of security processes and procedures'
        },
        {
          _key: `serviceFeature_${Date.now()}_3`,
          _type: 'object',
          text: 'Evaluation of emergency and crisis management structures'
        },
        {
          _key: `serviceFeature_${Date.now()}_4`,
          _type: 'object',
          text: 'Assessment of personnel and competency structures'
        }
      ]
    },
    {
      _key: `service_${Date.now()}_2`,
      _type: 'object',
      title: 'Technical Gap Analysis',
      description: 'Detailed evaluation of your technical systems, IT infrastructure, and security measures to identify technical vulnerabilities and improvement opportunities.',
      features: [
        {
          _key: `serviceFeature_${Date.now()}_5`,
          _type: 'object',
          text: 'IT security architecture and system analysis'
        },
        {
          _key: `serviceFeature_${Date.now()}_6`,
          _type: 'object',
          text: 'Assessment of protective measures and security controls'
        },
        {
          _key: `serviceFeature_${Date.now()}_7`,
          _type: 'object',
          text: 'Analysis of monitoring and detection systems'
        },
        {
          _key: `serviceFeature_${Date.now()}_8`,
          _type: 'object',
          text: 'Evaluation of backup and recovery concepts'
        }
      ]
    }
  ],
  faq: [] as any[]
}

export async function createKritisGapAnalyseOrganisationTechnikEn() {
  console.log('Creating KRITIS Gap-Analyse Organisation & Technik EN page...')
  
  // Combine all FAQ batches
  const allFaqs = [
    ...kritisGapAnalyseOrganisationTechnikEnFaqsBatch1,
    ...kritisGapAnalyseOrganisationTechnikEnFaqsBatch2,
    ...kritisGapAnalyseOrganisationTechnikEnFaqsBatch3,
    ...kritisGapAnalyseOrganisationTechnikEnFaqsBatch4,
    ...kritisGapAnalyseOrganisationTechnikEnFaqsBatch5
  ]
  
  console.log(`Total FAQs to import: ${allFaqs.length}`)
  
  // Add FAQs to the page
  kritisGapAnalyseOrganisationTechnikEn.faq = allFaqs
  
  const result = await client.createOrReplace(kritisGapAnalyseOrganisationTechnikEn)
  console.log('✅ Created KRITIS Gap-Analyse Organisation & Technik EN page:', result._id)
  console.log(`Total FAQs: ${allFaqs.length}`)
  console.log(`Services: ${kritisGapAnalyseOrganisationTechnikEn.services.length}`)
  
  return result
}

// Execute if run directly
createKritisGapAnalyseOrganisationTechnikEn().catch(console.error)
