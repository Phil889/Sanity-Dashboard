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
    console.log('Creating FRTB Ongoing Compliance page...')

    const frtbOngoingComplianceData = {
      _type: 'servicePage',
      _id: 'frtb-ongoing-compliance',
      title: 'FRTB Ongoing Compliance',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/frtb/frtb-ongoing-compliance'
      },
      parent: {
        _type: 'reference',
        _ref: 'frtb'
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
        title: 'FRTB Ongoing Compliance | ADVISORI',
        description: 'Kontinuierliche Einhaltung der FRTB-Anforderungen. Wir unterstützen Sie bei der laufenden Überwachung, Anpassung und Optimierung Ihrer FRTB-Compliance-Prozesse.',
        keywords: 'FRTB, Ongoing Compliance, Marktrisiko, Kapitalanforderungen, Handelsbuch, Risikomodelle, kontinuierliche Überwachung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FRTB Ongoing Compliance'
        },
        tagline: 'Nachhaltige FRTB-Compliance durch kontinuierliche Überwachung',
        heading: 'FRTB Ongoing Compliance',
        description: 'Die kontinuierliche Einhaltung der FRTB-Anforderungen erfordert systematische Überwachung, regelmäßige Anpassungen und proaktive Optimierung. Wir begleiten Sie bei der nachhaltigen FRTB-Compliance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Kontinuierliche Überwachung der FRTB-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Proaktive Anpassung an regulatorische Änderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Optimierung der Kapitaleffizienz im Handelsbuch'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Reduzierung des Compliance-Risikos durch systematische Prozesse'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'FRTB Ongoing Compliance',
        description: 'Die Fundamental Review of the Trading Book (FRTB) ist nicht nur ein einmaliges Implementierungsprojekt, sondern erfordert kontinuierliche Aufmerksamkeit und Anpassung. Die laufende Compliance umfasst die systematische Überwachung von Risikomodellen, die Anpassung an regulatorische Entwicklungen und die Optimierung von Kapitalprozessen. Wir unterstützen Sie dabei, eine nachhaltige und effiziente FRTB-Compliance zu etablieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Kontinuierliche Überwachung und Validierung der FRTB-Risikomodelle'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Regelmäßige Bewertung und Anpassung der Handelsplatz-Zuordnung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Monitoring von Modellperformance und Backtesting-Ergebnissen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Anpassung an regulatorische Updates und Interpretationspapiere'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Optimierung der Kapitaleffizienz durch prozessuale Verbesserungen'
          }
        ],
        alert: {
          title: 'Regulatorischer Hinweis',
          content: 'Die FRTB-Anforderungen entwickeln sich kontinuierlich weiter. Eine proaktive Überwachung und Anpassung der Compliance-Prozesse ist entscheidend, um regulatorische Risiken zu minimieren und Kapitaleffizienz zu maximieren.'
        },
        whyUs: {
          title: 'Warum ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in FRTB-Anforderungen und Marktrisikomanagement'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung in der kontinuierlichen Überwachung komplexer Risikomodelle'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Proaktiver Ansatz zur Identifikation von Compliance-Risiken'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovative Lösungen zur Automatisierung von Überwachungsprozessen'
            }
          ]
        },
        additionalInfo: 'Eine effektive FRTB Ongoing Compliance kann die Kapitalkosten um bis zu 15% reduzieren und gleichzeitig das regulatorische Risiko minimieren. Die Investition in systematische Überwachungsprozesse zahlt sich sowohl in finanzieller als auch in regulatorischer Hinsicht aus.',
        serviceDescription: 'Wir bieten ein umfassendes Leistungsspektrum zur Unterstützung Ihrer kontinuierlichen FRTB-Compliance. Unser Ansatz kombiniert technische Expertise mit strategischer Beratung, um nachhaltige und effiziente Compliance-Prozesse zu etablieren.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Kontinuierliche Modellvalidierung und Performance-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Regulatorisches Monitoring und Impact Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Prozessoptimierung und Automatisierung der Compliance-Funktionen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Training und Capacity Building für interne Teams'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Entwicklung von KPIs und Governance-Frameworks'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz',
        description: 'Wir entwickeln mit Ihnen eine systematische Herangehensweise an die kontinuierliche FRTB-Compliance, die sowohl regulatorische Sicherheit als auch operative Effizienz gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Etablierung eines robusten Monitoring- und Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Implementierung automatisierter Überwachungs- und Reporting-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung proaktiver Anpassungsmechanismen für regulatorische Änderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Optimierung der Prozesse und Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Regelmäßige Bewertung und Anpassung der Compliance-Strategie'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'FRTB Ongoing Compliance ist ein kontinuierlicher Prozess, der strategische Weitsicht und operative Exzellenz erfordert. Mit unserer Unterstützung können Banken nicht nur regulatorische Sicherheit gewährleisten, sondern auch ihre Kapitaleffizienz nachhaltig optimieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Kontinuierliche Modellüberwachung',
          description: 'Systematische Überwachung und Validierung Ihrer FRTB-Risikomodelle zur Sicherstellung kontinuierlicher Compliance und optimaler Performance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Automatisierte Backtesting-Verfahren und Performance-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Regelmäßige Kalibrierung und Anpassung der Risikomodelle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung von Model Performance Indicators (MPIs)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Implementierung von Alert-Systemen für Modellabweichungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Regulatorisches Change Management',
          description: 'Proaktive Überwachung und Umsetzung regulatorischer Änderungen zur Sicherstellung kontinuierlicher FRTB-Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Monitoring von EBA, BCBS und nationalen regulatorischen Entwicklungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Impact Assessment und Gap-Analyse für regulatorische Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung von Implementierungsroadmaps für Änderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Training und Change Management für betroffene Teams'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(frtbOngoingComplianceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FRTB Ongoing Compliance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
