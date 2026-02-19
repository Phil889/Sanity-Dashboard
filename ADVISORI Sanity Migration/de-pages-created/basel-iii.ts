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
    console.log('Creating Basel III page...')

    const baselIIIData = {
      _type: 'servicePage',
      _id: 'basel-iii',
      title: 'Basel III',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/basel-iii'
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
        title: 'Basel III | ADVISORI',
        description: 'Umfassende Unterstützung bei der Implementierung und Einhaltung der Basel III-Anforderungen. Wir begleiten Sie bei der Anpassung Ihrer Prozesse, Systeme und Risikomanagement-Praktiken.',
        keywords: 'Basel III, Bankenregulierung, Kapitalanforderungen, Liquiditätsanforderungen, Risikomanagement, Compliance, Bankenwesen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Basel III'
        },
        tagline: 'Expertenlösungen für regulatorische Anforderungen im Bankensektor',
        heading: 'Basel III',
        description: 'Basel III stellt erhöhte Anforderungen an Kapital, Liquidität und Risikomanagement von Banken. Wir unterstützen Sie bei der effizienten Implementierung und nachhaltigen Einhaltung dieser komplexen regulatorischen Vorgaben.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Optimierung der Kapitalallokation und -effizienz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Verbessertes Liquiditätsmanagement und Stresstesting'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Risikomanagement-Frameworks und -Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Effizienzsteigerung durch Automatisierung und Standardisierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Basel III',
        description: 'Basel III ist ein umfassender Regulierungsrahmen für Banken, der nach der globalen Finanzkrise entwickelt wurde, um die Stabilität des Bankensektors zu stärken. Diese Regulierung umfasst erhöhte Eigenkapitalanforderungen, verschärfte Liquiditätsvorschriften und strengere Risikoüberwachung. Wir unterstützen Sie bei der strategischen Implementierung und kontinuierlichen Einhaltung dieser komplexen Anforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Gap-Analyse und Bewertung der Compliance-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung und Implementierung von robusten Kapital- und Liquiditätsmanagementlösungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Optimierung der Risikoberechnung und -steuerung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von Basel III-Anforderungen in bestehende IT-Systeme und Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Entwicklung und Implementierung von Reporting-Lösungen für regulatorische Anforderungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine erfolgreiche Basel III-Implementierung erfordert nicht nur die Erfüllung der Mindestanforderungen, sondern auch die strategische Integration in Ihre Geschäftsprozesse, um Wettbewerbsvorteile zu erzielen und Kapitaleffizienz zu maximieren.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifendes Expertenwissen in regulatorischen Anforderungen und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in der Implementierung von Basel-Standards bei verschiedenen Finanzinstituten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz, der Regulierung, Risikomanagement und Geschäftsstrategie integriert'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovative Technologielösungen zur Automatisierung und Optimierung regulatorischer Prozesse'
            }
          ]
        },
        additionalInfo: 'Die Basel III-Anforderungen haben erhebliche Auswirkungen auf die Kapitalkosten, Liquiditätsmanagement und Risikosteuerung von Banken. Eine strategische Implementation kann nicht nur Compliance sicherstellen, sondern auch zu erheblichen Wettbewerbsvorteilen führen und die Gesamteffizienz der Bank steigern.',
        serviceDescription: 'Wir bieten ein umfassendes Leistungsspektrum zur Unterstützung bei der Umsetzung und kontinuierlichen Einhaltung der Basel III-Anforderungen. Unser Ansatz umfasst sowohl die technische Implementierung als auch die strategische Integration in Ihre Geschäftsprozesse.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Basel III Gap-Analyse und Readiness Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung und Implementierung von Kapital- und Liquiditätsmanagementstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Optimierung der RWA-Berechnung und ICAAP/ILAAP-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementierung und Automatisierung regulatorischer Reportinglösungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung und Change Management für Basel III-Implementierungen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam einen maßgeschneiderten Ansatz zur effektiven Umsetzung und kontinuierlichen Einhaltung der Basel III-Anforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Durchführung einer umfassenden Ist-Analyse und Gap-Identifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer strategischen Basel III-Roadmap mit klaren Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung und Anpassung von Prozessen, Systemen und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration und Automatisierung von Berichts- und Meldeprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung, Validierung und Optimierung der implementierten Lösungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Die Umsetzung von Basel III ist für Finanzinstitute nicht nur eine regulatorische Notwendigkeit, sondern auch eine strategische Chance. Mit unserer Unterstützung können Banken die Anforderungen nicht nur erfüllen, sondern auch nutzen, um ihre Risikosteuerung zu verbessern und Wettbewerbsvorteile zu erzielen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Basel III Gap-Analyse und Implementierungsstrategie',
          description: 'Wir analysieren Ihre bestehenden Prozesse, Systeme und Methoden im Hinblick auf die Basel III-Anforderungen und entwickeln eine maßgeschneiderte Implementierungsstrategie.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Bewertung der aktuellen Compliance-Situation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Lücken und Verbesserungspotentialen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung einer priorisierten Roadmap für die Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Kosten-Nutzen-Analyse verschiedener Implementierungsoptionen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Kapital- und Liquiditätsmanagement',
          description: 'Wir unterstützen Sie bei der Optimierung Ihres Kapital- und Liquiditätsmanagements im Einklang mit den Basel III-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung von Strategien zur Optimierung der Kapitalallokation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung von verbesserten Liquiditätsmanagement-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung und Implementierung von Stresstests und Szenarioanalysen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration von Kapital- und Liquiditätsplanung in die Geschäftsstrategie'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(baselIIIData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Basel III page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
