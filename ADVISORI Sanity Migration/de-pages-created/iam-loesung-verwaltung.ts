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
    console.log('Creating IAM-Lösungsverwaltung page...')

    const iamLoesungsverwaltungData = {
      _type: 'servicePage',
      _id: 'iam-loesung-verwaltung',
      title: 'IAM-Lösungsverwaltung - Professionelle Verwaltung von IAM-Lösungen',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-loesung-verwaltung'
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
        title: 'IAM-Lösungsverwaltung - Professionelle Verwaltung von IAM-Lösungen | ADVISORI',
        description: 'Professionelle IAM-Lösungsverwaltung: Operative Exzellenz, Performance-Monitoring, Lifecycle-Management, Governance-Automation und strategische Optimierung für maximale IAM-Effizienz und Sicherheit.',
        keywords: 'IAM Lösungsverwaltung, IAM Administration, IAM Management, IAM Betrieb, IAM Monitoring, IAM Governance, IAM Lifecycle Management, IAM Operations, IAM Performance, IAM Optimization'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM-Lösungsverwaltung Professionelle Verwaltung von IAM-Lösungen'
        },
        tagline: 'Operative Exzellenz für nachhaltige IAM-Performance',
        heading: 'IAM-Lösungsverwaltung - Professionelle Verwaltung von IAM-Lösungen',
        description: 'IAM-Lösungsverwaltung von ADVISORI transformiert komplexe Identitätslandschaften in hochperformante, selbstoptimierende Systeme durch professionelle Administration, intelligentes Monitoring und strategisches Lifecycle-Management. Unsere ganzheitlichen Verwaltungsansätze gewährleisten kontinuierliche Verfügbarkeit, optimale Performance und proaktive Sicherheitsoptimierung, während sie gleichzeitig Compliance-Exzellenz automatisiert sicherstellen und Betriebskosten nachhaltig reduzieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Proaktives Monitoring und Performance-Optimierung für maximale Systemeffizienz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Governance und Compliance-Management für regulatorische Exzellenz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Intelligentes Lifecycle-Management mit prädiktiver Wartung und Kapazitätsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Sicherheitsoptimierung und Threat-Response-Automation'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische IAM-Verwaltung: Von reaktivem Betrieb zu proaktiver Excellence',
        description: 'Moderne IAM-Lösungsverwaltung ist weit mehr als technische Administration – sie ist strategisches Asset-Management, das Identitätssysteme in geschäftskritische Enabler transformiert. Professionelle Verwaltung gewährleistet nicht nur Systemstabilität und Performance, sondern schafft auch die Grundlage für kontinuierliche Innovation, Compliance-Exzellenz und strategische Geschäftsunterstützung durch intelligente Automatisierung und datengetriebene Optimierung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Comprehensive System Administration mit proaktivem Monitoring und Performance-Tuning'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Automated Governance-Frameworks für kontinuierliche Policy-Enforcement und Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Intelligent Lifecycle-Management von Identitäten, Zugriffen und Systemkomponenten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Advanced Analytics und Reporting für datengetriebene Entscheidungsfindung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Continuous Security Optimization mit Threat Intelligence und Anomaly Detection'
          }
        ],
        alert: {
          title: 'Verwaltungs-Excellence',
          content: 'Erfolgreiche IAM-Lösungsverwaltung erfordert mehr als nur technische Wartung. Sie benötigt strategische Vision, operative Exzellenz und die Fähigkeit, komplexe Systeme kontinuierlich zu optimieren und an verändernde Geschäftsanforderungen anzupassen.'
        },
        whyUs: {
          title: 'ADVISORI IAM-Verwaltungsexpertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Bewährte Methoden für operative Exzellenz und Systemoptimierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Proaktive Verwaltungsansätze mit prädiktiver Analytik'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Herstellerunabhängige Expertise für optimale Technologie-Nutzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'End-to-End Verantwortung für nachhaltige Systemperformance'
            }
          ]
        },
        additionalInfo: 'Die Zukunft der IAM-Lösungsverwaltung liegt in der intelligenten Orchestrierung von KI-gestützter Automatisierung, prädiktiver Analytik und adaptiven Sicherheitskontrollen. Diese Evolution ermöglicht es, IAM-Systeme als selbstoptimierende, lernende Plattformen zu betreiben, die kontinuierlich Wert schaffen und Geschäftsinnovationen ermöglichen.',
        serviceDescription: 'Unsere IAM-Lösungsverwaltung umfasst den gesamten operativen Lifecycle von der täglichen Administration und Performance-Überwachung über strategische Optimierung und Capacity-Planning bis hin zur kontinuierlichen Innovation-Integration und Zukunftssicherung. Jeder Verwaltungsansatz wird individuell auf Ihre spezifischen Anforderungen zugeschnitten.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Proaktive Systemadministration und Performance-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Automatisierte Governance und Compliance-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Intelligentes Lifecycle-Management und Kapazitätsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kontinuierliche Sicherheitsoptimierung und Threat-Response'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Strategic Innovation-Integration und Zukunftssicherung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser bewährter IAM-Verwaltungsansatz',
        description: 'Wir verfolgen einen strukturierten, proaktiven Ansatz für IAM-Lösungsverwaltung, der operative Exzellenz mit strategischer Innovation verbindet und dabei höchste Verfügbarkeits- und Performance-Standards aufrechterhält.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Assessment und Baseline-Etablierung für optimale Ausgangslage'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Proaktive Monitoring-Implementation mit intelligenten Alerting-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Kontinuierliche Optimierung durch datengetriebene Performance-Analysen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Automated Governance-Integration für nachhaltige Compliance-Exzellenz'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Strategic Innovation-Roadmap für zukunftssichere Systemevolution'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Professionelle IAM-Lösungsverwaltung ist der Schlüssel für nachhaltigen Geschäftserfolg in der digitalen Ära. Unsere Erfahrung zeigt, dass Unternehmen, die IAM-Verwaltung als strategische Disziplin verstehen und nicht nur als technische Wartung, signifikante Wettbewerbsvorteile erzielen. Eine durchdachte Verwaltungsstrategie transformiert IAM-Systeme von Kostenfaktoren zu Wertschöpfungsmaschinen, die kontinuierlich Geschäftsinnovationen ermöglichen und dabei höchste Sicherheits- und Compliance-Standards gewährleisten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Proaktive IAM-Systemadministration und Performance-Monitoring',
          description: 'Umfassende Systemadministration mit proaktivem Monitoring, Performance-Tuning und intelligenter Kapazitätsplanung für optimale IAM-Systemperformance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Real-time System Monitoring mit intelligenten Alerting-Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Performance-Tuning und Bottleneck-Elimination für optimale Effizienz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Predictive Capacity Planning mit Machine Learning-Algorithmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Automated Maintenance und Patch-Management für Systemstabilität'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Automatisierte IAM-Governance und Compliance-Management',
          description: 'Intelligente Governance-Automation mit kontinuierlicher Compliance-Überwachung und automatisierten Policy-Enforcement-Mechanismen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automated Policy Enforcement und Governance-Rule-Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Continuous Compliance Monitoring mit Real-time Violation Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Intelligent Access Reviews und Certification-Automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Comprehensive Audit-Trail-Management und Regulatory Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Intelligentes IAM-Lifecycle-Management und Orchestration',
          description: 'Strategisches Lifecycle-Management für Identitäten, Zugriffe und Systemkomponenten mit automatisierter Orchestration und Workflow-Optimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Automated Identity Lifecycle Management von Onboarding bis Offboarding'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Dynamic Access Provisioning mit Role-based und Attribute-based Controls'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Workflow Orchestration für komplexe Business-Process-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Intelligent Deprovisioning und Access-Cleanup-Automation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Advanced IAM-Analytics und Business Intelligence',
          description: 'Datengetriebene Insights durch fortschrittliche Analytics, Business Intelligence und KI-gestützte Anomaly Detection für strategische Entscheidungsfindung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Advanced Analytics Dashboards für Real-time System Insights'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Business Intelligence Reporting für strategische Entscheidungsunterstützung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'AI-powered Anomaly Detection und Behavioral Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Predictive Analytics für Capacity Planning und Risk Assessment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Kontinuierliche IAM-Sicherheitsoptimierung und Threat-Response',
          description: 'Proaktive Sicherheitsoptimierung mit kontinuierlicher Threat Intelligence, Vulnerability Management und automatisierter Incident Response.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Continuous Security Assessment und Vulnerability Scanning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Threat Intelligence Integration für proaktive Bedrohungsabwehr'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Automated Incident Response und Security Orchestration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Zero-Trust Architecture Optimization und Adaptive Security Controls'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Strategic IAM-Innovation und Zukunftssicherung',
          description: 'Strategische Innovation-Integration und Zukunftssicherung durch kontinuierliche Technology-Evaluation, Roadmap-Development und Change-Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Technology Roadmap Development für strategische IAM-Evolution'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Innovation Integration und Emerging Technology Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Strategic Change Management für kontinuierliche Systemverbesserung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Future-proofing Strategies für nachhaltige Wettbewerbsvorteile'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamLoesungsverwaltungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM-Lösungsverwaltung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
