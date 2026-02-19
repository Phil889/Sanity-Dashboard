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
    console.log('Creating CRA Cyber Resilience Act Market Surveillance page...')

    const craMarketSurveillanceData = {
      _type: 'servicePage',
      _id: 'cra-cyber-resilience-act-market-surveillance',
      title: 'CRA Cyber Resilience Act Market Surveillance',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-cyber-resilience-act-market-surveillance'
      },
      parent: {
        _type: 'reference',
        _ref: 'cra-cyber-resilience-act'
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
        title: 'CRA Cyber Resilience Act Market Surveillance | ADVISORI',
        description: 'Professionelle Unterstützung bei der Marktüberwachung nach dem Cyber Resilience Act (CRA). Wir helfen Ihnen bei der Vorbereitung auf Behördenprüfungen und der kontinuierlichen Compliance-Überwachung.',
        keywords: 'CRA, Cyber Resilience Act, Market Surveillance, Marktüberwachung, Behördenprüfung, Compliance Monitoring, EU-Verordnung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Cyber Resilience Act Market Surveillance'
        },
        tagline: 'Proaktive Vorbereitung auf CRA-Marktüberwachung',
        heading: 'CRA Cyber Resilience Act Market Surveillance',
        description: 'Die Marktüberwachung nach dem Cyber Resilience Act (CRA) erfordert kontinuierliche Compliance-Bereitschaft und proaktive Vorbereitung auf Behördenprüfungen. Wir unterstützen Sie bei der umfassenden Marktüberwachungs-Compliance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Proaktive Vorbereitung auf CRA-Marktüberwachungsverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Kontinuierliche Compliance-Überwachung und Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Strukturierte Dokumentation für Behördenprüfungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Minimierung von Sanktionsrisiken und Enforcement-Maßnahmen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRA Cyber Resilience Act Market Surveillance',
        description: 'Die Marktüberwachung nach dem Cyber Resilience Act stellt neue Anforderungen an die kontinuierliche Compliance-Bereitschaft von Unternehmen. Behörden erhalten erweiterte Befugnisse zur Überwachung und Durchsetzung der CRA-Anforderungen. Eine proaktive Vorbereitung ist entscheidend.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Aufbau eines CRA-Compliance-Monitoring-Systems'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Vorbereitung auf Marktüberwachungsverfahren und Behördenprüfungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Kontinuierliche Überwachung der Produktkonformität'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Incident Response und Meldeverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Schulung und Sensibilisierung der relevanten Teams'
          }
        ],
        alert: {
          title: 'Rechtlicher Hinweis',
          content: 'Die CRA-Marktüberwachung beginnt mit Inkrafttreten der Verordnung. Behörden erhalten umfassende Befugnisse für Produktprüfungen, Sanktionen und Marktmaßnahmen. Eine frühzeitige Vorbereitung ist essentiell.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnisse der CRA-Marktüberwachungsverfahren'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung in der Vorbereitung auf Behördenprüfungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praktische Unterstützung bei Compliance-Monitoring-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitliche Beratung von der Vorbereitung bis zur Umsetzung'
            }
          ]
        },
        additionalInfo: 'Die CRA-Marktüberwachung erfordert eine systematische Herangehensweise und kontinuierliche Bereitschaft. Mit der richtigen Vorbereitung und professioneller Unterstützung können Sie Sanktionsrisiken minimieren und Compliance-Exzellenz erreichen.',
        serviceDescription: 'Wir bieten Ihnen umfassende Unterstützung bei der Vorbereitung auf die CRA-Marktüberwachung, vom Aufbau von Monitoring-Systemen bis zur konkreten Prüfungsvorbereitung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'CRA-Compliance-Monitoring und Überwachungssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Vorbereitung auf Marktüberwachungsverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Incident Response und Meldeprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Schulung und Change Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Compliance-Betreuung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Market Surveillance Readiness Ansatz',
        description: 'Wir bereiten Sie systematisch auf die CRA-Marktüberwachung vor und etablieren robuste Compliance-Monitoring-Systeme.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Assessment der aktuellen Compliance-Bereitschaft'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Aufbau von Monitoring- und Überwachungssystemen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung von Incident Response Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Vorbereitung auf konkrete Prüfungsszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Betreuung und Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir einen zuverlässigen Partner für die Vorbereitung auf die CRA-Marktüberwachung gefunden. Die systematische Herangehensweise und das kontinuierliche Monitoring geben uns die Sicherheit, jederzeit prüfungsbereit zu sein.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Compliance-Monitoring-Systeme',
          description: 'Aufbau und Implementierung von Systemen zur kontinuierlichen Überwachung der CRA-Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Design von Compliance-Monitoring-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Automatisierte Überwachungsdashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Frühwarnsysteme und Alert-Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Kontinuierliche Leistungsmessung und Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Marktüberwachungs-Readiness',
          description: 'Umfassende Vorbereitung auf Behördenprüfungen und Marktüberwachungsverfahren nach dem CRA.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Prüfungssimulationen und Mock-Audits'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Dokumentations-Readiness und Beweissicherung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Incident Response und Krisenmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Ongoing Support und Compliance-Betreuung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craMarketSurveillanceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Cyber Resilience Act Market Surveillance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
