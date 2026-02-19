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
    console.log('Creating Datenschutzkoordinator Schulung Grundlagen DSGVO BDSG page...')

    const datenschutzkoordinatorSchulungGrundlagenData = {
      _type: 'servicePage',
      _id: 'datenschutzkoordinator-schulung-grundlagen-dsgvo-bdsg',
      title: 'Datenschutzkoordinator Schulung - Grundlagen DSGVO/BDSG',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/datenschutzkoordinator-schulung/datenschutzkoordinator-schulung-grundlagen-dsgvo-bdsg'
      },
      parent: {
        _type: 'reference',
        _ref: 'datenschutzkoordinator-schulung'
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
        title: 'Datenschutzkoordinator Schulung - Grundlagen DSGVO/BDSG | ADVISORI',
        description: 'Professionelle Schulung für Datenschutzkoordinatoren zu den Grundlagen der DSGVO und BDSG. Fundierte Ausbildung für effektive Datenschutz-Compliance in Ihrem Unternehmen.',
        keywords: 'Datenschutzkoordinator, DSGVO Schulung, BDSG Schulung, Datenschutz Training, Compliance Schulung, Datenschutz Grundlagen, GDPR Training'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Datenschutzkoordinator Schulung - Grundlagen DSGVO/BDSG'
        },
        tagline: 'Professionelle Ausbildung für effektiven Datenschutz',
        heading: 'Datenschutzkoordinator Schulung - Grundlagen DSGVO/BDSG',
        description: 'Erwerben Sie fundiertes Wissen zu den Grundlagen der DSGVO und BDSG. Unsere praxisorientierte Schulung vermittelt Datenschutzkoordinatoren das notwendige Know-how für eine effektive Umsetzung des Datenschutzes in Ihrem Unternehmen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassendes Verständnis der DSGVO- und BDSG-Grundlagen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Praxisnahe Anwendung von Datenschutzprinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effektive Compliance-Strategien und -Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Professionelle Zertifizierung und Kompetenznachweis'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Datenschutzkoordinator Schulung - Grundlagen DSGVO/BDSG',
        description: 'Die Rolle des Datenschutzkoordinators ist zentral für die erfolgreiche Umsetzung der DSGVO und BDSG in Unternehmen. Diese umfassende Grundlagenschulung vermittelt das notwendige rechtliche und praktische Wissen, um Datenschutz-Compliance effektiv zu koordinieren und zu überwachen. Teilnehmer erhalten eine solide Basis für ihre Tätigkeit als Datenschutzkoordinator.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Detaillierte Einführung in die Grundprinzipien und Struktur der DSGVO'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Verständnis der nationalen Besonderheiten des BDSG'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Praktische Anwendung von Rechtsgrundlagen und Datenschutzprinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung und Implementierung von Compliance-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Aufbau effektiver Datenschutz-Management-Systeme'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine fundierte Grundausbildung in DSGVO/BDSG ist essentiell für Datenschutzkoordinatoren, um rechtssichere Entscheidungen treffen zu können und das Unternehmen vor Compliance-Risiken zu schützen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Erfahrene Datenschutzexperten mit langjähriger Praxis in der DSGVO/BDSG-Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxisorientierte Schulungsmethoden mit realen Fallbeispielen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Materialien und Tools für die praktische Anwendung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Betreuung und Updates zu aktuellen Rechtsentwicklungen'
            }
          ]
        },
        additionalInfo: 'Die Schulung zum Datenschutzkoordinator für DSGVO/BDSG-Grundlagen ist darauf ausgerichtet, Teilnehmern nicht nur theoretisches Wissen zu vermitteln, sondern auch praktische Fähigkeiten für die tägliche Arbeit im Datenschutz zu entwickeln.',
        serviceDescription: 'Unsere Grundlagenschulung für Datenschutzkoordinatoren bietet eine strukturierte und umfassende Einführung in die wichtigsten Aspekte der DSGVO und BDSG. Die Schulung kombiniert juristische Theorie mit praktischen Übungen und Fallstudien.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Systematische Einführung in DSGVO- und BDSG-Grundlagen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Praxisorientierte Workshops und Fallstudien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung von Compliance-Strategien und -Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Zertifizierung und Kompetenznachweis'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Nachbetreuung und kontinuierliche Weiterbildung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Schulungsansatz',
        description: 'Wir vermitteln fundiertes Datenschutzwissen durch eine strukturierte Kombination aus theoretischen Grundlagen und praktischen Anwendungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Systematische Vermittlung der DSGVO- und BDSG-Grundlagen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Interaktive Workshops mit praxisnahen Fallbeispielen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung individueller Compliance-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Praktische Übungen zur Anwendung des Gelernten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Abschließende Zertifizierung und kontinuierliche Betreuung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Rainer Markus',
        position: 'Senior Partner',
        quote: 'Eine fundierte Grundausbildung in DSGVO und BDSG ist das Fundament für jeden erfolgreichen Datenschutzkoordinator. Mit unserem praxisorientierten Ansatz schaffen wir die Basis für effektive Datenschutz-Compliance in Ihrem Unternehmen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'DSGVO-Grundlagen für Datenschutzkoordinatoren',
          description: 'Umfassende Einführung in die Struktur, Prinzipien und praktische Anwendung der Datenschutz-Grundverordnung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematische Darstellung der DSGVO-Struktur und Kernprinzipien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Verständnis der Rechtsgrundlagen für Datenverarbeitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Praktische Anwendung der Betroffenenrechte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung von Datenschutz-Folgenabschätzungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'BDSG-Spezifika und nationale Besonderheiten',
          description: 'Detaillierte Schulung zu den deutschen Besonderheiten des Bundesdatenschutzgesetzes und seiner Anwendung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Verständnis der BDSG-Struktur und Öffnungsklauseln'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Anwendung deutscher Datenschutzbesonderheiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration von DSGVO und BDSG in der Praxis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Compliance-Strategien für deutsche Unternehmen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(datenschutzkoordinatorSchulungGrundlagenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Datenschutzkoordinator Schulung Grundlagen DSGVO/BDSG page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
