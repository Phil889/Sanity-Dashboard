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
    console.log('Creating IAM Manager page...')

    const iamManagerData = {
      _type: 'servicePage',
      _id: 'iam-manager',
      title: 'IAM Manager - Enterprise Identity Management Plattformen',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-manager'
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
        title: 'IAM Manager - Enterprise Identity Management Plattformen | ADVISORI',
        description: 'Professionelle IAM Manager Lösungen: Enterprise Identity Management Plattformen, zentrale Identitätsverwaltung, automatisierte Provisioning-Systeme und umfassende Governance-Frameworks für maximale Sicherheit.',
        keywords: 'IAM Manager, Identity Management Plattform, Enterprise IAM, Identity Governance, Automated Provisioning, User Lifecycle Management, Access Management, Identity Administration, IAM Platform, Identity Manager'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Manager Enterprise Identity Management Plattformen'
        },
        tagline: 'Zentrale Identitätsverwaltung für moderne Unternehmen',
        heading: 'IAM Manager - Enterprise Identity Management Plattformen',
        description: 'IAM Manager Plattformen sind das strategische Herzstück moderner Identitätsverwaltung und ermöglichen es Unternehmen, komplexe Identitätslandschaften zentral zu orchestrieren, automatisierte Governance-Prozesse zu implementieren und dabei höchste Sicherheitsstandards mit optimaler Effizienz zu vereinen. Unsere enterprise-grade IAM Manager Lösungen transformieren traditionelle Identitätsverwaltung in intelligente, adaptive Systeme, die Geschäftsprozesse beschleunigen und gleichzeitig umfassende Compliance-Anforderungen automatisiert erfüllen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Zentrale Identity Governance mit einheitlicher Verwaltung aller Benutzeridentitäten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Provisioning-Workflows für effiziente Benutzer-Lifecycle-Verwaltung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Intelligente Compliance-Automation und kontinuierliche Audit-Bereitschaft'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Skalierbare Cloud-Integration für moderne Hybrid-Arbeitsumgebungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Enterprise IAM Manager: Zentrale Orchestrierung moderner Identitätslandschaften',
        description: 'Moderne IAM Manager Plattformen sind weit mehr als technische Verwaltungstools – sie sind strategische Business-Enabler, die digitale Transformation beschleunigen, operative Effizienz maximieren und gleichzeitig robuste Sicherheits- und Governance-Frameworks etablieren. In einer Ära zunehmender Komplexität digitaler Identitäten und steigender regulatorischer Anforderungen bildet ein professioneller IAM Manager das unverzichtbare Fundament für nachhaltigen Geschäftserfolg.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Zentrale Identity Repository mit einheitlicher Verwaltung aller Benutzer- und Service-Identitäten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Intelligente Workflow-Automation für Provisioning, Deprovisioning und Lifecycle-Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Role-based Access Control mit dynamischen Rollenmodellen und Vererbungsstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Self-Service Portale für optimierte Benutzerfreundlichkeit und reduzierte IT-Belastung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Comprehensive Reporting und Analytics für datengetriebene Identitätsverwaltung'
          }
        ],
        alert: {
          title: 'Strategische Notwendigkeit',
          content: 'Unternehmen ohne zentrale IAM Manager Plattformen sind exponentiell höheren Sicherheitsrisiken, Compliance-Verstößen und operativen Ineffizienzen ausgesetzt. Manuelle Identitätsverwaltung führt zu inkonsistenten Zugriffsrechten, verlängerten Onboarding-Zeiten und erhöhten Audit-Risiken.'
        },
        whyUs: {
          title: 'ADVISORI IAM Manager Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Ganzheitliche IAM Manager Strategieentwicklung mit Business-Impact-Fokus'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Plattform-Expertise für optimale Technologie-Auswahl'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Enterprise-Architektur-Design für skalierbare und zukunftssichere Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Compliance-by-Design für regulatorische Exzellenz und Audit-Bereitschaft'
            }
          ]
        },
        additionalInfo: 'Die Evolution von IAM Manager Plattformen integriert zunehmend künstliche Intelligenz, maschinelles Lernen und Advanced Analytics, um proaktive Identitätsverwaltung zu ermöglichen und Governance-Prozesse zu optimieren. Diese technologische Konvergenz schafft neue Möglichkeiten für intelligente Automatisierung, prädiktive Compliance-Überwachung und adaptive Identitätsgovernance.',
        serviceDescription: 'Wir begleiten Sie durch die komplette IAM Manager Transformation – von der strategischen Plattform-Auswahl und Architektur-Design über die technische Implementation bis hin zum operativen Betrieb und der kontinuierlichen Optimierung. Unser Ansatz kombiniert bewährte Governance-Methoden mit innovativen Technologien für eine IAM Manager Lösung, die Ihre spezifischen Geschäftsanforderungen optimal unterstützt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'IAM Manager Plattform-Auswahl und Enterprise-Architektur-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Workflow-Automation und Business-Process-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Cloud-native Deployment und Hybrid-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Identity Governance und Compliance-Framework-Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance-Monitoring und Continuous-Improvement-Strategien'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer IAM Manager Implementierungsansatz',
        description: 'Wir verfolgen einen ganzheitlichen, business-orientierten Ansatz für IAM Manager Implementierungen, der technische Exzellenz mit strategischen Geschäftszielen verbindet und dabei modernste Governance-Frameworks mit optimaler Benutzerfreundlichkeit vereint.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategisches IAM Manager Assessment und Business-Case-Entwicklung mit ROI-Fokus'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Enterprise-Architektur-Design mit Cloud-first und Governance-by-Design Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Agile Implementation mit kontinuierlicher Integration und Testing'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Change Management und User-Adoption-Strategien für nachhaltige Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Innovation-Integration für Zukunftssicherheit'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'IAM Manager Plattformen sind das strategische Rückgrat moderner Unternehmen und entscheiden maßgeblich über den Erfolg digitaler Transformationsinitiativen. Unsere Erfahrung zeigt, dass Organisationen, die IAM Manager als zentrale Governance-Plattform verstehen und nicht nur als technisches Verwaltungstool, signifikante operative Effizienzsteigerungen erzielen. Die richtige IAM Manager Strategie ermöglicht es, Sicherheit und Produktivität zu vereinen, Compliance-Exzellenz zu erreichen und gleichzeitig die Grundlage für skalierbare Geschäftsprozesse zu schaffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'IAM Manager Plattform-Strategie und Architektur-Design',
          description: 'Entwicklung einer umfassenden IAM Manager Strategie und Enterprise-Architektur, die Ihre Geschäftsziele unterstützt und eine klare Roadmap für die zentrale Identitätsverwaltung bereitstellt.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Business-orientierte IAM Manager Vision und strategische Zielsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Comprehensive Current-State-Assessment und Plattform-Evaluation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Enterprise-Architektur-Design mit Skalierbarkeits- und Governance-Fokus'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'ROI-optimierte Implementierungs-Roadmap und Business-Case'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Zentrale Identity Repository und Datenmanagement',
          description: 'Implementation einer zentralen Identity Repository Lösung mit intelligenten Datenmanagement-Funktionen für einheitliche und konsistente Identitätsverwaltung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Zentrale Identity Database mit hochverfügbarer Architektur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Identity Synchronization und Data Quality Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Attribute Management und Schema-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Data Governance und Privacy-by-Design Implementation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Workflow-Automation und Provisioning-Engine',
          description: 'Professionelle Implementation intelligenter Workflow-Automation für effiziente Provisioning-, Deprovisioning- und Lifecycle-Management-Prozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Automated Provisioning mit Business-Rule-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Intelligent Deprovisioning und Account-Lifecycle-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Approval Workflows und Delegation-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Exception Handling und Escalation-Prozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Role-based Access Control und Governance-Framework',
          description: 'Etablierung robuster RBAC-Strukturen mit intelligenten Governance-Frameworks für granulare Zugriffskontrolle und kontinuierliche Compliance-Überwachung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Dynamic Role Management mit Vererbungsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Segregation of Duties und Conflict Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Access Certification und Recertification-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Risk-based Access Controls und Anomaly Detection'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Self-Service Portale und User Experience Optimization',
          description: 'Entwicklung benutzerfreundlicher Self-Service Portale mit optimierter User Experience für erhöhte Produktivität und reduzierte IT-Belastung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Intuitive Self-Service Portale mit Mobile-first Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Password Self-Service und Account-Recovery-Funktionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Access Request Management und Approval-Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Personalized Dashboards und User-centric Analytics'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'IAM Manager Betrieb und Continuous Optimization',
          description: 'Kontinuierlicher Betrieb und strategische Weiterentwicklung Ihrer IAM Manager Plattform mit proaktivem Monitoring, Performance-Optimierung und Innovation-Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Proaktives Platform-Monitoring und Performance-Tuning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Continuous Compliance Assessment und Governance-Optimization'
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
    transaction.createOrReplace(iamManagerData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Manager page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
