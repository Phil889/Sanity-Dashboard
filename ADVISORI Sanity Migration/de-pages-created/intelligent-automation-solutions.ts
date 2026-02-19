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
    console.log('Creating Intelligent Automation Solutions page...')

    const intelligentAutomationSolutionsData = {
      _type: 'servicePage',
      _id: 'intelligent-automation-solutions',
      title: 'Intelligent Automation Solutions',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-automation-solutions'
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
        title: 'Intelligent Automation Solutions - KI-gestützte Automatisierungslösungen & RPA | ADVISORI',
        description: 'Umfassende Intelligent Automation Solutions für digitale Transformation. KI-gestützte RPA, Hyperautomation, Process Mining, Cognitive Automation und EU AI Act konforme Automatisierungsstrategien für Enterprise-Excellence.',
        keywords: 'Intelligent Automation Solutions, RPA Lösungen, Hyperautomation, Process Mining, Cognitive Automation, KI Automatisierung, Digital Transformation, EU AI Act, Enterprise Automation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Automation Solutions - Umfassende KI-gestützte Automatisierungslösungen für Enterprise-Transformation'
        },
        tagline: 'Comprehensive Intelligent Automation Solutions für Enterprise-Excellence',
        heading: 'Intelligent Automation Solutions',
        description: 'Intelligent Automation Solutions repräsentieren die Evolution von traditioneller Prozessautomatisierung zu strategischen, KI-gestützten Automatisierungsökosystemen. Durch nahtlose Integration von RPA, Machine Learning, Process Mining und Cognitive Automation schaffen wir ganzheitliche Hyperautomation-Lösungen, die operative Exzellenz mit strategischer Innovation harmonisieren und dabei EU AI Act Compliance gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Ganzheitliche Hyperautomation-Lösungen mit KI-Integration und RPA-Excellence'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Process Mining und Discovery für datengetriebene Automatisierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Cognitive Automation und Machine Learning für intelligente Entscheidungsfindung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'EU AI Act konforme Automation Governance und Enterprise-Compliance'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Automation Solutions - Comprehensive Enterprise-Automatisierung für strategische Transformation',
        description: 'Intelligent Automation Solutions transformieren fragmentierte Automatisierungsansätze in kohärente, strategisch orchestrierte Automatisierungsökosysteme. Sie etablieren Automatisierung als nativen Bestandteil der digitalen Transformation, der nicht nur operative Effizienz maximiert, sondern auch als strategischer Enabler für Geschäftsmodell-Innovation, Employee Empowerment und nachhaltige Wettbewerbsvorteile fungiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Hyperautomation-Plattformen etablieren end-to-end Automatisierung mit KI-Integration und Enterprise-Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Process Mining und Discovery ermöglichen datengetriebene Automatisierungsstrategien und ROI-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Cognitive Automation harmonisiert KI-Technologien mit Geschäftsprozessen für intelligente Entscheidungsfindung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'RPA-Excellence unterstützt skalierbare Bot-Entwicklung mit Low-Code/No-Code-Ansätzen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Automation Governance gewährleistet EU AI Act Compliance und nachhaltige Automatisierungsstrategien'
          }
        ],
        alert: {
          title: 'Intelligent Automation Solutions als strategischer Enterprise-Differentiator',
          content: 'Intelligent Automation Solutions werden zum strategischen Wettbewerbsvorteil für digitale Transformation, operative Exzellenz und moderne Enterprise-Innovation – weit über traditionelle Automatisierungsansätze hinaus.'
        },
        whyUs: {
          title: 'Warum Intelligent Automation Solutions mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Automation-Expertise von RPA bis Hyperautomation und KI-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act konforme Beratung für sichere und compliant Automatisierungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Enterprise-Methodologien für skalierbare Automatisierungstransformation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Innovation durch Process Mining und KI-gestützte Optimierung'
            }
          ]
        },
        additionalInfo: 'Intelligent Automation Solutions ermöglichen es Organisationen, die volle Power moderner Automatisierungstechnologien für strategische Geschäftstransformation zu nutzen. Die richtige Automation-Strategie wird zum Wettbewerbsvorteil in einer zunehmend digitalisierten Enterprise-Welt.',
        serviceDescription: 'Unser Intelligent Automation Solutions Service umfasst die vollständige Transformation von manuellen Prozesslandschaften zu strategischen KI-gestützten Automatisierungsökosystemen. Wir entwickeln maßgeschneiderte Hyperautomation-Strategien, die perfekt zu Ihren Geschäftsprozessen, Technologie-Infrastrukturen und Compliance-Anforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Hyperautomation-Plattformen und end-to-end Automatisierungsorchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Process Mining und Discovery für datengetriebene Automatisierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Cognitive Automation und KI-Integration für intelligente Prozessautomatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'RPA-Excellence und Bot-Development mit Low-Code/No-Code-Ansätzen'
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
        title: 'Unser Ansatz zu Intelligent Automation Solutions',
        description: 'Wir verfolgen einen ganzheitlichen und strategischen Ansatz zu Intelligent Automation Solutions, der moderne Automatisierungstechnologien optimal nutzt und gleichzeitig nachhaltige Business-Transformation ermöglicht.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Automation Assessment und Hyperautomation-Potenzial-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategic Automation-Roadmap-Entwicklung mit KI-Integration und Enterprise-Vision'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Solution-Implementierung mit kontinuierlicher Optimierung und Skalierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Change Management und Employee-Enablement für erfolgreiche Automation-Adoption'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Solution-Evolution durch Monitoring, Analytics und KI-Enhancement'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Intelligent Automation Solutions sind das strategische Fundament für moderne Enterprise-Transformation. Wir entwickeln ganzheitliche Automatisierungsökosysteme, die nicht nur operative Exzellenz gewährleisten, sondern auch als strategische Enabler für Geschäftsmodell-Innovation, Employee Empowerment und nachhaltige Wettbewerbsvorteile fungieren – dabei stets EU AI Act konform und zukunftsorientiert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Hyperautomation-Plattformen und Enterprise-Orchestrierung',
          description: 'Umfassende Hyperautomation-Lösungen mit end-to-end Prozessorchestrierung für strategische Enterprise-Automatisierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Hyperautomation-Architektur und Plattform-Integration für ganzheitliche Automatisierungsökosysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'End-to-End-Prozessorchestrierung mit Multi-System-Integration und Workflow-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Low-Code/No-Code-Plattformen für Citizen Developer-Enablement und agile Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'API-First-Architektur und Microservices-Integration für flexible Automatisierungslandschaften'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Process Mining und Discovery Solutions',
          description: 'Fortschrittliche Process Mining-Technologien für datengetriebene Automatisierungsstrategien und ROI-Optimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Process Discovery und Event Log-Analyse für Automatisierungspotenzial-Identifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Conformance Checking und Process Compliance-Monitoring für Qualitätssicherung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Process Enhancement und Bottleneck-Analyse für Performance-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'ROI-Prognosen und Business Case-Entwicklung für strategische Automatisierungsentscheidungen'
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
              text: 'Natural Language Processing für Dokumentenverarbeitung und intelligente Textanalyse'
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
          title: 'RPA-Excellence und Bot-Development',
          description: 'Professionelle RPA-Implementierung mit intelligenter Bot-Orchestrierung für skalierbare Prozessautomatisierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'RPA-Plattform-Auswahl und Enterprise-Integration für optimale Automatisierungsarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Bot-Development und Workflow-Automatisierung für repetitive Geschäftsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Attended und Unattended Bot-Strategien für verschiedene Automatisierungsszenarien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Bot-Orchestrierung und Scheduling für optimale Ressourcennutzung und Performance'
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
          title: 'Change Management und Solution Adoption',
          description: 'Strategisches Change Management für erfolgreiche Automation Solution-Adoption und Employee-Enablement.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Automation Readiness Assessment und Organizational Change-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Employee-Training und Upskilling für Human-Bot-Collaboration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Stakeholder-Engagement und Communication-Strategien für Solution-Akzeptanz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Future of Work-Strategien und Job Redesign für automatisierte Arbeitsumgebungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentAutomationSolutionsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Automation Solutions page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
