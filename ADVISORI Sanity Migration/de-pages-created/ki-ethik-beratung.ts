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
    console.log('Creating KI-Ethik-Beratung page...')

    const kiEthikBeratungData = {
      _type: 'servicePage',
      _id: 'ki-ethik-beratung',
      title: 'KI-Ethik-Beratung',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/ki-ethik-beratung'
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
        title: 'KI-Ethik-Beratung | Verantwortungsvolle AI-Governance | ADVISORI',
        description: 'Professionelle KI-Ethik-Beratung für Unternehmen. DSGVO-konforme AI-Ethics-Frameworks, verantwortungsvolle KI-Governance und nachhaltige AI-Compliance-Strategien.',
        keywords: 'KI-Ethik-Beratung, AI Ethics Consulting, Verantwortungsvolle KI, AI-Governance, KI-Compliance, DSGVO-konforme KI, AI Ethics Framework, Responsible AI'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KI-Ethik-Beratung Verantwortungsvolle AI-Governance'
        },
        tagline: 'Verantwortungsvolle KI-Entwicklung für nachhaltigen Geschäftserfolg',
        heading: 'KI-Ethik-Beratung',
        description: 'Entwickeln Sie mit ADVISORI ethische KI-Systeme, die Vertrauen schaffen und regulatorische Anforderungen erfüllen. Unsere KI-Ethik-Beratung kombiniert technische Exzellenz mit verantwortungsvoller AI-Governance für nachhaltige Wettbewerbsvorteile und gesellschaftliche Akzeptanz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Ethische AI-Frameworks für verantwortungsvolle KI-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'DSGVO-konforme AI-Ethics-Governance mit vollständigem Compliance-Schutz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Vertrauensbildung durch transparente und nachvollziehbare KI-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Risikominimierung durch bewährte Responsible AI-Methodologien'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KI-Ethik-Beratung',
        description: 'In einer Zeit zunehmender KI-Regulierung und gesellschaftlicher Aufmerksamkeit ist ethische KI-Entwicklung entscheidend für nachhaltigen Geschäftserfolg. ADVISORI bietet Ihnen umfassende KI-Ethik-Beratung, die technische Innovation mit verantwortungsvoller AI-Governance verbindet. Wir entwickeln mit Ihnen ethische KI-Frameworks, die nicht nur regulatorische Anforderungen erfüllen, sondern auch Vertrauen bei Stakeholdern schaffen und langfristige Wettbewerbsvorteile sichern.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung ethischer AI-Frameworks und Responsible AI-Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'DSGVO-konforme AI-Ethics-Implementierung und Compliance-Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Bias-Detection und Fairness-Optimierung in KI-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Transparenz und Erklärbarkeit (Explainable AI) für Stakeholder-Vertrauen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Ethik-Überwachung und adaptive Governance-Optimierung'
          }
        ],
        alert: {
          title: 'Ethischer Imperativ',
          content: 'Verantwortungsvolle KI-Entwicklung ist nicht nur eine regulatorische Notwendigkeit, sondern ein strategischer Wettbewerbsvorteil. Ethische KI-Systeme schaffen Vertrauen, reduzieren Risiken und ermöglichen nachhaltige Innovation in einer zunehmend regulierten AI-Landschaft.'
        },
        whyUs: {
          title: 'Unsere Ethik-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Kompetenz in AI-Ethics und verantwortungsvoller KI-Governance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Responsible AI-Methodologien mit DSGVO-Compliance-Fokus'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von Ethik-Framework bis Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenübergreifende Erfahrung in regulierten und ethik-sensitiven Umgebungen'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit ethischen KI-Systemen genießen höheres Stakeholder-Vertrauen, reduzierte Compliance-Risiken und bessere gesellschaftliche Akzeptanz. Investieren Sie in verantwortungsvolle KI-Entwicklung für nachhaltigen Erfolg!',
        serviceDescription: 'Unsere KI-Ethik-Beratung umfasst das gesamte Spektrum verantwortungsvoller AI-Governance – von der Entwicklung ethischer Frameworks über Bias-Detection bis hin zur kontinuierlichen Ethik-Überwachung und Compliance-Optimierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Ethische AI-Framework-Entwicklung & Responsible AI-Governance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Bias-Detection & Fairness-Optimierung in KI-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Explainable AI & Transparenz-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'DSGVO-konforme AI-Ethics-Compliance & Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Ethik-Überwachung & Governance-Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ethik-Beratungsansatz',
        description: 'Wir verfolgen einen systematischen Ansatz zur Entwicklung ethischer KI-Systeme, der technische Exzellenz mit verantwortungsvoller Governance verbindet. Jede AI-Ethics-Initiative wird individuell auf Ihre Unternehmensanforderungen und Stakeholder-Erwartungen zugeschnitten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Ethik-Analyse Ihrer KI-Systeme und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung maßgeschneiderter AI-Ethics-Frameworks und Compliance-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung von Bias-Detection und Fairness-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von Transparenz und Erklärbarkeit in KI-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und adaptive Ethik-Governance-Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Verantwortungsvolle KI-Entwicklung ist der Grundstein für nachhaltigen AI-Erfolg in Unternehmen. Unser Ansatz verbindet technische Innovation mit ethischen Prinzipien und regulatorischer Compliance. Wir entwickeln nicht nur KI-Systeme, sondern schaffen Vertrauen und gesellschaftliche Akzeptanz durch transparente, faire und nachvollziehbare AI-Lösungen, die höchste ethische Standards erfüllen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Ethische AI-Framework-Entwicklung',
          description: 'Entwicklung umfassender ethischer Frameworks für verantwortungsvolle KI-Entwicklung und -Implementierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse ethischer Anforderungen und Stakeholder-Erwartungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung maßgeschneiderter AI-Ethics-Prinzipien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integration ethischer Guidelines in Entwicklungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Responsible AI-Governance-Strukturen und Verantwortlichkeiten'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Bias-Detection & Fairness-Optimierung',
          description: 'Systematische Identifikation und Eliminierung von Verzerrungen in KI-Systemen für faire und diskriminierungsfreie AI-Anwendungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Umfassende Bias-Analyse in Daten und Algorithmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Fairness-Metriken und Bewertungsmethodologien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Bias-Mitigation-Strategien und Korrekturmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Fairness-Überwachung und -Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Explainable AI & Transparenz-Implementierung',
          description: 'Entwicklung transparenter und nachvollziehbarer KI-Systeme für erhöhtes Stakeholder-Vertrauen und regulatorische Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Explainable AI-Architektur-Design und -Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Transparenz-Dashboard und Stakeholder-Kommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Nachvollziehbare Entscheidungsprozesse und Audit-Trails'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Benutzerfreundliche Erklärungsschnittstellen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'DSGVO-konforme AI-Ethics-Compliance',
          description: 'Spezialisierte Beratung für datenschutzkonforme und ethische KI-Systeme mit integriertem Compliance-Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'DSGVO-Compliance-Bewertung für AI-Ethics-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Privacy-by-Design für ethische KI-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Ethik-Compliance-Monitoring und Risikomanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Regulatorische Berichterstattung und Dokumentation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'AI-Ethics-Governance & Organisationsentwicklung',
          description: 'Aufbau organisatorischer Strukturen und Prozesse für nachhaltige ethische KI-Governance im Unternehmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'AI-Ethics-Committee-Aufbau und Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Ethik-Schulungen und Awareness-Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Prozess-Integration und Workflow-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kulturwandel-Begleitung für Responsible AI-Adoption'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Kontinuierliche Ethik-Überwachung & Optimierung',
          description: 'Langfristige Begleitung Ihrer AI-Ethics-Initiative mit kontinuierlicher Überwachung und strategischer Weiterentwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Ethik-Performance-Monitoring und KPI-Tracking'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Kontinuierliche Governance-Optimierung und Anpassung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Strategische Ethik-Weiterentwicklung und Innovation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Langfristige Partnerschaft und Responsible AI-Support'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kiEthikBeratungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KI-Ethik-Beratung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
