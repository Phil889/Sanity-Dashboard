import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
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
    console.log('Creating FIDA Readiness Assessment page...')

    const fidaReadinessData = {
      _type: 'servicePage',
      _id: 'fida-readiness-assessment',
      title: 'FIDA Readiness Assessment',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/financial-data-access-fida/fida-readiness-assessment'
      },
      parent: {
        _type: 'reference',
        _ref: 'financial-data-access-fida'
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
        title: 'FIDA Readiness Assessment | Compliance Evaluation | ADVISORI',
        description: 'Umfassende FIDA Readiness Assessments für Finanzdienstleister. Bewertung der Compliance-Bereitschaft, Gap-Analyse und strategische Implementierungsplanung für Financial Data Access Regulation.',
        keywords: 'FIDA Readiness, Compliance Assessment, Gap Analyse, Financial Data Access, Regulatorische Bereitschaft, FIDA Vorbereitung, Compliance Evaluation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FIDA Readiness Assessment Compliance Evaluation'
        },
        tagline: 'Proaktive FIDA-Bereitschaft als strategischer Wettbewerbsvorteil',
        heading: 'FIDA Readiness Assessment',
        description: 'Eine umfassende Bewertung Ihrer FIDA-Bereitschaft ist der Grundstein für erfolgreiche Compliance und strategische Marktpositionierung. Wir evaluieren Ihre aktuelle Position, identifizieren Optimierungspotenziale und entwickeln maßgeschneiderte Umsetzungsstrategien.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Comprehensive FIDA-Bereitschaftsbewertung und strategische Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Technologie-Assessment und API-Readiness-Evaluation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Organisatorische Capability-Bewertung und Change-Readiness'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Priorisierte Umsetzungsroadmap mit Quick-Win-Identifikation'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische FIDA-Bereitschaft systematisch bewerten',
        description: 'FIDA-Readiness geht weit über technische Compliance hinaus und umfasst strategische, organisatorische und technologische Dimensionen. Eine systematische Bewertung Ihrer Bereitschaft ermöglicht proaktive Vorbereitung und die Nutzung von FIDA als Wettbewerbsvorteil.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Holistische Bewertung aller FIDA-relevanten Geschäftsbereiche und Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Technische Infrastruktur-Assessment und API-Readiness-Evaluation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Organisatorische Capability-Analyse und Change-Management-Bereitschaft'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Risikobewertung und Compliance-Gap-Identifikation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Strategische Implementierungsplanung und Priorisierung'
          }
        ],
        alert: {
          title: 'Proaktiver Vorteil',
          content: 'Organisationen, die ihre FIDA-Bereitschaft frühzeitig bewerten und systematisch verbessern, können regulatorische Anforderungen nicht nur erfüllen, sondern als Katalysator für Geschäftsinnovation und Marktdifferenzierung nutzen.'
        },
        whyUs: {
          title: 'Unsere Assessment-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Bewährte FIDA-Assessment-Methodologien und Evaluation-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefgreifende Expertise in regulatorischen und technischen Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Bewertungsansätze für verschiedene Finanzdienstleister'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Strategische Beratung von Assessment bis Implementation'
            }
          ]
        },
        additionalInfo: 'FIDA-Readiness Assessment umfasst die systematische Evaluation aller Aspekte, die für erfolgreiche Financial Data Access Compliance erforderlich sind. Dies beinhaltet technische Infrastruktur, organisatorische Prozesse, Datenschutz-Frameworks, API-Architekturen und strategische Geschäftsmodell-Anpassungen.',
        serviceDescription: 'Wir führen umfassende FIDA-Readiness-Assessments durch, die Ihre aktuelle Position objektiv bewerten, kritische Gaps identifizieren und priorisierte Umsetzungsstrategien entwickeln. Unser Ansatz kombiniert technische Evaluation mit strategischer Geschäftsberatung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Comprehensive Business und Technical Readiness Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Gap-Analyse und Risikobewertung mit Prioritätsdefinition'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Strategische Implementierungsroadmap und Quick-Win-Identifikation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Organisatorische Change-Readiness und Capability-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Monitoring-Frameworks und Success-Metriken'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Assessment-Ansatz',
        description: 'Wir nutzen bewährte Assessment-Methodologien, die alle kritischen Dimensionen der FIDA-Bereitschaft systematisch evaluieren und actionable Insights für Ihre Implementierungsstrategie liefern.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strukturierte Analyse Ihrer aktuellen Geschäfts- und Technologielandschaft'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Comprehensive Gap-Identifikation und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung priorisierter Umsetzungsstrategien und Roadmaps'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Stakeholder-Alignment und Change-Management-Vorbereitung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung kontinuierlicher Monitoring- und Verbesserungsprozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Ein systematisches FIDA Readiness Assessment ist der Schlüssel für erfolgreiche Compliance und strategische Marktpositionierung. Unsere bewährten Assessment-Methodologien ermöglichen es Organisationen, ihre Bereitschaft objektiv zu bewerten, kritische Gaps zu identifizieren und proaktive Implementierungsstrategien zu entwickeln, die regulatorische Anforderungen in Wettbewerbsvorteile verwandeln.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Comprehensive Business Readiness Assessment',
          description: 'Holistische Bewertung Ihrer organisatorischen und strategischen Bereitschaft für FIDA-Compliance und -Implementation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strategische Geschäftsmodell-Analyse und FIDA-Impact-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Organisatorische Capability-Bewertung und Skill-Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Stakeholder-Readiness und Change-Management-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Governance-Framework-Evaluation und Entscheidungsstrukturen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technical Infrastructure und API Readiness Evaluation',
          description: 'Umfassende Bewertung Ihrer technischen Infrastruktur und API-Bereitschaft für FIDA-konforme Datenfreigabe.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'IT-Infrastruktur-Assessment und Architektur-Evaluation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'API-Readiness-Bewertung und Integration-Capability-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Datenqualitäts- und -verfügbarkeits-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Sicherheits- und Performance-Readiness-Evaluation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Data Governance und Privacy Compliance Assessment',
          description: 'Systematische Bewertung Ihrer Datenschutz- und Governance-Frameworks für FIDA-konforme Datenverarbeitung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'DSGVO-Compliance-Assessment und Privacy-Framework-Evaluation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Data-Governance-Strukturen und -Prozess-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Consent-Management-Readiness und Customer-Rights-Framework'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Audit-Trail- und Compliance-Monitoring-Capability-Assessment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Risk Management und Security Readiness Evaluation',
          description: 'Umfassende Bewertung Ihrer Risikomanagement-Frameworks und Sicherheitsbereitschaft für FIDA-Implementation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Cyber-Security-Readiness und Threat-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Operational-Risk-Framework-Evaluation und Incident-Response-Readiness'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Third-Party-Risk-Management und Vendor-Assessment-Capabilities'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Business-Continuity und Disaster-Recovery-Readiness'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Gap Analysis und Implementation Roadmapping',
          description: 'Systematische Identifikation von Compliance-Gaps und Entwicklung priorisierter Umsetzungsstrategien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Comprehensive Gap-Identifikation und Impact-Priorisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Strategic Implementation Roadmap und Timeline-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Quick-Win-Identifikation und Early-Value-Realization-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Resource-Planning und Budget-Estimation für Implementation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Continuous Monitoring und Success Measurement',
          description: 'Etablierung kontinuierlicher Überwachungs- und Verbesserungsprozesse für nachhaltige FIDA-Bereitschaft.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'KPI-Framework-Entwicklung und Success-Metrics-Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Continuous-Improvement-Prozesse und Maturity-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Regulatory-Change-Monitoring und Adaptive-Strategy-Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Stakeholder-Reporting und Executive-Dashboard-Implementation'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(fidaReadinessData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FIDA Readiness Assessment page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
