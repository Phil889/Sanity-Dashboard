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
    console.log('Creating SIEM NIS2 Compliance page...')

    const siemNis2ComplianceData = {
      _type: 'servicePage',
      _id: 'siem-nis2-compliance',
      title: 'SIEM NIS2 Compliance - Cybersecurity-Richtlinie für kritische Infrastrukturen',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/security-operations-secops/siem/siem-nis2-compliance'
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
        title: 'SIEM NIS2 Compliance - Cybersecurity-Richtlinie für kritische Infrastrukturen | ADVISORI',
        description: 'Professionelle SIEM NIS2 Compliance Beratung: Implementierung der EU-Cybersecurity-Richtlinie, Incident Detection, Risk Management und Reporting für kritische Infrastrukturen und wesentliche Dienste.',
        keywords: 'SIEM NIS2, NIS2 Compliance, EU Cybersecurity Directive, Critical Infrastructure, Essential Services, Incident Reporting, Risk Management, SIEM Configuration, NIS2 Requirements'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'SIEM NIS2 Compliance - Cybersecurity-Richtlinie für kritische Infrastrukturen'
        },
        tagline: 'Strategische SIEM-Expertise für NIS2-konforme Cybersecurity',
        heading: 'SIEM NIS2 Compliance - Cybersecurity-Richtlinie für kritische Infrastrukturen',
        description: 'Die NIS2-Richtlinie stellt erhöhte Anforderungen an die Cybersecurity kritischer Infrastrukturen und wesentlicher Dienste. Wir unterstützen Sie bei der strategischen Ausrichtung Ihrer SIEM-Landschaft auf NIS2-Compliance, von der initialen Gap-Analyse über die technische Implementierung bis hin zur kontinuierlichen Überwachung und Berichterstattung. Unsere Expertise gewährleistet nicht nur regulatorische Konformität, sondern auch operative Resilienz und strategische Cybersecurity-Exzellenz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Comprehensive NIS2 Gap Assessment und Compliance-Roadmap Development'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Advanced Incident Detection und Automated Reporting für NIS2-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Risk Management Integration und Supply Chain Security Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Cross-Border Cooperation und Information Sharing Capabilities'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'SIEM NIS2 Compliance: Strategische Cybersecurity für kritische Infrastrukturen',
        description: 'Die NIS2-Richtlinie revolutioniert die Cybersecurity-Landschaft für kritische Infrastrukturen und wesentliche Dienste in der EU. Eine strategische SIEM-Implementierung ist entscheidend für die Erfüllung der erweiterten Anforderungen an Incident Detection, Risk Management und Reporting. Wir entwickeln maßgeschneiderte SIEM-Lösungen, die nicht nur NIS2-Compliance sicherstellen, sondern auch operative Effizienz und Cyber-Resilienz maximieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'NIS2-konforme Incident Detection und Classification'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Automated Risk Assessment und Vulnerability Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Real-time Threat Intelligence Integration und Sharing'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Supply Chain Security Monitoring und Third-Party Risk Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Cross-Border Information Sharing und Cooperation Frameworks'
          }
        ],
        alert: {
          title: 'NIS2 als Cybersecurity-Katalysator',
          content: 'Die NIS2-Richtlinie bietet Organisationen die Chance, ihre Cybersecurity-Posture grundlegend zu stärken. Proaktive SIEM-Implementierungen können nicht nur Compliance sicherstellen, sondern auch operative Effizienz steigern und Cyber-Resilienz aufbauen. Strategisch ausgerichtete NIS2-Compliance kann Incident Response-Zeiten um bis zu 70% reduzieren.'
        },
        whyUs: {
          title: 'Unsere SIEM NIS2 Compliance Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in NIS2-Anforderungen und EU-Cybersecurity-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodiken für kritische Infrastruktur-Schutz und Resilienz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praktische Erfahrung mit sektorspezifischen Compliance-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung von der Strategie bis zur operativen Exzellenz'
            }
          ]
        },
        additionalInfo: 'Die NIS2-Richtlinie erweitert den Anwendungsbereich erheblich und führt strengere Cybersecurity-Anforderungen ein. Organisationen müssen bis Oktober 2024 Compliance erreichen, was eine strategische und zeitkritische Herangehensweise erfordert. Eine zukunftsorientierte SIEM-Architektur berücksichtigt nicht nur aktuelle NIS2-Anforderungen, sondern auch kommende Entwicklungen in der EU-Cybersecurity-Gesetzgebung.',
        serviceDescription: 'Wir unterstützen Sie bei allen Aspekten der SIEM NIS2 Compliance, von der strategischen Bewertung über die technische Implementierung bis hin zur kontinuierlichen Optimierung. Unser ganzheitlicher Ansatz gewährleistet nicht nur regulatorische Konformität, sondern auch operative Resilienz und strategische Cybersecurity-Transformation.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'NIS2 Gap Assessment und Compliance-Roadmap für kritische Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'SIEM Configuration für NIS2-konforme Incident Detection und Response'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Risk Management Integration und Supply Chain Security Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Automated Reporting und Cross-Border Information Sharing'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Continuous Compliance Monitoring und Regulatory Change Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer SIEM NIS2 Compliance Ansatz',
        description: 'Wir verfolgen einen strukturierten, risk-based Ansatz für SIEM NIS2 Compliance, der regulatorische Anforderungen mit operativen Zielen und technischen Möglichkeiten optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive NIS2 Scope Assessment und Sector-Specific Requirements Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Risk-based SIEM Architecture Design für kritische Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phased Implementation mit Prioritization auf High-Impact Areas'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Continuous Monitoring und Adaptive Compliance Management'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Stakeholder Engagement und Cross-Sector Collaboration für nachhaltige Adoption'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die NIS2-Richtlinie markiert einen Wendepunkt in der europäischen Cybersecurity-Landschaft und bietet Organisationen die Chance, ihre digitale Resilienz grundlegend zu stärken. Unsere strategische Herangehensweise an SIEM NIS2 Compliance verbindet regulatorische Exzellenz mit operativer Effizienz und schafft Cybersecurity-Architekturen, die nicht nur heutige Anforderungen erfüllen, sondern auch zukünftige Bedrohungen antizipieren. Durch intelligente Automatisierung und sektorspezifische Expertise verwandeln wir NIS2-Compliance von einer regulatorischen Herausforderung in einen strategischen Wettbewerbsvorteil.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'NIS2 Gap Assessment und Compliance-Roadmap',
          description: 'Comprehensive Assessment der aktuellen Cybersecurity-Posture gegen NIS2-Anforderungen und Entwicklung strategischer Compliance-Roadmaps für kritische Infrastrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Sector-Specific NIS2 Requirements Analysis für verschiedene kritische Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Current State Assessment und Gap Identification gegen NIS2-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risk-based Prioritization und Strategic Roadmap Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Cost-Benefit Analysis und Resource Planning für NIS2-Implementierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'SIEM Configuration für NIS2-konforme Incident Detection',
          description: 'Strategische SIEM-Konfiguration und -Optimierung für NIS2-konforme Incident Detection, Classification und Response-Capabilities.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'NIS2-konforme Incident Detection Rules und Classification Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automated Threat Intelligence Integration und Indicator Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Real-time Security Monitoring für kritische Assets und Services'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Cross-System Correlation und Advanced Analytics für Threat Detection'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Risk Management Integration und Supply Chain Security',
          description: 'Integration von Risk Management-Prozessen in SIEM-Systeme mit speziellem Fokus auf Supply Chain Security und Third-Party Risk Assessment.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Automated Risk Assessment und Vulnerability Management Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Supply Chain Security Monitoring und Third-Party Risk Evaluation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Business Impact Analysis und Critical Asset Protection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Continuous Risk Monitoring und Dynamic Risk Scoring'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Automated NIS2 Reporting und Compliance Documentation',
          description: 'Implementierung automatisierter Reporting-Systeme für NIS2-Compliance mit umfassender Documentation und Evidence Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Automated Incident Reporting für nationale Cybersecurity-Behörden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Compliance Documentation und Evidence Collection Automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Executive Dashboards für Management Oversight und Board Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Audit Trail Management und Regulatory Inspection Readiness'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Cross-Border Information Sharing und Cooperation',
          description: 'Implementierung von Systemen für Cross-Border Information Sharing und Cooperation entsprechend NIS2-Anforderungen an internationale Zusammenarbeit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Secure Information Sharing Platforms für EU-weite Cooperation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Threat Intelligence Sharing und Collaborative Defense Mechanisms'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Cross-Sector Information Exchange und Best Practice Sharing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Privacy-Preserving Analytics für sensitive Information Sharing'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Continuous NIS2 Compliance Monitoring und Optimization',
          description: 'Strategisches Lifecycle-Management für NIS2 Compliance mit kontinuierlicher Überwachung, Verbesserung und Anpassung an evolvierende Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Continuous Compliance Monitoring und Real-time Status Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Regulatory Change Monitoring und Impact Assessment für NIS2-Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Performance Optimization und Effectiveness Measurement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Training und Awareness Programs für NIS2-Compliance Excellence'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(siemNis2ComplianceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ SIEM NIS2 Compliance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
