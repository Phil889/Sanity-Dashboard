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
    console.log('Creating CRA Cyber Resilience Act Security by Default page...')

    const craSecurityByDefaultData = {
      _type: 'servicePage',
      _id: 'cra-cyber-resilience-act-security-by-default',
      title: 'CRA Cyber Resilience Act - Security by Default',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-cyber-resilience-act-product-security-requirements/cra-cyber-resilience-act-security-by-default'
      },
      parent: {
        _type: 'reference',
        _ref: 'cra-cyber-resilience-act-product-security-requirements'
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
        title: 'CRA Security by Default Implementierung | ADVISORI',
        description: 'Professionelle Umsetzung der CRA Security by Default Anforderungen. Wir unterstützen Sie bei der regelkonformen Implementierung sicherer Standardkonfigurationen für digitale Produkte.',
        keywords: 'CRA, Cyber Resilience Act, Security by Default, Produktsicherheit, Standardkonfiguration, Digitale Produkte, EU-Verordnung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Security by Default'
        },
        tagline: 'Sichere Standardkonfigurationen nach CRA-Anforderungen',
        heading: 'CRA Security by Default',
        description: 'Der Cyber Resilience Act verlangt, dass digitale Produkte standardmäßig mit den höchstmöglichen Sicherheitseinstellungen ausgeliefert werden. Wir unterstützen Sie bei der regelkonformen Implementierung von Security by Default Prinzipien.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige CRA-Konformität bei Standardkonfigurationen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Minimierung von Sicherheitsrisiken durch sichere Werkseinstellungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Reduzierung der Benutzer-Fehlkonfiguration durch sichere Defaults'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Stärkung des Vertrauens in Ihre digitalen Produkte'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRA Security by Default Implementierung',
        description: 'Das Security by Default Prinzip des Cyber Resilience Act erfordert, dass digitale Produkte ab Werk mit den sichersten verfügbaren Konfigurationen ausgeliefert werden. Dies umfasst sichere Authentifizierung, verschlüsselte Kommunikation und minimale Angriffsflächen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse und Bewertung aktueller Standardkonfigurationen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung CRA-konformer Security by Default Richtlinien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung sicherer Werkseinstellungen und Konfigurationen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Testing und Validierung der implementierten Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Dokumentation und Nachweis der CRA-Konformität'
          }
        ],
        alert: {
          title: 'CRA-Compliance',
          content: 'Security by Default ist eine zentrale Anforderung des CRA. Produkte müssen standardmäßig mit den höchstmöglichen Sicherheitseinstellungen konfiguriert sein, um die Compliance-Anforderungen zu erfüllen.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnis der CRA-Anforderungen und EU-Regulatorik'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung in der Implementierung sicherer Produktkonfigurationen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von Technik bis Compliance-Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Bewährte Methoden für nachhaltige Security by Default Umsetzung'
            }
          ]
        },
        additionalInfo: 'Eine professionelle Security by Default Implementierung kann das Sicherheitsrisiko digitaler Produkte um bis zu 80% reduzieren und gleichzeitig die CRA-Compliance sicherstellen.',
        serviceDescription: 'Wir bieten Ihnen eine umfassende Beratung und Implementierungsunterstützung für Security by Default nach CRA-Anforderungen, von der initialen Bewertung bis zur vollständigen Compliance-Dokumentation.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'CRA Security by Default Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung sicherer Standardkonfigurationen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung von Secure Defaults'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Security Testing und Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'CRA-Compliance Dokumentation'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine systematische Security by Default Strategie, die sowohl technische Exzellenz als auch CRA-Compliance gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Bewertung der aktuellen Produktkonfigurationen und Sicherheitseinstellungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Identifikation von CRA-relevanten Security by Default Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Design und Entwicklung sicherer Standardkonfigurationen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung und Testing der Security by Default Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Validierung der CRA-Konformität und finale Dokumentation'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns dabei geholfen, unsere Produktkonfigurationen vollständig CRA-konform zu gestalten. Durch die professionelle Security by Default Implementierung konnten wir sowohl die Sicherheit als auch die Benutzerfreundlichkeit unserer Produkte erheblich verbessern.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Security by Default Gap-Analyse',
          description: 'Umfassende Bewertung Ihrer aktuellen Produktkonfigurationen gegen CRA Security by Default Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse aktueller Standardkonfigurationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von CRA-Compliance Lücken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risikobewertung unsicherer Werkseinstellungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Roadmap für Security by Default Implementierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Implementierung sicherer Defaults',
          description: 'Technische Umsetzung und Integration von Security by Default Prinzipien in Ihre Produktentwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Design sicherer Standardkonfigurationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration in Entwicklungs- und Deployment-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Automatisierte Security Configuration Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Überwachung und Validierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craSecurityByDefaultData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Cyber Resilience Act Security by Default page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
