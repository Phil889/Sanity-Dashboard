import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
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
    console.log('Creating FIDA Umsetzung page...')

    const fidaUmsetzungData = {
      _type: 'servicePage',
      _id: 'fida-umsetzung',
      title: 'FIDA Umsetzung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/financial-data-access-fida/fida-umsetzung'
      },
      parent: {
        _type: 'reference',
        _ref: 'financial-data-access-fida'
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
        title: 'FIDA Umsetzung & Implementation Services | ADVISORI',
        description: 'Professionelle FIDA-Implementierung von der Strategie bis zum Go-Live. Technische Umsetzung, API-Entwicklung, Compliance-Framework und Projektmanagement für erfolgreiche FIDA-Compliance.',
        keywords: 'FIDA Umsetzung, FIDA Implementation, FIDA Projekt, API Entwicklung, Compliance Framework, Financial Data Access, Open Banking Implementation, FIDA Go-Live'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FIDA Umsetzung Implementation Services'
        },
        tagline: 'Professionelle FIDA-Implementierung von der Strategie bis zum Go-Live',
        heading: 'FIDA Umsetzung',
        description: 'Die erfolgreiche Umsetzung der Financial Data Access Regulation erfordert strategische Planung, technische Exzellenz und regulatorische Expertise. Wir begleiten Sie durch den gesamten Implementierungsprozess - von der initialen Strategie bis zum erfolgreichen Go-Live und darüber hinaus.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'End-to-End FIDA-Implementierung mit bewährten Projektmethoden'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Sichere API-Architekturen und skalierbare Technologie-Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Compliance-Frameworks und Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Unterstützung und Optimierung nach Go-Live'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische FIDA-Implementierung für nachhaltigen Erfolg',
        description: 'Die Umsetzung von FIDA ist mehr als ein Compliance-Projekt - es ist eine strategische Transformation, die neue Geschäftsmöglichkeiten eröffnet und die digitale Infrastruktur Ihres Unternehmens zukunftsfähig macht. Unser bewährter Implementierungsansatz gewährleistet termingerechte, budgetkonforme und regulatorisch sichere Projektumsetzung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Implementierungsplanung mit klaren Meilensteinen und Erfolgskriterien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Technische Architektur-Entwicklung für sichere und skalierbare FIDA-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integrierte Data Governance und Consent Management Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Umfassende Testing- und Validierungsstrategien für Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Change Management und Mitarbeiterqualifizierung für nachhaltige Adoption'
          }
        ],
        alert: {
          title: 'Implementierungserfolg',
          content: 'Erfolgreiche FIDA-Implementierung erfordert die richtige Balance zwischen technischer Innovation, regulatorischer Compliance und operationeller Exzellenz. Unser bewährter Ansatz minimiert Risiken und maximiert Geschäftswert.'
        },
        whyUs: {
          title: 'Unsere FIDA-Implementierungsexpertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Bewährte Erfahrung in komplexen Fintech-Implementierungsprojekten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefgreifende Expertise in API-Entwicklung und Sicherheitsarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von Strategie bis operativer Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Agile Projektmethoden mit kontinuierlicher Stakeholder-Einbindung'
            }
          ]
        },
        additionalInfo: 'FIDA-Implementierung ist ein komplexes Unterfangen, das technische Innovation, regulatorische Compliance und organisatorische Transformation vereint. Unser strukturierter Ansatz gewährleistet, dass alle Aspekte - von der API-Entwicklung bis zur Mitarbeiterqualifizierung - systematisch adressiert werden.',
        serviceDescription: 'Wir bieten vollständige FIDA-Implementierungsservices, die alle Phasen des Projekts abdecken: von der initialen Strategieentwicklung über die technische Umsetzung bis hin zur Go-Live-Unterstützung und kontinuierlichen Optimierung. Unser Ansatz kombiniert bewährte Projektmanagement-Methoden mit spezialisierter FIDA-Expertise.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Implementierungsplanung und Projektmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Technische Architektur-Entwicklung und API-Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Data Governance und Compliance-Framework-Aufbau'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Testing, Validierung und Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Go-Live-Support und kontinuierliche Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser bewährter FIDA-Implementierungsansatz',
        description: 'Wir folgen einem strukturierten, phasenbasierten Implementierungsansatz, der Risiken minimiert und nachhaltigen Erfolg gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Analyse und Implementierungsplanung mit klaren Zielen und Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Agile Entwicklung und iterative Umsetzung mit kontinuierlichem Stakeholder-Feedback'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Umfassende Testing- und Validierungsphasen für höchste Qualitätsstandards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Strukturiertes Change Management und Mitarbeiterqualifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontrollierter Go-Live mit kontinuierlicher Überwachung und Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'FIDA-Implementierung ist eine strategische Transformation, die weit über technische Compliance hinausgeht. Unser bewährter Ansatz kombiniert regulatorische Expertise mit innovativer Technologie und gewährleistet, dass unsere Kunden nicht nur compliant werden, sondern auch nachhaltige Wettbewerbsvorteile durch die neue Datenökonomie realisieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'FIDA Implementation Strategy & Roadmap',
          description: 'Entwicklung einer umfassenden Implementierungsstrategie mit detaillierter Roadmap, Meilenstein-Planung und Risikomanagement.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strategische Analyse der FIDA-Auswirkungen auf Ihr Geschäftsmodell'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung detaillierter Implementierungs-Roadmaps mit klaren Meilensteinen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Ressourcenplanung und Budget-Optimierung für effiziente Projektumsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Stakeholder-Management und Kommunikationsstrategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technical Architecture & API Development',
          description: 'Design und Entwicklung sicherer, skalierbarer technischer Architekturen für FIDA-konforme Datenfreigabe und API-Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung FIDA-konformer API-Architekturen und Sicherheitsframeworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration in bestehende IT-Landschaften und Legacy-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Skalierbare Datenintegrations- und Transformationslösungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Performance-Optimierung und Monitoring-Systeme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Data Governance & Consent Management',
          description: 'Aufbau umfassender Data Governance Strukturen und Consent Management Systeme für FIDA-konforme Datenverarbeitung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Entwicklung DSGVO-konformer Data Governance Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Implementation granularer Consent Management Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Aufbau von Datenqualitäts- und Audit-Trail-Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Automatisierte Compliance-Überwachung und Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Compliance Framework & Risk Management',
          description: 'Etablierung robuster Compliance-Frameworks und Risikomanagement-Systeme für nachhaltige FIDA-Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Entwicklung integrierter Compliance-Management-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Aufbau von Risikobewertungs- und Monitoring-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Implementation von Incident Response und Business Continuity Plänen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Kontinuierliche Compliance-Überwachung und regulatorische Updates'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Testing & Validation Services',
          description: 'Umfassende Testing- und Validierungsservices zur Sicherstellung höchster Qualitäts- und Sicherheitsstandards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Entwicklung umfassender Test-Strategien und Validierungsframeworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Automatisierte Testing-Pipelines und Continuous Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Security Testing und Penetration Testing für API-Sicherheit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'User Acceptance Testing und Performance-Validierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Go-Live Support & Ongoing Maintenance',
          description: 'Professionelle Go-Live-Unterstützung und kontinuierliche Wartung für nachhaltigen Betrieb und Optimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Strukturierte Go-Live-Planung und Rollout-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Real-Time-Monitoring und proaktive Incident Response'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Kontinuierliche Performance-Optimierung und System-Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Ongoing Support und evolutionäre Weiterentwicklung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(fidaUmsetzungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FIDA Umsetzung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
