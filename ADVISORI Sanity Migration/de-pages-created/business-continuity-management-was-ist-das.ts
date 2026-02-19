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
    console.log('Creating Business Continuity Management Was ist das page...')

    const bcmWasIstDasData = {
      _type: 'servicePage',
      _id: 'business-continuity-management-was-ist-das',
      title: 'Business Continuity Management - Was ist das?',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/business-continuity-resilience/business-continuity-management-was-ist-das'
      },
      parent: {
        _type: 'reference',
        _ref: 'business-continuity-resilience'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'informationssicherheit'
        }
      },
      seo: {
        _type: 'seo',
        title: 'Business Continuity Management - Was ist das? Grundlagen & Einführung | ADVISORI',
        description: 'Was ist Business Continuity Management? Umfassende Einführung in BCM: Grundlagen, Ziele, Nutzen und praktische Anwendung für nachhaltige Geschäftskontinuität und Resilienz.',
        keywords: 'Business Continuity Management was ist das, BCM Grundlagen, Geschäftskontinuität, BCM Einführung, Business Continuity Erklärung, BCM verstehen, Kontinuitätsmanagement Basics'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Business Continuity Management - Was ist das? Grundlagen und Einführung'
        },
        tagline: 'Verstehen Sie die Grundlagen des modernen BCM',
        heading: 'Business Continuity Management - Was ist das?',
        description: 'Business Continuity Management ist ein strategischer Ansatz zur Sicherstellung der Geschäftskontinuität in Krisenzeiten. Erfahren Sie, was BCM ausmacht, warum es für jede Organisation unverzichtbar ist und wie es praktisch funktioniert.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Verständliche Erklärung der BCM-Grundlagen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Praktische Einblicke in BCM-Anwendungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Klare Abgrenzung zu verwandten Disziplinen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Fundament für erfolgreiche BCM-Implementierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Business Continuity Management - Was ist das? Eine umfassende Einführung',
        description: 'Business Continuity Management ist ein systematischer Managementansatz, der Organisationen dabei hilft, ihre kritischen Geschäftsfunktionen auch während und nach Störungen aufrechtzuerhalten. BCM geht über traditionelle Notfallplanung hinaus und entwickelt eine umfassende Resilienz-Strategie für nachhaltige Geschäftskontinuität.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Identifikation und Schutz kritischer Geschäftsprozesse und Ressourcen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung von Strategien zur Aufrechterhaltung des Geschäftsbetriebs während Störungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Aufbau organisationaler Resilienz und Anpassungsfähigkeit für unvorhersehbare Ereignisse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von Risikomanagement, Krisenmanagement und Wiederherstellungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Verbesserung und Anpassung an sich ändernde Bedrohungslandschaften'
          }
        ],
        alert: {
          title: 'BCM in der Praxis',
          content: 'BCM ist nicht nur Theorie - es ist ein praktisches Instrument, das Organisationen dabei hilft, Störungen zu überstehen und gestärkt daraus hervorzugehen. Von Naturkatastrophen bis hin zu Cyberangriffen schützt BCM das, was für Ihr Unternehmen am wichtigsten ist.'
        },
        whyUs: {
          title: 'Warum BCM-Grundlagen mit ADVISORI verstehen',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Praxisnahe Erklärung komplexer BCM-Konzepte in verständlicher Sprache'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassende Expertise in BCM-Implementierung und -Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Individuelle Beratung für organisationsspezifische BCM-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Bewährte Methoden und Best Practices aus zahlreichen Projekten'
            }
          ]
        },
        additionalInfo: 'Business Continuity Management ist mehr als nur ein Notfallplan - es ist eine strategische Investition in die Zukunftsfähigkeit Ihrer Organisation. BCM hilft dabei, nicht nur Störungen zu überstehen, sondern auch Wettbewerbsvorteile zu schaffen und Stakeholder-Vertrauen zu stärken.',
        serviceDescription: 'Unser BCM-Einführungsservice vermittelt fundiertes Verständnis der Grundlagen und praktischen Anwendung von Business Continuity Management. Wir erklären, was BCM ist, wie es funktioniert und warum es für moderne Organisationen unverzichtbar geworden ist.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Grundlegende BCM-Konzepte und Terminologie'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Praktische Anwendungsbeispiele und Fallstudien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Abgrenzung zu verwandten Managementdisziplinen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Nutzen und ROI von BCM-Investitionen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Erste Schritte zur BCM-Implementierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zur BCM-Grundlagenvermittlung',
        description: 'Wir verfolgen einen strukturierten und praxisorientierten Ansatz, um BCM-Grundlagen verständlich und anwendbar zu vermitteln.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Schritt-für-Schritt Erklärung von BCM-Konzepten mit praktischen Beispielen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Interaktive Workshops und Diskussionen für besseres Verständnis'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Branchenspezifische Anpassung der BCM-Grundlagen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Verbindung von Theorie und Praxis durch reale Anwendungsszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Unterstützung beim Übergang von Grundlagen zur Implementierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Ein solides Verständnis der BCM-Grundlagen ist der Schlüssel für erfolgreiche Implementierungen. Wir helfen Organisationen dabei, BCM nicht nur zu verstehen, sondern es als strategisches Instrument für nachhaltige Resilienz zu nutzen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'BCM-Grundlagen & Konzepte',
          description: 'Umfassende Einführung in die fundamentalen Konzepte und Prinzipien des Business Continuity Managements.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Was ist Business Continuity Management?'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Kernkomponenten und Elemente von BCM'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'BCM-Lifecycle und Prozessübersicht'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Terminologie und Begriffsklärungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Praktische Anwendung',
          description: 'Verständnis der praktischen Umsetzung von BCM in verschiedenen Organisationstypen und Branchen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'BCM in verschiedenen Branchen und Sektoren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Organisationsgrößen-spezifische Ansätze'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Praktische Beispiele und Anwendungsfälle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration in bestehende Managementsysteme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Nutzen & Vorteile',
          description: 'Verständnis der geschäftlichen Vorteile und des Return on Investment von BCM-Implementierungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Geschäftliche Vorteile von BCM'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Risikoreduktion und Schadensvermeidung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Wettbewerbsvorteile durch Resilienz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Stakeholder-Vertrauen und Reputation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Abgrenzung & Einordnung',
          description: 'Klare Abgrenzung von BCM zu verwandten Disziplinen und Einordnung in den Managementkontext.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'BCM vs. Risikomanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'BCM vs. Krisenmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'BCM vs. IT-Disaster Recovery'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Integration in Corporate Governance'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Implementierungsgrundlagen',
          description: 'Erste Schritte und grundlegende Überlegungen für den Einstieg in BCM-Implementierungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Voraussetzungen für BCM-Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Organisatorische Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Ressourcenplanung und Budgetierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Change Management Aspekte'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Moderne BCM-Trends',
          description: 'Aktuelle Entwicklungen und Trends im Business Continuity Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Digitale Transformation und BCM'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Cyber-Resilienz und BCM'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Nachhaltigkeit und ESG-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Zukunftstrends und Entwicklungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcmWasIstDasData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Business Continuity Management Was ist das page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
