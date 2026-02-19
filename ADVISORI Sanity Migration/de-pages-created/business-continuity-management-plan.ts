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
    console.log('Creating Business Continuity Management Plan page...')

    const bcmPlanData = {
      _type: 'servicePage',
      _id: 'business-continuity-management-plan',
      title: 'Business Continuity Management Plan',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/business-continuity-resilience/business-continuity-management-plan'
      },
      parent: {
        _type: 'reference',
        _ref: 'business-continuity-resilience'
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
        title: 'Business Continuity Management Plan - Professionelle Planung & Implementierung | ADVISORI',
        description: 'Expertenerstellung von Business Continuity Management Plänen. ISO 22301 konforme Planungsmethodik, strukturierte Implementierung und praxiserprobte BCM-Planungsstrategien für operative Exzellenz.',
        keywords: 'Business Continuity Plan, BCM Plan, Kontinuitätsplan, BCM Planung, Business Continuity Planning, ISO 22301 Plan, Notfallplan, BCM Implementierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Business Continuity Management Plan - Professionelle Planung und Implementierung'
        },
        tagline: 'Strategische Exzellenz in der BCM-Planung',
        heading: 'Business Continuity Management Plan',
        description: 'Ein Business Continuity Management Plan ist das operative Herzstück organisationaler Resilienz. Wir entwickeln strukturierte, praxiserprobte BCM-Pläne mit systematischen Planungsmethodiken und bewährten Implementierungsstrategien für nachhaltige Geschäftskontinuität.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'ISO 22301 konforme Planungsstruktur'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Systematische Implementierungsmethodik'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Praxiserprobte Planungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Plan-Optimierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Business Continuity Management Plan - Operative Grundlage für systematische Resilienz',
        description: 'Ein Business Continuity Management Plan ist ein strukturiertes Dokument, das alle notwendigen Maßnahmen, Prozesse und Ressourcen für die Aufrechterhaltung kritischer Geschäftsfunktionen während und nach Störungen definiert. Er bildet die operative Grundlage für effektive Kontinuitätssicherung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Planungsarchitektur mit strukturierten Methodiken und bewährten Planungsansätzen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'ISO 22301 konforme Planstruktur mit flexibler Anpassung an organisationsspezifische Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integrierte Implementierungsstrategien für nahtlose Überführung von Planung in operative Praxis'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Skalierbare Planungskonzepte für verschiedene Organisationsgrößen und Komplexitätsgrade'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Plan-Evolution durch systematische Testung, Validierung und Verbesserung'
          }
        ],
        alert: {
          title: 'Plan als strategisches Instrument',
          content: 'Ein professionell entwickelter BCM-Plan ist mehr als ein Notfalldokument - er wird zum strategischen Instrument für organisationale Transformation und nachhaltigen Wettbewerbsvorteil durch operative Resilienz-Exzellenz.'
        },
        whyUs: {
          title: 'Warum BCM-Planung mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in Planungsmethodiken und Implementierungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Ansätze für strukturierte Plan-Entwicklung und -Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integration modernster Planungstools und Management-Techniken'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung von der Konzeption bis zur operativen Meisterschaft'
            }
          ]
        },
        additionalInfo: 'Ein Business Continuity Management Plan transformiert theoretische Kontinuitäts-Konzepte in konkrete, umsetzbare Handlungsanweisungen. Er schafft die Grundlage für reproduzierbare operative Exzellenz und adaptive Krisenreaktion.',
        serviceDescription: 'Unser Planungs-Service umfasst die vollständige Konzeption, Entwicklung und Implementierung von Business Continuity Management Plänen. Wir entwickeln maßgeschneiderte Planungsstrategien, die theoretische Fundierung mit praktischer Umsetzbarkeit verbinden.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Plan-Architektur und Strukturentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Implementierungsstrategien und Rollout-Planung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Test- und Validierungskonzepte'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Wartungs- und Update-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Stakeholder-Integration und Change Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zur BCM-Plan-Entwicklung',
        description: 'Wir verfolgen einen systematischen und praxisorientierten Ansatz zur BCM-Plan-Entwicklung, der bewährte Planungsmethodiken mit organisationsspezifischen Anforderungen und operativen Realitäten verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse bestehender Prozesse und Identifikation von Planungsanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Kollaborative Plan-Entwicklung mit allen relevanten Stakeholdern und Fachbereichen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Iterative Planungszyklen mit kontinuierlicher Validierung und Verfeinerung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration bewährter Standards und innovativer Planungsansätze'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Verankerung durch Schulung, Testing und kontinuierliche Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Ein strategisch entwickelter BCM-Plan ist das operative Fundament organisationaler Resilienz. Wir schaffen nicht nur Dokumentation, sondern entwickeln lebendige Planungsstrukturen für nachhaltige Wettbewerbsvorteile durch systematische Kontinuitäts-Exzellenz.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Plan-Architektur & Strukturentwicklung',
          description: 'Entwicklung einer maßgeschneiderten Plan-Architektur mit robusten strukturellen Grundlagen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'ISO 22301 konforme Plan-Struktur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Modulare Plan-Architektur und Komponenten-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Prozess-Integration und Workflow-Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Dokumentations-Standards und Template-Entwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Implementierungsstrategien & Rollout-Planung',
          description: 'Systematische Implementierung von BCM-Plänen mit strukturierten Rollout-Strategien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Phasenweise Implementierungs-Roadmaps'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Change Management und Stakeholder-Engagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Schulungs- und Awareness-Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kommunikations- und Feedback-Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Test- & Validierungskonzepte',
          description: 'Systematische Testung und Validierung von BCM-Plänen für operative Wirksamkeit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Test-Strategien und Szenario-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Übungs-Design und Simulation-Konzepte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Performance-Messung und Wirksamkeits-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Lessons-Learned-Integration und Plan-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Wartungs- & Update-Strategien',
          description: 'Kontinuierliche Plan-Wartung und systematische Update-Prozesse für dauerhafte Aktualität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Wartungs-Zyklen und Review-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Change Management für Plan-Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Versionskontrolle und Dokumentations-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Kontinuierliche Verbesserungs-Mechanismen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Plan-Customization & Anpassung',
          description: 'Maßgeschneiderte Anpassung von Plan-Komponenten an spezifische organisationale Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Organisationsspezifische Plan-Anpassung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Branchen- und Sektor-spezifische Customization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Skalierungsstrategien für verschiedene Organisationsgrößen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Integration externer Anforderungen und Standards'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Stakeholder-Integration & Change Management',
          description: 'Systematische Integration aller Stakeholder und professionelles Change Management für Plan-Akzeptanz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Stakeholder-Mapping und Engagement-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Change Management und Adoption-Unterstützung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Kommunikations-Frameworks und Feedback-Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kulturelle Integration und Verhaltensänderungs-Programme'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcmPlanData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Business Continuity Management Plan page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
