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
    console.log('Creating Basel III Gap-Analyse & Umsetzungsfahrplan page...')

    const baselIIIGapAnalyseData = {
      _type: 'servicePage',
      _id: 'basel-iii-gap-analyse-umsetzungsfahrplan',
      title: 'Basel III Gap-Analyse & Umsetzungsfahrplan',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/basel-iii/basel-iii-readiness/basel-iii-gap-analyse-umsetzungsfahrplan'
      },
      parent: {
        _type: 'reference',
        _ref: 'basel-iii-readiness'
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
        title: 'Basel III Gap-Analyse & Umsetzungsfahrplan | ADVISORI',
        description: 'Systematische Identifikation von Compliance-Lücken und Entwicklung eines maßgeschneiderten Umsetzungsfahrplans für Basel III. Wir unterstützen Sie bei der strukturierten Analyse Ihrer aktuellen Prozesse und Systeme und der Erstellung einer priorisierten Roadmap zur effizienten Basel III-Implementierung.',
        keywords: 'Basel III Gap-Analyse, Basel III Umsetzungsfahrplan, Bankenregulierung, Implementierungsstrategie, Regulatorische Anforderungen, Compliance-Roadmap, Implementierungsplanung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Basel III Gap-Analyse & Umsetzungsfahrplan'
        },
        tagline: 'Systematische Analyse und strukturierte Implementierungsplanung',
        heading: 'Basel III Gap-Analyse & Umsetzungsfahrplan',
        description: 'Identifizieren Sie präzise die Lücken in Ihren aktuellen Prozessen und Systemen im Hinblick auf Basel III und entwickeln Sie einen strukturierten, priorisierten Umsetzungsfahrplan. Unsere methodische Herangehensweise ermöglicht eine effiziente und kostenoptimierte Implementierung der komplexen regulatorischen Anforderungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Präzise Identifikation von Compliance-Lücken und Handlungsbedarf'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Priorisierte Roadmap mit klaren Meilensteinen und Ressourcenplanung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kosteneinsparungen durch systematische Planung und Vermeidung von Redundanzen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Minderung von Implementierungsrisiken durch strukturiertes Vorgehen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Basel III Gap-Analyse & Umsetzungsfahrplan',
        description: 'Die systematische Gap-Analyse und die Entwicklung eines strukturierten Umsetzungsfahrplans sind entscheidende Schritte für eine erfolgreiche Basel III-Implementierung. Unser Service umfasst eine umfassende Analyse Ihrer aktuellen Prozesse, Systeme und Datenstrukturen im Vergleich zu den regulatorischen Anforderungen sowie die Erstellung eines detaillierten, priorisierten Implementierungsplans, der Ihre spezifischen Geschäftsanforderungen berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Detaillierte Analyse der Kapital-, Liquiditäts- und Risikomanagementanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Identifikation von Prozess-, System- und Datenlücken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Bewertung der Auswirkungen auf Geschäftsmodell und -strategie'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung einer priorisierten Implementierungsroadmap'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Ressourcen- und Budgetplanung für die Umsetzung'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine gründliche Gap-Analyse ist die Grundlage für eine effiziente Basel III-Implementierung. Investieren Sie ausreichend Zeit in diese Phase, um kostspielige Nachbesserungen zu vermeiden und von Anfang an den optimalen Umsetzungspfad zu wählen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Erprobte Methodik für effiziente und präzise Gap-Analysen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassende Expertise in allen Aspekten der Basel III-Regulierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxisorientierter Ansatz mit Fokus auf Implementierbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Erfahrung aus zahlreichen erfolgreichen Implementierungsprojekten'
            }
          ]
        },
        additionalInfo: 'Eine strukturierte Gap-Analyse und ein fundierter Umsetzungsfahrplan reduzieren die Implementierungszeit für Basel III um durchschnittlich 30% und führen zu erheblichen Kosteneinsparungen durch die Vermeidung von Redundanzen und nachträglichen Anpassungen. Nutzen Sie unsere Expertise, um Ihre Basel III-Implementierung von Anfang an optimal zu gestalten.',
        serviceDescription: 'Unser Service zur Basel III Gap-Analyse und Umsetzungsplanung bietet eine systematische und umfassende Bewertung Ihrer aktuellen Situation im Vergleich zu den regulatorischen Anforderungen und unterstützt Sie bei der Entwicklung eines maßgeschneiderten, effizienten Implementierungsplans.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Systematische Gap-Analyse von Prozessen, Systemen und Daten'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Priorisierung der identifizierten Handlungsfelder'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung einer detaillierten Implementierungsroadmap'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Ressourcen- und Budgetplanung für die Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Identifikation von Quick Wins und effizienten Lösungsansätzen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und methodischen Ansatz zur Durchführung der Gap-Analyse und zur Entwicklung eines maßgeschneiderten Umsetzungsfahrplans für Basel III.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Initiale Bestandsaufnahme der aktuellen Prozesse, Systeme und Datenstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Detaillierte Analyse der regulatorischen Anforderungen und Identifikation der Compliance-Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Bewertung der Auswirkungen auf Geschäftsmodell, Prozesse und IT-Infrastruktur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Priorisierung der Handlungsfelder basierend auf Compliance-Anforderungen und Geschäftsrelevanz'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Entwicklung eines detaillierten Umsetzungsfahrplans mit konkreten Maßnahmen, Meilensteinen und Ressourcenplanung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Stefan Schmid',
        position: 'Senior Manager',
        quote: 'Eine präzise Gap-Analyse und ein strukturierter Umsetzungsfahrplan sind das Fundament für eine erfolgreiche Basel III-Implementierung. Unsere methodische Herangehensweise ermöglicht es Banken, Handlungsbedarf gezielt zu identifizieren und die Implementierung effizient und kostenoptimiert zu gestalten. So schaffen wir nicht nur Compliance, sondern auch strategische Vorteile für unsere Kunden.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Basel III Gap-Analyse',
          description: 'Wir führen eine systematische und umfassende Analyse Ihrer aktuellen Prozesse, Systeme und Datenstrukturen im Vergleich zu den Basel III-Anforderungen durch und identifizieren präzise Compliance-Lücken und Handlungsbedarf.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse der Kapitalanforderungen und -struktur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung der Liquiditätsmanagement-Prozesse und -Kennzahlen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Überprüfung der Risikomanagement-Frameworks und -Modelle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Identifikation von Datenlücken und Prozessschwachstellen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Entwicklung eines Basel III Umsetzungsfahrplans',
          description: 'Basierend auf den Ergebnissen der Gap-Analyse entwickeln wir einen maßgeschneiderten, priorisierten Umsetzungsfahrplan mit konkreten Maßnahmen, Meilensteinen und Ressourcenplanung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Priorisierung der Handlungsfelder nach Compliance-Relevanz und Implementierungsaufwand'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung einer detaillierten Roadmap mit klaren Meilensteinen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Ressourcen- und Budgetplanung für die Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Identifikation von Quick Wins und effizienten Lösungsansätzen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(baselIIIGapAnalyseData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Basel III Gap-Analyse & Umsetzungsfahrplan page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
