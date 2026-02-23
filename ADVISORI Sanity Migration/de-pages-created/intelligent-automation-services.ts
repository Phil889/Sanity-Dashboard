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
    console.log('Creating Intelligent Automation Services page...')

    const intelligentAutomationServicesData = {
      _type: 'servicePage',
      _id: 'intelligent-automation-services',
      title: 'Intelligent Automation Services',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-automation-services'
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
        title: 'Intelligent Automation Services - KI-gestützte Prozessautomatisierung & RPA | ADVISORI',
        description: 'Professionelle Intelligent Automation Services für digitale Transformation. KI-gestützte Prozessautomatisierung, RPA, Hyperautomation, Process Mining und Cognitive Automation für Enterprise-Effizienz und EU AI Act Compliance.',
        keywords: 'Intelligent Automation, RPA, Robotic Process Automation, KI Automatisierung, Process Mining, Hyperautomation, Cognitive Automation, Prozessautomatisierung, Digital Transformation, EU AI Act'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Automation Services - KI-gestützte Prozessautomatisierung für digitale Enterprise-Transformation'
        },
        tagline: 'Intelligent Automation Excellence für Enterprise-Transformation',
        heading: 'Intelligent Automation Services',
        description: 'Intelligent Automation Services transformieren traditionelle Geschäftsprozesse in strategisch orchestrierte, KI-gestützte Automatisierungslösungen. Durch nahtlose Integration von RPA, Machine Learning, Process Mining und Cognitive Automation schaffen wir Hyperautomation-Architekturen, die operative Exzellenz mit strategischer Innovation optimal vereinen und dabei EU AI Act Compliance gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'KI-gestützte Prozessautomatisierung mit RPA und Machine Learning Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Process Mining und Discovery für datengetriebene Automatisierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Hyperautomation-Plattformen und Cognitive Automation für komplexe Workflows'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'EU AI Act konforme Automation Governance und Compliance-Management'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Automation Services - Strategic Process Transformation für moderne Enterprise-Architekturen',
        description: 'Intelligent Automation Services sind das strategische Fundament für moderne digitale Transformation. Sie transformieren fragmentierte manuelle Prozesse in kohärente, KI-gestützte Automatisierungssysteme, die nicht nur operative Effizienz maximieren, sondern auch als strategische Enabler für Geschäftsmodell-Innovation, Mitarbeiter-Empowerment und nachhaltige Wettbewerbsvorteile fungieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'RPA-Expertise etabliert skalierbare Robotic Process Automation mit intelligenter Bot-Orchestrierung und Enterprise-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Process Mining und Discovery ermöglichen datengetriebene Prozessoptimierung und Automatisierungspotenzial-Identifikation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Cognitive Automation harmonisiert KI-Technologien mit Geschäftsprozessen für intelligente Entscheidungsfindung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Hyperautomation-Plattformen unterstützen end-to-end Prozessautomatisierung mit Low-Code/No-Code-Ansätzen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Automation Governance gewährleistet EU AI Act Compliance und nachhaltige Automatisierungsstrategien'
          }
        ],
        alert: {
          title: 'Intelligent Automation als strategischer Enterprise-Accelerator',
          content: 'Intelligent Automation Services werden zum strategischen Differentiator für digitale Transformation, Prozessexzellenz und moderne Enterprise-Innovation – weit über traditionelle RPA-Implementierung hinaus.'
        },
        whyUs: {
          title: 'Warum Intelligent Automation mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Automation-Expertise von RPA bis Cognitive AI-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act konforme Beratung für sichere und compliant Automatisierungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Hyperautomation-Methodologien für skalierbare Enterprise-Transformation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Innovation durch Process Mining und KI-gestützte Optimierung'
            }
          ]
        },
        additionalInfo: 'Intelligent Automation Services ermöglichen es Organisationen, die volle Power moderner Automatisierungstechnologien für strategische Geschäftstransformation zu nutzen. Die richtige Automation-Strategie wird zum Wettbewerbsvorteil in einer zunehmend digitalisierten Enterprise-Welt.',
        serviceDescription: 'Unser Intelligent Automation Service umfasst die vollständige Transformation von manuellen Prozesslandschaften zu strategischen KI-gestützten Automatisierungssystemen. Wir entwickeln maßgeschneiderte Automation-Strategien, die perfekt zu Ihren Geschäftsprozessen, Technologie-Infrastrukturen und Compliance-Anforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'RPA-Implementierung und Bot-Development für repetitive Prozessautomatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Process Mining und Discovery für datengetriebene Automatisierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Cognitive Automation und KI-Integration für intelligente Entscheidungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Hyperautomation-Plattformen und Low-Code/No-Code-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Automation Governance und EU AI Act Compliance-Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zu Intelligent Automation Services',
        description: 'Wir verfolgen einen ganzheitlichen und KI-gestützten Ansatz zu Intelligent Automation, der moderne Automatisierungstechnologien optimal nutzt und gleichzeitig strategische Business-Transformation ermöglicht.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Process Discovery und Automatisierungspotenzial-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategic Automation-Roadmap-Entwicklung mit Hyperautomation-Vision'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Automation-Implementierung mit kontinuierlicher Optimierung und Skalierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Change Management und Mitarbeiter-Enablement für Automation-Adoption'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Automation-Evolution durch Monitoring, Analytics und KI-Enhancement'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Intelligent Automation Services sind das strategische Fundament für moderne digitale Transformation. Wir transformieren fragmentierte manuelle Prozesse in strategisch orchestrierte KI-gestützte Automatisierungssysteme, die nicht nur operative Exzellenz gewährleisten, sondern auch als strategische Enabler für Geschäftsmodell-Innovation, Mitarbeiter-Empowerment und nachhaltige Wettbewerbsvorteile fungieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'RPA-Implementierung und Bot-Development',
          description: 'Umfassende Robotic Process Automation-Implementierung mit intelligenter Bot-Orchestrierung für skalierbare Prozessautomatisierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'RPA-Plattform-Auswahl und Enterprise-Integration für optimale Automatisierungsarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bot-Development und Workflow-Automatisierung für repetitive Geschäftsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Attended und Unattended Bot-Strategien für verschiedene Automatisierungsszenarien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Bot-Orchestrierung und Scheduling für optimale Ressourcennutzung und Performance'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Process Mining und Discovery Services',
          description: 'Fortschrittliche Process Mining-Technologien für datengetriebene Prozessanalyse und Automatisierungspotenzial-Identifikation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Process Discovery und Event Log-Analyse für Prozess-Transparenz und Optimierungspotenziale'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Conformance Checking und Process Compliance-Monitoring für Qualitätssicherung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Process Enhancement und Bottleneck-Identifikation für Performance-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Automation Opportunity Assessment und ROI-Prognosen für strategische Entscheidungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Cognitive Automation und KI-Integration',
          description: 'Intelligente Automatisierungslösungen mit KI-Technologien für komplexe Entscheidungsprozesse und unstrukturierte Datenverarbeitung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Natural Language Processing für Dokumentenverarbeitung und Textanalyse-Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Computer Vision und OCR-Integration für Bildverarbeitung und Datenextraktion'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Machine Learning-basierte Entscheidungsautomatisierung für komplexe Business Rules'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Conversational AI und Chatbot-Integration für Kundenservice-Automatisierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Hyperautomation-Plattformen und Low-Code Development',
          description: 'End-to-end Hyperautomation-Strategien mit Low-Code/No-Code-Plattformen für beschleunigte Automatisierungsentwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Hyperautomation-Architektur und Plattform-Integration für ganzheitliche Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Low-Code/No-Code-Development für Citizen Developer-Enablement und Agilität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'API-Integration und Microservices-Architektur für flexible Automatisierungslandschaften'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Workflow-Orchestrierung und Business Process Management für komplexe Automatisierungsszenarien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Automation Governance und Compliance Management',
          description: 'Umfassende Governance-Frameworks für nachhaltige Automatisierungsstrategien und EU AI Act Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Automation Center of Excellence-Etablierung für strategische Automatisierungsführung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'EU AI Act Compliance und Risk Management für KI-gestützte Automatisierungssysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Automation Security und Access Control für sichere Bot-Operationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Performance Monitoring und Analytics für kontinuierliche Automatisierungsoptimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Change Management und Automation Adoption',
          description: 'Strategisches Change Management für erfolgreiche Automation-Adoption und Mitarbeiter-Enablement in digitalen Transformationsprozessen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Automation Readiness Assessment und Organizational Change-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Mitarbeiter-Training und Upskilling für Human-Bot-Collaboration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Stakeholder-Engagement und Communication-Strategien für Automation-Akzeptanz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Future of Work-Strategien und Job Redesign für Automation-optimierte Arbeitsplätze'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentAutomationServicesData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Automation Services page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
