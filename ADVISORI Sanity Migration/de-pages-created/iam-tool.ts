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
    console.log('Creating IAM Tool page...')

    const iamToolData = {
      _type: 'servicePage',
      _id: 'iam-tool',
      title: 'IAM Tool - Identity & Access Management Werkzeuge',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-tool'
      },
      parent: {
        _type: 'reference',
        _ref: 'identity-access-management-iam'
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
        title: 'IAM Tool Auswahl & Implementierung | ADVISORI',
        description: 'Professionelle IAM Tool Beratung: Evaluierung, Auswahl und Implementierung der optimalen Identity & Access Management Werkzeuge für maximale Sicherheit und Effizienz.',
        keywords: 'IAM Tool, Identity Access Management Tools, IAM Werkzeuge, IAM Utilities, Identity Management Tools, Access Management Tools, IAM Beratung, Enterprise IAM Tools, Cloud IAM Tools'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Tool Identity Access Management Werkzeuge'
        },
        tagline: 'Die richtigen IAM Tools für effiziente Identitätsverwaltung',
        heading: 'IAM Tool - Identity & Access Management Werkzeuge',
        description: 'Die Auswahl und der Einsatz der richtigen IAM Tools ist entscheidend für die Effizienz und Sicherheit Ihrer Identitätsverwaltung. Wir unterstützen Sie bei der systematischen Evaluierung, strategischen Auswahl und professionellen Implementierung der optimalen IAM Werkzeuge für Ihre spezifischen Anforderungen und Sicherheitsziele.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende IAM Tool Evaluierung und Vergleichsanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategische Tool-Auswahl basierend auf Sicherheits- und Effizienzkriterien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Professionelle Implementierung mit optimaler Tool-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Optimierung und Tool-Lifecycle-Management'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'IAM Tools: Strategische Werkzeuge für moderne Identitätsverwaltung',
        description: 'Die IAM Tool Landschaft umfasst eine Vielzahl spezialisierter Werkzeuge für unterschiedlichste Identity-Management-Aufgaben - von Provisioning-Tools bis hin zu Analytics-Plattformen. Die richtige Tool-Auswahl erfordert eine systematische Evaluierung, die funktionale Anforderungen, Sicherheitsaspekte, Integrationsfähigkeiten und operative Effizienz gleichermaßen berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Tool-Kategorisierung und Funktionsanalyse für IAM-Bereiche'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Strukturierte Anforderungsanalyse und Tool-Mapping für spezifische Use Cases'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Proof-of-Concept Durchführung mit realistischen Identity-Workflows'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration-Assessment und Kompatibilitätsanalyse für bestehende Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Tool-Orchestrierung und Workflow-Optimierung für maximale Effizienz'
          }
        ],
        alert: {
          title: 'Kritischer Effizienzfaktor',
          content: 'IAM Tools bestimmen maßgeblich die Effizienz und Sicherheit Ihrer Identity-Prozesse. Eine fundierte Tool-Auswahl und professionelle Integration sind entscheidend für operative Exzellenz und die Einhaltung von Compliance-Anforderungen.'
        },
        whyUs: {
          title: 'Unsere IAM Tool Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung mit allen führenden IAM Tool-Kategorien und Anbietern'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Beratung für objektive Tool-Empfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methodiken für Tool-Evaluierung und Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'End-to-End Begleitung von der Tool-Strategie bis zum operativen Betrieb'
            }
          ]
        },
        additionalInfo: 'Moderne IAM Tools unterscheiden sich erheblich in ihren Spezialisierungen, Architekturen und Integrationsmöglichkeiten. Cloud-native Tools bieten andere Vorteile als traditionelle Enterprise-Lösungen, während spezialisierte Utilities oft die beste Performance für spezifische Aufgaben liefern.',
        serviceDescription: 'Wir begleiten Sie durch den gesamten IAM Tool Lifecycle - von der initialen Bedarfsanalyse über die strukturierte Evaluierung bis hin zur erfolgreichen Implementierung und kontinuierlichen Optimierung. Unser herstellerunabhängiger Ansatz gewährleistet objektive Empfehlungen, die ausschließlich Ihren Effizienz- und Sicherheitsinteressen dienen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'IAM Tool Marktanalyse und Kategorisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Anforderungsanalyse und Tool-Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Proof-of-Concept Design und Tool-Testing'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Tool-Implementierung und System-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Tool-Orchestrierung und Continuous Improvement'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer IAM Tool Auswahlprozess',
        description: 'Wir verfolgen einen strukturierten, effizienzfokussierten Ansatz für die IAM Tool Auswahl, der technische Exzellenz mit höchsten Sicherheits- und Usability-Standards optimal kombiniert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer IAM-Prozesse und Tool-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strukturierte Tool-Kategorisierung und Feature-Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Realistische Proof-of-Concept Durchführung mit Ihren Workflows'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Professionelle Implementierung mit bewährten Integrations-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Tool-Performance-Monitoring'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die IAM Tool Auswahl ist eine der kritischsten Entscheidungen für die operative Effizienz der Identitätsverwaltung. Professionelle Tool-Evaluierung, die sowohl technische Exzellenz als auch Sicherheitsanforderungen berücksichtigt, ist der Schlüssel für nachhaltigen Erfolg. Unsere Erfahrung zeigt, dass die richtigen IAM Tools nicht nur die Sicherheitslage verbessern, sondern auch die Produktivität der gesamten IT-Organisation revolutionieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'IAM Tool Marktanalyse und Kategorisierung',
          description: 'Umfassende Analyse des IAM Tool Marktes mit systematischer Kategorisierung und objektiver Bewertung verfügbarer Werkzeuge.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematische Tool-Kategorisierung nach Funktionsbereichen und Use Cases'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Detaillierte Feature-Matrix und Capabilities-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Marktpositionierung und Vendor-Landscape-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Technology-Roadmap und Future-Readiness-Assessment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'IAM Tool Anforderungsanalyse und Mapping',
          description: 'Strukturierte Erfassung und Dokumentation aller funktionalen und technischen Anforderungen an IAM Tools.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Umfassende Business Requirements Analyse für IAM-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Technische Spezifikationen und Architektur-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration-Requirements und Kompatibilitäts-Kriterien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Performance und Skalierbarkeits-Anforderungen für Tool-Einsatz'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'IAM Tool Proof-of-Concept und Testing',
          description: 'Professionelle Durchführung von Proof-of-Concept Tests mit realistischen IAM-Workflows und Bewertungskriterien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Strukturierte PoC-Planung mit definierten Test-Szenarien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Realistische Testumgebung mit Ihren IAM-Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Performance-Testing und Usability-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Objektive Bewertung und Tool-Vergleichsanalyse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'IAM Tool Auswahl und Entscheidungsunterstützung',
          description: 'Systematische Entscheidungsunterstützung mit objektiven Bewertungskriterien und strategischen Empfehlungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Multi-Kriterien-Bewertung mit gewichteten Scoring-Modellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'TCO-Analyse und ROI-Bewertung für verschiedene Tool-Optionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Risikobewertung und Mitigation-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Strategische Empfehlungen und Entscheidungsvorlagen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'IAM Tool Implementierung und Integration',
          description: 'Professionelle Implementierung der ausgewählten IAM Tools mit optimaler Integration in bestehende IT-Infrastrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Detaillierte Implementierungsplanung und Projektmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Tool-Installation und Konfiguration nach Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Integration mit bestehenden IAM- und IT-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Testing, Validierung und Go-Live Unterstützung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'IAM Tool Optimierung und Lifecycle-Management',
          description: 'Kontinuierliche Optimierung und professionelles Lifecycle-Management für maximale Tool-Effizienz und Performance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Tool-Performance-Monitoring und kontinuierliche Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Regelmäßige Tool-Health-Checks und Efficiency-Audits'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Update-Management und Tool-Roadmap-Planung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Managed Tool Services und Operational Support'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamToolData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Tool page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
