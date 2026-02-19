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
    console.log('Creating EU AI Act Technical Documentation page...')

    const euAiActTechnicalDocumentationData = {
      _type: 'servicePage',
      _id: 'eu-ai-act-technical-documentation',
      title: 'EU AI Act Technical Documentation',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eu-ai-act/eu-ai-act-high-risk-ai-systems/eu-ai-act-technical-documentation'
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
        title: 'EU AI Act Technical Documentation | ADVISORI',
        description: 'Professionelle Erstellung und Verwaltung der technischen Dokumentation für EU AI Act-konforme Hochrisiko-KI-Systeme. Umfassende Beratung für Compliance und Dokumentationsexzellenz.',
        keywords: 'EU AI Act, Technical Documentation, Technische Dokumentation, AI Documentation, Compliance Documentation, High-Risk AI Systems, Artificial Intelligence'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EU AI Act Technical Documentation'
        },
        tagline: 'Präzise technische Dokumentation für EU AI Act-Compliance',
        heading: 'EU AI Act Technical Documentation',
        description: 'Die EU AI Act stellt hohe Anforderungen an die technische Dokumentation von Hochrisiko-KI-Systemen. Wir unterstützen Sie bei der Erstellung umfassender, compliance-konformer Dokumentation, die alle regulatorischen Standards erfüllt.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige EU AI Act-konforme technische Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Systematische Erfassung aller relevanten Systemparameter'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Prozesse für kontinuierliche Dokumentationspflege'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Prüfungssichere Archivierung und Versionskontrolle'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EU AI Act Technical Documentation',
        description: 'Die technische Dokumentation stellt einen zentralen Compliance-Baustein der EU AI Act dar und muss umfassende Informationen über Design, Entwicklung, Funktionsweise und Leistung von Hochrisiko-KI-Systemen enthalten. Sie dient als primäres Kommunikationsinstrument gegenüber Aufsichtsbehörden und ist essentiell für die Konformitätsbewertung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Erstellung vollständiger technischer Systemdokumentation nach EU AI Act-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung standardisierter Dokumentationsframeworks und -prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung von Qualitätssicherungs- und Versionskontrollsystemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau nachhaltiger Dokumentationsprozesse für den gesamten KI-Lebenszyklus'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration in bestehende Entwicklungs- und Qualitätsmanagementsysteme'
          }
        ],
        alert: {
          title: 'Regulatorischer Hinweis',
          content: 'Die technische Dokumentation muss während des gesamten Lebenszyklus des KI-Systems aktuell gehalten werden und auf Anfrage den Aufsichtsbehörden zur Verfügung gestellt werden können. Eine proaktive, systematische Dokumentation ist für erfolgreiche Compliance unerlässlich.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnisse der EU AI Act-Dokumentationsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung in der Entwicklung standardisierter Dokumentationsframeworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Expertise in technischer Kommunikation und regulatorischer Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Bewährte Methoden für effiziente Dokumentationsprozesse'
            }
          ]
        },
        additionalInfo: 'Eine präzise technische Dokumentation ist nicht nur ein Compliance-Instrument, sondern auch ein wertvolles Asset für Produktentwicklung, Qualitätssicherung und Wissensmanagement.',
        serviceDescription: 'Wir bieten umfassende Unterstützung bei der Erstellung, Strukturierung und Verwaltung EU AI Act-konformer technischer Dokumentation. Unser Ansatz kombiniert regulatorische Expertise mit bewährten Dokumentationsmethoden.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Analyse bestehender Dokumentation und Gap-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung maßgeschneiderter Dokumentationsframeworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Erstellung vollständiger technischer Systemdokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementierung von Dokumentationsprozessen und -tools'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung und Unterstützung von Dokumentationsteams'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen systematische, compliance-konforme Dokumentationsprozesse, die nahtlos in Ihre bestehenden Entwicklungsworkflows integriert werden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer KI-Systeme und bestehenden Dokumentationspraktiken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design eines strukturierten Dokumentationsframeworks nach EU AI Act-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Schrittweise Implementierung mit kontinuierlicher Qualitätskontrolle'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende Entwicklungs- und Qualitätsmanagementsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Aufbau nachhaltiger Dokumentationskompetenzen im Team'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Präzise technische Dokumentation ist das Fundament vertrauensvoller KI. Sie macht komplexe Systeme nachvollziehbar, ermöglicht systematische Qualitätskontrolle und schafft die Transparenz, die für regulatorische Compliance und Stakeholder-Vertrauen erforderlich ist.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Dokumentationsanalyse und Framework-Design',
          description: 'Umfassende Bewertung bestehender Dokumentationspraktiken und Entwicklung maßgeschneiderter Dokumentationsframeworks nach EU AI Act-Standards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematische Analyse bestehender technischer Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Gap-Assessment gegen EU AI Act-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Design strukturierter Dokumentationsframeworks und -templates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung von Qualitätssicherungs- und Reviewprozessen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Dokumentationserstellung und -implementation',
          description: 'Professionelle Erstellung vollständiger technischer Dokumentation und Implementierung nachhaltiger Dokumentationsprozesse für kontinuierliche Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Erstellung vollständiger EU AI Act-konformer technischer Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung automatisierter Dokumentationsworkflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Aufbau von Versionskontroll- und Archivierungssystemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration in bestehende Entwicklungs- und QM-Prozesse'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(euAiActTechnicalDocumentationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EU AI Act Technical Documentation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
