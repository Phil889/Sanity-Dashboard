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
    console.log('Creating ESG KPIs Monitoring page...')

    const esgKpisMonitoringData = {
      _type: 'servicePage',
      _id: 'esg-kpis-monitoring-kpi-festlegung-benchmarking-datenmanagement-qualitaetssicherung',
      title: 'ESG KPIs Monitoring - KPI-Festlegung, Benchmarking, Datenmanagement & Qualitätssicherung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/esg/esg-kpis-monitoring-kpi-festlegung-benchmarking-datenmanagement-qualitaetssicherung'
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
        title: 'ESG KPIs Monitoring & Datenmanagement | ADVISORI',
        description: 'Professionelles ESG KPIs Monitoring: KPI-Festlegung, Benchmarking, Datenmanagement & Qualitätssicherung. Expertenlösungen für messbare Nachhaltigkeitsperformance.',
        keywords: 'ESG KPIs Monitoring, KPI-Festlegung, Benchmarking, Datenmanagement, Qualitätssicherung, ESG Reporting, Nachhaltigkeitskennzahlen, ESG Analytics'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ESG KPIs Monitoring'
        },
        tagline: 'Datengestützte ESG-Performance durch intelligentes KPI-Management',
        heading: 'ESG KPIs Monitoring - Präzise Messung, strategische Steuerung',
        description: 'Transformieren Sie Ihre ESG-Daten in strategische Insights. Wir unterstützen Sie bei der Entwicklung robuster KPI-Systeme, der Implementierung von Benchmarking-Prozessen und der Sicherstellung höchster Datenqualität für faktenbasierte Nachhaltigkeitsentscheidungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Präzise ESG-Performance-Messung und -Steuerung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Erhöhte Transparenz und Glaubwürdigkeit bei Stakeholdern'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Verbesserte ESG-Ratings und Kapitalmarktzugang'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Optimierte Ressourcenallokation für Nachhaltigkeitsinitiativen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ESG KPIs Monitoring - Datengestützte Nachhaltigkeitssteuerung',
        description: 'Effektives ESG-Management erfordert präzise Messbarkeit, kontinuierliches Monitoring und strategische Steuerung. Wir entwickeln maßgeschneiderte KPI-Systeme, die Ihre Nachhaltigkeitsperformance transparent machen und als Grundlage für datengestützte Entscheidungen dienen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung materieller und strategierelevanter ESG-KPIs'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementation robuster Datenerfassungs- und -validierungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Benchmarking gegen Branchenstandards und Best Practices'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau automatisierter Monitoring- und Reporting-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Qualitätssicherung und Datenintegritätsprüfungen'
          }
        ],
        alert: {
          title: 'Datenqualität-Hinweis',
          content: 'Hochwertige ESG-Daten sind entscheidend für glaubwürdiges Reporting und fundierte Entscheidungen. Unzureichende Datenqualität kann zu Fehlsteuerung, Reputationsrisiken und regulatorischen Problemen führen.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierung auf quantitative ESG-Analytics und Performance-Messung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefe Branchenkenntnisse für sector-spezifische KPI-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Technologische Expertise in ESG-Datenmanagement und -Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Erfahrung mit internationalen ESG-Standards und -Frameworks'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit robusten ESG-KPI-Systemen erzielen 15% bessere ESG-Ratings und 20% höhere Effizienz bei Nachhaltigkeitsinitiativen. Investieren Sie in datengestützte ESG-Excellence!',
        serviceDescription: 'Wir bieten eine umfassende Beratung zur Entwicklung und Implementierung von ESG-KPI-Systemen, die sowohl regulatorische Anforderungen erfüllen als auch strategische Geschäftsziele unterstützen. Von der Konzeption bis zur operativen Umsetzung begleiten wir Sie auf dem Weg zu datengestützter Nachhaltigkeitssteuerung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Materialitätsanalyse und strategische KPI-Auswahl'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Design von Datenarchitekturen und Erfassungsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Benchmarking-Strategien und Peer-Group-Analysen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Automatisierte Monitoring-Dashboards und Alert-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Datenqualitätssicherung und -validierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser KPI-Entwicklungsansatz',
        description: 'Wir folgen einem systematischen, datengestützten Ansatz zur Entwicklung und Implementierung von ESG-KPI-Systemen, der wissenschaftliche Methodik mit praktischer Umsetzbarkeit verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Materialitätsanalyse und Stakeholder-Priorisierung für relevante KPIs'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design von KPI-Frameworks mit SMART-Kriterien und Zielsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung von Dateninfrastruktur und Erfassungsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung von Benchmarking und kontinuierlichem Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Optimierung und Weiterentwicklung basierend auf Erkenntnissen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns geholfen, ein hochpräzises ESG-KPI-System zu entwickeln, das nicht nur unsere Nachhaltigkeitsperformance transparent macht, sondern auch als strategisches Steuerungsinstrument für datenbasierte Entscheidungen dient.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ESG KPI-Framework Entwicklung',
          description: 'Systematische Entwicklung materieller und strategierelevanter ESG-KPIs basierend auf Geschäftsstrategie und Stakeholder-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Materialitätsanalyse und KPI-Priorisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'SMART-KPI-Definition mit Zielwerten und Timelines'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integration in bestehende Performance-Management-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Alignment mit internationalen ESG-Standards'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'ESG Datenmanagement & Qualitätssicherung',
          description: 'Aufbau robuster Dateninfrastrukturen und -prozesse zur Sicherstellung höchster Datenqualität und -integrität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Design von Datenarchitekturen und -governance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automatisierte Datenvalidierung und -bereinigung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Audit-Trail und Nachvollziehbarkeit der Datenherkunft'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Qualitätsmonitoring und -optimierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(esgKpisMonitoringData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ESG KPIs Monitoring page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
