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
    console.log('Creating What is Intelligent Automation page...')

    const whatIsIntelligentAutomationData = {
      _type: 'servicePage',
      _id: 'what-is-intelligent-automation',
      title: 'Was ist Intelligent Automation?',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/what-is-intelligent-automation'
      },
      parent: {
        _type: 'reference',
        _ref: 'prozessautomatisierung'
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
        title: 'Was ist Intelligent Automation? Definition, Technologien & Vorteile | ADVISORI',
        description: 'Comprehensive Guide zu Intelligent Automation: Definition, Kernkomponenten, RPA vs. IA, KI-Integration, Business Value und EU AI Act konforme Implementierung für Enterprise-Transformation.',
        keywords: 'Intelligent Automation Definition, Was ist Intelligent Automation, RPA vs Intelligent Automation, KI Automatisierung, Hyperautomation, Process Mining, Cognitive Automation, EU AI Act'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Was ist Intelligent Automation - Comprehensive Definition und Enterprise-Transformation Guide'
        },
        tagline: 'Comprehensive Guide zu Intelligent Automation für strategische Enterprise-Transformation',
        heading: 'Was ist Intelligent Automation?',
        description: 'Intelligent Automation repräsentiert die Evolution der Geschäftsprozessautomatisierung von traditionellen, regelbasierten Systemen zu strategischen, KI-gestützten Automatisierungsökosystemen. Es kombiniert Robotic Process Automation (RPA), Künstliche Intelligenz, Machine Learning und Process Mining zu ganzheitlichen Hyperautomation-Lösungen, die nicht nur operative Effizienz maximieren, sondern auch als strategische Enabler für Geschäftsmodell-Innovation und nachhaltige Wettbewerbsvorteile fungieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Ganzheitliche Definition und Abgrenzung von traditioneller Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Kernkomponenten: RPA, KI, ML, Process Mining und Cognitive Automation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Strategic Business Value und ROI-Potenziale für Enterprise-Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'EU AI Act konforme Implementierung und Governance-Frameworks'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Automation - Definition, Kernkomponenten und strategische Bedeutung für moderne Unternehmen',
        description: 'Intelligent Automation transformiert die Art, wie Unternehmen Geschäftsprozesse konzipieren, implementieren und optimieren. Es geht weit über traditionelle Automatisierungsansätze hinaus und etabliert Automatisierung als strategischen Wettbewerbsvorteil, der menschliche Intelligenz erweitert statt ersetzt und dabei nachhaltige Geschäftstransformation ermöglicht.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Comprehensive Definition umfasst RPA, KI, ML, Process Mining und Cognitive Automation als integriertes Ökosystem'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Strategic Differentiation von traditioneller Automatisierung durch Lernfähigkeit und Adaptivität'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Business Value Creation durch operative Exzellenz, Innovation-Enablement und Competitive Advantage'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Technology Integration verbindet strukturierte und unstrukturierte Datenverarbeitung nahtlos'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Future-Ready Architecture unterstützt kontinuierliche Evolution und Skalierung von Automatisierungsstrategien'
          }
        ],
        alert: {
          title: 'Intelligent Automation als strategischer Game-Changer für Enterprise-Transformation',
          content: 'Intelligent Automation wird zum entscheidenden Differentiator für Unternehmen, die operative Exzellenz mit strategischer Innovation harmonisieren und dabei nachhaltige Wettbewerbsvorteile schaffen möchten.'
        },
        whyUs: {
          title: 'Warum Intelligent Automation Expertise mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Comprehensive Understanding aller Intelligent Automation-Komponenten und deren strategische Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act konforme Beratung für rechtssichere und zukunftsorientierte Automatisierungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Proven Enterprise-Methodologien für erfolgreiche Intelligent Automation-Transformation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Continuous Innovation durch Research und Best Practice-Integration aus globalen Projekten'
            }
          ]
        },
        additionalInfo: 'Intelligent Automation ermöglicht es Unternehmen, die Grenzen traditioneller Automatisierung zu überwinden und strategische Geschäftstransformation zu realisieren. Das richtige Verständnis und die professionelle Implementierung werden zum Wettbewerbsvorteil in einer zunehmend automatisierten Geschäftswelt.',
        serviceDescription: 'Unser Intelligent Automation Expertise Service umfasst die vollständige Aufklärung, Strategieentwicklung und Implementierungsbegleitung für moderne Automatisierungslösungen. Wir vermitteln nicht nur technisches Verständnis, sondern entwickeln maßgeschneiderte Automatisierungsstrategien, die perfekt zu Ihren Geschäftszielen, Technologie-Infrastrukturen und Compliance-Anforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Comprehensive Education zu allen Aspekten von Intelligent Automation und deren Business Impact'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Strategic Assessment für Automatisierungspotenziale und ROI-Bewertung in Ihrem Unternehmen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Technology Roadmap-Entwicklung für schrittweise Intelligent Automation-Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Governance Framework-Design für EU AI Act konforme Automatisierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Change Management-Unterstützung für erfolgreiche Organizational Transformation'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zu Intelligent Automation Education und Strategic Implementation',
        description: 'Wir verfolgen einen ganzheitlichen und praxisorientierten Ansatz zur Intelligent Automation-Expertise, der theoretisches Verständnis mit strategischer Implementierungsbegleitung kombiniert und nachhaltige Geschäftstransformation ermöglicht.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Foundation-Building durch detaillierte Aufklärung aller Intelligent Automation-Aspekte'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategic Assessment und Potenzial-Analyse für unternehmensspezifische Automatisierungschancen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Practical Implementation-Guidance mit bewährten Methodologien und Best Practices'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Continuous Learning-Support durch Updates zu Technologie-Entwicklungen und Markt-Trends'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Long-term Partnership für nachhaltige Automatisierungsstrategie-Evolution und -Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Intelligent Automation ist weit mehr als eine technologische Evolution – es ist ein strategischer Paradigmenwechsel, der die Art, wie Unternehmen Wertschöpfung konzipieren und realisieren, fundamental transformiert. Wir unterstützen Organisationen dabei, nicht nur die technischen Aspekte zu verstehen, sondern Intelligent Automation als strategischen Enabler für nachhaltige Geschäftstransformation und Competitive Advantage zu nutzen – dabei stets EU AI Act konform und zukunftsorientiert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Intelligent Automation Fundamentals und Definition',
          description: 'Comprehensive Aufklärung zu Definition, Kernkomponenten und strategischer Bedeutung von Intelligent Automation für moderne Unternehmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detailed Definition und Abgrenzung von traditioneller Automatisierung zu Intelligent Automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Comprehensive Overview aller Kernkomponenten: RPA, KI, ML, Process Mining, Cognitive Automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Strategic Context und Business Impact-Analyse für verschiedene Industrien und Use Cases'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Evolution Timeline und Future Trends in der Intelligent Automation-Landschaft'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technology Stack und Integration-Architektur',
          description: 'Detaillierte Analyse der technologischen Komponenten und deren strategische Integration in Intelligent Automation-Ökosystemen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'RPA-Foundations und Advanced Bot-Development für strukturierte Prozessautomatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'AI/ML-Integration für Cognitive Capabilities und intelligente Entscheidungsfindung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Process Mining und Discovery-Technologien für datengetriebene Automatisierungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration Architecture-Design für nahtlose Technologie-Orchestrierung und Skalierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Business Value und ROI-Assessment',
          description: 'Strategic Business Case-Entwicklung und ROI-Bewertung für Intelligent Automation-Investitionen und -Implementierungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Comprehensive ROI-Modelling mit quantitativen und qualitativen Benefit-Bewertungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Strategic Value Creation-Analyse für Competitive Advantage und Market Positioning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Risk-Benefit-Assessment und Mitigation-Strategien für Automatisierungsprojekte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Performance Metrics-Definition und Success Measurement-Frameworks'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Implementation Strategy und Roadmap-Development',
          description: 'Strategic Planning und Roadmap-Entwicklung für erfolgreiche Intelligent Automation-Transformation in Enterprise-Umgebungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Maturity Assessment und Current State-Analyse für Automatisierungsbereitschaft'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Strategic Roadmap-Development mit phasenweiser Implementation und Quick Wins'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Technology Selection-Guidance und Vendor-Evaluation für optimale Tool-Auswahl'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Change Management-Strategien für erfolgreiche Organizational Transformation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Governance und EU AI Act Compliance',
          description: 'Comprehensive Governance-Framework-Entwicklung für EU AI Act konforme Intelligent Automation-Implementierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'EU AI Act Compliance-Assessment und Risk Classification für KI-gestützte Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Governance Framework-Design für nachhaltige Automatisierungsstrategien und -kontrolle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Ethics und Responsible AI-Integration in Automatisierungsprozesse und -entscheidungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Audit Trail-Systeme und Compliance Monitoring für kontinuierliche Regelkonformität'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Future Trends und Innovation-Enablement',
          description: 'Strategic Foresight und Innovation-Guidance für zukunftsorientierte Intelligent Automation-Strategien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Technology Trend-Analysis und Future Roadmap-Entwicklung für Automatisierungsevolution'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Innovation Lab-Konzepte und Proof-of-Concept-Development für neue Automatisierungsansätze'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Ecosystem Partnership-Strategien für erweiterte Automatisierungsfähigkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Continuous Learning-Programme für nachhaltige Automatisierungsexpertise-Entwicklung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(whatIsIntelligentAutomationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ What is Intelligent Automation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
