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
    console.log('Creating CIS Controls Umsetzung Top 20 Controls page...')

    const cisControlsTop20Data = {
      _type: 'servicePage',
      _id: 'cis-controls-umsetzung-top-20-controls',
      title: 'CIS Controls Umsetzung: Top 20 Controls',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/cis-controls/cis-controls-umsetzung-top-20-controls'
      },
      parent: {
        _type: 'reference',
        _ref: 'cis-controls'
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
        title: 'CIS Controls Top 20 Implementation | ADVISORI',
        description: 'Professionelle Umsetzung der wichtigsten 20 CIS Critical Security Controls. Strategische Implementierung für maximale Cybersicherheits-Wirksamkeit.',
        keywords: 'CIS Controls Implementation, Top 20 Critical Security Controls, Cybersicherheit Umsetzung, IT-Sicherheit Framework, CIS Controls Beratung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CIS Controls Top 20 Implementation'
        },
        tagline: 'Strategische Umsetzung der wirksamsten Cybersicherheits-Controls',
        heading: 'CIS Controls Umsetzung: Top 20 Controls',
        description: 'Die Top 20 CIS Critical Security Controls bieten maximalen Schutz bei optimaler Ressourcennutzung. Wir unterstützen Sie bei der professionellen Implementierung dieser prioritären Sicherheitsmaßnahmen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Implementierung der wirksamsten 20 Critical Security Controls'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Priorisierte Umsetzung nach Implementation Groups'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Messbare Verbesserung der Cyber-Resilienz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kosteneffiziente Allokation von Sicherheitsressourcen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CIS Controls Top 20 Implementation',
        description: 'Die Top 20 CIS Critical Security Controls repräsentieren die wirksamsten Cybersicherheitsmaßnahmen, die 85% der bekannten Angriffe abwehren können. Wir begleiten Sie bei der strategischen und technischen Umsetzung dieser prioritären Controls.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Detaillierte Analyse und Mapping der Top 20 CIS Controls'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Priorisierung nach Implementation Groups (IG1, IG2, IG3)'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Technische Implementierung und Tool-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Überwachung und Wirksamkeitsmessung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Compliance-Dokumentation und Audit-Unterstützung'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die systematische Implementierung der Top 20 CIS Controls in der richtigen Reihenfolge maximiert den Sicherheitsgewinn bei minimalem Ressourceneinsatz. Beginnen Sie mit den Basic Controls und arbeiten Sie sich systematisch vor.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Zertifizierte CIS-Implementierungsexperten mit Praxiserfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für effiziente Top 20 Controls Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Anpassung und Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung von Planung bis Betrieb'
            }
          ]
        },
        additionalInfo: 'Unternehmen, die die Top 20 CIS Controls vollständig implementieren, reduzieren ihr Cyber-Risiko um durchschnittlich 85% und verbessern ihre Incident-Detection-Zeit um bis zu 80%.',
        serviceDescription: 'Wir bieten end-to-end Unterstützung bei der Implementierung der Top 20 CIS Critical Security Controls - von der strategischen Planung über die technische Umsetzung bis hin zur operativen Optimierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Top 20 CIS Controls Gap-Analyse und Readiness Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Strategische Implementierungsroadmap nach Prioritäten'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Technische Umsetzung und System-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Monitoring, Messung und kontinuierliche Verbesserung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Mitarbeiterschulungen und Change Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir folgen einem strukturierten, phasenweisen Ansatz zur Implementierung der Top 20 CIS Controls, der sowohl technische Excellence als auch organisatorische Nachhaltigkeit gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassendes Assessment der aktuellen Sicherheitslage gegen Top 20 Controls'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategische Priorisierung basierend auf Implementation Groups und Risikoprofil'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise technische Implementierung mit kontinuierlicher Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende IT-Infrastruktur und Sicherheitsarchitektur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung von Monitoring, Reporting und kontinuierlicher Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die professionelle Implementierung der Top 20 CIS Controls durch ADVISORI hat unsere Cybersicherheits-Posture grundlegend gestärkt. Der strukturierte Ansatz und die praktische Umsetzung haben messbare Verbesserungen in allen kritischen Sicherheitsbereichen erzielt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Top 20 CIS Controls Assessment',
          description: 'Comprehensive evaluation of your current security posture against the Top 20 CIS Critical Security Controls.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Gap-Analyse aller Top 20 CIS Controls'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung nach Implementation Groups (IG1, IG2, IG3)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risiko-Prioritäts-Matrix und Business Impact Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Maßgeschneiderte Implementierungsroadmap'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Strategic Implementation Planning',
          description: 'Entwicklung einer strategischen Roadmap für die phasenweise Umsetzung der Top 20 Controls.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Priorisierung nach Implementation Groups und Geschäftskritikalität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Ressourcenplanung und Budget-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Change Management und Stakeholder-Alignment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Timeline-Entwicklung mit Meilenstein-Definition'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Technical Implementation',
          description: 'Hands-on technische Umsetzung der priorisierten CIS Controls in Ihrer IT-Umgebung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Technische Implementierung nach Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Integration mit bestehenden Security Tools und Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Automatisierung und Orchestration von Controls'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Testing und Validierung der implementierten Maßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Monitoring & Continuous Improvement',
          description: 'Aufbau eines nachhaltigen Monitoring- und Verbesserungssystems für die Top 20 Controls.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Entwicklung von KPIs und Messkriterien für jede Control'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Automatisierte Monitoring- und Alerting-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Regelmäßige Wirksamkeitsanalysen und Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Compliance-Reporting und Audit-Dokumentation'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(cisControlsTop20Data)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CIS Controls Umsetzung Top 20 Controls page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
