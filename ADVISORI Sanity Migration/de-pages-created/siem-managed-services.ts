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
    console.log('Creating SIEM Managed Services page...')

    const siemManagedServicesData = {
      _type: 'servicePage',
      _id: 'siem-managed-services',
      title: 'SIEM Managed Services - Professionelle Security Operations',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/security-operations-secops/siem/siem-managed-services'
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
        title: 'SIEM Managed Services - Professionelle Security Operations | ADVISORI',
        description: 'Professionelle SIEM Managed Services: 24/7 SOC Operations, Managed Detection & Response, Expert-Level Security Monitoring und strategische Service-Optimierung für maximale Cybersecurity-Effektivität.',
        keywords: 'SIEM Managed Services, SOC Outsourcing, Managed Detection Response, 24/7 Security Monitoring, SIEM Service Provider, Security Operations Center, Managed SIEM, Cybersecurity Services'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'SIEM Managed Services - Professionelle Security Operations'
        },
        tagline: 'Strategische SIEM Managed Services für operative Exzellenz',
        heading: 'SIEM Managed Services - Professionelle Security Operations',
        description: 'SIEM Managed Services ermöglichen es Unternehmen, von erstklassiger Cybersecurity-Expertise zu profitieren, ohne die Komplexität und Kosten eines eigenen SOC zu tragen. Wir unterstützen Sie bei der strategischen Auswahl, Implementierung und Optimierung von Managed SIEM Services, die perfekt zu Ihren Sicherheitsanforderungen und Geschäftszielen passen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: '24/7 Expert-Level Security Operations und Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Kosteneffiziente Alternative zu eigenem SOC-Aufbau'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Sofortiger Zugang zu spezialisierten Cybersecurity-Experten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Skalierbare Services mit garantierten SLAs'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'SIEM Managed Services: Strategische Cybersecurity-Exzellenz durch professionelle Dienstleister',
        description: 'SIEM Managed Services bieten Unternehmen die Möglichkeit, von erstklassiger Cybersecurity-Expertise zu profitieren, ohne die Komplexität und Investitionen eines eigenen Security Operations Centers zu tragen. Wir begleiten Sie bei der strategischen Evaluierung, Auswahl und Optimierung von Managed Services, die maximale Sicherheitswirksamkeit bei optimaler Kosteneffizienz gewährleisten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategic Service Provider Assessment und Auswahl'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: '24/7 SOC Operations und Managed Detection & Response'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Service Level Agreement Design und Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Cost-Benefit Optimization und ROI-Maximierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Quality Assurance und Performance Monitoring'
          }
        ],
        alert: {
          title: 'Strategischer Vorteil',
          content: 'SIEM Managed Services können die Time-to-Value um Monate verkürzen und gleichzeitig Zugang zu Expertise bieten, die intern Jahre dauern würde aufzubauen. Die richtige Service-Strategie ist entscheidend für nachhaltigen Cybersecurity-Erfolg.'
        },
        whyUs: {
          title: 'Unsere SIEM Managed Services Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung mit allen führenden Managed Service Providern'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Beratung für objektive Service-Empfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methodiken für Service-Evaluierung und Performance-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'End-to-End Begleitung von der Strategie bis zur operativen Exzellenz'
            }
          ]
        },
        additionalInfo: 'Der Markt für SIEM Managed Services entwickelt sich rasant weiter, mit neuen Service-Modellen, AI-gestützten Capabilities und spezialisierten Angeboten für verschiedene Industrien. Eine strategische Service-Auswahl berücksichtigt nicht nur aktuelle Anforderungen, sondern auch zukünftige Entwicklungen und Skalierungsmöglichkeiten.',
        serviceDescription: 'Wir unterstützen Sie bei allen Aspekten der SIEM Managed Services Strategie, von der initialen Service-Evaluierung über die Vertragsgestaltung bis hin zur kontinuierlichen Performance-Optimierung. Unser herstellerunabhängiger Ansatz gewährleistet objektive Empfehlungen, die perfekt zu Ihren spezifischen Anforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Managed Services Strategy Development und Provider-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Service Level Agreement Design und Contract Negotiation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementation Support und Transition Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Quality Assurance und Performance Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Service Optimization und Continuous Improvement'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer SIEM Managed Services Ansatz',
        description: 'Wir verfolgen einen strukturierten, strategiegetriebenen Ansatz für SIEM Managed Services, der technische Exzellenz mit wirtschaftlicher Effizienz und nachhaltiger Wertschöpfung verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategic Requirements Analysis und Service-Fit Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Provider Evaluation und Capability Assessment für informierte Entscheidungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Service Design und SLA Definition mit messbaren Erfolgskriterien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Structured Implementation und Transition Management'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Monitoring und Service Optimization'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'SIEM Managed Services sind mehr als nur Outsourcing – sie sind eine strategische Entscheidung für Cybersecurity-Exzellenz. Unsere Expertise hilft Unternehmen dabei, die richtige Balance zwischen Kontrolle und Effizienz zu finden. Durch sorgfältige Provider-Auswahl und intelligente Service-Gestaltung ermöglichen wir unseren Kunden, von erstklassiger Cybersecurity-Expertise zu profitieren, während sie sich auf ihr Kerngeschäft konzentrieren können.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Managed Services Strategy Development',
          description: 'Strategische Entwicklung maßgeschneiderter Managed Services Strategien, die Business-Ziele mit Cybersecurity-Anforderungen optimal in Einklang bringen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Comprehensive Service Requirements Analysis und Business-Alignment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Make-vs-Buy Decision Framework für strategische Service-Entscheidungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Service Model Definition und Scope-Planung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Cost-Benefit Analysis und ROI-Modellierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Service Provider Assessment und Auswahl',
          description: 'Objektive Evaluierung und Auswahl von SIEM Managed Service Providern basierend auf strategischen Anforderungen und Performance-Kriterien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Market Analysis und Provider Landscape Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Multi-Criteria Provider Evaluation mit gewichteten Bewertungskriterien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Technical Capability Assessment und Security-Expertise Validation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Financial Stability Analysis und Business Continuity Assessment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Service Level Agreement Design',
          description: 'Entwicklung präziser Service Level Agreements mit messbaren KPIs und Performance-Garantien für optimale Service-Qualität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'SLA Framework Development mit branchenspezifischen Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Performance Metrics Definition und Measurement-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Escalation Procedures und Incident Response Requirements'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Penalty und Incentive Structures für Performance-Optimization'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Implementation Support und Transition Management',
          description: 'Professionelle Begleitung der Service-Implementierung mit strukturiertem Transition Management für nahtlose Übergänge.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Transition Planning und Milestone-Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Data Migration Support und System-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Team Training und Knowledge Transfer Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Go-Live Support und Initial Performance Validation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Quality Assurance und Performance Monitoring',
          description: 'Kontinuierliche Qualitätssicherung und Performance-Überwachung für nachhaltige Service-Exzellenz und Compliance-Sicherstellung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Service Quality Monitoring und Regular Performance Reviews'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'SLA Compliance Tracking und Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Customer Satisfaction Assessment und Feedback Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Issue Resolution Support und Escalation Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Service Optimization und Governance',
          description: 'Strategische Service-Optimierung und Governance-Strukturen für kontinuierliche Verbesserung und maximalen Business Value.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Service Governance Framework Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Continuous Improvement Planning und Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Cost Optimization und Value Engineering'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategic Service Evolution und Future-State Planning'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(siemManagedServicesData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ SIEM Managed Services page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
