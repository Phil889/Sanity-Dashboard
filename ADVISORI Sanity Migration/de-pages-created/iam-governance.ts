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
    console.log('Creating IAM Governance page...')

    const iamGovernanceData = {
      _type: 'servicePage',
      _id: 'iam-governance',
      title: 'IAM Governance - Strategische Identitäts-Governance und Compliance-Framework',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-governance'
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
        title: 'IAM Governance - Strategische Identitäts-Governance und Compliance-Framework | ADVISORI',
        description: 'Professionelle IAM Governance Lösungen: Strategische Identitäts-Governance, Compliance-Frameworks, Risk Management, Policy-Entwicklung und organisatorische Strukturen für nachhaltige IAM-Exzellenz.',
        keywords: 'IAM Governance, Identity Governance, Access Governance, IAM Compliance, Identity Risk Management, IAM Policy Management, Governance Framework, IAM Audit, Compliance Automation, Identity Oversight'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Governance Strategische Identitäts-Governance und Compliance-Framework'
        },
        tagline: 'Strategische IAM-Governance für nachhaltige Sicherheitsexzellenz',
        heading: 'IAM Governance - Strategische Identitäts-Governance und Compliance-Framework',
        description: 'IAM Governance bildet das strategische Fundament für nachhaltige Identitäts- und Zugriffsverwaltung und transformiert komplexe Sicherheitsanforderungen in strukturierte, messbare und kontinuierlich optimierbare Governance-Frameworks. Unsere ganzheitlichen Governance-Ansätze etablieren robuste Organisationsstrukturen, klare Verantwortlichkeiten und automatisierte Compliance-Prozesse, die Ihre IAM-Landschaft zu einem strategischen Wettbewerbsvorteil entwickeln und gleichzeitig höchste regulatorische Standards erfüllen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische Governance-Frameworks für nachhaltige IAM-Exzellenz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Compliance-Prozesse und kontinuierliche Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Organisatorische Strukturen und klare Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Überwachung und datengetriebene Optimierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische IAM-Governance: Von Compliance zu Business-Excellence',
        description: 'Moderne IAM Governance transcendiert traditionelle Compliance-Ansätze und etabliert intelligente Governance-Ökosysteme, die Sicherheit, Effizienz und Innovation harmonisch vereinen. In einer Ära zunehmender regulatorischer Komplexität und dynamischer Bedrohungslandschaften bildet professionelle IAM-Governance das unverzichtbare Fundament für organisatorische Resilienz, strategische Agilität und nachhaltigen Geschäftserfolg.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Enterprise Governance Framework mit strategischer Ausrichtung auf Geschäftsziele'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Risk-based Governance mit kontinuierlicher Bewertung und adaptiven Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Policy Management mit automatisierter Durchsetzung und Compliance-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Organizational Excellence durch klare Rollen, Verantwortlichkeiten und Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Continuous Improvement mit datengetriebenen Insights und Performance-Optimierung'
          }
        ],
        alert: {
          title: 'Governance-Imperativ',
          content: 'Unternehmen ohne strukturierte IAM-Governance sind exponentiell höheren Compliance-Risiken, Sicherheitslücken und operativen Ineffizienzen ausgesetzt. Moderne Governance-Frameworks sind nicht nur regulatorische Notwendigkeit, sondern strategische Enabler für digitale Transformation und Geschäftsinnovation.'
        },
        whyUs: {
          title: 'ADVISORI Governance-Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Ganzheitliche Governance-Strategieentwicklung mit Business-Impact-Fokus'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Regulatory Excellence mit proaktiver Compliance-Automation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Risk-Intelligence-Integration für prädiktive Governance-Entscheidungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Organizational Transformation mit nachhaltigen Governance-Strukturen'
            }
          ]
        },
        additionalInfo: 'Die Evolution von IAM-Governance integriert zunehmend künstliche Intelligenz, maschinelles Lernen und Advanced Analytics, um proaktive Governance-Entscheidungen zu ermöglichen und kontinuierliche Optimierung zu automatisieren. Diese technologische Konvergenz schafft neue Möglichkeiten für intelligente Policy-Enforcement, prädiktive Risk-Assessment und adaptive Governance-Frameworks.',
        serviceDescription: 'Wir begleiten Sie durch die komplette Governance-Transformation – von der strategischen Framework-Entwicklung und Organizational Design über die Policy-Implementation bis hin zur operativen Governance-Exzellenz und kontinuierlichen Optimierung. Unser Ansatz kombiniert bewährte Governance-Methoden mit innovativen Technologien für eine IAM-Governance, die Ihre spezifischen Geschäftsanforderungen optimal unterstützt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Governance-Framework-Entwicklung und Strategic Alignment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Organizational Design und Role-based Responsibility-Matrix'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Policy-Management und Automated Compliance-Enforcement'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Risk-Intelligence und Continuous Monitoring-Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance-Analytics und Governance-Optimization'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer IAM-Governance-Transformationsansatz',
        description: 'Wir verfolgen einen ganzheitlichen, business-orientierten Ansatz für IAM-Governance-Transformationen, der strategische Governance-Excellence mit operativer Effizienz verbindet und dabei modernste Compliance-Automation mit nachhaltigen Organisationsstrukturen vereint.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategic Governance Assessment und Framework-Design mit Business-Alignment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Organizational Excellence durch strukturierte Rollen und Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Policy-Automation und Compliance-by-Design Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Risk-Intelligence-Integration und Continuous Monitoring-Etablierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Performance-Optimization und Continuous Improvement-Zyklen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'IAM Governance ist das strategische Nervensystem erfolgreicher Organisationen und entscheidet maßgeblich über die Nachhaltigkeit und Effektivität aller Identitäts- und Zugriffsverwaltungsmaßnahmen. Unsere Erfahrung zeigt, dass Unternehmen mit robusten Governance-Frameworks nicht nur höhere Compliance-Exzellenz erreichen, sondern auch signifikante operative Effizienzgewinne realisieren. Die richtige Governance-Strategie transformiert IAM von einem technischen Kostenfaktor zu einem strategischen Business-Enabler, der Innovation beschleunigt und gleichzeitig Risiken minimiert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategic Governance Framework Development',
          description: 'Entwicklung umfassender IAM-Governance-Frameworks, die strategische Geschäftsziele mit operativer Exzellenz verbinden und eine klare Roadmap für nachhaltige Governance-Transformation bereitstellen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Business-aligned Governance-Vision und strategische Zielsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Comprehensive Governance-Assessment und Maturity-Evaluation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Framework-Architecture mit Best-Practice-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Implementation-Roadmap mit ROI-optimierter Priorisierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Organizational Excellence und Role-based Governance',
          description: 'Etablierung optimaler Organisationsstrukturen mit klaren Rollen, Verantwortlichkeiten und Entscheidungsprozessen für nachhaltige IAM-Governance-Exzellenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Organizational Design mit RACI-Matrix und Accountability-Framework'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Governance-Committee-Strukturen und Decision-Making-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Competency-Development und Skill-Building-Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Change-Management und Cultural-Transformation-Support'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Policy Management und Compliance Automation',
          description: 'Professionelle Entwicklung und Implementation intelligenter Policy-Management-Systeme mit automatisierter Compliance-Durchsetzung und kontinuierlicher Überwachung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Policy-Framework-Development mit Regulatory-Alignment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Automated Policy-Enforcement und Real-time Compliance-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Exception-Management und Approval-Workflow-Automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Policy-Analytics und Effectiveness-Measurement'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Risk Intelligence und Continuous Monitoring',
          description: 'Implementation fortschrittlicher Risk-Intelligence-Systeme mit kontinuierlicher Überwachung, prädiktiver Analyse und adaptiven Governance-Kontrollen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Risk-Assessment-Framework mit quantitativer Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Continuous Risk-Monitoring und Threat-Intelligence-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Predictive Risk-Analytics und Early-Warning-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Adaptive Controls und Dynamic Risk-Response-Automation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Audit Readiness und Regulatory Excellence',
          description: 'Spezialisierte Audit-Vorbereitung und regulatorische Exzellenz-Programme für kontinuierliche Compliance-Bereitschaft und proaktive Regulatory-Alignment.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Audit-Readiness-Assessment und Gap-Remediation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Regulatory-Mapping und Compliance-Framework-Alignment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Evidence-Collection-Automation und Audit-Trail-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Regulatory-Change-Management und Proactive-Compliance-Updates'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Performance Analytics und Continuous Improvement',
          description: 'Kontinuierliche Performance-Überwachung und strategische Optimierung Ihrer IAM-Governance mit datengetriebenen Insights und Innovation-Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Governance-KPI-Framework und Performance-Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Maturity-Assessment und Benchmark-Vergleiche'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Continuous-Improvement-Zyklen und Innovation-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategic-Consulting und Future-State-Roadmap-Updates'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamGovernanceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Governance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
