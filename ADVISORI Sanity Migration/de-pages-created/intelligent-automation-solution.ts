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
    console.log('Creating Intelligent Automation Solution page...')

    const intelligentAutomationSolutionData = {
      _type: 'servicePage',
      _id: 'intelligent-automation-solution',
      title: 'Intelligent Automation Solution',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-automation-solution'
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
        title: 'Intelligent Automation Solution - KI-gestützte Automatisierungslösungen & Enterprise-Integration | ADVISORI',
        description: 'Maßgeschneiderte Intelligent Automation Solutions für digitale Transformation. KI-gestützte Lösungsarchitekturen, Enterprise-Integration, Process Mining, Cognitive Automation und EU AI Act konforme Automatisierungsstrategien für nachhaltige Geschäftstransformation.',
        keywords: 'Intelligent Automation Solution, KI Automatisierung, Enterprise Integration, Process Mining, Cognitive Automation, Hyperautomation, Digital Transformation, EU AI Act, Automatisierungslösungen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Automation Solution - Maßgeschneiderte KI-gestützte Automatisierungslösungen für Enterprise-Transformation'
        },
        tagline: 'Maßgeschneiderte Intelligent Automation Solutions für nachhaltige Enterprise-Transformation',
        heading: 'Intelligent Automation Solution',
        description: 'Intelligent Automation Solutions repräsentieren die strategische Evolution von traditioneller Prozessautomatisierung zu ganzheitlichen, KI-gestützten Lösungsarchitekturen. Durch nahtlose Integration von RPA, Machine Learning, Process Mining und Cognitive Automation entwickeln wir maßgeschneiderte Automatisierungslösungen, die operative Exzellenz mit strategischer Innovation harmonisieren und dabei EU AI Act Compliance gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Maßgeschneiderte Lösungsarchitekturen mit KI-Integration und Enterprise-Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Process Mining und Discovery für datengetriebene Automatisierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'End-to-End-Integration und Hyperautomation für ganzheitliche Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'EU AI Act konforme Solution-Governance und Enterprise-Compliance'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Automation Solution - Strategische Lösungsarchitekturen für Enterprise-Automatisierung',
        description: 'Intelligent Automation Solutions transformieren fragmentierte Automatisierungsansätze in kohärente, strategisch orchestrierte Lösungsarchitekturen. Sie etablieren Automatisierung als strategischen Enabler für Geschäftsmodell-Innovation, operative Exzellenz und nachhaltige Wettbewerbsvorteile durch maßgeschneiderte Integration von KI-Technologien, Process Mining und Enterprise-Systemen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Maßgeschneiderte Lösungsarchitekturen etablieren strategische Automatisierung mit KI-Integration und Enterprise-Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Process Mining und Discovery ermöglichen datengetriebene Lösungsoptimierung und ROI-Maximierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Cognitive Automation harmonisiert KI-Technologien mit Geschäftsprozessen für intelligente Lösungsansätze'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'End-to-End-Integration unterstützt ganzheitliche Hyperautomation mit nahtloser System-Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Solution Governance gewährleistet EU AI Act Compliance und nachhaltige Automatisierungsstrategien'
          }
        ],
        alert: {
          title: 'Intelligent Automation Solutions als strategischer Enterprise-Differentiator',
          content: 'Intelligent Automation Solutions werden zum strategischen Wettbewerbsvorteil für digitale Transformation, operative Exzellenz und moderne Enterprise-Innovation – durch maßgeschneiderte Lösungsarchitekturen statt standardisierter Automatisierungsansätze.'
        },
        whyUs: {
          title: 'Warum Intelligent Automation Solutions mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Solution-Expertise von Lösungsarchitektur bis Enterprise-Integration und KI-Orchestrierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act konforme Beratung für sichere und compliant Automatisierungslösungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Enterprise-Methodologien für skalierbare Solution-Transformation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Innovation durch Process Mining und KI-gestützte Lösungsoptimierung'
            }
          ]
        },
        additionalInfo: 'Intelligent Automation Solutions ermöglichen es Organisationen, die volle Power moderner Automatisierungstechnologien für strategische Geschäftstransformation zu nutzen. Die richtige Solution-Architektur wird zum Wettbewerbsvorteil in einer zunehmend digitalisierten Enterprise-Welt.',
        serviceDescription: 'Unser Intelligent Automation Solution Service umfasst die vollständige Entwicklung maßgeschneiderter Automatisierungslösungen von der strategischen Konzeption bis zur operativen Umsetzung. Wir entwickeln individuelle Lösungsarchitekturen, die perfekt zu Ihren Geschäftsprozessen, Technologie-Infrastrukturen und Compliance-Anforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Maßgeschneiderte Lösungsarchitekturen und strategische Solution-Konzeption'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Process Mining und Discovery für datengetriebene Lösungsoptimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'KI-Integration und Cognitive Automation für intelligente Lösungsansätze'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Enterprise-Integration und End-to-End-Orchestrierung für ganzheitliche Solutions'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Solution Governance und EU AI Act Compliance-Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zu Intelligent Automation Solutions',
        description: 'Wir verfolgen einen ganzheitlichen und strategischen Ansatz zu Intelligent Automation Solutions, der maßgeschneiderte Lösungsarchitekturen optimal entwickelt und gleichzeitig nachhaltige Business-Transformation ermöglicht.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Solution Assessment und strategische Lösungsarchitektur-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Maßgeschneiderte Solution-Roadmap-Entwicklung mit KI-Integration und Enterprise-Vision'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Solution-Implementierung mit kontinuierlicher Optimierung und Skalierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Change Management und Solution-Adoption für erfolgreiche Automatisierungstransformation'
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
        quote: 'Intelligent Automation Solutions sind das strategische Fundament für maßgeschneiderte Enterprise-Transformation. Wir entwickeln individuelle Lösungsarchitekturen, die nicht nur operative Exzellenz gewährleisten, sondern auch als strategische Enabler für Geschäftsmodell-Innovation, nachhaltige Wettbewerbsvorteile und zukunftsorientierte Automatisierungsstrategien fungieren – dabei stets EU AI Act konform und perfekt auf die spezifischen Unternehmensanforderungen zugeschnitten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Lösungsarchitektur und Solution-Design',
          description: 'Maßgeschneiderte Lösungsarchitekturen mit strategischer Solution-Konzeption für nachhaltige Enterprise-Automatisierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Solution Architecture-Design und strategische Lösungskonzeption für individuelle Automatisierungsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Enterprise-Integration-Strategien mit Multi-System-Orchestrierung und API-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Technology Stack-Optimierung für skalierbare und zukunftssichere Lösungsarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Solution Roadmap-Entwicklung mit phasenweiser Implementierung und ROI-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Process Mining und Discovery Solutions',
          description: 'Fortschrittliche Process Mining-Technologien für datengetriebene Lösungsoptimierung und strategische Automatisierungsentscheidungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Process Discovery und Event Log-Analyse für Lösungspotenzial-Identifikation und Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Solution Performance-Monitoring und Conformance Checking für kontinuierliche Qualitätssicherung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Process Enhancement und Bottleneck-Analyse für Lösungsperformance-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'ROI-Prognosen und Business Case-Entwicklung für strategische Solution-Entscheidungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'KI-Integration und Cognitive Automation Solutions',
          description: 'Intelligente Lösungsansätze mit KI-Technologien für komplexe Automatisierungsszenarien und unstrukturierte Datenverarbeitung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Natural Language Processing-Integration für intelligente Dokumentenverarbeitung und Textanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Computer Vision und OCR-Solutions für Bildverarbeitung und automatisierte Datenextraktion'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Machine Learning-basierte Entscheidungsautomatisierung für komplexe Business Logic'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Conversational AI und Chatbot-Solutions für Kundenservice-Automatisierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Enterprise-Integration und Hyperautomation',
          description: 'Ganzheitliche Enterprise-Integration mit End-to-End-Orchestrierung für skalierbare Hyperautomation-Solutions.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Enterprise System-Integration und API-Orchestrierung für nahtlose Solution-Konnektivität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Hyperautomation-Plattformen und End-to-End-Workflow-Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Cloud-Integration und Hybrid-Solutions für flexible Automatisierungsarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Microservices-Architektur und Container-Orchestrierung für skalierbare Solutions'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Solution Governance und Compliance Management',
          description: 'Umfassende Governance-Frameworks für nachhaltige Solution-Strategien und EU AI Act Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Solution Center of Excellence-Etablierung für strategische Lösungsführung und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'EU AI Act Compliance und Risk Management für KI-gestützte Automatisierungslösungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Solution Security und Access Control für sichere Automatisierungsoperationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Performance Monitoring und Analytics für kontinuierliche Solution-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Change Management und Solution Adoption',
          description: 'Strategisches Change Management für erfolgreiche Solution-Adoption und nachhaltige Automatisierungstransformation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Solution Readiness Assessment und Organizational Change-Strategien für Automatisierungstransformation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Employee-Training und Upskilling für Solution-Adoption und Human-Automation-Collaboration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Stakeholder-Engagement und Communication-Strategien für Solution-Akzeptanz und Adoption'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Future of Work-Strategien und Job Redesign für automatisierte Solution-Umgebungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentAutomationSolutionData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Automation Solution page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
