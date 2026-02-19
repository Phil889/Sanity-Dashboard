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
    console.log('Creating ISMS ISO 27001 main page...')

    const ismsIso27001Data = {
      _type: 'servicePage',
      _id: 'isms-iso-27001',
      title: 'ISMS ISO 27001',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/isms-iso-27001'
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
        title: 'ISMS ISO 27001 - Informationssicherheitsmanagementsystem | ADVISORI',
        description: 'Professionelle ISMS-Implementierung nach ISO 27001 Standard. Von der strategischen Planung bis zur operativen Umsetzung - Ihr Partner für nachhaltige Informationssicherheitsmanagement-Systeme.',
        keywords: 'ISMS, ISO 27001, Informationssicherheitsmanagementsystem, ISMS Implementierung, Managementsystem, Informationssicherheit, PDCA, Kontinuierliche Verbesserung, Risikomanagement'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISMS ISO 27001 Informationssicherheitsmanagementsystem'
        },
        tagline: 'Systematische Informationssicherheit durch professionelle ISMS-Architektur',
        heading: 'ISMS ISO 27001 - Informationssicherheitsmanagementsystem',
        description: 'Etablieren Sie ein robustes Informationssicherheitsmanagementsystem nach ISO 27001, das Ihre Organisation systematisch vor Informationssicherheitsrisiken schützt. Unser bewährter ISMS-Ansatz verbindet strategische Planung mit operativer Exzellenz für nachhaltige Sicherheitsarchitektur.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematisches ISMS-Framework nach internationalem Standard'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Kontinuierliche Verbesserung durch PDCA-Zyklus'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integration in bestehende Managementsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltige Sicherheitskultur und Governance'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ISMS nach ISO 27001 - Das Fundament systematischer Informationssicherheit',
        description: 'Ein Informationssicherheitsmanagementsystem (ISMS) nach ISO 27001 ist ein systematischer Ansatz zur Verwaltung sensibler Unternehmensinformationen, der auf kontinuierlicher Risikobewertung, angemessenen Sicherheitskontrollen und regelmäßiger Überwachung basiert. Das ISMS bildet das strategische Fundament für nachhaltige Informationssicherheit in Organisationen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strukturierter Managementansatz für systematische Informationssicherheit'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Risikobasierte Methodik für maßgeschneiderte Sicherheitsarchitektur'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'PDCA-Zyklus für kontinuierliche Verbesserung und Anpassung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von Informationssicherheit in Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Aufbau einer nachhaltigen Sicherheitskultur und Governance'
          }
        ],
        alert: {
          title: 'ISMS als strategischer Enabler',
          content: 'Ein professionell implementiertes ISMS ist mehr als Compliance - es ist ein strategisches Instrument für Vertrauen, operative Resilienz und nachhaltigen Geschäftserfolg in der digitalen Transformation.'
        },
        whyUs: {
          title: 'Warum ISMS-Implementierung mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende ISMS-Expertise und bewährte Implementierungsmethoden'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Ganzheitlicher Ansatz von Strategie bis operative Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integration mit bestehenden Managementsystemen und Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Nachhaltige Verankerung durch Change Management und Schulungen'
            }
          ]
        },
        additionalInfo: 'Das ISMS nach ISO 27001 basiert auf einem prozessorientierten Ansatz, der die Einrichtung, Implementierung, den Betrieb, die Überwachung, die Überprüfung, die Aufrechterhaltung und die Verbesserung des Informationssicherheitsmanagementsystems umfasst. Der Standard folgt dem Plan-Do-Check-Act-Modell und ermöglicht es Organisationen, ihre Informationssicherheit systematisch und nachhaltig zu managen.',
        serviceDescription: 'Unser ISMS-Service-Portfolio umfasst alle Aspekte der Managementsystem-Implementierung nach ISO 27001 - von der strategischen ISMS-Architektur über die operative Umsetzung bis hin zur kontinuierlichen Optimierung. Wir begleiten Sie auf dem gesamten Weg zu einem robusten und nachhaltigen Informationssicherheitsmanagementsystem.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'ISMS-Architektur und strategische Planung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Prozessdesign und Managementsystem-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Risikomanagement und Kontrollframework'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Governance-Strukturen und Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Verbesserung und Monitoring'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer ISMS-Implementierungsansatz',
        description: 'Wir verfolgen einen strukturierten, phasenorientierten Ansatz zur ISMS-Implementierung, der bewährte Managementsystem-Prinzipien mit modernen Sicherheitsanforderungen kombiniert und nachhaltigen Erfolg gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'ISMS-Konzeption und strategische Architektur basierend auf Geschäftszielen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Kontextanalyse und Stakeholder-Mapping für maßgeschneiderte Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Prozessdesign und Integration in bestehende Managementsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung mit kontinuierlicher Qualitätssicherung und Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Verankerung durch Change Management und Kompetenzaufbau'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Ein professionell implementiertes ISMS ist das Rückgrat moderner Informationssicherheit. Unsere bewährte Methodik verbindet systematisches Managementsystem-Design mit praktischer Umsetzbarkeit und schafft nachhaltige Sicherheitsarchitekturen, die mit dem Unternehmen wachsen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ISMS-Architektur & Design',
          description: 'Strategische ISMS-Konzeption und Architektur-Design für nachhaltige Informationssicherheitsmanagement-Systeme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'ISMS-Strategie und Governance-Framework'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Kontextanalyse und Stakeholder-Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Prozessarchitektur und Managementsystem-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration mit bestehenden Managementsystemen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'ISMS-Implementierung & Umsetzung',
          description: 'Professionelle ISMS-Implementierung mit bewährten Methoden und nachhaltiger Verankerung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Phasenorientierte ISMS-Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Prozessdesign und Workflow-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Change Management und Mitarbeitereinbindung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Dokumentation und Wissensmanagement'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'ISMS-Risikomanagement',
          description: 'Systematisches Risikomanagement als Kernkomponente des ISMS mit kontinuierlicher Bewertung und Anpassung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Risikoidentifikation und -bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Risikostrategie und Behandlungsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Kontrollauswahl und -implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Kontinuierliche Risikoüberwachung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'ISMS-Governance & Steuerung',
          description: 'Aufbau effektiver Governance-Strukturen für nachhaltiges ISMS-Management und strategische Steuerung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Governance-Framework und Organisationsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Rollen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Management Review und Entscheidungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Strategische ISMS-Steuerung und KPIs'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'ISMS-Monitoring & Verbesserung',
          description: 'Kontinuierliche Überwachung und Verbesserung des ISMS durch systematisches Monitoring und PDCA-Zyklen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Performance-Monitoring und Messung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Interne Audits und Bewertungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Kontinuierliche Verbesserung und PDCA-Zyklen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Management Review und strategische Anpassung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'ISMS-Integration & Harmonisierung',
          description: 'Integration des ISMS mit anderen Managementsystemen und Compliance-Frameworks für ganzheitliche Governance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Integration mit ISO 9001, ISO 14001 und anderen Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Harmonisierung mit Compliance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Integrierte Managementsystem-Architektur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Synergien und Effizienzoptimierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(ismsIso27001Data)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISMS ISO 27001 main page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
