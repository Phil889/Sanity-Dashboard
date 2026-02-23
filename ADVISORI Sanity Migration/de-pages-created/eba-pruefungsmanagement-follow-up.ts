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
    console.log('Creating EBA Prüfungsmanagement Follow-up page...')

    const ebaData = {
      _type: 'servicePage',
      _id: 'eba-pruefungsmanagement-follow-up',
      title: 'EBA Prüfungsmanagement & Follow-up',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eba/eba-srep-readiness/eba-pruefungsmanagement-follow-up'
      },
      parent: {
        _type: 'reference',
        _ref: 'eba-srep-readiness'
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
        title: 'EBA Prüfungsmanagement & Follow-up | ADVISORI',
        description: 'Effektives Management von EBA-Prüfungsprozessen und nachhaltige Umsetzung von Prüfungsergebnissen. Optimieren Sie Ihre Prüfungsvorbereitung und -nachbereitung mit unserer fachkundigen Unterstützung.',
        keywords: 'EBA, Prüfungsmanagement, Prüfungsnachbereitung, SREP, Aufsichtsbehörden, Bankregulierung, Compliance, Follow-up'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EBA Prüfungsmanagement & Follow-up'
        },
        tagline: 'Effizientes Management von EBA-Prüfungen und nachhaltige Maßnahmenumsetzung',
        heading: 'EBA Prüfungsmanagement & Follow-up',
        description: 'Wir unterstützen Sie bei der strukturierten Vorbereitung, Durchführung und Nachbereitung von EBA-Prüfungen sowie bei der nachhaltigen Implementierung von Maßnahmen zur Behebung identifizierter Schwachstellen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierte Koordination und Steuerung des gesamten Prüfungsprozesses'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Effiziente Aufarbeitung und Priorisierung von Prüfungsfeststellungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Nachhaltige Umsetzung und Dokumentation von Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Minimierung von Folgerisiken durch präventive Kontrollmechanismen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EBA Prüfungsmanagement & Follow-up',
        description: 'EBA-Prüfungen stellen Finanzinstitute vor große organisatorische und fachliche Herausforderungen. Ein effektives Prüfungsmanagement und ein strukturierter Follow-up-Prozess sind entscheidend, um Prüfungen erfolgreich zu bestehen und aufsichtsrechtliche Anforderungen nachhaltig zu erfüllen. Wir bieten umfassende Unterstützung bei der Vorbereitung, Begleitung und Nachbereitung von EBA-Prüfungen sowie bei der effektiven Umsetzung von Maßnahmen zur Behebung identifizierter Schwachstellen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Koordination und Steuerung des gesamten Prüfungsprozesses'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Strukturierte Aufbereitung und Analyse von Prüfungsfeststellungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung und Implementierung von Maßnahmenplänen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Nachverfolgung und Statusberichterstattung zur Maßnahmenumsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Qualitätssicherung und Wirksamkeitsprüfung implementierter Maßnahmen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Ein proaktives Prüfungsmanagement beginnt nicht erst mit der Ankündigung einer Prüfung, sondern mit der kontinuierlichen Überwachung und Verbesserung Ihrer Prozesse und Kontrollen im Vorfeld. So können Sie potenzielle Schwachstellen frühzeitig identifizieren und beheben, bevor sie zu Prüfungsfeststellungen werden.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung in der Begleitung von EBA-Prüfungen in verschiedenen Finanzinstituten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefgreifendes Verständnis der aufsichtsrechtlichen Erwartungen und Prüfungspraktiken'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Erprobte Methoden und Tools für ein effizientes Prüfungs- und Maßnahmenmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz, der technische, organisatorische und regulatorische Aspekte integriert'
            }
          ]
        },
        additionalInfo: 'Die erfolgreiche Bewältigung von EBA-Prüfungen erfordert eine ganzheitliche Herangehensweise, die weit über die reine Bereitstellung von Dokumenten hinausgeht. Ein strukturiertes Prüfungsmanagement und ein konsequenter Follow-up-Prozess sind entscheidend, um Prüfungsfeststellungen effektiv zu adressieren und das Vertrauen der Aufsichtsbehörden zu gewinnen.',
        serviceDescription: 'Wir bieten ein umfassendes Leistungsspektrum für das Management von EBA-Prüfungen und die nachhaltige Umsetzung von Prüfungsergebnissen. Unser Ansatz umfasst sowohl die organisatorische als auch die inhaltliche Unterstützung während des gesamten Prüfungszyklus.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Aufbau und Betrieb eines effektiven Prüfungsbüros'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Vorbereitung und Koordination von Prüferinterviews und Dokumentenanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Analyse und Priorisierung von Prüfungsfeststellungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Entwicklung und Implementierung maßgeschneiderter Maßnahmenpläne'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliches Monitoring und Reporting zum Umsetzungsfortschritt'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir unterstützen Sie mit einem strukturierten und bewährten Ansatz bei der effizienten Steuerung von EBA-Prüfungen und der nachhaltigen Umsetzung von Prüfungsergebnissen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der Prüfungshistorie und Identifikation von Schlüsselthemen und Risikobereichen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Aufbau eines effektiven Prüfungsmanagements mit klaren Verantwortlichkeiten und Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Strukturierte Aufarbeitung und Bewertung von Prüfungsfeststellungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung maßgeschneiderter Maßnahmenpläne mit klaren Verantwortlichkeiten und Zeitplänen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Implementierung eines transparenten Monitoring- und Reporting-Systems zur Maßnahmenverfolgung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Ein effektives Prüfungsmanagement und Follow-up ist nicht nur für die erfolgreiche Bewältigung aktueller Prüfungen entscheidend, sondern bildet auch die Grundlage für eine nachhaltige Verbesserung der regulatorischen Compliance. Unsere Kunden profitieren von unserer langjährigen Erfahrung und unserem strukturierten Ansatz, der sowohl die Prüfungsprozesse optimiert als auch die nachhaltige Umsetzung von Maßnahmen sicherstellt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Prüfungsmanagement und -koordination',
          description: 'Wir unterstützen Sie bei der effizienten Organisation und Koordination des gesamten Prüfungsprozesses, von der Vorbereitung bis zum Abschluss der Prüfung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Aufbau und Betrieb eines zentralen Prüfungsbüros als Schnittstelle zu den Prüfern'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Koordination und Qualitätssicherung von Dokumentenanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Vorbereitung und Begleitung von Prüferinterviews'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung einer effektiven Kommunikationsstrategie für den Prüfungsverlauf'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Follow-up und Maßnahmenmanagement',
          description: 'Wir unterstützen Sie bei der strukturierten Aufarbeitung von Prüfungsfeststellungen und der nachhaltigen Implementierung von Maßnahmen zur Behebung identifizierter Schwachstellen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Analyse und Priorisierung von Prüfungsfeststellungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung maßgeschneiderter Maßnahmenpläne mit klaren Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementierung eines transparenten Tracking- und Reporting-Systems'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Qualitätssicherung und Wirksamkeitsprüfung implementierter Maßnahmen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(ebaData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EBA Prüfungsmanagement & Follow-up page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
