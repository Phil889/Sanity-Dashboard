import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const timestamp = Date.now()

const mifidProductInvestorProtectionEn = {
  _id: 'mifid-product-investor-protection-en',
  _type: 'servicePage',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'mifid-produkt-anlegerschutz-zielmarkt-geeignetheitspruefung'
  },
  title: 'MiFID Product Investor Protection, Target Market & Suitability Assessment',
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/mifid/mifid-ii-readiness/mifid-product-investor-protection-en'
  },
  parent: {
    _type: 'reference',
    _ref: 'mifid-ii-readiness'
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
    title: 'MiFID Product Investor Protection, Target Market & Suitability Assessment | ADVISORI',
    description: 'Comprehensive consulting for implementing MiFID II requirements in product governance, target market definition, and suitability assessment. We support you in developing and implementing regulatory-compliant and customer-centric processes.',
    keywords: 'MiFID II product governance, MiFID II target market definition, MiFID II suitability assessment, investor protection, product monitoring, target market concept, advisory documentation'
  },
  heroSection: {
    _type: 'object',
    heading: 'MiFID Product Investor Protection, Target Market & Suitability Assessment',
    tagline: 'Integrated Solutions for Customer-Centric Product Governance and Regulatory Investor Protection',
    description: 'The MiFID II requirements for product governance, target market definition, and suitability assessment present financial institutions with complex challenges. We support you in developing and implementing efficient processes that place both regulatory compliance and customer orientation at the center.',
    heroImage: {
      _type: 'image',
      alt: 'MiFID Product Investor Protection, Target Market & Suitability Assessment'
    },
    benefits: [
      {
        _key: `benefit_${timestamp}_1`,
        _type: 'object',
        text: 'Systematic integration of investor protection into your product development and monitoring'
      },
      {
        _key: `benefit_${timestamp}_2`,
        _type: 'object',
        text: 'Precise target market definition and validation for all financial products'
      },
      {
        _key: `benefit_${timestamp}_3`,
        _type: 'object',
        text: 'Robust processes for suitability and appropriateness assessments'
      },
      {
        _key: `benefit_${timestamp}_4`,
        _type: 'object',
        text: 'Optimized advisory processes with complete regulatory documentation'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'MiFID Product Investor Protection, Target Market & Suitability Assessment',
    description: 'The MiFID II regulation has introduced a comprehensive paradigm shift in investor protection, requiring financial institutions to fundamentally realign their product development, distribution, and advisory processes. Our solution supports you in systematically implementing these requirements and integrating them into your business processes – with the goal of transforming regulatory compliance into a strategic competitive advantage.',
    additionalInfo: 'The MiFID II requirements for product governance and investor protection affect not only the compliance department but have far-reaching implications for product management, sales, marketing, IT, and customer advisory. Successful implementation therefore requires a cross-departmental approach that involves all affected areas and considers their specific requirements.',
    alert: {
      _type: 'object',
      title: 'Expert Tip',
      content: 'Effective MiFID II product governance should not be viewed as an isolated compliance measure but as an integral part of your product management. The systematic integration of target market analyses into the product development process leads not only to regulatory conformity but also to better-positioned products and higher customer satisfaction.'
    },
    serviceDescription: 'Our offering in the area of MiFID Product Investor Protection, Target Market & Suitability Assessment includes tailored solutions customized to your specific business models, product portfolio, and customer structure. We support you in all aspects of implementation – from strategic conception to operational execution.',
    points: [
      {
        _key: `point_${timestamp}_1`,
        _type: 'object',
        text: 'Development of an integrated product governance architecture with clear responsibilities and processes'
      },
      {
        _key: `point_${timestamp}_2`,
        _type: 'object',
        text: 'Methodical target market definition and validation based on structured criteria'
      },
      {
        _key: `point_${timestamp}_3`,
        _type: 'object',
        text: 'Implementation of robust suitability and appropriateness assessments in the advisory process'
      },
      {
        _key: `point_${timestamp}_4`,
        _type: 'object',
        text: 'Establishment of effective control and monitoring processes for product distribution strategy'
      },
      {
        _key: `point_${timestamp}_5`,
        _type: 'object',
        text: 'Integration of regulatory requirements into your IT systems and documentation processes'
      }
    ],
    servicePoints: [
      {
        _key: `servicePoint_${timestamp}_1`,
        _type: 'object',
        text: 'Assessment and gap analysis of your existing product governance and investor protection processes'
      },
      {
        _key: `servicePoint_${timestamp}_2`,
        _type: 'object',
        text: 'Development of an integrated product governance framework with target market definition'
      },
      {
        _key: `servicePoint_${timestamp}_3`,
        _type: 'object',
        text: 'Conception and implementation of robust suitability and appropriateness assessments'
      },
      {
        _key: `servicePoint_${timestamp}_4`,
        _type: 'object',
        text: 'Integration of regulatory requirements into your advisory and distribution processes'
      },
      {
        _key: `servicePoint_${timestamp}_5`,
        _type: 'object',
        text: 'Development of effective monitoring and documentation solutions for continuous compliance'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our Strengths',
      points: [
        {
          _key: `whyUs_${timestamp}_1`,
          _type: 'object',
          text: 'Deep expertise in all aspects of MiFID II product governance and investor protection'
        },
        {
          _key: `whyUs_${timestamp}_2`,
          _type: 'object',
          text: 'Proven methodology for implementing target market concepts and suitability assessments'
        },
        {
          _key: `whyUs_${timestamp}_3`,
          _type: 'object',
          text: 'Extensive experience in integrating regulatory requirements into advisory processes'
        },
        {
          _key: `whyUs_${timestamp}_4`,
          _type: 'object',
          text: 'Innovative solution approaches for the digital transformation of investor protection processes'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We pursue a structured and proven approach to implementing MiFID II requirements in the areas of product governance, target market definition, and suitability assessment, which considers all relevant aspects and ensures seamless integration into your existing processes.',
    points: [
      {
        _key: `approach_${timestamp}_1`,
        _type: 'object',
        text: 'Comprehensive analysis of your current product development, distribution, and advisory processes'
      },
      {
        _key: `approach_${timestamp}_2`,
        _type: 'object',
        text: 'Development of a customized product governance and target market concept'
      },
      {
        _key: `approach_${timestamp}_3`,
        _type: 'object',
        text: 'Design and implementation of robust suitability and appropriateness assessment processes'
      },
      {
        _key: `approach_${timestamp}_4`,
        _type: 'object',
        text: 'Integration of new processes and requirements into your IT systems and documentation'
      },
      {
        _key: `approach_${timestamp}_5`,
        _type: 'object',
        text: 'Establishment of monitoring and review mechanisms for continuous compliance'
      }
    ]
  },
  services: [
    {
      _key: `service_${timestamp}_1`,
      _type: 'object',
      title: 'Product Governance & Target Market Concept',
      description: 'We support you in developing and implementing a robust product governance framework with systematic target market definition and validation.',
      features: [
        {
          _key: `feature_${timestamp}_1`,
          _type: 'object',
          text: 'Development of a structured product governance architecture with clear responsibilities'
        },
        {
          _key: `feature_${timestamp}_2`,
          _type: 'object',
          text: 'Methodical target market definition based on standardized criteria for all financial products'
        },
        {
          _key: `feature_${timestamp}_3`,
          _type: 'object',
          text: 'Implementation of a robust product approval process with defined stage gates'
        },
        {
          _key: `feature_${timestamp}_4`,
          _type: 'object',
          text: 'Establishment of continuous product monitoring and adjustment processes'
        }
      ]
    },
    {
      _key: `service_${timestamp}_2`,
      _type: 'object',
      title: 'Suitability & Appropriateness Assessment',
      description: 'We design and implement efficient processes for conducting and documenting suitability and appropriateness assessments in the advisory process.',
      features: [
        {
          _key: `feature_${timestamp}_5`,
          _type: 'object',
          text: 'Development of structured methods for comprehensive customer profile capture'
        },
        {
          _key: `feature_${timestamp}_6`,
          _type: 'object',
          text: 'Conception of rule-based algorithms for objective suitability assessments'
        },
        {
          _key: `feature_${timestamp}_7`,
          _type: 'object',
          text: 'Integration of assessment processes into existing advisory and CRM systems'
        },
        {
          _key: `feature_${timestamp}_8`,
          _type: 'object',
          text: 'Implementation of robust documentation and evidence management'
        }
      ]
    }
  ],
  faq: [],
  testimonial: {
    _type: 'object',
    quote: 'The MiFID II requirements for product governance and investor protection offer financial institutions the opportunity to strengthen their customer orientation while minimizing regulatory risks. With our integrated approach, we support our clients in efficiently implementing these requirements and transforming them into a strategic advantage.',
    name: 'Dr. Matthias Klöpper',
    position: 'Partner',
    company: 'ADVISORI FTC GmbH'
  }
}

export async function createMifidProductInvestorProtectionEn() {
  console.log('Creating MiFID Product Investor Protection EN page...')
  
  try {
    const result = await client.createOrReplace(mifidProductInvestorProtectionEn)
    console.log('Successfully created MiFID Product Investor Protection EN page:', result._id)
    return result
  } catch (error) {
    console.error('Error creating page:', error)
    throw error
  }
}

export { mifidProductInvestorProtectionEn }
