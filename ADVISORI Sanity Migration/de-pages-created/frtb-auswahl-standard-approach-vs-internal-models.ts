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
    console.log('Creating FRTB Auswahl Standard Approach vs. Internal Models page...')

    const frtbAuswahlData = {
      _type: 'servicePage',
      _id: 'frtb-auswahl-standard-approach-vs-internal-models',
      title: 'FRTB Auswahl: Standard Approach vs. Internal Models',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/frtb/frtb-readiness/frtb-auswahl-standard-approach-vs-internal-models'
      },
      parent: {
        _type: 'reference',
        _ref: 'frtb-readiness'
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
        title: 'FRTB Auswahl: Standard Approach vs. Internal Models | ADVISORI',
        description: 'Fundierte Entscheidungshilfe bei der Auswahl zwischen FRTB Standardansatz und internen Modellen. Evaluieren Sie Ihre Optionen und implementieren Sie die optimale Lösung für Ihr Institut.',
        keywords: 'FRTB Standardansatz, FRTB Internal Models Approach, FRTB IMA, FRTB SA, Modellentscheidung, Kapitaloptimierung, Fundamental Review of the Trading Book'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FRTB Auswahl: Standard Approach vs. Internal Models'
        },
        tagline: 'Strategische Entscheidungsfindung für optimale Kapitaleffizienz',
        heading: 'FRTB Auswahl: Standard Approach vs. Internal Models',
        description: 'Unsere spezialisierte Beratung unterstützt Sie bei der strategischen Entscheidung zwischen dem FRTB-Standardansatz und internen Modellen. Wir analysieren Ihre spezifische Situation, evaluieren die Kosten, Nutzen und Anforderungen beider Ansätze und entwickeln eine maßgeschneiderte Implementierungsstrategie für die optimale Lösung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Fundierte Entscheidungsgrundlage durch quantitative und qualitative Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierung der Kapitalanforderungen durch strategische Methodenwahl'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Detaillierte Kosten-Nutzen-Analyse beider Ansätze'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Maßgeschneiderte Implementierungsstrategie für Ihren gewählten Ansatz'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'FRTB Auswahl: Standard Approach vs. Internal Models',
        description: 'Die Entscheidung zwischen dem FRTB-Standardansatz (SA) und dem Internal Models Approach (IMA) ist ein zentrales strategisches Element Ihrer FRTB-Implementierung mit weitreichenden Auswirkungen auf Ihre Kapitalanforderungen, operativen Kosten und Wettbewerbsfähigkeit. Unsere spezialisierte Beratung unterstützt Sie bei dieser komplexen Entscheidungsfindung und der anschließenden Implementierung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Analyse Ihrer aktuellen Handelsaktivitäten und Risikopositionen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Quantifizierung der Kapitalanforderungen unter beiden Ansätzen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Bewertung der operativen Anforderungen und Implementierungskosten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Evaluation der Auswirkungen auf Ihre Handelsstrategien und Produktangebot'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Entwicklung einer optimierten Trading-Desk-Struktur für den gewählten Ansatz'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine durchdachte Hybrid-Strategie, bei der bestimmte Trading Desks für den IMA und andere für den SA vorgesehen werden, kann die Kapitalanforderungen um bis zu 25% reduzieren im Vergleich zu einer uniformen Anwendung des Standardansatzes.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in beiden FRTB-Ansätzen und deren praktischer Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Proprietäre Methodik zur Quantifizierung der Kapitalauswirkungen verschiedener Implementierungsszenarien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfangreiche Erfahrung in der Optimierung von Trading-Desk-Strukturen unter FRTB'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kombination aus regulatorischem Know-how, Risikomanagement-Expertise und praktischer Implementierungserfahrung'
            }
          ]
        },
        additionalInfo: 'Die FRTB-Methodenanforderungen für den Internal Models Approach sind erheblich verschärft worden, was die Entscheidung zwischen SA und IMA zu einer komplexen Abwägung macht. Eine fundierte Analyse und strategische Planung sind entscheidend, um die optimale Balance zwischen Kapitaleffizienz und operativer Komplexität zu finden.',
        serviceDescription: 'Unsere Beratungsleistung zur FRTB-Methodenauswahl umfasst eine detaillierte Analyse Ihrer spezifischen Situation, die Quantifizierung der Kapitalauswirkungen beider Ansätze und die Entwicklung einer maßgeschneiderten Implementierungsstrategie. Wir unterstützen Sie bei der praktischen Umsetzung und stellen sicher, dass Ihr gewählter Ansatz sowohl regulatorisch konform als auch kapitaleffizient ist.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Quantitative Analyse der Kapitalanforderungen unter SA und IMA'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Bewertung der operativen Anforderungen und Implementierungskosten'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung einer optimalen Trading-Desk-Struktur'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Unterstützung bei der Implementierung des gewählten Ansatzes'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Begleitung der Modellzulassung bei Wahl des IMA'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und bewährten Ansatz für die Evaluierung und Implementierung des optimalen FRTB-Ansatzes für Ihr Institut.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der aktuellen Handelsaktivitäten und Risikopositionen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Quantifizierung der Kapitalanforderungen unter verschiedenen Szenarien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Bewertung der operativen Anforderungen und Implementierungskosten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung einer optimalen Implementierungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Unterstützung bei der praktischen Umsetzung und Validierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Thomas Schulz',
        position: 'Head of Market Risk',
        quote: 'Die Unterstützung von ADVISORI bei der Evaluierung und Auswahl zwischen FRTB-Standardansatz und internen Modellen war für uns von unschätzbarem Wert. Die detaillierte Analyse und die strategische Beratung ermöglichten es uns, eine fundierte Entscheidung zu treffen, die sowohl unsere Kapitalanforderungen optimiert als auch unsere operativen Ressourcen berücksichtigt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'FRTB-Methodenanalyse und Entscheidungsunterstützung',
          description: 'Wir analysieren Ihre spezifische Situation und die Kapitalauswirkungen beider FRTB-Ansätze, bewerten die operativen Anforderungen und entwickeln eine fundierte Entscheidungsgrundlage für die Auswahl des optimalen Ansatzes für Ihr Institut.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse Ihrer Handelsaktivitäten und Risikopositionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Quantifizierung der Kapitalanforderungen unter SA und IMA'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Bewertung der operativen Anforderungen und Implementierungskosten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung einer fundierten Entscheidungsgrundlage'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Implementierung und Optimierung des gewählten FRTB-Ansatzes',
          description: 'Nach der Entscheidung für einen Ansatz unterstützen wir Sie bei der praktischen Umsetzung und Optimierung. Wir entwickeln eine maßgeschneiderte Implementierungsstrategie, begleiten die Umsetzung und stellen sicher, dass der gewählte Ansatz optimal auf Ihre spezifische Situation abgestimmt ist.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung einer maßgeschneiderten Implementierungsstrategie'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Optimierung Ihrer Trading-Desk-Struktur für den gewählten Ansatz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Unterstützung bei der technischen und prozessualen Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Begleitung der Modellzulassung bei Wahl des IMA'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(frtbAuswahlData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FRTB Auswahl Standard Approach vs. Internal Models page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
