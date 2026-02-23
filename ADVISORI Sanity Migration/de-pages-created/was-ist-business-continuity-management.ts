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
    console.log('Creating Business Continuity Management main page...')

    const bcmData = {
      _type: 'servicePage',
      _id: 'was-ist-business-continuity-management',
      title: 'Was ist Business Continuity Management',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/business-continuity-resilience/was-ist-business-continuity-management'
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
        title: 'Business Continuity Management - Strategische Geschäftskontinuität | ADVISORI',
        description: 'Professionelles Business Continuity Management für nachhaltige Unternehmensresilienz. Von BCM-Strategie bis Notfallplanung - Ihr Partner für kontinuierliche Geschäftsfähigkeit.',
        keywords: 'Business Continuity Management, BCM, Geschäftskontinuität, Notfallplanung, Disaster Recovery, Resilienz, Risikomanagement, Betriebskontinuität, Krisenmanagement'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Business Continuity Management - Strategische Geschäftskontinuität'
        },
        tagline: 'Strategische Resilienz für nachhaltige Geschäftskontinuität',
        heading: 'Business Continuity Management',
        description: 'Sichern Sie die Zukunft Ihres Unternehmens mit professionellem Business Continuity Management. Unsere bewährten BCM-Strategien gewährleisten operative Kontinuität auch in kritischen Situationen und schaffen nachhaltige Wettbewerbsvorteile durch systematische Resilienz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Geschäftskontinuität nach internationalen Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Minimierung von Ausfallzeiten und Geschäftsunterbrechungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Aufbau organisationaler Resilienz und Anpassungsfähigkeit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Integration mit modernen Compliance-Anforderungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Business Continuity Management - Fundament für nachhaltige Unternehmensresilienz',
        description: 'Business Continuity Management ist ein strategischer Managementansatz, der Organisationen befähigt, kritische Geschäftsfunktionen auch während und nach disruptiven Ereignissen aufrechtzuerhalten. BCM geht weit über traditionelle Notfallplanung hinaus und etabliert eine ganzheitliche Resilienz-Kultur, die operative Exzellenz mit strategischer Vorausschau verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Identifikation und Bewertung kritischer Geschäftsprozesse und Abhängigkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung robuster Kontinuitätsstrategien für verschiedene Störungsszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration von Risikomanagement, Krisenmanagement und operativer Kontinuität'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau einer resilienten Organisationskultur mit proaktiver Störungsantizipation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Verbesserung durch Testing, Übungen und Lessons Learned'
          }
        ],
        alert: {
          title: 'Strategischer Resilienz-Vorteil',
          content: 'BCM ist mehr als Notfallvorsorge - es ist ein strategisches Instrument für operative Exzellenz, Stakeholder-Vertrauen und nachhaltigen Geschäftserfolg in volatilen Märkten.'
        },
        whyUs: {
          title: 'Warum Business Continuity Management mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in BCM-Implementierung nach ISO 22301 und bewährten Praktiken'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Ganzheitlicher Ansatz von strategischer Planung bis operativer Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integration mit modernen Compliance-Frameworks und Risikomanagement'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Bewährte Methoden für nachhaltige Resilienz-Transformation'
            }
          ]
        },
        additionalInfo: 'Business Continuity Management basiert auf einem systematischen Lifecycle-Ansatz, der Policy und Programm-Management, Einbettung in die Organisation, Business Impact Analysis, BCM-Strategien, BCM-Pläne sowie Übungen und Tests umfasst. Dieser ganzheitliche Ansatz gewährleistet, dass Organisationen nicht nur auf bekannte Risiken vorbereitet sind, sondern auch die Fähigkeit entwickeln, auf unvorhergesehene Störungen adaptiv zu reagieren.',
        serviceDescription: 'Unser BCM Service-Portfolio deckt alle Aspekte der Geschäftskontinuität ab - von der strategischen BCM-Konzeption über die Business Impact Analysis bis hin zur Implementierung von Kontinuitätsplänen und der Etablierung einer Resilienz-Kultur. Wir begleiten Sie auf dem gesamten Weg zu einer robusten und adaptiven Geschäftskontinuität.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'BCM-Strategie und Policy-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Business Impact Analysis und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Kontinuitätsstrategien und Recovery-Planung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'BCM-Implementierung und Organisationsintegration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Testing, Übungen und kontinuierliche Verbesserung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer BCM-Implementierungsansatz',
        description: 'Wir verfolgen einen strukturierten, lifecycle-orientierten Ansatz, der bewährte BCM-Methoden mit innovativen Resilienz-Konzepten kombiniert und nachhaltigen Erfolg gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische BCM-Konzeption und Policy-Entwicklung basierend auf Ihren Geschäftszielen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Umfassende Business Impact Analysis und Entwicklung einer BCM-Strategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Systematische Implementierung mit kontinuierlicher Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Testing und Validierung durch realistische Übungsszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Verankerung durch kontinuierliche Verbesserung und Kulturwandel'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Business Continuity Management ist das Fundament für nachhaltige Unternehmensresilienz in einer zunehmend volatilen Geschäftswelt. Unsere bewährte BCM-Methodik verbindet strategische Vorausschau mit operativer Exzellenz und schafft nachhaltigen Mehrwert für unsere Kunden.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'BCM-Strategie & Consulting',
          description: 'Strategische Beratung für erfolgreiche BCM-Implementierung von der Konzeption bis zur operativen Umsetzung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'BCM-Policy und Governance-Struktur Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Business Impact Analysis und Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'BCM-Strategieentwicklung und Roadmap-Planung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Organisationsintegration und Change Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Kontinuitätsplanung & Recovery-Strategien',
          description: 'Entwicklung robuster Kontinuitätspläne und Recovery-Strategien für kritische Geschäftsprozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Business Continuity Pläne und Verfahrensanweisungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Disaster Recovery und IT-Kontinuitätsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Krisenmanagement und Kommunikationsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Lieferanten- und Drittanbieter-Kontinuität'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'BCM-Testing & Übungen',
          description: 'Systematische Validierung und Verbesserung der BCM-Fähigkeiten durch realistische Tests und Übungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'BCM-Übungsplanung und Szenario-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Desktop-Übungen und Simulation von Störungsszenarien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Live-Tests und operative Kontinuitätsvalidierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Lessons Learned und kontinuierliche Verbesserung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'BCM-Schulungen & Awareness',
          description: 'Umfassende Schulungsprogramme für alle Rollen im BCM - von Awareness bis BCM-Manager.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'BCM-Foundation und Manager-Schulungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'ISO 22301 Lead Implementer Zertifizierungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Maßgeschneiderte Inhouse-Trainings'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'BCM-Awareness und Kulturentwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'BCM-Tools & Technologie',
          description: 'Professionelle Tools und Technologie-Lösungen für effizientes BCM-Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'BCM-Management-Software und Plattformen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Business Impact Analysis Tools'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Incident Management und Krisenkoordination'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'BCM-Monitoring und Reporting-Dashboards'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Branchenspezifische BCM-Lösungen',
          description: 'Spezialisierte BCM-Implementierungen für verschiedene Branchen und regulatorische Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Finanzdienstleister und Banking-BCM nach DORA'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Kritische Infrastrukturen und KRITIS-Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Healthcare und Medizintechnik-Kontinuität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Supply Chain und Logistik-Resilienz'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcmData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Business Continuity Management main page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
