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
    console.log('Creating EBA Eskalations- & Kommunikationsstrukturen page...')

    const ebaData = {
      _type: 'servicePage',
      _id: 'eba-eskalations-kommunikationsstrukturen',
      title: 'EBA Eskalations- & Kommunikationsstrukturen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eba/eba-srep-readiness/eba-eskalations-kommunikationsstrukturen'
      },
      parent: {
        _type: 'reference',
        _ref: 'eba-srep-readiness'
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
        title: 'EBA Eskalations- & Kommunikationsstrukturen | ADVISORI',
        description: 'Effektive Eskalations- und Kommunikationsstrukturen für EBA-regulierte Finanzinstitute. Optimieren Sie Ihre internen und externen Kommunikationsprozesse für regulatorische Anforderungen und Krisenmanagement.',
        keywords: 'EBA, Eskalationsstrukturen, Kommunikationsstrukturen, Regulierung, Bankaufsicht, Krisenmanagement, Compliance, SREP'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EBA Eskalations- & Kommunikationsstrukturen'
        },
        tagline: 'Transparente Eskalations- und effiziente Kommunikationsprozesse für regulatorische Anforderungen',
        heading: 'EBA Eskalations- & Kommunikationsstrukturen',
        description: 'Wir unterstützen Sie bei der Entwicklung und Implementierung effektiver Eskalations- und Kommunikationsstrukturen, die Transparenz sicherstellen, regulatorische Anforderungen erfüllen und ein proaktives Management kritischer Situationen ermöglichen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Klare Eskalationswege und Entscheidungsprozesse für kritische Situationen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Effiziente interne und externe Kommunikationsstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Verbesserte Transparenz und Nachvollziehbarkeit regulatorischer Entscheidungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Proaktives Management von Risiken und aufsichtlichen Anforderungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EBA Eskalations- & Kommunikationsstrukturen',
        description: 'Effektive Eskalations- und Kommunikationsstrukturen sind entscheidend für die erfolgreiche Bewältigung regulatorischer Anforderungen und das Management kritischer Situationen. Wir unterstützen Finanzinstitute bei der Entwicklung und Implementierung maßgeschneiderter Strukturen, die eine transparente, effiziente und rechtzeitige Kommunikation sowohl intern als auch mit Aufsichtsbehörden gewährleisten und klare Entscheidungswege in kritischen Situationen definieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung klarer Eskalationswege und Entscheidungsstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Gestaltung effizienter interner Kommunikationsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Optimierung der Kommunikation mit Aufsichtsbehörden'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Implementierung von Frühwarnsystemen für regulatorische Risiken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Etablierung transparenter Reporting- und Dokumentationsstrukturen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Effektive Eskalationsstrukturen zeichnen sich nicht nur durch klare Prozesse aus, sondern auch durch eine Kultur der offenen Kommunikation. Schaffen Sie ein Umfeld, in dem potenzielle Probleme frühzeitig angesprochen werden können, ohne negative Konsequenzen befürchten zu müssen. Dies ermöglicht ein proaktives Risikomanagement und verhindert, dass kleine Probleme zu großen Krisen heranwachsen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung in der Gestaltung regulatorisch konformer Kommunikationsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefgreifendes Verständnis der aufsichtsrechtlichen Erwartungen an Eskalationsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Methoden zur Implementierung effizienter Kommunikationsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz, der technische, organisatorische und kulturelle Aspekte integriert'
            }
          ]
        },
        additionalInfo: 'Gut strukturierte Eskalations- und Kommunikationsprozesse sind nicht nur für die Einhaltung regulatorischer Anforderungen essentiell, sondern bilden auch die Grundlage für ein effektives Krisenmanagement und eine proaktive Risikosteuerung. Sie ermöglichen es, potenzielle Probleme frühzeitig zu erkennen, angemessen zu adressieren und transparent zu kommunizieren, bevor sie zu kritischen Situationen eskalieren.',
        serviceDescription: 'Wir bieten ein umfassendes Leistungsspektrum zur Optimierung Ihrer Eskalations- und Kommunikationsstrukturen im regulatorischen Kontext. Unser Ansatz umfasst sowohl die konzeptionelle Entwicklung als auch die praktische Implementierung und kontinuierliche Verbesserung dieser Strukturen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Analyse bestehender Kommunikations- und Eskalationswege'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung maßgeschneiderter Eskalationsmodelle und Kommunikationsstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung transparenter Reporting- und Dokumentationsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Optimierung der Kommunikation mit Aufsichtsbehörden'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Training und Coaching von Führungskräften und Mitarbeitern'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir unterstützen Sie mit einem strukturierten und bewährten Ansatz bei der Entwicklung und Implementierung effektiver Eskalations- und Kommunikationsstrukturen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der bestehenden Kommunikations- und Eskalationsprozesse sowie regulatorischer Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung eines maßgeschneiderten Konzepts für optimierte Eskalations- und Kommunikationsstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung der definierten Strukturen mit klaren Verantwortlichkeiten und Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Schulung der Mitarbeiter und Führungskräfte zur effektiven Nutzung der neuen Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Evaluation und Optimierung der implementierten Prozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Effektive Eskalations- und Kommunikationsstrukturen sind nicht nur ein regulatorisches Erfordernis, sondern ein strategischer Vorteil. Sie ermöglichen es Finanzinstituten, proaktiv auf Risiken zu reagieren, transparente Entscheidungsprozesse zu etablieren und eine vertrauensvolle Beziehung zu Aufsichtsbehörden aufzubauen. Unsere Kunden profitieren von unserer umfassenden Erfahrung in der Gestaltung und Implementierung dieser kritischen Strukturen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Entwicklung von Eskalationsstrukturen',
          description: 'Wir unterstützen Sie bei der Konzeption und Implementierung klarer Eskalationswege und Entscheidungsprozesse für kritische Situationen im regulatorischen Kontext.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse bestehender Eskalationswege und Identifikation von Optimierungspotenzialen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung maßgeschneiderter Eskalationsmodelle mit klaren Triggern und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Implementation von Frühwarnsystemen für potenzielle regulatorische Risiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Etablierung transparenter Entscheidungs- und Dokumentationsprozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Optimierung der Kommunikationsstrukturen',
          description: 'Wir unterstützen Sie bei der Gestaltung und Implementierung effizienter interner und externer Kommunikationsprozesse für regulatorische Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Analyse bestehender Kommunikationswege und -praktiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung effizienter interner Kommunikationsstrukturen mit klaren Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Optimierung der Kommunikation mit Aufsichtsbehörden und externen Stakeholdern'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Implementierung transparenter Reporting- und Dokumentationsstrukturen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(ebaData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EBA Eskalations- & Kommunikationsstrukturen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
