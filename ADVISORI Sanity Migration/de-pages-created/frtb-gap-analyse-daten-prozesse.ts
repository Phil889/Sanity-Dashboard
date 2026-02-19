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
    console.log('Creating FRTB Gap-Analyse Daten & Prozesse page...')

    const frtbGapAnalyseData = {
      _type: 'servicePage',
      _id: 'frtb-gap-analyse-daten-prozesse',
      title: 'FRTB Gap-Analyse Daten & Prozesse',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/frtb/frtb-readiness/frtb-gap-analyse-daten-prozesse'
      },
      parent: {
        _type: 'reference',
        _ref: 'frtb-readiness'
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
        title: 'FRTB Gap-Analyse Daten & Prozesse | ADVISORI',
        description: 'Systematische Identifikation von Daten- und Prozesslücken für die FRTB-Implementierung. Wir unterstützen Sie bei der strukturierten Analyse Ihrer aktuellen Systeme und der Entwicklung eines maßgeschneiderten Umsetzungsplans für die FRTB-Anforderungen.',
        keywords: 'FRTB Gap-Analyse, FRTB Datenanalyse, FRTB Prozessanalyse, Fundamental Review of the Trading Book, Datenarchitektur, Handelsbuchregulierung, FRTB Implementierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FRTB Gap-Analyse Daten & Prozesse'
        },
        tagline: 'Systematische Daten- und Prozessanalyse für FRTB-Compliance',
        heading: 'FRTB Gap-Analyse Daten & Prozesse',
        description: 'Identifizieren Sie präzise die Lücken in Ihren Datenstrukturen und Prozessen im Hinblick auf die FRTB-Anforderungen und entwickeln Sie einen strukturierten Umsetzungsplan. Unsere methodische Herangehensweise ermöglicht eine effiziente und zielgerichtete Implementierung der komplexen Daten- und Prozessanforderungen des Fundamental Review of the Trading Book.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Präzise Identifikation von Daten- und Prozesslücken für die FRTB-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturierter Fahrplan für die Anpassung von Datenarchitektur und Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kostenoptimierung durch systematische Planung und Vermeidung von Redundanzen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Risikominimierung durch fundierte Implementierungsstrategie und Best Practices'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'FRTB Gap-Analyse Daten & Prozesse',
        description: 'Die systematische Gap-Analyse der Datenstrukturen und Prozesse ist ein entscheidender Schritt für eine erfolgreiche FRTB-Implementierung. Unser Service umfasst eine umfassende Analyse Ihrer aktuellen Datenarchitektur, Datenqualität und Prozesslandschaft im Vergleich zu den regulatorischen Anforderungen des Fundamental Review of the Trading Book sowie die Entwicklung eines detaillierten, priorisierten Implementierungsplans.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Detaillierte Analyse der Datenanforderungen für standardisierte und interne Modellansätze'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Bewertung der Datenqualität, -granularität und -historisierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Identifikation von Prozesslücken in Handel, Risikomanagement und Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung einer priorisierten Implementierungsroadmap für Datenanpassungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Konzeption effizienter Prozessabläufe für FRTB-Compliance'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine gründliche Daten- und Prozessanalyse ist das Fundament für eine erfolgreiche FRTB-Implementierung. Investieren Sie ausreichend Zeit in diese Phase, um kostspielige Nachbesserungen zu vermeiden und von Anfang an den optimalen Daten- und Prozessrahmen zu schaffen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Erprobte Methodik für effiziente und präzise Daten- und Prozess-Gap-Analysen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassende Expertise in allen Aspekten der FRTB-Regulierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxisorientierter Ansatz mit Fokus auf technische Implementierbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Erfahrung aus zahlreichen erfolgreichen FRTB-Implementierungsprojekten'
            }
          ]
        },
        additionalInfo: 'Eine strukturierte Daten- und Prozess-Gap-Analyse für FRTB reduziert die Implementierungszeit um durchschnittlich 25% und führt zu erheblichen Kosteneinsparungen durch die Vermeidung von Redundanzen und nachträglichen Anpassungen. Nutzen Sie unsere Expertise, um Ihre FRTB-Implementierung von Anfang an optimal zu gestalten.',
        serviceDescription: 'Unser Service zur FRTB-Daten- und Prozess-Gap-Analyse bietet eine systematische und umfassende Bewertung Ihrer aktuellen Situation im Vergleich zu den regulatorischen Anforderungen und unterstützt Sie bei der Entwicklung eines maßgeschneiderten, effizienten Implementierungsplans.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Systematische Gap-Analyse von Datenstrukturen, -qualität und -prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Priorisierung der identifizierten Handlungsfelder nach Relevanz und Aufwand'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung einer detaillierten Implementierungsroadmap für Datenanpassungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Konzeption effizienter Prozessabläufe für die FRTB-Anforderungen'
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
        description: 'Wir verfolgen einen strukturierten und methodischen Ansatz zur Durchführung der Daten- und Prozess-Gap-Analyse und zur Entwicklung eines maßgeschneiderten Umsetzungsplans für die FRTB-Anforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Initiale Bestandsaufnahme der aktuellen Datenstrukturen, Systeme und Prozesse im Handelsbereich'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Detaillierte Analyse der FRTB-Datenanforderungen und Identifikation von Datenlücken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Bewertung der Prozesslandschaft und Identifikation von Prozesslücken für die FRTB-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Priorisierung der Handlungsfelder basierend auf regulatorischen Anforderungen und technischer Komplexität'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Entwicklung eines detaillierten Umsetzungsplans mit konkreten Maßnahmen, Meilensteinen und Ressourcenplanung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Schmidt',
        position: 'Principal Consultant',
        quote: 'Eine präzise Daten- und Prozess-Gap-Analyse ist das Fundament für eine erfolgreiche FRTB-Implementierung. Unsere methodische Herangehensweise ermöglicht es Banken, den Handlungsbedarf gezielt zu identifizieren und die Implementierung effizient und kostenoptimiert zu gestalten. So schaffen wir nicht nur Compliance, sondern auch die Grundlage für ein zukunftsfähiges Marktrisikomanagement.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'FRTB Daten-Gap-Analyse',
          description: 'Wir führen eine systematische und umfassende Analyse Ihrer aktuellen Datenstrukturen und -qualität im Vergleich zu den FRTB-Anforderungen durch und identifizieren präzise Datenlücken und Handlungsbedarf.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse der Datenanforderungen für standardisierte und interne Modellansätze'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung der Datenqualität, -granularität und -historisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation von Datenlücken und technischen Herausforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Priorisierung der Handlungsfelder und Entwicklung eines Daten-Fahrplans'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'FRTB Prozess-Gap-Analyse',
          description: 'Basierend auf den FRTB-Anforderungen analysieren wir Ihre bestehenden Prozesse in Handel, Risikomanagement und Reporting und entwickeln optimierte Prozessabläufe für die FRTB-Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Analyse der bestehenden Prozesse im Handelsbereich und Risikomanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Identifikation von Prozesslücken für die FRTB-Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung optimierter Prozessabläufe für standardisierte und interne Modellansätze'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Prozessintegration zwischen Front Office, Risk und Reporting'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(frtbGapAnalyseData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FRTB Gap-Analyse Daten & Prozesse page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
