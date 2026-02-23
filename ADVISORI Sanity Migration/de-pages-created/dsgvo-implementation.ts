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
    console.log('Creating DSGVO Implementation page...')

    const dsgvoImplementationData = {
      _type: 'servicePage',
      _id: 'dsgvo-implementation',
      title: 'DSGVO-Implementierung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dsgvo/dsgvo-implementation'
      },
      parent: {
        _type: 'reference',
        _ref: 'dsgvo'
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
        title: 'DSGVO-Implementierung | ADVISORI',
        description: 'Professionelle DSGVO-Implementierung für nachhaltigen Datenschutz. Wir unterstützen Sie bei der vollständigen Umsetzung der Datenschutz-Grundverordnung in Ihrem Unternehmen.',
        keywords: 'DSGVO Implementierung, Datenschutz-Grundverordnung, GDPR Implementation, Datenschutz Consulting, Privacy Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DSGVO-Implementierung'
        },
        tagline: 'Rechtssichere und nachhaltige DSGVO-Implementierung für Ihr Unternehmen',
        heading: 'DSGVO-Implementierung',
        description: 'Die Datenschutz-Grundverordnung (DSGVO) erfordert eine systematische und nachhaltige Implementierung. Wir begleiten Sie bei der vollständigen Umsetzung aller datenschutzrechtlichen Anforderungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Compliance mit allen DSGVO-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Minimierung von Bußgeldrisiken und rechtlichen Konsequenzen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Aufbau nachhaltiger Datenschutz-Management-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Stärkung des Vertrauens von Kunden und Geschäftspartnern'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DSGVO-Implementierung',
        description: 'Die erfolgreiche Implementierung der Datenschutz-Grundverordnung (DSGVO) ist ein komplexer Prozess, der alle Bereiche Ihres Unternehmens betrifft. Wir unterstützen Sie dabei, ein effektives und nachhaltiges Datenschutz-Management-System aufzubauen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Gap-Analyse zur Identifikation bestehender Datenschutzlücken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung und Implementierung von Datenschutz-Policies und -Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Aufbau und Schulung von Datenschutz-Teams'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Implementierung technischer und organisatorischer Maßnahmen (TOMs)'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Verbesserung der Datenschutz-Compliance'
          }
        ],
        alert: {
          title: 'Wichtiger Hinweis',
          content: 'Die DSGVO-Implementierung ist kein einmaliges Projekt, sondern ein kontinuierlicher Prozess. Eine nachhaltige Datenschutz-Governance ist entscheidend für langfristige Compliance und Risikominimierung.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Langjährige Erfahrung in der DSGVO-Implementierung bei Unternehmen aller Größen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Interdisziplinäres Team aus Juristen, IT-Experten und Compliance-Spezialisten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Methoden und Tools für effiziente Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenspezifische Expertise und maßgeschneiderte Lösungen'
            }
          ]
        },
        additionalInfo: 'Eine professionelle DSGVO-Implementierung reduziert nicht nur das Bußgeldrisiko erheblich, sondern schafft auch Wettbewerbsvorteile durch gestärktes Kundenvertrauen und verbesserte Datenqualität.',
        serviceDescription: 'Unser umfassendes DSGVO-Implementierungsangebot deckt alle Aspekte der Datenschutz-Grundverordnung ab – von der initialen Gap-Analyse bis zur kontinuierlichen Compliance-Überwachung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'DSGVO Gap-Analyse und Compliance Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Datenschutz-Management-System (DSMS) Aufbau'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Privacy by Design Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Mitarbeiterschulung und Change Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Compliance-Überwachung und -Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Implementierungsansatz',
        description: 'Wir verfolgen einen strukturierten und praxisorientierten Ansatz, der Ihre spezifischen Geschäftsanforderungen und regulatorischen Verpflichtungen berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Ist-Analyse und Gap-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten DSGVO-Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Schrittweise Implementierung mit Quick Wins und Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Intensive Schulung und Change Management'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns bei der DSGVO-Implementierung professionell und praxisorientiert begleitet. Dank ihrer strukturierten Herangehensweise haben wir nicht nur Compliance erreicht, sondern auch nachhaltige Datenschutz-Prozesse etabliert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'DSGVO Gap-Analyse',
          description: 'Comprehensive Assessment Ihrer aktuellen Datenschutz-Compliance und Identifikation von Handlungsfeldern.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Vollständige Bestandsaufnahme aller Datenverarbeitungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung bestehender technischer und organisatorischer Maßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risikobewertung und Priorisierung von Maßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Detaillierter Gap-Report mit konkreten Handlungsempfehlungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Datenschutz-Management-System Implementierung',
          description: 'Aufbau eines nachhaltigen und effektiven Datenschutz-Management-Systems nach DSGVO-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung von Datenschutz-Policies und -Verfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung von Datenschutz-Tools und -Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Aufbau von Datenschutz-Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Überwachungs- und Verbesserungsprozesse'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(dsgvoImplementationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DSGVO Implementation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
