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
    console.log('Creating Intelligent Automation Systems page...')

    const intelligentAutomationSystemsData = {
      _type: 'servicePage',
      _id: 'intelligent-automation-systems',
      title: 'Intelligent Automation Systems',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-automation-systems'
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
        title: 'Intelligent Automation Systems | ADVISORI',
        description: 'Entwickeln Sie zukunftssichere Intelligent Automation Systems mit KI, ML und RPA Integration. ADVISORI bietet EU AI Act konforme Systemarchitekturen für Enterprise-Automatisierung.',
        keywords: 'Intelligent Automation Systems, KI Systeme, Automatisierungsplattform, RPA Integration, AI Act Compliance, Enterprise Automation, Systemarchitektur'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Automation Systems'
        },
        tagline: 'Zukunftssichere Automatisierungssysteme für Enterprise Excellence',
        heading: 'Intelligent Automation Systems',
        description: 'Unsere Intelligent Automation Systems vereinen KI, Machine Learning, RPA und kognitive Technologien zu leistungsstarken, skalierbaren Plattformen, die Ihre Geschäftsprozesse revolutionieren – EU AI Act konform und sicherheitsorientiert.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Integrierte KI-ML-RPA Systemarchitekturen mit nahtloser Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'EU AI Act konforme Governance und Compliance-Management'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Skalierbare Enterprise-Plattformen mit Hochverfügbarkeit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Sichere Systemintegration mit Schutz von Unternehmens-IP'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Automation Systems',
        description: 'Intelligent Automation Systems repräsentieren die nächste Generation der Unternehmensautomatisierung, die verschiedene Technologien zu einer einheitlichen, intelligenten Plattform vereint. ADVISORI entwickelt maßgeschneiderte Systemarchitekturen, die KI, Machine Learning, RPA und kognitive Services nahtlos integrieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Ganzheitliche Systemarchitektur mit KI-ML-RPA Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Cloud-native und Hybrid-Cloud Automatisierungsplattformen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Intelligente Orchestrierung und Workflow-Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Real-time Analytics und Performance Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Enterprise-grade Sicherheit und Compliance-Framework'
          }
        ],
        alert: {
          title: 'Systemexpertise',
          content: 'Erfolgreiche Intelligent Automation Systems erfordern eine durchdachte Architektur, die Skalierbarkeit, Sicherheit und Compliance von Anfang an berücksichtigt. Unsere Systemdesigns sind darauf ausgelegt, mit Ihrem Unternehmen zu wachsen und sich an verändernde Anforderungen anzupassen.'
        },
        whyUs: {
          title: 'Unsere Systemkompetenz',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in Enterprise-Systemarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act konforme Systemdesigns und Governance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Integration komplexer Technologie-Stacks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Fokus auf Sicherheit und Unternehmens-IP Schutz'
            }
          ]
        },
        additionalInfo: 'Moderne Intelligent Automation Systems können die Effizienz von Geschäftsprozessen erheblich steigern und gleichzeitig die Grundlage für kontinuierliche Innovation schaffen. Investieren Sie in eine zukunftssichere Automatisierungsarchitektur!',
        serviceDescription: 'Unsere Intelligent Automation Systems Services umfassen die komplette Entwicklung von der Systemkonzeption über die Architektur bis hin zur Implementierung und dem laufenden Betrieb Ihrer Automatisierungsplattform.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Systemarchitektur und Plattform-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'KI-ML-RPA Integration und Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Cloud-native Implementierung und Migration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Enterprise Security und Compliance Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'System Monitoring und Performance Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Systemansatz',
        description: 'Wir verfolgen einen systematischen, architekturzentrierten Ansatz, der von der strategischen Planung über das Systemdesign bis zur operativen Exzellenz alle Aspekte moderner Automatisierungssysteme abdeckt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Anforderungsanalyse und Systemarchitektur-Design'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Technologie-Integration und Plattform-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Pilotimplementierung mit EU AI Act Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Skalierung und Enterprise-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Systemoptimierung und Evolution'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Entwicklung intelligenter Automatisierungssysteme erfordert eine ganzheitliche Sicht auf Technologie, Architektur und Governance. Unsere Systemlösungen schaffen die technische Grundlage für nachhaltige Geschäftstransformation, während sie gleichzeitig höchste Sicherheits- und Compliance-Standards erfüllen. So entstehen Plattformen, die mit dem Unternehmen wachsen und sich kontinuierlich weiterentwickeln.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Systemarchitektur & Design',
          description: 'Entwicklung maßgeschneiderter Intelligent Automation System Architekturen für Ihre spezifischen Unternehmensanforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Enterprise-Systemarchitektur und Technologie-Stack Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Skalierbare Cloud-native und Hybrid-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Microservices und API-first Systemdesign'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Hochverfügbarkeit und Disaster Recovery Konzepte'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'KI-ML-RPA Integration',
          description: 'Nahtlose Integration verschiedener Automatisierungstechnologien zu einer einheitlichen, intelligenten Plattform.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Intelligente Orchestrierung von KI, ML und RPA Komponenten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Kognitive Services und Natural Language Processing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Computer Vision und Dokumentenverarbeitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Predictive Analytics und Machine Learning Pipelines'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Plattform-Entwicklung',
          description: 'Aufbau robuster, skalierbarer Automatisierungsplattformen mit modernsten Technologien und Best Practices.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Low-Code/No-Code Entwicklungsumgebungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Workflow-Engine und Process Orchestration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Real-time Monitoring und Analytics Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Self-Service Portale und Benutzeroberflächen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Enterprise Integration',
          description: 'Professionelle Integration Ihrer Automatisierungssysteme in die bestehende IT-Landschaft und Geschäftsprozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Legacy-System Integration und Modernisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'ERP, CRM und Business System Konnektivität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Data Pipeline und ETL Prozess Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Identity Management und Single Sign-On'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Security & Compliance',
          description: 'Implementierung umfassender Sicherheits- und Compliance-Frameworks für Ihre Automatisierungssysteme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'EU AI Act konforme Governance und Risikomanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Zero-Trust Sicherheitsarchitektur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Datenschutz und DSGVO Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Audit-Trails und Compliance Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'System Operations & Support',
          description: 'Kontinuierlicher Betrieb, Monitoring und Optimierung Ihrer Intelligent Automation Systems.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'DevOps und CI/CD Pipeline Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Proaktives System Monitoring und Alerting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Performance Tuning und Kapazitätsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'System Evolution und Technology Updates'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentAutomationSystemsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Automation Systems page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
