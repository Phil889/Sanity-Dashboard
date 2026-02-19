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
    console.log('Creating DSGVO Zusammenarbeit mit Aufsichtsbehörden page...')

    const dsgvoSupervisionData = {
      _type: 'servicePage',
      _id: 'dsgvo-zusammenarbeit-mit-aufsichtsbehoerden',
      title: 'DSGVO Zusammenarbeit mit Aufsichtsbehörden',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dsgvo/dsgvo-ongoing-compliance/dsgvo-zusammenarbeit-mit-aufsichtsbehoerden'
      },
      parent: {
        _type: 'reference',
        _ref: 'dsgvo-ongoing-compliance'
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
        title: 'DSGVO Zusammenarbeit mit Aufsichtsbehörden | ADVISORI',
        description: 'Professionelle Unterstützung bei der Zusammenarbeit mit Datenschutzbehörden. Strategische Beratung für DSGVO-Prüfungen, Behördenanfragen und Compliance-Verfahren.',
        keywords: 'DSGVO Aufsichtsbehörden, Datenschutzbehörde, GDPR Supervision, Behördenanfragen, Datenschutz Prüfung, Compliance Verfahren'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DSGVO Zusammenarbeit mit Aufsichtsbehörden'
        },
        tagline: 'Professionelle Unterstützung bei der Zusammenarbeit mit Datenschutz-Aufsichtsbehörden',
        heading: 'DSGVO Zusammenarbeit mit Aufsichtsbehörden',
        description: 'Navigieren Sie souverän durch Behördenanfragen, Prüfungsverfahren und Compliance-Kontrollen. Wir unterstützen Sie bei der professionellen und strategischen Zusammenarbeit mit Datenschutz-Aufsichtsbehörden.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Professionelle Vorbereitung auf Behördenanfragen und Prüfungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategische Kommunikation mit Aufsichtsbehörden'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Minimierung von Bußgeldrisiken und Sanktionen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Aufbau vertrauensvoller Beziehungen zu Regulierungsbehörden'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DSGVO Zusammenarbeit mit Aufsichtsbehörden',
        description: 'Die konstruktive Zusammenarbeit mit Datenschutz-Aufsichtsbehörden ist entscheidend für nachhaltige DSGVO-Compliance. Wir unterstützen Sie dabei, professionell und strategisch mit Behörden zu interagieren, Prüfungsverfahren erfolgreich zu meistern und vertrauensvolle Beziehungen aufzubauen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Vorbereitung auf Behördenkontakte und Prüfungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Professionelle Kommunikation und Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Compliance-Management für Aufsichtsverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Präventive Maßnahmen zur Vermeidung von Konflikten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Aufbau langfristiger Compliance-Beziehungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Proaktive und transparente Zusammenarbeit mit Aufsichtsbehörden ist nicht nur regulatory smart, sondern kann auch zu reduzierten Sanktionen und verbesserten Compliance-Bewertungen führen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung in Behördenverfahren und Aufsichtspraxis'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Strategische Herangehensweise an Compliance-Kommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methoden für erfolgreiche Behördeninteraktion'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung und partnerschaftliche Unterstützung'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit proaktiver Behördenzusammenarbeit erhalten bei DSGVO-Verstößen durchschnittlich 40-60% geringere Bußgelder und profitieren von beschleunigten Compliance-Verfahren.',
        serviceDescription: 'Wir bieten Ihnen umfassende Unterstützung bei der Zusammenarbeit mit Datenschutz-Aufsichtsbehörden, von der strategischen Vorbereitung bis zur langfristigen Beziehungspflege.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Vorbereitung auf Behördenkontakte'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Professionelle Kommunikation und Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Begleitung bei Prüfungsverfahren und Inspektionen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Compliance-Optimierung basierend auf Behördenfeedback'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Aufbau nachhaltiger Compliance-Beziehungen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine strategische Herangehensweise für die professionelle und erfolgreiche Zusammenarbeit mit Datenschutz-Aufsichtsbehörden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse Ihrer aktuellen Compliance-Situation und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung individueller Kommunikationsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Vorbereitung auf spezifische Behördenanfragen und Prüfungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Begleitung und Unterstützung während Aufsichtsverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung der Behördenbeziehungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Unterstützung von ADVISORI bei der Zusammenarbeit mit Aufsichtsbehörden war entscheidend für unser erfolgreiches Compliance-Management. Durch die professionelle Vorbereitung und strategische Kommunikation konnten wir nicht nur Konflikte vermeiden, sondern auch vertrauensvolle Beziehungen zu den Regulierungsbehörden aufbauen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Behördenvorbereitung',
          description: 'Wir bereiten Sie strategisch und umfassend auf alle Formen der Behördeninteraktion vor.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung behördenspezifischer Kommunikationsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Vorbereitung auf Inspektionen und Prüfungsverfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Erstellung professioneller Dokumentationen und Nachweise'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Schulung der Mitarbeiter für Behördenkontakte'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Compliance-Verfahrensbegleitung',
          description: 'Wir begleiten Sie professionell durch alle Arten von Aufsichtsverfahren und Compliance-Kontrollen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Direkte Unterstützung bei Behördenanfragen und -gesprächen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Strategische Verfahrensführung und Risikominimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Nachbereitung und Implementierung von Behördenempfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Aufbau langfristiger Compliance-Beziehungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(dsgvoSupervisionData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DSGVO Zusammenarbeit mit Aufsichtsbehörden page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
