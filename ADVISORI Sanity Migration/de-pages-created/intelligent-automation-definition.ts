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
    console.log('Creating Intelligent Automation Definition page...')

    const intelligentAutomationDefinitionData = {
      _type: 'servicePage',
      _id: 'intelligent-automation-definition',
      title: 'Intelligent Automation Definition',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-automation-definition'
      },
      parent: {
        _type: 'reference',
        _ref: 'intelligent-automation'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'digitale-transformation'
        }
      },
      seo: {
        _type: 'seo',
        title: 'Intelligent Automation Definition | ADVISORI',
        description: 'Verstehen Sie die Definition von Intelligent Automation: Die Konvergenz von KI, ML, RPA und kognitiven Technologien für transformative Geschäftsprozesse. EU AI Act konforme Implementierung.',
        keywords: 'Intelligent Automation Definition, KI Automatisierung, RPA, Machine Learning, Kognitive Technologien, EU AI Act, Prozessautomatisierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Automation Definition'
        },
        tagline: 'Die Zukunft der Automatisierung verstehen und strategisch nutzen',
        heading: 'Intelligent Automation Definition',
        description: 'Intelligent Automation repräsentiert die Evolution der Prozessautomatisierung durch die Konvergenz von Künstlicher Intelligenz, Machine Learning, Robotic Process Automation und kognitiven Technologien zu selbstlernenden, adaptiven Systemen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassendes Verständnis der IA-Technologie-Landschaft und ihrer Anwendungsmöglichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategische Einordnung von IA im Kontext der digitalen Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'EU AI Act konforme Klassifizierung und Governance-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Fundament für erfolgreiche IA-Implementierungsstrategien'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Was ist Intelligent Automation?',
        description: 'Intelligent Automation (IA) definiert sich als die nahtlose Integration von Künstlicher Intelligenz, Machine Learning, Natural Language Processing und Robotic Process Automation zu einem kohärenten System, das nicht nur Aufgaben automatisiert, sondern auch lernt, sich anpasst und eigenständig Entscheidungen trifft.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Konvergenz von KI, ML, NLP und RPA zu selbstlernenden Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Adaptive Automatisierung mit kontinuierlicher Verbesserung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Kognitive Fähigkeiten für komplexe Entscheidungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'End-to-End Prozessorchestrierung mit intelligenter Steuerung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Menschliche Kollaboration durch Human-in-the-Loop Konzepte'
          }
        ],
        alert: {
          title: 'Wichtiger Hinweis',
          content: 'Intelligent Automation ist mehr als die Summe ihrer Technologie-Komponenten. Sie repräsentiert einen paradigmatischen Wandel von regelbasierten zu lernenden, adaptiven Systemen, die kontinuierlich ihre Performance optimieren und neue Fähigkeiten entwickeln.'
        },
        whyUs: {
          title: 'ADVISORI IA-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in IA-Technologie-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act Compliance und KI-Governance Spezialisierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Strategische Beratung für IA-Transformationsprojekte'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praxiserprobte Implementierungsmethoden und Best Practices'
            }
          ]
        },
        additionalInfo: 'Die Definition von Intelligent Automation entwickelt sich kontinuierlich weiter, da neue KI-Technologien und Anwendungsmöglichkeiten entstehen. Ein fundiertes Verständnis der Grundlagen ist essentiell für strategische Entscheidungen.',
        serviceDescription: 'Unsere IA-Definition Services vermitteln ein umfassendes Verständnis der Technologie-Landschaft, Anwendungsmöglichkeiten und strategischen Implikationen für Ihr Unternehmen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Technologie-Landschaft und Komponenten-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Anwendungsbereich-Identifikation und Potentialbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Strategische Einordnung und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Compliance-Anforderungen und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Implementierungsstrategien und Best Practices'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Definitionsansatz',
        description: 'Wir vermitteln IA-Verständnis durch einen strukturierten, mehrdimensionalen Ansatz, der technische Tiefe mit strategischer Relevanz verbindet und dabei regulatorische Anforderungen berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Technologie-Komponenten Analyse und Architektur-Verständnis'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Anwendungsfall-basierte Definition und Potentialbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Strategische Einordnung in die Unternehmenstransformation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'EU AI Act Compliance und Governance-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Zukunftstrends und Entwicklungsperspektiven'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Ein präzises Verständnis von Intelligent Automation ist der Grundstein für jede erfolgreiche Digitalisierungsstrategie. Wir helfen Unternehmen dabei, die Komplexität der IA-Technologie-Landschaft zu durchdringen und strategische Entscheidungen auf einer soliden Wissensbasis zu treffen. Nur wer die Möglichkeiten und Grenzen von IA wirklich versteht, kann deren transformatives Potenzial voll ausschöpfen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'IA Technologie-Landschaft',
          description: 'Umfassende Analyse der Intelligent Automation Technologie-Komponenten und ihrer Interaktionen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'KI und Machine Learning Grundlagen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'RPA und Workflow-Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Natural Language Processing und Computer Vision'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Kognitive Services und Decision Engines'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'IA vs. Traditionelle Automatisierung',
          description: 'Abgrenzung und Differenzierung von Intelligent Automation gegenüber herkömmlichen Automatisierungsansätzen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Regelbasierte vs. lernende Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Statische vs. adaptive Prozessautomatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Strukturierte vs. unstrukturierte Datenverarbeitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Deterministische vs. probabilistische Entscheidungsfindung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'IA Anwendungsbereiche',
          description: 'Identifikation und Bewertung von Anwendungsmöglichkeiten für Intelligent Automation in verschiedenen Geschäftsbereichen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Finanzwesen und Rechnungswesen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Kundenservice und Support'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Supply Chain und Logistik'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Human Resources und Compliance'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'IA Architektur-Prinzipien',
          description: 'Grundlegende Architektur-Konzepte und Design-Prinzipien für Intelligent Automation Systeme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Modulare und skalierbare Systemarchitektur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'API-first und Cloud-native Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Event-driven und microservices-basierte Ansätze'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Security by Design und Privacy by Design'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'EU AI Act Klassifizierung',
          description: 'Einordnung von IA-Systemen nach EU AI Act Risikoklassen und entsprechende Compliance-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Risikobewertung und Klassifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Dokumentations- und Transparenzanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Governance-Strukturen und Überwachung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Audit-Vorbereitung und Compliance-Monitoring'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'IA Zukunftstrends',
          description: 'Analyse aktueller Entwicklungen und zukünftiger Trends in der Intelligent Automation Landschaft.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Emerging Technologies und Innovation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Marktentwicklung und Vendor-Landschaft'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Regulatorische Entwicklungen und Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategische Implikationen für Unternehmen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentAutomationDefinitionData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Automation Definition page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
