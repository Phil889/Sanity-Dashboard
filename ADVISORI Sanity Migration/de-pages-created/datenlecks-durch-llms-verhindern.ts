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
    console.log('Creating Datenlecks durch LLMs verhindern page...')

    const datenlecksDurchLlmsVerhindernData = {
      _type: 'servicePage',
      _id: 'datenlecks-durch-llms-verhindern',
      title: 'Datenlecks durch LLMs verhindern',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/datenlecks-durch-llms-verhindern'
      },
      parent: {
        _type: 'reference',
        _ref: 'ki-kuenstliche-intelligenz'
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
        title: 'Datenlecks durch LLMs verhindern | ADVISORI',
        description: 'Sichere LLM-Implementierung mit DSGVO-Compliance. Schutz vor Datenlecks durch Large Language Models mit Safety-First-Ansatz und umfassender IP-Sicherheit.',
        keywords: 'LLM Sicherheit, Datenlecks verhindern, Large Language Models, DSGVO, AI Sicherheit, Prompt Injection, LLM Governance, Enterprise AI'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Datenlecks durch LLMs verhindern'
        },
        tagline: 'Sichere LLM-Implementierung mit DSGVO-Compliance',
        heading: 'Datenlecks durch LLMs verhindern',
        description: 'Schützen Sie Ihr Unternehmen vor Datenlecks durch Large Language Models. Unsere Safety-First-Methodik gewährleistet DSGVO-konforme LLM-Implementierungen mit umfassendem Schutz Ihres geistigen Eigentums und sensibler Unternehmensdaten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'DSGVO-konforme LLM-Architekturen mit integriertem Datenschutz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Schutz vor Prompt Injection und Data Exfiltration Angriffen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Sichere Enterprise-LLM-Governance und Compliance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Umfassender IP-Schutz durch isolierte AI-Umgebungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Datenlecks durch LLMs verhindern',
        description: 'Large Language Models revolutionieren die Geschäftswelt, bergen aber erhebliche Risiken für Datensicherheit und geistiges Eigentum. Unbeabsichtigte Datenlecks, Prompt Injection Angriffe und unzureichende Governance können zu schwerwiegenden Compliance-Verstößen und Reputationsschäden führen. ADVISORI entwickelt sichere LLM-Implementierungen, die Innovation ermöglichen, ohne Sicherheit zu kompromittieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Comprehensive LLM Security Assessment und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'DSGVO-konforme LLM-Architekturen mit Privacy-by-Design'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Sichere Prompt Engineering und Input/Output Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Enterprise LLM Governance und Compliance-Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Threat Detection für LLM-Systeme'
          }
        ],
        alert: {
          title: 'Sicherheitshinweis',
          content: 'Ungesicherte LLM-Implementierungen können zu schwerwiegenden Datenlecks führen. Eine proaktive Sicherheitsstrategie mit umfassender Governance ist essentiell für den sicheren Einsatz von Large Language Models in Unternehmensumgebungen.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Kompetenz in sicherer LLM-Implementierung und -Governance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Safety-First-Ansatz mit bewährten Sicherheitsarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'DSGVO-Expertise für compliant AI-Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Umfassende Enterprise AI Security und Risk Management'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit sicheren LLM-Implementierungen können die Vorteile von Generative AI nutzen, ohne regulatorische Risiken oder Datenschutzverletzungen zu riskieren. Investieren Sie in eine sichere AI-Zukunft!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum für die sichere Implementierung von Large Language Models, von der Risikobewertung über die DSGVO-konforme Architektur bis hin zur kontinuierlichen Sicherheitsüberwachung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'LLM Security Assessment & Risk Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Sichere LLM-Architekturen & Privacy-by-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Prompt Injection Prevention & Input Validation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Enterprise LLM Governance & Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Continuous Monitoring & Threat Detection'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine umfassende LLM-Sicherheitsstrategie, die auf Ihre spezifischen Geschäftsanforderungen zugeschnitten ist und höchste Standards für Datenschutz und Compliance erfüllt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Detaillierte Analyse Ihrer LLM-Nutzung und Sicherheitsrisiken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung sicherer LLM-Architekturen mit DSGVO-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung von Sicherheitskontrollen und Monitoring-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung von LLM-Governance und Compliance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Optimierung der Sicherheitsmaßnahmen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die sichere Implementierung von Large Language Models erfordert mehr als nur technische Schutzmaßnahmen – sie verlangt eine ganzheitliche Sicherheitsstrategie. Unser Ansatz kombiniert fortschrittliche Sicherheitsarchitekturen mit rigoroser DSGVO-Compliance, um unseren Kunden die Vorteile von LLM-Technologien zu ermöglichen, ohne dabei Datenschutz oder geistiges Eigentum zu gefährden.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'LLM Security Assessment & Risk Analysis',
          description: 'Umfassende Bewertung Ihrer LLM-Implementierungen und Identifikation potenzieller Sicherheitsrisiken und Datenleck-Vektoren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse bestehender LLM-Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Datenleck-Risiken und Schwachstellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Bewertung der DSGVO-Compliance und regulatorischen Risiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung priorisierter Sicherheits-Roadmaps'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Sichere LLM-Architekturen & Privacy-by-Design',
          description: 'Entwicklung und Implementierung sicherer LLM-Architekturen mit integriertem Datenschutz und umfassendem IP-Schutz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Privacy-by-Design LLM-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Sichere Datenverarbeitung und -isolation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementierung von Zero-Trust-Prinzipien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Verschlüsselung und sichere Kommunikationsprotokolle'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Prompt Injection Prevention & Input Validation',
          description: 'Schutz vor Prompt Injection Angriffen durch robuste Input-Validierung und sichere Prompt Engineering Praktiken.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Entwicklung sicherer Prompt Engineering Guidelines'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Implementierung robuster Input-Validierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Output-Filtering und Content-Sanitization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Anomalie-Erkennung für verdächtige Anfragen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Enterprise LLM Governance & Compliance',
          description: 'Etablierung umfassender Governance-Strukturen für den sicheren und compliant Einsatz von LLMs in Unternehmensumgebungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Entwicklung von LLM-Governance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'DSGVO-Compliance und Datenschutz-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Richtlinien für verantwortungsvolle AI-Nutzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Audit-Trails und Compliance-Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Continuous Monitoring & Threat Detection',
          description: 'Kontinuierliche Überwachung von LLM-Systemen zur frühzeitigen Erkennung von Sicherheitsbedrohungen und Anomalien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Real-time Monitoring von LLM-Interaktionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Anomalie-Erkennung und Threat Intelligence'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Automatisierte Incident Response Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Security Analytics und Reporting Dashboards'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'LLM Data Loss Prevention (DLP)',
          description: 'Spezialisierte DLP-Lösungen für LLM-Umgebungen zum Schutz vor unbeabsichtigten Datenlecks und IP-Verlust.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Intelligente Datenklassifizierung und -kennzeichnung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Automatische Erkennung sensibler Daten in LLM-Outputs'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Policy-basierte Datenverhinderung und -kontrolle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Forensische Analyse und Compliance-Dokumentation'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(datenlecksDurchLlmsVerhindernData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Datenlecks durch LLMs verhindern page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
