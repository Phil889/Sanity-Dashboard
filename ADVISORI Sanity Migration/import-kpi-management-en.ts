import 'dotenv/config'
import { createClient } from '@sanity/client'
import { faqsBatch1 } from './kpi-management-en-faqs-batch1'
import { faqsBatch2 } from './kpi-management-en-faqs-batch2'
import { faqsBatch3 } from './kpi-management-en-faqs-batch3'
import { faqsBatch4 } from './kpi-management-en-faqs-batch4'
import { faqsBatch5 } from './kpi-management-en-faqs-batch5'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

const allFaqs = [...faqsBatch1, ...faqsBatch2, ...faqsBatch3, ...faqsBatch4, ...faqsBatch5]

console.log('Total FAQs to import:', allFaqs.length)

const kpiManagementEn = {
  _id: 'kpi-management-en',
  _type: 'servicePage',
  title: 'KPI Management',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'kpi-management'
  },
  i18n: {
    base: 'kpi-management'
  },
  slug: {
    _type: 'slug',
    current: 'digital-transformation/data-analytics/business-intelligence/kpi-management-en'
  },
  parent: {
    _type: 'reference',
    _ref: 'business-intelligence'
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
    title: 'KPI Management | ADVISORI',
    description: 'Develop a customized KPI management system tailored to your business goals. Optimize processes, make informed decisions, and improve performance with our data-driven KPI solutions.',
    keywords: 'KPI Management, Key Performance Indicators, Performance Metrics, Corporate Management, Dashboard, Data Analysis, Business Intelligence, Performance Measurement, Performance Management, Reporting'
  },
  heroSection: {
    _type: 'object',
    heading: 'KPI Management',
    tagline: 'Data-Driven Corporate Management',
    description: 'Develop a customized KPI management system that identifies relevant performance metrics, measures them precisely, and visualizes them clearly. Use data-based insights for informed decisions and continuous performance improvements across all business areas.',
    heroImage: {
      _type: 'image',
      alt: 'KPI Management Dashboard',
      asset: {
        _ref: 'image-88620cd67ae6797e9f92ec838be2237b98f2d0dd-1024x768-jpg',
        _type: 'reference'
      }
    },
    benefits: [
      {
        _key: 'benefit_kpi_en_1',
        _type: 'object',
        text: 'Focus on strategically relevant metrics for targeted management'
      },
      {
        _key: 'benefit_kpi_en_2',
        _type: 'object',
        text: 'Real-time data and precise visualizations for efficient decision processes'
      },
      {
        _key: 'benefit_kpi_en_3',
        _type: 'object',
        text: 'Clear responsibilities and transparency across all company levels'
      },
      {
        _key: 'benefit_kpi_en_4',
        _type: 'object',
        text: 'Continuous optimization through systematic performance tracking'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'Strategic KPI Management for Your Business Success',
    description: 'In today\'s data-driven business world, effective KPI management is the key to informed decision-making and sustainable performance improvement. By identifying, measuring, and analyzing the right Key Performance Indicators, companies gain a clear overview of their performance and can specifically identify optimization potential.',
    additionalInfo: 'Studies show that companies with a mature KPI management system achieve their strategic goals on average 2.5 times more often than companies without structured performance monitoring. Additionally, they increase their operational efficiency by up to 25% through data-based decision-making and continuous process optimization.',
    alert: {
      title: 'Expert Tip',
      content: 'Less is often more in KPI management. Our experience shows that most companies achieve optimal results with 5-7 strategic KPIs per business area. Too many metrics often lead to information overload and lose their management effect. Focus on the truly decisive indicators that are directly linked to your strategic goals and provide clear action impulses.'
    },
    points: [
      {
        _key: 'point_kpi_en_1',
        _type: 'object',
        text: 'Comprehensive analysis of your business goals and development of customized KPI frameworks'
      },
      {
        _key: 'point_kpi_en_2',
        _type: 'object',
        text: 'Implementation of effective data collection and aggregation mechanisms'
      },
      {
        _key: 'point_kpi_en_3',
        _type: 'object',
        text: 'Development of meaningful dashboards and reporting solutions'
      },
      {
        _key: 'point_kpi_en_4',
        _type: 'object',
        text: 'Integration of KPIs into your decision-making and management processes'
      },
      {
        _key: 'point_kpi_en_5',
        _type: 'object',
        text: 'Continuous adaptation and optimization of your KPI system'
      }
    ],
    serviceDescription: 'Our offering in KPI management includes the conception, implementation, and optimization of individual KPI systems precisely tailored to your business goals and processes. We support you in identifying relevant performance indicators, establishing robust measurement procedures, and developing intuitive visualization solutions for effective performance monitoring.',
    servicePoints: [
      {
        _key: 'servicePoint_kpi_en_1',
        _type: 'object',
        text: 'Strategic KPI definition and hierarchization based on your business goals'
      },
      {
        _key: 'servicePoint_kpi_en_2',
        _type: 'object',
        text: 'Development and implementation of data collection and calculation methods'
      },
      {
        _key: 'servicePoint_kpi_en_3',
        _type: 'object',
        text: 'Conception and implementation of customized KPI dashboards and reports'
      },
      {
        _key: 'servicePoint_kpi_en_4',
        _type: 'object',
        text: 'Integration of KPI monitoring into leadership and decision processes'
      },
      {
        _key: 'servicePoint_kpi_en_5',
        _type: 'object',
        text: 'Training and coaching for effective use of performance metrics'
      }
    ],
    whyUs: {
      title: 'Our Strengths',
      points: [
        {
          _key: 'whyUs_kpi_en_1',
          _type: 'object',
          text: 'Comprehensive expertise in developing and implementing KPI systems'
        },
        {
          _key: 'whyUs_kpi_en_2',
          _type: 'object',
          text: 'Interdisciplinary team with expertise in data analysis, process optimization, and corporate management'
        },
        {
          _key: 'whyUs_kpi_en_3',
          _type: 'object',
          text: 'Proven methods and tools for efficient KPI tracking and reporting'
        },
        {
          _key: 'whyUs_kpi_en_4',
          _type: 'object',
          text: 'Customized solutions tailored to your specific business requirements'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'Developing and implementing an effective KPI management system requires a structured, goal-oriented approach that considers both your strategic goals and your organizational characteristics. Our proven approach ensures that your KPI system is designed precisely, meaningfully, and practically.',
    points: [
      {
        _key: 'approach_kpi_en_1',
        _type: 'object',
        text: 'Phase 1: Analysis - Understanding your corporate strategy, business processes, and existing metrics as well as identification of relevant stakeholders and information needs'
      },
      {
        _key: 'approach_kpi_en_2',
        _type: 'object',
        text: 'Phase 2: Conception - Development of a customized KPI framework with strategic, tactical, and operational metrics as well as definition of precise calculation methods'
      },
      {
        _key: 'approach_kpi_en_3',
        _type: 'object',
        text: 'Phase 3: Implementation - Building the required data infrastructure, implementing measurement and calculation procedures, and developing intuitive dashboards'
      },
      {
        _key: 'approach_kpi_en_4',
        _type: 'object',
        text: 'Phase 4: Integration - Anchoring the KPI system in decision-making and management processes, clarifying responsibilities, and establishing regular review cycles'
      },
      {
        _key: 'approach_kpi_en_5',
        _type: 'object',
        text: 'Phase 5: Optimization - Continuous review and refinement of KPIs based on experience and changing business requirements'
      }
    ]
  },
  services: [
    {
      _key: 'service_kpi_en_1',
      _type: 'object',
      title: 'KPI Strategy and Framework Development',
      description: 'Development of a customized KPI framework precisely aligned with your corporate strategy and business goals. We identify relevant performance drivers, define meaningful metrics at various organizational levels, and create a hierarchical KPI system with clear relationships and dependencies.',
      features: [
        {
          _key: 'serviceFeature_kpi_en_1',
          _type: 'object',
          text: 'Strategic analysis and derivation of relevant performance dimensions'
        },
        {
          _key: 'serviceFeature_kpi_en_2',
          _type: 'object',
          text: 'Definition of a balanced set of Leading and Lagging Indicators'
        },
        {
          _key: 'serviceFeature_kpi_en_3',
          _type: 'object',
          text: 'Development of a consistent KPI hierarchy across all organizational levels'
        },
        {
          _key: 'serviceFeature_kpi_en_4',
          _type: 'object',
          text: 'Precise metric definitions with clear calculation methods'
        }
      ]
    },
    {
      _key: 'service_kpi_en_2',
      _type: 'object',
      title: 'KPI Dashboards and Visualization Solutions',
      description: 'Conception and implementation of intuitive dashboard solutions that visualize your KPIs clearly and action-oriented. We develop customized reporting formats for different target groups and ensure an optimal balance between information depth and clarity with maximum user-friendliness.',
      features: [
        {
          _key: 'serviceFeature_kpi_en_5',
          _type: 'object',
          text: 'Target-group-specific dashboard conception for management and departments'
        },
        {
          _key: 'serviceFeature_kpi_en_6',
          _type: 'object',
          text: 'Implementation of interactive visualizations with drill-down functionalities'
        },
        {
          _key: 'serviceFeature_kpi_en_7',
          _type: 'object',
          text: 'Integration of targets, benchmarks, and trend analyses'
        },
        {
          _key: 'serviceFeature_kpi_en_8',
          _type: 'object',
          text: 'Optimization for various devices and usage situations'
        }
      ]
    },
    {
      _key: 'service_kpi_en_3',
      _type: 'object',
      title: 'KPI Data Integration and Automation',
      description: 'Development and implementation of efficient data collection and processing processes for your KPI system. We integrate data from various source systems, establish robust ETL processes, and automate KPI calculation and updating for consistent, current performance information.',
      features: [
        {
          _key: 'serviceFeature_kpi_en_9',
          _type: 'object',
          text: 'Analysis and mapping of relevant data sources and structures'
        },
        {
          _key: 'serviceFeature_kpi_en_10',
          _type: 'object',
          text: 'Development of efficient ETL processes for KPI calculation'
        },
        {
          _key: 'serviceFeature_kpi_en_11',
          _type: 'object',
          text: 'Automation of data collection, processing, and reporting'
        },
        {
          _key: 'serviceFeature_kpi_en_12',
          _type: 'object',
          text: 'Implementation of data quality controls and plausibility checks'
        }
      ]
    },
    {
      _key: 'service_kpi_en_4',
      _type: 'object',
      title: 'Performance Management and KPI Governance',
      description: 'Establishment of a sustainable performance management system based on your KPI framework. We support you in integrating KPIs into leadership and decision processes, define clear responsibilities, and develop effective management mechanisms for continuous performance improvement.',
      features: [
        {
          _key: 'serviceFeature_kpi_en_13',
          _type: 'object',
          text: 'Establishment of KPI ownership and clear responsibilities'
        },
        {
          _key: 'serviceFeature_kpi_en_14',
          _type: 'object',
          text: 'Development of structured performance review processes'
        },
        {
          _key: 'serviceFeature_kpi_en_15',
          _type: 'object',
          text: 'Integration of KPIs into target agreement and incentive systems'
        },
        {
          _key: 'serviceFeature_kpi_en_16',
          _type: 'object',
          text: 'Establishment of a continuous improvement process for the KPI system'
        }
      ]
    }
  ],
  faq: allFaqs,
  testimonial: {
    _type: 'object',
    quote: 'A strategically aligned KPI management is indispensable today for every successful company. The art lies in distilling from the flood of available data exactly those metrics that have real management value and provide action impulses. Well-designed KPIs create transparency about performance drivers, enable fact-based decisions, and focus the organization on the truly relevant success factors.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI DE'
  }
}

async function importKpiManagementEn() {
  console.log('Creating KPI Management EN page...')
  
  try {
    const result = await client.createOrReplace(kpiManagementEn)
    console.log('Successfully created/updated kpi-management-en:', result._id)
    console.log('Total FAQs:', result.faq?.length || 0)
    console.log('Total Services:', result.services?.length || 0)
  } catch (error) {
    console.error('Error creating page:', error)
    throw error
  }
}

importKpiManagementEn().catch(console.error)
