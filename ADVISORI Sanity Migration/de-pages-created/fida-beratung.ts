import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
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
    console.log('Creating FIDA Beratung page...')

    const fidaBeratungData = {
      _type: 'servicePage',
      _id: 'fida-beratung',
      title: 'FIDA Beratung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/financial-data-access-fida/fida-beratung'
      },
      parent: {
        _type: 'reference',
        _ref: 'financial-data-access-fida'
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
        title: 'FIDA Beratung & Consulting | ADVISORI',
        description: 'Expertenberatung für FIDA Financial Data Access Regulation. Strategische FIDA-Beratung, Compliance-Consulting und End-to-End-Implementierungsunterstützung für Finanzdienstleister.',
        keywords: 'FIDA Beratung, FIDA Consulting, Financial Data Access Regulation Beratung, FIDA Compliance Consulting, FIDA Implementation, Finanzregulierung Beratung, Open Banking Consulting'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FIDA Beratung & Consulting'
        },
        tagline: 'Strategische FIDA-Beratung für erfolgreiche Regulatory Compliance',
        heading: 'FIDA Beratung',
        description: 'Als führende FIDA-Beratung unterstützen wir Finanzdienstleister bei der strategischen Umsetzung der Financial Data Access Regulation. Von der initialen Bewertung bis zur vollständigen Implementation bieten wir End-to-End-Consulting für nachhaltige FIDA-Compliance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische FIDA-Beratung von Regulatory-Experten mit Praxiserfahrung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'End-to-End-Consulting von Assessment bis Go-Live-Unterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Maßgeschneiderte FIDA-Compliance-Strategien für Ihr Geschäftsmodell'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Beratung für nachhaltige FIDA-Compliance-Excellence'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Professionelle FIDA-Beratung für nachhaltige Compliance',
        description: 'Die Financial Data Access Regulation (FIDA) stellt Finanzdienstleister vor komplexe regulatorische Herausforderungen, die strategische Expertise und tiefgreifende Regulatory-Kenntnisse erfordern. Als spezialisierte FIDA-Beratung bieten wir umfassende Consulting-Services, die weit über reine Compliance hinausgehen und FIDA als strategischen Wettbewerbsvorteil positionieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische FIDA-Readiness-Assessments und Gap-Analysen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung maßgeschneiderter FIDA-Compliance-Strategien und Roadmaps'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'End-to-End-Implementation-Consulting und Change-Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Beratung für Regulatory Updates und Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration von FIDA in bestehende Compliance- und Governance-Strukturen'
          }
        ],
        alert: {
          title: 'Beratungsexpertise',
          content: 'FIDA-Beratung erfordert nicht nur regulatorisches Know-how, sondern auch strategisches Verständnis für Geschäftsmodelle, Technologie-Integration und Change-Management. Unsere Beratung verbindet alle Dimensionen für nachhaltigen Erfolg.'
        },
        whyUs: {
          title: 'Unsere FIDA-Beratungsexpertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende FIDA-Expertise und praktische Implementierungserfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Ganzheitlicher Beratungsansatz von Strategie bis operative Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische FIDA-Beratung für verschiedene Finanzdienstleister'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Langfristige Partnerschaft für kontinuierliche FIDA-Excellence'
            }
          ]
        },
        additionalInfo: 'Erfolgreiche FIDA-Compliance erfordert mehr als technische Umsetzung. Sie benötigt strategische Beratung, die regulatorische Anforderungen mit Geschäftszielen verbindet, Change-Management orchestriert und nachhaltige Compliance-Strukturen aufbaut. Unsere FIDA-Beratung schafft die Grundlage für langfristigen regulatorischen Erfolg.',
        serviceDescription: 'Wir bieten umfassende FIDA-Beratungsservices, die strategische Planung, operative Umsetzung und kontinuierliche Optimierung integrieren. Unser Consulting-Ansatz gewährleistet nicht nur regulatorische Compliance, sondern maximiert auch die strategischen Vorteile proaktiver FIDA-Implementation.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische FIDA-Readiness-Bewertung und Compliance-Planung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'End-to-End-Implementation-Consulting und Projektmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Change-Management und Stakeholder-Engagement-Beratung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kontinuierliche Regulatory-Updates und Optimierungsberatung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Integration in bestehende Governance- und Risk-Management-Strukturen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer FIDA-Beratungsansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte FIDA-Strategie, die regulatorische Excellence mit strategischen Geschäftszielen verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer aktuellen Regulatory-Position und FIDA-Readiness'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung strategischer FIDA-Compliance-Roadmaps und Implementierungspläne'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Begleitung der operativen Umsetzung mit kontinuierlichem Consulting'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Aufbau nachhaltiger FIDA-Compliance-Strukturen und Governance-Frameworks'
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
        quote: 'FIDA-Beratung bedeutet für uns mehr als regulatorische Compliance. Wir verstehen FIDA als strategische Chance für Finanzdienstleister, ihre Marktposition zu stärken und innovative Services zu entwickeln. Unsere Beratung verbindet tiefgreifende Regulatory-Expertise mit strategischem Business-Verständnis für nachhaltigen Erfolg.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'FIDA-Readiness-Assessment und strategische Bewertung',
          description: 'Umfassende Bewertung Ihrer aktuellen FIDA-Readiness und Entwicklung strategischer Compliance-Roadmaps.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse bestehender Systeme, Prozesse und Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung regulatorischer Gaps und Compliance-Risiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung priorisierter FIDA-Compliance-Roadmaps'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Strategische Empfehlungen für optimale FIDA-Implementation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'FIDA-Compliance-Strategie und Governance-Design',
          description: 'Entwicklung maßgeschneiderter FIDA-Compliance-Strategien und Aufbau effektiver Governance-Strukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Design strategischer FIDA-Compliance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung von Governance-Strukturen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration in bestehende Risk-Management- und Compliance-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Aufbau von Monitoring- und Reporting-Mechanismen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'End-to-End-Implementation-Consulting',
          description: 'Umfassende Beratung und Begleitung während der gesamten FIDA-Implementation von Planung bis Go-Live.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Projektmanagement und Koordination aller Implementation-Aktivitäten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Technische Beratung für API-Entwicklung und System-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Change-Management und Stakeholder-Kommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Testing-Unterstützung und Go-Live-Begleitung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'FIDA-Prozessoptimierung und Operational Excellence',
          description: 'Optimierung von FIDA-Prozessen und Aufbau operativer Excellence für nachhaltige Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Analyse und Optimierung von FIDA-Compliance-Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Automatisierung von Routine-Compliance-Aktivitäten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Aufbau von KPI-Frameworks und Performance-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Kontinuierliche Verbesserung und Effizienzsteigerung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'FIDA-Training und Capability Building',
          description: 'Aufbau interner FIDA-Expertise durch maßgeschneiderte Schulungen und Capability-Development-Programme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Entwicklung rollenspezifischer FIDA-Trainingsprogramme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Aufbau interner FIDA-Expertise und Kompetenzen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Change-Management und Adoption-Unterstützung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kontinuierliche Weiterbildung und Knowledge-Transfer'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Kontinuierliche FIDA-Beratung und Regulatory Updates',
          description: 'Langfristige Beratungspartnerschaft für kontinuierliche FIDA-Excellence und proaktive Regulatory-Anpassung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Kontinuierliches Monitoring regulatorischer Entwicklungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Proaktive Beratung zu Regulatory Updates und Anpassungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Regelmäßige Compliance-Reviews und Optimierungsempfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategische Beratung für FIDA-Evolution und Marktentwicklungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(fidaBeratungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FIDA Beratung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
