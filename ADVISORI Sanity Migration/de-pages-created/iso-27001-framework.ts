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
    console.log('Creating ISO 27001 Framework page...')

    const iso27001FrameworkData = {
      _type: 'servicePage',
      _id: 'iso-27001-framework',
      title: 'ISO 27001 Framework',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-framework'
      },
      parent: {
        _type: 'reference',
        _ref: 'iso-27001'
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
        title: 'ISO 27001 Framework Implementierung | ADVISORI',
        description: 'Professionelle ISO 27001 Framework Implementierung für strukturierte Informationssicherheit. Von Framework-Design bis operative Umsetzung - Ihr Partner für nachhaltige ISMS-Architektur.',
        keywords: 'ISO 27001 Framework, ISMS Framework, Informationssicherheits-Framework, Framework Implementierung, Sicherheitsarchitektur, Framework Design, ISMS Struktur'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Framework Implementierung'
        },
        tagline: 'Strukturierte Informationssicherheit durch bewährte Framework-Architektur',
        heading: 'ISO 27001 Framework',
        description: 'Entwickeln Sie eine robuste und skalierbare Informationssicherheitsarchitektur mit dem ISO 27001 Framework. Unsere bewährte Framework-Methodik verbindet strategische Planung mit operativer Exzellenz und schafft nachhaltige Sicherheitsstrukturen für Ihr Unternehmen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierte Framework-Architektur für systematische Informationssicherheit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Skalierbare Framework-Komponenten für wachsende Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Governance-Strukturen für nachhaltige Steuerung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Framework-basierte Compliance und kontinuierliche Verbesserung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ISO 27001 Framework - Strukturierte Architektur für Informationssicherheitsexzellenz',
        description: 'Das ISO 27001 Framework bildet das strukturelle Fundament für systematische Informationssicherheit und ermöglicht Organisationen den Aufbau robuster, skalierbarer und nachhaltiger Sicherheitsarchitekturen. Als bewährte Framework-Methodik verbindet es strategische Governance mit operativer Umsetzung und schafft die Basis für kontinuierliche Sicherheitsverbesserung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Modulare Framework-Architektur für flexible und skalierbare Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Integrierte Governance-Strukturen für strategische Sicherheitssteuerung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Framework-basierte Risikomanagement-Prozesse für systematische Risikobehandlung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Verbesserungszyklen durch Framework-integrierte Bewertungsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Nahtlose Integration mit bestehenden Managementsystemen und Compliance-Frameworks'
          }
        ],
        alert: {
          title: 'Framework-Excellence für nachhaltige Sicherheit',
          content: 'Ein professionell implementiertes ISO 27001 Framework schafft nicht nur Compliance, sondern etabliert eine strategische Sicherheitsarchitektur, die mit Ihrem Unternehmen wächst und sich entwickelt.'
        },
        whyUs: {
          title: 'Warum ISO 27001 Framework mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Framework-Expertise und bewährte Implementierungsmethoden'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Maßgeschneiderte Framework-Architekturen für individuelle Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von Framework-Design bis operative Verankerung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Integration mit modernen Technologien und Compliance-Anforderungen'
            }
          ]
        },
        additionalInfo: 'Das ISO 27001 Framework strukturiert die Informationssicherheit in logische, manageable Komponenten und schafft klare Verantwortlichkeiten, Prozesse und Kontrollmechanismen. Diese Framework-Architektur ermöglicht es Organisationen, ihre Sicherheitsstrategie systematisch zu entwickeln, zu implementieren und kontinuierlich zu optimieren.',
        serviceDescription: 'Unser ISO 27001 Framework Service umfasst die vollständige Entwicklung und Implementierung strukturierter Sicherheitsarchitekturen - von der strategischen Framework-Konzeption über die modulare Umsetzung bis hin zur operativen Verankerung und kontinuierlichen Weiterentwicklung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Framework-Architektur Design und strategische Konzeption'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Modulare Framework-Implementierung und Komponentenintegration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Governance-Strukturen und Framework-Steuerungsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Framework-basierte Prozessoptimierung und Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Framework-Evolution und Maturity-Entwicklung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer ISO 27001 Framework-Implementierungsansatz',
        description: 'Wir verfolgen einen strukturierten, framework-orientierten Ansatz, der bewährte Architekturprinzipien mit innovativen Implementierungsmethoden kombiniert und nachhaltige Framework-Excellence gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Framework-Analyse und Architektur-Design basierend auf Ihren Geschäftszielen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Modulare Framework-Entwicklung mit skalierbaren Komponenten und Schnittstellen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Systematische Framework-Implementierung mit kontinuierlicher Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Framework-Integration und operative Verankerung in bestehende Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Framework-Optimierung und Maturity-Entwicklung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Ein professionell implementiertes ISO 27001 Framework schafft die strukturelle Basis für nachhaltige Informationssicherheit. Unsere Framework-Methodik verbindet strategische Vision mit operativer Exzellenz und ermöglicht es Organisationen, ihre Sicherheitsarchitektur systematisch zu entwickeln und kontinuierlich zu optimieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Framework-Architektur Design & Konzeption',
          description: 'Strategische Entwicklung maßgeschneiderter ISO 27001 Framework-Architekturen für nachhaltige Informationssicherheit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strategische Framework-Analyse und Anforderungsmodellierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Modulare Architektur-Design und Komponentenspezifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Framework-Governance und Steuerungsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Skalierbarkeits- und Zukunftsfähigkeitsplanung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Framework-Implementierung & Integration',
          description: 'Systematische Umsetzung und Integration von ISO 27001 Framework-Komponenten in bestehende Organisationsstrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Modulare Framework-Implementierung und Rollout-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'System- und Prozessintegration mit bestehenden Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Framework-basierte Automatisierung und Tool-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Change Management und Organisationsentwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Framework-Governance & Steuerung',
          description: 'Etablierung robuster Governance-Strukturen für effektive Framework-Steuerung und strategische Ausrichtung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Framework-Governance-Modelle und Entscheidungsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Strategische Framework-Steuerung und Performance-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Framework-Compliance und Audit-Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Kontinuierliche Verbesserung und Framework-Evolution'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Framework-Assessment & Maturity',
          description: 'Systematische Bewertung und Weiterentwicklung der Framework-Reife für kontinuierliche Optimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Framework-Maturity-Assessment und Reifegradbewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Gap-Analyse und Optimierungspotential-Identifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Framework-Benchmarking und Best-Practice-Vergleich'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Roadmap-Entwicklung für Framework-Weiterentwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Framework-Tools & Technologie',
          description: 'Auswahl und Integration geeigneter Tools und Technologien für effektive Framework-Unterstützung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Framework-Management-Plattformen und Tool-Auswahl'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Automatisierung von Framework-Prozessen und Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Dashboard- und Reporting-Systeme für Framework-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Integration mit bestehenden IT-Systemen und Infrastrukturen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Framework-Schulung & Kompetenzaufbau',
          description: 'Umfassende Schulungs- und Entwicklungsprogramme für nachhaltige Framework-Kompetenz in Ihrer Organisation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Framework-Schulungen für verschiedene Rollen und Verantwortungsebenen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Kompetenzentwicklung für Framework-Manager und -Koordinatoren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Train-the-Trainer Programme für interne Multiplikatoren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Weiterbildung und Framework-Community-Building'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001FrameworkData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Framework main page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
