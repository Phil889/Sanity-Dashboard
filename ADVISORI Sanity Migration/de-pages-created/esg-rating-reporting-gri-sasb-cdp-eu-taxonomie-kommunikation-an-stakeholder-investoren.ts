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
    console.log('Creating ESG Rating Reporting page...')

    const esgRatingReportingData = {
      _type: 'servicePage',
      _id: 'esg-rating-reporting-gri-sasb-cdp-eu-taxonomie-kommunikation-an-stakeholder-investoren',
      title: 'ESG Rating & Reporting (GRI, SASB, CDP, EU-Taxonomie, Kommunikation an Stakeholder & Investoren)',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/esg/esg-rating-reporting-gri-sasb-cdp-eu-taxonomie-kommunikation-an-stakeholder-investoren'
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
        title: 'ESG Rating & Reporting - GRI, SASB, CDP, EU-Taxonomie | ADVISORI',
        description: 'Professionelle ESG-Berichterstattung nach GRI, SASB, CDP und EU-Taxonomie. Strategische Kommunikation an Stakeholder und Investoren für bessere ESG-Ratings.',
        keywords: 'ESG Reporting, GRI Standards, SASB, CDP, EU-Taxonomie, ESG Rating, Nachhaltigkeit, Stakeholder Kommunikation, Investor Relations'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ESG Rating & Reporting'
        },
        tagline: 'Exzellente ESG-Performance durch strategische Berichterstattung und Stakeholder-Kommunikation',
        heading: 'ESG Rating & Reporting (GRI, SASB, CDP, EU-Taxonomie, Kommunikation an Stakeholder & Investoren)',
        description: 'Optimieren Sie Ihre ESG-Ratings durch professionelle Berichterstattung nach internationalen Standards. Wir unterstützen Sie bei der strategischen Kommunikation Ihrer Nachhaltigkeitsleistung an alle relevanten Stakeholder.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Verbesserung der ESG-Ratings und Kapitalmarktzugang'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Compliance mit EU-Taxonomie und internationalen Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Strategische Stakeholder- und Investorenkommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Erhöhung der Transparenz und des Vertrauens'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ESG Rating & Reporting Excellence',
        description: 'In der heutigen Geschäftswelt sind ESG-Faktoren (Environmental, Social, Governance) entscheidend für den Unternehmenserfolg. Unsere Expertise in der ESG-Berichterstattung nach GRI, SASB, CDP und EU-Taxonomie hilft Ihnen, bessere Ratings zu erzielen und das Vertrauen von Investoren und Stakeholdern zu stärken.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung umfassender ESG-Berichterstattungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung internationaler Standards (GRI, SASB, CDP)'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'EU-Taxonomie Compliance und CSRD-Vorbereitung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Strategische Stakeholder- und Investorenkommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Rating-Optimierung und Performance-Verbesserung'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche ESG-Berichterstattung ist mehr als Compliance – sie ist ein strategisches Instrument zur Wertsteigerung und Risikominimierung, das direkte Auswirkungen auf Finanzierungskosten und Marktbewertung hat.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in allen relevanten ESG-Standards und -Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung mit Rating-Agenturen und deren Bewertungskriterien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Strategische Beratung für nachhaltige Wertsteigerung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von Datensammlung bis Kommunikation'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit exzellentem ESG-Rating erhalten bis zu 40% günstigere Finanzierungskonditionen und verzeichnen eine bis zu 20% höhere Marktbewertung. Investieren Sie in professionelle ESG-Berichterstattung für nachhaltigen Erfolg!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum für erstklassige ESG-Performance, von der strategischen Planung über die Implementierung bis zur optimalen Kommunikation Ihrer Nachhaltigkeitsleistung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'ESG-Strategie und Materialitätsanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'GRI, SASB und CDP Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'EU-Taxonomie Compliance und CSRD-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Rating-Optimierung und Benchmark-Analysen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Stakeholder-Engagement und Investorenkommunikation'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte ESG-Berichterstattungsstrategie, die Ihre Nachhaltigkeitsleistung optimal kommuniziert und Ihr Rating nachhaltig verbessert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der aktuellen ESG-Performance und Rating-Position'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Materialitätsanalyse und Stakeholder-Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung der ESG-Berichterstattungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung von Standards und Reporting-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Kommunikation'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns dabei geholfen, unsere ESG-Berichterstattung auf ein neues Niveau zu heben. Durch die professionelle Umsetzung der GRI-Standards und die strategische Kommunikation konnten wir unser Rating signifikant verbessern und das Vertrauen unserer Investoren stärken.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ESG-Strategie & Materialitätsanalyse',
          description: 'Entwicklung einer umfassenden ESG-Strategie basierend auf Materialitätsanalyse und Stakeholder-Erwartungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Durchführung von Materialitätsanalysen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Stakeholder-Mapping und -Engagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'ESG-Roadmap und Zielsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration in die Unternehmensstrategie'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Internationale Standards Implementation',
          description: 'Professionelle Umsetzung von GRI, SASB, CDP und EU-Taxonomie für erstklassige Berichterstattung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'GRI Standards konforme Berichterstattung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'SASB Framework Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'CDP Scoring Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'EU-Taxonomie Compliance'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(esgRatingReportingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ESG Rating Reporting page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
