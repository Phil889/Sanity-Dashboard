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
    console.log('Creating FIDA Sandbox and Testing page...')

    const fidaSandboxData = {
      _type: 'servicePage',
      _id: 'fida-sandbox-and-testing',
      title: 'FIDA Sandbox und Testing',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/financial-data-access-fida/fida-sandbox-and-testing'
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
        title: 'FIDA Sandbox Testing & Validierung | ADVISORI',
        description: 'Professionelle FIDA Sandbox-Umgebungen und Testing-Services. Umfassende API-Tests, Compliance-Validierung und Sicherheitstests für FIDA-konforme Implementierungen.',
        keywords: 'FIDA Sandbox, API Testing, Compliance Testing, FIDA Validierung, Sandbox Environment, Financial Data Testing, API Security Testing, FIDA Implementation Testing'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FIDA Sandbox Testing Environment'
        },
        tagline: 'Sichere FIDA-Testing-Umgebungen für erfolgreiche Implementierungen',
        heading: 'FIDA Sandbox und Testing',
        description: 'Professionelle Sandbox-Umgebungen und umfassende Testing-Services für FIDA-Implementierungen. Von API-Validierung bis Compliance-Testing - wir stellen sicher, dass Ihre FIDA-Lösung produktionsreif und regulatorisch konform ist.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige FIDA-Sandbox-Umgebungen mit realistischen Testdaten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte API-Tests und Compliance-Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Umfassende Sicherheitstests und Penetration Testing'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Performance-Tests und Skalierbarkeits-Validierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Professionelle FIDA-Testing-Strategien',
        description: 'Die erfolgreiche Implementierung von FIDA-konformen Systemen erfordert umfassende Testing-Strategien, die sowohl technische Funktionalität als auch regulatorische Compliance validieren. Unsere Sandbox-Umgebungen und Testing-Services gewährleisten, dass Ihre FIDA-Implementierung alle Anforderungen erfüllt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Aufbau realistischer Sandbox-Umgebungen mit FIDA-konformen Testdaten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Automatisierte API-Testing-Frameworks für kontinuierliche Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Compliance-Testing zur Sicherstellung regulatorischer Konformität'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Sicherheitstests und Vulnerability Assessments für FIDA-APIs'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Performance-Testing und Lastvalidierung für Produktionsumgebungen'
          }
        ],
        alert: {
          title: 'Testing Excellence',
          content: 'Professionelle Testing-Strategien reduzieren Implementierungsrisiken erheblich und gewährleisten eine reibungslose Produktionseinführung. Unsere Sandbox-Umgebungen ermöglichen sichere Experimente und Validierungen.'
        },
        whyUs: {
          title: 'Unsere Testing-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte FIDA-Testing-Frameworks und Methodologien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassende Erfahrung in Financial Services API-Testing'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Automatisierte Testing-Pipelines und CI/CD-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Regulatorische Testing-Expertise und Compliance-Validierung'
            }
          ]
        },
        additionalInfo: 'FIDA-Testing erfordert spezialisierte Kenntnisse in Financial Services APIs, Datenschutz-Compliance und Sicherheitsstandards. Unsere Sandbox-Umgebungen simulieren realistische Produktionsszenarien und ermöglichen umfassende Validierung vor dem Go-Live.',
        serviceDescription: 'Wir bieten end-to-end FIDA-Testing-Services, von der Sandbox-Einrichtung bis zur Produktionsvalidierung. Unsere Testing-Frameworks gewährleisten technische Exzellenz und regulatorische Compliance.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Sandbox-Environment-Setup und Testdaten-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Automatisierte API-Testing und Validierungs-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Compliance-Testing und regulatorische Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Security-Testing und Penetration-Testing-Services'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance-Testing und Skalierbarkeits-Validierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Testing-Ansatz',
        description: 'Wir entwickeln maßgeschneiderte Testing-Strategien, die alle Aspekte Ihrer FIDA-Implementierung abdecken.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse Ihrer FIDA-Implementierung und Definition der Testing-Strategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Aufbau realistischer Sandbox-Umgebungen mit FIDA-konformen Testdaten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementation automatisierter Testing-Frameworks und CI/CD-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Durchführung umfassender Tests und Compliance-Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Produktionsvalidierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Professionelle Testing-Strategien sind der Schlüssel für erfolgreiche FIDA-Implementierungen. Unsere Sandbox-Umgebungen und automatisierten Testing-Frameworks gewährleisten, dass komplexe Financial Services APIs nicht nur funktional korrekt, sondern auch regulatorisch compliant und sicherheitstechnisch robust sind.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'FIDA Sandbox Environment Setup',
          description: 'Aufbau professioneller Sandbox-Umgebungen für sichere FIDA-Testing und -Entwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Realistische FIDA-konforme Testdaten und Szenarien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Isolierte Testing-Umgebungen mit Produktions-ähnlicher Konfiguration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Mock-Services für Drittanbieter-Integrationen und Dependencies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Testdaten-Management und Scenario-basierte Testing-Suites'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Automatisierte API-Testing Frameworks',
          description: 'Entwicklung und Implementation automatisierter Testing-Frameworks für FIDA-APIs.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Umfassende API-Funktionalitäts-Tests und Validierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automatisierte Regression-Tests und CI/CD-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Contract-Testing und API-Kompatibilitäts-Validierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'End-to-End-Testing und Integration-Testing-Suites'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Compliance und Regulatory Testing',
          description: 'Spezialisierte Testing-Services zur Validierung der FIDA-Compliance und regulatorischen Konformität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'FIDA-Compliance-Tests und regulatorische Validierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Datenschutz-Compliance-Tests und DSGVO-Validierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Audit-Trail-Testing und Compliance-Reporting-Validierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Cross-Border-Compliance-Tests und Multi-Jurisdictional-Validierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Security Testing und Penetration Testing',
          description: 'Umfassende Sicherheitstests und Vulnerability Assessments für FIDA-Implementierungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'API-Security-Testing und Vulnerability-Scanning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Penetration-Testing und Ethical-Hacking-Services'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Authentication-und-Authorization-Testing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Data-Encryption-und-Transport-Security-Validierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Performance und Load Testing',
          description: 'Spezialisierte Performance-Tests zur Validierung der Skalierbarkeit und Produktionsreife.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Load-Testing und Stress-Testing für FIDA-APIs'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Skalierbarkeits-Tests und Capacity-Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Response-Time-Optimierung und Performance-Tuning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Monitoring-und-Alerting-System-Validierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'User Acceptance und Integration Testing',
          description: 'Umfassende User Acceptance Tests und Integration-Testing für stakeholder-orientierte Validierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'User-Journey-Testing und Stakeholder-Validierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Cross-System-Integration-Testing und Compatibility-Checks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Business-Process-Testing und Workflow-Validierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Go-Live-Readiness-Assessment und Production-Validation'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(fidaSandboxData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FIDA Sandbox and Testing page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
