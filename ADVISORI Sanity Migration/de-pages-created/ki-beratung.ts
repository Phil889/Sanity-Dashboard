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
    console.log('Creating KI-Beratung page...')

    const kiBeratungData = {
      _type: 'servicePage',
      _id: 'ki-beratung',
      title: 'KI-Beratung',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/ki-beratung'
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
        title: 'KI-Beratung | Strategische AI-Consulting Services | ADVISORI',
        description: 'Professionelle KI-Beratung für Unternehmen. DSGVO-konforme AI-Strategien, sichere Implementierung und nachhaltige Wettbewerbsvorteile durch strategische Künstliche Intelligenz.',
        keywords: 'KI-Beratung, AI-Consulting, Künstliche Intelligenz Beratung, AI-Strategie, KI-Implementierung, DSGVO-konforme KI, AI Governance, KI-Transformation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KI-Beratung Strategische AI-Consulting Services'
        },
        tagline: 'Strategische KI-Beratung für nachhaltigen Geschäftserfolg',
        heading: 'KI-Beratung',
        description: 'Transformieren Sie Ihr Unternehmen mit strategischer KI-Beratung von ADVISORI. Wir entwickeln DSGVO-konforme AI-Strategien, die Ihr geistiges Eigentum schützen und nachhaltigen Wettbewerbsvorteile schaffen – von der ersten Analyse bis zur erfolgreichen Implementierung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische AI-Roadmaps für nachhaltige Geschäftstransformation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'DSGVO-konforme KI-Implementierung mit vollständigem IP-Schutz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'C-Level-Beratung für strategische AI-Governance und Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Risikominimierung durch bewährte Safety-First-Methodologien'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KI-Beratung',
        description: 'In einer Zeit rasanter technologischer Entwicklung ist strategische KI-Beratung der Schlüssel für nachhaltigen Geschäftserfolg. ADVISORI bietet Ihnen umfassende AI-Consulting-Services, die weit über technische Implementierung hinausgehen. Wir entwickeln mit Ihnen maßgeschneiderte KI-Strategien, die Ihre Geschäftsziele unterstützen, regulatorische Anforderungen erfüllen und gleichzeitig Ihr geistiges Eigentum schützen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische AI-Roadmap-Entwicklung und Business Case-Erstellung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'DSGVO-konforme KI-Architektur-Beratung und Compliance-Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'AI Governance Framework-Entwicklung und Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Change Management und Organisationsentwicklung für AI-Adoption'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Optimierung und strategische Weiterentwicklung'
          }
        ],
        alert: {
          title: 'Strategischer Vorteil',
          content: 'Erfolgreiche KI-Transformation erfordert mehr als nur Technologie. Eine durchdachte Beratungsstrategie, die Geschäftsziele, Compliance und Innovation harmonisch verbindet, ist der Grundstein für nachhaltigen AI-Erfolg und Wettbewerbsvorteile.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Kompetenz in strategischer AI-Transformation und C-Level-Beratung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Safety-First-Methodologien mit DSGVO-Compliance-Fokus'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von Strategie bis Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenübergreifende Erfahrung in regulierten Umgebungen'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit strategischer KI-Beratung erreichen ihre AI-Ziele schneller und nachhaltiger, während sie gleichzeitig Risiken minimieren und Compliance gewährleisten. Investieren Sie in professionelle KI-Beratung für langfristigen Erfolg!',
        serviceDescription: 'Unsere KI-Beratung umfasst das gesamte Spektrum strategischer AI-Services – von der initialen Potenzialanalyse über die Entwicklung maßgeschneiderter AI-Strategien bis hin zur Begleitung der Implementierung und kontinuierlichen Optimierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische AI-Potenzialanalyse & Business Case-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'AI-Roadmap-Erstellung & Implementierungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'DSGVO-konforme AI-Architektur-Beratung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'AI Governance & Compliance-Framework-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Change Management & Organisationsentwicklung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Beratungsansatz',
        description: 'Wir verfolgen einen ganzheitlichen Beratungsansatz, der strategische Geschäftsziele mit technischer Exzellenz und regulatorischer Compliance verbindet. Jede KI-Initiative wird individuell auf Ihre Unternehmensanforderungen zugeschnitten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer Geschäftsprozesse und AI-Potenziale'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten AI-Strategie und Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'DSGVO-konforme Architektur-Planung mit IP-Schutz-Fokus'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierungsbegleitung und Change Management'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und strategische Weiterentwicklung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Strategische KI-Beratung ist der Schlüssel für nachhaltigen AI-Erfolg in Unternehmen. Unser Ansatz kombiniert tiefgreifende Geschäftsverständnis mit technischer Exzellenz und regulatorischer Compliance. Wir entwickeln nicht nur KI-Strategien, sondern schaffen die Grundlage für langfristige Wettbewerbsvorteile, die gleichzeitig höchste Standards für Datenschutz und IP-Schutz erfüllen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische AI-Potenzialanalyse',
          description: 'Umfassende Bewertung Ihrer KI-Möglichkeiten mit detaillierter Business Case-Entwicklung und ROI-Analyse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse der aktuellen Datenlandschaft und AI-Readiness'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation strategischer Use Cases und Wertschöpfungspotenziale'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Business Case-Entwicklung mit ROI-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Risikobewertung und Compliance-Anforderungsanalyse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'AI-Strategie & Roadmap-Entwicklung',
          description: 'Entwicklung maßgeschneiderter KI-Strategien mit detaillierter Implementierungs-Roadmap und Meilenstein-Planung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Strategische AI-Vision und Zielsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Detaillierte Implementierungs-Roadmap mit Prioritäten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Ressourcenplanung und Budget-Allokation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'KPI-Definition und Erfolgs-Metriken'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'DSGVO-konforme AI-Architektur-Beratung',
          description: 'Spezialisierte Beratung für datenschutzkonforme KI-Architekturen mit integriertem IP-Schutz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Privacy-by-Design AI-Architektur-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'DSGVO-Compliance-Bewertung und -Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'IP-Schutz-Strategien und sichere Datenverarbeitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Audit-Trail-Design und Compliance-Monitoring'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'AI Governance & Compliance-Framework',
          description: 'Entwicklung umfassender AI-Governance-Strukturen für nachhaltige und verantwortungsvolle KI-Nutzung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'AI-Governance-Framework-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Compliance-Management und Risiko-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'AI-Ethics-Guidelines und Verantwortlichkeits-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Kontinuierliche Überwachung und Anpassung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Change Management & Organisationsentwicklung',
          description: 'Begleitung der organisatorischen Transformation für erfolgreiche AI-Adoption und Mitarbeiter-Enablement.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Organisationsanalyse und Change-Readiness-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Stakeholder-Management und Kommunikationsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Schulungs- und Weiterbildungskonzepte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kulturwandel-Begleitung und Adoption-Monitoring'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Kontinuierliche AI-Optimierung & Support',
          description: 'Langfristige Begleitung Ihrer KI-Initiative mit kontinuierlicher Optimierung und strategischer Weiterentwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Performance-Monitoring und KPI-Tracking'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Kontinuierliche Prozessoptimierung und Anpassung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Strategische Weiterentwicklung und Innovation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Langfristige Partnerschaft und Support'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kiBeratungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KI-Beratung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
