import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import * as path from 'path'

// Import FAQ batches
import { faqsBatch1 } from './modellentwicklung-en-faqs-batch1'
import { faqsBatch2 } from './modellentwicklung-en-faqs-batch2'
import { faqsBatch3 } from './modellentwicklung-en-faqs-batch3'
import { faqsBatch4 } from './modellentwicklung-en-faqs-batch4'

dotenv.config({ path: path.resolve(__dirname, '.env') })

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'wwmm9rbb',
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
})

// Modellentwicklung EN - Main Document
const modellentwicklungEnDocument = {
  _id: 'modellentwicklung-en',
  _type: 'servicePage',
  title: 'Model Development',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'modellentwicklung'
  },
  slug: {
    _type: 'slug',
    current: 'risk-management/financial-risk/model-development-en'
  },
  parent: {
    _ref: 'financial-risk',
    _type: 'reference'
  },
  seo: {
    _type: 'seo',
    title: 'Model Development | ADVISORI',
    description: 'Customized development, validation, and optimization of risk models for financial institutions and companies. Benefit from our expertise in risk modeling and quantitative methods.',
    keywords: 'Model Development, Risk Models, Credit Risk Models, Market Price Risk Models, Liquidity Risk Models, Operational Risk Models, Quantitative Modeling, Statistical Models, PD Models, LGD Models, EAD Models, Validation'
  },
  heroSection: {
    _type: 'object',
    heading: 'Model Development',
    tagline: 'Precise Risk Modeling for Informed Decisions',
    description: 'Our customized modeling solutions combine statistical expertise, industry knowledge, and advanced technologies. We develop, validate, and optimize risk models that not only meet regulatory requirements but also serve as strategic tools for value-oriented business decisions.',
    heroImage: {
      _type: 'image',
      alt: 'Model Development',
      asset: {
        _ref: 'image-88620cd67ae6797e9f92ec838be2237b98f2d0dd-1024x768-jpg',
        _type: 'reference'
      }
    },
    benefits: [
      {
        _key: `benefit_modellentwicklung_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Customized models for your specific risk profiles'
      },
      {
        _key: `benefit_modellentwicklung_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Optimized Risk-Weighted Assets (RWA) and capital allocation'
      },
      {
        _key: `benefit_modellentwicklung_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Sound risk assessment for better business decisions'
      },
      {
        _key: `benefit_modellentwicklung_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Complete regulatory compliance and transparency'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'Holistic Model Development for Differentiated Risk Management',
    description: 'The increasing complexity of risk management requires differentiated, precise, and at the same time practically applicable models. Our expertise in model development encompasses the entire lifecycle – from conceptual design through statistical implementation to continuous validation and further development. We combine advanced mathematical methods with sound domain knowledge and practical application competence.',
    additionalInfo: 'According to a recent study, optimized risk models can reduce risk-weighted assets (RWA) by 8-15% without worsening the actual risk profile. At the same time, the forecast accuracy of default probabilities increases by an average of 25%, leading to more precise risk assessments and more informed business decisions.',
    alert: {
      title: 'Expert Tip',
      content: 'Combining classical statistical methods with modern machine learning approaches can improve the forecast accuracy of risk models by up to 35%. Especially in identifying non-linear relationships and complex interaction effects, hybrid models show clear advantages over purely traditional approaches.'
    },
    points: [
      {
        _key: `point_modellentwicklung_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Development of statistically sound and methodologically robust risk models'
      },
      {
        _key: `point_modellentwicklung_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Integration of traditional and innovative modeling approaches'
      },
      {
        _key: `point_modellentwicklung_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Comprehensive validation and continuous optimization'
      },
      {
        _key: `point_modellentwicklung_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Documentation and implementation support'
      },
      {
        _key: `point_modellentwicklung_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Training and knowledge transfer for sustainable model use'
      }
    ],
    serviceDescription: 'Our model development offering encompasses the conception, implementation, validation, and optimization of various risk model types. We support you in developing methodologically robust and regulatory-compliant models that are simultaneously practical in application and deliver measurable added value for your business processes.',
    servicePoints: [
      {
        _key: `servicePoint_modellentwicklung_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Conception of individual modeling approaches based on your specific requirements'
      },
      {
        _key: `servicePoint_modellentwicklung_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Data analysis, preparation, and feature engineering'
      },
      {
        _key: `servicePoint_modellentwicklung_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Statistical implementation and calibration of models'
      },
      {
        _key: `servicePoint_modellentwicklung_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Comprehensive validation and documentation'
      },
      {
        _key: `servicePoint_modellentwicklung_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Implementation support and knowledge transfer'
      }
    ],
    whyUs: {
      title: 'Our Strengths',
      points: [
        {
          _key: `whyUs_modellentwicklung_en_${Date.now()}_1`,
          _type: 'object',
          text: 'Comprehensive expertise in classical statistical methods and innovative modeling techniques'
        },
        {
          _key: `whyUs_modellentwicklung_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Sound understanding of regulatory requirements and best practices'
        },
        {
          _key: `whyUs_modellentwicklung_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Proven success in optimizing risk models and RWA reduction'
        },
        {
          _key: `whyUs_modellentwicklung_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Practice-oriented approach with focus on applicability and added value'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We pursue a structured yet flexible approach to model development that ensures both methodological rigor and practical applicability. Our proven methodology ensures that your models are not only statistically sound but also optimally tailored to your individual requirements.',
    points: [
      {
        _key: `approach_modellentwicklung_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Phase 1: Requirements Analysis & Conception - Identification of specific requirements, data availability, and suitable modeling approaches'
      },
      {
        _key: `approach_modellentwicklung_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Phase 2: Data Preparation & Analysis - Careful preparation, quality assurance, and exploratory analysis of model data'
      },
      {
        _key: `approach_modellentwicklung_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Phase 3: Model Development - Iterative implementation, calibration, and optimization of the model considering statistical and professional criteria'
      },
      {
        _key: `approach_modellentwicklung_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Phase 4: Validation - Rigorous examination of conceptual appropriateness, methodological implementation, and empirical performance'
      },
      {
        _key: `approach_modellentwicklung_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Phase 5: Implementation & Knowledge Transfer - Support with integration into existing systems and processes as well as comprehensive knowledge transfer'
      }
    ]
  },
  services: [
    {
      _key: `service_modellentwicklung_en_${Date.now()}_1`,
      _type: 'object',
      title: 'Credit Risk Models',
      description: 'Development and optimization of advanced models for measuring, quantifying, and managing credit risks. Our solutions encompass both parameter and portfolio models and consider regulatory requirements as well as economic objectives.',
      features: [
        {
          _key: `serviceFeature_modellentwicklung_en_${Date.now()}_1`,
          _type: 'object',
          text: 'PD Models (Probability of Default) for various exposure classes'
        },
        {
          _key: `serviceFeature_modellentwicklung_en_${Date.now()}_2`,
          _type: 'object',
          text: 'LGD Models (Loss Given Default) with differentiated collateral valuations'
        },
        {
          _key: `serviceFeature_modellentwicklung_en_${Date.now()}_3`,
          _type: 'object',
          text: 'EAD Models (Exposure at Default) with precise CCF modeling'
        },
        {
          _key: `serviceFeature_modellentwicklung_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Integrated credit portfolio models and concentration risk analyses'
        }
      ]
    },
    {
      _key: `service_modellentwicklung_en_${Date.now()}_2`,
      _type: 'object',
      title: 'Market Price Risk Models',
      description: 'Conception and implementation of differentiated models for quantifying market price risks. We develop solutions that are optimally suited for both regulatory reporting and internal risk management.',
      features: [
        {
          _key: `serviceFeature_modellentwicklung_en_${Date.now()}_5`,
          _type: 'object',
          text: 'Value-at-Risk (VaR) and Expected Shortfall models'
        },
        {
          _key: `serviceFeature_modellentwicklung_en_${Date.now()}_6`,
          _type: 'object',
          text: 'Sensitivity analyses and stress tests'
        },
        {
          _key: `serviceFeature_modellentwicklung_en_${Date.now()}_7`,
          _type: 'object',
          text: 'Interest rate risk models for banking and trading books'
        },
        {
          _key: `serviceFeature_modellentwicklung_en_${Date.now()}_8`,
          _type: 'object',
          text: 'Advanced models for non-linear risks and volatility clusters'
        }
      ]
    },
    {
      _key: `service_modellentwicklung_en_${Date.now()}_3`,
      _type: 'object',
      title: 'Liquidity Risk Models',
      description: 'Development and validation of quantitative models for measuring and managing liquidity risks. Our solutions encompass both short-term liquidity forecasts and structural liquidity analyses.',
      features: [
        {
          _key: `serviceFeature_modellentwicklung_en_${Date.now()}_9`,
          _type: 'object',
          text: 'Cash flow forecast models and gap analyses'
        },
        {
          _key: `serviceFeature_modellentwicklung_en_${Date.now()}_10`,
          _type: 'object',
          text: 'Modeling of payment flows under stress'
        },
        {
          _key: `serviceFeature_modellentwicklung_en_${Date.now()}_11`,
          _type: 'object',
          text: 'LCR and NSFR forecast models'
        },
        {
          _key: `serviceFeature_modellentwicklung_en_${Date.now()}_12`,
          _type: 'object',
          text: 'Liquidity buffer optimization models'
        }
      ]
    },
    {
      _key: `service_modellentwicklung_en_${Date.now()}_4`,
      _type: 'object',
      title: 'AI-based Risk Models',
      description: 'Use of innovative machine learning and AI technologies for more precise and differentiated risk modeling. We develop advanced models that can capture complex, non-linear relationships without sacrificing transparency and explainability.',
      features: [
        {
          _key: `serviceFeature_modellentwicklung_en_${Date.now()}_13`,
          _type: 'object',
          text: 'Gradient Boosting and Random Forest for high-dimensional problems'
        },
        {
          _key: `serviceFeature_modellentwicklung_en_${Date.now()}_14`,
          _type: 'object',
          text: 'Neural networks for complex patterns in financial data'
        },
        {
          _key: `serviceFeature_modellentwicklung_en_${Date.now()}_15`,
          _type: 'object',
          text: 'Explainable AI approaches for transparency and traceability'
        },
        {
          _key: `serviceFeature_modellentwicklung_en_${Date.now()}_16`,
          _type: 'object',
          text: 'Hybrid models combining classical and ML approaches'
        }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'Successful risk modeling is far more than the mere application of statistical methods – it is the art of recognizing complex relationships, mapping them in a coherent mathematical framework, and at the same time making them practical. Only when these three dimensions are optimally balanced does a model emerge that is both analytically robust and commercially valuable.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI DE'
  },
  faq: [
    ...faqsBatch1,
    ...faqsBatch2,
    ...faqsBatch3,
    ...faqsBatch4
  ]
}

async function createModellentwicklungEn() {
  console.log('Creating Modellentwicklung EN document...')
  
  try {
    // Check if document already exists
    const existingDoc = await client.fetch(`*[_id == $id][0]`, { id: 'modellentwicklung-en' })
    
    if (existingDoc) {
      console.log('Document already exists. Deleting and recreating...')
      await client.delete('modellentwicklung-en')
    }
    
    // Create the document
    const result = await client.create(modellentwicklungEnDocument)
    
    console.log('✅ Successfully created Modellentwicklung EN document')
    console.log(`Document ID: ${result._id}`)
    console.log(`Title: ${result.title}`)
    console.log(`Language: ${result.language}`)
    console.log(`Slug: ${result.slug.current}`)
    console.log(`FAQs: ${result.faq.length}`)
    console.log(`Services: ${result.services.length}`)
    
  } catch (error) {
    console.error('Error creating document:', error)
  }
}

// Run the script
createModellentwicklungEn()
