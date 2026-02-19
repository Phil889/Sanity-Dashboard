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
    console.log('Creating Enterprise Intelligent Automation page...')

    const enterpriseIntelligentAutomationData = {
      _type: 'servicePage',
      _id: 'enterprise-intelligent-automation',
      title: 'Enterprise Intelligent Automation',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/enterprise-intelligent-automation'
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
        title: 'Enterprise Intelligent Automation | ADVISORI',
        description: 'Transformieren Sie Ihr Großunternehmen mit skalierbaren KI-gestützten Automatisierungslösungen. ADVISORI bietet Enterprise-Beratung für intelligente Prozessautomatisierung mit EU AI Act Compliance.',
        keywords: 'Enterprise Automation, KI Transformation, Skalierbare Automatisierung, AI Act Enterprise, Digitale Transformation, Enterprise AI Governance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Enterprise Intelligent Automation'
        },
        tagline: 'Skalierbare KI-Automatisierung für Großunternehmen und Konzerne',
        heading: 'Enterprise Intelligent Automation',
        description: 'Unsere Enterprise Intelligent Automation Lösungen transformieren komplexe Großunternehmen durch skalierbare, KI-gestützte Automatisierung – mit robuster Governance, Enterprise-Security und vollständiger EU AI Act Compliance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Skalierbare Automatisierungsarchitekturen für komplexe Enterprise-Umgebungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Enterprise-Grade Governance und EU AI Act konforme KI-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Schutz kritischer Unternehmens-IP durch sichere KI-Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Messbare Transformation mit Enterprise-KPIs und ROI-Tracking'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Enterprise Intelligent Automation',
        description: 'Enterprise Intelligent Automation adressiert die einzigartigen Herausforderungen von Großunternehmen bei der Implementierung skalierbarer, KI-gestützter Automatisierungslösungen. ADVISORI unterstützt Konzerne dabei, komplexe Transformationsprojekte erfolgreich umzusetzen und dabei höchste Sicherheits- und Compliance-Standards zu erfüllen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Enterprise-weite Automatisierungsstrategien und Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Skalierbare KI-Architekturen für Multi-System-Integrationen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'EU AI Act konforme Enterprise-Governance und Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Change Management für komplexe Organisationsstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Enterprise-Security und Schutz kritischer Geschäftsprozesse'
          }
        ],
        alert: {
          title: 'Enterprise-Fokus',
          content: 'Erfolgreiche Enterprise Intelligent Automation erfordert mehr als skalierbare Technologie – sie benötigt eine durchdachte Governance-Strategie, die komplexe Organisationsstrukturen, regulatorische Anforderungen und kritische Geschäftsprozesse berücksichtigt.'
        },
        whyUs: {
          title: 'Unsere Enterprise-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierung auf komplexe Enterprise-Transformationen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Führende Expertise in Enterprise AI Governance und EU AI Act'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methoden für skalierbare Automatisierungsarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Enterprise-Security und IP-Schutz als Kernkompetenz'
            }
          ]
        },
        additionalInfo: 'Großunternehmen, die Enterprise Intelligent Automation strategisch implementieren, erzielen signifikante Effizienzsteigerungen bei gleichzeitiger Risikominimierung. Investieren Sie in die Zukunft Ihrer Enterprise-Prozesse!',
        serviceDescription: 'Unsere Enterprise Intelligent Automation Services umfassen die gesamte Wertschöpfungskette von der strategischen Enterprise-Planung über die skalierbare Implementierung bis hin zur kontinuierlichen Optimierung komplexer Automatisierungslandschaften.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Enterprise-Automatisierungsstrategie und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Skalierbare KI-Architekturen und Multi-System-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Enterprise AI Governance und EU AI Act Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Change Management für komplexe Organisationen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Enterprise-Performance Monitoring und Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Enterprise-Ansatz',
        description: 'Wir verfolgen einen strukturierten, Enterprise-orientierten Ansatz, der strategische Planung mit skalierbarer Umsetzung verbindet und dabei stets Enterprise-Governance, Sicherheit und Compliance im Fokus behält.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Enterprise-weite Bewertung und strategische Automatisierungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung skalierbarer Automatisierungsarchitekturen und Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Pilotimplementierung mit Enterprise-Security und EU AI Act Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Skalierung und Integration in komplexe Enterprise-IT-Landschaften'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Enterprise-Optimierung und Performance-Management'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Enterprise Intelligent Automation ist der Schlüssel zur nachhaltigen Transformation von Großunternehmen. Unsere Kunden profitieren von einer durchdachten Enterprise-Strategie, die skalierbare Technologie mit robuster Governance verbindet und dabei kritische Geschäftsprozesse schützt. So schaffen wir messbare Geschäftsergebnisse bei höchsten Sicherheits- und Compliance-Standards.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Enterprise-Automatisierungsstrategie',
          description: 'Entwicklung umfassender Strategien für die Implementierung intelligenter Automatisierung in komplexen Enterprise-Umgebungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Enterprise-weite Bewertung von Automatisierungspotenzialen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung skalierbarer Implementierungsroadmaps'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Enterprise-ROI-Bewertung und Business Case Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Technologie-Auswahl für Enterprise-Architekturen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Skalierbare KI-Architekturen',
          description: 'Design und Implementierung skalierbarer KI-Automatisierungsarchitekturen für komplexe Enterprise-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Enterprise-KI-Architektur und Plattform-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Multi-System-Integration und API-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Skalierbare Cloud-native Automatisierungsplattformen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Enterprise-Datenintegration und Analytics'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Enterprise AI Governance',
          description: 'Etablierung robuster AI Governance Frameworks für Enterprise-weite Compliance und Risikomanagement.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Enterprise AI Governance Framework Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'EU AI Act Compliance für Enterprise-Umgebungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Enterprise-Risikomanagement und Audit-Vorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Kontinuierliche Compliance-Überwachung und Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Enterprise-Implementierung',
          description: 'Professionelle Umsetzung skalierbarer Automatisierungslösungen in komplexen Enterprise-IT-Landschaften.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Enterprise-RPA, KI und ML Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Legacy-System-Integration und Modernisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Enterprise-Security und Datenschutzmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Hochverfügbare und skalierbare Infrastrukturen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Enterprise Change Management',
          description: 'Begleitung komplexer Organisationen bei der Transformation zu KI-gestützten Enterprise-Arbeitsplätzen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Multi-Level Stakeholder-Engagement und Kommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Enterprise-weite Mitarbeiterqualifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Kulturwandel in komplexen Organisationsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Executive Coaching und Leadership Development'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Enterprise Performance Management',
          description: 'Kontinuierliche Überwachung und Optimierung Enterprise-weiter Automatisierungslösungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Enterprise-KPI-Definition und Performance-Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Automatisierte Enterprise-Anomalieerkennung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Kontinuierliche Enterprise-Prozessverbesserung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Enterprise-Skalierungsstrategien und Roadmap-Updates'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(enterpriseIntelligentAutomationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Enterprise Intelligent Automation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
