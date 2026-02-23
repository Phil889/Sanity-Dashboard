import 'dotenv/config'
import { createClient } from '@sanity/client'
import { kpiFrameworkEnFaqsBatch1 } from './kpi-framework-en-faqs-batch1'
import { kpiFrameworkEnFaqsBatch2 } from './kpi-framework-en-faqs-batch2'
import { kpiFrameworkEnFaqsBatch3 } from './kpi-framework-en-faqs-batch3'
import { kpiFrameworkEnFaqsBatch4 } from './kpi-framework-en-faqs-batch4'
import { kpiFrameworkEnFaqsBatch5 } from './kpi-framework-en-faqs-batch5'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

// Combine all FAQ batches
const allFaqs = [
  ...kpiFrameworkEnFaqsBatch1,
  ...kpiFrameworkEnFaqsBatch2,
  ...kpiFrameworkEnFaqsBatch3,
  ...kpiFrameworkEnFaqsBatch4,
  ...kpiFrameworkEnFaqsBatch5
]

const kpiFrameworkEn = {
  _id: 'kpi-framework-en',
  _type: 'servicePage',
  title: 'KPI Framework',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'kpi-framework'
  },
  slug: {
    _type: 'slug',
    current: 'information-security/information-security-management-system-isms/kpi-framework-en'
  },
  parent: {
    _type: 'reference',
    _ref: 'informationssicherheit-strategie'
  },
  references: {
    _type: 'object',
    topLevelParent: {
      _type: 'reference',
      _ref: 'informationssicherheit'
    }
  },
  seo: {
    _type: 'seo',
    title: 'KPI Framework for Information Security | ADVISORI',
    description: 'Develop an effective KPI framework for your information security that delivers measurable metrics, creates transparency, and enables continuous improvement. Benefit from our expertise in designing and implementing customized measurement systems.',
    keywords: 'KPI Framework, Security Metrics, Information Security Metrics, Cybersecurity KPIs, Security Measurement, Performance Indicators, Security Metric, Security Reporting, Dashboard, Compliance Measurement'
  },
  heroSection: {
    _type: 'object',
    heading: 'KPI Framework for Information Security',
    tagline: 'Measurable Management of Your Information Security',
    description: 'Establish an effective KPI framework that makes the performance of your information security transparent, provides clear decision-making foundations, and drives continuous improvement. Our customized solutions ensure that you capture, analyze, and use the right metrics for strategic decisions.',
    heroImage: {
      _type: 'image',
      alt: 'KPI Framework for Information Security',
      asset: {
        _type: 'reference',
        _ref: 'image-88620cd67ae6797e9f92ec838be2237b98f2d0dd-1024x768-jpg'
      }
    },
    benefits: [
      {
        _key: 'benefit_kpi_framework_en_1',
        _type: 'object',
        text: 'Systematic measurement and management of information security through relevant metrics'
      },
      {
        _key: 'benefit_kpi_framework_en_2',
        _type: 'object',
        text: 'Customized KPI frameworks based on standards such as ISO 27001 or NIST Cybersecurity Framework'
      },
      {
        _key: 'benefit_kpi_framework_en_3',
        _type: 'object',
        text: 'Increased transparency and traceability of the security situation for all stakeholders'
      },
      {
        _key: 'benefit_kpi_framework_en_4',
        _type: 'object',
        text: 'Objective decision-making foundations for investments and priorities in the security area'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'Customized KPI Frameworks for Your Information Security',
    description: 'An effective KPI framework is indispensable today for measuring the effectiveness of information security, making data-based decisions, and driving continuous improvements. In the context of increasing cybersecurity requirements and limited resources, a systematic KPI framework offers not only transparency but also strategic advantages through targeted investments and demonstrable successes.',
    additionalInfo: 'Studies show that companies with established Security KPI Frameworks achieve an average of 35% higher effectiveness of their security measures, significantly better resource allocation, and more informed communication with management. Additionally, a well-structured KPI framework offers considerable advantages in audits, certifications, and communication with regulatory authorities.',
    alert: {
      _type: 'object',
      title: 'Expert Tip',
      content: 'Modern KPI frameworks should move away from purely technical metrics and focus on business-relevant security metrics. Our experience shows that a balanced set of leading and lagging indicators can improve the management capability of the security organization by up to 40%. The key lies in selecting fewer but more meaningful KPIs that have a genuine connection to your security objectives.'
    },
    points: [
      {
        _key: 'point_kpi_framework_en_1',
        _type: 'object',
        text: 'Holistic analysis of your security strategy and existing metrics'
      },
      {
        _key: 'point_kpi_framework_en_2',
        _type: 'object',
        text: 'Development and implementation of customized KPI frameworks according to recognized standards'
      },
      {
        _key: 'point_kpi_framework_en_3',
        _type: 'object',
        text: 'Integration of the KPI framework into existing governance and reporting structures'
      },
      {
        _key: 'point_kpi_framework_en_4',
        _type: 'object',
        text: 'Optimization of data collection and analysis through automation and tools'
      },
      {
        _key: 'point_kpi_framework_en_5',
        _type: 'object',
        text: 'Continuous calibration and further development of the KPI framework'
      }
    ],
    serviceDescription: 'Our offering in the KPI Framework area includes the conception, implementation, and optimization of customized metric systems tailored to your specific security objectives and organizational circumstances. We support you in identifying relevant metrics, establishing collection and analysis processes, and integrating into your governance and reporting system.',
    servicePoints: [
      {
        _key: 'servicePoint_kpi_framework_en_1',
        _type: 'object',
        text: 'Security Metrics Assessment and gap analysis of existing metric systems'
      },
      {
        _key: 'servicePoint_kpi_framework_en_2',
        _type: 'object',
        text: 'Conception and implementation of a balanced Security KPI Framework'
      },
      {
        _key: 'servicePoint_kpi_framework_en_3',
        _type: 'object',
        text: 'Development of collection methods, dashboards, and reporting structures'
      },
      {
        _key: 'servicePoint_kpi_framework_en_4',
        _type: 'object',
        text: 'Training and change management concepts for applying the metrics'
      },
      {
        _key: 'servicePoint_kpi_framework_en_5',
        _type: 'object',
        text: 'Support with automation and tool-based implementation of the framework'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our Strengths',
      points: [
        {
          _key: 'whyUs_kpi_framework_en_1',
          _type: 'object',
          text: 'Comprehensive expertise in designing and implementing Security KPI Frameworks'
        },
        {
          _key: 'whyUs_kpi_framework_en_2',
          _type: 'object',
          text: 'Interdisciplinary team with specialist expertise in cybersecurity, data analysis, and reporting'
        },
        {
          _key: 'whyUs_kpi_framework_en_3',
          _type: 'object',
          text: 'Proven methods and tools for efficient metrics implementation'
        },
        {
          _key: 'whyUs_kpi_framework_en_4',
          _type: 'object',
          text: 'Sustainable solutions that integrate into your existing security landscape'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'The development and implementation of an effective KPI Framework for information security requires a structured, goal-oriented approach that considers both best practices and your specific requirements. Our proven approach ensures that your framework is meaningful, practical, and sustainably effective.',
    points: [
      {
        _key: 'approach_kpi_framework_en_1',
        _type: 'object',
        text: 'Phase 1: Analysis - Assessment of your security strategy, objectives, and existing metrics as well as definition of measurement needs and priorities'
      },
      {
        _key: 'approach_kpi_framework_en_2',
        _type: 'object',
        text: 'Phase 2: Conception - Development of a balanced KPI Framework with leading and lagging indicators as well as clear definitions and target values'
      },
      {
        _key: 'approach_kpi_framework_en_3',
        _type: 'object',
        text: 'Phase 3: Implementation - Gradual introduction of metrics with focus on data quality and efficient collection processes'
      },
      {
        _key: 'approach_kpi_framework_en_4',
        _type: 'object',
        text: 'Phase 4: Reporting - Establishment of meaningful dashboards and reports for various stakeholders with appropriate level of detail'
      },
      {
        _key: 'approach_kpi_framework_en_5',
        _type: 'object',
        text: 'Phase 5: Monitoring and Optimization - Continuous review of meaningfulness and adaptation of the KPI Framework to changing requirements'
      }
    ]
  },
  faq: allFaqs,
  services: [
    {
      _key: 'service_kpi_framework_en_1',
      _type: 'object',
      title: 'KPI Framework Design and Implementation',
      description: 'Development and implementation of a customized KPI Framework for your information security that defines relevant and meaningful metrics and integrates them into your management process. We consider recognized standards such as ISO 27004, NIST, or CIS Security Metrics and focus on practical implementability and meaningfulness of the metrics.',
      features: [
        {
          _key: 'feature_kpi_framework_en_1',
          _type: 'object',
          text: 'Analysis of information security strategy and derivation of relevant metrics'
        },
        {
          _key: 'feature_kpi_framework_en_2',
          _type: 'object',
          text: 'Development of a balanced set of leading and lagging indicators'
        },
        {
          _key: 'feature_kpi_framework_en_3',
          _type: 'object',
          text: 'Definition of collection methods, data sources, and measurement frequencies'
        },
        {
          _key: 'feature_kpi_framework_en_4',
          _type: 'object',
          text: 'Implementation support with training for all participants'
        }
      ]
    },
    {
      _key: 'service_kpi_framework_en_2',
      _type: 'object',
      title: 'Security Dashboards and Reporting',
      description: 'Conception and implementation of meaningful Security Dashboards and reports that optimally visualize your KPIs and prepare them for different target groups. We develop customized reporting solutions that provide security managers, management, and other stakeholders with the required information in the appropriate form.',
      features: [
        {
          _key: 'feature_kpi_framework_en_5',
          _type: 'object',
          text: 'Target group-appropriate design of Security Dashboards for various stakeholders'
        },
        {
          _key: 'feature_kpi_framework_en_6',
          _type: 'object',
          text: 'Development of a multi-level reporting system with different levels of detail'
        },
        {
          _key: 'feature_kpi_framework_en_7',
          _type: 'object',
          text: 'Integration of trend analyses and forecast models into reporting'
        },
        {
          _key: 'feature_kpi_framework_en_8',
          _type: 'object',
          text: 'Implementation of automated reporting solutions and self-service analyses'
        }
      ]
    },
    {
      _key: 'service_kpi_framework_en_3',
      _type: 'object',
      title: 'Security Metrics for Compliance and Governance',
      description: 'Specific support in developing and implementing metrics for compliance measurement and Security Governance. We help you make compliance with regulatory requirements and internal specifications measurable and integrate them into your KPI Framework.',
      features: [
        {
          _key: 'feature_kpi_framework_en_9',
          _type: 'object',
          text: 'Development of compliance metrics based on relevant standards and regulations'
        },
        {
          _key: 'feature_kpi_framework_en_10',
          _type: 'object',
          text: 'Conception of governance KPIs for measuring the effectiveness of management processes'
        },
        {
          _key: 'feature_kpi_framework_en_11',
          _type: 'object',
          text: 'Integration of risk-based metrics for prioritizing security measures'
        },
        {
          _key: 'feature_kpi_framework_en_12',
          _type: 'object',
          text: 'Development of metrics for effectiveness measurement and maturity determination'
        }
      ]
    },
    {
      _key: 'service_kpi_framework_en_4',
      _type: 'object',
      title: 'Automation and Data Integration',
      description: 'Development and implementation of concepts for automating data collection and analysis for your Security KPI Framework. We support you in integrating various data sources, introducing appropriate tools, and creating an efficient data flow for your security metrics.',
      features: [
        {
          _key: 'feature_kpi_framework_en_13',
          _type: 'object',
          text: 'Analysis and integration of relevant data sources for your Security Metrics'
        },
        {
          _key: 'feature_kpi_framework_en_14',
          _type: 'object',
          text: 'Implementation of tools for automated data collection and processing'
        },
        {
          _key: 'feature_kpi_framework_en_15',
          _type: 'object',
          text: 'Development of data quality processes for reliable KPIs'
        },
        {
          _key: 'feature_kpi_framework_en_16',
          _type: 'object',
          text: 'Integration of analytics functions for deeper analyses and forecasts'
        }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'An effective KPI Framework is far more than a collection of numbers – it is a strategic management tool for information security. A well-designed framework delivers clear statements about the effectiveness of security measures, creates transparency for all stakeholders, and enables continuous, data-based improvement of the security level.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI DE'
  }
}

async function importKpiFrameworkEn() {
  console.log('Creating KPI Framework EN page...')
  
  try {
    const result = await client.createOrReplace(kpiFrameworkEn)
    console.log(`Successfully created/updated ${result._id}: ${result._id}`)
    console.log(`Total FAQs: ${allFaqs.length}`)
    console.log(`Total Services: ${kpiFrameworkEn.services.length}`)
  } catch (error) {
    console.error('Error creating page:', error)
    throw error
  }
}

importKpiFrameworkEn().catch(console.error)
