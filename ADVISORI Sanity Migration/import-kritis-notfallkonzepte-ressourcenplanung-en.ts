import 'dotenv/config'
import { createClient } from '@sanity/client'

// Import FAQ batches
import { kritisNotfallkonzepteEnFaqsBatch1 } from './kritis-notfallkonzepte-ressourcenplanung-en-faqs-batch1'
import { kritisNotfallkonzepteEnFaqsBatch2 } from './kritis-notfallkonzepte-ressourcenplanung-en-faqs-batch2'
import { kritisNotfallkonzepteEnFaqsBatch3 } from './kritis-notfallkonzepte-ressourcenplanung-en-faqs-batch3'
import { kritisNotfallkonzepteEnFaqsBatch4 } from './kritis-notfallkonzepte-ressourcenplanung-en-faqs-batch4'
import { kritisNotfallkonzepteEnFaqsBatch5 } from './kritis-notfallkonzepte-ressourcenplanung-en-faqs-batch5'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Combine all FAQ batches
const allFaqs = [
  ...kritisNotfallkonzepteEnFaqsBatch1,
  ...kritisNotfallkonzepteEnFaqsBatch2,
  ...kritisNotfallkonzepteEnFaqsBatch3,
  ...kritisNotfallkonzepteEnFaqsBatch4,
  ...kritisNotfallkonzepteEnFaqsBatch5,
]

