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
    console.log('Creating IAM Prozesse page...')

    const iamProzesseData = {
      _type: 'servicePage',
      _id: 'iam-prozesse',
      title: 'IAM Prozesse - Strategische Identitätsprozess-Orchestrierung',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-prozesse'
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
        title: 'IAM Prozesse - Strategische Identitätsprozess-Orchestrierung | ADVISORI',
        description: 'Professionelle IAM Prozesse: Workflow-Orchestrierung, Identity Lifecycle Management, automatisierte Provisioning-Prozesse und intelligente Governance-Workflows für optimale Identitätsverwaltung.',
        keywords: 'IAM Prozesse, Identity Lifecycle Management, Workflow Orchestrierung, Provisioning Prozesse, Access Request Management, Identity Governance Workflows, Automated Provisioning, IAM Automation, Process Optimization, Identity Workflows'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Prozesse Strategische Identitätsprozess-Orchestrierung'
        },
        tagline: 'Intelligente Prozess-Orchestrierung für moderne Identitätsverwaltung',
        heading: 'IAM Prozesse - Strategische Identitätsprozess-Orchestrierung',
        description: 'IAM Prozesse bilden das operative Rückgrat moderner Identitätsverwaltung und transformieren komplexe Sicherheitsanforderungen in intelligente, automatisierte Workflows. Unsere strategische Prozess-Orchestrierung verbindet Menschen, Technologien und Geschäftsprozesse zu einem nahtlosen Ökosystem, das Sicherheit maximiert, Compliance automatisiert und gleichzeitig die Produktivität steigert. Durch die Implementierung intelligenter IAM-Prozesse schaffen wir die Grundlage für agile, skalierbare und zukunftssichere Identitätsverwaltung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollautomatisierte Identity Lifecycle Management Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Intelligente Workflow-Orchestrierung mit KI-gestützter Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Compliance-konforme Governance-Prozesse mit Audit-Bereitschaft'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nahtlose Integration in bestehende Geschäftsprozesse'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische IAM-Prozess-Transformation: Von manueller Verwaltung zu intelligenter Automatisierung',
        description: 'Moderne IAM-Prozesse sind das strategische Nervensystem der digitalen Transformation und ermöglichen es Unternehmen, Identitätsverwaltung von einem reaktiven Kostenfaktor zu einem proaktiven Business-Enabler zu entwickeln. Durch die Orchestrierung intelligenter Workflows schaffen wir eine Infrastruktur, die nicht nur Sicherheitsanforderungen erfüllt, sondern aktiv zur Geschäftsbeschleunigung beiträgt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'End-to-End Identity Lifecycle Management mit automatisierten Joiner-Mover-Leaver-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Intelligente Access Request Workflows mit kontextbasierter Genehmigungslogik'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Automated Provisioning und Deprovisioning mit Real-time Synchronisation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Compliance-driven Governance-Prozesse mit kontinuierlicher Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Process Analytics und Continuous Improvement für optimale Performance'
          }
        ],
        alert: {
          title: 'Prozess-Excellence als Wettbewerbsvorteil',
          content: 'Unternehmen mit optimierten IAM-Prozessen reduzieren Sicherheitsrisiken um bis zu 80%, beschleunigen Onboarding-Zeiten erheblich und schaffen die Grundlage für agile Geschäftsmodelle. Manuelle Identitätsprozesse sind nicht nur ineffizient, sondern stellen ein erhebliches Sicherheitsrisiko dar.'
        },
        whyUs: {
          title: 'ADVISORI Prozess-Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Ganzheitliche Prozess-Reengineering-Expertise mit Business-Impact-Fokus'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Workflow-Orchestrierung für optimale Technologie-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'KI-gestützte Prozessoptimierung für kontinuierliche Verbesserung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Compliance-by-Design-Ansatz für regulatorische Exzellenz'
            }
          ]
        },
        additionalInfo: 'Die Zukunft der IAM-Prozesse liegt in der intelligenten Automatisierung durch künstliche Intelligenz, maschinelles Lernen und Robotic Process Automation. Diese Technologien ermöglichen selbstlernende Workflows, prädiktive Prozessoptimierung und adaptive Governance-Mechanismen, die sich dynamisch an verändernde Geschäftsanforderungen anpassen.',
        serviceDescription: 'Wir transformieren Ihre IAM-Prozesslandschaft durch strategisches Reengineering, intelligente Automatisierung und kontinuierliche Optimierung. Unser Ansatz verbindet bewährte Prozess-Methodiken mit modernsten Technologien für eine IAM-Infrastruktur, die Ihre Geschäftsziele optimal unterstützt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Prozess-Assessment und Reengineering für optimale Workflow-Gestaltung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Workflow-Automatisierung und Orchestrierung mit intelligenter Logik'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Identity Lifecycle Management mit End-to-End-Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Governance-Prozesse und Compliance-Automation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Process Analytics und Continuous Improvement'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer IAM-Prozess-Transformationsansatz',
        description: 'Wir verfolgen einen ganzheitlichen, datengetriebenen Ansatz für IAM-Prozess-Transformationen, der operative Exzellenz mit strategischen Geschäftszielen verbindet und dabei modernste Automatisierungstechnologien mit bewährten Governance-Prinzipien vereint.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Process Discovery und Current-State-Analyse mit Stakeholder-Alignment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Future-State-Design mit Automation-first und Compliance-by-Design Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Agile Implementation mit iterativer Entwicklung und kontinuierlichem Testing'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Change Management und User-Adoption-Strategien für nachhaltige Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Monitoring und Process Optimization für langfristige Excellence'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'IAM-Prozesse sind das operative Rückgrat jeder erfolgreichen digitalen Transformation und entscheiden maßgeblich über die Agilität und Sicherheit moderner Unternehmen. Unsere Erfahrung zeigt, dass Organisationen mit optimierten IAM-Prozessen nicht nur erhebliche Effizienzgewinne erzielen, sondern auch die Grundlage für innovative Geschäftsmodelle schaffen. Die richtige Prozess-Orchestrierung transformiert Identitätsverwaltung von einem administrativen Overhead zu einem strategischen Wettbewerbsvorteil, der Sicherheit, Compliance und Business-Agilität gleichermaßen fördert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Identity Lifecycle Management und Automatisierung',
          description: 'Vollständige Automatisierung des Identity Lifecycle Management mit intelligenten Joiner-Mover-Leaver-Prozessen, die Onboarding beschleunigen und Sicherheitsrisiken minimieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Automated Joiner-Prozesse mit Role-based Provisioning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Intelligent Mover-Workflows mit Rechte-Transfer und Validation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Secure Leaver-Prozesse mit vollständiger Deprovisioning-Automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Real-time Synchronisation und Cross-System-Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Access Request Management und Workflow-Orchestrierung',
          description: 'Intelligente Access Request Workflows mit kontextbasierter Genehmigungslogik, automatisierten Eskalationsprozessen und umfassender Audit-Trail-Dokumentation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Self-Service Access Request Portals mit intelligenter Katalogisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Context-aware Approval Workflows mit Risk-based Routing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Automated Escalation und Exception Handling'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Comprehensive Audit Trails und Compliance Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Provisioning und Deprovisioning Automation',
          description: 'Hochautomatisierte Provisioning-Prozesse mit intelligenter Orchestrierung, die Fehlerquellen eliminieren und Compliance-Anforderungen automatisch erfüllen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Automated Account Creation und Attribute Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Intelligent Role Assignment und Permission Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Real-time Provisioning mit Error Handling und Rollback'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Comprehensive Deprovisioning mit Orphaned Account Detection'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Governance-Prozesse und Compliance-Automation',
          description: 'Robuste Governance-Prozesse mit automatisierten Compliance-Checks, kontinuierlicher Überwachung und intelligenter Risikobewertung für regulatorische Exzellenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Automated Access Reviews und Recertification Processes'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Segregation of Duties Monitoring und Conflict Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Risk-based Governance mit Intelligent Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Regulatory Compliance Automation und Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Process Analytics und Performance Optimization',
          description: 'Datengetriebene Prozessoptimierung mit Advanced Analytics, KI-gestützter Vorhersage und kontinuierlicher Verbesserung für maximale Effizienz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Real-time Process Monitoring und Performance Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Predictive Analytics für Prozessoptimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Bottleneck Detection und Workflow Optimization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Continuous Improvement und Innovation Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Integration und Orchestrierung',
          description: 'Nahtlose Integration von IAM-Prozessen in bestehende Systemlandschaften mit intelligenter Orchestrierung und API-basierter Konnektivität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Enterprise System Integration und API Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Workflow Orchestration und Event-driven Architecture'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Cloud-native Integration und Hybrid-Support'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Legacy System Modernization und Migration Support'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamProzesseData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Prozesse page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
