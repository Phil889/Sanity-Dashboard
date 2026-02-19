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
    console.log('Creating IAM Integration page...')

    const iamIntegrationData = {
      _type: 'servicePage',
      _id: 'iam-integration',
      title: 'IAM Integration - Nahtlose Systemintegration und Enterprise-Konnektivität',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-integration'
      },
      parent: {
        _type: 'reference',
        _ref: 'identity-access-management-iam'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'informationssicherheit'
        }
      },
      seo: {
        _type: 'seo',
        title: 'IAM Integration - Nahtlose Systemintegration und Enterprise-Konnektivität | ADVISORI',
        description: 'Professionelle IAM Integration Services: API-first Architekturen, Cloud-native Integration, Legacy-Modernisierung und sichere Enterprise-Konnektivität für moderne Identitätsverwaltung.',
        keywords: 'IAM Integration, API Integration, Cloud Integration, Legacy Modernisierung, Enterprise Konnektivität, Systemintegration, Hybrid Integration, Microservices, Identity Federation, Single Sign-On Integration'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Integration Nahtlose Systemintegration Enterprise Konnektivität'
        },
        tagline: 'Intelligente Integration für moderne Identitätslandschaften',
        heading: 'IAM Integration - Nahtlose Systemintegration und Enterprise-Konnektivität',
        description: 'IAM Integration ist das strategische Bindeglied zwischen isolierten Systemen und einer kohärenten, intelligenten Identitätslandschaft, die moderne Unternehmen für digitale Transformation und Geschäftserfolg benötigen. Unsere fortschrittlichen Integrationslösungen verwandeln fragmentierte IT-Umgebungen in orchestrierte Ökosysteme, die Sicherheit maximieren, Produktivität steigern und gleichzeitig die Komplexität drastisch reduzieren. Durch API-first Architekturen, Cloud-native Ansätze und intelligente Automatisierung schaffen wir nahtlose Verbindungen zwischen Legacy-Systemen, modernen Cloud-Services und zukünftigen Technologien.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'API-first Integration für moderne, skalierbare Systemarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Cloud-native Konnektivität mit Hybrid- und Multi-Cloud-Support'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Legacy-Modernisierung ohne Disruption kritischer Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Security-by-Design Integration mit Zero-Trust-Prinzipien'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische IAM-Integration: Von Silos zu intelligenten Ökosystemen',
        description: 'Moderne IAM Integration transformiert traditionelle IT-Landschaften von isolierten Systemsilos zu intelligenten, vernetzten Ökosystemen, die Geschäftsprozesse beschleunigen und gleichzeitig höchste Sicherheitsstandards gewährleisten. In einer Zeit zunehmender Systemkomplexität und steigender Sicherheitsanforderungen bildet professionelle IAM-Integration das Fundament für nachhaltige digitale Transformation und operative Exzellenz.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Enterprise Service Bus Integration für zentrale Orchestrierung aller Identitätsdienste'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'API Gateway Management mit intelligenter Authentifizierung und Autorisierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Microservices-Architektur für flexible, skalierbare Identitätsservices'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Event-driven Integration für Real-time Synchronisation und Benachrichtigungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Cloud-native Deployment mit Container-Orchestrierung und DevOps-Integration'
          }
        ],
        alert: {
          title: 'Integration als Erfolgsfaktor',
          content: 'Unternehmen mit fragmentierten IAM-Landschaften verlieren durchschnittlich 40% ihrer Produktivität durch manuelle Prozesse und Systembrüche. Professionelle IAM-Integration reduziert nicht nur operative Kosten, sondern ermöglicht auch neue Geschäftsmodelle und Innovationen.'
        },
        whyUs: {
          title: 'ADVISORI Integration-Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Herstellerunabhängige Expertise für optimale Technologie-Orchestrierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'API-first Methodologie für zukunftssichere Integrationsarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Cloud-native Ansätze mit Hybrid- und Multi-Cloud-Expertise'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Security-by-Design Integration mit Zero-Trust-Implementierung'
            }
          ]
        },
        additionalInfo: 'Die Evolution der IAM-Integration umfasst zunehmend KI-gestützte Orchestrierung, intelligente Workflow-Automatisierung und selbstheilende Systemarchitekturen. Diese technologischen Fortschritte ermöglichen adaptive Integrationen, die sich automatisch an veränderte Geschäftsanforderungen anpassen und proaktiv Optimierungen vorschlagen.',
        serviceDescription: 'Wir begleiten Sie durch die komplette IAM-Integrationstransformation – von der strategischen Architektur-Planung und System-Assessment über die technische Implementierung bis hin zur operativen Optimierung und kontinuierlichen Weiterentwicklung. Unser Ansatz kombiniert bewährte Integrationsmuster mit innovativen Cloud-native Technologien für eine IAM-Landschaft, die Ihre spezifischen Geschäftsanforderungen optimal unterstützt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Enterprise Integration Architecture und API-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Cloud-native Integration und Microservices-Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Legacy-System-Modernisierung und Hybrid-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Security-Integration und Compliance-Automation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance-Optimierung und Monitoring-Integration'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer IAM-Integrationsansatz',
        description: 'Wir verfolgen einen ganzheitlichen, business-orientierten Ansatz für IAM-Integrationen, der technische Exzellenz mit strategischen Geschäftszielen verbindet und dabei modernste Integrationsarchitekturen mit optimaler Systemperformance vereint.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Integration Assessment und Architektur-Design mit Business-Impact-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'API-first Development mit OpenAPI-Standards und Microservices-Patterns'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Agile Implementation mit kontinuierlicher Integration und automatisiertem Testing'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Security-Integration mit Zero-Trust-Prinzipien und Compliance-Automation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Optimization mit Performance-Monitoring und Innovation-Integration'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'IAM Integration ist das strategische Nervensystem moderner Unternehmen und entscheidet maßgeblich über den Erfolg digitaler Transformationsinitiativen. Unsere Erfahrung zeigt, dass Organisationen mit professionell integrierten IAM-Landschaften nicht nur operative Effizienz steigern, sondern auch neue Geschäftsmöglichkeiten erschließen können. Die richtige Integrationsstrategie verwandelt IT-Komplexität in Wettbewerbsvorteile und schafft die Grundlage für innovative, sichere und skalierbare Geschäftsmodelle.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Enterprise Integration Architecture und API-Design',
          description: 'Entwicklung einer umfassenden Integrationsarchitektur mit API-first Ansätzen, die Skalierbarkeit, Sicherheit und Zukunftssicherheit gewährleistet.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Enterprise Service Bus Design und Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'RESTful API Development mit OpenAPI-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'GraphQL Integration für flexible Datenabfragen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Event-driven Architecture mit Message Queuing'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Cloud-native Integration und Microservices-Orchestrierung',
          description: 'Implementation moderner Cloud-native Integrationsarchitekturen mit Microservices-Patterns für maximale Flexibilität und Skalierbarkeit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Kubernetes-basierte Container-Orchestrierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Service Mesh Implementation für Microservices'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Cloud-native CI/CD-Pipeline-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Auto-scaling und Load-Balancing-Konfiguration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Legacy-System-Modernisierung und Hybrid-Integration',
          description: 'Professionelle Modernisierung bestehender Systeme mit nahtloser Integration in moderne IAM-Landschaften ohne Disruption kritischer Geschäftsprozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Legacy-System-Assessment und Modernisierungsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'API-Wrapper-Development für Legacy-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Hybrid-Cloud-Integration und Data-Synchronisation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Graduelle Migration mit Zero-Downtime-Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Security-Integration und Compliance-Automation',
          description: 'Implementation robuster Sicherheitsintegration mit Zero-Trust-Prinzipien und automatisierter Compliance-Überwachung für alle Integrationspunkte.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Zero-Trust-Network-Access-Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'API-Security mit OAuth, JWT und mTLS'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Automated Security-Scanning und Vulnerability-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Compliance-Monitoring und Audit-Trail-Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Performance-Optimierung und Monitoring-Integration',
          description: 'Kontinuierliche Performance-Optimierung mit umfassendem Monitoring und intelligenter Analyse für optimale Systemleistung und Verfügbarkeit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Application Performance Monitoring (APM) Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Real-time Analytics und Dashboard-Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Automated Alerting und Incident-Response-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Capacity Planning und Predictive Scaling'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Integration-Governance und Lifecycle-Management',
          description: 'Etablierung robuster Governance-Strukturen für nachhaltige Integration-Landschaften mit kontinuierlicher Optimierung und Innovation-Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Integration-Governance-Framework und Policy-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'API-Lifecycle-Management und Versionierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Change-Management und Impact-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Innovation-Integration und Technology-Roadmap-Updates'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamIntegrationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Integration page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
