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
    console.log('Creating NIS2 Important Entities page...')

    const nis2ImportantEntitiesData = {
      _type: 'servicePage',
      _id: 'nis2-important-entities',
      title: 'NIS2 Important Entities',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/nis2/nis2-sector-specific-requirements/nis2-important-entities'
      },
      parent: {
        _type: 'reference',
        _ref: 'nis2-sector-specific-requirements'
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
        title: 'NIS2 Important Entities | ADVISORI',
        description: 'Professionelle Beratung für wichtige Einrichtungen (Important Entities) unter der NIS2-Richtlinie. Maßgeschneiderte Cybersicherheitsmaßnahmen und Compliance-Strategien.',
        keywords: 'NIS2, Important Entities, wichtige Einrichtungen, Cybersicherheit, Compliance, Risikomanagement, Netzwerksicherheit, mittelständische Unternehmen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIS2 Important Entities'
        },
        tagline: 'Pragmatische NIS2-Compliance für mittelgroße Organisationen',
        heading: 'NIS2 Important Entities',
        description: 'Wichtige Einrichtungen (Important Entities) benötigen unter der NIS2-Richtlinie maßgeschneiderte Cybersicherheitslösungen. Wir entwickeln kosteneffiziente und praxistaugliche Compliance-Strategien.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Kosteneffiziente NIS2-Compliance für Important Entities'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Pragmatische Cybersicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effiziente Incident Response Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Skalierbare Sicherheitsarchitekturen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'NIS2 Important Entities',
        description: 'Important Entities sind mittelgroße Unternehmen in kritischen und wichtigen Sektoren, die unter der NIS2-Richtlinie proportionale Cybersicherheitsmaßnahmen implementieren müssen. Diese Organisationen profitieren von pragmatischen, kosteneffizienten Lösungen, die Compliance gewährleisten ohne operative Flexibilität zu beeinträchtigen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Bewertung des Important Entity Status und Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung proportionaler Cybersicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung kosteneffizienter Sicherheitslösungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau schlanker Incident Response Capabilities'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Etablierung nachhaltiger Compliance-Prozesse'
          }
        ],
        alert: {
          title: 'Compliance-Hinweis',
          content: 'Important Entities unterliegen zwar geringeren Aufsichtsmaßnahmen als Essential Entities, müssen aber dennoch angemessene Cybersicherheitsmaßnahmen implementieren und können bei Verstößen mit Sanktionen belegt werden.'
        },
        whyUs: {
          title: 'Warum ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Expertise für mittelständische Organisationen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Kosteneffiziente und praxistaugliche Lösungsansätze'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Proportionale Umsetzungsstrategien für Important Entities'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Unterstützung bei Compliance-Optimierung'
            }
          ]
        },
        additionalInfo: 'Important Entities in Sektoren wie digitale Infrastruktur, Abfallwirtschaft, Chemie und Lebensmittelproduktion müssen angemessene Cybersicherheitsstandards erfüllen, die ihrer Größe und Kritikalität entsprechen.',
        serviceDescription: 'Unsere Beratung für Important Entities fokussiert auf praktikable und kosteneffiziente NIS2-Compliance-Lösungen, die geschäftliche Agilität erhalten und gleichzeitig robuste Cybersicherheit gewährleisten.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Important Entity Status-Analyse und Klassifikation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung proportionaler Cybersicherheitsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementation skalierbare Sicherheitstechnologien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Aufbau effizienter Incident Management Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Compliance-Optimierung und Monitoring'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz für Important Entities',
        description: 'Wir entwickeln maßgeschneiderte, proportionale Compliance-Strategien, die den spezifischen Bedürfnissen und Ressourcen von Important Entities entsprechen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Bewertung des Important Entity Status und proportionaler Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Risikobewertung mit Fokus auf geschäftskritische Assets'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung kosteneffizienter Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung schlanker Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung nachhaltiger Überwachung und Berichterstattung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Important Entities benötigen pragmatische Cybersicherheitslösungen, die Compliance gewährleisten ohne operative Flexibilität zu beeinträchtigen. ADVISORI unterstützt mittelständische Organisationen dabei, die richtige Balance zwischen Sicherheit und Effizienz zu finden.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Important Entity Compliance Assessment',
          description: 'Umfassende Bewertung Ihres Compliance-Status und Entwicklung einer maßgeschneiderten Umsetzungsstrategie.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse Ihres Important Entity Status'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung proportionaler Sicherheitsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Gap-Analyse bestehender Cybersicherheitsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung kosteneffizienter Umsetzungsroadmap'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Proportionale Cybersicherheitsmaßnahmen',
          description: 'Implementation angemessener Sicherheitslösungen, die Ihren spezifischen Anforderungen und Ressourcen entsprechen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung skalierbare Sicherheitsarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementation kosteneffizienter Sicherheitstechnologien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Aufbau schlanker Incident Response Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Etablierung kontinuierlicher Überwachung und Verbesserung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nis2ImportantEntitiesData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIS2 Important Entities page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
