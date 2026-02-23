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
    console.log('Creating MaRisk Überwachung & Reporting page...')

    const mariskUeberwachungReportingData = {
      _type: 'servicePage',
      _id: 'marisk-ueberwachung-reporting',
      title: 'MaRisk Überwachung & Reporting',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/marisk/marisk-ongoing-compliance/marisk-ueberwachung-reporting/'
      },
      parent: {
        _type: 'reference',
        _ref: 'marisk-ongoing-compliance'
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
        title: 'MaRisk Überwachung & Reporting | ADVISORI',
        description: 'Optimieren Sie Ihre MaRisk-Compliance durch effektives Monitoring und Reporting. Profitieren Sie von unserer Expertise für kontinuierliche Überwachung regulatorischer Anforderungen.',
        keywords: 'MaRisk Überwachung, MaRisk Reporting, Regulatorisches Reporting, Compliance Monitoring, Bankaufsicht Reporting, BaFin Reporting'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'MaRisk Überwachung & Reporting'
        },
        tagline: 'Kontinuierliche Überwachung und transparentes Reporting Ihrer MaRisk-Compliance',
        heading: 'MaRisk Überwachung & Reporting',
        description: 'Stellen Sie die kontinuierliche Einhaltung der MaRisk durch effektives Compliance-Monitoring und aussagekräftiges Reporting sicher. Unsere strukturierten Lösungen ermöglichen eine transparente Überwachung Ihrer Kontrollumgebung und vorausschauende Compliance-Steuerung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Frühzeitige Erkennung von Compliance-Schwachstellen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Transparente Statusberichte für Management und Aufsicht'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effiziente Eskalationsprozesse bei Abweichungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachvollziehbare Compliance-Historie für Prüfungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'MaRisk Überwachung & Reporting',
        description: 'MaRisk-Compliance ist kein einmaliges Projekt, sondern ein kontinuierlicher Prozess. Unsere Überwachungs- und Reportinglösungen stellen sicher, dass Ihr Institut stets die aktuellen aufsichtsrechtlichen Anforderungen erfüllt und Compliance-Risiken proaktiv steuert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung maßgeschneiderter MaRisk-KPIs und Überwachungsmetriken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung automatisierter Monitoring-Prozesse und Frühwarnsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Erstellung aussagekräftiger Management- und Aufsichtsberichte'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Dokumentation von Compliance-Abweichungen und Maßnahmenverfolgung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Unterstützung bei aufsichtsrechtlicher Kommunikation und Prüfungsvorbereitung'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Ein effektives MaRisk-Monitoring sollte nicht nur reaktiv Compliance-Verstöße erfassen, sondern proaktiv potenzielle Risikobereiche identifizieren. Kombinieren Sie quantitative Metriken mit qualitativen Bewertungen für ein umfassendes Compliance-Bild.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in regulatorischen Anforderungen und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Monitoring-Frameworks für verschiedene Institutsgrößen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Erfahrung mit verschiedenen Reporting-Tools und GRC-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz mit Fokus auf Effizienzsteigerung'
            }
          ]
        },
        additionalInfo: 'Compliance-Risiken entwickeln sich ständig weiter – durch regulatorische Änderungen, neue Geschäftsaktivitäten oder veränderte Marktbedingungen. Ein strukturiertes MaRisk-Monitoring ermöglicht es Ihnen, diese Risiken frühzeitig zu erkennen und angemessen zu steuern.',
        serviceDescription: 'Wir bieten ein umfassendes Leistungsspektrum zur kontinuierlichen Überwachung und zum Reporting Ihrer MaRisk-Compliance. Unsere Lösungen sind skalierbar und können an die spezifischen Anforderungen Ihres Instituts angepasst werden.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Design von MaRisk-Compliance-Dashboards'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Implementierung automatisierter Überwachungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung von Management- und Aufsichtsberichten'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Unterstützung bei der Maßnahmenverfolgung und -dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Beratung zur Optimierung bestehender Reporting-Prozesse'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir implementieren einen strukturierten Ansatz zur Überwachung und zum Reporting Ihrer MaRisk-Compliance, der auf bewährten Methoden basiert und gleichzeitig Ihre spezifischen Anforderungen berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der bestehenden Überwachungs- und Berichtsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Definition relevanter KPIs und Eskalationsschwellen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Konzeption angepasster Monitoring-Frameworks und Reportingstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung und Integration in bestehende Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Schulung der Mitarbeiter und kontinuierliche Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Alexander Berger',
        position: 'Senior Manager',
        quote: 'Mit dem von ADVISORI implementierten MaRisk-Monitoring haben wir jederzeit einen aktuellen Überblick über unseren Compliance-Status. Die aussagekräftigen Berichte ermöglichen es uns, potenzielle Risikobereiche frühzeitig zu identifizieren und proaktiv zu adressieren. Das stärkt nicht nur unsere Compliance-Position, sondern schafft auch Vertrauen bei unseren Stakeholdern.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'MaRisk-Compliance Dashboards',
          description: 'Entwicklung maßgeschneiderter Dashboards zur Visualisierung Ihres MaRisk-Compliance-Status in Echtzeit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Übersichtliche Darstellung von Compliance-KPIs und Schwellenwerten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Integrierte Frühwarnindikatoren für potenzielle Risikobereiche'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Drill-Down-Funktionalität für detaillierte Analysen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Automatisierte Aktualisierung und Benachrichtigungsfunktionen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Management- und Aufsichtsberichte',
          description: 'Erstellung aussagekräftiger Berichte für verschiedene Stakeholder, die den Status der MaRisk-Compliance transparent darstellen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Adressatengerechte Berichtsformate für Management, Aufsichtsrat und Aufsichtsbehörden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Aggregation relevanter Compliance-Informationen und Trends'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Dokumentation von Maßnahmen und deren Umsetzungsstatus'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration mit bestehenden Risikomanagement-Berichten'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(mariskUeberwachungReportingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ MaRisk Überwachung & Reporting page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
