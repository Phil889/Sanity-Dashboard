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
    console.log('Creating DORA ISO 27001 Mapping page...')

    const doraIso27001MappingData = {
      _type: 'servicePage',
      _id: 'dora-iso-27001-mapping',
      title: 'DORA ISO 27001 Mapping',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dora-digital-operational-resilience-act/dora-iso-27001-mapping'
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
        title: 'DORA ISO 27001 Mapping & Integration | ADVISORI',
        description: 'Strategische Verknüpfung von DORA-Anforderungen mit ISO 27001 Controls. Expertenberatung zur optimalen Nutzung bestehender ISO 27001 Implementierungen für effiziente DORA-Compliance.',
        keywords: 'DORA ISO 27001 Mapping, Control Mapping, Gap-Analyse, Compliance Integration, Informationssicherheit, Digital Operational Resilience Act, ISO 27001 Controls'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DORA ISO 27001 Mapping und Integration'
        },
        tagline: 'Strategische Integration für maximale Compliance-Effizienz',
        heading: 'DORA ISO 27001 Mapping',
        description: 'Nutzen Sie Ihre bestehende ISO 27001 Implementierung optimal für die DORA-Compliance. Wir entwickeln präzise Mappings zwischen DORA-Anforderungen und ISO 27001 Controls und schaffen effiziente, integrierte Compliance-Frameworks.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematisches Mapping von DORA-Anforderungen auf ISO 27001 Controls'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Identifikation und Schließung von Compliance-Gaps zwischen beiden Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Optimierung bestehender ISO 27001 Prozesse für DORA-Konformität'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kosteneffiziente Nutzung vorhandener Sicherheitsinfrastruktur'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische Integration von DORA und ISO 27001',
        description: 'Die Verknüpfung von DORA-Anforderungen mit bestehenden ISO 27001 Implementierungen bietet erhebliche Synergien und Effizienzgewinne. Durch systematisches Mapping und gezielte Gap-Analysen können Organisationen ihre vorhandenen Investitionen in Informationssicherheit optimal für die neue regulatorische Landschaft nutzen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Detaillierte Analyse der Überschneidungen zwischen DORA-Anforderungen und ISO 27001 Controls'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Identifikation spezifischer DORA-Anforderungen ohne direkte ISO 27001 Entsprechung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung integrierter Governance-Strukturen für beide Compliance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Optimierung von Audit- und Überwachungsprozessen für Dual-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Harmonisierung von Dokumentations- und Berichtspflichten beider Standards'
          }
        ],
        alert: {
          title: 'Strategischer Vorteil',
          content: 'Organisationen mit etablierten ISO 27001 Implementierungen haben einen erheblichen Vorsprung bei der DORA-Umsetzung. Durch intelligentes Mapping können bis zu 70% der DORA-Anforderungen durch bestehende ISO 27001 Controls abgedeckt werden.'
        },
        whyUs: {
          title: 'Unsere Mapping-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnis beider Frameworks und deren praktischer Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für systematisches Control-Mapping und Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Erfahrung mit komplexen Compliance-Integrationen in Finanzinstituten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Pragmatische Ansätze zur Maximierung von Compliance-Synergien'
            }
          ]
        },
        additionalInfo: 'Die strategische Verknüpfung von DORA und ISO 27001 erfordert mehr als nur technisches Mapping. Es geht um die Entwicklung einer integrierten Sicherheits- und Compliance-Strategie, die beide Frameworks optimal nutzt und gleichzeitig die spezifischen Anforderungen des Finanzsektors berücksichtigt.',
        serviceDescription: 'Wir unterstützen Sie bei der systematischen Integration von DORA-Anforderungen in Ihre bestehende ISO 27001 Landschaft. Unser Ansatz maximiert Synergien, minimiert Redundanzen und schafft effiziente, integrierte Compliance-Prozesse.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Comprehensive DORA-ISO 27001 Control Mapping und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Integration bestehender ISO 27001 Prozesse in DORA-Compliance-Framework'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung harmonisierter Governance- und Überwachungsstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Optimierung von Audit- und Zertifizierungsprozessen für beide Standards'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Pflege und Aktualisierung der Mapping-Strukturen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Mapping-Ansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte Strategie zur optimalen Integration von DORA-Anforderungen in Ihre bestehende ISO 27001 Landschaft.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer aktuellen ISO 27001 Implementierung und Reifegrad'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Detailliertes Mapping von DORA-Anforderungen auf bestehende ISO 27001 Controls'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Identifikation und Bewertung von Compliance-Gaps und Erweiterungsbedarfen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung integrierter Implementierungs- und Überwachungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung der integrierten Compliance-Landschaft'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die strategische Verknüpfung von DORA und ISO 27001 ist ein Schlüssel zur effizienten Compliance-Umsetzung. Durch intelligentes Mapping können Organisationen ihre bestehenden Sicherheitsinvestitionen optimal nutzen und gleichzeitig die spezifischen Anforderungen der Finanzregulierung erfüllen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'DORA-ISO 27001 Control Mapping und Gap-Analyse',
          description: 'Systematische Verknüpfung von DORA-Anforderungen mit ISO 27001 Controls zur Identifikation von Synergien und Compliance-Lücken.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse aller DORA-Anforderungen und deren ISO 27001 Entsprechungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung der Abdeckungsgrade und Identifikation von Compliance-Gaps'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Priorisierung von Erweiterungs- und Anpassungsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung einer integrierten Compliance-Roadmap'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Integrierte Governance-Framework-Entwicklung',
          description: 'Aufbau harmonisierter Governance-Strukturen, die sowohl DORA- als auch ISO 27001 Anforderungen effizient erfüllen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Design integrierter Governance-Strukturen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Harmonisierung von Richtlinien und Verfahren beider Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung einheitlicher Berichts- und Überwachungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration von Risikomanagement-Ansätzen beider Standards'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Dokumentations- und Prozessharmonisierung',
          description: 'Optimierung bestehender ISO 27001 Dokumentation und Prozesse zur gleichzeitigen Erfüllung von DORA-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Anpassung bestehender ISO 27001 Dokumentation für DORA-Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Entwicklung integrierter Verfahrensanweisungen und Arbeitsanweisungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Harmonisierung von Incident-Response und Business-Continuity-Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Optimierung von Audit- und Review-Zyklen für beide Standards'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Technische Integration und Automatisierung',
          description: 'Technische Verknüpfung von ISO 27001 und DORA-Compliance-Prozessen durch Automatisierung und integrierte Monitoring-Systeme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Integration bestehender ISO 27001 Monitoring-Tools für DORA-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Automatisierung von Compliance-Reporting für beide Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Entwicklung einheitlicher Dashboards und KPI-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Implementierung integrierter Audit-Trail und Evidence-Collection'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Audit-Optimierung und Zertifizierungsunterstützung',
          description: 'Strategische Planung und Durchführung von Audits zur gleichzeitigen Validierung von ISO 27001 und DORA-Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Entwicklung integrierter Audit-Strategien und -Pläne'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Vorbereitung auf kombinierte ISO 27001 und DORA-Assessments'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Optimierung von Evidence-Collection für beide Compliance-Bereiche'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Unterstützung bei der Kommunikation mit Auditoren und Aufsichtsbehörden'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Kontinuierliche Compliance-Optimierung',
          description: 'Langfristige Betreuung und Optimierung der integrierten DORA-ISO 27001 Compliance-Landschaft.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Regelmäßige Reviews und Updates der Control-Mappings'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Anpassung an regulatorische Entwicklungen beider Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Kontinuierliche Verbesserung der integrierten Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategische Beratung zur Weiterentwicklung der Compliance-Architektur'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(doraIso27001MappingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DORA ISO 27001 Mapping page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
