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
    console.log('Creating Intelligent Automation Platform page...')

    const intelligentAutomationPlatformData = {
      _type: 'servicePage',
      _id: 'intelligent-automation-platform',
      title: 'Intelligent Automation Platform',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-automation-platform'
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
        title: 'Intelligent Automation Platform - Enterprise KI-Automatisierungsplattform & Hyperautomation | ADVISORI',
        description: 'Umfassende Intelligent Automation Platform für Enterprise-Transformation. KI-gestützte Automatisierungsorchestrierung, Hyperautomation-Architektur, Process Mining Integration und EU AI Act konforme Platform-Governance für skalierbare Automatisierungsökosysteme.',
        keywords: 'Intelligent Automation Platform, Hyperautomation Platform, KI Automatisierung, Enterprise Automation, Process Mining, Platform Orchestrierung, EU AI Act, Digital Transformation, Automation Governance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Automation Platform - Enterprise KI-Automatisierungsplattform für strategische Hyperautomation'
        },
        tagline: 'Enterprise Intelligent Automation Platform für strategische Hyperautomation-Transformation',
        heading: 'Intelligent Automation Platform',
        description: 'Intelligent Automation Platform etabliert das strategische Fundament für Enterprise-weite Hyperautomation durch nahtlose Integration von KI-Technologien, Process Mining, RPA-Orchestrierung und Cognitive Automation. Als zentrale Orchestrierungsebene transformiert sie fragmentierte Automatisierungsansätze in kohärente, skalierbare Automatisierungsökosysteme, die operative Exzellenz mit strategischer Innovation harmonisieren und dabei EU AI Act Compliance gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Zentrale Hyperautomation-Orchestrierung mit KI-Integration und Enterprise-Skalierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Process Mining-Integration für datengetriebene Automatisierungsoptimierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Low-Code/No-Code-Entwicklung für Citizen Developer-Enablement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'EU AI Act konforme Platform-Governance und Enterprise-Compliance'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Automation Platform - Zentrale Orchestrierungsebene für Enterprise-Hyperautomation',
        description: 'Intelligent Automation Platform fungiert als strategische Orchestrierungsebene, die verschiedene Automatisierungstechnologien, KI-Services und Geschäftsprozesse in einem kohärenten, skalierbaren Ökosystem vereint. Sie etabliert Automatisierung als nativen Bestandteil der Enterprise-Architektur und ermöglicht nahtlose Integration, intelligente Orchestrierung und kontinuierliche Optimierung aller Automatisierungskomponenten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Hyperautomation-Orchestrierung integriert RPA, KI, Process Mining und Cognitive Services in einer einheitlichen Platform-Architektur'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Low-Code/No-Code-Entwicklungsumgebung demokratisiert Automatisierungsentwicklung für Business User'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Process Mining-Integration ermöglicht kontinuierliche Prozessoptimierung und datengetriebene Automatisierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'API-First-Architektur gewährleistet nahtlose Integration mit bestehenden Enterprise-Systemen und Cloud-Services'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Enterprise-Governance und EU AI Act Compliance durch integrierte Monitoring-, Audit- und Compliance-Funktionen'
          }
        ],
        alert: {
          title: 'Intelligent Automation Platform als strategischer Enterprise-Enabler',
          content: 'Intelligent Automation Platform wird zum zentralen Nervensystem für Enterprise-Automatisierung, das nicht nur operative Effizienz maximiert, sondern auch als strategischer Enabler für Geschäftsmodell-Innovation und digitale Transformation fungiert.'
        },
        whyUs: {
          title: 'Warum Intelligent Automation Platform mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Platform-Expertise von Architektur bis Implementierung und Enterprise-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act konforme Beratung für sichere und compliant Platform-Governance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Enterprise-Methodologien für skalierbare Platform-Transformation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Innovation durch KI-Integration und Process Mining-Optimierung'
            }
          ]
        },
        additionalInfo: 'Intelligent Automation Platform ermöglicht es Organisationen, die volle Power moderner Automatisierungstechnologien durch zentrale Orchestrierung und intelligente Integration zu nutzen. Die richtige Platform-Strategie wird zum Wettbewerbsvorteil in einer zunehmend automatisierten Enterprise-Welt.',
        serviceDescription: 'Unser Intelligent Automation Platform Service umfasst die vollständige Transformation von fragmentierten Automatisierungslandschaften zu strategischen, orchestrierten Platform-Ökosystemen. Wir entwickeln maßgeschneiderte Platform-Architekturen, die perfekt zu Ihren Geschäftsprozessen, Technologie-Infrastrukturen und Skalierungsanforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Platform-Architektur und Hyperautomation-Orchestrierung für Enterprise-Skalierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Low-Code/No-Code-Entwicklungsumgebung für Citizen Developer-Enablement'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Process Mining-Integration für kontinuierliche Automatisierungsoptimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'API-First-Integration und Microservices-Architektur für flexible Platform-Erweiterung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Enterprise-Governance und EU AI Act Compliance-Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zu Intelligent Automation Platform',
        description: 'Wir verfolgen einen ganzheitlichen und strategischen Ansatz zu Intelligent Automation Platform, der moderne Platform-Technologien optimal nutzt und gleichzeitig nachhaltige Enterprise-Transformation ermöglicht.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Platform Assessment und Enterprise-Architektur-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategic Platform-Roadmap-Entwicklung mit Hyperautomation-Vision und KI-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Platform-Implementierung mit kontinuierlicher Optimierung und Skalierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Change Management und User-Enablement für erfolgreiche Platform-Adoption'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Platform-Evolution durch Monitoring, Analytics und KI-Enhancement'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Intelligent Automation Platform ist das strategische Herzstück moderner Enterprise-Automatisierung. Wir entwickeln orchestrierte Platform-Ökosysteme, die nicht nur verschiedene Automatisierungstechnologien nahtlos integrieren, sondern auch als zentrale Innovationsplattform für kontinuierliche Geschäftstransformation fungieren – dabei stets EU AI Act konform und zukunftsorientiert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Platform-Architektur und Hyperautomation-Orchestrierung',
          description: 'Umfassende Platform-Architektur für zentrale Hyperautomation-Orchestrierung und Enterprise-weite Automatisierungsintegration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Hyperautomation-Architektur mit zentraler Orchestrierungsebene für alle Automatisierungskomponenten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Multi-Technology-Integration von RPA, KI, Process Mining und Cognitive Services'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Event-driven Architecture für intelligente Workflow-Orchestrierung und Real-time Processing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Scalable Platform-Infrastructure für Enterprise-weite Automatisierungsskalierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Low-Code/No-Code-Entwicklungsumgebung',
          description: 'Intuitive Entwicklungsplattform für Citizen Developer-Enablement und agile Automatisierungsentwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Visual Development-Tools für drag-and-drop Automatisierungsentwicklung ohne Programmierkenntnisse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Template-basierte Entwicklung mit vorgefertigten Automatisierungsmustern und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Citizen Developer-Programme für Business User-Enablement und dezentrale Automatisierungsentwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Governance-Integration für Qualitätssicherung und Compliance auch bei dezentraler Entwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Process Mining-Integration und Analytics',
          description: 'Fortschrittliche Process Mining-Integration für kontinuierliche Prozessoptimierung und datengetriebene Automatisierungsstrategien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Real-time Process Discovery für kontinuierliche Identifikation neuer Automatisierungspotenziale'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Performance Analytics und KPI-Monitoring für datengetriebene Automatisierungsoptimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Predictive Analytics für proaktive Prozessverbesserung und Automatisierungsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Digital Twin-Integration für Prozesssimulation und Optimierungsmodellierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'API-First-Integration und Microservices',
          description: 'Flexible API-First-Architektur für nahtlose Enterprise-Integration und modulare Platform-Erweiterung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'API-First-Design für nahtlose Integration mit bestehenden Enterprise-Systemen und Cloud-Services'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Microservices-Architektur für modulare Platform-Entwicklung und flexible Skalierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Enterprise Service Bus-Integration für Legacy-System-Anbindung und Datenorchestrierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Cloud-native Architecture für Multi-Cloud-Deployment und elastische Ressourcennutzung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'KI-Integration und Cognitive Services',
          description: 'Intelligente KI-Integration für erweiterte Automatisierungsfähigkeiten und Cognitive Automation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Machine Learning-Integration für adaptive Automatisierung und kontinuierliches Lernen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Natural Language Processing für Dokumentenverarbeitung und intelligente Textanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Computer Vision-Services für Bildverarbeitung und visuelle Datenextraktion'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Conversational AI-Integration für natürliche Mensch-Maschine-Interaktionen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Enterprise-Governance und Compliance Management',
          description: 'Umfassende Governance-Frameworks für nachhaltige Platform-Strategien und EU AI Act Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Platform-Governance mit zentralen Richtlinien, Standards und Best Practices für alle Automatisierungsaktivitäten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'EU AI Act Compliance-Management für KI-gestützte Platform-Komponenten und Automatisierungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Security-by-Design mit integrierten Sicherheitskontrollen und Access Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Audit Trails und Compliance-Reporting für vollständige Nachverfolgbarkeit aller Platform-Aktivitäten'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentAutomationPlatformData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Automation Platform page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
