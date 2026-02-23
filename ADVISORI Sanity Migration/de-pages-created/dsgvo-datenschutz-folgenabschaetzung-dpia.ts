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
    console.log('Creating DSGVO Datenschutz-Folgenabschätzung (DPIA) page...')

    const dsgvoDpiaData = {
      _type: 'servicePage',
      _id: 'dsgvo-datenschutz-folgenabschaetzung-dpia',
      title: 'DSGVO Datenschutz-Folgenabschätzung (DPIA)',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dsgvo/dsgvo-implementation/dsgvo-datenschutz-folgenabschaetzung-dpia'
      },
      parent: {
        _type: 'reference',
        _ref: 'dsgvo-implementation'
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
        title: 'DSGVO Datenschutz-Folgenabschätzung (DPIA) | ADVISORI',
        description: 'Professionelle Durchführung von Datenschutz-Folgenabschätzungen nach DSGVO. Wir unterstützen Sie bei der systematischen Risikoanalyse und Compliance-Sicherstellung für Ihre Datenverarbeitungen.',
        keywords: 'DPIA, Datenschutz-Folgenabschätzung, DSGVO Risikoanalyse, Privacy Impact Assessment, Datenschutz Consulting, GDPR Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DSGVO Datenschutz-Folgenabschätzung (DPIA)'
        },
        tagline: 'Systematische Datenschutz-Folgenabschätzung für rechtssichere Datenverarbeitung',
        heading: 'DSGVO Datenschutz-Folgenabschätzung (DPIA)',
        description: 'Die Datenschutz-Folgenabschätzung (DPIA) ist ein zentrales Instrument der DSGVO zur proaktiven Risikobewertung. Wir unterstützen Sie bei der professionellen Durchführung und Dokumentation Ihrer DPIAs.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Identifikation und Bewertung von Datenschutzrisiken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Rechtssichere DPIA-Durchführung nach DSGVO-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effektive Risikominimierung durch gezielte Schutzmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Dokumentation für Aufsichtsbehörden und Compliance-Nachweise'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DSGVO Datenschutz-Folgenabschätzung (DPIA)',
        description: 'Die Datenschutz-Folgenabschätzung (DPIA) ist bei Datenverarbeitungen mit hohem Risiko für betroffene Personen verpflichtend. Wir führen systematische und rechtskonforme DPIAs durch, die nicht nur regulatorische Anforderungen erfüllen, sondern auch praktischen Mehrwert für Ihr Datenschutz-Management schaffen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Prüfung der DPIA-Pflichtigkeit nach DSGVO Art. 35'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Systematische Risikoanalyse und -bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung gezielter Risikominimierungsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Rechtssichere Dokumentation und Berichterstattung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Aktualisierung der DPIA'
          }
        ],
        alert: {
          title: 'Wichtiger Hinweis',
          content: 'Bei Datenverarbeitungen mit hohem Risiko ist die DPIA vor Beginn der Verarbeitung durchzuführen. Bei unzureichender Risikominimierung muss die Aufsichtsbehörde konsultiert werden.'
        },
        whyUs: {
          title: 'Unsere DPIA-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung in der Durchführung von DPIAs verschiedener Komplexitätsstufen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Interdisziplinäres Team aus Datenschutzjuristen und IT-Sicherheitsexperten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte DPIA-Methoden und standardisierte Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenspezifische Expertise und regulatorische Fachkompetenz'
            }
          ]
        },
        additionalInfo: 'Eine professionell durchgeführte DPIA schützt nicht nur vor rechtlichen Konsequenzen, sondern verbessert auch die Datenqualität und das Vertrauen der betroffenen Personen in Ihr Unternehmen.',
        serviceDescription: 'Unser umfassendes DPIA-Angebot deckt alle Aspekte der Datenschutz-Folgenabschätzung ab – von der initialen Risikoanalyse bis zur kontinuierlichen Überwachung und Aktualisierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'DPIA-Pflichtprüfung und Schwellenwertanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Systematische Datenschutz-Risikoanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung von Risikominimierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'DPIA-Dokumentation und Compliance-Nachweise'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche DPIA-Überwachung und -Aktualisierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser DPIA-Ansatz',
        description: 'Wir verfolgen einen strukturierten und systematischen Ansatz zur Datenschutz-Folgenabschätzung, der sowohl rechtliche Anforderungen erfüllt als auch praktischen Mehrwert für Ihr Datenschutz-Management schafft.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse der Datenverarbeitungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematische Risikobewertung nach etablierten Standards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung maßgeschniderter Schutzmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Rechtssichere Dokumentation und Berichterstattung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Implementierung kontinuierlicher Überwachungsprozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat unsere DPIA-Prozesse professionalisiert und systematisiert. Dank ihrer methodischen Herangehensweise haben wir nicht nur Compliance erreicht, sondern auch wertvolle Einblicke in unsere Datenschutzrisiken gewonnen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'DPIA-Pflichtprüfung und Risikoanalyse',
          description: 'Systematische Bewertung der DPIA-Pflichtigkeit und umfassende Analyse der Datenschutzrisiken Ihrer Verarbeitungstätigkeiten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Prüfung der DPIA-Schwellenwerte nach DSGVO Art. 35'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Detaillierte Analyse der Verarbeitungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Bewertung von Datenschutzrisiken und deren Auswirkungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Identifikation kritischer Datenschutz-Aspekte'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'DPIA-Durchführung und Dokumentation',
          description: 'Professionelle Durchführung der Datenschutz-Folgenabschätzung mit rechtssicherer Dokumentation und Compliance-Nachweisen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Systematische DPIA-Durchführung nach DSGVO-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung gezielter Risikominimierungsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Umfassende DPIA-Dokumentation für Aufsichtsbehörden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Überwachung und Aktualisierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(dsgvoDpiaData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DSGVO Datenschutz-Folgenabschätzung (DPIA) page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
