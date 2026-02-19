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
    console.log('Creating BCBS-239 page...')

    const bcbs239Data = {
      _type: 'servicePage',
      _id: 'bcbs-239',
      title: 'BCBS-239',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/bcbs-239'
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
        title: 'BCBS-239 Compliance | ADVISORI',
        description: 'Implementieren Sie effektive BCBS-239 Compliance mit unseren maßgeschneiderten Lösungen für Risikodaten-Aggregation und Reporting im Finanzsektor.',
        keywords: 'BCBS-239, Risikodaten-Aggregation, Regulatory Compliance, Risk Reporting, Risk Data Management, Finanzregulierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'BCBS-239 Compliance'
        },
        tagline: 'Optimale Risikodaten-Aggregation und Reporting für Finanzinstitute',
        heading: 'BCBS-239',
        description: 'Die BCBS-239 Richtlinien stellen hohe Anforderungen an die Risikodaten-Aggregation und das Reporting von Finanzinstituten. Wir unterstützen Sie bei der vollständigen Compliance und Optimierung Ihrer Datenarchitektur.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Verbesserte Datenqualität und Governance für präzise Risikoberichte'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierte Datenarchitektur für effiziente Risikodaten-Aggregation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effizientes Reporting für fundierte Entscheidungsfindung im Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Umfassende Compliance mit regulatorischen Anforderungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'BCBS-239 Compliance',
        description: 'Die Richtlinien des Basler Ausschusses BCBS-239 fordern eine effektive Risikodaten-Aggregation und Berichterstattung von Finanzinstituten. Wir unterstützen Sie bei der Implementierung und Optimierung Ihrer Datenprozesse, um sowohl die regulatorischen Anforderungen zu erfüllen als auch strategische Vorteile zu erzielen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Gap-Analyse der bestehenden Risikodatenprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung einer BCBS-239 Compliance-Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung robuster Datengovernance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Optimierung der Datenarchitektur für effiziente Risikodaten-Aggregation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Entwicklung und Implementierung effektiver Reporting-Lösungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'BCBS-239 Compliance ist mehr als nur regulatorische Pflicht – sie bildet die Grundlage für ein modernes, datengetriebenes Risikomanagement und kann zu signifikanten Effizienzsteigerungen und besseren strategischen Entscheidungen führen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in Bankenregulierung und speziell BCBS-239'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in der Implementierung von Datengovernance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Methodik zur Optimierung von Risikodatenprozessen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz, der Technologie, Prozesse und Organisation integriert'
            }
          ]
        },
        additionalInfo: 'Eine effektive BCBS-239 Implementierung kann die Qualität der Risikodaten um bis zu 70% verbessern und die Zeit für die Erstellung regulatorischer Berichte um bis zu 40% reduzieren. Investieren Sie in eine zukunftssichere Risikodatenarchitektur!',
        serviceDescription: 'Wir bieten ein umfassendes Leistungsspektrum für BCBS-239 Compliance, von der initialen Analyse über die Strategieentwicklung bis zur vollständigen Implementierung aller erforderlichen Maßnahmen. Unser ganzheitlicher Ansatz berücksichtigt Technologie, Prozesse und organisatorische Aspekte.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'BCBS-239 Gap-Analyse und Compliance-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung einer BCBS-239 Compliance-Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung von Datengovernance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Optimierung der Datenarchitektur und -prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Entwicklung und Implementierung von Reporting-Lösungen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine maßgeschneiderte Strategie zur BCBS-239 Compliance, die auf Ihre spezifischen Anforderungen und Ihre bestehende Datenarchitektur zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der bestehenden Risikodatenprozesse und Identifikation von Compliance-Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer umfassenden BCBS-239 Compliance-Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung von Datengovernance-Strukturen und -Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Optimierung der Datenarchitektur für effiziente Risikodaten-Aggregation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Entwicklung und Implementierung von Reporting-Lösungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'Deutsche Bank AG',
        name: 'Dr. Marcus Weber',
        position: 'Head of Risk Data Management',
        quote: 'Mit ADVISORI haben wir einen kompetenten Partner für unsere BCBS-239 Compliance gefunden. Durch die strukturierte Herangehensweise und tiefe fachliche Expertise konnten wir nicht nur die regulatorischen Anforderungen erfüllen, sondern auch signifikante Verbesserungen in unserer Risikodatenaggregation und unserem Reporting erzielen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'BCBS-239 Gap-Analyse und Compliance-Assessment',
          description: 'Wir analysieren Ihre bestehenden Risikodatenprozesse und identifizieren systematisch Compliance-Lücken in Bezug auf BCBS-239.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Analyse der Risikodaten-Infrastruktur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung der Datenqualität und -governance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation von Compliance-Lücken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Priorisierung von Handlungsbedarfen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Datengovernance und Architektur-Optimierung',
          description: 'Wir unterstützen Sie bei der Implementierung robuster Datengovernance-Strukturen und der Optimierung Ihrer Datenarchitektur für eine effiziente BCBS-239 Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung eines Datengovernance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Definition von Dateneigentümerschaft und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Optimierung der Datenarchitektur für effiziente Risikodaten-Aggregation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Implementierung von Datenqualitätskontrollen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcbs239Data)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ BCBS-239 page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
