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
    console.log('Creating Digitale Transformation category page...')

    const digitaleTransformationData = {
      _type: 'servicePage',
      _id: 'digitale-transformation',
      title: 'Digitale Transformation',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/'
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
        title: 'Digitale Transformation | ADVISORI',
        description: 'Strategische digitale Transformation mit DSGVO-konformen AI-Lösungen. Wir unterstützen Unternehmen bei der sicheren Implementierung zukunftsweisender Technologien.',
        keywords: 'Digitale Transformation, KI, Künstliche Intelligenz, DSGVO, AI Governance, Enterprise AI, Digital Strategy'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Digitale Transformation'
        },
        tagline: 'Sichere und compliant digitale Transformation für Ihr Unternehmen',
        heading: 'Digitale Transformation',
        description: 'Wir begleiten Unternehmen bei der strategischen digitalen Transformation mit Fokus auf DSGVO-konforme AI-Lösungen, Risikomanagement und dem Schutz Ihres geistigen Eigentums.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'DSGVO-konforme Implementierung digitaler Technologien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Schutz des geistigen Eigentums bei der AI-Adoption'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Strategische Beratung für nachhaltige Wettbewerbsvorteile'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Risikominimierung durch Safety-First-Ansatz'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Digitale Transformation',
        description: 'Die digitale Transformation ist mehr als nur die Einführung neuer Technologien. Sie erfordert eine strategische Herangehensweise, die Compliance, Risikomanagement und den Schutz Ihres Unternehmens in den Mittelpunkt stellt. ADVISORI unterstützt Sie dabei, die Chancen der Digitalisierung zu nutzen, ohne dabei Sicherheit und Compliance zu gefährden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Analyse und Roadmap-Entwicklung für die digitale Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'DSGVO-konforme Implementierung von AI und Machine Learning Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Governance-Frameworks für verantwortliche Technologie-Adoption'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Change Management und Mitarbeiterqualifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Optimierung digitaler Prozesse'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche digitale Transformation beginnt mit einer klaren Strategie und einem tiefen Verständnis für Compliance-Anforderungen. Nur so können Unternehmen die Vorteile neuer Technologien voll ausschöpfen, ohne regulatorische Risiken einzugehen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierung auf DSGVO-konforme AI-Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Safety-First-Ansatz zum Schutz Ihres geistigen Eigentums'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Expertise in GRC und Enterprise AI'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Strategische Beratung auf C-Level für nachhaltige Transformation'
            }
          ]
        },
        additionalInfo: 'Die digitale Transformation ist ein kontinuierlicher Prozess, der strategische Planung, technische Expertise und ein tiefes Verständnis für Compliance-Anforderungen erfordert. Investieren Sie in eine sichere und nachhaltige digitale Zukunft!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum für die digitale Transformation, von der strategischen Planung über die sichere Implementierung bis hin zur kontinuierlichen Optimierung Ihrer digitalen Prozesse.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Digital Strategy & Roadmap Development'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'AI & Machine Learning Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'DSGVO & Compliance Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Change Management & Training'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Governance & Risk Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine individuelle Strategie für die digitale Transformation, die auf Ihre spezifischen Anforderungen und Compliance-Bedürfnisse zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse Ihrer aktuellen digitalen Landschaft und Identifikation von Transformationspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer DSGVO-konformen Digitalisierungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Risikobewertung und Implementierung von Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Schrittweise Umsetzung mit kontinuierlicher Überwachung und Anpassung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Change Management und Befähigung Ihrer Teams für die digitale Zukunft'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die digitale Transformation ist nicht nur eine technologische Herausforderung, sondern eine strategische Chance. Unser Ansatz kombiniert innovative Technologien mit rigoroser Compliance und Risikomanagement, um unseren Kunden nachhaltigen Wettbewerbsvorteile zu verschaffen, ohne dabei Sicherheit oder Datenschutz zu kompromittieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Digital Strategy & Roadmap',
          description: 'Entwicklung einer umfassenden Digitalisierungsstrategie mit klarer Roadmap und Meilensteinen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strategische Analyse der digitalen Reifegrade'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung einer maßgeschneiderten Transformations-Roadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'ROI-Bewertung und Business Case Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Stakeholder-Alignment und Change Management Planung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'KI & Künstliche Intelligenz',
          description: 'DSGVO-konforme Implementierung von AI-Lösungen mit Fokus auf Datenschutz und IP-Schutz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'AI Readiness Assessment und Use Case Identifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'DSGVO-konforme AI-Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'AI Governance und Risikomanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Schutz des geistigen Eigentums bei AI-Adoption'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(digitaleTransformationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Digitale Transformation category page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