// KRITIS Notfallkonzepte & Ressourcenplanung EN - Full English Translation
const kritisNotfallkonzepteRessourcenplanungEn = {
  _id: 'kritis-notfallkonzepte-ressourcenplanung-en',
  _type: 'servicePage',
  title: 'CRITIS Emergency Concepts & Resource Planning',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'kritis-notfallkonzepte-ressourcenplanung'
  },
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/kritis/kritis-readiness/kritis-notfallkonzepte-ressourcenplanung-en'
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
    _type: 'object',
    title: 'CRITIS Emergency Concepts & Resource Planning | ADVISORI',
    description: 'Professional CRITIS emergency concepts and strategic resource planning for critical infrastructures. Business Continuity Planning, Incident Response, and Crisis Management.',
    keywords: 'CRITIS emergency concepts, resource planning, business continuity, incident response, crisis management, BSI, CRITIS regulation, emergency planning'
  },
  heroSection: {
    _type: 'object',
    heroImage: {
      _type: 'image',
      alt: 'CRITIS Emergency Concepts & Resource Planning'
    },
    tagline: 'Robust Emergency Concepts for Critical Infrastructures',
    heading: 'CRITIS Emergency Concepts & Resource Planning',
    description: 'Development of comprehensive emergency concepts and strategic resource planning for CRITIS companies. We create the organizational and operational foundations for resilient business continuity during critical disruptions and ensure compliance with the CRITIS Regulation.',
    benefits: [
      {
        _type: 'object',
        _key: 'benefit_en_1',
        text: 'Customized Business Continuity Plans for critical infrastructures'
      },
      {
        _type: 'object',
        _key: 'benefit_en_2',
        text: 'Structured Incident Response processes and escalation procedures'
      },
      {
        _type: 'object',
        _key: 'benefit_en_3',
        text: 'Strategic resource planning for emergency and crisis scenarios'
      },
      {
        _type: 'object',
        _key: 'benefit_en_4',
        text: 'Compliance with CRITIS Regulation and BSI requirements'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'CRITIS Emergency Concepts & Resource Planning',
    description: 'Critical infrastructures require robust emergency concepts and well-thought-out resource planning to maintain supply security even in severe crisis scenarios. We develop customized concepts that integrate organizational, technical, and operational aspects.',
    points: [
      {
        _type: 'object',
        _key: 'point_en_1',
        text: 'Business Continuity Management (BCM) for critical infrastructures'
      },
      {
        _type: 'object',
        _key: 'point_en_2',
        text: 'Incident Response plans and crisis management processes'
      },
      {
        _type: 'object',
        _key: 'point_en_3',
        text: 'Resource requirements analysis and strategic procurement planning'
      },
      {
        _type: 'object',
        _key: 'point_en_4',
        text: 'Communication and stakeholder management in crisis situations'
      },
      {
        _type: 'object',
        _key: 'point_en_5',
        text: 'Emergency exercises and continuous improvement of plans'
      }
    ],
    alert: {
      _type: 'object',
      title: 'CRITIS Compliance',
      content: 'Effective emergency concepts are legally required and reduce the risk of regulatory sanctions by 95%. Invest in professional emergency planning for sustainable compliance and operational excellence.'
    },
    whyUs: {
      _type: 'object',
      title: 'Our Expertise',
      points: [
        {
          _type: 'object',
          _key: 'whyUs_en_1',
          text: 'Specialization in CRITIS-compliant emergency concepts and BCM'
        },
        {
          _type: 'object',
          _key: 'whyUs_en_2',
          text: 'Cross-industry experience with various critical infrastructures'
        },
        {
          _type: 'object',
          _key: 'whyUs_en_3',
          text: 'Proven methods for resource planning and crisis management'
        },
        {
          _type: 'object',
          _key: 'whyUs_en_4',
          text: 'Close collaboration with authorities and supervisory bodies'
        }
      ]
    },
    additionalInfo: 'Over 95% of CRITIS companies we support successfully pass regulatory audits of their emergency concepts and achieve significant improvement in their resilience against critical disruptions.',
    serviceDescription: 'Our CRITIS emergency concepts and resource planning cover all aspects of operational continuity. From strategic planning through operational implementation to continuous improvement, we provide comprehensive support.',
    servicePoints: [
      {
        _type: 'object',
        _key: 'servicePoint_en_1',
        text: 'Business Impact Analysis (BIA) for critical processes'
      },
      {
        _type: 'object',
        _key: 'servicePoint_en_2',
        text: 'Development of customized Business Continuity Plans'
      },
      {
        _type: 'object',
        _key: 'servicePoint_en_3',
        text: 'Incident Response and crisis management frameworks'
      },
      {
        _type: 'object',
        _key: 'servicePoint_en_4',
        text: 'Strategic resource planning and procurement concepts'
      },
      {
        _type: 'object',
        _key: 'servicePoint_en_5',
        text: 'Emergency exercises and plan updates'
      }
    ]
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We systematically develop interconnected emergency concepts and resource plans that consider all relevant stakeholders and dependencies.',
    points: [
      {
        _type: 'object',
        _key: 'approach_en_1',
        text: 'Comprehensive analysis of critical business processes and dependencies'
      },
      {
        _type: 'object',
        _key: 'approach_en_2',
        text: 'Development of scenario-based emergency and continuity plans'
      },
      {
        _type: 'object',
        _key: 'approach_en_3',
        text: 'Structured resource requirements analysis and procurement planning'
      },
      {
        _type: 'object',
        _key: 'approach_en_4',
        text: 'Implementation of Incident Response and escalation processes'
      },
      {
        _type: 'object',
        _key: 'approach_en_5',
        text: 'Regular exercises and continuous plan optimization'
      }
    ]
  },
  testimonial: {
    _type: 'object',
    company: 'Energy Supply Company',
    name: 'Dr. Michael Weber',
    position: 'Head of Crisis Management',
    quote: 'The emergency concepts developed by ADVISORI have decisively strengthened our resilience. The structured approach and practice-oriented solutions enable us to remain capable of action even in critical situations and ensure supply security.'
  },
  services: [
    {
      _type: 'object',
      _key: 'service_en_1',
      title: 'Business Continuity Planning',
      description: 'Development of comprehensive business continuity plans for critical infrastructures with focus on supply security.',
      features: [
        {
          _type: 'object',
          _key: 'feature_en_1',
          text: 'Business Impact Analysis (BIA) of critical processes'
        },
        {
          _type: 'object',
          _key: 'feature_en_2',
          text: 'Scenario-based continuity planning'
        },
        {
          _type: 'object',
          _key: 'feature_en_3',
          text: 'Recovery Time/Point Objectives (RTO/RPO) definition'
        },
        {
          _type: 'object',
          _key: 'feature_en_4',
          text: 'Alternative operating concepts and workarounds'
        }
      ]
    },
    {
      _type: 'object',
      _key: 'service_en_2',
      title: 'Incident Response & Crisis Management',
      description: 'Structured Incident Response processes and professional crisis management for critical disruption situations.',
      features: [
        {
          _type: 'object',
          _key: 'feature_en_5',
          text: 'Incident Response Team (IRT) structures'
        },
        {
          _type: 'object',
          _key: 'feature_en_6',
          text: 'Escalation and decision processes'
        },
        {
          _type: 'object',
          _key: 'feature_en_7',
          text: 'Communication strategies and stakeholder management'
        },
        {
          _type: 'object',
          _key: 'feature_en_8',
          text: 'Post-Incident Review and Lessons Learned'
        }
      ]
    },
    {
      _type: 'object',
      _key: 'service_en_3',
      title: 'Strategic Resource Planning',
      description: 'Systematic planning and procurement of critical resources for emergency and crisis scenarios.',
      features: [
        {
          _type: 'object',
          _key: 'feature_en_9',
          text: 'Resource requirements analysis for critical scenarios'
        },
        {
          _type: 'object',
          _key: 'feature_en_10',
          text: 'Strategic procurement and warehousing concepts'
        },
        {
          _type: 'object',
          _key: 'feature_en_11',
          text: 'Supplier and partnership management'
        },
        {
          _type: 'object',
          _key: 'feature_en_12',
          text: 'Emergency budgeting and cost planning'
        }
      ]
    }
  ],
  faq: allFaqs
}

async function importKritisNotfallkonzepteRessourcenplanungEn() {
  console.log('Starting import of KRITIS Notfallkonzepte & Ressourcenplanung EN...')
  console.log(`Total FAQs: ${allFaqs.length}`)
  
  try {
    // Create or replace the document
    const result = await client.createOrReplace(kritisNotfallkonzepteRessourcenplanungEn)
    console.log('✅ Document created/updated successfully:', result._id)
    
    // Verify the document
    const verification = await client.fetch(
      `*[_id == $id][0]{
        _id,
        title,
        language,
        __i18n_lang,
        "faqCount": count(faq),
        "servicesCount": count(services),
        "heroHeading": heroSection.heading,
        "overviewHeading": overview.heading
      }`,
      { id: 'kritis-notfallkonzepte-ressourcenplanung-en' }
    )
    
    console.log('\n📋 Verification:')
    console.log('- ID:', verification._id)
    console.log('- Title:', verification.title)
    console.log('- Language:', verification.language)
    console.log('- i18n Lang:', verification.__i18n_lang)
    console.log('- FAQ Count:', verification.faqCount)
    console.log('- Services Count:', verification.servicesCount)
    console.log('- Hero Heading:', verification.heroHeading)
    console.log('- Overview Heading:', verification.overviewHeading)
    
    console.log('\n✅ Import completed successfully!')
    
  } catch (error) {
    console.error('❌ Error during import:', error)
    throw error
  }
}

importKritisNotfallkonzepteRessourcenplanungEn()
