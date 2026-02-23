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
    console.log('Creating KI - Künstliche Intelligenz main category page...')

    const kiKuenstlicheIntelligenzData = {
      _type: 'servicePage',
      _id: 'ki-kuenstliche-intelligenz',
      title: 'KI - Künstliche Intelligenz',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz'
      },
      parent: {
        _type: 'reference',
        _ref: 'digitale-transformation'
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
        title: 'KI - Künstliche Intelligenz Beratung | AI Transformation | ADVISORI',
        description: 'Führende KI-Beratung für Enterprise AI-Transformation. DSGVO-konforme Künstliche Intelligenz, EU AI Act Compliance, AI Governance und strategische KI-Implementierung für nachhaltigen Geschäftserfolg.',
        keywords: 'KI Beratung, Künstliche Intelligenz, AI Transformation, Enterprise AI, AI Governance, EU AI Act, DSGVO AI Compliance, Machine Learning, AI Strategy, Digital Transformation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KI Künstliche Intelligenz Enterprise AI Transformation'
        },
        tagline: 'Führende KI-Expertise für intelligente Geschäftstransformation',
        heading: 'KI - Künstliche Intelligenz',
        description: 'Erschließen Sie das transformative Potenzial Künstlicher Intelligenz mit ADVISORI\'s umfassender AI-Expertise. Als führender KI-Berater entwickeln wir strategische AI-Lösungen, die Ihr Unternehmen zukunftssicher machen, Wettbewerbsvorteile schaffen und gleichzeitig höchste Standards in Governance, Ethik und EU AI Act Compliance gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische AI-Transformation mit messbarem Geschäftswert'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'EU AI Act konforme KI-Governance und Risk Management'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'DSGVO-sichere Enterprise AI-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Ethische KI-Entwicklung mit Bias-Prevention'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KI - Künstliche Intelligenz',
        description: 'Künstliche Intelligenz revolutioniert die Geschäftswelt und definiert Wettbewerbsvorteile neu. ADVISORI begleitet Sie als strategischer Partner bei der ganzheitlichen AI-Transformation – von der Vision bis zur erfolgreichen Implementierung intelligenter Systeme. Unsere KI-Expertise umfasst das gesamte Spektrum moderner AI-Technologien und gewährleistet dabei stets höchste Standards in Governance, Ethik und Compliance mit EU AI Act und DSGVO.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische AI-Roadmaps und Business Case-Entwicklung für nachhaltige Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'EU AI Act konforme KI-Governance mit integriertem Risk Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Enterprise AI-Implementierung mit DSGVO-Compliance und Datenschutz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Ethische KI-Entwicklung und Bias-Prevention für verantwortungsvolle AI'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Skalierbare AI-Infrastrukturen und MLOps für kontinuierliche Innovation'
          }
        ],
        alert: {
          title: 'KI-Revolution im Unternehmen',
          content: 'Unternehmen mit strategischer KI-Integration erzielen signifikante Produktivitätssteigerungen und nachhaltige Wettbewerbsvorteile. Investieren Sie jetzt in intelligente Transformation und sichern Sie Ihre Zukunftsfähigkeit durch verantwortungsvolle AI-Innovation.'
        },
        whyUs: {
          title: 'Unsere KI-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Kompetenz in strategischer AI-Transformation und Enterprise-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act und DSGVO-konforme KI-Governance mit integriertem Risk Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenübergreifende Erfahrung in ethischer KI-Entwicklung und Bias-Prevention'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von Strategie bis Implementierung und Change Management'
            }
          ]
        },
        additionalInfo: 'Die Zukunft gehört intelligenten Unternehmen, die KI strategisch, ethisch und verantwortungsvoll einsetzen!',
        serviceDescription: 'Unsere KI-Beratung umfasst das gesamte Spektrum Künstlicher Intelligenz – von strategischer Planung über technische Implementierung bis hin zu nachhaltiger AI-Governance und Compliance.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategic AI Planning & Business Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'EU AI Act Compliance & AI Governance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Enterprise AI Implementation & DSGVO Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Ethical AI Development & Bias Prevention'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'AI Infrastructure & MLOps Excellence'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser KI-Transformationsansatz',
        description: 'Wir verfolgen einen systematischen, ethikorientierten Ansatz zur KI-Integration, der Geschäftswert, Compliance und Verantwortung optimal miteinander verbindet. Jede AI-Initiative wird strategisch auf Ihre Ziele ausgerichtet und technisch so implementiert, dass nachhaltiger Wert geschaffen und Risiken minimiert werden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende AI-Readiness-Bewertung und strategische Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'EU AI Act konforme Governance-Implementierung mit Risk Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Agile AI-Entwicklung mit kontinuierlicher Wertschöpfung und Ethik-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'DSGVO-sichere Implementierung mit Datenschutz-by-Design'
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
        quote: 'Künstliche Intelligenz ist nicht nur eine Technologie, sondern der Schlüssel zur Zukunftsfähigkeit moderner Unternehmen. Unsere KI-Expertise verbindet strategische Vision mit technischer Exzellenz und ethischer Verantwortung. Wir entwickeln AI-Lösungen, die nicht nur Effizienz steigern, sondern fundamentale Geschäftstransformation ermöglichen. Dabei gewährleisten wir stets höchste Standards in Governance, Compliance und ethischer KI-Entwicklung – für nachhaltigen Erfolg in der intelligenten Zukunft.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategic AI Planning & Business Transformation',
          description: 'Entwickeln Sie fundierte AI-Strategien mit klaren Business Cases und messbaren Erfolgsmetriken für nachhaltige Geschäftstransformation.',
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
          title: 'EU AI Act Compliance & AI Governance',
          description: 'Implementieren Sie robuste AI-Governance-Frameworks für EU AI Act konforme und verantwortungsvolle KI-Nutzung im Unternehmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'EU AI Act Compliance-Assessment und Implementierungsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'AI-Governance-Framework-Entwicklung mit klaren Rollen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'AI-Risk-Assessment und Mitigation-Strategien für sichere Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Compliance-Überwachung und Audit-Unterstützung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Enterprise AI Implementation & DSGVO Compliance',
          description: 'Implementieren Sie skalierbare AI-Lösungen mit vollständiger DSGVO-Compliance und Datenschutz-by-Design für sichere Geschäftstransformation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'DSGVO-konforme AI-Architektur-Entwicklung mit Privacy-by-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Enterprise AI-Platform-Implementierung mit Sicherheits-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Data Governance und Qualitätssicherung für AI-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'MLOps-Pipeline-Entwicklung für kontinuierliche AI-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Ethical AI Development & Bias Prevention',
          description: 'Entwickeln Sie ethische AI-Systeme mit integrierter Bias-Prevention und Fairness-Mechanismen für verantwortungsvolle Künstliche Intelligenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Ethical AI-Framework-Entwicklung mit Fairness-Metriken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Bias-Detection und Mitigation-Strategien für faire AI-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Explainable AI-Implementierung für Transparenz und Nachvollziehbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Kontinuierliche Ethik-Überwachung und Qualitätssicherung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'AI Infrastructure & MLOps Excellence',
          description: 'Bauen Sie zukunftssichere AI-Infrastrukturen mit modernen MLOps-Praktiken für skalierbare und effiziente KI-Entwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Cloud-native AI-Architektur-Design für optimale Skalierbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'MLOps-Pipeline-Implementierung für kontinuierliche AI-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'AI-Model-Management und Versionierung für Governance und Qualität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Performance-Monitoring und automatisierte Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'AI Change Management & Organizational Development',
          description: 'Bereiten Sie Ihre Organisation optimal auf die AI-Transformation vor und schaffen Sie nachhaltige Akzeptanz für intelligente Systeme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'AI-Readiness-Training und Skill-Development-Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Change Management-Strategien für AI-Adoption und Akzeptanz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Organisationsstruktur-Optimierung für AI-driven Operations'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kulturwandel-Initiativen für Innovation und AI-Excellence'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kiKuenstlicheIntelligenzData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KI - Künstliche Intelligenz main category page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
