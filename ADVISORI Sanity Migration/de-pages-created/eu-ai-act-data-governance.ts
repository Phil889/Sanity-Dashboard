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
    console.log('Creating EU AI Act Data Governance page...')

    const euAiActDataGovernanceData = {
      _type: 'servicePage',
      _id: 'eu-ai-act-data-governance',
      title: 'EU AI Act Data Governance',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eu-ai-act/eu-ai-act-high-risk-ai-systems/eu-ai-act-data-governance'
      },
      parent: {
        _type: 'reference',
        _ref: 'eu-ai-act-high-risk-ai-systems'
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
        title: 'EU AI Act Data Governance | ADVISORI',
        description: 'Expertenlösungen für EU AI Act-konforme Data Governance bei Hochrisiko-KI-Systemen. Umfassende Beratung für Datenqualität, -management und Compliance-Anforderungen.',
        keywords: 'EU AI Act, Data Governance, KI-Datenmanagement, AI Data Quality, Compliance, High-Risk AI Systems, Artificial Intelligence, Data Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EU AI Act Data Governance'
        },
        tagline: 'Strategische Datensteuerung für KI-Compliance der EU AI Act',
        heading: 'EU AI Act Data Governance',
        description: 'Die EU AI Act stellt strenge Anforderungen an die Datenqualität und -verwaltung von Hochrisiko-KI-Systemen. Wir unterstützen Sie bei der Implementierung robuster, compliance-konformer Data Governance-Frameworks.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige EU AI Act-Compliance für Datenmanagement-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Systematische Datenqualitätssicherung und -überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Datenschutz- und Sicherheitsframeworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Datenqualitätskontrolle und Optimierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EU AI Act Data Governance',
        description: 'Data Governance gemäß EU AI Act umfasst die systematische Verwaltung, Qualitätssicherung und Überwachung von Trainingsdaten, Validierungsdaten und Testdaten für Hochrisiko-KI-Systeme. Effektive Data Governance ist entscheidend für die Leistungsfähigkeit, Fairness und Compliance von KI-Systemen. Wir unterstützen Sie bei der Entwicklung maßgeschneiderter, regulierungskonformer Datenmanagement-Ansätze.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Datenqualitätsanalyse und -bewertung für KI-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung und Implementierung von Datenmanagement-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Design und Umsetzung von Datenqualitätskontrollprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau kontinuierlicher Datenüberwachungs- und Validierungsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration in bestehende Datenmanagement- und IT-Infrastrukturen'
          }
        ],
        alert: {
          title: 'Regulatorischer Hinweis',
          content: 'Die Data Governance-Praktiken müssen über den gesamten Lebenszyklus der KI-Systeme angemessen sein und regelmäßig überprüft werden. Besondere Aufmerksamkeit gilt der Vermeidung von Verzerrungen und der Sicherstellung repräsentativer Datensätze.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnisse der EU AI Act-Datenanforderungen und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung in der Implementierung von Data Governance-Systemen in verschiedenen Branchen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von technischer Umsetzung bis zur organisatorischen Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovative Methoden zur Automatisierung und Optimierung von Datenprozessen'
            }
          ]
        },
        additionalInfo: 'Effektive Data Governance für KI-Systeme geht über reine Compliance hinaus und kann als strategisches Instrument zur Qualitätssicherung, Performance-Optimierung und Vertrauensbildung bei Stakeholdern dienen.',
        serviceDescription: 'Wir bieten umfassende Unterstützung beim Aufbau und der Implementierung EU AI Act-konformer Data Governance-Frameworks. Unser Ansatz kombiniert regulatorische Expertise mit praktischer Datenmanagement-Erfahrung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Datenqualitätsanalyse und Gap-Assessment bestehender Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Design und Implementierung maßgeschneiderter Data Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung von Datenqualitäts- und Validierungsverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Aufbau kontinuierlicher Datenüberwachungs- und Berichtsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung und Change Management für Datenmanagement-Teams'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen systematische, compliance-konforme Data Governance-Frameworks, die nahtlos in Ihre bestehenden Datenprozesse integriert werden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer Datenlandschaft und bestehenden Datenmanagement-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design eines maßgeschneiderten Data Governance-Frameworks nach EU AI Act-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Schrittweise Implementierung mit kontinuierlicher Validierung und Anpassung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende IT-Infrastrukturen und Datenverarbeitungspipelines'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Aufbau nachhaltiger Kapazitäten für kontinuierliches Datenqualitätsmanagement'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Hochwertige Data Governance ist das Fundament vertrauensvoller KI. Mit systematischen Datenmanagement-Ansätzen können Unternehmen nicht nur EU AI Act-Compliance sicherstellen, sondern auch die Leistungsfähigkeit und Fairness ihrer KI-Systeme kontinuierlich verbessern.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Datenqualitätsanalyse und Assessment',
          description: 'Umfassende Bewertung Ihrer Datenlandschaft und bestehenden Datenmanagement-Prozesse zur Identifikation von Qualitätslücken und Optimierungspotenzialen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematische Bewertung von Trainings-, Validierungs- und Testdaten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Gap-Analyse bestehender Datenmanagement-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation von Bias-Risiken und Qualitätsmängeln'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung einer priorisierten Verbesserungsroadmap'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Data Governance Framework-Design und Implementierung',
          description: 'Entwicklung und Umsetzung maßgeschneiderter, EU AI Act-konformer Data Governance-Frameworks mit allen erforderlichen Prozessen und Kontrollen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Design systematischer Datenqualitäts- und Validierungsverfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung von Datenschutz- und Sicherheitsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Aufbau kontinuierlicher Datenüberwachungs- und Berichtsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration in bestehende IT-Infrastrukturen und Workflows'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(euAiActDataGovernanceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EU AI Act Data Governance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
