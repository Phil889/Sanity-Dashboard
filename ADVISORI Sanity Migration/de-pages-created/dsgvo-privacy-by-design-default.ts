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
    console.log('Creating DSGVO Privacy by Design & Default page...')

    const dsgvoPrivacyByDesignData = {
      _type: 'servicePage',
      _id: 'dsgvo-privacy-by-design-default',
      title: 'DSGVO Privacy by Design & Default',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dsgvo/dsgvo-readiness/dsgvo-privacy-by-design-default'
      },
      parent: {
        _type: 'reference',
        _ref: 'dsgvo-readiness'
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
        title: 'DSGVO Privacy by Design & Default Implementation | ADVISORI',
        description: 'Professionelle Umsetzung von Privacy by Design & Default Prinzipien nach DSGVO. Datenschutz von Anfang an in Systemen und Prozessen verankern.',
        keywords: 'DSGVO, Privacy by Design, Privacy by Default, Datenschutz durch Technikgestaltung, GDPR Compliance, Datenschutz-Architektur, Systemdesign'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DSGVO Privacy by Design & Default'
        },
        tagline: 'Datenschutz als fundamentales Designprinzip in allen Systemen und Prozessen',
        heading: 'DSGVO Privacy by Design & Default',
        description: 'Privacy by Design & Default sind zentrale DSGVO-Prinzipien, die Datenschutz von Beginn an in die Entwicklung von Systemen, Prozessen und Produkten integrieren. Wir helfen Ihnen dabei, diese Prinzipien systematisch zu implementieren und Datenschutz zu einem natürlichen Bestandteil Ihrer Unternehmens-DNA zu machen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Integration von Datenschutz in alle Entwicklungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Kosteneffiziente Compliance durch frühzeitige Berücksichtigung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Minimierung von Datenschutzrisiken durch proaktive Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Wettbewerbsvorteile durch datenschutzfreundliche Innovation'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DSGVO Privacy by Design & Default',
        description: 'Privacy by Design & Default transformieren Datenschutz von einer nachgelagerten Compliance-Aufgabe zu einem fundamentalen Designprinzip. Diese DSGVO-Kernprinzipien erfordern eine systematische Herangehensweise, die Datenschutz von Anfang an in alle Systeme, Prozesse und Produkte integriert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Implementierung der Privacy by Design Grundprinzipien in allen Entwicklungsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Aufbau datenschutzfreundlicher Standard-Konfigurationen und -Einstellungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung von Privacy Impact Assessment (PIA) Verfahren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration in Software Development Lifecycle (SDLC) und Projektmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Schulung und Sensibilisierung aller beteiligten Teams und Stakeholder'
          }
        ],
        alert: {
          title: 'DSGVO-Verpflichtung',
          content: 'Privacy by Design & Default sind nicht optional, sondern verpflichtende DSGVO-Prinzipien. Unternehmen müssen nachweisen können, dass sie diese Prinzipien in ihre Entwicklungs- und Geschäftsprozesse integriert haben.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in datenschutzfreundlicher Systemarchitektur'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden zur Integration in bestehende Entwicklungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praktische Erfahrung in der Umsetzung bei verschiedenen Unternehmensgrößen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung bei der kulturellen Transformation'
            }
          ]
        },
        additionalInfo: 'Studien zeigen, dass Privacy by Design die Entwicklungskosten um bis zu 50% reduzieren kann, da Datenschutz-Probleme frühzeitig erkannt und behoben werden, bevor sie zu kostspieligen Nachbesserungen führen.',
        serviceDescription: 'Wir unterstützen Sie dabei, Privacy by Design & Default von theoretischen Konzepten zu praktischen, integrierten Unternehmensprozessen zu entwickeln.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Entwicklung einer unternehmensweiten Privacy by Design Strategie'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Integration in bestehende Entwicklungs- und Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Aufbau von Privacy Impact Assessment (PIA) Verfahren'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Schulung von Entwicklungsteams und Projektmanagern'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Überwachung und Verbesserung der Implementierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen systematischen Ansatz zur Implementierung von Privacy by Design & Default, der sowohl technische als auch organisatorische Aspekte berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse bestehender Entwicklungs- und Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten Privacy by Design Strategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Schrittweise Integration in alle relevanten Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Schulung und Change Management für alle Beteiligten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Optimierung der Umsetzung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Implementierung von Privacy by Design & Default mit ADVISORI hat unsere gesamte Produktentwicklung transformiert. Datenschutz ist jetzt ein natürlicher Bestandteil unserer Innovation, nicht mehr ein nachgelagerter Compliance-Check.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Privacy by Design Strategieentwicklung',
          description: 'Entwicklung einer umfassenden Strategie zur Integration von Datenschutz in alle Unternehmensprozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse der aktuellen Entwicklungs- und Geschäftsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung einer maßgeschneiderten Privacy by Design Roadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Definition von Privacy by Design Prinzipien und Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Aufbau von Governance-Strukturen und Verantwortlichkeiten'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Privacy by Default Implementierung',
          description: 'Systematische Umsetzung datenschutzfreundlicher Standard-Konfigurationen in allen Systemen und Anwendungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung datenschutzfreundlicher Default-Einstellungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration in bestehende IT-Systeme und Anwendungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Aufbau automatisierter Privacy-Compliance-Checks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Überwachung und Anpassung der Konfigurationen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(dsgvoPrivacyByDesignData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DSGVO Privacy by Design & Default page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
