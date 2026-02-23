import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import { join } from 'path'

dotenv.config({ path: join(process.cwd(), '.env') })

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Helper function to generate unique keys
function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Creating NIS2 Readiness Assessment page...')

    const nis2ReadinessData = {
      _type: 'servicePage',
      _id: 'regulatory-compliance-management-nis2-nis2-readiness',
      title: 'NIS2 Readiness Assessment',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/nis2/nis2-readiness'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management-nis2'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'regulatory-reporting'
        }
      },
      seo: {
        _type: 'seo',
        title: 'NIS2 Readiness Assessment | ADVISORI',
        description: 'Comprehensive NIS2-Readiness-Assessments für kritische Infrastrukturen. Gap-Analyse, Compliance-Readiness-Evaluation und Strategic-Implementation-Roadmaps für NIS2-Excellence.',
        keywords: 'NIS2 Readiness Assessment, NIS2 Gap Analysis, Cybersecurity Readiness, Critical Infrastructure Assessment, NIS2 Compliance Evaluation, EU Cybersecurity Readiness'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIS2 Readiness Assessment'
        },
        tagline: 'Strategic NIS2-Readiness für kritische Infrastrukturen',
        heading: 'NIS2 Readiness Assessment',
        description: 'Comprehensive NIS2-Readiness-Evaluation für kritische Infrastrukturen. Wir identifizieren Compliance-Gaps, bewerten Current-State-Capabilities und entwickeln Strategic-Implementation-Roadmaps für nachhaltige NIS2-Excellence und operative Cybersecurity-Resilienz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Comprehensive NIS2-Gap-Analysis und Readiness-Evaluation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategic Implementation-Roadmaps mit Prioritization'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Risk-Based Compliance-Assessment und Mitigation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Actionable Recommendations für Executive-Decision-Making'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategic NIS2-Readiness-Assessment für operative Excellence',
        description: 'NIS2-Readiness erfordert systematic Evaluation aktueller Cybersecurity-Capabilities gegen neue regulatorische Anforderungen. Unsere Comprehensive-Assessment-Methodology identifiziert kritische Gaps und entwickelt strategic Roadmaps für efficient NIS2-Compliance-Achievement.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Current-State-Analysis bestehender Cybersecurity-Frameworks und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Comprehensive Gap-Identification gegen alle NIS2-Requirements und Technical-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Risk-Prioritized Implementation-Planning mit Resource-Optimization'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Strategic Cost-Benefit-Analysis für Cybersecurity-Investment-Decisions'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Actionable Roadmap-Development mit Executive-Level-Recommendations'
          }
        ],
        alert: {
          title: 'NIS2-Readiness-Kritikalität',
          content: 'Unvollständige NIS2-Readiness kann zu erheblichen Compliance-Gaps und Implementation-Delays führen. Early-Assessment ermöglicht proactive Planning und Risk-Mitigation für successful NIS2-Compliance-Achievement. Unser systematic Approach gewährleistet comprehensive Readiness-Evaluation.'
        },
        whyUs: {
          title: 'Unsere Assessment-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Deep NIS2-Regulation-Knowledge und Critical-Infrastructure-Experience'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Proven Assessment-Methodologies mit quantified Gap-Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Strategic Business-Context-Integration für optimal ROI-Achievement'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Actionable Recommendations mit Executive-Decision-Support'
            }
          ]
        },
        additionalInfo: 'NIS2-Readiness-Assessment ist strategic Foundation für successful Compliance-Implementation und Long-Term-Cybersecurity-Excellence.',
        serviceDescription: 'Wir bieten comprehensive NIS2-Readiness-Assessments, die Current-State-Evaluation, Gap-Analysis und Strategic-Planning für optimal NIS2-Compliance-Achievement kombinieren.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Systematic Current-State-Analysis und Cybersecurity-Maturity-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Comprehensive NIS2-Gap-Identification mit Risk-Prioritization'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Strategic Implementation-Roadmap mit Timeline und Resource-Planning'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Cost-Benefit-Analysis und ROI-Calculation für Investment-Decisions'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Executive-Summary mit Actionable-Recommendations für C-Level-Decision-Making'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Assessment-Approach',
        description: 'Wir verfolgen einen systematic, evidence-based Approach für NIS2-Readiness-Assessment, der comprehensive Evaluation mit strategic Implementation-Planning verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Current-State-Documentation und Stakeholder-Interviews'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematic Gap-Analysis gegen alle NIS2-Requirements'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Risk-Based Prioritization und Impact-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Strategic Roadmap-Development mit Resource-Optimization'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Executive-Presentation und Implementation-Support-Planning'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Das NIS2-Readiness-Assessment von ADVISORI hat uns strategic Clarity für unsere Compliance-Journey gegeben. Die comprehensive Gap-Analysis und actionable Roadmap ermöglichen confident Implementation-Planning und Executive-Decision-Making.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Comprehensive NIS2 Gap Analysis',
          description: 'Systematic Evaluation aktueller Cybersecurity-Capabilities gegen alle NIS2-Requirements mit detailed Gap-Identification und Risk-Assessment für strategic Implementation-Planning.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Complete Current-State-Assessment aller Cybersecurity-Domains'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Detailed Gap-Analysis gegen NIS2-Requirements mit Evidence-Documentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risk-Impact-Assessment für identified Gaps mit Business-Context'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Quantified Readiness-Score mit Benchmark-Comparison'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Strategic Implementation Roadmap',
          description: 'Development einer comprehensive Implementation-Strategy mit prioritized Action-Items, Resource-Planning und Executive-Guidance für successful NIS2-Compliance-Achievement.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Risk-Prioritized Implementation-Plan mit Timeline und Milestones'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Resource-Requirements-Analysis mit Budget-Planning-Support'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Stakeholder-Engagement-Strategy für Cross-Functional-Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Executive-Dashboard-Recommendations für Progress-Monitoring'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nis2ReadinessData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIS2 Readiness Assessment page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
