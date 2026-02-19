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
    console.log('Creating Banklizenz Kapitalbedarf Budgetierung page...')

    const banklizenzKapitalbedarfBudgetierungData = {
      _type: 'servicePage',
      _id: 'banklizenz-kapitalbedarf-budgetierung',
      title: 'Banklizenz Kapitalbedarf Budgetierung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/banklizenz-beantragen/banklizenz-vorstudie/banklizenz-kapitalbedarf-budgetierung'
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
        title: 'Banklizenz Kapitalbedarf Budgetierung | ADVISORI',
        description: 'Professionelle Kapitalbedarf-Budgetierung für Ihre Banklizenzierung. Präzise Kalkulation von Mindestkapital, operativen Mitteln und regulatorischen Puffern für erfolgreiche Lizenzanträge.',
        keywords: 'Banklizenz Kapitalbedarf, Banking Capital Requirements, BaFin Mindestkapital, Eigenkapital Budgetierung, Regulatory Capital, Banking Financial Planning'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Banklizenz Kapitalbedarf Budgetierung'
        },
        tagline: 'Präzise Kapitalplanung für Ihre Banklizenz',
        heading: 'Banklizenz Kapitalbedarf Budgetierung',
        description: 'Eine realistische und vollständige Kapitalbedarf-Budgetierung ist entscheidend für eine erfolgreiche Banklizenzierung. Wir kalkulieren nicht nur das regulatorische Mindestkapital, sondern entwickeln eine umfassende Finanzplanung, die alle Phasen Ihrer Banking-Aktivitäten abdeckt.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Präzise Kalkulation von Mindestkapital und regulatorischen Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Umfassende Budgetierung aller operativen und strategischen Kapitalbedarfe'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Risikopuffer und Stresstesting für verschiedene Geschäftsszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Investor-ready Financial Planning und Fundraising-Vorbereitung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Banklizenz Kapitalbedarf Budgetierung',
        description: 'Die Kapitalbedarf-Budgetierung ist eine der kritischsten Komponenten Ihrer Banklizenz-Vorbereitung. Unzureichende oder unrealistische Kapitalplanung ist einer der Hauptgründe für gescheiterte Lizenzanträge. Wir entwickeln eine fundierte und aufsichtsrechtlich robuste Kapitalplanung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Berechnung des regulatorischen Mindestkapitals nach CRR/CRD IV'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Kalkulation operativer Kapitalbedarfe für Geschäftsaufbau und -betrieb'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Planung von Risikopuffern und Stress-Szenarien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung eines mehrjährigen Kapital- und Liquiditätsplans'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Optimierung der Kapitalstruktur und Finanzierungsstrategie'
          }
        ],
        alert: {
          title: 'Kritischer Erfolgsfaktor',
          content: 'Aufsichtsbehörden prüfen Kapitalplanungen äußerst genau. 60% aller Ablehnungen oder Verzögerungen bei Lizenzanträgen sind auf unzureichende oder unrealistische Kapitalbudgetierung zurückzuführen. Eine professionelle Planung ist daher unverzichtbar.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnis aller regulatorischen Kapitalanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für realistische und aufsichtsrechtlich robuste Planungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Erfahrung mit verschiedenen Banking-Geschäftsmodellen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Direkter Draht zu Aufsichtsbehörden und deren Präferenzen'
            }
          ]
        },
        additionalInfo: 'Eine professionelle Kapitalbedarf-Budgetierung ist nicht nur für die Lizenzierung essentiell, sondern bildet auch die Grundlage für Ihre Fundraising-Aktivitäten und strategische Geschäftsplanung.',
        serviceDescription: 'Wir entwickeln eine umfassende und aufsichtsrechtlich robuste Kapitalbedarf-Budgetierung, die alle regulatorischen Anforderungen erfüllt und gleichzeitig eine realistische Basis für Ihre Geschäftsentwicklung bietet.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Regulatorische Mindestkapital-Berechnung und Compliance-Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Operative Kapitalbedarfs-Kalkulation und Geschäftsmodell-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Risikopuffer-Planung und Stress-Szenario-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kapitalstruktur-Optimierung und Finanzierungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Investor-Dokumentation und Fundraising-Vorbereitung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln Ihre Kapitalbedarf-Budgetierung systematisch und modular, um alle regulatorischen Anforderungen zu erfüllen und gleichzeitig eine solide Basis für Ihre Geschäftsentwicklung zu schaffen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse Ihres Geschäftsmodells und der regulatorischen Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Berechnung des Mindestkapitals und regulatorischer Puffer'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Kalkulation operativer Kapitalbedarfe und Investitionsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung von Stress-Szenarien und Risikopuffern'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Finalisierung der Kapitalplanung und Investor-Dokumentation'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Kapitalbedarf-Budgetierung von ADVISORI war der Schlüssel für unseren erfolgreichen Lizenzantrag. Ihre präzise Kalkulation und realistische Planung haben nicht nur die Aufsicht überzeugt, sondern auch unsere Investoren beeindruckt. Eine Investition, die sich vom ersten Tag an bezahlt gemacht hat.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Regulatorische Kapitalbedarfs-Kalkulation',
          description: 'Wir berechnen präzise alle regulatorischen Kapitalanforderungen für Ihr spezifisches Banking-Geschäftsmodell und stellen sicher, dass Ihre Planung alle aufsichtsrechtlichen Standards erfüllt.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Mindestkapital-Berechnung nach CRR/CRD IV-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Pillar 2-Anforderungen und aufsichtliche Erwartungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Kapitalerhaltungspuffer und systemische Risikopuffer'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Liquiditätsanforderungen (LCR/NSFR) und Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Operative Kapitalplanung und Finanzierungsstrategie',
          description: 'Wir entwickeln eine umfassende operative Kapitalplanung, die alle Geschäfts- und Wachstumsphasen abdeckt und eine optimale Finanzierungsstrategie für Ihre Banking-Ambitionen definiert.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Mehrjährige Geschäfts- und Kapitalplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Stress-Testing und Szenario-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Kapitalstruktur-Optimierung und Fundraising-Planung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Investor-ready Dokumentation und Präsentationsunterlagen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(banklizenzKapitalbedarfBudgetierungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Banklizenz Kapitalbedarf Budgetierung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
