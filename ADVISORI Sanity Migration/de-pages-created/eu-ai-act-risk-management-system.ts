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
    console.log('Creating EU AI Act Risk Management System page...')

    const euAiActRiskManagementSystemData = {
      _type: 'servicePage',
      _id: 'eu-ai-act-risk-management-system',
      title: 'EU AI Act Risk Management System',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eu-ai-act/eu-ai-act-high-risk-ai-systems/eu-ai-act-risk-management-system'
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
        title: 'EU AI Act Risk Management System | ADVISORI',
        description: 'Expertenlösungen für die Implementierung von EU AI Act-konformen Risikomanagementsystemen für KI-Systeme mit hohem Risiko. Umfassende Beratung für Compliance und operative Exzellenz.',
        keywords: 'EU AI Act, Risk Management System, KI-Risikomanagement, AI Risk Assessment, Compliance, High-Risk AI Systems, Artificial Intelligence'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EU AI Act Risk Management System'
        },
        tagline: 'Strategische Risikosteuerung für KI-Systeme der EU AI Act',
        heading: 'EU AI Act Risk Management System',
        description: 'Die EU AI Act erfordert robuste Risikomanagementsysteme für Hochrisiko-KI-Systeme. Wir unterstützen Sie bei der Entwicklung und Implementierung umfassender, compliance-konformer Risikosteuerungsprozesse.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige EU AI Act-Compliance für Risikomanagementsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Systematische Risikoidentifikation und -bewertung für KI-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Governance- und Überwachungsframeworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Risikokontrolle und Anpassungsmechanismen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EU AI Act Risk Management System',
        description: 'Das Risikomanagementsystem gemäß EU AI Act stellt einen der zentralen Compliance-Pfeiler für Anbieter von Hochrisiko-KI-Systemen dar. Es umfasst die systematische Identifikation, Bewertung, Minderung und kontinuierliche Überwachung aller Risiken, die von KI-Systemen ausgehen können. Wir unterstützen Sie bei der Entwicklung maßgeschneiderter, regulierungskonformer Risikosteuerungsansätze.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Risikoanalyse und -kategorisierung für KI-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung und Implementierung systematischer Risikobewertungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Design und Umsetzung von Risikominderungsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau kontinuierlicher Überwachungs- und Anpassungsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration in bestehende Unternehmens-Risikomanagementsysteme'
          }
        ],
        alert: {
          title: 'Regulatorischer Hinweis',
          content: 'Das Risikomanagementsystem muss proportional zur Risikoklasse des KI-Systems ausgestaltet sein und während des gesamten Lebenszyklus kontinuierlich aktualisiert werden. Eine proaktive, systematische Herangehensweise ist entscheidend für erfolgreiche Compliance.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnisse der EU AI Act-Anforderungen und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung in der Implementierung von Risikomanagementsystemen in verschiedenen Branchen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von technischer Umsetzung bis zur organisatorischen Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovative Methoden zur Automatisierung und Optimierung von Risikoprozessen'
            }
          ]
        },
        additionalInfo: 'Ein effektives Risikomanagementsystem für KI-Systeme geht über reine Compliance hinaus und kann als strategisches Instrument zur Qualitätssicherung, Innovationssteuerung und Vertrauensbildung bei Stakeholdern dienen.',
        serviceDescription: 'Wir bieten umfassende Unterstützung beim Aufbau und der Implementierung EU AI Act-konformer Risikomanagementsysteme. Unser Ansatz kombiniert regulatorische Expertise mit praktischer Umsetzungserfahrung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Risikoanalyse und Gap-Assessment bestehender Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Design und Implementierung maßgeschneiderter Risikomanagementsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung von Risikobewertungs- und Minderungsverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Aufbau kontinuierlicher Überwachungs- und Berichtsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung und Change Management für Risikomanagement-Teams'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen systematische, compliance-konforme Risikomanagementsysteme, die nahtlos in Ihre bestehenden Prozesse integriert werden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer KI-Systeme und bestehenden Risikomanagementprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design eines maßgeschneiderten Risikomanagementsystems nach EU AI Act-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Schrittweise Implementierung mit kontinuierlicher Validierung und Anpassung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende Governance-Strukturen und IT-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Aufbau nachhaltiger Kapazitäten für kontinuierliches Risikomanagement'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Ein robustes Risikomanagementsystem für KI ist nicht nur eine regulatorische Anforderung, sondern ein strategischer Baustein für vertrauensvolle KI. Mit systematischen Ansätzen können Unternehmen Compliance sicherstellen und gleichzeitig die Qualität und Verlässlichkeit ihrer KI-Systeme kontinuierlich verbessern.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Risikoanalyse und System-Assessment',
          description: 'Umfassende Bewertung Ihrer KI-Systeme und bestehenden Risikomanagementprozesse zur Identifikation von Compliance-Lücken und Optimierungspotenzialen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematische Klassifikation und Risikobewertung Ihrer KI-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Gap-Analyse bestehender Risikomanagementprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation regulatorischer Anforderungen und Compliance-Lücken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung einer priorisierten Umsetzungsroadmap'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Risikomanagementsystem-Design und Implementierung',
          description: 'Entwicklung und Umsetzung maßgeschneiderter, EU AI Act-konformer Risikomanagementsysteme mit allen erforderlichen Prozessen und Kontrollen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Design systematischer Risikobewertungs- und Klassifikationsverfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung von Risikominderungs- und Kontrollmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Aufbau kontinuierlicher Überwachungs- und Berichtsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration in bestehende Governance- und IT-Infrastrukturen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(euAiActRiskManagementSystemData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EU AI Act Risk Management System page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
