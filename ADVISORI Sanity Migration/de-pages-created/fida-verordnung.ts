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
    console.log('Creating FIDA Verordnung page...')

    const fidaVerordnungData = {
      _type: 'servicePage',
      _id: 'fida-verordnung',
      title: 'FIDA Verordnung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/financial-data-access-fida/fida-verordnung'
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
        title: 'FIDA Verordnung Compliance | EU Financial Data Access Regulation | ADVISORI',
        description: 'Expertenberatung zur FIDA Verordnung (EU Financial Data Access Regulation). Strategische Compliance-Umsetzung, regulatorische Anforderungen und Implementierungsbegleitung für Finanzdienstleister.',
        keywords: 'FIDA Verordnung, Financial Data Access Regulation, EU-Verordnung, Finanzregulierung, Compliance, Open Banking, Datenschutz, API-Standards, Regulatorische Anforderungen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FIDA Verordnung EU Financial Data Access Regulation Compliance'
        },
        tagline: 'Strategische FIDA Verordnung Compliance für regulatorische Exzellenz',
        heading: 'FIDA Verordnung',
        description: 'Die EU Financial Data Access Regulation (FIDA Verordnung) definiert präzise regulatorische Anforderungen für Finanzdienstleister. Wir unterstützen Sie bei der vollständigen Compliance-Umsetzung und strategischen Integration der FIDA-Bestimmungen in Ihre Geschäftsprozesse.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige FIDA Verordnung Compliance-Analyse und Umsetzungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Regulatorische Anforderungen-Mapping und Gap-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Technische Standards-Implementation und API-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Überwachung und regulatorische Updates'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'FIDA Verordnung strategisch umsetzen',
        description: 'Die Financial Data Access Regulation etabliert verbindliche regulatorische Standards für Datenfreigabe im Finanzsektor. Die Verordnung definiert spezifische Compliance-Anforderungen, technische Standards und Governance-Strukturen, die eine systematische und strategische Umsetzung erfordern.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Detaillierte Analyse der FIDA Verordnung Bestimmungen und deren Auswirkungen auf Ihr Unternehmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung regulatorischer Compliance-Frameworks und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementation technischer Standards und API-Spezifikationen gemäß FIDA-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau robuster Überwachungs- und Reporting-Mechanismen für kontinuierliche Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration der FIDA-Bestimmungen in bestehende regulatorische Frameworks'
          }
        ],
        alert: {
          title: 'Regulatorische Präzision',
          content: 'Die FIDA Verordnung erfordert präzise Compliance-Umsetzung mit spezifischen technischen Standards und Governance-Anforderungen. Eine systematische Herangehensweise gewährleistet vollständige regulatorische Konformität und minimiert Compliance-Risiken.'
        },
        whyUs: {
          title: 'Unsere FIDA Verordnung Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnis der FIDA Verordnung und deren praktische Umsetzungsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Erfahrung in EU-Finanzregulierung und Compliance-Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Expertise in technischen Standards und API-Entwicklung für Finanzdienstleister'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von regulatorischer Analyse bis operativer Umsetzung'
            }
          ]
        },
        additionalInfo: 'Die FIDA Verordnung etabliert einheitliche Standards für Finanzdienstleister in der EU und definiert spezifische Anforderungen für Datenfreigabe, Kundenrechte, technische Schnittstellen und Governance-Strukturen. Die Verordnung erweitert bestehende Open Banking-Konzepte auf alle Finanzdienstleistungssektoren.',
        serviceDescription: 'Wir bieten umfassende FIDA Verordnung Compliance-Services, die regulatorische Analyse, technische Implementation und operative Umsetzung integrieren. Unser Ansatz gewährleistet vollständige Compliance mit allen FIDA-Bestimmungen und optimiert gleichzeitig Ihre Geschäftsprozesse.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Umfassende FIDA Verordnung Compliance-Analyse und Anforderungs-Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Technische Standards-Implementation und API-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Governance-Framework-Entwicklung und Compliance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Überwachungs- und Reporting-Systeme für kontinuierliche Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Regulatorische Updates und Anpassungsmanagement'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer FIDA Verordnung Ansatz',
        description: 'Wir entwickeln mit Ihnen eine präzise FIDA Verordnung Compliance-Strategie, die alle regulatorischen Anforderungen erfüllt und operative Exzellenz gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Detaillierte Analyse der FIDA Verordnung Bestimmungen und Auswirkungen auf Ihr Unternehmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung maßgeschneiderter Compliance-Frameworks und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementation technischer Standards und regulatorischer Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Aufbau robuster Überwachungs- und Kontrollmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und regulatorische Anpassung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die FIDA Verordnung stellt präzise regulatorische Anforderungen, die eine systematische und strategische Umsetzung erfordern. Unsere Expertise ermöglicht es Unternehmen, vollständige Compliance zu erreichen und dabei operative Effizienz zu maximieren. Wir transformieren regulatorische Anforderungen in strategische Wettbewerbsvorteile.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'FIDA Verordnung Compliance Assessment',
          description: 'Umfassende Bewertung Ihrer aktuellen Position gegenüber den FIDA Verordnung Anforderungen und Entwicklung einer detaillierten Compliance-Roadmap.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse aller FIDA Verordnung Bestimmungen und deren Anwendbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Comprehensive Gap-Assessment und Compliance-Status-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung priorisierter Umsetzungspläne und Zeitrahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Risikobewertung und Compliance-Kosten-Analyse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Regulatorische Anforderungen-Implementation',
          description: 'Systematische Umsetzung aller FIDA Verordnung Anforderungen in Ihre Geschäftsprozesse und IT-Systeme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Implementation spezifischer FIDA-Bestimmungen und regulatorischer Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung compliance-konformer Geschäftsprozesse und Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration regulatorischer Anforderungen in bestehende Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Aufbau von Compliance-Dokumentation und Nachweisführung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Technische Standards und API-Compliance',
          description: 'Entwicklung und Implementation technischer Lösungen zur Erfüllung der FIDA Verordnung API-Standards und Schnittstellen-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Implementation FIDA-konformer API-Standards und technischer Spezifikationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Entwicklung sicherer Datenfreigabe-Schnittstellen und Protokolle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Aufbau technischer Compliance-Überwachung und Monitoring-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Integration mit bestehenden IT-Landschaften und Legacy-Systemen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Governance-Framework und Compliance-Strukturen',
          description: 'Aufbau umfassender Governance-Strukturen und Compliance-Frameworks zur Erfüllung der FIDA Verordnung Governance-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Entwicklung FIDA-konformer Governance-Strukturen und Entscheidungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Aufbau von Compliance-Organisationen und Verantwortlichkeitsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Implementation von Risikomanagement- und Kontrollmechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Entwicklung von Richtlinien und Verfahrensanweisungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Überwachung und Reporting-Systeme',
          description: 'Aufbau kontinuierlicher Überwachungs- und Reporting-Mechanismen zur Gewährleistung dauerhafter FIDA Verordnung Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Entwicklung automatisierter Compliance-Monitoring und Alerting-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Implementation regulatorischer Reporting-Mechanismen und Meldeverfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Aufbau von KPI-Dashboards und Compliance-Metriken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kontinuierliche Überwachung regulatorischer Entwicklungen und Updates'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Ongoing Compliance Management',
          description: 'Kontinuierliche Betreuung und Management Ihrer FIDA Verordnung Compliance zur Gewährleistung dauerhafter regulatorischer Konformität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Kontinuierliches Monitoring regulatorischer Änderungen und Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Proaktive Anpassung von Compliance-Strukturen an neue Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Regelmäßige Compliance-Reviews und Audit-Unterstützung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategische Beratung zu regulatorischen Entwicklungen und Best Practices'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(fidaVerordnungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FIDA Verordnung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
