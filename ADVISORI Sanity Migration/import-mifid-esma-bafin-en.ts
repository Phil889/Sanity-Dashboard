import 'dotenv/config'
import { createClient } from '@sanity/client'
import { faqsBatch1 } from './mifid-esma-bafin-en-faqs-batch1'
import { faqsBatch2 } from './mifid-esma-bafin-en-faqs-batch2'
import { faqsBatch3 } from './mifid-esma-bafin-en-faqs-batch3'
import { faqsBatch4 } from './mifid-esma-bafin-en-faqs-batch4'

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
  ...faqsBatch4
]

const mifidEsmaBafinEn = {
  _id: 'mifid-anpassung-an-neue-esma-bafin-vorgaben-en',
  _type: 'servicePage',
  title: 'MiFID Adaptation to New ESMA/BaFin Requirements',
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/mifid/mifid-ongoing-compliance/mifid-anpassung-an-neue-esma-bafin-vorgaben-en'
  },
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'mifid-anpassung-an-neue-esma-bafin-vorgaben'
  },
  parent: {
    _type: 'reference',
    _ref: 'mifid-ongoing-compliance'
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
    title: 'MiFID Adaptation to New ESMA/BaFin Requirements | ADVISORI',
    description: 'Ensure continuous adaptation of your MiFID compliance to new ESMA and BaFin requirements with our specialized services. We analyze regulatory changes, assess their impacts, and implement efficient adaptation measures that ensure sustainable compliance and competitive advantages for your institution.',
    keywords: 'MiFID adaptation, ESMA requirements, BaFin regulations, regulatory changes, MiFID updates, compliance management, securities regulation, MiFID II compliance, regulatory change management, ESMA guidelines'
  },
  heroSection: {
    _type: 'object',
    tagline: 'Proactive Adaptation to Dynamic Regulatory Requirements',
    heading: 'MiFID Adaptation to New ESMA/BaFin Requirements',
    description: 'Master the continuous evolution of MiFID regulation through our specialized adaptation services. We identify, analyze, and evaluate new ESMA and BaFin requirements, develop tailored implementation strategies, and support you in efficiently integrating regulatory changes into your existing compliance structures.',
    heroImage: {
      _type: 'image',
      alt: 'MiFID Adaptation to New ESMA/BaFin Requirements'
    },
    benefits: [
      {
        _key: 'benefit_esma_bafin_en_1',
        _type: 'object',
        text: 'Early identification and analysis of relevant regulatory developments'
      },
      {
        _key: 'benefit_esma_bafin_en_2',
        _type: 'object',
        text: 'Tailored impact assessments for your specific business models'
      },
      {
        _key: 'benefit_esma_bafin_en_3',
        _type: 'object',
        text: 'Efficient implementation of new requirements with minimal operational effort'
      },
      {
        _key: 'benefit_esma_bafin_en_4',
        _type: 'object',
        text: 'Continuous compliance security in a dynamic regulatory environment'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'MiFID Adaptation to New ESMA/BaFin Requirements',
    description: 'The regulatory MiFID framework is subject to continuous clarifications and extensions by ESMA and national supervisory authorities. Our specialized adaptation service ensures that your institution responds early to regulatory developments, precisely assesses their impacts, and efficiently implements necessary changes – for sustainable compliance security and strategic competitive advantages in a complex regulatory environment.',
    serviceDescription: 'Our MiFID adaptation service for new ESMA and BaFin requirements offers a comprehensive solution for continuous updating and optimization of your MiFID compliance. We support you in early identification of regulatory changes, precise assessment of their impacts, and efficient implementation of necessary adaptations.',
    additionalInfo: 'Our clients benefit from our continuous monitoring of the regulatory environment and early analyses of new ESMA and BaFin requirements. Through our proactive approach, institutions can typically gain 3-4 months lead time for regulatory adaptations, which reduces implementation costs by an average of 30-40% and significantly increases the quality of implementation. At the same time, our structured adaptation methodology minimizes operational disruptions and maximizes integration into existing compliance processes.',
    alert: {
      _type: 'object',
      title: 'Expert Tip',
      content: 'Establish a structured Regulatory Change Management process that identifies new requirements early, systematically evaluates them, and efficiently implements them. Combine this with a dynamic Regulatory Knowledge Base that documents interpretations, precedents, and implementation practices. This dual approach reduces implementation effort for new requirements by up to 40% and transforms regulatory adaptations from reactive obligations into a strategic competitive advantage.'
    },
    points: [
      {
        _key: 'point_esma_bafin_en_1',
        _type: 'object',
        text: 'Continuous monitoring of new ESMA and BaFin requirements for MiFID'
      },
      {
        _key: 'point_esma_bafin_en_2',
        _type: 'object',
        text: 'Detailed impact assessments and gap analyses for regulatory changes'
      },
      {
        _key: 'point_esma_bafin_en_3',
        _type: 'object',
        text: 'Development of efficient implementation strategies and action plans'
      },
      {
        _key: 'point_esma_bafin_en_4',
        _type: 'object',
        text: 'Integration of new requirements into existing compliance structures'
      },
      {
        _key: 'point_esma_bafin_en_5',
        _type: 'object',
        text: 'Training and knowledge transfer on new regulatory requirements'
      }
    ],
    servicePoints: [
      {
        _key: 'servicePoint_esma_bafin_en_1',
        _type: 'object',
        text: 'Continuous monitoring of new ESMA and BaFin requirements for MiFID'
      },
      {
        _key: 'servicePoint_esma_bafin_en_2',
        _type: 'object',
        text: 'Detailed impact assessments and gap analyses for regulatory changes'
      },
      {
        _key: 'servicePoint_esma_bafin_en_3',
        _type: 'object',
        text: 'Development of efficient implementation strategies and action plans'
      },
      {
        _key: 'servicePoint_esma_bafin_en_4',
        _type: 'object',
        text: 'Integration of new requirements into existing compliance structures'
      },
      {
        _key: 'servicePoint_esma_bafin_en_5',
        _type: 'object',
        text: 'Training and knowledge transfer on new regulatory requirements'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our Strengths',
      points: [
        {
          _key: 'whyUs_esma_bafin_en_1',
          _type: 'object',
          text: 'Deep expertise in MiFID regulation and supervisory practice'
        },
        {
          _key: 'whyUs_esma_bafin_en_2',
          _type: 'object',
          text: 'Early access to regulatory developments and their interpretation'
        },
        {
          _key: 'whyUs_esma_bafin_en_3',
          _type: 'object',
          text: 'Proven methodology for efficient regulatory adaptation projects'
        },
        {
          _key: 'whyUs_esma_bafin_en_4',
          _type: 'object',
          text: 'Years of experience with successful MiFID implementation projects'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We pursue a structured and proven approach for continuous adaptation of your MiFID compliance to new regulatory requirements, combining proactive monitoring with efficient implementation.',
    points: [
      {
        _key: 'approach_esma_bafin_en_1',
        _type: 'object',
        text: 'Continuous monitoring and early identification of new ESMA and BaFin requirements'
      },
      {
        _key: 'approach_esma_bafin_en_2',
        _type: 'object',
        text: 'Detailed analysis and interpretation of regulatory changes'
      },
      {
        _key: 'approach_esma_bafin_en_3',
        _type: 'object',
        text: 'Institution-specific impact assessments and gap analyses'
      },
      {
        _key: 'approach_esma_bafin_en_4',
        _type: 'object',
        text: 'Development of tailored implementation strategies and action plans'
      },
      {
        _key: 'approach_esma_bafin_en_5',
        _type: 'object',
        text: 'Efficient implementation and integration into existing compliance structures'
      }
    ]
  },
  services: [
    {
      _key: 'service_esma_bafin_en_1',
      _type: 'object',
      title: 'Regulatory Change Monitoring & Impact Assessment',
      description: 'We continuously monitor the regulatory environment, identify relevant changes early, and assess their specific impacts on your business models, processes, and systems.',
      features: [
        {
          _key: 'serviceFeature_esma_bafin_en_1',
          _type: 'object',
          text: 'Systematic monitoring of ESMA publications and BaFin circulars'
        },
        {
          _key: 'serviceFeature_esma_bafin_en_2',
          _type: 'object',
          text: 'Detailed analysis and interpretation of regulatory changes'
        },
        {
          _key: 'serviceFeature_esma_bafin_en_3',
          _type: 'object',
          text: 'Institution-specific impact assessments and recommendations'
        },
        {
          _key: 'serviceFeature_esma_bafin_en_4',
          _type: 'object',
          text: 'Prioritization of adaptation measures by urgency and complexity'
        }
      ]
    },
    {
      _key: 'service_esma_bafin_en_2',
      _type: 'object',
      title: 'MiFID Implementation & Integration',
      description: 'We develop tailored implementation strategies for new regulatory requirements and support you in their efficient integration into existing compliance structures.',
      features: [
        {
          _key: 'serviceFeature_esma_bafin_en_5',
          _type: 'object',
          text: 'Development of detailed implementation roadmaps and action plans'
        },
        {
          _key: 'serviceFeature_esma_bafin_en_6',
          _type: 'object',
          text: 'Adaptation of policies, processes, and controls to new requirements'
        },
        {
          _key: 'serviceFeature_esma_bafin_en_7',
          _type: 'object',
          text: 'Integration of new requirements into existing compliance management systems'
        },
        {
          _key: 'serviceFeature_esma_bafin_en_8',
          _type: 'object',
          text: 'Training and knowledge transfer on new regulatory requirements'
        }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'Continuous adaptation to new MiFID requirements from ESMA and BaFin presents a significant challenge for many institutions. Our proactive approach transforms this challenge into a strategic advantage: We identify regulatory changes early, precisely assess their specific impacts, and efficiently implement necessary adaptations. This not only reduces compliance risks but also optimizes resource deployment and creates sustainable competitive advantages through regulatory excellence. Our clients benefit from a significant time advantage, reduced implementation costs, and higher quality of regulatory adaptation – decisive factors in an increasingly complex MiFID environment.',
    name: 'Dr. Sarah Müller',
    position: 'Senior Director Regulatory Affairs',
    company: 'ADVISORI FTC GmbH'
  },
  faq: allFaqs
}

async function importMifidEsmaBafinEn() {
  console.log('Starting import of MiFID ESMA/BaFin EN page...')
  console.log(`Total FAQs: ${allFaqs.length}`)
  
  try {
    const result = await client.createOrReplace(mifidEsmaBafinEn)
    console.log('Successfully imported MiFID ESMA/BaFin EN page!')
    console.log('Document ID:', result._id)
    console.log('Title:', result.title)
    console.log('FAQs imported:', result.faq?.length || 0)
  } catch (error) {
    console.error('Error importing page:', error)
    throw error
  }
}

importMifidEsmaBafinEn()
