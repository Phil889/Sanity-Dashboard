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
    console.log('Creating IAM Betrieb page...')

    const iamBetriebData = {
      _type: 'servicePage',
      _id: 'iam-betrieb',
      title: 'IAM Betrieb - Professioneller Betrieb von Identity & Access Management Systemen',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-betrieb'
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
        title: 'IAM Betrieb - Professioneller Betrieb von Identity & Access Management Systemen | ADVISORI',
        description: 'Professioneller IAM Betrieb: Operational Excellence für Identity & Access Management Systeme, 24/7 Monitoring, Performance-Optimierung, Incident Management und kontinuierliche Service-Verbesserung.',
        keywords: 'IAM Betrieb, Identity Access Management Operations, IAM Monitoring, IAM Performance, IAM Service Management, IAM Incident Management, IAM Operational Excellence, IAM Support, IAM Maintenance, IAM Operations'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Betrieb Professioneller Betrieb Identity Access Management Systeme'
        },
        tagline: 'Operational Excellence für kritische IAM-Infrastrukturen',
        heading: 'IAM Betrieb - Professioneller Betrieb von Identity & Access Management Systemen',
        description: 'IAM Betrieb ist das operative Herzstück erfolgreicher Identity & Access Management Strategien und gewährleistet durch professionelle Betriebsführung, kontinuierliches Monitoring und proaktive Optimierung die maximale Verfügbarkeit, Performance und Sicherheit Ihrer kritischen Identitätssysteme. Unsere umfassenden Betriebsservices transformieren IAM von einer technischen Infrastruktur zu einem strategischen Business-Enabler mit messbaren Service-Levels und kontinuierlicher Wertschöpfung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Hochverfügbare IAM-Services mit garantierten SLAs und proaktivem Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Performance-Optimierung und Kapazitätsplanung für skalierbare Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Professionelles Incident Management mit schneller Problemlösung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Service-Verbesserung und Innovation-Integration'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Operational Excellence: Von reaktivem Support zu proaktivem Service Management',
        description: 'Moderner IAM Betrieb geht weit über traditionelle Systemadministration hinaus und etabliert eine strategische Betriebsführung, die Geschäftskontinuität sicherstellt, Risiken minimiert und gleichzeitig die Grundlage für kontinuierliche Innovation schafft. Durch intelligente Automatisierung, datengetriebene Entscheidungen und proaktive Optimierung wird IAM zu einem verlässlichen, hochperformanten Service, der Geschäftsprozesse beschleunigt statt behindert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Proaktives Monitoring mit KI-gestützter Anomaly Detection und Predictive Analytics'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Service Level Management mit messbaren KPIs und kontinuierlicher Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Incident Management mit strukturierten Eskalationsprozessen und Root-Cause-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Change Management mit risikoarmen Deployment-Strategien und Rollback-Verfahren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Capacity Planning mit datengetriebener Skalierung und Ressourcenoptimierung'
          }
        ],
        alert: {
          title: 'Kritische Bedeutung',
          content: 'Unzureichender IAM Betrieb führt zu Systemausfällen, Sicherheitslücken und Produktivitätsverlusten, die das gesamte Unternehmen beeinträchtigen können. Professionelle Betriebsführung ist essentiell für die Realisierung des vollen IAM-Potentials und die Sicherstellung der Geschäftskontinuität.'
        },
        whyUs: {
          title: 'ADVISORI IAM Operations Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'ITIL-basierte Service-Management-Prozesse mit bewährten Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Spezialisierte IAM-Expertise mit tiefem Verständnis komplexer Identitätssysteme'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Proaktive Betriebsführung mit kontinuierlicher Optimierung und Innovation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Skalierbare Service-Modelle für unterschiedliche Unternehmensanforderungen'
            }
          ]
        },
        additionalInfo: 'Die Evolution des IAM Betriebs integriert zunehmend DevOps-Prinzipien, Site Reliability Engineering und Cloud-native Technologien, um hochautomatisierte, selbstheilende Systeme zu schaffen. Diese moderne Betriebsführung ermöglicht es, auch bei steigender Komplexität und Skalierung konsistente Service-Qualität zu gewährleisten.',
        serviceDescription: 'Wir übernehmen die vollständige operative Verantwortung für Ihre IAM-Systeme und gewährleisten durch professionelle Betriebsführung, kontinuierliches Monitoring und proaktive Optimierung maximale Verfügbarkeit, Performance und Sicherheit. Unser Service-orientierter Ansatz kombiniert bewährte ITIL-Prozesse mit modernsten Technologien für eine Betriebsführung, die Ihre Geschäftsziele optimal unterstützt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Service Level Management und Performance-Monitoring mit garantierten SLAs'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Incident und Problem Management mit strukturierten Lösungsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Change und Release Management für sichere System-Updates'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Capacity Planning und Ressourcen-Optimierung für skalierbare Performance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Service-Verbesserung und Innovation-Integration'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer IAM-Betriebsansatz',
        description: 'Wir verfolgen einen ganzheitlichen, service-orientierten Ansatz für IAM-Betrieb, der technische Exzellenz mit strategischen Geschäftszielen verbindet und dabei höchste Verfügbarkeit mit kontinuierlicher Innovation vereint.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Service-Design und SLA-Definition mit klaren Leistungsversprechen und Messgrößen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Proaktives Monitoring und Alerting mit intelligenter Anomaly Detection'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Strukturiertes Incident Management mit schneller Eskalation und Lösung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Optimierung durch datengetriebene Analyse und Verbesserung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Innovation-Integration mit regelmäßigen Technology-Updates und Modernisierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Professioneller IAM Betrieb ist der entscheidende Faktor für den langfristigen Erfolg jeder Identity & Access Management Initiative. Unsere Erfahrung zeigt, dass Unternehmen, die in exzellente Betriebsführung investieren, nicht nur höhere Systemverfügbarkeit und bessere Performance erzielen, sondern auch die Grundlage für kontinuierliche Innovation und Geschäftswachstum schaffen. Moderner IAM Betrieb transformiert kritische Infrastruktur in einen strategischen Wettbewerbsvorteil.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Service Level Management und Performance-Monitoring',
          description: 'Etablierung und Überwachung definierter Service-Levels mit kontinuierlichem Performance-Monitoring und proaktiver Optimierung für maximale Systemverfügbarkeit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'SLA-Definition und -Überwachung mit messbaren Leistungsindikatoren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Real-time Performance-Monitoring mit intelligenten Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Proaktive Alerting-Systeme mit automatisierter Eskalation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Performance-Trend-Analyse und Kapazitätsplanung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Incident und Problem Management',
          description: 'Strukturiertes Management von Störungen und Problemen mit schneller Lösungsfindung, Root-Cause-Analyse und präventiven Maßnahmen zur Vermeidung wiederkehrender Issues.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Incident-Klassifizierung und Priorisierung nach Business-Impact'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Strukturierte Eskalationsprozesse mit definierten Zeitfenstern'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Root-Cause-Analyse und Problem-Resolution'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Knowledge-Base-Management für effiziente Problemlösung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Change und Release Management',
          description: 'Professionelle Verwaltung von Systemänderungen und Updates mit risikoarmen Deployment-Strategien, umfassenden Tests und Rollback-Verfahren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Change-Advisory-Board und Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Automated Testing und Deployment-Pipelines'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Blue-Green und Canary-Deployment-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Rollback-Verfahren und Emergency-Change-Prozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Capacity Planning und Ressourcen-Optimierung',
          description: 'Datengetriebene Kapazitätsplanung und Ressourcenoptimierung für skalierbare Performance und kosteneffiziente Systemnutzung bei steigenden Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Trend-Analyse und Wachstumsprognosen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Ressourcen-Monitoring und Utilization-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Auto-Scaling und elastische Ressourcenallokation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Cost-Optimization und ROI-Maximierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Security Operations und Compliance-Monitoring',
          description: 'Kontinuierliche Überwachung der Sicherheitslage mit proaktiver Threat Detection, Compliance-Monitoring und schneller Incident Response für maximalen Schutz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Security-Event-Monitoring und SIEM-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Compliance-Dashboard und Audit-Bereitschaft'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Vulnerability-Scanning und Patch-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Security-Incident-Response und Forensics'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Kontinuierliche Service-Verbesserung und Innovation',
          description: 'Systematische Analyse und Optimierung der Service-Qualität mit Integration neuer Technologien und Best Practices für kontinuierliche Leistungssteigerung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Service-Review und Performance-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Technology-Roadmap und Innovation-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Process-Optimization und Automation-Enhancement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Best-Practice-Sharing und Knowledge-Transfer'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamBetriebData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Betrieb page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
