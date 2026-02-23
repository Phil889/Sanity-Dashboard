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
    console.log('Creating SAP Intelligent Robotic Process Automation page...')

    const sapIntelligentRpaData = {
      _type: 'servicePage',
      _id: 'sap-intelligent-robotic-process-automation',
      title: 'SAP Intelligent Robotic Process Automation',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/sap-intelligent-robotic-process-automation'
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
        title: 'SAP Intelligent Robotic Process Automation | ADVISORI',
        description: 'Transformieren Sie Ihre SAP-Landschaft mit intelligenter RPA. ADVISORI bietet EU AI Act konforme SAP-Automatisierung für maximale Effizienz und Compliance.',
        keywords: 'SAP RPA, SAP Automatisierung, Intelligent RPA, SAP Process Automation, EU AI Act, SAP Integration, Enterprise Automation, SAP Consulting'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'SAP Intelligent Robotic Process Automation'
        },
        tagline: 'SAP-Ökosystem intelligent automatisieren – compliance-konform und zukunftssicher',
        heading: 'SAP Intelligent Robotic Process Automation',
        description: 'Revolutionieren Sie Ihre SAP-Prozesse durch intelligente Robotik-Automatisierung. ADVISORI kombiniert tiefe SAP-Expertise mit modernster RPA-Technologie für nahtlose, EU AI Act konforme Automatisierungslösungen in Ihrer SAP-Landschaft.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Native SAP-Integration mit intelligenter RPA für maximale Systemkompatibilität'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'EU AI Act konforme Automatisierung mit integriertem SAP-Governance-Framework'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Schutz kritischer SAP-Daten durch sichere, isolierte Automatisierungsarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Messbare Effizienzsteigerung in SAP-Kernprozessen durch intelligente Robotik'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'SAP Intelligent Robotic Process Automation',
        description: 'SAP Intelligent RPA verbindet die Robustheit des SAP-Ökosystems mit der Flexibilität moderner Automatisierungstechnologien. ADVISORI entwickelt maßgeschneiderte RPA-Lösungen, die nahtlos in Ihre bestehende SAP-Landschaft integrieren und dabei höchste Sicherheits- und Compliance-Standards erfüllen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Native SAP-Integration für alle Module und Transaktionen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Intelligente Prozessautomatisierung mit KI-gestützter Entscheidungsfindung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'EU AI Act konforme Implementierung mit SAP-spezifischen Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Skalierbare Automatisierung von Finanz-, HR- und Logistikprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Optimierung durch SAP-Analytics und Performance-Monitoring'
          }
        ],
        alert: {
          title: 'SAP-Expertentipp',
          content: 'Erfolgreiche SAP RPA erfordert tiefes Verständnis der SAP-Architektur und -Prozesse. Unsere Lösung berücksichtigt SAP-spezifische Besonderheiten wie Customizing, Berechtigungskonzepte und Systemlandschaften für maximale Stabilität und Performance.'
        },
        whyUs: {
          title: 'Unsere SAP-RPA-Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Zertifizierte SAP-Expertise kombiniert mit RPA-Spezialisierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act konforme SAP-Automatisierung als Kernkompetenz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methoden für sichere SAP-Systemintegration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von SAP-Analyse bis RPA-Betrieb'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit SAP Intelligent RPA erzielen signifikante Effizienzsteigerungen in kritischen Geschäftsprozessen und können gleichzeitig ihre SAP-Investitionen optimal nutzen. Transformieren Sie Ihre SAP-Landschaft intelligent!',
        serviceDescription: 'Unsere SAP Intelligent RPA Services umfassen die komplette Wertschöpfungskette von der SAP-Prozessanalyse über die RPA-Entwicklung bis hin zum produktiven Betrieb und kontinuierlicher Optimierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'SAP-Prozessanalyse und Automatisierungspotential-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Intelligente RPA-Entwicklung für SAP-Module'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'EU AI Act konforme SAP-Governance-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Change Management für SAP-Anwender'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Produktiver Betrieb und kontinuierliche Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser SAP-RPA-Vorgehen',
        description: 'Wir verfolgen einen strukturierten, SAP-spezifischen Ansatz, der bewährte RPA-Methoden mit tiefem SAP-Know-how verbindet und dabei stets Compliance und Systemstabilität im Fokus behält.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende SAP-Landschaftsanalyse und Prozess-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer SAP-RPA-Strategie mit Compliance-Framework'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Pilotimplementierung mit SAP-nativer Integration und Testing'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Produktive Einführung mit SAP-Systemmonitoring und -überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Skalierung der SAP-RPA-Lösung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'SAP Intelligent RPA ist mehr als nur Automatisierung – es ist die strategische Weiterentwicklung Ihrer SAP-Investition. Unsere Kunden profitieren von einer durchdachten Integration, die SAP-Stabilität mit innovativer Automatisierung verbindet und dabei regulatorische Anforderungen nahtlos erfüllt. So schaffen wir nachhaltigen Mehrwert in komplexen Enterprise-Umgebungen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'SAP-Prozessanalyse & RPA-Strategie',
          description: 'Umfassende Bewertung Ihrer SAP-Landschaft zur Identifikation optimaler Automatisierungspotentiale und Entwicklung einer maßgeschneiderten RPA-Roadmap.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte SAP-Prozessanalyse und Komplexitätsbewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'ROI-Bewertung für SAP-RPA-Initiativen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung einer phasenorientierten SAP-RPA-Roadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Technologie-Auswahl und SAP-Architektur-Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Intelligente SAP-RPA-Entwicklung',
          description: 'Professionelle Entwicklung intelligenter RPA-Bots mit nativer SAP-Integration und KI-gestützten Entscheidungskapazitäten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Native SAP-GUI und Web-Dynpro Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'KI-gestützte Dokumentenverarbeitung für SAP-Belege'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Intelligente Ausnahmebehandlung und Fehlerkorrektur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'SAP-API und RFC-Integration für Systemkommunikation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'EU AI Act SAP-Compliance',
          description: 'Sicherstellung der vollständigen Compliance Ihrer SAP-RPA-Lösung mit den Anforderungen des EU AI Act und SAP-spezifischen Governance-Standards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'AI Act Risikobewertung für SAP-Automatisierungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'SAP-integrierte AI Governance und Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Compliance-Monitoring für SAP-RPA-Aktivitäten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Audit-Vorbereitung und regulatorische Berichterstattung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'SAP-Systemintegration & Sicherheit',
          description: 'Sichere Integration der RPA-Lösung in Ihre bestehende SAP-Systemlandschaft mit höchsten Sicherheits- und Datenschutzstandards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'SAP-Berechtigungskonzept und Single Sign-On Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Verschlüsselte Datenübertragung und -speicherung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'SAP-Systemlandschaft-Integration (DEV/QAS/PRD)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Backup- und Disaster-Recovery-Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Change Management & SAP-User-Training',
          description: 'Professionelle Begleitung Ihrer SAP-Anwender bei der Einführung intelligenter Automatisierung und Entwicklung neuer Arbeitsweisen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'SAP-spezifische Anwenderschulungen und Workshops'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Entwicklung neuer SAP-Arbeitsabläufe mit RPA-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Stakeholder-Engagement und Akzeptanzförderung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kontinuierliche Unterstützung und Coaching'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'SAP-RPA-Betrieb & Optimierung',
          description: 'Professioneller Betrieb und kontinuierliche Optimierung Ihrer SAP-RPA-Lösung für maximale Performance und Verfügbarkeit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'SAP-integriertes Monitoring und Performance-Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Proaktive Wartung und präventive Fehlerbehebung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Kontinuierliche Prozessoptimierung und Bot-Enhancement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Skalierungsstrategien und Capacity Planning'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(sapIntelligentRpaData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ SAP Intelligent Robotic Process Automation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
