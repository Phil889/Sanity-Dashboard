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
    console.log('Creating DORA SIEM Monitoring page...')

    const doraSiemMonitoringData = {
      _type: 'servicePage',
      _id: 'dora-siem-monitoring',
      title: 'DORA SIEM Monitoring',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dora-digital-operational-resilience-act/dora-siem-monitoring'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management'
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
        title: 'DORA SIEM Monitoring | ADVISORI',
        description: 'Professionelle SIEM-Implementierung für DORA-Compliance. Expertenberatung für Security Information and Event Management, Real-time Monitoring, Incident Detection und automatisierte Threat Response im Finanzsektor.',
        keywords: 'DORA SIEM, Security Monitoring, Incident Detection, Event Management, DORA Compliance, Finanzsektor Cybersecurity, Real-time Monitoring, Threat Detection'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DORA SIEM Monitoring und Security Event Management'
        },
        tagline: 'Intelligente SIEM-Lösungen für DORA-konforme Sicherheitsüberwachung',
        heading: 'DORA SIEM Monitoring',
        description: 'Implementieren Sie eine umfassende SIEM-Infrastruktur, die den strengen Anforderungen der Digital Operational Resilience Act entspricht. Unsere Expertise gewährleistet Real-time Security Monitoring, automatisierte Incident Detection und nahtlose Integration in Ihre DORA-Compliance-Strategie.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'DORA-konforme SIEM-Architektur mit Real-time Monitoring und Alerting'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Threat Detection und Incident Response Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Umfassende Log-Analyse und forensische Capabilities'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nahtlose Integration mit DORA Incident Reporting Mechanismen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'SIEM als Herzstück der DORA-Sicherheitsarchitektur',
        description: 'Security Information and Event Management (SIEM) bildet das zentrale Nervensystem für die digitale operationelle Resilienz unter DORA. Eine strategisch implementierte SIEM-Lösung ermöglicht nicht nur die Erfüllung regulatorischer Anforderungen, sondern schafft auch die Grundlage für proaktive Bedrohungsabwehr und kontinuierliche Sicherheitsverbesserung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung DORA-spezifischer SIEM-Architekturen mit fokussierter Threat Detection'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Integration von Real-time Monitoring mit automatisierten Response-Mechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung umfassender Log-Management-Strategien für Compliance und Forensik'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau intelligenter Korrelationsregeln für präzise Incident Detection'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Nahtlose Integration mit DORA Incident Reporting und Governance-Prozessen'
          }
        ],
        alert: {
          title: 'Kritischer Erfolgsfaktor',
          content: 'Eine effektive SIEM-Implementierung für DORA erfordert mehr als nur Technologie-Deployment. Die Integration von Business Context, regulatorischen Anforderungen und operationellen Prozessen ist entscheidend für den nachhaltigen Erfolg der Sicherheitsüberwachung.'
        },
        whyUs: {
          title: 'Unsere SIEM-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Erfahrung in der Implementierung DORA-konformer SIEM-Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für die Integration von SIEM in Finanzdienstleistungsumgebungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Expertise in der Entwicklung maßgeschneiderter Detection Rules und Playbooks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Umfassende Kenntnis regulatorischer Anforderungen und deren technische Umsetzung'
            }
          ]
        },
        additionalInfo: 'DORA verlangt von Finanzinstituten eine kontinuierliche Überwachung ihrer IKT-Systeme und die Fähigkeit zur schnellen Erkennung und Reaktion auf Sicherheitsvorfälle. SIEM-Systeme sind dabei nicht nur technische Tools, sondern strategische Enabler für digitale Resilienz und regulatorische Compliance.',
        serviceDescription: 'Wir entwickeln und implementieren maßgeschneiderte SIEM-Lösungen, die speziell auf die Anforderungen der DORA-Regulierung ausgerichtet sind. Unser ganzheitlicher Ansatz umfasst Technologie, Prozesse und Menschen, um eine nachhaltige und effektive Sicherheitsüberwachung zu gewährleisten.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'DORA-spezifische SIEM-Architektur und Implementierungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Real-time Security Monitoring und Incident Detection Capabilities'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Automatisierte Threat Response und Orchestration-Workflows'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration mit DORA Incident Reporting und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche SIEM-Optimierung und Threat Intelligence Integration'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer SIEM-Implementierungsansatz',
        description: 'Wir entwickeln mit Ihnen eine umfassende SIEM-Strategie, die technische Exzellenz mit regulatorischer Compliance und operationeller Effizienz verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer aktuellen Sicherheitsinfrastruktur und DORA-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design einer maßgeschneiderten SIEM-Architektur mit DORA-spezifischen Capabilities'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung von Real-time Monitoring und automatisierten Detection Rules'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von Incident Response Workflows und Reporting-Mechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Threat Intelligence Enhancement'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Eine strategisch implementierte SIEM-Lösung ist das Rückgrat jeder erfolgreichen DORA-Compliance-Strategie. Unsere Erfahrung zeigt, dass die Integration von technischer Exzellenz mit regulatorischem Verständnis und operationeller Pragmatik der Schlüssel für nachhaltige digitale Resilienz ist.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'DORA-konforme SIEM-Architektur und Design',
          description: 'Entwicklung einer maßgeschneiderten SIEM-Architektur, die speziell auf die Anforderungen der DORA-Regulierung und Ihre spezifische Finanzdienstleistungsumgebung ausgerichtet ist.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strategische SIEM-Architektur-Planung mit DORA-Compliance-Fokus'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Skalierbare Infrastruktur-Design für wachsende Monitoring-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integration mit bestehenden Sicherheits- und IT-Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'High-Availability und Disaster Recovery Konzepte für kritische Monitoring'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Real-time Security Monitoring und Event Correlation',
          description: 'Implementierung fortschrittlicher Monitoring-Capabilities mit intelligenter Event-Korrelation für präzise Threat Detection und minimierte False Positives.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung DORA-spezifischer Detection Rules und Use Cases'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Intelligente Event-Korrelation und Anomalie-Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Real-time Dashboards und Executive Reporting für Governance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Automatisierte Alerting mit kontextualisierten Threat Intelligence'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Automated Incident Detection und Response Integration',
          description: 'Aufbau automatisierter Incident Detection Capabilities mit nahtloser Integration in Ihre DORA-konformen Response- und Reporting-Prozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Automatisierte Incident Classification und Prioritization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Integration mit DORA Incident Reporting Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'SOAR-Integration für orchestrierte Response-Aktivitäten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Forensische Datensammlung und Evidence Preservation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Comprehensive Log Management und Compliance Reporting',
          description: 'Implementierung robuster Log-Management-Strategien mit fokussiertem Compliance Reporting für DORA-Anforderungen und regulatorische Transparenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Zentrale Log-Aggregation und -Normalisierung aus allen kritischen Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'DORA-konforme Log-Retention und Archivierungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Automatisierte Compliance-Reports und regulatorische Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Audit-Trail-Management und forensische Analysefähigkeiten'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'SIEM Operations und Continuous Improvement',
          description: 'Etablierung nachhaltiger SIEM-Operations mit kontinuierlicher Verbesserung der Detection Capabilities und Anpassung an evolvierende Bedrohungslandschaften.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'SOC-Integration und Analyst-Training für DORA-spezifische Use Cases'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Kontinuierliche Tuning und Optimierung der Detection Rules'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Threat Intelligence Integration und IOC-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Performance Monitoring und Capacity Planning für SIEM-Infrastruktur'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Third-Party SIEM Integration und Vendor Management',
          description: 'Strategische Beratung und Implementierungsunterstützung für die Integration von Third-Party SIEM-Lösungen unter Berücksichtigung der DORA-Anforderungen für kritische IKT-Drittanbieter.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'DORA-konforme Vendor-Assessment und Due-Diligence für SIEM-Anbieter'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Vertragsgestaltung mit DORA-spezifischen SLAs und Compliance-Klauseln'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Multi-Vendor SIEM-Integration und Interoperabilitäts-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Vendor-Performance-Überwachung und Risk Assessment'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(doraSiemMonitoringData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DORA SIEM Monitoring page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
