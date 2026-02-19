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
    console.log('Creating Basel III Implementation page...')

    const baselIIIImplementationData = {
      _type: 'servicePage',
      _id: 'basel-iii-implementation',
      title: 'Basel III Implementation',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/basel-iii/basel-iii-implementation'
      },
      parent: {
        _type: 'reference',
        _ref: 'basel-iii'
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
        title: 'Basel III Implementation | ADVISORI',
        description: 'Effiziente und konforme Umsetzung der Basel III-Anforderungen mit unserer umfassenden Implementierungslösung. Profitieren Sie von unserer Expertise bei der strukturierten Integration von Basel III in Ihre Prozesse, Systeme und Governance-Strukturen.',
        keywords: 'Basel III Implementation, Bankenregulierung, regulatorische Umsetzung, Compliance-Implementierung, Kapitalanforderungen, Liquiditätssteuerung, Risikomanagement'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Basel III Implementation'
        },
        tagline: 'Strukturierte und effiziente Umsetzung regulatorischer Anforderungen',
        heading: 'Basel III Implementation',
        description: 'Setzen Sie die komplexen Basel III-Anforderungen effizient und konform in Ihrem Unternehmen um. Unsere ganzheitliche Implementierungslösung deckt sämtliche Aspekte von der Kapitalberechnung über die Liquiditätssteuerung bis hin zum Risikomanagement ab und stellt sicher, dass Ihre Prozesse, Systeme und Governance-Strukturen optimal aufeinander abgestimmt sind.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Effiziente und termingerechte Umsetzung regulatorischer Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Integrierte Lösung für alle Basel III-Komponenten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Optimierung von Prozessen und Systemen für nachhaltige Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Risikominimierung durch bewährte Implementierungsmethodik'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Basel III Implementation',
        description: 'Die Implementierung der Basel III-Anforderungen stellt Finanzinstitute vor komplexe Herausforderungen, die eine strukturierte und ganzheitliche Herangehensweise erfordern. Unser umfassender Implementierungsansatz umfasst alle relevanten Aspekte – von der technischen Integration über die Prozessanpassung bis hin zur Governance und dem Change Management – und stellt sicher, dass die regulatorischen Vorgaben effizient und nachhaltig in Ihrem Unternehmen verankert werden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Implementierung der Kapitalanforderungen und -berechnungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Umsetzung der Liquiditätskennzahlen und -steuerung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration von Risikomanagement-Frameworks und -modellen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Anpassung von Prozessen, Systemen und Datenstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Etablierung von Governance-Strukturen und Kontrollen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Der Schlüssel zu einer erfolgreichen Basel III-Implementierung liegt in der ganzheitlichen Betrachtung und Integration aller Komponenten. Isolierte Lösungen führen oft zu Ineffizienzen und Compliance-Risiken. Setzen Sie auf einen integrierten Ansatz, der Kapital, Liquidität, Risiko und Reporting als zusammenhängende Elemente betrachtet.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in allen Aspekten der Basel III-Regulierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Implementierungsmethodik mit nachweislichen Erfolgen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Kombination aus regulatorischem Know-how und technischer Expertise'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Pragmatischer Ansatz mit Fokus auf Effizienz und Nachhaltigkeit'
            }
          ]
        },
        additionalInfo: 'Eine strukturierte und integrierte Basel III-Implementierung kann die Compliance-Kosten langfristig um bis zu 25% reduzieren und gleichzeitig die Datenqualität und Entscheidungsfindung verbessern. Unsere Kunden berichten zudem von einer durchschnittlichen Verkürzung der Implementierungszeit um 30% durch unsere bewährte Methodik und Best Practices.',
        serviceDescription: 'Unser Basel III-Implementierungsservice bietet eine umfassende Lösung für die effiziente und konforme Umsetzung aller regulatorischen Anforderungen in Ihrem Unternehmen. Wir unterstützen Sie von der initialen Planung über die technische Integration bis hin zur Schulung und zum Change Management.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Ganzheitliche Implementierung aller Basel III-Komponenten'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Integration in bestehende Systeme und Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Anpassung von Datenarchitekturen und Reporting-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Etablierung von Governance und Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung und Change Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und erprobten Ansatz für die Basel III-Implementierung, der eine effiziente und konforme Umsetzung aller regulatorischen Anforderungen sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Detaillierte Anforderungsanalyse und Gap-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten Implementierungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Anpassung von Prozessen, Systemen und Datenstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung von Berechnungs- und Reporting-Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung von Governance, Kontrollen und laufendem Monitoring'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Weber',
        position: 'Managing Director',
        quote: 'Die erfolgreiche Implementierung von Basel III erfordert nicht nur ein tiefes regulatorisches Verständnis, sondern auch praktische Erfahrung in der Integration komplexer Anforderungen in bestehende Prozesse und Systeme. Unser ganzheitlicher Ansatz stellt sicher, dass alle Komponenten nahtlos zusammenarbeiten und die Compliance nachhaltig gesichert ist – ohne unnötige Komplexität oder Redundanzen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Technische Implementierung',
          description: 'Wir unterstützen Sie bei der technischen Umsetzung aller Basel III-Komponenten in Ihren Systemen und Datenstrukturen, von der Kapitalberechnung über die Liquiditätssteuerung bis zum Risikomanagement.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Implementierung von Berechnungsmodellen und -algorithmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Integration in bestehende IT-Landschaften'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Optimierung von Datenarchitekturen und -flüssen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Aufbau von automatisierten Reporting-Lösungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Prozess- und Governance-Implementierung',
          description: 'Wir unterstützen Sie bei der Anpassung Ihrer Prozesse und Governance-Strukturen, um eine nachhaltige Basel III-Compliance zu gewährleisten und regulatorische Risiken zu minimieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung und Implementierung angepasster Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Etablierung von Governance-Strukturen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementierung von Kontroll- und Überwachungsmechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Schulung und Change Management für nachhaltige Veränderung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(baselIIIImplementationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Basel III Implementation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
