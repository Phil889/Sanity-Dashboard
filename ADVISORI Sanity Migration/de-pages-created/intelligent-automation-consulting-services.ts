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
    console.log('Creating Intelligent Automation Consulting Services page...')

    const intelligentAutomationConsultingData = {
      _type: 'servicePage',
      _id: 'intelligent-automation-consulting-services',
      title: 'Intelligent Automation Consulting Services',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-automation-consulting-services'
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
        title: 'Intelligent Automation Consulting Services | ADVISORI',
        description: 'Transformieren Sie Ihr Unternehmen mit KI-gestützten Automatisierungslösungen. ADVISORI bietet strategische Beratung für intelligente Prozessautomatisierung mit EU AI Act Compliance.',
        keywords: 'Intelligent Automation, KI Beratung, Prozessautomatisierung, RPA, AI Act Compliance, Digitale Transformation, Enterprise AI'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Automation Consulting Services'
        },
        tagline: 'Strategische KI-Automatisierung für nachhaltige Geschäftstransformation',
        heading: 'Intelligent Automation Consulting Services',
        description: 'Unsere Intelligent Automation Consulting Services kombinieren strategische Beratung mit technischer Exzellenz, um Ihre Geschäftsprozesse durch KI-gestützte Automatisierung zu transformieren – compliance-konform und sicherheitsorientiert.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'EU AI Act konforme Automatisierungslösungen mit integriertem Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategische Transformation von Geschäftsprozessen durch intelligente Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Schutz von Unternehmens-IP durch sichere KI-Implementierungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Messbare ROI-Steigerung durch datengetriebene Automatisierungsstrategien'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Automation Consulting Services',
        description: 'Intelligent Automation geht weit über traditionelle RPA hinaus und integriert KI, Machine Learning und kognitive Technologien zur Schaffung selbstlernender, adaptiver Automatisierungslösungen. ADVISORI unterstützt Sie dabei, diese Technologien strategisch und compliance-konform zu implementieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Bewertung und Priorisierung von Automatisierungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'EU AI Act konforme Implementierung intelligenter Automatisierungslösungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration von KI, ML und kognitiven Technologien in bestehende Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Change Management und Mitarbeiterqualifizierung für KI-gestützte Arbeitsplätze'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Optimierung und Skalierung von Automatisierungslösungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche Intelligent Automation erfordert mehr als nur Technologie – sie benötigt eine ganzheitliche Strategie, die Menschen, Prozesse und Technologie in Einklang bringt, während gleichzeitig regulatorische Anforderungen wie der EU AI Act berücksichtigt werden.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Expertise in EU AI Act Compliance und KI-Governance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Ganzheitlicher Ansatz von Strategie bis Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Fokus auf Sicherheit und Schutz von Unternehmens-IP'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Bewährte Methoden für nachhaltige Geschäftstransformation'
            }
          ]
        },
        additionalInfo: 'Unternehmen, die Intelligent Automation strategisch implementieren, erzielen durchschnittlich eine Produktivitätssteigerung und können gleichzeitig ihre Compliance-Anforderungen effizienter erfüllen. Investieren Sie in die Zukunft Ihrer Geschäftsprozesse!',
        serviceDescription: 'Unsere Intelligent Automation Consulting Services umfassen die gesamte Wertschöpfungskette von der strategischen Planung über die technische Implementierung bis hin zur kontinuierlichen Optimierung Ihrer Automatisierungslösungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Automatisierungsstrategie und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'KI-gestützte Prozessanalyse und -optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'EU AI Act konforme Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Change Management und Mitarbeiterqualifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance Monitoring und kontinuierliche Verbesserung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten, phasenorientierten Ansatz, der strategische Planung mit agiler Umsetzung verbindet und dabei stets Compliance und Sicherheit im Fokus behält.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Bewertung und Potenzialanalyse Ihrer Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten Automatisierungsstrategie und Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Pilotimplementierung mit EU AI Act konformen Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Skalierung und Integration in die bestehende IT-Landschaft'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Performance-Monitoring'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Intelligent Automation ist der Schlüssel zur nachhaltigen digitalen Transformation. Unsere Kunden profitieren von einer durchdachten Strategie, die technische Innovation mit regulatorischer Compliance verbindet und dabei den Menschen in den Mittelpunkt stellt. So schaffen wir messbare Geschäftsergebnisse bei gleichzeitigem Schutz der Unternehmens-IP.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Automatisierungsstrategie & Roadmap',
          description: 'Entwicklung einer umfassenden Strategie für die Implementierung intelligenter Automatisierung in Ihrem Unternehmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strategische Bewertung von Automatisierungspotenzialen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung einer phasenorientierten Implementierungsroadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'ROI-Bewertung und Business Case Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Technologie-Auswahl und Architektur-Design'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'KI-gestützte Prozessoptimierung',
          description: 'Analyse und Optimierung Ihrer Geschäftsprozesse durch den Einsatz künstlicher Intelligenz und Machine Learning.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Process Mining und intelligente Prozessanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'KI-basierte Optimierungsempfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Predictive Analytics für Prozessverbesserungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliches Process Monitoring'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'EU AI Act Compliance Beratung',
          description: 'Sicherstellung der Compliance Ihrer Automatisierungslösungen mit den Anforderungen des EU AI Act.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'AI Act Risikobewertung und Klassifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Entwicklung von AI Governance Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Dokumentation und Audit-Vorbereitung'
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
          title: 'Technische Implementierung',
          description: 'Professionelle Umsetzung Ihrer Automatisierungslösungen mit modernsten Technologien und Best Practices.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'RPA, KI und ML Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Cloud-native Automatisierungsplattformen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'API-Integration und Systemkonnektivität'
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
          title: 'Change Management & Training',
          description: 'Begleitung Ihrer Mitarbeiter bei der Transformation zu KI-gestützten Arbeitsplätzen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Stakeholder-Engagement und Kommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Mitarbeiterqualifizierung und Upskilling'
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
          title: 'Performance Monitoring & Optimierung',
          description: 'Kontinuierliche Überwachung und Verbesserung Ihrer Automatisierungslösungen für maximale Effizienz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'KPI-Definition und Performance-Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Automatisierte Anomalieerkennung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Kontinuierliche Prozessverbesserung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Skalierungsstrategien und Roadmap-Updates'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentAutomationConsultingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Automation Consulting Services page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
