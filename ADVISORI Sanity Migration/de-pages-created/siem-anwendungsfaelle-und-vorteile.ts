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
    console.log('Creating SIEM Anwendungsfälle und Vorteile page...')

    const siemAnwendungsfaelleData = {
      _type: 'servicePage',
      _id: 'siem-anwendungsfaelle-und-vorteile',
      title: 'SIEM Anwendungsfälle und Vorteile - Strategische Cybersecurity-Wertschöpfung',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/security-operations-secops/siem/siem-anwendungsfaelle-und-vorteile'
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
        title: 'SIEM Anwendungsfälle und Vorteile - Strategische Cybersecurity-Wertschöpfung | ADVISORI',
        description: 'Entdecken Sie strategische SIEM Anwendungsfälle und Business-Vorteile: Threat Detection, Compliance Monitoring, Incident Response und ROI-Maximierung für nachhaltige Cybersecurity-Exzellenz.',
        keywords: 'SIEM Anwendungsfälle, SIEM Vorteile, SIEM Use Cases, SIEM ROI, Threat Detection, Compliance Monitoring, Incident Response, Security Analytics, SIEM Business Value'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'SIEM Anwendungsfälle und Vorteile - Strategische Cybersecurity-Wertschöpfung'
        },
        tagline: 'Maximale Cybersecurity-Wertschöpfung durch strategische SIEM-Nutzung',
        heading: 'SIEM Anwendungsfälle und Vorteile - Strategische Cybersecurity-Wertschöpfung',
        description: 'SIEM-Systeme bieten weit mehr als nur Log-Management und Monitoring. Wir zeigen Ihnen, wie Sie durch strategische Anwendungsfälle und optimierte Nutzung maximalen Business-Value generieren. Von Advanced Threat Detection über Compliance Automation bis hin zu proaktivem Risk Management entwickeln wir maßgeschneiderte SIEM-Strategien, die messbare Sicherheitsverbesserungen und nachhaltigen ROI liefern.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische SIEM Use Case-Entwicklung für maximalen Business-Impact'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'ROI-optimierte Implementierung und Value Realization'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Advanced Analytics und Threat Intelligence Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Compliance Automation und Regulatory Excellence'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'SIEM Anwendungsfälle: Von der Technologie zur strategischen Cybersecurity-Wertschöpfung',
        description: 'Moderne SIEM-Systeme sind strategische Cybersecurity-Plattformen, die bei richtiger Nutzung transformative Business-Vorteile liefern. Wir entwickeln mit Ihnen maßgeschneiderte Anwendungsfälle, die nicht nur technische Anforderungen erfüllen, sondern messbare Geschäftswerte schaffen und Ihre Cybersecurity-Investitionen maximieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategic Use Case Development und Business Value Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Advanced Threat Detection und Behavioral Analytics'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Compliance Automation und Regulatory Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Incident Response Orchestration und SOAR Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Risk Management Integration und Business Context Analytics'
          }
        ],
        alert: {
          title: 'Strategischer Wertschöpfungs-Multiplikator',
          content: 'Organisationen, die SIEM-Systeme strategisch für spezifische Use Cases optimieren, erzielen durchschnittlich dreimal höhere ROI-Werte und reduzieren gleichzeitig Incident Response-Zeiten um bis zu 80%. Der Schlüssel liegt in der gezielten Anwendungsfall-Entwicklung.'
        },
        whyUs: {
          title: 'Unsere SIEM Use Case Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Branchenübergreifende Erfahrung in strategischer SIEM Use Case-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodiken für ROI-Maximierung und Value Realization'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integration von Business Context und Cybersecurity-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Optimierung und Performance-Monitoring'
            }
          ]
        },
        additionalInfo: 'Die Wertschöpfung von SIEM-Systemen entfaltet sich erst durch strategische Anwendungsfälle, die Business-Anforderungen mit Cybersecurity-Zielen verbinden. Von proaktiver Threat Hunting über automatisierte Compliance-Prozesse bis hin zu datengetriebenen Risk Management-Entscheidungen schaffen wir Use Cases, die nachhaltigen Mehrwert generieren.',
        serviceDescription: 'Wir entwickeln mit Ihnen strategische SIEM-Anwendungsfälle, die maximalen Business-Value schaffen und Ihre Cybersecurity-Investitionen rechtfertigen. Unser ganzheitlicher Ansatz verbindet technische Exzellenz mit Business-Verständnis für nachhaltige Wertschöpfung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategic Use Case Assessment und Business Value Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Advanced Analytics Implementation und Threat Intelligence Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Compliance Automation und Regulatory Excellence'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'ROI-Tracking und Continuous Value Optimization'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Business Context Integration und Risk-based Prioritization'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer SIEM Use Case Ansatz',
        description: 'Wir verfolgen einen business-orientierten Ansatz für SIEM-Anwendungsfälle, der technische Capabilities mit strategischen Geschäftszielen verbindet und messbare Wertschöpfung in den Mittelpunkt stellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Business Value Assessment und Strategic Use Case Prioritization'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Technical Implementation mit Business Context Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Performance Monitoring und ROI-Tracking für kontinuierliche Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Stakeholder Alignment und Change Management für nachhaltige Adoption'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Improvement und Evolution der Use Cases'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Der wahre Wert von SIEM-Systemen entfaltet sich erst durch strategisch entwickelte Anwendungsfälle, die Business-Anforderungen mit Cybersecurity-Zielen verbinden. Unsere Expertise liegt darin, Use Cases zu identifizieren und zu implementieren, die nicht nur technische Exzellenz bieten, sondern messbare Geschäftswerte schaffen. Durch die Integration von Advanced Analytics, Threat Intelligence und Business Context schaffen wir SIEM-Lösungen, die als strategische Cybersecurity-Plattformen fungieren und nachhaltigen ROI generieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategic Use Case Development und Business Value Mapping',
          description: 'Entwicklung strategischer SIEM-Anwendungsfälle mit klarem Business Value und ROI-Fokus für maximale Cybersecurity-Wertschöpfung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Business Requirements Analysis und Strategic Use Case Identification'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Value Stream Mapping und ROI-Modellierung für verschiedene Use Cases'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Stakeholder Alignment und Use Case Prioritization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Implementation Roadmap und Success Metrics Definition'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Advanced Threat Detection und Security Analytics',
          description: 'Implementation fortschrittlicher Threat Detection-Capabilities mit Machine Learning und Behavioral Analytics für proaktive Cybersecurity.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Behavioral Analytics Implementation für Anomaly Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Machine Learning Model Development für Advanced Threat Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Threat Intelligence Integration und Contextual Enrichment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Custom Rule Development und False Positive Optimization'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Compliance Automation und Regulatory Excellence',
          description: 'Automatisierung von Compliance-Prozessen und regulatorischem Reporting durch strategische SIEM-Nutzung für Regulatory Excellence.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Regulatory Framework Mapping und Compliance Use Case Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Automated Reporting und Audit Trail Generation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Control Effectiveness Monitoring und Compliance Dashboard'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Regulatory Change Management und Adaptive Compliance'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Incident Response Orchestration und SOAR Integration',
          description: 'Integration von SIEM mit Security Orchestration Platforms für automatisierte Incident Response und optimierte Security Operations.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'SOAR Platform Integration und Workflow Automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Incident Classification und Automated Response Playbooks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Threat Hunting Automation und Proactive Investigation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Response Time Optimization und Metrics-driven Improvement'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Risk Management Integration und Business Context Analytics',
          description: 'Integration von SIEM-Daten in Risk Management-Prozesse mit Business Context für datengetriebene Cybersecurity-Entscheidungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Business Asset Mapping und Risk Context Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Risk-based Alert Prioritization und Business Impact Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Executive Dashboards und Risk Communication'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Predictive Risk Analytics und Trend Analysis'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'ROI-Tracking und Continuous Value Optimization',
          description: 'Kontinuierliche Messung und Optimierung des SIEM-ROI durch Performance-Monitoring und Value Realization-Tracking.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'ROI Measurement Framework und Value Tracking Metrics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Performance Optimization und Efficiency Improvement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Cost-Benefit Analysis und Investment Justification'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Continuous Improvement Program und Value Enhancement'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(siemAnwendungsfaelleData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ SIEM Anwendungsfälle und Vorteile page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
