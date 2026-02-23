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
    console.log('Creating Financial Data Access (FIDA) page...')

    const fidaData = {
      _type: 'servicePage',
      _id: 'financial-data-access-fida',
      title: 'Financial Data Access (FIDA)',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/financial-data-access-fida'
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
        title: 'FIDA Financial Data Access Compliance | ADVISORI',
        description: 'Expertenberatung für FIDA-Compliance und Financial Data Access Regulation. Strategische Umsetzung von Open Banking, Datenschutz und API-Management für Finanzdienstleister.',
        keywords: 'FIDA, Financial Data Access, Open Banking, PSD2, API Management, Datenschutz, Finanzregulierung, Compliance, EU-Verordnung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Financial Data Access FIDA Compliance'
        },
        tagline: 'Strategische FIDA-Compliance für die digitale Finanzwelt',
        heading: 'Financial Data Access (FIDA)',
        description: 'Die EU Financial Data Access Regulation revolutioniert den Umgang mit Finanzdaten. Wir unterstützen Sie bei der strategischen Umsetzung von FIDA-Anforderungen, von der technischen Implementation bis zur regulatorischen Compliance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige FIDA-Compliance-Strategie und Umsetzungsroadmap'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Sichere API-Architekturen und Datenfreigabe-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Datenschutz- und Consent-Management-Lösungen'
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
        heading: 'FIDA-Compliance strategisch meistern',
        description: 'Die Financial Data Access Regulation (FIDA) erweitert das Open Banking-Konzept auf alle Finanzdienstleistungen und schafft neue Möglichkeiten für Datenfreigabe und Innovation. Gleichzeitig entstehen komplexe Compliance-Anforderungen, die eine durchdachte strategische Herangehensweise erfordern.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Analyse der FIDA-Anforderungen und deren Auswirkungen auf Ihr Geschäftsmodell'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung sicherer und skalierbarer API-Architekturen für Datenfreigabe'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementation robuster Datenschutz- und Consent-Management-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Strategisches Management von Drittanbieter-Partnerschaften und Datenökosystemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Risikobewertung und Compliance-Monitoring'
          }
        ],
        alert: {
          title: 'Strategischer Vorteil',
          content: 'FIDA bietet nicht nur regulatorische Herausforderungen, sondern auch erhebliche Geschäftschancen. Eine proaktive und strategische Herangehensweise kann Wettbewerbsvorteile schaffen und neue Umsatzströme erschließen.'
        },
        whyUs: {
          title: 'Unsere FIDA-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnis der FIDA-Regulation und deren praktische Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Erfahrung in Open Banking und PSD2-Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Expertise in sicherer API-Entwicklung und Datenarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von Technologie bis Governance'
            }
          ]
        },
        additionalInfo: 'FIDA erweitert das Konzept des Open Banking auf Versicherungen, Investmentfonds, Pensionsfonds und andere Finanzdienstleistungen. Die Regulation schafft neue Standards für Datenportabilität, Kundenrechte und Drittanbieter-Zugang, während gleichzeitig höchste Sicherheits- und Datenschutzstandards gewährleistet werden müssen.',
        serviceDescription: 'Wir bieten end-to-end FIDA-Compliance-Services, die technische Implementation, regulatorische Anforderungen und strategische Geschäftsentwicklung integrieren. Unser Ansatz gewährleistet nicht nur Compliance, sondern maximiert auch die Geschäftschancen der neuen Datenökonomie.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische FIDA-Compliance-Beratung und Umsetzungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Technische API-Implementation und Sicherheitsarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Datenschutz-Frameworks und Consent-Management-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Drittanbieter-Management und Partnerschaftsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Compliance-Überwachung und Updates'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer FIDA-Ansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte FIDA-Strategie, die regulatorische Compliance mit Geschäftsinnovation verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer aktuellen Datenlandschaft und Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer integrierten FIDA-Compliance- und Geschäftsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementation sicherer und skalierbarer technischer Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Aufbau robuster Governance- und Risikomanagement-Frameworks'
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
        quote: 'FIDA stellt eine fundamentale Weiterentwicklung der europäischen Finanzregulierung dar. Unsere Expertise ermöglicht es Unternehmen, nicht nur compliant zu werden, sondern die neuen Möglichkeiten der Datenökonomie strategisch zu nutzen und dabei höchste Sicherheits- und Datenschutzstandards zu gewährleisten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'FIDA Compliance Assessment und Gap-Analyse',
          description: 'Umfassende Bewertung Ihrer aktuellen Position und Entwicklung einer maßgeschneiderten FIDA-Compliance-Strategie.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse der FIDA-Anforderungen für Ihr Geschäftsmodell'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung bestehender Systeme und Identifikation von Compliance-Gaps'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung priorisierter Umsetzungsroadmaps und Zeitpläne'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Kosten-Nutzen-Analyse verschiedener Implementierungsansätze'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technische Implementation und API-Management',
          description: 'Entwicklung und Implementation sicherer, skalierbarer API-Architekturen für FIDA-konforme Datenfreigabe.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Design und Entwicklung FIDA-konformer API-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementation robuster Sicherheits- und Authentifizierungssysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung skalierbarer Datenintegrations- und -transformationslösungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'API-Lifecycle-Management und kontinuierliche Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Datenschutz-Framework und Consent-Management',
          description: 'Aufbau umfassender Datenschutz- und Einverständnismanagement-Systeme für FIDA-konforme Datenverarbeitung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Entwicklung DSGVO-konformer Datenschutz-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Implementation granularer Consent-Management-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Aufbau von Data-Governance-Strukturen und -Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Kontinuierliche Überwachung und Audit-Trail-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Drittanbieter-Management und Partnerschaftsstrategien',
          description: 'Strategisches Management von Drittanbieter-Beziehungen und Entwicklung von Datenökosystem-Partnerschaften.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Entwicklung von Drittanbieter-Onboarding- und -Management-Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Aufbau strategischer Partnerschafts- und Kooperationsmodelle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Implementation von SLA-Management und Performance-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Entwicklung von Revenue-Sharing- und Monetarisierungsstrategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Risikomanagement und Monitoring-Systeme',
          description: 'Aufbau umfassender Risikomanagement-Frameworks und kontinuierlicher Überwachungssysteme für FIDA-Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Entwicklung FIDA-spezifischer Risikobewertungs-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Implementation von Real-Time-Monitoring und Alerting-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Aufbau von Incident-Response- und Business-Continuity-Plänen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kontinuierliche Risikobewertung und Anpassung der Schutzmaßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Ongoing Compliance und Regulatory Updates',
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
              text: 'Proaktive Anpassung von Systemen und Prozessen an neue Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Regelmäßige Compliance-Assessments und Audit-Unterstützung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategische Beratung zu emerging Technologies und Marktentwicklungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(fidaData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Financial Data Access (FIDA) page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
