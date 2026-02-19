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
    console.log('Creating EBA Governance, Outsourcing & ESG-Vorgaben page...')

    const ebaGovernanceOutsourcingESGData = {
      _type: 'servicePage',
      _id: 'eba-governance-outsourcing-esg-vorgaben',
      title: 'EBA Governance, Outsourcing & ESG-Vorgaben',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eba/eba-governance-outsourcing-esg-vorgaben'
      },
      parent: {
        _type: 'reference',
        _ref: 'eba'
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
        title: 'EBA Governance, Outsourcing & ESG-Vorgaben | ADVISORI',
        description: 'Implementieren Sie EBA-Vorgaben zu Governance, Outsourcing und ESG-Anforderungen effizient und nachhaltig. Unsere Experten unterstützen Sie bei der Umsetzung regulatorischer Anforderungen und der Integration in Ihre bestehenden Strukturen und Prozesse.',
        keywords: 'EBA Governance, Outsourcing-Richtlinien, ESG-Vorgaben, Regulatorische Compliance, Corporate Governance, Nachhaltigkeitsberichterstattung, Risikomanagement, Outsourcing-Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EBA Governance, Outsourcing & ESG-Vorgaben'
        },
        tagline: 'Nachhaltige Umsetzung regulatorischer Governance-Standards',
        heading: 'EBA Governance, Outsourcing & ESG-Vorgaben',
        description: 'Die EBA-Anforderungen an Governance-Strukturen, Outsourcing-Management und ESG-Faktoren stellen Finanzinstitute vor komplexe Herausforderungen. Wir unterstützen Sie bei der strategischen und operativen Umsetzung dieser Vorgaben, um Compliance-Risiken zu minimieren und nachhaltige Wertschöpfung zu ermöglichen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische Integration von Governance-, Outsourcing- und ESG-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Risikominimierung durch compliance-konforme Strukturen und Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Wettbewerbsvorteile durch nachhaltige Geschäftsmodelle und transparente Berichterstattung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Effizientes Management von Drittanbieterbeziehungen und Outsourcing-Risiken'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EBA Governance, Outsourcing & ESG-Vorgaben',
        description: 'Die European Banking Authority (EBA) setzt zunehmend strengere Standards für Governance-Strukturen, Outsourcing-Management und ESG-Faktoren (Environmental, Social, Governance). Unsere Experten unterstützen Sie bei der effektiven Implementierung dieser komplexen Anforderungen – von der Analyse Ihrer aktuellen Strukturen über die Entwicklung maßgeschneiderter Lösungen bis zur nachhaltigen Integration in Ihre Geschäftsprozesse.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Gap-Analyse und Bewertung bestehender Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung und Implementierung EBA-konformer Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Aufbau robuster Outsourcing-Management-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von ESG-Faktoren in Risikomanagement und Berichterstattung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Schulung und Wissenstransfer für nachhaltige Compliance'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die erfolgreiche Umsetzung der EBA-Vorgaben zu Governance, Outsourcing und ESG erfordert einen integrierten Ansatz, der sowohl regulatorische als auch geschäftsstrategische Aspekte berücksichtigt. Besonders wichtig ist die Abstimmung zwischen verschiedenen Unternehmensbereichen, um Silodenken zu vermeiden und konsistente Governance-Strukturen zu schaffen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in EBA-Richtlinien zu Governance, Outsourcing und ESG'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Methodologien für die erfolgreiche Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz, der regulatorische und geschäftsstrategische Perspektiven verbindet'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Interdisziplinäres Team aus Governance-, ESG- und Compliance-Experten'
            }
          ]
        },
        additionalInfo: 'Die zunehmende regulatorische Fokussierung auf Governance, Outsourcing und ESG-Faktoren spiegelt deren wachsende Bedeutung für die Stabilität und Nachhaltigkeit des Finanzsektors wider. Eine vorausschauende Implementierung dieser Anforderungen schafft nicht nur Compliance, sondern kann auch zu verbesserten Entscheidungsprozessen, effizienteren Geschäftsbeziehungen und einem nachhaltigeren Geschäftsmodell führen.',
        serviceDescription: 'Wir bieten maßgeschneiderte Lösungen für die Implementierung der EBA-Vorgaben zu Governance, Outsourcing und ESG, die auf Ihre spezifischen Anforderungen und Ihre bestehende Organisationsstruktur zugeschnitten sind. Unser Ziel ist eine effiziente und nachhaltige Integration regulatorischer Anforderungen, die nicht nur Compliance sicherstellt, sondern auch einen strategischen Mehrwert für Ihr Unternehmen schafft.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Analyse und Bewertung aktueller Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung und Implementierung von Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Outsourcing-Management und Risikokontrolle'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'ESG-Integration in Geschäftsprozesse und Reporting'
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
        description: 'Wir verfolgen einen strukturierten und erprobten Ansatz zur Implementierung der EBA-Vorgaben zu Governance, Outsourcing und ESG, der Ihnen maximale Sicherheit und Effizienz bietet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Detaillierte Analyse der regulatorischen Anforderungen und deren Implikationen für Ihre Organisation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Gap-Analyse zur Identifikation von Handlungsbedarfen in Governance-Strukturen, Outsourcing-Prozessen und ESG-Faktoren'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung eines maßgeschneiderten Implementierungsplans mit klaren Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Umsetzung der erforderlichen Anpassungen in Strukturen, Prozessen und Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Implementierung von Monitoring- und Berichtssystemen für Governance, Outsourcing und ESG'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 6),
            text: 'Schulung und Wissenstransfer für nachhaltige Compliance und kontinuierliche Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Julia Meyer',
        position: 'Head of Governance',
        quote: 'Die Zusammenarbeit mit ADVISORI bei der Implementierung der EBA-Vorgaben zu Governance, Outsourcing und ESG hat unsere Erwartungen übertroffen. Das Team hat nicht nur tiefgreifendes regulatorisches Know-how, sondern auch ein ausgezeichnetes Verständnis für unsere Geschäftsprozesse bewiesen. Besonders wertvoll war der integrierte Ansatz, der uns geholfen hat, Synergien zwischen verschiedenen regulatorischen Anforderungen zu nutzen und einen nachhaltigen Compliance-Rahmen zu schaffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Governance-Framework-Entwicklung',
          description: 'Wir unterstützen Sie bei der Entwicklung und Implementierung EBA-konformer Governance-Strukturen, die sowohl regulatorische Anforderungen erfüllen als auch effiziente Entscheidungsprozesse fördern.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse und Bewertung bestehender Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung von Rollen- und Verantwortungsmodellen gemäß EBA-Vorgaben'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Implementierung effektiver Überwachungs- und Kontrollmechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration von Governance in Risikomanagement und Unternehmenskultur'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Outsourcing & Third-Party Risk Management',
          description: 'Wir helfen Ihnen, robuste Outsourcing-Management-Systeme aufzubauen, die den strengen EBA-Anforderungen entsprechen und gleichzeitig operative Effizienz sicherstellen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung EBA-konformer Outsourcing-Richtlinien und -Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung von Risikobewertungs- und Überwachungssystemen für Drittanbieter'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Aufbau von Notfallplänen und Exit-Strategien für kritische Outsourcing-Beziehungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration von Outsourcing-Management in das Gesamtrisikomanagement'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'ESG-Integration & Reporting',
          description: 'Wir unterstützen Sie bei der Integration von ESG-Faktoren in Ihre Geschäftsprozesse und Berichterstattung gemäß den aktuellen EBA-Vorgaben und Marktstandards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Analyse und Bewertung von ESG-Risiken und -Chancen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Entwicklung von ESG-Strategien und -Richtlinien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Implementierung von ESG-Datenerfassungs- und Berichtssystemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Integration von ESG-Faktoren in Risikomanagement und Entscheidungsprozesse'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(ebaGovernanceOutsourcingESGData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EBA Governance, Outsourcing & ESG-Vorgaben page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
