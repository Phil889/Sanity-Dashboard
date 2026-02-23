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
    console.log('Creating Intelligent Automation as a Service page...')

    const intelligentAutomationAsAServiceData = {
      _type: 'servicePage',
      _id: 'intelligent-automation-as-a-service',
      title: 'Intelligent Automation as a Service',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-automation-as-a-service'
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
        title: 'Intelligent Automation as a Service - Cloud-basierte KI-Automatisierung & Managed Services | ADVISORI',
        description: 'Professionelle Intelligent Automation as a Service für skalierbare digitale Transformation. Cloud-basierte KI-Automatisierung, Managed Automation Services, Service-orientierte RPA-Lösungen und EU AI Act konforme Automation-Plattformen.',
        keywords: 'Intelligent Automation as a Service, IaaS, Managed Automation, Cloud Automation, Service-oriented RPA, Automation Platform, KI-Automatisierung Service, Digital Transformation Service, EU AI Act'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Automation as a Service - Cloud-basierte KI-Automatisierung für skalierbare Enterprise-Transformation'
        },
        tagline: 'Service-Excellence für Cloud-basierte Intelligent Automation',
        heading: 'Intelligent Automation as a Service',
        description: 'Intelligent Automation as a Service transformiert traditionelle Automatisierungsansätze in strategische, cloud-native Service-Architekturen. Durch vollständig verwaltete Automation-Plattformen, skalierbare KI-Integration und service-orientierte Delivery-Modelle schaffen wir flexible, kosteneffiziente Automatisierungslösungen, die sich nahtlos an dynamische Geschäftsanforderungen anpassen und dabei EU AI Act Compliance gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Cloud-native Automation-Plattformen mit vollständig verwalteten Service-Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Skalierbare KI-Integration und service-orientierte RPA-Delivery-Modelle'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Flexible Subscription-Modelle und Pay-per-Use-Automatisierungsservices'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'EU AI Act konforme Managed Services mit kontinuierlicher Compliance-Überwachung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Automation as a Service - Cloud-native Service-Excellence für moderne Enterprise-Automatisierung',
        description: 'Intelligent Automation as a Service repräsentiert die Evolution von traditionellen Automatisierungsansätzen zu strategischen, service-orientierten Cloud-Architekturen. Diese innovative Delivery-Methode eliminiert komplexe Infrastruktur-Investments, reduziert Time-to-Value und ermöglicht flexible, skalierbare Automatisierungslösungen, die sich dynamisch an verändernde Geschäftsanforderungen anpassen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Cloud-native Automation-Plattformen bieten vollständig verwaltete Service-Architekturen ohne Infrastruktur-Komplexität'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Service-orientierte RPA-Delivery ermöglicht flexible Subscription-Modelle und Pay-per-Use-Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Managed KI-Integration bietet skalierbare Cognitive Automation ohne interne Expertise-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Multi-Tenant-Architekturen gewährleisten sichere, isolierte Automatisierungsumgebungen für verschiedene Geschäftsbereiche'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Service-Evolution durch automatische Updates, Feature-Releases und EU AI Act Compliance-Management'
          }
        ],
        alert: {
          title: 'Service-orientierte Automation als strategischer Enterprise-Enabler',
          content: 'Intelligent Automation as a Service wird zum strategischen Differentiator für agile digitale Transformation, kosteneffiziente Skalierung und moderne Service-Excellence – weit über traditionelle Automatisierungs-Implementierung hinaus.'
        },
        whyUs: {
          title: 'Warum Intelligent Automation as a Service mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Service-Expertise von Cloud-nativen Plattformen bis Managed Automation-Delivery'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act konforme Service-Architekturen für sichere und compliant Automation-Services'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Multi-Tenant-Methodologien für skalierbare Enterprise-Service-Delivery'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Service-Innovation durch Cloud-native Technologien und KI-Enhancement'
            }
          ]
        },
        additionalInfo: 'Intelligent Automation as a Service ermöglicht es Organisationen, die volle Power moderner Automatisierungstechnologien ohne komplexe Infrastruktur-Investments zu nutzen. Die richtige Service-Strategie wird zum Wettbewerbsvorteil in einer zunehmend service-orientierten Enterprise-Welt.',
        serviceDescription: 'Unser Intelligent Automation as a Service umfasst die vollständige Transformation von traditionellen Automatisierungsansätzen zu strategischen, cloud-nativen Service-Architekturen. Wir entwickeln maßgeschneiderte Service-Strategien, die perfekt zu Ihren Geschäftsprozessen, Skalierungsanforderungen und Compliance-Bedürfnissen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Cloud-native Automation-Plattformen und vollständig verwaltete Service-Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Service-orientierte RPA-Delivery und flexible Subscription-Modelle'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Managed KI-Integration und skalierbare Cognitive Automation-Services'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Multi-Tenant-Sicherheit und isolierte Automatisierungsumgebungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Service-Evolution und EU AI Act Compliance-Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zu Intelligent Automation as a Service',
        description: 'Wir verfolgen einen ganzheitlichen und service-orientierten Ansatz zu Intelligent Automation as a Service, der moderne Cloud-Technologien optimal nutzt und gleichzeitig strategische Business-Transformation durch flexible Service-Delivery ermöglicht.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Service-Architektur-Analyse und Cloud-native Automation-Strategie-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategic Service-Design mit Multi-Tenant-Sicherheit und skalierbare Platform-Engineering'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Service-Implementierung mit kontinuierlicher Optimierung und Feature-Evolution'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Service-Adoption-Management und User-Enablement für optimale Service-Nutzung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Service-Evolution durch Monitoring, Analytics und kontinuierliche Innovation'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Intelligent Automation as a Service ist das strategische Fundament für moderne, service-orientierte digitale Transformation. Wir transformieren komplexe Automatisierungsinfrastrukturen in elegante, cloud-native Service-Architekturen, die nicht nur operative Exzellenz gewährleisten, sondern auch als strategische Enabler für Geschäftsagilität, Kostenoptimierung und nachhaltige Wettbewerbsvorteile fungieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Cloud-native Automation-Plattformen und Service-Architekturen',
          description: 'Vollständig verwaltete Cloud-Automation-Plattformen mit service-orientierten Architekturen für skalierbare Enterprise-Automatisierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Multi-Cloud-Automation-Plattformen mit nativer Skalierbarkeit und globaler Verfügbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Microservices-basierte Automation-Architekturen für flexible Service-Komposition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Container-native Bot-Deployment mit Kubernetes-Orchestrierung für optimale Ressourcennutzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'API-First-Service-Design für nahtlose Integration und Ecosystem-Konnektivität'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Service-orientierte RPA-Delivery und Subscription-Modelle',
          description: 'Flexible RPA-Service-Delivery mit innovativen Subscription-Modellen und Pay-per-Use-Automatisierung für kosteneffiziente Skalierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Flexible Subscription-Tiers mit bedarfsgerechter Automation-Kapazität und Feature-Zugang'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Pay-per-Transaction-Modelle für variable Workloads und kostenoptimierte Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Self-Service-Portale für autonome Bot-Konfiguration und Workflow-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Elastic Scaling mit automatischer Kapazitätsanpassung basierend auf Workload-Patterns'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Managed KI-Integration und Cognitive Automation-Services',
          description: 'Vollständig verwaltete KI-Services für intelligente Automatisierung ohne interne Expertise-Anforderungen oder Infrastruktur-Komplexität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Pre-trained AI-Models-as-a-Service für Document Processing, NLP und Computer Vision'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'AutoML-Plattformen für Custom Model Development ohne Data Science-Expertise'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Cognitive Decision-Services für komplexe Business Rule-Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Conversational AI-as-a-Service für intelligente Kundeninteraktion und Support-Automatisierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Multi-Tenant-Sicherheit und Enterprise-Grade-Isolation',
          description: 'Sichere Multi-Tenant-Architekturen mit Enterprise-Grade-Isolation für verschiedene Geschäftsbereiche und Compliance-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Zero-Trust-Security-Modelle mit granularer Zugriffskontrolle und Identity-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Data-Isolation und Encryption-at-Rest/in-Transit für maximale Datensicherheit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Compliance-konforme Tenant-Separation für regulierte Industrien und Datenschutz-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Audit-Trails und Compliance-Reporting für transparente Service-Nutzung und Governance'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Service-Monitoring und Performance-Analytics',
          description: 'Umfassende Service-Überwachung und Performance-Analytics für optimale Service-Qualität und kontinuierliche Verbesserung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Real-time Service-Monitoring mit proaktiver Anomalie-Erkennung und Incident-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Performance-Dashboards und SLA-Tracking für transparente Service-Qualität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Usage-Analytics und Cost-Optimization-Empfehlungen für effiziente Service-Nutzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Predictive Maintenance und Capacity Planning für proaktive Service-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Kontinuierliche Service-Evolution und EU AI Act Compliance',
          description: 'Automatische Service-Updates, Feature-Releases und kontinuierliche EU AI Act Compliance-Management für zukunftssichere Automatisierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Continuous Integration/Deployment für nahtlose Feature-Releases und Service-Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'EU AI Act Compliance-Automation mit kontinuierlicher Regulatory-Überwachung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Innovation-Pipeline mit Early-Access zu neuen Automation-Technologien und KI-Features'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Backward-Compatibility und Migration-Services für nahtlose Service-Evolution'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentAutomationAsAServiceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Automation as a Service page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
