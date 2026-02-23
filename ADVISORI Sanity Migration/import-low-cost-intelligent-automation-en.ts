// Import script for Low-Cost Intelligent Automation - English Translation
// Source: low-cost-intelligent-automation (German)
// Target: low-cost-intelligent-automation-en (English)

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
})

// Import FAQ batches
import { lowCostIntelligentAutomationEnFaqsBatch1 } from './low-cost-intelligent-automation-en-faqs-batch1'
import { lowCostIntelligentAutomationEnFaqsBatch2 } from './low-cost-intelligent-automation-en-faqs-batch2'
import { lowCostIntelligentAutomationEnFaqsBatch3 } from './low-cost-intelligent-automation-en-faqs-batch3'
import { lowCostIntelligentAutomationEnFaqsBatch4 } from './low-cost-intelligent-automation-en-faqs-batch4'
import { lowCostIntelligentAutomationEnFaqsBatch5 } from './low-cost-intelligent-automation-en-faqs-batch5'

// Combine all FAQ batches
const allFaqs = [
  ...lowCostIntelligentAutomationEnFaqsBatch1,
  ...lowCostIntelligentAutomationEnFaqsBatch2,
  ...lowCostIntelligentAutomationEnFaqsBatch3,
  ...lowCostIntelligentAutomationEnFaqsBatch4,
  ...lowCostIntelligentAutomationEnFaqsBatch5,
]

