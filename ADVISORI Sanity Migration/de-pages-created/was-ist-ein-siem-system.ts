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
    console.log('Creating Was ist ein SIEM-System page...')

    const siemSystemData = {
      _type: 'servicePage',
      _id: 'was-ist-ein-siem-system',
      title: 'Was ist ein SIEM-System?',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/security-operations-secops/siem/was-ist-ein-siem-system'
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
        title: 'Was ist ein SIEM-System? | ADVISORI',
        description: 'Erfahren Sie alles über SIEM-Systeme: Definition, Funktionsweise, Vorteile und Implementierung. Expertenberatung für Security Information and Event Management in Unternehmen.',
        keywords: 'SIEM System, Security Information Event Management, Sicherheitsüberwachung, Log Management, Threat Detection, Incident Response, Cybersecurity, IT-Sicherheit'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'SIEM-System Security Information and Event Management'
        },
        tagline: 'Zentrale Sicherheitsüberwachung für moderne Unternehmen',
        heading: 'Was ist ein SIEM-System?',
        description: 'Security Information and Event Management (SIEM) bildet das Herzstück moderner Cybersecurity-Strategien. Erfahren Sie, wie SIEM-Systeme Ihre IT-Infrastruktur schützen, Bedrohungen in Echtzeit erkennen und Compliance-Anforderungen erfüllen. Unsere Expertise hilft Ihnen bei der optimalen SIEM-Implementierung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Zentrale Sammlung und Analyse aller Sicherheitsereignisse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Echtzeit-Bedrohungserkennung und automatisierte Incident Response'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Compliance-konforme Protokollierung und Berichterstattung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Verbesserte Sichtbarkeit und Kontrolle über die IT-Sicherheitslandschaft'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'SIEM-Systeme: Die Grundlage moderner Cybersecurity',
        description: 'Ein Security Information and Event Management (SIEM) System ist eine zentrale Plattform, die Sicherheitsdaten aus verschiedenen Quellen sammelt, korreliert und analysiert. SIEM-Systeme ermöglichen es Unternehmen, Sicherheitsbedrohungen proaktiv zu erkennen, Compliance-Anforderungen zu erfüllen und die Reaktionszeit auf Sicherheitsvorfälle drastisch zu reduzieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Zentrale Aggregation von Log-Daten aus allen IT-Systemen und Sicherheitstools'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Intelligente Korrelation und Analyse zur Identifikation von Sicherheitsbedrohungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Real-time Monitoring mit automatisierten Alerts und Benachrichtigungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Forensische Analysefähigkeiten für detaillierte Incident Investigation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Compliance-Reporting und regulatorische Dokumentation'
          }
        ],
        alert: {
          title: 'Strategischer Vorteil',
          content: 'SIEM-Systeme sind mehr als nur Monitoring-Tools. Sie fungieren als zentrale Intelligenz-Plattform, die aus Millionen von Events verwertbare Sicherheitserkenntnisse generiert und Unternehmen dabei hilft, von reaktiver zu proaktiver Cybersecurity zu wechseln.'
        },
        whyUs: {
          title: 'Unsere SIEM-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung in der Planung und Implementierung von SIEM-Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Beratung für die optimale SIEM-Auswahl'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Spezialisierung auf Enterprise-SIEM-Architekturen und Compliance-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von der Strategie bis zum operativen Betrieb'
            }
          ]
        },
        additionalInfo: 'Moderne SIEM-Systeme nutzen fortschrittliche Technologien wie Machine Learning, User and Entity Behavior Analytics (UEBA) und Threat Intelligence, um auch komplexe und bisher unbekannte Angriffsmuster zu erkennen. Die richtige SIEM-Implementierung kann die Mean Time to Detection (MTTD) um bis zu neunzig Prozent reduzieren.',
        serviceDescription: 'Wir unterstützen Unternehmen bei der strategischen Planung, Auswahl, Implementierung und Optimierung von SIEM-Systemen. Unser ganzheitlicher Ansatz berücksichtigt technische, organisatorische und regulatorische Anforderungen für eine nachhaltige und effektive Sicherheitsüberwachung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'SIEM-Strategie und Architektur-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Herstellerauswahl und Proof-of-Concept Durchführung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'SIEM-Implementierung und Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Use Case Development und Rule Engineering'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'SOC-Integration und Analyst-Training'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer SIEM-Implementierungsansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte SIEM-Strategie, die Ihre spezifischen Sicherheitsanforderungen, Compliance-Vorgaben und organisatorischen Gegebenheiten berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer IT-Infrastruktur und Sicherheitsanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer strategischen SIEM-Roadmap mit klaren Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Herstellerunabhängige Evaluierung und Auswahl der optimalen SIEM-Lösung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Strukturierte Implementierung mit kontinuierlicher Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltiger Wissenstransfer und operative Unterstützung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'SIEM-Systeme sind das zentrale Nervensystem moderner Cybersecurity-Strategien. Eine durchdachte SIEM-Implementierung transformiert die Art, wie Unternehmen Sicherheitsbedrohungen erkennen und darauf reagieren. Unsere Erfahrung zeigt, dass der Erfolg nicht nur von der Technologie, sondern von der strategischen Integration in die Gesamtsicherheitsarchitektur abhängt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'SIEM-Strategie und Architektur-Design',
          description: 'Entwicklung einer umfassenden SIEM-Strategie, die Ihre Geschäftsanforderungen, Sicherheitsziele und Compliance-Vorgaben optimal adressiert.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strategische SIEM-Roadmap mit Business-Alignment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Architektur-Design für skalierbare und zukunftssichere SIEM-Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integration in bestehende Security Operations und IT-Landschaften'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Compliance-Mapping für regulatorische Anforderungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'SIEM-Evaluierung und Herstellerauswahl',
          description: 'Herstellerunabhängige Bewertung und Auswahl der optimalen SIEM-Lösung basierend auf Ihren spezifischen Anforderungen und Rahmenbedingungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Umfassende Marktanalyse und Vendor-Evaluierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Strukturierte Proof-of-Concept Durchführung und Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'TCO-Analyse und ROI-Bewertung verschiedener SIEM-Optionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Vertragsverhandlung und Lizenzoptimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'SIEM-Implementierung und Integration',
          description: 'Professionelle Implementierung Ihrer SIEM-Lösung mit nahtloser Integration in bestehende IT- und Sicherheitsinfrastrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Strukturierte SIEM-Deployment mit bewährten Implementierungsmethoden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Integration aller relevanten Log-Quellen und Sicherheitstools'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Konfiguration von Datensammlung, -normalisierung und -speicherung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Performance-Optimierung und Skalierbarkeits-Testing'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Use Case Development und Detection Engineering',
          description: 'Entwicklung maßgeschneiderter SIEM-Use Cases und Detection Rules für die effektive Erkennung relevanter Sicherheitsbedrohungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Bedrohungsmodellierung und Use Case-Priorisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Entwicklung und Implementierung von Detection Rules'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Korrelationsregeln für komplexe Angriffsmuster'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Kontinuierliche Optimierung und False-Positive-Reduktion'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'SIEM-Operations und SOC-Integration',
          description: 'Aufbau effizienter SIEM-Operations mit Integration in Security Operations Center (SOC) Prozesse und Analyst-Workflows.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'SOC-Prozess-Design und Workflow-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Analyst-Training und Skill-Development-Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Incident Response Integration und Playbook-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'KPI-Definition und Performance-Monitoring'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'SIEM-Optimierung und Managed Services',
          description: 'Kontinuierliche Optimierung und professionelle Betreuung Ihrer SIEM-Umgebung für nachhaltige Sicherheitsverbesserungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Regelmäßige SIEM-Health-Checks und Performance-Assessments'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Threat Intelligence Integration und IOC-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Managed SIEM Services und Remote-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Weiterentwicklung und Technology-Updates'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(siemSystemData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Was ist ein SIEM-System page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
