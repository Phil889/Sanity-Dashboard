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
    console.log('Creating CRA Cyber Resilience Act page...')

    const craData = {
      _type: 'servicePage',
      _id: 'cra-cyber-resilience-act',
      title: 'CRA Cyber Resilience Act',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act'
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
        title: 'CRA Cyber Resilience Act | ADVISORI',
        description: 'Umfassende Beratung zur EU Cyber Resilience Act (CRA) Compliance. Wir unterstützen Sie bei der Implementierung von Cybersicherheitsstandards und der Erfüllung regulatorischer Anforderungen für digitale Produkte.',
        keywords: 'CRA, Cyber Resilience Act, Cybersicherheit, EU-Verordnung, Compliance, Digitale Produkte, CE-Kennzeichnung, Risikoanalyse'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Cyber Resilience Act'
        },
        tagline: 'Strategische Compliance-Lösungen für die EU Cyber Resilience Act',
        heading: 'CRA Cyber Resilience Act',
        description: 'Die EU Cyber Resilience Act revolutioniert die Cybersicherheitsanforderungen für digitale Produkte. Wir begleiten Sie bei der vollständigen Compliance-Umsetzung und strategischen Integration in Ihre Produktentwicklungsprozesse.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige CRA-Compliance für alle digitalen Produkte'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Integrierte Cybersicherheit im Produktlebenszyklus'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Risikominimierung und Marktfähigkeit von Produkten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Automatisierte Compliance-Monitoring und -Reporting'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRA Cyber Resilience Act',
        description: 'Die EU Cyber Resilience Act (CRA) etabliert verbindliche Cybersicherheitsanforderungen für Produkte mit digitalen Elementen, die im EU-Markt vertrieben werden. Diese wegweisende Verordnung transformiert die Art, wie Unternehmen Cybersicherheit in ihre Produktentwicklung und -vermarktung integrieren müssen. Wir unterstützen Sie bei der strategischen Umsetzung und nachhaltigen Compliance.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende CRA-Readiness-Analyse und Gap-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung und Implementierung von Security-by-Design-Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Aufbau robuster Cybersicherheits-Managementsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von CRA-Anforderungen in bestehende Entwicklungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Monitoring- und Incident-Response-Systeme'
          }
        ],
        alert: {
          title: 'Wichtiger Hinweis',
          content: 'Die CRA tritt schrittweise ab 2025 in Kraft und betrifft alle Unternehmen, die Produkte mit digitalen Elementen in der EU vermarkten. Eine frühzeitige Vorbereitung ist entscheidend für die rechtzeitige Compliance und Marktfähigkeit Ihrer Produkte.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in EU-Cybersicherheitsrecht und technischen Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in der Implementierung von Cybersicherheits-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von Strategie bis zur operativen Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovative Technologielösungen für automatisierte Compliance-Prozesse'
            }
          ]
        },
        additionalInfo: 'Die CRA stellt eine der bedeutendsten Veränderungen im EU-Cybersicherheitsrecht dar und betrifft Millionen von Produkten. Eine strategische Herangehensweise kann nicht nur Compliance sicherstellen, sondern auch Wettbewerbsvorteile durch erhöhtes Kundenvertrauen und Marktdifferenzierung schaffen.',
        serviceDescription: 'Wir bieten eine umfassende Palette von Dienstleistungen zur Unterstützung bei der CRA-Compliance. Unser Ansatz kombiniert regulatorische Expertise mit praktischer Umsetzungserfahrung und technologischen Innovationen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'CRA-Gap-Analyse und Compliance-Strategie'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Security-by-Design-Implementation und Produkthärtung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung von Cybersicherheits-Dokumentationen und -Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Aufbau von Vulnerability-Management und Incident-Response-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulungen und Change Management für CRA-Compliance'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen einen maßgeschneiderten Ansatz zur effizienten und nachhaltigen CRA-Compliance, der sowohl regulatorische Anforderungen erfüllt als auch Ihre Geschäftsziele unterstützt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Detaillierte Analyse Ihrer Produktportfolios und CRA-Anwendbarkeit'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer priorisierten CRA-Compliance-Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementation von Security-by-Design in Entwicklungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Aufbau automatisierter Monitoring- und Reporting-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung an regulatorische Entwicklungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Die EU Cyber Resilience Act markiert einen Wendepunkt in der Produktsicherheit. Unternehmen, die jetzt proaktiv handeln und Cybersicherheit strategisch in ihre Produktentwicklung integrieren, werden nicht nur Compliance erreichen, sondern auch erhebliche Wettbewerbsvorteile erzielen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'CRA-Readiness und Compliance-Strategie',
          description: 'Wir analysieren Ihre Produktportfolios und entwickeln eine umfassende Strategie zur effizienten CRA-Compliance-Umsetzung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Produktklassifizierung und CRA-Anwendbarkeitsanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Gap-Assessment bestehender Cybersicherheitsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung einer priorisierten Compliance-Roadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Kosten-Nutzen-Analyse verschiedener Umsetzungsoptionen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Security-by-Design Implementation',
          description: 'Wir integrieren Cybersicherheit systematisch in Ihre Produktentwicklungsprozesse und schaffen robuste Sicherheitsarchitekturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung von Security-by-Design-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration von Threat Modeling in Entwicklungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Aufbau automatisierter Security-Testing-Pipelines'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Implementierung kontinuierlicher Vulnerability-Assessments'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Cyber Resilience Act page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
