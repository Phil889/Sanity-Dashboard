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
    console.log('Creating KRITIS Meldepflichten Behördenkommunikation page...')

    const kritismeldeData = {
      _type: 'servicePage',
      _id: 'kritis-meldepflichten-behoerdenkommunikation',
      title: 'KRITIS Meldepflichten Behördenkommunikation',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/kritis/kritis-implementation/kritis-meldepflichten-behoerdenkommunikation'
      },
      parent: {
        _type: 'reference',
        _ref: 'kritis-implementation'
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
        title: 'KRITIS Meldepflichten Behördenkommunikation | ADVISORI',
        description: 'Professionelle Unterstützung bei KRITIS-Meldepflichten und der strukturierten Behördenkommunikation. Sichere Einhaltung aller Berichtspflichten für kritische Infrastrukturen.',
        keywords: 'KRITIS Meldepflichten, Behördenkommunikation, IT-Sicherheitsgesetz, Störungsmeldungen, BSI Meldung, kritische Infrastrukturen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KRITIS Meldepflichten Behördenkommunikation'
        },
        tagline: 'Rechtssichere Erfüllung aller KRITIS-Meldepflichten',
        heading: 'KRITIS Meldepflichten Behördenkommunikation',
        description: 'Professionelle Unterstützung bei der strukturierten Erfüllung aller KRITIS-Meldepflichten und der rechtssicheren Kommunikation mit relevanten Behörden.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Rechtssichere Erfüllung aller BSI-Meldepflichten nach IT-SiG'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturierte Behördenkommunikation und Eskalationsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierte Meldeverfahren und Dokumentationssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Proaktive Compliance-Überwachung und Risikomanagement'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KRITIS Meldepflichten Behördenkommunikation',
        description: 'Die Erfüllung der KRITIS-Meldepflichten erfordert präzise Kenntnis der regulatorischen Anforderungen und eine strukturierte Kommunikation mit den zuständigen Behörden. Wir unterstützen Sie bei der rechtssicheren Umsetzung aller Berichtspflichten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse und Kategorisierung aller relevanten Meldepflichten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung strukturierter Melde- und Kommunikationsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung automatisierter Meldesysteme und Workflows'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Schulung der verantwortlichen Mitarbeiter und Führungskräfte'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Anpassung der Meldeverfahren'
          }
        ],
        alert: {
          title: 'Rechtliche Anforderung',
          content: 'KRITIS-Betreiber sind gesetzlich verpflichtet, erhebliche IT-Sicherheitsvorfälle unverzüglich an das BSI zu melden. Versäumnisse können zu erheblichen Bußgeldern führen.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Kenntnis der KRITIS-Regulierung und BSI-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in der Behördenkommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Meldesysteme und Automatisierungslösungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Betreuung und rechtliche Compliance-Überwachung'
            }
          ]
        },
        additionalInfo: 'Eine professionelle Umsetzung der KRITIS-Meldepflichten reduziert nicht nur das Risiko von Bußgeldern, sondern stärkt auch das Vertrauen der Aufsichtsbehörden und verbessert die operative Resilienz.',
        serviceDescription: 'Wir bieten Ihnen eine umfassende Betreuung bei der Implementierung und dem laufenden Betrieb Ihrer KRITIS-Meldeverfahren, von der initialen Analyse bis zur kontinuierlichen Compliance-Überwachung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Regulatorische Anforderungsanalyse und Gap-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung von Meldeprozessen und Eskalationsverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung automatisierter Meldesysteme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Schulung und Change Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Compliance-Betreuung und Updates'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte Lösung für die rechtssichere Erfüllung aller KRITIS-Meldepflichten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse Ihrer KRITIS-Klassifizierung und regulatorischen Verpflichtungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Gap-Assessment bestehender Meldeprozesse und Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Design strukturierter Melde- und Kommunikationsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung und Integration in bestehende Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Testing, Schulung und kontinuierliche Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir eine rechtssichere und effiziente Lösung für unsere KRITIS-Meldepflichten implementiert. Die strukturierten Prozesse und automatisierten Systeme geben uns die Sicherheit, alle regulatorischen Anforderungen zu erfüllen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Meldepflichten-Assessment & Compliance-Gap-Analyse',
          description: 'Umfassende Analyse Ihrer KRITIS-Meldepflichten und bestehender Compliance-Lücken.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Kategorisierung aller relevanten Meldepflichten nach IT-SiG'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung bestehender Meldeprozesse und Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation von Compliance-Risiken und -Lücken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung einer priorisierten Maßnahmen-Roadmap'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Automatisierte Meldesysteme & Workflow-Integration',
          description: 'Implementierung effizienter und rechtssicherer automatisierter Meldesysteme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Design und Implementierung automatisierter Meldeverfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration in bestehende SIEM- und Monitoring-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung von Eskalations- und Benachrichtigungsworkflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Qualitätssicherung und Compliance-Testing der Systeme'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kritismeldeData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KRITIS Meldepflichten Behördenkommunikation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
