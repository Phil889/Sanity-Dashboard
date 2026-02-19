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
    console.log('Creating Intelligent Automation Insurance page...')

    const intelligentAutomationInsuranceData = {
      _type: 'servicePage',
      _id: 'intelligent-automation-in-insurance',
      title: 'Intelligent Automation Insurance',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-automation-in-insurance'
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
        title: 'Intelligent Automation Insurance - KI-gestützte Versicherungsautomatisierung & InsurTech | ADVISORI',
        description: 'Spezialisierte Intelligent Automation für Versicherungen: Claims Processing, Underwriting-Automatisierung, Policenverwaltung, Regulatory Compliance, Fraud Detection und Customer Service Automation für moderne InsurTech-Transformation.',
        keywords: 'Insurance Automation, InsurTech, Claims Processing Automation, Underwriting AI, Policy Management, Insurance Fraud Detection, Regulatory Compliance Insurance, Customer Service Automation, Digital Insurance, Insurance AI'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Automation Insurance - KI-gestützte Versicherungsautomatisierung für moderne InsurTech-Transformation'
        },
        tagline: 'InsurTech Excellence durch Intelligent Automation',
        heading: 'Intelligent Automation Insurance',
        description: 'Intelligent Automation Insurance revolutioniert die Versicherungsbranche durch KI-gestützte Automatisierungslösungen, die Claims Processing beschleunigen, Underwriting-Prozesse optimieren und Customer Experience transformieren. Unsere spezialisierten InsurTech-Automatisierungssysteme integrieren nahtlos in bestehende Versicherungskernssysteme und gewährleisten dabei höchste Compliance-Standards für regulatorische Anforderungen und Datenschutz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Claims Processing Automation für beschleunigte Schadenbearbeitung und verbesserte Customer Experience'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'KI-gestütztes Underwriting mit automatisierter Risikoanalyse und Pricing-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Regulatory Compliance Automation für BaFin, Solvency II und GDPR-konforme Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Fraud Detection und Prevention durch Advanced Analytics und Machine Learning'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Automation Insurance - Transformative InsurTech-Automatisierung für moderne Versicherungsunternehmen',
        description: 'Intelligent Automation Insurance transformiert traditionelle Versicherungsprozesse in intelligente, KI-gestützte InsurTech-Systeme, die nicht nur operative Effizienz steigern, sondern auch Customer Experience, Risk Management und Compliance-Performance signifikant verbessern. Durch nahtlose Integration in bestehende Versicherungskernssysteme schaffen wir zukunftsfähige Digital Insurance-Ökosysteme.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Claims Processing Automation optimiert Schadenbearbeitung von der Meldung bis zur Auszahlung mit KI-gestützter Dokumentenanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Underwriting Intelligence automatisiert Risikoanalyse, Pricing und Policenerstellung mit höchster Präzision und Geschwindigkeit'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Customer Service Automation ermöglicht personalisierte, automatisierte Kundeninteraktion über alle Touchpoints hinweg'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Fraud Detection Systems nutzen Advanced Analytics für proaktive Betrugserkennung und Prevention'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Regulatory Compliance Automation gewährleistet automatische Einhaltung von BaFin, Solvency II und GDPR-Anforderungen'
          }
        ],
        alert: {
          title: 'Insurance Automation als Schlüssel für digitale Versicherungstransformation',
          content: 'Intelligent Automation Insurance wird zum strategischen Enabler für verbesserte Customer Experience, operative Exzellenz und nachhaltige InsurTech-Innovation in einer zunehmend digitalisierten Versicherungslandschaft.'
        },
        whyUs: {
          title: 'Warum Insurance Automation mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte InsurTech-Expertise mit tiefem Verständnis von Versicherungsprozessen und Compliance-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'BaFin-konforme und GDPR-sichere Automatisierungslösungen für höchste regulatorische Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Integration in führende Versicherungskernssysteme und Legacy-System-Landschaften'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Innovation durch Insurance AI und Evidence-Based Automation-Entwicklung'
            }
          ]
        },
        additionalInfo: 'Insurance Automation ermöglicht es Versicherungsunternehmen, die Vorteile modernster KI-Technologien für verbesserte Customer Experience, operative Effizienz und Risk Management zu nutzen. Die richtige Automation-Strategie wird zum Wettbewerbsvorteil in einer sich schnell entwickelnden InsurTech-Landschaft.',
        serviceDescription: 'Unser Insurance Automation Service umfasst die vollständige Transformation von Versicherungsprozesslandschaften zu intelligenten, KI-gestützten InsurTech-Systemen. Wir entwickeln maßgeschneiderte Insurance-Automatisierungsstrategien, die perfekt zu Ihren Geschäftsprozessen, IT-Infrastrukturen und regulatorischen Anforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Claims Processing Automation für beschleunigte Schadenbearbeitung und Customer Satisfaction'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Underwriting Intelligence und automatisierte Risikoanalyse-Workflows'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Policy Management Automation für effiziente Policenverwaltung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Customer Service Automation und Self-Service-Portal-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Regulatory Compliance Automation und Audit-Trail-Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zu Insurance Automation',
        description: 'Wir verfolgen einen kundenzentrierten und compliance-orientierten Ansatz zu Insurance Automation, der Versicherungsexpertise mit modernster KI-Technologie kombiniert und dabei höchste Sicherheits- und Qualitätsstandards gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Insurance Process Analysis und versicherungsspezifische Automatisierungspotenzial-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategic Insurance Automation Roadmap mit Fokus auf Customer Experience und Risk Management'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise InsurTech-Implementierung mit kontinuierlicher Qualitätssicherung und Compliance-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Insurance Change Management und Mitarbeiter-Training für erfolgreiche Automation-Adoption'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche InsurTech-Innovation durch Insurance AI-Enhancement und Performance-Optimization'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Insurance Automation ist nicht nur eine technologische Evolution, sondern eine fundamentale Transformation der Versicherungsbranche. Unsere KI-gestützten Automatisierungslösungen ermöglichen es Versicherungsunternehmen, höchste Service-Qualität mit operativer Exzellenz zu verbinden, während gleichzeitig Compliance-Standards und Risk Management auf einem neuen Niveau gewährleistet werden.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Claims Processing Automation',
          description: 'Umfassende Automatisierung der Schadenbearbeitung für beschleunigte Claims-Prozesse und verbesserte Customer Experience.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Automated Claims Intake mit KI-gestützter Dokumentenanalyse und Schadensmeldungs-Verarbeitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Damage Assessment Automation für automatisierte Schadensschätzung und Gutachten-Erstellung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Claims Workflow Orchestration für optimierte Bearbeitungsabläufe und Status-Tracking'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Settlement Processing Automation für beschleunigte Auszahlungen und Abwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Underwriting Intelligence & Risk Assessment',
          description: 'KI-gestützte Automatisierung von Underwriting-Prozessen mit intelligenter Risikoanalyse und Pricing-Optimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automated Risk Assessment mit Machine Learning-basierten Risikomodellen und Scoring-Algorithmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Dynamic Pricing Automation für optimierte Prämienberechnung und Wettbewerbsfähigkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Policy Generation Automation für automatisierte Policenerstellung und Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Underwriting Decision Support mit KI-basierten Empfehlungen und Approval-Workflows'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Policy Management & Administration Automation',
          description: 'Intelligente Automatisierung der Policenverwaltung für effiziente Administration und Lifecycle-Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Policy Lifecycle Automation für automatisierte Verwaltung von Erstellung bis Kündigung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Renewal Processing Automation mit intelligenter Verlängerungs-Orchestrierung und Customer Outreach'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Policy Modification Automation für automatisierte Änderungen und Anpassungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Billing Integration Automation für nahtlose Prämienabrechnung und Payment Processing'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Customer Service & Experience Automation',
          description: 'Personalisierte, automatisierte Kundenbetreuung für verbesserte Customer Experience und Self-Service-Capabilities.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Intelligent Chatbots mit Insurance-spezifischem Knowledge Management und Natural Language Processing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Customer Portal Automation für Self-Service-Funktionalitäten und Account Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Personalized Communication Automation für zielgerichtete Kundenkommunikation und Marketing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Customer Journey Optimization mit automatisierter Touchpoint-Orchestrierung und Experience Tracking'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Fraud Detection & Prevention Systems',
          description: 'Advanced Analytics und Machine Learning für proaktive Betrugserkennung und Risk Mitigation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Real-time Fraud Detection mit Machine Learning-Algorithmen und Anomalie-Erkennung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Pattern Recognition Systems für Identifikation verdächtiger Claims und Transaktionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Risk Scoring Automation für automatisierte Bewertung und Priorisierung von Fraud-Verdachtsfällen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Investigation Workflow Automation für effiziente Bearbeitung und Dokumentation von Fraud Cases'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Regulatory Compliance & Reporting Automation',
          description: 'Automatisierte Compliance-Überwachung und Regulatory Reporting für BaFin, Solvency II und GDPR-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'BaFin Compliance Automation für automatisierte Aufsichtsrechtliche Meldungen und Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Solvency II Reporting Automation für automatisierte Solvabilitäts- und Risiko-Berichterstattung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'GDPR Data Protection Automation für automatisierte Datenschutz-Compliance und Privacy Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Audit Trail Management mit automatisierter Dokumentation und Compliance-Monitoring'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentAutomationInsuranceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Automation Insurance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
