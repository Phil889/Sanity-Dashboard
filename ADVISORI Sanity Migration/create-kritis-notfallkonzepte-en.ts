import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

const kritisNotfallkonzepteEn = {
  _id: 'kritis-notfallkonzepte-ressourcenplanung-en',
  _type: 'servicePage',
  title: 'KRITIS Emergency Concepts & Resource Planning',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'kritis-notfallkonzepte-ressourcenplanung'
  },
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/kritis/kritis-readiness/kritis-notfallkonzepte-ressourcenplanung-en'
  },
  parent: {
    _type: 'reference',
    _ref: 'kritis-readiness'
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
    title: 'KRITIS Emergency Concepts & Resource Planning | ADVISORI',
    description: 'Professional KRITIS emergency concepts and strategic resource planning for critical infrastructure. Business Continuity Planning, Incident Response and Crisis Management.',
    keywords: 'KRITIS Emergency Concepts, Resource Planning, Business Continuity, Incident Response, Crisis Management, BSI, KRITIS-VO, Emergency Planning'
  },
  heroSection: {
    _type: 'object',
    heading: 'KRITIS Emergency Concepts & Resource Planning',
    tagline: 'Robust Emergency Concepts for Critical Infrastructure',
    description: 'Development of comprehensive emergency concepts and strategic resource planning for KRITIS companies. We create the organizational and operational foundations for resilient business continuity during critical disruptions and ensure compliance with the KRITIS Regulation.',
    heroImage: {
      _type: 'image',
      alt: 'KRITIS Emergency Concepts & Resource Planning'
    },
    benefits: [
      {
        _key: `benefit_${Date.now()}_1`,
        _type: 'object',
        text: 'Customized Business Continuity Plans for critical infrastructure'
      },
      {
        _key: `benefit_${Date.now()}_2`,
        _type: 'object',
        text: 'Structured Incident Response processes and escalation procedures'
      },
      {
        _key: `benefit_${Date.now()}_3`,
        _type: 'object',
        text: 'Strategic resource planning for emergency and crisis scenarios'
      },
      {
        _key: `benefit_${Date.now()}_4`,
        _type: 'object',
        text: 'Compliance with KRITIS-VO and BSI requirements'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'KRITIS Emergency Concepts & Resource Planning',
    description: 'Critical infrastructure requires robust emergency concepts and well-thought-out resource planning to maintain supply security even in severe crisis scenarios. We develop customized concepts that integrate organizational, technical, and operational aspects.',
    additionalInfo: 'Over 95% of the KRITIS companies we support successfully pass regulatory audits of their emergency concepts and achieve significant improvement in their resilience against critical disruptions.',
    serviceDescription: 'Our KRITIS Emergency Concepts and Resource Planning cover all aspects of operational continuity. From strategic planning through operational implementation to continuous improvement, we provide comprehensive support.',
    alert: {
      _type: 'object',
      title: 'KRITIS Compliance',
      content: 'Effective emergency concepts are legally required and reduce the risk of regulatory sanctions by 95%. Invest in professional emergency planning for sustainable compliance and operational excellence.'
    },
    points: [
      {
        _key: `point_${Date.now()}_1`,
        _type: 'object',
        text: 'Business Continuity Management (BCM) for critical infrastructure'
      },
      {
        _key: `point_${Date.now()}_2`,
        _type: 'object',
        text: 'Incident Response plans and crisis management processes'
      },
      {
        _key: `point_${Date.now()}_3`,
        _type: 'object',
        text: 'Resource requirements analysis and strategic procurement planning'
      },
      {
        _key: `point_${Date.now()}_4`,
        _type: 'object',
        text: 'Communication and stakeholder management in crisis situations'
      },
      {
        _key: `point_${Date.now()}_5`,
        _type: 'object',
        text: 'Emergency exercises and continuous improvement of plans'
      }
    ],
    servicePoints: [
      {
        _key: `servicePoint_${Date.now()}_1`,
        _type: 'object',
        text: 'Business Impact Analysis (BIA) for critical processes'
      },
      {
        _key: `servicePoint_${Date.now()}_2`,
        _type: 'object',
        text: 'Development of customized Business Continuity Plans'
      },
      {
        _key: `servicePoint_${Date.now()}_3`,
        _type: 'object',
        text: 'Incident Response and Crisis Management frameworks'
      },
      {
        _key: `servicePoint_${Date.now()}_4`,
        _type: 'object',
        text: 'Strategic resource planning and procurement concepts'
      },
      {
        _key: `servicePoint_${Date.now()}_5`,
        _type: 'object',
        text: 'Emergency exercises and plan updates'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our Expertise',
      points: [
        {
          _key: `whyUs_${Date.now()}_1`,
          _type: 'object',
          text: 'Specialization in KRITIS-compliant emergency concepts and BCM'
        },
        {
          _key: `whyUs_${Date.now()}_2`,
          _type: 'object',
          text: 'Cross-industry experience with various critical infrastructures'
        },
        {
          _key: `whyUs_${Date.now()}_3`,
          _type: 'object',
          text: 'Proven methods for resource planning and crisis management'
        },
        {
          _key: `whyUs_${Date.now()}_4`,
          _type: 'object',
          text: 'Close collaboration with authorities and supervisory bodies'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We systematically develop interconnected emergency concepts and resource plans that consider all relevant stakeholders and dependencies.',
    points: [
      {
        _key: `approach_${Date.now()}_1`,
        _type: 'object',
        text: 'Comprehensive analysis of critical business processes and dependencies'
      },
      {
        _key: `approach_${Date.now()}_2`,
        _type: 'object',
        text: 'Development of scenario-based emergency and continuity plans'
      },
      {
        _key: `approach_${Date.now()}_3`,
        _type: 'object',
        text: 'Structured resource requirements analysis and procurement planning'
      },
      {
        _key: `approach_${Date.now()}_4`,
        _type: 'object',
        text: 'Implementation of Incident Response and escalation processes'
      },
      {
        _key: `approach_${Date.now()}_5`,
        _type: 'object',
        text: 'Regular exercises and continuous plan optimization'
      }
    ]
  },
  testimonial: {
    _type: 'object',
    quote: 'The emergency concepts developed by ADVISORI have significantly strengthened our resilience. The structured approach and practice-oriented solutions enable us to remain capable of action even in critical situations and ensure supply security.',
    name: 'Dr. Michael Weber',
    position: 'Head of Crisis Management',
    company: 'Energy Supply Company'
  },
  services: [
    {
      _key: `service_${Date.now()}_1`,
      _type: 'object',
      title: 'Business Continuity Planning',
      description: 'Development of comprehensive business continuity plans for critical infrastructure with focus on supply security.',
      features: [
        {
          _key: `serviceFeature_${Date.now()}_1`,
          _type: 'object',
          text: 'Business Impact Analysis (BIA) of critical processes'
        },
        {
          _key: `serviceFeature_${Date.now()}_2`,
          _type: 'object',
          text: 'Scenario-based continuity planning'
        },
        {
          _key: `serviceFeature_${Date.now()}_3`,
          _type: 'object',
          text: 'Recovery Time/Point Objectives (RTO/RPO) definition'
        },
        {
          _key: `serviceFeature_${Date.now()}_4`,
          _type: 'object',
          text: 'Alternative operating concepts and workarounds'
        }
      ]
    },
    {
      _key: `service_${Date.now()}_2`,
      _type: 'object',
      title: 'Incident Response & Crisis Management',
      description: 'Structured Incident Response processes and professional crisis management for critical disruption situations.',
      features: [
        {
          _key: `serviceFeature_${Date.now()}_5`,
          _type: 'object',
          text: 'Incident Response Team (IRT) structures'
        },
        {
          _key: `serviceFeature_${Date.now()}_6`,
          _type: 'object',
          text: 'Escalation and decision processes'
        },
        {
          _key: `serviceFeature_${Date.now()}_7`,
          _type: 'object',
          text: 'Communication strategies and stakeholder management'
        },
        {
          _key: `serviceFeature_${Date.now()}_8`,
          _type: 'object',
          text: 'Post-Incident Review and Lessons Learned'
        }
      ]
    },
    {
      _key: `service_${Date.now()}_3`,
      _type: 'object',
      title: 'Strategic Resource Planning',
      description: 'Systematic planning and procurement of critical resources for emergency and crisis scenarios.',
      features: [
        {
          _key: `serviceFeature_${Date.now()}_9`,
          _type: 'object',
          text: 'Resource requirements analysis for critical scenarios'
        },
        {
          _key: `serviceFeature_${Date.now()}_10`,
          _type: 'object',
          text: 'Strategic procurement and inventory concepts'
        },
        {
          _key: `serviceFeature_${Date.now()}_11`,
          _type: 'object',
          text: 'Supplier and partnership management'
        },
        {
          _key: `serviceFeature_${Date.now()}_12`,
          _type: 'object',
          text: 'Emergency budgeting and cost planning'
        }
      ]
    }
  ],
  faq: []
}

export async function createKritisNotfallkonzepteEn() {
  console.log('Creating KRITIS Notfallkonzepte & Ressourcenplanung EN page...')
  
  const result = await client.createOrReplace(kritisNotfallkonzepteEn)
  console.log('Created KRITIS Notfallkonzepte EN page:', result._id)
  
  return result
}

// Execute if run directly
createKritisNotfallkonzepteEn().catch(console.error)
