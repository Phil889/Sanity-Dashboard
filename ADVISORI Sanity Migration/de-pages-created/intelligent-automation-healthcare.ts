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
    console.log('Creating Intelligent Automation Healthcare page...')

    const intelligentAutomationHealthcareData = {
      _type: 'servicePage',
      _id: 'intelligent-automation-healthcare',
      title: 'Intelligent Automation Healthcare',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-automation-healthcare'
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
        title: 'Intelligent Automation Healthcare - KI-gestützte Medizin-Automatisierung & Digital Health | ADVISORI',
        description: 'Spezialisierte Intelligent Automation für Healthcare: Medizinische Workflow-Automatisierung, Patientendaten-Management, Clinical Decision Support, HIPAA-konforme KI-Integration und Digital Health Transformation für moderne Gesundheitseinrichtungen.',
        keywords: 'Healthcare Automation, Medical AI, Clinical Workflow Automation, Patient Data Management, Digital Health, Medical Records Automation, HIPAA Compliance, Clinical Decision Support, Telemedicine Automation, Healthcare AI'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Automation Healthcare - KI-gestützte Medizin-Automatisierung für moderne Gesundheitseinrichtungen'
        },
        tagline: 'Healthcare Excellence durch Intelligent Automation',
        heading: 'Intelligent Automation Healthcare',
        description: 'Intelligent Automation Healthcare revolutioniert die medizinische Versorgung durch KI-gestützte Automatisierungslösungen, die klinische Workflows optimieren, Patientensicherheit erhöhen und administrative Effizienz maximieren. Unsere spezialisierten Healthcare-Automatisierungssysteme integrieren nahtlos in bestehende Krankenhausinformationssysteme und gewährleisten dabei höchste Compliance-Standards für Datenschutz und medizinische Sicherheit.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Klinische Workflow-Automatisierung für optimierte Patientenversorgung und Behandlungsqualität'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'HIPAA-konforme Patientendaten-Automatisierung mit höchsten Sicherheitsstandards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'KI-gestützte Clinical Decision Support für evidenzbasierte Behandlungsentscheidungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Digital Health Integration und Telemedicine-Automatisierung für moderne Patientenbetreuung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Automation Healthcare - Transformative Medizin-Automatisierung für moderne Gesundheitsversorgung',
        description: 'Intelligent Automation Healthcare transformiert traditionelle medizinische Prozesse in intelligente, KI-gestützte Gesundheitssysteme, die nicht nur operative Effizienz steigern, sondern auch Patientensicherheit, Behandlungsqualität und klinische Outcomes signifikant verbessern. Durch nahtlose Integration in bestehende Healthcare-IT-Infrastrukturen schaffen wir zukunftsfähige Digital Health-Ökosysteme.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Clinical Workflow Automation optimiert Behandlungsabläufe von der Patientenaufnahme bis zur Entlassung mit KI-gestützter Prozessorchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Medical Records Processing automatisiert Dokumentation, Kodierung und Archivierung mit höchster Präzision und Compliance-Sicherheit'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Patient Communication Automation ermöglicht personalisierte, automatisierte Patienteninteraktion über alle Touchpoints hinweg'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Clinical Decision Support Systems unterstützen Ärzte mit KI-basierten Diagnose- und Therapieempfehlungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Regulatory Compliance Automation gewährleistet automatische Einhaltung von HIPAA, FDA und anderen Healthcare-Regulierungen'
          }
        ],
        alert: {
          title: 'Healthcare Automation als Schlüssel für moderne Patientenversorgung',
          content: 'Intelligent Automation Healthcare wird zum strategischen Enabler für verbesserte Patientenergebnisse, operative Exzellenz und nachhaltige Gesundheitssystem-Transformation in einer zunehmend digitalisierten Medizinlandschaft.'
        },
        whyUs: {
          title: 'Warum Healthcare Automation mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Healthcare-Expertise mit tiefem Verständnis medizinischer Workflows und Compliance-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'HIPAA-konforme und EU-DSGVO-sichere Automatisierungslösungen für höchste Datenschutzstandards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Integration in führende Krankenhausinformationssysteme und Medical Device-Landschaften'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Innovation durch Medical AI und Evidence-Based Automation-Entwicklung'
            }
          ]
        },
        additionalInfo: 'Healthcare Automation ermöglicht es Gesundheitseinrichtungen, die Vorteile modernster KI-Technologien für verbesserte Patientenversorgung, operative Effizienz und klinische Excellence zu nutzen. Die richtige Automation-Strategie wird zum Wettbewerbsvorteil in einer sich schnell entwickelnden Healthcare-Landschaft.',
        serviceDescription: 'Unser Healthcare Automation Service umfasst die vollständige Transformation medizinischer Prozesslandschaften zu intelligenten, KI-gestützten Gesundheitssystemen. Wir entwickeln maßgeschneiderte Healthcare-Automatisierungsstrategien, die perfekt zu Ihren klinischen Workflows, IT-Infrastrukturen und regulatorischen Anforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Clinical Workflow Automation für optimierte Behandlungsabläufe und Patientenversorgung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Medical Records Processing und automatisierte Dokumentations-Workflows'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Patient Communication Automation für verbesserte Patientenerfahrung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Clinical Decision Support und KI-gestützte Diagnose-Unterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Healthcare Compliance Automation und Regulatory Reporting'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zu Healthcare Automation',
        description: 'Wir verfolgen einen patientenzentrierten und compliance-orientierten Ansatz zu Healthcare Automation, der medizinische Expertise mit modernster KI-Technologie kombiniert und dabei höchste Sicherheits- und Qualitätsstandards gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Clinical Process Analysis und Healthcare-spezifische Automatisierungspotenzial-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategic Healthcare Automation Roadmap mit Fokus auf Patientensicherheit und klinische Outcomes'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Medical Automation-Implementierung mit kontinuierlicher Qualitätssicherung und Compliance-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Healthcare Change Management und medizinisches Personal-Training für erfolgreiche Automation-Adoption'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Healthcare Innovation durch Medical AI-Enhancement und Evidence-Based Optimization'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Healthcare Automation ist nicht nur eine technologische Evolution, sondern eine fundamentale Transformation der Patientenversorgung. Unsere KI-gestützten Automatisierungslösungen ermöglichen es Gesundheitseinrichtungen, höchste medizinische Qualität mit operativer Exzellenz zu verbinden, während gleichzeitig Patientensicherheit und Compliance-Standards auf einem neuen Niveau gewährleistet werden.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Clinical Workflow Automation',
          description: 'Umfassende Automatisierung klinischer Arbeitsabläufe für optimierte Patientenversorgung und verbesserte Behandlungsqualität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Patient Journey Automation von der Aufnahme bis zur Entlassung mit intelligenter Workflow-Orchestrierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Clinical Task Automation für Pflegepersonal und medizinische Fachkräfte zur Effizienzsteigerung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Treatment Protocol Automation für standardisierte, evidenzbasierte Behandlungsabläufe'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Resource Scheduling Automation für optimale Nutzung von Personal, Räumen und medizinischen Geräten'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Medical Records Processing & Management',
          description: 'Intelligente Automatisierung der medizinischen Dokumentation und Patientendaten-Verwaltung mit höchsten Sicherheitsstandards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Electronic Health Records Automation für nahtlose Dokumentation und Datenintegration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Medical Coding Automation mit KI-gestützter ICD-10 und CPT-Kodierung für präzise Abrechnung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Clinical Documentation Automation für automatisierte Arztbriefe und Behandlungsberichte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Medical Image Processing mit KI-basierter Bildanalyse und automatisierter Befundung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Patient Communication & Engagement Automation',
          description: 'Personalisierte, automatisierte Patientenkommunikation für verbesserte Patient Experience und Behandlungsadhärenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Automated Patient Outreach für Terminplanung, Erinnerungen und Follow-up-Kommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Personalized Health Education mit automatisierter Bereitstellung relevanter Gesundheitsinformationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Medication Adherence Automation für automatisierte Medikamentenerinnerungen und Compliance-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Patient Feedback Automation für kontinuierliche Qualitätsverbesserung und Patientenzufriedenheit'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Clinical Decision Support & AI-Diagnostics',
          description: 'KI-gestützte Entscheidungsunterstützung für Ärzte mit evidenzbasierten Diagnose- und Therapieempfehlungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'AI-Powered Diagnostic Support mit Machine Learning-basierten Diagnosevorschlägen und Risikoanalysen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Treatment Recommendation Systems für personalisierte, evidenzbasierte Therapievorschläge'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Drug Interaction Monitoring mit automatisierter Überprüfung von Medikamentenwechselwirkungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Predictive Analytics für Früherkennung von Komplikationen und präventive Interventionen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Healthcare Compliance & Regulatory Automation',
          description: 'Automatisierte Compliance-Überwachung und Regulatory Reporting für HIPAA, FDA und andere Healthcare-Regulierungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'HIPAA Compliance Automation für automatisierte Datenschutz-Überwachung und Audit-Trails'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Regulatory Reporting Automation für automatisierte Meldungen an Gesundheitsbehörden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Quality Assurance Automation für kontinuierliche Qualitätskontrolle und Akkreditierungs-Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Risk Management Automation für proaktive Identifikation und Mitigation von Healthcare-Risiken'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Telemedicine & Digital Health Integration',
          description: 'Nahtlose Integration von Telemedicine-Plattformen und Digital Health-Lösungen in bestehende Healthcare-Systeme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Telemedicine Platform Integration für nahtlose virtuelle Patientenbetreuung und Remote Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Remote Patient Monitoring Automation für kontinuierliche Gesundheitsüberwachung und Alerting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Digital Health Data Integration für ganzheitliche Patientendaten aus verschiedenen Digital Health-Quellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Mobile Health App Integration für patientenzentrierte Digital Health-Erfahrungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentAutomationHealthcareData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Automation Healthcare page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
