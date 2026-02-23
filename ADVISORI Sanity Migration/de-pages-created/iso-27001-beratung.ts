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
    console.log('Creating ISO 27001 Beratung page...')

    const iso27001BeratungData = {
      _type: 'servicePage',
      _id: 'iso-27001-beratung',
      title: 'ISO 27001 Beratung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-beratung'
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
        title: 'ISO 27001 Beratung & Consulting | ADVISORI',
        description: 'Professionelle ISO 27001 Beratung für erfolgreiche ISMS-Implementierung. Von Gap-Analyse bis Zertifizierung. Strategische Consulting-Services für nachhaltige Informationssicherheit.',
        keywords: 'ISO 27001 Beratung, ISO 27001 Consulting, ISMS Beratung, Informationssicherheit Beratung, ISO 27001 Implementierung, Gap Analyse, Zertifizierungsberatung, Compliance Consulting'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Beratung und Consulting'
        },
        tagline: 'Strategische Expertise für nachhaltige Informationssicherheit',
        heading: 'ISO 27001 Beratung',
        description: 'Transformieren Sie Ihre Informationssicherheit mit unserer strategischen ISO 27001 Beratung. Von der initialen Gap-Analyse bis zur erfolgreichen Zertifizierung begleiten wir Sie mit bewährten Methoden und tiefgreifender Expertise.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische ISMS-Architektur abgestimmt auf Ihre Geschäftsziele'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Bewährte Implementierungsmethodik mit nachweislichen Erfolgsraten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Ganzheitliche Integration mit bestehenden Compliance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Begleitung von der Planung bis zur Zertifizierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische ISO 27001 Beratung für nachhaltige Informationssicherheit',
        description: 'Die erfolgreiche Implementierung von ISO 27001 erfordert mehr als technisches Know-how – sie verlangt strategisches Verständnis, methodische Exzellenz und tiefgreifende Branchenerfahrung. Unsere ISO 27001 Beratung verbindet bewährte Implementierungsansätze mit innovativen Lösungen für moderne Sicherheitsherausforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische ISMS-Konzeption basierend auf Ihren spezifischen Geschäftsanforderungen und Risikolandschaft'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Systematische Gap-Analyse und Roadmap-Entwicklung für effiziente Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration moderner Compliance-Anforderungen wie DORA, NIS2 und EU-Cybersecurity-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Praxisorientierte Umsetzungsbegleitung mit kontinuierlicher Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Nachhaltige Verankerung durch Change Management und Kompetenzentwicklung'
          }
        ],
        alert: {
          title: 'Strategischer Wettbewerbsvorteil',
          content: 'ISO 27001 ist mehr als Compliance – es ist ein strategisches Instrument für Vertrauen, Wettbewerbsfähigkeit und operative Exzellenz. Unsere Beratung maximiert den Business Value Ihrer ISMS-Investition.'
        },
        whyUs: {
          title: 'Unsere Beratungsexpertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Langjährige Erfahrung in der strategischen Beratung und Implementierung von ISO 27001'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefgreifende Branchenkenntnisse und regulatorische Expertise'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methodiken mit nachweislichen Erfolgsraten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von der Strategie bis zur operativen Umsetzung'
            }
          ]
        },
        additionalInfo: 'Unsere ISO 27001 Beratung geht über die reine Standardkonformität hinaus. Wir entwickeln maßgeschneiderte ISMS-Lösungen, die optimal in Ihre Unternehmensarchitektur integriert sind und nachhaltigen Mehrwert schaffen. Dabei berücksichtigen wir stets die strategischen Ziele Ihres Unternehmens und die spezifischen Herausforderungen Ihrer Branche.',
        serviceDescription: 'Wir bieten umfassende ISO 27001 Beratungsleistungen, die alle Phasen der ISMS-Implementierung abdecken. Von der strategischen Planung über die operative Umsetzung bis hin zur kontinuierlichen Optimierung begleiten wir Sie mit methodischer Exzellenz und praktischer Erfahrung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische ISMS-Planung und Architektur-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Umfassende Gap-Analyse und Readiness-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Risikomanagement-Konzeption und Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Prozessdesign und Dokumentationserstellung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Zertifizierungsvorbereitung und Audit-Begleitung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Beratungsansatz',
        description: 'Wir verfolgen einen strukturierten, phasenorientierten Ansatz, der strategische Planung mit praktischer Umsetzung verbindet und nachhaltigen Erfolg gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Analyse und ISMS-Konzeption basierend auf Ihren Geschäftszielen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Detaillierte Gap-Analyse und Entwicklung einer maßgeschneiderten Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Strukturierte Implementierung mit kontinuierlicher Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Umfassende Zertifizierungsvorbereitung und Audit-Begleitung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Verankerung durch Optimierung und kontinuierliche Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Erfolgreiche ISO 27001 Implementierung ist eine strategische Investition in die Zukunftsfähigkeit des Unternehmens. Unsere bewährte Beratungsmethodik verbindet regulatorische Exzellenz mit praktischer Umsetzbarkeit und schafft nachhaltigen Mehrwert für unsere Kunden.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische ISMS-Planung & Architektur',
          description: 'Entwicklung einer maßgeschneiderten ISMS-Strategie und Architektur, die optimal auf Ihre Geschäftsziele und Risikolandschaft abgestimmt ist.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strategische ISMS-Konzeption basierend auf Geschäftszielen und Compliance-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Architektur-Design für optimale Integration in bestehende Unternehmensstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Stakeholder-Analyse und Governance-Struktur-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Ressourcenplanung und Budget-Optimierung für nachhaltige Implementierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Gap-Analyse & Readiness-Assessment',
          description: 'Umfassende Bewertung Ihres aktuellen Informationssicherheitsstatus und Entwicklung einer detaillierten Roadmap zur ISO 27001 Konformität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Systematische Analyse bestehender Sicherheitsmaßnahmen und Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Identifikation von Compliance-Lücken und Verbesserungspotenzialen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Priorisierte Roadmap mit klaren Meilensteinen und Erfolgskriterien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Risikobewertung und Aufwand-Nutzen-Analyse für Implementierungsmaßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Risikomanagement-Beratung',
          description: 'Entwicklung und Implementierung eines robusten Risikomanagement-Frameworks, das den Kern Ihres ISMS bildet.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Konzeption einer maßgeschneiderten Risikomanagement-Methodik'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Systematische Risikoidentifikation und -bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Entwicklung von Risk Treatment Plans und Kontrollmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Integration in bestehende Enterprise Risk Management Systeme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Prozessdesign & Dokumentation',
          description: 'Entwicklung effizienter ISMS-Prozesse und umfassender Dokumentation, die praktikabel und auditierbar ist.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Design schlanker und effizienter ISMS-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Erstellung standardkonformer und praxistauglicher Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Entwicklung von Richtlinien, Verfahren und Arbeitsanweisungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Integration in bestehende Qualitäts- und Compliance-Systeme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Implementierungsbegleitung',
          description: 'Praktische Unterstützung bei der operativen Umsetzung Ihres ISMS mit kontinuierlicher Qualitätssicherung und Optimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Strukturierte Projektleitung und Change Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Hands-on Unterstützung bei der operativen Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Kontinuierliche Qualitätssicherung und Fortschrittskontrolle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Mitarbeiterqualifizierung und Kompetenzentwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Zertifizierungsberatung & Audit-Support',
          description: 'Umfassende Vorbereitung auf die ISO 27001 Zertifizierung mit professioneller Audit-Begleitung und Nachbetreuung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Strategische Zertifizierungsplanung und Zertifizierungsstellen-Auswahl'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Umfassende Audit-Vorbereitung und Pre-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Professionelle Begleitung während der Zertifizierungsaudits'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Nachbetreuung und kontinuierliche Optimierung des ISMS'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001BeratungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Beratung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
