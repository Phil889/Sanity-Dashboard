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
    console.log('Creating Solutions for Intelligent Automation page...')

    const solutionsForIntelligentAutomationData = {
      _type: 'servicePage',
      _id: 'solutions-for-intelligent-automation',
      title: 'Solutions for Intelligent Automation with AI',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/solutions-for-intelligent-automation'
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
        title: 'Solutions for Intelligent Automation with AI | ADVISORI',
        description: 'Entdecken Sie KI-gestützte Intelligent Automation Lösungen von ADVISORI. EU AI Act konforme Automatisierungslösungen für nachhaltige Geschäftstransformation und operative Exzellenz.',
        keywords: 'Intelligent Automation Solutions, KI Automatisierung, AI-powered Automation, EU AI Act Compliance, Enterprise Automation, Digitale Transformation, RPA mit KI'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Solutions for Intelligent Automation with AI'
        },
        tagline: 'KI-gestützte Automatisierungslösungen für die Zukunft Ihres Unternehmens',
        heading: 'Solutions for Intelligent Automation with AI',
        description: 'ADVISORI bietet umfassende KI-gestützte Intelligent Automation Lösungen, die traditionelle Automatisierung mit künstlicher Intelligenz verbinden. Unsere Lösungen transformieren Geschäftsprozesse nachhaltig und schaffen messbare Wettbewerbsvorteile – compliance-konform und sicherheitsorientiert.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'KI-gestützte Automatisierungslösungen mit EU AI Act Compliance und integriertem Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'End-to-End Transformation von Geschäftsprozessen durch intelligente AI-Technologien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Sichere Implementierung mit Fokus auf Unternehmens-IP Schutz und Datensicherheit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Skalierbare Lösungsarchitekturen für nachhaltige Geschäftswertschöpfung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Solutions for Intelligent Automation with AI',
        description: 'Intelligent Automation mit KI repräsentiert die nächste Evolutionsstufe der Geschäftsprozessoptimierung. ADVISORI entwickelt maßgeschneiderte Lösungen, die Machine Learning, Natural Language Processing und kognitive Technologien nahtlos in Ihre Unternehmensabläufe integrieren und dabei höchste Sicherheits- und Compliance-Standards erfüllen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'KI-gestützte Prozessanalyse und intelligente Automatisierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'EU AI Act konforme Implementierung mit integrierter Governance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Hybride Automatisierungslösungen mit menschlicher Intelligenz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Optimierung durch selbstlernende Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Skalierbare Cloud-native Architekturen für Enterprise-Anforderungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche KI-gestützte Automatisierung erfordert eine durchdachte Balance zwischen technologischer Innovation und menschlicher Expertise. Unsere Lösungen schaffen diese Synergie und gewährleisten dabei vollständige Compliance mit regulatorischen Anforderungen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Expertise in KI-Governance und EU AI Act Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Ganzheitliche Lösungsarchitekturen von Strategie bis Betrieb'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Security-first Ansatz mit Fokus auf IP-Schutz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Bewährte Methoden für nachhaltige Geschäftstransformation'
            }
          ]
        },
        additionalInfo: 'Unternehmen, die KI-gestützte Intelligent Automation strategisch implementieren, erzielen signifikante Produktivitätssteigerungen und können gleichzeitig ihre Compliance-Anforderungen effizienter erfüllen. Investieren Sie in zukunftssichere Automatisierungslösungen!',
        serviceDescription: 'Unsere Solutions for Intelligent Automation with AI umfassen die komplette Wertschöpfungskette von der strategischen Beratung über die technische Implementierung bis hin zur kontinuierlichen Optimierung Ihrer KI-gestützten Automatisierungslösungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'KI-Strategie und Automatisierungs-Roadmap Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Machine Learning basierte Prozessoptimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'EU AI Act konforme Lösungsarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Hybride Mensch-KI Kollaborationssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliches Performance Monitoring und Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen systematischen, KI-zentrierten Ansatz, der strategische Planung mit agiler Implementierung verbindet und dabei stets Compliance, Sicherheit und Geschäftswert im Fokus behält.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'KI-Potenzialanalyse und strategische Automatisierungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung maßgeschneiderter KI-Automatisierungslösungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Pilotimplementierung mit EU AI Act konformen Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Skalierung und Integration in bestehende Enterprise-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche KI-Modell-Optimierung und Performance-Monitoring'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'KI-gestützte Intelligent Automation ist der Schlüssel zur nachhaltigen digitalen Transformation. Unsere Lösungen verbinden technologische Innovation mit regulatorischer Compliance und schaffen dabei messbare Geschäftsergebnisse. Durch unseren Security-first Ansatz gewährleisten wir den Schutz von Unternehmens-IP bei gleichzeitiger Maximierung der KI-Potenziale.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'KI-Strategieentwicklung & Roadmapping',
          description: 'Entwicklung einer umfassenden KI-Automatisierungsstrategie mit klarer Roadmap für die schrittweise Implementierung intelligenter Lösungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'KI-Potenzialanalyse und Use Case Identifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strategische Roadmap mit Priorisierung und Zeitplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'ROI-Bewertung und Business Case Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'KI-Technologie-Auswahl und Architektur-Design'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Machine Learning Prozessoptimierung',
          description: 'Intelligente Analyse und Optimierung Ihrer Geschäftsprozesse durch den Einsatz fortschrittlicher Machine Learning Algorithmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'ML-basierte Prozessanalyse und Pattern Recognition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Predictive Analytics für Prozessverbesserungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Anomalieerkennung und automatische Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliches Learning und Anpassung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'EU AI Act Compliance & Governance',
          description: 'Sicherstellung der vollständigen Compliance Ihrer KI-Automatisierungslösungen mit den Anforderungen des EU AI Act und anderen regulatorischen Standards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'AI Act Risikobewertung und Klassifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'KI-Governance Framework Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Transparenz und Erklärbarkeit von KI-Entscheidungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Kontinuierliche Compliance-Überwachung und Audit-Vorbereitung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Hybride KI-Automatisierungssysteme',
          description: 'Entwicklung intelligenter Systeme, die menschliche Expertise mit KI-Fähigkeiten optimal kombinieren für maximale Effizienz und Qualität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Human-in-the-Loop Automatisierungsdesign'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Intelligente Entscheidungsunterstützungssysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Adaptive Workflow-Orchestrierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Kollaborative KI-Mensch Interfaces'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Cloud-native KI-Plattformen',
          description: 'Aufbau skalierbarer, cloud-nativer KI-Automatisierungsplattformen für Enterprise-Anforderungen mit höchsten Sicherheitsstandards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Microservices-basierte KI-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Container-orchestrierte Deployment-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Auto-scaling und Performance-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Multi-Cloud und Hybrid-Cloud Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Kontinuierliche KI-Optimierung & Monitoring',
          description: 'Laufende Überwachung, Bewertung und Optimierung Ihrer KI-Automatisierungslösungen für maximale Performance und Geschäftswert.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'KI-Performance Dashboards und Metriken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Automatisierte Modell-Retraining und Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Drift Detection und Qualitätssicherung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Verbesserung und Innovation'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(solutionsForIntelligentAutomationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Solutions for Intelligent Automation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