const lowCostIntelligentAutomationEnDocument = {
  _id: 'low-cost-intelligent-automation-en',
  _type: 'servicePage',
  title: 'Low-Cost Intelligent Automation',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'low-cost-intelligent-automation'
  },
  slug: {
    _type: 'slug',
    current: 'digital-transformation/process-automation/intelligent-automation/low-cost-intelligent-automation-en'
  },
  parent: {
    _type: 'reference',
    _ref: 'intelligent-automation'
  },
  references: {
    _type: 'object',
    topLevelParent: {
      _type: 'reference',
      _ref: 'digitale-transformation'
    }
  },
  seo: {
    _type: 'seo',
    title: 'Low-Cost Intelligent Automation - Budget-Friendly AI Automation & RPA | ADVISORI',
    description: 'Cost-effective Intelligent Automation solutions for SMEs and enterprises. Budget-optimized RPA, AI integration, lean automation, ROI-focused implementation, and EU AI Act compliant low-cost automation strategies.',
    keywords: 'Low-Cost Intelligent Automation, Budget RPA, Cost-Effective Automation, Affordable AI Solutions, SME Automation, ROI Optimization, Lean Automation, Budget AI Integration, Cost-Effective Process Automation'
  },
  heroSection: {
    _type: 'object',
    heading: 'Low-Cost Intelligent Automation',
    tagline: 'Budget-Optimized Intelligent Automation for Maximum ROI',
    description: 'Low-Cost Intelligent Automation democratizes enterprise-grade automation technologies through innovative budget optimization and strategic resource allocation. We transform cost-intensive automation projects into accessible, ROI-focused solutions that enable even smaller companies and budget-conscious organizations to harness the full power of intelligent automation – without compromises on quality or EU AI Act compliance.',
    heroImage: {
      _type: 'image',
      alt: 'Low-Cost Intelligent Automation - Budget-friendly AI-powered automation solutions for maximum ROI'
    },
    benefits: [
      {
        _key: 'benefit_en_1739456789001_1',
        _type: 'object',
        text: 'Budget-optimized RPA and AI integration with maximum cost efficiency'
      },
      {
        _key: 'benefit_en_1739456789001_2',
        _type: 'object',
        text: 'Lean automation methodologies for rapid ROI realization'
      },
      {
        _key: 'benefit_en_1739456789001_3',
        _type: 'object',
        text: 'Scalable low-cost solutions for SME and enterprise budgets'
      },
      {
        _key: 'benefit_en_1739456789001_4',
        _type: 'object',
        text: 'EU AI Act compliant implementation without premium costs'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'Low-Cost Intelligent Automation - Accessible Enterprise Automation for Every Budget',
    description: 'Low-Cost Intelligent Automation revolutionizes the accessibility of advanced automation technologies through innovative cost optimization and strategic implementation approaches. We prove that enterprise-grade Intelligent Automation does not necessarily require high investments, but can be realized with limited budgets through clever technology selection, lean methodologies, and phased implementation.',
    additionalInfo: 'Low-Cost Intelligent Automation makes advanced automation technologies accessible to organizations of all sizes. Through strategic cost optimization and innovative implementation approaches, we democratize enterprise-grade automation.',
    serviceDescription: 'Our Low-Cost Intelligent Automation service transforms budget constraints into strategic advantages through innovative cost optimization, lean methodologies, and phased implementation. We develop customized budget solutions that achieve maximum automation impact with minimal investments.',
    alert: {
      title: 'Low-Cost does not mean Low-Quality at ADVISORI',
      content: 'Our Low-Cost Intelligent Automation solutions offer enterprise-grade quality and functionality through intelligent cost optimization, not through quality compromises.'
    },
    points: [
      {
        _key: 'point_en_1739456789001_1',
        _type: 'object',
        text: 'Budget-optimized technology selection combines open-source tools with cost-effective commercial solutions'
      },
      {
        _key: 'point_en_1739456789001_2',
        _type: 'object',
        text: 'Lean automation methodologies focus on quick wins and iterative value creation'
      },
      {
        _key: 'point_en_1739456789001_3',
        _type: 'object',
        text: 'Phased implementation enables gradual investments with continuous ROI validation'
      },
      {
        _key: 'point_en_1739456789001_4',
        _type: 'object',
        text: 'Cloud-native architectures reduce infrastructure costs and maintenance efforts'
      },
      {
        _key: 'point_en_1739456789001_5',
        _type: 'object',
        text: 'EU AI Act compliance is cost-effectively ensured through integrated governance frameworks'
      }
    ],
    servicePoints: [
      {
        _key: 'servicePoint_en_1739456789001_1',
        _type: 'object',
        text: 'Budget assessment and ROI-optimized automation strategies'
      },
      {
        _key: 'servicePoint_en_1739456789001_2',
        _type: 'object',
        text: 'Cost-effective technology selection and open-source integration'
      },
      {
        _key: 'servicePoint_en_1739456789001_3',
        _type: 'object',
        text: 'Lean implementation with quick wins and iterative value creation'
      },
      {
        _key: 'servicePoint_en_1739456789001_4',
        _type: 'object',
        text: 'Cloud-native architectures for minimal infrastructure costs'
      },
      {
        _key: 'servicePoint_en_1739456789001_5',
        _type: 'object',
        text: 'Budget-friendly EU AI Act compliance and governance'
      }
    ],
    whyUs: {
      title: 'Why Low-Cost Intelligent Automation with ADVISORI',
      points: [
        {
          _key: 'whyUs_en_1739456789001_1',
          _type: 'object',
          text: 'Proven budget optimization strategies for maximum cost efficiency'
        },
        {
          _key: 'whyUs_en_1739456789001_2',
          _type: 'object',
          text: 'EU AI Act compliant implementation without premium surcharges'
        },
        {
          _key: 'whyUs_en_1739456789001_3',
          _type: 'object',
          text: 'Lean automation expertise for rapid time-to-value'
        },
        {
          _key: 'whyUs_en_1739456789001_4',
          _type: 'object',
          text: 'Flexible financing models and pay-as-you-scale approaches'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach to Low-Cost Intelligent Automation',
    description: 'We pursue a systematic and cost-optimized approach to Intelligent Automation that ensures maximum value creation with minimal investments while guaranteeing enterprise-grade quality and compliance.',
    points: [
      {
        _key: 'approach_en_1739456789001_1',
        _type: 'object',
        text: 'Budget assessment and ROI-focused automation strategy development'
      },
      {
        _key: 'approach_en_1739456789001_2',
        _type: 'object',
        text: 'Cost-effective technology selection with open-source and cloud-native solutions'
      },
      {
        _key: 'approach_en_1739456789001_3',
        _type: 'object',
        text: 'Lean implementation with quick wins and phased rollout strategies'
      },
      {
        _key: 'approach_en_1739456789001_4',
        _type: 'object',
        text: 'Continuous cost optimization and performance monitoring'
      },
      {
        _key: 'approach_en_1739456789001_5',
        _type: 'object',
        text: 'Scalable governance frameworks for sustainable budget control'
      }
    ]
  },
  services: [
    {
      _key: 'service_en_1739456789001_1',
      _type: 'object',
      title: 'Budget Assessment and ROI-Optimized Automation Strategies',
      description: 'Comprehensive budget analysis and development of cost-optimized automation strategies for maximum ROI with minimal investments.',
      features: [
        {
          _key: 'feature_en_1739456789001_1',
          _type: 'object',
          text: 'Comprehensive budget assessment and cost-benefit analysis for realistic automation planning'
        },
        {
          _key: 'feature_en_1739456789001_2',
          _type: 'object',
          text: 'ROI-focused automation strategies with quick win identification and prioritization'
        },
        {
          _key: 'feature_en_1739456789001_3',
          _type: 'object',
          text: 'Phased implementation roadmaps for gradual investments and continuous value validation'
        },
        {
          _key: 'feature_en_1739456789001_4',
          _type: 'object',
          text: 'Cost optimization strategies through intelligent resource allocation and technology selection'
        }
      ]
    },
    {
      _key: 'service_en_1739456789001_2',
      _type: 'object',
      title: 'Cost-Effective Technology Selection and Open-Source Integration',
      description: 'Strategic selection of cost-effective automation technologies with optimal open-source and commercial solution balance.',
      features: [
        {
          _key: 'feature_en_1739456789001_5',
          _type: 'object',
          text: 'Technology assessment for cost-optimal tool selection between open-source and commercial solutions'
        },
        {
          _key: 'feature_en_1739456789001_6',
          _type: 'object',
          text: 'Open-source RPA and AI framework integration for minimal license costs'
        },
        {
          _key: 'feature_en_1739456789001_7',
          _type: 'object',
          text: 'Hybrid architectures combine free and premium tools for optimal cost-performance ratio'
        },
        {
          _key: 'feature_en_1739456789001_8',
          _type: 'object',
          text: 'Vendor negotiation and licensing optimization for best possible commercial tool conditions'
        }
      ]
    },
    {
      _key: 'service_en_1739456789001_3',
      _type: 'object',
      title: 'Lean Implementation and Quick Win Realization',
      description: 'Agile implementation approaches with focus on rapid value creation and iterative automation development.',
      features: [
        {
          _key: 'feature_en_1739456789001_9',
          _type: 'object',
          text: 'Lean automation methodologies for minimal time-to-value and maximum efficiency'
        },
        {
          _key: 'feature_en_1739456789001_10',
          _type: 'object',
          text: 'Quick win identification and prioritization for immediate ROI generation'
        },
        {
          _key: 'feature_en_1739456789001_11',
          _type: 'object',
          text: 'Agile development cycles with continuous stakeholder validation and feedback integration'
        },
        {
          _key: 'feature_en_1739456789001_12',
          _type: 'object',
          text: 'MVP approaches for rapid proof-of-concept development and risk minimization'
        }
      ]
    },
    {
      _key: 'service_en_1739456789001_4',
      _type: 'object',
      title: 'Cloud-Native Architectures and Infrastructure Optimization',
      description: 'Cost-effective cloud-based automation architectures for minimal infrastructure investments and maximum scalability.',
      features: [
        {
          _key: 'feature_en_1739456789001_13',
          _type: 'object',
          text: 'Cloud-native automation architectures for minimal infrastructure costs and pay-as-you-use models'
        },
        {
          _key: 'feature_en_1739456789001_14',
          _type: 'object',
          text: 'Serverless computing integration for cost-optimal resource utilization without idle costs'
        },
        {
          _key: 'feature_en_1739456789001_15',
          _type: 'object',
          text: 'Container-based deployment strategies for efficient resource allocation and scaling'
        },
        {
          _key: 'feature_en_1739456789001_16',
          _type: 'object',
          text: 'Multi-cloud strategies for vendor lock-in avoidance and cost optimization'
        }
      ]
    },
    {
      _key: 'service_en_1739456789001_5',
      _type: 'object',
      title: 'Budget-Friendly EU AI Act Compliance and Governance',
      description: 'Cost-effective compliance frameworks for EU AI Act-compliant automation without premium governance costs.',
      features: [
        {
          _key: 'feature_en_1739456789001_17',
          _type: 'object',
          text: 'Cost-effective compliance frameworks for EU AI Act-compliant automation without premium surcharges'
        },
        {
          _key: 'feature_en_1739456789001_18',
          _type: 'object',
          text: 'Automated governance tools for efficient compliance monitoring with minimal manual efforts'
        },
        {
          _key: 'feature_en_1739456789001_19',
          _type: 'object',
          text: 'Open-source compliance monitoring and audit trail generation for transparent evidence'
        },
        {
          _key: 'feature_en_1739456789001_20',
          _type: 'object',
          text: 'Risk assessment automation for continuous compliance validation without external audit costs'
        }
      ]
    },
    {
      _key: 'service_en_1739456789001_6',
      _type: 'object',
      title: 'Scalable Financing Models and Pay-as-you-Scale',
      description: 'Flexible financing and pricing models for budget-friendly automation investments with growth-oriented scaling options.',
      features: [
        {
          _key: 'feature_en_1739456789001_21',
          _type: 'object',
          text: 'Pay-as-you-scale models for investment-friendly automation development with success-based scaling'
        },
        {
          _key: 'feature_en_1739456789001_22',
          _type: 'object',
          text: 'Subscription-based automation services for predictable monthly costs without high upfront investments'
        },
        {
          _key: 'feature_en_1739456789001_23',
          _type: 'object',
          text: 'ROI share models with performance-based compensation for risk-minimized automation projects'
        },
        {
          _key: 'feature_en_1739456789001_24',
          _type: 'object',
          text: 'Flexible upgrade paths for organic growth from basic to enterprise automation capabilities'
        }
      ]
    }
  ],
  faq: allFaqs,
  testimonial: {
    _type: 'object',
    quote: 'Low-Cost Intelligent Automation is not just a budget strategy, but a fundamental democratization of advanced automation technologies. We prove daily that enterprise-grade automation is achievable through intelligent cost optimization, lean methodologies, and innovative technology selection even with limited budgets – without compromises on quality, security, or EU AI Act compliance.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI FTC GmbH'
  }
}

async function importLowCostIntelligentAutomationEn() {
  console.log('Starting import of Low-Cost Intelligent Automation EN...')
  console.log(`Total FAQs to import: ${allFaqs.length}`)
  
  try {
    // Check if document exists
    const existing = await client.fetch(`*[_id == "low-cost-intelligent-automation-en"][0]`)
    
    if (existing) {
      console.log('Document exists, updating...')
      const result = await client
        .patch('low-cost-intelligent-automation-en')
        .set(lowCostIntelligentAutomationEnDocument)
        .commit()
      console.log('Updated document:', result._id)
    } else {
      console.log('Creating new document...')
      const result = await client.create(lowCostIntelligentAutomationEnDocument)
      console.log('Created document:', result._id)
    }
    
    console.log('Import completed successfully!')
    console.log(`- FAQs: ${allFaqs.length}`)
    console.log(`- Services: ${lowCostIntelligentAutomationEnDocument.services.length}`)
    
  } catch (error) {
    console.error('Import failed:', error)
    throw error
  }
}

importLowCostIntelligentAutomationEn()
  .then(() => {
    console.log('Done!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Error:', error)
    process.exit(1)
  })
