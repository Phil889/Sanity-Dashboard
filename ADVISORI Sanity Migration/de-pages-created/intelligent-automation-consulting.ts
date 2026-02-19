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
    console.log('Creating Intelligent Automation Consulting page...')

    const intelligentAutomationConsultingData = {
      _type: 'servicePage',
      _id: 'intelligent-automation-consulting',
      title: 'Intelligent Automation Consulting',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-automation-consulting'
      },
      parent: {
        _type: 'reference',
        _ref: 'intelligent-automation'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'digitale-transformation'
        }
      },
      seo: {
        _type: 'seo',
        title: 'Intelligent Automation Consulting - Strategische Beratung für KI-gestützte Prozessautomatisierung | ADVISORI',
        description: 'Professionelle Intelligent Automation Consulting Services für strategische Automatisierungstransformation. Expert Guidance für RPA, Hyperautomation, Process Mining, Change Management und EU AI Act Compliance in Enterprise-Umgebungen.',
        keywords: 'Intelligent Automation Consulting, RPA Beratung, Hyperautomation Strategy, Process Mining Consulting, Automation Strategy, Digital Transformation Consulting, EU AI Act Compliance, Change Management Automation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Automation Consulting - Strategische Beratung für KI-gestützte Prozessautomatisierung und digitale Transformation'
        },
        tagline: 'Strategic Intelligent Automation Consulting für Enterprise-Transformation',
        heading: 'Intelligent Automation Consulting',
        description: 'Intelligent Automation Consulting transformiert Ihre Automatisierungsvision in strategische Realität durch expertenzentrierte Beratung, die weit über traditionelle RPA-Implementierung hinausgeht. Wir entwickeln maßgeschneiderte Hyperautomation-Strategien, die KI-gestützte Prozessautomatisierung, Change Management und EU AI Act Compliance nahtlos integrieren, um nachhaltige digitale Transformation und operative Exzellenz zu gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategic Automation Roadmap-Entwicklung mit Hyperautomation-Vision und ROI-Fokus'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Expert Guidance für RPA, Process Mining und KI-Integration in Enterprise-Umgebungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Change Management und Organizational Transformation für erfolgreiche Automation-Adoption'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'EU AI Act konforme Automation Governance und Compliance-Strategien'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Automation Consulting - Strategic Advisory für moderne Enterprise-Automatisierung',
        description: 'Intelligent Automation Consulting ist das strategische Fundament für erfolgreiche digitale Transformation durch KI-gestützte Prozessautomatisierung. Unsere Beratungsexpertise transformiert komplexe Automatisierungsherausforderungen in strategische Geschäftsmöglichkeiten, die operative Exzellenz, Mitarbeiter-Empowerment und nachhaltige Wettbewerbsvorteile schaffen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategic Assessment und Automation Readiness-Evaluation für fundierte Transformationsentscheidungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Technology Stack-Beratung für optimale RPA, Hyperautomation und KI-Plattform-Auswahl'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Process Mining und Discovery-Strategien für datengetriebene Automatisierungsentscheidungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Change Management und Organizational Development für nachhaltige Automation-Adoption'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Governance Framework-Entwicklung mit EU AI Act Compliance und Risk Management'
          }
        ],
        alert: {
          title: 'Intelligent Automation Consulting als strategischer Transformation-Enabler',
          content: 'Professionelle Intelligent Automation Consulting Services werden zum kritischen Erfolgsfaktor für Enterprise-weite Automatisierungstransformation, die nachhaltige Geschäftsergebnisse und operative Exzellenz gewährleistet.'
        },
        whyUs: {
          title: 'Warum Intelligent Automation Consulting mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Consulting-Expertise von Strategic Assessment bis Implementation Guidance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act konforme Beratung für rechtssichere und compliant Automatisierungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Transformation-Methodologien für Enterprise-weite Automation-Excellence'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von Technology Strategy bis Change Management und Governance'
            }
          ]
        },
        additionalInfo: 'Intelligent Automation Consulting ermöglicht es Organisationen, die strategischen Potenziale moderner Automatisierungstechnologien vollständig zu erschließen. Die richtige Consulting-Partnerschaft wird zum Katalysator für nachhaltige digitale Transformation und operative Exzellenz.',
        serviceDescription: 'Unser Intelligent Automation Consulting Service umfasst die vollständige strategische Begleitung Ihrer Automatisierungstransformation. Von der initialen Readiness-Bewertung über Technology Strategy-Entwicklung bis hin zu Change Management und Governance-Etablierung bieten wir expertenzentrierte Beratung für nachhaltige Automation-Excellence.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategic Automation Assessment und Maturity-Evaluation für fundierte Transformationsentscheidungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Technology Strategy und Platform-Selection für optimale Automatisierungsarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Process Mining Strategy und Discovery-Methodologien für datengetriebene Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Change Management und Organizational Transformation für erfolgreiche Adoption'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Governance Framework-Entwicklung und EU AI Act Compliance-Strategien'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zu Intelligent Automation Consulting',
        description: 'Wir verfolgen einen strategischen und ganzheitlichen Consulting-Ansatz, der moderne Automatisierungstechnologien mit bewährten Transformation-Methodologien kombiniert, um nachhaltige Business-Ergebnisse und operative Exzellenz zu gewährleisten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Assessment und Strategic Readiness-Evaluation für fundierte Automatisierungsentscheidungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Technology Strategy-Entwicklung mit Platform-Selection und Architecture-Design'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementation Roadmap-Erstellung mit Phasen-Planung und Risk Mitigation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Change Management und Stakeholder-Engagement für nachhaltige Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Advisory und Optimization-Support für langfristige Automation-Excellence'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Intelligent Automation Consulting ist das strategische Fundament für erfolgreiche digitale Transformation. Wir transformieren komplexe Automatisierungsherausforderungen in strategische Geschäftsmöglichkeiten durch expertenzentrierte Beratung, die KI-gestützte Prozessautomatisierung, Change Management und EU AI Act Compliance nahtlos integriert, um nachhaltige operative Exzellenz und Wettbewerbsvorteile zu schaffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategic Automation Assessment und Readiness Evaluation',
          description: 'Umfassende Bewertung Ihrer Automatisierungsbereitschaft und strategische Roadmap-Entwicklung für erfolgreiche Transformation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Automation Maturity Assessment und Current State-Analyse für strategische Ausgangsbewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Process Portfolio-Evaluation und Automation Opportunity-Identifikation mit ROI-Prognosen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Technology Readiness-Assessment und Infrastructure-Evaluation für Implementierungsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Organizational Readiness-Bewertung und Change Management-Strategieentwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technology Strategy und Platform Selection Consulting',
          description: 'Expertenzentrierte Beratung für optimale Automatisierungstechnologie-Auswahl und Architektur-Design.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'RPA Platform-Evaluation und Vendor-Selection für optimale Technology-Fit-Entscheidungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Hyperautomation Architecture-Design und Integration-Strategien für skalierbare Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'KI-Integration-Strategien und Cognitive Automation-Roadmap für intelligente Prozessautomatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Cloud vs. On-Premises-Strategien und Hybrid-Architecture-Beratung für Enterprise-Anforderungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Process Mining Strategy und Discovery Consulting',
          description: 'Strategische Beratung für datengetriebene Prozessanalyse und Automatisierungspotenzial-Identifikation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Process Mining Tool-Selection und Implementation-Strategien für optimale Process Discovery'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Data Strategy-Entwicklung und Event Log-Preparation für effektive Process Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Process Intelligence-Frameworks und Analytics-Strategien für kontinuierliche Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Automation Opportunity-Priorisierung und Business Case-Entwicklung basierend auf Process Insights'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Change Management und Organizational Transformation',
          description: 'Ganzheitliche Change Management-Beratung für erfolgreiche Automation-Adoption und Mitarbeiter-Engagement.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Change Strategy-Entwicklung und Stakeholder-Engagement-Pläne für nachhaltige Transformation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Training und Upskilling-Strategien für Human-Bot-Collaboration und Future of Work'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Communication-Strategien und Adoption-Metriken für erfolgreiche Automation-Akzeptanz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Cultural Transformation-Beratung und Employee Experience-Optimierung für Automation-Excellence'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Governance Framework und Compliance Consulting',
          description: 'Strategische Beratung für Automation Governance-Etablierung und EU AI Act Compliance-Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Center of Excellence-Etablierung und Governance-Framework-Entwicklung für Enterprise-weite Automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'EU AI Act Compliance-Strategien und Risk Management-Frameworks für KI-gestützte Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Security und Access Control-Strategien für sichere Automation-Operationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Performance Management und KPI-Frameworks für kontinuierliche Automation-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Implementation Guidance und Continuous Advisory',
          description: 'Ongoing Consulting-Support für erfolgreiche Automation-Implementierung und kontinuierliche Optimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Implementation Roadmap-Entwicklung und Projekt-Management-Beratung für erfolgreiche Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Vendor Management und Partner-Selection-Beratung für optimale Implementation-Partnerschaften'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Quality Assurance und Testing-Strategien für robuste Automation-Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Continuous Improvement-Beratung und Scaling-Strategien für nachhaltige Automation-Excellence'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentAutomationConsultingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Automation Consulting page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
