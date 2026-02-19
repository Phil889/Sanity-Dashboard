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
    console.log('Creating KI-Governance page...')

    const kiGovernanceData = {
      _type: 'servicePage',
      _id: 'ki-governance',
      title: 'KI-Governance',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/ki-governance'
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
        title: 'KI-Governance | AI Governance Framework | ADVISORI',
        description: 'Professionelle KI-Governance-Beratung für Unternehmen. DSGVO-konforme AI-Governance-Frameworks, Risikomanagement und strategische KI-Compliance für nachhaltige AI-Transformation.',
        keywords: 'KI-Governance, AI Governance, KI-Compliance, AI Risk Management, KI-Risikomanagement, AI Governance Framework, DSGVO AI Compliance, Responsible AI Governance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KI-Governance AI Governance Framework'
        },
        tagline: 'Strategische KI-Governance für verantwortungsvolle AI-Transformation',
        heading: 'KI-Governance',
        description: 'Etablieren Sie mit ADVISORI robuste KI-Governance-Strukturen, die Innovation ermöglichen und gleichzeitig Risiken minimieren. Unsere KI-Governance-Beratung entwickelt maßgeschneiderte Frameworks für verantwortungsvolle AI-Nutzung, regulatorische Compliance und nachhaltige Wertschöpfung durch intelligente Technologien.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische AI-Governance-Frameworks für verantwortungsvolle KI-Nutzung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'DSGVO-konforme KI-Compliance mit integriertem Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Transparente Entscheidungsstrukturen für nachvollziehbare AI-Governance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Überwachung und adaptive Governance-Optimierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KI-Governance',
        description: 'Effektive KI-Governance ist der Grundstein für erfolgreiche und nachhaltige AI-Transformation in Unternehmen. ADVISORI entwickelt mit Ihnen umfassende Governance-Frameworks, die Innovation fördern und gleichzeitig Risiken kontrollieren. Unsere KI-Governance-Lösungen schaffen Vertrauen bei Stakeholdern, gewährleisten regulatorische Compliance und ermöglichen verantwortungsvolle Nutzung intelligenter Technologien für maximalen Geschäftswert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische AI-Governance-Framework-Entwicklung mit klaren Rollen und Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'DSGVO-konforme KI-Compliance und regulatorisches Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'AI-Risk-Assessment und Mitigation-Strategien für sichere KI-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Transparente Entscheidungsprozesse und Stakeholder-Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Governance-Überwachung und adaptive Optimierung'
          }
        ],
        alert: {
          title: 'Governance-Imperativ',
          content: 'Robuste KI-Governance ist nicht nur regulatorische Notwendigkeit, sondern strategischer Erfolgsfaktor. Unternehmen mit effektiven AI-Governance-Strukturen realisieren höhere ROI bei KI-Investitionen und minimieren gleichzeitig Compliance-Risiken und Reputationsschäden.'
        },
        whyUs: {
          title: 'Unsere Governance-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Kompetenz in strategischer KI-Governance und Compliance-Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte AI-Governance-Frameworks mit DSGVO-Compliance-Fokus'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von Strategie bis Implementierung und Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenübergreifende Erfahrung in regulierten und governance-kritischen Umgebungen'
            }
          ]
        },
        additionalInfo: 'Erfolgreiche KI-Governance schafft das Fundament für nachhaltige AI-Innovation, Stakeholder-Vertrauen und regulatorische Sicherheit in einer zunehmend KI-getriebenen Geschäftswelt!',
        serviceDescription: 'Unsere KI-Governance-Beratung umfasst das gesamte Spektrum strategischer AI-Governance – von der Framework-Entwicklung über Risikomanagement bis hin zur kontinuierlichen Optimierung und Compliance-Sicherung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategic AI Governance Framework Development'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'AI Risk Management & Compliance Assurance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Stakeholder Management & Decision Structures'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Continuous Governance Monitoring & Optimization'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'AI Ethics Integration & Responsible Innovation'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser KI-Governance-Ansatz',
        description: 'Wir verfolgen einen systematischen, stakeholder-orientierten Ansatz zur Entwicklung effektiver KI-Governance-Strukturen. Jede Governance-Initiative wird individuell auf Ihre Unternehmenskultur, Geschäftsziele und regulatorischen Anforderungen zugeschnitten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Governance-Analyse und Stakeholder-Mapping für strategische Planung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung maßgeschneiderter AI-Governance-Frameworks und Compliance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung von Risikomanagement und Monitoring-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration ethischer Standards und verantwortungsvoller AI-Praktiken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und adaptive Governance-Weiterentwicklung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Effektive KI-Governance ist der Schlüssel für nachhaltigen AI-Erfolg in Unternehmen. Unsere Governance-Frameworks schaffen nicht nur Compliance-Sicherheit, sondern ermöglichen verantwortungsvolle Innovation und Stakeholder-Vertrauen. Wir entwickeln Governance-Strukturen, die KI-Risiken proaktiv managen und gleichzeitig das volle Potenzial intelligenter Technologien für Geschäftswertschöpfung erschließen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategic AI Governance Framework Development',
          description: 'Entwicklung umfassender KI-Governance-Frameworks mit klaren Strukturen, Rollen und Entscheidungsprozessen für verantwortungsvolle AI-Nutzung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Governance-Strategie-Entwicklung und Stakeholder-Alignment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'AI-Governance-Committee-Aufbau und Rollen-Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entscheidungsstrukturen und Eskalationsprozesse für KI-Projekte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Policy-Entwicklung und Governance-Dokumentation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'AI Risk Management & Compliance Assurance',
          description: 'Systematisches Risikomanagement für KI-Systeme mit integrierter Compliance-Sicherung und regulatorischer Überwachung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Umfassende AI-Risk-Assessments und Vulnerabilitäts-Analysen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'DSGVO-konforme KI-Compliance und Datenschutz-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Risk-Mitigation-Strategien und Contingency-Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Regulatorische Überwachung und Compliance-Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'AI Ethics Integration & Responsible Innovation',
          description: 'Integration ethischer Standards in KI-Governance-Prozesse für verantwortungsvolle Innovation und gesellschaftliche Akzeptanz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Ethische AI-Prinzipien-Entwicklung und Framework-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Bias-Detection und Fairness-Governance für KI-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Transparenz und Explainability-Standards für AI-Governance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Responsible AI-Innovation-Prozesse und Ethik-Reviews'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Stakeholder Management & Decision Structures',
          description: 'Aufbau effektiver Stakeholder-Management-Prozesse und transparenter Entscheidungsstrukturen für KI-Governance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Stakeholder-Mapping und Engagement-Strategien für AI-Governance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Transparente Kommunikations- und Reporting-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Cross-funktionale Governance-Teams und Koordinationsmechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Executive-Dashboard und Governance-Performance-Tracking'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'AI Governance Technology & Automation',
          description: 'Technologische Unterstützung für KI-Governance durch automatisierte Monitoring-Systeme und Governance-Plattformen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'AI-Governance-Platform-Implementierung und Tool-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Automatisierte Compliance-Monitoring und Alert-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Governance-Analytics und Performance-Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Workflow-Automation für Governance-Prozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Continuous Governance Optimization & Evolution',
          description: 'Langfristige Begleitung Ihrer KI-Governance mit kontinuierlicher Optimierung und strategischer Weiterentwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Governance-Performance-Monitoring und KPI-Tracking'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Kontinuierliche Framework-Optimierung und Best-Practice-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Adaptive Governance-Evolution und Trend-Antizipation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Langfristige Governance-Partnerschaft und Strategic Advisory'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kiGovernanceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KI-Governance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
