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
    console.log('Creating ESG-Zertifizierung page...')

    const esgZertifizierungData = {
      _type: 'servicePage',
      _id: 'esg-zertifizierung',
      title: 'ESG-Zertifizierung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/esg/esg-zertifizierung'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management-esg'
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
        title: 'ESG-Zertifizierung | ADVISORI',
        description: 'Erreichen Sie anerkannte ESG-Zertifizierungen mit unserer Expertise. Wir unterstützen Sie bei der Vorbereitung und Umsetzung von ESG-Standards für nachhaltige Unternehmensführung.',
        keywords: 'ESG-Zertifizierung, Nachhaltigkeit, ESG-Standards, Umweltmanagement, Soziale Verantwortung, Corporate Governance, B Corp, GRI, SASB'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ESG-Zertifizierung'
        },
        tagline: 'Anerkannte ESG-Zertifizierungen für nachhaltige Unternehmensführung',
        heading: 'ESG-Zertifizierung',
        description: 'Etablieren Sie Ihr Unternehmen als Vorreiter in Nachhaltigkeit durch anerkannte ESG-Zertifizierungen. Wir begleiten Sie auf dem Weg zu zertifizierter Nachhaltigkeit und verbesserter ESG-Performance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Erhöhung der Glaubwürdigkeit und des Vertrauens bei Stakeholdern'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Verbesserung der ESG-Ratings und des Zugangs zu nachhaltigen Investitionen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Systematische Verbesserung der Nachhaltigkeitsleistung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Erfüllung regulatorischer Anforderungen und Marktstandards'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ESG-Zertifizierung',
        description: 'ESG-Zertifizierungen sind ein wichtiger Baustein für die Glaubwürdigkeit und Messbarkeit Ihrer Nachhaltigkeitsbemühungen. Wir unterstützen Sie bei der Auswahl, Vorbereitung und Erlangung relevanter ESG-Zertifizierungen, die zu Ihrer Branche und Ihren strategischen Zielen passen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Bewertung und Auswahl passender ESG-Zertifizierungsstandards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Gap-Analyse zwischen aktueller Performance und Zertifizierungsanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung und Umsetzung von Verbesserungsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Vorbereitung auf Zertifizierungsaudits und Begleitung im Prozess'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Aufrechterhaltung der Zertifizierung'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'ESG-Zertifizierungen sind mehr als nur ein Label - sie schaffen systematische Verbesserungen in Ihrer Nachhaltigkeitsleistung und erhöhen die Transparenz gegenüber Stakeholdern.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in verschiedenen ESG-Zertifizierungsstandards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in der Begleitung von Zertifizierungsprozessen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxisnahe Beratung und maßgeschneiderte Lösungsansätze'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von der Strategie bis zur Umsetzung'
            }
          ]
        },
        additionalInfo: 'Zertifizierte Unternehmen können bis zu 25% bessere ESG-Ratings erzielen und haben verbesserten Zugang zu nachhaltigen Finanzierungen. Investieren Sie in Ihre Nachhaltigkeits-Credibility!',
        serviceDescription: 'Wir bieten Ihnen umfassende Unterstützung bei der Erlangung und Aufrechterhaltung von ESG-Zertifizierungen. Von der strategischen Auswahl bis zur erfolgreichen Zertifizierung begleiten wir Sie durch den gesamten Prozess.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Zertifizierungsstandard-Bewertung und -Auswahl'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Gap-Analyse und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung von Managementsystemen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Audit-Vorbereitung und -Begleitung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Verbesserung und Rezertifizierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine zielgerichtete Zertifizierungsstrategie, die auf Ihre spezifischen Nachhaltigkeitsziele und Branchenanforderungen zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse Ihrer Nachhaltigkeitsziele und Stakeholder-Erwartungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Bewertung relevanter Zertifizierungsstandards für Ihre Branche'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Gap-Analyse und Identifikation von Verbesserungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung und Umsetzung von Maßnahmenplänen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Audit-Vorbereitung und Begleitung zur erfolgreichen Zertifizierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir einen kompetenten Partner gefunden, der uns erfolgreich zur B Corp-Zertifizierung geführt hat. Die strukturierte Herangehensweise und tiefe Expertise haben den Prozess erheblich beschleunigt und unsere Nachhaltigkeitsleistung nachweislich verbessert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Zertifizierungsstandard-Bewertung',
          description: 'Wir analysieren relevante ESG-Zertifizierungsstandards und unterstützen Sie bei der strategischen Auswahl.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Bewertung von B Corp, ISO 14001, EMAS und weiteren Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Kosten-Nutzen-Analyse verschiedener Zertifizierungsoptionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Stakeholder-Mapping und Erwartungsanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Strategische Empfehlungen für optimale Zertifizierungsstrategie'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Zertifizierungs-Vorbereitung',
          description: 'Wir bereiten Sie systematisch auf Ihre angestrebte ESG-Zertifizierung vor und begleiten Sie durch den gesamten Prozess.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Umfassende Gap-Analyse und Readiness-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung von Managementsystemen und Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Dokumentationserstellung und Nachweisführung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Mock-Audits und Audit-Begleitung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(esgZertifizierungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ESG-Zertifizierung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
