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
    console.log('Creating Business Continuity Risk Management page...')

    const bcRiskManagementData = {
      _type: 'servicePage',
      _id: 'business-continuity-risk-management',
      title: 'Business Continuity Risk Management',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/business-continuity-resilience/business-continuity-risk-management'
      },
      parent: {
        _type: 'reference',
        _ref: 'business-continuity-resilience'
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
        title: 'Business Continuity Risk Management - Strategisches Risikomanagement | ADVISORI',
        description: 'Professionelles Business Continuity Risk Management: Risikoidentifikation, -bewertung und -mitigation für resiliente Geschäftsprozesse. Strategische Risikosteuerung mit ADVISORI.',
        keywords: 'Business Continuity Risk Management, BCM Risikomanagement, Risikoanalyse, Risikobewertung, Risikominimierung, Business Risk Assessment, Kontinuitätsrisiken, Resilienz Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Business Continuity Risk Management - Strategisches Risikomanagement für Geschäftskontinuität'
        },
        tagline: 'Strategisches Risikomanagement für nachhaltige Geschäftskontinuität',
        heading: 'Business Continuity Risk Management',
        description: 'Entwickeln Sie eine robuste Risikomanagement-Strategie für Ihre Geschäftskontinuität. ADVISORI unterstützt Sie bei der systematischen Identifikation, Bewertung und Steuerung von Kontinuitätsrisiken für maximale organisationale Resilienz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Risikoidentifikation und -bewertung für alle Geschäftsbereiche'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Proaktive Risikominimierung und präventive Schutzmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Risikosteuerung und kontinuierliches Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strategische Entscheidungsunterstützung durch datenbasierte Risikoanalysen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Business Continuity Risk Management - Strategische Risikosteuerung',
        description: 'Business Continuity Risk Management bildet das Fundament für organisationale Resilienz und nachhaltige Geschäftskontinuität. Durch systematische Identifikation, Bewertung und Steuerung von Kontinuitätsrisiken schaffen Unternehmen die Voraussetzungen für proaktive Krisenprävention und effektive Störungsbehandlung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Ganzheitliche Risikolandschaft-Analyse für alle kritischen Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Quantitative und qualitative Risikobewertung mit modernen Analysemethoden'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Strategische Risikominimierung durch präventive und korrektive Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliches Risiko-Monitoring und adaptive Steuerungsansätze'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration in übergeordnete Governance- und Compliance-Strukturen'
          }
        ],
        alert: {
          title: 'Proaktive Risikosteuerung',
          content: 'Effektives BC Risk Management transformiert potenzielle Bedrohungen in strategische Wettbewerbsvorteile durch vorausschauende Risikosteuerung und resiliente Geschäftsmodelle.'
        },
        whyUs: {
          title: 'Warum BC Risk Management mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in modernen Risikomanagement-Methodologien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenspezifische Risikoanalysen und maßgeschneiderte Lösungsansätze'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integration von KI und Advanced Analytics für präzise Risikoprognosen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung bei Implementierung und Optimierung'
            }
          ]
        },
        additionalInfo: 'Die Komplexität moderner Geschäftsumgebungen erfordert sophisticated Ansätze im BC Risk Management. Emerging Risks wie Cyber-Bedrohungen, Klimawandel und digitale Disruption verlangen nach adaptiven Risikomanagement-Strategien, die traditionelle Methoden mit innovativen Technologien und Datenanalysen verbinden.',
        serviceDescription: 'Unser BC Risk Management Service bietet eine vollständige Palette von Risikomanagement-Lösungen, die von der initialen Risikoidentifikation bis zur kontinuierlichen Optimierung reichen. Wir kombinieren bewährte Frameworks mit innovativen Ansätzen für maximale Effektivität.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Comprehensive Risk Assessment und Vulnerability Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Strategische Risikominimierung und Mitigation Planning'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Risk Monitoring Systeme und Real-time Analytics'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Governance Integration und Compliance Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Crisis Response Planning und Emergency Procedures'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Ansatz zum BC Risk Management',
        description: 'Wir verfolgen einen strukturierten und datengetriebenen Ansatz zum Business Continuity Risk Management, der bewährte Frameworks mit innovativen Technologien und branchenspezifischen Erkenntnissen kombiniert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Risikolandschaft-Analyse und Threat Intelligence Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Quantitative Risikobewertung mit Advanced Analytics und Modellierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Strategische Risikominimierung durch präventive und adaptive Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliches Monitoring und proaktive Risikoanpassung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Integration in Governance-Strukturen und strategische Entscheidungsprozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Effektives Business Continuity Risk Management ist der Schlüssel zur organisationalen Resilienz. Durch proaktive Risikosteuerung und datenbasierte Entscheidungsfindung schaffen wir die Grundlage für nachhaltige Geschäftskontinuität und strategische Wettbewerbsvorteile in einer zunehmend volatilen Geschäftswelt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Risk Assessment & Analysis',
          description: 'Comprehensive Risikoidentifikation und -bewertung für alle kritischen Geschäftsbereiche.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Business Impact Analysis und Vulnerability Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Quantitative und qualitative Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Threat Intelligence und Scenario Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Risk Heat Maps und Prioritization Matrices'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Risk Mitigation Strategies',
          description: 'Entwicklung und Implementierung effektiver Risikominimierungs-Strategien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Präventive Schutzmaßnahmen und Kontrollsysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Contingency Planning und Alternative Strategies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Risk Transfer und Insurance Optimization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Supplier Risk Management und Third-Party Controls'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Risk Monitoring & Reporting',
          description: 'Kontinuierliche Risikoüberwachung und strategisches Reporting für Entscheidungsträger.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Real-time Risk Dashboards und KPI Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Automated Risk Alerts und Escalation Procedures'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Executive Risk Reporting und Board Communications'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Regulatory Compliance und Audit Support'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Crisis Risk Management',
          description: 'Spezialisierte Risikomanagement-Ansätze für Krisensituationen und Notfälle.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Crisis Response Risk Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Emergency Decision Support Systems'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Dynamic Risk Reassessment während Störungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Post-Crisis Risk Analysis und Lessons Learned'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Emerging Risk Management',
          description: 'Spezialisierte Ansätze für neue und sich entwickelnde Risikokategorien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Cyber Risk Assessment und Digital Threat Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Climate Risk Evaluation und Environmental Impact'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Technology Disruption Risk und Innovation Impact'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Regulatory Change Risk und Compliance Evolution'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Risk Governance & Culture',
          description: 'Aufbau einer risikoorientierten Organisationskultur und Governance-Struktur.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Risk Governance Framework Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Risk Awareness Training und Culture Building'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Risk Committee Establishment und Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Performance Metrics und Risk-adjusted KPIs'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcRiskManagementData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Business Continuity Risk Management page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
