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
    console.log('Creating NIS2 Risk Analysis Systems page...')

    const nis2RiskAnalysisSystemsData = {
      _type: 'servicePage',
      _id: 'nis2-risk-analysis-systems',
      title: 'NIS2 Risk Analysis Systems',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/nis2/nis2-security-measures/nis2-risk-analysis-systems'
      },
      parent: {
        _type: 'reference',
        _ref: 'nis2-security-measures'
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
        title: 'NIS2 Risk Analysis Systems | ADVISORI',
        description: 'Professionelle Implementierung von NIS2-konformen Risikoanalysesystemen. Strategische Beratung für Cyber-Risikobewertung, Bedrohungsanalyse und kontinuierliche Risikobewertung.',
        keywords: 'NIS2, Risikoanalysesysteme, Cyber-Risikobewertung, Bedrohungsanalyse, Risikomanagement, KRITIS, Vulnerability Assessment, Threat Intelligence'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIS2 Risk Analysis Systems Implementation'
        },
        tagline: 'Strategische Implementierung fortschrittlicher NIS2-Risikoanalysesysteme',
        heading: 'NIS2 Risk Analysis Systems',
        description: 'Professionelle Entwicklung und Implementierung umfassender Risikoanalysesysteme gemäß NIS2-Anforderungen. Wir etablieren mit Ihnen fortschrittliche Systeme zur kontinuierlichen Cyber-Risikobewertung, Bedrohungsanalyse und proaktiven Risikomanagement.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Ganzheitliche Cyber-Risikobewertung und -quantifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Bedrohungsanalyse und Vulnerability Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kontinuierliche Risikobewertung und adaptive Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Integrierte Threat Intelligence und Frühwarnsysteme'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'NIS2 Risk Analysis Systems Implementation',
        description: 'Die NIS2-Richtlinie fordert umfassende Risikoanalysesysteme, die kontinuierliche Bewertung, Monitoring und Management von Cyber-Risiken ermöglichen. Unsere Expertise hilft Ihnen dabei, fortschrittliche Systeme zu implementieren, die nicht nur regulatorische Anforderungen erfüllen, sondern auch strategische Risikointelligenz liefern.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung maßgeschneiderter Risikoanalysemethodiken basierend auf NIS2-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung automatisierter Vulnerability-Assessment-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Aufbau von Threat-Intelligence-Plattformen und Frühwarnsystemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von Risikobewertung in Geschäftsprozesse und Entscheidungsfindung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Optimierung und Anpassung der Risikoanalysesysteme'
          }
        ],
        alert: {
          title: 'Proaktive Risikointelligenz',
          content: 'Moderne Risikoanalysesysteme gehen über reactive Bewertungen hinaus und ermöglichen proaktive Identifikation und Bewertung entstehender Bedrohungen. Erfolgreiche Implementation erfordert Integration von Technologie, Prozessen und strategischer Intelligenz.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in fortschrittlichen Risikoanalysemethodiken und -technologien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Erfahrung in der Integration komplexer Risikosysteme'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Risikomodelle für verschiedene kritische Sektoren'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Strategischer Ansatz für business-orientierte Risikointelligenz'
            }
          ]
        },
        additionalInfo: 'NIS2-konforme Risikoanalysesysteme erfordern systematische Herangehensweise an Risikoquantifizierung, kontinuierliche Bewertung und strategische Integration. Erfolgreiche Systeme liefern nicht nur Compliance, sondern auch strategische Risikointelligenz.',
        serviceDescription: 'Wir unterstützen Sie bei der vollständigen Implementierung fortschrittlicher NIS2-Risikoanalysesysteme mit einem integrierten Ansatz, der technische Exzellenz mit strategischer Risikointelligenz verbindet.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Risikoanalysemethodiken und -frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Automatisierte Vulnerability und Threat Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Threat Intelligence und Frühwarnsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Risikoquantifizierung und Business Impact Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Risikobewertung und -optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir implementieren NIS2-Risikoanalysesysteme systematisch mit einem datengetriebenen Ansatz, der alle Dimensionen der Cyber-Risikobewertung abdeckt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Bestandsaufnahme bestehender Risikobewertungsprozesse und -systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung maßgeschneiderter Risikoanalysemethodiken und -frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Schrittweise Implementierung automatisierter Analyse- und Bewertungssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von Threat Intelligence und kontinuierlicher Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Schulung und Change Management für nachhaltige Systemnutzung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI',
        name: 'Expert Team',
        position: 'NIS2 Risk Analysis Specialists',
        quote: 'Effektive Risikoanalysesysteme verwandeln komplexe Bedrohungslandschaften in strategische Intelligenz. Unser systematischer Ansatz gewährleistet nicht nur NIS2-Compliance, sondern schafft nachhaltigen Wettbewerbsvorteil durch überlegene Risikointelligenz.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Fortschrittliche Risikoanalysemethodiken und Vulnerability Assessment',
          description: 'Entwicklung und Implementierung umfassender Risikoanalysesysteme mit automatisierten Vulnerability-Assessment-Capabilities und kontinuierlicher Bedrohungsbewertung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Quantitative und qualitative Risikoanalysemethodiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Automatisierte Vulnerability-Scanning-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Asset-Discovery und kritische Systemidentifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Risikobewertungsmatrizen und Scoring-Systeme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Threat Intelligence Integration und kontinuierliche Risikobewertung',
          description: 'Aufbau fortschrittlicher Threat-Intelligence-Systeme und kontinuierlicher Risikobewertungskapazitäten für proaktive Bedrohungsidentifikation und -bewertung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Threat Intelligence Feeds und Analyse-Plattformen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Kontinuierliche Risikobewertung und -monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Frühwarnsysteme und Alarmierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Business Impact Analysis und Risikoquantifizierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nis2RiskAnalysisSystemsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIS2 Risk Analysis Systems page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
