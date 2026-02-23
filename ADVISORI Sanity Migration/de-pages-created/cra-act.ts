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
    console.log('Creating CRA Act page...')

    const craActData = {
      _type: 'servicePage',
      _id: 'cra-act',
      title: 'CRA Act',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-act'
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
        title: 'CRA Act Implementation | ADVISORI',
        description: 'Professionelle CRA Act Implementierung und Compliance-Beratung. Wir unterstützen Sie bei der praktischen Umsetzung des Cyber Resilience Act für digitale Produkte.',
        keywords: 'CRA Act, Cyber Resilience Act, CRA Implementierung, Cybersicherheit Compliance, Digitale Produktsicherheit, CRA Beratung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Act Implementation'
        },
        tagline: 'Praktische CRA Act Implementierung',
        heading: 'CRA Act',
        description: 'Der Cyber Resilience Act definiert konkrete Anforderungen für die Cybersicherheit digitaler Produkte. Wir begleiten Sie bei der praktischen Implementierung und nachhaltigen Compliance-Sicherstellung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierte CRA Act Implementierungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Praktische Umsetzung der Essential Requirements'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Risikobewertung und Schwachstellenmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Compliance-Überwachung und Optimierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRA Act Implementierung',
        description: 'Der Cyber Resilience Act stellt konkrete Anforderungen an die Cybersicherheit digitaler Produkte. Eine strukturierte Implementierung erfordert technische Expertise, regulatorisches Verständnis und strategische Planung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Produktklassifizierung und Anwendbarkeitsanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Security-by-Design Integration in Entwicklungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Schwachstellenmanagement und Incident Response'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Konformitätsbewertung und Dokumentationsmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Compliance-Optimierung'
          }
        ],
        alert: {
          title: 'Implementierungshinweis',
          content: 'Die CRA Act Implementierung erfordert eine ganzheitliche Betrachtung von Produktentwicklung, Risikomanagement und organisatorischen Prozessen. Frühzeitige Planung ist entscheidend für erfolgreiche Compliance.'
        },
        whyUs: {
          title: 'Unsere CRA Act Implementierungsexpertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung in Cybersicherheits-Compliance und Regulatorik'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praktische Implementierungserfahrung in verschiedenen Branchen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integrierter Ansatz von technischer Umsetzung bis Governance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung und Optimierung der Compliance-Prozesse'
            }
          ]
        },
        additionalInfo: 'Die CRA Act Implementierung betrifft alle Aspekte der Produktentwicklung und erfordert eine enge Zusammenarbeit zwischen technischen Teams, Compliance-Experten und Geschäftsführung.',
        serviceDescription: 'Wir unterstützen Sie bei der vollständigen CRA Act Implementierung, von der initialen Bewertung über die praktische Umsetzung bis zur kontinuierlichen Compliance-Sicherstellung und Optimierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'CRA Act Readiness Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Security-by-Design Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Risikomanagement und Schwachstellenbehandlung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Compliance-Monitoring und kontinuierliche Verbesserung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Organisatorische Transformation und Change Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser CRA Act Implementierungsansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte CRA Act Implementierungsstrategie, die technische Anforderungen mit Geschäftszielen und organisatorischen Gegebenheiten optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Produktanalyse und CRA-Klassifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strukturierte Implementierungsplanung und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Praktische Umsetzung der Essential Requirements'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende Entwicklungs- und Qualitätsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Optimierung der Compliance'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die praktische Implementierung des CRA Act erfordert mehr als nur technische Compliance - es geht um die strategische Integration von Cybersicherheit in die gesamte Produktentwicklung. Unsere Kunden profitieren von einem ganzheitlichen Ansatz, der nicht nur regulatorische Anforderungen erfüllt, sondern auch nachhaltigen Geschäftswert schafft.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'CRA Act Readiness Assessment',
          description: 'Umfassende Bewertung Ihrer aktuellen Cybersicherheitsmaßnahmen und Identifikation der erforderlichen Implementierungsschritte.',
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
              text: 'Risikobewertung und Prioritätensetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Implementierungs-Roadmap mit Zeitplan'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Security-by-Design Implementierung',
          description: 'Integration von Cybersicherheitsanforderungen in Ihre Produktentwicklungsprozesse von der Konzeption bis zur Markteinführung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Sichere Architektur- und Designprinzipien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklungsprozess-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Automatisierte Sicherheitstests'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Sicherheitsvalidierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craActData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Act page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
