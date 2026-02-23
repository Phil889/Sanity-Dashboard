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
    console.log('Creating DORA Anwendungsbereich (Scope) page...')

    const doraAnwendungsbereichData = {
      _type: 'servicePage',
      _id: 'dora-anwendungsbereich-scope',
      title: 'DORA Anwendungsbereich (Scope)',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dora-digital-operational-resilience-act/dora-anwendungsbereich-scope'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management'
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
        title: 'DORA Anwendungsbereich & Scope | ADVISORI',
        description: 'Präzise Bestimmung des DORA-Anwendungsbereichs für Finanzinstitute. Expertenberatung zur Identifikation betroffener Entitäten, Drittanbieter und kritischer Services unter der Digital Operational Resilience Act.',
        keywords: 'DORA Anwendungsbereich, DORA Scope, Finanzinstitute, Drittanbieter, kritische Services, Digital Operational Resilience Act, EU-Regulierung, Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DORA Anwendungsbereich und Scope'
        },
        tagline: 'Präzise Scope-Bestimmung für DORA-Compliance',
        heading: 'DORA Anwendungsbereich (Scope)',
        description: 'Die korrekte Bestimmung des DORA-Anwendungsbereichs ist fundamental für eine erfolgreiche Compliance-Strategie. Wir unterstützen Sie bei der präzisen Identifikation aller betroffenen Entitäten, Services und Drittanbieter-Beziehungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Erfassung aller DORA-relevanten Entitäten und Services'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Systematische Drittanbieter-Klassifizierung und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Grenzüberschreitende Compliance-Mapping für Konzernstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Scope-Überwachung und Anpassung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DORA Anwendungsbereich verstehen und umsetzen',
        description: 'Der Digital Operational Resilience Act (DORA) definiert einen spezifischen Anwendungsbereich, der verschiedene Kategorien von Finanzinstituten und deren Drittanbieter umfasst. Eine präzise Scope-Bestimmung ist entscheidend für die Entwicklung einer effektiven Compliance-Strategie und die Vermeidung regulatorischer Risiken.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Analyse der DORA-Entitätskategorien und deren spezifische Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Identifikation und Klassifizierung kritischer IKT-Drittanbieter und deren Services'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Bewertung grenzüberschreitender Implikationen für internationale Konzernstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung von Scope-Management-Prozessen für kontinuierliche Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration der Scope-Analyse in bestehende Governance- und Risikomanagement-Frameworks'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine unvollständige oder fehlerhafte Scope-Bestimmung kann zu erheblichen Compliance-Lücken führen. Besonders bei komplexen Konzernstrukturen und umfangreichen Drittanbieter-Ökosystemen ist eine systematische, dokumentierte Herangehensweise unerlässlich.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnis der DORA-Regulierung und deren praktische Anwendung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden zur systematischen Scope-Analyse und Entitätsklassifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Erfahrung mit komplexen internationalen Finanzdienstleistungsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Pragmatische Lösungsansätze für effiziente und nachhaltige Compliance-Umsetzung'
            }
          ]
        },
        additionalInfo: 'Der DORA-Anwendungsbereich umfasst nicht nur traditionelle Banken, sondern auch Versicherungen, Investmentfirmen, Krypto-Asset-Dienstleister und deren kritische IKT-Drittanbieter. Die korrekte Scope-Bestimmung erfordert eine detaillierte Analyse der Geschäftstätigkeiten, Organisationsstrukturen und technologischen Abhängigkeiten.',
        serviceDescription: 'Wir bieten umfassende Unterstützung bei der Bestimmung und Verwaltung des DORA-Anwendungsbereichs. Unser systematischer Ansatz gewährleistet eine vollständige Erfassung aller relevanten Entitäten und Services sowie eine effiziente Umsetzung der entsprechenden Compliance-Anforderungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Comprehensive DORA Scope Assessment und Entitätsklassifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Drittanbieter-Mapping und kritische Service-Identifikation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Grenzüberschreitende Compliance-Analyse für Konzernstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Entwicklung von Scope-Management-Frameworks und -Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Scope-Überwachung und regulatorische Updates'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Ansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte Strategie zur präzisen Bestimmung und kontinuierlichen Verwaltung Ihres DORA-Anwendungsbereichs.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer Organisationsstruktur und Geschäftstätigkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematische Identifikation und Klassifizierung aller DORA-relevanten Entitäten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Detaillierte Drittanbieter-Analyse und kritische Service-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung von Dokumentations- und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Implementierung kontinuierlicher Monitoring- und Update-Prozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Eine präzise DORA-Scope-Bestimmung ist das Fundament jeder erfolgreichen Compliance-Strategie. Unsere systematische Herangehensweise gewährleistet, dass alle relevanten Entitäten und Abhängigkeiten erfasst werden, während gleichzeitig praktikable und effiziente Umsetzungswege entwickelt werden.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'DORA Scope Assessment und Entitätsklassifizierung',
          description: 'Systematische Analyse und Klassifizierung aller Entitäten innerhalb Ihrer Organisation zur Bestimmung der DORA-Anwendbarkeit und spezifischen Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse der Organisationsstruktur und Geschäftstätigkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Klassifizierung nach DORA-Entitätskategorien und Schwellenwerten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Bewertung spezifischer Anforderungen für jede identifizierte Entität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Dokumentation und Begründung der Scope-Entscheidungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Drittanbieter-Impact-Analyse und kritische Service-Identifikation',
          description: 'Umfassende Bewertung Ihres Drittanbieter-Ökosystems zur Identifikation kritischer IKT-Services und deren DORA-Implikationen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Vollständige Erfassung und Kategorisierung aller IKT-Drittanbieter'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Bewertung der Kritikalität von Services und Abhängigkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Analyse der DORA-Compliance-Anforderungen für kritische Drittanbieter'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Entwicklung von Drittanbieter-Management-Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Grenzüberschreitende Compliance-Mapping',
          description: 'Spezialisierte Analyse für internationale Konzernstrukturen zur Bestimmung der DORA-Anwendbarkeit in verschiedenen Jurisdiktionen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Analyse der Konzernstruktur und grenzüberschreitenden Aktivitäten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Bewertung der DORA-Anwendbarkeit für Tochtergesellschaften und Zweigstellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Koordination mit lokalen regulatorischen Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Entwicklung konzernweiter Compliance-Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Scope-Management-Framework-Entwicklung',
          description: 'Aufbau robuster Governance-Strukturen und Prozesse für die kontinuierliche Verwaltung und Überwachung des DORA-Anwendungsbereichs.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Design von Scope-Governance-Strukturen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Entwicklung von Dokumentations- und Reporting-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Implementierung von Change-Management-Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Integration in bestehende Risikomanagement-Frameworks'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Kontinuierliche Scope-Überwachung und Updates',
          description: 'Etablierung systematischer Monitoring-Prozesse zur Gewährleistung der kontinuierlichen Aktualität und Vollständigkeit Ihrer DORA-Scope-Bestimmung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Implementierung automatisierter Monitoring-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Regelmäßige Scope-Reviews und Aktualisierungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Tracking regulatorischer Entwicklungen und deren Auswirkungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Proaktive Anpassung bei Geschäfts- oder Strukturveränderungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'DORA-Readiness-Assessment und Gap-Analyse',
          description: 'Umfassende Bewertung Ihrer aktuellen Compliance-Position und Identifikation spezifischer Handlungsfelder basierend auf Ihrem individuellen DORA-Scope.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Scope-spezifische Readiness-Bewertung und Maturity-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Identifikation und Priorisierung von Compliance-Gaps'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Entwicklung maßgeschneiderter Umsetzungsroadmaps'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kosten-Nutzen-Analyse verschiedener Compliance-Ansätze'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(doraAnwendungsbereichData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DORA Anwendungsbereich (Scope) page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
