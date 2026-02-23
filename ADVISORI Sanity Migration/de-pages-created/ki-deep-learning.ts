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
    console.log('Creating KI Deep Learning page...')

    const kiDeepLearningData = {
      _type: 'servicePage',
      _id: 'ki-deep-learning',
      title: 'KI Deep Learning',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/ki-deep-learning'
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
        title: 'KI Deep Learning | ADVISORI',
        description: 'DSGVO-konforme Deep Learning Implementierung für Unternehmen. Sichere neuronale Netzwerke mit Schutz des geistigen Eigentums und strategischer Beratung für nachhaltige Wettbewerbsvorteile.',
        keywords: 'Deep Learning, Neuronale Netzwerke, KI, AI, DSGVO, Machine Learning, Enterprise AI, Neural Networks, Computer Vision, NLP'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KI Deep Learning'
        },
        tagline: 'DSGVO-konforme Deep Learning Lösungen für Ihr Unternehmen',
        heading: 'KI Deep Learning',
        description: 'Nutzen Sie die transformative Kraft neuronaler Netzwerke mit unserem Safety-First-Ansatz. Wir implementieren DSGVO-konforme Deep Learning Lösungen, die Ihr geistiges Eigentum schützen und revolutionäre Geschäftsinnovationen ermöglichen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'DSGVO-konforme Deep Learning Implementierung mit vollständigem Datenschutz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Sichere neuronale Netzwerk-Architekturen zum Schutz des geistigen Eigentums'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Strategische Deep Learning Governance für nachhaltige Wettbewerbsvorteile'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Risikominimierung durch umfassende Neural Network Compliance-Frameworks'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KI Deep Learning',
        description: 'Deep Learning revolutioniert die Art, wie Unternehmen komplexe Datenstrukturen verstehen und nutzen. Von Computer Vision bis Natural Language Processing ermöglichen neuronale Netzwerke bahnbrechende Innovationen. ADVISORI unterstützt Sie dabei, die transformative Kraft des Deep Learning zu nutzen, ohne dabei Compliance oder Sicherheit zu gefährden. Unser Safety-First-Ansatz gewährleistet, dass Ihre Deep Learning Implementierung sowohl innovativ als auch verantwortungsvoll ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Deep Learning Readiness Assessment und strategische Architektur-Planung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'DSGVO-konforme Implementierung von neuronalen Netzwerken und Deep Learning Modellen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung von Neural Network Governance Frameworks und Model Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Sichere Trainings- und Inferenz-Architekturen zum Schutz sensibler Daten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Optimierung von Deep Learning Systemen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche Deep Learning Adoption erfordert mehr als nur leistungsstarke Hardware. Eine durchdachte Datenarchitektur, die Datenschutz, Modell-Governance und ethische KI-Prinzipien von Anfang an mitdenkt, ist der Schlüssel für nachhaltigen Erfolg mit neuronalen Netzwerken.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Expertise in DSGVO-konformer Deep Learning Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Safety-First-Ansatz mit bewährten neuronalen Netzwerk-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Deep Learning Governance und Model Compliance-Beratung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Strategische C-Level-Beratung für nachhaltige Neural Network Transformation'
            }
          ]
        },
        additionalInfo: 'Unternehmen, die Deep Learning strategisch und compliant einsetzen, können ihre Datenverarbeitungskapazitäten exponentiell steigern und völlig neue Geschäftsmodelle erschließen. Investieren Sie in eine sichere und nachhaltige Deep Learning Zukunft!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum für die sichere Implementierung von Deep Learning Technologien, von der strategischen Architektur-Planung über die DSGVO-konforme Umsetzung bis hin zur kontinuierlichen Model Governance und Optimierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Deep Learning Strategy & Architecture Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'DSGVO-konforme Neural Network Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Deep Learning Governance & Model Compliance Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Sichere Trainings-Pipelines & Daten-Schutz'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Neural Network Ethics & Risk Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine individuelle Deep Learning Strategie, die auf Ihre spezifischen Geschäftsanforderungen zugeschnitten ist und höchste Standards für Datenschutz und Neural Network Compliance erfüllt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer Datenlandschaft und Deep Learning Potenziale'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer DSGVO-konformen Deep Learning Strategie und Architektur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung sicherer neuronaler Netzwerk-Architekturen mit Daten-Schutz'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung von Deep Learning Governance und Model Compliance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung, Model-Optimierung und Performance-Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Deep Learning ist nicht nur eine technologische Evolution, sondern ein fundamentaler Paradigmenwechsel in der Datenverarbeitung. Unser Ansatz kombiniert die revolutionäre Kraft neuronaler Netzwerke mit rigoroser DSGVO-Compliance und umfassendem Datenschutz, um unseren Kunden transformative Geschäftsinnovationen zu ermöglichen, ohne dabei Sicherheit oder ethische Verantwortung zu kompromittieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Deep Learning Strategy & Architecture Assessment',
          description: 'Umfassende Bewertung Ihrer Deep Learning Bereitschaft und Entwicklung einer strategischen Architektur für die sichere Neural Network Adoption.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse der aktuellen Dateninfrastruktur und Deep Learning Potenziale'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation strategischer Use Cases und Neural Network Architektur-Planung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung einer DSGVO-konformen Deep Learning Roadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Risikobewertung und Model Compliance-Anforderungsanalyse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'DSGVO-konforme Neural Network Implementierung',
          description: 'Sichere Implementierung von Deep Learning Lösungen mit vollständigem Datenschutz und Schutz des geistigen Eigentums.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Privacy-by-Design neuronale Netzwerk-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Sichere Trainings-Pipelines und Datenverarbeitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'IP-Schutz durch isolierte Deep Learning Umgebungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Model Compliance-Monitoring und Audit-Trails'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kiDeepLearningData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KI Deep Learning page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
