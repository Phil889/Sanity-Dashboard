import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
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
    console.log('Creating FIDA Audit und Reporting page...')

    const fidaAuditData = {
      _type: 'servicePage',
      _id: 'fida-audit-and-reporting',
      title: 'FIDA Audit und Reporting',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/financial-data-access-fida/fida-audit-and-reporting'
      },
      parent: {
        _type: 'reference',
        _ref: 'financial-data-access-fida'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'regulatory-compliance-management'
        }
      },
      seo: {
        _type: 'seo',
        title: 'FIDA Audit und Reporting Services | ADVISORI',
        description: 'Professionelle FIDA-Audit- und Reporting-Services für Financial Data Access Compliance. Umfassende Prüfungsunterstützung, regulatorische Berichterstattung und kontinuierliche Überwachung.',
        keywords: 'FIDA Audit, FIDA Reporting, Financial Data Access Audit, Compliance Reporting, Regulatorische Prüfung, FIDA Überwachung, Audit Trail, Compliance Monitoring'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FIDA Audit und Reporting Services'
        },
        tagline: 'Professionelle FIDA-Audit- und Reporting-Excellence',
        heading: 'FIDA Audit und Reporting',
        description: 'Gewährleisten Sie vollständige FIDA-Compliance durch professionelle Audit- und Reporting-Services. Wir unterstützen Sie bei der Implementierung robuster Überwachungssysteme, der Vorbereitung auf regulatorische Prüfungen und der kontinuierlichen Compliance-Dokumentation.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende FIDA-Audit-Frameworks und Prüfungsunterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Reporting-Systeme und regulatorische Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kontinuierliche Compliance-Überwachung und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Professionelle Vorbereitung auf Aufsichtsprüfungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'FIDA-Audit und Reporting strategisch meistern',
        description: 'Die Financial Data Access Regulation erfordert umfassende Audit- und Reporting-Mechanismen, die über traditionelle Compliance-Ansätze hinausgehen. Unsere spezialisierten Services gewährleisten nicht nur regulatorische Konformität, sondern schaffen auch strategische Transparenz und operative Exzellenz.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung umfassender FIDA-Audit-Frameworks und Prüfungsstandards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementation automatisierter Reporting-Systeme und Dokumentationsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Aufbau kontinuierlicher Überwachungsmechanismen und Frühwarnsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Professionelle Vorbereitung und Unterstützung bei Aufsichtsprüfungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Strategische Analyse und Optimierung von Compliance-Performance'
          }
        ],
        alert: {
          title: 'Audit-Excellence als Wettbewerbsvorteil',
          content: 'Professionelle FIDA-Audit- und Reporting-Systeme schaffen nicht nur regulatorische Sicherheit, sondern auch operative Transparenz und strategische Einblicke, die Geschäftsentscheidungen verbessern und Stakeholder-Vertrauen stärken.'
        },
        whyUs: {
          title: 'Unsere FIDA-Audit-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Expertise in FIDA-Audit-Standards und regulatorischen Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Erfahrung in der Implementierung automatisierter Compliance-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Tiefgreifende Kenntnisse in Aufsichtsprüfungen und regulatorischen Erwartungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von operativer Umsetzung bis strategischer Optimierung'
            }
          ]
        },
        additionalInfo: 'FIDA-Audit und Reporting erfordern eine präzise Balance zwischen regulatorischer Compliance, operativer Effizienz und strategischer Transparenz. Unsere Services umfassen die gesamte Bandbreite von der technischen Implementation bis zur strategischen Analyse und kontinuierlichen Optimierung.',
        serviceDescription: 'Wir bieten end-to-end FIDA-Audit- und Reporting-Services, die technische Exzellenz mit regulatorischer Expertise verbinden. Unser Ansatz gewährleistet nicht nur vollständige Compliance, sondern schafft auch strategische Mehrwerte durch verbesserte Transparenz und operative Einblicke.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Umfassende FIDA-Audit-Framework-Entwicklung und -Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Automatisierte Reporting-Systeme und regulatorische Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Kontinuierliche Compliance-Überwachung und Performance-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Professionelle Aufsichtsprüfungs-Vorbereitung und -Unterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Strategische Analyse und kontinuierliche Optimierung der Audit-Prozesse'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer FIDA-Audit-Ansatz',
        description: 'Wir entwickeln mit Ihnen maßgeschneiderte Audit- und Reporting-Frameworks, die regulatorische Excellence mit operativer Effizienz verbinden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer aktuellen Audit- und Reporting-Landschaft'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung integrierter FIDA-Audit-Frameworks und Prüfungsstandards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementation automatisierter Monitoring- und Reporting-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Aufbau robuster Governance- und Qualitätssicherungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und strategische Weiterentwicklung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Professionelle FIDA-Audit- und Reporting-Systeme sind das Rückgrat erfolgreicher Compliance-Strategien. Unsere Expertise ermöglicht es Unternehmen, nicht nur regulatorische Anforderungen zu erfüllen, sondern auch strategische Transparenz und operative Exzellenz zu schaffen, die nachhaltigen Geschäftserfolg unterstützen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'FIDA-Audit-Framework-Entwicklung',
          description: 'Aufbau umfassender Audit-Frameworks, die alle FIDA-Anforderungen abdecken und gleichzeitig operative Effizienz gewährleisten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung maßgeschneiderter FIDA-Audit-Standards und Prüfungsmethodologien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Integration von Risikobewertung und Compliance-Monitoring in Audit-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Aufbau systematischer Dokumentations- und Nachweisführungsstandards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung von KPIs und Metriken für kontinuierliche Audit-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Automatisierte Reporting-Systeme',
          description: 'Implementation fortschrittlicher Reporting-Technologien für effiziente und präzise regulatorische Berichterstattung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung automatisierter FIDA-Reporting-Pipelines und Datenintegration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementation von Real-Time-Dashboards und Management-Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Aufbau robuster Datenqualitäts- und Validierungsmechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration mit bestehenden Systemen und Workflow-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Kontinuierliche Compliance-Überwachung',
          description: 'Aufbau umfassender Monitoring-Systeme für proaktive Compliance-Überwachung und Risikomanagement.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Implementation von Echtzeit-Monitoring und Alerting-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Entwicklung prädiktiver Analytik für Compliance-Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Aufbau automatisierter Exception-Reporting und Eskalationsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Integration von Trend-Analyse und Performance-Benchmarking'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Aufsichtsprüfungs-Vorbereitung',
          description: 'Professionelle Vorbereitung und Unterstützung bei regulatorischen Prüfungen und Aufsichtsverfahren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Entwicklung umfassender Prüfungsvorbereitungs-Checklisten und Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Durchführung von Mock-Audits und Schwachstellenanalysen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Schulung von Mitarbeitern für Prüfungssituationen und Kommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Begleitung während Aufsichtsprüfungen und Nachbetreuung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Audit-Trail-Management',
          description: 'Aufbau umfassender Audit-Trail-Systeme für lückenlose Nachverfolgbarkeit und Compliance-Nachweis.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Implementation robuster Audit-Trail-Architekturen und Datenarchivierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Entwicklung von Zugriffskontrollen und Integritätssicherung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Aufbau effizienter Such- und Analysefunktionen für Audit-Daten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Integration von Blockchain-Technologien für unveränderliche Nachweise'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Strategische Audit-Optimierung',
          description: 'Kontinuierliche Analyse und Optimierung von Audit-Prozessen für maximale Effizienz und strategischen Mehrwert.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Regelmäßige Bewertung und Benchmarking der Audit-Performance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Identifikation von Optimierungspotenzialen und Best-Practice-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Entwicklung strategischer Audit-Roadmaps und Zukunftsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Integration neuer Technologien und Innovationen in Audit-Prozesse'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(fidaAuditData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FIDA Audit und Reporting page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
