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
    console.log('Creating ISO 27001 Risikomanagement page...')

    const iso27001RisikomanagementData = {
      _type: 'servicePage',
      _id: 'iso-27001-risikomanagement',
      title: 'ISO 27001 Risikomanagement',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-risikomanagement'
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
        title: 'ISO 27001 Risikomanagement | Strategisches Risk Management | ADVISORI',
        description: 'Professionelles ISO 27001 Risikomanagement für nachhaltige Informationssicherheit. Von der Risikostrategie bis zur kontinuierlichen Überwachung - Ihr Partner für strategisches Risk Management.',
        keywords: 'ISO 27001 Risikomanagement, Risk Management, ISMS Risikostrategie, Informationssicherheitsrisiken, Risiko-Governance, Enterprise Risk Management, Risiko-Monitoring, Compliance Risk Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Risikomanagement und strategisches Risk Management'
        },
        tagline: 'Strategisches Risikomanagement für nachhaltige Informationssicherheit',
        heading: 'ISO 27001 Risikomanagement',
        description: 'Etablieren Sie ein robustes Risikomanagement als strategisches Fundament Ihres ISO 27001 ISMS. Unsere bewährten Methoden und Frameworks unterstützen Sie bei der Entwicklung einer nachhaltigen Risiko-Governance, die Compliance sicherstellt und gleichzeitig Geschäftswert schafft.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische Risiko-Governance und Enterprise Risk Management'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Kontinuierliches Risiko-Monitoring und proaktive Steuerung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integration mit Geschäftsprozessen und Compliance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Automatisierte Risiko-Dashboards und KPI-basierte Steuerung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ISO 27001 Risikomanagement - Strategische Steuerung für nachhaltige Sicherheit',
        description: 'Das Risikomanagement nach ISO 27001 geht weit über die reine Risikoanalyse hinaus und etabliert eine strategische Risiko-Governance, die Informationssicherheit als integralen Bestandteil der Unternehmensführung verankert. Es schafft die Grundlage für risikobasierte Entscheidungen, kontinuierliche Verbesserung und nachhaltige Compliance in einer sich wandelnden Bedrohungslandschaft.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Risiko-Governance mit klaren Rollen und Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Kontinuierliches Risiko-Monitoring und proaktive Risikosteuerung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration mit Geschäftsprozessen und strategischen Zielen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Automatisierte Risiko-Dashboards und KPI-basierte Entscheidungsunterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Compliance-Integration mit modernen Regulatory Frameworks'
          }
        ],
        alert: {
          title: 'Strategischer Mehrwert durch professionelles Risikomanagement',
          content: 'Ein professionelles Risikomanagement transformiert Informationssicherheit von einem Kostenfaktor zu einem strategischen Enabler für Geschäftswachstum und Vertrauen.'
        },
        whyUs: {
          title: 'Warum ISO 27001 Risikomanagement mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Bewährte Enterprise Risk Management Frameworks und Methoden'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Integration mit modernen GRC-Plattformen und AI-gestützten Tools'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Expertise und Compliance-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung und strategische Optimierung'
            }
          ]
        },
        additionalInfo: 'Das ISO 27001 Risikomanagement etabliert einen systematischen Ansatz zur Identifikation, Bewertung, Behandlung und Überwachung von Informationssicherheitsrisiken. Es integriert sich nahtlos in bestehende Governance-Strukturen und schafft die Grundlage für eine resiliente und adaptive Sicherheitsarchitektur.',
        serviceDescription: 'Unser Risikomanagement-Service umfasst alle Aspekte des strategischen Risk Managements - von der Entwicklung einer Risiko-Governance über die Implementierung kontinuierlicher Monitoring-Prozesse bis hin zur Integration mit modernen Compliance-Frameworks. Wir unterstützen Sie dabei, Risikomanagement als strategischen Wettbewerbsvorteil zu etablieren.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Risiko-Governance und Organisationsdesign'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Kontinuierliches Risiko-Monitoring und Steuerung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Integration mit Geschäftsprozessen und Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Automatisierung und KPI-basierte Entscheidungsunterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Verbesserung und Anpassung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer Ansatz für ISO 27001 Risikomanagement',
        description: 'Wir verfolgen einen ganzheitlichen, strategieorientierten Ansatz, der bewährte Risk Management Frameworks mit innovativen Technologien kombiniert und nachhaltigen Geschäftswert schafft.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Risiko-Governance mit klarer Verankerung in der Unternehmensführung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Kontinuierliches Risiko-Monitoring mit automatisierten Dashboards und Alerting'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Integration mit Geschäftsprozessen und strategischen Zielen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'KPI-basierte Steuerung und datengetriebene Entscheidungsunterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Verbesserung durch adaptive Risiko-Frameworks'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Strategisches Risikomanagement ist der Schlüssel für nachhaltige Informationssicherheit und Geschäftserfolg. Unsere bewährten Frameworks ermöglichen es Unternehmen, Risiken nicht nur zu verwalten, sondern als strategischen Wettbewerbsvorteil zu nutzen und dabei höchste Compliance-Standards zu erfüllen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Risiko-Governance',
          description: 'Entwicklung und Implementierung einer strategischen Risiko-Governance mit klaren Rollen, Verantwortlichkeiten und Entscheidungsprozessen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Risiko-Governance-Framework und Organisationsdesign'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Risikostrategie und -politik Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Rollen und Verantwortlichkeiten Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Risiko-Komitee und Eskalationsprozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Kontinuierliches Risiko-Monitoring',
          description: 'Etablierung kontinuierlicher Monitoring-Prozesse mit automatisierten Dashboards und proaktiver Risikosteuerung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Risiko-KPIs und Monitoring-Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automatisierte Risiko-Alerting und Eskalation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Kontinuierliche Risikobewertung und -anpassung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Trend-Analyse und Früherkennung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Risiko-Integration und Business Alignment',
          description: 'Integration des Risikomanagements in Geschäftsprozesse und strategische Entscheidungsfindung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Business Process Integration und Workflow-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Strategische Risiko-Bewertung und Geschäftsauswirkungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Risiko-basierte Entscheidungsunterstützung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Stakeholder-Management und Kommunikation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Risiko-Behandlung und Kontrollmanagement',
          description: 'Strategische Risiko-Behandlung mit optimaler Kontrollauswahl und Implementierungsplanung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Risiko-Behandlungsstrategien und -optionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Kontrollauswahl und -optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Kosten-Nutzen-Analyse und ROI-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Implementierungsplanung und Change Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Compliance und Regulatory Integration',
          description: 'Integration des Risikomanagements mit modernen Compliance-Frameworks und regulatorischen Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Multi-Framework Compliance Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Regulatory Change Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Audit-Readiness und Compliance-Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kontinuierliche Compliance-Überwachung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Risiko-Technologie und Automatisierung',
          description: 'Implementierung moderner GRC-Technologien und Automatisierung für effizientes Risikomanagement.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'GRC-Plattform Auswahl und Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Automatisierte Risiko-Workflows und Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'AI-gestützte Risiko-Analyse und Vorhersage'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Integration mit bestehenden IT-Systemen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001RisikomanagementData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Risikomanagement main page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
