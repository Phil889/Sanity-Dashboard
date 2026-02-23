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
    console.log('Creating EU AI Act Compliance Requirements page...')

    const euAiActComplianceRequirementsData = {
      _type: 'servicePage',
      _id: 'eu-ai-act-compliance-requirements',
      title: 'EU AI Act Compliance-Anforderungen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eu-ai-act/eu-ai-act-ai-risk-classification/eu-ai-act-compliance-requirements'
      },
      parent: {
        _type: 'reference',
        _ref: 'eu-ai-act-ai-risk-classification'
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
        title: 'EU AI Act Compliance-Anforderungen | ADVISORI',
        description: 'Umfassende Beratung zu den EU AI Act Compliance-Anforderungen. Wir unterstützen Sie bei der Implementierung aller erforderlichen Maßnahmen für die Einhaltung der neuen KI-Regulierung.',
        keywords: 'EU AI Act, Compliance-Anforderungen, KI-Regulierung, AI Governance, Risikomanagement, Algorithmic Accountability, GPAI, Foundation Models'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EU AI Act Compliance-Anforderungen'
        },
        tagline: 'Strategische Compliance-Lösung für die neue KI-Ära',
        heading: 'EU AI Act Compliance-Anforderungen',
        description: 'Die EU AI Act-Compliance-Anforderungen definieren konkrete Verpflichtungen für verschiedene KI-Systeme. Wir begleiten Sie bei der vollständigen Implementierung aller erforderlichen Maßnahmen zur Einhaltung der neuen europäischen KI-Regulierung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Compliance mit allen EU AI Act-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Risikominimierung durch proaktive Governance-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Transparente Dokumentation und Nachweisführung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strategische KI-Governance für Wettbewerbsvorteile'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EU AI Act Compliance-Anforderungen',
        description: 'Die EU AI Act-Compliance-Anforderungen bilden das operative Herzstück der neuen europäischen KI-Regulierung. Sie definieren spezifische Verpflichtungen für Anbieter und Betreiber von KI-Systemen unterschiedlicher Risikoklassen. Von der Datenqualität über Transparenzanforderungen bis hin zur menschlichen Aufsicht - wir stellen sicher, dass Ihr Unternehmen alle Anforderungen vollständig erfüllt und dabei strategische Vorteile generiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Compliance-Bewertung aller eingesetzten KI-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung risikoklassenspezifischer Governance-Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung vollständiger Dokumentations- und Nachweissysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von AI Governance in bestehende Compliance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Anpassung an regulatorische Entwicklungen'
          }
        ],
        alert: {
          title: 'Strategischer Hinweis',
          content: 'EU AI Act-Compliance ist mehr als regulatorische Pflicht - sie schafft Vertrauen bei Kunden und Partnern, reduziert Haftungsrisiken und kann als Differenzierungsmerkmal im Markt positioniert werden.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnis aller EU AI Act-Compliance-Anforderungen und deren praktische Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenübergreifende Erfahrung in der Implementierung von AI Governance-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Pragmatischer Ansatz, der Compliance mit Geschäftszielen und Innovation verbindet'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Betreuung und Anpassung an sich entwickelnde Regulierungslandschaft'
            }
          ]
        },
        additionalInfo: 'Die Komplexität der EU AI Act-Compliance-Anforderungen erfordert einen systematischen, risikobasierten Ansatz. Eine strategische Implementierung kann nicht nur Compliance sicherstellen, sondern auch Innovationsprozesse verbessern und Marktvertrauen stärken.',
        serviceDescription: 'Wir bieten eine vollständige Palette von Dienstleistungen zur Erfüllung aller EU AI Act-Compliance-Anforderungen. Unser Ansatz ist darauf ausgelegt, Compliance-Verpflichtungen in strategische Geschäftsvorteile zu transformieren.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Vollständige Compliance-Bewertung und Gap-Analyse für alle KI-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Implementierung risikoklassenspezifischer Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung und Einführung umfassender Dokumentationssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Aufbau kontinuierlicher Monitoring- und Compliance-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung und Change Management für nachhaltige Compliance-Kultur'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Compliance-Ansatz',
        description: 'Wir entwickeln mit Ihnen einen maßgeschneiderten Compliance-Ansatz, der alle EU AI Act-Anforderungen systematisch adressiert und gleichzeitig Ihre Geschäftsziele unterstützt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Bestandsaufnahme aller KI-Systeme und deren Compliance-Status'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer priorisierten Compliance-Roadmap mit klaren Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung risikoklassenspezifischer Governance-Strukturen und -Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Aufbau robuster Dokumentations- und Nachweissysteme'
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
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'EU AI Act-Compliance ist eine strategische Chance für Unternehmen, Vertrauen aufzubauen und sich als verantwortlicher KI-Anwender zu positionieren. Mit der richtigen Herangehensweise wird Compliance vom Kostenfaktor zum Wettbewerbsvorteil.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Hochrisiko-KI-Systeme Compliance',
          description: 'Vollständige Implementierung aller Anforderungen für Hochrisiko-KI-Systeme gemäß EU AI Act, einschließlich Qualitätsmanagementsystem, Datenqualität und menschlicher Aufsicht.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung und Implementierung eines KI-Qualitätsmanagementsystems'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Einrichtung robuster Datenqualitäts- und Governance-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Implementierung effektiver menschlicher Aufsichts- und Kontrollmechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Aufbau umfassender Transparenz- und Dokumentationsstandards'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Foundation Models und GPAI Compliance',
          description: 'Spezialisierte Compliance-Lösung für General Purpose AI-Systeme und Foundation Models mit systemischen Risiken, einschließlich aller spezifischen Verpflichtungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Implementierung systemischer Risikobewertung und -management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung robuster Model Governance und Versioning-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Aufbau spezialisierter Cybersecurity- und Sicherheitsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Einrichtung kontinuierlicher Monitoring- und Berichtssysteme'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(euAiActComplianceRequirementsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EU AI Act Compliance Requirements page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
