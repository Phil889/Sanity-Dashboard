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
    console.log('Creating CRA Richtlinie page...')

    const craRichtlinieData = {
      _type: 'servicePage',
      _id: 'cra-richtlinie',
      title: 'CRA Richtlinie',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-richtlinie'
      },
      parent: {
        _type: 'reference',
        _ref: 'cra-cyber-resilience-act'
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
        title: 'CRA Richtlinie Implementation | ADVISORI',
        description: 'Professionelle CRA Richtlinie Implementierung und strategische Compliance-Beratung. Wir unterstützen Sie bei der systematischen Umsetzung der EU Cyber Resilience Act Richtlinie für nachhaltige Cybersicherheit.',
        keywords: 'CRA Richtlinie, Cyber Resilience Act Directive, CRA Compliance, Cybersicherheits-Richtlinie, EU-Verordnung, Digitale Produktsicherheit, Regulatory Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Richtlinie Implementation'
        },
        tagline: 'Strategische CRA Richtlinie Implementierung',
        heading: 'CRA Richtlinie',
        description: 'Die CRA Richtlinie definiert den strategischen Rahmen für die Umsetzung der EU Cyber Resilience Act. Wir begleiten Sie bei der systematischen Implementierung und nachhaltigen Integration in Ihre Unternehmensstrukturen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische CRA Richtlinie Implementierungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Systematische Organisationstransformation für CRA-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Governance-Strukturen und Kontrollmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Compliance-Überwachung und Optimierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRA Richtlinie Implementierung',
        description: 'Die CRA Richtlinie bildet das strategische Fundament für die erfolgreiche Umsetzung der EU Cyber Resilience Act. Eine strukturierte Implementierung erfordert ganzheitliche Organisationstransformation, strategische Planung und nachhaltige Governance-Strukturen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Analyse und CRA-Readiness Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Organisatorische Transformation und Change Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Governance-Framework und Kontrollstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Risikomanagement und Compliance-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Verbesserung und Anpassung'
          }
        ],
        alert: {
          title: 'Strategischer Hinweis',
          content: 'Die CRA Richtlinie Implementierung erfordert eine ganzheitliche Betrachtung von strategischen, organisatorischen und technischen Aspekten. Eine frühzeitige und systematische Herangehensweise ist entscheidend für nachhaltigen Compliance-Erfolg.'
        },
        whyUs: {
          title: 'Unsere CRA Richtlinie Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung in strategischer Compliance-Transformation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodiken für Organisationsentwicklung und Change Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integrierter Ansatz von Strategie bis operative Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung und nachhaltige Optimierung'
            }
          ]
        },
        additionalInfo: 'Die CRA Richtlinie Implementierung betrifft alle Ebenen der Organisation und erfordert eine enge Zusammenarbeit zwischen Geschäftsführung, Compliance-Teams, IT-Abteilungen und operativen Bereichen.',
        serviceDescription: 'Wir unterstützen Sie bei der vollständigen CRA Richtlinie Implementierung, von der strategischen Planung über die organisatorische Transformation bis zur nachhaltigen Compliance-Sicherstellung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'CRA Richtlinie Strategieentwicklung und Roadmap-Planung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Organisatorische Transformation und Governance-Aufbau'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Risikomanagement und Compliance-Framework'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Change Management und Mitarbeiterqualifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Überwachung und Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser CRA Richtlinie Implementierungsansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte CRA Richtlinie Implementierungsstrategie, die regulatorische Anforderungen mit strategischen Geschäftszielen und organisatorischen Gegebenheiten optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Organisationsanalyse und Strategieentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strukturierte Transformationsplanung und Change Management'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Aufbau robuster Governance- und Kontrollstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende Geschäfts- und IT-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und strategische Anpassung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die strategische Implementierung der CRA Richtlinie geht weit über reine Compliance hinaus - sie schafft die Grundlage für eine zukunftsfähige, cybersichere Unternehmensführung. Unsere Kunden profitieren von einem ganzheitlichen Transformationsansatz, der nicht nur regulatorische Anforderungen erfüllt, sondern auch nachhaltigen Geschäftswert und Wettbewerbsvorteile generiert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'CRA Richtlinie Strategieentwicklung',
          description: 'Entwicklung einer umfassenden Strategie zur systematischen Implementierung der CRA Richtlinie in Ihre Organisationsstrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strategische Analyse und Zielsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Organisatorische Readiness-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Implementierungs-Roadmap mit Meilensteinen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Ressourcenplanung und Budgetierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Organisatorische Transformation',
          description: 'Systematische Transformation Ihrer Organisation zur nachhaltigen CRA-Compliance durch strukturierte Change Management Prozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Governance-Strukturen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Prozessoptimierung und -integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Mitarbeiterqualifizierung und Awareness'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Verbesserungsprozesse'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craRichtlinieData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Richtlinie page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
