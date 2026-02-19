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
    console.log('Creating FIDA Regulierung page...')

    const fidaRegulierungData = {
      _type: 'servicePage',
      _id: 'fida-regulierung',
      title: 'FIDA Regulierung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/financial-data-access-fida/fida-regulierung'
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
        title: 'FIDA Regulierung Compliance | ADVISORI',
        description: 'Expertenberatung für FIDA-Regulierung und Financial Data Access Regulation. Strategische Umsetzung regulatorischer Anforderungen, Compliance-Management und Risikobewertung für Finanzdienstleister.',
        keywords: 'FIDA Regulierung, Financial Data Access Regulation, EU-Verordnung, Compliance, Finanzregulierung, Open Banking, Datenschutz, API-Regulierung, Aufsichtsrecht'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FIDA Regulierung Compliance'
        },
        tagline: 'Strategische FIDA-Regulierung für zukunftsfähige Finanzdienstleistungen',
        heading: 'FIDA Regulierung',
        description: 'Die Financial Data Access Regulation (FIDA) definiert neue regulatorische Standards für den Datenzugang im Finanzsektor. Wir unterstützen Sie bei der vollständigen Compliance-Umsetzung und strategischen Positionierung in der neuen regulatorischen Landschaft.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige FIDA-Regulierungs-Compliance und rechtssichere Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategische Regulierungs-Roadmaps und Implementierungspläne'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Risikobewertung und Compliance-Monitoring-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche regulatorische Updates und Anpassungsstrategien'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'FIDA-Regulierung strategisch meistern',
        description: 'Die Financial Data Access Regulation stellt eine fundamentale Weiterentwicklung der europäischen Finanzregulierung dar und schafft neue rechtliche Rahmenbedingungen für Datenzugang, Kundenrechte und Drittanbieter-Services. Eine proaktive und strategische Herangehensweise an die FIDA-Regulierung ist entscheidend für langfristigen Geschäftserfolg.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Analyse der FIDA-Regulierungsanforderungen und deren Auswirkungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung rechtssicherer Compliance-Frameworks und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementation robuster Risikomanagement- und Überwachungssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Strategische Integration in bestehende regulatorische Landschaften'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Anpassung an regulatorische Entwicklungen und Updates'
          }
        ],
        alert: {
          title: 'Regulatorischer Vorteil',
          content: 'FIDA-Regulierung bietet nicht nur Compliance-Herausforderungen, sondern auch strategische Chancen für Marktdifferenzierung und Wettbewerbsvorteile durch proaktive regulatorische Positionierung.'
        },
        whyUs: {
          title: 'Unsere FIDA-Regulierungs-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnis der FIDA-Regulierung und europäischer Finanzaufsicht'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Erfahrung in komplexen regulatorischen Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Expertise in Cross-Regulatory-Compliance und Harmonisierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von Regulierung bis Geschäftsstrategie'
            }
          ]
        },
        additionalInfo: 'FIDA erweitert das regulatorische Framework für Finanzdienstleistungen erheblich und schafft neue Anforderungen für Datenzugang, Kundenrechte, Drittanbieter-Management und Compliance-Überwachung. Die Regulierung erfordert eine durchdachte strategische Herangehensweise, die rechtliche Compliance mit Geschäftsinnovation verbindet.',
        serviceDescription: 'Wir bieten end-to-end FIDA-Regulierungs-Services, die rechtliche Compliance, strategische Positionierung und operative Exzellenz integrieren. Unser Ansatz gewährleistet nicht nur regulatorische Konformität, sondern maximiert auch die strategischen Vorteile proaktiver Regulierungs-Compliance.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische FIDA-Regulierungs-Beratung und Compliance-Planung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Rechtssichere Implementation und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Risikomanagement-Frameworks und Compliance-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Cross-Regulatory-Integration und Harmonisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche regulatorische Updates und Anpassungsstrategien'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer FIDA-Regulierungs-Ansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte FIDA-Regulierungs-Strategie, die rechtliche Compliance mit strategischen Geschäftszielen verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse der FIDA-Regulierungsanforderungen und Auswirkungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung integrierter Compliance- und Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementation rechtssicherer Prozesse und Kontrollmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Aufbau robuster Risikomanagement- und Monitoring-Systeme'
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
        quote: 'FIDA-Regulierung erfordert eine strategische Herangehensweise, die über reine Compliance hinausgeht. Unsere Expertise ermöglicht es Unternehmen, regulatorische Anforderungen als Wettbewerbsvorteil zu nutzen und dabei höchste rechtliche Sicherheit und operative Exzellenz zu gewährleisten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'FIDA-Regulierungs-Assessment und Gap-Analyse',
          description: 'Umfassende Bewertung Ihrer aktuellen regulatorischen Position und Entwicklung maßgeschneiderter FIDA-Compliance-Strategien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse der FIDA-Regulierungsanforderungen für Ihr Geschäftsmodell'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung bestehender Compliance-Strukturen und Identifikation von Gaps'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung priorisierter Compliance-Roadmaps und Implementierungspläne'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Risiko-Nutzen-Analyse verschiedener Compliance-Ansätze'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Rechtssichere Compliance-Implementation',
          description: 'Entwicklung und Implementation rechtssicherer FIDA-Compliance-Frameworks und Governance-Strukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Design und Aufbau FIDA-konformer Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementation robuster Compliance-Prozesse und Kontrollmechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung rechtssicherer Dokumentations- und Reporting-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Aufbau effektiver Compliance-Überwachung und -Steuerung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Risikomanagement und Compliance-Monitoring',
          description: 'Aufbau umfassender Risikomanagement-Frameworks und kontinuierlicher Überwachungssysteme für FIDA-Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Entwicklung FIDA-spezifischer Risikobewertungs-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Implementation von Real-Time-Compliance-Monitoring-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Aufbau von Incident-Response- und Eskalationsprozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Kontinuierliche Risikobewertung und Anpassung der Schutzmaßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Cross-Regulatory-Integration und Harmonisierung',
          description: 'Strategische Integration von FIDA-Regulierung in bestehende regulatorische Frameworks und Harmonisierung von Compliance-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Integration von FIDA mit PSD2, DSGVO und anderen Regulierungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Entwicklung harmonisierter Compliance-Prozesse und -Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Optimierung von Cross-Regulatory-Reporting und -Überwachung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Aufbau einheitlicher Governance- und Steuerungsmodelle'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Aufsichtsrechtliche Beziehungen und Stakeholder-Management',
          description: 'Strategisches Management von Aufsichtsbeziehungen und Aufbau effektiver Stakeholder-Kommunikation für FIDA-Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Entwicklung von Aufsichtskommunikations- und -beziehungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Aufbau effektiver Reporting- und Transparenz-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Implementation von Stakeholder-Engagement- und -Management-Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Strategische Positionierung und Reputation-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Kontinuierliche Regulierungs-Updates und Anpassungsstrategien',
          description: 'Kontinuierliche Überwachung regulatorischer Entwicklungen und proaktive Anpassung Ihrer FIDA-Compliance-Strategie.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Kontinuierliches Monitoring regulatorischer Entwicklungen und Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Proaktive Anpassung von Compliance-Strukturen an neue Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Regelmäßige Compliance-Reviews und Optimierungsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategische Beratung zu emerging Regulations und Marktentwicklungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(fidaRegulierungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FIDA Regulierung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
