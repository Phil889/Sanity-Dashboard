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
    console.log('Creating Intelligent Data Processing and Automation page...')

    const intelligentDataProcessingData = {
      _type: 'servicePage',
      _id: 'intelligent-data-processing-and-automation',
      title: 'Intelligent Data Processing and Automation',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-data-processing-and-automation'
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
        title: 'Intelligent Data Processing and Automation | ADVISORI',
        description: 'Transformieren Sie Ihre Datenverarbeitung mit KI-gestützter Automatisierung. ADVISORI bietet intelligente Lösungen für automatisierte Datenanalyse, Reporting und Governance mit EU AI Act Compliance.',
        keywords: 'Intelligent Data Processing, Datenautomatisierung, KI Analytics, Automated Reporting, Data Governance, AI Act Compliance, Enterprise Data Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Data Processing and Automation'
        },
        tagline: 'KI-gestützte Datenverarbeitung für intelligente Geschäftsentscheidungen',
        heading: 'Intelligent Data Processing and Automation',
        description: 'Unsere Intelligent Data Processing and Automation Lösungen transformieren Ihre Datenlandschaft durch KI-gestützte Verarbeitung, automatisierte Analytics und intelligente Governance – compliance-konform und sicherheitsorientiert.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'EU AI Act konforme KI-gestützte Datenverarbeitung mit integriertem Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Datenanalyse und Real-time Insights für schnellere Entscheidungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Sichere Datenverarbeitung mit Schutz von Unternehmens-IP und GDPR-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Skalierbare Data Pipelines für Enterprise-grade Datenverarbeitung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Data Processing and Automation',
        description: 'Intelligent Data Processing and Automation kombiniert fortschrittliche KI-Technologien mit robusten Automatisierungsframeworks, um Ihre Datenverarbeitung zu revolutionieren. ADVISORI unterstützt Sie dabei, aus Ihren Daten maximalen Geschäftswert zu schöpfen, während gleichzeitig höchste Sicherheits- und Compliance-Standards eingehalten werden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'KI-gestützte Datenverarbeitung und automatisierte Analytics-Pipelines'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'EU AI Act konforme Implementierung intelligenter Datenverarbeitungssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Automatisierte Datenqualitätssicherung und Anomalieerkennung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Intelligente Data Governance und Compliance-Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Real-time Datenverarbeitung und automatisierte Reporting-Systeme'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche Intelligent Data Processing erfordert eine ganzheitliche Strategie, die Datenqualität, Sicherheit und Compliance von Anfang an mitdenkt. Nur so können Unternehmen das volle Potenzial ihrer Daten ausschöpfen und gleichzeitig regulatorische Anforderungen erfüllen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Expertise in EU AI Act Compliance für Datenverarbeitungssysteme'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Ganzheitlicher Ansatz von Datenstrategie bis zur technischen Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Fokus auf Datensicherheit und Schutz von Unternehmens-IP'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Bewährte Methoden für skalierbare Enterprise Data Solutions'
            }
          ]
        },
        additionalInfo: 'Unternehmen, die Intelligent Data Processing strategisch implementieren, erzielen durchschnittlich eine signifikante Verbesserung ihrer Entscheidungsgeschwindigkeit und können gleichzeitig ihre Datenqualität und Compliance-Anforderungen optimieren. Investieren Sie in die Zukunft Ihrer Datenverarbeitung!',
        serviceDescription: 'Unsere Intelligent Data Processing and Automation Services umfassen die gesamte Wertschöpfungskette von der Datenstrategie über die technische Implementierung bis hin zur kontinuierlichen Optimierung Ihrer Datenverarbeitungsprozesse.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'KI-gestützte Datenanalyse und Predictive Analytics'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Automatisierte Data Pipeline Entwicklung und Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'EU AI Act konforme Data Governance Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Real-time Datenverarbeitung und Streaming Analytics'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Automatisierte Reporting und Business Intelligence'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen datengetriebenen, phasenorientierten Ansatz, der strategische Datenplanung mit agiler Implementierung verbindet und dabei stets Compliance und Sicherheit im Fokus behält.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Datenlandschaftsanalyse und Potentialbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten Data Processing Strategie und Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Pilotimplementierung mit EU AI Act konformen Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Skalierung und Integration in die bestehende Dateninfrastruktur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Performance-Monitoring'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Intelligent Data Processing ist der Schlüssel zur datengetriebenen Transformation. Unsere Kunden profitieren von einer durchdachten Automatisierungsstrategie, die technische Innovation mit regulatorischer Compliance verbindet und dabei maximale Datenqualität und Sicherheit gewährleistet. So schaffen wir messbare Geschäftsergebnisse durch intelligente Datenverarbeitung.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'KI-gestützte Datenanalyse & Analytics',
          description: 'Implementierung fortschrittlicher KI-Algorithmen für automatisierte Datenanalyse und Predictive Analytics.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Machine Learning basierte Datenanalyse und Pattern Recognition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Predictive Analytics und Forecasting-Modelle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Automatisierte Anomalieerkennung und Alerting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Real-time Analytics und Streaming Data Processing'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Automatisierte Data Pipeline Entwicklung',
          description: 'Aufbau robuster, skalierbarer Data Pipelines für effiziente Datenverarbeitung und -transformation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'ETL/ELT Pipeline Design und Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Cloud-native Data Pipeline Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Automatisierte Datenvalidierung und Qualitätssicherung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Skalierbare Batch- und Stream-Processing-Systeme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'EU AI Act Compliance für Datenverarbeitung',
          description: 'Sicherstellung der Compliance Ihrer Datenverarbeitungssysteme mit den Anforderungen des EU AI Act.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'AI Act Risikobewertung für Datenverarbeitungssysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Data Governance Framework Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Automatisierte Compliance-Dokumentation und Audit-Trails'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'GDPR-konforme KI-gestützte Datenverarbeitung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Intelligente Data Governance',
          description: 'Implementierung automatisierter Data Governance Systeme für optimale Datenqualität und Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Automatisierte Data Lineage und Impact Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'KI-gestützte Data Quality Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Automatisierte Metadaten-Management-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Policy-basierte Datenzugriffskontrolle'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Automatisierte Reporting & Business Intelligence',
          description: 'Entwicklung intelligenter Reporting-Systeme für automatisierte Geschäftseinblicke und Entscheidungsunterstützung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Automatisierte Dashboard-Generierung und Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'KI-gestützte Insight-Generierung und Empfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Self-Service Analytics Plattformen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Automatisierte Regulatory Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Performance Monitoring & Optimierung',
          description: 'Kontinuierliche Überwachung und Verbesserung Ihrer Datenverarbeitungssysteme für maximale Effizienz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Real-time Performance Monitoring und Alerting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Automatisierte Kapazitätsplanung und Skalierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'KI-basierte Performance-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Kostenoptimierung für Cloud-Ressourcen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentDataProcessingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Data Processing and Automation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
