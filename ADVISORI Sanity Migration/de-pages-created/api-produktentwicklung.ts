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
    console.log('Creating API Produktentwicklung page...')

    const apiProduktentwicklungData = {
      _type: 'servicePage',
      _id: 'api-produktentwicklung',
      title: 'API Produktentwicklung',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/data-analytics/datenprodukte/api-produktentwicklung'
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
        title: 'API Produktentwicklung | Enterprise Datenprodukte | ADVISORI',
        description: 'Strategische API Produktentwicklung für Enterprise Datenprodukte. EU AI Act konforme API-Architekturen, sichere API-Monetarisierung und skalierbare API-Ökosysteme von ADVISORI.',
        keywords: 'API Produktentwicklung, API Strategy, Enterprise APIs, API Governance, API Monetization, EU AI Act Compliance, API Architecture, Data Products'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'API Produktentwicklung Enterprise Solutions'
        },
        tagline: 'Strategische API-Entwicklung für nachhaltige Datenprodukte',
        heading: 'API Produktentwicklung',
        description: 'Unsere API Produktentwicklung transformiert Ihre Datenassets in strategische, marktfähige API-Produkte durch compliance-konforme Architekturen, sichere Monetarisierungsstrategien und skalierbare Ökosystem-Integration.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'EU AI Act konforme API-Architekturen mit integriertem Compliance-Management'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Sichere API-Monetarisierung bei vollständigem Schutz der Unternehmens-IP'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Enterprise API Governance für maximale Sicherheit und Skalierbarkeit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'API-First Datenprodukte für nachhaltige Wettbewerbsvorteile'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'API Produktentwicklung',
        description: 'API Produktentwicklung ist der Schlüssel zur strategischen Transformation von Datenassets in marktfähige, skalierbare Geschäftsprodukte. ADVISORI unterstützt Sie dabei, APIs nicht nur als technische Schnittstellen zu verstehen, sondern als strategische Produkte zu entwickeln, die messbaren Geschäftswert generieren – compliance-konform und sicherheitsorientiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische API-Produktstrategie und Marktpositionierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'EU AI Act konforme API-Governance und Compliance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Sichere API-Monetarisierung mit IP-Schutz und Datenschutz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Developer Experience Optimierung und API-Ökosystem-Aufbau'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Skalierbare API-Architekturen für Enterprise-Anforderungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche API Produktentwicklung erfordert mehr als nur technische Implementierung – sie benötigt eine ganzheitliche Produktstrategie, die Developer Experience, Geschäftswert, Compliance und Skalierbarkeit in Einklang bringt, während gleichzeitig regulatorische Anforderungen wie der EU AI Act berücksichtigt werden.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Expertise in EU AI Act Compliance und API Governance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Ganzheitlicher Ansatz von API-Strategie bis Produktimplementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Fokus auf Sicherheit und Schutz von Unternehmens-IP'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Bewährte Methoden für nachhaltige API-Monetarisierung'
            }
          ]
        },
        additionalInfo: 'Unternehmen, die API Produktentwicklung strategisch implementieren, erzielen durchschnittlich eine signifikante Steigerung ihrer Datennutzung und können gleichzeitig neue Umsatzquellen durch API-Ökosysteme erschließen. Investieren Sie in die Zukunft Ihrer API-Produkte!',
        serviceDescription: 'Unsere API Produktentwicklung umfasst die gesamte Wertschöpfungskette von der strategischen API-Planung über die technische Implementierung bis hin zur kontinuierlichen Optimierung Ihrer API-Produkte.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'API-Produktstrategie und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'API Governance und Compliance-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Sichere API-Monetarisierung und Produktentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Developer Experience und API-Ökosystem-Aufbau'
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
        description: 'Wir verfolgen einen strukturierten, produktorientierten Ansatz, der strategische Planung mit agiler Umsetzung verbindet und dabei stets Compliance, Sicherheit und Developer Experience im Fokus behält.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische API-Bewertung und Marktpotenzialanalyse Ihrer Datenassets'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten API-Produktstrategie und Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Pilotimplementierung mit EU AI Act konformen Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Skalierung und Integration in die bestehende API-Landschaft'
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
        quote: 'API Produktentwicklung ist der Schlüssel zur nachhaltigen Digitalisierung von Datenassets. Unsere Kunden profitieren von einer durchdachten API-First Strategie, die Developer Experience mit regulatorischer Compliance verbindet und dabei den Geschäftswert maximiert. So schaffen wir messbare Ergebnisse bei gleichzeitigem Schutz der Unternehmens-IP und vollständiger EU AI Act Konformität.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'API-Produktstrategie & Roadmap-Entwicklung',
          description: 'Entwicklung einer umfassenden Strategie für die Transformation Ihrer Daten in strategische API-Produkte.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strategische Bewertung von API-Potenzialen und Marktchancen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung einer phasenorientierten API-Produkt-Roadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'ROI-Bewertung und Business Case Entwicklung für API-Produkte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Technologie-Auswahl und API-Architektur-Design'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'API Governance & Compliance Management',
          description: 'Implementierung robuster API Governance Frameworks für maximale Sicherheit und regulatorische Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'EU AI Act konforme API Governance Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'API-Sicherheitsstandards und Zugriffskontrollsysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Datenschutz und Privacy-by-Design für APIs'
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
          title: 'Sichere API-Monetarisierung',
          description: 'Entwicklung und Implementierung sicherer Strategien zur Monetarisierung Ihrer API-Produkte bei vollständigem IP-Schutz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'API-Produktentwicklung und Marktpositionierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Sichere API-Freigabe und Authentifizierungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Pricing-Modelle und API-Lizenzierungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'IP-Schutz und API-Sicherheitsmaßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Developer Experience & API-Ökosystem',
          description: 'Aufbau erstklassiger Developer Experience und nachhaltiger API-Ökosysteme für maximale Adoption.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'API-Design und Developer-freundliche Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'API-Portale und Self-Service Developer Tools'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'SDK-Entwicklung und Code-Beispiele'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Community-Aufbau und Partner-Ökosystem-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'API-Architektur & Skalierung',
          description: 'Implementierung hochperformanter, skalierbarer API-Architekturen für Enterprise-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Cloud-native API-Architekturen und Microservices'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'API Gateway und Traffic Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Skalierbare Infrastruktur und Performance-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'API-Versionierung und Lifecycle Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'API Analytics & Performance Monitoring',
          description: 'Kontinuierliche Überwachung und Optimierung Ihrer API-Produkte für maximale Geschäftswirkung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'API-KPI-Definition und Performance-Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Nutzungsanalyse und Developer Journey Tracking'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Kontinuierliche API-Verbesserung und Feature-Entwicklung'
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
    transaction.createOrReplace(apiProduktentwicklungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ API Produktentwicklung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
