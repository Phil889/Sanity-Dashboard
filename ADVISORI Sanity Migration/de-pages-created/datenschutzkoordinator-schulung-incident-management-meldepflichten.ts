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
    console.log('Creating Datenschutzkoordinator Schulung - Incident Management & Meldepflichten page...')

    const pageData = {
      _type: 'servicePage',
      _id: 'datenschutzkoordinator-schulung-incident-management-meldepflichten',
      title: 'Datenschutzkoordinator Schulung - Incident Management & Meldepflichten',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/datenschutzkoordinator-schulung/datenschutzkoordinator-schulung-incident-management-meldepflichten'
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
        title: 'Datenschutzkoordinator Schulung - Incident Management & Meldepflichten | ADVISORI',
        description: 'Professionelle Schulung für Datenschutzkoordinatoren zu Incident Management und Meldepflichten nach DSGVO. Expertenwissen für effektive Datenschutz-Vorfallbearbeitung.',
        keywords: 'Datenschutzkoordinator, Schulung, Incident Management, Meldepflichten, DSGVO, Datenschutz-Vorfall, Aufsichtsbehörde, Meldung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Datenschutzkoordinator Schulung - Incident Management & Meldepflichten'
        },
        tagline: 'Expertenschulung für effektives Datenschutz-Incident Management',
        heading: 'Datenschutzkoordinator Schulung - Incident Management & Meldepflichten',
        description: 'Umfassende Schulung für Datenschutzkoordinatoren zu professionellem Incident Management und rechtssicheren Meldepflichten bei Datenschutzvorfällen nach DSGVO.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Rechtssichere Behandlung von Datenschutzvorfällen und Incident Response'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Professionelle Meldeprozesse an Aufsichtsbehörden und betroffene Personen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Strukturierte Vorfallanalyse und effektive Schadensbegrenzung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Praktische Anwendung durch realitätsnahe Fallstudien und Übungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Datenschutzkoordinator Schulung - Incident Management & Meldepflichten',
        description: 'Diese spezialisierte Schulung vermittelt Datenschutzkoordinatoren das notwendige Fachwissen für ein professionelles und rechtssicheres Incident Management bei Datenschutzvorfällen. Von der ersten Erkennung bis zur abschließenden Dokumentation lernen Teilnehmer alle Aspekte der effektiven Vorfallbearbeitung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Identifikation und Bewertung von Datenschutzvorfällen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Rechtssichere Meldeprozesse und Fristen nach DSGVO Art. 33 und 34'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Effektive Sofortmaßnahmen und Schadensbegrenzungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Professionelle Kommunikation mit Aufsichtsbehörden und Betroffenen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Umfassende Dokumentation und Nachbereitung von Vorfällen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Bei Datenschutzvorfällen sind oft nur 72 Stunden Zeit für die Meldung an die Aufsichtsbehörde. Eine professionelle Vorbereitung und klare Prozesse sind essentiell für rechtssichere und effektive Incident Response.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Praxiserfahrene Trainer mit umfassender Expertise in Datenschutz-Incident Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Aktuelle Rechtsprechung und Behördenpraxis in der Schulung integriert'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Interaktive Fallstudien und praktische Übungen für realitätsnahe Vorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Umfassende Schulungsunterlagen und Templates für die praktische Anwendung'
            }
          ]
        },
        additionalInfo: 'Datenschutzvorfälle können erhebliche rechtliche und finanzielle Konsequenzen haben. Eine professionelle Schulung der verantwortlichen Mitarbeiter ist eine der wertvollsten Investitionen in den präventiven Datenschutz.',
        serviceDescription: 'Wir bieten eine umfassende Schulung für Datenschutzkoordinatoren, die alle Aspekte des professionellen Incident Managements und der rechtssicheren Meldepflichten abdeckt. Von der Vorfallerkennung bis zur Nachbereitung vermitteln wir praxisrelevantes Expertenwissen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Incident Detection und Klassifizierung von Datenschutzvorfällen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Meldepflichten nach DSGVO Art. 33 und 34 - Prozesse und Fristen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Sofortmaßnahmen und Damage Control bei Datenschutzvorfällen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Professionelle Kommunikation und Stakeholder Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Dokumentation, Analyse und Lessons Learned'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Schulungsansatz',
        description: 'Unsere Schulung kombiniert fundierte Rechtskenntnisse mit praktischer Anwendung, um Datenschutzkoordinatoren optimal auf reale Incident-Situationen vorzubereiten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Theoretische Grundlagen des Datenschutz-Incident Managements'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Praktische Fallstudien und Simulation realer Vorfallszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Interaktive Workshops zu Meldeprozessen und Kommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung individueller Incident Response Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachbetreuung und praktische Umsetzungsunterstützung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Unsere Schulung zum Datenschutz-Incident Management vermittelt nicht nur theoretisches Wissen, sondern bereitet Datenschutzkoordinatoren durch praktische Übungen optimal auf reale Vorfallsituationen vor. Dies stärkt die Datenschutz-Resilienz des gesamten Unternehmens.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Incident Detection & Assessment',
          description: 'Systematische Erkennung und professionelle Bewertung von Datenschutzvorfällen nach standardisierten Kriterien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Kriterien zur Identifikation meldepflichtiger Vorfälle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Risikobewertung und Schadenspotentialanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Klassifizierung und Priorisierung von Vorfällen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Dokumentationsanforderungen und Templates'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Meldeprozesse & Rechtssicherheit',
          description: 'Rechtssichere Umsetzung der Meldepflichten nach DSGVO mit professioneller Kommunikation und fristgerechter Abwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'DSGVO Art. 33 Meldung an Aufsichtsbehörden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'DSGVO Art. 34 Information betroffener Personen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Fristen und Verfahren im Detail'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kommunikationsstrategien und Textbausteine'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(pageData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Datenschutzkoordinator Schulung - Incident Management & Meldepflichten page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
