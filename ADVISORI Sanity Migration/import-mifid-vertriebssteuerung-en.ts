import 'dotenv/config'
import { createClient } from '@sanity/client'
import { faqsBatch1 } from './mifid-vertriebssteuerung-en-faqs-batch1'
import { faqsBatch2 } from './mifid-vertriebssteuerung-en-faqs-batch2'
import { faqsBatch3 } from './mifid-vertriebssteuerung-en-faqs-batch3'
import { faqsBatch4 } from './mifid-vertriebssteuerung-en-faqs-batch4'
import { faqsBatch5 } from './mifid-vertriebssteuerung-en-faqs-batch5'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Combine all FAQ batches
const allFaqs = [
  ...faqsBatch1,
  ...faqsBatch2,
  ...faqsBatch3,
  ...faqsBatch4,
  ...faqsBatch5
]

const mifidVertriebssteuerungEn = {
  _id: 'mifid-anpassung-vertriebssteuerung-prozessablaeufe-en',
  _type: 'servicePage',
  title: 'MiFID Adaptation of Sales Management and Process Workflows',
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/mifid/mifid-implementation/mifid-anpassung-vertriebssteuerung-prozessablaeufe-en'
  },
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'mifid-anpassung-vertriebssteuerung-prozessablaeufe'
  },
  parent: {
    _type: 'reference',
    _ref: 'mifid-implementation'
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
    title: 'MiFID Adaptation of Sales Management and Process Workflows | ADVISORI',
    description: 'Optimize your sales management and process workflows according to MiFID requirements with ADVISORI. Our customized solutions seamlessly integrate regulatory requirements into your business processes while strengthening customer relationships and compliance.',
    keywords: 'MiFID Sales Management, MiFID Process Workflows, Regulatory Compliance, Financial Sales, Investment Advisory, Customer Protection, Sales Optimization, Process Adaptation, Compliance Optimization'
  },
  heroSection: {
    _type: 'object',
    tagline: 'Efficient Integration of Regulatory Requirements into Your Sales Processes',
    heading: 'MiFID Adaptation of Sales Management and Process Workflows',
    description: 'Implement MiFID requirements efficiently and compliantly into your sales management and process workflows. Our holistic solution supports you in implementing regulatory requirements in a way that not only ensures compliance but also optimizes your business processes and strengthens customer relationships.',
    heroImage: {
      _type: 'image',
      alt: 'MiFID Adaptation Sales Management and Process Workflows'
    },
    benefits: [
      {
        _key: 'benefit_vertrieb_en_1',
        _type: 'object',
        text: 'Seamless integration of MiFID requirements into existing sales processes'
      },
      {
        _key: 'benefit_vertrieb_en_2',
        _type: 'object',
        text: 'Optimization of customer advisory and documentation according to regulatory requirements'
      },
      {
        _key: 'benefit_vertrieb_en_3',
        _type: 'object',
        text: 'Efficiency enhancement through digitalized and automated compliance processes'
      },
      {
        _key: 'benefit_vertrieb_en_4',
        _type: 'object',
        text: 'Risk minimization through systematic compliance integration'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'MiFID Adaptation of Sales Management and Process Workflows',
    description: 'Implementing MiFID requirements into sales management and process workflows presents financial institutions with complex challenges that require a structured and holistic approach. Our comprehensive approach seamlessly integrates regulatory requirements into your business processes and creates added value for both compliance and customer relationships and operational efficiency.',
    additionalInfo: 'A strategically well-thought-out MiFID implementation can not only minimize compliance risks but also increase sales efficiency by up to 20% and significantly improve customer satisfaction. Our clients also report an average reduction in process costs of 15-25% through optimized and digitalized workflows.',
    alert: {
      _type: 'object',
      title: 'Expert Tip',
      content: 'The key to successful MiFID implementation lies in the balance between regulatory requirements and customer orientation. Design your processes so that they are not only compliant but also improve the customer experience and enhance advisory quality.'
    },
    points: [
      {
        _key: 'point_vertrieb_en_1',
        _type: 'object',
        text: 'Analysis and adaptation of sales management according to MiFID requirements'
      },
      {
        _key: 'point_vertrieb_en_2',
        _type: 'object',
        text: 'Optimization of customer classification and suitability assessment'
      },
      {
        _key: 'point_vertrieb_en_3',
        _type: 'object',
        text: 'Implementation of transparent cost presentation and product information'
      },
      {
        _key: 'point_vertrieb_en_4',
        _type: 'object',
        text: 'Development and integration of efficient documentation processes'
      },
      {
        _key: 'point_vertrieb_en_5',
        _type: 'object',
        text: 'Digitalization and automation of compliance workflows'
      }
    ],
    serviceDescription: 'Our service for MiFID adaptation of sales management and process workflows offers a holistic solution for efficient and compliant integration of regulatory requirements into your business processes. We support you from analysis through conception to implementation and training.',
    servicePoints: [
      {
        _key: 'servicePoint_vertrieb_en_1',
        _type: 'object',
        text: 'Comprehensive analysis and gap assessment of existing processes'
      },
      {
        _key: 'servicePoint_vertrieb_en_2',
        _type: 'object',
        text: 'Development of customized compliance concepts for sales and advisory'
      },
      {
        _key: 'servicePoint_vertrieb_en_3',
        _type: 'object',
        text: 'Implementation of optimized processes and documentation standards'
      },
      {
        _key: 'servicePoint_vertrieb_en_4',
        _type: 'object',
        text: 'Digitalization and automation of compliance workflows'
      },
      {
        _key: 'servicePoint_vertrieb_en_5',
        _type: 'object',
        text: 'Training and change management for sustainable change'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our Strengths',
      points: [
        {
          _key: 'whyUs_vertrieb_en_1',
          _type: 'object',
          text: 'Comprehensive expertise in MiFID regulation and sales processes'
        },
        {
          _key: 'whyUs_vertrieb_en_2',
          _type: 'object',
          text: 'Proven methodology with demonstrable successes at leading financial institutions'
        },
        {
          _key: 'whyUs_vertrieb_en_3',
          _type: 'object',
          text: 'Combination of regulatory know-how and practical sales experience'
        },
        {
          _key: 'whyUs_vertrieb_en_4',
          _type: 'object',
          text: 'Innovative approach with focus on digitalization and process optimization'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We pursue a structured and proven approach for MiFID adaptation of sales management and process workflows that ensures efficient and compliant implementation of all regulatory requirements.',
    points: [
      {
        _key: 'approach_vertrieb_en_1',
        _type: 'object',
        text: 'Detailed analysis of existing sales processes and regulatory requirements'
      },
      {
        _key: 'approach_vertrieb_en_2',
        _type: 'object',
        text: 'Development of a customized implementation strategy and process design'
      },
      {
        _key: 'approach_vertrieb_en_3',
        _type: 'object',
        text: 'Conception and implementation of adapted sales management mechanisms'
      },
      {
        _key: 'approach_vertrieb_en_4',
        _type: 'object',
        text: 'Optimization and digitalization of documentation processes and workflows'
      },
      {
        _key: 'approach_vertrieb_en_5',
        _type: 'object',
        text: 'Training, change management and continuous process optimization'
      }
    ]
  },
  services: [
    {
      _key: 'service_vertrieb_en_1',
      _type: 'object',
      title: 'Sales Process Optimization & Compliance Integration',
      description: 'We support you in optimizing your sales processes and seamlessly integrating MiFID requirements to strengthen both compliance and customer orientation and efficiency.',
      features: [
        {
          _key: 'feature_vertrieb_en_1',
          _type: 'object',
          text: 'Analysis and redesign of advisory and sales processes'
        },
        {
          _key: 'feature_vertrieb_en_2',
          _type: 'object',
          text: 'Implementation of efficient customer classification and suitability assessment'
        },
        {
          _key: 'feature_vertrieb_en_3',
          _type: 'object',
          text: 'Optimization of product governance and target market definition'
        },
        {
          _key: 'feature_vertrieb_en_4',
          _type: 'object',
          text: 'Integration of transparency and disclosure obligations into the sales process'
        }
      ]
    },
    {
      _key: 'service_vertrieb_en_2',
      _type: 'object',
      title: 'Digitalization & Process Automation',
      description: 'We support you in digitalizing and automating your MiFID-relevant processes to increase efficiency, reduce error rates and sustainably secure compliance.',
      features: [
        {
          _key: 'feature_vertrieb_en_5',
          _type: 'object',
          text: 'Development of digital advisory and documentation solutions'
        },
        {
          _key: 'feature_vertrieb_en_6',
          _type: 'object',
          text: 'Implementation of automated compliance checks and controls'
        },
        {
          _key: 'feature_vertrieb_en_7',
          _type: 'object',
          text: 'Integration of workflow management for MiFID-compliant processes'
        },
        {
          _key: 'feature_vertrieb_en_8',
          _type: 'object',
          text: 'Development of digital customer information and reporting systems'
        }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'Successful integration of MiFID requirements into sales management and process workflows requires more than just regulatory understanding. It is about seamlessly integrating compliance into daily advisory work while simultaneously improving the customer experience. Our proven approach creates this balance and leads to measurable efficiency improvements with simultaneous risk minimization.',
    name: 'Dr. Stefan Müller',
    position: 'Partner - Regulatory Compliance',
    company: 'ADVISORI FTC GmbH'
  },
  faq: allFaqs
}

export async function importMifidVertriebssteuerungEn() {
  console.log('🚀 Starting MiFID Vertriebssteuerung EN import...')
  console.log(`📊 Total FAQs to import: ${allFaqs.length}`)
  
  try {
    const result = await client.createOrReplace(mifidVertriebssteuerungEn)
    console.log('✅ MiFID Vertriebssteuerung EN page created successfully!')
    console.log(`   Document ID: ${result._id}`)
    console.log(`   Title: ${result.title}`)
    console.log(`   FAQs: ${result.faq?.length || 0}`)
    return result
  } catch (error) {
    console.error('❌ Error creating MiFID Vertriebssteuerung EN page:', error)
    throw error
  }
}

if (require.main === module) {
  importMifidVertriebssteuerungEn()
    .then(() => {
      console.log('✅ Import completed successfully!')
      process.exit(0)
    })
    .catch((error) => {
      console.error('❌ Import failed:', error)
      process.exit(1)
    })
}
