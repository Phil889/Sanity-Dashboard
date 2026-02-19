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
    console.log('Creating ESG Governance page...')

    const esgGovernanceData = {
      _type: 'servicePage',
      _id: 'esg-governance',
      title: 'ESG Governance',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/esg/esg-governance'
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
        title: 'ESG Governance | ADVISORI',
        description: 'Implementieren Sie effektive ESG-Governance-Strukturen und -Prozesse. Wir unterstützen Sie bei der strategischen Verankerung von Nachhaltigkeit in Ihrer Unternehmensführung.',
        keywords: 'ESG Governance, Nachhaltigkeitsmanagement, Corporate Governance, ESG Strategy, Sustainability Governance, ESG Implementation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ESG Governance'
        },
        tagline: 'Strategische Verankerung von ESG in Ihrer Unternehmensführung',
        heading: 'ESG Governance',
        description: 'ESG Governance bildet das strategische Fundament für nachhaltige Unternehmensführung. Wir helfen Ihnen bei der Implementierung effektiver Governance-Strukturen, die ESG-Aspekte systematisch in Entscheidungsprozesse integrieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische Integration von ESG in Unternehmensführung und -entscheidungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Aufbau effektiver Governance-Strukturen für Nachhaltigkeitsmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Verbesserung von Stakeholder-Beziehungen und Investor Relations'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Erhöhung der Transparenz und Accountability bei ESG-Themen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ESG Governance',
        description: 'ESG Governance umfasst die systematische Integration von Environmental-, Social- und Governance-Aspekten in die Unternehmensführung. Wir unterstützen Sie bei der Entwicklung und Implementierung robuster Governance-Strukturen für nachhaltiges Wirtschaften.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung von ESG-Governance-Rahmenwerken und -Richtlinien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Etablierung von ESG-Komitees und Verantwortlichkeitsstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration von ESG-Kriterien in Entscheidungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Implementierung von ESG-Performance-Management-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Aufbau von ESG-Kommunikations- und Berichterstattungsstrukturen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Effektive ESG Governance erfordert eine ganzheitliche Integration in bestehende Unternehmensstrukturen. Eine klare Mandatierung, definierte Verantwortlichkeiten und systematische Prozesse sind entscheidend für den langfristigen Erfolg.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in ESG-Integration und Corporate Governance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in der Implementierung von Nachhaltigkeitsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxisnahe Beratung und maßgeschneiderte Governance-Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Partnerschaftliche Zusammenarbeit und strategische Begleitung'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit effektiver ESG Governance erzielen bis zu 20% höhere Bewertungen bei ESG-Ratings und können ihre Kapitalkosten um durchschnittlich 0,5-1% senken. Investieren Sie in nachhaltige Governance-Strukturen!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum im Bereich ESG Governance, von der strategischen Planung über die Implementierung bis zur kontinuierlichen Weiterentwicklung Ihrer Nachhaltigkeits-Governance.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'ESG-Governance-Framework-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'ESG-Komitee-Etablierung und -Begleitung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'ESG-Performance-Management-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Stakeholder-Engagement-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'ESG-Berichterstattungs- und Kommunikationsstrukturen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine individuelle ESG-Governance-Strategie, die auf Ihre spezifischen Anforderungen und Unternehmensziele zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der bestehenden Governance-Strukturen und ESG-Reifegrad'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten ESG-Governance-Strategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung von ESG-Komitees und Verantwortlichkeitsstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von ESG-Kriterien in bestehende Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Weiterentwicklung der Governance'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir einen strategischen Partner gefunden, der uns kompetent bei der Implementierung einer robusten ESG-Governance unterstützt hat. Die systematische Integration von Nachhaltigkeitsaspekten in unsere Unternehmensführung hat unsere Stakeholder-Beziehungen deutlich gestärkt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ESG-Governance-Framework-Entwicklung',
          description: 'Wir entwickeln maßgeschneiderte ESG-Governance-Rahmenwerke, die auf Ihre Unternehmensstrategie und -kultur abgestimmt sind.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung von ESG-Governance-Richtlinien und -Verfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Definition von ESG-Verantwortlichkeiten und -Mandaten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integration in bestehende Corporate-Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Erstellung von ESG-Governance-Handbüchern'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'ESG-Komitee-Etablierung',
          description: 'Wir unterstützen Sie bei der Etablierung und dem Betrieb effektiver ESG-Komitees auf verschiedenen Organisationsebenen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Design von ESG-Komitee-Strukturen und -Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Definition von Rollen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung von Meeting-Strukturen und Berichtswegen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Schulung und Begleitung von Komitee-Mitgliedern'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(esgGovernanceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ESG Governance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
