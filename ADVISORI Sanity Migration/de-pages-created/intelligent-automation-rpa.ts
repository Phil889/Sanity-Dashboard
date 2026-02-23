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
    console.log('Creating Intelligent Automation RPA page...')

    const intelligentAutomationRpaData = {
      _type: 'servicePage',
      _id: 'intelligent-automation-rpa',
      title: 'Intelligent Automation RPA',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-automation-rpa'
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
        title: 'Intelligent Automation RPA - KI-gestützte Robotic Process Automation | ADVISORI',
        description: 'Intelligent Automation RPA: Die Evolution traditioneller RPA durch KI-Integration. Cognitive Capabilities, Machine Learning, Hyperautomation-Plattformen und EU AI Act konforme intelligente Prozessautomatisierung für strategische Geschäftstransformation.',
        keywords: 'Intelligent Automation RPA, KI RPA, Cognitive RPA, Hyperautomation, Machine Learning RPA, Process Mining, EU AI Act RPA, Digital Transformation, Enterprise Automation, Smart RPA'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Automation RPA - KI-gestützte Robotic Process Automation für strategische Geschäftstransformation'
        },
        tagline: 'KI-gestützte RPA-Evolution für strategische Enterprise-Automatisierung und nachhaltige Geschäftstransformation',
        heading: 'Intelligent Automation RPA',
        description: 'Intelligent Automation RPA repräsentiert die evolutionäre Transformation traditioneller Robotic Process Automation durch strategische KI-Integration, Cognitive Capabilities und Machine Learning-Enhancement. Diese fortschrittliche Automatisierungsform überschreitet die Grenzen regelbasierter RPA-Systeme und ermöglicht adaptive, selbstlernende Automatisierungslösungen, die komplexe Geschäftsprozesse intelligent orchestrieren und EU AI Act konform implementiert werden.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'KI-gestützte RPA-Evolution mit Cognitive Capabilities und Machine Learning-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Adaptive Prozessautomatisierung für unstrukturierte Daten und komplexe Entscheidungsszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Hyperautomation-Plattformen für end-to-end Geschäftsprozess-Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'EU AI Act konforme intelligente Automatisierung mit umfassenden Governance-Frameworks'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Automation RPA - Strategische KI-Integration für zukunftssichere Prozessautomatisierung',
        description: 'Intelligent Automation RPA transformiert traditionelle Robotic Process Automation durch strategische KI-Integration zu adaptiven, selbstlernenden Automatisierungsökosystemen. Diese Evolution ermöglicht nicht nur operative Effizienzsteigerungen, sondern fundamentale Geschäftstransformation durch intelligente Prozessorchestrierung, die komplexe Entscheidungsprozesse automatisiert und kontinuierliche Optimierung durch Machine Learning gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Cognitive RPA-Capabilities überwinden traditionelle Automatisierungsgrenzen durch KI-gestützte Entscheidungsfindung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Machine Learning-Integration ermöglicht adaptive Prozessoptimierung und selbstlernende Automatisierungssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Natural Language Processing und Computer Vision erweitern RPA um unstrukturierte Datenverarbeitung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Hyperautomation-Plattformen orchestrieren komplexe Geschäftsprozesse über Systemgrenzen hinweg'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'EU AI Act Compliance und Governance-Integration für verantwortungsvolle KI-gestützte Automatisierung'
          }
        ],
        alert: {
          title: 'Intelligent Automation RPA als strategischer Automatisierungs-Enabler',
          content: 'Intelligent Automation RPA transformiert traditionelle RPA von isolierten Effizienztools zu strategischen Geschäftstransformations-Plattformen durch KI-Integration, die adaptive Automatisierung und kontinuierliche Prozessoptimierung ermöglicht.'
        },
        whyUs: {
          title: 'Warum Intelligent Automation RPA mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende KI-RPA-Integration-Expertise für nahtlose Transformation bestehender Automatisierungslandschaften'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act konforme Beratung für sichere und verantwortungsvolle KI-gestützte RPA-Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Enterprise-Methodologien für strategische Hyperautomation-Transformation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Innovation durch Process Mining und KI-gestützte Automatisierungsoptimierung'
            }
          ]
        },
        additionalInfo: 'Intelligent Automation RPA repräsentiert die Zukunft der Prozessautomatisierung durch strategische KI-Integration. Die richtige Implementierungsstrategie wird zum entscheidenden Wettbewerbsvorteil in der digitalisierten Enterprise-Welt.',
        serviceDescription: 'Unser Intelligent Automation RPA Service umfasst die vollständige Transformation traditioneller RPA-Systeme zu KI-gestützten, adaptiven Automatisierungsplattformen. Wir entwickeln maßgeschneiderte Intelligent Automation-Strategien, die bestehende RPA-Investitionen optimal nutzen und gleichzeitig den Weg zu zukunftssicherer, intelligenter Prozessautomatisierung ebnen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'KI-RPA-Integration und Cognitive Capabilities-Enhancement für bestehende Automatisierungssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Machine Learning und NLP-Integration für adaptive und selbstlernende RPA-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Hyperautomation-Plattform-Entwicklung für end-to-end Geschäftsprozess-Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Process Mining und Analytics-Integration für datengetriebene Automatisierungsoptimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'EU AI Act Compliance und Governance-Framework-Implementierung für verantwortungsvolle KI-Nutzung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zu Intelligent Automation RPA',
        description: 'Wir verfolgen einen strategischen und evolutionären Ansatz zur KI-gestützten RPA-Transformation, der bestehende Automatisierungsinvestitionen maximiert und gleichzeitig den Weg zu zukunftssicherer, intelligenter Prozessautomatisierung ebnet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive RPA-Assessment und KI-Integration-Potenzial-Analyse für strategische Transformationsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Phased AI-Enhancement-Roadmap mit schrittweiser Cognitive Capabilities-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Hyperautomation-Platform-Migration für skalierbare und integrierte Automatisierungslandschaften'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Change Management und Skill Development für erfolgreiche Intelligent Automation-Adoption'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Innovation und Performance-Monitoring für nachhaltige Automatisierungs-Excellence'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Intelligent Automation RPA repräsentiert die strategische Evolution traditioneller Prozessautomatisierung zu KI-gestützten, adaptiven Automatisierungsökosystemen. Wir begleiten Unternehmen bei dieser Transformation, indem wir bewährte RPA-Grundlagen mit fortschrittlichen KI-Capabilities kombinieren und dabei stets EU AI Act-Konformität und nachhaltige Geschäftstransformation gewährleisten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'KI-RPA-Integration und Cognitive Enhancement',
          description: 'Strategische Integration von KI-Technologien in bestehende RPA-Systeme für erweiterte Automatisierungsfähigkeiten und adaptive Prozessoptimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Machine Learning-Integration für adaptive und selbstlernende RPA-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Natural Language Processing für intelligente Dokumentenverarbeitung und Textanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Computer Vision und OCR-Enhancement für erweiterte Datenextraktion und Bilderkennung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Cognitive Decision-Making für komplexe Business Rules und Exception Handling'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Hyperautomation-Plattform-Entwicklung',
          description: 'Entwicklung integrierter Hyperautomation-Plattformen für end-to-end Geschäftsprozess-Orchestrierung über traditionelle RPA-Grenzen hinaus.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'End-to-End-Prozessorchestrierung über Systemgrenzen und Anwendungslandschaften hinweg'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'API-First-Architektur für flexible System-Integration und Skalierbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Low-Code/No-Code-Plattformen für Citizen Developer-Enablement und Business-User-Empowerment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Workflow-Orchestration-Engine für komplexe Geschäftsprozess-Automatisierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Process Mining und Analytics-Integration',
          description: 'Fortschrittliche Process Mining-Technologien und Analytics-Integration für datengetriebene Automatisierungsoptimierung und kontinuierliche Verbesserung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Process Discovery und Event Log-Analyse für Optimierungspotenzial-Identifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Real-time Process Monitoring und Performance-Analytics für kontinuierliche Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Predictive Analytics für proaktive Prozessoptimierung und Exception-Vermeidung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Digital Twin-Implementierung für Prozess-Simulation und Impact-Analyse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'EU AI Act Compliance und Governance',
          description: 'Umfassende Compliance-Frameworks und Governance-Strukturen für EU AI Act-konforme KI-gestützte RPA-Implementierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'EU AI Act Risk Assessment und Compliance-Framework-Entwicklung für KI-RPA-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'AI Governance und Ethics-Integration für verantwortungsvolle KI-gestützte Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Transparency und Explainability-Mechanismen für KI-gestützte RPA-Entscheidungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Continuous Compliance-Monitoring und Audit-Trail-Management für regulatorische Nachweise'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Adaptive Automatisierung und Self-Learning Systems',
          description: 'Entwicklung adaptiver, selbstlernender Automatisierungssysteme, die kontinuierlich ihre Performance optimieren und sich an verändernde Geschäftsanforderungen anpassen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Self-Learning-Algorithmen für kontinuierliche Prozessoptimierung ohne manuelle Intervention'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Adaptive Exception Handling durch KI-gestützte Problemlösung und Lernfähigkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Dynamic Process Adjustment basierend auf Performance-Metriken und Geschäftsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Intelligent Scaling und Resource Optimization für variable Workload-Anforderungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Enterprise Integration und Change Management',
          description: 'Strategisches Change Management und Enterprise-Integration für erfolgreiche Intelligent Automation RPA-Transformation mit Fokus auf organisatorische Akzeptanz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Organizational Readiness Assessment und Change-Strategie-Entwicklung für KI-RPA-Adoption'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Skill Transformation-Programme für RPA-zu-Intelligent-Automation-Transition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Stakeholder-Engagement und Communication-Strategien für Transformation-Akzeptanz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Future of Work-Strategien und Job Redesign für intelligente Automatisierungsumgebungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentAutomationRpaData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Automation RPA page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
