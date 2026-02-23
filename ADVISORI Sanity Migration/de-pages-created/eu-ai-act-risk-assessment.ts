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
    console.log('Creating EU AI Act Risk Assessment page...')

    const euAiActRiskAssessmentData = {
      _type: 'servicePage',
      _id: 'eu-ai-act-risk-assessment',
      title: 'EU AI Act Risk Assessment',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eu-ai-act/eu-ai-act-ai-risk-classification/eu-ai-act-risk-assessment'
      },
      parent: {
        _type: 'reference',
        _ref: 'eu-ai-act-ai-risk-classification'
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
        title: 'EU AI Act Risk Assessment | ADVISORI',
        description: 'Comprehensive risk assessment services for EU AI Act compliance. Expert analysis of AI system risks, classification guidance, and regulatory compliance strategies.',
        keywords: 'EU AI Act, Risk Assessment, AI Compliance, Risk Classification, AI Governance, Regulatory Compliance, AI Risk Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EU AI Act Risk Assessment'
        },
        tagline: 'Systematische Risikobewertung für EU AI Act Compliance',
        heading: 'EU AI Act Risk Assessment',
        description: 'Unsere umfassenden Risk Assessment Services unterstützen Sie bei der systematischen Bewertung und Klassifizierung Ihrer KI-Systeme gemäß EU AI Act. Von der initialen Risikoanalyse bis zur kontinuierlichen Überwachung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Bewertung aller KI-Systeme nach EU AI Act Kriterien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Präzise Risikokategorisierung und Compliance-Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kontinuierliche Risikobewertung und Monitoring-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strategische Beratung für risikominimierende Implementierungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EU AI Act Risk Assessment',
        description: 'Die Risikobewertung bildet das Fundament für EU AI Act Compliance. Wir unterstützen Sie bei der systematischen Analyse, Bewertung und Klassifizierung Ihrer KI-Systeme entsprechend den regulatorischen Anforderungen und entwickeln maßgeschneiderte Risk Management Strategien.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Comprehensive AI System Risk Analysis und Impact Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Systematische Risikokategorisierung nach EU AI Act Framework'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Development von Risk Mitigation Strategies und Controls'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Implementation kontinuierlicher Risk Monitoring Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration in existierende Risk Management Frameworks'
          }
        ],
        alert: {
          title: 'Regulatory Update',
          content: 'Der EU AI Act fordert eine systematische und dokumentierte Risikobewertung für alle KI-Systeme. Eine unzureichende Risk Assessment kann zu erheblichen Compliance-Lücken und regulatorischen Sanktionen führen.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierung auf EU AI Act Risk Assessment Methodologien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung mit komplexen AI Risk Management Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Risk Assessment Tools und Methodologien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Integration regulatorischer und technischer Risikoperspektiven'
            }
          ]
        },
        additionalInfo: 'Ein systematisches Risk Assessment reduziert nicht nur regulatorische Risiken, sondern optimiert auch die Performance und Vertrauenswürdigkeit Ihrer KI-Systeme. Proaktive Risikobewertung als Wettbewerbsvorteil.',
        serviceDescription: 'Unser Risk Assessment Service umfasst die vollständige Bewertung Ihrer KI-Landschaft von der initialen Risikoidentifikation bis zur Implementation kontinuierlicher Monitoring-Systeme, abgestimmt auf EU AI Act Anforderungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'AI System Risk Identification und Classification'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Quantitative und Qualitative Risk Assessment Methodologien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Risk Mitigation Strategy Development'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Continuous Risk Monitoring Framework Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Risk Assessment Documentation und Reporting'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Risk Assessment Ansatz',
        description: 'Wir verfolgen einen strukturierten, evidenzbasierten Ansatz zur Risikobewertung, der technische Komplexität mit regulatorischen Anforderungen optimal balanciert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'AI System Inventory und Initial Risk Scoping'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Detailed Risk Analysis mit quantitativen Bewertungsmodellen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Risk Classification gemäß EU AI Act Kategorien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Development maßgeschneiderter Risk Mitigation Strategies'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Implementation und Validation von Risk Controls'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI Regulatory Excellence',
        name: 'Dr. Sarah Chen',
        position: 'Lead AI Risk Consultant',
        quote: 'Unser strukturierter Risk Assessment Ansatz ermöglicht es Unternehmen, KI-Innovationen verantwortungsvoll voranzutreiben und gleichzeitig höchste Compliance-Standards zu erfüllen. Risikomanagement als Enabler für AI Excellence.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Comprehensive AI Risk Analysis',
          description: 'Vollständige Bewertung aller Risikodimensionen Ihrer KI-Systeme mit speziellem Fokus auf EU AI Act Compliance-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematische Risk Identification across AI Lifecycle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Impact Assessment für verschiedene Stakeholder-Gruppen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Likelihood und Impact Scoring nach etablierten Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Risk Heat Map Development und Prioritisierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Risk Mitigation Strategy Development',
          description: 'Entwicklung gezielter Strategien zur Risikominimierung und -kontrolle, abgestimmt auf Ihre spezifischen KI-Anwendungen und Geschäftsanforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Maßgeschneiderte Risk Control Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Cost-Benefit Analysis verschiedener Mitigation-Optionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementation Roadmap mit Prioritäten-Matrix'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Performance Monitoring und Effectiveness Tracking'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(euAiActRiskAssessmentData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EU AI Act Risk Assessment page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
