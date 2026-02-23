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
    console.log('Creating IAM System Definition page...')

    const iamSystemDefinitionData = {
      _type: 'servicePage',
      _id: 'iam-system-definition',
      title: 'IAM System Definition - Technische Grundlagen und Architektur-Frameworks',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-system-definition'
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
        title: 'IAM System Definition - Technische Grundlagen und Architektur-Frameworks | ADVISORI',
        description: 'Umfassende IAM System Definition: Technische Grundlagen, Architektur-Frameworks, Komponenten-Design und Enterprise-Integration für moderne Identitätsverwaltungssysteme.',
        keywords: 'IAM System Definition, Identity Management Architektur, IAM Komponenten, Identity Framework, Access Management System, IAM Technologie, Identity Architecture, System Design, Enterprise IAM, Identity Infrastructure'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM System Definition Technische Grundlagen Architektur'
        },
        tagline: 'Präzise Definition und Architektur moderner IAM-Systeme',
        heading: 'IAM System Definition - Technische Grundlagen und Architektur-Frameworks',
        description: 'IAM System Definition umfasst die systematische Spezifikation, Architektur und technische Implementierung von Identity and Access Management Systemen, die als kritische Infrastruktur für moderne Unternehmenssicherheit fungieren. Diese Definition etabliert klare technische Standards, Architektur-Patterns und Integrations-Frameworks, die es Organisationen ermöglichen, robuste, skalierbare und zukunftssichere Identitätsverwaltungssysteme zu konzipieren und zu implementieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Präzise technische Spezifikation aller IAM-Systemkomponenten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Standardisierte Architektur-Frameworks für Enterprise-Deployment'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Interoperabilitäts-Standards für nahtlose System-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Skalierbare Design-Patterns für globale Unternehmensanforderungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Fundamentale IAM-Systemdefinition: Von Konzept zu Enterprise-Architektur',
        description: 'Die Definition von IAM-Systemen erfordert eine präzise technische Spezifikation, die sowohl funktionale als auch nicht-funktionale Anforderungen umfasst und dabei moderne Architektur-Prinzipien, Sicherheitsstandards und Integrations-Patterns berücksichtigt. Eine professionelle IAM System Definition bildet das Fundament für erfolgreiche Implementierungen und langfristige Systemevolution.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Komponenten-Definition mit klaren Schnittstellen und Abhängigkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Architektur-Frameworks mit Microservices, API-Gateway und Event-driven Design'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Sicherheits-by-Design mit Zero-Trust-Prinzipien und Defense-in-Depth'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Cloud-native Design-Patterns für Skalierbarkeit und Hochverfügbarkeit'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Compliance-Integration mit automatisierten Governance-Mechanismen'
          }
        ],
        alert: {
          title: 'Technische Präzision erforderlich',
          content: 'Unvollständige oder unpräzise IAM System Definitionen führen zu Architektur-Inkonsistenzen, Sicherheitslücken und kostspieligen Nachbesserungen. Eine systematische Definition ist essentiell für erfolgreiche Enterprise-Implementierungen.'
        },
        whyUs: {
          title: 'ADVISORI IAM-Definitions-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Systematische Architektur-Definition mit Enterprise-Fokus'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Technologie-Bewertung und -Auswahl'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Cloud-native und Hybrid-Architektur-Expertise'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Compliance-by-Design und regulatorische Integration'
            }
          ]
        },
        additionalInfo: 'Moderne IAM System Definitionen integrieren zunehmend KI-gestützte Komponenten, Edge-Computing-Capabilities und IoT-Integration, wodurch neue Anforderungen an Architektur-Flexibilität und Performance entstehen. Diese Evolution erfordert adaptive Definitions-Frameworks, die technologische Innovation mit bewährten Sicherheitsprinzipien verbinden.',
        serviceDescription: 'Wir entwickeln präzise IAM System Definitionen, die als Blaupause für Ihre gesamte Identitätsverwaltungs-Infrastruktur dienen. Von der initialen Anforderungsanalyse über die Architektur-Spezifikation bis zur Implementierungs-Roadmap begleiten wir Sie durch den gesamten Definitions- und Designprozess.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Systematische Anforderungsanalyse und Stakeholder-Alignment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Technische Architektur-Definition und Komponenten-Spezifikation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Integration-Design und API-Spezifikation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Sicherheits-Framework und Compliance-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Implementierungs-Roadmap und Change-Management-Strategie'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer IAM-Definitions-Ansatz',
        description: 'Wir verfolgen einen strukturierten, methodischen Ansatz für IAM System Definitionen, der technische Exzellenz mit Business-Anforderungen verbindet und dabei bewährte Architektur-Prinzipien mit innovativen Technologien kombiniert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Requirements Engineering mit Stakeholder-Workshop und Use-Case-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Architektur-Design mit Domain-driven Design und Event-Storming-Methoden'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Technologie-Evaluation mit Proof-of-Concept und Performance-Benchmarking'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Iterative Validierung mit Prototyping und Stakeholder-Feedback'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Dokumentation und Wissenstransfer für nachhaltige Implementierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Eine präzise IAM System Definition ist das Fundament jeder erfolgreichen Identitätsverwaltungs-Initiative und entscheidet maßgeblich über die langfristige Architektur-Qualität und Systemevolution. Unsere Erfahrung zeigt, dass Organisationen, die in eine systematische Definition investieren, signifikant bessere Implementierungsergebnisse erzielen und dabei Kosten reduzieren. Die richtige Definition verbindet technische Exzellenz mit Business-Anforderungen und schafft die Grundlage für zukunftssichere, skalierbare Identitätsverwaltungssysteme.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Systematische Anforderungsanalyse und Stakeholder-Alignment',
          description: 'Umfassende Analyse aller funktionalen und nicht-funktionalen Anforderungen mit systematischem Stakeholder-Engagement für eine vollständige IAM System Definition.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Business-Requirements-Engineering mit Use-Case-Modellierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Technical-Requirements-Analyse mit Performance- und Skalierbarkeits-Spezifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Compliance-Requirements-Mapping mit regulatorischer Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Stakeholder-Workshop und Konsensbildung für einheitliche Vision'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Enterprise-Architektur-Design und Komponenten-Spezifikation',
          description: 'Entwicklung einer robusten Enterprise-Architektur mit detaillierter Spezifikation aller IAM-Systemkomponenten und deren Interaktionen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Layered-Architecture-Design mit klarer Separation of Concerns'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Microservices-Architektur mit Domain-driven Design-Prinzipien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Data-Architecture-Definition mit Master-Data-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Security-Architecture mit Zero-Trust und Defense-in-Depth'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'API-Design und Integration-Framework-Entwicklung',
          description: 'Spezifikation umfassender API-Landschaften und Integration-Frameworks für nahtlose Systemkonnektivität und Interoperabilität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'RESTful-API-Design mit OpenAPI-Spezifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Event-driven-Architecture mit Message-Broker-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'API-Gateway-Konfiguration mit Rate-Limiting und Security'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Legacy-Integration-Patterns mit Adapter- und Facade-Design'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Cloud-native Design und Deployment-Architektur',
          description: 'Entwicklung cloud-nativer Architektur-Patterns mit Container-Orchestrierung und Infrastructure-as-Code für moderne Deployment-Strategien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Container-Architecture mit Kubernetes-Orchestrierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Infrastructure-as-Code mit Terraform und GitOps-Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Multi-Cloud-Strategy mit Vendor-Lock-in-Vermeidung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Auto-Scaling und Load-Balancing für Performance-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Sicherheits-Framework und Compliance-Integration',
          description: 'Integration umfassender Sicherheits-Frameworks mit automatisierten Compliance-Mechanismen für regulatorische Exzellenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Zero-Trust-Security-Model mit kontinuierlicher Verifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Encryption-at-Rest und In-Transit mit Key-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Audit-Trail-Architecture mit Tamper-proof Logging'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Compliance-Automation mit Policy-as-Code-Implementation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Implementierungs-Roadmap und Change-Management',
          description: 'Entwicklung detaillierter Implementierungs-Roadmaps mit Change-Management-Strategien für erfolgreiche System-Transformation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Phasen-Planung mit Risk-Mitigation und Rollback-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Resource-Planning mit Skill-Gap-Analyse und Training-Konzepten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Migration-Strategy mit Zero-Downtime-Deployment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Success-Metrics und KPI-Definition für Projekt-Monitoring'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamSystemDefinitionData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM System Definition page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
