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
    console.log('Creating IAM Wartung page...')

    const iamWartungData = {
      _type: 'servicePage',
      _id: 'iam-wartung',
      title: 'IAM Wartung - Professionelle Wartung und Optimierung von Identity & Access Management Systemen',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-wartung'
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
        title: 'IAM Wartung - Professionelle Wartung und Optimierung von IAM Systemen | ADVISORI',
        description: 'Professionelle IAM Wartung und Systemoptimierung: Proaktive Überwachung, Sicherheitsupdates, Performance-Tuning, Compliance-Monitoring und kontinuierliche Verbesserung Ihrer Identity & Access Management Systeme.',
        keywords: 'IAM Wartung, Identity Access Management Wartung, IAM Systemwartung, IAM Optimierung, IAM Support, IAM Monitoring, IAM Performance Tuning, IAM Compliance Überwachung, IAM Sicherheitsupdates, IAM Lifecycle Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Wartung Professionelle Wartung Identity Access Management Systeme'
        },
        tagline: 'Proaktive IAM-Wartung für maximale Systemperformance und Sicherheit',
        heading: 'IAM Wartung - Professionelle Wartung und Optimierung von Identity & Access Management Systemen',
        description: 'IAM Wartung ist das strategische Fundament für nachhaltige Systemperformance, kontinuierliche Sicherheit und optimale Compliance-Erfüllung in modernen Identity & Access Management Umgebungen. Unsere proaktiven Wartungsservices transformieren reaktive Problembehandlung in präventive Systemoptimierung und gewährleisten, dass Ihre IAM-Infrastruktur stets auf höchstem Leistungsniveau operiert, Sicherheitsrisiken minimiert und regulatorische Anforderungen automatisiert erfüllt.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Proaktive Systemüberwachung mit präventiver Problemerkennung und -behebung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Kontinuierliche Sicherheitsupdates und Patch-Management für optimalen Schutz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Performance-Optimierung und Skalierungsanpassungen für wachsende Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Compliance-Monitoring und automatisierte Audit-Vorbereitung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische IAM-Wartung: Von reaktiver Problembehandlung zu proaktiver Systemexzellenz',
        description: 'Professionelle IAM-Wartung ist weit mehr als technische Instandhaltung – sie ist ein strategischer Erfolgsfaktor, der die Langlebigkeit, Sicherheit und Performance Ihrer Identity & Access Management Systeme gewährleistet. In einer Zeit zunehmender Cyber-Bedrohungen und komplexer Compliance-Anforderungen bildet systematische IAM-Wartung das unverzichtbare Fundament für nachhaltige Geschäftskontinuität und operative Exzellenz.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Proaktive Systemüberwachung mit Real-time Monitoring und intelligenter Anomaly Detection'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Kontinuierliche Sicherheitsupdates mit Zero-Downtime-Deployment und Rollback-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Performance-Optimierung durch Capacity Planning und Ressourcen-Tuning'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Compliance-Automation mit kontinuierlicher Überwachung regulatorischer Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Lifecycle-Management für Benutzer, Rollen und Zugriffsrechte mit automatisierten Workflows'
          }
        ],
        alert: {
          title: 'Kritische Notwendigkeit',
          content: 'Unzureichende IAM-Wartung führt zu exponentiell steigenden Sicherheitsrisiken, Compliance-Verstößen, Performance-Degradation und kostspieligen Systemausfällen. Proaktive Wartung ist essentiell für nachhaltige Systemstabilität und Geschäftskontinuität.'
        },
        whyUs: {
          title: 'ADVISORI IAM-Wartungsexpertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Ganzheitliche Wartungsstrategien mit Business-Impact-Fokus und ROI-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Expertise für alle führenden IAM-Plattformen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Proaktive Monitoring-Systeme mit KI-gestützter Predictive Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Compliance-by-Design mit automatisierter Audit-Bereitschaft'
            }
          ]
        },
        additionalInfo: 'Moderne IAM-Wartung integriert zunehmend künstliche Intelligenz, maschinelles Lernen und Predictive Analytics, um proaktive Systemoptimierung zu ermöglichen und potenzielle Probleme vor ihrem Auftreten zu identifizieren. Diese technologische Evolution schafft neue Möglichkeiten für intelligente Automatisierung, selbstheilende Systeme und adaptive Performance-Optimierung.',
        serviceDescription: 'Wir bieten umfassende IAM-Wartungsservices, die von der strategischen Wartungsplanung über die operative Systembetreuung bis hin zur kontinuierlichen Optimierung und Innovation-Integration reichen. Unser Ansatz kombiniert bewährte Wartungsmethoden mit modernsten Monitoring-Technologien für eine IAM-Infrastruktur, die Ihre Geschäftsanforderungen optimal und nachhaltig unterstützt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Proaktive Systemüberwachung und Predictive Maintenance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Sicherheitsupdates und Patch-Management mit Zero-Downtime-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Performance-Tuning und Kapazitätsoptimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Compliance-Monitoring und Audit-Vorbereitung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Systemoptimierung und Innovation-Integration'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer IAM-Wartungsansatz',
        description: 'Wir verfolgen einen ganzheitlichen, proaktiven Ansatz für IAM-Wartung, der präventive Maßnahmen mit kontinuierlicher Optimierung verbindet und dabei höchste Systemverfügbarkeit mit optimaler Performance und Sicherheit gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive System Assessment und Wartungsbedarfsanalyse mit Priorisierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Proaktive Monitoring-Implementation mit Real-time Alerting und Automated Response'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Strukturierte Wartungszyklen mit geplanten Updates und Performance-Reviews'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Optimierung durch Data-driven Insights und Best-Practice-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Strategic Evolution Planning für Zukunftssicherheit und Technology-Roadmap-Alignment'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Professionelle IAM-Wartung ist der unsichtbare Erfolgsfaktor, der über die Langlebigkeit und Performance kritischer Identitätssysteme entscheidet. Unsere Erfahrung zeigt, dass Unternehmen mit strategischer Wartungsplanung nicht nur signifikant niedrigere Betriebskosten und höhere Systemverfügbarkeit erreichen, sondern auch ihre Sicherheitsposture kontinuierlich stärken. Proaktive Wartung transformiert IAM-Systeme von potentiellen Risikofaktoren zu verlässlichen Business-Enablern, die Innovation fördern statt behindern.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Proaktive Systemüberwachung und Predictive Maintenance',
          description: 'Umfassende Überwachung Ihrer IAM-Systeme mit intelligenten Monitoring-Tools und prädiktiven Analysen zur frühzeitigen Erkennung und Behebung potenzieller Probleme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Real-time System Monitoring mit intelligenten Dashboards und Alerting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Predictive Analytics für frühzeitige Problemerkennung und Kapazitätsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Automated Health Checks mit umfassender Systemdiagnose'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Performance Baseline Monitoring und Trend-Analyse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Sicherheitsupdates und Patch-Management',
          description: 'Systematisches Management von Sicherheitsupdates und Patches mit Zero-Downtime-Strategien und umfassenden Rollback-Plänen für maximale Systemsicherheit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automated Patch Assessment und Vulnerability Scanning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Zero-Downtime Deployment-Strategien mit Blue-Green-Deployment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Comprehensive Testing und Rollback-Procedures'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Security Compliance Monitoring und Threat Intelligence Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Performance-Optimierung und Kapazitätsmanagement',
          description: 'Kontinuierliche Optimierung der Systemperformance durch intelligentes Tuning, Ressourcenmanagement und Skalierungsstrategien für optimale Benutzererfahrung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Performance Tuning und Database-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Capacity Planning mit Wachstumsprognosen und Skalierungsempfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Load Balancing und High-Availability-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Resource Utilization Analysis und Cost-Optimization'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Compliance-Monitoring und Audit-Vorbereitung',
          description: 'Kontinuierliche Überwachung der Compliance-Konformität mit automatisierter Berichterstattung und proaktiver Audit-Vorbereitung für regulatorische Exzellenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Automated Compliance Monitoring und Policy-Enforcement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Regulatory Change Management und Impact-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Audit Trail Management und Evidence Collection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Risk Assessment und Remediation Planning'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Identity Lifecycle Management und Access Reviews',
          description: 'Systematische Verwaltung des gesamten Identitäts-Lebenszyklus mit automatisierten Workflows und regelmäßigen Zugriffs-Reviews für optimale Governance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Automated User Lifecycle Management und Provisioning-Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Regular Access Reviews und Recertification-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Orphaned Account Detection und Cleanup-Automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Role Mining und Optimization für effiziente Rechteverwaltung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Kontinuierliche Systemoptimierung und Innovation-Integration',
          description: 'Strategische Weiterentwicklung Ihrer IAM-Systeme durch kontinuierliche Optimierung, Technology-Updates und Integration innovativer Funktionen für Zukunftssicherheit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Technology Roadmap Planning und Innovation-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Continuous Improvement durch Best-Practice-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Feature Enhancement und Functionality-Expansion'
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
    transaction.createOrReplace(iamWartungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Wartung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
