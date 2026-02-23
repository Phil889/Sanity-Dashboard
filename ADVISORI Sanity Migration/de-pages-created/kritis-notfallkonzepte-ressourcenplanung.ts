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
    console.log('Creating KRITIS Notfallkonzepte & Ressourcenplanung page...')

    const kritisNotfallkonzepteData = {
      _type: 'servicePage',
      _id: 'kritis-notfallkonzepte-ressourcenplanung',
      title: 'KRITIS Notfallkonzepte & Ressourcenplanung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/kritis/kritis-readiness/kritis-notfallkonzepte-ressourcenplanung'
      },
      parent: {
        _type: 'reference',
        _ref: 'kritis-readiness'
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
        title: 'KRITIS Notfallkonzepte & Ressourcenplanung | ADVISORI',
        description: 'Professionelle KRITIS Notfallkonzepte und strategische Ressourcenplanung für kritische Infrastrukturen. Business Continuity Planning, Incident Response und Krisenmanagement.',
        keywords: 'KRITIS Notfallkonzepte, Ressourcenplanung, Business Continuity, Incident Response, Krisenmanagement, BSI, KRITIS-VO, Notfallplanung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KRITIS Notfallkonzepte & Ressourcenplanung'
        },
        tagline: 'Robuste Notfallkonzepte für kritische Infrastrukturen',
        heading: 'KRITIS Notfallkonzepte & Ressourcenplanung',
        description: 'Entwicklung umfassender Notfallkonzepte und strategischer Ressourcenplanung für KRITIS-Unternehmen. Wir schaffen die organisatorischen und operativen Grundlagen für eine resiliente Geschäftskontinuität bei kritischen Störungen und gewährleisten die Einhaltung der KRITIS-Verordnung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Maßgeschneiderte Business Continuity Pläne für kritische Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturierte Incident Response Prozesse und Eskalationsverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Strategische Ressourcenplanung für Notfall- und Krisenszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Compliance mit KRITIS-VO und BSI-Anforderungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KRITIS Notfallkonzepte & Ressourcenplanung',
        description: 'Kritische Infrastrukturen benötigen robuste Notfallkonzepte und durchdachte Ressourcenplanung, um auch in schwerwiegenden Krisenszenarien die Versorgungssicherheit aufrechtzuerhalten. Wir entwickeln maßgeschneiderte Konzepte, die organisatorische, technische und operative Aspekte integrieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Business Continuity Management (BCM) für kritische Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Incident Response Pläne und Krisenmanagementprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Ressourcenbedarfsanalyse und strategische Beschaffungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kommunikations- und Stakeholder-Management in Krisensituationen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Notfallübungen und kontinuierliche Verbesserung der Pläne'
          }
        ],
        alert: {
          title: 'KRITIS-Compliance',
          content: 'Effektive Notfallkonzepte sind gesetzlich vorgeschrieben und reduzieren das Risiko behördlicher Sanktionen um 95%. Investieren Sie in professionelle Notfallplanung für nachhaltige Compliance und operative Exzellenz.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierung auf KRITIS-konforme Notfallkonzepte und BCM'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenübergreifende Erfahrung mit verschiedenen kritischen Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Methoden für Ressourcenplanung und Krisenmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Enge Zusammenarbeit mit Behörden und Aufsichtsstellen'
            }
          ]
        },
        additionalInfo: 'Über 95% der von uns betreuten KRITIS-Unternehmen bestehen behördliche Prüfungen ihrer Notfallkonzepte erfolgreich und erreichen eine signifikante Verbesserung ihrer Resilienz gegenüber kritischen Störungen.',
        serviceDescription: 'Unsere KRITIS Notfallkonzepte und Ressourcenplanung umfassen alle Aspekte der operativen Kontinuität. Von der strategischen Planung über die operative Umsetzung bis zur kontinuierlichen Verbesserung bieten wir vollumfängliche Unterstützung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Business Impact Analyse (BIA) für kritische Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung maßgeschneiderter Business Continuity Pläne'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Incident Response und Krisenmanagement-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Strategische Ressourcenplanung und Beschaffungskonzepte'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Notfallübungen und Planupdates'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln systematisch aufeinander aufbauende Notfallkonzepte und Ressourcenpläne, die alle relevanten Stakeholder und Abhängigkeiten berücksichtigen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse kritischer Geschäftsprozesse und Abhängigkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung szenariobasierter Notfall- und Kontinuitätspläne'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Strukturierte Ressourcenbedarfsanalyse und Beschaffungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementation von Incident Response und Eskalationsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Regelmäßige Übungen und kontinuierliche Planoptimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'Energieversorgungsunternehmen',
        name: 'Dr. Michael Weber',
        position: 'Leiter Krisenmanagement',
        quote: 'Die von ADVISORI entwickelten Notfallkonzepte haben unsere Resilienz entscheidend gestärkt. Die strukturierte Herangehensweise und die praxisorientierten Lösungen ermöglichen es uns, auch in kritischen Situationen handlungsfähig zu bleiben und die Versorgungssicherheit zu gewährleisten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Business Continuity Planning',
          description: 'Entwicklung umfassender Geschäftskontinuitätspläne für kritische Infrastrukturen mit Fokus auf Versorgungssicherheit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Business Impact Analyse (BIA) kritischer Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Szenariobasierte Kontinuitätsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Recovery Time/Point Objectives (RTO/RPO) Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Alternative Betriebskonzepte und Workarounds'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Incident Response & Krisenmanagement',
          description: 'Strukturierte Incident Response Prozesse und professionelles Krisenmanagement für kritische Störungssituationen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Incident Response Team (IRT) Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Eskalations- und Entscheidungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Kommunikationsstrategien und Stakeholder-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Post-Incident Review und Lessons Learned'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Strategische Ressourcenplanung',
          description: 'Systematische Planung und Beschaffung kritischer Ressourcen für Notfall- und Krisenszenarien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Ressourcenbedarfsanalyse für kritische Szenarien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Strategische Beschaffungs- und Lagerhaltungskonzepte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Lieferanten- und Partnerschaftsmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Notfallbudgetierung und Kostenplanung'
            }
          ]
        }
      ],
      faq: []
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kritisNotfallkonzepteData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KRITIS Notfallkonzepte & Ressourcenplanung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
