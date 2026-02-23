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
    console.log('Creating DSGVO Prozesse für Meldung von Datenschutzverletzungen page...')

    const dsgvoDataBreachProcessesData = {
      _type: 'servicePage',
      _id: 'dsgvo-prozesse-fuer-meldung-von-datenschutzverletzungen',
      title: 'DSGVO Prozesse für Meldung von Datenschutzverletzungen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dsgvo/dsgvo-implementation/dsgvo-prozesse-fuer-meldung-von-datenschutzverletzungen'
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
        title: 'DSGVO Prozesse für Meldung von Datenschutzverletzungen | ADVISORI',
        description: 'Effiziente Prozesse für die DSGVO-konforme Meldung von Datenschutzverletzungen. Wir unterstützen Sie bei der Implementierung rechtssicherer Meldeverfahren.',
        keywords: 'DSGVO, Datenschutzverletzung, Meldeprozesse, Data Breach Notification, Aufsichtsbehörde, Betroffenenbenachrichtigung, Art. 33 DSGVO, Art. 34 DSGVO'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DSGVO Meldeprozesse für Datenschutzverletzungen'
        },
        tagline: 'Rechtssichere Meldeverfahren für Datenschutzverletzungen nach DSGVO',
        heading: 'DSGVO Prozesse für Meldung von Datenschutzverletzungen',
        description: 'Strukturierte Prozesse zur fristgerechten und rechtssicheren Meldung von Datenschutzverletzungen an Aufsichtsbehörden und betroffene Personen gemäß Art. 33 und 34 DSGVO.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Fristgerechte Meldung innerhalb von 72 Stunden an Aufsichtsbehörden'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturierte Bewertung der Meldepflicht und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Rechtssichere Betroffenenbenachrichtigung bei hohem Risiko'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Vollständige Dokumentation für Compliance-Nachweis'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DSGVO Meldeprozesse für Datenschutzverletzungen',
        description: 'Die DSGVO verpflichtet Unternehmen zur unverzüglichen Meldung von Datenschutzverletzungen. Wir entwickeln mit Ihnen strukturierte Prozesse, die eine fristgerechte und rechtssichere Abwicklung gewährleisten und Bußgeldrisiken minimieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung strukturierter Meldeprozesse nach Art. 33 und 34 DSGVO'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung von Bewertungskriterien für Meldepflicht'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Erstellung von Meldungsvorlagen und Checklisten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Schulung der Mitarbeiter in Incident Response Verfahren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Prozessoptimierung und Compliance-Monitoring'
          }
        ],
        alert: {
          title: 'Rechtlicher Hinweis',
          content: 'Datenschutzverletzungen müssen binnen 72 Stunden der Aufsichtsbehörde gemeldet werden. Verspätete oder unterlassene Meldungen können zu erheblichen Bußgeldern führen - bis zu 10 Millionen Euro oder 2% des weltweiten Jahresumsatzes.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Fundierte Kenntnisse der DSGVO-Meldepflichten und Aufsichtspraxis'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung in der Implementierung effizienter Incident Response Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Vorlagen und Checklisten für Meldeverfahren'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Enge Zusammenarbeit mit Datenschutzbeauftragten und Rechtsabteilungen'
            }
          ]
        },
        additionalInfo: 'Effiziente Meldeprozesse sind essentiell für DSGVO-Compliance. Gut strukturierte Verfahren reduzieren nicht nur das Bußgeldrisiko, sondern stärken auch das Vertrauen betroffener Personen und Geschäftspartner.',
        serviceDescription: 'Wir unterstützen Sie bei der Entwicklung und Implementierung rechtssicherer Meldeprozesse für Datenschutzverletzungen, die den Anforderungen der DSGVO vollständig entsprechen und praktikabel umsetzbar sind.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Analyse bestehender Incident Response Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung DSGVO-konformer Meldeverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Erstellung von Meldungsvorlagen und Checklisten'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Schulung und Training der verantwortlichen Teams'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Ongoing Support bei kritischen Meldungen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen maßgeschneiderte Meldeprozesse, die sowohl rechtliche Anforderungen erfüllen als auch praktisch umsetzbar sind.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der organisatorischen Strukturen und bestehenden Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Definition von Rollen und Verantwortlichkeiten im Meldeprozess'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung strukturierter Bewertungs- und Entscheidungskriterien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung der Prozesse mit praktischen Hilfsmitteln'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Testing und kontinuierliche Verbesserung der Verfahren'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns dabei geholfen, strukturierte und rechtssichere Meldeprozesse für Datenschutzverletzungen zu etablieren. Die praxisorientierten Lösungen und umfassende Schulung unserer Teams haben uns optimal auf DSGVO-Meldepflichten vorbereitet.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Incident Response Prozessdesign',
          description: 'Entwicklung strukturierter Verfahren zur Identifikation, Bewertung und Meldung von Datenschutzverletzungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Definition von Incident Response Teams und Eskalationswegen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertungskriterien für Meldepflicht nach Art. 33 DSGVO'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Zeitpläne und Fristen für 72-Stunden-Meldung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration in bestehende IT-Security Prozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Betroffenenbenachrichtigung Art. 34 DSGVO',
          description: 'Strukturierte Prozesse für die Benachrichtigung betroffener Personen bei hohem Risiko für deren Rechte und Freiheiten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Risikobewertung für Betroffenenbenachrichtigung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Vorlagen für verständliche Benachrichtigungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Kommunikationskanäle und Timing-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Dokumentation der Benachrichtigungsmaßnahmen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(dsgvoDataBreachProcessesData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DSGVO Prozesse für Meldung von Datenschutzverletzungen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
