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
    console.log('Creating IAM Framework page...')

    const iamFrameworkData = {
      _type: 'servicePage',
      _id: 'iam-framework',
      title: 'IAM Framework - Strategische Identitäts-Governance-Architektur',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-framework'
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
        title: 'IAM Framework - Strategische Identitäts-Governance-Architektur | ADVISORI',
        description: 'Professionelle IAM Framework Entwicklung: Enterprise-Identitäts-Governance, strategische Architektur-Design, Compliance-Integration und skalierbare Framework-Implementierung für moderne Unternehmen.',
        keywords: 'IAM Framework, Identity Governance Framework, IAM Architektur, Identity Management Framework, Enterprise IAM, IAM Governance, Identity Framework Design, IAM Standards, Identity Architecture, IAM Best Practices'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Framework Strategische Identitäts-Governance-Architektur'
        },
        tagline: 'Enterprise-Identitäts-Governance durch strategische Framework-Architektur',
        heading: 'IAM Framework - Strategische Identitäts-Governance-Architektur',
        description: 'IAM Frameworks bilden das strategische Fundament moderner Identitätsverwaltung und ermöglichen es Unternehmen, komplexe Identitätslandschaften durch strukturierte Governance-Architekturen zu orchestrieren. Unsere enterprise-grade Framework-Lösungen transformieren fragmentierte Identitätssysteme in kohärente, skalierbare Architekturen, die höchste Sicherheitsstandards mit optimaler Geschäftsintegration vereinen und dabei regulatorische Exzellenz sowie strategische Zukunftsfähigkeit gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische Identitäts-Governance mit enterprise-weiter Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Skalierbare Framework-Architekturen für globale Unternehmensstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Compliance-by-Design mit automatisierter regulatorischer Exzellenz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Zukunftssichere Architektur-Patterns für kontinuierliche Innovation'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische IAM-Framework-Architektur: Von Komplexität zu Orchestrierung',
        description: 'Moderne IAM Frameworks sind weit mehr als technische Implementierungen – sie sind strategische Governance-Architekturen, die das Fundament für enterprise-weite Identitätsverwaltung bilden und dabei Sicherheit, Compliance und Business-Enablement in einer kohärenten Struktur vereinen. In einer Ära zunehmender digitaler Komplexität und regulatorischer Anforderungen ermöglichen professionelle IAM-Frameworks die Transformation von fragmentierten Identitätssystemen zu orchestrierten, intelligenten Architekturen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Enterprise Identity Governance mit zentralisierter Framework-Orchestrierung aller Identitätsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Skalierbare Architektur-Patterns für globale Deployment-Strategien und Multi-Cloud-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Compliance-Framework-Integration für automatisierte regulatorische Exzellenz und Audit-Bereitschaft'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Zero-Trust-Framework-Design mit kontinuierlicher Verifikation und adaptiver Sicherheit'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'API-first Framework-Architektur für moderne Anwendungsintegration und Ecosystem-Konnektivität'
          }
        ],
        alert: {
          title: 'Framework-Imperativ',
          content: 'Unternehmen ohne strukturierte IAM-Frameworks sind exponentiell höheren Sicherheitsrisiken, Compliance-Verstößen und Skalierungsproblemen ausgesetzt. Moderne Cyber-Bedrohungen und regulatorische Komplexität erfordern systematische Framework-Ansätze für nachhaltige Identitätsverwaltung.'
        },
        whyUs: {
          title: 'ADVISORI Framework-Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Enterprise-Framework-Design mit strategischem Business-Alignment und ROI-Fokus'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Framework-Expertise für optimale Technologie-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Compliance-Framework-Integration für regulatorische Exzellenz und Audit-Bereitschaft'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Zukunftssichere Architektur-Patterns für kontinuierliche Innovation und Skalierung'
            }
          ]
        },
        additionalInfo: 'Die Evolution von IAM-Frameworks integriert zunehmend künstliche Intelligenz, maschinelles Lernen und Cloud-native Architekturen, um adaptive Governance-Strukturen zu ermöglichen und automatisierte Compliance-Prozesse zu realisieren. Diese technologische Konvergenz schafft neue Möglichkeiten für intelligente Framework-Orchestrierung, prädiktive Governance-Entscheidungen und selbstoptimierende Identitätsarchitekturen.',
        serviceDescription: 'Wir begleiten Sie durch die komplette IAM-Framework-Transformation – von der strategischen Architektur-Planung und Governance-Design über die Framework-Implementierung bis hin zur kontinuierlichen Optimierung und Innovation-Integration. Unser Ansatz kombiniert bewährte Framework-Methodologien mit innovativen Architektur-Patterns für eine IAM-Landschaft, die Ihre spezifischen Governance-Anforderungen optimal erfüllt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategic Framework Architecture Design und Enterprise-Governance-Planung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Compliance-Framework-Integration und regulatorische Architektur-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Cloud-native Framework-Implementation und Hybrid-Architektur-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Framework-Migration und Legacy-System-Integration ohne Business-Disruption'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Continuous Framework-Optimization und Performance-Enhancement'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer IAM-Framework-Entwicklungsansatz',
        description: 'Wir verfolgen einen ganzheitlichen, architektur-orientierten Ansatz für IAM-Framework-Entwicklung, der strategische Governance-Prinzipien mit technischer Exzellenz verbindet und dabei enterprise-weite Skalierbarkeit mit optimaler Compliance-Integration gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategic Framework Assessment und Enterprise-Architektur-Analyse mit Governance-Fokus'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Compliance-Framework-Design mit regulatorischer Integration und Audit-Bereitschaft'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Agile Framework-Implementation mit kontinuierlicher Integration und Testing'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Change Management und Governance-Adoption-Strategien für nachhaltige Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Framework-Evolution und Innovation-Integration für Zukunftssicherheit'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'IAM Frameworks sind das strategische Rückgrat moderner Unternehmenssicherheit und entscheiden maßgeblich über den Erfolg digitaler Transformationsinitiativen. Unsere Erfahrung zeigt, dass Organisationen mit strukturierten Framework-Architekturen nicht nur höhere Sicherheitsstandards erreichen, sondern auch signifikante Effizienzgewinne und Compliance-Vorteile realisieren. Ein professionell entwickeltes IAM-Framework ermöglicht es, Komplexität zu orchestrieren, Risiken zu minimieren und gleichzeitig die Grundlage für innovative Geschäftsmodelle zu schaffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategic Framework Architecture Design',
          description: 'Entwicklung einer umfassenden IAM-Framework-Architektur mit strategischer Governance-Integration, die Ihre Geschäftsziele unterstützt und eine klare Roadmap für die Framework-Transformation bereitstellt.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Enterprise-Framework-Vision und strategische Architektur-Planung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Comprehensive Current-State-Assessment und Framework-Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Governance-Architektur-Design mit Compliance-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'ROI-optimierte Framework-Roadmap und Business-Case-Entwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Enterprise Governance Implementation',
          description: 'Implementation robuster Governance-Strukturen mit automatisierten Compliance-Prozessen und intelligenten Policy-Management-Systemen für enterprise-weite Identitätsverwaltung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Identity Governance Framework mit Policy-Engine-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automated Compliance-Monitoring und Regulatory-Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Risk-based Governance Controls und Segregation of Duties'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Audit-Trail-Management und Forensic-Capabilities'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Framework Architecture Consulting',
          description: 'Spezialisierte Beratung für komplexe Framework-Architekturen mit Fokus auf Skalierbarkeit, Performance-Optimierung und zukunftssichere Technologie-Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Architecture Pattern Design und Best-Practice-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Scalability Planning und Performance-Optimization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Technology Stack Evaluation und Integration-Strategy'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Future-Proof Architecture Design und Innovation-Roadmap'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Compliance Framework Integration',
          description: 'Integration regulatorischer Anforderungen in IAM-Framework-Architekturen mit automatisierten Compliance-Prozessen und kontinuierlicher Audit-Bereitschaft.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Regulatory Framework Mapping und Compliance-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Automated Compliance-Validation und Continuous-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Audit-Ready Documentation und Evidence-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Risk Assessment Framework und Mitigation-Strategies'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Framework Migration und Legacy-Integration',
          description: 'Professionelle Migration bestehender Identitätssysteme zu modernen Framework-Architekturen mit nahtloser Legacy-Integration und minimaler Business-Disruption.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Legacy System Assessment und Migration-Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Phased Migration Strategy mit Risk-Mitigation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Data Migration und Identity-Consolidation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Business Continuity Planning und Rollback-Strategies'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Continuous Framework Optimization',
          description: 'Kontinuierliche Optimierung und Weiterentwicklung Ihrer IAM-Framework-Architektur mit Performance-Monitoring, Innovation-Integration und strategischer Evolution.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Performance Monitoring und Framework-Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Continuous Security Assessment und Vulnerability-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Innovation Integration und Technology-Roadmap-Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategic Framework Evolution und Business-Alignment-Reviews'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamFrameworkData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Framework page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
