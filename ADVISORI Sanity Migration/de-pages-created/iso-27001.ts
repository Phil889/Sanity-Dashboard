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
    console.log('Creating ISO 27001 main page...')

    const iso27001Data = {
      _type: 'servicePage',
      _id: 'iso-27001',
      title: 'ISO 27001',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001'
      },
      parent: {
        _type: 'reference',
        _ref: 'standards-frameworks'
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
        title: 'ISO 27001 Informationssicherheitsmanagement | ADVISORI',
        description: 'Professionelle ISO 27001 Implementierung und Beratung für nachhaltiges Informationssicherheitsmanagement. Von Gap-Analyse bis Zertifizierung - Ihr Partner für ISMS-Exzellenz.',
        keywords: 'ISO 27001, ISMS, Informationssicherheitsmanagement, ISO 27001 Zertifizierung, Informationssicherheit, Compliance, Risikomanagement, Cybersecurity, Datenschutz'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Informationssicherheitsmanagement'
        },
        tagline: 'Strategische Informationssicherheit für nachhaltige Wettbewerbsvorteile',
        heading: 'ISO 27001 Informationssicherheitsmanagement',
        description: 'Transformieren Sie Ihre Informationssicherheit mit ISO 27001 - dem weltweit führenden Standard für Informationssicherheitsmanagement. Unsere bewährte Expertise begleitet Sie von der strategischen Planung bis zur erfolgreichen Zertifizierung und darüber hinaus.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematisches ISMS nach internationalem Gold-Standard'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Nachweisbare Risikoreduktion und Compliance-Sicherheit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Vertrauensbildung bei Kunden und Geschäftspartnern'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Integration mit modernen Compliance-Frameworks'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ISO 27001 - Der internationale Standard für Informationssicherheitsmanagement',
        description: 'ISO 27001 ist der weltweit anerkannte Standard für Informationssicherheitsmanagementsysteme (ISMS) und bildet das Fundament für systematische, risikobasierte Informationssicherheit. Als einziger zertifizierbarer Standard der ISO 27000-Familie bietet er Organisationen einen strukturierten Rahmen für den Schutz ihrer wertvollsten Informationsassets.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematischer Ansatz für Informationssicherheitsmanagement mit kontinuierlicher Verbesserung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Risikobasierte Methodik für maßgeschneiderte Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Internationale Anerkennung und Vertrauensbildung bei Stakeholdern'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration mit anderen Managementsystemen und Compliance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Nachweisbare Verbesserung der Informationssicherheitskultur'
          }
        ],
        alert: {
          title: 'Strategischer Wettbewerbsvorteil',
          content: 'ISO 27001 ist mehr als Compliance - es ist ein strategisches Instrument für Vertrauen, operative Exzellenz und nachhaltigen Geschäftserfolg in der digitalen Wirtschaft.'
        },
        whyUs: {
          title: 'Warum ISO 27001 mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in ISO 27001 Implementierung und Zertifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für nachhaltige ISMS-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von Strategie bis operative Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Integration mit modernen Compliance-Anforderungen'
            }
          ]
        },
        additionalInfo: 'ISO 27001 definiert die Anforderungen für die Einrichtung, Implementierung, Aufrechterhaltung und kontinuierliche Verbesserung eines Informationssicherheitsmanagementsystems. Der Standard basiert auf dem Plan-Do-Check-Act-Zyklus und ermöglicht es Organisationen, ihre Informationssicherheit systematisch und nachhaltig zu managen.',
        serviceDescription: 'Unser ISO 27001 Service-Portfolio umfasst alle Aspekte der ISMS-Implementierung - von der strategischen Planung über die operative Umsetzung bis hin zur Zertifizierung und kontinuierlichen Optimierung. Wir begleiten Sie auf dem gesamten Weg zu einer robusten und nachhaltigen Informationssicherheitsarchitektur.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische ISMS-Planung und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Risikomanagement und Kontrollimplementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Dokumentation und Prozessdesign'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Zertifizierungsvorbereitung und Audit-Support'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Verbesserung und Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer ISO 27001 Implementierungsansatz',
        description: 'Wir verfolgen einen strukturierten, phasenorientierten Ansatz, der bewährte Methoden mit innovativen Lösungen kombiniert und nachhaltigen Erfolg gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Analyse und ISMS-Konzeption basierend auf Ihren Geschäftszielen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Umfassende Gap-Analyse und Entwicklung einer maßgeschneiderten Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Systematische Implementierung mit kontinuierlicher Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Zertifizierungsvorbereitung und professionelle Audit-Begleitung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Verankerung durch kontinuierliche Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ISO 27001 ist das Fundament für vertrauensvolle Geschäftsbeziehungen in der digitalen Wirtschaft. Unsere bewährte Implementierungsmethodik verbindet regulatorische Exzellenz mit praktischer Umsetzbarkeit und schafft nachhaltigen Mehrwert für unsere Kunden.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ISO 27001 Beratung & Consulting',
          description: 'Strategische Beratung für erfolgreiche ISMS-Implementierung von der Planung bis zur Zertifizierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strategische ISMS-Konzeption und Architektur-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Gap-Analyse und Readiness-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risikomanagement-Beratung und Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Zertifizierungsberatung und Audit-Support'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'ISO 27001 Schulungen & Training',
          description: 'Umfassende Schulungsprogramme für alle Rollen im ISMS - von Awareness bis Lead Auditor.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'ISO 27001 Foundation und Implementer Schulungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Lead Auditor Zertifizierungskurse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Maßgeschneiderte Inhouse-Trainings'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Weiterbildungsprogramme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'ISO 27001 Tools & Software',
          description: 'Professionelle Tools und Software-Lösungen für effizientes ISMS-Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'ISMS-Management-Software und Plattformen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Risikomanagement-Tools und Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Compliance-Monitoring und Reporting-Tools'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Dokumentationsmanagement-Systeme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'ISO 27001 Audit & Zertifizierung',
          description: 'Professionelle Audit-Services und Zertifizierungsunterstützung für nachhaltigen Erfolg.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Pre-Assessment und Readiness-Checks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Interne Audit-Programme und -durchführung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Zertifizierungsaudit-Begleitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Überwachungsaudit-Support'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'ISO 27001 Dokumentation & Checklisten',
          description: 'Umfassende Dokumentationsunterstützung und praxiserprobte Checklisten für Ihre ISMS-Implementierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'ISMS-Dokumentationsvorlagen und -strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Compliance-Checklisten und Audit-Guides'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Richtlinien und Verfahrensanweisungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kontinuierliche Dokumentationspflege'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Branchenspezifische ISO 27001 Lösungen',
          description: 'Spezialisierte ISO 27001 Implementierungen für verschiedene Branchen und Anwendungsbereiche.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'ISO 27001 für Rechenzentren und Cloud-Provider'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Finanzdienstleister und Banking-spezifische Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Healthcare und Medizintechnik-Anwendungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kritische Infrastrukturen und KRITIS-Compliance'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001Data)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 main page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
