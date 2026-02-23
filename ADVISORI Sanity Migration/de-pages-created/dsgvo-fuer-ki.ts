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
    console.log('Creating DSGVO für KI page...')

    const dsgvoFuerKiData = {
      _type: 'servicePage',
      _id: 'dsgvo-fuer-ki',
      title: 'DSGVO für KI',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/dsgvo-fuer-ki'
      },
      parent: {
        _type: 'reference',
        _ref: 'ki-kuenstliche-intelligenz'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'digitale-transformation'
        }
      },
      seo: {
        _type: 'seo',
        title: 'DSGVO für KI | ADVISORI',
        description: 'DSGVO-konforme KI-Implementierung mit Privacy by Design. Expertenhilfe für Artikel 22, DPIA, Transparenz und rechtssichere AI-Systeme in Unternehmen.',
        keywords: 'DSGVO KI, GDPR AI, Privacy by Design, Artikel 22, DPIA, KI Datenschutz, AI Compliance, Automatisierte Entscheidungsfindung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DSGVO für KI'
        },
        tagline: 'DSGVO-konforme KI-Systeme mit Privacy by Design',
        heading: 'DSGVO für KI',
        description: 'Implementieren Sie Künstliche Intelligenz rechtskonform und datenschutzfreundlich. Unsere Experten unterstützen Sie bei der DSGVO-konformen Gestaltung von AI-Systemen, von der Konzeption bis zur Umsetzung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Privacy by Design für alle KI-Anwendungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Artikel 22 DSGVO-konforme automatisierte Entscheidungsfindung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Datenschutz-Folgenabschätzung (DPIA) für KI-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Transparenz und Erklärbarkeit von AI-Entscheidungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DSGVO für KI',
        description: 'Die Datenschutz-Grundverordnung stellt besondere Anforderungen an KI-Systeme, insbesondere bei der automatisierten Entscheidungsfindung. ADVISORI hilft Ihnen dabei, innovative AI-Lösungen zu entwickeln, die von Grund auf datenschutzkonform sind und gleichzeitig maximalen Geschäftsnutzen bieten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'DSGVO-Compliance-Bewertung bestehender KI-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Privacy by Design Implementierung für neue AI-Projekte'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Artikel 22 DSGVO-konforme Gestaltung automatisierter Entscheidungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Datenschutz-Folgenabschätzung (DPIA) für KI-Anwendungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Transparenz- und Erklärbarkeitskonzepte für AI-Systeme'
          }
        ],
        alert: {
          title: 'Rechtlicher Hinweis',
          content: 'KI-Systeme, die automatisierte Entscheidungen treffen, unterliegen besonderen DSGVO-Anforderungen. Eine frühzeitige datenschutzrechtliche Bewertung und Privacy by Design-Implementierung sind essentiell für rechtssichere AI-Anwendungen.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte DSGVO-KI-Beratung mit technischer Tiefe'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Privacy by Design-Implementierung für AI-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende DPIA-Erstellung für KI-Anwendungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Rechtssichere Gestaltung automatisierter Entscheidungsprozesse'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit DSGVO-konformen KI-Systemen reduzieren nicht nur rechtliche Risiken, sondern schaffen auch Vertrauen bei Kunden und Partnern. Investieren Sie in datenschutzfreundliche AI-Innovation!',
        serviceDescription: 'Wir unterstützen Sie bei der rechtssicheren Implementierung von KI-Systemen, die sowohl innovativ als auch DSGVO-konform sind. Von der initialen Bewertung bis zur kontinuierlichen Compliance-Überwachung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'DSGVO-Compliance Assessment für KI'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Privacy by Design Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Artikel 22 DSGVO-konforme Gestaltung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'DPIA-Erstellung für KI-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'AI Transparency & Explainability'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine umfassende DSGVO-Compliance-Strategie für Ihre KI-Systeme, die rechtliche Sicherheit mit technischer Innovation verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse bestehender KI-Systeme auf DSGVO-Konformität'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung Privacy by Design-Konzepte für neue AI-Projekte'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung DSGVO-konformer Datenverarbeitungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Erstellung umfassender Datenschutz-Folgenabschätzungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Compliance-Überwachung und -Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'DSGVO-konforme KI-Implementierung ist kein Hindernis für Innovation, sondern ein Wettbewerbsvorteil. Unternehmen, die von Anfang an auf Privacy by Design setzen, schaffen nicht nur rechtliche Sicherheit, sondern auch das Vertrauen ihrer Kunden. Unsere Expertise hilft dabei, KI-Systeme zu entwickeln, die sowohl leistungsstark als auch datenschutzfreundlich sind.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'DSGVO-Compliance Assessment für KI',
          description: 'Umfassende Bewertung Ihrer bestehenden KI-Systeme auf DSGVO-Konformität und Identifikation von Optimierungspotenzialen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse der Datenverarbeitungsprozesse in KI-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung der Rechtsgrundlagen für automatisierte Entscheidungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation von Compliance-Lücken und Risiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung von Maßnahmenplänen zur DSGVO-Konformität'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Privacy by Design für KI-Systeme',
          description: 'Implementierung datenschutzfreundlicher KI-Architekturen, die von Grund auf DSGVO-konform gestaltet sind.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Datenschutzfreundliche KI-Architektur-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung von Datenminimierung und Zweckbindung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Technische und organisatorische Maßnahmen (TOMs)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Transparenz- und Erklärbarkeitskonzepte'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(dsgvoFuerKiData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DSGVO für KI page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
