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
    console.log('Creating DORA Risk Management Framework page...')

    const doraRiskManagementFrameworkData = {
      _type: 'servicePage',
      _id: 'dora-risk-management-framework',
      title: 'DORA Risk Management Framework',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dora-digital-operational-resilience-act/dora-implementation/dora-risk-management-framework'
      },
      parent: {
        _type: 'reference',
        _ref: 'dora-implementation'
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
        title: 'DORA Risk Management Framework | ADVISORI',
        description: 'Umfassende DORA Risk Management Frameworks für Finanzunternehmen. Spezialisierte Beratung zu ICT-Risikomanagement, Governance-Strukturen und kontinuierlicher Risikoüberwachung für nachhaltige DORA-Compliance.',
        keywords: 'DORA Risk Management, ICT Risk Framework, Digital Operational Resilience, DORA Compliance, Financial Services Risk Management, Operational Risk, Third Party Risk, Risk Governance, Risk Assessment'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DORA Risk Management Framework'
        },
        tagline: 'Robuste ICT-Risikomanagement-Frameworks für operative Resilienz',
        heading: 'DORA Risk Management Framework',
        description: 'Das Digital Operational Resilience Act (DORA) stellt umfassende Anforderungen an das ICT-Risikomanagement von Finanzunternehmen. Wir entwickeln maßgeschneiderte Risk Management Frameworks, die regulatorische Compliance mit operativer Exzellenz verbinden und Ihre Organisation optimal auf die komplexen Herausforderungen der digitalen Transformation vorbereiten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende ICT-Risikobewertung und -klassifizierung nach DORA-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Integrierte Third-Party und Vendor Risk Management Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kontinuierliche Risikoüberwachung und automatisierte Reporting-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strategische Risk Governance und Board-Level Risk Management'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DORA Risk Management Framework',
        description: 'Effektives ICT-Risikomanagement ist das Herzstück der DORA-Compliance und erfordert einen systematischen, ganzheitlichen Ansatz zur Identifikation, Bewertung und Steuerung operationeller Risiken. Unser DORA Risk Management Framework integriert bewährte Risikomanagement-Praktiken mit den spezifischen Anforderungen der digitalen operationellen Resilienz und schafft dabei eine solide Grundlage für nachhaltige Compliance und Geschäftskontinuität.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung umfassender ICT-Risikobewertungs- und Klassifizierungsmethodologien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementation robuster Risk Governance Strukturen und Entscheidungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration von Third-Party Risk Management und Vendor Due Diligence'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau kontinuierlicher Risikoüberwachung und Frühwarnsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Etablierung automatisierter Risk Reporting und Management Information Systems'
          }
        ],
        alert: {
          title: 'Risikomanagement-Hinweis',
          content: 'DORA erfordert eine fundamentale Neuausrichtung des ICT-Risikomanagements mit Fokus auf operative Resilienz. Ein proaktiver, systematischer Ansatz ist entscheidend für die Erfüllung der regulatorischen Anforderungen und den Schutz vor digitalen Bedrohungen.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in DORA-Risikomanagement und regulatorischen Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodologien für komplexe ICT-Risikobewertungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von strategischer Planung bis operativer Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenspezifische Erfahrung im Finanzsektor und RegTech-Umfeld'
            }
          ]
        },
        additionalInfo: 'DORA Risk Management erfordert eine integrierte Herangehensweise, die technische Risiken, operative Prozesse und strategische Geschäftsziele gleichermaßen berücksichtigt. Unser Framework-Ansatz gewährleistet eine umfassende und nachhaltige Risikomanagement-Lösung.',
        serviceDescription: 'Wir bieten ein vollständiges DORA Risk Management Framework, das von der strategischen Risikoplanung über die operative Risikobewertung bis hin zur kontinuierlichen Risikoüberwachung alle Aspekte des ICT-Risikomanagements abdeckt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'ICT Risk Assessment und Risk Classification Methodologies'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Risk Governance Framework Design und Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Third-Party Risk Management und Vendor Risk Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Continuous Risk Monitoring und Automated Risk Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Risk Mitigation Strategy Development und Implementation'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam ein maßgeschneidertes DORA Risk Management Framework, das Ihre spezifischen Geschäftsrisiken mit regulatorischen Anforderungen optimal ausbalanciert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer aktuellen ICT-Risikolandschaft und bestehenden Risikomanagement-Praktiken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer strategischen Risk Management Roadmap mit klaren Prioritäten und Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Design und Implementierung robuster Risk Governance Strukturen und Bewertungsmethodologien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von Technologie-Lösungen für kontinuierliche Risikoüberwachung und Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung an evolvierende Bedrohungslandschaften'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Ein robustes DORA Risk Management Framework ist das Fundament für operative Resilienz und nachhaltige Geschäftskontinuität. Unsere systematischen Ansätze ermöglichen es Finanzunternehmen, ICT-Risiken nicht nur zu identifizieren und zu bewerten, sondern proaktiv zu steuern und als strategischen Wettbewerbsvorteil zu nutzen. Dabei verbinden wir regulatorische Exzellenz mit operativer Effizienz.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ICT Risk Assessment & Classification Framework',
          description: 'Entwicklung umfassender Methodologien zur systematischen Identifikation, Bewertung und Klassifizierung von ICT-Risiken.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Comprehensive ICT Risk Inventory und Asset Classification'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Risk Assessment Methodology Development und Scoring Models'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Threat Landscape Analysis und Vulnerability Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Risk Appetite Framework Definition und Risk Tolerance Levels'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Risk Governance & Management Structure',
          description: 'Aufbau robuster Risk Governance Strukturen für effektive Risikosteuerung und Entscheidungsfindung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Risk Governance Framework Design und Organizational Structure'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Risk Committee Establishment und Board Risk Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Risk Policy Development und Procedure Documentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Risk Decision Making Processes und Escalation Frameworks'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Third-Party Risk Management Integration',
          description: 'Umfassende Integration von Third-Party Risk Management in das DORA-konforme Risikomanagement-Framework.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Vendor Risk Assessment Framework und Due Diligence Processes'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Critical Service Provider Identification und Risk Classification'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Contractual Risk Management und SLA Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Continuous Vendor Monitoring und Performance Assessment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Continuous Risk Monitoring & Early Warning Systems',
          description: 'Implementation kontinuierlicher Risikoüberwachung und Frühwarnsysteme für proaktives Risikomanagement.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Real-time Risk Monitoring Dashboard und Alert Systems'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Key Risk Indicator (KRI) Development und Threshold Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Automated Risk Data Collection und Analysis Systems'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Predictive Risk Analytics und Scenario Modeling'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Risk Mitigation & Treatment Strategies',
          description: 'Entwicklung und Implementierung effektiver Risikominderungs- und Behandlungsstrategien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Risk Treatment Strategy Development und Mitigation Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Control Framework Implementation und Effectiveness Testing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Business Continuity Planning und Disaster Recovery Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Risk Transfer Mechanisms und Insurance Strategy Optimization'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Risk Reporting & Management Information Systems',
          description: 'Aufbau umfassender Risk Reporting Systeme und Management Information Dashboards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Executive Risk Dashboard Development und Board Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Regulatory Risk Reporting und Compliance Documentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Risk Performance Metrics und KPI Framework Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Automated Report Generation und Distribution Systems'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(doraRiskManagementFrameworkData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DORA Risk Management Framework page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
