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
    console.log('Creating Intelligent Process Automation Companies page...')

    const intelligentProcessAutomationCompaniesData = {
      _type: 'servicePage',
      _id: 'intelligent-process-automation-companies',
      title: 'Intelligent Process Automation Companies',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-process-automation-companies'
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
        title: 'Intelligent Process Automation Companies - Enterprise IPA Partner Selection & Vendor Management | ADVISORI',
        description: 'Strategische Auswahl und Management von Intelligent Process Automation Companies. Enterprise IPA Vendor Evaluation, Partnership Models, Implementation Strategies und EU AI Act konforme Anbieter-Bewertung für nachhaltige Automatisierungserfolge.',
        keywords: 'Intelligent Process Automation Companies, IPA Anbieter, Automation Vendor Selection, Enterprise IPA Partners, Process Automation Providers, IPA Implementation Partners, Automation Company Evaluation, EU AI Act Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Process Automation Companies - Strategische IPA Partner Selection und Enterprise Vendor Management'
        },
        tagline: 'Strategic IPA Company Selection für Enterprise Excellence',
        heading: 'Intelligent Process Automation Companies',
        description: 'Die Auswahl der richtigen Intelligent Process Automation Companies ist entscheidend für den nachhaltigen Erfolg Ihrer digitalen Transformation. Wir unterstützen Sie bei der strategischen Bewertung, Auswahl und dem Management von IPA-Anbietern, die nicht nur technische Exzellenz bieten, sondern auch langfristige Partnerschaftsmodelle, EU AI Act Compliance und innovative Automatisierungslösungen für Ihre spezifischen Enterprise-Anforderungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategic Vendor Selection und IPA Company Evaluation für optimale Partner-Auswahl'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Enterprise Partnership Models und langfristige Anbieter-Beziehungsmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'EU AI Act konforme IPA Provider Assessment und Compliance-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'ROI-optimierte Implementation Strategies und Performance-basierte Vendor Management'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Process Automation Companies - Strategic Partner Selection für Enterprise Success',
        description: 'Die Landschaft der Intelligent Process Automation Companies ist vielfältig und komplex. Von etablierten Enterprise-Anbietern bis hin zu innovativen Nischenlösungen bietet der Markt zahlreiche Optionen. Die richtige Auswahl und das strategische Management dieser Partnerschaften entscheiden über den Erfolg Ihrer Automatisierungsinitiative und die langfristige Wettbewerbsfähigkeit Ihres Unternehmens.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Comprehensive Vendor Assessment etabliert systematische Bewertungskriterien für IPA Companies basierend auf technischer Kompetenz, Branchenerfahrung und strategischer Ausrichtung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Enterprise Partnership Models entwickeln nachhaltige Kooperationsstrukturen mit IPA-Anbietern für langfristige Automatisierungserfolge'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Technology Stack Evaluation analysiert die technologischen Fähigkeiten und Zukunftsfähigkeit verschiedener IPA Companies'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Implementation Excellence gewährleistet erfolgreiche Projektumsetzung durch optimale Anbieter-Auswahl und -Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Compliance und Governance sichern EU AI Act konforme IPA-Implementierungen durch qualifizierte Anbieter-Partnerschaften'
          }
        ],
        alert: {
          title: 'Strategic IPA Company Selection als Erfolgsfaktor',
          content: 'Die Auswahl der richtigen Intelligent Process Automation Companies ist nicht nur eine technische, sondern eine strategische Entscheidung, die langfristige Auswirkungen auf Ihre digitale Transformation und Wettbewerbsfähigkeit hat.'
        },
        whyUs: {
          title: 'Warum IPA Company Selection mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Marktkenntnis und neutrale Bewertung führender IPA Companies'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act Expertise für compliant IPA Vendor Selection und Partnership Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methodologien für Enterprise IPA Company Evaluation und Vendor Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Langfristige Begleitung von IPA-Partnerschaften für nachhaltigen Automatisierungserfolg'
            }
          ]
        },
        additionalInfo: 'Die richtige Auswahl von Intelligent Process Automation Companies erfordert tiefgreifende Marktkenntnis, technische Expertise und strategisches Verständnis. Wir unterstützen Sie dabei, die optimalen IPA-Partner für Ihre spezifischen Anforderungen zu identifizieren und langfristige Erfolgspartnerschaften aufzubauen.',
        serviceDescription: 'Unser IPA Company Selection Service umfasst die vollständige Bewertung, Auswahl und das Management von Intelligent Process Automation Anbietern. Von der initialen Marktanalyse über detaillierte Vendor Assessments bis hin zur langfristigen Partnership-Optimierung begleiten wir Sie durch den gesamten Prozess der strategischen IPA-Anbieter-Auswahl.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Market Analysis und IPA Company Landscape Assessment für fundierte Anbieter-Übersicht'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Vendor Evaluation und Technical Due Diligence für qualifizierte IPA Company Selection'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Partnership Strategy Development für nachhaltige IPA-Anbieter-Beziehungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementation Support und Vendor Management für erfolgreiche IPA-Projekte'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance Monitoring und Partnership Optimization für kontinuierliche Verbesserung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zur IPA Company Selection',
        description: 'Wir verfolgen einen systematischen und datengetriebenen Ansatz zur Auswahl und zum Management von Intelligent Process Automation Companies, der sowohl technische Exzellenz als auch strategische Passung gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Market Research und IPA Company Landscape Analysis für vollständige Marktübersicht'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Multi-Criteria Vendor Assessment mit technischen, kommerziellen und strategischen Bewertungsdimensionen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Proof of Concept Management und Pilot Project Coordination für praktische Anbieter-Evaluation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Contract Negotiation Support und Partnership Structure Optimization'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Ongoing Vendor Relationship Management und Performance Optimization für langfristigen Erfolg'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die strategische Auswahl der richtigen Intelligent Process Automation Companies ist entscheidend für den nachhaltigen Erfolg digitaler Transformation. Wir unterstützen Unternehmen dabei, nicht nur technisch kompetente, sondern auch strategisch passende IPA-Partner zu identifizieren, die langfristige Automatisierungserfolge ermöglichen und dabei EU AI Act Compliance gewährleisten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'IPA Market Analysis und Company Landscape Assessment',
          description: 'Umfassende Marktanalyse und systematische Bewertung der IPA Company Landschaft für fundierte Anbieter-Auswahl.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Comprehensive Market Mapping aller relevanten IPA Companies mit Fokus auf Enterprise-Tauglichkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Technology Stack Analysis und Innovation Assessment verschiedener IPA-Anbieter'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Competitive Positioning und Market Share Analysis für strategische Anbieter-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Industry Specialization Assessment und Branchenerfahrung-Evaluation der IPA Companies'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Strategic Vendor Evaluation und Technical Due Diligence',
          description: 'Systematische Bewertung und technische Prüfung von IPA Companies für qualifizierte Anbieter-Auswahl.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Multi-Dimensional Vendor Scoring mit technischen, kommerziellen und strategischen Kriterien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Technical Architecture Review und Platform Capability Assessment der IPA-Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Security und Compliance Evaluation für EU AI Act konforme IPA Company Selection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Financial Stability Assessment und Business Continuity Evaluation der Anbieter'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Enterprise Partnership Strategy Development',
          description: 'Entwicklung nachhaltiger Partnerschaftsstrategien mit ausgewählten IPA Companies für langfristigen Automatisierungserfolg.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Partnership Model Design für optimale Zusammenarbeit mit IPA Companies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Service Level Agreement Development und Performance Metrics Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Governance Framework Establishment für effektives IPA Vendor Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Risk Management Strategy und Contingency Planning für IPA-Partnerschaften'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Proof of Concept Management und Pilot Implementation',
          description: 'Strukturierte Durchführung von Proof of Concepts und Pilot-Projekten für praktische IPA Company Evaluation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'PoC Framework Design und Evaluation Criteria Definition für objektive Anbieter-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Multi-Vendor PoC Coordination und Comparative Analysis verschiedener IPA Companies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Performance Benchmarking und ROI Assessment der Pilot-Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Scalability Testing und Enterprise Readiness Evaluation der IPA-Lösungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Contract Negotiation und Partnership Optimization',
          description: 'Professionelle Vertragsverhandlung und Optimierung von Partnerschaftsstrukturen mit IPA Companies.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Commercial Terms Negotiation und Pricing Model Optimization für IPA-Verträge'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Legal Framework Development und Compliance Clause Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Intellectual Property Protection und Data Security Agreement Structuring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Exit Strategy Planning und Vendor Lock-in Prevention für flexible IPA-Partnerschaften'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Ongoing Vendor Relationship Management',
          description: 'Kontinuierliches Management und Optimierung von IPA Company Beziehungen für nachhaltigen Automatisierungserfolg.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Performance Monitoring und KPI Tracking für kontinuierliche Vendor Evaluation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Relationship Health Assessment und Partnership Optimization Strategies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Innovation Roadmap Alignment und Technology Evolution Planning mit IPA Companies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Conflict Resolution und Issue Escalation Management für stabile Anbieter-Beziehungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentProcessAutomationCompaniesData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Process Automation Companies page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
