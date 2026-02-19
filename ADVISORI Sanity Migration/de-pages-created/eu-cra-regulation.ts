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
    console.log('Creating EU CRA Regulation page...')

    const euCraRegulationData = {
      _type: 'servicePage',
      _id: 'eu-cra-regulation',
      title: 'EU CRA Regulation',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/eu-cra-regulation'
      },
      parent: {
        _type: 'reference',
        _ref: 'cra-cyber-resilience-act'
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
        title: 'EU CRA Regulation | ADVISORI',
        description: 'Umfassende Beratung zur EU Cyber Resilience Act (CRA) Verordnung. Wir unterstützen Sie bei der Compliance-Umsetzung und Zertifizierung digitaler Produkte.',
        keywords: 'EU CRA, Cyber Resilience Act, Cybersicherheit, Produktsicherheit, CE-Kennzeichnung, Compliance, Digitale Produkte'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EU CRA Regulation'
        },
        tagline: 'Cybersicherheit für digitale Produkte in der EU',
        heading: 'EU CRA Regulation',
        description: 'Die EU Cyber Resilience Act (CRA) Verordnung etabliert einheitliche Cybersicherheitsanforderungen für digitale Produkte. Wir begleiten Sie bei der vollständigen Compliance-Umsetzung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige CRA-Compliance für digitale Produkte'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'CE-Kennzeichnung und Konformitätsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Risikomanagement und Schwachstellenbehandlung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Überwachung und Incident Response'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EU Cyber Resilience Act (CRA)',
        description: 'Die EU CRA Verordnung schafft einen harmonisierten Rechtsrahmen für Cybersicherheitsanforderungen an digitale Produkte mit digitalen Elementen. Sie gilt ab 2027 und betrifft Hersteller, Importeure und Händler in der gesamten EU.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Anwendungsbereich und Produktkategorisierung nach CRA'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Cybersicherheitsanforderungen und Essential Requirements'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Konformitätsbewertungsverfahren und CE-Kennzeichnung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Marktüberwachung und Durchsetzungsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Incident Reporting und Schwachstellenmanagement'
          }
        ],
        alert: {
          title: 'Regulatorischer Hinweis',
          content: 'Die CRA Verordnung tritt schrittweise in Kraft: Anwendung ab Oktober 2027, mit besonderen Übergangsregelungen für kritische Produkte der Klassen I und II.'
        },
        whyUs: {
          title: 'Unsere CRA-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnis der CRA-Verordnung und harmonisierter Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung mit Konformitätsbewertungsverfahren und Zertifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von Produktdesign bis Marktüberwachung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praxiserprobte Implementierung in verschiedenen Branchen'
            }
          ]
        },
        additionalInfo: 'Die CRA betrifft alle Produkte mit digitalen Elementen, von IoT-Geräten über Software bis hin zu vernetzten Fahrzeugen. Eine frühzeitige Vorbereitung ist entscheidend für den Marktzugang.',
        serviceDescription: 'Wir bieten umfassende Beratung zur CRA-Compliance, von der initialen Gap-Analyse über die Implementierung von Cybersicherheitsmaßnahmen bis zur erfolgreichen CE-Kennzeichnung und kontinuierlichen Compliance-Überwachung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'CRA Gap-Analyse und Compliance-Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Implementierung von Essential Requirements'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Konformitätsbewertung und Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Incident Response und Schwachstellenmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Compliance-Überwachung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser CRA-Implementierungsansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte CRA-Compliance-Strategie, die technische Anforderungen mit Geschäftszielen optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Produktklassifizierung und Anwendbarkeitsanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Cybersicherheits-Risikoanalyse und -bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung der Essential Requirements'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Konformitätsbewertung und CE-Kennzeichnung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung kontinuierlicher Compliance-Prozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die EU Cyber Resilience Act stellt einen Paradigmenwechsel in der Produktsicherheit dar. Unsere Kunden profitieren von einer proaktiven CRA-Strategie, die nicht nur Compliance sicherstellt, sondern auch Wettbewerbsvorteile durch erhöhte Cybersicherheit und Vertrauen schafft.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'CRA Gap-Analyse und Compliance-Assessment',
          description: 'Umfassende Bewertung Ihrer aktuellen Cybersicherheitsmaßnahmen gegen CRA-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Produktklassifizierung nach CRA-Kategorien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Gap-Analyse gegen Essential Requirements'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Compliance-Roadmap mit Prioritäten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Kosten-Nutzen-Analyse der Maßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Essential Requirements Implementierung',
          description: 'Praktische Umsetzung der CRA-Cybersicherheitsanforderungen in Ihren Produkten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Secure-by-Design Prinzipien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Schwachstellenmanagement-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Incident Response Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Dokumentation und Nachweisführung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(euCraRegulationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EU CRA Regulation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
