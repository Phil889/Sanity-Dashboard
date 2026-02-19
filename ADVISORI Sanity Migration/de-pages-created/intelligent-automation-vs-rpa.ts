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
    console.log('Creating Intelligent Automation vs RPA page...')

    const intelligentAutomationVsRpaData = {
      _type: 'servicePage',
      _id: 'intelligent-automation-vs-rpa',
      title: 'Intelligent Automation vs RPA',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-automation-vs-rpa'
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
        title: 'Intelligent Automation vs RPA - Evolution zu KI-gestützter Prozessautomatisierung | ADVISORI',
        description: 'Intelligent Automation vs RPA: Verstehen Sie die Evolution von traditioneller RPA zu intelligenter Automatisierung. KI-Integration, Cognitive Capabilities, strategische Transformation und EU AI Act konforme Automatisierungsstrategien.',
        keywords: 'Intelligent Automation vs RPA, RPA Evolution, KI Automatisierung, Cognitive Automation, Hyperautomation, Process Mining, EU AI Act, Digital Transformation, Enterprise Automation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Automation vs RPA - Evolution von traditioneller RPA zu KI-gestützter intelligenter Automatisierung'
        },
        tagline: 'Evolution von RPA zu Intelligent Automation für strategische Enterprise-Transformation',
        heading: 'Intelligent Automation vs RPA',
        description: 'Intelligent Automation vs RPA repräsentiert die evolutionäre Transformation von traditioneller, regelbasierter Prozessautomatisierung zu strategischen, KI-gestützten Automatisierungsökosystemen. Während RPA punktuelle Effizienzsteigerungen ermöglicht, schafft Intelligent Automation ganzheitliche Geschäftstransformation durch Cognitive Capabilities, Machine Learning-Integration und adaptive Prozessorchestrierung, die EU AI Act konform und zukunftsorientiert implementiert wird.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Evolution von regelbasierter RPA zu KI-gestützter intelligenter Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Cognitive Capabilities für unstrukturierte Daten und komplexe Entscheidungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Hyperautomation-Plattformen für end-to-end Geschäftstransformation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'EU AI Act konforme KI-Integration und strategische Automatisierungs-Governance'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Automation vs RPA - Strategische Evolution für moderne Enterprise-Automatisierung',
        description: 'Intelligent Automation vs RPA verdeutlicht den paradigmatischen Wandel von isolierten, regelbasierten Automatisierungstools zu strategischen, KI-gestützten Automatisierungsökosystemen. Diese Evolution transformiert nicht nur operative Prozesse, sondern ermöglicht fundamentale Geschäftsmodell-Innovation, strategische Wettbewerbsvorteile und nachhaltige digitale Transformation durch intelligente Technologie-Integration.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'RPA-Limitationen überwinden durch KI-Integration und Cognitive Automation für komplexe Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Hyperautomation-Evolution ermöglicht end-to-end Prozessorchestrierung über traditionelle RPA-Grenzen hinaus'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Machine Learning und Process Mining schaffen adaptive, selbstlernende Automatisierungssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Strategic Business Value durch intelligente Automatisierung statt punktueller Effizienzsteigerungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'EU AI Act Compliance und Governance-Integration für zukunftssichere Automatisierungsstrategien'
          }
        ],
        alert: {
          title: 'Intelligent Automation als strategischer RPA-Nachfolger',
          content: 'Intelligent Automation repräsentiert nicht nur eine technologische Weiterentwicklung von RPA, sondern einen fundamentalen Paradigmenwechsel zu strategischer, KI-gestützter Geschäftstransformation mit nachhaltigen Wettbewerbsvorteilen.'
        },
        whyUs: {
          title: 'Warum Intelligent Automation vs RPA Evolution mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende RPA-zu-IA-Transformations-Expertise für nahtlose Automatisierungs-Evolution'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act konforme Beratung für sichere KI-Integration in Automatisierungslandschaften'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Enterprise-Methodologien für strategische Automatisierungstransformation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Innovation durch Process Mining und KI-gestützte Optimierung'
            }
          ]
        },
        additionalInfo: 'Intelligent Automation vs RPA verdeutlicht die notwendige Evolution von traditioneller Automatisierung zu strategischer KI-Integration. Die richtige Transformationsstrategie wird zum entscheidenden Wettbewerbsvorteil in der digitalisierten Enterprise-Welt.',
        serviceDescription: 'Unser Intelligent Automation vs RPA Service umfasst die vollständige Transformation von traditionellen RPA-Implementierungen zu strategischen KI-gestützten Automatisierungsökosystemen. Wir entwickeln maßgeschneiderte Evolutionsstrategien, die bestehende RPA-Investitionen optimal nutzen und gleichzeitig den Weg zu intelligenter Automatisierung ebnen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'RPA-Assessment und Intelligent Automation-Transformations-Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'KI-Integration und Cognitive Capabilities-Enhancement für bestehende RPA-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Hyperautomation-Plattform-Migration und end-to-end Prozessorchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Process Mining und Analytics-Integration für datengetriebene Automatisierungsoptimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'EU AI Act Compliance und Governance-Framework-Implementierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zu Intelligent Automation vs RPA Evolution',
        description: 'Wir verfolgen einen strategischen und evolutionären Ansatz zur Transformation von RPA zu Intelligent Automation, der bestehende Investitionen maximiert und gleichzeitig den Weg zu zukunftssicherer, KI-gestützter Automatisierung ebnet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive RPA-Assessment und Intelligent Automation-Potenzial-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategic Evolution-Roadmap mit phasenweiser KI-Integration und Capability-Enhancement'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Seamless Migration-Strategien für kontinuierliche Business-Continuity während der Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Change Management und Skill Development für erfolgreiche IA-Adoption'
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
        quote: 'Die Evolution von RPA zu Intelligent Automation ist nicht nur eine technologische Weiterentwicklung, sondern ein strategischer Paradigmenwechsel. Wir begleiten Unternehmen bei dieser Transformation, indem wir bestehende RPA-Investitionen optimal nutzen und gleichzeitig den Weg zu KI-gestützter, zukunftssicherer Automatisierung ebnen – stets EU AI Act konform und mit Fokus auf nachhaltiger Geschäftstransformation.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'RPA-Assessment und IA-Transformations-Roadmap',
          description: 'Umfassende Bewertung bestehender RPA-Implementierungen und strategische Roadmap-Entwicklung für Intelligent Automation-Evolution.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Current State-Analyse bestehender RPA-Landschaften und Performance-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Intelligent Automation-Potenzial-Bewertung und ROI-Prognosen für KI-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Strategic Evolution-Roadmap mit phasenweiser Transformations-Planung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Technology Stack-Evaluation und Hyperautomation-Plattform-Empfehlungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'KI-Integration und Cognitive Enhancement',
          description: 'Strategische Integration von KI-Technologien in bestehende RPA-Systeme für erweiterte Automatisierungsfähigkeiten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Machine Learning-Integration für adaptive und selbstlernende Automatisierungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Natural Language Processing für Dokumentenverarbeitung und intelligente Textanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Computer Vision und OCR-Enhancement für erweiterte Datenextraktion'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Cognitive Decision-Making für komplexe Business Rules und Exception Handling'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Hyperautomation-Plattform-Migration',
          description: 'Nahtlose Migration von isolierten RPA-Tools zu integrierten Hyperautomation-Plattformen für end-to-end Prozessorchestrierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Platform Consolidation und Integration verschiedener Automatisierungstools'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'End-to-End-Prozessorchestrierung über Systemgrenzen hinweg'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'API-First-Architektur für flexible System-Integration und Skalierbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Low-Code/No-Code-Plattformen für Citizen Developer-Enablement'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Process Mining und Analytics-Integration',
          description: 'Fortschrittliche Process Mining-Technologien für datengetriebene Automatisierungsoptimierung und kontinuierliche Verbesserung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Process Discovery und Event Log-Analyse für Optimierungspotenzial-Identifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Real-time Process Monitoring und Performance-Analytics für kontinuierliche Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Predictive Analytics für proaktive Prozessoptimierung und Exception-Vermeidung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Digital Twin-Implementierung für Prozess-Simulation und Impact-Analyse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'EU AI Act Compliance und Governance',
          description: 'Umfassende Compliance-Frameworks für EU AI Act-konforme KI-Integration in Automatisierungslandschaften.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'EU AI Act Risk Assessment und Compliance-Framework-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'AI Governance und Ethics-Integration für verantwortungsvolle KI-Nutzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Transparency und Explainability-Mechanismen für KI-gestützte Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Continuous Compliance-Monitoring und Audit-Trail-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Change Management und Skill Transformation',
          description: 'Strategisches Change Management für erfolgreiche Transformation von RPA zu Intelligent Automation mit Fokus auf Employee-Enablement.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Organizational Readiness Assessment und Change-Strategie-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Skill Transformation-Programme für RPA-zu-IA-Transition'
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
    transaction.createOrReplace(intelligentAutomationVsRpaData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Automation vs RPA page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
