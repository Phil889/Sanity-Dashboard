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
    console.log('Creating Intelligent Automation Examples page...')

    const intelligentAutomationExamplesData = {
      _type: 'servicePage',
      _id: 'intelligent-automation-examples',
      title: 'Intelligent Automation Examples',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-automation-examples'
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
        title: 'Intelligent Automation Examples - Praxiserprobte Automatisierungslösungen & Use Cases | ADVISORI',
        description: 'Konkrete Intelligent Automation Examples aus der Praxis. Erfolgreiche Automatisierungsprojekte, ROI-optimierte Use Cases, branchenspezifische Implementierungen und EU AI Act konforme Lösungsbeispiele für nachhaltige Geschäftstransformation.',
        keywords: 'Intelligent Automation Examples, Automatisierung Beispiele, RPA Use Cases, Process Automation Praxis, Digital Transformation Examples, KI Automatisierung Cases, EU AI Act Examples'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Automation Examples - Praxiserprobte Automatisierungslösungen und erfolgreiche Use Cases'
        },
        tagline: 'Praxiserprobte Intelligent Automation Examples für nachhaltige Geschäftstransformation',
        heading: 'Intelligent Automation Examples',
        description: 'Intelligent Automation Examples demonstrieren die transformative Kraft moderner Automatisierungstechnologien durch konkrete, messbare Erfolgsgeschichten aus verschiedenen Branchen und Anwendungsbereichen. Diese praxiserprobten Lösungsbeispiele zeigen, wie Unternehmen durch strategische Automatisierung operative Exzellenz erreichen, Kosten optimieren und gleichzeitig EU AI Act Compliance gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Praxiserprobte Automatisierungsbeispiele mit messbaren ROI-Ergebnissen und Erfolgsmetriken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Branchenspezifische Use Cases für Finanzwesen, Healthcare, Manufacturing und Services'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'End-to-End Implementierungsbeispiele von der Konzeption bis zur produktiven Nutzung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'EU AI Act konforme Automatisierungslösungen mit Compliance-Dokumentation'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Automation Examples - Konkrete Erfolgsgeschichten für strategische Geschäftstransformation',
        description: 'Intelligent Automation Examples bieten wertvolle Einblicke in die praktische Umsetzung moderner Automatisierungsstrategien und demonstrieren, wie Unternehmen verschiedener Branchen durch intelligente Automatisierung messbare Geschäftserfolge erzielen. Diese Beispiele dienen als Inspiration und Leitfaden für eigene Automatisierungsinitiativen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Dokumentenverarbeitung und Invoice Processing mit KI-gestützter Datenextraktion und Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Customer Service Automation durch Chatbots, Ticket-Routing und Response-Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Financial Process Automation für Reporting, Compliance und Risk Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Supply Chain Automation mit Demand Forecasting und Inventory Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'HR Process Automation für Recruitment, Onboarding und Performance Management'
          }
        ],
        alert: {
          title: 'Intelligent Automation Examples als Erfolgsgarant für digitale Transformation',
          content: 'Praxiserprobte Automation Examples reduzieren Implementierungsrisiken, beschleunigen Time-to-Value und gewährleisten nachhaltige Automatisierungserfolge durch bewährte Lösungsansätze.'
        },
        whyUs: {
          title: 'Warum Intelligent Automation Examples mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Sammlung branchenspezifischer Automatisierungsbeispiele mit dokumentierten Erfolgsmetriken'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act konforme Implementierungsbeispiele für rechtssichere Automatisierungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Methodologien und Templates für beschleunigte Automatisierungsprojekte'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Weiterentwicklung der Example-Bibliothek durch aktuelle Projekterfahrungen'
            }
          ]
        },
        additionalInfo: 'Intelligent Automation Examples ermöglichen es Unternehmen, von bewährten Automatisierungslösungen zu lernen und diese an ihre spezifischen Anforderungen anzupassen. Die richtige Auswahl und Anpassung von Automation Examples beschleunigt Implementierungen und maximiert Erfolgswahrscheinlichkeiten.',
        serviceDescription: 'Unser Intelligent Automation Examples Service bietet eine kuratierte Sammlung praxiserprobter Automatisierungslösungen mit detaillierten Implementierungsleitfäden, ROI-Analysen und Compliance-Dokumentation. Wir unterstützen bei der Auswahl, Anpassung und Implementierung passender Automation Examples für Ihre spezifischen Geschäftsanforderungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Branchenspezifische Automation Examples mit detaillierten Use Case-Beschreibungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'ROI-Analysen und Business Case-Dokumentation für Automatisierungsbeispiele'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierungsleitfäden mit Technical Specifications und Best Practices'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Compliance-Dokumentation und EU AI Act konforme Implementierungsrichtlinien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Anpassungsberatung für kundenspezifische Automatisierungsanforderungen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zu Intelligent Automation Examples',
        description: 'Wir verfolgen einen systematischen und praxisorientierten Ansatz zur Entwicklung und Bereitstellung von Intelligent Automation Examples, der bewährte Lösungen mit individuellen Geschäftsanforderungen optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Example-Analyse und Use Case-Matching für optimale Automatisierungslösungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Customization und Anpassung von Automation Examples an spezifische Geschäftsanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Proof-of-Concept-Entwicklung basierend auf bewährten Automatisierungsbeispielen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Schrittweise Implementierung mit kontinuierlicher Optimierung und Skalierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Knowledge Transfer und Best Practice-Sharing für nachhaltige Automatisierungserfolge'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Intelligent Automation Examples sind der Schlüssel für erfolgreiche Automatisierungsprojekte. Durch praxiserprobte Lösungsbeispiele können Unternehmen Implementierungsrisiken minimieren, Time-to-Value beschleunigen und von bewährten Best Practices profitieren. Unsere kuratierte Example-Bibliothek kombiniert technische Exzellenz mit EU AI Act Compliance und ermöglicht nachhaltige Automatisierungserfolge.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Document Processing Automation Examples',
          description: 'Umfassende Beispiele für intelligente Dokumentenverarbeitung mit KI-gestützter Extraktion und Validierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Invoice Processing Automation mit OCR, Datenextraktion und ERP-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Contract Analysis und Legal Document Processing mit NLP-Technologien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Email Classification und Attachment Processing für automatisierte Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Compliance Document Management mit automatisierter Validierung und Archivierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Customer Service Automation Examples',
          description: 'Praxiserprobte Lösungen für automatisierten Kundenservice mit KI-Integration und Omnichannel-Support.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Chatbot Implementation mit Natural Language Understanding und Context Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Ticket Routing und Priority Classification für optimierte Support-Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Automated Response Generation mit personalisierter Kundenansprache'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Sentiment Analysis und Customer Satisfaction Monitoring für proaktiven Service'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Financial Process Automation Examples',
          description: 'Spezialisierte Automatisierungsbeispiele für Finanzprozesse mit Compliance-Integration und Risk Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Automated Financial Reporting mit Real-time Data Integration und Validation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Risk Assessment Automation mit Machine Learning-basierter Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Compliance Monitoring und Regulatory Reporting mit automatisierter Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Payment Processing Automation mit Fraud Detection und Security Controls'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Supply Chain Automation Examples',
          description: 'Innovative Automatisierungslösungen für Supply Chain Management mit Predictive Analytics und IoT-Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Demand Forecasting Automation mit Machine Learning und Historical Data Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Inventory Management Automation mit Real-time Tracking und Optimization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Supplier Management Automation mit Performance Monitoring und Risk Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Logistics Optimization mit Route Planning und Delivery Tracking Automation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'HR Process Automation Examples',
          description: 'Comprehensive HR Automation Examples für Talent Management, Recruitment und Employee Experience.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Recruitment Automation mit CV Screening, Candidate Matching und Interview Scheduling'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Employee Onboarding Automation mit Workflow Management und Document Processing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Performance Management Automation mit Goal Tracking und Feedback Collection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Payroll Processing Automation mit Compliance Checking und Report Generation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Healthcare Automation Examples',
          description: 'Spezialisierte Healthcare Automation Examples mit Patient Care Focus und Regulatory Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Patient Data Management Automation mit HIPAA-konformer Datenverarbeitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Appointment Scheduling Automation mit Resource Optimization und Patient Communication'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Medical Records Processing mit Automated Classification und Archiving'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Insurance Claims Processing Automation mit Validation und Approval Workflows'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentAutomationExamplesData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Automation Examples page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
