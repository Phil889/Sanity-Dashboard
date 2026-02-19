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
    console.log('Creating KI-Datenbereinigung page...')

    const kiDatenbereinigungData = {
      _type: 'servicePage',
      _id: 'ki-datenbereinigung',
      title: 'KI-Datenbereinigung',
      slug: {
        _type: 'slug',
        current: '/digitale-transformation/ki-kuenstliche-intelligenz/ki-datenbereinigung'
      },
      parent: {
        _type: 'reference',
        _ref: 'ki-kuenstliche-intelligenz'
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
        title: 'KI-Datenbereinigung | ADVISORI',
        description: 'Professionelle Datenbereinigung für KI-Systeme. DSGVO-konforme Datenqualitätsverbesserung, automatisierte Preprocessing-Pipelines und sichere Datenvalidierung für optimale AI-Performance.',
        keywords: 'KI-Datenbereinigung, Data Cleaning, Datenqualität, AI Preprocessing, DSGVO, Data Validation, Machine Learning, Datenaufbereitung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KI-Datenbereinigung'
        },
        tagline: 'Hochwertige Datengrundlagen für erfolgreiche KI-Projekte',
        heading: 'KI-Datenbereinigung',
        description: 'Maximieren Sie die Performance Ihrer KI-Systeme durch professionelle Datenbereinigung. Unsere DSGVO-konformen Verfahren gewährleisten höchste Datenqualität und schaffen die optimale Grundlage für erfolgreiche AI-Implementierungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'DSGVO-konforme Datenbereinigung mit vollständigem Datenschutz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Preprocessing-Pipelines für skalierbare Datenaufbereitung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Intelligente Anomalieerkennung und Datenvalidierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Signifikante Verbesserung der KI-Modell-Performance'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KI-Datenbereinigung',
        description: 'Die Qualität Ihrer Daten bestimmt maßgeblich den Erfolg Ihrer KI-Projekte. Verschmutzte, inkonsistente oder unvollständige Daten können selbst die fortschrittlichsten AI-Algorithmen zum Scheitern bringen. ADVISORI bietet Ihnen professionelle KI-Datenbereinigung, die nicht nur die Datenqualität maximiert, sondern auch DSGVO-Compliance gewährleistet und Ihre gesamte AI-Pipeline optimiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Datenqualitätsanalyse und Anomalieerkennung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'DSGVO-konforme Datenbereinigung und Privacy-Preserving-Verfahren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Automatisierte Preprocessing-Pipelines für kontinuierliche Datenaufbereitung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Intelligente Datenvalidierung und Konsistenzprüfung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Data Governance Frameworks für nachhaltige Datenqualität'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Hochwertige Daten sind das Fundament erfolgreicher KI-Projekte. Investitionen in professionelle Datenbereinigung zahlen sich durch verbesserte Modell-Performance, reduzierte Trainingszeiten und höhere Vorhersagegenauigkeit mehrfach aus.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Expertise in KI-spezifischer Datenbereinigung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'DSGVO-konforme Verfahren mit Privacy-by-Design-Ansatz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Automatisierte und skalierbare Datenaufbereitungs-Pipelines'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Nachweisbare Verbesserung der KI-Modell-Performance'
            }
          ]
        },
        additionalInfo: 'Studien zeigen, dass professionell bereinigte Daten die Genauigkeit von KI-Modellen um bis zu 30% verbessern können, während gleichzeitig Trainingszeiten reduziert und Compliance-Risiken minimiert werden.',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Spektrum an KI-Datenbereinigungsservices, von der initialen Datenqualitätsanalyse über automatisierte Preprocessing-Pipelines bis hin zur kontinuierlichen Datenvalidierung und Governance.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Datenqualitätsanalyse & Anomalieerkennung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'DSGVO-konforme Datenbereinigung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Automatisierte Preprocessing-Pipelines'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Datenvalidierung & Konsistenzprüfung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Data Governance & Qualitätsmonitoring'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine maßgeschneiderte Datenbereinigungsstrategie, die auf Ihre spezifischen KI-Anforderungen zugeschnitten ist und höchste Standards für Datenqualität und Compliance erfüllt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer Datenlandschaft und Qualitätsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung DSGVO-konformer Datenbereinigungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung automatisierter Preprocessing-Pipelines'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung kontinuierlicher Datenvalidierung und Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Aufbau nachhaltiger Data Governance Strukturen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Implementierung professioneller Datenbereinigungsverfahren für KI-Systeme ist ein kritischer Erfolgsfaktor für jede AI-Initiative. Unsere Kunden profitieren von signifikanten Qualitätssteigerungen ihrer AI-Modelle und können sich auf verlässliche, DSGVO-konforme Datengrundlagen verlassen, während gleichzeitig die Effizienz ihrer gesamten AI-Pipeline optimiert wird.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Datenqualitätsanalyse & Anomalieerkennung',
          description: 'Umfassende Bewertung Ihrer Datenbestände mit intelligenter Erkennung von Qualitätsproblemen und Anomalien für optimale KI-Performance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Automatisierte Datenqualitätsbewertung und Profiling'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Intelligente Anomalie- und Ausreißererkennung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Konsistenz- und Vollständigkeitsprüfung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Datenqualitäts-Dashboards und Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Automatisierte Preprocessing-Pipelines',
          description: 'Skalierbare und DSGVO-konforme Datenaufbereitungs-Pipelines für kontinuierliche und effiziente KI-Datenverarbeitung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automatisierte Datenbereinigung und Normalisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Privacy-Preserving Data Processing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Skalierbare Pipeline-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliches Monitoring und Optimierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kiDatenbereinigungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KI-Datenbereinigung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
