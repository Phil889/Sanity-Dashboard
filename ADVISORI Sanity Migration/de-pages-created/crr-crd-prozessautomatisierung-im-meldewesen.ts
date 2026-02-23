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
    console.log('Creating CRR/CRD Prozessautomatisierung im Meldewesen page...')

    const pageData = {
      _type: 'servicePage',
      _id: 'crr-crd-prozessautomatisierung-im-meldewesen',
      title: 'Prozessautomatisierung im Meldewesen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/crr-crd/crr-crd-implementation/crr-crd-prozessautomatisierung-im-meldewesen'
      },
      parent: {
        _type: 'reference',
        _ref: 'crr-crd-implementation'
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
        title: 'Prozessautomatisierung im Meldewesen | ADVISORI',
        description: 'Optimieren Sie Ihr regulatorisches Meldewesen durch intelligente Prozessautomatisierung. Wir unterstützen Sie bei der Effizienzsteigerung und Fehlerminimierung in regulatorischen Meldeprozessen.',
        keywords: 'Prozessautomatisierung, Meldewesen, CRR/CRD, Regulatorisches Reporting, Effizienzsteigerung, Automatisierung, Regulatory Reporting, Compliance Automation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Prozessautomatisierung im Meldewesen'
        },
        tagline: 'Effizienzsteigerung durch intelligente Automatisierung',
        heading: 'Prozessautomatisierung im Meldewesen',
        description: 'Automatisieren Sie komplexe regulatorische Meldeprozesse und minimieren Sie manuelle Eingriffe. Unsere maßgeschneiderten Lösungen zur Prozessautomatisierung im Meldewesen steigern die Effizienz, reduzieren Fehlerquellen und ermöglichen eine termingerechte Einreichung regulatorischer Meldungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Signifikante Zeitersparnis durch Automatisierung wiederkehrender Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Erhöhte Datenqualität und Reduzierung manueller Fehler'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Verbesserte Nachvollziehbarkeit und Auditfähigkeit von Meldeprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Ressourcenoptimierung und Fokussierung auf wertschöpfende Tätigkeiten'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Prozessautomatisierung im Meldewesen',
        description: 'Die Prozessautomatisierung im regulatorischen Meldewesen ist ein entscheidender Faktor für die Effizienzsteigerung und Fehlerminimierung bei der Erfüllung regulatorischer Anforderungen gemäß CRR/CRD. Durch den Einsatz moderner Technologien und intelligenter Workflow-Systeme transformieren wir manuelle, fehleranfällige Prozesse in automatisierte, zuverlässige Abläufe.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Identifikation und Analyse von Automatisierungspotenzialen im Meldewesen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Konzeption und Implementierung maßgeschneiderter Automatisierungslösungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration von Datenquellen und Meldeplattformen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung automatisierter Validierungs- und Plausibilisierungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Einrichtung automatisierter Kontroll- und Überwachungsmechanismen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die Prozessautomatisierung sollte nicht als reine Technologiefrage betrachtet werden. Eine erfolgreiche Automatisierung erfordert ein tiefes Verständnis regulatorischer Anforderungen und eine ganzheitliche Prozessbetrachtung, um nachhaltige Effizienzgewinne zu realisieren.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in regulatorischen Anforderungen und technologischen Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Methodik zur Identifikation und Realisierung von Automatisierungspotenzialen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Erfahrung in der Integration unterschiedlicher Systeme und Datenquellen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz, der Prozesse, Technologie und organisatorische Aspekte berücksichtigt'
            }
          ]
        },
        additionalInfo: 'Studien zeigen, dass durch intelligente Prozessautomatisierung im Meldewesen bis zu 70% der manuellen Tätigkeiten automatisiert werden können, was zu einer Reduzierung der Bearbeitungszeit um bis zu 50% und einer signifikanten Verbesserung der Datenqualität führt.',
        serviceDescription: 'Unsere Dienstleistungen zur Prozessautomatisierung im Meldewesen umfassen die gesamte Bandbreite von der Analyse und Konzeption bis zur Implementierung und kontinuierlichen Optimierung automatisierter Prozesse. Wir berücksichtigen dabei sowohl technologische als auch organisatorische Aspekte.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Prozessanalyse und Identifikation von Automatisierungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung von Automatisierungskonzepten und Lösungsarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung von Workflow-Systemen und RPA-Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration von Datenquellen und Reporting-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung und Wissenstransfer für nachhaltige Automatisierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und praxiserprobten Ansatz zur Prozessautomatisierung im regulatorischen Meldewesen, der auf Ihre spezifischen Anforderungen und Rahmenbedingungen zugeschnitten wird.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse bestehender Meldeprozesse und Identifikation von Automatisierungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Priorisierung von Automatisierungsinitiativen nach Aufwand und Nutzen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Konzeption automatisierter Prozesse und Auswahl geeigneter Technologien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung und Integration von Automatisierungslösungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Optimierung automatisierter Prozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Schmidt',
        position: 'Director Regulatory Technology',
        quote: 'Die Prozessautomatisierung im Meldewesen hat für unsere Kunden zu signifikanten Effizienzsteigerungen geführt. Durch die intelligente Automatisierung wiederkehrender Tätigkeiten konnten Bearbeitungszeiten drastisch reduziert und die Qualität der regulatorischen Meldungen verbessert werden. Unsere Kunden profitieren von einer höheren Prozesssicherheit und können ihre Ressourcen auf wertschöpfende Analysetätigkeiten konzentrieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Automatisierungspotenzialanalyse',
          description: 'Wir analysieren Ihre bestehenden Meldeprozesse und identifizieren Potenziale zur Automatisierung, die den größten Mehrwert für Ihr Unternehmen bieten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Prozessaufnahme und -analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation wiederkehrender und regelbasierter Tätigkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Bewertung von Automatisierungspotenzialen nach Aufwand und Nutzen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung einer Automatisierungs-Roadmap'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Implementierung von Automatisierungslösungen',
          description: 'Wir konzipieren und implementieren maßgeschneiderte Automatisierungslösungen, die auf Ihre spezifischen Anforderungen und Ihre bestehende Systemlandschaft zugeschnitten sind.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Konzeption automatisierter Prozesse und Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Auswahl und Integration geeigneter Technologien (RPA, Workflow-Systeme, APIs)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung und Implementierung von Automatisierungslösungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Testung und Qualitätssicherung automatisierter Prozesse'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(pageData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRR/CRD Prozessautomatisierung im Meldewesen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
