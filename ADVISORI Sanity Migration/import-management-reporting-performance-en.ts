// Import script for Management Reporting & Performance - English Translation
// Source: management-reporting-performance (German)
// Target: management-reporting-performance-en (English)

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01'
})

// Import FAQ batches
import { managementReportingPerformanceEnFaqsBatch1 } from './management-reporting-performance-en-faqs-batch1'
import { managementReportingPerformanceEnFaqsBatch2 } from './management-reporting-performance-en-faqs-batch2'
import { managementReportingPerformanceEnFaqsBatch3 } from './management-reporting-performance-en-faqs-batch3'
import { managementReportingPerformanceEnFaqsBatch4 } from './management-reporting-performance-en-faqs-batch4'
import { managementReportingPerformanceEnFaqsBatch5 } from './management-reporting-performance-en-faqs-batch5'

// Combine all FAQs
const allFaqs = [
  ...managementReportingPerformanceEnFaqsBatch1,
  ...managementReportingPerformanceEnFaqsBatch2,
  ...managementReportingPerformanceEnFaqsBatch3,
  ...managementReportingPerformanceEnFaqsBatch4,
  ...managementReportingPerformanceEnFaqsBatch5
]

// English translation of Management Reporting & Performance page
const managementReportingPerformanceEnPage = {
  _id: 'management-reporting-performance-en',
  _type: 'servicePage',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'management-reporting-performance'
  },
  title: 'Management Reporting & Performance',
  slug: {
    _type: 'slug',
    current: 'regulatory-reporting/management-reporting-performance-en'
  },
  parent: {
    _ref: 'regulatory-reporting',
    _type: 'reference'
  },
  references: {
    _type: 'object',
    topLevelParent: {
      _ref: 'regulatory-reporting',
      _type: 'reference'
    }
  },
  seo: {
    _type: 'seo',
    title: 'Management Reporting & Performance | ADVISORI',
    description: 'Professional support for implementing Management Reporting systems and Performance Management. We help you define KPIs, establish efficient reporting processes, and integrate Business Intelligence solutions.',
    keywords: 'Management Reporting, Performance Management, KPI, Business Intelligence, Dashboard, Scorecards, Controlling, Budgeting, Reporting Processes, Corporate Performance'
  },
  heroSection: {
    _type: 'object',
    heading: 'Management Reporting & Performance',
    tagline: 'Transparent. Strategic. Value-Creating.',
    description: 'We support you in developing and implementing efficient Management Reporting solutions. From defining relevant KPIs to integrating modern Business Intelligence tools – for data-driven corporate management.',
    heroImage: {
      _type: 'image',
      alt: 'Management Reporting and Performance'
    },
    benefits: [
      {
        _key: `benefit_mrp_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Optimization of reporting processes and structures'
      },
      {
        _key: `benefit_mrp_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Development of meaningful KPIs and performance indicators'
      },
      {
        _key: `benefit_mrp_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Integration of modern BI and visualization solutions'
      },
      {
        _key: `benefit_mrp_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Support for strategic decision-making'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'Management Reporting & Performance',
    description: 'Effective Management Reporting forms the foundation for informed decisions and continuous performance improvement. We support you in developing and implementing a customized reporting framework that optimally supports your business strategy.',
    additionalInfo: 'Increasing digitalization and data availability open new possibilities for Management Reporting. Companies that invest early in modern reporting solutions gain agility and decision quality in a dynamic market environment.',
    alert: {
      title: 'Expert Tip',
      content: 'The integration of Predictive Analytics and the automation of reporting processes are crucial for future-oriented Management Reporting. Investments in these areas improve decision quality and significantly reduce manual effort.'
    },
    points: [
      {
        _key: `point_mrp_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Definition of relevant KPIs and performance metrics'
      },
      {
        _key: `point_mrp_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Optimization of reporting processes and structures'
      },
      {
        _key: `point_mrp_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Integration of Business Intelligence solutions'
      },
      {
        _key: `point_mrp_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Development of interactive management dashboards'
      },
      {
        _key: `point_mrp_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Implementation of forecast and simulation models'
      }
    ],
    serviceDescription: 'Our offering includes comprehensive support for your Management Reporting. From analyzing existing reporting structures through defining relevant KPIs to integrating modern BI solutions and continuous optimization.',
    servicePoints: [
      {
        _key: `servicePoint_mrp_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Reporting Strategy'
      },
      {
        _key: `servicePoint_mrp_en_${Date.now()}_2`,
        _type: 'object',
        text: 'KPI Definition'
      },
      {
        _key: `servicePoint_mrp_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Process Optimization'
      },
      {
        _key: `servicePoint_mrp_en_${Date.now()}_4`,
        _type: 'object',
        text: 'BI Integration'
      },
      {
        _key: `servicePoint_mrp_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Dashboard Development'
      }
    ],
    whyUs: {
      title: 'Our Strengths',
      points: [
        {
          _key: `whyUs_mrp_en_${Date.now()}_1`,
          _type: 'object',
          text: 'Comprehensive expertise in Performance Management and Controlling'
        },
        {
          _key: `whyUs_mrp_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Deep understanding of modern BI technologies and platforms'
        },
        {
          _key: `whyUs_mrp_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Experience in integrating data sources and reporting systems'
        },
        {
          _key: `whyUs_mrp_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Proven methods for KPI definition and implementation'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'Our approach to Management Reporting is systematic, strategy-oriented, and tailored to your specific information needs.',
    points: [
      {
        _key: `approach_mrp_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Analysis of information needs'
      },
      {
        _key: `approach_mrp_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Assessment of existing reporting structures'
      },
      {
        _key: `approach_mrp_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Development of reporting strategy'
      },
      {
        _key: `approach_mrp_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Implementation of systems and processes'
      },
      {
        _key: `approach_mrp_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Continuous optimization'
      }
    ]
  },
  services: [
    {
      _key: `service_mrp_en_${Date.now()}_1`,
      _type: 'object',
      title: 'KPI Definition & Performance Management',
      description: 'Development and implementation of meaningful KPIs and performance indicators for goal-oriented corporate management.',
      features: [
        {
          _key: `feature_mrp_en_${Date.now()}_1`,
          _type: 'object',
          text: 'KPI Framework Development'
        },
        {
          _key: `feature_mrp_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Balanced Scorecards'
        },
        {
          _key: `feature_mrp_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Performance Monitoring'
        },
        {
          _key: `feature_mrp_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Target Agreement Systems'
        }
      ]
    },
    {
      _key: `service_mrp_en_${Date.now()}_2`,
      _type: 'object',
      title: 'Reporting Processes & Governance',
      description: 'Optimization of reporting processes and establishment of effective governance structures for reliable Management Reporting.',
      features: [
        {
          _key: `feature_mrp_en_${Date.now()}_5`,
          _type: 'object',
          text: 'Process Design'
        },
        {
          _key: `feature_mrp_en_${Date.now()}_6`,
          _type: 'object',
          text: 'Governance Models'
        },
        {
          _key: `feature_mrp_en_${Date.now()}_7`,
          _type: 'object',
          text: 'Quality Assurance'
        },
        {
          _key: `feature_mrp_en_${Date.now()}_8`,
          _type: 'object',
          text: 'Change Management'
        }
      ]
    },
    {
      _key: `service_mrp_en_${Date.now()}_3`,
      _type: 'object',
      title: 'Business Intelligence & Dashboards',
      description: 'Integration of modern BI solutions and development of interactive management dashboards for intuitive data analysis and visualization.',
      features: [
        {
          _key: `feature_mrp_en_${Date.now()}_9`,
          _type: 'object',
          text: 'BI Strategy'
        },
        {
          _key: `feature_mrp_en_${Date.now()}_10`,
          _type: 'object',
          text: 'Dashboard Development'
        },
        {
          _key: `feature_mrp_en_${Date.now()}_11`,
          _type: 'object',
          text: 'Data Integration'
        },
        {
          _key: `feature_mrp_en_${Date.now()}_12`,
          _type: 'object',
          text: 'Self-Service BI'
        }
      ]
    }
  ],
  faq: allFaqs,
  testimonial: {
    _type: 'object',
    quote: 'Effective Management Reporting is essential today for data-driven corporate management. The integration of relevant KPIs and modern BI solutions creates the foundation for informed decisions and sustainable value creation.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI DE'
  }
}

async function importManagementReportingPerformanceEn() {
  console.log('Starting import of Management Reporting & Performance EN...')
  console.log(`Total FAQs to import: ${allFaqs.length}`)
  console.log(`Total Services to import: ${managementReportingPerformanceEnPage.services.length}`)
  
  try {
    const result = await client.createOrReplace(managementReportingPerformanceEnPage)
    console.log(`Successfully imported Management Reporting & Performance EN with ID: ${result._id}`)
    console.log(`- FAQs: ${allFaqs.length}`)
    console.log(`- Services: ${managementReportingPerformanceEnPage.services.length}`)
    console.log(`- Benefits: ${managementReportingPerformanceEnPage.heroSection.benefits.length}`)
    console.log(`- Approach Points: ${managementReportingPerformanceEnPage.approach.points.length}`)
    return result
  } catch (error) {
    console.error('Error importing Management Reporting & Performance EN:', error)
    throw error
  }
}

importManagementReportingPerformanceEn()
  .then(() => {
    console.log('Import completed successfully!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Import failed:', error)
    process.exit(1)
  })
