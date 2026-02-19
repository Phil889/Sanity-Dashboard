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

const laufendesMonitoringEn = {
  _id: 'laufendes-monitoring-risk-assessment-en',
  _type: 'servicePage',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _ref: 'laufendes-monitoring-risk-assessment',
    _type: 'reference'
  },
  title: 'Continuous Monitoring & Risk Assessment',
  slug: {
    _type: 'slug',
    current: 'risk-management/internal-control-system-ics/continuous-monitoring-risk-assessment-en'
  },
  parent: {
    _ref: 'operatives-risikomanagement-internes-kontrollsystem-iks',
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
    title: 'Continuous Monitoring & Risk Assessment | ADVISORI',
    description: 'Establish continuous monitoring and systematic risk assessment for your internal control system to identify risks early, optimize controls, and sustainably meet regulatory requirements. Benefit from our expertise for effective ICS monitoring.',
    keywords: 'ICS monitoring, risk assessment, control monitoring, continuous monitoring, ICS effectiveness testing, key risk indicators, KRI, risk evaluation, control effectiveness, control testing, ICS reporting, control weaknesses, risk indicators'
  },
  heroSection: {
    _type: 'object',
    heading: 'Continuous Monitoring & Risk Assessment',
    tagline: 'Continuous oversight and systematic risk evaluation',
    description: 'Establish effective monitoring and systematic risk assessment for your internal control system to identify risks early, continuously monitor the effectiveness of your controls, and sustainably improve them. Our structured approach supports you in implementing an efficient monitoring system that creates real risk transparency and meets regulatory requirements.',
    heroImage: {
      _type: 'image',
      alt: 'Continuous Monitoring and Risk Assessment',
      asset: {
        _ref: 'image-88620cd67ae6797e9f92ec838be2237b98f2d0dd-1024x768-jpg',
        _type: 'reference'
      }
    },
    benefits: [
      {
        _key: `benefit_${timestamp}_1`,
        _type: 'object',
        text: 'Early detection of control weaknesses and new risks through systematic monitoring'
      },
      {
        _key: `benefit_${timestamp}_2`,
        _type: 'object',
        text: 'Continuous optimization of the ICS through data-based effectiveness testing'
      },
      {
        _key: `benefit_${timestamp}_3`,
        _type: 'object',
        text: 'Higher efficiency through risk-oriented prioritization and automation of monitoring activities'
      },
      {
        _key: `benefit_${timestamp}_4`,
        _type: 'object',
        text: 'Strengthening stakeholder trust through transparent risk and control reporting'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'Effective ICS Monitoring and Systematic Risk Assessment',
    description: 'Effective monitoring and regular risk assessment are central elements of a sustainable internal control system. Only through continuous oversight, systematic risk evaluation, and regular effectiveness testing can you ensure that your ICS fulfills its protective function in the long term and adapts to changing conditions. Our holistic approach combines classic control testing with innovative data-based monitoring methods, creating efficient oversight processes with real added value.',
    alert: {
      title: 'Expert Tip',
      content: 'Modern ICS monitoring concepts should combine classic manual testing with data analytics approaches. Our experience shows that continuous monitoring with automated controls and real-time dashboards can reduce manual testing effort by up to 40%, while significantly increasing risk transparency. The key lies in an intelligent combination of sample-based tests, continuous monitoring of risk indicators, and in-depth periodic effectiveness testing.'
    },
    additionalInfo: 'Studies show that companies with systematic ICS monitoring and regular risk assessments can respond significantly faster to changing risk situations. Implementing an efficient monitoring system demonstrably leads to an average 30% improvement in control effectiveness, a significant reduction in control failures, and increased stakeholder satisfaction with risk management quality.',
    serviceDescription: 'Our offering in ICS monitoring and risk assessment includes the design, implementation, and optimization of customized monitoring and risk assessment systems for your internal control system. We support you in establishing an efficient monitoring approach that both meets regulatory requirements and creates real added value for your company through early risk transparency and continuous improvement.',
    points: [
      {
        _key: `point_${timestamp}_1`,
        _type: 'object',
        text: 'Design and implementation of a customized ICS monitoring concept'
      },
      {
        _key: `point_${timestamp}_2`,
        _type: 'object',
        text: 'Development of risk-oriented test methodologies and testing methods'
      },
      {
        _key: `point_${timestamp}_3`,
        _type: 'object',
        text: 'Definition of meaningful Key Risk Indicators (KRIs) and monitoring metrics'
      },
      {
        _key: `point_${timestamp}_4`,
        _type: 'object',
        text: 'Establishment of efficient processes for regular risk assessments'
      },
      {
        _key: `point_${timestamp}_5`,
        _type: 'object',
        text: 'Building meaningful ICS reporting for various stakeholders'
      }
    ],
    servicePoints: [
      {
        _key: `servicePoint_${timestamp}_1`,
        _type: 'object',
        text: 'Assessment of existing monitoring and risk assessment processes with gap analysis'
      },
      {
        _key: `servicePoint_${timestamp}_2`,
        _type: 'object',
        text: 'Development and implementation of a structured ICS monitoring framework'
      },
      {
        _key: `servicePoint_${timestamp}_3`,
        _type: 'object',
        text: 'Design and introduction of systematic risk assessment methods'
      },
      {
        _key: `servicePoint_${timestamp}_4`,
        _type: 'object',
        text: 'Design and implementation of an effective control testing program'
      },
      {
        _key: `servicePoint_${timestamp}_5`,
        _type: 'object',
        text: 'Building meaningful ICS reporting with focus on stakeholder value'
      }
    ],
    whyUs: {
      title: 'Our Strengths',
      points: [
        {
          _key: `whyUs_${timestamp}_1`,
          _type: 'object',
          text: 'Comprehensive expertise in designing and implementing ICS monitoring systems'
        },
        {
          _key: `whyUs_${timestamp}_2`,
          _type: 'object',
          text: 'Innovative approaches combining classic testing methods with data analytics'
        },
        {
          _key: `whyUs_${timestamp}_3`,
          _type: 'object',
          text: 'Proven tools and methods for efficient risk assessments and control testing'
        },
        {
          _key: `whyUs_${timestamp}_4`,
          _type: 'object',
          text: 'Experienced team with profound knowledge in risk management, compliance, and internal controls'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'Developing and implementing an effective ICS monitoring system and systematic risk assessment processes requires a structured, customized approach. Our proven methodology ensures that your monitoring system is both efficient and effective, meets regulatory requirements, and provides real added value for your company.',
    points: [
      {
        _key: `approach_${timestamp}_1`,
        _type: 'object',
        text: 'Phase 1: Analysis & Conception - Assessment of existing monitoring activities, identification of critical risk areas, definition of monitoring objectives and success criteria, and development of a customized monitoring concept'
      },
      {
        _key: `approach_${timestamp}_2`,
        _type: 'object',
        text: 'Phase 2: Risk Assessment Design - Development of a structured methodology for regular risk evaluation, definition of assessment criteria and scales, and establishment of processes for periodic and event-driven assessments'
      },
      {
        _key: `approach_${timestamp}_3`,
        _type: 'object',
        text: 'Phase 3: Monitoring System Implementation - Development of detailed testing plans, creation of test methods and documentation, definition of meaningful KRIs, and implementation of monitoring tools and processes'
      },
      {
        _key: `approach_${timestamp}_4`,
        _type: 'object',
        text: 'Phase 4: Reporting & Governance - Design of an effective ICS reporting system, development of management dashboards, establishment of escalation paths for control weaknesses, and coordination with other oversight functions'
      },
      {
        _key: `approach_${timestamp}_5`,
        _type: 'object',
        text: 'Phase 5: Optimization & Automation - Identification of automation potential, integration of data analytics methods, development of continuous monitoring approaches, and continuous improvement of the monitoring system'
      }
    ]
  },
  services: [
    {
      _key: `service_${timestamp}_1`,
      _type: 'object',
      title: 'Continuous ICS Monitoring',
      description: 'Development and implementation of a customized ICS monitoring system that enables continuous oversight of control effectiveness. We support you in establishing an efficient monitoring approach that detects control weaknesses early and promotes sustainable improvement of the internal control system.',
      features: [
        {
          _key: `serviceFeature_${timestamp}_1`,
          _type: 'object',
          text: 'Design of a risk-oriented monitoring strategy with clear objectives and priorities'
        },
        {
          _key: `serviceFeature_${timestamp}_2`,
          _type: 'object',
          text: 'Definition of meaningful Key Risk Indicators (KRIs) and monitoring metrics'
        },
        {
          _key: `serviceFeature_${timestamp}_3`,
          _type: 'object',
          text: 'Implementation of continuous monitoring for key controls'
        },
        {
          _key: `serviceFeature_${timestamp}_4`,
          _type: 'object',
          text: 'Development of an efficient governance structure for ICS monitoring'
        }
      ]
    },
    {
      _key: `service_${timestamp}_2`,
      _type: 'object',
      title: 'Systematic Risk Assessment',
      description: 'Design and implementation of structured risk assessment processes for your internal control system. We support you in establishing a systematic methodology for regular evaluation and prioritization of risks, enabling focused alignment of the ICS on essential risk areas.',
      features: [
        {
          _key: `serviceFeature_${timestamp}_5`,
          _type: 'object',
          text: 'Development of a customized risk assessment methodology for your company'
        },
        {
          _key: `serviceFeature_${timestamp}_6`,
          _type: 'object',
          text: 'Design of processes for periodic and event-driven risk assessments'
        },
        {
          _key: `serviceFeature_${timestamp}_7`,
          _type: 'object',
          text: 'Definition of risk assessment criteria and risk matrices'
        },
        {
          _key: `serviceFeature_${timestamp}_8`,
          _type: 'object',
          text: 'Development of tools and templates for efficient risk assessments'
        }
      ]
    },
    {
      _key: `service_${timestamp}_3`,
      _type: 'object',
      title: 'ICS Effectiveness Testing and Test Concepts',
      description: 'Development and implementation of effective test concepts for verifying the effectiveness of your internal control system. We support you in developing risk-oriented test plans, defining appropriate test methods, and efficiently conducting effectiveness testing.',
      features: [
        {
          _key: `serviceFeature_${timestamp}_9`,
          _type: 'object',
          text: 'Design of risk-oriented test plans with appropriate testing depth and frequency'
        },
        {
          _key: `serviceFeature_${timestamp}_10`,
          _type: 'object',
          text: 'Development of test scripts and standard operating procedures for control testing'
        },
        {
          _key: `serviceFeature_${timestamp}_11`,
          _type: 'object',
          text: 'Implementation of efficient test management with clear responsibilities'
        },
        {
          _key: `serviceFeature_${timestamp}_12`,
          _type: 'object',
          text: 'Establishment of a structured follow-up process for identified weaknesses'
        }
      ]
    },
    {
      _key: `service_${timestamp}_4`,
      _type: 'object',
      title: 'ICS Reporting and Analytics',
      description: 'Design and implementation of a meaningful reporting system for your internal control system. We support you in developing customized reports and dashboards that provide your stakeholders with relevant risk and control information in a clear format.',
      features: [
        {
          _key: `serviceFeature_${timestamp}_13`,
          _type: 'object',
          text: 'Development of a target group-oriented ICS reporting strategy'
        },
        {
          _key: `serviceFeature_${timestamp}_14`,
          _type: 'object',
          text: 'Design of meaningful management dashboards and KPI reports'
        },
        {
          _key: `serviceFeature_${timestamp}_15`,
          _type: 'object',
          text: 'Implementation of analytical methods for identifying trends and patterns'
        },
        {
          _key: `serviceFeature_${timestamp}_16`,
          _type: 'object',
          text: 'Integration of reporting tools and platforms for efficient report generation'
        }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'Systematic ICS monitoring and regular risk assessments are not just regulatory requirements, but decisive success factors for a sustainable internal control system. Through continuous oversight and targeted effectiveness testing, control weaknesses are detected early, risks are made transparent, and real added value is created for the company. The key lies in a balanced mix of classic tests, automated monitoring, and data-based analytics.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI DE'
  },
  faq: []
}

export async function createLaufendesMonitoringEn() {
  console.log('Creating Continuous Monitoring & Risk Assessment English page...')
  
  const result = await client.createOrReplace(laufendesMonitoringEn)
  console.log(`Created/Updated page: ${result._id}`)
  
  return result
}

createLaufendesMonitoringEn().catch(console.error)
