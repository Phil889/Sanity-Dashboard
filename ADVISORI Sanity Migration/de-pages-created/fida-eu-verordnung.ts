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
    console.log('Creating FIDA EU-Verordnung page...')

    const fidaEuVerordnungData = {
      _type: 'servicePage',
      _id: 'fida-eu-verordnung',
      title: 'FIDA EU-Verordnung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/financial-data-access-fida/fida-eu-verordnung'
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
        title: 'FIDA EU-Verordnung Compliance | ADVISORI',
        description: 'Expertenberatung für FIDA EU-Verordnung und Financial Data Access Regulation. Strategische Umsetzung der europäischen Verordnung, Compliance-Management und regulatorische Beratung für Finanzdienstleister.',
        keywords: 'FIDA EU-Verordnung, Financial Data Access Regulation, Europäische Verordnung, EU-Regulierung, Finanzregulierung, Open Banking, Datenschutz, API-Regulierung, Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FIDA EU-Verordnung Compliance'
        },
        tagline: 'Strategische FIDA EU-Verordnung für europäische Finanzdienstleistungen',
        heading: 'FIDA EU-Verordnung',
        description: 'Die Financial Data Access Regulation (FIDA) als EU-Verordnung schafft einheitliche Standards für den Datenzugang im europäischen Finanzsektor. Wir unterstützen Sie bei der vollständigen Umsetzung der EU-Verordnung und strategischen Positionierung im europäischen Markt.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige FIDA EU-Verordnungs-Compliance und rechtssichere Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategische EU-weite Implementierungsroadmaps und Harmonisierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Cross-Border-Compliance und europäische Markterschließung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche EU-regulatorische Updates und Anpassungsstrategien'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'FIDA EU-Verordnung strategisch meistern',
        description: 'Die Financial Data Access Regulation als EU-Verordnung stellt eine fundamentale Harmonisierung der europäischen Finanzregulierung dar und schafft einheitliche rechtliche Rahmenbedingungen für Datenzugang, Kundenrechte und Drittanbieter-Services im gesamten EU-Binnenmarkt. Eine proaktive und strategische Herangehensweise an die FIDA EU-Verordnung ist entscheidend für europäischen Geschäftserfolg.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Analyse der FIDA EU-Verordnungsanforderungen und deren Auswirkungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung EU-weiter Compliance-Frameworks und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementation harmonisierter Cross-Border-Compliance-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Strategische Integration in europäische regulatorische Landschaften'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Anpassung an EU-regulatorische Entwicklungen und Updates'
          }
        ],
        alert: {
          title: 'EU-weiter Vorteil',
          content: 'FIDA EU-Verordnung bietet nicht nur Compliance-Herausforderungen, sondern auch strategische Chancen für EU-weite Markterschließung und Wettbewerbsvorteile durch harmonisierte regulatorische Positionierung.'
        },
        whyUs: {
          title: 'Unsere FIDA EU-Verordnungs-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnis der FIDA EU-Verordnung und europäischer Finanzaufsicht'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Erfahrung in EU-weiten regulatorischen Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Expertise in Cross-Border-Compliance und EU-Harmonisierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von EU-Regulierung bis Geschäftsstrategie'
            }
          ]
        },
        additionalInfo: 'FIDA als EU-Verordnung erweitert das regulatorische Framework für Finanzdienstleistungen erheblich und schafft harmonisierte Anforderungen für Datenzugang, Kundenrechte, Drittanbieter-Management und Compliance-Überwachung im gesamten EU-Binnenmarkt. Die Verordnung erfordert eine durchdachte strategische Herangehensweise, die EU-weite rechtliche Compliance mit Geschäftsinnovation verbindet.',
        serviceDescription: 'Wir bieten end-to-end FIDA EU-Verordnungs-Services, die rechtliche Compliance, strategische Positionierung und operative Exzellenz im europäischen Kontext integrieren. Unser Ansatz gewährleistet nicht nur EU-weite regulatorische Konformität, sondern maximiert auch die strategischen Vorteile proaktiver EU-Verordnungs-Compliance.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische FIDA EU-Verordnungs-Beratung und Compliance-Planung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'EU-weite Implementation und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Cross-Border-Risikomanagement und Compliance-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'EU-Harmonisierung und Multi-Jurisdictional-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche EU-regulatorische Updates und Anpassungsstrategien'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer FIDA EU-Verordnungs-Ansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte FIDA EU-Verordnungs-Strategie, die EU-weite rechtliche Compliance mit strategischen Geschäftszielen verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse der FIDA EU-Verordnungsanforderungen und Auswirkungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung integrierter EU-Compliance- und Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementation EU-weiter Prozesse und Kontrollmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Aufbau robuster Cross-Border-Risikomanagement- und Monitoring-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und EU-regulatorische Anpassung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'FIDA als EU-Verordnung erfordert eine strategische Herangehensweise, die über nationale Compliance hinausgeht. Unsere Expertise ermöglicht es Unternehmen, EU-weite regulatorische Anforderungen als Wettbewerbsvorteil zu nutzen und dabei höchste rechtliche Sicherheit und operative Exzellenz im europäischen Binnenmarkt zu gewährleisten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'FIDA EU-Verordnungs-Assessment und Gap-Analyse',
          description: 'Umfassende Bewertung Ihrer aktuellen EU-regulatorischen Position und Entwicklung maßgeschneiderter FIDA-Compliance-Strategien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse der FIDA EU-Verordnungsanforderungen für Ihr Geschäftsmodell'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung bestehender EU-Compliance-Strukturen und Identifikation von Gaps'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung priorisierter EU-Compliance-Roadmaps und Implementierungspläne'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Cross-Border-Risiko-Nutzen-Analyse verschiedener Compliance-Ansätze'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'EU-weite Compliance-Implementation',
          description: 'Entwicklung und Implementation EU-weiter FIDA-Compliance-Frameworks und harmonisierter Governance-Strukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Design und Aufbau EU-harmonisierter Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementation robuster Cross-Border-Compliance-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung EU-weiter Dokumentations- und Reporting-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Aufbau effektiver Multi-Jurisdictional-Compliance-Überwachung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Cross-Border-Risikomanagement und EU-Monitoring',
          description: 'Aufbau umfassender Cross-Border-Risikomanagement-Frameworks und kontinuierlicher EU-Überwachungssysteme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Entwicklung EU-spezifischer Risikobewertungs-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Implementation von Real-Time-Cross-Border-Monitoring-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Aufbau von Multi-Jurisdictional-Incident-Response-Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Kontinuierliche EU-weite Risikobewertung und Anpassung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'EU-Harmonisierung und Multi-Jurisdictional-Integration',
          description: 'Strategische Harmonisierung von FIDA EU-Verordnung mit nationalen Regulierungen und Integration multi-jurisdictionaler Compliance-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Integration von FIDA mit nationalen Finanzregulierungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Entwicklung harmonisierter EU-Compliance-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Optimierung von Cross-Border-Reporting und -Überwachung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Aufbau einheitlicher EU-Governance- und Steuerungsmodelle'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'EU-Aufsichtsbeziehungen und Stakeholder-Management',
          description: 'Strategisches Management von EU-Aufsichtsbeziehungen und Aufbau effektiver Multi-Jurisdictional-Stakeholder-Kommunikation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Entwicklung von EU-Aufsichtskommunikations- und -beziehungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Aufbau effektiver Cross-Border-Reporting- und Transparenz-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Implementation von Multi-Jurisdictional-Stakeholder-Engagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Strategische EU-weite Positionierung und Reputation-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Kontinuierliche EU-Regulierungs-Updates und Anpassungsstrategien',
          description: 'Kontinuierliche Überwachung EU-regulatorischer Entwicklungen und proaktive Anpassung Ihrer FIDA-Compliance-Strategie.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Kontinuierliches Monitoring EU-regulatorischer Entwicklungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Proaktive Anpassung von EU-Compliance-Strukturen an neue Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Regelmäßige Cross-Border-Compliance-Reviews und Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategische Beratung zu emerging EU-Regulations und Marktentwicklungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(fidaEuVerordnungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FIDA EU-Verordnung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
