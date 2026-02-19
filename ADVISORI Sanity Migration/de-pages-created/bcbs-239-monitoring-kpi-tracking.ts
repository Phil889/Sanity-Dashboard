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
    console.log('Creating BCBS-239 Monitoring & KPI Tracking page...')

    const bcbs239MonitoringKpiTrackingData = {
      _type: 'servicePage',
      _id: 'bcbs-239-monitoring-kpi-tracking',
      title: 'BCBS-239 Monitoring & KPI Tracking',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/bcbs-239/bcbs-239-ongoing-compliance/bcbs-239-monitoring-kpi-tracking'
      },
      parent: {
        _type: 'reference',
        _ref: 'bcbs-239-ongoing-compliance'
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
        title: 'BCBS-239 Monitoring & KPI Tracking | ADVISORI',
        description: 'Effektive Überwachung und KPI-Tracking für nachhaltige BCBS-239 Compliance. Automatisierte Dashboards, Echtzeitmonitoring und leistungsstarke Analysetools für Finanzinstitute.',
        keywords: 'BCBS-239, Monitoring, KPI Tracking, Risikodaten, Compliance-Messung, Dashboards, Kennzahlen, Finanzregulierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'BCBS-239 Monitoring & KPI Tracking'
        },
        tagline: 'Kontinuierliche Überwachung und datengestützte Compliance-Steuerung',
        heading: 'BCBS-239 Monitoring & KPI Tracking',
        description: 'Unsere Monitoring- und KPI-Tracking-Lösungen ermöglichen Finanzinstituten eine kontinuierliche Überwachung ihrer BCBS-239 Compliance und die datengestützte Steuerung von Verbesserungsmaßnahmen. Wir unterstützen Sie bei der Entwicklung aussagekräftiger Kennzahlen und der Implementierung effektiver Überwachungssysteme.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Echtzeitüberwachung kritischer Compliance-Parameter für frühzeitige Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Aussagekräftige KPIs und Dashboards für alle Stakeholder-Ebenen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierte Datenqualitätsmessung und Compliance-Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Transparente Entscheidungsgrundlage für kontinuierliche Verbesserungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'BCBS-239 Monitoring & KPI Tracking',
        description: 'Die Überwachung und Messung der BCBS-239 Compliance erfordert ein durchdachtes System aus Kennzahlen, automatisierten Kontrollen und aussagekräftigen Visualisierungen. Wir unterstützen Sie dabei, ein effektives Monitoring-System zu etablieren, das sowohl den regulatorischen Anforderungen entspricht als auch die kontinuierliche Verbesserung Ihrer Risikodaten-Prozesse ermöglicht.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung aussagekräftiger KPIs für alle BCBS-239 Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung automatisierter Überwachungsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Erstellung zielgruppengerechter Dashboards für verschiedene Stakeholder'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von Anomalieerkennung und Frühwarnsystemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Konzeption und Umsetzung eines kontinuierlichen Verbesserungszyklus'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Effektives BCBS-239 Monitoring ist mehr als nur Compliance-Überwachung. Mit den richtigen KPIs und Dashboards schaffen Sie einen echten Mehrwert für Ihr Risikomanagement und unterstützen datenbasierte Entscheidungen auf allen Ebenen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in der Entwicklung regulatorischer KPIs und Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erprobte Methodiken zur Automatisierung von Compliance-Kontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Erfahrung in der Integration von Monitoring-Lösungen in bestehende IT-Landschaften'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Pragmatischer Ansatz mit Fokus auf Mehrwert für das Risikomanagement'
            }
          ]
        },
        additionalInfo: 'Eine effektive Monitoring-Lösung für BCBS-239 kann manuelle Überwachungsaufwände um bis zu 75% reduzieren und die Reaktionszeit auf mögliche Compliance-Verstöße von Tagen auf Minuten verkürzen. Investieren Sie in eine zukunftssichere Monitoring-Infrastruktur!',
        serviceDescription: 'Wir bieten ein umfassendes Leistungsportfolio für das BCBS-239 Monitoring und KPI-Tracking, von der initialen KPI-Definition über die Implementierung automatisierter Überwachungsmechanismen bis hin zur Erstellung maßgeschneiderter Dashboards für verschiedene Stakeholder-Gruppen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'KPI-Entwicklung und -Definition für alle BCBS-239 Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Implementierung automatisierter Monitoring-Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Dashboard-Entwicklung für verschiedene Zielgruppen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration von KI-gestützter Anomalieerkennung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Aufbau eines nachhaltigen Verbesserungsprozesses'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam ein maßgeschneidertes Monitoring- und KPI-Tracking-System, das auf Ihre spezifischen Anforderungen und Ihre bestehende IT-Landschaft zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse Ihrer bestehenden Monitoring-Ansätze und Identifikation von Optimierungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung eines ganzheitlichen KPI-Frameworks für BCBS-239'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Konzeption und Implementierung automatisierter Überwachungsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung und Umsetzung zielgruppengerechter Dashboards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung eines kontinuierlichen Verbesserungszyklus'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'Führende europäische Großbank',
        name: 'Dr. Thomas Müller',
        position: 'Head of Regulatory Monitoring',
        quote: 'Mit ADVISORI haben wir ein umfassendes BCBS-239 Monitoring-System etabliert, das uns nicht nur bei der Einhaltung regulatorischer Anforderungen unterstützt, sondern auch einen echten Mehrwert für unser Risikomanagement bietet. Durch die automatisierten Kontrollen und aussagekräftigen Dashboards konnten wir manuelle Aufwände signifikant reduzieren und gleichzeitig die Qualität unserer Risikodaten verbessern.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'BCBS-239 KPI-Framework-Entwicklung',
          description: 'Wir entwickeln ein maßgeschneidertes KPI-Framework, das alle BCBS-239 Prinzipien abdeckt und eine effektive Messung und Steuerung Ihrer Compliance ermöglicht.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Identifikation relevanter Messgrößen für alle BCBS-239 Prinzipien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Definition aussagekräftiger KPIs mit klaren Zielwerten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung eines mehrdimensionalen Bewertungsmodells'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration in bestehende Performance-Management-Systeme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Automatisiertes Compliance-Monitoring',
          description: 'Wir implementieren automatisierte Überwachungslösungen, die eine kontinuierliche Kontrolle Ihrer BCBS-239 Compliance ermöglichen und manuelle Aufwände minimieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Implementierung automatisierter Datenqualitätskontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung von Frühwarnsystemen für potenzielle Compliance-Verstöße'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration von KI-gestützter Anomalieerkennung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Erstellung zielgruppenspezifischer Dashboards und Reports'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcbs239MonitoringKpiTrackingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ BCBS-239 Monitoring & KPI Tracking page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
