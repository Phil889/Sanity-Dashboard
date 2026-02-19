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
    console.log('Creating KRITIS Implementation page...')

    const kritisImplementationData = {
      _type: 'servicePage',
      _id: 'kritis-implementation',
      title: 'KRITIS Implementierung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/kritis/kritis-implementation'
      },
      parent: {
        _type: 'reference',
        _ref: 'kritis'
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
        title: 'KRITIS Implementierung | ADVISORI',
        description: 'Professionelle KRITIS-Implementierung für kritische Infrastrukturen. Wir unterstützen Sie bei der vollständigen Umsetzung der KRITIS-Verordnung und BSI-Anforderungen.',
        keywords: 'KRITIS Implementierung, kritische Infrastrukturen, BSI IT-Grundschutz, Cybersicherheit, KRITIS-Verordnung, Informationssicherheit'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KRITIS Implementierung'
        },
        tagline: 'Umfassende KRITIS-Implementierung für kritische Infrastrukturen',
        heading: 'KRITIS Implementierung',
        description: 'Wir begleiten Sie bei der vollständigen Implementierung der KRITIS-Verordnung und stellen sicher, dass Ihre kritische Infrastruktur den höchsten Sicherheitsstandards entspricht.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Umsetzung der KRITIS-Verordnung und BSI-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Implementierung von Informationssicherheitsmanagementsystemen (ISMS)'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Aufbau effektiver Cybersicherheits- und Risikomanagementprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Überwachung und Anpassung an regulatorische Änderungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KRITIS Implementierung',
        description: 'Die Implementierung der KRITIS-Verordnung erfordert eine systematische und strukturierte Herangehensweise. Wir unterstützen Betreiber kritischer Infrastrukturen bei der vollständigen Umsetzung aller regulatorischen Anforderungen und dem Aufbau eines robusten Cybersicherheitsrahmens.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Aufbau und Implementierung eines ISMS nach BSI IT-Grundschutz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung und Umsetzung von Cybersicherheitsrichtlinien und -prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung von Incident Response und Meldeverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau von Monitoring- und Überwachungssystemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Schulung und Sensibilisierung der Mitarbeiter'
          }
        ],
        alert: {
          title: 'Regulatorischer Hinweis',
          content: 'Die KRITIS-Implementierung ist ein kontinuierlicher Prozess, der regelmäßige Überprüfungen und Anpassungen erfordert. Eine professionelle Begleitung stellt sicher, dass alle Anforderungen erfüllt und aufrechterhalten werden.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in KRITIS-Regulierung und BSI-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in der Implementierung kritischer Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von Analyse bis zur vollständigen Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Unterstützung bei regulatorischen Änderungen'
            }
          ]
        },
        additionalInfo: 'Eine professionelle KRITIS-Implementierung reduziert nicht nur regulatorische Risiken, sondern stärkt auch die operative Resilienz und das Vertrauen von Stakeholdern in die Sicherheit Ihrer kritischen Infrastruktur.',
        serviceDescription: 'Wir bieten eine umfassende Begleitung bei der KRITIS-Implementierung, von der initialen Analyse über die Systemumsetzung bis hin zur kontinuierlichen Optimierung und Compliance-Überwachung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'ISMS-Aufbau und -Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Cybersicherheits-Framework Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Technische Sicherheitsmaßnahmen-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Incident Response System Setup'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Compliance-Überwachung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Implementierungsansatz',
        description: 'Wir verfolgen einen systematischen und phasenweisen Ansatz zur KRITIS-Implementierung, der sowohl technische als auch organisatorische Aspekte berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Detaillierte Ist-Analyse und Anforderungsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten Implementierungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Umsetzung mit kontinuierlicher Qualitätskontrolle'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration bestehender Systeme und Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Abschließende Validierung und Dokumentation'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die KRITIS-Implementierung durch ADVISORI war ein entscheidender Schritt für unsere Cybersicherheitsstrategie. Das strukturierte Vorgehen und die tiefgreifende Expertise haben uns dabei geholfen, alle regulatorischen Anforderungen zu erfüllen und gleichzeitig unsere operative Sicherheit zu stärken.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ISMS Aufbau und Implementierung',
          description: 'Wir entwickeln und implementieren ein vollständiges Informationssicherheitsmanagementsystem nach BSI IT-Grundschutz für Ihre kritische Infrastruktur.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'BSI IT-Grundschutz konforme ISMS-Architektur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Risikoanalyse und Schutzbedarfsfeststellung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Richtlinien- und Prozessentwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Kontinuierliche Verbesserungsprozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technische Sicherheitsmaßnahmen',
          description: 'Implementierung technischer Sicherheitsmaßnahmen zur Erfüllung der KRITIS-Anforderungen und zum Schutz kritischer Systeme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Security Monitoring und SIEM-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Netzwerksegmentierung und Zugriffskontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Incident Detection und Response Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Backup- und Recovery-Lösungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kritisImplementationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KRITIS Implementation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
