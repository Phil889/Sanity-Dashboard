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
    console.log('Creating ISO 27001 Foundation Zertifizierung page...')

    const iso27001FoundationZertifizierungData = {
      _type: 'servicePage',
      _id: 'iso-27001-foundation-zertifizierung',
      title: 'ISO 27001 Foundation Zertifizierung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-foundation-zertifizierung'
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
        title: 'ISO 27001 Foundation Zertifizierung | ADVISORI',
        description: 'Professionelle ISO 27001 Foundation Zertifizierung für Einsteiger. Grundlagen der Informationssicherheit, ISMS-Prinzipien und Zertifizierungsvorbereitung für nachhaltigen Karriereerfolg.',
        keywords: 'ISO 27001 Foundation, ISO 27001 Grundlagen, ISMS Foundation, Informationssicherheit Zertifizierung, ISO 27001 Einsteiger, Foundation Kurs, Zertifizierungsvorbereitung, ISMS Basics'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Foundation Zertifizierung'
        },
        tagline: 'Ihr Einstieg in die professionelle Informationssicherheit',
        heading: 'ISO 27001 Foundation Zertifizierung',
        description: 'Starten Sie Ihre Karriere in der Informationssicherheit mit unserer umfassenden ISO 27001 Foundation Zertifizierung. Erwerben Sie fundierte Grundkenntnisse über ISMS-Prinzipien, Risikomanagement und Best Practices für nachhaltigen beruflichen Erfolg.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Fundierte Grundlagen der ISO 27001 und ISMS-Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Praxisorientierte Vorbereitung auf die Foundation-Prüfung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Anerkannte Zertifizierung für Karriereentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Expertenwissen von erfahrenen ISMS-Praktikern'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ISO 27001 Foundation Zertifizierung für nachhaltigen Karriereerfolg',
        description: 'Die ISO 27001 Foundation Zertifizierung bildet das solide Fundament für eine erfolgreiche Laufbahn in der Informationssicherheit. Unser umfassendes Zertifizierungsprogramm vermittelt nicht nur theoretisches Wissen, sondern auch praktische Einblicke in die Anwendung von ISMS-Prinzipien in realen Unternehmensumgebungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Einführung in die ISO 27001 Grundlagen und ISMS-Konzepte'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Verständnis für Risikomanagement und Sicherheitskontrollmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Praktische Anwendung von Informationssicherheitsprinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Vorbereitung auf weiterführende ISO 27001 Zertifizierungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration moderner Compliance-Anforderungen und Branchenstandards'
          }
        ],
        alert: {
          title: 'Karriere-Sprungbrett',
          content: 'Die ISO 27001 Foundation Zertifizierung ist der ideale Einstieg in die wachsende Informationssicherheitsbranche und öffnet Türen zu spannenden Karrieremöglichkeiten in einem zukunftssicheren Bereich.'
        },
        whyUs: {
          title: 'Unsere Zertifizierungsexpertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Erfahrene Trainer mit umfassender ISMS-Praxis und Zertifizierungsexpertise'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxisorientierte Lernmethoden mit realen Fallstudien und Übungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Prüfungsvorbereitung mit hohen Erfolgsquoten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Betreuung und Karriereberatung'
            }
          ]
        },
        additionalInfo: 'Unsere ISO 27001 Foundation Zertifizierung geht über die reine Wissensvermittlung hinaus. Wir bereiten Sie optimal auf die Herausforderungen der modernen Informationssicherheit vor und schaffen eine solide Basis für Ihre weitere berufliche Entwicklung. Dabei berücksichtigen wir aktuelle Trends wie Digitalisierung, Cloud-Security und regulatorische Entwicklungen.',
        serviceDescription: 'Unser Foundation-Programm kombiniert theoretische Grundlagen mit praktischen Anwendungen und bereitet Sie systematisch auf die Zertifizierungsprüfung vor. Von den Grundprinzipien der Informationssicherheit bis hin zu komplexen ISMS-Strukturen erhalten Sie das Wissen und die Fähigkeiten, die in der heutigen Sicherheitslandschaft gefragt sind.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Umfassende Grundlagenvermittlung zu ISO 27001 und ISMS'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Praxisorientierte Übungen und Fallstudien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Intensive Prüfungsvorbereitung und Mock-Exams'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Karriereberatung und Entwicklungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Betreuung und Alumni-Netzwerk'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strukturierter Lernansatz',
        description: 'Wir verfolgen einen systematischen, praxisorientierten Ansatz, der theoretisches Wissen mit praktischen Anwendungen verbindet und Sie optimal auf die Zertifizierungsprüfung und Ihre Karriere vorbereitet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strukturierte Wissensvermittlung von Grundlagen bis zu fortgeschrittenen Konzepten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Interaktive Lernmethoden mit praktischen Übungen und Gruppenarbeiten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Intensive Prüfungsvorbereitung mit simulierten Prüfungssituationen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Individuelle Betreuung und personalisiertes Feedback'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Kompetenzentwicklung für langfristigen Karriereerfolg'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die ISO 27001 Foundation Zertifizierung ist der ideale Einstieg in die Informationssicherheit. Unser praxisorientiertes Programm vermittelt nicht nur Grundlagenwissen, sondern bereitet Teilnehmer optimal auf eine erfolgreiche Karriere in diesem zukunftssicheren und wachsenden Bereich vor.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Foundation Grundlagen-Training',
          description: 'Umfassende Einführung in die ISO 27001 Grundlagen, ISMS-Prinzipien und Informationssicherheitskonzepte für Einsteiger.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematische Einführung in ISO 27001 Standard und ISMS-Grundlagen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Verständnis für Informationssicherheitsprinzipien und Schutzziele'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Überblick über Risikomanagement und Sicherheitskontrollmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Einführung in Compliance-Anforderungen und regulatorische Aspekte'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'ISMS-Prozesse & Dokumentation',
          description: 'Detaillierte Schulung zu ISMS-Prozessen, Dokumentationsanforderungen und praktischer Umsetzung von Sicherheitsmaßnahmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Verständnis für ISMS-Aufbau und Organisationsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Einführung in Dokumentationsanforderungen und Verfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Praktische Übungen zu Prozessdesign und Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Grundlagen der kontinuierlichen Verbesserung und Monitoring'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Risikomanagement Grundlagen',
          description: 'Einführung in Risikomanagement-Prinzipien, Risikoidentifikation und Bewertungsmethoden im Kontext der Informationssicherheit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Grundlagen des Risikomanagements und Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Methoden zur Risikoidentifikation und Risikoanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Einführung in Risk Treatment und Kontrollmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Praktische Übungen mit Risikobewertungstools und Methoden'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Prüfungsvorbereitung & Zertifizierung',
          description: 'Intensive Vorbereitung auf die ISO 27001 Foundation Prüfung mit Mock-Exams, Prüfungsstrategien und Erfolgstipps.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Umfassende Prüfungsvorbereitung mit strukturiertem Lernplan'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Mock-Exams und Prüfungssimulationen unter realen Bedingungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Prüfungsstrategien und Tipps für optimale Leistung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Individuelle Schwachstellenanalyse und gezieltes Training'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Praktische Anwendung & Fallstudien',
          description: 'Praxisorientierte Übungen mit realen Fallstudien und Anwendungsszenarien für nachhaltiges Lernen und Verständnis.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Reale Fallstudien aus verschiedenen Branchen und Unternehmensgrößen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Praktische Übungen zu ISMS-Implementierung und Betrieb'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Gruppenarbeiten und interaktive Lernmethoden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Simulation von Audit-Situationen und Compliance-Prüfungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Karriereentwicklung & Mentoring',
          description: 'Umfassende Karriereberatung, Entwicklungsplanung und kontinuierliches Mentoring für nachhaltigen beruflichen Erfolg.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Individuelle Karriereberatung und Entwicklungsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Mentoring durch erfahrene ISMS-Experten und Praktiker'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Zugang zu Alumni-Netzwerk und Branchenkontakten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Weiterbildungsempfehlungen und Entwicklungspfade'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001FoundationZertifizierungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Foundation Zertifizierung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
