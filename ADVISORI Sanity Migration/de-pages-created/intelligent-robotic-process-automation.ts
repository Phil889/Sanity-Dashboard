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
    console.log('Creating Intelligent Robotic Process Automation page...')

    const intelligentRoboticProcessAutomationData = {
      _type: 'servicePage',
      _id: 'intelligent-robotic-process-automation',
      title: 'Intelligent Robotic Process Automation',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-robotic-process-automation'
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
        title: 'Intelligent Robotic Process Automation - KI-gestützte RPA & Bot-Entwicklung | ADVISORI',
        description: 'Professionelle Intelligent Robotic Process Automation Services für digitale Transformation. KI-gestützte RPA-Implementierung, Bot-Development, Hyperautomation und EU AI Act konforme Automatisierungsstrategien für Enterprise-Excellence.',
        keywords: 'Intelligent RPA, Robotic Process Automation, KI-gestützte Automatisierung, Bot Development, Hyperautomation, Cognitive RPA, Digital Transformation, EU AI Act, Enterprise Automation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Robotic Process Automation - KI-gestützte RPA-Lösungen für Enterprise-Transformation'
        },
        tagline: 'Intelligent RPA Excellence für strategische Enterprise-Automatisierung',
        heading: 'Intelligent Robotic Process Automation',
        description: 'Intelligent Robotic Process Automation transformiert traditionelle RPA-Ansätze in strategische, KI-gestützte Automatisierungsökosysteme. Durch nahtlose Integration von Machine Learning, Cognitive Computing und fortschrittlicher Bot-Orchestrierung schaffen wir intelligente RPA-Lösungen, die operative Exzellenz mit strategischer Innovation harmonisieren und dabei EU AI Act Compliance gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'KI-gestützte RPA-Implementierung mit Machine Learning und Cognitive Computing'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Intelligente Bot-Entwicklung und Hyperautomation-Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Process Mining und Discovery für datengetriebene RPA-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'EU AI Act konforme RPA-Governance und Enterprise-Compliance'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Robotic Process Automation - KI-gestützte RPA-Excellence für moderne Enterprise-Transformation',
        description: 'Intelligent Robotic Process Automation repräsentiert die Evolution von traditioneller RPA zu strategischen, KI-gestützten Automatisierungsökosystemen. Es etabliert RPA als nativen Bestandteil der digitalen Transformation, der nicht nur repetitive Aufgaben eliminiert, sondern auch als strategischer Enabler für Geschäftsmodell-Innovation, Employee Empowerment und nachhaltige Wettbewerbsvorteile fungiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'KI-gestützte RPA-Plattformen etablieren intelligente Bot-Entwicklung mit Machine Learning und Cognitive Computing'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Process Mining und Discovery ermöglichen datengetriebene RPA-Strategien und ROI-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Hyperautomation-Integration harmonisiert RPA mit Enterprise-Systemen für end-to-end Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Attended und Unattended Bot-Strategien unterstützen verschiedene Automatisierungsszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'RPA-Governance gewährleistet EU AI Act Compliance und nachhaltige Automatisierungsstrategien'
          }
        ],
        alert: {
          title: 'Intelligent RPA als strategischer Enterprise-Accelerator',
          content: 'Intelligent Robotic Process Automation wird zum strategischen Differentiator für digitale Transformation, operative Exzellenz und moderne Enterprise-Innovation – weit über traditionelle Bot-Implementierung hinaus.'
        },
        whyUs: {
          title: 'Warum Intelligent RPA mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende RPA-Expertise von Bot-Development bis KI-Integration und Hyperautomation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act konforme Beratung für sichere und compliant RPA-Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Enterprise-Methodologien für skalierbare RPA-Transformation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Innovation durch Process Mining und KI-gestützte Bot-Optimierung'
            }
          ]
        },
        additionalInfo: 'Intelligent Robotic Process Automation ermöglicht es Organisationen, die volle Power moderner RPA-Technologien für strategische Geschäftstransformation zu nutzen. Die richtige RPA-Strategie wird zum Wettbewerbsvorteil in einer zunehmend digitalisierten Enterprise-Welt.',
        serviceDescription: 'Unser Intelligent RPA Service umfasst die vollständige Transformation von manuellen Prozesslandschaften zu strategischen KI-gestützten RPA-Ökosystemen. Wir entwickeln maßgeschneiderte Bot-Strategien, die perfekt zu Ihren Geschäftsprozessen, Technologie-Infrastrukturen und Compliance-Anforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'KI-gestützte RPA-Plattformen und intelligente Bot-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Process Mining und Discovery für datengetriebene RPA-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Hyperautomation-Integration und Enterprise-Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Attended und Unattended Bot-Strategien für verschiedene Szenarien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'RPA-Governance und EU AI Act Compliance-Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zu Intelligent Robotic Process Automation',
        description: 'Wir verfolgen einen ganzheitlichen und KI-gestützten Ansatz zu Intelligent RPA, der moderne Bot-Technologien optimal nutzt und gleichzeitig strategische Business-Transformation ermöglicht.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive RPA Assessment und Automatisierungspotenzial-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategic Bot-Roadmap-Entwicklung mit KI-Integration und Enterprise-Vision'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise RPA-Implementierung mit kontinuierlicher Optimierung und Skalierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Change Management und Employee-Enablement für erfolgreiche RPA-Adoption'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige RPA-Evolution durch Monitoring, Analytics und KI-Enhancement'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Intelligent Robotic Process Automation ist das strategische Fundament für moderne Enterprise-Automatisierung. Wir transformieren traditionelle RPA-Ansätze in intelligente, KI-gestützte Automatisierungsökosysteme, die nicht nur operative Exzellenz gewährleisten, sondern auch als strategische Enabler für Geschäftsmodell-Innovation und nachhaltige Wettbewerbsvorteile fungieren – dabei stets EU AI Act konform.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'KI-gestützte RPA-Plattformen und Bot-Development',
          description: 'Umfassende RPA-Implementierung mit intelligenter Bot-Entwicklung und KI-Integration für skalierbare Prozessautomatisierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'RPA-Plattform-Auswahl und Enterprise-Integration für optimale Bot-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Intelligente Bot-Entwicklung mit Machine Learning und Cognitive Computing-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Low-Code/No-Code Bot-Development für Citizen Developer-Enablement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Bot-Testing und Quality Assurance für robuste Automatisierungslösungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Process Mining und RPA-Discovery Services',
          description: 'Fortschrittliche Process Mining-Technologien für datengetriebene RPA-Strategien und Automatisierungspotenzial-Identifikation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Process Discovery und Event Log-Analyse für RPA-Potenzial-Identifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Task Mining und User Interaction-Analyse für Bot-Entwicklungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'ROI-Prognosen und Business Case-Entwicklung für RPA-Investitionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Continuous Process Monitoring für ongoing RPA-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Hyperautomation-Integration und Enterprise-Orchestrierung',
          description: 'Nahtlose Integration von RPA in Hyperautomation-Ökosysteme für end-to-end Enterprise-Automatisierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Hyperautomation-Architektur und RPA-Integration in Enterprise-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'API-Integration und Microservices-Architektur für flexible Bot-Landschaften'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Workflow-Orchestrierung und Business Process Management-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Multi-System-Integration für komplexe Automatisierungsszenarien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Attended und Unattended Bot-Strategien',
          description: 'Strategische Bot-Implementierung für verschiedene Automatisierungsszenarien mit Human-Bot-Collaboration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Attended Bot-Development für Human-in-the-Loop-Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Unattended Bot-Strategien für vollautomatisierte Prozessabwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Bot-Orchestrierung und Scheduling für optimale Ressourcennutzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Exception Handling und Error Management für robuste Bot-Operationen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'RPA-Governance und Compliance Management',
          description: 'Umfassende Governance-Frameworks für nachhaltige RPA-Strategien und EU AI Act Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'RPA Center of Excellence-Etablierung für strategische Bot-Führung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'EU AI Act Compliance und Risk Management für KI-gestützte RPA-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Bot Security und Access Control für sichere Automatisierungsoperationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Performance Monitoring und Analytics für kontinuierliche RPA-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Change Management und RPA-Adoption',
          description: 'Strategisches Change Management für erfolgreiche RPA-Adoption und Employee-Enablement in digitalen Transformationsprozessen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'RPA Readiness Assessment und Organizational Change-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Employee-Training und Upskilling für Human-Bot-Collaboration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Stakeholder-Engagement und Communication-Strategien für RPA-Akzeptanz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Future of Work-Strategien und Job Redesign für RPA-optimierte Arbeitsplätze'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentRoboticProcessAutomationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Robotic Process Automation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
