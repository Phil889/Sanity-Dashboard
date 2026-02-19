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
    console.log('Creating Basel III Readiness page...')

    const baselIIIReadinessData = {
      _type: 'servicePage',
      _id: 'basel-iii-readiness',
      title: 'Basel III Readiness',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/basel-iii/basel-iii-readiness'
      },
      parent: {
        _type: 'reference',
        _ref: 'basel-iii'
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
        title: 'Basel III Readiness | ADVISORI',
        description: 'Umfassende Bewertung Ihrer Basel III-Readiness und maßgeschneiderte Strategien zur Vorbereitung auf die Implementierung der Basel III-Anforderungen. Wir unterstützen Sie bei der Identifizierung von Lücken und der Entwicklung einer Roadmap für die vollständige Compliance.',
        keywords: 'Basel III Readiness, Basel III Vorbereitung, Bankenregulierung, Gap-Analyse, Implementierungsstrategie, Compliance-Vorbereitung, Regulatorische Anforderungen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Basel III Readiness'
        },
        tagline: 'Strategische Vorbereitung für die Basel III-Implementierung',
        heading: 'Basel III Readiness',
        description: 'Die Erfüllung der Basel III-Anforderungen erfordert eine umfassende Vorbereitung und strategische Planung. Wir unterstützen Sie bei der Bewertung Ihrer aktuellen Readiness, identifizieren Handlungsbedarf und entwickeln einen strukturierten Implementierungsplan für eine effiziente Umsetzung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende Gap-Analyse zur Identifikation von Handlungsbedarf'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Priorisierte Roadmap für die effiziente Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kosteneffiziente Implementierungsstrategie mit Quick Wins'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Reduzierung von Risiken durch frühzeitige Identifikation von Herausforderungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Basel III Readiness',
        description: 'Die Vorbereitung auf Basel III ist ein kritischer Schritt für Finanzinstitute, um die komplexen regulatorischen Anforderungen effizient und rechtzeitig umzusetzen. Unsere Basel III Readiness-Services umfassen eine gründliche Bewertung Ihrer aktuellen Situation, die Identifikation von Lücken und die Entwicklung einer maßgeschneiderten Implementierungsstrategie, die Ihre spezifischen Geschäftsanforderungen und -ziele berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Bewertung Ihrer aktuellen Compliance-Situation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Detaillierte Gap-Analyse zu Kapital-, Liquiditäts- und Risikomanagementanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung einer priorisierten Roadmap mit klaren Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Bewertung der Auswirkungen auf Geschäftsmodell und Profitabilität'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Identifikation von Quick Wins und effizienten Implementierungsstrategien'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine frühzeitige und gründliche Readiness-Bewertung ist entscheidend, um Implementierungsrisiken zu minimieren und kostspielige Nachbesserungen zu vermeiden. Nutzen Sie die Vorbereitung als Chance, Ihre Prozesse zu optimieren und strategische Wettbewerbsvorteile zu entwickeln.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Bewährte Methodik zur effizienten Bewertung und Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassende Expertise in allen Aspekten von Basel III'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxisorientierter Ansatz mit Fokus auf Implementierbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Erfahrung aus zahlreichen erfolgreichen Basel III-Implementierungsprojekten'
            }
          ]
        },
        additionalInfo: 'Eine gründliche Basel III-Readiness-Bewertung bildet das Fundament für eine erfolgreiche Implementierung. Sie ermöglicht nicht nur die frühzeitige Identifikation von Herausforderungen, sondern auch die strategische Planung und Priorisierung von Maßnahmen, um die Compliance-Anforderungen kosteneffizient und mit minimalen Geschäftsunterbrechungen zu erfüllen.',
        serviceDescription: 'Unser Basel III Readiness-Service bietet eine strukturierte und umfassende Bewertung Ihrer aktuellen Situation im Hinblick auf die Basel III-Anforderungen und unterstützt Sie bei der Entwicklung einer maßgeschneiderten Implementierungsstrategie.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Readiness Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Bewertung der Auswirkungen auf Geschäftsmodell und Kapitalplanung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung einer priorisierten Implementierungsroadmap'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Identifikation von Quick Wins und effizienten Lösungsansätzen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kosten-Nutzen-Analyse verschiedener Implementierungsoptionen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und effizienten Ansatz zur Bewertung Ihrer Basel III-Readiness und zur Entwicklung einer maßgeschneiderten Implementierungsstrategie.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Initiale Bestandsaufnahme und Analyse der aktuellen Compliance-Situation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Detaillierte Gap-Analyse in den Bereichen Kapital, Liquidität und Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Bewertung der Auswirkungen auf Geschäftsmodell, Prozesse und Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung einer priorisierten Roadmap mit konkreten Handlungsempfehlungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Erstellung eines detaillierten Implementierungsplans mit Ressourcenplanung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Eine gründliche Vorbereitung ist der Schlüssel zum Erfolg bei der Implementierung von Basel III. Unsere strukturierte Readiness-Bewertung ermöglicht es Banken, Herausforderungen frühzeitig zu erkennen und einen effizienten Implementierungsplan zu entwickeln, der nicht nur Compliance sicherstellt, sondern auch strategische Vorteile schafft.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Basel III Readiness Assessment und Gap-Analyse',
          description: 'Wir führen eine umfassende Bewertung Ihrer aktuellen Compliance-Situation durch und identifizieren Lücken in Bezug auf die Basel III-Anforderungen in den Bereichen Kapital, Liquidität und Risikomanagement.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse der Kapitalstruktur und -planung im Hinblick auf neue Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung der Liquiditätsmanagement-Prozesse und -Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Überprüfung der Risikomanagement-Frameworks und -Modelle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Identifikation von Datenlücken und Prozessschwachstellen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Entwicklung einer Basel III Implementierungsstrategie',
          description: 'Basierend auf den Ergebnissen des Readiness Assessments entwickeln wir eine maßgeschneiderte Implementierungsstrategie mit konkreten Handlungsempfehlungen und einem priorisierten Umsetzungsplan.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Priorisierung von Maßnahmen basierend auf Compliance-Anforderungen und Geschäftsauswirkungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung einer detaillierten Roadmap mit klaren Meilensteinen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Kosten-Nutzen-Analyse verschiedener Implementierungsoptionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Ressourcenplanung und Budgetierung für die Implementierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(baselIIIReadinessData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Basel III Readiness page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
