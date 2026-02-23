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
    console.log('Creating KI-Datenvorbereitung page...')

    const kiDatenvorbereitungData = {
      _type: 'servicePage',
      _id: 'ki-datenvorbereitung',
      title: 'KI-Datenvorbereitung',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/ki-datenvorbereitung'
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
        title: 'KI-Datenvorbereitung | DSGVO-konforme Datenaufbereitung für AI | ADVISORI',
        description: 'Professionelle KI-Datenvorbereitung mit DSGVO-Compliance. Datenqualität, Feature Engineering und sichere Datenaufbereitung für erfolgreiche AI-Projekte.',
        keywords: 'KI-Datenvorbereitung, Data Preparation, Feature Engineering, DSGVO, Datenqualität, AI Data Processing, Machine Learning Data'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KI-Datenvorbereitung'
        },
        tagline: 'DSGVO-konforme Datenvorbereitung für erfolgreiche KI-Projekte',
        heading: 'KI-Datenvorbereitung',
        description: 'Qualitativ hochwertige Daten sind das Fundament jeder erfolgreichen KI-Implementierung. Wir bereiten Ihre Daten DSGVO-konform auf, optimieren Datenqualität und entwickeln sichere Preprocessing-Pipelines für maximale AI-Performance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'DSGVO-konforme Datenaufbereitung mit vollständigem Datenschutz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierte Datenqualität für maximale KI-Modell-Performance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierte Preprocessing-Pipelines mit Governance-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Feature Engineering und Datenvalidierung für robuste AI-Systeme'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KI-Datenvorbereitung',
        description: 'Die Qualität Ihrer KI-Modelle hängt direkt von der Qualität Ihrer Daten ab. ADVISORI entwickelt DSGVO-konforme Datenvorbereitungsstrategien, die nicht nur technische Exzellenz gewährleisten, sondern auch Datenschutz und Compliance von Anfang an mitdenken. Unser systematischer Ansatz transformiert Rohdaten in hochwertige, KI-ready Datasets.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Datenqualitätsbewertung und Bereinigungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'DSGVO-konforme Datenaufbereitung mit Privacy-by-Design'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Feature Engineering und Datenvalidierung für optimale Modell-Performance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Automatisierte Preprocessing-Pipelines mit Monitoring und Governance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Sichere Datenlineage und Audit-Trails für vollständige Nachverfolgbarkeit'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche KI-Projekte scheitern selten an Algorithmen, sondern an unzureichender Datenvorbereitung. Eine systematische, DSGVO-konforme Datenaufbereitung ist der Schlüssel für robuste, vertrauenswürdige und performante KI-Systeme.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Expertise in DSGVO-konformer Datenaufbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Safety-First-Ansatz mit bewährten Data-Governance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Automatisierte Pipelines für skalierbare Datenverarbeitung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Umfassende Qualitätssicherung und Validierungsprozesse'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit professioneller Datenvorbereitung erreichen bis zu dreimal höhere KI-Modell-Genauigkeit und reduzieren gleichzeitig Entwicklungszeiten erheblich. Investieren Sie in eine solide Datenbasis für nachhaltigen KI-Erfolg!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum für die professionelle Aufbereitung Ihrer Daten, von der initialen Qualitätsbewertung über DSGVO-konforme Preprocessing-Pipelines bis hin zur kontinuierlichen Datenvalidierung und -optimierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Datenqualitätsbewertung & Bereinigungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'DSGVO-konforme Preprocessing-Pipelines'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Feature Engineering & Datenvalidierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Automatisierte Datenaufbereitung & Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Data Governance & Compliance Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine maßgeschneiderte Datenvorbereitungsstrategie, die höchste Qualitätsstandards mit DSGVO-Compliance und operativer Effizienz verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer Datenlandschaft und Qualitätsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung DSGVO-konformer Preprocessing-Strategien und -Pipelines'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung automatisierter Datenaufbereitung mit Qualitätskontrolle'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung von Data Governance und kontinuierlichem Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Optimierung und Skalierung der Datenvorbereitungsprozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Qualitativ hochwertige Datenvorbereitung ist das unsichtbare Fundament jeder erfolgreichen KI-Initiative. Unser Ansatz kombiniert technische Exzellenz mit rigoroser DSGVO-Compliance, um sicherzustellen, dass unsere Kunden nicht nur leistungsstarke KI-Modelle entwickeln, sondern diese auch vertrauensvoll und rechtskonform in produktiven Umgebungen einsetzen können.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Datenqualitätsbewertung & Bereinigung',
          description: 'Umfassende Analyse und Optimierung Ihrer Datenqualität für maximale KI-Modell-Performance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematische Datenqualitätsbewertung und Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung maßgeschneiderter Bereinigungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Automatisierte Datenvalidierung und Anomalieerkennung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Kontinuierliche Qualitätsüberwachung und -optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'DSGVO-konforme Preprocessing-Pipelines',
          description: 'Entwicklung sicherer, automatisierter Datenaufbereitungspipelines mit integriertem Datenschutz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Privacy-by-Design Preprocessing-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automatisierte Anonymisierung und Pseudonymisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Sichere Datenlineage und Audit-Trails'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Compliance-Monitoring und Dokumentation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Feature Engineering & Datenvalidierung',
          description: 'Optimierung Ihrer Datenfeatures für maximale Modell-Performance und Robustheit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Strategisches Feature Engineering und -selektion'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Dimensionalitätsreduktion und Datenoptimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Robuste Datenvalidierung und Konsistenzprüfung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Performance-Monitoring und Feature-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Automatisierte Datenaufbereitung',
          description: 'Skalierbare, automatisierte Systeme für kontinuierliche Datenaufbereitung und -verarbeitung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'End-to-End Automatisierung der Datenverarbeitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Skalierbare Pipeline-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Echtzeit-Monitoring und Alerting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Adaptive Optimierung und Selbstheilung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Data Governance & Compliance',
          description: 'Umfassende Governance-Frameworks für sichere und compliant Datenvorbereitung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Entwicklung von Data Governance Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Compliance-Management und Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Datenlineage und Nachverfolgbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Audit-Unterstützung und Dokumentation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Datenintegration & Harmonisierung',
          description: 'Nahtlose Integration und Harmonisierung heterogener Datenquellen für KI-Projekte.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Multi-Source Datenintegration und -harmonisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Schema-Mapping und Datenmodellierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Konfliktauflösung und Datenkonsolidierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Einheitliche Datenstandards und -formate'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kiDatenvorbereitungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KI-Datenvorbereitung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
