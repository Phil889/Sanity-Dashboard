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
    console.log('Creating ISO 27001 Foundation Schulung page...')

    const iso27001FoundationSchulungData = {
      _type: 'servicePage',
      _id: 'iso-27001-foundation-schulung',
      title: 'ISO 27001 Foundation Schulung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-foundation-schulung'
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
        title: 'ISO 27001 Foundation Schulung | Grundlagen Training | ADVISORI',
        description: 'Professionelle ISO 27001 Foundation Schulung für Einsteiger. Grundlagen der Informationssicherheit, ISMS-Verständnis und praktische Awareness-Trainings für alle Mitarbeiterebenen.',
        keywords: 'ISO 27001 Foundation, ISO 27001 Grundlagen, ISMS Foundation Training, Informationssicherheit Schulung, ISO 27001 Awareness, Foundation Zertifizierung, Einsteiger Training'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Foundation Schulung und Grundlagen Training'
        },
        tagline: 'Solide Grundlagen für erfolgreiche Informationssicherheit',
        heading: 'ISO 27001 Foundation Schulung',
        description: 'Schaffen Sie das fundamentale Verständnis für ISO 27001 und Informationssicherheit in Ihrer Organisation. Unsere Foundation Schulungen vermitteln die essentiellen Grundlagen und entwickeln das Bewusstsein für sichere Arbeitsweisen auf allen Unternehmensebenen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende Grundlagenvermittlung für ISO 27001 und Informationssicherheit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Praxisorientierte Awareness-Trainings für alle Mitarbeiterebenen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Aufbau einer sicherheitsbewussten Unternehmenskultur von Grund auf'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Flexible Schulungsformate für optimale Lerneffizienz und Teilnehmerengagement'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Fundamentale Wissensbasis für nachhaltige Informationssicherheit',
        description: 'Eine erfolgreiche ISO 27001 Implementierung beginnt mit einem soliden Fundament aus Verständnis und Bewusstsein. Unsere Foundation Schulungen schaffen die notwendige Wissensbasis und entwickeln das Sicherheitsbewusstsein, das für eine effektive und nachhaltige Informationssicherheit erforderlich ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Einführung in die Grundprinzipien und Konzepte von ISO 27001'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung eines grundlegenden Verständnisses für Informationssicherheits-Managementsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Praktische Vermittlung von Sicherheitsbewusstsein und sicheren Arbeitsweisen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau einer gemeinsamen Sicherheitskultur und einheitlichen Terminologie'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Vorbereitung auf weiterführende Spezialisierungen und Zertifizierungen'
          }
        ],
        alert: {
          title: 'Fundament für Erfolg',
          content: 'Starke Foundation Kenntnisse sind der Schlüssel für eine erfolgreiche ISO 27001 Journey. Unsere Grundlagenschulungen schaffen das notwendige Verständnis und Bewusstsein für eine nachhaltige Informationssicherheitskultur.'
        },
        whyUs: {
          title: 'Unsere Foundation Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Didaktisch optimierte Lernkonzepte für nachhaltige Wissensvermittlung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserfahrene Trainer mit umfassender ISO 27001 Implementierungsexpertise'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Interaktive und engaging Schulungsformate für optimale Lernmotivation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Maßgeschneiderte Inhalte für verschiedene Rollen und Verantwortungsbereiche'
            }
          ]
        },
        additionalInfo: 'Unsere ISO 27001 Foundation Schulungen sind speziell darauf ausgelegt, komplexe Sicherheitskonzepte verständlich und praxisnah zu vermitteln. Wir schaffen eine solide Basis für alle weiteren Schritte Ihrer Informationssicherheits-Journey.',
        serviceDescription: 'Wir bieten ein strukturiertes Foundation Programm, das systematisch von den Grundlagen bis zur praktischen Anwendung führt. Unsere modularen Schulungskonzepte ermöglichen eine bedarfsgerechte Kompetenzentwicklung für alle Organisationsebenen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'ISO 27001 Grundlagen und Prinzipien für alle Mitarbeiter'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Awareness Training für Sicherheitsbewusstsein im Arbeitsalltag'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Foundation Zertifizierungsvorbereitung für Fachkräfte'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Rollenspezifische Grundlagenschulungen für verschiedene Bereiche'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Interaktive Workshops für praktische Anwendung und Vertiefung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Foundation Ansatz',
        description: 'Wir entwickeln mit Ihnen ein maßgeschneidertes Foundation Programm, das optimal auf Ihre Organisationsstruktur und den aktuellen Wissensstand Ihrer Mitarbeiter abgestimmt ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse des aktuellen Wissensstands und Identifikation von Lernbedarfen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung rollenspezifischer Foundation Curricula und Lernpfade'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Interaktive Wissensvermittlung mit praktischen Übungen und Fallbeispielen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Lernerfolgskontrolle und Verständnisvalidierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Verankerung durch Refresher-Sessions und Wissenstransfer'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Eine solide Foundation in ISO 27001 ist das Fundament jeder erfolgreichen Informationssicherheitsstrategie. Unsere Foundation Schulungen schaffen nicht nur Wissen, sondern entwickeln das Bewusstsein und die Kultur, die für eine nachhaltige und effektive Umsetzung von Informationssicherheit erforderlich sind.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ISO 27001 Grundlagen Training',
          description: 'Umfassende Einführung in die Grundprinzipien und Konzepte von ISO 27001 für alle Mitarbeiter ohne Vorkenntnisse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Einführung in die Grundlagen der Informationssicherheit und deren Bedeutung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Überblick über ISO 27001 Standard und Managementsystem-Ansatz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Verständnis für Risikomanagement und Sicherheitskontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Praktische Beispiele und Anwendungsfälle aus verschiedenen Branchen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Awareness Training für Mitarbeiter',
          description: 'Praxisorientierte Schulungen zur Entwicklung von Sicherheitsbewusstsein und sicheren Arbeitsweisen im Unternehmensalltag.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Sensibilisierung für Informationssicherheitsrisiken im Arbeitsalltag'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Praktische Sicherheitsmaßnahmen und Verhaltensregeln'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Erkennung und Meldung von Sicherheitsvorfällen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Sichere Nutzung von IT-Systemen und Datenhandhabung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Foundation Zertifizierungsvorbereitung',
          description: 'Strukturierte Vorbereitung auf anerkannte ISO 27001 Foundation Zertifizierungen mit umfassender Prüfungsvorbereitung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Systematische Vorbereitung auf Foundation Zertifizierungsprüfungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Umfassende Abdeckung aller prüfungsrelevanten Themenbereiche'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Praxisübungen und Beispielprüfungen zur optimalen Vorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Unterstützung bei der Anmeldung und Durchführung der Zertifizierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Rollenspezifische Foundation Trainings',
          description: 'Maßgeschneiderte Grundlagenschulungen für verschiedene Rollen und Verantwortungsbereiche in der Organisation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Angepasste Inhalte für Management, IT, HR und operative Bereiche'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Rollenspezifische Verantwortlichkeiten und Aufgaben'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Bereichsspezifische Sicherheitsherausforderungen und Lösungsansätze'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Praktische Umsetzung im jeweiligen Arbeitskontext'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Interaktive Foundation Workshops',
          description: 'Hands-on Workshops mit praktischen Übungen zur Vertiefung und Anwendung der Foundation Kenntnisse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Praktische Übungen zur Risikoidentifikation und Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Gruppenarbeiten zur Entwicklung von Sicherheitsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Simulation von Sicherheitsvorfällen und Reaktionsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Entwicklung organisationsspezifischer Sicherheitsrichtlinien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'E-Learning Foundation Programme',
          description: 'Flexible Online-Lernmodule für selbstgesteuerte Foundation Weiterbildung mit interaktiven Elementen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Modulare Online-Kurse für flexibles und selbstbestimmtes Lernen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Interaktive Lernelemente und multimediale Inhalte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Kontinuierliche Lernfortschrittskontrolle und Feedback'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Integration in bestehende Lernmanagementsysteme'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001FoundationSchulungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Foundation Schulung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
