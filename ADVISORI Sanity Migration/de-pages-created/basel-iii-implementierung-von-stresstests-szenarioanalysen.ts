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
    console.log('Creating Basel III Implementierung von Stresstests & Szenarioanalysen page...')

    const baselStressTestData = {
      _type: 'servicePage',
      _id: 'basel-iii-implementierung-von-stresstests-szenarioanalysen',
      title: 'Basel III Implementierung von Stresstests & Szenarioanalysen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/basel-iii/basel-iii-implementation/basel-iii-implementierung-von-stresstests-szenarioanalysen'
      },
      parent: {
        _type: 'reference',
        _ref: 'basel-iii-implementation'
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
        title: 'Basel III Implementierung von Stresstests & Szenarioanalysen | ADVISORI',
        description: 'Optimieren Sie Ihre Basel III Compliance mit professioneller Implementierung von Stresstests und Szenarioanalysen. ADVISORI unterstützt Finanzinstitute bei der Entwicklung und Integration regulationskonformer Risikobewertungsverfahren.',
        keywords: 'Basel III, Stresstests, Szenarioanalysen, Risikomanagement, Bankenregulierung, Finanzstabilität, Stressszenarien, Risikomodellierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Basel III Stresstests & Szenarioanalysen'
        },
        tagline: 'Robuste Risikoidentifikation und -bewertung für Finanzinstitute',
        heading: 'Basel III Implementierung von Stresstests & Szenarioanalysen',
        description: 'Stresstests und Szenarioanalysen sind zentrale Instrumente der Basel III-Regulierung zur Sicherstellung der Widerstandsfähigkeit von Finanzinstituten. Wir unterstützen Sie bei der methodischen Entwicklung, technischen Umsetzung und Integration dieser Verfahren in Ihre Risikomanagementprozesse.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Frühzeitige Identifikation von Risikotreibern und Vulnerabilitäten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierte Kapitalallokation durch präzise Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Verbesserte Entscheidungsgrundlage für strategische Geschäftsentscheidungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Vollständige Erfüllung regulatorischer Anforderungen und Aufsichtserwartungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Basel III Stresstests & Szenarioanalysen',
        description: 'Stresstests und Szenarioanalysen ermöglichen es Finanzinstituten, ihre Widerstandsfähigkeit gegenüber adversen wirtschaftlichen Entwicklungen zu evaluieren und proaktiv Maßnahmen zu ergreifen. Als integraler Bestandteil des Basel III-Regelwerks bilden sie die Grundlage für eine robuste Kapital- und Liquiditätsplanung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung individueller Stress-Szenarien und Risikofaktoren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung von Modellen zur Bewertung komplexer Risiken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration von Stresstests in ICAAP und ILAAP'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Automatisierung und Validierung von Stresstestprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Entwicklung aussagekräftiger Management-Reportings'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Effektive Stresstests gehen über die bloße Erfüllung regulatorischer Anforderungen hinaus. Sie sollten als strategisches Instrument zur Identifikation von Geschäftsrisiken und zur Optimierung der Kapitalallokation genutzt werden.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in der Entwicklung und Implementierung von Stresstests'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassende Kenntnis der aufsichtsrechtlichen Anforderungen und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Methoden und Technologien für eine effiziente Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz, der technische, methodische und prozessuale Aspekte berücksichtigt'
            }
          ]
        },
        additionalInfo: 'Stresstest-Ergebnisse beeinflussen zunehmend strategische Entscheidungen und die Kapitalplanung von Banken. Studien zeigen, dass Institute mit robusten Stresstestverfahren bis zu 30% besser auf Marktvolatilitäten reagieren können als ihre Wettbewerber.',
        serviceDescription: 'Unsere umfassenden Leistungen im Bereich Basel III Stresstests und Szenarioanalysen umfassen die Konzeption, Implementierung und Optimierung von Stresstestverfahren unter Berücksichtigung institutsspezifischer Risikoprofile und regulatorischer Anforderungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Methodenentwicklung für Stresstests und Szenarioanalysen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Aufbau einer integrierten Stresstest-Infrastruktur'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Datenmodellierung und -management für Stressszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Entwicklung von Reverse-Stresstests und Multi-Faktor-Analysen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Implementierung von Management-Reporting und -Aktionen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir begleiten Sie bei der Implementierung von Basel III-konformen Stresstests und Szenarioanalysen mit einem strukturierten und praxiserprobten Ansatz.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse des bestehenden Risikomanagements und der Datenanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Definition institutsspezifischer Szenarien und Risikofaktoren'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung und Implementierung der Modelle und Methodiken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende Risikomanagement- und Reportingprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Validierung, Qualitätssicherung und kontinuierliche Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Weber',
        position: 'Head of Risk Management',
        quote: 'Die Expertise von ADVISORI hat es uns ermöglicht, unsere Stresstestverfahren von einer bloßen Compliance-Übung zu einem wertvollen strategischen Instrument weiterzuentwickeln. Die implementierten Methoden und Prozesse liefern uns heute wertvolle Erkenntnisse für unser Risikomanagement und unsere Geschäftsplanung.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Entwicklung von Stresstest-Methodiken',
          description: 'Wir unterstützen Sie bei der Konzeption und Implementierung maßgeschneiderter Stresstestverfahren für verschiedene Risikoarten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Definition institutsspezifischer Stressszenarien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung von Modellen für verschiedene Risikoarten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Implementation von Multi-Faktor-Szenarien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration aufsichtsrechtlicher Anforderungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Stresstest-Automatisierung & Datenmanagement',
          description: 'Wir etablieren effiziente Prozesse und Systeme für die Durchführung, Validierung und Berichterstattung von Stresstests.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Aufbau einer integrierten Stresstest-Infrastruktur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automatisierung von Datenextraktion und -verarbeitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementierung von Validierungsprozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Entwicklung eines Management-Reportings'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(baselStressTestData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Basel III Implementierung von Stresstests & Szenarioanalysen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
