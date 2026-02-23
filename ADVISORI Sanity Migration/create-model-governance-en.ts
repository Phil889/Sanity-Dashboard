import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

const modelGovernanceEn = {
  _id: 'model-governance-en',
  _type: 'servicePage',
  title: 'Model Governance',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'model-governance'
  },
  slug: {
    _type: 'slug',
    current: 'risk-management/financial-risk/model-governance-en'
  },
  parent: {
    _ref: 'financial-risk',
    _type: 'reference'
  },
  topLevelParent: {
    _ref: 'risikomanagement',
    _type: 'reference'
  },
  heroSection: {
    _type: 'object',
    tagline: 'Sustainable Model Governance and Monitoring',
    heading: 'Model Governance',
    description: 'Develop robust Model Governance frameworks that ensure systematic monitoring, validation, and control of your business-critical models throughout their entire lifecycle. Our holistic solutions combine regulatory compliance with operational efficiency and support you in minimizing model risks while maximizing the business value of your models.',
    heroImage: {
      _type: 'image',
      alt: 'Model Governance',
      asset: {
        _ref: 'image-88620cd67ae6797e9f92ec838be2237b98f2d0dd-1024x768-jpg',
        _type: 'reference'
      }
    },
    benefits: [
      {
        _key: `benefit_${Date.now()}_1`,
        _type: 'object',
        text: 'Minimization of model risks through systematic governance'
      },
      {
        _key: `benefit_${Date.now()}_2`,
        _type: 'object',
        text: 'Enhancement of model quality and performance'
      },
      {
        _key: `benefit_${Date.now()}_3`,
        _type: 'object',
        text: 'Ensuring regulatory compliance'
      },
      {
        _key: `benefit_${Date.now()}_4`,
        _type: 'object',
        text: 'Optimized resource allocation for model development and maintenance'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'Holistic Model Governance for Future-Proof Risk Management',
    description: 'The increasing complexity and proliferation of models for business-critical decisions requires systematic governance processes. An effective Model Governance framework provides the necessary structure to identify, assess, and manage model risks – from concept through development to deployment and decommissioning of models. This not only ensures compliance with regulatory requirements but also enhances the quality, transparency, and reliability of your decision-making processes.',
    points: [
      {
        _key: `point_${Date.now()}_1`,
        _type: 'object',
        text: 'Development of customized Model Governance frameworks'
      },
      {
        _key: `point_${Date.now()}_2`,
        _type: 'object',
        text: 'Implementation of effective validation processes'
      },
      {
        _key: `point_${Date.now()}_3`,
        _type: 'object',
        text: 'Establishment of systematic model monitoring'
      },
      {
        _key: `point_${Date.now()}_4`,
        _type: 'object',
        text: 'Integration of AI-specific governance elements'
      },
      {
        _key: `point_${Date.now()}_5`,
        _type: 'object',
        text: 'Optimization of model reporting processes'
      }
    ],
    alert: {
      _type: 'object',
      title: 'Expert Tip',
      content: 'An integrated Model Governance framework pays off multiple times: It not only reduces direct model risks by an average of 65%, but also increases model performance by up to 40% and shortens time-to-market for new models by approximately 30%. Particularly effective is the establishment of a central Model Inventory with automated documentation and monitoring of model performance.'
    },
    additionalInfo: 'Studies show that companies with mature Model Governance processes make 45% fewer model-related wrong decisions and have up to 35% lower compliance costs. At the same time, they increase their innovation capability, as new models can be implemented faster and more safely.',
    serviceDescription: 'Our Model Governance offering encompasses the conception, implementation, and optimization of holistic governance frameworks for all types of risk and decision models. We help you effectively manage the entire model lifecycle – from initial development through validation and monitoring to systematic enhancement or decommissioning of models.',
    servicePoints: [
      {
        _key: `servicePoint_${Date.now()}_1`,
        _type: 'object',
        text: 'Analysis of existing model landscape and governance processes'
      },
      {
        _key: `servicePoint_${Date.now()}_2`,
        _type: 'object',
        text: 'Development of customized Model Governance frameworks'
      },
      {
        _key: `servicePoint_${Date.now()}_3`,
        _type: 'object',
        text: 'Conception and implementation of validation procedures'
      },
      {
        _key: `servicePoint_${Date.now()}_4`,
        _type: 'object',
        text: 'Establishment of model monitoring and reporting processes'
      },
      {
        _key: `servicePoint_${Date.now()}_5`,
        _type: 'object',
        text: 'Integration of AI-specific governance elements'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our Strengths',
      points: [
        {
          _key: `whyUs_${Date.now()}_1`,
          _type: 'object',
          text: 'Comprehensive expertise in regulatory requirements and international standards'
        },
        {
          _key: `whyUs_${Date.now()}_2`,
          _type: 'object',
          text: 'Practical experience with Model Governance implementation across various industries'
        },
        {
          _key: `whyUs_${Date.now()}_3`,
          _type: 'object',
          text: 'Combination of methodological knowledge with pragmatic solution approaches'
        },
        {
          _key: `whyUs_${Date.now()}_4`,
          _type: 'object',
          text: 'Specialized competence for AI-specific governance challenges'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We pursue a systematic, phase-oriented approach to develop and implement customized Model Governance frameworks. Our proven methodology considers both regulatory requirements and the specific characteristics of your model landscape and organizational circumstances.',
    points: [
      {
        _key: `approach_${Date.now()}_1`,
        _type: 'object',
        text: 'Phase 1: Analysis & Assessment - Inventory of existing models, processes, and governance structures as well as identification of gaps and improvement potentials'
      },
      {
        _key: `approach_${Date.now()}_2`,
        _type: 'object',
        text: 'Phase 2: Conception - Development of a customized Model Governance framework including roles, responsibilities, processes, and documentation standards'
      },
      {
        _key: `approach_${Date.now()}_3`,
        _type: 'object',
        text: 'Phase 3: Implementation - Gradual introduction of governance components, employee training, and establishment of required committees and control processes'
      },
      {
        _key: `approach_${Date.now()}_4`,
        _type: 'object',
        text: 'Phase 4: Validation & Quality Assurance - Development and implementation of robust validation methods and quality assurance processes for all relevant model types'
      },
      {
        _key: `approach_${Date.now()}_5`,
        _type: 'object',
        text: 'Phase 5: Continuous Optimization - Establishment of processes for ongoing monitoring, assessment, and enhancement of Model Governance'
      }
    ]
  },
  services: [
    {
      _key: `service_${Date.now()}_1`,
      _type: 'object',
      title: 'Model Governance Framework',
      description: 'Development and implementation of holistic Model Governance frameworks covering all aspects of the model lifecycle – from conception and development through validation and deployment to enhancement or decommissioning of models.',
      features: [
        {
          _key: `serviceFeature_${Date.now()}_1`,
          _type: 'object',
          text: 'Customized governance structures and processes'
        },
        {
          _key: `serviceFeature_${Date.now()}_2`,
          _type: 'object',
          text: 'Definition of roles, responsibilities, and committees'
        },
        {
          _key: `serviceFeature_${Date.now()}_3`,
          _type: 'object',
          text: 'Development of policies, standards, and guidelines'
        },
        {
          _key: `serviceFeature_${Date.now()}_4`,
          _type: 'object',
          text: 'Integration into existing risk management and decision processes'
        }
      ]
    },
    {
      _key: `service_${Date.now()}_2`,
      _type: 'object',
      title: 'Model Validation',
      description: 'Conception and implementation of methodologically sound validation processes that ensure the conceptual appropriateness, technical correctness, and operational performance of your models – both for initial validation and regular follow-up validations.',
      features: [
        {
          _key: `serviceFeature_${Date.now()}_5`,
          _type: 'object',
          text: 'Development of model-specific validation methods'
        },
        {
          _key: `serviceFeature_${Date.now()}_6`,
          _type: 'object',
          text: 'Conceptual, methodological, and procedural validation'
        },
        {
          _key: `serviceFeature_${Date.now()}_7`,
          _type: 'object',
          text: 'Backtesting and performance analyses'
        },
        {
          _key: `serviceFeature_${Date.now()}_8`,
          _type: 'object',
          text: 'Benchmarking and comparative analyses'
        }
      ]
    },
    {
      _key: `service_${Date.now()}_3`,
      _type: 'object',
      title: 'Model Monitoring & Reporting',
      description: 'Establishment of systematic monitoring and reporting processes that ensure continuous assessment of model performance, early detection of model weaknesses, and transparent reporting to relevant stakeholders.',
      features: [
        {
          _key: `serviceFeature_${Date.now()}_9`,
          _type: 'object',
          text: 'Development of Key Performance Indicators (KPIs) for models'
        },
        {
          _key: `serviceFeature_${Date.now()}_10`,
          _type: 'object',
          text: 'Implementation of automated monitoring systems'
        },
        {
          _key: `serviceFeature_${Date.now()}_11`,
          _type: 'object',
          text: 'Conception of meaningful management reports'
        },
        {
          _key: `serviceFeature_${Date.now()}_12`,
          _type: 'object',
          text: 'Integration of early warning indicators for model weaknesses'
        }
      ]
    },
    {
      _key: `service_${Date.now()}_4`,
      _type: 'object',
      title: 'AI-Specific Governance',
      description: 'Development of specialized governance approaches for AI and Machine Learning models that consider their particular characteristics such as black-box issues, continuous learning, or bias risks and ensure responsible AI usage.',
      features: [
        {
          _key: `serviceFeature_${Date.now()}_13`,
          _type: 'object',
          text: 'Transparency and explainability standards for AI models'
        },
        {
          _key: `serviceFeature_${Date.now()}_14`,
          _type: 'object',
          text: 'Bias identification and minimization'
        },
        {
          _key: `serviceFeature_${Date.now()}_15`,
          _type: 'object',
          text: 'Special validation methods for Machine Learning models'
        },
        {
          _key: `serviceFeature_${Date.now()}_16`,
          _type: 'object',
          text: 'Ethical guidelines and responsibility principles for AI'
        }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'Model Governance is far more than a regulatory obligation – it is a strategic lever to ensure the quality, transparency, and reliability of model-based decisions. A well-designed governance framework creates the balance between methodological rigor and practical applicability, thereby forming the foundation for responsible innovation in the field of modeling.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI DE'
  },
  seo: {
    _type: 'seo',
    title: 'Model Governance | ADVISORI',
    description: 'Effective Model Governance frameworks for sustainable management and monitoring of risk models. Ensure the quality, compliance, and business value of your models throughout their entire lifecycle.',
    keywords: 'Model Governance, Model Risk Management, Model Validation, Model Monitoring, Model Catalog, Model Documentation, Model Development, Regulatory Compliance, Risk Models, Quality Assurance'
  },
  faq: []
}

async function createModelGovernanceEn() {
  console.log('Creating Model Governance EN page...')
  
  try {
    const result = await client.createOrReplace(modelGovernanceEn)
    console.log('Model Governance EN page created successfully:', result._id)
    return result
  } catch (error) {
    console.error('Error creating Model Governance EN page:', error)
    throw error
  }
}

createModelGovernanceEn().catch(console.error)
