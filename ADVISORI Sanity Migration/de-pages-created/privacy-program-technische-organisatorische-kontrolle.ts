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
    console.log('Creating Privacy Program Technical and Organizational Controls page...')

    const privacyTechnicalControlsData = {
      _type: 'servicePage',
      _id: 'privacy-program-technische-organisatorische-kontrolle',
      title: 'Privacy Program - Technische & Organisatorische Kontrollen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/privacy-program/privacy-program-privacy-controls-audit-support/privacy-program-technische-organisatorische-kontrolle'
      },
      parent: {
        _type: 'reference',
        _ref: 'privacy-program-privacy-controls-audit-support'
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
        title: 'Privacy Program - Technische & Organisatorische Kontrollen | ADVISORI',
        description: 'Implementierung robuster technischer und organisatorischer Maßnahmen (TOMs) für DSGVO-konforme Datenschutz-Programme. Umfassende Privacy Controls für Enterprise-Umgebungen.',
        keywords: 'Privacy Controls, TOMs, DSGVO, Datenschutz, Privacy by Design, Technische Kontrollen, Organisatorische Maßnahmen, Privacy Program'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Privacy Program Technical and Organizational Controls'
        },
        tagline: 'Robuste technische und organisatorische Maßnahmen für DSGVO-konforme Datenschutz-Programme',
        heading: 'Privacy Program - Technische & Organisatorische Kontrollen',
        description: 'Implementierung und Optimierung technischer und organisatorischer Maßnahmen (TOMs) zur Gewährleistung eines robusten Datenschutz-Programms. Wir unterstützen Sie bei der Umsetzung von Privacy by Design und Privacy by Default Prinzipien.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'DSGVO-konforme Implementierung technischer und organisatorischer Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Privacy by Design Integration in Geschäftsprozesse und IT-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Risikominimierung durch proaktive Datenschutz-Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachweisbare Compliance und Auditierbarkeit der Privacy Controls'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Privacy Program - Technische & Organisatorische Kontrollen',
        description: 'Technische und organisatorische Maßnahmen (TOMs) bilden das Rückgrat eines effektiven Datenschutz-Programms. Wir unterstützen Sie bei der systematischen Implementierung und kontinuierlichen Optimierung Ihrer Privacy Controls zur Gewährleistung DSGVO-konformer Datenverarbeitung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung und Implementierung technischer Schutzmaßnahmen (Verschlüsselung, Zugangskontrollen, Monitoring)'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Aufbau organisatorischer Kontrollen (Richtlinien, Schulungen, Rollen und Verantwortlichkeiten)'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Privacy by Design Integration in Entwicklungs- und Betriebsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Überwachung und Verbesserung der Privacy Controls'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Dokumentation und Nachweis der Wirksamkeit für Audit- und Compliance-Zwecke'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Effektive Privacy Controls erfordern eine ausgewogene Kombination aus technischen und organisatorischen Maßnahmen. Nur durch die systematische Integration beider Dimensionen kann ein robustes und nachhaltiges Datenschutz-Programm erreicht werden.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in DSGVO-konformer Implementierung von Privacy Controls'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Methodiken für Privacy by Design und Privacy by Default'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von technischen bis organisatorischen Aspekten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Unterstützung bei Überwachung und Optimierung'
            }
          ]
        },
        additionalInfo: 'Studien zeigen, dass Unternehmen mit gut implementierten technischen und organisatorischen Maßnahmen ihre Datenschutz-Compliance-Kosten um bis zu 40% reduzieren und gleichzeitig das Vertrauen ihrer Kunden nachhaltig stärken können.',
        serviceDescription: 'Wir bieten Ihnen umfassende Unterstützung bei der Konzeption, Implementierung und kontinuierlichen Verbesserung Ihrer technischen und organisatorischen Datenschutz-Kontrollen. Von der strategischen Planung bis zur operativen Umsetzung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Privacy Controls Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Technische Schutzmaßnahmen (Encryption, Access Controls, DLP)'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Organisatorische Kontrollen (Policies, Procedures, Training)'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Privacy by Design Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliches Monitoring und Improvement'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte Privacy Controls Strategie, die technische Innovation mit organisatorischer Exzellenz vereint.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse bestehender Datenschutz-Kontrollen und Identifikation von Gaps'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer integrierten TOM-Strategie basierend auf Ihren Geschäftsanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Schrittweise Implementierung technischer und organisatorischer Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von Privacy by Design Prinzipien in bestehende Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung kontinuierlicher Überwachungs- und Verbesserungsprozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI Consulting GmbH',
        name: 'Dr. Sarah Müller',
        position: 'Senior Privacy Officer',
        quote: 'ADVISORI hat uns dabei geholfen, ein robustes System technischer und organisatorischer Maßnahmen zu implementieren. Die Kombination aus technischer Expertise und praktischer Umsetzung hat unsere Datenschutz-Compliance signifikant gestärkt und gleichzeitig die operative Effizienz verbessert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Technische Schutzmaßnahmen',
          description: 'Implementierung robuster technischer Kontrollen zum Schutz personenbezogener Daten und zur Gewährleistung der Datensicherheit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'End-to-End Verschlüsselung und Schlüsselmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Granulare Zugangs- und Berechtigungskontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Data Loss Prevention (DLP) Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Privacy-enhancing Technologies (PETs) Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Organisatorische Kontrollen',
          description: 'Entwicklung und Implementierung organisatorischer Maßnahmen zur Unterstützung einer starken Datenschutz-Kultur.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Datenschutz-Richtlinien und Verfahrensanweisungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Rollen- und Verantwortlichkeitsmatrizen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Mitarbeiterschulungen und Awareness-Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Incident Response und Breach Management Procedures'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(privacyTechnicalControlsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Privacy Program Technical and Organizational Controls page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
