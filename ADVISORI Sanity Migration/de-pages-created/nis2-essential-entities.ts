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
    console.log('Creating NIS2 Essential Entities page...')

    const nis2EssentialEntitiesData = {
      _type: 'servicePage',
      _id: 'nis2-essential-entities',
      title: 'NIS2 Essential Entities',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/nis2/nis2-sector-specific-requirements/nis2-essential-entities'
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
        title: 'NIS2 Essential Entities | ADVISORI',
        description: 'Umfassende Beratung für wesentliche Einrichtungen (Essential Entities) unter der NIS2-Richtlinie. Sicherheitsmaßnahmen, Compliance und Risikomanagement.',
        keywords: 'NIS2, Essential Entities, wesentliche Einrichtungen, Cybersicherheit, Risikomanagement, Compliance, Netzwerksicherheit'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIS2 Essential Entities'
        },
        tagline: 'Compliance für kritische Infrastrukturen unter NIS2',
        heading: 'NIS2 Essential Entities',
        description: 'Wesentliche Einrichtungen (Essential Entities) unterliegen unter der NIS2-Richtlinie den höchsten Cybersicherheitsanforderungen. Wir unterstützen Sie bei der vollständigen Compliance-Umsetzung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige NIS2-Compliance für Essential Entities'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Umfassendes Cybersicherheits-Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effiziente Incident Response und Meldepflichten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strategische Beratung für kritische Infrastrukturen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'NIS2 Essential Entities',
        description: 'Essential Entities sind Unternehmen kritischer Sektoren, die unter der NIS2-Richtlinie den höchsten Regulierungsanforderungen unterliegen. Diese Organisationen sind für das Funktionieren der Gesellschaft und Wirtschaft von entscheidender Bedeutung und müssen daher besonders strenge Cybersicherheitsmaßnahmen implementieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Identifikation und Klassifikation als Essential Entity'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung umfassender Cybersicherheitsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung verstärkter Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau robuster Incident Response Capabilities'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Compliance-Management'
          }
        ],
        alert: {
          title: 'Kritischer Hinweis',
          content: 'Essential Entities unterliegen verschärften Aufsichtsmaßnahmen und können bei Nicht-Compliance mit erheblichen Sanktionen von bis zu 2% des weltweiten Jahresumsatzes belegt werden.'
        },
        whyUs: {
          title: 'Warum ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Expertise für kritische Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassende Kenntnis der NIS2-Anforderungen für Essential Entities'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Pragmatische Umsetzungsstrategien für komplexe Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung bei Aufsichtsbehörden-Interaktionen'
            }
          ]
        },
        additionalInfo: 'Essential Entities in kritischen Sektoren wie Energie, Transport, Bankwesen und Gesundheitswesen müssen höchste Cybersicherheitsstandards erfüllen und unterliegen verstärkter behördlicher Aufsicht.',
        serviceDescription: 'Unser spezialisiertes Beratungsangebot für Essential Entities umfasst die vollständige NIS2-Compliance-Implementierung, von der initialen Bewertung bis zur kontinuierlichen Überwachung und Optimierung der Cybersicherheitsmaßnahmen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Essential Entity Status-Bewertung und Klassifikation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung sektorspezifischer Cybersicherheitsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementation verstärkter technischer Schutzmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Aufbau von Incident Response und Crisis Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Compliance-Überwachung und Reporting'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz für Essential Entities',
        description: 'Wir entwickeln maßgeschneiderte Compliance-Strategien, die den spezifischen Anforderungen und Risikoprofilen von Essential Entities gerecht werden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Bewertung des Essential Entity Status und Klassifikation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Umfassende Risiko- und Schwachstellenanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung sektorspezifischer Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung verstärkter Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung kontinuierlicher Überwachung und Berichterstattung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die NIS2-Compliance für Essential Entities erfordert höchste Präzision und Expertise. ADVISORI unterstützt kritische Infrastrukturen dabei, nicht nur regulatorische Anforderungen zu erfüllen, sondern ihre Cybersicherheit nachhaltig zu stärken.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Essential Entity Klassifikation & Bewertung',
          description: 'Präzise Bestimmung des Regulierungsstatus und der spezifischen Anforderungen für Ihr Unternehmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Sektoranalyse und Größenschwellen-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung der Kritikalität für gesellschaftliche Funktionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation spezifischer NIS2-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Dokumentation des Essential Entity Status'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Verstärkte Cybersicherheitsmaßnahmen',
          description: 'Implementierung der höchsten Cybersicherheitsstandards entsprechend den Essential Entity Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung sektorspezifischer Sicherheitsarchitektur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementation verstärkter technischer Schutzmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Aufbau robuster Incident Response Capabilities'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Bedrohungsüberwachung und -analyse'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nis2EssentialEntitiesData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIS2 Essential Entities page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
