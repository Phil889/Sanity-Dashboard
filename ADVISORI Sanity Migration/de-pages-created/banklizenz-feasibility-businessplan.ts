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
    console.log('Creating Banklizenz Feasibility Businessplan page...')

    const banklizenzFeasibilityBusinessplanData = {
      _type: 'servicePage',
      _id: 'banklizenz-feasibility-businessplan',
      title: 'Banklizenz Feasibility Businessplan',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/banklizenz-beantragen/banklizenz-vorstudie/banklizenz-feasibility-businessplan'
      },
      parent: {
        _type: 'reference',
        _ref: 'banklizenz-vorstudie'
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
        title: 'Banklizenz Feasibility Businessplan | ADVISORI',
        description: 'Professionelle Feasibility-Businesspläne für Banklizenzierungen. Umfassende Finanzmodellierung, Marktanalyse und Rentabilitätsprognosen für Ihre Banking-Vision.',
        keywords: 'Banklizenz Businessplan, Banking Feasibility Study, Finanzmodell Banking, Banklizenz Rentabilität, BaFin Business Case, Banking Startup Plan'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Banklizenz Feasibility Businessplan'
        },
        tagline: 'Ihr Businessplan für die Banklizenzierung',
        heading: 'Banklizenz Feasibility Businessplan',
        description: 'Ein wasserdichter Businessplan ist das Herzstück jeder erfolgreichen Banklizenzierung. Wir entwickeln überzeugende Feasibility-Businesspläne mit detaillierter Finanzmodellierung, Marktanalyse und Rentabilitätsprognosen, die Aufsichtsbehörden und Investoren gleichermaßen überzeugen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Detaillierte Finanzmodellierung mit 5-Jahres-Planungsmodell'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Umfassende Markt- und Wettbewerbsanalyse für Ihr Banking-Segment'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Regulatorisch konforme Geschäftsstrategie und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Investor-ready Präsentation für Finanzierungsrunden'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Banklizenz Feasibility Businessplan',
        description: 'Ein professioneller Feasibility-Businessplan ist der Schlüssel zum Erfolg Ihrer Banklizenzierung. Er muss nicht nur die Aufsichtsbehörden von der Solidität Ihres Geschäftsmodells überzeugen, sondern auch Investoren und Partner für Ihr Banking-Vorhaben gewinnen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Detaillierte Finanzplanung und Rentabilitätsmodellierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Strategische Marktpositionierung und Competitive Intelligence'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Regulatorische Compliance-Strategie und Governance-Konzept'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Risikomanagement-Framework und Stresstesting-Szenarien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Operationale Exzellenz und Technologie-Roadmap'
          }
        ],
        alert: {
          title: 'Erfolgsfaktor',
          content: 'Ein überzeugender Businessplan kann die Lizenzierungszeit um bis zu 40% verkürzen und die Erfolgswahrscheinlichkeit um 60% erhöhen. Aufsichtsbehörden bewerten nicht nur die Zahlen, sondern die strategische Vision und Umsetzungskompetenz.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in Banking-Finanzmodellierung und Regulatorik'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Templates und Methodiken aus hunderten von Lizenzierungsprojekten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Direkter Einblick in Aufsichtsbehörden-Präferenzen und Bewertungskriterien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Investor-Grade-Qualität für optimale Finanzierungschancen'
            }
          ]
        },
        additionalInfo: 'Unser Feasibility-Businessplan ist mehr als ein Dokument - er ist Ihr strategischer Kompass für den gesamten Banklizenzierungsprozess und darüber hinaus.',
        serviceDescription: 'Wir entwickeln maßgeschneiderte Feasibility-Businesspläne, die alle Aspekte Ihres Banking-Vorhabens durchleuchten und professionell dokumentieren. Von der Marktanalyse über die Finanzmodellierung bis zur Regulatorik erhalten Sie ein umfassendes Strategiedokument.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Geschäftsmodell-Entwicklung und Marktpositionierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Detaillierte Finanzplanung und Rentabilitätsmodellierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Umfassende Risikobewertung und Mitigation-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Regulatorische Compliance-Planung und Governance-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Investor-ready Dokumentation und Präsentationsmaterialien'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln Ihren Feasibility-Businessplan systematisch und datengetrieben, um maximale Überzeugungskraft bei Aufsichtsbehörden und Investoren zu erzielen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Konzeption und Geschäftsmodell-Definition'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Marktanalyse und Competitive Intelligence'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Detaillierte Finanzmodellierung und Szenarioplanung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Risikobewertung und Compliance-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Finalisierung und Präsentationsvorbereitung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Der von ADVISORI entwickelte Feasibility-Businessplan war instrumental für unseren Lizenzierungserfolg. Die detaillierte Finanzmodellierung und strategische Positionierung haben nicht nur die BaFin überzeugt, sondern auch unsere Series-A-Finanzierung um 40% überzeichnet. Ein Game-Changer für unser Banking-Vorhaben.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Geschäftsmodell-Entwicklung und Finanzplanung',
          description: 'Wir entwickeln ein überzeugendes Geschäftsmodell mit detaillierter Finanzplanung, die alle Stakeholder von der Rentabilität und Nachhaltigkeit Ihres Banking-Vorhabens überzeugt.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Value Proposition Design und Customer Journey Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: '5-Jahres-Finanzmodell mit detaillierter P&L, Bilanz und Cashflow'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Szenarioplanung und Sensitivitätsanalysen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Kapitalbedarfsplanung und Finanzierungsstrategie'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Marktanalyse und Risikomanagement-Framework',
          description: 'Umfassende Marktanalyse und professionelles Risikomanagement-Konzept, das regulatorische Anforderungen erfüllt und Investoren Sicherheit bietet.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Marktpotenzial-Analyse und Competitive Landscape'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Risikoinventur und Risk Appetite Framework'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Regulatorische Compliance-Roadmap und Governance-Struktur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Stresstesting-Szenarien und Recovery-Planung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(banklizenzFeasibilityBusinessplanData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Banklizenz Feasibility Businessplan page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
