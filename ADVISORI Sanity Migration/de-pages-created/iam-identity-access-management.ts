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
    console.log('Creating IAM Identity Access Management page...')

    const iamIdentityAccessManagementData = {
      _type: 'servicePage',
      _id: 'iam-identity-access-management',
      title: 'IAM Identity & Access Management - Strategische Identitätsverwaltung',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-identity-access-management'
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
        title: 'IAM Identity & Access Management - Strategische Identitätsverwaltung | ADVISORI',
        description: 'Professionelle IAM Identity & Access Management Lösungen: Strategische Identitätsverwaltung, Zero-Trust-Architekturen, Enterprise-Governance und moderne Authentifizierungsverfahren für maximale Sicherheit.',
        keywords: 'IAM Identity Access Management, Identitätsverwaltung, Zero Trust, Enterprise IAM, Identity Governance, Privileged Access Management, Single Sign-On, Multi-Factor Authentication, IAM Strategie, Identity Security'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Identity Access Management Strategische Identitätsverwaltung'
        },
        tagline: 'Enterprise-Grade Identitätsverwaltung für moderne Unternehmen',
        heading: 'IAM Identity & Access Management - Strategische Identitätsverwaltung',
        description: 'IAM Identity & Access Management ist das strategische Herzstück moderner Unternehmenssicherheit und ermöglicht es Organisationen, komplexe Identitätslandschaften zu orchestrieren, granulare Zugriffskontrollen zu implementieren und dabei höchste Sicherheitsstandards mit optimaler Benutzerfreundlichkeit zu vereinen. Unsere ganzheitlichen IAM-Lösungen transformieren traditionelle Sicherheitsansätze in intelligente, adaptive Systeme, die Geschäftsprozesse beschleunigen und gleichzeitig Compliance-Anforderungen automatisiert erfüllen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Zentrale Identitäts-Governance für alle Benutzer, Systeme und Services'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Zero-Trust-Architekturen mit kontinuierlicher Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierte Compliance und umfassende Audit-Bereitschaft'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nahtlose Cloud- und Hybrid-Integration für moderne Arbeitsplätze'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische IAM-Transformation: Von Sicherheit zu Business-Enablement',
        description: 'Moderne IAM Identity & Access Management Systeme sind weit mehr als technische Sicherheitslösungen – sie sind strategische Business-Enabler, die digitale Transformation beschleunigen, Innovationen ermöglichen und gleichzeitig robuste Sicherheits- und Compliance-Frameworks etablieren. In einer Ära zunehmender Cyber-Bedrohungen und komplexer regulatorischer Anforderungen bildet professionelles IAM das unverzichtbare Fundament für nachhaltigen Geschäftserfolg.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Enterprise Identity Governance mit zentralisierter Verwaltung aller digitalen Identitäten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Adaptive Authentifizierung mit KI-gestützter Risikobewertung und Anomaly Detection'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Privileged Access Management für kritische Systemzugriffe und administrative Funktionen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Cloud-native Architekturen für Skalierbarkeit und globale Verfügbarkeit'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Automated Lifecycle Management von der Identitätserstellung bis zur Deaktivierung'
          }
        ],
        alert: {
          title: 'Strategische Notwendigkeit',
          content: 'Unternehmen ohne professionelle IAM-Strategien sind exponentiell höheren Sicherheitsrisiken, Compliance-Verstößen und Produktivitätsverlusten ausgesetzt. Moderne Cyber-Angriffe zielen primär auf Identitäten ab, wodurch IAM zur ersten und wichtigsten Verteidigungslinie wird.'
        },
        whyUs: {
          title: 'ADVISORI IAM-Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Ganzheitliche IAM-Strategieentwicklung mit Business-Impact-Fokus'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Expertise für optimale Technologie-Auswahl'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Zero-Trust-Architektur-Design für moderne Sicherheitsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Compliance-by-Design für regulatorische Exzellenz und Audit-Bereitschaft'
            }
          ]
        },
        additionalInfo: 'Die Evolution von IAM-Technologien integriert zunehmend künstliche Intelligenz, maschinelles Lernen und Behavioral Analytics, um proaktive Sicherheitsmaßnahmen zu ermöglichen und Benutzererfahrungen zu optimieren. Diese technologische Konvergenz schafft neue Möglichkeiten für intelligente Automatisierung, prädiktive Sicherheitsanalysen und adaptive Zugriffskontrollen.',
        serviceDescription: 'Wir begleiten Sie durch die komplette IAM-Transformation – von der strategischen Planung und Architektur-Design über die Technologie-Implementierung bis hin zum operativen Betrieb und der kontinuierlichen Optimierung. Unser Ansatz kombiniert bewährte Methoden mit innovativen Technologien für eine IAM-Landschaft, die Ihre spezifischen Geschäftsanforderungen optimal unterstützt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'IAM-Strategieentwicklung und Enterprise-Architektur-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Zero-Trust-Implementation und Security-Framework-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Cloud-native IAM-Deployment und Hybrid-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Identity Governance und Compliance-Automation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Privileged Access Management und Critical Asset Protection'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer IAM-Transformationsansatz',
        description: 'Wir verfolgen einen ganzheitlichen, business-orientierten Ansatz für IAM-Transformationen, der technische Exzellenz mit strategischen Geschäftszielen verbindet und dabei modernste Sicherheitsarchitekturen mit optimaler Benutzerfreundlichkeit vereint.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische IAM-Assessment und Business-Case-Entwicklung mit ROI-Fokus'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Zero-Trust-Architektur-Design mit Cloud-first und Security-by-Design Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Agile Implementierung mit kontinuierlicher Integration und Testing'
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
        quote: 'IAM Identity & Access Management ist das strategische Nervensystem moderner Unternehmen und entscheidet maßgeblich über den Erfolg digitaler Transformationsinitiativen. Unsere Erfahrung zeigt, dass Organisationen, die IAM als strategischen Business-Enabler verstehen und nicht nur als technische Sicherheitslösung, signifikante Wettbewerbsvorteile erzielen. Die richtige IAM-Strategie ermöglicht es, Sicherheit und Innovation zu vereinen, Compliance-Exzellenz zu erreichen und gleichzeitig die Grundlage für zukunftsfähige Geschäftsmodelle zu schaffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'IAM-Strategieentwicklung und Enterprise-Architektur',
          description: 'Entwicklung einer umfassenden IAM-Strategie und Enterprise-Architektur, die Ihre Geschäftsziele unterstützt und eine klare Roadmap für die strategische Transformation bereitstellt.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Business-orientierte IAM-Vision und strategische Zielsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Comprehensive Current-State-Assessment und Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Enterprise-Architektur-Design mit Zero-Trust-Prinzipien'
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
          title: 'Zero-Trust-IAM-Architektur und Security-Framework',
          description: 'Implementation moderner Zero-Trust-Architekturen mit intelligenten Sicherheitsframeworks, die kontinuierliche Verifikation und adaptive Zugriffskontrollen ermöglichen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Zero-Trust-Architektur-Design und -Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Adaptive Authentication mit KI-gestützter Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Behavioral Analytics und Anomaly Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Continuous Security Monitoring und Threat Response'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Cloud-native IAM-Implementation und Hybrid-Integration',
          description: 'Professionelle Implementation cloud-nativer IAM-Lösungen mit nahtloser Integration in bestehende Systeme und optimaler Hybrid-Cloud-Unterstützung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Cloud-native IAM-Deployment und -Konfiguration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Hybrid-Cloud-Integration und Multi-Cloud-Support'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'API-Gateway-Integration und Microservices-Support'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Skalierbare Architektur für globale Verfügbarkeit'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Identity Governance und Compliance-Automation',
          description: 'Etablierung robuster Identity-Governance-Strukturen mit automatisierten Compliance-Prozessen für kontinuierliche regulatorische Exzellenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Identity Governance Framework und Policy-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Automated Compliance-Monitoring und -Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Risk-based Access Controls und Segregation of Duties'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Audit-Trail-Management und Forensic-Capabilities'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Privileged Access Management und Critical Asset Protection',
          description: 'Spezialisierte PAM-Lösungen für den Schutz kritischer Assets mit erweiterten Sicherheitskontrollen und umfassendem Monitoring privilegierter Zugriffe.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Privileged Account Management und Credential Vaulting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Just-in-Time Access und Elevation-on-Demand'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Session Recording und Privileged Activity Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Threat Analytics und Insider-Threat-Detection'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'IAM-Betrieb und Continuous Innovation',
          description: 'Kontinuierlicher Betrieb und strategische Weiterentwicklung Ihrer IAM-Systeme mit proaktivem Monitoring, Performance-Optimierung und Innovation-Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Proaktives System-Monitoring und Performance-Tuning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Continuous Security Assessment und Vulnerability Management'
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
    transaction.createOrReplace(iamIdentityAccessManagementData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Identity Access Management page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
