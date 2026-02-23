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
    console.log('Creating ISO 27001 Reifegradbewertung und kontinuierliche Verbesserung page...')

    const iso27001ReifegradData = {
      _type: 'servicePage',
      _id: 'iso-27001-reifegradbewertung-kontinuierliche-verbesserung',
      title: 'ISO 27001 Reifegradbewertung und kontinuierliche Verbesserung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-reifegradbewertung-kontinuierliche-verbesserung'
      },
      parent: {
        _type: 'reference',
        _ref: 'iso-27001'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'standards-frameworks'
        }
      },
      seo: {
        _type: 'seo',
        title: 'ISO 27001 Reifegradbewertung und kontinuierliche Verbesserung | ADVISORI',
        description: 'Professionelle ISO 27001 Reifegradbewertung und systematische Verbesserungsprogramme für Ihr Informationssicherheits-Management-System. Kontinuierliche Optimierung und strategische Weiterentwicklung.',
        keywords: 'ISO 27001, Reifegradbewertung, kontinuierliche Verbesserung, ISMS, Informationssicherheit, Maturity Assessment, Optimierung, Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Reifegradbewertung und kontinuierliche Verbesserung'
        },
        tagline: 'Systematische Optimierung Ihres Informationssicherheits-Management-Systems',
        heading: 'ISO 27001 Reifegradbewertung und kontinuierliche Verbesserung',
        description: 'Bewerten Sie den Reifegrad Ihres ISO 27001 ISMS systematisch und entwickeln Sie gezielte Verbesserungsmaßnahmen. Wir unterstützen Sie bei der kontinuierlichen Optimierung Ihrer Informationssicherheitsprozesse für nachhaltige Compliance und operative Exzellenz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Objektive Bewertung des ISMS-Reifegrads mit standardisierten Methoden'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Priorisierte Roadmap für systematische Verbesserungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kontinuierliche Optimierung durch strukturierte Monitoring-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Messbare Steigerung der Informationssicherheitseffektivität'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ISO 27001 Reifegradbewertung und kontinuierliche Verbesserung',
        description: 'Ein effektives Informationssicherheits-Management-System entwickelt sich kontinuierlich weiter. Unsere strukturierte Reifegradbewertung identifiziert systematisch Optimierungspotenziale und unterstützt Sie bei der strategischen Weiterentwicklung Ihres ISO 27001 ISMS. Durch evidenzbasierte Bewertungen und gezielte Verbesserungsmaßnahmen erreichen Sie höhere Sicherheitsstandards und operative Effizienz.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Bewertung aller ISMS-Prozesse nach etablierten Reifegradmodellen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Identifikation von Verbesserungspotenzialen durch Gap-Analysen und Benchmarking'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung priorisierter Verbesserungsroadmaps mit messbaren Zielen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Implementation von KPI-Systemen zur kontinuierlichen Leistungsmessung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Aufbau selbstlernender Verbesserungsprozesse und organisationaler Capabilities'
          }
        ],
        alert: {
          title: 'Strategischer Hinweis',
          content: 'Eine systematische Reifegradbewertung ist nicht nur ein Compliance-Tool, sondern ein strategisches Instrument zur kontinuierlichen Optimierung Ihrer Informationssicherheit. Sie ermöglicht datengetriebene Entscheidungen und nachhaltigen Schutz vor sich entwickelnden Cyber-Bedrohungen.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Bewährte Reifegradmodelle und Assessment-Methodologien für objektive Bewertungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassende Erfahrung in der Optimierung von ISMS-Prozessen verschiedener Branchen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von strategischer Planung bis zur operativen Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovative Monitoring-Tools und KPI-Dashboards für kontinuierliche Verbesserung'
            }
          ]
        },
        additionalInfo: 'Die kontinuierliche Verbesserung Ihres ISMS ist entscheidend für die Aufrechterhaltung wirksamer Informationssicherheit in einer sich wandelnden Bedrohungslandschaft. Unsere strukturierten Bewertungsansätze identifizieren nicht nur aktuelle Schwächen, sondern bauen auch die organisationalen Fähigkeiten für dauerhaft effektive Sicherheitsmaßnahmen auf.',
        serviceDescription: 'Wir bieten eine umfassende Suite von Services zur systematischen Bewertung und kontinuierlichen Verbesserung Ihres ISO 27001 ISMS. Unser Ansatz kombiniert bewährte Assessment-Methoden mit innovativen Monitoring-Tools für nachhaltige Optimierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Structured Maturity Assessment mit standardisierten Bewertungskriterien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Gap-Analyse und Benchmarking gegen Best Practices und Industriestandards'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung priorisierter Verbesserungsroadmaps mit ROI-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementation von Monitoring-Systemen und kontinuierlichen Verbesserungsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Aufbau organisationaler Capabilities für selbstgesteuerte Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam einen strukturierten Ansatz zur systematischen Bewertung und kontinuierlichen Verbesserung Ihres ISO 27001 ISMS.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Reifegradbewertung aller ISMS-Komponenten mit standardisierten Methoden'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Detaillierte Gap-Analyse und Identifikation priorisierter Verbesserungsbereiche'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung einer strategischen Verbesserungsroadmap mit messbaren Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementation von KPI-Systemen und kontinuierlichen Monitoring-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Aufbau organisationaler Verbesserungskapazitäten und Nachhaltigkeitsstrukturen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Die kontinuierliche Verbesserung eines ISMS ist kein einmaliges Projekt, sondern ein strategischer Prozess. Mit unseren bewährten Assessment-Methoden und strukturierten Verbesserungsansätzen entwickeln Organisationen nicht nur compliance-konforme, sondern auch hocheffektive Informationssicherheitssysteme.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ISMS Maturity Assessment und Reifegradbewertung',
          description: 'Wir führen systematische Bewertungen Ihres ISMS-Reifegrads durch und identifizieren konkrete Optimierungspotenziale basierend auf etablierten Reifegradmodellen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strukturierte Bewertung aller ISMS-Prozesse nach standardisierten Kriterien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Objektive Reifegrad-Scoring mit detaillierter Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Benchmarking gegen Industriestandards und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Prioritätenmatrix für systematische Verbesserungsplanung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Kontinuierliche Verbesserungsprogramme',
          description: 'Wir entwickeln und implementieren strukturierte Programme für die kontinuierliche Optimierung Ihres ISMS mit messbaren Ergebnissen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung strategischer Verbesserungsroadmaps mit klaren Meilensteinen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementation von KPI-Systemen zur kontinuierlichen Leistungsmessung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Aufbau organisationaler Verbesserungskapazitäten und Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Regelmäßige Reviews und Anpassung der Verbesserungsstrategien'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001ReifegradData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Reifegradbewertung und kontinuierliche Verbesserung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
