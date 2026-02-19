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
    console.log('Creating KI für Unternehmen page...')

    const kiFuerUnternehmenData = {
      _type: 'servicePage',
      _id: 'ki-fuer-unternehmen',
      title: 'KI für Unternehmen',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/ki-fuer-unternehmen'
      },
      parent: {
        _type: 'reference',
        _ref: 'ki-kuenstliche-intelligenz'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'digitale-transformation'
        }
      },
      seo: {
        _type: 'seo',
        title: 'KI für Unternehmen | Enterprise AI Transformation | ADVISORI',
        description: 'Transformieren Sie Ihr Unternehmen mit strategischer KI-Implementierung. DSGVO-konforme Enterprise AI-Lösungen, Business Intelligence und nachhaltige AI-Governance für maximalen Geschäftswert.',
        keywords: 'KI für Unternehmen, Enterprise AI, Künstliche Intelligenz Business, AI Transformation, Business Intelligence KI, AI Governance, Enterprise AI Strategy, DSGVO AI Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KI für Unternehmen Enterprise AI Transformation'
        },
        tagline: 'Strategische KI-Transformation für nachhaltigen Geschäftserfolg',
        heading: 'KI für Unternehmen',
        description: 'Erschließen Sie das volle Potenzial Künstlicher Intelligenz für Ihr Unternehmen mit ADVISORI\'s strategischer AI-Expertise. Wir entwickeln maßgeschneiderte Enterprise AI-Lösungen, die messbare Geschäftswerte schaffen, Wettbewerbsvorteile sichern und gleichzeitig höchste Standards in Governance, Ethik und DSGVO-Compliance gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische AI-Roadmaps für nachhaltige Geschäftstransformation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Enterprise AI-Governance mit vollständiger DSGVO-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Messbare ROI-Steigerung durch intelligente Prozessautomatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Skalierbare AI-Infrastrukturen für zukunftssichere Innovation'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KI für Unternehmen',
        description: 'Die strategische Integration von Künstlicher Intelligenz entscheidet über die Zukunftsfähigkeit moderner Unternehmen. ADVISORI begleitet Sie bei der ganzheitlichen AI-Transformation – von der Strategieentwicklung über die technische Implementierung bis hin zur nachhaltigen Optimierung. Unsere Enterprise AI-Lösungen schaffen messbare Geschäftswerte, stärken Wettbewerbspositionen und gewährleisten gleichzeitig höchste Standards in Governance, Ethik und Compliance.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische AI-Roadmaps und Business Case-Entwicklung für nachhaltige Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Enterprise AI-Governance und Risk Management mit DSGVO-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Intelligente Prozessautomatisierung und Business Intelligence-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Skalierbare AI-Infrastrukturen und Cloud-native Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Change Management und Organisationsentwicklung für AI-Readiness'
          }
        ],
        alert: {
          title: 'Enterprise AI-Revolution',
          content: 'Unternehmen mit strategischer KI-Integration erzielen durchschnittlich höhere Produktivitätssteigerungen und signifikante Wettbewerbsvorteile. Investieren Sie jetzt in Ihre AI-Zukunft und sichern Sie nachhaltigen Geschäftserfolg durch intelligente Transformation.'
        },
        whyUs: {
          title: 'Unsere Enterprise AI-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Kompetenz in strategischer AI-Transformation und Enterprise-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'DSGVO-konforme AI-Governance mit integriertem Risk Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenübergreifende Erfahrung in Business Intelligence und Prozessoptimierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von Strategie bis Implementierung und Change Management'
            }
          ]
        },
        additionalInfo: 'Die Zukunft gehört intelligenten Unternehmen, die KI strategisch nutzen, um Innovation zu beschleunigen, Effizienz zu steigern und neue Geschäftsmöglichkeiten zu erschließen!',
        serviceDescription: 'Unsere Enterprise AI-Beratung umfasst das gesamte Spektrum strategischer KI-Integration – von der Vision bis zur Realisierung nachhaltiger AI-powered Business-Transformation.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategic AI Planning & Business Case Development'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Enterprise AI Governance & Risk Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Intelligent Process Automation & Business Intelligence'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Scalable AI Infrastructure & Cloud Architecture'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'AI Change Management & Organizational Development'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Enterprise AI-Transformationsansatz',
        description: 'Wir verfolgen einen systematischen, geschäftswertorientierten Ansatz zur KI-Integration in Unternehmen. Jede AI-Initiative wird strategisch auf Ihre Geschäftsziele ausgerichtet und technisch so implementiert, dass nachhaltiger Wert geschaffen und Risiken minimiert werden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende AI-Readiness-Bewertung und strategische Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Business Case-orientierte AI-Implementierung mit messbaren KPIs'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Agile AI-Entwicklung mit kontinuierlicher Wertschöpfung und Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Enterprise AI-Governance mit DSGVO-Compliance und Risk Management'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Skalierung und kontinuierliche Innovation durch AI-Excellence'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die strategische Integration von KI in Unternehmen ist der entscheidende Wettbewerbsfaktor der Zukunft. Unsere Enterprise AI-Lösungen schaffen nicht nur operative Effizienz, sondern fundamentale Geschäftstransformation. Wir entwickeln intelligente Systeme, die menschliche Expertise verstärken und gleichzeitig neue Dimensionen der Wertschöpfung erschließen. Erfolgreiche AI-Transformation erfordert sowohl technische Exzellenz als auch strategische Vision – genau diese Kombination liefern wir unseren Kunden.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategic AI Planning & Business Case Development',
          description: 'Entwickeln Sie fundierte AI-Strategien mit klaren Business Cases und messbaren Erfolgsmetriken für nachhaltige Transformation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'AI-Readiness-Assessment und Potenzialanalyse für strategische Planung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Business Case-Entwicklung mit ROI-Modellierung und Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'AI-Roadmap-Erstellung mit Prioritätensetzung und Meilenstein-Planung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Stakeholder-Alignment und Executive-Buy-in für AI-Initiativen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Enterprise AI Governance & Risk Management',
          description: 'Implementieren Sie robuste AI-Governance-Frameworks für verantwortungsvolle und compliant KI-Nutzung im Unternehmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'AI-Governance-Framework-Entwicklung mit klaren Rollen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'DSGVO-konforme AI-Compliance und Datenschutz-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'AI-Risk-Assessment und Mitigation-Strategien für sichere Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Ethische AI-Standards und Bias-Prevention-Mechanismen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Intelligent Process Automation & Business Intelligence',
          description: 'Automatisieren Sie Geschäftsprozesse intelligent und schaffen Sie datengetriebene Entscheidungsgrundlagen für optimale Performance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Prozessanalyse und Automatisierungspotenzial-Identifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'RPA-Integration mit KI für intelligente Workflow-Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Business Intelligence-Dashboards mit AI-powered Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Predictive Analytics für proaktive Geschäftsentscheidungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Scalable AI Infrastructure & Cloud Architecture',
          description: 'Bauen Sie zukunftssichere AI-Infrastrukturen auf, die mit Ihren Geschäftsanforderungen skalieren und Innovation ermöglichen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Cloud-native AI-Architektur-Design für optimale Skalierbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'MLOps-Pipeline-Implementierung für kontinuierliche AI-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Data Lake und AI-Platform-Integration für zentrale Datenverarbeitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Security-by-Design für sichere AI-Infrastrukturen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'AI Change Management & Organizational Development',
          description: 'Bereiten Sie Ihre Organisation optimal auf die AI-Transformation vor und schaffen Sie nachhaltige Akzeptanz für intelligente Systeme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'AI-Readiness-Training und Skill-Development-Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Change Management-Strategien für AI-Adoption und Akzeptanz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Organisationsstruktur-Optimierung für AI-driven Operations'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kulturwandel-Initiativen für Innovation und AI-Excellence'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'AI Innovation & Future Strategy Development',
          description: 'Entwickeln Sie zukunftsweisende AI-Innovationsstrategien und erschließen Sie neue Geschäftsmöglichkeiten durch intelligente Technologien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'AI-Innovation-Labs und Proof-of-Concept-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Emerging AI-Technology-Scouting und Trend-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'AI-powered Business Model Innovation und Disruption-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche AI-Excellence und Innovation-Management'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kiFuerUnternehmenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KI für Unternehmen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
