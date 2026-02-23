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
    console.log('Creating Business Continuity Management Framework page...')

    const bcmFrameworkData = {
      _type: 'servicePage',
      _id: 'business-continuity-management-framework',
      title: 'Business Continuity Management Framework',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/business-continuity-resilience/business-continuity-management-framework'
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
        title: 'Business Continuity Management Framework - Methodische Entwicklung & Architektur | ADVISORI',
        description: 'Professionelle Entwicklung von Business Continuity Management Frameworks. ISO 22301 konforme Methodiken, Framework-Architektur und maßgeschneiderte BCM-Strukturen für nachhaltige Resilienz.',
        keywords: 'Business Continuity Framework, BCM Framework, ISO 22301 Framework, BCM Methodologie, Framework Architektur, BCM Governance Framework, Kontinuitäts Framework, Resilienz Framework'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Business Continuity Management Framework - Methodische Entwicklung und Architektur'
        },
        tagline: 'Methodische Exzellenz in der Framework-Entwicklung',
        heading: 'Business Continuity Management Framework',
        description: 'Ein Business Continuity Management Framework bildet die methodische Grundlage für systematische Resilienz-Entwicklung. Wir entwickeln maßgeschneiderte BCM-Frameworks mit robusten Architektur-Prinzipien und bewährten Methodologien für nachhaltige organisationale Widerstandsfähigkeit.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'ISO 22301 konforme Framework-Methodologie'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Maßgeschneiderte Architektur-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Bewährte Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Adaptive Framework-Evolution'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Business Continuity Management Framework - Methodische Grundlage für systematische Resilienz',
        description: 'Ein Business Continuity Management Framework ist eine strukturierte Methodologie, die alle Aspekte der Kontinuitätsplanung in einem kohärenten Architektur-Ansatz vereint. Es definiert Standards, Prozesse und Governance-Strukturen für die systematische Entwicklung organisationaler Resilienz.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Methodische Framework-Architektur basierend auf bewährten Standards und Best Practices'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'ISO 22301 konforme Struktur mit flexibler Anpassung an organisationsspezifische Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integrierte Governance-Frameworks für strategische Ausrichtung und operative Exzellenz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Skalierbare Architektur-Prinzipien für verschiedene Organisationsgrößen und -komplexitäten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Framework-Evolution durch systematische Verbesserungs-Mechanismen'
          }
        ],
        alert: {
          title: 'Framework als strategisches Fundament',
          content: 'Ein professionell entwickeltes BCM-Framework ist mehr als eine Sammlung von Prozessen - es wird zum strategischen Fundament für organisationale Transformation und nachhaltigen Wettbewerbsvorteil durch methodische Resilienz-Exzellenz.'
        },
        whyUs: {
          title: 'Warum Framework-Entwicklung mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in Framework-Methodologien und Architektur-Prinzipien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Ansätze für maßgeschneiderte Framework-Entwicklung und -Anpassung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integration modernster Governance-Strukturen und Management-Methoden'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung von der Konzeption bis zur operativen Meisterschaft'
            }
          ]
        },
        additionalInfo: 'Ein Business Continuity Management Framework transformiert ad-hoc Kontinuitäts-Maßnahmen in eine systematische, methodenbasierte Disziplin. Es schafft die Grundlage für reproduzierbare Exzellenz und adaptive Organisationsentwicklung.',
        serviceDescription: 'Unser Framework-Service umfasst die vollständige Konzeption, Entwicklung und Implementierung von Business Continuity Management Frameworks. Wir entwickeln maßgeschneiderte Methodologien, die theoretische Fundierung mit praktischer Anwendbarkeit verbinden.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Framework-Architektur und Methodologie-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Governance-Strukturen und Policy-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Prozess-Integration und Workflow-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Maturity-Modelle und Entwicklungspfade'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Framework-Evolution und kontinuierliche Verbesserung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zur Framework-Entwicklung',
        description: 'Wir verfolgen einen systematischen und methodenbasierten Ansatz zur BCM-Framework-Entwicklung, der bewährte Architektur-Prinzipien mit organisationsspezifischen Anforderungen verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse bestehender Methodologien und Identifikation von Framework-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Co-Design von Framework-Architektur mit allen relevanten Stakeholdern'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Iterative Framework-Entwicklung mit kontinuierlicher Validierung und Verfeinerung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration bewährter Standards und innovativer Methodologie-Ansätze'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Verankerung durch Kompetenzentwicklung und Change Management'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Ein methodisch fundiertes BCM-Framework ist das Herzstück organisationaler Resilienz-Exzellenz. Wir entwickeln nicht nur Strukturen, sondern schaffen methodische Grundlagen für nachhaltige Wettbewerbsvorteile durch systematische Kontinuitäts-Kompetenz.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Framework-Architektur & Methodologie-Design',
          description: 'Entwicklung einer maßgeschneiderten Framework-Architektur mit robusten methodologischen Grundlagen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'ISO 22301 konforme Framework-Struktur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Architektur-Prinzipien und Design-Patterns'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Methodologie-Integration und Standards-Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Framework-Komponenten und Schnittstellen-Definition'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Governance-Frameworks & Policy-Entwicklung',
          description: 'Aufbau robuster Governance-Strukturen und Policy-Frameworks für effektive Framework-Steuerung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'BCM-Governance und Entscheidungsarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Policy-Frameworks und Richtlinien-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Compliance-Integration und Audit-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Stakeholder-Management und Kommunikations-Frameworks'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Prozess-Integration & Workflow-Entwicklung',
          description: 'Systematische Integration von BCM-Prozessen in kohärente Workflow-Strukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Prozess-Architektur und Workflow-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Integration in bestehende Geschäftsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Automatisierung und Technologie-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Performance-Messung und Optimierungs-Mechanismen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Maturity-Modelle & Entwicklungspfade',
          description: 'Entwicklung von Reifegradmodellen und strukturierten Entwicklungspfaden für Framework-Evolution.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'BCM-Maturity-Modelle und Assessment-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Entwicklungspfade und Roadmap-Planung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Capability-Entwicklung und Kompetenz-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Benchmarking und Best-Practice-Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Framework-Customization & Anpassung',
          description: 'Maßgeschneiderte Anpassung von Framework-Komponenten an spezifische organisationale Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Organisationsspezifische Framework-Anpassung'
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
              text: 'Integration externer Standards und Anforderungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Framework-Evolution & Kontinuierliche Verbesserung',
          description: 'Systematische Framework-Evolution durch kontinuierliche Verbesserungs-Mechanismen und Innovation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Kontinuierliche Framework-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Innovation-Integration und Technologie-Adoption'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Feedback-Mechanismen und Lessons-Learned-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Future-Proofing und adaptive Framework-Entwicklung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcmFrameworkData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Business Continuity Management Framework page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
