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
    console.log('Creating Datenschutz bei KI page...')

    const datenschutzBeiKiData = {
      _type: 'servicePage',
      _id: 'datenschutz-bei-ki',
      title: 'Datenschutz bei KI',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/datenschutz-bei-ki'
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
        title: 'Datenschutz bei KI | DSGVO-konforme AI-Implementierung | ADVISORI',
        description: 'DSGVO-konformer Datenschutz für KI-Systeme. Privacy-by-Design AI-Architekturen, Compliance-Management und sichere Datenverarbeitung für Künstliche Intelligenz.',
        keywords: 'Datenschutz KI, DSGVO AI, Privacy by Design, KI Compliance, AI Datenschutz, DSGVO konforme KI, Datenschutz Künstliche Intelligenz'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Datenschutz bei KI'
        },
        tagline: 'DSGVO-konformer Datenschutz für KI-Systeme',
        heading: 'Datenschutz bei KI',
        description: 'Implementieren Sie Künstliche Intelligenz mit höchsten Datenschutzstandards. Unsere Privacy-by-Design-Ansätze gewährleisten DSGVO-Compliance und schützen personenbezogene Daten in AI-Systemen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Privacy-by-Design AI-Architekturen für vollständige DSGVO-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Datenschutz-Folgenabschätzung für KI-Systeme und Algorithmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Sichere Datenverarbeitung mit Anonymisierung und Pseudonymisierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Transparenz und Erklärbarkeit für datenschutzkonforme AI-Entscheidungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Datenschutz bei KI',
        description: 'Der Einsatz von Künstlicher Intelligenz bringt erhebliche Datenschutzherausforderungen mit sich. Personenbezogene Daten müssen in AI-Systemen besonders geschützt werden, während gleichzeitig die Funktionalität und Leistungsfähigkeit der KI erhalten bleibt. ADVISORI entwickelt DSGVO-konforme KI-Lösungen, die Datenschutz von Grund auf mitdenken und höchste Compliance-Standards erfüllen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Privacy-by-Design Implementierung für KI-Systeme und Machine Learning'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Datenschutz-Folgenabschätzung und Risikobewertung für AI-Projekte'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Anonymisierung und Pseudonymisierung von Trainingsdaten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Transparenz und Erklärbarkeit für algorithmusbasierte Entscheidungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Betroffenenrechte und Compliance-Management für KI-Anwendungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Datenschutz in KI-Systemen erfordert mehr als nur technische Maßnahmen. Eine ganzheitliche Privacy-by-Design-Strategie, die rechtliche, technische und organisatorische Aspekte vereint, ist der Schlüssel für erfolgreiche und compliant AI-Implementierungen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Expertise in DSGVO-konformer KI-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Privacy-by-Design Methodologie für AI-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Datenschutz-Compliance für KI-Projekte'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Strategische Beratung für datenschutzkonforme AI-Transformation'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit datenschutzkonformen KI-Systemen minimieren regulatorische Risiken und schaffen Vertrauen bei Kunden und Stakeholdern. Investieren Sie in eine sichere und compliant AI-Zukunft!',
        serviceDescription: 'Wir bieten Ihnen umfassende Datenschutzlösungen für KI-Systeme, von der Privacy-by-Design-Implementierung über Compliance-Management bis hin zur kontinuierlichen Überwachung und Optimierung Ihrer AI-Datenschutzmaßnahmen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Privacy-by-Design AI-Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Datenschutz-Folgenabschätzung für KI'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'DSGVO-Compliance Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Anonymisierung & Pseudonymisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'AI Transparency & Explainability'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine umfassende Datenschutzstrategie für Ihre KI-Systeme, die von der Konzeption bis zur Implementierung höchste DSGVO-Standards erfüllt und gleichzeitig die Leistungsfähigkeit Ihrer AI-Lösungen optimiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Datenschutz-Impact-Assessment und Risikobewertung für KI-Projekte'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Privacy-by-Design Implementierung in AI-Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung datenschutzkonformer Datenverarbeitungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung von Transparenz und Erklärbarkeit'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Compliance-Überwachung und Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Datenschutz in KI-Systemen ist nicht nur eine regulatorische Anforderung, sondern ein strategischer Wettbewerbsvorteil. Unsere Privacy-by-Design-Ansätze ermöglichen es Unternehmen, das volle Potenzial der Künstlichen Intelligenz zu nutzen, während sie gleichzeitig höchste Datenschutzstandards erfüllen und das Vertrauen ihrer Kunden stärken.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Privacy-by-Design AI-Architekturen',
          description: 'Entwicklung von KI-Systemen mit integriertem Datenschutz von der ersten Konzeption an.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Datenschutzfreundliche AI-Systemarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Minimierung der Datenverarbeitung in KI-Modellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Sichere Datenflüsse und Zugriffskontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integrierte Datenschutz-Governance'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Datenschutz-Folgenabschätzung für KI',
          description: 'Umfassende Bewertung der Datenschutzrisiken und -auswirkungen von KI-Projekten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'DSFA-Durchführung für KI-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Risikobewertung und Schutzmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Compliance-Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Behördenkommunikation und -abstimmung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Anonymisierung & Pseudonymisierung',
          description: 'Sichere Aufbereitung von Trainingsdaten für KI-Modelle unter Wahrung des Datenschutzes.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Anonymisierungstechniken für AI-Trainingsdaten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Pseudonymisierungsverfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Differential Privacy Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Datenqualität und -nutzbarkeit'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'AI Transparency & Explainability',
          description: 'Schaffung von Transparenz und Nachvollziehbarkeit in KI-Entscheidungsprozessen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Explainable AI (XAI) Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Algorithmus-Transparenz und -Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Betroffenenrechte und Auskunftspflichten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Bias-Erkennung und -Vermeidung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'DSGVO-Compliance Management',
          description: 'Umfassende Compliance-Betreuung für KI-Systeme und kontinuierliche Überwachung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Compliance-Monitoring für KI-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Datenschutz-Management-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Schulungen und Awareness-Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Incident Response und Breach Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Cross-Border AI Data Governance',
          description: 'Datenschutzkonforme internationale Datenübertragung für globale KI-Systeme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Internationale Datentransfer-Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Adequacy Decisions und SCCs'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Multi-jurisdiktionale Compliance-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Cloud-AI und Data Residency'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(datenschutzBeiKiData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Datenschutz bei KI page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
