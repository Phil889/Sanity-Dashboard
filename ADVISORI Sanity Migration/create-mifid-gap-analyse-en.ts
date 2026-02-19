import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const mifidGapAnalyseEn = {
  _id: 'mifid-gap-analyse-roadmap-en',
  _type: 'servicePage',
  title: 'MiFID Gap Analysis & Roadmap',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'mifid-gap-analyse-roadmap'
  },
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/mifid/mifid-ii-readiness/mifid-gap-analyse-roadmap-en'
  },
  parent: {
    _ref: 'mifid-ii-readiness',
    _type: 'reference'
  },
  references: {
    _type: 'object',
    topLevelParent: {
      _ref: 'regulatory-compliance-management',
      _type: 'reference'
    }
  },
  seo: {
    _type: 'seo',
    title: 'MiFID Gap Analysis & Roadmap | ADVISORI',
    description: 'Comprehensive gap analysis and strategic roadmap for your MiFID II implementation. We identify gaps in processes, systems and governance and develop a tailored implementation plan.',
    keywords: 'MiFID II Gap Analysis, MiFID Roadmap, Regulatory Gap Analysis, MiFID Implementation Plan, Compliance Strategy, Financial Markets Directive, Implementation Roadmap'
  },
  heroSection: {
    _type: 'object',
    heading: 'MiFID Gap Analysis & Roadmap',
    tagline: 'Strategic analysis and structured implementation for MiFID compliance',
    description: 'A well-founded gap analysis and strategic roadmap are crucial for efficient and sustainable MiFID II implementation. We systematically identify all compliance gaps and develop a tailored, prioritized implementation plan with you.',
    heroImage: {
      _type: 'image',
      alt: 'MiFID Gap Analysis & Roadmap'
    },
    benefits: [
      {
        _key: `benefit_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Systematic identification of all regulatory gaps and action requirements'
      },
      {
        _key: `benefit_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Prioritized and resource-optimized implementation strategy'
      },
      {
        _key: `benefit_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Clear milestones and responsibilities for the entire implementation process'
      },
      {
        _key: `benefit_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Strategic integration of MiFID requirements into existing business processes'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'MiFID Gap Analysis & Roadmap',
    description: 'MiFID II presents financial institutions with complex challenges in areas such as investor protection, transparency, trade execution and reporting. Our structured gap analysis and strategic roadmap development enable targeted, efficient and sustainable implementation of these comprehensive regulatory requirements.',
    additionalInfo: 'MiFID II gap analysis and roadmap development form the foundation for successful regulatory transformation. Through our structured and holistic approach, we ensure that all relevant aspects are considered and implementation is carried out efficiently and sustainably.',
    serviceDescription: 'Our service offering encompasses comprehensive gap analysis and development of a tailored implementation roadmap for your MiFID II compliance. We provide a structured approach that aligns regulatory requirements with business objectives.',
    alert: {
      _type: 'object',
      title: 'Expert Tip',
      content: 'A successful MiFID II implementation begins with a precise gap analysis that considers not only formal compliance aspects but also identifies opportunities for process optimization and efficiency improvement. Significant synergies can be realized by integrating regulatory requirements into your business strategy.'
    },
    points: [
      {
        _key: `point_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Detailed assessment of current processes, systems and governance structures compared to MiFID II requirements'
      },
      {
        _key: `point_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Identification of critical compliance gaps and prioritization of action requirements'
      },
      {
        _key: `point_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Development of a tailored implementation roadmap with clear milestones and responsibilities'
      },
      {
        _key: `point_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Cost-benefit analysis of various implementation options for decision support'
      },
      {
        _key: `point_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Establishment of a robust monitoring framework for ongoing compliance assurance'
      }
    ],
    servicePoints: [
      {
        _key: `servicePoint_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Comprehensive as-is analysis of current processes, systems and compliance structures'
      },
      {
        _key: `servicePoint_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Detailed assessment of MiFID II requirements and their relevance to your business model'
      },
      {
        _key: `servicePoint_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Systematic identification of compliance gaps and action requirements'
      },
      {
        _key: `servicePoint_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Development of a prioritized implementation roadmap with clear milestones'
      },
      {
        _key: `servicePoint_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Support with planning and resource allocation for the implementation phase'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our Strengths',
      points: [
        {
          _key: `whyUs_en_${Date.now()}_1`,
          _type: 'object',
          text: 'Comprehensive expertise in all aspects of MiFID II regulation and its practical implementation'
        },
        {
          _key: `whyUs_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Proven methodology for systematic identification and assessment of compliance gaps'
        },
        {
          _key: `whyUs_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Pragmatic approach with focus on feasibility and value creation'
        },
        {
          _key: `whyUs_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Extensive experience in successful implementation of MiFID II projects of various scales'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We pursue a structured and proven approach in conducting MiFID II gap analysis and developing a tailored implementation roadmap.',
    points: [
      {
        _key: `approach_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Initial scoping phase to define the analysis spectrum and relevant MiFID II requirements'
      },
      {
        _key: `approach_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Conducting comprehensive as-is analysis through workshops, interviews and document review'
      },
      {
        _key: `approach_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Systematic gap identification and assessment of action requirements by urgency and complexity'
      },
      {
        _key: `approach_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Development of a detailed implementation roadmap with concrete measures and milestones'
      },
      {
        _key: `approach_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Validation and alignment of the roadmap with all relevant stakeholders to ensure feasibility'
      }
    ]
  },
  services: [
    {
      _key: `service_en_${Date.now()}_1`,
      _type: 'object',
      title: 'Comprehensive MiFID II Gap Analysis',
      description: 'We conduct a detailed analysis of your current processes, systems and governance structures and systematically identify all gaps with respect to MiFID II requirements.',
      features: [
        {
          _key: `feature_en_${Date.now()}_1`,
          _type: 'object',
          text: 'Detailed assessment of all relevant MiFID II requirements and their implications'
        },
        {
          _key: `feature_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Systematic analysis of processes, systems, documentation and governance'
        },
        {
          _key: `feature_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Identification and prioritization of compliance gaps by criticality and complexity'
        },
        {
          _key: `feature_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Detailed documentation of results with concrete action recommendations'
        }
      ]
    },
    {
      _key: `service_en_${Date.now()}_2`,
      _type: 'object',
      title: 'Strategic MiFID II Implementation Roadmap',
      description: 'Based on the gap analysis, we develop a tailored implementation roadmap that shows a structured and efficient path to MiFID II compliance.',
      features: [
        {
          _key: `feature_en_${Date.now()}_5`,
          _type: 'object',
          text: 'Development of a prioritized action list with clear dependencies and timelines'
        },
        {
          _key: `feature_en_${Date.now()}_6`,
          _type: 'object',
          text: 'Definition of concrete milestones and Key Performance Indicators (KPIs)'
        },
        {
          _key: `feature_en_${Date.now()}_7`,
          _type: 'object',
          text: 'Resource planning and budget estimates for individual implementation phases'
        },
        {
          _key: `feature_en_${Date.now()}_8`,
          _type: 'object',
          text: 'Development of a monitoring framework for continuous progress control'
        }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'A precise gap analysis and strategic roadmap are crucial for the success of any MiFID II implementation. Our experience shows that companies that invest in this preparation phase not only experience smoother implementation but can also realize significant efficiency gains and competitive advantages.',
    name: 'Dr. Julia Kramer',
    position: 'Senior Manager',
    company: 'ADVISORI FTC GmbH'
  },
  faq: []
}

export async function createMifidGapAnalyseEn() {
  console.log('Creating MiFID Gap Analysis & Roadmap EN page...')
  
  try {
    const result = await client.createOrReplace(mifidGapAnalyseEn)
    console.log('Created MiFID Gap Analysis & Roadmap EN page:', result._id)
    return result
  } catch (error) {
    console.error('Error creating page:', error)
    throw error
  }
}

export { mifidGapAnalyseEn }
