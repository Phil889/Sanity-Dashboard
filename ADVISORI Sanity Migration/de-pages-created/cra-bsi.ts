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
    console.log('Creating CRA BSI page...')

    const craBsiData = {
      _type: 'servicePage',
      _id: 'cra-bsi',
      title: 'CRA BSI',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-bsi'
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
        title: 'CRA BSI Compliance Beratung | ADVISORI',
        description: 'Professionelle CRA BSI Compliance-Beratung für deutsche Unternehmen. Wir unterstützen Sie bei der Zusammenarbeit mit dem BSI als zuständiger Behörde für den Cyber Resilience Act und gewährleisten erfolgreiche Markteinführung.',
        keywords: 'CRA BSI, BSI Cyber Resilience Act, BSI Compliance, CRA Deutschland, BSI Marktüberwachung, CRA Konformitätsbewertung, BSI Zertifizierung, CRA Beratung Deutschland'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA BSI Compliance Management'
        },
        tagline: 'BSI-konforme CRA-Umsetzung',
        heading: 'CRA BSI',
        description: 'Das BSI als deutsche zuständige Behörde für den Cyber Resilience Act definiert spezifische Anforderungen und Verfahren für die deutsche Markteinführung. Wir begleiten Sie durch die komplexen BSI-Prozesse und gewährleisten erfolgreiche CRA-Compliance in Deutschland.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische BSI-Kommunikation und Behördenmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'BSI-konforme Konformitätsbewertung und Zertifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Proaktive Marktüberwachungs-Vorbereitung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche BSI-Compliance und Monitoring'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'BSI als zentrale CRA-Autorität in Deutschland',
        description: 'Das Bundesamt für Sicherheit in der Informationstechnik übernimmt als deutsche zuständige Behörde eine Schlüsselrolle bei der CRA-Implementierung. Erfolgreiche BSI-Zusammenarbeit erfordert tiefgreifendes Verständnis deutscher Regulierungsansätze und proaktive Stakeholder-Strategien.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'BSI-spezifische CRA-Interpretationen und Leitlinien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Konformitätsbewertungsverfahren und Zertifizierungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Marktüberwachungsstrategien und Enforcement-Mechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Behördenkommunikation und Stakeholder-Engagement'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Compliance-Überwachung und Anpassung'
          }
        ],
        alert: {
          title: 'BSI-Compliance-Hinweis',
          content: 'BSI-Anforderungen können über EU-Mindeststandards hinausgehen und erfordern spezifische deutsche Compliance-Strategien. Frühzeitige BSI-Abstimmung ist entscheidend für erfolgreiche CRA-Umsetzung.'
        },
        whyUs: {
          title: 'Unsere CRA BSI-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung mit BSI-Verfahren und deutschen Regulierungsansätzen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Etablierte Beziehungen zu BSI und deutschen Aufsichtsbehörden'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Strategien für BSI-Kommunikation und Compliance-Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Überwachung der BSI-Entwicklungen und Leitlinien'
            }
          ]
        },
        additionalInfo: 'CRA BSI-Compliance ist strategische Investition in deutsche Marktpositionierung und Grundlage für nachhaltigen Geschäftserfolg im deutschen Cybersicherheitsmarkt.',
        serviceDescription: 'Wir begleiten Sie durch alle Aspekte der CRA BSI-Compliance, von der initialen Bewertung bis zur kontinuierlichen Überwachung und gewährleisten dabei optimale Zusammenarbeit mit der deutschen Aufsichtsbehörde.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'BSI-Anforderungsanalyse und Compliance-Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Konformitätsbewertung und Zertifizierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Marktüberwachungs-Vorbereitung und Incident-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'BSI-Kommunikation und Behörden-Relationship-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Compliance-Überwachung und Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser CRA BSI-Ansatz',
        description: 'Wir entwickeln maßgeschneiderte BSI-Compliance-Strategien, die deutsche Regulierungsbesonderheiten berücksichtigen und optimale Behördenzusammenarbeit für erfolgreiche CRA-Umsetzung gewährleisten.',
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
            text: 'Proaktive BSI-Kommunikation und Stakeholder-Management'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Compliance-Überwachung und Anpassung'
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
        quote: 'Die erfolgreiche Zusammenarbeit mit dem BSI bei CRA-Compliance erfordert nicht nur technische Exzellenz, sondern auch strategisches Verständnis der deutschen Regulierungslandschaft. Unsere Kunden profitieren von unserer langjährigen Erfahrung mit BSI-Verfahren und etablierten Beziehungen, die erfolgreiche Markteinführung und nachhaltige Compliance gewährleisten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'BSI-Konformitätsbewertung und Zertifizierungsmanagement',
          description: 'Umfassende Unterstützung bei BSI-Konformitätsbewertungsverfahren und strategische Zertifizierungsplanung für optimale CRA-Compliance und Marktpositionierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'BSI-Anforderungsanalyse und Compliance-Gap-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Konformitätsbewertungsverfahren und Dokumentationserstellung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Zertifizierungsstrategie und Antragsprozess-Management'
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
          title: 'BSI-Marktüberwachung und Compliance-Monitoring',
          description: 'Proaktive Vorbereitung auf BSI-Marktüberwachungsaktivitäten und kontinuierliche Compliance-Überwachung für nachhaltige CRA-Konformität und Risikominimierung.',
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
              text: 'Behörden-Relationship-Management und strategische Kommunikation'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craBsiData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA BSI page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
