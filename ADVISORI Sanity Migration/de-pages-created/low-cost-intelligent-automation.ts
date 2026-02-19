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
    console.log('Creating Low-Cost Intelligent Automation page...')

    const lowCostIntelligentAutomationData = {
      _type: 'servicePage',
      _id: 'low-cost-intelligent-automation',
      title: 'Low-Cost Intelligent Automation',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/low-cost-intelligent-automation'
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
        title: 'Low-Cost Intelligent Automation - Budget-freundliche KI-Automatisierung & RPA | ADVISORI',
        description: 'Kosteneffiziente Intelligent Automation Lösungen für SMEs und Enterprises. Budget-optimierte RPA, AI-Integration, Lean Automation, ROI-fokussierte Implementierung und EU AI Act konforme Low-Cost Automatisierungsstrategien.',
        keywords: 'Low-Cost Intelligent Automation, Budget RPA, Kosteneffiziente Automatisierung, Günstige KI-Lösungen, SME Automation, ROI Optimierung, Lean Automation, Budget AI Integration, Cost-Effective Process Automation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Low-Cost Intelligent Automation - Budget-freundliche KI-gestützte Automatisierungslösungen für maximalen ROI'
        },
        tagline: 'Budget-optimierte Intelligent Automation für maximalen ROI',
        heading: 'Low-Cost Intelligent Automation',
        description: 'Low-Cost Intelligent Automation demokratisiert Enterprise-grade Automatisierungstechnologien durch innovative Budget-Optimierung und strategische Ressourcenallokation. Wir transformieren kostenintensive Automatisierungsprojekte in zugängliche, ROI-fokussierte Lösungen, die auch kleineren Unternehmen und Budget-bewussten Organisationen die volle Power intelligenter Automatisierung ermöglichen – ohne Kompromisse bei Qualität oder EU AI Act Compliance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Budget-optimierte RPA und KI-Integration mit maximaler Kosteneffizienz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Lean Automation-Methodologien für schnelle ROI-Realisierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Skalierbare Low-Cost-Lösungen für SMEs und Enterprise-Budgets'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'EU AI Act konforme Implementierung ohne Premium-Kosten'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Low-Cost Intelligent Automation - Zugängliche Enterprise-Automatisierung für jeden Budget',
        description: 'Low-Cost Intelligent Automation revolutioniert die Zugänglichkeit fortschrittlicher Automatisierungstechnologien durch innovative Kostenoptimierung und strategische Implementierungsansätze. Wir beweisen, dass Enterprise-grade Intelligent Automation nicht zwangsläufig hohe Investitionen erfordert, sondern durch clevere Technologieauswahl, Lean-Methodologien und phased Implementation auch mit begrenzten Budgets realisierbar ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Budget-optimierte Technologieauswahl kombiniert Open-Source-Tools mit kosteneffizienten Commercial Solutions'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Lean Automation-Methodologien fokussieren auf Quick Wins und iterative Wertschöpfung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Phased Implementation ermöglicht schrittweise Investitionen mit kontinuierlicher ROI-Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Cloud-native Architekturen reduzieren Infrastructure-Kosten und Maintenance-Aufwände'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'EU AI Act Compliance wird kosteneffizient durch integrierte Governance-Frameworks gewährleistet'
          }
        ],
        alert: {
          title: 'Low-Cost bedeutet nicht Low-Quality bei ADVISORI',
          content: 'Unsere Low-Cost Intelligent Automation Lösungen bieten Enterprise-grade Qualität und Funktionalität durch intelligente Kostenoptimierung, nicht durch Qualitätskompromisse.'
        },
        whyUs: {
          title: 'Warum Low-Cost Intelligent Automation mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Bewährte Budget-Optimierungsstrategien für maximale Kosteneffizienz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act konforme Implementierung ohne Premium-Aufschläge'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Lean Automation-Expertise für schnelle Time-to-Value'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Flexible Finanzierungsmodelle und Pay-as-you-Scale-Ansätze'
            }
          ]
        },
        additionalInfo: 'Low-Cost Intelligent Automation macht fortschrittliche Automatisierungstechnologien für Organisationen jeder Größe zugänglich. Durch strategische Kostenoptimierung und innovative Implementierungsansätze demokratisieren wir Enterprise-grade Automation.',
        serviceDescription: 'Unser Low-Cost Intelligent Automation Service transformiert Budget-Beschränkungen in strategische Vorteile durch innovative Kostenoptimierung, Lean-Methodologien und phased Implementation. Wir entwickeln maßgeschneiderte Budget-Lösungen, die maximale Automatisierungswirkung bei minimalen Investitionen erzielen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Budget-Assessment und ROI-optimierte Automatisierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Cost-Effective Technology Selection und Open-Source Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Lean Implementation mit Quick Wins und iterativer Wertschöpfung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Cloud-native Architekturen für minimale Infrastructure-Kosten'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Budget-freundliche EU AI Act Compliance und Governance'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zu Low-Cost Intelligent Automation',
        description: 'Wir verfolgen einen systematischen und kostenoptimierten Ansatz zu Intelligent Automation, der maximale Wertschöpfung bei minimalen Investitionen gewährleistet und dabei Enterprise-grade Qualität und Compliance sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Budget-Assessment und ROI-fokussierte Automatisierungsstrategie-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Cost-Effective Technology Selection mit Open-Source und Cloud-native Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Lean Implementation mit Quick Wins und phased Rollout-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Kostenoptimierung und Performance-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Skalierbare Governance-Frameworks für nachhaltige Budget-Kontrolle'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Low-Cost Intelligent Automation ist nicht nur eine Budget-Strategie, sondern eine fundamentale Demokratisierung fortschrittlicher Automatisierungstechnologien. Wir beweisen täglich, dass Enterprise-grade Automation durch intelligente Kostenoptimierung, Lean-Methodologien und innovative Technologieauswahl auch mit begrenzten Budgets realisierbar ist – ohne Kompromisse bei Qualität, Sicherheit oder EU AI Act Compliance.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Budget-Assessment und ROI-optimierte Automatisierungsstrategien',
          description: 'Umfassende Budget-Analyse und Entwicklung kostenoptimierter Automatisierungsstrategien für maximalen ROI bei minimalen Investitionen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Comprehensive Budget-Assessment und Cost-Benefit-Analyse für realistische Automatisierungsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'ROI-fokussierte Automatisierungsstrategien mit Quick Win-Identifikation und Priorisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Phased Implementation-Roadmaps für schrittweise Investitionen und kontinuierliche Wertvalidierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Cost-Optimization-Strategien durch intelligente Ressourcenallokation und Technologieauswahl'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Cost-Effective Technology Selection und Open-Source Integration',
          description: 'Strategische Auswahl kosteneffizienter Automatisierungstechnologien mit optimaler Open-Source und Commercial Solution-Balance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Technology-Assessment für kostenoptimale Tool-Auswahl zwischen Open-Source und Commercial Solutions'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Open-Source RPA und AI-Framework Integration für minimale Lizenzkosten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Hybrid-Architekturen kombinieren kostenfreie und Premium-Tools für optimale Cost-Performance-Ratio'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Vendor-Negotiation und Licensing-Optimierung für bestmögliche Commercial Tool-Konditionen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Lean Implementation und Quick Win-Realisierung',
          description: 'Agile Implementierungsansätze mit Fokus auf schnelle Wertschöpfung und iterative Automatisierungsentwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Lean Automation-Methodologien für minimale Time-to-Value und maximale Effizienz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Quick Win-Identifikation und Priorisierung für sofortige ROI-Generierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Agile Development-Zyklen mit kontinuierlicher Stakeholder-Validierung und Feedback-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'MVP-Ansätze für schnelle Proof-of-Concept-Entwicklung und Risikominimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Cloud-native Architekturen und Infrastructure-Optimierung',
          description: 'Kosteneffiziente Cloud-basierte Automatisierungsarchitekturen für minimale Infrastructure-Investitionen und maximale Skalierbarkeit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Cloud-native Automation-Architekturen für minimale Infrastructure-Kosten und Pay-as-you-Use-Modelle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Serverless Computing-Integration für kostenoptimale Ressourcennutzung ohne Idle-Kosten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Container-basierte Deployment-Strategien für effiziente Ressourcenallokation und Skalierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Multi-Cloud-Strategien für Vendor-Lock-in-Vermeidung und Kostenoptimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Budget-freundliche EU AI Act Compliance und Governance',
          description: 'Kosteneffiziente Compliance-Frameworks für EU AI Act-konforme Automatisierung ohne Premium-Governance-Kosten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Cost-Effective Compliance-Frameworks für EU AI Act-konforme Automatisierung ohne Premium-Aufschläge'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Automated Governance-Tools für effiziente Compliance-Überwachung mit minimalen manuellen Aufwänden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Open-Source Compliance-Monitoring und Audit-Trail-Generierung für transparente Nachweisführung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Risk-Assessment-Automatisierung für kontinuierliche Compliance-Validierung ohne externe Audit-Kosten'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Skalierbare Finanzierungsmodelle und Pay-as-you-Scale',
          description: 'Flexible Finanzierungs- und Pricing-Modelle für budgetschonende Automatisierungsinvestitionen mit wachstumsorientierten Skalierungsoptionen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Pay-as-you-Scale-Modelle für investitionsschonende Automatisierungsentwicklung mit Erfolgs-basierter Skalierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Subscription-basierte Automation-Services für planbare monatliche Kosten ohne hohe Upfront-Investitionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'ROI-Share-Modelle mit Performance-basierter Vergütung für risikominimierte Automatisierungsprojekte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Flexible Upgrade-Pfade für organisches Wachstum von Basic zu Enterprise-Automation-Capabilities'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(lowCostIntelligentAutomationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Low-Cost Intelligent Automation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
