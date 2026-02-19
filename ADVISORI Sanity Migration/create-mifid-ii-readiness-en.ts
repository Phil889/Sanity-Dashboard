import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const mifidIIReadinessEn = {
  _id: 'mifid-ii-readiness-en',
  _type: 'servicePage',
  title: 'MiFID II Readiness',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'mifid-ii-readiness'
  },
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/mifid/mifid-ii-readiness-en'
  },
  parent: {
    _ref: 'mifid',
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
    title: 'MiFID II Readiness | ADVISORI',
    description: 'Comprehensive support for preparing and implementing MiFID II requirements. We guide you through analysis, implementation, and continuous optimization of your MiFID II compliance.',
    keywords: 'MiFID II Readiness, MiFID II Implementation, MiFID II Preparation, MiFID II Compliance, Investor Protection, Cost Transparency, Best Execution'
  },
  heroSection: {
    _type: 'object',
    heading: 'MiFID II Readiness',
    tagline: 'Strategic implementation of MiFID II requirements for sustainable business success',
    description: 'The Markets in Financial Instruments Directive II (MiFID II) presents financial institutions with complex challenges in the areas of investor protection, transparency, and market infrastructure. We support you with a structured methodology for efficient implementation and optimal integration of requirements into your business processes.',
    heroImage: {
      _type: 'image',
      alt: 'MiFID II Readiness'
    },
    benefits: [
      {
        _key: `benefit_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Comprehensive readiness assessment and strategic implementation planning'
      },
      {
        _key: `benefit_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Optimized integration of MiFID II requirements into existing business processes'
      },
      {
        _key: `benefit_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Efficient implementation of cost transparency and best execution requirements'
      },
      {
        _key: `benefit_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Sustainable compliance assurance through ongoing monitoring and optimization'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'MiFID II Readiness',
    description: 'MiFID II has significantly increased requirements for financial service providers in the areas of investor protection, transparency, and market structure. Successful implementation requires a holistic approach that considers both technical and strategic aspects. Our MiFID II Readiness solution supports you in systematic preparation, efficient implementation, and sustainable compliance with this complex regulation.',
    additionalInfo: 'MiFID II requirements have far-reaching implications for virtually all areas of a financial institution – from product development through client advisory to transaction execution and documentation. A well-thought-out readiness strategy is crucial not only to ensure compliance but also to increase operational efficiency and customer orientation.',
    serviceDescription: 'Our MiFID II Readiness offering encompasses a broad spectrum of services that support you in all aspects of MiFID II preparation and implementation. We provide a tailored approach customized to your specific requirements and existing infrastructure.',
    alert: {
      _type: 'object',
      title: 'Expert Tip',
      content: 'A successful MiFID II implementation should not only aim at fulfilling regulatory requirements but should also be used as an opportunity to optimize customer processes and achieve competitive advantages through increased transparency and improved investor protection.'
    },
    points: [
      {
        _key: `point_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Comprehensive gap analysis and assessment of MiFID II impacts on your organization'
      },
      {
        _key: `point_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Development of a tailored implementation strategy with clear priorities'
      },
      {
        _key: `point_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Optimization of investor advisory and product governance according to MiFID II'
      },
      {
        _key: `point_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Implementation of robust best execution processes and documentation'
      },
      {
        _key: `point_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Integration of cost transparency and record-keeping requirements into your systems'
      }
    ],
    servicePoints: [
      {
        _key: `servicePoint_en_${Date.now()}_1`,
        _type: 'object',
        text: 'MiFID II Impact Assessment and Gap Analysis'
      },
      {
        _key: `servicePoint_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Development of a prioritized MiFID II implementation roadmap'
      },
      {
        _key: `servicePoint_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Implementation of investor protection and product governance processes'
      },
      {
        _key: `servicePoint_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Building robust best execution frameworks and systems'
      },
      {
        _key: `servicePoint_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Integration of cost transparency and record-keeping obligations into your IT landscape'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our Strengths',
      points: [
        {
          _key: `whyUs_en_${Date.now()}_1`,
          _type: 'object',
          text: 'Comprehensive expertise in all aspects of MiFID II regulation and its practical implementation'
        },
        {
          _key: `whyUs_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Proven methodology for efficient and sustainable implementation of MiFID II requirements'
        },
        {
          _key: `whyUs_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Deep experience in integrating regulatory requirements into business processes'
        },
        {
          _key: `whyUs_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Innovative technology solutions for automation and optimization of MiFID II processes'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We pursue a structured and proven approach to ensuring your MiFID II readiness that considers all relevant aspects of the regulation and can be seamlessly integrated into your existing processes.',
    points: [
      {
        _key: `approach_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Conducting a comprehensive as-is analysis and identification of compliance gaps'
      },
      {
        _key: `approach_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Development of a tailored MiFID II implementation strategy'
      },
      {
        _key: `approach_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Prioritized implementation of requirements across all affected business areas'
      },
      {
        _key: `approach_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Integration of MiFID II processes into your IT systems and workflows'
      },
      {
        _key: `approach_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Establishment of a continuous monitoring and optimization process'
      }
    ]
  },
  services: [
    {
      _key: `service_en_${Date.now()}_1`,
      _type: 'object',
      title: 'MiFID II Impact Assessment and Gap Analysis',
      description: 'We systematically analyze the impacts of MiFID II on your organization and identify existing compliance gaps as the foundation for your implementation strategy.',
      features: [
        {
          _key: `feature_en_${Date.now()}_1`,
          _type: 'object',
          text: 'Comprehensive assessment of MiFID II requirements for your specific business model'
        },
        {
          _key: `feature_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Detailed analysis of your existing processes, systems, and documentation'
        },
        {
          _key: `feature_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Identification of compliance gaps and optimization potentials'
        },
        {
          _key: `feature_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Development of a structured action plan with clear priorities'
        }
      ]
    },
    {
      _key: `service_en_${Date.now()}_2`,
      _type: 'object',
      title: 'MiFID II Implementation and Process Optimization',
      description: 'We support you in the efficient implementation of MiFID II requirements and seamlessly integrate them into your existing business processes.',
      features: [
        {
          _key: `feature_en_${Date.now()}_5`,
          _type: 'object',
          text: 'Implementation of tailored solutions for investor protection and product governance'
        },
        {
          _key: `feature_en_${Date.now()}_6`,
          _type: 'object',
          text: 'Building robust best execution processes and evidence documentation'
        },
        {
          _key: `feature_en_${Date.now()}_7`,
          _type: 'object',
          text: 'Integration of cost transparency and record-keeping obligations'
        },
        {
          _key: `feature_en_${Date.now()}_8`,
          _type: 'object',
          text: 'Optimization and automation of MiFID II-relevant workflows'
        }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'A successful MiFID II implementation requires more than just technical compliance – it offers the opportunity to strengthen customer trust, optimize processes, and unlock new competitive advantages. With our holistic approach, we support financial institutions in fully exploiting these opportunities.',
    name: 'Dr. Michael Höhle',
    position: 'Partner',
    company: 'ADVISORI FTC GmbH'
  },
  faq: []
}

export async function createMifidIIReadinessEn() {
  console.log('Creating MiFID II Readiness EN page...')
  
  try {
    const result = await client.createOrReplace(mifidIIReadinessEn)
    console.log('Created MiFID II Readiness EN page:', result._id)
    return result
  } catch (error) {
    console.error('Error creating page:', error)
    throw error
  }
}

export { mifidIIReadinessEn }
