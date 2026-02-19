import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// KRITIS Parent Page EN - Full English Translation
const kritisParentEn = {
  _id: 'kritis-en',
  _type: 'servicePage',
  title: 'CRITIS',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'kritis'
  },
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/kritis-en'
  },
  parent: {
    _type: 'reference',
    _ref: 'regulatory-compliance-management'
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
    title: 'CRITIS Compliance & Critical Infrastructures | ADVISORI',
    description: 'Comprehensive CRITIS compliance solutions for critical infrastructures. IT security, reporting obligations, and protection concepts according to BSI standards.',
    keywords: 'CRITIS, Critical Infrastructures, IT Security, BSI, Compliance, Reporting Obligations, Protection Concepts, Infrastructure Security'
  },
  heroSection: {
    _type: 'object',
    heroImage: {
      _type: 'image',
      alt: 'CRITIS Compliance & Critical Infrastructures'
    },
    tagline: 'Secure Critical Infrastructures for a Resilient Future',
    heading: 'CRITIS Compliance & Critical Infrastructures',
    description: 'Critical infrastructures form the backbone of our society and economy. ADVISORI supports you in implementing all CRITIS requirements - from gap analysis through protection concepts to continuous monitoring and compliance assurance.',
    benefits: [
      {
        _type: 'object',
        _key: 'benefit_en_1',
        text: 'Complete CRITIS compliance according to BSI standards'
      },
      {
        _type: 'object',
        _key: 'benefit_en_2',
        text: 'Customized protection concepts for critical infrastructures'
      },
      {
        _type: 'object',
        _key: 'benefit_en_3',
        text: 'Systematic risk assessment and vulnerability analysis'
      },
      {
        _type: 'object',
        _key: 'benefit_en_4',
        text: 'Continuous monitoring and incident management'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'CRITIS Compliance & Critical Infrastructures',
    description: 'The CRITIS Regulation presents operators of critical infrastructures with complex challenges. We provide comprehensive support in implementing all requirements - from initial assessment to sustainable compliance assurance.',
    points: [
      {
        _type: 'object',
        _key: 'point_en_1',
        text: 'CRITIS Readiness: Gap analyses and vulnerability assessments'
      },
      {
        _type: 'object',
        _key: 'point_en_2',
        text: 'Implementation: Protection concepts and reporting obligations'
      },
      {
        _type: 'object',
        _key: 'point_en_3',
        text: 'Ongoing Compliance: Tests, audits, and continuous improvement'
      },
      {
        _type: 'object',
        _key: 'point_en_4',
        text: 'Industry-specific solutions for all CRITIS sectors'
      },
      {
        _type: 'object',
        _key: 'point_en_5',
        text: 'Integration with other compliance requirements'
      }
    ],
    alert: {
      _type: 'object',
      title: 'Regulatory Notice',
      content: 'CRITIS operators are obligated to take appropriate organizational and technical precautions to maintain, monitor, and control the security and functionality of their critical infrastructures. Violations can result in significant fines.'
    },
    whyUs: {
      _type: 'object',
      title: 'Why ADVISORI',
      points: [
        {
          _type: 'object',
          _key: 'whyUs_en_1',
          text: 'Deep expertise in CRITIS Regulation and BSI standards'
        },
        {
          _type: 'object',
          _key: 'whyUs_en_2',
          text: 'Cross-industry experience with critical infrastructures'
        },
        {
          _type: 'object',
          _key: 'whyUs_en_3',
          text: 'Holistic approach from strategy to implementation'
        },
        {
          _type: 'object',
          _key: 'whyUs_en_4',
          text: 'Proven methods for sustainable compliance'
        }
      ]
    },
    additionalInfo: 'Over 95% of our CRITIS clients achieve complete compliance within the first 12 months. Invest in professional CRITIS consulting for maximum security and compliance!',
    serviceDescription: 'Our CRITIS service portfolio covers all aspects of compliance for critical infrastructures. From strategic planning through technical implementation to operational support, we provide comprehensive assistance.',
    servicePoints: [
      {
        _type: 'object',
        _key: 'servicePoint_en_1',
        text: 'CRITIS Readiness Assessment and gap analyses'
      },
      {
        _type: 'object',
        _key: 'servicePoint_en_2',
        text: 'Development and implementation of protection concepts'
      },
      {
        _type: 'object',
        _key: 'servicePoint_en_3',
        text: 'Reporting obligations and authority communication'
      },
      {
        _type: 'object',
        _key: 'servicePoint_en_4',
        text: 'Continuous monitoring and incident management'
      },
      {
        _type: 'object',
        _key: 'servicePoint_en_5',
        text: 'Regular tests, audits, and compliance reviews'
      }
    ]
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We pursue a structured and proven approach to CRITIS compliance that meets all regulatory requirements while ensuring operational excellence.',
    points: [
      {
        _type: 'object',
        _key: 'approach_en_1',
        text: 'Comprehensive assessment of your critical infrastructures and processes'
      },
      {
        _type: 'object',
        _key: 'approach_en_2',
        text: 'Development of customized CRITIS compliance strategies'
      },
      {
        _type: 'object',
        _key: 'approach_en_3',
        text: 'Systematic implementation of protective measures and controls'
      },
      {
        _type: 'object',
        _key: 'approach_en_4',
        text: 'Building sustainable monitoring and control processes'
      },
      {
        _type: 'object',
        _key: 'approach_en_5',
        text: 'Continuous optimization and adaptation to new requirements'
      }
    ]
  },
  testimonial: {
    _type: 'object',
    company: 'Energy Supply Company',
    name: 'Dr. Andreas Weber',
    position: 'Managing Director',
    quote: 'ADVISORI provided excellent support for our CRITIS compliance. Through the structured approach and deep expertise, we were able to meet all requirements on time. We were particularly impressed by the holistic view of our critical infrastructures and the sustainable solution approaches.'
  },
  services: [
    {
      _type: 'object',
      _key: 'service_en_1',
      title: 'CRITIS Readiness',
      description: 'Comprehensive preparation for CRITIS compliance through systematic assessments, gap analyses, and strategic planning.',
      features: [
        {
          _type: 'object',
          _key: 'feature_en_1',
          text: 'Vulnerability analysis and risk assessment'
        },
        {
          _type: 'object',
          _key: 'feature_en_2',
          text: 'Gap analysis organization & technology'
        },
        {
          _type: 'object',
          _key: 'feature_en_3',
          text: 'Emergency concepts and resource planning'
        }
      ]
    },
    {
      _type: 'object',
      _key: 'service_en_2',
      title: 'CRITIS Implementation',
      description: 'Systematic implementation of all CRITIS requirements with focus on practical and sustainable solutions.',
      features: [
        {
          _type: 'object',
          _key: 'feature_en_4',
          text: 'Physical & digital protection concepts'
        },
        {
          _type: 'object',
          _key: 'feature_en_5',
          text: 'Reporting obligations and authority communication'
        },
        {
          _type: 'object',
          _key: 'feature_en_6',
          text: 'Continuous monitoring & incident management'
        }
      ]
    },
    {
      _type: 'object',
      _key: 'service_en_3',
      title: 'CRITIS Ongoing Compliance',
      description: 'Continuous assurance of CRITIS compliance through regular tests, audits, and adjustments.',
      features: [
        {
          _type: 'object',
          _key: 'feature_en_7',
          text: 'Regular tests and audits'
        },
        {
          _type: 'object',
          _key: 'feature_en_8',
          text: 'Process adjustments for new threats'
        },
        {
          _type: 'object',
          _key: 'feature_en_9',
          text: 'Training and awareness campaigns'
        }
      ]
    }
  ],
  faq: []
}

async function importKritisParentEn() {
  console.log('Starting import of KRITIS Parent EN...')
  
  try {
    // Create or replace the document
    const result = await client.createOrReplace(kritisParentEn)
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
      { id: 'kritis-en' }
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

importKritisParentEn()
