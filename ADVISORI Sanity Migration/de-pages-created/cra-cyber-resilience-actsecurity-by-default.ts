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
      _id: 'cra-cyber-resilience-actsecurity-by-default',
      title: 'CRA Cyber Resilience Act Security by Default',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-cyber-resilience-actproduct-security-requirements/cra-cyber-resilience-actsecurity-by-default'
      },
      parent: {
        _type: 'reference',
        _ref: 'cra-cyber-resilience-actproduct-security-requirements'
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
        title: 'CRA Cyber Resilience Act Security by Default | ADVISORI',
        description: 'Implementieren Sie Security by Default Prinzipien gemäß CRA Cyber Resilience Act. Expertenhilfe für sichere Produktentwicklung und Compliance-konforme Umsetzung.',
        keywords: 'CRA, Cyber Resilience Act, Security by Default, Produktsicherheit, Compliance, Cybersicherheit, EU-Verordnung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Cyber Resilience Act Security by Default'
        },
        tagline: 'Security by Default als Grundprinzip für cybersichere Produkte',
        heading: 'CRA Cyber Resilience Act Security by Default',
        description: 'Der CRA Cyber Resilience Act fordert Security by Default als fundamentales Designprinzip. Wir unterstützen Sie bei der Implementierung sicherer Standardkonfigurationen und der Compliance-konformen Umsetzung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Implementierung von Security by Default Prinzipien gemäß CRA'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Sichere Standardkonfigurationen für alle Produktkomponenten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Reduzierung von Sicherheitsrisiken durch Design-Entscheidungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Compliance mit EU-Cybersicherheitsanforderungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRA Cyber Resilience Act Security by Default',
        description: 'Security by Default ist ein Kernprinzip des CRA Cyber Resilience Act, das vorschreibt, dass Produkte mit digitalen Elementen in ihren sichersten Konfigurationen ausgeliefert werden müssen. Wir unterstützen Sie bei der systematischen Implementierung dieser Anforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse bestehender Produktkonfigurationen und Sicherheitseinstellungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung von Security by Default Richtlinien und Standards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung sicherer Standardkonfigurationen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Validierung und Testing der Security by Default Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Dokumentation für CRA-Compliance und Konformitätsbewertung'
          }
        ],
        alert: {
          title: 'CRA Compliance',
          content: 'Security by Default ist nicht optional - es ist eine verbindliche Anforderung des CRA Cyber Resilience Act. Produkte müssen in ihrer sichersten Konfiguration ausgeliefert werden.'
        },
        whyUs: {
          title: 'Unsere Security by Default Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in CRA-Anforderungen und Security by Default Prinzipien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Methoden für sichere Produktkonfigurationen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'End-to-End Begleitung von der Konzeption bis zur Zertifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenübergreifende Erfahrung in der Implementierung von Cybersicherheitsstandards'
            }
          ]
        },
        additionalInfo: 'Security by Default reduziert nicht nur Sicherheitsrisiken, sondern schafft auch Vertrauen bei Kunden und erleichtert die Compliance mit dem CRA Cyber Resilience Act. Investieren Sie in sichere Produktentwicklung von Anfang an!',
        serviceDescription: 'Wir bieten Ihnen umfassende Unterstützung bei der Implementierung von Security by Default Prinzipien gemäß CRA Cyber Resilience Act. Von der Analyse bis zur vollständigen Umsetzung begleiten wir Sie auf dem Weg zu cybersicheren Produkten.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Security by Default Gap-Analyse und Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung von Secure Configuration Guidelines'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung sicherer Standardeinstellungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Security Testing und Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'CRA-Compliance Dokumentation und Nachweis'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Security by Default Ansatz',
        description: 'Wir verfolgen einen systematischen Ansatz zur Implementierung von Security by Default Prinzipien, der technische Exzellenz mit regulatorischer Compliance verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der aktuellen Produktarchitektur und Sicherheitskonfigurationen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Identifikation von Security by Default Anforderungen und Gaps'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung von sicheren Standardkonfigurationen und Richtlinien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung und Integration in den Entwicklungsprozess'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Validierung, Testing und kontinuierliche Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir Security by Default erfolgreich in unsere Produktentwicklung integriert. Die CRA-konforme Implementierung hat nicht nur unsere Sicherheitsstandards erhöht, sondern auch das Vertrauen unserer Kunden gestärkt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Security by Default Assessment',
          description: 'Wir bewerten Ihre aktuellen Produktkonfigurationen und identifizieren Verbesserungspotentiale für Security by Default.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Analyse bestehender Sicherheitskonfigurationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Gap-Analyse gegenüber CRA-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Bewertung von Risiken und Compliance-Lücken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Priorisierter Maßnahmenplan für die Umsetzung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Secure Configuration Implementation',
          description: 'Wir implementieren sichere Standardkonfigurationen und stellen sicher, dass Ihre Produkte den CRA Security by Default Anforderungen entsprechen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung von Secure Configuration Baselines'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung automatisierter Konfigurationsmechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration in CI/CD-Pipelines und Entwicklungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Validierung und Testing der sicheren Konfigurationen'
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
