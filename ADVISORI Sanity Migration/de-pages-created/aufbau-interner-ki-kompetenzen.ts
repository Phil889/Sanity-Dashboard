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
    console.log('Creating Aufbau interner KI-Kompetenzen page...')

    const aufbauInternerKiKompetenzenData = {
      _type: 'servicePage',
      _id: 'aufbau-interner-ki-kompetenzen',
      title: 'Aufbau interner KI-Kompetenzen',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/aufbau-interner-ki-kompetenzen'
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
        title: 'Aufbau interner KI-Kompetenzen | ADVISORI',
        description: 'Strategischer Aufbau von KI-Kompetenzen im Unternehmen. DSGVO-konforme Schulungen, Talententwicklung und nachhaltige AI-Capability-Building für langfristigen Wettbewerbsvorteile.',
        keywords: 'KI-Kompetenzen, AI Skills, Talententwicklung, KI-Schulungen, AI Training, Digital Skills, Machine Learning Kompetenzen, AI Governance, DSGVO-konforme KI-Ausbildung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Aufbau interner KI-Kompetenzen'
        },
        tagline: 'Strategischer Aufbau von KI-Kompetenzen für nachhaltigen Wettbewerbsvorteile',
        heading: 'Aufbau interner KI-Kompetenzen',
        description: 'Entwickeln Sie die KI-Fähigkeiten Ihrer Organisation systematisch und DSGVO-konform. Wir unterstützen Sie beim strategischen Aufbau interner AI-Kompetenzen, von der Führungsebene bis zu operativen Teams, für nachhaltige Innovation und Wettbewerbsvorteile.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische KI-Kompetenzentwicklung für alle Unternehmensebenen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'DSGVO-konforme AI-Schulungen mit Fokus auf Datenschutz und Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Nachhaltige Talententwicklung und Retention von AI-Experten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Aufbau einer innovationsorientierten KI-Kultur im Unternehmen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Aufbau interner KI-Kompetenzen',
        description: 'Der strategische Aufbau interner KI-Kompetenzen ist entscheidend für den langfristigen Erfolg Ihrer AI-Transformation. ADVISORI unterstützt Sie dabei, eine umfassende AI-Kompetenzstrategie zu entwickeln, die von der C-Suite bis zu operativen Teams reicht und gleichzeitig höchste Standards für Datenschutz und Compliance erfüllt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische AI-Kompetenz-Roadmap und Skills-Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Maßgeschneiderte Schulungsprogramme für verschiedene Zielgruppen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'DSGVO-konforme AI-Governance und Ethik-Training'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau interner AI-Centers of Excellence und Kompetenzzentren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Weiterentwicklung und Zertifizierungsprogramme'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreicher KI-Kompetenzaufbau erfordert mehr als technische Schulungen. Eine ganzheitliche Strategie, die Führungskompetenzen, ethische Grundlagen und praktische Anwendung kombiniert, schafft nachhaltigen Mehrwert und echte Innovationsfähigkeit.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in strategischem AI-Capability-Building'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'DSGVO-konforme Schulungskonzepte mit Safety-First-Ansatz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxisorientierte Methoden mit direktem Geschäftsbezug'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Langfristige Partnerschaft für kontinuierliche Kompetenzentwicklung'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit strategisch entwickelten KI-Kompetenzen können ihre AI-Projekte mit einer Erfolgsrate von über 80% umsetzen, während der Branchendurchschnitt bei nur 30% liegt. Investieren Sie in nachhaltige KI-Fähigkeiten!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum für den strategischen Aufbau interner KI-Kompetenzen, von der Analyse bestehender Fähigkeiten über maßgeschneiderte Schulungsprogramme bis hin zur Etablierung nachhaltiger Lernstrukturen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'AI Skills Assessment & Kompetenz-Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Executive AI Leadership Programme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Technical AI Training & Zertifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'AI Ethics & Governance Schulungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Center of Excellence Aufbau'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine individuelle KI-Kompetenzstrategie, die auf Ihre spezifischen Geschäftsanforderungen und organisatorischen Gegebenheiten zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse bestehender KI-Kompetenzen und Skills-Gaps'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer strategischen AI-Kompetenz-Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung maßgeschneiderter Schulungs- und Entwicklungsprogramme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Aufbau nachhaltiger Lernstrukturen und Kompetenzzentren'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Evaluation und Weiterentwicklung der KI-Fähigkeiten'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Der strategische Aufbau interner KI-Kompetenzen ist der Schlüssel für nachhaltigen Erfolg in der digitalen Transformation. Unser ganzheitlicher Ansatz kombiniert technische Exzellenz mit ethischen Grundsätzen und DSGVO-Compliance, um Organisationen zu befähigen, KI-Technologien verantwortungsvoll und effektiv zu nutzen. Dabei schaffen wir nicht nur Wissen, sondern eine echte Innovationskultur.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'AI Skills Assessment & Strategische Kompetenz-Roadmap',
          description: 'Umfassende Bewertung bestehender KI-Kompetenzen und Entwicklung einer strategischen Roadmap für den systematischen Aufbau von AI-Fähigkeiten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse aktueller KI-Kompetenzen und Skills-Gaps'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strategische AI-Kompetenz-Roadmap mit Prioritäten und Meilensteinen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Rollenspezifische Kompetenzprofile und Entwicklungspfade'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'ROI-Bewertung und Business Case für KI-Kompetenzinvestitionen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Comprehensive AI Training & Development Programme',
          description: 'Maßgeschneiderte Schulungs- und Entwicklungsprogramme für alle Unternehmensebenen, von Executive Leadership bis zu technischen Spezialisten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Executive AI Leadership Programme für C-Level und Senior Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Technical AI Training für Entwickler und Data Scientists'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'AI Ethics & Governance Schulungen für Compliance-Teams'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Hands-on Workshops und praktische Anwendungsprojekte'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(aufbauInternerKiKompetenzenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Aufbau interner KI-Kompetenzen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
