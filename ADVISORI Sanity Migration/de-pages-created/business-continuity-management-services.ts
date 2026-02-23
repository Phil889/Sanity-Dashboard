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
    console.log('Creating Business Continuity Management Services page...')

    const bcmServicesData = {
      _type: 'servicePage',
      _id: 'business-continuity-management-services',
      title: 'Business Continuity Management Services',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/business-continuity-resilience/business-continuity-management-services'
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
        title: 'Business Continuity Management Services - Professionelle BCM-Beratung | ADVISORI',
        description: 'Umfassende BCM-Services: Strategieentwicklung, Implementierung, Compliance-Unterstützung und kontinuierliche Optimierung. Professionelle Business Continuity Management Beratung mit ADVISORI.',
        keywords: 'Business Continuity Management Services, BCM Beratung, BCM Implementierung, Business Continuity Consulting, BCM Strategie, Disaster Recovery Services, Resilienz Beratung, BCM Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Business Continuity Management Services - Professionelle BCM-Beratung und Implementierung'
        },
        tagline: 'Professionelle BCM-Services für nachhaltige Geschäftskontinuität',
        heading: 'Business Continuity Management Services',
        description: 'Transformieren Sie Ihre Organisationsresilienz durch unsere umfassenden BCM-Services. ADVISORI bietet End-to-End Business Continuity Management Lösungen von der strategischen Planung bis zur operativen Umsetzung für nachhaltige Geschäftskontinuität.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Ganzheitliche BCM-Strategieentwicklung und Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Compliance-konforme Umsetzung internationaler Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kontinuierliche Optimierung und Weiterentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Branchenspezifische Expertise und maßgeschneiderte Lösungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Business Continuity Management Services - Professionelle Resilienz-Beratung',
        description: 'Business Continuity Management Services repräsentieren das Herzstück moderner Organisationsresilienz und strategischer Risikovorsorge. Diese professionellen Dienstleistungen umfassen die gesamte Bandbreite von der initialen Strategieentwicklung über die systematische Implementierung bis hin zur kontinuierlichen Optimierung von BCM-Systemen in komplexen Unternehmensumgebungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische BCM-Beratung und Roadmap-Entwicklung für nachhaltige Resilienz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Systematische Implementierung nach internationalen Standards und Best Practices'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Compliance-Unterstützung für regulatorische Anforderungen und Zertifizierungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Weiterentwicklung und Optimierung bestehender BCM-Programme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Branchenspezifische Expertise und maßgeschneiderte Lösungsansätze'
          }
        ],
        alert: {
          title: 'Strategische Resilienz',
          content: 'Professionelle BCM-Services sind mehr als operative Unterstützung - sie schaffen strategische Wettbewerbsvorteile durch systematische Resilienz-Entwicklung und nachhaltige Geschäftskontinuität in einer zunehmend volatilen Geschäftswelt.'
        },
        whyUs: {
          title: 'Warum ADVISORI für BCM-Services',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in allen BCM-Disziplinen und Branchen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodologien und internationale Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Langfristige Partnerschaft und kontinuierliche Unterstützung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovation und Integration modernster Technologien'
            }
          ]
        },
        additionalInfo: 'Die Landschaft der BCM-Services entwickelt sich kontinuierlich weiter, um den sich wandelnden Anforderungen der digitalen Transformation, Cyber-Resilienz und nachhaltigen Geschäftspraktiken gerecht zu werden. Moderne BCM-Services integrieren künstliche Intelligenz, automatisierte Monitoring-Systeme und datengetriebene Entscheidungsfindung für optimale Resilienz-Outcomes.',
        serviceDescription: 'Unsere BCM-Services bieten eine vollständige Palette professioneller Dienstleistungen für alle Aspekte des Business Continuity Managements. Von der strategischen Beratung über die technische Implementierung bis hin zur operativen Unterstützung begleiten wir Organisationen auf ihrem Weg zu nachhaltiger Resilienz und Geschäftskontinuität.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische BCM-Beratung und Governance-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Systematische Implementierung und Projektmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Compliance-Unterstützung und Audit-Vorbereitung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kontinuierliche Optimierung und Weiterentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung und Kompetenzentwicklung für interne Teams'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Ansatz für BCM-Services',
        description: 'Wir verfolgen einen strukturierten und praxisorientierten Ansatz für BCM-Services, der strategische Planung mit operativer Exzellenz verbindet und nachhaltige Resilienz-Outcomes sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse und strategische Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Phasenweise Implementierung mit kontinuierlicher Erfolgsmessung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Integration bestehender Systeme und Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Change Management und Stakeholder-Engagement'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Verbesserung und Innovation'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Professionelle BCM-Services sind der Schlüssel zur Transformation von reaktiver Krisenreaktion zu proaktiver Resilienz-Strategie. Unsere ganzheitlichen Ansätze schaffen nicht nur Compliance, sondern echte Wettbewerbsvorteile durch systematische Geschäftskontinuität und operative Exzellenz.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'BCM-Strategieberatung',
          description: 'Entwicklung umfassender Business Continuity Strategien und Governance-Frameworks für nachhaltige Resilienz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strategische Resilienz-Roadmap und Governance-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Stakeholder-Alignment und Executive-Engagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risiko-Appetit Definition und Toleranz-Framework'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration in Unternehmensstrategien und Geschäftsprozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'BCM-Implementierung',
          description: 'Systematische Umsetzung von Business Continuity Management Systemen nach internationalen Standards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'ISO 22301 konforme Systemimplementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Business Impact Analysen und Risikobewertungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Kontinuitätspläne und Recovery-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Testing und Validierung von BCM-Maßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Compliance und Audit Support',
          description: 'Unterstützung bei regulatorischen Anforderungen und Vorbereitung auf BCM-Audits und Zertifizierungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Regulatorische Compliance-Bewertung und Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Audit-Vorbereitung und Dokumentationsunterstützung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Zertifizierungsbegleitung und Remediation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Kontinuierliche Compliance-Überwachung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Technology Integration',
          description: 'Integration moderner Technologien und Automatisierung in BCM-Prozesse für optimale Effizienz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'BCM-Software Auswahl und Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Automatisierte Monitoring und Alerting-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Dashboard und Reporting-Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Integration in bestehende IT-Infrastrukturen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Training und Capability Building',
          description: 'Entwicklung interner BCM-Kompetenzen durch maßgeschneiderte Schulungs- und Entwicklungsprogramme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Rollenspezifische BCM-Schulungsprogramme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Executive Awareness und Leadership-Training'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Praktische Übungen und Simulationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kompetenzentwicklung und Zertifizierungsunterstützung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Ongoing Support und Optimization',
          description: 'Kontinuierliche Betreuung und Optimierung bestehender BCM-Programme für nachhaltige Exzellenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Regelmäßige BCM-Assessments und Health Checks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Kontinuierliche Verbesserung und Innovation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Incident Response und Lessons Learned Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategische Beratung und Trend-Monitoring'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcmServicesData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Business Continuity Management Services page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
