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
    console.log('Creating Intelligent Process Automation Service page...')

    const intelligentProcessAutomationServiceData = {
      _type: 'servicePage',
      _id: 'intelligent-process-automation-service',
      title: 'Intelligent Process Automation Service',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-process-automation-service'
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
        title: 'Intelligent Process Automation Service - IPA & KI-gestützte Prozessoptimierung | ADVISORI',
        description: 'Professioneller Intelligent Process Automation Service für strategische Prozessexzellenz. IPA-Implementierung, Process Mining, Workflow-Automatisierung, Business Process Management und EU AI Act konforme Prozessautomatisierung.',
        keywords: 'Intelligent Process Automation Service, IPA Service, Process Mining, Workflow Automation, Business Process Management, BPM Service, Prozessautomatisierung, Digital Process Excellence, EU AI Act, Process Optimization Service'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Process Automation Service - IPA und KI-gestützte Prozessoptimierung für strategische Prozessexzellenz'
        },
        tagline: 'Intelligent Process Automation Service für strategische Prozessführerschaft',
        heading: 'Intelligent Process Automation Service',
        description: 'Unser Intelligent Process Automation Service transformiert traditionelle Geschäftsprozesse in strategisch orchestrierte, KI-gestützte Automatisierungsökosysteme. Durch nahtlose Integration von Process Mining, Workflow-Automatisierung, Business Process Management und Cognitive Computing schaffen wir prozesszentrierte Automatisierungslösungen, die operative Exzellenz mit strategischer Innovation optimal vereinen und dabei EU AI Act Compliance gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Process Mining und Discovery für datengetriebene Prozessanalyse und Automatisierungspotenzial-Identifikation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Workflow-Automatisierung und Business Process Management für end-to-end Prozessorchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'KI-gestützte Prozessoptimierung mit Machine Learning und Predictive Analytics Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'EU AI Act konforme Process Governance und Compliance-Management für sichere Automatisierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Process Automation Service - Strategic Process Excellence für moderne Enterprise-Transformation',
        description: 'Unser Intelligent Process Automation Service ist das strategische Fundament für prozesszentrierte digitale Transformation. Wir transformieren fragmentierte, manuelle Geschäftsprozesse in kohärente, KI-gestützte Automatisierungsökosysteme, die nicht nur operative Effizienz maximieren, sondern auch als strategische Enabler für Prozessexzellenz, Geschäftsmodell-Innovation und nachhaltige Wettbewerbsvorteile fungieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Process Mining und Discovery ermöglichen datengetriebene Prozessanalyse und Automatisierungspotenzial-Identifikation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Workflow-Automatisierung etabliert intelligente Prozessorchestrierung mit dynamischer Anpassungsfähigkeit'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Business Process Management harmonisiert Prozessdesign mit Automatisierungstechnologien für optimale Performance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'KI-gestützte Prozessoptimierung nutzt Machine Learning für kontinuierliche Verbesserung und Anpassung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Process Governance gewährleistet EU AI Act Compliance und nachhaltige Automatisierungsstrategien'
          }
        ],
        alert: {
          title: 'Intelligent Process Automation Service als strategischer Process-Excellence-Accelerator',
          content: 'Unser Intelligent Process Automation Service wird zum strategischen Differentiator für prozesszentrierte digitale Transformation, operative Exzellenz und moderne Enterprise-Innovation – weit über traditionelle Workflow-Automatisierung hinaus.'
        },
        whyUs: {
          title: 'Warum Intelligent Process Automation Service mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende IPA-Service-Expertise von Process Mining bis KI-gestützte Prozessoptimierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act konforme Beratung für sichere und compliant Prozessautomatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Process Excellence-Methodologien für skalierbare Enterprise-Transformation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Innovation durch Process Analytics und KI-gestützte Optimierung'
            }
          ]
        },
        additionalInfo: 'Unser Intelligent Process Automation Service ermöglicht es Organisationen, die volle Power moderner Prozessautomatisierung für strategische Geschäftstransformation zu nutzen. Die richtige IPA-Service-Strategie wird zum Wettbewerbsvorteil in einer zunehmend prozessorientierten Enterprise-Welt.',
        serviceDescription: 'Unser Intelligent Process Automation Service umfasst die vollständige Transformation von manuellen Prozesslandschaften zu strategischen KI-gestützten Automatisierungsökosystemen. Wir entwickeln maßgeschneiderte IPA-Service-Strategien, die perfekt zu Ihren Geschäftsprozessen, Technologie-Infrastrukturen und Compliance-Anforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Process Mining und Discovery für datengetriebene Prozessanalyse und Optimierungspotenzial-Identifikation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Workflow-Automatisierung und Business Process Management für intelligente Prozessorchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'KI-gestützte Prozessoptimierung mit Machine Learning und Predictive Analytics'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Process Governance und EU AI Act Compliance-Management für sichere Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Change Management und Process Adoption für erfolgreiche Transformationsbegleitung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zu Intelligent Process Automation Service',
        description: 'Wir verfolgen einen ganzheitlichen und prozesszentrierten Ansatz zu Intelligent Process Automation Service, der moderne Automatisierungstechnologien optimal nutzt und gleichzeitig strategische Process Excellence ermöglicht.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Process Discovery und Automatisierungspotenzial-Assessment durch fortschrittliche Analytics'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategic Process Automation-Roadmap-Entwicklung mit IPA-Vision und Business Alignment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise IPA-Service-Implementierung mit kontinuierlicher Optimierung und Performance-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Change Management und Process Adoption für nachhaltige Transformationsbegleitung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Process Evolution durch Analytics, KI-Enhancement und Performance-Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Unser Intelligent Process Automation Service ist das strategische Fundament für prozesszentrierte digitale Transformation. Wir transformieren fragmentierte manuelle Geschäftsprozesse in strategisch orchestrierte KI-gestützte Automatisierungsökosysteme, die nicht nur operative Prozessexzellenz gewährleisten, sondern auch als strategische Enabler für Geschäftsmodell-Innovation, Workflow-Optimierung und nachhaltige Wettbewerbsvorteile fungieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Process Mining und Discovery Service',
          description: 'Fortschrittliche Process Mining-Technologien für datengetriebene Prozessanalyse, Bottleneck-Identifikation und Automatisierungspotenzial-Assessment.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Event Log-Analyse und Process Discovery für vollständige Prozesstransparenz und Optimierungspotenziale'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Conformance Checking und Process Compliance-Monitoring für Qualitätssicherung und Regelkonformität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Process Enhancement und Bottleneck-Identifikation für Performance-Optimierung und Effizienzsteigerung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Automation Opportunity Assessment und ROI-Prognosen für strategische Automatisierungsentscheidungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Workflow-Automatisierung und BPM-Integration Service',
          description: 'Intelligente Workflow-Automatisierung mit Business Process Management für end-to-end Prozessorchestrierung und dynamische Anpassungsfähigkeit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Workflow Design und Automatisierung für optimierte Geschäftsprozesse und Durchlaufzeit-Verbesserung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Business Process Management-Integration für ganzheitliche Prozesssteuerung und -überwachung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Dynamic Process Adaptation und Exception Handling für flexible Geschäftsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Process Orchestration und Multi-System-Integration für nahtlose Enterprise-Workflows'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'KI-gestützte Prozessoptimierung und Analytics Service',
          description: 'Machine Learning-basierte Prozessoptimierung mit Predictive Analytics für kontinuierliche Verbesserung und intelligente Entscheidungsunterstützung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Machine Learning-basierte Prozessanalyse für Pattern Recognition und Optimierungspotenzial-Identifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Predictive Process Analytics für proaktive Problemerkennung und Performance-Vorhersage'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Intelligent Decision Support für komplexe Geschäftsentscheidungen und Prozessoptimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Continuous Process Learning und Adaptive Optimization für selbstverbessernde Automatisierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Process Integration und Enterprise-Connectivity Service',
          description: 'Umfassende Prozessintegration mit Enterprise-Systemen und Cloud-Services für nahtlose Automatisierungslandschaften.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Enterprise System Integration für nahtlose Prozessautomatisierung über Systemgrenzen hinweg'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'API-Integration und Microservices-Architektur für flexible und skalierbare Prozesslandschaften'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Cloud-Integration und Hybrid Process Management für moderne IT-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Data Integration und Process Data Management für konsistente Informationsflüsse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Process Governance und Compliance Management Service',
          description: 'Umfassende Process Governance-Frameworks für nachhaltige Automatisierungsstrategien und EU AI Act Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Process Center of Excellence-Etablierung für strategische Prozessführung und Best Practice-Sharing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'EU AI Act Compliance und Risk Management für KI-gestützte Prozessautomatisierungssysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Process Security und Access Control für sichere und kontrollierte Automatisierungsumgebungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Performance Monitoring und Process Analytics für kontinuierliche Optimierung und Compliance-Nachweis'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Change Management und Process Adoption Service',
          description: 'Strategisches Change Management für erfolgreiche IPA-Adoption und nachhaltige Prozessexzellenz in digitalen Transformationsprozessen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Process Readiness Assessment und Organizational Change-Strategien für erfolgreiche IPA-Einführung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Mitarbeiter-Training und Process Upskilling für optimale Mensch-Prozess-Automatisierung-Collaboration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Stakeholder-Engagement und Communication-Strategien für Process Automation-Akzeptanz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Process Excellence Culture-Entwicklung und Continuous Improvement-Etablierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentProcessAutomationServiceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Process Automation Service page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
