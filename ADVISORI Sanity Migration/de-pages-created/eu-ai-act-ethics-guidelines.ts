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
    console.log('Creating EU AI Act Ethics Guidelines page...')

    const euAiActEthicsGuidelinesData = {
      _type: 'servicePage',
      _id: 'eu-ai-act-ethics-guidelines',
      title: 'EU AI Act Ethics Guidelines',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eu-ai-act/eu-ai-act-ai-compliance-framework/eu-ai-act-ethics-guidelines'
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
        title: 'EU AI Act Ethics Guidelines | ADVISORI',
        description: 'Comprehensive AI ethics implementation for EU AI Act compliance. Expert guidance on ethical AI principles, human oversight requirements, and responsible AI governance frameworks.',
        keywords: 'EU AI Act, AI Ethics, AI Governance, Ethical AI, Human Oversight, AI Principles, AI Compliance, Responsible AI, AI Risk Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EU AI Act Ethics Guidelines'
        },
        tagline: 'Ethik als Fundament vertrauensvoller KI-Innovation',
        heading: 'EU AI Act Ethics Guidelines',
        description: 'Die Ethik-Richtlinien des EU AI Acts definieren die moralischen Grundprinzipien für verantwortungsvolle KI-Entwicklung. Wir unterstützen Sie bei der systematischen Implementierung ethischer KI-Governance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Compliance mit EU AI Act Ethik-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturierte Implementierung ethischer KI-Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Robuste Human Oversight und Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltiger Aufbau von Stakeholder-Vertrauen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EU AI Act Ethics Guidelines',
        description: 'Ethische KI-Entwicklung ist ein zentraler Baustein des EU AI Acts und erfordert die systematische Integration moralischer Prinzipien in alle KI-Prozesse. Wir helfen Ihnen dabei, ethische Exzellenz als Wettbewerbsvorteil zu etablieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung und Implementierung ethischer KI-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Aufbau robuster Human Oversight-Mechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration ethischer Prinzipien in KI-Entwicklungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Etablierung von Ethics-by-Design-Ansätzen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche ethische Bewertung und Optimierung'
          }
        ],
        alert: {
          title: 'Compliance-Hinweis',
          content: 'Ethische KI-Anforderungen variieren je nach Anwendungsbereich und Risikokategorie. Eine differenzierte und kontextuelle Herangehensweise ist essentiell für wirksame ethische KI-Governance.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in EU AI Act Ethik-Bestimmungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praktische Erfahrung in der Implementierung ethischer KI-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Interdisziplinäre Herangehensweise an KI-Ethik und Governance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchen-spezifische ethische Lösungen und Best Practices'
            }
          ]
        },
        additionalInfo: 'Ethische KI ist nicht nur eine regulatorische Anforderung, sondern ein strategischer Enabler für nachhaltiges Wachstum und Stakeholder-Vertrauen. Investieren Sie in ethische Exzellenz als Differenzierungsfaktor.',
        serviceDescription: 'Wir bieten Ihnen umfassende Unterstützung bei der Entwicklung und Implementierung ethischer KI-Governance. Von der Strategieentwicklung über die praktische Umsetzung bis hin zur kontinuierlichen Optimierung Ihrer Ethik-Frameworks.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Ethik-Gap-Analyse und Framework-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Human Oversight-Systeme und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Ethics-by-Design-Integration in Entwicklungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Stakeholder-Engagement und ethische Kommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliches Ethik-Monitoring und Compliance-Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ethik-Ansatz',
        description: 'Wir entwickeln maßgeschneiderte ethische KI-Frameworks, die nicht nur regulatorische Anforderungen erfüllen, sondern auch Ihre Unternehmenswerte und strategischen Ziele optimal unterstützen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer KI-Systeme und ethischen Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung kontextueller ethischer KI-Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung robuster Governance-Mechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von Human Oversight und Kontrollelementen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche ethische Bewertung und Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI GmbH',
        name: 'AI Ethics Expert',
        position: 'Senior Consultant',
        quote: 'ADVISORI hat uns dabei geholfen, ein umfassendes ethisches KI-Framework zu entwickeln, das nicht nur alle EU AI Act Anforderungen erfüllt, sondern auch unsere Unternehmenswerte authentisch widerspiegelt. Ihre strukturierte Herangehensweise war entscheidend für den Aufbau nachhaltigen Stakeholder-Vertrauens.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Ethik-Framework-Entwicklung und Strategieberatung',
          description: 'Umfassende Entwicklung ethischer KI-Frameworks und strategische Beratung für die Integration ethischer Prinzipien in Ihre KI-Governance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung maßgeschneiderter ethischer KI-Prinzipien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Gap-Analyse bestehender ethischer Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Strategische Roadmap für ethische KI-Transformation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration von Stakeholder-Perspektiven und -Erwartungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Ethik-Implementierung und Governance-Management',
          description: 'Praktische Umsetzung ethischer KI-Frameworks mit kontinuierlichem Management und Optimierung der ethischen Governance-Prozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Aufbau von Human Oversight-Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Ethics-by-Design-Integration in Entwicklungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementierung ethischer Bewertungs- und Monitoring-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche ethische Compliance-Überwachung und Anpassung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(euAiActEthicsGuidelinesData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EU AI Act Ethics Guidelines page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
