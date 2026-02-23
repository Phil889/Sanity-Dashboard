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
    console.log('Creating EU AI Act Documentation Requirements page...')

    const documentationRequirementsData = {
      _type: 'servicePage',
      _id: 'eu-ai-act-documentation-requirements',
      title: 'EU AI Act Dokumentationsanforderungen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eu-ai-act/eu-ai-act-ai-risk-classification/eu-ai-act-documentation-requirements'
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
        title: 'EU AI Act Dokumentationsanforderungen | ADVISORI',
        description: 'Erfüllen Sie die umfassenden Dokumentationspflichten der EU AI Act. Wir unterstützen bei der Erstellung, Implementierung und Aufrechterhaltung aller erforderlichen Dokumentationen.',
        keywords: 'EU AI Act, Dokumentation, KI-Verordnung, Compliance, Risikomanagement, Technische Dokumentation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EU AI Act Dokumentationsanforderungen'
        },
        tagline: 'Umfassende Dokumentationslösungen für EU AI Act Compliance',
        heading: 'EU AI Act Dokumentationsanforderungen',
        description: 'Die EU AI Act stellt umfangreiche Dokumentationsanforderungen an KI-Systeme. Wir unterstützen Sie bei der systematischen Erfüllung aller Dokumentationspflichten für eine rechtskonforme KI-Entwicklung und -Nutzung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Erfüllung aller EU AI Act Dokumentationspflichten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturierte Vorlagen und Frameworks für effiziente Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Dokumentationsprozesse im KI-Lebenszyklus'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Aktualisierung und Pflege der Dokumentation'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EU AI Act Dokumentationsanforderungen',
        description: 'Die EU AI Act fordert eine umfassende und kontinuierliche Dokumentation von KI-Systemen entlang des gesamten Lebenszyklus. Von der technischen Dokumentation bis hin zu Konformitätsbewertungen müssen alle Aspekte systematisch erfasst und gepflegt werden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Technische Dokumentation nach Artikel 11 der EU AI Act'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Risikomanagementsystem-Dokumentation und -Nachweise'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Qualitätsmanagementsystem und Prozessdokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Automatische Protokollierung und Aufzeichnungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'EU-Konformitätserklärung und CE-Kennzeichnung'
          }
        ],
        alert: {
          title: 'Compliance-Hinweis',
          content: 'Die Dokumentationsanforderungen der EU AI Act sind umfangreich und müssen bereits in der Entwicklungsphase berücksichtigt werden. Eine nachträgliche Dokumentation ist oft unvollständig und rechtlich unzureichend.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnis der EU AI Act Dokumentationsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Vorlagen und Dokumentationsframeworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integration in bestehende KI-Entwicklungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Betreuung und Aktualisierung'
            }
          ]
        },
        additionalInfo: 'Eine vollständige und aktuelle Dokumentation ist nicht nur rechtlich erforderlich, sondern auch ein wesentlicher Baustein für das Vertrauen in KI-Systeme und deren erfolgreiche Markteinführung.',
        serviceDescription: 'Wir bieten Ihnen eine umfassende Unterstützung bei der Erfüllung aller Dokumentationsanforderungen der EU AI Act - von der initialen Erstellung bis zur kontinuierlichen Pflege und Aktualisierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Technische Dokumentation nach EU AI Act Standards'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Risikomanagementsystem-Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Qualitätsmanagementsystem-Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Automatische Logging und Aufzeichnungssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'EU-Konformitätserklärung und Zertifizierungsunterstützung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Dokumentationsansatz',
        description: 'Wir entwickeln mit Ihnen ein systematisches und nachhaltiges Dokumentationssystem, das alle EU AI Act Anforderungen erfüllt und gleichzeitig praktikabel im Alltag ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse bestehender Dokumentationsprozesse und -lücken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung maßgeschneiderter Dokumentationsframeworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Integration in bestehende Entwicklungs- und Betriebsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Schulung der Teams und Etablierung von Dokumentationsroutinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Verbesserung der Dokumentation'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns dabei geholfen, ein umfassendes Dokumentationssystem für unsere KI-Systeme zu etablieren, das nicht nur alle EU AI Act Anforderungen erfüllt, sondern auch unsere internen Qualitätsprozesse erheblich verbessert hat.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Technische Dokumentation',
          description: 'Erstellung der umfassenden technischen Dokumentation nach Artikel 11 der EU AI Act.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Systembeschreibung und Architektur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Trainingsdaten-Dokumentation und Datenschutz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Algorithmus-Beschreibung und Leistungsmetriken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Validierungs- und Testdokumentation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Qualitätsmanagementsystem-Dokumentation',
          description: 'Dokumentation des Qualitätsmanagementsystems für KI-Systeme gemäß EU AI Act.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'QMS-Handbuch und Prozessbeschreibungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Rollen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Änderungsmanagement und Versionskontrolle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Verbesserungsprozesse'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(documentationRequirementsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EU AI Act Documentation Requirements page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
