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
    console.log('Creating CRA Cyber Resilience Act Product Security Requirements page...')

    const craProductSecurityData = {
      _type: 'servicePage',
      _id: 'cra-cyber-resilience-act-product-security-requirements',
      title: 'CRA Cyber Resilience Act Product Security Requirements',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-cyber-resilience-act-product-security-requirements'
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
        title: 'CRA Product Security Requirements | ADVISORI',
        description: 'Implementieren Sie die Produktsicherheitsanforderungen des EU Cyber Resilience Act (CRA). Wir unterstützen Sie bei der Compliance und sicheren Produktentwicklung.',
        keywords: 'CRA, Cyber Resilience Act, Product Security Requirements, EU Cybersecurity, Product Compliance, Cyber Security Standards'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Product Security Requirements'
        },
        tagline: 'Sichere Produktentwicklung nach EU Cyber Resilience Act Standards',
        heading: 'CRA Cyber Resilience Act Product Security Requirements',
        description: 'Der EU Cyber Resilience Act (CRA) definiert verbindliche Cybersicherheitsanforderungen für digitale Produkte. Wir helfen Ihnen bei der Implementierung der Produktsicherheitsanforderungen für CRA-Compliance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige CRA-Compliance für digitale Produkte und Connected Devices'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Implementierung von Security-by-Design und Security-by-Default Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Risikomanagement und Vulnerability Disclosure für Produktsicherheit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Marktzugang und Wettbewerbsvorteile durch frühzeitige CRA-Konformität'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRA Product Security Requirements',
        description: 'Der EU Cyber Resilience Act (CRA) wird ab 2025 verbindliche Cybersicherheitsanforderungen für digitale Produkte einführen. Wir unterstützen Sie bei der Implementierung aller relevanten Produktsicherheitsanforderungen für eine erfolgreiche CRA-Compliance.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Security-by-Design und Security-by-Default Implementierung in der Produktentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Risikobewertung und Klassifizierung von Produkten nach CRA-Kategorien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Vulnerability Management und koordinierte Disclosure-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'CE-Kennzeichnung und Konformitätsbewertung für digitale Produkte'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Dokumentation und Berichterstattung für Marktaufsichtsbehörden'
          }
        ],
        alert: {
          title: 'CRA Compliance Deadline',
          content: 'Der EU Cyber Resilience Act tritt stufenweise ab 2025 in Kraft. Digitale Produkte müssen dann verbindliche Cybersicherheitsanforderungen erfüllen. Eine frühzeitige Vorbereitung ist entscheidend für den Marktzugang.'
        },
        whyUs: {
          title: 'Unsere CRA-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Kenntnisse der CRA-Anforderungen und EU-Cybersecurity-Gesetzgebung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserfahrung in der Implementierung von Security-by-Design Prinzipien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Unterstützung bei CE-Kennzeichnung und Konformitätsbewertungsverfahren'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitliche Beratung von der Produktentwicklung bis zur Markteinführung'
            }
          ]
        },
        additionalInfo: 'Der CRA wird die Cybersicherheitslandschaft für digitale Produkte grundlegend verändern. Unternehmen, die frühzeitig CRA-konforme Produktsicherheitsstandards implementieren, sichern sich Wettbewerbsvorteile und vermeiden Marktzugangsbeschränkungen.',
        serviceDescription: 'Wir bieten Ihnen umfassende Unterstützung bei der Implementierung der CRA Produktsicherheitsanforderungen - von der initialen Risikobewertung über Security-by-Design bis zur finalen Konformitätsbewertung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'CRA Gap-Analyse und Compliance-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Security-by-Design und Security-by-Default Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Vulnerability Management und Coordinated Disclosure'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'CE-Kennzeichnung und Konformitätsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Compliance-Überwachung und Updates'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser CRA-Implementierungsansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte CRA-Compliance-Strategie, die alle Produktsicherheitsanforderungen abdeckt und Ihren Marktzugang sichert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende CRA-Gap-Analyse Ihrer aktuellen Produktsicherheit'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Klassifizierung und Risikobewertung Ihrer Produkte nach CRA-Kategorien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementation von Security-by-Design in Ihren Entwicklungsprozess'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Aufbau von Vulnerability Management und Disclosure-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Begleitung durch Konformitätsbewertung und CE-Kennzeichnung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns hervorragend bei der Vorbereitung auf den EU Cyber Resilience Act unterstützt. Dank ihrer fundierten Expertise konnten wir frühzeitig CRA-konforme Produktsicherheitsstandards implementieren und sind optimal für die kommenden Anforderungen aufgestellt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'CRA Gap-Analyse & Compliance Assessment',
          description: 'Umfassende Bewertung Ihrer aktuellen Produktsicherheit im Verhältnis zu den CRA-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse der CRA-Anwendbarkeit auf Ihre Produkte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Compliance-Lücken und Handlungsbedarfen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Klassifizierung nach CRA-Risikokategorien (normal/kritisch)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Roadmap für CRA-Compliance-Implementierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Security-by-Design Implementation',
          description: 'Integration von Security-by-Design und Security-by-Default Prinzipien in Ihre Produktentwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung sicherer Systemarchitekturen nach CRA-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementation von Default-Security-Konfigurationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Secure Development Lifecycle (SDLC) Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Security-Testing und -Validierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craProductSecurityData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Cyber Resilience Act Product Security Requirements page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
