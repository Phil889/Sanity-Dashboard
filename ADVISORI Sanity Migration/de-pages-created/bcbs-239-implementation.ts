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
    console.log('Creating BCBS-239 Implementation page...')

    const bcbs239ImplementationData = {
      _type: 'servicePage',
      _id: 'bcbs-239-implementation',
      title: 'BCBS-239 Implementation',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/bcbs-239/bcbs-239-implementation'
      },
      parent: {
        _type: 'reference',
        _ref: 'bcbs-239'
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
        title: 'BCBS-239 Implementation | ADVISORI',
        description: 'Setzen Sie BCBS-239 Anforderungen effektiv und nachhaltig um mit unserer strukturierten Implementierungsmethodik für Risikodaten-Aggregation und Reporting.',
        keywords: 'BCBS-239 Implementation, Risikodaten-Aggregation, Regulatory Compliance, Risk Reporting, Datenarchitektur, Finanzregulierung, Implementierungsstrategie'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'BCBS-239 Implementation'
        },
        tagline: 'Strukturierte Umsetzung der BCBS-239 Anforderungen für Finanzinstitute',
        heading: 'BCBS-239 Implementation',
        description: 'Die erfolgreiche Implementierung der BCBS-239 Richtlinien erfordert einen strukturierten Ansatz, der Technologie, Prozesse und Organisation integriert. Wir unterstützen Sie bei der vollständigen, nachhaltigen Umsetzung aller regulatorischen Anforderungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierter Implementierungsansatz mit bewährter Methodik'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Nachhaltige Integration in bestehende Systeme und Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Vollständige Dokumentation für Prüfungs- und Nachweiszwecke'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Wissenstransfer und Befähigung Ihrer Mitarbeiter'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'BCBS-239 Implementation',
        description: 'Die praktische Umsetzung der BCBS-239 Richtlinien stellt viele Finanzinstitute vor erhebliche Herausforderungen. Unser strukturierter Implementierungsansatz integriert technische, prozessuale und organisatorische Aspekte zu einer ganzheitlichen Lösung, die nicht nur Compliance sicherstellt, sondern auch strategische Vorteile schafft.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung einer maßgeschneiderten Implementierungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Aufbau einer robusten Datenarchitektur für Risikodaten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung effektiver Datengovernance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Optimierung der Reporting-Prozesse und -Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Umfassende Dokumentation und Wissenstransfer'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine erfolgreiche BCBS-239 Implementation sollte nicht als isoliertes Compliance-Projekt betrachtet werden, sondern als Chance zur grundlegenden Optimierung Ihrer Risikodaten-Infrastruktur. Die Integration in bestehende Transformationsinitiativen kann erhebliche Synergien schaffen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Erprobte Implementierungsmethodik mit nachgewiesenen Erfolgen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefgreifende Expertise in Bankenregulierung und Risikodatenmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz, der alle relevanten Dimensionen berücksichtigt'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Fokus auf nachhaltigen Wissenstransfer und Befähigung Ihrer Teams'
            }
          ]
        },
        additionalInfo: 'Finanzinstitute, die BCBS-239 erfolgreich implementiert haben, berichten nicht nur von regulatorischer Compliance, sondern auch von einer durchschnittlichen Verbesserung der Datenqualität um 65%, einer Reduktion der Berichterstellungszeit um 40% und einer signifikanten Verbesserung der Entscheidungsfindung im Risikomanagement.',
        serviceDescription: 'Unser BCBS-239 Implementierungsansatz umfasst alle erforderlichen Schritte - von der initialen Strategie über die technische Umsetzung bis zur nachhaltigen Verankerung in Ihren Prozessen und Ihrer Organisation. Wir begleiten Sie durch den gesamten Implementierungsprozess und stellen sicher, dass alle regulatorischen Anforderungen erfüllt werden.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Entwicklung einer BCBS-239 Implementierungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Aufbau einer robusten Datenarchitektur für Risikodaten'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung von Datengovernance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Optimierung von Reporting-Prozessen und -Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Dokumentation und Wissenstransfer'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Unser Implementierungsansatz basiert auf einer strukturierten Methodik, die alle Aspekte der BCBS-239 Anforderungen adressiert und gleichzeitig auf Ihre spezifische Situation zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der bestehenden Systeme und Prozesse im Kontext der BCBS-239 Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten Implementierungsstrategie und Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Schrittweise Implementierung mit regelmäßigen Überprüfungen und Anpassungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Umfassende Dokumentation aller Maßnahmen und Ergebnisse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Wissenstransfer und Schulung Ihrer Mitarbeiter'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'Europäische Großbank',
        name: 'Dr. Julia Schneider',
        position: 'Chief Risk Officer',
        quote: 'Die Zusammenarbeit mit ADVISORI bei der Implementierung unserer BCBS-239 Lösung war ein entscheidender Erfolgsfaktor. Durch den strukturierten Ansatz und die tiefe fachliche Expertise konnten wir nicht nur die regulatorischen Anforderungen fristgerecht erfüllen, sondern auch die Qualität unserer Risikodaten und -berichte signifikant verbessern.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'BCBS-239 Implementierungsstrategie',
          description: 'Wir entwickeln eine maßgeschneiderte Implementierungsstrategie, die auf Ihre spezifische Situation zugeschnitten ist und alle regulatorischen Anforderungen abdeckt.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse der BCBS-239 Anforderungen im Kontext Ihrer Organisation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung einer strukturierten Roadmap mit klaren Meilensteinen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Kosten-Nutzen-Analyse verschiedener Implementierungsoptionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration in bestehende Transformationsinitiativen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technische Implementierung und Datenarchitektur',
          description: 'Wir unterstützen Sie bei der technischen Umsetzung der BCBS-239 Anforderungen und dem Aufbau einer robusten Datenarchitektur für Risikodaten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung einer konsistenten Datenarchitektur für Risikodaten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung effektiver Datenqualitätskontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Optimierung der Datenflüsse und -prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration mit bestehenden Systemen und Datenquellen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcbs239ImplementationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ BCBS-239 Implementation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
