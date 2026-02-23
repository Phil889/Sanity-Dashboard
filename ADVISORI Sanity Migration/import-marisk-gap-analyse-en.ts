// Import script for MaRisk Gap-Analyse - English Translation
// Source: marisk-gap-analyse (German)
// Target: marisk-gap-analyse-en (English)

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
import { mariskGapAnalyseEnFaqsBatch1 } from './marisk-gap-analyse-en-faqs-batch1'
import { mariskGapAnalyseEnFaqsBatch2 } from './marisk-gap-analyse-en-faqs-batch2'
import { mariskGapAnalyseEnFaqsBatch3 } from './marisk-gap-analyse-en-faqs-batch3'
import { mariskGapAnalyseEnFaqsBatch4 } from './marisk-gap-analyse-en-faqs-batch4'
import { mariskGapAnalyseEnFaqsBatch5 } from './marisk-gap-analyse-en-faqs-batch5'

const mariskGapAnalyseEnDocument = {
  _id: 'marisk-gap-analyse-en',
  _type: 'servicePage',
  title: 'MaRisk Gap Analysis',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'marisk-gap-analyse'
  },
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/marisk/marisk-readiness/marisk-gap-analyse-en'
  },
  parent: {
    _type: 'reference',
    _ref: 'marisk-readiness'
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
    title: 'MaRisk Gap Analysis | ADVISORI',
    description: 'Systematically identify compliance gaps with our comprehensive MaRisk gap analysis and ensure your regulatory conformity.',
    keywords: 'MaRisk gap analysis, MaRisk compliance, regulatory requirements, risk management, BaFin, banking supervision, compliance assessment'
  },
  heroSection: {
    _type: 'object',
    heading: 'MaRisk Gap Analysis',
    tagline: 'Precise Identification of Compliance Gaps',
    description: 'With our MaRisk gap analysis, we systematically identify deviations between your existing structures and current MaRisk requirements. We deliver a comprehensive assessment and concrete action recommendations for your regulatory conformity.',
    heroImage: {
      _type: 'image',
      alt: 'MaRisk Gap Analysis'
    },
    benefits: [
      {
        _key: `benefit_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Systematic identification of compliance gaps'
      },
      {
        _key: `benefit_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Prioritized action recommendations by risk and effort'
      },
      {
        _key: `benefit_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Decision basis for targeted implementation'
      },
      {
        _key: `benefit_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Reduction of regulatory risks and process optimization'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'MaRisk Gap Analysis',
    description: 'Our MaRisk gap analysis is a methodical approach to identifying deviations between your current structures and regulatory requirements. We systematically analyze all relevant areas and deliver a detailed assessment with clear action recommendations.',
    additionalInfo: 'A structured MaRisk gap analysis can reduce implementation effort by up to 35% and sustainably improve the effectiveness of your risk management. Invest in a professional analysis to benefit long-term from compliant and efficient processes.',
    serviceDescription: 'Our MaRisk gap analysis includes the structured assessment of your current processes, identification of compliance gaps and development of a prioritized action plan. We support you in setting the right priorities and deploying your resources efficiently.',
    alert: {
      _type: 'object',
      title: 'Expert Tip',
      content: 'An early and thorough gap analysis significantly reduces implementation effort and minimizes the risk of supervisory measures. Use our expertise to set the right priorities from the start.'
    },
    points: [
      {
        _key: `point_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Comprehensive analysis of all MaRisk-relevant areas'
      },
      {
        _key: `point_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Assessment of identified gaps by risk and urgency'
      },
      {
        _key: `point_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Creation of a detailed action catalog'
      },
      {
        _key: `point_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Prioritization of measures by effort and benefit'
      },
      {
        _key: `point_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Development of a roadmap for systematic gap closure'
      }
    ],
    servicePoints: [
      {
        _key: `servicePoint_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Initial as-is assessment and document analysis'
      },
      {
        _key: `servicePoint_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Structured interviews with specialist departments'
      },
      {
        _key: `servicePoint_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Systematic comparison with MaRisk requirements'
      },
      {
        _key: `servicePoint_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Creation of a detailed gap report'
      },
      {
        _key: `servicePoint_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Development of a prioritized action plan'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our Strengths',
      points: [
        {
          _key: `whyUs_en_${Date.now()}_1`,
          _type: 'object',
          text: 'Deep regulatory understanding and experience with MaRisk audits'
        },
        {
          _key: `whyUs_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Pragmatic approach with focus on efficiency and added value'
        },
        {
          _key: `whyUs_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Combination of regulatory expertise and implementation competence'
        },
        {
          _key: `whyUs_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Experienced consulting team with background from banks and supervision'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We conduct the MaRisk gap analysis in a structured, multi-stage process tailored to your specific requirements.',
    points: [
      {
        _key: `approach_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Initial inventory and document analysis'
      },
      {
        _key: `approach_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Structured interviews with specialist departments and control functions'
      },
      {
        _key: `approach_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Systematic comparison with current MaRisk requirements'
      },
      {
        _key: `approach_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Assessment of gaps by risk, urgency and effort'
      },
      {
        _key: `approach_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Development of a prioritized action plan and implementation roadmap'
      }
    ]
  },
  services: [
    {
      _key: `service_en_${Date.now()}_1`,
      _type: 'object',
      title: 'Comprehensive MaRisk Gap Analysis',
      description: 'We conduct a systematic analysis of all MaRisk-relevant areas and identify compliance gaps.',
      features: [
        {
          _key: `feature_en_${Date.now()}_1`,
          _type: 'object',
          text: 'Systematic analysis of all MaRisk-relevant areas'
        },
        {
          _key: `feature_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Identification of compliance gaps and action needs'
        },
        {
          _key: `feature_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Risk assessment of identified gaps'
        },
        {
          _key: `feature_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Creation of a detailed gap report'
        }
      ]
    },
    {
      _key: `service_en_${Date.now()}_2`,
      _type: 'object',
      title: 'Action Planning and Roadmap',
      description: 'We develop a prioritized action plan and roadmap for systematic closure of identified gaps.',
      features: [
        {
          _key: `feature_en_${Date.now()}_5`,
          _type: 'object',
          text: 'Development of a detailed action catalog'
        },
        {
          _key: `feature_en_${Date.now()}_6`,
          _type: 'object',
          text: 'Prioritization of measures by risk and effort'
        },
        {
          _key: `feature_en_${Date.now()}_7`,
          _type: 'object',
          text: 'Creation of an implementation roadmap'
        },
        {
          _key: `feature_en_${Date.now()}_8`,
          _type: 'object',
          text: 'Development of KPIs for progress measurement'
        }
      ]
    },
    {
      _key: `service_en_${Date.now()}_3`,
      _type: 'object',
      title: 'Workshops and Training',
      description: 'We conduct workshops and training to prepare your team for MaRisk requirements and support implementation.',
      features: [
        {
          _key: `feature_en_${Date.now()}_9`,
          _type: 'object',
          text: 'Awareness workshops for executives'
        },
        {
          _key: `feature_en_${Date.now()}_10`,
          _type: 'object',
          text: 'Training on specific MaRisk requirements'
        },
        {
          _key: `feature_en_${Date.now()}_11`,
          _type: 'object',
          text: 'Support in implementing measures'
        },
        {
          _key: `feature_en_${Date.now()}_12`,
          _type: 'object',
          text: 'Facilitation of stakeholder workshops for action planning'
        }
      ]
    }
  ],
  faq: [
    ...mariskGapAnalyseEnFaqsBatch1,
    ...mariskGapAnalyseEnFaqsBatch2,
    ...mariskGapAnalyseEnFaqsBatch3,
    ...mariskGapAnalyseEnFaqsBatch4,
    ...mariskGapAnalyseEnFaqsBatch5
  ],
  testimonial: {
    _type: 'object',
    quote: 'The ADVISORI MaRisk gap analysis provided us with a precise overview of our compliance gaps. Through the structured approach and clear action recommendations, we were able to deploy our resources in a targeted manner and make implementation more efficient. The expertise of the team was a decisive success factor.',
    name: 'Thomas Weber',
    position: 'Senior Director',
    company: 'ADVISORI FTC GmbH'
  }
}

async function importMariskGapAnalyseEn() {
  console.log('Starting import of MaRisk Gap-Analyse EN...')
  console.log(`Document ID: ${mariskGapAnalyseEnDocument._id}`)
  console.log(`Total FAQs: ${mariskGapAnalyseEnDocument.faq.length}`)
  console.log(`Total Services: ${mariskGapAnalyseEnDocument.services.length}`)
  
  try {
    const result = await client.createOrReplace(mariskGapAnalyseEnDocument)
    console.log('✅ Successfully imported MaRisk Gap-Analyse EN')
    console.log(`Document ID: ${result._id}`)
    return result
  } catch (error) {
    console.error('❌ Error importing document:', error)
    throw error
  }
}

importMariskGapAnalyseEn()
  .then(() => {
    console.log('Import completed successfully')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Import failed:', error)
    process.exit(1)
  })
