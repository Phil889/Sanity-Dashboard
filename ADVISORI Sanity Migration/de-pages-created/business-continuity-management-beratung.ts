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
    console.log('Creating Business Continuity Management Beratung page...')

    const bcmBeratungData = {
      _type: 'servicePage',
      _id: 'business-continuity-management-beratung',
      title: 'Business Continuity Management Beratung',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/business-continuity-resilience/business-continuity-management-beratung'
      },
      parent: {
        _type: 'reference',
        _ref: 'business-continuity-resilience'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'informationssicherheit'
        }
      },
      seo: {
        _type: 'seo',
        title: 'Business Continuity Management Beratung - Strategische BCM-Beratung | ADVISORI',
        description: 'Professionelle BCM-Beratung: Strategische Resilienz-Beratung, Governance-Entwicklung, Compliance-Unterstützung und Expertenwissen für nachhaltige Geschäftskontinuität mit ADVISORI.',
        keywords: 'Business Continuity Management Beratung, BCM Consulting, BCM Berater, Business Continuity Beratung, BCM Strategie Beratung, Resilienz Beratung, BCM Governance, BCM Compliance Beratung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Business Continuity Management Beratung - Strategische BCM-Beratung und Expertenwissen'
        },
        tagline: 'Strategische BCM-Beratung für nachhaltige Organisationsresilienz',
        heading: 'Business Continuity Management Beratung',
        description: 'Transformieren Sie Ihre Resilienz-Strategie durch unsere expertische BCM-Beratung. ADVISORI bietet strategische Beratungsleistungen von der Governance-Entwicklung bis zur Compliance-Unterstützung für nachhaltige Geschäftskontinuität und operative Exzellenz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische Resilienz-Beratung und Governance-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Expertenwissen und bewährte BCM-Methodologien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Compliance-Unterstützung und regulatorische Expertise'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Maßgeschneiderte Beratungsansätze für Ihre Organisation'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Business Continuity Management Beratung - Strategische Resilienz-Expertise',
        description: 'Business Continuity Management Beratung repräsentiert die strategische Dimension der Organisationsresilienz und verbindet Expertenwissen mit praktischer Umsetzung. Diese spezialisierte Beratungsleistung umfasst die gesamte Bandbreite von der strategischen Resilienz-Planung über die Governance-Entwicklung bis hin zur Compliance-Unterstützung für nachhaltige Geschäftskontinuität.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Resilienz-Beratung und Executive-Level Guidance für nachhaltige Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Governance-Framework Entwicklung und Organisationsstruktur-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Compliance-Expertise und regulatorische Unterstützung für alle BCM-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Methodologie-Transfer und Kompetenzentwicklung für interne Teams'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Branchenspezifische Expertise und maßgeschneiderte Beratungsansätze'
          }
        ],
        alert: {
          title: 'Strategische Transformation',
          content: 'Professionelle BCM-Beratung geht über operative Unterstützung hinaus und schafft strategische Transformation durch Expertenwissen, bewährte Methodologien und maßgeschneiderte Lösungsansätze für nachhaltige Organisationsresilienz.'
        },
        whyUs: {
          title: 'Warum ADVISORI für BCM-Beratung',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende BCM-Expertise und internationale Erfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Beratungsmethodologien und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Strategische Partnerschaft und langfristige Begleitung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovation und Zukunftsorientierung in der Beratung'
            }
          ]
        },
        additionalInfo: 'Die Landschaft der BCM-Beratung entwickelt sich kontinuierlich weiter, um den sich wandelnden Anforderungen der digitalen Transformation, Cyber-Resilienz und nachhaltigen Geschäftspraktiken gerecht zu werden. Moderne BCM-Beratung integriert strategische Vorausschau, datengetriebene Insights und innovative Methodologien für optimale Beratungsoutcomes.',
        serviceDescription: 'Unsere BCM-Beratung bietet strategische Expertise und praktische Guidance für alle Aspekte des Business Continuity Managements. Von der Executive-Beratung über die Governance-Entwicklung bis hin zur Compliance-Unterstützung begleiten wir Organisationen mit Expertenwissen und bewährten Methodologien auf ihrem Weg zu nachhaltiger Resilienz.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Resilienz-Beratung und Executive Advisory'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Governance-Framework Entwicklung und Organisationsberatung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Compliance-Beratung und regulatorische Expertise'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Methodologie-Transfer und Wissensmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Branchenspezifische Beratung und maßgeschneiderte Lösungen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer Beratungsansatz für BCM',
        description: 'Wir verfolgen einen strukturierten und expertisegetriebenen Beratungsansatz, der strategische Insights mit praktischer Umsetzung verbindet und nachhaltige Transformation sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Analyse und Executive-Level Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Maßgeschneiderte Beratungskonzepte und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Governance-Design und Organisationsstruktur-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Methodologie-Transfer und Kompetenzentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Beratung und strategische Weiterentwicklung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Strategische BCM-Beratung ist der Schlüssel zur Transformation von reaktiver Krisenreaktion zu proaktiver Resilienz-Excellence. Unsere Beratungsansätze verbinden tiefgreifende Expertise mit praktischer Umsetzung und schaffen nachhaltige Wettbewerbsvorteile durch systematische Organisationsresilienz und strategische Vorausschau.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Resilienz-Beratung',
          description: 'Executive-Level Beratung für strategische Resilienz-Transformation und nachhaltige Geschäftskontinuität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Executive Advisory und Board-Level Beratung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strategische Resilienz-Roadmap und Vision-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Business Case Entwicklung und ROI-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Stakeholder-Alignment und Change-Strategie'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Governance und Organisationsberatung',
          description: 'Entwicklung robuster BCM-Governance-Frameworks und Optimierung von Organisationsstrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Governance-Framework Design und Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Rollen und Verantwortlichkeiten Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entscheidungsprozesse und Eskalationsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Organisationskultur und Change Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Compliance und Regulatorische Beratung',
          description: 'Expertenwissen für BCM-Compliance und Unterstützung bei regulatorischen Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'ISO 22301 und internationale Standards Beratung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Regulatorische Gap-Analyse und Compliance-Roadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Audit-Vorbereitung und Zertifizierungsbegleitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Kontinuierliche Compliance-Überwachung und Updates'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Methodologie und Best Practice Transfer',
          description: 'Transfer bewährter BCM-Methodologien und Entwicklung interner Kompetenzen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Bewährte BCM-Methodologien und Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Best Practice Sharing und Benchmarking'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Wissenstransfer und Kompetenzentwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Interne Trainer-Entwicklung und Sustainability'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Branchenspezifische Beratung',
          description: 'Maßgeschneiderte BCM-Beratung für spezifische Branchen und Geschäftsmodelle.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Finanzdienstleistungen und Banking-Expertise'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Kritische Infrastrukturen und Utilities'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Healthcare und Life Sciences Beratung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Manufacturing und Supply Chain Expertise'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Innovation und Zukunftsorientierung',
          description: 'Beratung für innovative BCM-Ansätze und zukunftsorientierte Resilienz-Strategien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Emerging Technologies und Digital Resilience'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Cyber-Resilienz Integration und Hybrid-Ansätze'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Sustainability und ESG-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Future-Ready BCM und Trend-Monitoring'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcmBeratungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Business Continuity Management Beratung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
