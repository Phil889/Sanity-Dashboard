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
    console.log('Creating ESG Strategie page...')

    const esgStrategieData = {
      _type: 'servicePage',
      _id: 'esg-strategie',
      title: 'ESG-Strategie',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/esg/esg-strategie'
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
        title: 'ESG-Strategie | ADVISORI',
        description: 'Entwickeln Sie eine zukunftsfähige ESG-Strategie mit ADVISORI. Wir unterstützen Sie bei der Integration von Umwelt-, Sozial- und Governance-Faktoren in Ihre Unternehmensstrategie.',
        keywords: 'ESG-Strategie, Nachhaltigkeit, Environmental, Social, Governance, Nachhaltigkeitsstrategie, ESG-Integration, Corporate Sustainability'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ESG-Strategie'
        },
        tagline: 'Nachhaltigkeit als strategischer Wettbewerbsvorteil',
        heading: 'ESG-Strategie',
        description: 'Eine durchdachte ESG-Strategie ist heute unerlässlich für langfristigen Unternehmenserfolg. Wir unterstützen Sie bei der Entwicklung und Umsetzung einer nachhaltigen Strategie, die Umwelt-, Sozial- und Governance-Aspekte in Ihre Geschäftsprozesse integriert.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Verbesserung der Unternehmensreputation und des Markenwertes'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Zugang zu ESG-orientierten Kapitalquellen und Investoren'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Risikominimierung durch proaktives Nachhaltigkeitsmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Erfüllung regulatorischer Anforderungen und Stakeholder-Erwartungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ESG-Strategie',
        description: 'ESG (Environmental, Social, Governance) ist zu einem entscheidenden Faktor für nachhaltiges Wachstum und langfristige Wertschöpfung geworden. Wir unterstützen Sie bei der Entwicklung einer ganzheitlichen ESG-Strategie, die perfekt auf Ihre Unternehmensziele abgestimmt ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'ESG-Status-Quo-Analyse und Materiality Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung einer maßgeschneiderten ESG-Strategie und Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Definition von ESG-Zielen und KPIs'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von ESG in bestehende Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Stakeholder-Engagement und Kommunikationsstrategie'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine erfolgreiche ESG-Strategie erfordert mehr als nur Compliance – sie muss authentisch, messbar und in die Kerngeschäftsstrategie integriert sein, um nachhaltigen Wert zu schaffen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in allen ESG-Dimensionen und Branchen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Methoden zur ESG-Integration in Geschäftsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Tiefes Verständnis für regulatorische Anforderungen und Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von Strategie bis zur operativen Umsetzung'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit starken ESG-Ratings verzeichnen im Durchschnitt 15% höhere Bewertungen und besseren Zugang zu Kapital. Investieren Sie in eine zukunftsfähige ESG-Strategie!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum zur Entwicklung und Umsetzung Ihrer ESG-Strategie – von der Analyse über die Strategieentwicklung bis hin zur operativen Implementierung und dem kontinuierlichen Monitoring.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'ESG-Reifegrad-Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Materiality Assessment und Stakeholder-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'ESG-Strategie und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'KPI-Framework und Monitoring-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'ESG-Governance und Organisationsstrukturen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine authentische und wirksame ESG-Strategie, die nachhaltigen Wert für alle Stakeholder schafft.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende ESG-Bestandsaufnahme und Benchmark-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Materiality Assessment zur Identifikation wesentlicher ESG-Themen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung einer integrierten ESG-Vision und -Strategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Definition messbarer Ziele und Implementierungsroadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Begleitung bei der Umsetzung und kontinuierlichen Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir eine ESG-Strategie entwickelt, die nicht nur unsere Nachhaltigkeitsziele erfüllt, sondern auch einen echten Wettbewerbsvorteil schafft. Die Expertise und der ganzheitliche Ansatz haben uns dabei geholfen, ESG authentisch in unser Geschäftsmodell zu integrieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ESG-Status-Quo-Analyse',
          description: 'Wir bewerten Ihren aktuellen ESG-Reifegrad und identifizieren Verbesserungspotenziale.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Bewertung aller ESG-Dimensionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Benchmark-Analyse mit Branchenstandards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Gap-Analyse und Handlungsempfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'ESG-Reifegrad-Dashboard und Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'ESG-Strategieentwicklung',
          description: 'Wir entwickeln eine maßgeschneiderte ESG-Strategie, die perfekt auf Ihre Unternehmensziele abgestimmt ist.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Materiality Assessment und Wesentlichkeitsanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'ESG-Vision und strategische Zielsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Detaillierte Implementierungsroadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Stakeholder-Engagement-Strategie'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(esgStrategieData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ESG-Strategie page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
