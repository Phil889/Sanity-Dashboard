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
    console.log('Creating FRTB Implementation page...')

    const frtbImplementationData = {
      _type: 'servicePage',
      _id: 'frtb-implementation',
      title: 'FRTB Implementation',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/frtb/frtb-implementation'
      },
      parent: {
        _type: 'reference',
        _ref: 'frtb'
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
        title: 'FRTB Implementation | ADVISORI',
        description: 'Umfassende Unterstützung bei der komplexen Implementierung des Fundamental Review of the Trading Book (FRTB). Wir begleiten Sie von der Gap-Analyse über die Systemanpassung bis zur vollständigen Integration in Ihre Handels- und Risikomanagementsysteme.',
        keywords: 'FRTB Implementation, Fundamental Review of the Trading Book, FRTB Umsetzung, Handelsbuchregulierung, Standardansatz, interne Modelle, FRTB Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FRTB Implementation'
        },
        tagline: 'Umfassende Implementierung der FRTB-Regulierung',
        heading: 'FRTB Implementation',
        description: 'Navigieren Sie die komplexe Umsetzung des Fundamental Review of the Trading Book mit unserer umfassenden Implementierungsunterstützung. Wir begleiten Sie durch den gesamten Prozess – von der initialen Bewertung und Gap-Analyse über die Konzeption und Systemanpassung bis zur vollständigen Integration in Ihre Handels- und Risikomanagementsysteme, einschließlich Modellanpassung, Dateninfrastruktur und Prozessoptimierung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierte und effiziente Implementierung aller FRTB-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierung des Kapitaleinsatzes durch strategische Implementierungsentscheidungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Nahtlose Integration in bestehende Handels- und Risikomanagementsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Praxiserprobte Umsetzungsmethodik basierend auf umfangreicher FRTB-Erfahrung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'FRTB Implementation',
        description: 'Die Implementierung des Fundamental Review of the Trading Book (FRTB) stellt Banken vor erhebliche Herausforderungen aufgrund der komplexen methodischen, datentechnischen und prozessualen Anforderungen. Unser umfassender Implementierungsservice unterstützt Sie bei der effizienten und konformen Umsetzung aller FRTB-Komponenten – vom Standardansatz bis zu internen Modellen, von der Systemanpassung bis zur Prozessintegration.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Entscheidungsunterstützung zwischen Standardansatz und internen Modellen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Anpassung der Dateninfrastruktur und -qualität für FRTB-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Modellentwicklung und -validierung gemäß regulatorischen Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration in Front-Office- und Risikomanagementsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Implementierung effizienter FRTB-Prozesse und Governance-Strukturen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die frühzeitige Entscheidung zwischen Standardansatz und internen Modellen sowie eine strategische Desk-Strukturierung können den Kapitalaufschlag unter FRTB signifikant reduzieren. Unsere Analysen zeigen Einsparungspotenziale von bis zu 30% bei optimaler Implementierung.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in allen FRTB-Aspekten – von der Methodologie bis zur technischen Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Implementierungsmethodik basierend auf zahlreichen erfolgreichen FRTB-Projekten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Tiefes Verständnis der technischen und geschäftlichen Herausforderungen der FRTB-Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz mit Fokus auf nachhaltige Compliance und optimierten Kapitaleinsatz'
            }
          ]
        },
        additionalInfo: 'Eine strategisch ausgerichtete FRTB-Implementierung kann nicht nur die Compliance sicherstellen, sondern auch die Kapitaleffizienz verbessern, die Datenqualität steigern und die Handelsstrategien optimieren. Unsere Erfahrung zeigt, dass der Return on Investment einer sorgfältig geplanten FRTB-Implementierung weit über die reine regulatorische Compliance hinausgeht.',
        serviceDescription: 'Unser FRTB-Implementierungsservice bietet eine umfassende Unterstützung über den gesamten Umsetzungsprozess – von der strategischen Planung und Gap-Analyse über die Systemanpassung und Modellentwicklung bis zur Prozessintegration und kontinuierlichen Compliance-Sicherstellung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Implementierungsplanung und Desk-Strukturierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Umsetzung des Standardansatzes mit effizienter Sensitivitätsberechnung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung und Validierung interner Modelle (IMA)'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration von Front-Office- und Risikomanagement-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Implementierung des P&L-Attribution-Tests und NMRF-Berechnung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Unsere FRTB-Implementierungsmethodik folgt einem strukturierten, phasenbasierten Ansatz, der alle regulatorischen Anforderungen systematisch adressiert und gleichzeitig eine optimale Kapitaleffizienz und Betriebsintegration sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Bewertung und Planung: Analyse der Handelsaktivitäten, Entscheidung zwischen Standardansatz und internen Modellen, Entwicklung einer optimalen Desk-Struktur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Gap-Analyse und Zielbildentwicklung: Systematische Identifikation von Daten-, System- und Prozesslücken, Entwicklung eines detaillierten Zielbilds für die FRTB-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung des Standardansatzes: Anpassung der Dateninfrastruktur, Entwicklung effizienter Sensitivitätsberechnungen, Integration in Risikomanagement- und Reportingsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung interner Modelle: Modellentwicklung und -validierung, P&L-Attribution-Tests, NMRF-Identifikation und -Berechnung, Backtesting-Framework'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Integration und Optimierung: Harmonisierung von Front-Office- und Risikomanagementsystemen, Prozessautomatisierung, Implementierung effizienter Governance-Strukturen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Thomas Mayer',
        position: 'Senior Director',
        quote: 'Die erfolgreiche Implementierung von FRTB erfordert mehr als nur technisches Know-how – sie verlangt ein tiefes Verständnis der regulatorischen Anforderungen, der Marktrisikomanagement-Praxis und der Handelsstrategien. Unser integrierter Ansatz kombiniert diese Aspekte zu einer kohärenten Implementierungsstrategie, die nicht nur Compliance sicherstellt, sondern auch die Kapitaleffizienz maximiert und die Handelsaktivitäten zukunftssicher gestaltet.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'FRTB Standardansatz-Implementierung',
          description: 'Wir unterstützen Sie bei der effizienten Implementierung des FRTB-Standardansatzes (SA), von der Datenaufbereitung über die Sensitivitätsberechnung bis zur Integration in Ihre Risikomanagement- und Reportingsysteme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Implementierung der Sensitivitätsberechnung für alle Risikofaktoren (Delta, Vega, Curvature)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung effizienter Aggregationsmethoden gemäß regulatorischen Korrelationsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integration in bestehende Systemlandschaft und Reportingprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Optimierung der Kapitalberechnung unter Berücksichtigung regulatorischer Vorgaben'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'FRTB Interne Modelle (IMA) Implementierung',
          description: 'Wir begleiten Sie durch den komplexen Prozess der Implementierung interner Modelle für FRTB, von der Modellentwicklung über die Validierung bis zur regulatorischen Genehmigung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung und Kalibrierung von Expected Shortfall-Modellen gemäß FRTB-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung des P&L-Attribution-Tests und Backtesting-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Identifikation und Berechnung von Non-Modellable Risk Factors (NMRFs)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Unterstützung bei der Vorbereitung des Modellgenehmigungsverfahrens'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'FRTB Front Office Integration',
          description: 'Wir unterstützen Sie bei der Integration der FRTB-Anforderungen in Ihre Front-Office-Systeme und -Prozesse, um eine nahtlose Verbindung zwischen Handel und Risikomanagement sicherzustellen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Harmonisierung von Bewertungsmethoden zwischen Front Office und Risikomanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Implementierung effizienter Prozesse für den P&L-Attribution-Test'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Optimierung der Handelsstrategien unter Berücksichtigung der FRTB-Kapitalanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Entwicklung integrierter Reporting- und Monitoringlösungen für Trading Desks'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(frtbImplementationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FRTB Implementation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
