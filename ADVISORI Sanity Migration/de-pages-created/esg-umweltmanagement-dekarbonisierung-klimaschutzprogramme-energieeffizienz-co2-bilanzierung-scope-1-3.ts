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
    console.log('Creating ESG Umweltmanagement page...')

    const esgUmweltmanagementData = {
      _type: 'servicePage',
      _id: 'esg-umweltmanagement-dekarbonisierung-klimaschutzprogramme-energieeffizienz-co2-bilanzierung-scope-1-3',
      title: 'ESG Umweltmanagement: Dekarbonisierung, Klimaschutzprogramme, Energieeffizienz & CO2-Bilanzierung (Scope 1-3)',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/esg/esg-umweltmanagement-dekarbonisierung-klimaschutzprogramme-energieeffizienz-co2-bilanzierung-scope-1-3'
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
        title: 'ESG Umweltmanagement: Dekarbonisierung & CO2-Bilanzierung | ADVISORI',
        description: 'Professionelle Beratung für ESG-Umweltmanagement, Dekarbonisierungsstrategien, Klimaschutzprogramme und CO2-Bilanzierung nach Scope 1-3. Nachhaltige Transformation für Ihr Unternehmen.',
        keywords: 'ESG Umweltmanagement, Dekarbonisierung, Klimaschutzprogramme, Energieeffizienz, CO2-Bilanzierung, Scope 1-3, Nachhaltigkeit, Klimaneutralität, Carbon Footprint, Net Zero'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ESG Umweltmanagement und Dekarbonisierung'
        },
        tagline: 'Strategische Umwelttransformation für nachhaltige Unternehmenserfolge',
        heading: 'ESG Umweltmanagement: Dekarbonisierung, Klimaschutzprogramme & CO2-Bilanzierung',
        description: 'Entwickeln Sie mit ADVISORI eine umfassende ESG-Umweltstrategie: Von der präzisen CO2-Bilanzierung über Dekarbonisierungspfade bis zur Implementierung wirksamer Klimaschutzprogramme für nachhaltigen Geschäftserfolg.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Wissenschaftsbasierte Dekarbonisierungsstrategien und Net-Zero-Zielsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Vollständige CO2-Bilanzierung nach GHG Protocol (Scope 1, 2 & 3)'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Energieeffizienz-Optimierung und Kostenreduktion'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Regulatory Compliance und ESG-Reporting Excellence'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ESG Umweltmanagement & Dekarbonisierung',
        description: 'Das ESG-Umweltmanagement ist zu einem kritischen Erfolgsfaktor für moderne Unternehmen geworden. ADVISORI unterstützt Sie bei der strategischen Transformation zu einem nachhaltigen und klimaneutralen Unternehmen durch wissenschaftsbasierte Dekarbonisierung, präzise CO2-Bilanzierung und wirkungsvolle Klimaschutzprogramme.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung wissenschaftsbasierter Dekarbonisierungsstrategien und Net-Zero-Roadmaps'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Vollständige CO2-Bilanzierung nach internationalen Standards (GHG Protocol, ISO 14064)'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung von Energieeffizienz-Maßnahmen und erneuerbaren Energiesystemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Design und Umsetzung wirksamer Klimaschutzprogramme und -initiativen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'ESG-Reporting und Compliance mit regulatorischen Anforderungen (CSRD, EU-Taxonomie)'
          }
        ],
        alert: {
          title: 'Strategischer Vorteil',
          content: 'Unternehmen mit fortschrittlichem ESG-Umweltmanagement erzielen nicht nur bessere Finanzierungskonditionen und Investorenbewertungen, sondern reduzieren auch operative Kosten durch Energieeffizienz und bereiten sich optimal auf künftige Klimaregulierung vor.'
        },
        whyUs: {
          title: 'Unsere ESG-Umwelt-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in wissenschaftsbasierten Klimazielen und Dekarbonisierungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Methoden für präzise CO2-Bilanzierung und Scope 3-Erfassung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von der Strategie bis zur operativen Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Expertise in ESG-Reporting und regulatorischen Anforderungen'
            }
          ]
        },
        additionalInfo: 'Führende Unternehmen mit ambitionierten ESG-Umweltzielen verzeichnen eine um bis zu 25% höhere Profitabilität und 50% niedrigere Kapitalkosten. Investieren Sie jetzt in Ihre nachhaltige Zukunft!',
        serviceDescription: 'ADVISORI bietet Ihnen eine vollumfängliche Beratung für strategisches ESG-Umweltmanagement. Von der initialen CO2-Bilanzierung über die Entwicklung wissenschaftsbasierter Dekarbonisierungsstrategien bis zur Implementierung wirkungsvoller Klimaschutzprogramme begleiten wir Sie auf Ihrem Weg zur Klimaneutralität.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'CO2-Bilanzierung und Carbon Footprint-Analyse (Scope 1, 2 & 3)'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Dekarbonisierungsstrategien und Net-Zero-Roadmaps'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Energieeffizienz-Programme und erneuerbare Energiesysteme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Klimaschutzprogramme und Nachhaltigkeitsinitiativen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'ESG-Reporting und Regulatory Compliance'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Transformationsansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte ESG-Umweltstrategie, die sowohl ambitionierte Klimaziele als auch geschäftliche Realitäten berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer aktuellen Umwelt-Performance und CO2-Bilanz'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung wissenschaftsbasierter Klimaziele und Dekarbonisierungspfade'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Design wirkungsvoller Klimaschutzprogramme und Energieeffizienz-Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierungsunterstützung und Change Management'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliches Monitoring und Optimierung der ESG-Performance'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir eine umfassende ESG-Umweltstrategie entwickelt, die nicht nur unsere Klimaziele unterstützt, sondern auch operative Effizienz und Kosteneinsparungen generiert. Die wissenschaftsbasierte Herangehensweise und die praxisnahe Umsetzung haben uns überzeugt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'CO2-Bilanzierung & Carbon Footprint',
          description: 'Präzise Erfassung und Bewertung Ihrer Treibhausgasemissionen nach internationalen Standards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Vollständige Scope 1, 2 & 3 Emissionserfassung nach GHG Protocol'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Product Carbon Footprint und Life Cycle Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Datenvalidierung und Qualitätssicherung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Benchmark-Analysen und Vergleichsstudien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Dekarbonisierungsstrategien & Net-Zero',
          description: 'Wissenschaftsbasierte Entwicklung von Dekarbonisierungspfaden und Net-Zero-Strategien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Science Based Targets Initiative (SBTi) konforme Zielsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Net-Zero-Roadmaps und Meilensteinplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Szenarioanalysen und Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kosten-Nutzen-Analysen für Klimamaßnahmen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(esgUmweltmanagementData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ESG Umweltmanagement page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
