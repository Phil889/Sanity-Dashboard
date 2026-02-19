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
    console.log('Creating NIS2 Implementation Strategy page...')

    const nis2ImplementationStrategyData = {
      _type: 'servicePage',
      _id: 'nis2-implementation-strategy',
      title: 'NIS2 Implementation Strategy',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/nis2/nis2-readiness/nis2-implementation-strategy'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management-nis2-nis2-readiness'
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
        title: 'NIS2 Implementation Strategy | ADVISORI',
        description: 'Entwickeln Sie eine erfolgreiche NIS2-Implementierungsstrategie mit ADVISORI. Strukturierte Herangehensweise für nachhaltige Cybersicherheit und Compliance.',
        keywords: 'NIS2 Implementierung, Cybersicherheitsstrategie, NIS2 Compliance, Implementierungsplanung, Cybersecurity Strategy'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIS2 Implementation Strategy'
        },
        tagline: 'Strategische Implementierung der NIS2-Richtlinie für nachhaltige Cybersicherheit',
        heading: 'NIS2 Implementation Strategy',
        description: 'Eine durchdachte Implementierungsstrategie ist der Schlüssel für eine erfolgreiche NIS2-Compliance. Wir entwickeln mit Ihnen einen strukturierten Ansatz zur nachhaltigen Umsetzung aller NIS2-Anforderungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierte Phasenplanung für effiziente NIS2-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Minimierung von Implementierungsrisiken und Compliance-Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Optimale Ressourcenallokation und Budgetplanung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltige Integration in bestehende Cybersicherheitsstrukturen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'NIS2 Implementation Strategy',
        description: 'Die erfolgreiche Umsetzung der NIS2-Richtlinie erfordert eine strategische Herangehensweise, die technische, organisatorische und regulatorische Aspekte ganzheitlich berücksichtigt. Wir entwickeln mit Ihnen eine maßgeschneiderte Implementierungsstrategie.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Roadmap-Entwicklung für NIS2-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Phasenweise Implementierungsplanung mit Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Change Management und Stakeholder-Einbindung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Risikomanagement und Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Optimierung'
          }
        ],
        alert: {
          title: 'Strategischer Vorteil',
          content: 'Eine durchdachte Implementierungsstrategie reduziert nicht nur Compliance-Risiken, sondern schafft auch die Grundlage für eine zukunftsfähige Cybersicherheitsarchitektur, die über NIS2-Anforderungen hinausgeht.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung in großangelegten Cybersicherheits-Transformationen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodiken für komplexe Compliance-Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Tiefgreifende Kenntnisse der NIS2-Richtlinie und nationaler Umsetzungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenspezifische Implementierungsansätze und Best Practices'
            }
          ]
        },
        additionalInfo: 'Studien zeigen, dass Unternehmen mit einer strukturierten Implementierungsstrategie 60% weniger Zeit für die NIS2-Compliance benötigen und 40% geringere Implementierungskosten haben.',
        serviceDescription: 'Wir bieten Ihnen eine umfassende Beratung zur strategischen Implementierung der NIS2-Richtlinie, von der initialen Strategieentwicklung bis zur nachhaltigen Umsetzung und kontinuierlichen Optimierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'NIS2 Implementation Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Strategische Phasenplanung und Meilenstein-Definition'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Change Management und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Ressourcenplanung und Budgetierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Qualitätssicherung und Erfolgsmessung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer Ansatz',
        description: 'Wir entwickeln mit Ihnen eine ganzheitliche Implementierungsstrategie, die alle Dimensionen der NIS2-Compliance systematisch adressiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Analyse und Vision-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Roadmap-Erstellung mit klaren Phasen und Abhängigkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Governance-Strukturen und Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierungsbegleitung und Qualitätskontrolle'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltigkeit und kontinuierliche Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns dabei geholfen, eine strukturierte und nachhaltige NIS2-Implementierungsstrategie zu entwickeln. Ihr strategischer Ansatz und die praxisnahe Beratung haben uns ermöglicht, die Compliance-Anforderungen effizient und kostenoptimal umzusetzen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Roadmap-Entwicklung',
          description: 'Entwicklung einer umfassenden Implementierungsstrategie mit klaren Zielen, Phasen und Erfolgskriterien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Vision und strategische Zielformulierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Phasenplanung mit Meilensteinen und Abhängigkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Ressourcen- und Budgetplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Risikobewertung und Mitigation-Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Change Management und Governance',
          description: 'Etablierung effektiver Governance-Strukturen und Change Management-Prozesse für eine erfolgreiche Transformation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Governance-Framework und Entscheidungsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Stakeholder-Management und Kommunikationsstrategie'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Training und Kompetenzentwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kulturwandel und Akzeptanzförderung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nis2ImplementationStrategyData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIS2 Implementation Strategy page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
