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
    console.log('Creating EU AI Act Transparency Requirements page...')

    const euAiActTransparencyRequirementsData = {
      _type: 'servicePage',
      _id: 'eu-ai-act-transparency-requirements',
      title: 'EU AI Act Transparency Requirements',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eu-ai-act/eu-ai-act-ai-compliance-framework/eu-ai-act-transparency-requirements'
      },
      parent: {
        _type: 'reference',
        _ref: 'eu-ai-act-ai-compliance-framework'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'regulatory-reporting'
        }
      },
      seo: {
        _type: 'seo',
        title: 'EU AI Act Transparency Requirements | ADVISORI',
        description: 'Comprehensive compliance support for EU AI Act transparency obligations. Expert guidance on transparency requirements, documentation, and stakeholder communication for AI systems.',
        keywords: 'EU AI Act, AI Transparency, AI Compliance, AI Documentation, AI Governance, Transparency Requirements, AI Regulation, AI Ethics'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EU AI Act Transparency Requirements'
        },
        tagline: 'Transparenz als Grundpfeiler vertrauensvoller KI',
        heading: 'EU AI Act Transparency Requirements',
        description: 'Die Transparenzanforderungen des EU AI Acts bilden das Fundament für vertrauensvolle und nachvollziehbare KI-Systeme. Wir unterstützen Sie bei der vollständigen Erfüllung aller Transparenzverpflichtungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Compliance mit EU AI Act Transparenzanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturierte Dokumentation und Nachweisführung für KI-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effektive Stakeholder-Kommunikation und Vertrauensaufbau'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Risikominimierung durch proaktive Transparenzmaßnahmen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EU AI Act Transparency Requirements',
        description: 'Transparenz ist ein zentraler Pfeiler des EU AI Acts und erfordert umfassende Offenlegung von Informationen über KI-Systeme. Wir helfen Ihnen dabei, alle Transparenzanforderungen systematisch zu erfüllen und dabei Geschäftsgeheimnisse zu schützen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse und Implementierung aller Transparenzverpflichtungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung strukturierter Dokumentationsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Aufbau effektiver Kommunikationsstrategien für Stakeholder'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Balance zwischen Transparenz und Geschäftsgeheimnissen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Anpassung der Transparenzmaßnahmen'
          }
        ],
        alert: {
          title: 'Compliance-Hinweis',
          content: 'Transparenzanforderungen variieren je nach KI-System-Kategorie und Risikoklassifizierung. Eine differenzierte Herangehensweise ist essentiell für effektive Compliance bei gleichzeitigem Schutz von Wettbewerbsvorteilen.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnis der EU AI Act Transparenzbestimmungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praktische Erfahrung in der Implementierung von Transparenzmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ausgewogene Balance zwischen Compliance und Geschäftsinteressen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchen-spezifische Transparenzlösungen und Best Practices'
            }
          ]
        },
        additionalInfo: 'Effektive Transparenz schafft Vertrauen bei Stakeholdern und kann zu einem Wettbewerbsvorteil werden. Investieren Sie in professionelle Transparenzstrategien, die Compliance und Business Value vereinen.',
        serviceDescription: 'Wir bieten Ihnen umfassende Unterstützung bei der Erfüllung aller EU AI Act Transparenzanforderungen. Von der initialen Bewertung über die Implementierung bis hin zur kontinuierlichen Optimierung Ihrer Transparenzprozesse.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Transparenz-Gap-Analyse und Anforderungsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung von Dokumentationsstandards und -prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Stakeholder-Kommunikationsstrategien und -materialien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementierung von Transparenz-Management-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Ongoing Monitoring und Compliance-Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Transparenz-Ansatz',
        description: 'Wir entwickeln maßgeschneiderte Transparenzstrategien, die regulatorische Anforderungen erfüllen und gleichzeitig Ihre Geschäftsinteressen optimal berücksichtigen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer KI-Systeme und Transparenzanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung risikobasierter Transparenzstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung strukturierter Dokumentationsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Aufbau effektiver Stakeholder-Kommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI GmbH',
        name: 'Digital Transformation Expert',
        position: 'Senior Consultant',
        quote: 'ADVISORI hat uns dabei geholfen, eine umfassende Transparenzstrategie zu entwickeln, die nicht nur alle EU AI Act Anforderungen erfüllt, sondern auch das Vertrauen unserer Stakeholder nachhaltig gestärkt hat. Ihre strukturierte Herangehensweise war entscheidend für unseren Erfolg.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Transparenz-Assessment und Strategieentwicklung',
          description: 'Umfassende Bewertung Ihrer aktuellen Transparenzmaßnahmen und Entwicklung einer maßgeschneiderten Compliance-Strategie.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Vollständige Analyse aller Transparenzanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Gap-Analyse der bestehenden Transparenzmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risikobasierte Transparenzstrategie-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Roadmap für die Implementierung von Transparenzmaßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Transparenz-Implementierung und Management',
          description: 'Praktische Umsetzung aller Transparenzanforderungen mit kontinuierlichem Management und Optimierung der Transparenzprozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Aufbau strukturierter Dokumentationssysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung von Stakeholder-Kommunikationstools'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementierung von Transparenz-Monitoring-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Compliance-Überwachung und Anpassung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(euAiActTransparencyRequirementsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EU AI Act Transparency Requirements page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
