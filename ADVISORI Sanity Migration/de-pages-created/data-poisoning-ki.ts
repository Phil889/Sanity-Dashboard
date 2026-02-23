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
    console.log('Creating Data Poisoning KI page...')

    const dataPoisoningKiData = {
      _type: 'servicePage',
      _id: 'data-poisoning-ki',
      title: 'Data Poisoning KI',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/data-poisoning-ki'
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
        title: 'Data Poisoning KI Schutz | ADVISORI',
        description: 'Schutz vor Data Poisoning Angriffen auf KI-Systeme. DSGVO-konforme Sicherheitslösungen für Trainingsdaten und AI-Modelle. Umfassende Beratung für sichere KI-Implementierung.',
        keywords: 'Data Poisoning, KI Sicherheit, AI Security, Trainingsdaten Schutz, Machine Learning Security, DSGVO KI, AI Governance, Datenvergiftung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Data Poisoning KI Schutz'
        },
        tagline: 'Schutz vor Data Poisoning Angriffen auf Ihre KI-Systeme',
        heading: 'Data Poisoning KI',
        description: 'Sichern Sie Ihre KI-Modelle vor manipulierten Trainingsdaten und Data Poisoning Angriffen. Unser Safety-First-Ansatz gewährleistet die Integrität Ihrer AI-Systeme und schützt vor gezielten Datenmanipulationen, die Ihre Modelle kompromittieren könnten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassender Schutz vor Data Poisoning und Trainingsdatenmanipulation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'DSGVO-konforme Datenvalidierung und Integritätsprüfung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Robuste AI-Architekturen gegen gezielte Angriffe'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Überwachung und Anomalieerkennung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Data Poisoning KI',
        description: 'Data Poisoning stellt eine der gefährlichsten Bedrohungen für KI-Systeme dar, bei der Angreifer gezielt manipulierte Daten in Trainingsdatensätze einschleusen, um das Verhalten von AI-Modellen zu kompromittieren. ADVISORI bietet umfassende Schutzmaßnahmen gegen diese subtilen aber verheerenden Angriffe, die oft erst nach der Produktionseinführung erkannt werden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Proaktive Erkennung und Abwehr von Data Poisoning Angriffen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Sichere Trainingsdaten-Pipelines mit Integritätsprüfung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Robuste Modellarchitekturen gegen Adversarial Attacks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Überwachung von Modellverhalten und -performance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'DSGVO-konforme Incident Response und Forensik'
          }
        ],
        alert: {
          title: 'Sicherheitshinweis',
          content: 'Data Poisoning Angriffe sind besonders tückisch, da sie oft unentdeckt bleiben und erst in kritischen Situationen zu Fehlentscheidungen führen. Eine proaktive Sicherheitsstrategie ist essentiell für den Schutz Ihrer KI-Investitionen.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Kompetenz in KI-Sicherheit und Adversarial Defense'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'DSGVO-konforme Implementierung von Sicherheitsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Threat Intelligence für KI-spezifische Bedrohungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Bewährte Frameworks für sichere AI-Entwicklung'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit robusten Data Poisoning Schutzmaßnahmen können das Vertrauen in ihre KI-Systeme stärken und regulatorische Risiken minimieren. Investieren Sie in präventive Sicherheit für Ihre AI-Zukunft!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum zum Schutz vor Data Poisoning Angriffen, von der Risikoanalyse über die Implementierung robuster Sicherheitsarchitekturen bis hin zur kontinuierlichen Überwachung und Incident Response.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Data Poisoning Risk Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Sichere Trainingsdaten-Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Robuste Modellarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kontinuierliche Anomalieerkennung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Incident Response & Forensik'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine mehrstufige Verteidigungsstrategie gegen Data Poisoning, die präventive Maßnahmen, Echtzeitüberwachung und schnelle Reaktionsfähigkeit kombiniert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer Trainingsdaten und Datenquellen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Implementierung robuster Datenvalidierung und Integritätsprüfung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung adversarial-resistenter Modellarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung kontinuierlicher Überwachung und Anomalieerkennung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Aufbau von Incident Response Capabilities und Forensik'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Data Poisoning Angriffe gehören zu den raffiniertesten Bedrohungen für KI-Systeme, da sie die Grundlage des maschinellen Lernens - die Trainingsdaten - kompromittieren. Unser proaktiver Ansatz kombiniert fortschrittliche Anomalieerkennung mit robusten Validierungsverfahren, um die Integrität Ihrer AI-Modelle zu gewährleisten und gleichzeitig DSGVO-Compliance sicherzustellen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Data Poisoning Risk Assessment',
          description: 'Umfassende Bewertung Ihrer Anfälligkeit für Data Poisoning Angriffe und Identifikation kritischer Schwachstellen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse der Trainingsdatenquellen und -pipelines'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung der Modellarchitektur auf Robustheit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation von Attack Vectors und Schwachstellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Risikobewertung und Priorisierung von Schutzmaßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Sichere Trainingsdaten-Validierung',
          description: 'Implementierung robuster Validierungsverfahren zur Erkennung und Abwehr manipulierter Trainingsdaten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automatisierte Anomalieerkennung in Trainingsdaten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Statistische Validierung und Integritätsprüfung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Sichere Datenaufbereitung und -bereinigung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'DSGVO-konforme Datenqualitätssicherung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Robuste Modellarchitekturen',
          description: 'Entwicklung adversarial-resistenter KI-Modelle, die auch bei kompromittierten Trainingsdaten stabil funktionieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Adversarial Training und Robustness Testing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Ensemble-Methoden für erhöhte Sicherheit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Defensive Distillation und Model Hardening'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Kontinuierliche Modellvalidierung und -überwachung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Kontinuierliche Anomalieerkennung',
          description: 'Echtzeit-Überwachung Ihrer KI-Systeme zur frühzeitigen Erkennung von Data Poisoning Angriffen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Behavioral Monitoring von KI-Modellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Performance Drift Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Automatisierte Alerting und Eskalation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Dashboard und Reporting für Stakeholder'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Incident Response & Forensik',
          description: 'Schnelle Reaktion auf Data Poisoning Vorfälle mit forensischer Analyse und Wiederherstellungsmaßnahmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Incident Response Playbooks für Data Poisoning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Forensische Analyse kompromittierter Modelle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Wiederherstellung und Modell-Rollback'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Post-Incident Analyse und Lessons Learned'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'KI-Sicherheits-Governance',
          description: 'Etablierung umfassender Governance-Frameworks für sichere KI-Entwicklung und -betrieb.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Security-by-Design Prinzipien für KI-Projekte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Compliance-Management für KI-Sicherheit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Schulung und Awareness für Entwicklungsteams'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Verbesserung der Sicherheitsmaßnahmen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(dataPoisoningKiData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Data Poisoning KI page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
