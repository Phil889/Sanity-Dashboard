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
    console.log('Creating SIEM Compliance page...')

    const siemComplianceData = {
      _type: 'servicePage',
      _id: 'siem-compliance',
      title: 'SIEM Compliance - Regulatorische Anforderungen und Audit-Readiness',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/security-operations-secops/siem/siem-compliance'
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
        title: 'SIEM Compliance - Regulatorische Anforderungen und Audit-Readiness | ADVISORI',
        description: 'Professionelle SIEM Compliance Beratung: Regulatorische Anforderungen, Audit-Vorbereitung, Compliance-Monitoring und automatisierte Reporting-Lösungen für GDPR, SOX, PCI-DSS und weitere Frameworks.',
        keywords: 'SIEM Compliance, Regulatory Compliance, GDPR SIEM, SOX Compliance, PCI-DSS, Audit Readiness, Compliance Monitoring, Regulatory Reporting, SIEM Governance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'SIEM Compliance - Regulatorische Anforderungen und Audit-Readiness'
        },
        tagline: 'Strategische SIEM Compliance-Expertise für regulatorische Exzellenz',
        heading: 'SIEM Compliance - Regulatorische Anforderungen und Audit-Readiness',
        description: 'Regulatorische Compliance ist ein kritischer Erfolgsfaktor für moderne SIEM-Implementierungen. Wir unterstützen Sie bei der strategischen Ausrichtung Ihrer SIEM-Landschaft auf regulatorische Anforderungen, von der initialen Compliance-Bewertung über die Implementierung automatisierter Controls bis hin zur kontinuierlichen Audit-Readiness. Unsere Expertise umfasst alle relevanten Frameworks und gewährleistet nachhaltige Compliance-Exzellenz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Comprehensive Regulatory Framework Alignment und Compliance-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Compliance-Monitoring und Real-time Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Audit-Ready Documentation und Evidence Management'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Risk-based Compliance Governance und Continuous Improvement'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'SIEM Compliance: Strategische Regulatorische Exzellenz für nachhaltige Cybersecurity',
        description: 'SIEM Compliance erfordert eine ganzheitliche Herangehensweise, die technische Capabilities mit regulatorischen Anforderungen und Business-Zielen verbindet. Wir entwickeln maßgeschneiderte Compliance-Strategien, die nicht nur aktuelle Anforderungen erfüllen, sondern auch zukünftige regulatorische Entwicklungen antizipieren und Ihre Organisation für langfristigen Compliance-Erfolg positionieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Multi-Framework Compliance Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Automated Compliance Controls und Policy Enforcement'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Real-time Compliance Monitoring und Alerting'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Comprehensive Audit Trail Management und Evidence Collection'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Regulatory Reporting Automation und Dashboard-Integration'
          }
        ],
        alert: {
          title: 'Compliance als Wettbewerbsvorteil',
          content: 'Proaktive SIEM Compliance-Strategien reduzieren nicht nur regulatorische Risiken, sondern schaffen auch operative Effizienz und Vertrauen bei Stakeholdern. Eine strategische Compliance-Ausrichtung kann Audit-Kosten um bis zu 60% reduzieren und gleichzeitig die Cybersecurity-Posture signifikant stärken.'
        },
        whyUs: {
          title: 'Unsere SIEM Compliance Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in allen relevanten Regulatory Frameworks und Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodiken für Compliance-Integration und Automation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praktische Erfahrung mit komplexen Multi-Jurisdictional Compliance-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung von der Strategie bis zur operativen Exzellenz'
            }
          ]
        },
        additionalInfo: 'Die regulatorische Landschaft entwickelt sich kontinuierlich weiter, mit neuen Anforderungen wie der EU AI Act, verschärften Datenschutzbestimmungen und erweiterten Cybersecurity-Frameworks. Eine zukunftsorientierte SIEM Compliance-Strategie berücksichtigt diese Entwicklungen und schafft flexible, anpassungsfähige Compliance-Architekturen.',
        serviceDescription: 'Wir unterstützen Sie bei allen Aspekten der SIEM Compliance, von der strategischen Framework-Auswahl über die technische Implementierung bis hin zur kontinuierlichen Optimierung. Unser ganzheitlicher Ansatz gewährleistet nicht nur regulatorische Konformität, sondern auch operative Effizienz und strategische Wertschöpfung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Regulatory Framework Assessment und Compliance-Roadmap Development'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'SIEM Configuration für Compliance-Requirements und Control Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Automated Compliance Monitoring und Real-time Alerting'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Audit Preparation und Evidence Management Automation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Continuous Compliance Improvement und Regulatory Change Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer SIEM Compliance Ansatz',
        description: 'Wir verfolgen einen strukturierten, risk-based Ansatz für SIEM Compliance, der regulatorische Anforderungen mit Business-Zielen und technischen Möglichkeiten optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Regulatory Landscape Analysis und Framework-Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Risk-based Compliance Assessment und Prioritization'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Technical Implementation mit Automation-First Mindset'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Continuous Monitoring und Adaptive Compliance Management'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Stakeholder Engagement und Change Management für nachhaltige Adoption'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'SIEM Compliance ist weit mehr als nur regulatorische Pflichterfüllung – es ist ein strategischer Enabler für Vertrauen, operative Exzellenz und Wettbewerbsvorteile. Unsere ganzheitliche Herangehensweise verbindet technische Innovation mit regulatorischer Expertise und schafft Compliance-Architekturen, die nicht nur heutige Anforderungen erfüllen, sondern auch zukünftige Entwicklungen antizipieren. Durch intelligente Automatisierung und kontinuierliche Optimierung verwandeln wir Compliance von einer Belastung in einen strategischen Wertschöpfer.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Regulatory Framework Assessment und Compliance-Roadmap',
          description: 'Comprehensive Assessment aller relevanten regulatorischen Anforderungen und Entwicklung strategischer Compliance-Roadmaps für nachhaltige SIEM-Ausrichtung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Multi-Framework Analysis für GDPR, SOX, PCI-DSS, HIPAA, ISO 27001 und weitere Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Jurisdictional Requirements Mapping für internationale Compliance-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Gap Analysis und Risk Assessment für aktuelle SIEM-Konfigurationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Strategic Compliance Roadmap mit Prioritization und Timeline-Planning'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'SIEM Configuration für Compliance-Requirements',
          description: 'Strategische SIEM-Konfiguration und -Optimierung für optimale Erfüllung regulatorischer Anforderungen mit maximaler operativer Effizienz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Compliance-focused Use Case Development und Rule Configuration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Data Retention Policy Implementation für regulatorische Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Access Control und Segregation of Duties Configuration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Audit Trail Configuration und Tamper-proof Logging Setup'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Automated Compliance Monitoring und Alerting',
          description: 'Implementierung intelligenter Compliance-Monitoring-Systeme mit Real-time Alerting für proaktive Compliance-Sicherstellung und Risikominimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Real-time Compliance Violation Detection und Automated Response'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Policy Enforcement Automation und Exception Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Compliance KPI Monitoring und Trend Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Stakeholder Notification und Escalation Workflows'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Audit Preparation und Evidence Management',
          description: 'Comprehensive Audit-Vorbereitung mit automatisierter Evidence Collection und Management für effiziente und erfolgreiche Compliance-Audits.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Automated Evidence Collection und Documentation Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Audit Trail Analysis und Compliance Reporting Preparation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Control Testing Automation und Effectiveness Validation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Auditor Interaction Support und Finding Remediation Planning'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Regulatory Reporting Automation und Dashboards',
          description: 'Entwicklung automatisierter Reporting-Lösungen und Executive Dashboards für effiziente Compliance-Kommunikation und Stakeholder-Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Automated Regulatory Report Generation für verschiedene Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Executive Compliance Dashboards mit Real-time Status Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Exception Reporting und Risk Visualization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Stakeholder-specific Reporting und Communication Automation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Continuous Compliance Improvement und Change Management',
          description: 'Strategisches Lifecycle-Management für SIEM Compliance mit kontinuierlicher Verbesserung und proaktivem Regulatory Change Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Compliance Maturity Assessment und Improvement Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Regulatory Change Monitoring und Impact Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Continuous Control Optimization und Effectiveness Measurement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Training und Awareness Programs für Compliance-Excellence'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(siemComplianceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ SIEM Compliance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
