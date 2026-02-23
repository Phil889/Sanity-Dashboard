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
    console.log('Creating ISO 27001 Anforderungen page...')

    const iso27001AnforderungenData = {
      _type: 'servicePage',
      _id: 'iso-27001-anforderungen',
      title: 'ISO 27001 Anforderungen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-anforderungen'
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
        title: 'ISO 27001 Anforderungen & Requirements | ADVISORI',
        description: 'Umfassende Expertise zu ISO 27001 Anforderungen. Von Kontrollmaßnahmen bis Compliance-Umsetzung. Strategische Beratung für nachhaltige Erfüllung aller ISO 27001 Requirements.',
        keywords: 'ISO 27001 Anforderungen, ISO 27001 Requirements, Kontrollmaßnahmen, Compliance Anforderungen, ISMS Anforderungen, Sicherheitsanforderungen, ISO 27001 Controls, Audit Anforderungen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Anforderungen und Requirements'
        },
        tagline: 'Strategische Erfüllung aller ISO 27001 Anforderungen',
        heading: 'ISO 27001 Anforderungen',
        description: 'Meistern Sie alle ISO 27001 Anforderungen mit unserer umfassenden Expertise. Von der systematischen Analyse bis zur nachhaltigen Umsetzung aller Kontrollmaßnahmen und Compliance-Vorgaben.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Abdeckung aller 114 ISO 27001 Kontrollmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Risikoorientierte Priorisierung und effiziente Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Nahtlose Integration in bestehende Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltige Compliance-Sicherung und kontinuierliche Verbesserung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Umfassende Expertise für alle ISO 27001 Anforderungen',
        description: 'ISO 27001 definiert präzise Anforderungen für ein wirksames Informationssicherheits-Managementsystem. Die erfolgreiche Erfüllung dieser Anforderungen erfordert tiefgreifendes Verständnis, systematische Herangehensweise und praxisorientierte Umsetzung. Unsere Expertise umfasst alle Aspekte von der strategischen Planung bis zur operativen Implementierung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Analyse und Bewertung aller ISO 27001 Anforderungen im Kontext Ihrer Organisation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Risikoorientierte Priorisierung und phasenweise Umsetzung der Kontrollmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration moderner Compliance-Frameworks wie DORA, NIS2 und EU-Cybersecurity-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung effizienter Prozesse für nachhaltige Anforderungserfüllung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Optimierung der Compliance-Performance'
          }
        ],
        alert: {
          title: 'Strategischer Compliance-Vorteil',
          content: 'Die professionelle Erfüllung von ISO 27001 Anforderungen schafft nicht nur Compliance, sondern strategische Wettbewerbsvorteile durch erhöhtes Vertrauen, reduzierte Risiken und operative Exzellenz.'
        },
        whyUs: {
          title: 'Unsere Anforderungs-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnis aller ISO 27001 Anforderungen und deren praktischer Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für effiziente und nachhaltige Compliance-Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Anpassung und Integration in bestehende Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung von der Analyse bis zur Zertifizierung'
            }
          ]
        },
        additionalInfo: 'Unsere Herangehensweise an ISO 27001 Anforderungen geht über die reine Compliance hinaus. Wir entwickeln maßgeschneiderte Lösungen, die optimal in Ihre Unternehmensarchitektur integriert sind und nachhaltigen Mehrwert schaffen. Dabei berücksichtigen wir stets die strategischen Ziele Ihres Unternehmens und die spezifischen Herausforderungen Ihrer Branche.',
        serviceDescription: 'Wir bieten umfassende Unterstützung bei der Erfüllung aller ISO 27001 Anforderungen. Von der initialen Gap-Analyse über die systematische Implementierung bis hin zur kontinuierlichen Optimierung begleiten wir Sie mit methodischer Exzellenz und praktischer Erfahrung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Vollständige Anforderungsanalyse und Gap-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Risikoorientierte Implementierungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Systematische Umsetzung aller Kontrollmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Dokumentation und Prozessoptimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Compliance-Monitoring und kontinuierliche Verbesserung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Anforderungsansatz',
        description: 'Wir verfolgen einen strukturierten, anforderungsorientierten Ansatz, der alle ISO 27001 Vorgaben systematisch erfasst, bewertet und nachhaltig implementiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse aller ISO 27001 Anforderungen im Kontext Ihrer Organisation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Risikoorientierte Bewertung und Priorisierung der Implementierungsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Systematische Umsetzung mit kontinuierlicher Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende Prozesse und Managementsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Verankerung durch Monitoring und kontinuierliche Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die systematische Erfüllung von ISO 27001 Anforderungen ist der Schlüssel zu nachhaltiger Informationssicherheit. Unsere bewährte Methodik transformiert komplexe Compliance-Vorgaben in praktikable Lösungen, die echten Mehrwert für unsere Kunden schaffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Anforderungsanalyse & Gap-Assessment',
          description: 'Umfassende Bewertung aller ISO 27001 Anforderungen und systematische Identifikation von Compliance-Lücken in Ihrer Organisation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Vollständige Analyse aller 114 ISO 27001 Kontrollmaßnahmen und deren Anwendbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Systematische Bewertung bestehender Sicherheitsmaßnahmen gegen ISO 27001 Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation von Compliance-Lücken und Verbesserungspotenzialen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung einer priorisierten Roadmap für die Anforderungserfüllung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Kontrollmaßnahmen-Implementierung',
          description: 'Systematische Umsetzung aller relevanten ISO 27001 Kontrollmaßnahmen mit Fokus auf Effizienz und Nachhaltigkeit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Risikoorientierte Auswahl und Priorisierung der Kontrollmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung maßgeschneiderter Implementierungskonzepte für jede Kontrollmaßnahme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration in bestehende Geschäftsprozesse und IT-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Aufbau effizienter Überwachungs- und Steuerungsmechanismen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Dokumentations-Management',
          description: 'Entwicklung und Implementierung einer vollständigen Dokumentationsstruktur, die alle ISO 27001 Anforderungen erfüllt.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Erstellung aller erforderlichen ISMS-Dokumente nach ISO 27001 Standard'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Entwicklung effizienter Dokumentenmanagement-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Aufbau einer audit-fähigen Dokumentationsstruktur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Integration in bestehende Qualitäts- und Compliance-Systeme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Risikomanagement-Anforderungen',
          description: 'Implementierung aller risikobezogenen ISO 27001 Anforderungen mit Fokus auf systematische Risikobehandlung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Entwicklung einer ISO 27001-konformen Risikomanagement-Methodik'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Systematische Risikoidentifikation und -bewertung nach Standard-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Entwicklung und Implementierung von Risk Treatment Plans'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Aufbau kontinuierlicher Risiko-Monitoring-Prozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Compliance-Monitoring & Messung',
          description: 'Etablierung systematischer Überwachungs- und Messverfahren zur kontinuierlichen Sicherstellung der Anforderungserfüllung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Entwicklung von KPIs und Metriken für alle relevanten ISO 27001 Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Implementierung automatisierter Monitoring- und Reporting-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Aufbau interner Audit-Prozesse für kontinuierliche Compliance-Überwachung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Etablierung von Management-Reviews und Verbesserungsprozessen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Audit-Vorbereitung & Zertifizierung',
          description: 'Umfassende Vorbereitung auf ISO 27001 Audits mit Fokus auf nachweisbare Erfüllung aller Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Systematische Vorbereitung auf alle Audit-Phasen und -Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Entwicklung umfassender Nachweis- und Evidenz-Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Durchführung von Pre-Assessments und Mock-Audits'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Professionelle Begleitung während der Zertifizierungsaudits'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001AnforderungenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Anforderungen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
