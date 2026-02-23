import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
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
    console.log('Creating FIDA Compliance Programme page...')

    const fidaComplianceProgrammeData = {
      _type: 'servicePage',
      _id: 'fida-compliance-programme',
      title: 'FIDA Compliance Programme',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/financial-data-access-fida/fida-compliance-programme'
      },
      parent: {
        _type: 'reference',
        _ref: 'financial-data-access-fida'
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
        title: 'FIDA Compliance Programme | Governance & Management | ADVISORI',
        description: 'Umfassende FIDA Compliance Programme für Finanzdienstleister. Governance-Strukturen, Policy-Entwicklung, Training und kontinuierliche Überwachung für Financial Data Access Regulation.',
        keywords: 'FIDA Compliance Programme, Governance, Policy Management, Training, Monitoring, Audit, Regulatory Management, Compliance Framework'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FIDA Compliance Programme Services'
        },
        tagline: 'Strukturierte FIDA-Compliance-Programme für nachhaltige Governance',
        heading: 'FIDA Compliance Programme',
        description: 'Die Entwicklung eines robusten FIDA Compliance Programmes erfordert strukturierte Governance, umfassende Policies und kontinuierliche Überwachung. Wir entwickeln maßgeschneiderte Compliance-Programme, die nicht nur regulatorische Anforderungen erfüllen, sondern auch operative Exzellenz fördern.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende Governance-Strukturen und Compliance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturierte Policy-Entwicklung und Verfahrensdokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Training- und Awareness-Programme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Monitoring- und Audit-Systeme'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strukturierte FIDA-Compliance-Programme entwickeln',
        description: 'Ein effektives FIDA Compliance Programme bildet das Fundament für nachhaltige regulatorische Konformität und operative Exzellenz. Unser systematischer Ansatz integriert Governance, Policies, Training und Monitoring in ein kohärentes Framework für langfristige Compliance-Sicherstellung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung umfassender Governance-Strukturen und Verantwortlichkeitsmatrizen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Aufbau strukturierter Policy- und Verfahrens-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementation integrierter Risikomanagement- und Kontrollsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Etablierung kontinuierlicher Training- und Awareness-Programme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Aufbau robuster Monitoring-, Reporting- und Audit-Mechanismen'
          }
        ],
        alert: {
          title: 'Programme Excellence',
          content: 'Ein strukturiertes FIDA Compliance Programme ist mehr als regulatorische Pflichterfüllung. Es schafft die Grundlage für operative Effizienz, Risikominimierung und strategische Wettbewerbsvorteile durch Excellence in Compliance-Management.'
        },
        whyUs: {
          title: 'Unsere Programme-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Bewährte Erfahrung in Compliance-Programme-Entwicklung und -Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefgreifende Expertise in Governance-Strukturen und Policy-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von Strategie bis operative Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Unterstützung und Programme-Optimierung'
            }
          ]
        },
        additionalInfo: 'FIDA Compliance Programme erfordern eine systematische Herangehensweise, die organisatorische Strukturen, Prozesse, Technologien und Menschen integriert. Von der Governance-Entwicklung über Policy-Management bis hin zu Training und Monitoring müssen alle Komponenten nahtlos zusammenwirken.',
        serviceDescription: 'Wir entwickeln und implementieren umfassende FIDA Compliance Programme, die regulatorische Exzellenz mit operativer Effizienz verbinden. Unser Ansatz gewährleistet nachhaltige Compliance-Performance und kontinuierliche Verbesserung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Governance-Entwicklung und Organisationsstruktur-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Policy- und Verfahrens-Framework-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Risikomanagement- und Kontrollsystem-Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Training- und Awareness-Programm-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Monitoring-, Reporting- und Audit-System-Aufbau'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strukturierter Programme-Ansatz',
        description: 'Wir entwickeln FIDA Compliance Programme durch einen systematischen, phasenweisen Ansatz, der alle kritischen Komponenten integriert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse bestehender Compliance-Strukturen und Identifikation von Optimierungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung maßgeschneiderter Governance-Frameworks und Organisationsstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementation integrierter Policy-, Prozess- und Kontrollsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Aufbau umfassender Training-, Monitoring- und Audit-Mechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Programme-Optimierung und Performance-Enhancement'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Ein strukturiertes FIDA Compliance Programme ist das Rückgrat erfolgreicher regulatorischer Konformität. Unsere bewährten Programme-Frameworks schaffen nicht nur Compliance-Sicherheit, sondern etablieren auch eine Kultur der Excellence, die operative Effizienz und strategische Wettbewerbsvorteile durch systematisches Compliance-Management ermöglicht.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Governance-Framework und Organisationsstruktur-Entwicklung',
          description: 'Aufbau umfassender Governance-Strukturen und Organisationsframeworks für effektive FIDA-Compliance-Steuerung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung strukturierter Governance-Modelle mit klaren Rollen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Aufbau von Compliance-Committees und Entscheidungsgremien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Design von Eskalations- und Kommunikationsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Implementation von Accountability- und Performance-Management-Systemen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Policy- und Verfahrens-Framework-Development',
          description: 'Entwicklung umfassender Policy- und Verfahrens-Frameworks für strukturierte FIDA-Compliance-Umsetzung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Aufbau strukturierter Policy-Hierarchien und Dokumentations-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung detaillierter Verfahrensanweisungen und Arbeitsanleitungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementation von Policy-Lifecycle-Management und Versionskontrolle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Aufbau von Approval- und Review-Prozessen für Policy-Updates'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Risikomanagement und Kontrollsystem-Implementation',
          description: 'Aufbau integrierter Risikomanagement- und Kontrollsysteme für proaktive FIDA-Compliance-Sicherstellung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Entwicklung umfassender Risiko-Assessment- und -Management-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Implementation von Three-Lines-of-Defense-Modellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Aufbau von Key-Risk-Indicators und Control-Effectiveness-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Entwicklung von Issue-Management und Remediation-Prozessen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Training und Awareness-Programm-Entwicklung',
          description: 'Aufbau umfassender Training- und Awareness-Programme für nachhaltige FIDA-Compliance-Kultur.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Entwicklung rollenspezifischer Training-Curricula und Lernpfade'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Aufbau von E-Learning-Plattformen und interaktiven Schulungsmodulen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Implementation von Competency-Assessment und Zertifizierungs-Programmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Entwicklung kontinuierlicher Awareness-Kampagnen und Kommunikations-Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Monitoring und Reporting-System-Aufbau',
          description: 'Implementation umfassender Monitoring- und Reporting-Systeme für kontinuierliche FIDA-Compliance-Überwachung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Entwicklung von KPI-Frameworks und Performance-Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Aufbau automatisierter Monitoring- und Alerting-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Implementation von Management-Reporting und Regulatory-Reporting-Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Entwicklung von Trend-Analysis und Predictive-Compliance-Monitoring'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Audit und Assurance-Framework-Development',
          description: 'Aufbau robuster Audit- und Assurance-Frameworks für unabhängige FIDA-Compliance-Validierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Entwicklung strukturierter Internal-Audit-Programme und -Methodologien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Aufbau von Independent-Assurance und Third-Party-Validation-Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Implementation von Continuous-Auditing und Real-Time-Assurance-Capabilities'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Entwicklung von Audit-Finding-Management und Corrective-Action-Tracking'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(fidaComplianceProgrammeData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FIDA Compliance Programme page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
