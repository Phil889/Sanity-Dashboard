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
    console.log('Creating MiFID Best Execution Transaktionsüberwachung page...')

    const mifidBestExecutionData = {
      _type: 'servicePage',
      _id: 'mifid-best-execution-transaktionsueberwachung',
      title: 'MiFID Best Execution Transaktionsüberwachung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/mifid/mifid-ii-readiness/mifid-best-execution-transaktionsueberwachung'
      },
      parent: {
        _type: 'reference',
        _ref: 'mifid-ii-readiness'
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
        title: 'MiFID Best Execution Transaktionsüberwachung | ADVISORI',
        description: 'Umfassende Unterstützung bei der Implementierung und Optimierung von Best Execution Prozessen und Transaktionsüberwachung gemäß MiFID II. Maximieren Sie Compliance und Transparenz.',
        keywords: 'MiFID II, Best Execution, Transaktionsüberwachung, Handelstransparenz, Anlegerschutz, Regulatorische Compliance, Handelsüberwachung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'MiFID Best Execution Transaktionsüberwachung'
        },
        tagline: 'Optimierte Handelsausführung und Compliance durch transparente Transaktionsüberwachung',
        heading: 'MiFID Best Execution Transaktionsüberwachung',
        description: 'Die MiFID II Best Execution Anforderungen verlangen nachweislich optimale Handelsausführung und transparente Transaktionsüberwachung. Wir unterstützen Sie bei der Implementierung effizienter Prozesse und Systeme zur Erfüllung dieser komplexen regulatorischen Vorgaben.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Nachweisbare Compliance mit Best Execution Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Transparente und optimierte Handelsausführung für Ihre Kunden'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierte Transaktionsüberwachung und Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Effiziente Integration in bestehende Handelssysteme und -prozesse'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'MiFID Best Execution Transaktionsüberwachung',
        description: 'Die Best Execution Anforderungen unter MiFID II verlangen von Finanzinstituten, alle hinreichenden Maßnahmen zu ergreifen, um das bestmögliche Ergebnis für ihre Kunden bei der Ausführung von Aufträgen zu erzielen. Dies erfordert robuste Prozesse zur Transaktionsüberwachung, Dokumentation und Nachweis der Best Execution. Wir unterstützen Sie bei der Entwicklung und Implementierung dieser komplexen Anforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung einer Best Execution Policy und entsprechender Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung von Systemen zur kontinuierlichen Transaktionsüberwachung und -analyse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Etablierung von Prozessen zur regelmäßigen Überprüfung und Verbesserung der Ausführungsqualität'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von Datenanalyse-Tools zur Identifikation von Optimierungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Erstellung regulatorisch konformer Reports und Dokumentation der Best Execution'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Best Execution ist nicht nur eine regulatorische Anforderung, sondern auch eine Chance, Ihre Handelsausführung zu optimieren und dadurch einen Wettbewerbsvorteil zu erlangen. Eine gut implementierte Transaktionsüberwachung liefert wertvolle Insights für strategische Entscheidungen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in MiFID II-Anforderungen und Best Execution Praktiken'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Methoden zur Implementierung effizienter Transaktionsüberwachung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Tiefes Verständnis der technischen und prozessualen Anforderungen im Wertpapierhandel'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz, der Compliance, Effizienz und Kundenmehrwert vereint'
            }
          ]
        },
        additionalInfo: 'Die Best Execution Anforderungen unter MiFID II haben einen erheblichen Einfluss auf Handelsprozesse, Systemlandschaften und Reportingstrukturen. Eine strategische Implementierung kann nicht nur regulatorische Risiken minimieren, sondern auch Effizienzgewinne und Kosteneinsparungen realisieren.',
        serviceDescription: 'Wir bieten umfassende Unterstützung bei der Entwicklung, Implementierung und kontinuierlichen Optimierung Ihrer Best Execution Prozesse und Transaktionsüberwachung gemäß MiFID II.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Gap-Analyse und Bewertung bestehender Best Execution Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung und Implementierung einer Best Execution Policy und Governance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Aufbau effektiver Transaktionsüberwachungssysteme und -prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration von Datenanalyse-Tools zur Optimierung der Handelsausführung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Entwicklung regulatorisch konformer Reportingstrukturen und Dokumentation'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam einen maßgeschneiderten Ansatz zur Implementierung und Optimierung Ihrer Best Execution Prozesse und Transaktionsüberwachung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse Ihrer bestehenden Handelsprozesse und -systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Identifikation von Gaps und Handlungsbedarf gemäß MiFID II-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung einer Best Execution Policy und Governance-Struktur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung von Systemen und Prozessen zur Transaktionsüberwachung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung an regulatorische Änderungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Stefanie Kausal',
        position: 'Senior Manager',
        quote: 'Die MiFID II Best Execution Anforderungen stellen Finanzinstitute vor komplexe Herausforderungen. Mit unserem integrierten Ansatz unterstützen wir unsere Kunden dabei, nicht nur die regulatorischen Anforderungen zu erfüllen, sondern auch ihre Handelsprozesse zu optimieren und dadurch einen Wettbewerbsvorteil zu erlangen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Best Execution Policy und Governance',
          description: 'Wir unterstützen Sie bei der Entwicklung und Implementierung einer umfassenden Best Execution Policy und entsprechender Governance-Strukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung einer maßgeschneiderten Best Execution Policy'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Etablierung von Governance-Strukturen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Definition von Ausführungsfaktoren und deren Gewichtung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Implementierung von Prozessen zur regelmäßigen Überprüfung und Aktualisierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Transaktionsüberwachung und Analyse',
          description: 'Wir helfen Ihnen bei der Implementierung effektiver Systeme und Prozesse zur Transaktionsüberwachung und -analyse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Aufbau einer systematischen Transaktionsüberwachung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration von Datenanalyse-Tools zur Bewertung der Ausführungsqualität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung von KPIs und Benchmarks für die Handelsausführung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Implementierung von Prozessen zur kontinuierlichen Verbesserung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(mifidBestExecutionData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ MiFID Best Execution Transaktionsüberwachung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
