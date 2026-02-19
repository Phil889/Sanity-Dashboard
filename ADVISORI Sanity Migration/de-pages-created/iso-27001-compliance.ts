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
    console.log('Creating ISO 27001 Compliance page...')

    const iso27001ComplianceData = {
      _type: 'servicePage',
      _id: 'iso-27001-compliance',
      title: 'ISO 27001 Compliance',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-compliance'
      },
      parent: {
        _type: 'reference',
        _ref: 'iso-27001'
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
        title: 'ISO 27001 Compliance Management | ADVISORI',
        description: 'Professionelle ISO 27001 Compliance-Beratung für nachhaltige Informationssicherheit. Von Compliance-Assessment bis kontinuierliche Überwachung - Ihr Partner für regulatorische Exzellenz.',
        keywords: 'ISO 27001 Compliance, Compliance Management, Informationssicherheit Compliance, ISO 27001 Audit, Compliance Monitoring, Regulatory Compliance, ISMS Compliance, Compliance Assessment'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Compliance Management'
        },
        tagline: 'Nachhaltige Compliance für vertrauensvolle Geschäftsbeziehungen',
        heading: 'ISO 27001 Compliance Management',
        description: 'Etablieren Sie eine robuste ISO 27001 Compliance-Architektur, die nicht nur regulatorische Anforderungen erfüllt, sondern strategische Wettbewerbsvorteile schafft. Unsere bewährte Expertise begleitet Sie von der Compliance-Bewertung bis zur kontinuierlichen Optimierung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematisches Compliance Management nach internationalem Standard'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Kontinuierliche Überwachung und proaktive Risikominimierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integration mit modernen Compliance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachweisbare Compliance-Exzellenz für Stakeholder'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ISO 27001 Compliance - Systematische Erfüllung regulatorischer Anforderungen',
        description: 'ISO 27001 Compliance umfasst die systematische Erfüllung aller Anforderungen des internationalen Standards für Informationssicherheitsmanagementsysteme. Es geht dabei nicht nur um die einmalige Zertifizierung, sondern um die kontinuierliche Aufrechterhaltung und Verbesserung der Compliance-Position durch strukturierte Prozesse und proaktive Überwachung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Kontinuierliche Erfüllung aller ISO 27001 Anforderungen durch systematische Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Proaktive Compliance-Überwachung und frühzeitige Risikoidentifikation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration mit anderen Compliance-Frameworks und regulatorischen Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Nachweisbare Compliance-Dokumentation für Audits und Stakeholder'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Aufbau einer nachhaltigen Compliance-Kultur in der Organisation'
          }
        ],
        alert: {
          title: 'Strategischer Compliance-Vorteil',
          content: 'Effektive ISO 27001 Compliance schafft Vertrauen, reduziert Risiken und ermöglicht nachhaltigen Geschäftserfolg durch demonstrierte Informationssicherheitsexzellenz.'
        },
        whyUs: {
          title: 'Warum ISO 27001 Compliance mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in Compliance Management und regulatorischen Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für nachhaltige Compliance-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von Assessment bis kontinuierliche Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Integration mit modernen Technologien und Compliance-Tools'
            }
          ]
        },
        additionalInfo: 'ISO 27001 Compliance erfordert eine systematische Herangehensweise, die über die reine Erfüllung von Checklisten hinausgeht. Es umfasst die Entwicklung einer Compliance-Kultur, die kontinuierliche Überwachung von Anforderungen, die proaktive Identifikation von Compliance-Risiken und die Implementierung effektiver Korrekturmaßnahmen.',
        serviceDescription: 'Unser ISO 27001 Compliance Service-Portfolio bietet eine vollständige Lösung für die Etablierung, Aufrechterhaltung und kontinuierliche Verbesserung Ihrer Compliance-Position. Von der initialen Bewertung bis zur laufenden Überwachung begleiten wir Sie auf dem Weg zu nachhaltiger Compliance-Exzellenz.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Compliance Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Compliance-Programm Design und Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Kontinuierliche Compliance-Überwachung und Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Audit-Vorbereitung und Compliance-Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Compliance-Optimierung und Best Practice Integration'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer ISO 27001 Compliance-Ansatz',
        description: 'Wir verfolgen einen strukturierten, risikobasierten Ansatz für ISO 27001 Compliance, der bewährte Methoden mit innovativen Technologien kombiniert und nachhaltigen Compliance-Erfolg gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Compliance-Bewertung und Identifikation kritischer Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung maßgeschneiderter Compliance-Programme und Kontrollframeworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung automatisierter Compliance-Monitoring-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Überwachung und proaktive Compliance-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Integration mit Geschäftsprozessen und strategischen Zielen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Effektive ISO 27001 Compliance ist der Schlüssel für nachhaltigen Geschäftserfolg in der digitalen Wirtschaft. Unsere bewährte Compliance-Methodik verbindet regulatorische Exzellenz mit operativer Effizienz und schafft messbare Wettbewerbsvorteile für unsere Kunden.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Compliance Assessment & Gap-Analyse',
          description: 'Umfassende Bewertung Ihrer aktuellen Compliance-Position und Identifikation von Verbesserungspotenzialen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte ISO 27001 Compliance-Bewertung und Maturity Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Gap-Analyse und Priorisierung von Compliance-Maßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risikobewertung und Compliance-Roadmap-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Benchmarking und Best Practice Identifikation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Compliance-Programm Design',
          description: 'Entwicklung maßgeschneiderter Compliance-Programme für nachhaltige ISO 27001 Erfüllung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Compliance-Framework Design und Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Richtlinien und Verfahrensentwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Kontrollmaßnahmen-Design und Implementierungsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Compliance-Metriken und KPI-Entwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Kontinuierliches Compliance Monitoring',
          description: 'Automatisierte Überwachung und proaktive Verwaltung Ihrer ISO 27001 Compliance-Position.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Compliance-Monitoring-Systeme und Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Automatisierte Compliance-Checks und Alerting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Kontinuierliche Risikobewertung und Trend-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Compliance-Reporting und Stakeholder-Kommunikation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Audit-Vorbereitung & Support',
          description: 'Professionelle Vorbereitung und Begleitung bei internen und externen ISO 27001 Audits.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Pre-Audit Assessments und Readiness-Checks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Audit-Dokumentation und Evidence-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Auditor-Begleitung und Interview-Vorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Nachbetreuung und Corrective Action Planning'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Compliance Integration & Automation',
          description: 'Integration von Compliance-Prozessen in bestehende Systeme und Automatisierung von Routineaufgaben.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'GRC-Platform Integration und Workflow-Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Compliance-Tool-Implementierung und Konfiguration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'API-Integration und Datenautomatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Compliance-Analytics und Predictive Monitoring'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Multi-Framework Compliance',
          description: 'Integration von ISO 27001 mit anderen Compliance-Frameworks für ganzheitliche Governance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'DORA, NIS2 und GDPR Compliance-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'SOC 2, PCI DSS und branchenspezifische Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Harmonisierte Compliance-Architektur und Synergien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Cross-Framework Reporting und Governance'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001ComplianceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Compliance main page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
