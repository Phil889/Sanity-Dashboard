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
    console.log('Creating ESG Strategie & Governance page...')

    const esgStrategieGovernanceData = {
      _type: 'servicePage',
      _id: 'esg-strategie-governance-leitbildentwicklung-stakeholder-dialog-verankerung-in-unternehmenszielen',
      title: 'ESG Strategie & Governance: Leitbildentwicklung, Stakeholder-Dialog & Verankerung in Unternehmenszielen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/esg/esg-strategie-governance-leitbildentwicklung-stakeholder-dialog-verankerung-in-unternehmenszielen'
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
        title: 'ESG Strategie & Governance | ADVISORI',
        description: 'Entwicklung nachhaltiger ESG-Strategien und Governance-Strukturen. Wir unterstützen bei Leitbildentwicklung, Stakeholder-Dialog und strategischer Verankerung von ESG-Zielen.',
        keywords: 'ESG Strategie, Nachhaltigkeits-Governance, Leitbildentwicklung, Stakeholder-Dialog, ESG-Ziele, Nachhaltigkeit, Corporate Governance, ESG-Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ESG Strategie & Governance'
        },
        tagline: 'Strategische ESG-Transformation für nachhaltige Unternehmensführung',
        heading: 'ESG Strategie & Governance: Leitbildentwicklung, Stakeholder-Dialog & Verankerung in Unternehmenszielen',
        description: 'Eine fundierte ESG-Strategie und -Governance ist entscheidend für den langfristigen Erfolg und die gesellschaftliche Akzeptanz Ihres Unternehmens. Wir begleiten Sie bei der Entwicklung und Implementierung einer ganzheitlichen ESG-Strategie.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische ESG-Roadmap mit klaren Zielen und Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Effektive Stakeholder-Engagement-Programme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integration von ESG-Aspekten in Geschäftsstrategie und -prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Robuste Governance-Strukturen für nachhaltige Transformation'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ESG Strategie & Governance: Leitbildentwicklung, Stakeholder-Dialog & Verankerung in Unternehmenszielen',
        description: 'ESG (Environmental, Social, Governance) ist längst kein Nischenthema mehr, sondern ein zentraler Erfolgsfaktor für Unternehmen aller Branchen. Eine strategische ESG-Transformation erfordert mehr als nur Compliance – sie benötigt eine ganzheitliche Integration von Nachhaltigkeitsaspekten in die Unternehmensführung, von der Leitbildentwicklung über den Stakeholder-Dialog bis hin zur Verankerung in den Unternehmenszielen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung einer umfassenden ESG-Strategie und -Vision'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Aufbau effektiver Governance-Strukturen für ESG-Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung strukturierter Stakeholder-Engagement-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von ESG-Zielen in Unternehmensstrategie und KPIs'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Entwicklung von ESG-Leitbildern und Verhaltenskodizes'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine erfolgreiche ESG-Strategie beginnt mit dem Commitment der Führungsebene und erfordert die Integration in alle Geschäftsbereiche. Nur so können nachhaltige Werte geschaffen und langfristige Wettbewerbsvorteile erzielt werden.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in ESG-Strategieentwicklung und -implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für effektives Stakeholder-Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von der Strategieentwicklung bis zur operativen Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenübergreifende Erfahrung in verschiedenen ESG-Kontexten'
            }
          ]
        },
        additionalInfo: 'ESG-Strategien müssen authentisch, messbar und nachvollziehbar sein. Wir helfen Ihnen dabei, eine ESG-Strategie zu entwickeln, die nicht nur regulatorische Anforderungen erfüllt, sondern auch echte Wertschöpfung für alle Stakeholder generiert.',
        serviceDescription: 'Unser umfassendes Leistungsspektrum begleitet Sie durch alle Phasen der ESG-Strategieentwicklung und -implementierung. Von der initialen Analyse über die Strategieentwicklung bis hin zur operativen Umsetzung und kontinuierlichen Verbesserung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'ESG-Materialitätsanalyse und Strategieentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Aufbau von ESG-Governance-Strukturen und -Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Stakeholder-Mapping und Engagement-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration von ESG-Zielen in Unternehmenssteuerung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Change Management und Kulturwandel für Nachhaltigkeit'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine maßgeschneiderte ESG-Strategie, die authentisch zu Ihrem Unternehmen passt und nachhaltigen Wert schafft.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende ESG-Ist-Analyse und Materialitätsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer integrierten ESG-Vision und -Strategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Aufbau von Governance-Strukturen und Stakeholder-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementation und Integration in bestehende Unternehmensprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung, Messung und Optimierung der ESG-Performance'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Eine erfolgreiche ESG-Transformation ist ein strategischer Imperativ für zukunftsfähige Unternehmen. Mit unserem ganzheitlichen Ansatz helfen wir Unternehmen dabei, nachhaltige Werte zu schaffen und gleichzeitig ihre Wettbewerbsfähigkeit zu stärken.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ESG-Strategieentwicklung und Leitbildgestaltung',
          description: 'Wir unterstützen Sie bei der Entwicklung einer authentischen und wirkungsvollen ESG-Strategie, die fest in Ihrer Unternehmensidentität verankert ist.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Materialitätsanalyse zur Identifikation relevanter ESG-Themen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung von ESG-Vision, -Mission und -Werten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Strategische Roadmap mit konkreten Zielen und Meilensteinen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration in bestehende Unternehmensstrategie'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Stakeholder-Engagement und Governance-Aufbau',
          description: 'Wir helfen Ihnen beim Aufbau effektiver Stakeholder-Beziehungen und robusten Governance-Strukturen für Ihr ESG-Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Stakeholder-Mapping und -Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung von Engagement-Strategien und -Formaten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Aufbau von ESG-Governance-Strukturen und -Komitees'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Implementierung von ESG-Monitoring und -Reporting'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(esgStrategieGovernanceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ESG Strategie & Governance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
