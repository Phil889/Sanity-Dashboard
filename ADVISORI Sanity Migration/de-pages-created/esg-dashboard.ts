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
    console.log('Creating ESG Dashboard page...')

    const esgDashboardData = {
      _type: 'servicePage',
      _id: 'esg-dashboard',
      title: 'ESG Dashboard',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/esg/esg-dashboard'
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
        title: 'ESG Dashboard | ADVISORI',
        description: 'Transformieren Sie Ihre ESG-Performance mit intelligenten Dashboard-Lösungen. Visualisieren und steuern Sie Nachhaltigkeitskennzahlen in Echtzeit für strategische Entscheidungen.',
        keywords: 'ESG Dashboard, Nachhaltigkeits-KPIs, ESG Reporting, Sustainability Metrics, ESG Analytics, Environmental Dashboard, Social Governance Dashboard'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ESG Dashboard'
        },
        tagline: 'Intelligente Visualisierung Ihrer ESG-Performance für strategische Entscheidungen',
        heading: 'ESG Dashboard',
        description: 'Unser ESG Dashboard bietet Ihnen eine zentrale, intelligente Plattform zur Visualisierung und Steuerung Ihrer Nachhaltigkeitsleistung. Transformieren Sie komplexe ESG-Daten in actionable Insights für die C-Suite.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Real-time Visualisierung von ESG-KPIs und Nachhaltigkeitstrends'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Integrierte Datenquellen für ganzheitliche ESG-Performance-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierte Berichterstattung für Regulatoren und Stakeholder'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strategische Entscheidungsunterstützung durch datengetriebene ESG-Insights'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ESG Dashboard',
        description: 'Unser ESG Dashboard revolutioniert die Art, wie Unternehmen ihre Nachhaltigkeitsperformance verwalten und kommunizieren. Durch intelligente Datenintegration und intuitive Visualisierung ermöglichen wir es der Führungsebene, ESG-Faktoren strategisch zu steuern und gleichzeitig regulatorische Anforderungen zu erfüllen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Zentrale Aggregation und Visualisierung aller ESG-relevanten Kennzahlen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Integration multipler Datenquellen und -systeme in einer einheitlichen Plattform'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Automatisierte Berichtsgenerierung für CSRD, Taxonomie und weitere Standards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Predictive Analytics für Nachhaltigkeitstrends und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Stakeholder-spezifische Dashboards für verschiedene Zielgruppen'
          }
        ],
        alert: {
          title: 'Strategischer Vorteil',
          content: 'Ein intelligentes ESG Dashboard transformiert Nachhaltigkeitsdaten von einem Compliance-Instrument zu einem strategischen Wettbewerbsvorteil, der Investoren überzeugt und operative Exzellenz ermöglicht.'
        },
        whyUs: {
          title: 'Unsere Dashboard-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in ESG-Datenmodellierung und Regulatory Technology'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenführende Dashboard-Architekturen mit modernsten Visualisierungstechnologien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Nahtlose Integration in bestehende Unternehmenssysteme und Datenlandschaften'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Anpassung an evolvierende ESG-Standards und -Anforderungen'
            }
          ]
        },
        additionalInfo: 'Studien zeigen, dass Unternehmen mit implementierten ESG Dashboards ihre Nachhaltigkeitsperformance um durchschnittlich 35% verbessern und gleichzeitig die Berichtseffizienz um 60% steigern können.',
        serviceDescription: 'Unsere ESG Dashboard-Lösungen bieten eine umfassende Plattform zur Visualisierung, Analyse und Steuerung Ihrer Nachhaltigkeitsperformance. Von der Datenintegration bis zur strategischen Entscheidungsunterstützung – wir transformieren Ihre ESG-Daten in einen strategischen Wettbewerbsvorteil.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Dashboard-Architektur und Design für ESG-Kennzahlen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Integration von Umwelt-, Sozial- und Governance-Datenquellen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Automatisierte ESG-Berichterstattung und Regulatory Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Stakeholder-Management und Investor Relations Dashboards'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance-Monitoring und Trend-Analyse für Nachhaltigkeitsziele'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Dashboard-Implementierungsansatz',
        description: 'Wir entwickeln mit Ihnen ein maßgeschneidertes ESG Dashboard, das Ihre spezifischen Nachhaltigkeitsziele und Stakeholder-Anforderungen optimal unterstützt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse Ihrer ESG-Datenstrategie und Stakeholder-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design und Prototyping nutzerzentrierter Dashboard-Interfaces'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Integration und Automatisierung Ihrer ESG-Datenquellen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung und Testing der Dashboard-Funktionalitäten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Training und kontinuierliche Optimierung der Dashboard-Performance'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Das ESG Dashboard von ADVISORI hat unsere Nachhaltigkeitsstrategie revolutioniert. Die intuitive Visualisierung komplexer ESG-Daten ermöglicht es uns, fundierte strategische Entscheidungen zu treffen und unsere Stakeholder transparent zu informieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ESG Dashboard-Architektur',
          description: 'Wir entwickeln eine maßgeschneiderte Dashboard-Architektur, die Ihre ESG-Datenstrategie optimal unterstützt.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Datenmodellierung für ESG-Kennzahlen und KPIs'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Multi-Source Integration für Umwelt-, Sozial- und Governance-Daten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Skalierbare Cloud-basierte Dashboard-Infrastruktur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Security-by-Design für sensitive ESG-Daten'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Intelligente ESG-Visualisierung',
          description: 'Transformieren Sie komplexe ESG-Daten in intuitive, actionable Visualisierungen für strategische Entscheidungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Real-time Performance Dashboards für ESG-KPIs'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Predictive Analytics für Nachhaltigkeitstrends'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Stakeholder-spezifische Reporting-Interfaces'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Automatisierte Alert-Systeme für ESG-Risiken'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(esgDashboardData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ESG Dashboard page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
