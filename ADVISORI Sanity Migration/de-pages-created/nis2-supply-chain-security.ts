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
    console.log('Creating NIS2 Supply Chain Security page...')

    const nis2SupplyChainSecurityData = {
      _type: 'servicePage',
      _id: 'nis2-supply-chain-security',
      title: 'NIS2 Supply Chain Security',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/nis2/nis2-security-measures/nis2-supply-chain-security/'
      },
      parent: {
        _type: 'reference',
        _ref: 'nis2-security-measures'
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
        title: 'NIS2 Supply Chain Security | ADVISORI',
        description: 'Sichern Sie Ihre Lieferkette nach NIS2-Richtlinie. Umfassendes Supply Chain Risk Management, Vendor Assessment und Third-Party Security für kritische Infrastrukturen.',
        keywords: 'NIS2, Supply Chain Security, Lieferkettenrisiko, Third-Party Risk, Vendor Management, Critical Infrastructure, EU-Richtlinie'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIS2 Supply Chain Security'
        },
        tagline: 'NIS2-konforme Lieferkettensicherheit für kritische Infrastrukturen',
        heading: 'NIS2 Supply Chain Security',
        description: 'Die NIS2-Richtlinie verschärft die Anforderungen an die Sicherheit der gesamten Lieferkette. Wir helfen Ihnen dabei, robuste Supply Chain Security-Programme zu implementieren, die sowohl regulatorische Compliance als auch operative Resilienz gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige NIS2-Compliance für Supply Chain Security'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Proaktive Identifikation und Mitigation von Lieferkettenrisiken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Standardisierte Vendor Assessment und Due Diligence Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliches Monitoring der Third-Party Security'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'NIS2-konforme Supply Chain Security',
        description: 'Die NIS2-Richtlinie erweitert die Cybersicherheitsanforderungen explizit auf die gesamte Lieferkette. Kritische und wichtige Einrichtungen müssen sicherstellen, dass auch ihre Lieferanten und Dienstleister angemessene Sicherheitsmaßnahmen implementiert haben. Unser Ansatz kombiniert bewährte Supply Chain Risk Management-Praktiken mit spezifischen NIS2-Anforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Supply Chain Risk Assessment nach NIS2-Kriterien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung NIS2-konformer Vendor Management-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung kontinuierlicher Third-Party Monitoring-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Etablierung von Supply Chain Incident Response-Verfahren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration mit bestehenden Risikomanagement-Systemen'
          }
        ],
        alert: {
          title: 'NIS2-Compliance',
          content: 'Die NIS2-Richtlinie macht Organisationen für Sicherheitsvorfälle in ihrer Lieferkette mitverantwortlich. Eine proaktive Supply Chain Security ist daher nicht nur regulatorische Pflicht, sondern essentiell für den Schutz vor Haftungsrisiken und Reputationsschäden.'
        },
        whyUs: {
          title: 'Unsere Supply Chain Security Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Kenntnis der NIS2-Supply Chain Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodiken für Third-Party Risk Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Expertise für kritische Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitliche Integration von Cyber- und operationellen Risiken'
            }
          ]
        },
        additionalInfo: 'Effektive Supply Chain Security kann das Risiko von Drittanbieter-bedingten Sicherheitsvorfällen um bis zu 70% reduzieren und gleichzeitig die NIS2-Compliance sicherstellen. Investieren Sie in nachhaltige Lieferkettensicherheit!',
        serviceDescription: 'Unser umfassendes NIS2 Supply Chain Security-Programm deckt alle Aspekte des Lieferkettenrisikomanagements ab. Von der initialen Vendor-Bewertung bis zur kontinuierlichen Überwachung entwickeln wir maßgeschneiderte Lösungen, die Ihre spezifischen Geschäftsanforderungen und NIS2-Compliance-Ziele erfüllen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'NIS2-spezifische Supply Chain Risk Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Vendor Security Assessment und Due Diligence'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Third-Party Contract Security Reviews'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kontinuierliches Supply Chain Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Supply Chain Incident Response und Recovery'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser NIS2-Supply Chain Security Vorgehen',
        description: 'Wir entwickeln ein systematisches Supply Chain Security-Programm, das vollständig auf die spezifischen Anforderungen der NIS2-Richtlinie abgestimmt ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Mapping und Klassifizierung der gesamten Lieferkette'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'NIS2-konforme Risikobewertung aller kritischen Lieferanten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung standardisierter Security Assessment-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung kontinuierlicher Monitoring-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung von Supply Chain Incident Response-Verfahren'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns dabei geholfen, ein umfassendes NIS2-konformes Supply Chain Security-Programm zu etablieren. Die systematische Herangehensweise und die praxisnahen Lösungen haben unsere Lieferkettensicherheit erheblich gestärkt und gleichzeitig regulatorische Compliance sichergestellt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Supply Chain Risk Assessment',
          description: 'Umfassende Bewertung Ihrer Lieferkette und Identifikation kritischer Sicherheitsrisiken nach NIS2-Kriterien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Vollständiges Mapping der Lieferkette und Abhängigkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Klassifizierung und Priorisierung kritischer Lieferanten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'NIS2-konforme Risikobewertung und Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung risiko-basierter Mitigation-Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Vendor Security Management',
          description: 'Standardisierte Prozesse für die Sicherheitsbewertung und das kontinuierliche Management von Lieferanten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'NIS2-konforme Vendor Assessment-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Standardisierte Security Questionnaires und Audits'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Contract Security Reviews und SLA-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Vendor Performance Monitoring'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nis2SupplyChainSecurityData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIS2 Supply Chain Security page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
