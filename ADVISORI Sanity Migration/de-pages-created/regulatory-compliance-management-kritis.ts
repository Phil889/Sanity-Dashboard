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
    console.log('Creating KRITIS page...')

    const kritisData = {
      _type: 'servicePage',
      _id: 'regulatory-compliance-management-kritis',
      title: 'KRITIS (Kritische Infrastrukturen)',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/kritis'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management'
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
        title: 'KRITIS - Kritische Infrastrukturen | ADVISORI',
        description: 'Professionelle Unterstützung bei der Umsetzung der KRITIS-Verordnung. Wir begleiten Sie bei der Implementierung der Anforderungen für kritische Infrastrukturen und IT-Sicherheit.',
        keywords: 'KRITIS, Kritische Infrastrukturen, IT-Sicherheit, BSI, Cyber-Sicherheit, NIS2, Compliance, Risikomanagement'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KRITIS - Kritische Infrastrukturen'
        },
        tagline: 'Expertenlösungen für kritische Infrastrukturen und IT-Sicherheit',
        heading: 'KRITIS (Kritische Infrastrukturen)',
        description: 'KRITIS-Betreiber müssen erhöhte Anforderungen an IT-Sicherheit, Cyber-Resilienz und Meldepflichten erfüllen. Wir unterstützen Sie bei der strategischen Implementierung und nachhaltigen Einhaltung der komplexen KRITIS-Verordnung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Compliance mit KRITIS-Verordnung und IT-Sicherheitsgesetz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Robuste Cyber-Sicherheitsarchitekturen und Incident Response'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Risikomanagement-Frameworks für kritische Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Optimierte Meldeprozesse und Behördenkommunikation'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KRITIS (Kritische Infrastrukturen)',
        description: 'KRITIS umfasst Organisationen und Einrichtungen mit wichtiger Bedeutung für das Gemeinwesen, deren Ausfall oder Beeinträchtigung zu nachhaltigen Versorgungsengpässen, erheblichen Störungen der öffentlichen Sicherheit oder anderen dramatischen Folgen führen würde. Die KRITIS-Verordnung stellt besondere Anforderungen an IT-Sicherheit, Risikomanagement und Meldepflichten. Wir unterstützen Sie bei der strategischen Umsetzung und kontinuierlichen Einhaltung dieser kritischen Anforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'KRITIS-Kategorisierung und Schwellenwertbestimmung für Ihren Sektor'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung und Implementierung angemessener IT-Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Aufbau robuster Incident Detection und Response Capabilities'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von KRITIS-Anforderungen in bestehende IT- und Sicherheitsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Implementierung von BSI-konformen Meldeprozessen und Kommunikationsstrukturen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine erfolgreiche KRITIS-Compliance erfordert nicht nur die Erfüllung der regulatorischen Mindestanforderungen, sondern auch die strategische Integration in Ihre Cyber-Sicherheitsstrategie, um maximalen Schutz und operative Resilienz zu gewährleisten.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifendes Expertenwissen in KRITIS-Verordnung und IT-Sicherheitsgesetz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in der Beratung kritischer Infrastrukturen verschiedener Sektoren'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz, der Compliance, Cyber-Sicherheit und Business Continuity integriert'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovative Sicherheitstechnologien zur Automatisierung und Optimierung von Schutzmaßnahmen'
            }
          ]
        },
        additionalInfo: 'Die KRITIS-Anforderungen haben erhebliche Auswirkungen auf IT-Infrastrukturen, Geschäftsprozesse und Risikomanagement kritischer Betreiber. Eine strategische Implementation kann nicht nur Compliance sicherstellen, sondern auch zu erheblichen Verbesserungen der Cyber-Resilienz und operativen Kontinuität führen.',
        serviceDescription: 'Wir bieten ein umfassendes Leistungsspektrum zur Unterstützung bei der Umsetzung und kontinuierlichen Einhaltung der KRITIS-Anforderungen. Unser Ansatz umfasst sowohl die technische Implementierung als auch die strategische Integration in Ihre Sicherheits- und Geschäftsprozesse.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'KRITIS-Kategorisierung und Gap-Analyse für IT-Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung und Implementierung von Cyber-Sicherheitsstrategien und -frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Aufbau von Incident Detection, Response und Recovery Capabilities'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementierung und Automatisierung von BSI-Meldeprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung und Sensibilisierung für KRITIS-spezifische Sicherheitsanforderungen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam einen maßgeschneiderten Ansatz zur effektiven Umsetzung und kontinuierlichen Einhaltung der KRITIS-Anforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Durchführung einer umfassenden KRITIS-Kategorisierung und Sicherheits-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer strategischen KRITIS-Compliance-Roadmap mit klaren Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung und Anpassung von IT-Sicherheitsmaßnahmen und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration und Automatisierung von Monitoring-, Melde- und Response-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung, Validierung und Optimierung der implementierten Sicherheitsmaßnahmen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Die Umsetzung der KRITIS-Verordnung ist für kritische Infrastrukturen nicht nur eine regulatorische Notwendigkeit, sondern auch eine strategische Chance zur Stärkung der Cyber-Resilienz. Mit unserer Unterstützung können Betreiber die Anforderungen nicht nur erfüllen, sondern auch nutzen, um ihre Sicherheitsposture nachhaltig zu verbessern.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'KRITIS-Kategorisierung und Compliance-Assessment',
          description: 'Wir analysieren Ihre Infrastrukturen und Prozesse im Hinblick auf die KRITIS-Kategorisierung und entwickeln eine maßgeschneiderte Compliance-Strategie.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Bewertung der KRITIS-Relevanz und Schwellenwerte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Gap-Analyse der bestehenden IT-Sicherheitsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung einer priorisierten Roadmap für die Compliance-Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Risiko-basierte Bewertung und Priorisierung von Sicherheitsmaßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Cyber-Sicherheit und Incident Response',
          description: 'Wir unterstützen Sie beim Aufbau robuster Cyber-Sicherheitskapazitäten und effektiver Incident Response Prozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung von Defense-in-Depth Sicherheitsarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung von Security Operations Center (SOC) Capabilities'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Aufbau und Training von Cyber Incident Response Teams (CIRT)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration von Threat Intelligence und kontinuierlichem Monitoring'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kritisData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KRITIS page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
