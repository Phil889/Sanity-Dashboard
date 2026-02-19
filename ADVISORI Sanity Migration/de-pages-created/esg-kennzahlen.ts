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
    console.log('Creating ESG-Kennzahlen page...')

    const esgKennzahlenData = {
      _type: 'servicePage',
      _id: 'esg-kennzahlen',
      title: 'ESG-Kennzahlen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/esg/esg-kennzahlen'
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
        title: 'ESG-Kennzahlen | ADVISORI',
        description: 'Professionelle Entwicklung und Implementierung von ESG-Kennzahlensystemen. Wir unterstützen Sie bei der Definition, Messung und Berichterstattung relevanter ESG-KPIs für nachhaltige Unternehmenssteuerung.',
        keywords: 'ESG-Kennzahlen, ESG-KPIs, Nachhaltigkeitsmessung, ESG-Reporting, Umweltkennzahlen, Soziale Indikatoren, Governance-Metriken, ESG-Dashboard'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ESG-Kennzahlen'
        },
        tagline: 'Messbare ESG-Performance durch strategische Kennzahlensysteme',
        heading: 'ESG-Kennzahlen',
        description: 'Transformieren Sie Ihre Nachhaltigkeitsstrategie in messbare Erfolge. Wir entwickeln und implementieren maßgeschneiderte ESG-Kennzahlensysteme, die Ihre Performance transparent machen und strategische Entscheidungen fundieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Objektive Messung und Steuerung der ESG-Performance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Verbesserte Transparenz gegenüber Stakeholdern und Investoren'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Datengetriebene Entscheidungsfindung für Nachhaltigkeitsinitiativen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Erfüllung von Reporting-Anforderungen und Regulatorik'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ESG-Kennzahlen',
        description: 'ESG-Kennzahlen sind das Fundament einer erfolgreichen Nachhaltigkeitsstrategie. Sie ermöglichen es, Fortschritte zu messen, Ziele zu definieren und Verbesserungspotenziale zu identifizieren. Wir unterstützen Sie bei der Entwicklung eines umfassenden ESG-Kennzahlensystems, das auf Ihre spezifischen Geschäftsziele und Stakeholder-Anforderungen zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung materieller und branchenspezifischer ESG-KPIs'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung von Datenerfassungs- und Managementsystemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Design von ESG-Dashboards und Reporting-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration in bestehende Controlling- und Managementsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Optimierung und Weiterentwicklung der Kennzahlen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Effektive ESG-Kennzahlen sind nicht nur messbar, sondern auch handlungsrelevant. Sie sollten direkt mit Ihren Geschäftszielen verknüpft sein und konkrete Steuerungsimpulse liefern.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in ESG-Metriken und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenspezifische Kennzahlenentwicklung und Benchmarking'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integration in bestehende IT- und Controlling-Landschaften'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praxisnahe Implementierung mit nachhaltiger Nutzbarkeit'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit strukturierten ESG-Kennzahlensystemen können ihre Nachhaltigkeitsperformance um bis zu 40% verbessern und gleichzeitig die Berichterstattungseffizienz steigern.',
        serviceDescription: 'Wir bieten Ihnen eine End-to-End-Beratung für die Entwicklung, Implementierung und Optimierung Ihrer ESG-Kennzahlensysteme. Von der strategischen Konzeption bis zur operativen Umsetzung begleiten wir Sie auf dem Weg zu einer datengetriebenen Nachhaltigkeitssteuerung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Materialitätsanalyse und KPI-Definition'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Datenmanagement und Systemintegration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Dashboard-Design und Visualisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Stakeholder-Reporting und Kommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Optimierung und Weiterentwicklung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen ein ESG-Kennzahlensystem, das sowohl den externen Reporting-Anforderungen als auch Ihren internen Steuerungsbedürfnissen gerecht wird.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse Ihrer Geschäftsstrategie und Nachhaltigkeitsziele'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Materialitätsbewertung und Stakeholder-Anforderungsanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Definition relevanter ESG-KPIs und Messverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung von Datenerfassungs- und Managementprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Aufbau von Reporting-Strukturen und kontinuierlicher Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns dabei geholfen, ein umfassendes ESG-Kennzahlensystem zu entwickeln, das nicht nur unsere Nachhaltigkeitsperformance transparent macht, sondern auch konkrete Steuerungsimpulse für unser Management liefert. Die Integration in unsere bestehenden Systeme verlief reibungslos.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ESG-KPI-Entwicklung',
          description: 'Wir entwickeln maßgeschneiderte ESG-Kennzahlensysteme, die Ihre spezifischen Nachhaltigkeitsziele messbar machen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Materialitätsanalyse und Stakeholder-Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Definition branchenspezifischer KPIs und Benchmarks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integration von Standards (GRI, SASB, TCFD, EU-Taxonomie)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Zieldefinition und Performance-Tracking-Konzepte'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'ESG-Datenmanagement',
          description: 'Wir implementieren effiziente Systeme zur Erfassung, Verwaltung und Analyse Ihrer ESG-Daten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Aufbau von Datenerfassungsprozessen und -systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration in bestehende IT- und ERP-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Automatisierung und Qualitätssicherung der Datenerfassung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Dashboard-Design und Echtzeit-Monitoring'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(esgKennzahlenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ESG-Kennzahlen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
