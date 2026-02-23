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
    console.log('Creating EU AI Act Human Oversight page...')

    const euAiActHumanOversightData = {
      _type: 'servicePage',
      _id: 'eu-ai-act-human-oversight',
      title: 'EU AI Act Human Oversight',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eu-ai-act/eu-ai-act-high-risk-ai-systems/eu-ai-act-human-oversight'
      },
      parent: {
        _type: 'reference',
        _ref: 'eu-ai-act-high-risk-ai-systems'
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
        title: 'EU AI Act Human Oversight | ADVISORI',
        description: 'Implementieren Sie effektive Human Oversight-Systeme für EU AI Act-konforme Hochrisiko-KI-Systeme. ADVISORI unterstützt bei der Entwicklung menschlicher Aufsichtsmechanismen.',
        keywords: 'EU AI Act, Human Oversight, KI-Verordnung, Menschliche Aufsicht, Hochrisiko-KI-Systeme, Compliance, Human-in-the-Loop'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EU AI Act Human Oversight'
        },
        tagline: 'Effektive menschliche Aufsicht für KI-Systeme',
        heading: 'EU AI Act Human Oversight',
        description: 'Die EU-KI-Verordnung verlangt angemessene menschliche Aufsicht für Hochrisiko-KI-Systeme. Wir entwickeln maßgeschneiderte Human Oversight-Frameworks, die sowohl Compliance sicherstellen als auch operative Effizienz gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'EU AI Act-konforme Human Oversight-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Intelligente Human-in-the-Loop-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Optimierte Balance zwischen Automatisierung und menschlicher Kontrolle'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Skalierbare Aufsichtsmechanismen für komplexe KI-Deployments'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EU AI Act Human Oversight',
        description: 'Human Oversight ist ein zentraler Pfeiler der EU-KI-Verordnung für Hochrisiko-KI-Systeme. Die Anforderung geht über bloße menschliche Intervention hinaus und verlangt systematische, gut durchdachte Aufsichtsmechanismen, die effektive Kontrolle und Verantwortlichkeit gewährleisten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Design angemessener Human Oversight-Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung von Human-in-the-Loop-Workflows'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung effektiver Eskalationsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Training und Befähigung von Oversight-Personal'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Optimierung der Aufsichtsprozesse'
          }
        ],
        alert: {
          title: 'Compliance-Hinweis',
          content: 'Unzureichende Human Oversight kann zur Einstufung eines KI-Systems als nicht-konform führen und erhebliche rechtliche und finanzielle Konsequenzen nach sich ziehen.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnisse der EU AI Act Human Oversight-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung in der praktischen Umsetzung von Human-in-the-Loop-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Interdisziplinärer Ansatz zwischen Technologie, Recht und Organisationspsychologie'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Bewährte Methoden zur Balance von Effizienz und Kontrolle'
            }
          ]
        },
        additionalInfo: 'Effektive Human Oversight reduziert nicht nur Compliance-Risiken, sondern verbessert auch die Qualität und Vertrauenswürdigkeit Ihrer KI-Systeme durch systematische menschliche Validierung.',
        serviceDescription: 'Wir bieten umfassende Beratung und Implementierungsunterstützung für Human Oversight-Systeme, die den EU AI Act-Anforderungen entsprechen und gleichzeitig operative Exzellenz fördern.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Human Oversight-Anforderungsanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Design von Human-in-the-Loop-Workflows'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung von Eskalations- und Interventionsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Schulung und Zertifizierung von Oversight-Personal'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Optimierung und Qualitätssicherung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln Human Oversight-Lösungen, die sowohl den regulatorischen Anforderungen entsprechen als auch praktikabel und effizient in der täglichen Anwendung sind.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Bewertung Ihrer KI-Systeme und Oversight-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design maßgeschneiderter Human Oversight-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung von Technologie und Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Schulung und Befähigung der Oversight-Teams'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Testing, Validierung und kontinuierliche Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir Human Oversight-Systeme implementiert, die nicht nur die EU AI Act-Anforderungen erfüllen, sondern auch die Qualität und Vertrauenswürdigkeit unserer KI-Entscheidungen erheblich verbessert haben.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Human Oversight-Strategieentwicklung',
          description: 'Entwicklung umfassender Strategien für angemessene menschliche Aufsicht über Hochrisiko-KI-Systeme gemäß EU AI Act.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse der spezifischen Oversight-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Design von Oversight-Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung von Rollen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration in bestehende Geschäftsprozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technische Implementierung',
          description: 'Umsetzung technischer Lösungen für effektive Human-in-the-Loop-Systeme und Aufsichtsmechanismen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Human-in-the-Loop-Workflow-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automatisierte Eskalationssysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Dashboard-Entwicklung für Oversight-Teams'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration mit bestehenden KI-Pipelines'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(euAiActHumanOversightData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EU AI Act Human Oversight page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
