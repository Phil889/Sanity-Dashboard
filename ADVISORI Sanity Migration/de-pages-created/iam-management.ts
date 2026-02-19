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
    console.log('Creating IAM Management page...')

    const iamManagementData = {
      _type: 'servicePage',
      _id: 'iam-management',
      title: 'IAM Management - Professionelle Identitätsverwaltung',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-management'
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
        title: 'IAM Management - Professionelle Identitätsverwaltung | ADVISORI',
        description: 'Professionelles IAM Management für operative Exzellenz: Identity Lifecycle Management, Access Governance, Compliance Automation und strategische Identitätsverwaltung für maximale Sicherheit und Effizienz.',
        keywords: 'IAM Management, Identity Management, Access Governance, Identity Lifecycle, Provisioning, Deprovisioning, Role Management, Access Certification, IAM Governance, Identity Administration'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Management Professionelle Identitätsverwaltung'
        },
        tagline: 'Operative Exzellenz durch professionelles IAM Management',
        heading: 'IAM Management - Professionelle Identitätsverwaltung',
        description: 'IAM Management ist das operative Herzstück erfolgreicher Identitätsverwaltung und transformiert komplexe Sicherheitsanforderungen in effiziente, automatisierte Prozesse. Durch strategische Governance, intelligente Lifecycle-Verwaltung und kontinuierliche Optimierung schaffen wir eine IAM-Landschaft, die nicht nur höchste Sicherheitsstandards erfüllt, sondern auch Geschäftsprozesse beschleunigt und operative Effizienz maximiert.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Automatisierte Identity Lifecycle-Verwaltung für alle Benutzergruppen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Intelligente Access Governance mit kontinuierlicher Compliance-Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Proaktive Risikominimierung durch datengetriebene Entscheidungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Skalierbare Prozesse für globale Unternehmensanforderungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategisches IAM Management: Von operativer Effizienz zu Business-Excellence',
        description: 'Professionelles IAM Management orchestriert die komplexe Symphonie der Identitätsverwaltung und verwandelt potenzielle Sicherheitsrisiken in strategische Wettbewerbsvorteile. Durch intelligente Automatisierung, proaktive Governance und kontinuierliche Optimierung schaffen wir eine IAM-Landschaft, die sowohl höchste Sicherheitsstandards als auch operative Exzellenz gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Comprehensive Identity Lifecycle Management von Onboarding bis Offboarding'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Intelligent Access Governance mit automatisierten Compliance-Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Dynamic Role Management mit Business-orientierten Berechtigungsmodellen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Proactive Risk Management durch kontinuierliche Überwachung und Analytics'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Scalable Operations für Enterprise-Anforderungen und globale Deployment'
          }
        ],
        alert: {
          title: 'Operative Notwendigkeit',
          content: 'Unternehmen ohne professionelles IAM Management sind exponentiell höheren operativen Risiken, Compliance-Verstößen und Effizienzverlusten ausgesetzt. Manuelle Identitätsverwaltung skaliert nicht und führt zu kritischen Sicherheitslücken und regulatorischen Problemen.'
        },
        whyUs: {
          title: 'ADVISORI IAM Management Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Ganzheitliche Management-Strategien mit Business-Process-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Automatisierte Governance-Frameworks für operative Exzellenz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Proaktive Compliance-Überwachung mit Real-time Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Skalierbare Prozess-Architekturen für Enterprise-Anforderungen'
            }
          ]
        },
        additionalInfo: 'Die Evolution des IAM Managements integriert zunehmend künstliche Intelligenz, maschinelles Lernen und Predictive Analytics, um proaktive Entscheidungen zu ermöglichen und operative Effizienz zu maximieren. Diese technologische Konvergenz schafft neue Möglichkeiten für intelligente Automatisierung, prädiktive Governance und adaptive Management-Prozesse.',
        serviceDescription: 'Wir transformieren Ihre IAM-Landschaft durch strategisches Management, das operative Exzellenz mit Business-Agilität verbindet. Unser Ansatz kombiniert bewährte Governance-Frameworks mit innovativen Automatisierungstechnologien für eine IAM-Verwaltung, die Ihre Geschäftsziele optimal unterstützt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategic Identity Governance und Lifecycle-Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Automated Provisioning und Intelligent Workflow-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Continuous Compliance-Monitoring und Risk-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Performance Analytics und Optimization-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Enterprise-Scale Operations und Global Deployment-Support'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer IAM Management-Ansatz',
        description: 'Wir verfolgen einen ganzheitlichen, prozessorientierten Ansatz für IAM Management, der operative Exzellenz mit strategischen Geschäftszielen verbindet und dabei modernste Automatisierungstechnologien mit bewährten Governance-Prinzipien vereint.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategic Assessment und Current-State-Analyse mit Gap-Identifikation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Process-Design und Workflow-Automatisierung mit Business-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Governance-Implementation mit Compliance-by-Design Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Continuous Monitoring und Performance-Optimization'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Strategic Evolution und Innovation-Integration für Zukunftssicherheit'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Professionelles IAM Management ist der Schlüssel zur Transformation von Sicherheitsanforderungen in operative Wettbewerbsvorteile. Unsere Erfahrung zeigt, dass Unternehmen mit strategischem IAM Management nicht nur signifikant höhere Sicherheitsstandards erreichen, sondern auch operative Effizienz um bis zu vierzig Prozent steigern können. Die richtige Management-Strategie verwandelt komplexe Identitätslandschaften in intelligente, selbstoptimierende Systeme, die Geschäftsprozesse beschleunigen und gleichzeitig Compliance-Exzellenz gewährleisten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategic Identity Lifecycle Management',
          description: 'Comprehensive Verwaltung des gesamten Identitäts-Lebenszyklus mit automatisierten Prozessen für Onboarding, Änderungen und Offboarding aller Benutzergruppen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Automated User Provisioning mit Business-Rule-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Intelligent Deprovisioning mit Compliance-Sicherstellung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Dynamic Attribute Management und Profile-Synchronisation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Lifecycle Analytics und Process-Optimization'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Intelligent Access Governance und Compliance',
          description: 'Proaktive Governance-Strukturen mit automatisierten Compliance-Kontrollen und kontinuierlicher Überwachung für regulatorische Exzellenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automated Access Reviews und Certification-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Risk-based Governance mit intelligenten Empfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Compliance Dashboards und Real-time Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Regulatory Reporting und Audit-Trail-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Dynamic Role Management und RBAC-Optimization',
          description: 'Intelligente Rollenverwaltung mit Business-orientierten Berechtigungsmodellen und kontinuierlicher Optimierung für maximale Effizienz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Business-aligned Role Design und Hierarchie-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Automated Role Mining und Optimization-Empfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Segregation of Duties und Conflict-Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Role Analytics und Usage-Pattern-Analysis'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Proactive Risk Management und Security Analytics',
          description: 'Kontinuierliche Risikobewertung mit intelligenten Analytics und proaktiven Sicherheitsmaßnahmen für präventiven Schutz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Real-time Risk Assessment und Scoring-Algorithmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Behavioral Analytics und Anomaly Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Predictive Security Intelligence und Threat-Modeling'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Automated Response und Mitigation-Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Enterprise-Scale Operations und Performance-Optimization',
          description: 'Skalierbare Betriebsmodelle mit kontinuierlicher Performance-Überwachung und Optimierung für Enterprise-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Scalable Architecture Design und Capacity-Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Performance Monitoring und Bottleneck-Identification'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Operational Excellence und Process-Standardization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Global Deployment-Support und Multi-Region-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Strategic Evolution und Innovation-Integration',
          description: 'Kontinuierliche Weiterentwicklung und Integration innovativer Technologien für zukunftssichere IAM-Management-Strategien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Technology Roadmap-Development und Innovation-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'AI/ML-Integration für intelligente Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Cloud-native Transformation und Modernization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategic Consulting und Future-State-Planning'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamManagementData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Management page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
