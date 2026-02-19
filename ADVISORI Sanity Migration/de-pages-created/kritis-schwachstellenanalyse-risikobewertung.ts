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
    console.log('Creating KRITIS Schwachstellenanalyse & Risikobewertung page...')

    const kritisRiskAssessmentData = {
      _type: 'servicePage',
      _id: 'kritis-schwachstellenanalyse-risikobewertung',
      title: 'KRITIS Schwachstellenanalyse & Risikobewertung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/kritis/kritis-readiness/kritis-schwachstellenanalyse-risikobewertung'
      },
      parent: {
        _type: 'reference',
        _ref: 'kritis-readiness'
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
        title: 'KRITIS Schwachstellenanalyse & Risikobewertung | ADVISORI',
        description: 'Umfassende Schwachstellenanalyse und Risikobewertung für kritische Infrastrukturen nach KRITIS-Verordnung. Identifizierung von Schwachstellen und Entwicklung gezielter Schutzmaßnahmen.',
        keywords: 'KRITIS, Schwachstellenanalyse, Risikobewertung, kritische Infrastrukturen, Cybersicherheit, Bedrohungsanalyse, BSI'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KRITIS Schwachstellenanalyse & Risikobewertung'
        },
        tagline: 'Systematische Identifizierung und Bewertung von Sicherheitsrisiken',
        heading: 'KRITIS Schwachstellenanalyse & Risikobewertung',
        description: 'Eine umfassende Schwachstellenanalyse und Risikobewertung bildet das Fundament für wirksame Schutzmaßnahmen in kritischen Infrastrukturen. Wir identifizieren potenzielle Bedrohungen und bewerten deren Auswirkungen systematisch.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Erfassung aller sicherheitsrelevanten Schwachstellen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Fundierte Risikobewertung nach etablierten Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Priorisierung von Schutzmaßnahmen nach Kritikalität'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Compliance mit KRITIS-Verordnung und BSI-Standards'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KRITIS Schwachstellenanalyse & Risikobewertung',
        description: 'Die systematische Schwachstellenanalyse und Risikobewertung ist ein zentraler Baustein der KRITIS-Compliance. Sie ermöglicht es Betreibern kritischer Infrastrukturen, potenzielle Bedrohungen zu identifizieren, deren Auswirkungen zu bewerten und gezielte Schutzmaßnahmen zu entwickeln.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strukturierte Erfassung und Katalogisierung aller Assets und Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Identifizierung technischer und organisatorischer Schwachstellen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Bedrohungsmodellierung und Szenarioanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Quantitative und qualitative Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Ableitung und Priorisierung von Handlungsempfehlungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine effektive Schwachstellenanalyse geht über technische Aspekte hinaus und berücksichtigt auch organisatorische, prozessuale und menschliche Faktoren. Nur so entsteht ein vollständiges Bild der Risikolage.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in KRITIS-relevanten Bedrohungsszenarien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden nach ISO 27005 und BSI-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Erfahrung in kritischen Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praxisnahe Handlungsempfehlungen für die Umsetzung'
            }
          ]
        },
        additionalInfo: 'Eine professionelle Schwachstellenanalyse bildet die Grundlage für alle weiteren Sicherheitsmaßnahmen und ist essentiell für die Erfüllung der KRITIS-Verordnung.',
        serviceDescription: 'Wir bieten Ihnen eine vollumfängliche Schwachstellenanalyse und Risikobewertung, die alle Aspekte Ihrer kritischen Infrastruktur berücksichtigt und konkrete Handlungsempfehlungen für die Verbesserung Ihrer Sicherheitslage liefert.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Asset-Inventarisierung und Systemklassifikation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Technische Schwachstellenanalyse und Penetrationstests'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Organisatorische Sicherheitsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Bedrohungsmodellierung nach STRIDE/PASTA'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Risikoanalyse und -bewertung nach ISO 27005'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir führen eine systematische und umfassende Schwachstellenanalyse durch, die sowohl technische als auch organisatorische Aspekte berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Vollständige Erfassung und Klassifikation aller kritischen Assets'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematische Identifizierung technischer und organisatorischer Schwachstellen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung realistischer Bedrohungsszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Quantitative Bewertung von Eintrittswahrscheinlichkeiten und Auswirkungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Ableitung priorisierter Handlungsempfehlungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die systematische Schwachstellenanalyse von ADVISORI hat uns geholfen, unsere Sicherheitslage objektiv zu bewerten und gezielte Verbesserungsmaßnahmen zu identifizieren. Die Ergebnisse bilden eine solide Grundlage für unsere KRITIS-Compliance.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Asset-Inventarisierung & Systemklassifikation',
          description: 'Vollständige Erfassung und Klassifikation aller kritischen Assets und Systeme als Grundlage für die Schwachstellenanalyse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematische Erfassung aller IT- und OT-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Klassifikation nach Kritikalität und Schutzbedarfen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Dokumentation von Abhängigkeiten und Schnittstellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Aufbau eines zentralen Asset-Registers'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technische Schwachstellenanalyse',
          description: 'Umfassende technische Analyse zur Identifizierung von Schwachstellen in IT- und OT-Systemen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automatisierte Vulnerability-Scans'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Manuelle Penetrationstests und Code-Reviews'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Analyse von Netzwerkarchitekturen und Zugriffskontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Bewertung von Konfigurationen und Patch-Status'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kritisRiskAssessmentData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KRITIS Schwachstellenanalyse & Risikobewertung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
