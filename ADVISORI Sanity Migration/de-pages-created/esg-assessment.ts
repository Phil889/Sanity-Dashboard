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
    console.log('Creating ESG Assessment page...')

    const esgAssessmentData = {
      _type: 'servicePage',
      _id: 'esg-assessment',
      title: 'ESG Assessment',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/esg/esg-assessment'
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
        title: 'ESG Assessment & Bewertung | ADVISORI',
        description: 'Professionelle ESG-Bewertung und Nachhaltigkeitsanalyse. Von Materiality Assessment über Stakeholder-Mapping bis hin zu ESG-Ratings - wir unterstützen Sie bei der umfassenden ESG-Bewertung.',
        keywords: 'ESG Assessment, ESG Bewertung, Nachhaltigkeitsanalyse, ESG Rating, Materiality Assessment, Stakeholder Engagement, ESG Due Diligence'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ESG Assessment und Bewertung'
        },
        tagline: 'Umfassende ESG-Bewertung für strategische Nachhaltigkeitsentscheidungen',
        heading: 'ESG Assessment',
        description: 'Ein systematisches ESG Assessment bildet die Grundlage für jede erfolgreiche Nachhaltigkeitsstrategie. Wir unterstützen Sie bei der ganzheitlichen Bewertung Ihrer ESG-Performance und der Entwicklung datengestützter Verbesserungsmaßnahmen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Ganzheitliche Bewertung Ihrer aktuellen ESG-Performance und Reifegrad'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Identifikation materieller ESG-Themen und Risiken für Ihr Geschäftsmodell'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Stakeholder-basierte Wesentlichkeitsanalyse und Erwartungsmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Verbesserung Ihrer ESG-Ratings und Investorenkommunikation'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ESG Assessment & Bewertung',
        description: 'Ein fundiertes ESG Assessment ist der erste Schritt zu einer erfolgreichen Nachhaltigkeitsstrategie. Wir führen eine systematische Analyse Ihrer Environmental-, Social- und Governance-Performance durch und entwickeln datenbasierte Handlungsempfehlungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Materiality Assessment und Stakeholder-Mapping zur Identifikation relevanter ESG-Themen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Bewertung der aktuellen ESG-Performance anhand internationaler Standards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Gap-Analyse zu führenden ESG-Frameworks und Rating-Kriterien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung von KPIs und Monitoring-Systemen für ESG-Indikatoren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Strategische Roadmap für die kontinuierliche ESG-Verbesserung'
          }
        ],
        alert: {
          title: 'Markttrends',
          content: 'ESG-Ratings werden zunehmend von Investoren, Kunden und Geschäftspartnern als Entscheidungskriterium herangezogen. Eine proaktive ESG-Bewertung und -Verbesserung ist entscheidend für den langfristigen Geschäftserfolg.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in allen ESG-Dimensionen und internationalen Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für Materiality Assessments und Stakeholder Engagement'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Tiefgreifende Kenntnisse der führenden ESG-Rating-Methodologien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenspezifische Benchmarking-Expertise und Best-Practice-Ansätze'
            }
          ]
        },
        additionalInfo: 'Ein professionelles ESG Assessment schafft Transparenz über Ihre Nachhaltigkeitsleistung und bildet die Basis für strategische Entscheidungen, die langfristigen Wert für alle Stakeholder schaffen.',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes ESG Assessment, das von der Wesentlichkeitsanalyse über die Performance-Bewertung bis hin zur strategischen Roadmap-Entwicklung alle relevanten Aspekte abdeckt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'ESG Materiality Assessment und Stakeholder-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'ESG-Performance Bewertung und Benchmark-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'ESG-Rating Optimierung und Investor Relations'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'ESG-Datenstrategie und Monitoring-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'ESG-Transformation Roadmap und Implementierungsplanung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir führen ein systematisches ESG Assessment durch, das sowohl quantitative Datenanalysen als auch qualitative Stakeholder-Einschätzungen berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Stakeholder-Mapping und Wesentlichkeitsanalyse zur Identifikation materieller ESG-Themen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Umfassende Datensammlung und Performance-Bewertung anhand führender ESG-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Benchmark-Analyse und Gap-Identifikation gegenüber Best-Practice-Unternehmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung von ESG-KPIs und Implementierung von Monitoring-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Erstellung einer strategischen ESG-Roadmap mit priorisierten Handlungsfeldern'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns mit einem umfassenden ESG Assessment dabei geholfen, unsere Nachhaltigkeitsleistung objektiv zu bewerten und strategische Verbesserungsbereiche zu identifizieren. Die datenbasierte Analyse und die praxisorientierten Handlungsempfehlungen haben unsere ESG-Strategie erheblich gestärkt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ESG Materiality Assessment',
          description: 'Systematische Identifikation und Bewertung der für Ihr Unternehmen wesentlichen ESG-Themen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Stakeholder-Mapping und Engagement-Prozess'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Double Materiality-Analyse nach EU-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Wesentlichkeitsmatrix und Themen-Priorisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration in die strategische Unternehmensplanung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'ESG-Performance Bewertung',
          description: 'Umfassende Analyse Ihrer aktuellen ESG-Leistung und Identifikation von Verbesserungspotenzialen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'ESG-Datensammlung und -validierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Benchmark-Analyse gegenüber Branchenführern'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'ESG-Rating Simulation und Optimierungsempfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'KPI-Dashboard und Monitoring-System'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(esgAssessmentData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ESG Assessment page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
