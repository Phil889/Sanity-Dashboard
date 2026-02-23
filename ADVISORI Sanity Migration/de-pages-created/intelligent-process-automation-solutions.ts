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
    console.log('Creating Intelligent Process Automation Solutions page...')

    const intelligentProcessAutomationSolutionsData = {
      _type: 'servicePage',
      _id: 'intelligent-process-automation-solutions',
      title: 'Intelligent Process Automation Solutions',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-process-automation-solutions'
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
        title: 'Intelligent Process Automation Solutions - KI-gestützte Prozessautomatisierung & IPA | ADVISORI',
        description: 'Professionelle Intelligent Process Automation Solutions für digitale Transformation. End-to-End IPA, Cognitive Automation, Process Mining, RPA-Integration und EU AI Act konforme Prozessoptimierung für Enterprise-Excellence.',
        keywords: 'Intelligent Process Automation, IPA Solutions, Cognitive Automation, Process Mining, RPA Integration, KI Prozessautomatisierung, Digital Transformation, EU AI Act, Enterprise Process Optimization'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Process Automation Solutions - Professionelle KI-gestützte Prozessautomatisierung für Enterprise-Transformation'
        },
        tagline: 'Professional Intelligent Process Automation Solutions für Enterprise-Excellence',
        heading: 'Intelligent Process Automation Solutions',
        description: 'Intelligent Process Automation Solutions transformieren traditionelle Geschäftsprozesse durch strategische Integration von KI-Technologien, Cognitive Automation und intelligenter Prozessorchestrierung. Wir entwickeln end-to-end IPA-Lösungen, die operative Exzellenz mit strategischer Innovation harmonisieren und dabei EU AI Act Compliance gewährleisten – für nachhaltige Prozessoptimierung und Wettbewerbsvorteile.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'End-to-End IPA-Lösungen mit KI-Integration und intelligenter Prozessorchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Cognitive Automation für komplexe Entscheidungsprozesse und unstrukturierte Daten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Process Mining und Discovery für datengetriebene Prozessoptimierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'EU AI Act konforme IPA-Governance und Enterprise-Compliance-Management'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Process Automation Solutions - Comprehensive IPA-Transformation für strategische Prozessexzellenz',
        description: 'Intelligent Process Automation Solutions etablieren eine neue Dimension der Prozessautomatisierung, die weit über traditionelle RPA hinausgeht. Sie integrieren KI-Technologien nahtlos in Geschäftsprozesse und schaffen intelligente, adaptive Automatisierungsökosysteme, die nicht nur operative Effizienz maximieren, sondern auch als strategische Enabler für Geschäftsmodell-Innovation und nachhaltige Wettbewerbsvorteile fungieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'End-to-End IPA-Architektur ermöglicht ganzheitliche Prozessautomatisierung mit KI-Integration und intelligenter Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Cognitive Automation verarbeitet unstrukturierte Daten und komplexe Entscheidungsszenarien durch Machine Learning'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Process Mining und Discovery identifizieren Automatisierungspotenziale und optimieren kontinuierlich Prozessperformance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'RPA-Integration erweitert bestehende Automatisierungslösungen um intelligente KI-Fähigkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'IPA-Governance gewährleistet EU AI Act Compliance und nachhaltige Prozessautomatisierungsstrategien'
          }
        ],
        alert: {
          title: 'Intelligent Process Automation als strategischer Enterprise-Differentiator',
          content: 'Intelligent Process Automation Solutions werden zum entscheidenden Wettbewerbsvorteil für moderne Unternehmen – sie ermöglichen nicht nur operative Exzellenz, sondern auch strategische Geschäftstransformation durch intelligente Prozessautomatisierung.'
        },
        whyUs: {
          title: 'Warum Intelligent Process Automation Solutions mit ADVISORI',
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
        additionalInfo: 'Intelligent Process Automation Solutions ermöglichen es Organisationen, die volle Power moderner KI-Technologien für strategische Prozessoptimierung zu nutzen. Die richtige IPA-Strategie wird zum Wettbewerbsvorteil in einer zunehmend digitalisierten Enterprise-Welt.',
        serviceDescription: 'Unser Intelligent Process Automation Solutions Service umfasst die vollständige Transformation von manuellen Prozesslandschaften zu intelligenten, KI-gestützten Automatisierungsökosystemen. Wir entwickeln maßgeschneiderte IPA-Strategien, die perfekt zu Ihren Geschäftsprozessen, Technologie-Infrastrukturen und Compliance-Anforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'End-to-End IPA-Architektur und intelligente Prozessorchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Cognitive Automation und Machine Learning-Integration für komplexe Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Process Mining und Discovery für datengetriebene Optimierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'RPA-Integration und Hyperautomation-Plattform-Entwicklung'
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
        title: 'Unser Ansatz zu Intelligent Process Automation Solutions',
        description: 'Wir verfolgen einen ganzheitlichen und strategischen Ansatz zu Intelligent Process Automation Solutions, der moderne KI-Technologien optimal nutzt und gleichzeitig nachhaltige Prozessexzellenz ermöglicht.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Process Assessment und IPA-Potenzial-Analyse für strategische Automatisierungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategic IPA-Roadmap-Entwicklung mit KI-Integration und Enterprise-Vision'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Solution-Implementierung mit kontinuierlicher Optimierung und Skalierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Change Management und Employee-Enablement für erfolgreiche IPA-Adoption'
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
        quote: 'Intelligent Process Automation Solutions sind das strategische Fundament für moderne Prozessexzellenz. Wir entwickeln ganzheitliche IPA-Ökosysteme, die nicht nur operative Effizienz gewährleisten, sondern auch als strategische Enabler für Geschäftsmodell-Innovation und nachhaltige Wettbewerbsvorteile fungieren – dabei stets EU AI Act konform und zukunftsorientiert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'End-to-End IPA-Architektur und Prozessorchestrierung',
          description: 'Umfassende IPA-Lösungen mit intelligenter Prozessorchestrierung für ganzheitliche Enterprise-Automatisierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'IPA-Architektur-Design und Plattform-Integration für intelligente Prozessautomatisierungsökosysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'End-to-End-Prozessorchestrierung mit Multi-System-Integration und Workflow-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Intelligent Process Routing und Dynamic Workflow-Anpassung basierend auf KI-Entscheidungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'API-First-Architektur und Microservices-Integration für flexible IPA-Landschaften'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Cognitive Automation und Machine Learning-Integration',
          description: 'Intelligente Automatisierungslösungen mit KI-Technologien für komplexe Entscheidungsprozesse und unstrukturierte Datenverarbeitung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Natural Language Processing für Dokumentenverarbeitung und intelligente Textanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Computer Vision und OCR-Integration für Bildverarbeitung und Datenextraktion'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Machine Learning-basierte Entscheidungsautomatisierung für komplexe Business Rules'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Predictive Analytics und Anomalie-Erkennung für proaktive Prozessoptimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Process Mining und Discovery Solutions',
          description: 'Fortschrittliche Process Mining-Technologien für datengetriebene IPA-Strategien und kontinuierliche Prozessoptimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Process Discovery und Event Log-Analyse für IPA-Potenzial-Identifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Conformance Checking und Process Compliance-Monitoring für Qualitätssicherung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Process Enhancement und Bottleneck-Analyse für Performance-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'ROI-Prognosen und Business Case-Entwicklung für strategische IPA-Entscheidungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'RPA-Integration und Hyperautomation-Plattformen',
          description: 'Professionelle RPA-Integration mit intelligenter Bot-Orchestrierung für skalierbare IPA-Lösungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'RPA-Plattform-Integration und IPA-Erweiterung für bestehende Automatisierungslandschaften'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Intelligent Bot-Development und KI-erweiterte Workflow-Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Hyperautomation-Plattformen für umfassende Enterprise-Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Bot-Orchestrierung und Intelligent Scheduling für optimale Ressourcennutzung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'IPA-Governance und Compliance Management',
          description: 'Umfassende Governance-Frameworks für nachhaltige IPA-Strategien und EU AI Act Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'IPA Center of Excellence-Etablierung für strategische Automatisierungsführung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'EU AI Act Compliance und Risk Management für KI-gestützte IPA-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'IPA Security und Access Control für sichere Prozessautomatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Performance Monitoring und Analytics für kontinuierliche IPA-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Change Management und Solution Adoption',
          description: 'Strategisches Change Management für erfolgreiche IPA Solution-Adoption und Employee-Enablement.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'IPA Readiness Assessment und Organizational Change-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Employee-Training und Upskilling für Human-IPA-Collaboration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Stakeholder-Engagement und Communication-Strategien für Solution-Akzeptanz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Future of Work-Strategien und Job Redesign für IPA-optimierte Arbeitsumgebungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentProcessAutomationSolutionsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Process Automation Solutions page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
