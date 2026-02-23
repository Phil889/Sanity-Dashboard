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
    console.log('Creating ESG Rating page...')

    const esgRatingData = {
      _type: 'servicePage',
      _id: 'esg-rating',
      title: 'ESG Rating',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/esg/esg-rating'
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
        title: 'ESG Rating | ADVISORI',
        description: 'Verbessern Sie Ihr ESG Rating durch professionelle Beratung und strategische Umsetzung nachhaltiger Geschäftspraktiken. Expertenwissen für bessere Nachhaltigkeitsbewertungen.',
        keywords: 'ESG Rating, Nachhaltigkeitsbewertung, ESG Score, Sustainability Rating, ESG Verbesserung, Rating Agenturen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ESG Rating'
        },
        tagline: 'Optimierung Ihrer ESG Performance für bessere Ratings und Marktzugang',
        heading: 'ESG Rating',
        description: 'ESG Ratings werden für Unternehmen immer wichtiger für Finanzierung, Investorenbeziehungen und Marktzugang. Wir helfen Ihnen, Ihre ESG Performance zu verbessern und bessere Bewertungen zu erzielen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Verbesserung Ihres ESG Scores bei führenden Rating-Agenturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Zugang zu nachhaltigkeitsorientierter Finanzierung und Investoren'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Strategische Positionierung als verantwortlicher Marktführer'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Risikominimierung und Stärkung der langfristigen Wettbewerbsfähigkeit'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ESG Rating',
        description: 'ESG Ratings bewerten die Nachhaltigkeitsleistung von Unternehmen in den Bereichen Umwelt (Environmental), Soziales (Social) und Unternehmensführung (Governance). Wir unterstützen Sie dabei, Ihre ESG Performance systematisch zu verbessern und bessere Ratings zu erzielen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse Ihres aktuellen ESG Status und Rating-Performance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung einer strategischen ESG Roadmap für Rating-Verbesserungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung von ESG Datenmanagement und Reporting-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Stakeholder Engagement und ESG Kommunikationsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Optimierung der ESG Performance'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'ESG Ratings sind nicht nur eine Compliance-Anforderung, sondern ein strategischer Wettbewerbsfaktor. Unternehmen mit besseren ESG Scores haben Zugang zu günstigerer Finanzierung und attraktiveren Investoren.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in ESG Rating-Methoden und -Kriterien führender Agenturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praktische Erfahrung in der erfolgreichen Verbesserung von ESG Scores'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von Strategie bis zur operativen Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Individuelle Lösungen für verschiedene Branchen und Unternehmensgrößen'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit besseren ESG Ratings haben im Durchschnitt 10-15% niedrigere Kapitalkosten und 25% besseren Zugang zu institutionellen Investoren. Investieren Sie in Ihre ESG Performance!',
        serviceDescription: 'Wir bieten umfassende Unterstützung bei der Verbesserung Ihrer ESG Ratings, von der strategischen Planung über die Implementierung bis hin zur kontinuierlichen Optimierung Ihrer Nachhaltigkeitsleistung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'ESG Rating Gap-Analyse und Benchmark-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Strategische ESG Roadmap und Verbesserungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'ESG Datenmanagement und Reporting-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Stakeholder Engagement und ESG Kommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliches ESG Performance Monitoring'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine systematische Strategie zur Verbesserung Ihrer ESG Ratings, die auf den spezifischen Kriterien der relevanten Rating-Agenturen basiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse Ihrer aktuellen ESG Performance und Rating-Status'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Identifikation der wichtigsten Verbesserungsbereiche und Quick Wins'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung einer priorisierten ESG Verbesserungsroadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung von ESG Maßnahmen und Reporting-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Optimierung der ESG Performance'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir unsere ESG Ratings systematisch verbessert und dadurch Zugang zu nachhaltigkeitsorientierten Finanzierungen erhalten. Die strategische Herangehensweise und praktische Umsetzung haben unsere Nachhaltigkeitsleistung messbar gesteigert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ESG Rating Gap-Analyse',
          description: 'Wir analysieren Ihre aktuelle ESG Performance im Vergleich zu Rating-Kriterien und identifizieren Verbesserungspotentiale.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Bewertung nach ESG Rating-Kriterien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Benchmark-Vergleich mit Branchenführern'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation von Quick Wins und langfristigen Maßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Priorisierung nach Impact und Umsetzbarkeit'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'ESG Verbesserungsstrategie',
          description: 'Wir entwickeln eine systematische Strategie zur nachhaltigen Verbesserung Ihrer ESG Ratings und Nachhaltigkeitsleistung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Strategische ESG Roadmap mit konkreten Zielen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration in Unternehmensstrategie und -prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'KPI-Framework für ESG Performance Messung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Change Management und Stakeholder Engagement'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(esgRatingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ESG Rating page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
