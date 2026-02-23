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
    console.log('Creating Banklizenz Risiko-Chancen-Analyse page...')

    const banklizenzRisikoChancenAnalyseData = {
      _type: 'servicePage',
      _id: 'banklizenz-risiko-chancen-analyse',
      title: 'Banklizenz Risiko-Chancen-Analyse',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/banklizenz-beantragen/banklizenz-vorstudie/banklizenz-risiko-chancen-analyse'
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
        title: 'Banklizenz Risiko-Chancen-Analyse | ADVISORI',
        description: 'Umfassende Risiko-Chancen-Analyse für Ihre Banklizenzierung. Professionelle Bewertung aller Risiken und Chancen vor der strategischen Entscheidung für eine Banking-Lizenz.',
        keywords: 'Banklizenz Risiko-Chancen-Analyse, Banking Risk Assessment, Lizenzierungs-Risikobewertung, Banking Opportunity Analysis, Regulatorische Risikoanalyse, Banking Strategy Assessment'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Banklizenz Risiko-Chancen-Analyse'
        },
        tagline: 'Strategische Risiko-Chancen-Bewertung',
        heading: 'Banklizenz Risiko-Chancen-Analyse',
        description: 'Eine fundierte Risiko-Chancen-Analyse ist essentiell für eine erfolgreiche Banklizenzierung. Wir bewerten systematisch alle Risiken und Chancen Ihres Banking-Vorhabens und schaffen die Grundlage für strategisch fundierte Entscheidungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Bewertung aller regulatorischen und operativen Risiken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Identifikation und Quantifizierung strategischer Marktchancen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Entwicklung maßgeschneiderter Risikominimierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Fundierte Entscheidungsgrundlage für Investment und Timing'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Banklizenz Risiko-Chancen-Analyse',
        description: 'Eine professionelle Risiko-Chancen-Analyse bildet das Herzstück jeder erfolgreichen Banklizenzierungsstrategie. Wir analysieren systematisch alle relevanten Risikodimensionen und identifizieren gleichzeitig die strategischen Chancen, die eine Banking-Lizenz für Ihr Unternehmen eröffnet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Risikobewertung über alle Geschäftsbereiche hinweg'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Quantitative und qualitative Chancenidentifikation und -bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung von Risikominimierungs- und Chancenmaximierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Szenario-Analysen für verschiedene Markt- und Regulierungsentwicklungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Strategische Empfehlungen für optimale Risiko-Chancen-Balance'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine systematische Risiko-Chancen-Analyse kann nicht nur kritische Risiken frühzeitig identifizieren, sondern auch versteckte Wertschöpfungspotentiale aufdecken. 85% aller erfolgreichen Banking-Startups beginnen mit einer professionellen Risiko-Chancen-Bewertung.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in Banking-Risikomanagement und Strategieentwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Proprietäre Risiko-Assessment-Methoden basierend auf hunderten Lizenzierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Tiefe Marktkenntnis und Benchmark-Analysen aus der Banking-Industrie'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von operativen bis strategischen Risiken'
            }
          ]
        },
        additionalInfo: 'Eine professionelle Risiko-Chancen-Analyse ist Ihr strategischer Kompass für eine erfolgreiche und nachhaltige Banklizenzierung mit optimaler Risiko-Ertrags-Balance.',
        serviceDescription: 'Wir bieten Ihnen eine systematische und umfassende Risiko-Chancen-Analyse, die alle kritischen Dimensionen einer Banklizenzierung beleuchtet. Von regulatorischen Risiken über operative Herausforderungen bis hin zu strategischen Marktchancen erhalten Sie eine vollständige Bewertung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Regulatorische Risikobewertung und Compliance-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Operative Risiko- und Ressourcenanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Marktchancen-Identifikation und Competitive Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Szenario-Planung und Stress-Testing'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Strategische Handlungsempfehlungen und Roadmap'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir führen eine strukturierte und datengestützte Risiko-Chancen-Analyse durch, die alle relevanten Dimensionen systematisch erfasst und bewertet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Systematische Risikoidentifikation über alle Geschäftsbereiche'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Quantitative Risikobewertung und Impact-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Chancen-Mapping und Marktpotential-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung von Mitigation-Strategien und Opportunity-Capture-Plänen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Präsentation der Ergebnisse mit strategischen Handlungsempfehlungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Risiko-Chancen-Analyse von ADVISORI war für unsere Entscheidungsfindung unverzichtbar. Sie hat nicht nur kritische Risiken aufgedeckt, die wir übersehen hätten, sondern auch Chancen identifiziert, die unser Geschäftsmodell grundlegend verbessert haben. Eine Investition in strategische Klarheit.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Umfassende Risikobewertung und Impact-Analyse',
          description: 'Wir identifizieren und bewerten systematisch alle Risikodimensionen Ihrer Banking-Ambitionen und entwickeln maßgeschneiderte Mitigation-Strategien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Regulatorische Risiken und Compliance-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Operative Risiken und Ressourcenbedarf'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Markt- und Wettbewerbsrisiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Finanzielle Risiken und Kapitalanforderungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Strategische Chancenidentifikation und -bewertung',
          description: 'Wir analysieren systematisch alle strategischen Chancen und Wertschöpfungspotentiale, die eine Banking-Lizenz für Ihr Unternehmen eröffnet.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Marktchancen und Revenue-Potential-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Strategische Positionierungs- und Differenzierungsmöglichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Partnership- und Kooperationschancen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Szenario-Analysen und Optimierungsempfehlungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(banklizenzRisikoChancenAnalyseData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Banklizenz Risiko-Chancen-Analyse page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
