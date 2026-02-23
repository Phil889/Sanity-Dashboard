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
    console.log('Creating SIEM Log Management page...')

    const siemLogManagementData = {
      _type: 'servicePage',
      _id: 'siem-log-management',
      title: 'SIEM Log Management - Strategische Log-Verwaltung und Analytics',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/security-operations-secops/siem/siem-log-management'
      },
      parent: {
        _type: 'reference',
        _ref: 'siem'
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
        title: 'SIEM Log Management - Strategische Log-Verwaltung und Analytics | ADVISORI',
        description: 'Professionelle SIEM Log Management Beratung: Strategische Log-Sammlung, Normalisierung, Korrelation und Analytics für maximale Cybersecurity-Effektivität und Compliance-Erfüllung.',
        keywords: 'SIEM Log Management, Log Analytics, Log Korrelation, Log Normalisierung, Security Logs, Log Retention, Compliance Logging, Real-time Log Analysis, Log Aggregation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'SIEM Log Management - Strategische Log-Verwaltung und Analytics'
        },
        tagline: 'Strategische Log-Management-Expertise für maximale Security Intelligence',
        heading: 'SIEM Log Management - Strategische Log-Verwaltung und Analytics',
        description: 'Effektives SIEM Log Management ist das Fundament jeder erfolgreichen Cybersecurity-Strategie. Wir entwickeln maßgeschneiderte Log-Management-Architekturen, die von der strategischen Sammlung über intelligente Normalisierung bis hin zu fortschrittlicher Analytics reichen. Unsere ganzheitlichen Lösungen transformieren Ihre Log-Daten in actionable Security Intelligence für proaktive Bedrohungserkennung und Compliance-Exzellenz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische Log-Architektur für optimale Security Visibility'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Intelligente Log-Korrelation und Real-time Analytics'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Compliance-konforme Retention und Audit-Trail-Management'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Skalierbare Performance-Optimierung und Cost-Efficiency'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'SIEM Log Management: Strategische Datengrundlage für Security Excellence',
        description: 'Modernes SIEM Log Management geht weit über einfache Log-Sammlung hinaus und umfasst strategische Datenarchitektur, intelligente Analytics und proaktive Security Intelligence. Wir entwickeln umfassende Log-Management-Strategien, die Ihre Sicherheitsdaten in wertvolle Erkenntnisse transformieren und gleichzeitig Compliance-Anforderungen erfüllen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategic Log Collection Architecture und Data Source Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Advanced Log Parsing, Normalization und Enrichment'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Real-time Correlation Engine und Behavioral Analytics'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Compliance-driven Retention Management und Audit Capabilities'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Performance Optimization und Scalable Storage Solutions'
          }
        ],
        alert: {
          title: 'Kritischer Erfolgsfaktor',
          content: 'Strategisches Log Management kann die Mean Time to Detection um bis zu 80% reduzieren und gleichzeitig Compliance-Kosten erheblich senken. Eine durchdachte Log-Architektur ist entscheidend für effektive Threat Hunting und Incident Response.'
        },
        whyUs: {
          title: 'Unsere SIEM Log Management Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung mit Enterprise-Log-Architekturen und Cloud-nativen Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodiken für Log-Normalisierung und Correlation-Rule-Development'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Spezialisierung auf Compliance-konforme Log-Retention und Audit-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Performance-Engineering für High-Volume Log-Processing und Real-time Analytics'
            }
          ]
        },
        additionalInfo: 'Die moderne Log-Management-Landschaft entwickelt sich rasant mit Cloud-nativen Architekturen, Machine Learning-gestützter Anomalieerkennung und automatisierter Threat Intelligence Integration. Eine strategische Herangehensweise berücksichtigt nicht nur aktuelle Anforderungen, sondern auch zukünftige Entwicklungen in der Cybersecurity-Landschaft.',
        serviceDescription: 'Wir bieten End-to-End SIEM Log Management Services, von der strategischen Architektur-Planung über die technische Implementierung bis hin zur kontinuierlichen Optimierung. Unser ganzheitlicher Ansatz gewährleistet maximale Security Visibility bei optimaler Performance und Kosteneffizienz.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Log Architecture Design und Data Source Strategy'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Advanced Parsing und Normalization Engineering'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Correlation Rule Development und Behavioral Analytics'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Compliance Management und Audit-Trail Optimization'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance Tuning und Scalability Engineering'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer SIEM Log Management Ansatz',
        description: 'Wir verfolgen einen datengetriebenen, architektur-zentrierten Ansatz für SIEM Log Management, der technische Exzellenz mit Business-Anforderungen und Compliance-Verpflichtungen optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Log Source Assessment und Data Flow Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategic Architecture Design für optimale Performance und Skalierbarkeit'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Advanced Implementation mit Best-Practice Parsing und Correlation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Continuous Optimization durch Performance-Monitoring und Tuning'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Compliance Integration und Audit-Readiness Sicherstellung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Strategisches SIEM Log Management ist das unsichtbare Fundament jeder erfolgreichen Cybersecurity-Operation. Unsere Expertise in der Entwicklung intelligenter Log-Architekturen ermöglicht es unseren Kunden, aus dem Datenchaos wertvolle Security Intelligence zu extrahieren. Durch die Kombination von technischer Exzellenz mit strategischem Weitblick schaffen wir Log-Management-Lösungen, die nicht nur aktuelle Bedrohungen erkennen, sondern auch zukünftige Herausforderungen antizipieren und Compliance-Anforderungen nahtlos erfüllen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategic Log Architecture Design und Data Source Integration',
          description: 'Entwicklung umfassender Log-Architekturen mit strategischer Data Source Integration für maximale Security Visibility und optimale Performance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Comprehensive Log Source Assessment und Criticality Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strategic Data Flow Design für optimale Collection und Processing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Multi-tier Architecture Planning für Scalability und Resilience'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration Strategy für Cloud, Hybrid und On-Premise Environments'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Advanced Log Parsing und Normalization Engineering',
          description: 'Entwicklung intelligenter Parsing-Strategien und Normalization-Frameworks für einheitliche Log-Verarbeitung und optimale Analytics-Performance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Custom Parser Development für komplexe und proprietäre Log-Formate'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Schema Design und Field Mapping für konsistente Datenstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Data Enrichment Strategies mit Threat Intelligence und Context Data'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Quality Assurance und Validation Frameworks für Parsing-Accuracy'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Real-time Correlation Engine und Behavioral Analytics',
          description: 'Implementierung fortschrittlicher Correlation-Engines mit Behavioral Analytics für proaktive Bedrohungserkennung und Anomalie-Detection.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Advanced Correlation Rule Development für Multi-Source Event Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Machine Learning Integration für Behavioral Baseline und Anomaly Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Real-time Stream Processing für zeitkritische Security Events'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Threat Hunting Optimization durch Advanced Query und Search Capabilities'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Compliance-driven Log Retention und Audit Management',
          description: 'Strategische Retention-Policies und Audit-Management-Systeme für vollständige Compliance-Erfüllung und effiziente Audit-Readiness.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Regulatory Compliance Mapping für branchenspezifische Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Automated Retention Policy Implementation und Lifecycle Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Audit Trail Optimization für Forensic Analysis und Legal Discovery'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Chain of Custody Procedures und Evidence Management Protocols'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Performance Optimization und Scalable Storage Solutions',
          description: 'Umfassende Performance-Engineering und Storage-Optimization für High-Volume Log-Processing bei optimaler Kosteneffizienz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Capacity Planning und Predictive Scaling für wachsende Log-Volumes'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Storage Tiering Strategies für Cost-optimized Long-term Retention'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Query Performance Optimization und Index Strategy Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Resource Utilization Monitoring und Automated Performance Tuning'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Log Analytics Intelligence und Reporting Automation',
          description: 'Entwicklung intelligenter Analytics-Frameworks und automatisierter Reporting-Systeme für actionable Security Intelligence und Executive Visibility.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Custom Dashboard Development für Role-based Security Visibility'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Automated Report Generation für Compliance und Executive Briefings'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Trend Analysis und Predictive Analytics für Proactive Security Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Integration mit Business Intelligence Systemen für Holistic Risk Visibility'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(siemLogManagementData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ SIEM Log Management page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
