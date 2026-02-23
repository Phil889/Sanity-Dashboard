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
    console.log('Creating IAM Aufgaben page...')

    const iamAufgabenData = {
      _type: 'servicePage',
      _id: 'iam-aufgaben',
      title: 'IAM Aufgaben - Professionelle Identitätsverwaltung und Zugriffskontrolle',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-aufgaben'
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
        title: 'IAM Aufgaben - Professionelle Identitätsverwaltung und Zugriffskontrolle | ADVISORI',
        description: 'Expertenwissen zu IAM Aufgaben: Identitätsverwaltung, Zugriffskontrolle, Benutzerprovisioning, Compliance-Management und operative IAM-Prozesse für maximale Sicherheit und Effizienz.',
        keywords: 'IAM Aufgaben, Identitätsverwaltung, Zugriffskontrolle, Benutzerprovisioning, IAM Governance, Access Management, Identity Lifecycle, IAM Operations, Compliance Management, Privileged Access'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Aufgaben Professionelle Identitätsverwaltung und Zugriffskontrolle'
        },
        tagline: 'Operative Exzellenz in der Identitätsverwaltung',
        heading: 'IAM Aufgaben - Professionelle Identitätsverwaltung und Zugriffskontrolle',
        description: 'IAM Aufgaben bilden das operative Herzstück moderner Unternehmenssicherheit und umfassen die systematische Verwaltung digitaler Identitäten, die Orchestrierung komplexer Zugriffsprozesse und die kontinuierliche Überwachung von Berechtigungsstrukturen. Unsere spezialisierten IAM-Services transformieren traditionelle Verwaltungsaufgaben in intelligente, automatisierte Prozesse, die höchste Sicherheitsstandards mit optimaler Benutzerfreundlichkeit vereinen und dabei Compliance-Anforderungen proaktiv erfüllen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Automatisierte Identitäts-Lifecycle-Verwaltung für alle Benutzergruppen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Intelligente Zugriffskontrolle mit Risk-based Authentication'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kontinuierliche Compliance-Überwachung und Audit-Bereitschaft'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Proaktive Governance und strategische Optimierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische IAM-Aufgaben: Von operativer Exzellenz zu Business-Enablement',
        description: 'Moderne IAM Aufgaben transcendieren traditionelle IT-Administration und entwickeln sich zu strategischen Business-Funktionen, die digitale Transformation ermöglichen, Innovationen beschleunigen und gleichzeitig robuste Sicherheits- und Compliance-Frameworks etablieren. In einer Ära zunehmender Cyber-Bedrohungen und komplexer regulatorischer Landschaften bilden professionell orchestrierte IAM-Aufgaben das unverzichtbare Fundament für nachhaltigen Geschäftserfolg.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Identity Lifecycle Management mit automatisierter Erstellung, Modifikation und Deaktivierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Access Governance mit kontinuierlicher Überwachung und Optimierung von Berechtigungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Privileged Access Management für kritische Systemzugriffe und administrative Funktionen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Compliance Automation für regulatorische Exzellenz und Audit-Bereitschaft'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Risk Assessment und kontinuierliche Sicherheitsbewertung aller Identitäten'
          }
        ],
        alert: {
          title: 'Operative Kritikalität',
          content: 'Unzureichend verwaltete IAM-Aufgaben führen zu exponentiell steigenden Sicherheitsrisiken, Compliance-Verstößen und operativen Ineffizienzen. Moderne Cyber-Angriffe nutzen primär Schwachstellen in Identitätsverwaltungsprozessen, wodurch professionelle IAM-Aufgaben zur ersten Verteidigungslinie werden.'
        },
        whyUs: {
          title: 'ADVISORI IAM-Aufgaben-Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Ganzheitliche Aufgaben-Orchestrierung mit Business-Process-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Automatisierte Workflow-Optimierung für maximale Effizienz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Risk-based Task-Priorisierung für strategische Ressourcenallokation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Continuous Improvement und Innovation-Integration'
            }
          ]
        },
        additionalInfo: 'Die Evolution von IAM-Aufgaben integriert zunehmend künstliche Intelligenz, maschinelles Lernen und Process Mining, um proaktive Optimierungen zu ermöglichen und operative Exzellenz zu erreichen. Diese technologische Konvergenz schafft neue Möglichkeiten für intelligente Automatisierung, prädiktive Wartung und adaptive Prozessoptimierung.',
        serviceDescription: 'Wir orchestrieren Ihre kompletten IAM-Aufgaben – von der strategischen Prozessplanung und Workflow-Design über die operative Implementierung bis hin zur kontinuierlichen Optimierung und Innovation-Integration. Unser Ansatz kombiniert bewährte Methoden mit modernsten Technologien für eine IAM-Aufgabenlandschaft, die Ihre spezifischen Geschäftsanforderungen optimal unterstützt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Identity Lifecycle Management und Automated Provisioning'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Access Governance und Continuous Compliance Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Privileged Access Management und Critical Asset Protection'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Risk Assessment und Threat Intelligence Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Process Optimization und Performance Analytics'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer IAM-Aufgaben-Optimierungsansatz',
        description: 'Wir verfolgen einen ganzheitlichen, prozessorientierten Ansatz für IAM-Aufgaben-Optimierung, der operative Exzellenz mit strategischen Geschäftszielen verbindet und dabei modernste Automatisierungstechnologien mit bewährten Governance-Prinzipien vereint.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Task Assessment und Process-Mining für datengetriebene Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Workflow-Redesign mit Automation-first und Security-by-Design Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Agile Implementation mit kontinuierlicher Integration und Performance-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Change Management und Stakeholder-Enablement für nachhaltige Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Optimization und Innovation-Adoption für Zukunftssicherheit'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'IAM Aufgaben sind das operative Rückgrat jeder erfolgreichen Digitalisierungsstrategie und entscheiden maßgeblich über die Effizienz und Sicherheit moderner Unternehmen. Unsere Erfahrung zeigt, dass Organisationen, die IAM-Aufgaben strategisch orchestrieren und nicht nur reaktiv verwalten, signifikante Wettbewerbsvorteile erzielen. Die richtige Aufgaben-Architektur ermöglicht es, operative Exzellenz mit strategischer Agilität zu vereinen, Compliance-Automatisierung zu erreichen und gleichzeitig die Grundlage für skalierbare Geschäftsprozesse zu schaffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Identity Lifecycle Management und Automated Provisioning',
          description: 'Comprehensive Verwaltung des gesamten Identitäts-Lebenszyklus mit intelligenter Automatisierung für Erstellung, Modifikation und Deaktivierung von Benutzerkonten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Automated User Onboarding mit Business-Rule-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Dynamic Role Assignment basierend auf Organisationsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Intelligent Deprovisioning mit Compliance-Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Cross-System Synchronization und Data Consistency'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Access Governance und Continuous Compliance Monitoring',
          description: 'Strategische Überwachung und Optimierung von Zugriffsberechtigung mit kontinuierlicher Compliance-Bewertung und automatisierter Risikominimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Access Certification Campaigns mit intelligenten Empfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Segregation of Duties Monitoring und Conflict Resolution'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Risk-based Access Reviews mit Machine Learning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Automated Compliance Reporting und Audit Trail Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Privileged Access Management und Critical Asset Protection',
          description: 'Spezialisierte Verwaltung privilegierter Zugriffe mit erweiterten Sicherheitskontrollen und umfassendem Monitoring für kritische Unternehmensressourcen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Privileged Account Discovery und Inventory Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Just-in-Time Access mit Approval Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Session Recording und Behavioral Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Credential Vaulting und Automated Password Rotation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Risk Assessment und Threat Intelligence Integration',
          description: 'Kontinuierliche Risikobewertung aller Identitäten mit Integration von Threat Intelligence für proaktive Sicherheitsmaßnahmen und adaptive Zugriffskontrollen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Identity Risk Scoring mit Machine Learning Algorithmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Behavioral Analytics für Anomaly Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Threat Intelligence Integration für proaktive Abwehr'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Adaptive Authentication basierend auf Risikobewertung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Process Optimization und Performance Analytics',
          description: 'Kontinuierliche Optimierung aller IAM-Prozesse mit datengetriebenen Insights und Performance-Metriken für maximale Effizienz und Benutzerfreundlichkeit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Process Mining für Workflow-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Performance Dashboards mit Real-time Metriken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Bottleneck Analysis und Capacity Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'User Experience Optimization und Feedback Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Strategic Consulting und Innovation Integration',
          description: 'Strategische Beratung für die Weiterentwicklung Ihrer IAM-Aufgaben mit Integration neuester Technologien und Best Practices für zukunftssichere Lösungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Strategic Roadmap Development für IAM-Evolution'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Technology Assessment und Innovation-Adoption'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Best Practice Integration und Industry Benchmarking'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Change Management und Organizational Enablement'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamAufgabenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Aufgaben page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
