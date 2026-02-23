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
    console.log('Creating EU AI Act Record Keeping page...')

    const euAiActRecordKeepingData = {
      _type: 'servicePage',
      _id: 'eu-ai-act-record-keeping',
      title: 'EU AI Act Record Keeping',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eu-ai-act/eu-ai-act-high-risk-ai-systems/eu-ai-act-record-keeping'
      },
      parent: {
        _type: 'reference',
        _ref: 'eu-ai-act-high-risk-ai-systems'
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
        title: 'EU AI Act Record Keeping | ADVISORI',
        description: 'Erfüllen Sie die Dokumentationspflichten der EU-KI-Verordnung für Hochrisiko-KI-Systeme. ADVISORI unterstützt bei der Implementierung umfassender Record-Keeping-Systeme.',
        keywords: 'EU AI Act, Record Keeping, KI-Verordnung, Hochrisiko-KI-Systeme, Dokumentationspflichten, Compliance, Aufzeichnungen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EU AI Act Record Keeping'
        },
        tagline: 'Umfassende Dokumentation für EU AI Act Compliance',
        heading: 'EU AI Act Record Keeping',
        description: 'Die EU-KI-Verordnung stellt strenge Anforderungen an die Dokumentation und Aufzeichnung von Hochrisiko-KI-Systemen. Wir unterstützen Sie bei der Implementierung rechtssicherer Record-Keeping-Prozesse.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Erfüllung der EU AI Act Dokumentationspflichten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Aufzeichnung von KI-System-Aktivitäten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Rechtssichere Nachweisführung bei Audits und Prüfungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Integration in bestehende IT-Infrastrukturen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EU AI Act Record Keeping',
        description: 'Die EU-KI-Verordnung verlangt von Anbietern und Betreibern von Hochrisiko-KI-Systemen die Führung detaillierter Aufzeichnungen. Diese Dokumentationspflichten sind entscheidend für die Compliance und den Nachweis der ordnungsgemäßen Funktionsweise von KI-Systemen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse der spezifischen Record-Keeping-Anforderungen für Ihr KI-System'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Design und Implementierung automatisierter Logging-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Etablierung von Datenaufbewahrungsrichtlinien und -prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von Record-Keeping in KI-Development-Pipelines'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Schulung der Teams in ordnungsgemäßer Dokumentationspraxis'
          }
        ],
        alert: {
          title: 'Compliance-Hinweis',
          content: 'Unvollständige oder unzureichende Aufzeichnungen können zu erheblichen Bußgeldern unter der EU-KI-Verordnung führen. Eine proaktive Record-Keeping-Strategie ist essentiell für die Compliance.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Kenntnisse der EU AI Act Record-Keeping-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung in der technischen Umsetzung von Compliance-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von rechtlichen bis technischen Aspekten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Bewährte Implementierungsstrategien und Best Practices'
            }
          ]
        },
        additionalInfo: 'Effektive Record-Keeping-Systeme reduzieren nicht nur Compliance-Risiken, sondern verbessern auch die Nachvollziehbarkeit und Qualität Ihrer KI-Systeme durch systematische Dokumentation.',
        serviceDescription: 'Wir bieten umfassende Unterstützung bei der Implementierung EU AI Act-konformer Record-Keeping-Systeme, von der strategischen Planung bis zur technischen Umsetzung und operativen Betreuung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Record-Keeping-Anforderungsanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Automatisierte Logging-System-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Datenaufbewahrungsrichtlinien-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Audit-Trail-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Compliance-Reporting und -Überwachung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln maßgeschneiderte Record-Keeping-Lösungen, die sowohl den regulatorischen Anforderungen entsprechen als auch in Ihre bestehenden Systeme integrierbar sind.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Bewertung Ihrer KI-Systeme und Record-Keeping-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design einer umfassenden Dokumentationsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung automatisierter Aufzeichnungssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende IT-Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Testing, Validierung und kontinuierliche Überwachung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir ein rechtssicheres Record-Keeping-System für unsere KI-Anwendungen implementiert, das nicht nur die EU AI Act-Anforderungen erfüllt, sondern auch unsere interne Qualitätssicherung erheblich verbessert hat.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Record-Keeping-Systemdesign',
          description: 'Entwicklung einer umfassenden Dokumentationsstrategie und technischen Architektur für EU AI Act-konforme Aufzeichnungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse der spezifischen Dokumentationsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Design automatisierter Logging-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Datenmodellierung für strukturierte Aufzeichnungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration in KI-Development-Workflows'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technische Implementierung',
          description: 'Umsetzung robuster und skalierarer Record-Keeping-Infrastrukturen mit automatisierten Prozessen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automatisierte Datenerfassung und -speicherung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Sichere und unveränderliche Audit-Trails'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Real-time Monitoring und Alerting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Compliance-Dashboard und Reporting'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(euAiActRecordKeepingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EU AI Act Record Keeping page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
