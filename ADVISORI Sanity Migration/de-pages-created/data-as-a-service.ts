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
    console.log('Creating Data-as-a-Service page...')

    const dataAsAServiceData = {
      _type: 'servicePage',
      _id: 'data-as-a-service',
      title: 'Data-as-a-Service (DaaS)',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/data-analytics/datenprodukte/data-as-a-service'
      },
      parent: {
        _type: 'reference',
        _ref: 'datenprodukte'
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
        title: 'Data-as-a-Service (DaaS) | Enterprise Datenprodukte | ADVISORI',
        description: 'Transformieren Sie Ihre Daten in strategische Geschäftsassets mit ADVISORI Data-as-a-Service. EU AI Act konforme Datenstrategie, sichere Datenmonetarisierung und Enterprise Data Governance.',
        keywords: 'Data-as-a-Service, DaaS, Datenprodukte, Data Governance, Datenmonetarisierung, EU AI Act Compliance, Enterprise Data Strategy, Data Analytics'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Data-as-a-Service Enterprise Solutions'
        },
        tagline: 'Strategische Datentransformation für nachhaltigen Geschäftserfolg',
        heading: 'Data-as-a-Service (DaaS)',
        description: 'Unsere Data-as-a-Service Lösungen transformieren Ihre Unternehmensdaten in strategische Geschäftsassets durch sichere Datenproduktentwicklung, compliance-konforme Governance und intelligente Monetarisierungsstrategien.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'EU AI Act konforme Datenstrategie mit integriertem Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Sichere Datenmonetarisierung bei vollständigem Schutz der Unternehmens-IP'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Enterprise Data Governance für maximale Datenqualität und Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Skalierbare Datenprodukte für nachhaltige Wettbewerbsvorteile'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Data-as-a-Service (DaaS)',
        description: 'Data-as-a-Service revolutioniert die Art, wie Unternehmen ihre Datenassets nutzen und monetarisieren. ADVISORI unterstützt Sie dabei, Ihre Daten in strategische Geschäftsprodukte zu transformieren, die sowohl internen als auch externen Stakeholdern messbaren Wert liefern – compliance-konform und sicherheitsorientiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Datenproduktentwicklung und Marktpositionierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'EU AI Act konforme Data Governance und Compliance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Sichere Datenmonetarisierung mit IP-Schutz und Datenschutz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Real-time Data Delivery und intelligente Analytics-Plattformen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Skalierbare Datenarchitekturen für Enterprise-Anforderungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche Data-as-a-Service Implementierung erfordert mehr als nur Technologie – sie benötigt eine ganzheitliche Strategie, die Datenqualität, Governance, Compliance und Geschäftswert in Einklang bringt, während gleichzeitig regulatorische Anforderungen wie der EU AI Act berücksichtigt werden.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Expertise in EU AI Act Compliance und Data Governance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Ganzheitlicher Ansatz von Datenstrategie bis Produktimplementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Fokus auf Sicherheit und Schutz von Unternehmens-IP'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Bewährte Methoden für nachhaltige Datenmonetarisierung'
            }
          ]
        },
        additionalInfo: 'Unternehmen, die Data-as-a-Service strategisch implementieren, erzielen durchschnittlich eine signifikante Steigerung ihrer Datennutzung und können gleichzeitig neue Umsatzquellen erschließen. Investieren Sie in die Zukunft Ihrer Datenassets!',
        serviceDescription: 'Unsere Data-as-a-Service Lösungen umfassen die gesamte Wertschöpfungskette von der strategischen Datenplanung über die technische Implementierung bis hin zur kontinuierlichen Optimierung Ihrer Datenprodukte.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Datenstrategie und Datenprodukt-Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Data Governance und Compliance-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Sichere Datenmonetarisierung und Produktentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Real-time Data Delivery und Analytics-Plattformen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance Monitoring und kontinuierliche Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten, datengetriebenen Ansatz, der strategische Planung mit agiler Umsetzung verbindet und dabei stets Compliance, Sicherheit und Geschäftswert im Fokus behält.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Datenbewertung und Potenzialanalyse Ihrer Datenassets'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten Datenprodukt-Strategie und Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Pilotimplementierung mit EU AI Act konformen Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Skalierung und Integration in die bestehende Datenlandschaft'
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
        quote: 'Data-as-a-Service ist der Schlüssel zur nachhaltigen Datentransformation. Unsere Kunden profitieren von einer durchdachten Strategie, die Datenqualität mit regulatorischer Compliance verbindet und dabei den Geschäftswert maximiert. So schaffen wir messbare Ergebnisse bei gleichzeitigem Schutz der Unternehmens-IP und vollständiger EU AI Act Konformität.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Datenstrategie & Datenprodukt-Roadmap',
          description: 'Entwicklung einer umfassenden Strategie für die Transformation Ihrer Daten in strategische Geschäftsprodukte.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strategische Bewertung von Datenassets und Monetarisierungspotenzialen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung einer phasenorientierten Datenprodukt-Roadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'ROI-Bewertung und Business Case Entwicklung für Datenprodukte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Technologie-Auswahl und Datenarchitektur-Design'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Data Governance & Compliance Management',
          description: 'Implementierung robuster Data Governance Frameworks für maximale Datenqualität und regulatorische Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'EU AI Act konforme Data Governance Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Datenqualitätsmanagement und Master Data Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Datenschutz und Privacy-by-Design Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Compliance-Monitoring und Audit-Vorbereitung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Sichere Datenmonetarisierung',
          description: 'Entwicklung und Implementierung sicherer Strategien zur Monetarisierung Ihrer Datenassets bei vollständigem IP-Schutz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Datenproduktentwicklung und Marktpositionierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Sichere Datenfreigabe und Anonymisierungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Pricing-Modelle und Lizenzierungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'IP-Schutz und Datensicherheitsmaßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Real-time Data Delivery Plattformen',
          description: 'Aufbau hochperformanter Plattformen für die Bereitstellung von Echtzeitdaten und Analytics-Services.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Cloud-native Datenplattformen und APIs'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Real-time Streaming und Event-driven Architectures'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Self-Service Analytics und Data Visualization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Skalierbare Infrastruktur und Performance-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Datenqualität & Sicherheitsmanagement',
          description: 'Implementierung umfassender Systeme zur Sicherstellung höchster Datenqualität und Sicherheitsstandards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Automatisierte Datenqualitätsprüfung und Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Data Lineage und Impact Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Verschlüsselung und Zugriffskontrollsysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Incident Response und Disaster Recovery'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Performance Analytics & Optimierung',
          description: 'Kontinuierliche Überwachung und Optimierung Ihrer Datenprodukte für maximale Geschäftswirkung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'KPI-Definition und Performance-Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Nutzungsanalyse und Customer Journey Tracking'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Kontinuierliche Produktverbesserung und Feature-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Skalierungsstrategien und Roadmap-Updates'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(dataAsAServiceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Data-as-a-Service page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
