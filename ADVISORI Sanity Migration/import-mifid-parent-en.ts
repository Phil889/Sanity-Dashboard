import 'dotenv/config'
import { createClient } from '@sanity/client'
import { faqsBatch1 } from './mifid-parent-en-faqs-batch1'
import { faqsBatch2 } from './mifid-parent-en-faqs-batch2'
import { faqsBatch3 } from './mifid-parent-en-faqs-batch3'
import { faqsBatch4 } from './mifid-parent-en-faqs-batch4'
import { faqsBatch5 } from './mifid-parent-en-faqs-batch5'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Combine all FAQ batches
const allFaqs = [...faqsBatch1, ...faqsBatch2, ...faqsBatch3, ...faqsBatch4, ...faqsBatch5]

const mifidParentEn = {
  _id: 'mifid-en',
  _type: 'servicePage',
  title: 'MiFID',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'mifid'
  },
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/mifid-en'
  },
  seo: {
    _type: 'seo',
    title: 'MiFID | ADVISORI',
    description: 'Comprehensive support for implementing and maintaining MiFID requirements. We guide you in adapting your processes, systems, and investor protection practices.',
    keywords: 'MiFID, MiFID II, Markets in Financial Instruments Directive, investor protection, financial markets, compliance, transparency, best execution'
  },
  heroSection: {
    _type: 'object',
    heading: 'MiFID',
    tagline: 'Expert Solutions for Transparency and Investor Protection in the Financial Sector',
    description: 'The Markets in Financial Instruments Directive (MiFID) sets comprehensive requirements for transparency, investor protection, and market integrity. We support you in efficiently implementing and sustainably maintaining these complex regulatory requirements.',
    heroImage: {
      _type: 'image',
      alt: 'MiFID'
    },
    benefits: [
      {
        _key: 'benefit_mifid_parent_en_1',
        _type: 'object',
        text: 'Improved transparency and compliance in trading processes'
      },
      {
        _key: 'benefit_mifid_parent_en_2',
        _type: 'object',
        text: 'Optimized investor advisory and product governance'
      },
      {
        _key: 'benefit_mifid_parent_en_3',
        _type: 'object',
        text: 'Efficient implementation of best execution requirements'
      },
      {
        _key: 'benefit_mifid_parent_en_4',
        _type: 'object',
        text: 'Seamless integration of transaction reporting and record-keeping obligations'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'MiFID',
    description: 'The Markets in Financial Instruments Directive (MiFID) is a central regulatory framework for financial service providers in the EU that strengthens investor protection, increases transparency, and promotes market integrity. This regulation encompasses extensive requirements for advisory processes, product transparency, trade execution, and record-keeping obligations. We support you in the strategic implementation and continuous compliance with these complex requirements.',
    additionalInfo: 'MiFID requirements have significant impacts on advisory processes, product offerings, trade execution, and documentation of financial service providers. A strategic implementation can not only ensure compliance but also lead to significant competitive advantages and increase customer satisfaction.',
    alert: {
      title: 'Expert Tip',
      content: 'A successful MiFID implementation requires not only meeting minimum requirements but also strategic integration into your customer advisory and trading processes to realize efficiency gains and improve the customer experience.'
    },
    points: [
      {
        _key: 'point_mifid_parent_en_1',
        _type: 'object',
        text: 'Comprehensive gap analysis and assessment of MiFID compliance requirements'
      },
      {
        _key: 'point_mifid_parent_en_2',
        _type: 'object',
        text: 'Development and implementation of robust processes for investor protection and transparency'
      },
      {
        _key: 'point_mifid_parent_en_3',
        _type: 'object',
        text: 'Optimization of best execution practices and evidence documentation'
      },
      {
        _key: 'point_mifid_parent_en_4',
        _type: 'object',
        text: 'Integration of MiFID requirements into existing IT systems and advisory processes'
      },
      {
        _key: 'point_mifid_parent_en_5',
        _type: 'object',
        text: 'Development and implementation of solutions for regulatory reporting'
      }
    ],
    serviceDescription: 'We offer a comprehensive range of services to support the implementation and continuous compliance with MiFID requirements. Our approach encompasses both technical implementation and strategic integration into your business processes.',
    servicePoints: [
      {
        _key: 'servicePoint_mifid_parent_en_1',
        _type: 'object',
        text: 'MiFID Gap Analysis and Readiness Assessment'
      },
      {
        _key: 'servicePoint_mifid_parent_en_2',
        _type: 'object',
        text: 'Development and implementation of investor protection and transparency strategies'
      },
      {
        _key: 'servicePoint_mifid_parent_en_3',
        _type: 'object',
        text: 'Optimization of best execution processes and documentation'
      },
      {
        _key: 'servicePoint_mifid_parent_en_4',
        _type: 'object',
        text: 'Implementation and automation of regulatory reporting solutions'
      },
      {
        _key: 'servicePoint_mifid_parent_en_5',
        _type: 'object',
        text: 'Training and change management for MiFID implementations'
      }
    ],
    whyUs: {
      title: 'Our Strengths',
      points: [
        {
          _key: 'whyUs_mifid_parent_en_1',
          _type: 'object',
          text: 'Deep expert knowledge in MiFID requirements and best practices'
        },
        {
          _key: 'whyUs_mifid_parent_en_2',
          _type: 'object',
          text: 'Years of experience implementing MiFID standards at various financial institutions'
        },
        {
          _key: 'whyUs_mifid_parent_en_3',
          _type: 'object',
          text: 'Holistic approach integrating regulation, customer advisory, and business strategy'
        },
        {
          _key: 'whyUs_mifid_parent_en_4',
          _type: 'object',
          text: 'Innovative technology solutions for automating and optimizing regulatory processes'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We develop together with you a customized approach for effective implementation and continuous compliance with MiFID requirements.',
    points: [
      {
        _key: 'approach_mifid_parent_en_1',
        _type: 'object',
        text: 'Conducting a comprehensive as-is analysis and gap identification'
      },
      {
        _key: 'approach_mifid_parent_en_2',
        _type: 'object',
        text: 'Development of a strategic MiFID roadmap with clear milestones'
      },
      {
        _key: 'approach_mifid_parent_en_3',
        _type: 'object',
        text: 'Implementation and adaptation of processes, systems, and governance structures'
      },
      {
        _key: 'approach_mifid_parent_en_4',
        _type: 'object',
        text: 'Integration and automation of reporting and documentation processes'
      },
      {
        _key: 'approach_mifid_parent_en_5',
        _type: 'object',
        text: 'Continuous monitoring, validation, and optimization of implemented solutions'
      }
    ]
  },
  services: [
    {
      _key: 'service_mifid_parent_en_1',
      _type: 'object',
      title: 'MiFID Gap Analysis and Implementation Strategy',
      description: 'We analyze your existing processes, systems, and methods with regard to MiFID requirements and develop a customized implementation strategy.',
      features: [
        {
          _key: 'serviceFeature_mifid_parent_en_1',
          _type: 'object',
          text: 'Detailed assessment of current compliance situation'
        },
        {
          _key: 'serviceFeature_mifid_parent_en_2',
          _type: 'object',
          text: 'Identification of gaps and improvement potentials'
        },
        {
          _key: 'serviceFeature_mifid_parent_en_3',
          _type: 'object',
          text: 'Development of a prioritized roadmap for implementation'
        },
        {
          _key: 'serviceFeature_mifid_parent_en_4',
          _type: 'object',
          text: 'Cost-benefit analysis of various implementation options'
        }
      ]
    },
    {
      _key: 'service_mifid_parent_en_2',
      _type: 'object',
      title: 'Investor Protection and Product Governance',
      description: 'We support you in optimizing your investor protection and product governance processes in accordance with MiFID requirements.',
      features: [
        {
          _key: 'serviceFeature_mifid_parent_en_5',
          _type: 'object',
          text: 'Development of robust customer categorization and advisory processes'
        },
        {
          _key: 'serviceFeature_mifid_parent_en_6',
          _type: 'object',
          text: 'Implementation of frameworks for target market definition and monitoring'
        },
        {
          _key: 'serviceFeature_mifid_parent_en_7',
          _type: 'object',
          text: 'Optimization of cost information and transparency requirements'
        },
        {
          _key: 'serviceFeature_mifid_parent_en_8',
          _type: 'object',
          text: 'Integration of investor protection principles into the entire product lifecycle'
        }
      ]
    }
  ],
  faq: allFaqs,
  testimonial: {
    _type: 'object',
    quote: 'Implementing MiFID is not only a regulatory necessity for financial institutions but also a strategic opportunity. With our support, institutions can not only meet the requirements but also use them to deepen customer relationships and achieve competitive advantages.',
    name: 'Dr. Michael Höhle',
    position: 'Partner',
    company: 'ADVISORI FTC GmbH'
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
  }
}

async function importMifidParentEn() {
  console.log('Starting import of MiFID Parent EN page...')
  console.log(`Total FAQs: ${allFaqs.length}`)
  
  try {
    const result = await client.createOrReplace(mifidParentEn)
    console.log('Successfully imported MiFID Parent EN page!')
    console.log(`Document ID: ${result._id}`)
    console.log(`Title: ${result.title}`)
    console.log(`FAQs imported: ${allFaqs.length}`)
  } catch (error) {
    console.error('Error importing MiFID Parent EN page:', error)
    throw error
  }
}

importMifidParentEn()
  .then(() => {
    console.log('Import completed successfully!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Import failed:', error)
    process.exit(1)
  })
