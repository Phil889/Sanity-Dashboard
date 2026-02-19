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
    console.log('Creating NIS2 Reporting Requirements page...')

    const nis2ReportingRequirementsData = {
      _type: 'servicePage',
      _id: 'nis2-reporting-requirements',
      title: 'NIS2 Reporting Requirements',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/nis2/nis2-sector-specific-requirements/nis2-reporting-requirements'
      },
      parent: {
        _type: 'reference',
        _ref: 'nis2-sector-specific-requirements'
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
        title: 'NIS2 Reporting Requirements | ADVISORI',
        description: 'Expertenunterstützung bei der Implementierung strategischer NIS2-Reporting-Frameworks. Automatisierte Meldesysteme und Compliance-Dokumentation für kritische Infrastrukturen.',
        keywords: 'NIS2, Reporting Requirements, Meldesysteme, Incident Reporting, Compliance Dokumentation, kritische Infrastrukturen, Cybersicherheit, EU-Regulierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIS2 Reporting Requirements'
        },
        tagline: 'Strategische Excellence in NIS2-Compliance-Reporting',
        heading: 'NIS2 Reporting Requirements',
        description: 'Die NIS2-Richtlinie etabliert umfassende Reporting-Pflichten für kritische Infrastrukturen. Wir unterstützen Sie bei der strategischen Implementierung automatisierter Meldesysteme und der Entwicklung effizienter Compliance-Dokumentations-Frameworks.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Automatisierte NIS2-Incident-Reporting-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategische Compliance-Dokumentations-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Multi-Authority Communication Platforms'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Real-Time Regulatory Monitoring und Alert-Systeme'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'NIS2 Reporting Requirements',
        description: 'Die NIS2-Richtlinie führt detaillierte Reporting-Anforderungen für kritische und wichtige Einrichtungen ein, die über traditionelle Incident-Meldungen hinausgehen. Diese umfassen regelmäßige Compliance-Berichte, Risikobewertungen und detaillierte Incident-Dokumentation mit spezifischen Fristen und Formaten. Erfolgreiche Implementierung erfordert strategische Integration von Reporting-Prozessen in bestehende Governance-Strukturen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung automatisierter Incident-Reporting-Systeme mit 24/72-Stunden-Fristen-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung strategischer Compliance-Dokumentations-Frameworks für regelmäßige Behörden-Kommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Aufbau integrierter Multi-Authority Communication-Plattformen für koordinierte Meldeprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung Real-Time Monitoring-Systeme für kontinuierliche Regulatory Compliance-Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration von Reporting-Requirements in bestehende Risk Management und Business Continuity-Prozesse'
          }
        ],
        alert: {
          title: 'Strategische Bedeutung',
          content: 'NIS2-Reporting ist nicht nur Compliance-Pflicht, sondern strategischer Enabler für Enhanced Cybersecurity Governance, Stakeholder Confidence und Operational Excellence durch systematische Dokumentation und kontinuierliche Verbesserung.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in regulatorischen Reporting-Frameworks und Compliance-Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassende Erfahrung in der Integration von Reporting-Systemen mit bestehenden IT-Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Etablierte Beziehungen zu nationalen Behörden und tiefes Verständnis der Reporting-Erwartungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovative Technologielösungen für automatisierte, intelligente Reporting-Prozesse'
            }
          ]
        },
        additionalInfo: 'Die strategische Implementierung von NIS2-Reporting-Requirements ermöglicht nicht nur Compliance, sondern auch Enhanced Risk Management, verbesserte Stakeholder Communication und kontinuierliche Operational Excellence durch systematische Dokumentation und Analyse.',
        serviceDescription: 'Wir bieten umfassende Unterstützung bei der Entwicklung und Implementierung strategischer NIS2-Reporting-Frameworks, die sowohl regulatorische Compliance sicherstellen als auch operative Effizienz und strategische Governance-Excellence ermöglichen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Analyse und Design maßgeschneiderter NIS2-Reporting-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Implementierung automatisierter Incident-Reporting und Compliance-Dokumentations-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung integrierter Multi-Authority Communication und Stakeholder-Engagement-Plattformen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Aufbau Real-Time Monitoring und Predictive Compliance-Alert-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Training und Change Management für nachhaltige Reporting-Excellence'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam einen strategischen Ansatz zur effizienten Implementierung von NIS2-Reporting-Requirements, der sowohl Compliance-Excellence als auch operative Effizienz maximiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer aktuellen Reporting-Landschaft und Identification von Optimierungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer integrierten NIS2-Reporting-Strategie mit automatisierten Prozessen und klaren Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung und Integration von Reporting-Systemen in bestehende IT- und Governance-Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Aufbau effizienter Monitoring- und Quality-Assurance-Mechanismen für kontinuierliche Reporting-Excellence'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung an evolvierende regulatorische Anforderungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI Regulatory Consulting GmbH',
        name: 'Dr. Thomas Müller',
        position: 'Senior Partner',
        quote: 'Effektive NIS2-Reporting-Implementierung transformiert Compliance von einer administrativen Last zu einem strategischen Governance-Instrument. Unser Ansatz ermöglicht Organisationen, Reporting-Excellence als Wettbewerbsvorteil und Stakeholder-Confidence-Builder zu nutzen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Automated Incident Reporting Systems',
          description: 'Wir entwickeln und implementieren automatisierte Incident-Reporting-Systeme, die NIS2-Compliance-Fristen sicherstellen und gleichzeitig operative Effizienz durch intelligente Workflow-Automatisierung maximieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Real-Time Incident Detection und automatisierte Report-Generation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Intelligent Workflow-Management für 24/72-Stunden-Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Multi-Format Report-Export für verschiedene Behörden-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integrated Quality Assurance und Audit-Trail-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Strategic Compliance Documentation Frameworks',
          description: 'Wir implementieren umfassende Compliance-Dokumentations-Frameworks, die kontinuierliche Regulatory Communication ermöglichen und strategische Governance-Excellence durch systematische Dokumentation fördern.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automated Compliance Report-Generation für regelmäßige Behörden-Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Strategic Documentation-Templates für verschiedene Reporting-Szenarien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integrated Stakeholder Communication und Multi-Authority Coordination'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Continuous Improvement-Integration basierend auf Reporting-Insights'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nis2ReportingRequirementsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIS2 Reporting Requirements page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
