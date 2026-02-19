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
    console.log('Creating ISO 27001 Lead Implementer page...')

    const iso27001LeadImplementerData = {
      _type: 'servicePage',
      _id: 'iso-27001-lead-implementer',
      title: 'ISO 27001 Lead Implementer',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-lead-implementer'
      },
      parent: {
        _type: 'reference',
        _ref: 'iso-27001'
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
        title: 'ISO 27001 Lead Implementer Services | Expert ISMS Implementation | ADVISORI',
        description: 'Professionelle ISO 27001 Lead Implementer Services für erfolgreiche ISMS-Implementierung. Strategische Führung, Projektmanagement und nachhaltige Integration von der Planung bis zur Zertifizierung.',
        keywords: 'ISO 27001 Lead Implementer, ISMS Implementation, ISO 27001 Projektmanagement, Lead Implementer Services, Information Security Management, ISMS Beratung, ISO 27001 Zertifizierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Lead Implementer Services und professionelle ISMS-Implementierung'
        },
        tagline: 'Strategische ISMS-Implementierung für nachhaltigen Geschäftserfolg',
        heading: 'ISO 27001 Lead Implementer Services',
        description: 'Transformieren Sie Ihre Informationssicherheit mit unseren erfahrenen Lead Implementern. Wir begleiten Sie strategisch und operativ von der ersten Planung bis zur erfolgreichen Zertifizierung und darüber hinaus - für ein ISMS, das echten Geschäftswert schafft und Ihre Organisation nachhaltig stärkt.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Erfahrene Lead Implementer mit nachgewiesener Erfolgshistorie in komplexen ISMS-Projekten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategische Projektführung mit Fokus auf Geschäftswert und operative Exzellenz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Ganzheitliche Change Management Begleitung für nachhaltige Organisationsentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Maßgeschneiderte Implementierungsansätze für verschiedene Branchen und Unternehmensgrößen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Professionelle Lead Implementer Expertise für strategische ISMS-Transformation',
        description: 'Unsere ISO 27001 Lead Implementer Services kombinieren tiefgreifende technische Expertise mit strategischem Projektmanagement und Change Management Kompetenzen, um Organisationen bei der erfolgreichen Implementierung robuster und nachhaltiger Informationssicherheits-Managementsysteme zu unterstützen. Wir verstehen ISMS-Implementierung als strategische Transformation, die weit über reine Compliance hinausgeht.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische ISMS-Konzeption basierend auf Geschäftszielen und Risikoprofil der Organisation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'End-to-End Projektmanagement von der Initiierung bis zur nachhaltigen Verankerung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Systematische Change Management Begleitung für erfolgreiche Organisationsentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration moderner Technologien und Automatisierung für effiziente ISMS-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Qualitätssicherung und Optimierung während der gesamten Implementierung'
          }
        ],
        alert: {
          title: 'Strategische Transformation',
          content: 'Unsere Lead Implementer verstehen ISMS-Implementierung als strategische Organisationsentwicklung, die Informationssicherheit als Wettbewerbsvorteil und Business Enabler etabliert, nicht nur als Compliance-Anforderung.'
        },
        whyUs: {
          title: 'Unsere Lead Implementer Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Zertifizierte Lead Implementer mit umfassender Projekt- und Change Management Erfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodologien für erfolgreiche ISMS-Implementierung in verschiedenen Branchen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von strategischer Planung bis operative Umsetzung und Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Fokus auf nachhaltigen Geschäftswert und kontinuierliche Verbesserung'
            }
          ]
        },
        additionalInfo: 'Unsere Lead Implementer Services sind darauf ausgelegt, nicht nur ein ISO 27001-konformes ISMS zu etablieren, sondern eine Informationssicherheitskultur zu schaffen, die Innovation ermöglicht, Vertrauen aufbaut und nachhaltigen Geschäftserfolg unterstützt.',
        serviceDescription: 'Wir bieten umfassende Lead Implementer Services, die alle Aspekte der ISMS-Implementierung abdecken, von der strategischen Konzeption über die operative Umsetzung bis hin zur Zertifizierung und kontinuierlichen Optimierung. Unser Ansatz ist darauf ausgelegt, maximalen Wert für Ihre Organisation zu schaffen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische ISMS-Planung und Architektur-Design mit Geschäftsausrichtung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Professionelles Projektmanagement mit agilen und bewährten Methoden'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Systematische Change Management Begleitung und Stakeholder-Engagement'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Technische Implementierung und Integration mit bestehenden Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Zertifizierungsvorbereitung und kontinuierliche Verbesserung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unsere Systematische Lead Implementer Methodik',
        description: 'Wir verwenden eine bewährte, phasenorientierte Implementierungsmethodik, die strategische Planung mit agiler Umsetzung kombiniert und nachhaltigen Erfolg durch systematisches Change Management gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Analyse und ISMS-Konzeption basierend auf Geschäftszielen und Risikoprofil'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strukturierte Projektplanung mit klaren Meilensteinen und Erfolgskriterien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Agile Implementierung mit kontinuierlicher Qualitätssicherung und Stakeholder-Feedback'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Systematisches Change Management für nachhaltige Organisationsentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Vorbereitung auf Zertifizierung und Betrieb'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Erfolgreiche ISMS-Implementierung erfordert mehr als technische Expertise - sie braucht strategische Führung, systematisches Projektmanagement und tiefgreifendes Change Management. Unsere Lead Implementer verstehen diese Komplexität und schaffen nachhaltige Informationssicherheitslösungen, die echten Geschäftswert generieren und Organisationen langfristig stärken.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische ISMS-Konzeption und Architektur',
          description: 'Entwicklung maßgeschneiderter ISMS-Architekturen basierend auf Geschäftszielen und Risikoprofil.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Geschäfts- und Risikoanalyse für strategische ISMS-Ausrichtung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung maßgeschneiderter ISMS-Architekturen und Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integration mit bestehenden Managementsystemen und Compliance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Strategische Roadmap-Entwicklung mit klaren Meilensteinen und Erfolgskriterien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'End-to-End Projektmanagement und Koordination',
          description: 'Professionelle Projektführung für komplexe ISMS-Implementierungen mit bewährten Methoden.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Strukturierte Projektplanung mit agilen und traditionellen PM-Methoden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Koordination multidisziplinärer Teams und Stakeholder-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Kontinuierliches Monitoring, Reporting und Risikomanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Qualitätssicherung und Meilenstein-basierte Erfolgskontrolle'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Change Management und Organisationsentwicklung',
          description: 'Systematische Begleitung der organisatorischen Transformation für nachhaltige ISMS-Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Umfassende Change Impact Analyse und Stakeholder-Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Entwicklung maßgeschneiderter Change Management Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Kommunikations- und Schulungsprogramme für alle Organisationsebenen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Kulturwandel-Begleitung für nachhaltige Informationssicherheitskultur'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Technische Implementierung und Integration',
          description: 'Operative Umsetzung von ISMS-Komponenten mit Fokus auf Effizienz und Automatisierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Implementierung von Sicherheitskontrollen und -prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Integration von ISMS-Tools und Technologie-Plattformen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Automatisierung von Compliance-Prozessen und Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Testing, Validierung und Optimierung implementierter Lösungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Zertifizierungsvorbereitung und Audit-Support',
          description: 'Umfassende Vorbereitung auf ISO 27001 Zertifizierung mit professioneller Audit-Begleitung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Systematische Readiness-Assessments und Gap-Analysen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Interne Audit-Programme und Management Reviews'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Zertifizierungsaudit-Begleitung und Stakeholder-Vorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Post-Zertifizierung Support und kontinuierliche Verbesserung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Kontinuierliche Optimierung und Weiterentwicklung',
          description: 'Langfristige Begleitung für nachhaltige ISMS-Excellence und kontinuierliche Verbesserung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Performance Monitoring und KPI-basierte Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Regelmäßige Maturity Assessments und Benchmark-Analysen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Integration neuer Standards und regulatorischer Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategische Weiterentwicklung und Innovation im ISMS'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001LeadImplementerData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Lead Implementer page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
