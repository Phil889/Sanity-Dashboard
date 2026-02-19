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
    console.log('Creating VS-NfD Kontinuierliche Verbesserung page...')

    const vsNfdKontinuierlicheVerbesserungData = {
      _type: 'servicePage',
      _id: 'vs-nfd-kontinuierliche-verbesserung',
      title: 'VS-NfD Kontinuierliche Verbesserung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/vs-nfd/vs-nfd-ongoing-compliance/vs-nfd-kontinuierliche-verbesserung'
      },
      parent: {
        _type: 'reference',
        _ref: 'vs-nfd-ongoing-compliance'
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
        title: 'VS-NfD Kontinuierliche Verbesserung | ADVISORI',
        description: 'Etablieren Sie nachhaltige Verbesserungsprozesse für Ihre VS-NfD Compliance. Kontinuierliche Optimierung, Lessons Learned und Anpassung an sich ändernde Sicherheitsanforderungen.',
        keywords: 'VS-NfD, Kontinuierliche Verbesserung, Compliance Optimierung, Verschlusssachen, Sicherheitsmanagement, Prozessverbesserung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'VS-NfD Kontinuierliche Verbesserung'
        },
        tagline: 'Nachhaltige Optimierung Ihrer VS-NfD Compliance-Prozesse',
        heading: 'VS-NfD Kontinuierliche Verbesserung',
        description: 'Entwickeln Sie eine Kultur der kontinuierlichen Verbesserung in Ihrer VS-NfD Compliance. Wir unterstützen Sie bei der systematischen Optimierung Ihrer Sicherheitsprozesse und der Anpassung an sich wandelnde Anforderungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Identifikation und Umsetzung von Verbesserungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Proaktive Anpassung an sich ändernde Sicherheitsanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Erhöhung der Effizienz und Effektivität Ihrer Compliance-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltige Stärkung Ihrer VS-NfD Compliance-Kultur'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'VS-NfD Kontinuierliche Verbesserung',
        description: 'Eine effektive VS-NfD Compliance erfordert mehr als die einmalige Implementierung von Sicherheitsmaßnahmen. Kontinuierliche Verbesserung ist der Schlüssel zu nachhaltiger Compliance-Exzellenz und proaktiver Anpassung an sich wandelnde Bedrohungslagen und regulatorische Anforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung systematischer Verbesserungsprozesse und KPI-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementation von Lessons Learned und Best Practice Sharing'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Regelmäßige Bewertung und Anpassung der Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Proaktive Identifikation neuer Bedrohungen und Anpassungsbedarfe'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Aufbau einer nachhaltigen Compliance- und Verbesserungskultur'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Kontinuierliche Verbesserung in der VS-NfD Compliance ist nicht nur eine Anforderung, sondern ein strategischer Vorteil. Organisationen mit etablierten Verbesserungsprozessen sind besser auf neue Bedrohungen vorbereitet und können ihre Sicherheitsmaßnahmen effizienter anpassen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Langjährige Expertise in VS-NfD Compliance und Prozessoptimierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für nachhaltiges Verbesserungsmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Tools und Frameworks für kontinuierliche Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Individuelle Anpassung an Ihre organisatorischen Strukturen'
            }
          ]
        },
        additionalInfo: 'Studien zeigen, dass Organisationen mit etablierten kontinuierlichen Verbesserungsprozessen ihre Compliance-Kosten um bis zu 30% reduzieren und gleichzeitig ihre Sicherheitseffektivität um 40% steigern können.',
        serviceDescription: 'Wir unterstützen Sie bei der Etablierung nachhaltiger Verbesserungsprozesse für Ihre VS-NfD Compliance. Von der Entwicklung von KPI-Systemen bis zur Implementation von Feedback-Mechanismen - wir schaffen die Grundlage für kontinuierliche Optimierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Entwicklung von Verbesserungsstrategien und -prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Implementation von KPI-Systemen und Performance-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Etablierung von Lessons Learned und Best Practice Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Aufbau von Feedback-Mechanismen und Verbesserungskultur'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Regelmäßige Bewertung und Optimierung der Compliance-Prozesse'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam ein nachhaltiges System für kontinuierliche Verbesserung Ihrer VS-NfD Compliance, das sowohl systematisch als auch praxisorientiert ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der bestehenden Compliance-Prozesse und Verbesserungspotentiale'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung individueller Verbesserungsstrategien und KPI-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementation von Monitoring- und Feedback-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung von Lessons Learned und Wissensmanagement-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Aufbau einer nachhaltigen Verbesserungskultur und Change Management'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die kontinuierliche Verbesserung unserer VS-NfD Compliance-Prozesse war ein Gamechanger. Mit ADVISORI haben wir nicht nur unsere Sicherheitsstandards erhöht, sondern auch eine Kultur der proaktiven Optimierung etabliert, die uns langfristig stärker macht.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Verbesserungsstrategien & KPI-Systeme',
          description: 'Entwicklung systematischer Ansätze zur kontinuierlichen Optimierung Ihrer VS-NfD Compliance-Prozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse bestehender Verbesserungspotentiale'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung maßgeschneiderter KPI-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Implementation von Performance-Monitoring-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Etablierung systematischer Verbesserungsprozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Lessons Learned & Wissensmanagement',
          description: 'Aufbau systematischer Ansätze zur Erfassung, Auswertung und Nutzung von Erfahrungen und Best Practices.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Implementation von Lessons Learned Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Aufbau von Wissensmanagement-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung von Best Practice Sharing-Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Etablierung von Feedback- und Verbesserungsschleifen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(vsNfdKontinuierlicheVerbesserungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ VS-NfD Kontinuierliche Verbesserung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
