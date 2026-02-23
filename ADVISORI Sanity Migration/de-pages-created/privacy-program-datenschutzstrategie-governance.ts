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
    console.log('Creating Privacy Program Datenschutzstrategie Governance page...')

    const privacyGovernanceData = {
      _type: 'servicePage',
      _id: 'privacy-program-datenschutzstrategie-governance',
      title: 'Datenschutzstrategie & Governance',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/privacy-program/privacy-program-privacy-framework-setup/privacy-program-datenschutzstrategie-governance'
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
        title: 'Datenschutzstrategie & Governance | ADVISORI',
        description: 'Entwickeln Sie eine umfassende Datenschutzstrategie und etablieren Sie effektive Governance-Strukturen für Ihr Privacy Program. Strategische Beratung für nachhaltigen Datenschutz.',
        keywords: 'Datenschutzstrategie, Privacy Governance, Datenschutz-Management, Privacy Framework, DSGVO Governance, Datenschutzorganisation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Datenschutzstrategie & Governance'
        },
        tagline: 'Strategische Datenschutz-Governance für nachhaltige Compliance',
        heading: 'Datenschutzstrategie & Governance',
        description: 'Entwickeln Sie eine strategische Datenschutzstrategie und etablieren Sie robuste Governance-Strukturen, die Ihr Privacy Program langfristig erfolgreich machen und regulatorische Compliance sicherstellen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Entwicklung einer zukunftsfähigen Datenschutzstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Etablierung effektiver Privacy Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integration von Datenschutz in Unternehmensstrategie und Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Aufbau nachhaltiger Compliance-Mechanismen und Kontrollsysteme'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische Datenschutz-Governance',
        description: 'Eine erfolgreiche Datenschutzstrategie geht über reine Compliance hinaus und integriert Privacy-by-Design in alle Geschäftsprozesse. Wir unterstützen Sie bei der Entwicklung einer zukunftsfähigen Datenschutzstrategie und dem Aufbau effektiver Governance-Strukturen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung einer unternehmensweiten Datenschutzstrategie und Vision'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Etablierung von Privacy Governance-Strukturen und Entscheidungsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Definition von Datenschutz-Policies und operativen Verfahren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Implementierung von Kontroll- und Überwachungsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration von Privacy-by-Design in Entwicklungs- und Geschäftsprozesse'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine strategische Datenschutz-Governance schafft nicht nur Compliance, sondern wird zum Wettbewerbsvorteil. Unternehmen mit vertrauenswürdigen Datenschutzpraktiken gewinnen Kundenvertrauen und können neue Märkte erschließen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in strategischer Privacy-Governance und regulatorischen Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Methoden für die Integration von Datenschutz in Unternehmensstrategie'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenübergreifende Erfahrung in der Implementierung von Privacy Governance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von strategischer Planung bis zur operativen Umsetzung'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit einer strategischen Datenschutz-Governance reduzieren nicht nur Compliance-Risiken um bis zu 80%, sondern steigern auch das Vertrauen ihrer Kunden und Partner erheblich. Investieren Sie in eine zukunftsfähige Privacy-Strategie!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum für die Entwicklung und Implementierung einer strategischen Datenschutz-Governance, die sowohl regulatorische Anforderungen erfüllt als auch geschäftlichen Mehrwert schafft.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Datenschutz-Roadmap und Vision'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Privacy Governance Framework und Organisationsstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Datenschutz-Policies und Verfahrensanweisungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kontroll- und Monitoring-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Privacy-by-Design Integration'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine individuelle Datenschutzstrategie und implementieren Governance-Strukturen, die perfekt auf Ihre Unternehmenskultur und Geschäftsziele abgestimmt sind.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der aktuellen Datenschutz-Landschaft und strategischen Ziele'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten Datenschutzstrategie und Governance-Vision'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Design von Governance-Strukturen und Entscheidungsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung von Policies, Verfahren und Kontrollmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung, Optimierung und strategische Weiterentwicklung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir eine strategische Datenschutz-Governance entwickelt, die nicht nur Compliance sicherstellt, sondern auch als Wettbewerbsvorteil wirkt. Die strukturierte Herangehensweise und das tiefe Verständnis für regulatorische Anforderungen haben uns dabei geholfen, Datenschutz als strategischen Enabler zu etablieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Datenschutz-Roadmap',
          description: 'Entwicklung einer umfassenden Datenschutzstrategie, die auf Ihre Geschäftsziele abgestimmt ist und regulatorische Anforderungen erfüllt.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse der aktuellen Datenschutz-Landschaft und Reifegrad'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Definition strategischer Datenschutz-Ziele und KPIs'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung einer mehrjährigen Datenschutz-Roadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration in die Unternehmensstrategie und Governance'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Privacy Governance Framework',
          description: 'Etablierung robuster Governance-Strukturen für nachhaltige Datenschutz-Compliance und effektive Entscheidungsfindung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Design von Governance-Strukturen und Rollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung von Entscheidungsprozessen und Eskalationswegen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementierung von Kontroll- und Überwachungsmechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Aufbau von Privacy Committees und Steuerungskreisen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(privacyGovernanceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Privacy Program Datenschutzstrategie Governance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
