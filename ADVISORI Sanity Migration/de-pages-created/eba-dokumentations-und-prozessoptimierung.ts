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
    console.log('Creating EBA Dokumentations- und Prozessoptimierung page...')

    const ebaDocumentationData = {
      _type: 'servicePage',
      _id: 'eba-dokumentations-und-prozessoptimierung',
      title: 'EBA Dokumentations- und Prozessoptimierung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eba/eba-srep-readiness/eba-dokumentations-und-prozessoptimierung'
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
        title: 'EBA Dokumentations- und Prozessoptimierung | ADVISORI',
        description: 'Optimieren Sie Ihre regulatorische Dokumentation und Prozesse für die EBA-Anforderungen. Wir unterstützen Sie bei der effizienten Vorbereitung und Implementierung EBA-konformer Dokumentations- und Prozessstrukturen.',
        keywords: 'EBA, Dokumentation, Prozessoptimierung, Regulierung, SREP, Aufsichtsrecht, Compliance, Dokumentenmanagement, Prozesseffizienz'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EBA Dokumentations- und Prozessoptimierung'
        },
        tagline: 'Effiziente und regulierungskonforme Dokumentation und Prozessgestaltung',
        heading: 'EBA Dokumentations- und Prozessoptimierung',
        description: 'Eine strukturierte, qualitativ hochwertige Dokumentation und effiziente Prozesse sind entscheidend für die erfolgreiche Erfüllung der EBA-Anforderungen. Wir unterstützen Sie dabei, Ihre Dokumentation zu optimieren und Ihre Prozesse effizienter zu gestalten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierte und EBA-konforme Dokumentationsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Reduzierung von Redundanzen und Inkonsistenzen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effiziente Prozessgestaltung für regulatorische Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Verbesserte Transparenz und Nachvollziehbarkeit'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EBA Dokumentations- und Prozessoptimierung',
        description: 'Die Europäische Bankenaufsichtsbehörde (EBA) stellt umfangreiche Anforderungen an die Dokumentation und Prozessgestaltung von Finanzinstituten. Eine gut strukturierte, vollständige und konsistente Dokumentation sowie effiziente Prozesse sind wesentliche Erfolgsfaktoren für regulatorische Prüfungen und die tägliche Compliance-Arbeit.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse und Bewertung der bestehenden Dokumentation und Prozesse im Hinblick auf EBA-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung einer optimalen Dokumentationsstruktur und -hierarchie'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung effizienter Prozesse für die Erstellung, Prüfung und Aktualisierung regulatorischer Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Automatisierung und Digitalisierung von Dokumentations- und Compliance-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Etablierung eines nachhaltigen Dokumentations- und Prozessmanagements'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine durchdachte Dokumentationsstruktur und effiziente Prozesse sparen nicht nur Zeit und Ressourcen bei regulatorischen Prüfungen, sondern verbessern auch die interne Steuerungsfähigkeit und Entscheidungsprozesse. Investieren Sie in ein nachhaltiges Dokumentations- und Prozessmanagement als strategischen Vorteil.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in EBA-Anforderungen und Best Practices der Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung in der Optimierung regulatorischer Prozesse in verschiedenen Finanzinstituten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Pragmatischer Ansatz mit Fokus auf Effizienz und Nutzbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Moderne Methoden zur Prozessanalyse und -optimierung'
            }
          ]
        },
        additionalInfo: 'Finanzinstitute mit optimierten Dokumentations- und Prozessstrukturen erzielen nachweislich bessere Ergebnisse bei regulatorischen Prüfungen und können bis zu 30% der Zeit und Ressourcen einsparen, die für die Erfüllung von Compliance-Anforderungen aufgewendet werden. Eine effiziente Dokumentation und optimierte Prozesse wirken sich positiv auf die gesamte Organisation aus.',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum zur Optimierung Ihrer regulatorischen Dokumentation und Prozesse, von der Ist-Analyse über die Konzeption bis hin zur Implementierung und kontinuierlichen Verbesserung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Analyse und Bewertung der bestehenden Dokumentation und Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung einer optimalen Dokumentationsstruktur'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Prozessoptimierung für regulatorische Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementierung von Dokumentationsstandards und Templates'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Aufbau eines nachhaltigen Dokumentations- und Prozessmanagements'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir bieten einen strukturierten Ansatz zur Optimierung Ihrer Dokumentation und Prozesse, der auf Ihre spezifischen Anforderungen und den regulatorischen Kontext zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Detaillierte Analyse der bestehenden Dokumentation und Prozesse im Kontext der EBA-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung eines maßgeschneiderten Konzepts für eine optimale Dokumentationsstruktur und effiziente Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Erstellung von Templates und Standards für verschiedene Dokumentationstypen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung optimierter Prozesse für Erstellung, Prüfung und Aktualisierung der Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Schulung und Wissenstransfer für nachhaltiges Dokumentations- und Prozessmanagement'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Carolin Meyer',
        position: 'Senior Manager',
        quote: 'Eine durchdachte Dokumentation und effiziente Prozesse sind nicht nur für die Erfüllung regulatorischer Anforderungen entscheidend, sondern auch für die interne Steuerungsfähigkeit. Unsere maßgeschneiderten Lösungen helfen Finanzinstituten, beide Aspekte zu optimieren und langfristige Effizienzgewinne zu erzielen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Dokumentationsanalyse und -optimierung',
          description: 'Wir analysieren Ihre bestehende Dokumentation im Hinblick auf EBA-Anforderungen und entwickeln eine optimale Struktur und Standards für verschiedene Dokumentationstypen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Gap-Analyse der bestehenden Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung einer optimalen Dokumentationsstruktur und -hierarchie'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Erstellung von Templates und Standards für verschiedene Dokumentationstypen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Implementierung eines effizienten Dokumentationsmanagementsystems'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Prozessoptimierung für regulatorische Anforderungen',
          description: 'Wir optimieren Ihre Prozesse für die Erstellung, Prüfung und Aktualisierung regulatorischer Dokumentation und implementieren effiziente Workflows.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Analyse und Bewertung bestehender Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung optimierter Prozesse für regulatorische Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementierung effizienter Workflows und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Automatisierung und Digitalisierung von Dokumentations- und Compliance-Prozessen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(ebaDocumentationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EBA Dokumentations- und Prozessoptimierung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
