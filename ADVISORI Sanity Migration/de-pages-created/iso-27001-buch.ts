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
    console.log('Creating ISO 27001 Buch page...')

    const iso27001BuchData = {
      _type: 'servicePage',
      _id: 'iso-27001-buch',
      title: 'ISO 27001 Buch',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-buch'
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
        title: 'ISO 27001 Buch - Umfassende Literatur & Leitfäden | ADVISORI',
        description: 'Professionelle ISO 27001 Bücher, Implementierungsleitfäden und Fachliteratur für erfolgreiche ISMS-Umsetzung. Umfassende Ressourcen von Grundlagen bis zur Zertifizierung.',
        keywords: 'ISO 27001 Buch, ISMS Leitfaden, ISO 27001 Handbuch, Implementierungsguide, Fachliteratur Informationssicherheit, ISO 27001 Dokumentation, Sicherheitsmanagement Buch'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Bücher und Implementierungsleitfäden'
        },
        tagline: 'Umfassende Fachliteratur für erfolgreiche ISMS-Implementierung',
        heading: 'ISO 27001 Buch',
        description: 'Entdecken Sie unsere umfassende Sammlung professioneller ISO 27001 Bücher, Implementierungsleitfäden und Fachliteratur. Von grundlegenden Konzepten bis zu fortgeschrittenen Implementierungsstrategien - alle Ressourcen für eine erfolgreiche ISMS-Umsetzung und Zertifizierung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende Fachliteratur von Grundlagen bis zur Zertifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Praxisorientierte Implementierungsleitfäden und Handbücher'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Aktuelle Dokumentation zu Standards und Best Practices'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strukturierte Lernressourcen für alle Kompetenzstufen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Professionelle ISO 27001 Fachliteratur für nachhaltige ISMS-Exzellenz',
        description: 'Unsere kuratierte Sammlung von ISO 27001 Büchern und Fachliteratur bietet Ihnen fundiertes Wissen und praxiserprobte Anleitungen für eine erfolgreiche ISMS-Implementierung. Diese sorgfältig ausgewählten Ressourcen decken alle Aspekte der Informationssicherheit ab und unterstützen Sie von den ersten Schritten bis zur nachhaltigen Zertifizierung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Grundlagenliteratur für fundiertes Verständnis der ISO 27001 Prinzipien und Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Detaillierte Implementierungsleitfäden mit praktischen Schritt-für-Schritt-Anleitungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Spezialisierte Handbücher für Risikomanagement, Audit-Vorbereitung und Compliance-Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aktuelle Fachliteratur zu emerging Technologies und modernen Sicherheitsherausforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Branchenspezifische Leitfäden für maßgeschneiderte ISMS-Implementierung'
          }
        ],
        alert: {
          title: 'Wissensbasierte Implementierung',
          content: 'Fundierte Fachliteratur ist der Schlüssel für nachhaltige ISMS-Implementierung. Unsere Buchempfehlungen basieren auf jahrelanger Praxiserfahrung und bewährten Methoden.'
        },
        whyUs: {
          title: 'Unsere Literatur-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Kuratierte Auswahl basierend auf praktischer Implementierungserfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Kontinuierliche Aktualisierung entsprechend neuester Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxisorientierte Bewertung und Empfehlung relevanter Fachliteratur'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Integration von Literaturstudium in umfassende Beratungskonzepte'
            }
          ]
        },
        additionalInfo: 'Unsere ISO 27001 Buchempfehlungen basieren auf umfangreicher Praxiserfahrung und kontinuierlicher Evaluation der verfügbaren Fachliteratur. Wir unterstützen Sie bei der Auswahl der optimalen Ressourcen für Ihre spezifischen Anforderungen und Implementierungsziele.',
        serviceDescription: 'Unser Literaturservice umfasst die Bereitstellung, Bewertung und Empfehlung hochwertiger ISO 27001 Fachliteratur sowie die Integration von Literaturstudium in praktische Implementierungsprojekte. Von Grundlagenwerken bis zu spezialisierten Handbüchern erhalten Sie Zugang zu den besten verfügbaren Ressourcen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Kuratierte Sammlung aktueller ISO 27001 Fachliteratur'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Praxisorientierte Implementierungsleitfäden und Handbücher'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Spezialisierte Dokumentation für verschiedene Branchen und Anwendungsfälle'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kontinuierliche Aktualisierung und Bewertung neuer Publikationen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Integration von Literaturstudium in praktische Beratungsprojekte'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Literatur-Ansatz',
        description: 'Wir verfolgen einen strukturierten Ansatz bei der Auswahl und Empfehlung von ISO 27001 Fachliteratur, der sowohl theoretische Fundierung als auch praktische Anwendbarkeit gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Bedarfsanalyse zur Identifikation der optimalen Literaturressourcen für Ihre Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Kuratierte Auswahl basierend auf Praxisrelevanz und Aktualität der Inhalte'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Strukturierte Lernpfade für systematischen Wissensaufbau'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von Literaturstudium in praktische Implementierungsprojekte'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Bewertung und Aktualisierung der Literaturempfehlungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Fundierte Fachliteratur bildet das Rückgrat jeder erfolgreichen ISMS-Implementierung. Unsere kuratierte Auswahl von ISO 27001 Büchern und Leitfäden ermöglicht es unseren Kunden, sowohl theoretisches Verständnis als auch praktische Umsetzungskompetenz systematisch aufzubauen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Grundlagenliteratur & Einführungswerke',
          description: 'Umfassende Sammlung von Grundlagenwerken für fundiertes Verständnis der ISO 27001 Prinzipien und Konzepte.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Einführende Werke zu Informationssicherheit und ISMS-Grundlagen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Detaillierte Erläuterungen der ISO 27001 Struktur und Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Konzeptuelle Grundlagen für Risikomanagement und Sicherheitssteuerung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Verständliche Aufbereitung komplexer Sicherheitskonzepte'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Implementierungsleitfäden & Handbücher',
          description: 'Praxisorientierte Leitfäden und Handbücher für systematische ISMS-Implementierung und Umsetzung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Schritt-für-Schritt-Anleitungen für ISMS-Aufbau und Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Praktische Checklisten und Arbeitsvorlagen für Implementierungsprojekte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Bewährte Methoden und Best Practices aus realen Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Projektmanagement-Leitfäden für ISMS-Implementierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Risikomanagement & Compliance-Literatur',
          description: 'Spezialisierte Fachliteratur zu Risikomanagement, Compliance-Überwachung und Sicherheitssteuerung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Umfassende Risikomanagement-Methodiken und Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Compliance-Monitoring und kontinuierliche Überwachungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Incident Management und Business Continuity Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Governance-Strukturen und Management-Systeme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Audit & Zertifizierungsliteratur',
          description: 'Spezialisierte Bücher und Leitfäden für Audit-Vorbereitung, Zertifizierungsprozesse und kontinuierliche Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Audit-Vorbereitung und Zertifizierungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Interne Audit-Methoden und Selbstbewertungsansätze'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Surveillance-Audits und Re-Zertifizierungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Evidence-Sammlung und Dokumentationsstrategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Branchenspezifische Fachliteratur',
          description: 'Spezialisierte Literatur für branchenspezifische ISMS-Implementierung und sektorale Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Finanzdienstleister-spezifische ISMS-Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Gesundheitswesen und medizinische Einrichtungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Industrielle Produktionsumgebungen und Kritische Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Cloud-Services und digitale Geschäftsmodelle'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Aktuelle Trends & Emerging Technologies',
          description: 'Moderne Fachliteratur zu aktuellen Entwicklungen, neuen Technologien und zukünftigen Herausforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Cybersecurity und moderne Bedrohungslandschaften'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Cloud Security und hybride Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'KI-Sicherheit und automatisierte Sicherheitssysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Regulatorische Entwicklungen und Multi-Standard-Compliance'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001BuchData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Buch page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
