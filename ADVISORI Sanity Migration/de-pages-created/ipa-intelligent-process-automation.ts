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
    console.log('Creating IPA - Intelligent Process Automation page...')

    const ipaIntelligentProcessAutomationData = {
      _type: 'servicePage',
      _id: 'ipa-intelligent-process-automation',
      title: 'IPA - Intelligent Process Automation',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/ipa-intelligent-process-automation'
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
        title: 'IPA - Intelligent Process Automation | KI-gestützte Prozessautomatisierung & RPA | ADVISORI',
        description: 'Professionelle IPA - Intelligent Process Automation Services. KI-gestützte RPA, Process Mining, Cognitive Automation, Document Processing und EU AI Act konforme Prozessautomatisierung für Enterprise-Excellence.',
        keywords: 'IPA, Intelligent Process Automation, RPA, Process Mining, Cognitive Automation, Document Processing, KI Prozessautomatisierung, EU AI Act, Enterprise Automation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IPA - Intelligent Process Automation - KI-gestützte Prozessautomatisierung für Enterprise-Transformation'
        },
        tagline: 'IPA - Intelligent Process Automation für prozesszentrierte Enterprise-Excellence',
        heading: 'IPA - Intelligent Process Automation',
        description: 'IPA - Intelligent Process Automation repräsentiert die Evolution von traditioneller RPA zu strategischen, KI-gestützten Prozessautomatisierungslösungen. Durch nahtlose Integration von Process Mining, Cognitive Automation, Document Processing und Machine Learning schaffen wir end-to-end automatisierte Geschäftsprozesse, die operative Exzellenz mit strategischer Innovation harmonisieren und dabei EU AI Act Compliance gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'End-to-End Process Automation mit KI-Integration und Cognitive Capabilities'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Process Mining und Discovery für datengetriebene Automatisierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Intelligent Document Processing und OCR für unstrukturierte Datenverarbeitung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'EU AI Act konforme IPA-Governance und Enterprise-Compliance'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'IPA - Intelligent Process Automation für strategische Prozessexzellenz und Enterprise-Transformation',
        description: 'IPA - Intelligent Process Automation transformiert traditionelle, manuelle Geschäftsprozesse in intelligente, selbstlernende Automatisierungsökosysteme. Sie etabliert Prozessautomatisierung als strategischen Enabler für operative Exzellenz, der nicht nur Effizienz maximiert, sondern auch als Katalysator für Geschäftsmodell-Innovation, Employee Empowerment und nachhaltige Wettbewerbsvorteile fungiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'End-to-End Process Automation etabliert durchgängige, intelligente Workflows mit KI-Integration und Cognitive Capabilities'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Process Mining und Discovery ermöglichen datengetriebene Prozessoptimierung und ROI-Maximierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Intelligent Document Processing verarbeitet unstrukturierte Dokumente mit OCR und NLP-Technologien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Cognitive Decision Automation ermöglicht intelligente Entscheidungsfindung in komplexen Geschäftsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'IPA-Governance gewährleistet EU AI Act Compliance und nachhaltige Prozessautomatisierungsstrategien'
          }
        ],
        alert: {
          title: 'IPA als strategischer Prozessexzellenz-Differentiator',
          content: 'IPA - Intelligent Process Automation wird zum strategischen Wettbewerbsvorteil für prozesszentrierte Transformation, operative Exzellenz und moderne Enterprise-Innovation – weit über traditionelle RPA-Ansätze hinaus.'
        },
        whyUs: {
          title: 'Warum IPA - Intelligent Process Automation mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende IPA-Expertise von Process Mining bis Cognitive Automation und KI-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act konforme Beratung für sichere und compliant Prozessautomatisierungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Enterprise-Methodologien für skalierbare IPA-Transformation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Innovation durch Process Analytics und KI-gestützte Optimierung'
            }
          ]
        },
        additionalInfo: 'IPA - Intelligent Process Automation ermöglicht es Organisationen, die volle Power moderner Prozessautomatisierungstechnologien für strategische Geschäftstransformation zu nutzen. Die richtige IPA-Strategie wird zum Wettbewerbsvorteil in einer zunehmend prozessorientierten Enterprise-Welt.',
        serviceDescription: 'Unser IPA - Intelligent Process Automation Service umfasst die vollständige Transformation von manuellen Geschäftsprozessen zu strategischen KI-gestützten Automatisierungsökosystemen. Wir entwickeln maßgeschneiderte IPA-Strategien, die perfekt zu Ihren Prozesslandschaften, Technologie-Infrastrukturen und Compliance-Anforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'End-to-End Process Automation und intelligente Workflow-Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Process Mining und Discovery für datengetriebene Automatisierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Intelligent Document Processing und OCR für unstrukturierte Datenverarbeitung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Cognitive Decision Automation für komplexe Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'IPA-Governance und EU AI Act Compliance-Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zu IPA - Intelligent Process Automation',
        description: 'Wir verfolgen einen ganzheitlichen und strategischen Ansatz zu IPA - Intelligent Process Automation, der moderne Prozessautomatisierungstechnologien optimal nutzt und gleichzeitig nachhaltige Business-Transformation ermöglicht.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Process Assessment und IPA-Potenzial-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategic IPA-Roadmap-Entwicklung mit KI-Integration und Process-Vision'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise IPA-Implementierung mit kontinuierlicher Optimierung und Skalierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Change Management und Process-Enablement für erfolgreiche IPA-Adoption'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige IPA-Evolution durch Monitoring, Analytics und KI-Enhancement'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'IPA - Intelligent Process Automation ist das strategische Fundament für moderne prozesszentrierte Transformation. Wir entwickeln ganzheitliche Prozessautomatisierungsökosysteme, die nicht nur operative Exzellenz gewährleisten, sondern auch als strategische Enabler für Geschäftsmodell-Innovation, Process Excellence und nachhaltige Wettbewerbsvorteile fungieren – dabei stets EU AI Act konform und zukunftsorientiert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'End-to-End Process Automation und Workflow-Orchestrierung',
          description: 'Umfassende End-to-End Prozessautomatisierung mit intelligenter Workflow-Orchestrierung für strategische Enterprise-Transformation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Process Automation-Architektur und End-to-End-Integration für ganzheitliche Prozessökosysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Intelligent Workflow-Orchestrierung mit Multi-System-Integration und Process-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Business Process Management-Plattformen für agile Prozessentwicklung und -optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'API-First-Prozessarchitektur und Microservices-Integration für flexible Automatisierungslandschaften'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Process Mining und Discovery Solutions',
          description: 'Fortschrittliche Process Mining-Technologien für datengetriebene Prozessoptimierung und IPA-Strategieentwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Process Discovery und Event Log-Analyse für Automatisierungspotenzial-Identifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Process Conformance Checking und Compliance-Monitoring für Qualitätssicherung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Process Enhancement und Bottleneck-Analyse für Performance-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Process Analytics und ROI-Prognosen für strategische Automatisierungsentscheidungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Intelligent Document Processing und OCR-Integration',
          description: 'Intelligente Dokumentenverarbeitung mit OCR, NLP und KI-Technologien für unstrukturierte Datenautomatisierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Optical Character Recognition und Document Capture für automatisierte Datenextraktion'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Natural Language Processing für intelligente Textanalyse und Dokumentenklassifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Machine Learning-basierte Dokumentenverarbeitung für komplexe Datenstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Document Workflow Automation für end-to-end Dokumentenprozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Cognitive Decision Automation und KI-Integration',
          description: 'Intelligente Entscheidungsautomatisierung mit KI-Technologien für komplexe Geschäftsprozesse und Cognitive Computing.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Decision Engine-Integration für automatisierte Geschäftsregeln und komplexe Entscheidungslogik'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Machine Learning-basierte Entscheidungsfindung für adaptive Prozessautomatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Predictive Analytics und Forecasting für proaktive Prozesssteuerung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Cognitive Computing-Integration für intelligente Prozessoptimierung und -anpassung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'IPA-Governance und Compliance Management',
          description: 'Umfassende Governance-Frameworks für nachhaltige IPA-Strategien und EU AI Act Compliance in der Prozessautomatisierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'IPA Center of Excellence-Etablierung für strategische Prozessautomatisierungsführung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'EU AI Act Compliance und Risk Management für KI-gestützte Prozessautomatisierungssysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Process Security und Access Control für sichere Automatisierungsoperationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Performance Monitoring und Process Analytics für kontinuierliche IPA-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Change Management und IPA-Adoption',
          description: 'Strategisches Change Management für erfolgreiche IPA-Adoption und Process-Enablement in der Organisation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'IPA Readiness Assessment und Organizational Change-Strategien für Prozessautomatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Employee-Training und Upskilling für Human-Process-Automation-Collaboration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Stakeholder-Engagement und Communication-Strategien für IPA-Akzeptanz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Process Excellence-Strategien und Job Redesign für automatisierte Prozessumgebungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(ipaIntelligentProcessAutomationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IPA - Intelligent Process Automation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
