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
    console.log('Creating BCBS-239 Risikodatenaggregation & Automatisierte Berichterstattung page...')

    const bcbs239RisikodatenaggregationData = {
      _type: 'servicePage',
      _id: 'bcbs-239-risikodatenaggregation-automatisierte-berichterstattung',
      title: 'BCBS-239 Risikodatenaggregation & Automatisierte Berichterstattung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/bcbs-239/bcbs-239-implementation/bcbs-239-risikodatenaggregation-automatisierte-berichterstattung'
      },
      parent: {
        _type: 'reference',
        _ref: 'bcbs-239-implementation'
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
        title: 'BCBS-239 Risikodatenaggregation & Automatisierte Berichterstattung | ADVISORI',
        description: 'Optimieren Sie Ihre Risikodatenaggregation und automatisieren Sie die regulatorische Berichterstattung gemäß BCBS-239 für umfassende Compliance und effizientes Risikomanagement.',
        keywords: 'BCBS-239 Risikodatenaggregation, Automatisierte Berichterstattung, Regulatory Reporting, Risk Data Aggregation, Datenqualität, Finanzregulierung, Risikodatenmanagement'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'BCBS-239 Risikodatenaggregation & Automatisierte Berichterstattung'
        },
        tagline: 'Effiziente Aggregation und Automatisierung für regelkonforme Risikoberichterstattung',
        heading: 'BCBS-239 Risikodatenaggregation & Automatisierte Berichterstattung',
        description: 'Transformieren Sie Ihre Risikodatenaggregation und Berichterstattungsprozesse mit einer spezialisierten Lösung, die Datenqualität, Prozesseffizienz und regulatorische Compliance vereint. Unsere Expertise unterstützt Sie bei der Implementierung automatisierter Systeme, die die BCBS-239 Anforderungen vollständig erfüllen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Präzise Aggregation von Risikodaten aus heterogenen Quellsystemen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Berichterstattungsprozesse mit vollständiger Nachverfolgbarkeit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Signifikante Reduktion von Aufwand und Fehlerquoten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Optimierung der Datenqualität durch kontinuierliche Überwachung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'BCBS-239 Risikodatenaggregation & Automatisierte Berichterstattung',
        description: 'Die effektive Aggregation von Risikodaten und die Automatisierung der regulatorischen Berichterstattung sind Kernherausforderungen bei der BCBS-239 Implementierung. Unser spezialisierter Ansatz kombiniert technologische Expertise mit regulatorischem Know-how, um eine ganzheitliche Lösung zu schaffen, die nicht nur Compliance sicherstellt, sondern auch operationelle Effizienz und Datenqualität nachhaltig verbessert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung einer robusten Datenaggregationsarchitektur'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung automatisierter Berichterstattungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration von Datenqualitätskontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Sicherstellung lückenloser Datenlineage'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Optimierung von Erfassungs- und Validierungsmechanismen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die effektivsten Risikodatenaggregations- und Berichterstattungslösungen verbinden zentrale Governance mit dezentraler Verantwortung. Implementieren Sie ein föderiertes Datenmodell, das klare Standards und Prozesse vorgibt, aber gleichzeitig fachbereichsspezifische Anforderungen berücksichtigt.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in Risikodatenmodellierung und -integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung mit führenden Datenaggregations- und Reporting-Technologien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Erprobte Methoden zur Automatisierung regulatorischer Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Tiefes Verständnis der BCBS-239 Anforderungen an Datenqualität und -prozesse'
            }
          ]
        },
        additionalInfo: 'Unsere Kunden berichten nach der Implementierung unserer Risikodatenaggregations- und Berichterstattungslösungen von einer durchschnittlichen Reduzierung der Berichterstellungszeit um 60%, einer Verbesserung der Datenqualität um 75% und einer signifikanten Entlastung der Fachbereiche von manuellen Tätigkeiten.',
        serviceDescription: 'Unsere Lösung für BCBS-239 Risikodatenaggregation und automatisierte Berichterstattung umfasst die Konzeption, Implementierung und Optimierung aller notwendigen technischen und prozessualen Komponenten, um eine effiziente, regelkonforme und zukunftssichere Infrastruktur zu schaffen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Assessment der bestehenden Datenarchitektur und Reporting-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung einer Zielarchitektur für Risikodatenaggregation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung automatisierter Reporting-Workflows'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration von Datenqualitätskontrollen und Lineage-Tracking'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung und Wissenstransfer für nachhaltige Selbstständigkeit'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Unser strukturierter Ansatz zur Optimierung der Risikodatenaggregation und Automatisierung der Berichterstattung basiert auf bewährten Methoden und wird individuell auf Ihre spezifische Situation zugeschnitten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der bestehenden Datenquellen, Schnittstellen und Berichtsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer Zielarchitektur mit optimierten Datenflüssen und Automatisierungspotentialen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Schrittweise Implementierung der Datenaggregations- und Berichterstattungslösung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von Datenqualitätskontrollen und Validierungsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Umfassende Tests und Optimierung der implementierten Lösung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 6),
            text: 'Dokumentation, Schulung und Wissenstransfer an Ihre Teams'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'Deutsche Regionalbank',
        name: 'Dr. Thomas Müller',
        position: 'Leiter Risikomanagement',
        quote: 'Die von ADVISORI implementierte Lösung für Risikodatenaggregation und automatisierte Berichterstattung hat unsere Prozesse fundamental transformiert. Wir haben nicht nur die BCBS-239 Anforderungen vollständig erfüllt, sondern auch unsere operationelle Effizienz erheblich gesteigert. Die Qualität unserer Risikoberichte hat sich spürbar verbessert, während der manuelle Aufwand drastisch reduziert wurde.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Risikodatenaggregation',
          description: 'Wir konzipieren und implementieren eine robuste Architektur für die effiziente Aggregation von Risikodaten aus heterogenen Quellsystemen, die alle BCBS-239 Anforderungen erfüllt.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Assessment und Optimierung der Datenquellen und -flüsse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung einer konsistenten Datenmodellierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Implementierung von Datenintegrationsprozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Sicherstellung lückenloser Datenlineage'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Automatisierte Berichterstattung',
          description: 'Wir entwickeln und implementieren automatisierte Workflows für die regulatorische Berichterstattung, die Effizienz, Qualität und Compliance in Einklang bringen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Prozessanalyse und -optimierung der Berichterstellung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung automatisierter Reporting-Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration von Validierungs- und Freigabemechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Entwicklung von Management-Dashboards'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Datenqualitätsmanagement',
          description: 'Wir etablieren ein umfassendes Datenqualitätsmanagement, das die Integrität, Konsistenz und Genauigkeit Ihrer Risikodaten sicherstellt.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Definition von Datenqualitätskriterien und -metriken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Implementierung von Datenqualitätskontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Etablierung eines Datenqualitäts-Monitorings'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Entwicklung von Eskalations- und Remediation-Prozessen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcbs239RisikodatenaggregationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ BCBS-239 Risikodatenaggregation & Automatisierte Berichterstattung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
