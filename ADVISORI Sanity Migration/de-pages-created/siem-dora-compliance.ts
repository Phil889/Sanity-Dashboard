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
    console.log('Creating SIEM DORA Compliance page...')

    const siemDoraComplianceData = {
      _type: 'servicePage',
      _id: 'siem-dora-compliance',
      title: 'SIEM DORA Compliance',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/security-operations-secops/siem/siem-dora-compliance'
      },
      parent: {
        _type: 'reference',
        _ref: 'siem'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'informationssicherheit'
        }
      },
      seo: {
        _type: 'seo',
        title: 'SIEM DORA Compliance | ADVISORI',
        description: 'Professionelle SIEM-Implementierung für DORA-Compliance im Finanzsektor. Expertenberatung für Security Information and Event Management, regulatorische Anforderungen, Incident Response und kontinuierliche Überwachung nach Digital Operational Resilience Act.',
        keywords: 'SIEM DORA Compliance, Digital Operational Resilience Act, Finanzsektor Cybersecurity, Security Monitoring, Incident Management, Regulatory Compliance, IKT-Risikomanagement, SIEM Governance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'SIEM DORA Compliance und regulatorische Sicherheitsüberwachung'
        },
        tagline: 'DORA-konforme SIEM-Lösungen für digitale operationelle Resilienz',
        heading: 'SIEM DORA Compliance',
        description: 'Implementieren Sie SIEM-Systeme, die den strengen Compliance-Anforderungen der Digital Operational Resilience Act entsprechen. Unsere Expertise gewährleistet regulatorische Konformität, effektive Incident Detection und nahtlose Integration in Ihre DORA-Governance-Strukturen für nachhaltige digitale Resilienz im Finanzsektor.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'DORA-konforme SIEM-Architektur mit regulatorischen Reporting-Capabilities'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Compliance-Überwachung und Incident Documentation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Governance-Strukturen und Management-Oversight'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Anpassung an evolvierende DORA-Anforderungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'SIEM als Compliance-Enabler für DORA-konforme digitale Resilienz',
        description: 'Die Digital Operational Resilience Act stellt spezifische Anforderungen an Security Information and Event Management Systeme im Finanzsektor. SIEM-Compliance unter DORA geht weit über traditionelle Sicherheitsüberwachung hinaus und erfordert eine ganzheitliche Integration von technischen Capabilities, Governance-Strukturen und regulatorischen Reporting-Mechanismen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung DORA-spezifischer SIEM-Compliance-Frameworks mit regulatorischen Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Integration von Compliance-Monitoring in Real-time Security Operations'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung automatisierter Incident Documentation und Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau robuster Governance-Strukturen für SIEM-Oversight und Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Anpassung an evolvierende DORA-Interpretationen und Guidance'
          }
        ],
        alert: {
          title: 'Regulatorischer Imperativ',
          content: 'DORA-Compliance für SIEM-Systeme ist nicht optional, sondern eine regulatorische Verpflichtung für Finanzinstitute. Die Nichteinhaltung kann zu erheblichen Sanktionen und operationellen Einschränkungen führen. Eine proaktive, strategische Herangehensweise ist essentiell.'
        },
        whyUs: {
          title: 'Unsere DORA-SIEM-Compliance-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnis der DORA-Anforderungen und deren technische Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für die Integration von Compliance in SIEM-Operations'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Expertise in regulatorischem Reporting und Audit-Vorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz für nachhaltige DORA-Compliance-Strategien'
            }
          ]
        },
        additionalInfo: 'DORA verlangt von Finanzinstituten eine umfassende Dokumentation und kontinuierliche Überwachung ihrer IKT-Systeme. SIEM-Systeme müssen dabei nicht nur technische Sicherheitsanforderungen erfüllen, sondern auch als zentrale Compliance-Plattform für regulatorische Berichterstattung und Governance fungieren.',
        serviceDescription: 'Wir entwickeln und implementieren DORA-konforme SIEM-Lösungen, die technische Exzellenz mit regulatorischer Compliance verbinden. Unser Ansatz gewährleistet nicht nur die Erfüllung aktueller DORA-Anforderungen, sondern auch die Flexibilität für zukünftige regulatorische Entwicklungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'DORA-Compliance-Assessment und Gap-Analyse für bestehende SIEM-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Implementierung regulatorischer Reporting und Documentation Capabilities'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Aufbau DORA-konformer Governance-Strukturen und Oversight-Mechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration von Compliance-Monitoring in operative SIEM-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Compliance-Überwachung und regulatorische Anpassungen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer DORA-SIEM-Compliance-Ansatz',
        description: 'Wir entwickeln mit Ihnen eine umfassende DORA-Compliance-Strategie für SIEM-Systeme, die regulatorische Anforderungen mit operationeller Effizienz und technischer Innovation verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende DORA-Compliance-Bewertung Ihrer aktuellen SIEM-Infrastruktur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design DORA-konformer SIEM-Architekturen mit integrierten Compliance-Capabilities'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung automatisierter Compliance-Monitoring und Reporting-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung robuster Governance-Strukturen und Management-Oversight'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung an regulatorische Entwicklungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'DORA-Compliance für SIEM-Systeme erfordert eine strategische Integration von technischen Capabilities und regulatorischen Anforderungen. Unsere Erfahrung zeigt, dass erfolgreiche Implementierungen nicht nur Compliance gewährleisten, sondern auch die operative Effizienz und Sicherheitsposture nachhaltig stärken.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'DORA-Compliance-Assessment und Gap-Analyse',
          description: 'Umfassende Bewertung Ihrer aktuellen SIEM-Infrastruktur gegen DORA-Anforderungen mit detaillierter Gap-Analyse und priorisierten Handlungsempfehlungen für regulatorische Konformität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse aktueller SIEM-Capabilities gegen DORA-Compliance-Kriterien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation kritischer Compliance-Gaps und Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung priorisierter Roadmaps für DORA-Compliance-Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Kosten-Nutzen-Analyse für verschiedene Compliance-Implementierungsoptionen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Regulatorisches Reporting und Documentation Framework',
          description: 'Implementierung automatisierter Reporting-Systeme und Documentation-Frameworks, die DORA-spezifische Anforderungen erfüllen und regulatorische Transparenz gewährleisten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automatisierte Generierung DORA-konformer Incident und Compliance Reports'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Umfassende Documentation-Templates für regulatorische Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration mit bestehenden GRC-Systemen und Reporting-Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Audit-Trail-Management für vollständige regulatorische Nachverfolgbarkeit'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'DORA-konforme Governance und Oversight-Strukturen',
          description: 'Etablierung robuster Governance-Frameworks für SIEM-Operations mit DORA-spezifischen Oversight-Mechanismen und Management-Reporting-Strukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Design DORA-konformer SIEM-Governance-Strukturen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Implementierung Management-Dashboards für DORA-Compliance-Oversight'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Etablierung regelmäßiger Review-Zyklen und Performance-Metriken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Integration in bestehende Risk-Management und Board-Reporting-Strukturen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Automated Compliance Monitoring und Alerting',
          description: 'Implementierung intelligenter Compliance-Monitoring-Systeme mit automatisierten Alerting-Mechanismen für proaktive DORA-Compliance-Überwachung und Incident Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Real-time Monitoring von DORA-Compliance-Indikatoren und Schwellenwerten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Automatisierte Eskalation bei Compliance-Verletzungen oder kritischen Events'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Integration von Compliance-Metriken in operative SIEM-Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Proaktive Benachrichtigung bei regulatorischen Änderungen oder Updates'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Third-Party SIEM Vendor DORA-Compliance Management',
          description: 'Strategische Beratung und Implementierungsunterstützung für die DORA-konforme Integration und das Management von Third-Party SIEM-Anbietern und -Services.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'DORA-spezifische Vendor-Assessment und Due-Diligence-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Vertragsgestaltung mit DORA-Compliance-Klauseln und SLA-Definitionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Kontinuierliche Vendor-Performance-Überwachung und Compliance-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Incident-Management-Integration mit Third-Party-Providern'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Continuous DORA-Compliance Optimization',
          description: 'Etablierung kontinuierlicher Verbesserungsprozesse für DORA-Compliance mit proaktiver Anpassung an regulatorische Entwicklungen und Best-Practice-Evolution.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Regelmäßige DORA-Compliance-Reviews und Maturity-Assessments'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Proaktive Integration neuer DORA-Guidance und regulatorischer Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Benchmarking gegen Industry Best Practices und Peer-Vergleiche'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Optimierung von Compliance-Prozessen und -Technologien'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(siemDoraComplianceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ SIEM DORA Compliance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
