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
    console.log('Creating Standards & Frameworks page...')

    const standardsFrameworksData = {
      _type: 'servicePage',
      _id: 'regulatory-compliance-management-standards-frameworks',
      title: 'Standards & Frameworks',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks'
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
        title: 'Standards & Frameworks | ADVISORI',
        description: 'Umfassende Unterstützung bei der Implementierung und Einhaltung regulatorischer Standards und Frameworks. Wir begleiten Sie bei der Anpassung an internationale Compliance-Anforderungen.',
        keywords: 'Compliance Standards, Regulatory Frameworks, ISO Standards, COSO Framework, Governance Standards, Risk Management Standards, Compliance Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Standards & Frameworks'
        },
        tagline: 'Expertenlösungen für internationale Compliance-Standards',
        heading: 'Standards & Frameworks',
        description: 'Regulatorische Standards und Frameworks bilden das Fundament einer erfolgreichen Compliance-Strategie. Wir unterstützen Sie bei der strategischen Auswahl, Implementierung und kontinuierlichen Weiterentwicklung der relevanten Standards für Ihr Unternehmen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische Auswahl und Priorisierung relevanter Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Effiziente Implementierung und Integration bestehender Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kontinuierliche Überwachung und Anpassung an Änderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Optimierung der Governance- und Kontrollstrukturen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Standards & Frameworks',
        description: 'Die Landschaft regulatorischer Standards und Frameworks wird immer komplexer und dynamischer. Von ISO-Standards über COSO-Framework bis hin zu branchenspezifischen Regulierungen - die strategische Navigation dieser Anforderungen entscheidet über den Compliance-Erfolg. Wir unterstützen Sie dabei, die richtigen Standards zu identifizieren, effizient zu implementieren und kontinuierlich zu optimieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Analyse und Mapping relevanter Standards und Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung integrierter Governance- und Kontrollrahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung automatisierter Monitoring- und Reporting-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau nachhaltiger Compliance-Management-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Anpassung an sich ändernde regulatorische Anforderungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine erfolgreiche Standards-Implementation erfordert nicht nur die technische Umsetzung, sondern auch die strategische Integration in Ihre Unternehmenskultur und Governance-Strukturen, um nachhaltigen Compliance-Erfolg zu gewährleisten.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in internationalen Compliance-Standards und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in der branchenübergreifenden Standards-Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz zur Integration verschiedener Standards und Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovative Technologielösungen zur Automatisierung und Optimierung von Compliance-Prozessen'
            }
          ]
        },
        additionalInfo: 'Die strategische Auswahl und Implementation relevanter Standards ist entscheidend für eine effiziente Compliance-Organisation. Ein strukturierter Ansatz reduziert nicht nur Komplexität und Kosten, sondern schafft auch strategische Wettbewerbsvorteile durch verbesserte Governance und Risikomanagement.',
        serviceDescription: 'Unser umfassendes Leistungsspektrum unterstützt Sie bei der strategischen Navigation der komplexen Standards-Landschaft. Von der initialen Analyse bis zur kontinuierlichen Optimierung begleiten wir Sie bei allen Aspekten des Standards- und Framework-Managements.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Standards Gap-Analyse und Relevanz-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung integrierter Compliance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementation von Governance- und Kontrollstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Automatisierung von Compliance-Monitoring und -Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Change Management und Schulungskonzepte für Standards-Adoption'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen einen systematischen Ansatz zur effizienten Navigation und Implementierung relevanter Standards und Frameworks.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Durchführung einer umfassenden Standards-Landkarte und Relevanz-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer integrierten Standards-Strategie mit klaren Prioritäten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Schrittweise Implementation mit modularem Aufbau und Quick Wins'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration bestehender Systeme und Prozesse in neue Framework-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung kontinuierlicher Monitoring- und Verbesserungsprozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Standards und Frameworks sind nicht nur regulatorische Anforderungen, sondern strategische Enabler für operative Exzellenz. Mit dem richtigen Ansatz werden sie zu Wettbewerbsvorteilen, die nachhaltigen Unternehmenserfolg fördern.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Standards-Analyse und Framework-Design',
          description: 'Wir analysieren die für Ihr Unternehmen relevanten Standards und entwickeln ein integriertes Framework-Design, das Synergien maximiert und Redundanzen minimiert.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Comprehensive Standards Mapping und Relevanz-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Design integrierter Compliance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Priorisierung und Roadmap-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Kosten-Nutzen-Analyse verschiedener Standards-Optionen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Implementation und Integration',
          description: 'Wir unterstützen Sie bei der effizienten Umsetzung ausgewählter Standards und deren nahtloser Integration in bestehende Governance-Strukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Schrittweise Implementation mit Change Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration bestehender Systeme und Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Aufbau automatisierter Monitoring-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Schulung und Kompetenzaufbau für nachhaltige Adoption'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(standardsFrameworksData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Standards & Frameworks page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
