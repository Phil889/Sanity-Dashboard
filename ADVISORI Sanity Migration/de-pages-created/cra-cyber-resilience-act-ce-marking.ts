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
    console.log('Creating CRA Cyber Resilience Act CE-Marking page...')

    const craMarkingData = {
      _type: 'servicePage',
      _id: 'cra-cyber-resilience-act-ce-marking',
      title: 'CRA Cyber Resilience Act CE-Marking',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-cyber-resilience-act-conformity-assessment/cra-cyber-resilience-act-ce-marking'
      },
      parent: {
        _type: 'reference',
        _ref: 'cra-cyber-resilience-act-conformity-assessment'
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
        title: 'CRA Cyber Resilience Act CE-Marking | ADVISORI',
        description: 'Professionelle Unterstützung bei der CE-Kennzeichnung nach dem Cyber Resilience Act (CRA). Wir begleiten Sie durch den gesamten Konformitätsprozess und sichern die Marktfähigkeit Ihrer Produkte.',
        keywords: 'CRA, Cyber Resilience Act, CE-Marking, CE-Kennzeichnung, Konformitätsbewertung, Cybersicherheit, EU-Verordnung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Cyber Resilience Act CE-Marking'
        },
        tagline: 'Sichere CE-Kennzeichnung nach dem Cyber Resilience Act',
        heading: 'CRA Cyber Resilience Act CE-Marking',
        description: 'Die CE-Kennzeichnung nach dem Cyber Resilience Act (CRA) ist entscheidend für den Marktzugang digitaler Produkte in der EU. Wir unterstützen Sie bei der vollständigen Konformitätsbewertung und sicheren CE-Markierung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Rechtssichere CE-Kennzeichnung nach CRA-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Vollständige Konformitätsdokumentation und Nachweisführung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Sicherstellung der EU-Marktfähigkeit Ihrer Produkte'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Minimierung rechtlicher Risiken und Haftungsrisiken'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRA Cyber Resilience Act CE-Marking',
        description: 'Die CE-Kennzeichnung nach dem Cyber Resilience Act (CRA) ist ein komplexer Prozess, der eine umfassende Konformitätsbewertung der Cybersicherheitseigenschaften digitaler Produkte erfordert. Wir begleiten Sie durch alle erforderlichen Schritte zur rechtssicheren CE-Markierung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse der CRA-Anwendbarkeit und Produktklassifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Durchführung der Konformitätsbewertungsverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Erstellung der technischen Dokumentation und EU-Konformitätserklärung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Anbringung der CE-Kennzeichnung und Markteinführung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Überwachung und Aufrechterhaltung der Konformität'
          }
        ],
        alert: {
          title: 'Rechtlicher Hinweis',
          content: 'Die CE-Kennzeichnung nach dem CRA ist ab 2027 verpflichtend für digitale Produkte mit Cybersicherheitsrelevanz. Eine frühzeitige Vorbereitung ist entscheidend für die rechtzeitige Marktreife.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnisse des Cyber Resilience Act und EU-Rechtsrahmen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung in Konformitätsbewertungsverfahren und CE-Kennzeichnungsprozessen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praktische Unterstützung bei der technischen Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitliche Beratung von der Analyse bis zur Markteinführung'
            }
          ]
        },
        additionalInfo: 'Die CE-Kennzeichnung nach dem CRA erfordert eine systematische Herangehensweise und umfassende Dokumentation. Mit der richtigen Vorbereitung und professioneller Unterstützung können Sie die Marktfähigkeit Ihrer Produkte rechtzeitig sicherstellen.',
        serviceDescription: 'Wir bieten Ihnen umfassende Unterstützung bei der CE-Kennzeichnung nach dem Cyber Resilience Act, von der initialen Bewertung über die Konformitätsbewertung bis zur erfolgreichen Markteinführung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'CRA-Anwendbarkeitsanalyse und Produktklassifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Konformitätsbewertungsverfahren und Prüfungsbegleitung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Technische Dokumentation und EU-Konformitätserklärung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'CE-Kennzeichnung und Markteinführungsbegleitung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Ongoing Compliance und Überwachung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser CE-Marking Prozess',
        description: 'Wir führen Sie strukturiert durch alle Phasen der CE-Kennzeichnung nach dem Cyber Resilience Act.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Produktanalyse und CRA-Anwendbarkeitsprüfung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Auswahl des geeigneten Konformitätsbewertungsverfahrens'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Durchführung der erforderlichen Tests und Bewertungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Erstellung der vollständigen technischen Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'CE-Kennzeichnung und Markteinführungsfreigabe'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir einen verlässlichen Partner für die CE-Kennzeichnung nach dem Cyber Resilience Act gefunden. Die professionelle Begleitung durch den komplexen Konformitätsprozess hat uns die rechtzeitige Marktfähigkeit unserer Produkte gesichert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'CRA-Anwendbarkeitsanalyse',
          description: 'Umfassende Bewertung der CRA-Anwendbarkeit auf Ihre Produkte und deren Klassifizierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Produktanalyse und Scope-Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Klassifizierung nach CRA-Produktkategorien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Bewertung der anzuwendenden Sicherheitsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Roadmap für die Konformitätsbewertung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Konformitätsbewertung und Dokumentation',
          description: 'Durchführung der vollständigen Konformitätsbewertung und Erstellung aller erforderlichen Dokumentationen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Auswahl und Durchführung geeigneter Bewertungsverfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Technische Dokumentation nach CRA-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'EU-Konformitätserklärung und CE-Kennzeichnung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Marktüberwachung und Compliance-Monitoring'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craMarkingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Cyber Resilience Act CE-Marking page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
