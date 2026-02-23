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
    console.log('Creating Basel III Capital and Liquidity Requirements page...')

    const baselIIICapitalLiquidityData = {
      _type: 'servicePage',
      _id: 'basel-iii-kapital-und-liquiditaetsvorschriften-leverage-ratio-lcr-nsfr',
      title: 'Basel III: Kapital- und Liquiditätsvorschriften (Leverage Ratio, LCR, NSFR)',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/basel-iii/basel-iii-readiness/basel-iii-kapital-und-liquiditaetsvorschriften-leverage-ratio-lcr-nsfr'
      },
      parent: {
        _type: 'reference',
        _ref: 'basel-iii-readiness'
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
        title: 'Basel III: Kapital- und Liquiditätsvorschriften (Leverage Ratio, LCR, NSFR) | ADVISORI',
        description: 'Umfassende Beratung zu Basel III Kapital- und Liquiditätsvorschriften. Expertise zu Leverage Ratio, LCR und NSFR für Banken und Finanzinstitute.',
        keywords: 'Basel III, Kapitalvorschriften, Liquiditätsvorschriften, Leverage Ratio, LCR, NSFR, Bankenregulierung, Finanzinstitute, Regulatorische Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Basel III Kapital- und Liquiditätsvorschriften'
        },
        tagline: 'Stärkung der Finanzstabilität durch robuste aufsichtsrechtliche Standards',
        heading: 'Basel III: Kapital- und Liquiditätsvorschriften',
        description: 'Die Basel III Kapital- und Liquiditätsvorschriften wie Leverage Ratio, LCR und NSFR stellen Finanzinstitute vor komplexe Herausforderungen. Wir unterstützen Sie bei der umfassenden Implementierung und kontinuierlichen Einhaltung dieser Standards.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Gezielte Anpassung von Kapitalstruktur und Liquiditätsmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierung der regulatorischen Kennzahlen und Reduktion von Kapitalkosten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Verlässliche Compliance mit aktuellen und künftigen Basel III-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Stärkung des Risikomanagements und der Finanzstabilität'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Basel III Kapital- und Liquiditätsvorschriften',
        description: 'Die Basel III Rahmenvereinbarung hat mit ihren Kapital- und Liquiditätsvorschriften die Bankenregulierung grundlegend verändert. Die Leverage Ratio, Liquidity Coverage Ratio (LCR) und Net Stable Funding Ratio (NSFR) stellen Kernelemente dar, die eine solide Kapitalausstattung und ausreichende Liquiditätspuffer sicherstellen sollen. Wir unterstützen Sie bei der strategischen Implementierung und Optimierung dieser komplexen regulatorischen Anforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse und Bewertung aktueller Kapital- und Liquiditätspositionen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung optimierter Strategien zur Einhaltung der Leverage Ratio'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung robuster LCR- und NSFR-Managementsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von Kapital- und Liquiditätsplanung in die Gesamtstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliches Monitoring und proaktive Anpassung an regulatorische Änderungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die frühzeitige Integration von Kapital- und Liquiditätsanforderungen in Geschäftsstrategien und Risikomanagementprozesse ermöglicht nicht nur Compliance, sondern schafft auch strategische Vorteile gegenüber Wettbewerbern und stärkt das Vertrauen von Investoren und Aufsichtsbehörden.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in allen Aspekten der Basel III-Regulierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praktische Erfahrung mit der Umsetzung von Kapital- und Liquiditätsvorschriften'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz, der regulatorische Anforderungen mit Geschäftszielen verbindet'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Zugang zu bewährten Methodiken und Tools für Kennzahlenoptimierung'
            }
          ]
        },
        additionalInfo: 'Eine effektive Umsetzung der Basel III Kapital- und Liquiditätsvorschriften kann nicht nur regulatorische Compliance sicherstellen, sondern auch zu einer verbesserten Kapitaleffizienz, optimierter Liquiditätssteuerung und letztendlich zu niedrigeren Finanzierungskosten führen.',
        serviceDescription: 'Unsere umfassenden Dienstleistungen im Bereich der Basel III Kapital- und Liquiditätsvorschriften decken den gesamten Implementierungszyklus ab - von der initialen Gap-Analyse über die strategische Planung bis hin zur operativen Umsetzung und kontinuierlichen Überwachung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Gap-Analyse und Bewertung der aktuellen Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Strategieentwicklung für Leverage Ratio-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Design und Implementierung von LCR- und NSFR-Steuerungssystemen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration von Kapital- und Liquiditätsplanung in bestehende Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Reporting-Systeme und Dashboards für regulatorische Kennzahlen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir unterstützen Sie mit einem methodischen und praxisorientierten Ansatz bei der Implementierung und Optimierung der Basel III Kapital- und Liquiditätsvorschriften.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer aktuellen Kapital- und Liquiditätssituation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Identifikation von Optimierungspotenzialen und regulatorischen Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung maßgeschneiderter Strategien für jede regulatorische Kennzahl'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Operationalisierung durch robuste Prozesse und systemgestützte Tools'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Begleitung bei der Implementierung und kontinuierliche Überprüfung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Thomas Fischer',
        position: 'Senior Regulatory Expert',
        quote: 'Durch die strategische Beratung von ADVISORI konnten wir nicht nur unsere Basel III Kapital- und Liquiditätskennzahlen optimieren, sondern auch unsere internen Steuerungsprozesse deutlich verbessern. Das Team hat uns mit fundiertem Fachwissen und praxisnahen Lösungen unterstützt, die genau auf unsere Bedürfnisse zugeschnitten waren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Leverage Ratio Optimierung',
          description: 'Wir unterstützen Sie bei der Analyse und Optimierung Ihrer Leverage Ratio durch gezielte Bilanzstrukturmaßnahmen und strategische Anpassungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse der aktuellen Leverage Ratio-Position'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Optimierungspotenzialen in der Bilanzstruktur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung von Strategien zur nachhaltigen Verbesserung der Kennzahl'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration der Leverage Ratio in die strategische Planung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'LCR & NSFR Management',
          description: 'Wir entwickeln mit Ihnen maßgeschneiderte Lösungen für ein effizientes Management der Liquidity Coverage Ratio (LCR) und Net Stable Funding Ratio (NSFR).',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Umfassende Bewertung der aktuellen Liquiditätssituation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung von Strategien zur Optimierung der Liquiditätskennzahlen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementierung robuster Liquiditätssteuerungssysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Aufbau eines effektiven Frühwarnsystems für Liquiditätsengpässe'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(baselIIICapitalLiquidityData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Basel III Capital and Liquidity Requirements page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
