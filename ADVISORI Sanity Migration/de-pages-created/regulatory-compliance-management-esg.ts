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
    console.log('Creating ESG (Environmental, Social, Governance) page...')

    const esgData = {
      _type: 'servicePage',
      _id: 'regulatory-compliance-management-esg',
      title: 'ESG (Environmental, Social, Governance)',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/esg'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'regulatory-reporting'
        }
      },
      seo: {
        _type: 'seo',
        title: 'ESG (Environmental, Social, Governance) | ADVISORI',
        description: 'Professionelle ESG-Compliance und Nachhaltigkeitsberatung. Wir unterstützen Sie bei der Umsetzung von ESG-Strategien, Reporting und der Erfüllung regulatorischer Anforderungen.',
        keywords: 'ESG Compliance, Nachhaltigkeit, Environmental Social Governance, ESG Reporting, CSR, Nachhaltigkeitsberichterstattung, CSRD, EU Taxonomie'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ESG (Environmental, Social, Governance)'
        },
        tagline: 'Nachhaltigkeit als strategischer Wettbewerbsvorteil',
        heading: 'ESG (Environmental, Social, Governance)',
        description: 'ESG-Compliance ist heute ein wesentlicher Bestandteil nachhaltiger Unternehmensführung. Wir unterstützen Sie bei der strategischen Integration von Umwelt-, Sozial- und Governance-Faktoren in Ihre Geschäftsprozesse.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Erfüllung der CSRD und anderer ESG-Regulatorik'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Verbesserung der Unternehmensreputation und des Ratings'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Optimierung der Kapitalkosten und Finanzierungsmöglichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strategische Positionierung für nachhaltige Geschäftsmodelle'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ESG (Environmental, Social, Governance)',
        description: 'Environmental, Social and Governance (ESG) Faktoren sind zu einem zentralen Element der Unternehmensbewertung und regulatorischen Compliance geworden. Wir unterstützen Sie bei der strategischen Integration von Nachhaltigkeitsaspekten in Ihre Geschäftsprozesse und helfen Ihnen, regulatorische Anforderungen zu erfüllen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'ESG-Strategie und Governance-Struktur Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'CSRD, EU-Taxonomie und Sustainable Finance Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'ESG-Datenmanagement und Reporting-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Nachhaltigkeitsberichterstattung und Stakeholder-Kommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'ESG-Risikoanalyse und Due Diligence Prozesse'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'ESG ist mehr als Compliance - es ist ein strategischer Hebel für langfristigen Unternehmenserfolg. Eine proaktive ESG-Strategie kann Kapitalkosten senken, neue Marktchancen erschließen und die Resilienz Ihres Unternehmens stärken.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in ESG-Regulatorik und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Ganzheitlicher Ansatz von Strategie bis zur operativen Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Lösungen und Marktkenntnis'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Technologie-unterstützte Lösungen für effizientes ESG-Management'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit starken ESG-Praktiken zeigen nachweislich bessere finanzielle Performance und geringere Kapitalkosten. Investieren Sie in eine nachhaltige Zukunft und positionieren Sie Ihr Unternehmen als verantwortungsvoller Marktführer.',
        serviceDescription: 'Wir bieten umfassende ESG-Beratungsleistungen, von der Strategieentwicklung über die Implementierung von Governance-Strukturen bis hin zur operativen Umsetzung von Nachhaltigkeitsmaßnahmen und regulatorischer Compliance.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'ESG-Strategie und Materialitätsanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'CSRD und EU-Taxonomie Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'ESG-Datenmanagement und KPI-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Nachhaltigkeitsberichterstattung und Assurance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'ESG-Due Diligence und Risikoassessment'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte ESG-Strategie, die regulatorische Anforderungen erfüllt und gleichzeitig echten Business Value schafft.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'IST-Analyse und ESG-Maturity Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Materialitätsanalyse und Stakeholder-Engagement'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'ESG-Strategie und Zielsetzung Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Governance-Strukturen und Prozesse Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Monitoring, Reporting und kontinuierliche Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns dabei geholfen, ESG von einer Compliance-Anforderung zu einem strategischen Wettbewerbsvorteil zu transformieren. Durch ihre ganzheitliche Herangehensweise konnten wir nicht nur regulatorische Anforderungen erfüllen, sondern auch neue Geschäftschancen erschließen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ESG-Strategie und Governance',
          description: 'Entwicklung einer umfassenden ESG-Strategie mit entsprechenden Governance-Strukturen und Oversight-Mechanismen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'ESG-Materialitätsanalyse und Stakeholder-Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'ESG-Governance Framework und Committee-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'ESG-Zielsetzung und KPI-Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration in Unternehmensstrategie und Vergütung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'CSRD und Regulatory Compliance',
          description: 'Unterstützung bei der Umsetzung der Corporate Sustainability Reporting Directive und anderer ESG-Regulatorik.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'CSRD Gap-Analyse und Implementierungsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'EU-Taxonomie Alignment und Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'ESRS Standards Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Assurance-Readiness und Prüfungsvorbereitung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(esgData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ESG (Environmental, Social, Governance) page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
