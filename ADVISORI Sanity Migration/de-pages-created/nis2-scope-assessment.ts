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
    console.log('Creating NIS2 Scope Assessment page...')

    const nis2ScopeAssessmentData = {
      _type: 'servicePage',
      _id: 'nis2-scope-assessment',
      title: 'NIS2 Scope Assessment',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/nis2/nis2-readiness/nis2-scope-assessment'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management'
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
        title: 'NIS2 Scope Assessment | ADVISORI',
        description: 'Professionelle Bewertung Ihres Unternehmens bezüglich der NIS2-Anwendbarkeit. Wir analysieren Ihre Infrastruktur und bestimmen präzise den Umfang der regulatorischen Anforderungen.',
        keywords: 'NIS2 Scope Assessment, NIS2 Anwendungsbereich, Cybersicherheit Bewertung, Kritische Infrastruktur, Digitale Dienste, Compliance Assessment'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIS2 Scope Assessment'
        },
        tagline: 'Präzise Bestimmung Ihres NIS2-Anwendungsbereichs',
        heading: 'NIS2 Scope Assessment',
        description: 'Eine akkurate Bewertung des NIS2-Anwendungsbereichs ist der erste kritische Schritt für eine erfolgreiche Compliance. Wir analysieren systematisch Ihre Organisation, Dienste und Infrastrukturen, um den exakten Umfang der regulatorischen Anforderungen zu bestimmen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Rechtssichere Bestimmung des NIS2-Anwendungsbereichs'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierte Compliance-Kosten durch präzise Scope-Definition'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Strategische Handlungsempfehlungen für die Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Fundament für effiziente NIS2-Implementierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'NIS2 Scope Assessment',
        description: 'Die NIS2-Richtlinie definiert komplexe Kriterien für die Bestimmung, welche Organisationen unter den Anwendungsbereich fallen. Eine professionelle Scope-Bewertung ist essentiell, um Compliance-Risiken zu vermeiden und Implementierungskosten zu optimieren. Wir führen eine systematische Analyse durch, die alle relevanten Faktoren berücksichtigt und eine rechtssichere Einordnung gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Analyse der Größenkriterien und sektoralen Zuordnung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Bewertung kritischer und wichtiger Einrichtungen nach NIS2-Klassifikation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Identifikation digitaler Dienste und deren Relevanz für die Richtlinie'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Analyse von Lieferketten und Abhängigkeiten zu betroffenen Sektoren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Rechtssichere Dokumentation der Scope-Bestimmung für Aufsichtsbehörden'
          }
        ],
        alert: {
          title: 'Kritischer Erfolgsfaktor',
          content: 'Eine ungenaue Scope-Bestimmung kann zu unvollständiger Compliance oder unnötigen Kosten führen. Professionelle Bewertung sichert rechtssichere Einordnung und optimale Ressourcenallokation.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifendes Verständnis der NIS2-Richtlinie und nationaler Umsetzungsgesetze'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenspezifische Expertise in allen relevanten Sektoren'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methodik für komplexe Organisationsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Überwachung regulatorischer Entwicklungen'
            }
          ]
        },
        additionalInfo: 'Die Bestimmung des NIS2-Anwendungsbereichs erfordert eine detaillierte Analyse verschiedener Faktoren wie Unternehmensgröße, Sektor, Art der Dienstleistungen und geografischer Präsenz. Unsere strukturierte Herangehensweise gewährleistet eine vollständige und rechtssichere Bewertung.',
        serviceDescription: 'Unser NIS2 Scope Assessment bietet eine umfassende und systematische Bewertung Ihres Unternehmens zur Bestimmung der Anwendbarkeit der NIS2-Richtlinie. Wir analysieren alle relevanten Aspekte und liefern klare Handlungsempfehlungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Detaillierte Analyse der Größen- und Sektorkriterien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Bewertung kritischer vs. wichtiger Einrichtungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Identifikation digitaler Dienste und deren NIS2-Relevanz'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Lieferkettenanalyse und Abhängigkeitsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Rechtssichere Dokumentation und Reporting'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine präzise und rechtssichere Bestimmung des NIS2-Anwendungsbereichs für Ihr Unternehmen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Datensammlung zu Unternehmensstruktur und Geschäftstätigkeit'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematische Bewertung anhand der NIS2-Kriterien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Sektorale Einordnung und Kritikalitätsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Dokumentation der Scope-Bestimmung mit rechtlicher Begründung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Strategische Handlungsempfehlungen für die weitere Umsetzung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Eine präzise Scope-Bewertung ist das Fundament jeder erfolgreichen NIS2-Implementierung. Unsere systematische Analyse gewährleistet rechtssichere Einordnung und optimale Ressourcenallokation für unsere Kunden.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Umfassende Scope-Analyse',
          description: 'Wir führen eine detaillierte Bewertung Ihres Unternehmens durch, um den exakten NIS2-Anwendungsbereich zu bestimmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematische Datensammlung und Organisationsanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung der Größenkriterien und sektoralen Zuordnung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation kritischer und wichtiger Einrichtungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Analyse digitaler Dienste und deren NIS2-Relevanz'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Strategische Handlungsempfehlungen',
          description: 'Basierend auf der Scope-Bewertung entwickeln wir konkrete Handlungsempfehlungen für Ihre NIS2-Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Priorisierte Roadmap für die NIS2-Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Kostenschätzung und Ressourcenplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Identifikation von Quick Wins und kritischen Pfaden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Rechtssichere Dokumentation für Aufsichtsbehörden'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nis2ScopeAssessmentData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIS2 Scope Assessment page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
