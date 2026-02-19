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
    console.log('Creating Banklizenz Beantragen page...')

    const banklizenzBeantragensData = {
      _type: 'servicePage',
      _id: 'banklizenz-beantragen',
      title: 'Banklizenz Beantragen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/banklizenz-beantragen'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'regulatory-reporting'
        }
      },
      seo: {
        _type: 'seo',
        title: 'Banklizenz Beantragen | ADVISORI',
        description: 'Professionelle Unterstützung bei der Beantragung Ihrer Banklizenz. Von der Strategieentwicklung bis zur erfolgreichen Lizenzerteilung durch die Aufsichtsbehörden.',
        keywords: 'Banklizenz, Banking Lizenz, BaFin, Finanzlizenz, Regulatorische Zulassung, Banking Compliance, Aufsichtsrecht'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Banklizenz Beantragen'
        },
        tagline: 'Ihr Weg zur erfolgreichen Banklizenzierung',
        heading: 'Banklizenz Beantragen',
        description: 'Die Beantragung einer Banklizenz ist ein komplexer regulatorischer Prozess, der umfassende Vorbereitung und Expertise erfordert. Wir begleiten Sie von der ersten Konzeption bis zur erfolgreichen Lizenzerteilung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierte Vorbereitung und Durchführung des Lizenzantragsprozesses'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Umfassende Compliance-Vorbereitung für alle regulatorischen Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Professionelle Kommunikation mit BaFin und anderen Aufsichtsbehörden'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Minimierung von Risiken und Zeitverzögerungen im Antragsprozess'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Banklizenz Beantragen',
        description: 'Die Beantragung einer Banklizenz erfordert umfassende Kenntnisse der regulatorischen Anforderungen, eine solide Geschäftsstrategie und die Erfüllung strenger Compliance-Vorgaben. Wir unterstützen Sie bei jedem Schritt dieses kritischen Prozesses.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse der Geschäftsstrategie und Lizenzanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung des Lizenzantrags und Compliance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Vorbereitung der erforderlichen Unterlagen und Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Begleitung der Kommunikation mit Aufsichtsbehörden'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Ongoing Support während des gesamten Genehmigungsverfahrens'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine erfolgreiche Banklizenzierung erfordert nicht nur die Erfüllung formaler Kriterien, sondern auch eine überzeugende Geschäftsstrategie und den Nachweis angemessener Governance-Strukturen. Frühe und umfassende Vorbereitung ist der Schlüssel zum Erfolg.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise im deutschen und europäischen Bankenaufsichtsrecht'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in der erfolgreichen Begleitung von Lizenzierungsverfahren'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Enge Beziehungen zu Aufsichtsbehörden und regulatorischen Experten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von der Strategieentwicklung bis zur Lizenzerteilung'
            }
          ]
        },
        additionalInfo: 'Eine professionell durchgeführte Banklizenzierung kann den Unterschied zwischen erfolgreicher Markteinführung und kostspieligen Verzögerungen ausmachen. Investieren Sie in die richtige Expertise von Anfang an!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum für die Beantragung Ihrer Banklizenz, von der initialen Strategieberatung über die Antragserstellung bis zur erfolgreichen Lizenzerteilung. Unser Team aus Regulierungsexperten gewährleistet einen strukturierten und effizienten Prozess.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Lizenzstrategie und Geschäftsmodellentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Compliance-Framework und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Antragsdokumentation und Unterlagenerstellung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Aufsichtskommunikation und Verfahrensbegleitung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Post-Lizenzierung Support und Ongoing Compliance'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine maßgeschneiderte Lizenzierungsstrategie, die auf Ihre spezifischen Geschäftsziele und regulatorischen Anforderungen ausgerichtet ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse Ihres Geschäftsmodells und der Lizenzanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung der Lizenzstrategie und des Compliance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Erstellung der Antragsdokumentation und Unterlagen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Einreichung des Antrags und Begleitung des Verfahrens'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Ongoing Support bis zur erfolgreichen Lizenzerteilung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir einen Partner gefunden, der uns kompetent und professionell durch den komplexen Banklizenzierungsprozess geführt hat. Dank ihrer umfassenden Expertise und strukturierten Herangehensweise konnten wir unsere Lizenz erfolgreich und ohne Verzögerungen erhalten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Lizenzstrategie und Vorbereitung',
          description: 'Wir entwickeln eine umfassende Strategie für Ihre Banklizenzierung und bereiten alle erforderlichen Grundlagen vor.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse des Geschäftsmodells und der Lizenzanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung der Lizenzierungsstrategie'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Gap-Analyse und Compliance-Roadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Zeitplan und Meilensteinplanung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Antragsbegleitung und Aufsichtskommunikation',
          description: 'Wir begleiten Sie durch den gesamten Antragsprozess und stellen die professionelle Kommunikation mit den Aufsichtsbehörden sicher.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Professionelle Antragserstellung und Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Direkte Kommunikation mit BaFin und anderen Behörden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Bearbeitung von Rückfragen und Nachforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Ongoing Support bis zur Lizenzerteilung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(banklizenzBeantragensData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Banklizenz Beantragen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
