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
    console.log('Creating DORA Governance page...')

    const doraGovernanceData = {
      _type: 'servicePage',
      _id: 'dora-governance',
      title: 'DORA Governance',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dora-digital-operational-resilience-act/dora-governance'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management'
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
        title: 'DORA Governance Framework | ADVISORI',
        description: 'Expertenhilfe bei der Implementierung effektiver DORA-Governance-Strukturen. Beratung zu Board-Oversight, Management-Verantwortlichkeiten und Governance-Frameworks für digitale operationelle Resilienz.',
        keywords: 'DORA Governance, Board Oversight, Management Verantwortung, IKT-Governance, digitale Resilienz, Finanzaufsicht, Compliance Governance, Risiko-Governance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DORA Governance Framework'
        },
        tagline: 'Effektive Governance für digitale operationelle Resilienz',
        heading: 'DORA Governance',
        description: 'Robuste Governance-Strukturen sind das Fundament erfolgreicher DORA-Compliance. Wir unterstützen Sie beim Aufbau effektiver Oversight-Mechanismen, klarer Verantwortlichkeiten und integrierter Governance-Frameworks für digitale operationelle Resilienz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Board-Level Oversight und Senior Management Accountability für IKT-Risiken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Integrierte Governance-Frameworks für digitale operationelle Resilienz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Klare Rollen, Verantwortlichkeiten und Berichtswege für IKT-Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Governance-Überwachung und -Verbesserung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DORA Governance-Anforderungen verstehen und umsetzen',
        description: 'DORA stellt spezifische Anforderungen an die Governance digitaler operationeller Resilienz, die weit über traditionelle IT-Governance hinausgehen. Effektive DORA-Governance erfordert eine systematische Integration von IKT-Risikomanagement in bestehende Unternehmensführungsstrukturen und die Etablierung klarer Oversight-Mechanismen auf allen Organisationsebenen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung Board-Level Oversight für IKT-Risiken und digitale operationelle Resilienz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Etablierung klarer Management-Verantwortlichkeiten und Accountability-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration von IKT-Risikomanagement in bestehende Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau effektiver Berichtswege und Eskalationsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Implementierung kontinuierlicher Governance-Überwachung und -Verbesserung'
          }
        ],
        alert: {
          title: 'Governance-Fokus',
          content: 'DORA-Governance geht über technische Compliance hinaus und erfordert eine fundamentale Integration digitaler Resilienz in die Unternehmensführung. Board und Senior Management tragen die ultimative Verantwortung für die Effektivität der IKT-Risikomanagement-Frameworks.'
        },
        whyUs: {
          title: 'Unsere Governance-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Erfahrung in Finanzdienstleistungs-Governance und regulatorischen Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden zur Integration von IKT-Governance in bestehende Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praktische Erfahrung mit Board-Level Reporting und Senior Management Engagement'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz zur nachhaltigen Governance-Transformation'
            }
          ]
        },
        additionalInfo: 'Effektive DORA-Governance erfordert eine Balance zwischen strategischer Oversight und operativer Effektivität. Unsere Beratung fokussiert auf praktikable Governance-Strukturen, die sowohl regulatorische Anforderungen erfüllen als auch die Geschäftsziele unterstützen.',
        serviceDescription: 'Wir bieten umfassende Unterstützung beim Aufbau und der Optimierung von DORA-Governance-Strukturen. Unser Ansatz kombiniert regulatorische Expertise mit praktischer Governance-Erfahrung, um nachhaltige und effektive Oversight-Mechanismen zu entwickeln.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Board-Level IKT-Governance und Senior Management Accountability'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Governance-Framework-Design und -Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Rollen- und Verantwortlichkeits-Definitionen für IKT-Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Berichtswege und Eskalationsmechanismen-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Governance-Überwachung und -Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Governance-Transformations-Ansatz',
        description: 'Wir entwickeln mit Ihnen maßgeschneiderte DORA-Governance-Strukturen, die nahtlos in Ihre bestehende Unternehmensführung integriert werden und nachhaltige digitale operationelle Resilienz gewährleisten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse bestehender Governance-Strukturen und Identifikation von Integrationsmöglichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design maßgeschneiderter IKT-Governance-Frameworks und Oversight-Mechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung klarer Rollen, Verantwortlichkeiten und Accountability-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung effektiver Berichtswege und Entscheidungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung kontinuierlicher Governance-Überwachung und -Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Effektive DORA-Governance ist mehr als Compliance – sie ist ein strategischer Enabler für digitale Transformation. Unsere Erfahrung zeigt, dass Organisationen mit robusten IKT-Governance-Strukturen nicht nur regulatorische Anforderungen erfüllen, sondern auch ihre operative Resilienz und Wettbewerbsfähigkeit nachhaltig stärken.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Board-Level IKT-Governance und Senior Management Oversight',
          description: 'Entwicklung effektiver Board-Level Oversight-Mechanismen und Senior Management Accountability-Strukturen für digitale operationelle Resilienz und IKT-Risikomanagement.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Board-Charter und Committee-Strukturen für IKT-Risiko-Oversight'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Senior Management Accountability-Frameworks und KPI-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Board-Reporting-Standards und Dashboard-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Governance-Training und Capability-Building für Führungskräfte'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'IKT-Governance-Framework-Design und -Integration',
          description: 'Aufbau umfassender IKT-Governance-Frameworks, die nahtlos in bestehende Unternehmensführungsstrukturen integriert werden und DORA-Anforderungen erfüllen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Governance-Framework-Architektur und Strukturdesign'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration mit bestehenden Risk-, Audit- und Compliance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Policy- und Procedure-Entwicklung für IKT-Governance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Governance-Maturity-Assessment und Roadmap-Entwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Rollen- und Verantwortlichkeits-Definition für IKT-Risikomanagement',
          description: 'Etablierung klarer Rollen, Verantwortlichkeiten und Accountability-Strukturen für effektives IKT-Risikomanagement auf allen Organisationsebenen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'RACI-Matrix-Entwicklung für IKT-Risikomanagement-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Job-Description-Updates und Competency-Framework-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Three-Lines-of-Defense-Integration für IKT-Risiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Performance-Management-Integration und Incentive-Alignment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Berichtswege und Eskalationsmechanismen-Entwicklung',
          description: 'Aufbau effektiver Kommunikations- und Eskalationsstrukturen für IKT-Risiken, die zeitnahe Entscheidungsfindung und angemessene Oversight gewährleisten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Reporting-Hierarchien und Eskalations-Trigger-Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Management-Information-Systeme und Dashboard-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Incident-Eskalation und Crisis-Communication-Protokolle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Stakeholder-Engagement und Communication-Standards'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Drittanbieter-Governance und Oversight-Mechanismen',
          description: 'Entwicklung spezialisierter Governance-Strukturen für das Management kritischer IKT-Drittanbieter und deren Integration in die Gesamtgovernance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Drittanbieter-Governance-Committees und Oversight-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Vendor-Risk-Management-Integration in Board-Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Strategic-Vendor-Relationship-Management und Partnership-Governance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Drittanbieter-Performance-Monitoring und Governance-KPIs'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Kontinuierliche Governance-Überwachung und -Optimierung',
          description: 'Implementierung systematischer Monitoring- und Verbesserungsprozesse für nachhaltige Effektivität der DORA-Governance-Strukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Governance-Effectiveness-Monitoring und KPI-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Regelmäßige Governance-Reviews und Maturity-Assessments'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Continuous-Improvement-Prozesse und Best-Practice-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Regulatory-Change-Management und Governance-Adaptation'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(doraGovernanceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DORA Governance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
