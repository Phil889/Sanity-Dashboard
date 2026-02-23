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
    console.log('Creating Banklizenz Vorstudie page...')

    const banklizenzVorstudieData = {
      _type: 'servicePage',
      _id: 'banklizenz-vorstudie',
      title: 'Banklizenz Vorstudie',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/banklizenz-beantragen/banklizenz-vorstudie'
      },
      parent: {
        _type: 'reference',
        _ref: 'banklizenz-beantragen'
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
        title: 'Banklizenz Vorstudie | ADVISORI',
        description: 'Professionelle Vorstudien für Ihre Banklizenzierung. Umfassende Analyse der Machbarkeit, Anforderungen und strategischen Optionen vor der formalen Antragstellung.',
        keywords: 'Banklizenz Vorstudie, Banking Feasibility Study, BaFin Vorabprüfung, Lizenz Machbarkeitsstudie, Regulatorische Analyse, Banking Strategie'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Banklizenz Vorstudie'
        },
        tagline: 'Fundierte Basis für Ihre Banklizenzierung',
        heading: 'Banklizenz Vorstudie',
        description: 'Eine professionelle Vorstudie ist der entscheidende erste Schritt für eine erfolgreiche Banklizenzierung. Wir analysieren Machbarkeit, Anforderungen und strategische Optionen, bevor Sie sich für den formalen Antragsprozess entscheiden.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende Machbarkeitsanalyse für Ihr Banking-Geschäftsmodell'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Detaillierte Analyse aller regulatorischen Anforderungen und Hürden'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Strategische Bewertung verschiedener Lizenzoptionen und Alternativen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Risikobewertung und Kosten-Nutzen-Analyse vor der Antragstellung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Banklizenz Vorstudie',
        description: 'Bevor Sie den komplexen und ressourcenintensiven Prozess einer Banklizenzierung beginnen, sollten Sie eine fundierte Entscheidungsgrundlage haben. Unsere Vorstudie analysiert alle relevanten Faktoren und gibt Ihnen Klarheit über Machbarkeit, Anforderungen und strategische Optionen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse der Geschäftsmodell-Kompatibilität mit Banking-Regulierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Bewertung verschiedener Lizenztypen und Genehmigungsverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Identifikation kritischer Erfolgsfaktoren und potenzieller Hindernisse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung einer strategischen Roadmap für die Lizenzierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kosten-Nutzen-Analyse und Investitionsplanung'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine gründliche Vorstudie kann nicht nur Millionen von Euro an Fehlinvestitionen vermeiden, sondern auch den optimalen Lizenzierungsweg aufzeigen. 70% aller erfolgreichen Banklizenzierungen beginnen mit einer professionellen Machbarkeitsstudie.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in allen Banking-Lizenztypen und Geschäftsmodellen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Direkte Einblicke in die Anforderungen und Präferenzen der Aufsichtsbehörden'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Analysemethoden basierend auf hunderten von Lizenzierungsprojekten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Strategische Beratung über reine Compliance-Prüfung hinaus'
            }
          ]
        },
        additionalInfo: 'Eine professionelle Vorstudie ist Ihre Versicherung gegen kostspielige Fehlentscheidungen und der Schlüssel für eine effiziente und erfolgreiche Banklizenzierung.',
        serviceDescription: 'Wir bieten Ihnen eine umfassende Vorstudie, die alle kritischen Aspekte einer Banklizenzierung analysiert. Von der grundsätzlichen Machbarkeit über regulatorische Hürden bis hin zur strategischen Positionierung erhalten Sie eine fundierte Entscheidungsgrundlage.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Geschäftsmodell-Analyse und Regulierungskompatibilität'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Lizenztyp-Bewertung und Optionsanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Anforderungsanalyse und Gap-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Risikobewertung und Erfolgsfaktorenanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Strategische Roadmap und Investitionsplanung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir führen eine systematische und umfassende Analyse durch, die alle relevanten Dimensionen einer Banklizenzierung beleuchtet und Ihnen eine klare Entscheidungsgrundlage bietet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Detaillierte Analyse Ihres Geschäftsmodells und der Zielgruppe'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Bewertung verschiedener Lizenzoptionen und regulatorischer Wege'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Gap-Analyse und Identifikation kritischer Erfolgsfaktoren'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung strategischer Empfehlungen und Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Präsentation der Ergebnisse und nächsten Schritte'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Vorstudie von ADVISORI hat uns vor einer kostspieligen Fehlentscheidung bewahrt. Ihre umfassende Analyse zeigte uns nicht nur die Machbarkeit unseres Vorhabens auf, sondern auch den optimalen Weg zur Lizenzierung. Eine Investition, die sich bereits im ersten Schritt mehr als bezahlt gemacht hat.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Machbarkeitsanalyse und Geschäftsmodell-Bewertung',
          description: 'Wir analysieren die grundsätzliche Machbarkeit Ihrer Banking-Ambitionen und bewerten die Kompatibilität Ihres Geschäftsmodells mit den regulatorischen Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Geschäftsmodell-Analyse und Marktpositionierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Regulatorische Kompatibilitätsprüfung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Wettbewerbsanalyse und Marktchancenbewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Technische und operative Anforderungsanalyse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Strategische Lizenzoptionen und Roadmap',
          description: 'Wir entwickeln eine maßgeschneiderte Lizenzstrategie und eine detaillierte Roadmap für Ihren Weg zur erfolgreichen Banklizenzierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Bewertung verschiedener Lizenztypen und Alternativen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Risiko-Nutzen-Analyse und Investitionsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Strategische Roadmap mit Meilensteinen und Zeitplan'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Empfehlungen für nächste Schritte und Ressourcenplanung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(banklizenzVorstudieData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Banklizenz Vorstudie page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
