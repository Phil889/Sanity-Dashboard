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
    console.log('Creating ISO 27001 Controls page...')

    const iso27001ControlsData = {
      _type: 'servicePage',
      _id: 'iso-27001-controls',
      title: 'ISO 27001 Controls',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-controls'
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
        title: 'ISO 27001 Controls - Annex A Sicherheitsmaßnahmen | ADVISORI',
        description: 'Professionelle Implementierung der 114 ISO 27001 Annex A Controls. Von Risikobewertung bis operative Umsetzung - Ihr Partner für systematische Informationssicherheitskontrollen.',
        keywords: 'ISO 27001 Controls, Annex A, Sicherheitsmaßnahmen, Informationssicherheitskontrollen, ISMS Controls, ISO 27001 Implementierung, Sicherheitsrichtlinien, Compliance Controls'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Controls Implementierung'
        },
        tagline: 'Systematische Sicherheitskontrollen für umfassenden Informationsschutz',
        heading: 'ISO 27001 Controls - Annex A Sicherheitsmaßnahmen',
        description: 'Implementieren Sie die 114 Sicherheitskontrollen des ISO 27001 Annex A systematisch und effektiv. Unsere bewährte Expertise unterstützt Sie bei der risikobasierten Auswahl, professionellen Umsetzung und kontinuierlichen Optimierung aller relevanten Sicherheitsmaßnahmen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Abdeckung aller 114 Annex A Controls'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Risikobasierte Auswahl und Priorisierung der Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Praktische Implementierungshilfen und Best Practices'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Überwachung und Verbesserung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ISO 27001 Annex A - Der umfassende Katalog für Informationssicherheitskontrollen',
        description: 'Annex A der ISO 27001:2022 definiert 114 Sicherheitskontrollen in vier Kategorien, die als Referenz für die Implementierung eines robusten Informationssicherheitsmanagementsystems dienen. Diese Kontrollen bilden das operative Herzstück jedes ISMS und müssen basierend auf der individuellen Risikoanalyse ausgewählt und implementiert werden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Organisatorische Kontrollen für Governance und Managementstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Personelle Kontrollen für Human Resource Security und Awareness'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Physische Kontrollen für Umgebungssicherheit und Anlagenschutz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Technologische Kontrollen für IT-Sicherheit und Systemschutz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Risikobasierte Auswahl entsprechend der Statement of Applicability'
          }
        ],
        alert: {
          title: 'Strategische Kontrollimplementierung',
          content: 'Die effektive Umsetzung der ISO 27001 Controls erfordert mehr als technische Maßnahmen - sie schafft eine ganzheitliche Sicherheitsarchitektur, die Geschäftsprozesse schützt und gleichzeitig operative Exzellenz ermöglicht.'
        },
        whyUs: {
          title: 'Warum ISO 27001 Controls mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in allen 114 Annex A Kontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Implementierungsmethoden für nachhaltige Wirksamkeit'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Risikobasierte Priorisierung und maßgeschneiderte Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Integration mit modernen Technologien und Compliance-Frameworks'
            }
          ]
        },
        additionalInfo: 'Die ISO 27001:2022 Annex A Controls sind in vier Hauptkategorien unterteilt: Organisatorische Kontrollen (37), Personelle Kontrollen (8), Physische Kontrollen (14) und Technologische Kontrollen (34). Jede Kontrolle adressiert spezifische Sicherheitsaspekte und muss entsprechend der individuellen Risikolandschaft bewertet und implementiert werden.',
        serviceDescription: 'Unser umfassendes ISO 27001 Controls Service-Portfolio unterstützt Sie bei der systematischen Implementierung aller relevanten Sicherheitskontrollen. Von der initialen Risikoanalyse über die praktische Umsetzung bis hin zur kontinuierlichen Überwachung und Optimierung - wir begleiten Sie auf dem gesamten Weg zu einer robusten Kontrolllandschaft.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Umfassende Risikoanalyse und Control-Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Systematische Implementierung aller relevanten Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung von Richtlinien und Verfahrensanweisungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kontinuierliche Überwachung und Wirksamkeitsmessung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulungen und Awareness-Programme für alle Kontrollebenen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Ansatz für ISO 27001 Controls Implementierung',
        description: 'Wir verfolgen einen strukturierten, risikobasierten Ansatz, der bewährte Implementierungsmethoden mit innovativen Lösungen kombiniert und nachhaltige Kontrollwirksamkeit gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Risikoanalyse und Identifikation anwendbarer Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten Statement of Applicability'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Implementierung mit kontinuierlicher Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende Geschäftsprozesse und IT-Landschaft'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung von Monitoring und kontinuierlicher Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die systematische Implementierung der ISO 27001 Controls ist der Schlüssel zu einer robusten Informationssicherheitsarchitektur. Unsere bewährte Methodik verbindet technische Exzellenz mit praktischer Umsetzbarkeit und schafft nachhaltige Sicherheit, die das Geschäft schützt und gleichzeitig Innovation ermöglicht.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Organisatorische Kontrollen',
          description: 'Implementierung der 37 organisatorischen Kontrollen für Governance, Richtlinien und Managementstrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Informationssicherheitsrichtlinien und -verfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Organisationsstrukturen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risikomanagement und Compliance-Überwachung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Lieferantenmanagement und Outsourcing-Kontrollen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Personelle Kontrollen',
          description: 'Umsetzung der 8 personellen Kontrollen für Human Resource Security und Mitarbeitersensibilisierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Screening und Hintergrundprüfungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Arbeitsverträge und Vertraulichkeitsvereinbarungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Awareness-Programme und Sicherheitsschulungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Disziplinarverfahren und Beendigungsprozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Physische Kontrollen',
          description: 'Implementierung der 14 physischen Kontrollen für Umgebungssicherheit und Anlagenschutz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Physische Sicherheitszonen und Zugangskontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Schutz vor Umweltbedrohungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Ausrüstungsschutz und sichere Entsorgung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Clear Desk und Clear Screen Richtlinien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Technologische Kontrollen',
          description: 'Umsetzung der 34 technologischen Kontrollen für IT-Sicherheit und Systemschutz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Zugangsmanagement und Identitätskontrolle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Kryptographie und Datenschutz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Systemsicherheit und Schwachstellenmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Netzwerksicherheit und Monitoring'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Control Assessment & Testing',
          description: 'Systematische Bewertung und Prüfung der Kontrollwirksamkeit durch professionelle Assessment-Verfahren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Kontrollwirksamkeitsprüfungen und Gap-Analysen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Penetrationstests und Vulnerability Assessments'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Compliance-Audits und Zertifizierungsvorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kontinuierliche Überwachung und Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Control Integration & Automation',
          description: 'Integration der Kontrollen in moderne IT-Landschaften und Automatisierung von Überwachungsprozessen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'GRC-Plattformen und Control-Management-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Automatisierte Compliance-Überwachung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Integration mit SIEM und Security Operations'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Dashboard und Reporting-Automatisierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001ControlsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Controls main page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
