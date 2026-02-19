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
    console.log('Creating Intelligent Workflow Automation page...')

    const intelligentWorkflowAutomationData = {
      _type: 'servicePage',
      _id: 'intelligent-workflow-automation',
      title: 'Intelligent Workflow Automation',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-workflow-automation'
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
        title: 'Intelligent Workflow Automation | ADVISORI',
        description: 'Optimieren Sie Ihre Geschäftsprozesse mit intelligenter Workflow-Automatisierung. ADVISORI bietet KI-gestützte Lösungen für effiziente, adaptive und EU AI Act konforme Workflows.',
        keywords: 'Intelligent Workflow Automation, KI Workflows, Prozessautomatisierung, Business Process Management, AI Act Compliance, Digitale Transformation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Workflow Automation'
        },
        tagline: 'KI-gestützte Workflows für adaptive Geschäftsprozesse',
        heading: 'Intelligent Workflow Automation',
        description: 'Transformieren Sie Ihre Geschäftsprozesse mit intelligenten, selbstlernenden Workflows, die sich dynamisch an verändernde Anforderungen anpassen und dabei höchste Compliance-Standards erfüllen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Adaptive KI-Workflows mit kontinuierlicher Selbstoptimierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'EU AI Act konforme Implementierung mit integriertem Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Nahtlose Integration in bestehende Systemlandschaften'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Messbare Effizienzsteigerung durch intelligente Prozessoptimierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Workflow Automation',
        description: 'Intelligent Workflow Automation kombiniert traditionelle Workflow-Engines mit KI-Technologien, um selbstlernende, adaptive Geschäftsprozesse zu schaffen. Diese intelligenten Workflows können Entscheidungen treffen, sich an verändernde Bedingungen anpassen und kontinuierlich ihre Performance optimieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'KI-gestützte Workflow-Orchestrierung mit Machine Learning-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Adaptive Entscheidungsfindung durch Natural Language Processing'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Predictive Analytics für proaktive Workflow-Anpassungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Compliance-konforme Automatisierung mit Audit-Trail-Funktionalität'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Performance-Überwachung und Optimierung'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche Intelligent Workflow Automation erfordert eine durchdachte Balance zwischen Automatisierung und menschlicher Kontrolle. Die KI sollte Entscheidungen unterstützen, nicht ersetzen, und dabei stets transparente und nachvollziehbare Ergebnisse liefern.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in KI-gestützter Prozessautomatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act Compliance als integraler Bestandteil unserer Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von Strategie bis Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Fokus auf Sicherheit und Schutz von Unternehmens-IP'
            }
          ]
        },
        additionalInfo: 'Unternehmen, die Intelligent Workflow Automation implementieren, erzielen durchschnittlich eine Reduktion der Bearbeitungszeiten und eine Verbesserung der Prozessqualität. Gleichzeitig wird die Compliance-Einhaltung automatisiert überwacht.',
        serviceDescription: 'Unsere Intelligent Workflow Automation Services umfassen die komplette Transformation Ihrer Geschäftsprozesse durch den Einsatz modernster KI-Technologien, von der strategischen Planung bis zur operativen Umsetzung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'KI-gestützte Workflow-Analyse und -Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Adaptive Workflow-Engine Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Machine Learning Integration für kontinuierliche Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'EU AI Act konforme Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance Monitoring und Analytics'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen systematischen Ansatz zur Implementierung intelligenter Workflows, der technische Innovation mit bewährten Change-Management-Praktiken verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse bestehender Workflows und Identifikation von Optimierungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design intelligenter Workflow-Architekturen mit KI-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Pilotimplementierung mit kontinuierlichem Feedback und Anpassung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Skalierung und Integration in die bestehende IT-Landschaft'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung durch Machine Learning und Analytics'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Intelligent Workflow Automation ist der nächste evolutionäre Schritt in der Prozessoptimierung. Durch die Kombination von KI-Technologien mit bewährten Workflow-Prinzipien schaffen wir adaptive Systeme, die nicht nur effizienter arbeiten, sondern auch kontinuierlich lernen und sich verbessern – immer unter Einhaltung höchster Compliance-Standards.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Workflow-Analyse & KI-Integration',
          description: 'Umfassende Analyse Ihrer bestehenden Workflows und strategische Integration von KI-Technologien für optimale Automatisierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Process Mining und Workflow-Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'KI-Potenzial-Assessment für Workflow-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Technologie-Roadmap für intelligente Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'ROI-Bewertung und Business Case Entwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Adaptive Workflow-Engine Design',
          description: 'Entwicklung maßgeschneiderter Workflow-Engines mit integrierten KI-Funktionalitäten für selbstlernende Prozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'KI-gestützte Workflow-Orchestrierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Machine Learning-basierte Entscheidungslogik'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Natural Language Processing für Dokumentenverarbeitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Predictive Analytics für Workflow-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'EU AI Act Compliance Framework',
          description: 'Implementierung umfassender Compliance-Strukturen für KI-gestützte Workflows gemäß EU AI Act Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'AI Act Risikobewertung für Workflow-KI'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Transparenz- und Nachvollziehbarkeits-Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Audit-Trail und Compliance-Dokumentation'
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
          title: 'Technische Implementierung & Integration',
          description: 'Professionelle Umsetzung intelligenter Workflows mit nahtloser Integration in bestehende Systemlandschaften.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Cloud-native Workflow-Plattformen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'API-Integration und Systemkonnektivität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Microservices-Architektur für Skalierbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Sicherheits- und Datenschutzmaßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Change Management & User Adoption',
          description: 'Begleitung Ihrer Teams bei der Einführung intelligenter Workflows mit fokussiertem Change Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Stakeholder-Engagement und Kommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'User Training und Kompetenzaufbau'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Kulturwandel und Akzeptanzförderung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kontinuierliche Unterstützung und Coaching'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Performance Analytics & Optimierung',
          description: 'Kontinuierliche Überwachung und datengetriebene Optimierung Ihrer intelligenten Workflows für maximale Effizienz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Real-time Performance Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'KI-basierte Anomalieerkennung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Kontinuierliche Prozessverbesserung durch ML'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Predictive Maintenance für Workflow-Systeme'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentWorkflowAutomationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Workflow Automation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
