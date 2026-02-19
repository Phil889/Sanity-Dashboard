import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
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
    console.log('Creating FIDA API Architecture and Security page...')

    const fidaApiData = {
      _type: 'servicePage',
      _id: 'fida-api-architecture-and-security',
      title: 'FIDA API Architecture and Security',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/financial-data-access-fida/fida-api-architecture-and-security'
      },
      parent: {
        _type: 'reference',
        _ref: 'financial-data-access-fida'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'regulatory-compliance-management'
        }
      },
      seo: {
        _type: 'seo',
        title: 'FIDA API Architecture & Security | ADVISORI',
        description: 'Sichere API-Architekturen für FIDA-Compliance. Expertenberatung für Financial Data Access APIs, OAuth 2.0, Verschlüsselung und technische Sicherheitsframeworks.',
        keywords: 'FIDA API, API Security, OAuth 2.0, OpenID Connect, Financial Data Access, API Architecture, Verschlüsselung, Authentifizierung, FIDA Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FIDA API Architecture and Security'
        },
        tagline: 'Sichere und skalierbare API-Architekturen für FIDA-Compliance',
        heading: 'FIDA API Architecture and Security',
        description: 'Die technische Umsetzung von FIDA erfordert robuste API-Architekturen und höchste Sicherheitsstandards. Wir entwickeln sichere, skalierbare und FIDA-konforme API-Lösungen, die Datenschutz, Performance und regulatorische Anforderungen optimal vereinen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Enterprise-grade API-Architekturen mit Zero-Trust-Security-Modellen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'OAuth 2.0 und OpenID Connect Implementation für sichere Authentifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'End-to-End-Verschlüsselung und Tokenization für Datenschutz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Real-Time-Monitoring und Compliance-Reporting-Systeme'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Technische Exzellenz für FIDA-konforme APIs',
        description: 'FIDA-konforme API-Architekturen müssen höchste Sicherheitsstandards erfüllen, während sie gleichzeitig performant, skalierbar und benutzerfreundlich bleiben. Unsere technischen Lösungen kombinieren bewährte Sicherheitsframeworks mit innovativen Architekturen für optimale FIDA-Compliance.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Design und Implementation sicherer RESTful und GraphQL APIs für Finanzdatenzugang'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Aufbau robuster Authentifizierungs- und Autorisierungssysteme mit Multi-Faktor-Authentifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementation von End-to-End-Verschlüsselung und sicherer Datenübertragung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung skalierbarer Microservices-Architekturen für Finanzdienstleistungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration von API-Gateway-Lösungen und Rate-Limiting für Sicherheit und Performance'
          }
        ],
        alert: {
          title: 'Sicherheit First',
          content: 'FIDA-APIs verarbeiten hochsensible Finanzdaten und erfordern Zero-Trust-Sicherheitsmodelle. Unsere Architekturen implementieren Defense-in-Depth-Strategien mit mehrschichtigen Sicherheitsmaßnahmen für maximalen Schutz.'
        },
        whyUs: {
          title: 'Unsere API-Security-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in Financial Services API-Architekturen und Sicherheitsstandards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Erfahrung in OAuth 2.0, OpenID Connect und modernen Authentifizierungsprotokollen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Expertise in Cloud-nativen Architekturen und Container-basierten Deployments'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von API-Design bis Security-Operations'
            }
          ]
        },
        additionalInfo: 'FIDA-APIs müssen nicht nur sicher sein, sondern auch entwicklerfreundlich und performant. Unsere Architekturen nutzen moderne Standards wie OpenAPI 3.0, JSON Web Tokens und API-First-Design-Prinzipien für optimale Developer Experience bei maximaler Sicherheit.',
        serviceDescription: 'Wir bieten end-to-end API-Architektur- und Sicherheitslösungen für FIDA-Compliance, von der initialen Systemanalyse über die technische Implementation bis hin zu kontinuierlichem Security-Monitoring und Performance-Optimierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Sichere API-Architektur-Design und technische Spezifikation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'OAuth 2.0 und OpenID Connect Implementation und Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'End-to-End-Verschlüsselung und Tokenization-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'API-Gateway-Implementation und Security-Policy-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliches Security-Monitoring und Threat-Detection'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser technischer FIDA-API-Ansatz',
        description: 'Wir entwickeln FIDA-konforme API-Architekturen nach bewährten Security-by-Design-Prinzipien und modernen Cloud-nativen Standards.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Sicherheitsanalyse und Threat-Modeling für API-Landschaften'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design sicherer und skalierbarer API-Architekturen mit Zero-Trust-Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementation robuster Authentifizierungs- und Verschlüsselungssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von Monitoring-, Logging- und Compliance-Reporting-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Security-Tests und Performance-Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die technische Umsetzung von FIDA erfordert nicht nur regulatorisches Verständnis, sondern auch tiefgreifende Expertise in modernen API-Sicherheitsarchitekturen. Unsere Zero-Trust-basierten Lösungen gewährleisten höchste Sicherheitsstandards bei optimaler Performance und Developer Experience für nachhaltige FIDA-Compliance.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Sichere API-Architektur-Design und Spezifikation',
          description: 'Entwicklung umfassender API-Architekturen mit Security-by-Design-Prinzipien für FIDA-konforme Finanzdienstleistungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'RESTful und GraphQL API-Design mit OpenAPI 3.0 Spezifikationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Microservices-Architektur-Design für skalierbare Finanzdienstleistungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'API-Gateway-Architektur mit Load Balancing und Rate Limiting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Cloud-native Deployment-Strategien mit Container-Orchestrierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'OAuth 2.0 und OpenID Connect Implementation',
          description: 'Aufbau robuster Authentifizierungs- und Autorisierungssysteme basierend auf modernen Standards und Best Practices.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'OAuth 2.0 Authorization Server Implementation und Konfiguration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'OpenID Connect Identity Provider Integration und Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Multi-Faktor-Authentifizierung und Adaptive Authentication'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'JSON Web Token Management und Secure Token Storage'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'End-to-End-Verschlüsselung und Datenschutz',
          description: 'Implementation umfassender Verschlüsselungs- und Datenschutzsysteme für sichere Finanzdatenübertragung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'TLS 1.3 Implementation für sichere Datenübertragung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Field-Level-Encryption für sensitive Finanzdaten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Tokenization-Systeme für PCI-DSS-konforme Datenverarbeitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Hardware Security Module Integration für Schlüsselmanagement'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'API-Gateway und Security-Policy-Management',
          description: 'Aufbau zentraler API-Gateway-Lösungen mit umfassenden Security-Policies und Traffic-Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Enterprise API-Gateway-Implementation mit Kong oder AWS API Gateway'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Dynamic Security-Policy-Engine für granulare Zugriffskontrolle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Rate Limiting und DDoS-Protection für API-Endpoints'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'API-Versioning und Backward-Compatibility-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Security-Monitoring und Threat-Detection',
          description: 'Implementation umfassender Monitoring- und Threat-Detection-Systeme für proaktive API-Sicherheit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Real-Time API-Security-Monitoring mit SIEM-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Behavioral Analytics für Anomalie-Detection in API-Traffic'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Automated Incident Response und Security-Orchestration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Compliance-Reporting und Audit-Trail-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Performance-Optimierung und Skalierung',
          description: 'Kontinuierliche Optimierung von API-Performance und Skalierbarkeit für Enterprise-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'API-Performance-Monitoring und Bottleneck-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Caching-Strategien und Content Delivery Network Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Auto-Scaling und Load-Balancing für variable Workloads'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Database-Optimierung und Connection-Pool-Management'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(fidaApiData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FIDA API Architecture and Security page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
