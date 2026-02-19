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
    console.log('Creating DSGVO Rollen & Verantwortlichkeiten DPO Koordinator page...')

    const dsgvoRollenData = {
      _type: 'servicePage',
      _id: 'dsgvo-rollen-verantwortlichkeiten-dpo-koordinator',
      title: 'DSGVO Rollen & Verantwortlichkeiten DPO Koordinator',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dsgvo/dsgvo-readiness/dsgvo-rollen-verantwortlichkeiten-dpo-koordinator'
      },
      parent: {
        _type: 'reference',
        _ref: 'dsgvo-readiness'
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
        title: 'DSGVO Rollen & Verantwortlichkeiten DPO Koordinator | ADVISORI',
        description: 'Professionelle Beratung zu DSGVO-Rollen, Verantwortlichkeiten und DPO-Koordination. Optimieren Sie Ihre Datenschutzorganisation und Compliance-Strukturen.',
        keywords: 'DSGVO Rollen, DPO Koordinator, Datenschutzbeauftragte, DSGVO Verantwortlichkeiten, Datenschutzorganisation, Compliance Strukturen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DSGVO Rollen & Verantwortlichkeiten DPO Koordinator'
        },
        tagline: 'Strukturierte Datenschutzorganisation und klare Rollenverteilung nach DSGVO',
        heading: 'DSGVO Rollen & Verantwortlichkeiten DPO Koordinator',
        description: 'Etablieren Sie eine effektive Datenschutzorganisation mit klaren Rollen, Verantwortlichkeiten und professioneller DPO-Koordination für optimale DSGVO-Compliance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Klare Definition von DSGVO-Rollen und Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Professionelle DPO-Koordination und -Betreuung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Optimierte Datenschutzorganisation und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Compliance-Überwachung und Reporting'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DSGVO Rollen & Verantwortlichkeiten DPO Koordinator',
        description: 'Eine effektive DSGVO-Compliance erfordert klare Organisationsstrukturen, definierte Rollen und professionelle Koordination. Wir unterstützen Sie bei der Etablierung einer strukturierten Datenschutzorganisation mit optimal definierten Verantwortlichkeiten und professioneller DPO-Koordination.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Definition und Strukturierung von DSGVO-Rollen und Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Professionelle DPO-Koordination und Betreuung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Etablierung von Datenschutz-Governance und Compliance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung von Kommunikations- und Eskalationsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Optimierung der Datenschutzorganisation'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine klar strukturierte Datenschutzorganisation mit definierten Rollen und professioneller DPO-Koordination ist der Schlüssel für nachhaltige DSGVO-Compliance und effektives Datenschutzmanagement.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Langjährige Expertise in DSGVO-Compliance und Datenschutzorganisation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrene DPO-Koordinatoren und Datenschutzexperten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Ansätze für effektive Datenschutz-Governance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenspezifische Lösungen und maßgeschneiderte Beratung'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit professionell strukturierten Datenschutzorganisationen reduzieren das Risiko von DSGVO-Verstößen um bis zu 75% und optimieren ihre Compliance-Effizienz erheblich.',
        serviceDescription: 'Wir bieten Ihnen umfassende Beratung und Unterstützung bei der Strukturierung Ihrer Datenschutzorganisation, der Definition von Rollen und Verantwortlichkeiten sowie der professionellen DPO-Koordination für optimale DSGVO-Compliance.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'DSGVO-Rollenanalyse und Verantwortlichkeitsdefinition'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'DPO-Koordination und professionelle Betreuung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Datenschutz-Governance und Organisationsstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Compliance-Überwachung und Reporting-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung und Qualifizierung von Datenschutzverantwortlichen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine strukturierte Datenschutzorganisation mit klaren Rollen, Verantwortlichkeiten und professioneller DPO-Koordination.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der bestehenden Datenschutzorganisation und Rollenstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Definition und Strukturierung von DSGVO-Rollen und Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Etablierung professioneller DPO-Koordination und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung von Compliance-Überwachung und Reporting-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung der Datenschutzorganisation'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir eine professionell strukturierte Datenschutzorganisation etabliert, die uns optimale DSGVO-Compliance und effektive DPO-Koordination ermöglicht. Die klaren Rollen und Verantwortlichkeiten haben unsere Compliance-Effizienz erheblich verbessert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'DSGVO-Rollenanalyse und Verantwortlichkeitsdefinition',
          description: 'Systematische Analyse und Definition von DSGVO-Rollen und Verantwortlichkeiten in Ihrer Organisation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Analyse bestehender Organisationsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Definition von DSGVO-spezifischen Rollen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung von Rollenbeschreibungen und Zuständigkeitsmatrizen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration in bestehende HR- und Governance-Prozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'DPO-Koordination und professionelle Betreuung',
          description: 'Professionelle Koordination und Betreuung Ihrer Datenschutzbeauftragten für optimale DSGVO-Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Externe DPO-Services und Koordination'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Fachliche Betreuung und Unterstützung interner DPOs'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Koordination zwischen verschiedenen Standorten und Bereichen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Weiterbildung und Qualifizierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(dsgvoRollenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DSGVO Rollen & Verantwortlichkeiten DPO Koordinator page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
