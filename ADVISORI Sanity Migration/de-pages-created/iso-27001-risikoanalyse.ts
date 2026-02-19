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
    console.log('Creating ISO 27001 Risikoanalyse page...')

    const iso27001RisikoanalyseData = {
      _type: 'servicePage',
      _id: 'iso-27001-risikoanalyse',
      title: 'ISO 27001 Risikoanalyse',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-risikoanalyse'
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
        title: 'ISO 27001 Risikoanalyse | Systematisches Risikomanagement | ADVISORI',
        description: 'Professionelle ISO 27001 Risikoanalyse und Risikomanagement für ISMS. Von der Risikoidentifikation bis zur Behandlung - Ihr Partner für systematische Informationssicherheit.',
        keywords: 'ISO 27001 Risikoanalyse, Risikomanagement, ISMS Risikobewertung, Informationssicherheitsrisiken, Risikobehandlung, Asset-Management, Bedrohungsanalyse, Schwachstellenanalyse'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Risikoanalyse und Risikomanagement'
        },
        tagline: 'Systematische Risikoanalyse für nachhaltige Informationssicherheit',
        heading: 'ISO 27001 Risikoanalyse',
        description: 'Entwickeln Sie eine robuste Risikoanalyse als Herzstück Ihres ISO 27001 ISMS. Unsere bewährten Methoden und Tools unterstützen Sie bei der systematischen Identifikation, Bewertung und Behandlung von Informationssicherheitsrisiken für nachhaltigen Schutz Ihrer kritischen Assets.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Risikoidentifikation und Asset-Klassifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Quantitative und qualitative Risikobewertungsmethoden'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Risikobasierte Kontrollauswahl und -implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliches Monitoring und Risiko-Review'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ISO 27001 Risikoanalyse - Das Fundament für effektives ISMS',
        description: 'Die Risikoanalyse bildet das Herzstück jedes ISO 27001 konformen Informationssicherheitsmanagementsystems. Sie ermöglicht es Organisationen, ihre Informationsassets systematisch zu schützen, indem Risiken identifiziert, bewertet und angemessen behandelt werden. Eine professionelle Risikoanalyse schafft die Grundlage für risikobasierte Entscheidungen und optimale Ressourcenallokation.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strukturierte Identifikation und Klassifizierung aller Informationsassets'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Systematische Bedrohungs- und Schwachstellenanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Quantitative und qualitative Risikobewertung nach bewährten Methoden'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Risikobasierte Auswahl und Priorisierung von Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliches Risikomanagement und regelmäßige Neubewertung'
          }
        ],
        alert: {
          title: 'Risikobasierter Ansatz als Erfolgsfaktor',
          content: 'Eine professionelle Risikoanalyse ermöglicht es, Sicherheitsinvestitionen gezielt dort einzusetzen, wo sie den größten Schutz bieten und gleichzeitig Compliance-Anforderungen optimal erfüllen.'
        },
        whyUs: {
          title: 'Warum ISO 27001 Risikoanalyse mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Bewährte Risikomanagement-Methoden und -Tools'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenspezifische Expertise und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integration mit modernen GRC-Plattformen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung und Optimierung'
            }
          ]
        },
        additionalInfo: 'Die ISO 27001 Risikoanalyse folgt einem strukturierten Prozess, der von der Asset-Identifikation über die Bedrohungs- und Schwachstellenanalyse bis hin zur Risikobewertung und -behandlung reicht. Dieser systematische Ansatz gewährleistet, dass alle relevanten Risiken erfasst und angemessen adressiert werden.',
        serviceDescription: 'Unser Risikoanalyse-Service umfasst alle Aspekte des ISO 27001 Risikomanagements - von der methodischen Grundlage über die praktische Durchführung bis hin zur Integration in Ihre bestehenden Geschäftsprozesse. Wir unterstützen Sie dabei, eine nachhaltige Risikokultur zu etablieren und kontinuierlich zu verbessern.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Asset-Inventarisierung und Klassifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Bedrohungsmodellierung und Schwachstellenanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Risikobewertung und -priorisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Risikobehandlungsplanung und Kontrollauswahl'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Risiko-Monitoring und kontinuierliche Verbesserung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Ansatz für ISO 27001 Risikoanalyse',
        description: 'Wir verfolgen einen strukturierten, methodenbasierten Ansatz, der bewährte Risikomanagement-Frameworks mit praktischer Umsetzbarkeit kombiniert und nachhaltigen Erfolg gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Asset-Identifikation und Bewertung der Informationswerte'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematische Bedrohungs- und Schwachstellenanalyse mit aktuellen Threat Intelligence'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Quantitative und qualitative Risikobewertung nach ISO 27005 Standards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Risikobasierte Kontrollauswahl und Implementierungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung kontinuierlicher Risiko-Monitoring-Prozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Eine professionelle Risikoanalyse ist das Fundament jeder erfolgreichen ISO 27001 Implementierung. Unsere bewährten Methoden ermöglichen es Unternehmen, ihre Informationssicherheitsrisiken systematisch zu verstehen und gezielt zu adressieren, wodurch sowohl Compliance als auch operative Exzellenz erreicht werden.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Asset-Management und Klassifizierung',
          description: 'Systematische Identifikation, Inventarisierung und Bewertung aller Informationsassets als Grundlage für die Risikoanalyse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Vollständige Asset-Inventarisierung und Kategorisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung von Informationswerten und Kritikalität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Asset-Owner-Zuordnung und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Klassifizierungsschema und Handling-Richtlinien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Bedrohungsanalyse und Threat Modeling',
          description: 'Umfassende Identifikation und Bewertung von Bedrohungen für Ihre Informationsassets.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Aktuelle Threat Intelligence und Bedrohungslandschaft'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Branchenspezifische Bedrohungsmodellierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Attack Vector Analyse und Angriffspfade'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Threat Actor Profiling und Motivationsanalyse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Schwachstellenanalyse und Vulnerability Assessment',
          description: 'Systematische Identifikation und Bewertung von Schwachstellen in Systemen, Prozessen und Organisationsstrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Technische Vulnerability Assessments und Penetrationstests'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Organisatorische und prozessuale Schwachstellenanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Human Factor Analyse und Social Engineering Risiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Physische Sicherheitsbewertung und Umgebungsrisiken'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Risikobewertung und -quantifizierung',
          description: 'Professionelle Bewertung und Quantifizierung von Informationssicherheitsrisiken nach bewährten Methoden.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Qualitative und quantitative Risikobewertungsmethoden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Wahrscheinlichkeits- und Auswirkungsanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Risikomatrix und Scoring-Modelle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Business Impact Analyse und Schadenspotential'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Risikobehandlung und Kontrollauswahl',
          description: 'Strategische Planung der Risikobehandlung und risikobasierte Auswahl geeigneter Sicherheitskontrollen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Risikobehandlungsstrategien und -optionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'ISO 27001 Annex A Kontrollauswahl und -anpassung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Kosten-Nutzen-Analyse von Sicherheitsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Implementierungsplanung und Priorisierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Risiko-Monitoring und kontinuierliche Verbesserung',
          description: 'Etablierung nachhaltiger Prozesse für kontinuierliches Risikomanagement und regelmäßige Neubewertung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Risiko-KPIs und Monitoring-Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Regelmäßige Risiko-Reviews und Neubewertungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Incident-basierte Risikoanpassungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Verbesserung der Risikomanagement-Prozesse'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001RisikoanalyseData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Risikoanalyse main page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
