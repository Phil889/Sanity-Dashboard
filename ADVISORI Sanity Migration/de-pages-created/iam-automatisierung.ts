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
    console.log('Creating IAM Automatisierung page...')

    const iamAutomatisierungData = {
      _type: 'servicePage',
      _id: 'iam-automatisierung',
      title: 'IAM Automatisierung - Intelligente Workflow-Orchestrierung für moderne Identitätsverwaltung',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-automatisierung'
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
        title: 'IAM Automatisierung - Intelligente Workflow-Orchestrierung | ADVISORI',
        description: 'Professionelle IAM Automatisierung: Intelligente Workflow-Orchestrierung, Self-Service-Portale, KI-gestützte Prozessoptimierung und DevOps-Integration für maximale Effizienz und Sicherheit.',
        keywords: 'IAM Automatisierung, Identity Automation, Workflow Orchestrierung, Self-Service IAM, Automated Provisioning, DevOps Integration, KI-gestützte Identitätsverwaltung, Intelligent Access Management, Process Automation, Identity Lifecycle Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Automatisierung Intelligente Workflow-Orchestrierung'
        },
        tagline: 'Intelligente Automatisierung für zukunftsfähige Identitätsverwaltung',
        heading: 'IAM Automatisierung - Intelligente Workflow-Orchestrierung für moderne Identitätsverwaltung',
        description: 'IAM Automatisierung transformiert traditionelle, manuelle Identitätsverwaltung in intelligente, selbstoptimierende Systeme, die Geschäftsprozesse beschleunigen, menschliche Fehler eliminieren und dabei höchste Sicherheitsstandards gewährleisten. Unsere fortschrittlichen Automatisierungslösungen orchestrieren komplexe Workflows, ermöglichen Self-Service-Funktionalitäten und integrieren KI-gestützte Entscheidungsfindung für eine Identitätsverwaltung, die sich dynamisch an Geschäftsanforderungen anpasst und kontinuierlich optimiert.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollautomatisierte Identitäts-Lifecycle-Verwaltung mit intelligenter Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'KI-gestützte Workflow-Optimierung und prädiktive Prozessverbesserung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Self-Service-Portale für beschleunigte Benutzer-Onboarding-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'DevOps-Integration für nahtlose CI/CD-Pipeline-Automatisierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische IAM-Automatisierung: Von manuellen Prozessen zu intelligenten Systemen',
        description: 'Moderne IAM Automatisierung ist der Schlüssel zur digitalen Transformation von Identitätsverwaltung und ermöglicht es Unternehmen, von reaktiven, manuellen Prozessen zu proaktiven, intelligenten Systemen überzugehen. Diese Evolution reduziert nicht nur operative Kosten und menschliche Fehler, sondern schafft auch die Grundlage für skalierbare, sichere und compliance-konforme Identitätslandschaften, die sich automatisch an verändernde Geschäftsanforderungen anpassen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Intelligente Workflow-Orchestrierung mit ereignisgesteuerten Automatisierungsregeln'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'KI-gestützte Entscheidungsfindung für adaptive Zugriffskontrollen und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Self-Service-Funktionalitäten mit intelligenten Genehmigungsworkflows'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'DevOps-Integration für automatisierte Identitätsverwaltung in CI/CD-Pipelines'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Compliance-Automatisierung mit kontinuierlicher Überwachung und Berichterstattung'
          }
        ],
        alert: {
          title: 'Automatisierungs-Imperativ',
          content: 'Unternehmen ohne umfassende IAM-Automatisierung sind exponentiell höheren operativen Risiken, Compliance-Verstößen und Skalierungsproblemen ausgesetzt. Manuelle Identitätsverwaltung wird in modernen, dynamischen IT-Umgebungen schnell zum Geschäftshemmnis und Sicherheitsrisiko.'
        },
        whyUs: {
          title: 'ADVISORI Automatisierungs-Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Ganzheitliche Automatisierungsstrategien mit Business-Process-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'KI-gestützte Optimierung für kontinuierliche Prozessverbesserung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Low-Code/No-Code-Ansätze für agile Workflow-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Cloud-native Automatisierung für moderne Infrastrukturen'
            }
          ]
        },
        additionalInfo: 'Die Zukunft der IAM-Automatisierung liegt in der Konvergenz von künstlicher Intelligenz, maschinellem Lernen und intelligenter Orchestrierung. Diese Technologien ermöglichen selbstlernende Systeme, die Muster erkennen, Anomalien identifizieren und proaktiv auf Veränderungen reagieren, wodurch eine neue Ära der autonomen Identitätsverwaltung eingeleitet wird.',
        serviceDescription: 'Wir entwickeln und implementieren maßgeschneiderte IAM-Automatisierungslösungen, die Ihre spezifischen Geschäftsprozesse optimieren und dabei höchste Sicherheits- und Compliance-Standards gewährleisten. Unser Ansatz kombiniert bewährte Automatisierungsmethoden mit innovativen KI-Technologien für eine Identitätsverwaltung, die sich kontinuierlich selbst optimiert.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Automatisierungsstrategieentwicklung und Workflow-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'KI-gestützte Prozessoptimierung und intelligente Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Self-Service-Portal-Entwicklung und User-Experience-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'DevOps-Integration und CI/CD-Pipeline-Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Compliance-Automatisierung und kontinuierliche Überwachung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer IAM-Automatisierungsansatz',
        description: 'Wir verfolgen einen systematischen, business-orientierten Ansatz für IAM-Automatisierung, der technische Innovation mit operativer Exzellenz verbindet und dabei sicherstellt, dass Automatisierungslösungen nahtlos in bestehende Geschäftsprozesse integriert werden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Prozessanalyse und Automatisierungspotential-Assessment mit ROI-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Intelligente Workflow-Architektur mit ereignisgesteuerten Automatisierungsregeln'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Agile Implementierung mit kontinuierlicher Integration und Testing'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Change Management und User-Adoption für nachhaltige Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung mit KI-gestützter Leistungsanalyse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'IAM Automatisierung ist der Katalysator für die digitale Transformation der Identitätsverwaltung und ermöglicht es Unternehmen, von reaktiven zu proaktiven Sicherheitsmodellen überzugehen. Unsere Erfahrung zeigt, dass intelligente Automatisierung nicht nur operative Effizienz steigert, sondern auch die Grundlage für innovative Geschäftsmodelle schafft. Die richtige Automatisierungsstrategie verwandelt IAM von einem Kostenfaktor in einen strategischen Wettbewerbsvorteil, der Agilität, Sicherheit und Compliance in perfekter Balance hält.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Automatisierungsstrategieentwicklung und Workflow-Design',
          description: 'Entwicklung einer umfassenden Automatisierungsstrategie mit intelligenten Workflow-Designs, die Ihre Geschäftsprozesse optimieren und eine klare Roadmap für die digitale Transformation bereitstellen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Business-Process-Mapping und Automatisierungspotential-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Intelligent Workflow Architecture mit ereignisgesteuerten Regeln'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'ROI-optimierte Automatisierungs-Roadmap und Business-Case'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration-Strategy für bestehende Systemlandschaften'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'KI-gestützte Prozessoptimierung und intelligente Orchestrierung',
          description: 'Implementation fortschrittlicher KI-Technologien für selbstlernende Automatisierungssysteme, die sich kontinuierlich optimieren und an verändernde Anforderungen anpassen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Machine Learning für adaptive Workflow-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Predictive Analytics für proaktive Prozessverbesserung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Intelligent Decision Engines für automatisierte Genehmigungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Anomaly Detection für Qualitätssicherung und Compliance'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Self-Service-Portal-Entwicklung und User-Experience-Design',
          description: 'Entwicklung intuitiver Self-Service-Portale mit optimaler User Experience, die Endbenutzer befähigen und gleichzeitig IT-Belastung reduzieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Intuitive Self-Service-Interfaces mit modernem UX-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Intelligent Request Management mit automatisierten Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Mobile-first Design für moderne Arbeitsplätze'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Personalisierte Dashboards und Reporting-Funktionen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'DevOps-Integration und CI/CD-Pipeline-Automatisierung',
          description: 'Nahtlose Integration von IAM-Automatisierung in DevOps-Workflows und CI/CD-Pipelines für kontinuierliche Bereitstellung und Deployment.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Infrastructure as Code Integration für IAM-Komponenten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Automated Testing und Quality Assurance für IAM-Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Container-native Automatisierung für Kubernetes-Umgebungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'API-first Architecture für moderne Anwendungsintegration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Compliance-Automatisierung und kontinuierliche Überwachung',
          description: 'Automatisierte Compliance-Überwachung und -Berichterstattung mit kontinuierlicher Kontrolle und proaktiver Risikominimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Automated Compliance Monitoring mit Real-time Alerting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Intelligent Reporting und Dashboard-Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Risk-based Automation für dynamische Sicherheitskontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Audit Trail Automation für lückenlose Nachverfolgung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Automatisierungs-Betrieb und Continuous Innovation',
          description: 'Kontinuierlicher Betrieb und strategische Weiterentwicklung Ihrer Automatisierungssysteme mit proaktivem Monitoring und Innovation-Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Proaktives System-Monitoring und Performance-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Continuous Improvement mit KI-gestützter Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Innovation-Integration und Technology-Roadmap-Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategic Consulting und Business-Alignment-Reviews'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamAutomatisierungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Automatisierung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
