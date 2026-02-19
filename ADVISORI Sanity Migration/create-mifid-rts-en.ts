import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
})

const mifidRtsEnPage = {
  _id: 'mifid-transparenz-berichtspflichten-rts-27-28-en',
  _type: 'servicePage',
  language: 'en',
  title: 'MiFID Transparency and Reporting Obligations (RTS 27/28)',
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/mifid/mifid-implementation/mifid-transparenz-berichtspflichten-rts-27-28-en'
  },
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'mifid-transparenz-berichtspflichten-rts-27-28'
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
    title: 'MiFID Transparency and Reporting Obligations (RTS 27/28) | ADVISORI',
    description: 'Comprehensive support for implementing and fulfilling MiFID transparency and reporting obligations under RTS 27 and 28. We help you efficiently implement regulatory requirements and ensure continuous compliance.',
    keywords: 'MiFID transparency requirements, RTS 27, RTS 28, Best Execution Reporting, Execution Quality, Trading venue reporting, Regulatory transparency, Financial Markets Directive'
  },
  heroSection: {
    _type: 'object',
    tagline: 'Efficient Fulfillment of Complex Transparency Requirements under RTS 27/28',
    heading: 'MiFID Transparency and Reporting Obligations (RTS 27/28)',
    description: 'The MiFID transparency requirements under RTS 27 and 28 present securities firms and trading venues with complex challenges in data collection, processing, and reporting. We support you in the efficient and sustainable implementation of these requirements – from technical integration to continuous reporting.',
    heroImage: {
      _type: 'image',
      alt: 'MiFID Transparency and Reporting Obligations'
    },
    benefits: [
      {
        _key: `benefit_${Date.now()}_1`,
        _type: 'object',
        text: 'Complete compliance with all RTS 27/28 requirements'
      },
      {
        _key: `benefit_${Date.now()}_2`,
        _type: 'object',
        text: 'Efficient data collection and processing through automated processes'
      },
      {
        _key: `benefit_${Date.now()}_3`,
        _type: 'object',
        text: 'Quality-assured reports with highest data integrity'
      },
      {
        _key: `benefit_${Date.now()}_4`,
        _type: 'object',
        text: 'Sustainable reporting solution with minimal manual intervention'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'MiFID Transparency and Reporting Obligations (RTS 27/28)',
    description: 'The regulatory technical standards RTS 27 and 28 define comprehensive transparency and reporting obligations for trading venues and securities firms. Our experts support you in the efficient implementation of these complex requirements – from conception through technical implementation to continuous reporting. Our focus is on developing sustainable, automated solutions that ensure compliance while minimizing operational effort.',
    additionalInfo: 'The MiFID transparency requirements under RTS 27 and 28 place extensive demands on data collection, analysis, and reporting. Efficient implementation requires not only a deep understanding of regulatory requirements but also technical know-how and practical experience in designing sustainable reporting solutions. Our holistic approach addresses all these aspects and ensures sustainable, efficient compliance.',
    alert: {
      _type: 'object',
      title: 'Expert Tip',
      content: 'Fulfilling MiFID transparency requirements should not be viewed as an isolated compliance task. A strategically designed implementation can simultaneously contribute to optimizing trade execution and provide valuable business insights. Invest in a future-proof, scalable architecture that meets regulatory requirements while creating operational added value.'
    },
    points: [
      {
        _key: `point_${Date.now()}_1`,
        _type: 'object',
        text: 'Systematic implementation of all RTS 27/28 reporting obligations for trading venues and securities firms'
      },
      {
        _key: `point_${Date.now()}_2`,
        _type: 'object',
        text: 'Efficient data collection and processing for best execution quality reports'
      },
      {
        _key: `point_${Date.now()}_3`,
        _type: 'object',
        text: 'Automated solutions for continuous reporting and publication'
      },
      {
        _key: `point_${Date.now()}_4`,
        _type: 'object',
        text: 'Integration of transparency requirements into existing trading systems and data infrastructures'
      },
      {
        _key: `point_${Date.now()}_5`,
        _type: 'object',
        text: 'Sustainable governance structures to ensure lasting compliance'
      }
    ],
    serviceDescription: 'Our service offering includes complete support for implementing and continuously fulfilling MiFID transparency requirements under RTS 27 and 28 – from initial analysis through technical implementation to establishing sustainable reporting processes.',
    servicePoints: [
      {
        _key: `servicePoint_${Date.now()}_1`,
        _type: 'object',
        text: 'Detailed gap analysis and implementation planning for RTS 27/28 requirements'
      },
      {
        _key: `servicePoint_${Date.now()}_2`,
        _type: 'object',
        text: 'Design and implementation of efficient data collection and processing processes'
      },
      {
        _key: `servicePoint_${Date.now()}_3`,
        _type: 'object',
        text: 'Development and integration of automated reporting solutions'
      },
      {
        _key: `servicePoint_${Date.now()}_4`,
        _type: 'object',
        text: 'Establishment of robust data quality and validation mechanisms'
      },
      {
        _key: `servicePoint_${Date.now()}_5`,
        _type: 'object',
        text: 'Building sustainable governance structures for continuous compliance'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our Strengths',
      points: [
        {
          _key: `whyUs_${Date.now()}_1`,
          _type: 'object',
          text: 'Deep expertise in all aspects of MiFID transparency requirements and their practical implementation'
        },
        {
          _key: `whyUs_${Date.now()}_2`,
          _type: 'object',
          text: 'Extensive experience in implementing efficient data collection and reporting solutions'
        },
        {
          _key: `whyUs_${Date.now()}_3`,
          _type: 'object',
          text: 'Innovative technology approaches for automating complex reporting processes'
        },
        {
          _key: `whyUs_${Date.now()}_4`,
          _type: 'object',
          text: 'Holistic implementation approach that combines compliance, technical integration, and operational efficiency'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We follow a structured, phase-based approach to implementing MiFID transparency requirements under RTS 27/28, ensuring efficient implementation and sustainable compliance.',
    points: [
      {
        _key: `approach_${Date.now()}_1`,
        _type: 'object',
        text: 'Detailed gap analysis and requirements specification for RTS 27/28 compliance'
      },
      {
        _key: `approach_${Date.now()}_2`,
        _type: 'object',
        text: 'Design of efficient data collection and processing processes'
      },
      {
        _key: `approach_${Date.now()}_3`,
        _type: 'object',
        text: 'Technical implementation and integration into existing system landscape'
      },
      {
        _key: `approach_${Date.now()}_4`,
        _type: 'object',
        text: 'Comprehensive validation and quality assurance of reporting processes'
      },
      {
        _key: `approach_${Date.now()}_5`,
        _type: 'object',
        text: 'Establishment of sustainable governance and continuous improvement processes'
      }
    ]
  },
  services: [
    {
      _key: `service_${Date.now()}_1`,
      _type: 'object',
      title: 'Implementation of RTS 27 Reporting for Trading Venues',
      description: 'We support trading venues in the efficient implementation of all RTS 27 reporting obligations for execution quality.',
      features: [
        {
          _key: `serviceFeature_${Date.now()}_1`,
          _type: 'object',
          text: 'Design and implementation of data collection for all required metrics'
        },
        {
          _key: `serviceFeature_${Date.now()}_2`,
          _type: 'object',
          text: 'Development of automated data processing and aggregation processes'
        },
        {
          _key: `serviceFeature_${Date.now()}_3`,
          _type: 'object',
          text: 'Implementation of efficient publication mechanisms according to regulatory requirements'
        },
        {
          _key: `serviceFeature_${Date.now()}_4`,
          _type: 'object',
          text: 'Establishment of robust data quality and validation mechanisms'
        }
      ]
    },
    {
      _key: `service_${Date.now()}_2`,
      _type: 'object',
      title: 'Implementation of RTS 28 Best Execution Reporting',
      description: 'We support securities firms in the efficient implementation of all RTS 28 reporting obligations for best execution.',
      features: [
        {
          _key: `serviceFeature_${Date.now()}_5`,
          _type: 'object',
          text: 'Design and implementation of data collection for top 5 execution venues and quality'
        },
        {
          _key: `serviceFeature_${Date.now()}_6`,
          _type: 'object',
          text: 'Development of efficient processes for analyzing and evaluating execution quality'
        },
        {
          _key: `serviceFeature_${Date.now()}_7`,
          _type: 'object',
          text: 'Integration into existing best execution frameworks and trading systems'
        },
        {
          _key: `serviceFeature_${Date.now()}_8`,
          _type: 'object',
          text: 'Automated creation and publication of annual reports'
        }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'Implementing MiFID transparency requirements under RTS 27/28 offers financial institutions not only the opportunity to ensure regulatory compliance but also to modernize their data infrastructure and gain valuable insights into trading quality and efficiency. Our experience shows that a strategically designed implementation can generate significant added value beyond pure compliance.',
    name: 'Dr. Julia Müller',
    position: 'Senior Manager',
    company: 'ADVISORI FTC GmbH'
  },
  faq: []
}

async function createMifidRtsEnPage() {
  console.log('Creating MiFID RTS 27/28 EN page...')
  
  try {
    const result = await client.createOrReplace(mifidRtsEnPage)
    console.log('MiFID RTS 27/28 EN page created successfully:', result._id)
    return result
  } catch (error) {
    console.error('Error creating MiFID RTS 27/28 EN page:', error)
    throw error
  }
}

createMifidRtsEnPage()
