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
    console.log('Creating FRTB page...')

    const frtbData = {
      _type: 'servicePage',
      _id: 'frtb',
      title: 'Fundamental Review of the Trading Book (FRTB)',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/frtb'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management'
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
        title: 'Fundamental Review of the Trading Book (FRTB) | ADVISORI',
        description: 'Komplexe FRTB-Anforderungen effizient umsetzen. Wir unterstützen Banken bei der Implementierung der FRTB-Standards mit maßgeschneiderten Lösungen.',
        keywords: 'FRTB, Fundamental Review of the Trading Book, Marktrisiko, Standardansatz, Internal Models Approach, Bankenregulierung, Basel IV'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Fundamental Review of the Trading Book'
        },
        tagline: 'Komplexe Regulatorik erfolgreich implementieren',
        heading: 'Fundamental Review of the Trading Book (FRTB)',
        description: 'Die FRTB-Anforderungen stellen Banken vor erhebliche Herausforderungen. Wir unterstützen Sie bei der effizienten Implementierung dieser komplexen Regulatorik und minimieren die Auswirkungen auf Ihr Kapital und Ihre Handelsaktivitäten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Reduzierung der Kapitalanforderungen durch optimierte Modellierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Compliance mit den strengen FRTB-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effiziente Implementierung von Standardansatz und IMA'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Minimierung der Auswirkungen auf Ihre Handelsstrategie und Profitabilität'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Fundamental Review of the Trading Book',
        description: 'Die Fundamental Review of the Trading Book (FRTB) ist ein umfassendes Regelwerk des Basler Ausschusses für Bankenaufsicht, das die Kapitalanforderungen für Marktrisiken grundlegend verändert. Wir unterstützen Banken bei der effizienten Umsetzung dieser komplexen Anforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Gap-Analyse und Bewertung der Auswirkungen auf Kapital und Handelsbuch'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung des Standardansatzes (SA) und des Internal Models Approach (IMA)'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Optimierung der Dateninfrastruktur und Reportingprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration in bestehende Risikomanagementsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Anpassung an regulatorische Entwicklungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine frühzeitige Anpassung der Handelsstrategien und Risikomodelle an die FRTB-Anforderungen kann die Kapitalbelastung erheblich reduzieren und Wettbewerbsvorteile sichern.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in Marktrisikoregelungen und FRTB-spezifischen Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrenes Team aus Risikomanagement- und Regulierungsexperten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Methoden und Tools für die FRTB-Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Individueller Ansatz mit Fokus auf die spezifischen Bedürfnisse Ihres Instituts'
            }
          ]
        },
        additionalInfo: 'Die FRTB-Anforderungen können die Kapitalanforderungen für Marktrisiken um 40-60% erhöhen. Eine strategische Implementierung und Optimierung kann diese Auswirkungen erheblich reduzieren und Wettbewerbsvorteile sichern.',
        serviceDescription: 'Wir bieten ein umfassendes Leistungsspektrum zur erfolgreichen Implementierung der FRTB-Anforderungen. Von der Gap-Analyse über die Implementierung bis zur kontinuierlichen Optimierung – wir unterstützen Sie in jeder Phase Ihres FRTB-Projekts.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'FRTB Gap-Analyse und Auswirkungsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Implementierung des Standardansatzes (SA)'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Unterstützung bei der IMA-Zulassung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Optimierung der Datenarchitektur und Reportingprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Strategische Beratung zur Minimierung der Kapitalbelastung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir unterstützen Sie mit einem strukturierten und praxiserprobten Ansatz bei der Implementierung der FRTB-Anforderungen, der auf Ihre spezifischen Bedürfnisse zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Detaillierte Gap-Analyse und Auswirkungsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten Implementierungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Optimierung der Daten- und IT-Infrastruktur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung und Validierung der Modelle und Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung an regulatorische Entwicklungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Andreas Schmidt',
        position: 'Director Risk Management',
        quote: 'ADVISORI hat uns mit einer effizienten Implementierungsstrategie für FRTB unterstützt, die unsere Kapitalbelastung minimiert und gleichzeitig vollständige Compliance sicherstellt. Ihr tiefes Verständnis der Marktrisikoregelungen und ihre pragmatische Herangehensweise waren entscheidend für den Erfolg unseres Projekts.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'FRTB Gap-Analyse und Auswirkungsbewertung',
          description: 'Wir analysieren Ihre aktuelle Handelsbuchstruktur und Risikomanagementsysteme, um Lücken zu identifizieren und die Auswirkungen der FRTB-Anforderungen auf Ihr Kapital und Ihre Handelsaktivitäten zu bewerten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse der Handelsbuchstruktur und Risikomodelle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung der Auswirkungen auf Kapitalanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation von Optimierungspotenzialen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung eines strukturierten Implementierungsplans'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Implementierung von FRTB-Lösungen',
          description: 'Wir unterstützen Sie bei der effizienten Implementierung der FRTB-Anforderungen, vom Standardansatz bis zur Vorbereitung für die IMA-Zulassung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Implementierung des Standardansatzes (SA)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Unterstützung bei der IMA-Zulassung und Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Optimierung der Datenarchitektur und IT-Infrastruktur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration in bestehende Risikomanagementsysteme'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(frtbData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FRTB page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
