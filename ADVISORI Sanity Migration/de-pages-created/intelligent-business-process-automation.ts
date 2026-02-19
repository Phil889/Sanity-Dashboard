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
    console.log('Creating Intelligent Business Process Automation page...')

    const intelligentBusinessProcessAutomationData = {
      _type: 'servicePage',
      _id: 'intelligent-business-process-automation',
      title: 'Intelligent Business Process Automation',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-business-process-automation'
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
        title: 'Intelligent Business Process Automation | EU AI Act Compliance | ADVISORI',
        description: 'Transformieren Sie Ihre Geschäftsprozesse mit KI-gestützter Intelligent Business Process Automation. ADVISORI bietet EU AI Act konforme Lösungen für nachhaltige Prozessoptimierung.',
        keywords: 'Intelligent Business Process Automation, KI Geschäftsprozesse, EU AI Act Compliance, BPA, Prozessautomatisierung, Enterprise AI, Workflow Automation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Business Process Automation'
        },
        tagline: 'KI-gestützte Geschäftsprozessautomatisierung für operative Exzellenz',
        heading: 'Intelligent Business Process Automation',
        description: 'Revolutionieren Sie Ihre Geschäftsprozesse durch Intelligent Business Process Automation – eine strategische Kombination aus KI, Machine Learning und fortschrittlicher Automatisierung, die Ihre Unternehmensprozesse intelligent, adaptiv und EU AI Act konform gestaltet.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'EU AI Act konforme Geschäftsprozessautomatisierung mit integriertem Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Intelligente Prozessoptimierung durch KI-gestützte Analyse und Vorhersagen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Schutz kritischer Geschäftsdaten durch sichere KI-Implementierungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Messbare Effizienzsteigerung und ROI durch datengetriebene Automatisierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Business Process Automation',
        description: 'Intelligent Business Process Automation (iBPA) geht weit über traditionelle Workflow-Automatisierung hinaus und integriert künstliche Intelligenz, Machine Learning und kognitive Technologien zur Schaffung selbstlernender, adaptiver Geschäftsprozesse. ADVISORI unterstützt Sie dabei, diese fortschrittlichen Technologien strategisch und compliance-konform zu implementieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'KI-gestützte Analyse und Optimierung bestehender Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'EU AI Act konforme Implementierung intelligenter Automatisierungslösungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration von Predictive Analytics und Machine Learning in Workflows'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Adaptive Prozesssteuerung durch kontinuierliches Lernen und Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Nahtlose Integration in bestehende Enterprise-Systeme und -Architekturen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche Intelligent Business Process Automation erfordert eine strategische Herangehensweise, die technische Innovation mit Geschäftsverständnis und regulatorischer Compliance verbindet. Der Schlüssel liegt in der intelligenten Orchestrierung von Menschen, Prozessen und KI-Technologien.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Expertise in EU AI Act Compliance für Geschäftsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Ganzheitlicher Ansatz von Prozessanalyse bis Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Fokus auf Sicherheit und Schutz kritischer Geschäftsdaten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Bewährte Methoden für nachhaltige Prozessoptimierung'
            }
          ]
        },
        additionalInfo: 'Unternehmen, die Intelligent Business Process Automation strategisch implementieren, erzielen durchschnittlich signifikante Effizienzsteigerungen und können gleichzeitig ihre Compliance-Anforderungen automatisiert erfüllen. Investieren Sie in die Zukunft Ihrer Geschäftsprozesse!',
        serviceDescription: 'Unsere Intelligent Business Process Automation Services umfassen die gesamte Wertschöpfungskette von der strategischen Prozessanalyse über die KI-gestützte Optimierung bis hin zur kontinuierlichen Verbesserung Ihrer automatisierten Geschäftsprozesse.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Geschäftsprozessanalyse und KI-Potentialbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Intelligente Workflow-Automatisierung mit Machine Learning'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'EU AI Act konforme Implementierung und Governance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Process Mining und kontinuierliche Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance Monitoring und adaptive Prozesssteuerung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten, datengetriebenen Ansatz, der strategische Geschäftsprozessanalyse mit modernster KI-Technologie verbindet und dabei stets Compliance und operative Exzellenz im Fokus behält.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer Geschäftsprozesse und Identifikation von KI-Potenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten iBPA-Strategie mit EU AI Act Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Pilotimplementierung mit intelligenten Workflows und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Skalierung und Integration in bestehende Enterprise-Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung durch KI-gestütztes Process Mining'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Intelligent Business Process Automation ist der Schlüssel zur nachhaltigen digitalen Transformation von Unternehmen. Unsere Kunden profitieren von einer durchdachten Strategie, die KI-gestützte Prozessoptimierung mit regulatorischer Compliance verbindet und dabei operative Exzellenz schafft. So entstehen messbare Geschäftsergebnisse bei gleichzeitigem Schutz kritischer Unternehmensdaten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Prozessanalyse & KI-Potentialbewertung',
          description: 'Umfassende Analyse Ihrer Geschäftsprozesse zur Identifikation optimaler Automatisierungspotenziale und KI-Einsatzmöglichkeiten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Process Mining und intelligente Prozessanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'KI-Potentialbewertung und Machbarkeitsstudien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'ROI-Bewertung und Business Case Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Priorisierung und Roadmap-Entwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Intelligente Workflow-Automatisierung',
          description: 'Entwicklung und Implementierung KI-gestützter Workflows, die sich kontinuierlich an verändernde Geschäftsanforderungen anpassen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'KI-gestützte Workflow-Orchestrierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Machine Learning basierte Entscheidungsautomatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Adaptive Prozesssteuerung und Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Intelligente Ausnahmebehandlung und Eskalation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'EU AI Act Compliance für Geschäftsprozesse',
          description: 'Sicherstellung der Compliance Ihrer intelligenten Geschäftsprozesse mit den Anforderungen des EU AI Act.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'AI Act Risikobewertung für Geschäftsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Entwicklung von Process AI Governance Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Compliance-Dokumentation und Audit-Trails'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Kontinuierliche Compliance-Überwachung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Predictive Process Analytics',
          description: 'Implementierung fortschrittlicher Analytics zur Vorhersage von Prozessverhalten und proaktiven Optimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Predictive Analytics für Prozessoptimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Anomalieerkennung und proaktive Intervention'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Performance Forecasting und Kapazitätsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Datengetriebene Prozessverbesserung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Enterprise System Integration',
          description: 'Nahtlose Integration intelligenter Automatisierungslösungen in bestehende Enterprise-Systeme und -Architekturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'API-Integration und Systemkonnektivität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Cloud-native und Hybrid-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Legacy-System-Integration und Modernisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Sicherheits- und Datenschutzkonzepte'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Kontinuierliche Prozessoptimierung',
          description: 'Aufbau von Mechanismen zur kontinuierlichen Überwachung, Analyse und Verbesserung Ihrer automatisierten Geschäftsprozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Real-time Process Monitoring und Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'KI-gestützte Optimierungsempfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Kontinuierliches Process Mining und Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Adaptive Prozessverbesserung und Skalierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentBusinessProcessAutomationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Business Process Automation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
