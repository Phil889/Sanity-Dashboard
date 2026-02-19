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
    console.log('Creating Basel III Einführung neuer Kennzahlen (Countercyclical Buffer, etc.) page...')

    const baselIIIKennzahlenData = {
      _type: 'servicePage',
      _id: 'basel-iii-einfuehrung-neuer-kennzahlen-countercyclical-buffer-etc',
      title: 'Basel III Einführung neuer Kennzahlen (Countercyclical Buffer, etc.)',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/basel-iii/basel-iii-readiness/basel-iii-einfuehrung-neuer-kennzahlen-countercyclical-buffer-etc'
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
        title: 'Basel III Einführung neuer Kennzahlen | ADVISORI',
        description: 'Umfassende Unterstützung bei der Implementierung neuer Basel III Kennzahlen wie Countercyclical Buffer, NSFR und LCR. Wir begleiten Sie von der Analyse bis zur erfolgreichen Umsetzung aller regulatorischen Anforderungen.',
        keywords: 'Basel III Kennzahlen, Countercyclical Buffer, CCyB, Leverage Ratio, NSFR, LCR, Kapitalanforderungen, Bankenregulierung, Basel III Implementierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Basel III Einführung neuer Kennzahlen'
        },
        tagline: 'Effiziente Implementierung regulatorischer Kennzahlen',
        heading: 'Basel III Einführung neuer Kennzahlen (Countercyclical Buffer, etc.)',
        description: 'Die Einführung neuer regulatorischer Kennzahlen im Rahmen von Basel III stellt Finanzinstitute vor komplexe Herausforderungen. Wir unterstützen Sie bei der korrekten Implementierung aller Anforderungen – vom Countercyclical Buffer über Leverage Ratio bis hin zu Liquiditätskennzahlen wie NSFR und LCR.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Effiziente Implementierung aller neuen Basel III Kennzahlen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierung der Kapital- und Liquiditätsstruktur unter Berücksichtigung neuer Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Fundierte Expertise zu allen regulatorischen Kennzahlen und deren Berechnungsmethoden'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltige Prozess- und Systemanpassungen für kontinuierliche Compliance'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Basel III Einführung neuer Kennzahlen',
        description: 'Die Einführung neuer regulatorischer Kennzahlen unter Basel III erfordert eine umfassende Anpassung von Prozessen, Systemen und Datenmanagement. Unsere spezialisierten Services unterstützen Sie bei der effizienten Implementierung aller Anforderungen – vom Countercyclical Capital Buffer (CCyB) über die Leverage Ratio bis hin zu den Liquiditätskennzahlen LCR und NSFR – und helfen Ihnen, Compliance sicherzustellen und gleichzeitig Ihre Kapital- und Liquiditätsstruktur zu optimieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Detaillierte Analyse der Auswirkungen neuer Kennzahlen auf Ihre Kapital- und Liquiditätsstruktur'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung robuster Berechnungsmethoden für alle regulatorischen Kennzahlen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Etablierung effizienter Prozesse zur kontinuierlichen Überwachung und Steuerung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration der neuen Kennzahlen in Ihre Kapital- und Liquiditätsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Optimierung Ihrer Bilanzstruktur unter Berücksichtigung aller regulatorischen Anforderungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die neuen Kennzahlen sollten nicht isoliert betrachtet werden, sondern in ein ganzheitliches Kapital- und Liquiditätsmanagement integriert werden. Dies ermöglicht nicht nur die Erfüllung regulatorischer Anforderungen, sondern auch die Optimierung Ihrer Kapitalstruktur und die Verbesserung der Profitabilität.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifendes Verständnis aller Basel III Kennzahlen und deren Berechnungsmethoden'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erprobte Implementierungsmethodik mit bewährten Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Erfahrung aus zahlreichen erfolgreichen Basel III Projekten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz, der regulatorische Anforderungen mit geschäftlichen Zielen in Einklang bringt'
            }
          ]
        },
        additionalInfo: 'Die Einführung neuer Basel III Kennzahlen wie Countercyclical Buffer, Leverage Ratio, LCR und NSFR erfordert nicht nur technisches Know-how, sondern auch ein tiefes Verständnis der regulatorischen Anforderungen und deren Auswirkungen auf Ihr Geschäftsmodell. Unsere Experten unterstützen Sie bei der effizienten Implementierung und helfen Ihnen, die neuen Kennzahlen als strategisches Instrument zur Optimierung Ihrer Kapital- und Liquiditätsstruktur zu nutzen.',
        serviceDescription: 'Unser umfassender Service zur Einführung neuer Basel III Kennzahlen unterstützt Sie bei allen Aspekten der Implementierung – von der initialen Analyse über die Systemanpassung bis zur kontinuierlichen Überwachung und Steuerung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Detaillierte Analyse der Auswirkungen neuer Kennzahlen auf Ihre Bank'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung und Implementierung robuster Berechnungsmethoden'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Anpassung von Prozessen und Systemen für effiziente Berichterstattung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration der neuen Kennzahlen in Ihre Kapital- und Liquiditätsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung Ihrer Mitarbeiter zu allen Aspekten der neuen Kennzahlen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und praxiserprobten Ansatz zur Implementierung neuer Basel III Kennzahlen, der auf Ihre spezifischen Anforderungen zugeschnitten wird.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Initiale Analyse der Auswirkungen neuer Kennzahlen auf Ihre Kapital- und Liquiditätsstruktur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung maßgeschneiderter Implementierungsstrategien für jede Kennzahl'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Anpassung von Prozessen, Systemen und Datenmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung robuster Berechnungs- und Reporting-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung, Validierung und Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Sebastian Müller',
        position: 'Partner',
        quote: 'Die Einführung neuer regulatorischer Kennzahlen stellt Banken vor komplexe Herausforderungen. Unser strukturierter Ansatz ermöglicht nicht nur die effiziente Implementierung aller Anforderungen, sondern auch die Integration der neuen Kennzahlen in ein ganzheitliches Kapital- und Liquiditätsmanagement, das geschäftliche Ziele mit regulatorischen Anforderungen in Einklang bringt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Implementierung des Countercyclical Capital Buffer (CCyB)',
          description: 'Wir unterstützen Sie bei der korrekten Implementierung des Countercyclical Capital Buffer, von der Analyse der Auswirkungen auf Ihre Kapitalstruktur bis zur Integration in Ihre Kapitalplanung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse der länderspezifischen CCyB-Anforderungen und deren Auswirkungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung robuster Berechnungsmethoden für den CCyB'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integration des CCyB in Ihre Kapitalplanung und -steuerung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Etablierung effizienter Prozesse zur kontinuierlichen Überwachung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Implementierung und Optimierung von Liquiditätskennzahlen (LCR, NSFR)',
          description: 'Wir unterstützen Sie bei der effizienten Implementierung der Liquiditätskennzahlen LCR und NSFR und helfen Ihnen, Ihre Bilanzstruktur unter Berücksichtigung dieser Anforderungen zu optimieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Detaillierte Analyse der Auswirkungen von LCR und NSFR auf Ihre Bilanzstruktur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung und Implementierung robuster Berechnungsmethoden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Optimierung Ihrer Aktiv- und Passivstruktur unter Berücksichtigung der Liquiditätsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration der Liquiditätskennzahlen in Ihre Liquiditätsplanung und -steuerung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(baselIIIKennzahlenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Basel III Einführung neuer Kennzahlen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
