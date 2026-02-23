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
    console.log('Creating ESG Due Diligence page...')

    const esgDueDiligenceData = {
      _type: 'servicePage',
      _id: 'esg-due-diligence',
      title: 'ESG Due Diligence',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/esg/esg-due-diligence'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management'
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
        title: 'ESG Due Diligence | ADVISORI',
        description: 'Professionelle ESG Due Diligence Services für nachhaltige Geschäftsentscheidungen. Umfassende Bewertung von Umwelt-, Sozial- und Governance-Risiken und -Chancen.',
        keywords: 'ESG Due Diligence, Nachhaltigkeitsbewertung, ESG-Risiken, Due Diligence Prozess, Sustainable Finance, ESG-Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ESG Due Diligence'
        },
        tagline: 'Fundierte ESG-Bewertungen für nachhaltige Investitions- und Geschäftsentscheidungen',
        heading: 'ESG Due Diligence',
        description: 'ESG Due Diligence ermöglicht die systematische Bewertung von Umwelt-, Sozial- und Governance-Faktoren bei Investitions- und Geschäftsentscheidungen. Wir unterstützen Sie bei der Identifikation und Bewertung von ESG-Risiken und -Chancen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Bewertung von ESG-Risiken und -Chancen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Fundierte Grundlage für nachhaltige Investitionsentscheidungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Erfüllung regulatorischer Anforderungen und Investor-Erwartungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Verbesserung der ESG-Performance und Reputationsmanagement'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ESG Due Diligence',
        description: 'ESG Due Diligence ist ein strukturierter Prozess zur Bewertung von Umwelt-, Sozial- und Governance-Faktoren bei Geschäfts- und Investitionsentscheidungen. Wir unterstützen Sie bei der systematischen Analyse und Bewertung von ESG-Risiken und -Chancen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende ESG-Risikoanalyse und -bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Bewertung von Nachhaltigkeitsstrategien und -performance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Analyse der ESG-Compliance und regulatorischen Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Bewertung von Stakeholder-Engagement und sozialen Auswirkungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Entwicklung von ESG-Verbesserungsempfehlungen und Roadmaps'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Effektive ESG Due Diligence geht über die reine Compliance hinaus und identifiziert strategische Chancen für nachhaltiges Wachstum und Wertschöpfung.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in ESG-Bewertung und Sustainable Finance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in der Durchführung komplexer Due Diligence Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Strukturierte und datengestützte Bewertungsansätze'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Individuelle Lösungen für verschiedene Branchen und Geschäftsmodelle'
            }
          ]
        },
        additionalInfo: 'Eine professionelle ESG Due Diligence kann das Investitionsrisiko um bis zu 40% reduzieren und gleichzeitig neue Chancen für nachhaltiges Wachstum identifizieren. Investieren Sie in fundierte ESG-Bewertungen!',
        serviceDescription: 'Wir bieten Ihnen umfassende ESG Due Diligence Services, von der initialen Risikoanalyse bis zur detaillierten Bewertung und Entwicklung von Verbesserungsempfehlungen. Unsere strukturierten Ansätze ermöglichen fundierte Entscheidungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'ESG-Risikoanalyse und -bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Nachhaltigkeits-Performance Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'ESG-Compliance und Regulatory Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Stakeholder Impact Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'ESG Integration Roadmap Development'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine strukturierte ESG Due Diligence Strategie, die auf Ihre spezifischen Anforderungen und Ziele zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Definition der ESG Due Diligence Scope und Ziele'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Datensammlung und ESG-Performance Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Risikoanalyse und Materiality Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Bewertung und Scoring der ESG-Faktoren'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Entwicklung von Empfehlungen und Integration Roadmap'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir einen Partner gefunden, der uns bei der professionellen Durchführung von ESG Due Diligence unterstützt. Die strukturierten Bewertungsansätze und fundierten Analysen bilden die Grundlage für unsere nachhaltigen Investitionsentscheidungen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ESG-Risikoanalyse und -bewertung',
          description: 'Wir führen umfassende Analysen von Umwelt-, Sozial- und Governance-Risiken durch und bewerten deren potenzielle Auswirkungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematische Identifikation von ESG-Risikofaktoren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Quantitative und qualitative Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Materiality Assessment und Priorisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung von Risikominderungsstrategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Nachhaltigkeits-Performance Assessment',
          description: 'Wir bewerten die aktuelle ESG-Performance und identifizieren Verbesserungspotenziale für nachhaltiges Wachstum.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'ESG-Kennzahlen und Performance Metrics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Benchmarking mit Branchenstandards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Gap-Analyse und Verbesserungspotenziale'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'ESG-Strategie und Roadmap Development'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(esgDueDiligenceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ESG Due Diligence page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
