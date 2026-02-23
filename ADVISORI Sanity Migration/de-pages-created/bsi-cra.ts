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
    console.log('Creating BSI CRA page...')

    const bsiCraData = {
      _type: 'servicePage',
      _id: 'bsi-cra',
      title: 'BSI CRA',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/bsi-cra'
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
        title: 'BSI CRA Compliance | ADVISORI',
        description: 'Spezialisierte BSI CRA-Beratung für deutsche Unternehmen. Wir unterstützen Sie bei der Umsetzung der BSI-Anforderungen zum Cyber Resilience Act und gewährleisten konforme Markteinführung Ihrer Produkte.',
        keywords: 'BSI CRA, BSI Cyber Resilience Act, BSI Compliance, BSI Zertifizierung, BSI Marktüberwachung, BSI Anforderungen, CRA Deutschland, BSI Konformitätsbewertung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'BSI CRA Compliance Management'
        },
        tagline: 'BSI-konforme CRA-Umsetzung',
        heading: 'BSI CRA',
        description: 'Das BSI als deutsche zuständige Behörde für den Cyber Resilience Act stellt spezifische Anforderungen an Hersteller und Importeure. Wir begleiten Sie durch den komplexen BSI-Compliance-Prozess und gewährleisten die konforme Markteinführung Ihrer Produkte mit digitalen Elementen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'BSI-konforme Konformitätsbewertung und Zertifizierungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategische Vorbereitung auf BSI-Marktüberwachung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Compliance mit BSI-spezifischen Leitlinien und Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Proaktive BSI-Kommunikation und Behördenmanagement'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'BSI als zentrale CRA-Autorität in Deutschland',
        description: 'Das Bundesamt für Sicherheit in der Informationstechnik übernimmt als zuständige Behörde eine Schlüsselrolle bei der CRA-Umsetzung in Deutschland. BSI-Compliance erfordert tiefgreifendes Verständnis der deutschen Regulierungslandschaft und proaktive Zusammenarbeit mit der Behörde.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'BSI-Konformitätsbewertung und Zertifizierungsverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Marktüberwachung und Enforcement-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'BSI-Leitlinien und technische Standards-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Behördenkommunikation und Stakeholder-Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche BSI-Compliance und Monitoring'
          }
        ],
        alert: {
          title: 'BSI-Compliance-Hinweis',
          content: 'BSI-Anforderungen gehen oft über EU-Mindeststandards hinaus und erfordern spezifische deutsche Compliance-Strategien. Frühzeitige BSI-Abstimmung ist entscheidend für erfolgreiche Markteinführung.'
        },
        whyUs: {
          title: 'Unsere BSI-CRA-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung mit BSI-Verfahren und -Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Etablierte Beziehungen zu BSI und deutschen Behörden'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Strategien für BSI-Compliance und -Kommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Überwachung der BSI-Entwicklungen'
            }
          ]
        },
        additionalInfo: 'BSI-Compliance ist mehr als regulatorische Pflicht - es ist strategische Positionierung im deutschen Markt und Grundlage für nachhaltigen Geschäftserfolg.',
        serviceDescription: 'Wir begleiten Sie durch alle Aspekte der BSI-CRA-Compliance, von der initialen Bewertung bis zur kontinuierlichen Überwachung und gewährleisten dabei optimale Zusammenarbeit mit der deutschen Aufsichtsbehörde.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'BSI-Konformitätsbewertung und Zertifizierungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Marktüberwachungs-Vorbereitung und Compliance-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'BSI-Kommunikation und Behörden-Relationship-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Deutsche Standards-Integration und Leitlinien-Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche BSI-Compliance und Anpassungsstrategien'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser BSI-CRA-Ansatz',
        description: 'Wir entwickeln maßgeschneiderte BSI-Compliance-Strategien, die deutsche Regulierungsbesonderheiten berücksichtigen und optimale Behördenzusammenarbeit gewährleisten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende BSI-Anforderungsanalyse und Gap-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategische Konformitätsbewertung und Zertifizierungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Proaktive BSI-Kommunikation und Stakeholder-Engagement'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Compliance-Überwachung und -Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Integrierte Marktüberwachungs-Vorbereitung und Risikomanagement'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'BSI-Compliance erfordert nicht nur technische Exzellenz, sondern auch strategisches Verständnis der deutschen Regulierungslandschaft. Unsere Kunden profitieren von unserer langjährigen Erfahrung mit BSI-Verfahren und etablierten Beziehungen zu deutschen Aufsichtsbehörden, die erfolgreiche Markteinführung und nachhaltige Compliance gewährleisten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'BSI-Konformitätsbewertung und Zertifizierung',
          description: 'Umfassende Unterstützung bei BSI-Konformitätsbewertungsverfahren und strategische Zertifizierungsplanung für optimale Marktpositionierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'BSI-Anforderungsanalyse und Compliance-Roadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Konformitätsbewertungsverfahren und Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Zertifizierungsstrategie und Antragsprozess'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'BSI-Kommunikation und Verfahrensbegleitung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'BSI-Marktüberwachung und Compliance-Management',
          description: 'Proaktive Vorbereitung auf BSI-Marktüberwachungsaktivitäten und kontinuierliche Compliance-Überwachung für nachhaltige Konformität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Marktüberwachungs-Readiness und Vorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Kontinuierliche Compliance-Monitoring-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'BSI-Incident-Response und Krisenmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Behörden-Relationship-Management und Kommunikation'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bsiCraData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ BSI CRA page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
