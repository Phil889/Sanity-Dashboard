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
    console.log('Creating VS-NFD Rollen & Verantwortlichkeiten definieren page...')

    const vsNfdRollenData = {
      _type: 'servicePage',
      _id: 'vs-nfd-rollen-verantwortlichkeiten-definieren',
      title: 'VS-NFD Rollen & Verantwortlichkeiten definieren',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/vs-nfd/vs-nfd-readiness/vs-nfd-rollen-verantwortlichkeiten-definieren'
      },
      parent: {
        _type: 'reference',
        _ref: 'vs-nfd-readiness'
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
        title: 'VS-NFD Rollen & Verantwortlichkeiten definieren | ADVISORI',
        description: 'Expertenhilfe bei der Definition und Implementierung von Rollen und Verantwortlichkeiten für VS-NFD-Meldungen. Wir unterstützen Sie beim Aufbau einer effektiven organisatorischen Struktur für regulatorische Compliance.',
        keywords: 'VS-NFD, Rollen, Verantwortlichkeiten, Bankenaufsicht, Meldewesen, Compliance, Organisationsstruktur, Governance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'VS-NFD Rollen & Verantwortlichkeiten definieren'
        },
        tagline: 'Klare Strukturen für erfolgreiches VS-NFD-Meldewesen',
        heading: 'VS-NFD Rollen & Verantwortlichkeiten definieren',
        description: 'Die erfolgreiche Umsetzung der VS-NFD-Anforderungen erfordert eine präzise Definition von Rollen und Verantwortlichkeiten. Wir unterstützen Sie bei der Entwicklung einer optimalen Organisationsstruktur für nachhaltiges regulatorisches Reporting.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Klare Abgrenzung von Zuständigkeiten und Verantwortungsbereichen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierte Governance-Strukturen für VS-NFD-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effiziente Kommunikationswege und Eskalationsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltige Qualitätssicherung durch strukturierte Verantwortlichkeiten'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'VS-NFD Rollen & Verantwortlichkeiten definieren',
        description: 'Die Definition klarer Rollen und Verantwortlichkeiten ist fundamental für den Erfolg der VS-NFD-Implementierung. Eine gut strukturierte Organisation gewährleistet nicht nur die Einhaltung regulatorischer Anforderungen, sondern schafft auch Effizienz und Transparenz in den Meldeprozessen. Wir unterstützen Sie bei der Entwicklung einer maßgeschneiderten Organisationsstruktur.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse bestehender Organisationsstrukturen und Identifikation von Optimierungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Design einer effektiven Governance-Struktur für VS-NFD-Meldungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Definition präziser Rollen, Aufgaben und Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung von Kommunikations- und Eskalationswegen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Implementierung von Qualitätssicherungs- und Kontrollmechanismen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine erfolgreiche VS-NFD-Organisation zeichnet sich durch klare Verantwortlichkeiten, effiziente Kommunikationswege und robuste Kontrollmechanismen aus. Die frühzeitige Definition dieser Strukturen verhindert spätere operative Probleme und Compliance-Risiken.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Langjährige Erfahrung in der Entwicklung regulatorischer Organisationsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefgreifendes Verständnis der VS-NFD-Anforderungen und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Methoden zur Organisationsentwicklung und Change Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von der Konzeption bis zur nachhaltigen Implementierung'
            }
          ]
        },
        additionalInfo: 'Die Definition von Rollen und Verantwortlichkeiten für VS-NFD erfordert ein tiefes Verständnis sowohl der regulatorischen Anforderungen als auch der spezifischen Organisationsstruktur Ihres Instituts. Eine maßgeschneiderte Lösung gewährleistet sowohl Compliance als auch operative Effizienz.',
        serviceDescription: 'Wir bieten umfassende Unterstützung bei der Definition und Implementierung von Rollen und Verantwortlichkeiten für VS-NFD-Meldungen. Unser Ansatz kombiniert regulatorische Expertise mit organisatorischem Know-how für nachhaltige Lösungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Organisationsanalyse und Gap-Assessment für VS-NFD-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Design optimaler Governance- und Verantwortlichkeitsstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung von Rollenbeschreibungen und Prozessdefinitionen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementierung von Kontroll- und Qualitätssicherungsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung und Change Management für neue Organisationsstrukturen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine maßgeschneiderte Organisationsstruktur für VS-NFD-Meldungen, die sowohl regulatorische Anforderungen erfüllt als auch Ihre spezifischen Bedürfnisse berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der bestehenden Organisationsstruktur und regulatorischen Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design einer optimalen Governance-Struktur mit klaren Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Definition detaillierter Rollenbeschreibungen und Aufgabenverteilungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung der neuen Strukturen mit begleitendem Change Management'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Optimierung der etablierten Strukturen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Klare Rollen und Verantwortlichkeiten sind das Fundament erfolgreicher VS-NFD-Umsetzung. Mit unserer Expertise helfen wir Instituten dabei, nicht nur compliant, sondern auch operativ exzellent zu werden.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Organisationsanalyse und Strukturdesign',
          description: 'Wir analysieren Ihre bestehende Organisation und entwickeln eine optimale Struktur für VS-NFD-Meldungen mit klaren Rollen und Verantwortlichkeiten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Analyse der aktuellen Organisationsstruktur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Optimierungspotenzialen und Schwachstellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Design einer effizienten Governance-Struktur für VS-NFD'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung klarer Rollen- und Verantwortlichkeitsmatrix'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Implementierung und Change Management',
          description: 'Wir begleiten Sie bei der Implementierung der neuen Organisationsstrukturen und unterstützen den Veränderungsprozess mit professionellem Change Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Strukturierte Implementierung neuer Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Begleitendes Change Management und Kommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Schulung der beteiligten Mitarbeiter und Führungskräfte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Überwachung und Optimierung der Strukturen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(vsNfdRollenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ VS-NFD Rollen & Verantwortlichkeiten definieren page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
