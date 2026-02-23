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

// English translation of KYC (Know Your Customer) page
// Source: kyc (German)
// Title: KYC (Know Your Customer)
// Parent: non-financial-risk
// Top Level Parent: risikomanagement
// 20 FAQs, 4 services

const kycEnPage = {
  _id: 'kyc-en',
  _type: 'servicePage',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _ref: 'kyc',
    _type: 'reference'
  },
  title: 'KYC (Know Your Customer)',
  slug: {
    _type: 'slug',
    current: 'risk-management/non-financial-risk/kyc-en'
  },
  parent: {
    _ref: 'non-financial-risk',
    _type: 'reference'
  },
  references: {
    _type: 'object',
    topLevelParent: {
      _ref: 'risikomanagement',
      _type: 'reference'
    }
  },
  seo: {
    _type: 'seo',
    title: 'KYC (Know Your Customer) | ADVISORI',
    description: 'Professional KYC consulting for your company. Optimize your customer identification processes, meet regulatory requirements, and minimize risks with our customized KYC solutions.',
    keywords: 'KYC, Know Your Customer, customer identification, anti-money laundering, AML, Customer Due Diligence, CDD, risk assessment, compliance, regulatory, identity verification'
  },
  heroSection: {
    _type: 'object',
    heading: 'KYC (Know Your Customer)',
    tagline: 'Efficient Compliance Solutions',
    description: 'Optimize your KYC processes, meet regulatory requirements, and minimize risks with our customized KYC solutions. Our experts support you in implementing efficient and AML-compliant KYC processes.',
    heroImage: {
      _type: 'image',
      alt: 'KYC (Know Your Customer) - Professional Consulting for Your Company',
      asset: {
        _ref: 'image-88620cd67ae6797e9f92ec838be2237b98f2d0dd-1024x768-jpg',
        _type: 'reference'
      }
    },
    benefits: [
      {
        _key: `benefit_${timestamp}_1`,
        _type: 'object',
        text: 'Ensure regulatory compliance'
      },
      {
        _key: `benefit_${timestamp}_2`,
        _type: 'object',
        text: 'Minimize risks and prevent fraud'
      },
      {
        _key: `benefit_${timestamp}_3`,
        _type: 'object',
        text: 'Improve customer experience'
      },
      {
        _key: `benefit_${timestamp}_4`,
        _type: 'object',
        text: 'Increase process efficiency'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'KYC Solutions for Modern Enterprises',
    description: 'In today\'s demanding regulatory environment, effective KYC management is crucial for business success. Our KYC consulting helps you meet regulatory requirements while optimizing your business processes.',
    alert: {
      title: 'Did You Know?',
      content: 'A modern KYC framework combines automated risk detection, seamless customer journeys, and continuous monitoring – creating regulatory security, excellent customer experiences, and sustainable efficiency gains.'
    },
    additionalInfo: 'KYC (Know Your Customer) is a fundamental process for identifying and verifying customer identity. In Germany, this process is regulated by the Anti-Money Laundering Act (GwG) and BaFin guidelines. An effective KYC system includes Customer Identification Program (CIP), Customer Due Diligence (CDD), and continuous monitoring.',
    serviceDescription: 'Our KYC consulting services include analyzing existing processes, developing customized KYC strategies, implementing technological solutions, and training your employees. We help you meet regulatory requirements while optimizing your business processes.',
    points: [
      {
        _key: `point_${timestamp}_1`,
        _type: 'object',
        text: 'Comprehensive KYC process analysis and optimization'
      },
      {
        _key: `point_${timestamp}_2`,
        _type: 'object',
        text: 'Implementation of risk-based KYC approaches'
      },
      {
        _key: `point_${timestamp}_3`,
        _type: 'object',
        text: 'Integration of modern KYC technologies'
      },
      {
        _key: `point_${timestamp}_4`,
        _type: 'object',
        text: 'Training and development of your employees'
      }
    ],
    servicePoints: [
      {
        _key: `servicePoint_${timestamp}_1`,
        _type: 'object',
        text: 'Analysis and optimization of your KYC processes'
      },
      {
        _key: `servicePoint_${timestamp}_2`,
        _type: 'object',
        text: 'Implementation of risk-based KYC approaches'
      },
      {
        _key: `servicePoint_${timestamp}_3`,
        _type: 'object',
        text: 'Integration of modern KYC technologies'
      },
      {
        _key: `servicePoint_${timestamp}_4`,
        _type: 'object',
        text: 'Training and development of your employees'
      },
      {
        _key: `servicePoint_${timestamp}_5`,
        _type: 'object',
        text: 'Continuous monitoring and optimization'
      }
    ],
    whyUs: {
      title: 'Our Strengths',
      points: [
        {
          _key: `whyUs_${timestamp}_1`,
          _type: 'object',
          text: 'Deep expertise in German Anti-Money Laundering Act (GwG) and EU directives'
        },
        {
          _key: `whyUs_${timestamp}_2`,
          _type: 'object',
          text: 'Experience with leading KYC technologies and platforms'
        },
        {
          _key: `whyUs_${timestamp}_3`,
          _type: 'object',
          text: 'Proven track record in optimizing KYC processes'
        },
        {
          _key: `whyUs_${timestamp}_4`,
          _type: 'object',
          text: 'Holistic approach combining compliance, efficiency, and customer experience'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We pursue a holistic, risk-based approach to KYC that balances compliance, efficiency, and customer experience. Our methodology is based on proven practices and is continuously adapted to changing regulatory requirements.',
    points: [
      {
        _key: `approach_${timestamp}_1`,
        _type: 'object',
        text: 'Analysis: Assessment of your current KYC processes, identification of weaknesses and optimization potential'
      },
      {
        _key: `approach_${timestamp}_2`,
        _type: 'object',
        text: 'Strategy: Development of a customized KYC strategy based on your specific requirements and risk profile'
      },
      {
        _key: `approach_${timestamp}_3`,
        _type: 'object',
        text: 'Implementation: Execution of optimized KYC processes and integration of technological solutions'
      },
      {
        _key: `approach_${timestamp}_4`,
        _type: 'object',
        text: 'Training: Comprehensive training of your employees on new processes and technologies'
      },
      {
        _key: `approach_${timestamp}_5`,
        _type: 'object',
        text: 'Monitoring: Continuous monitoring and optimization of KYC processes'
      }
    ]
  },
  services: [
    {
      _key: `service_${timestamp}_1`,
      _type: 'object',
      title: 'KYC Process Analysis and Optimization',
      description: 'We analyze your existing KYC processes, identify weaknesses and optimization potential, and develop customized solutions to improve efficiency and compliance.',
      features: [
        {
          _key: `serviceFeature_${timestamp}_1`,
          _type: 'object',
          text: 'Comprehensive analysis of existing KYC processes'
        },
        {
          _key: `serviceFeature_${timestamp}_2`,
          _type: 'object',
          text: 'Identification of weaknesses and optimization potential'
        },
        {
          _key: `serviceFeature_${timestamp}_3`,
          _type: 'object',
          text: 'Development of customized process optimizations'
        },
        {
          _key: `serviceFeature_${timestamp}_4`,
          _type: 'object',
          text: 'Implementation of efficient workflows and controls'
        }
      ]
    },
    {
      _key: `service_${timestamp}_2`,
      _type: 'object',
      title: 'Implementation of Risk-Based KYC Approaches',
      description: 'We support you in developing and implementing a risk-based KYC approach that meets compliance requirements while increasing efficiency.',
      features: [
        {
          _key: `serviceFeature_${timestamp}_5`,
          _type: 'object',
          text: 'Development of a multi-dimensional risk assessment model'
        },
        {
          _key: `serviceFeature_${timestamp}_6`,
          _type: 'object',
          text: 'Definition of risk categories and corresponding due diligence measures'
        },
        {
          _key: `serviceFeature_${timestamp}_7`,
          _type: 'object',
          text: 'Implementation of an efficient risk management framework'
        },
        {
          _key: `serviceFeature_${timestamp}_8`,
          _type: 'object',
          text: 'Continuous optimization of the risk assessment model'
        }
      ]
    },
    {
      _key: `service_${timestamp}_3`,
      _type: 'object',
      title: 'KYC Technology Consulting and Implementation',
      description: 'We advise you on the selection and implementation of modern KYC technologies that automate and optimize your processes.',
      features: [
        {
          _key: `serviceFeature_${timestamp}_9`,
          _type: 'object',
          text: 'Evaluation and selection of suitable KYC technologies'
        },
        {
          _key: `serviceFeature_${timestamp}_10`,
          _type: 'object',
          text: 'Implementation of AI-powered solutions for document analysis'
        },
        {
          _key: `serviceFeature_${timestamp}_11`,
          _type: 'object',
          text: 'Integration of API interfaces to public registers'
        },
        {
          _key: `serviceFeature_${timestamp}_12`,
          _type: 'object',
          text: 'Implementation of digital identity verification solutions'
        }
      ]
    },
    {
      _key: `service_${timestamp}_4`,
      _type: 'object',
      title: 'KYC Training and Development',
      description: 'We offer comprehensive training and development programs for your employees to ensure they can effectively implement KYC processes.',
      features: [
        {
          _key: `serviceFeature_${timestamp}_13`,
          _type: 'object',
          text: 'Development of customized training programs'
        },
        {
          _key: `serviceFeature_${timestamp}_14`,
          _type: 'object',
          text: 'Conducting workshops and trainings'
        },
        {
          _key: `serviceFeature_${timestamp}_15`,
          _type: 'object',
          text: 'Creation of training materials and guides'
        },
        {
          _key: `serviceFeature_${timestamp}_16`,
          _type: 'object',
          text: 'Regular refresher courses and updates'
        }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'An effective KYC system is more than just a regulatory requirement today – it\'s a strategic advantage. By optimizing your KYC processes, you can not only minimize compliance risks but also improve customer experience and reduce operational costs.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI FTC GmbH'
  },
  faq: []
}

export async function createKycEn() {
  console.log('Creating KYC (Know Your Customer) English page...')
  
  const result = await client.createOrReplace(kycEnPage)
  console.log(`Created/Updated page: ${result._id}`)
  
  return result
}

createKycEn().catch(console.error)
