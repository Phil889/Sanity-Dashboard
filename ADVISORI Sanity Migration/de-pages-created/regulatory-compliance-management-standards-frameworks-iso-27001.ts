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
    console.log('Creating ISO 27001 page...')

    const iso27001Data = {
      _type: 'servicePage',
      _id: 'regulatory-compliance-management-standards-frameworks-iso-27001',
      title: 'ISO 27001',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/standards-frameworks-iso-27001'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management-standards-frameworks'
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
        title: 'ISO 27001 Implementation | ADVISORI',
        description: 'Professionelle Unterstützung bei der Implementierung und Zertifizierung nach ISO 27001. Wir begleiten Sie bei der Entwicklung eines robusten Informationssicherheitsmanagementsystems.',
        keywords: 'ISO 27001, Informationssicherheit, ISMS, Zertifizierung, Information Security Management System, Cybersecurity Standards, Risk Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Implementation'
        },
        tagline: 'Ihr Weg zur ISO 27001 Zertifizierung',
        heading: 'ISO 27001',
        description: 'ISO 27001 ist der internationale Standard für Informationssicherheitsmanagementsysteme (ISMS) und bietet einen systematischen Ansatz zum Schutz sensibler Unternehmensinformationen. Wir unterstützen Sie bei der strategischen Implementierung und erfolgreichen Zertifizierung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematischer Aufbau eines robusten ISMS nach internationalen Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Umfassende Gap-Analyse und strukturierte Implementierungsroadmap'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Professionelle Begleitung durch den gesamten Zertifizierungsprozess'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Weiterentwicklung und Optimierung des ISMS'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ISO 27001 Informationssicherheitsmanagement',
        description: 'In einer zunehmend digitalen und vernetzten Geschäftswelt ist die Sicherheit von Informationen ein kritischer Erfolgsfaktor. ISO 27001 bietet einen bewährten Rahmen für die systematische Identifikation, Bewertung und Behandlung von Informationssicherheitsrisiken. Die erfolgreiche Implementierung erfordert nicht nur technische Expertise, sondern auch strategisches Verständnis für organisatorische Veränderungsprozesse.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung einer umfassenden Informationssicherheitsstrategie und -politik'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung risikobasierter Sicherheitskontrollen und -maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Aufbau effektiver Governance-Strukturen und Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Etablierung kontinuierlicher Überwachungs- und Verbesserungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration mit bestehenden Managementsystemen und Compliance-Anforderungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine erfolgreiche ISO 27001 Implementierung geht über die reine Erfüllung von Anforderungen hinaus. Sie schafft eine Sicherheitskultur, die das Unternehmen nachhaltig stärkt und Vertrauen bei Kunden und Partnern aufbaut.'
        },
        whyUs: {
          title: 'Warum ADVISORI?',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in ISO 27001 Implementierung und Zertifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung mit komplexen Organisationsstrukturen und Branchen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz zur Integration mit bestehenden Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Bewährte Methoden für nachhaltige Sicherheitskultur-Entwicklung'
            }
          ]
        },
        additionalInfo: 'Die ISO 27001 Zertifizierung demonstriert nicht nur Ihr Engagement für Informationssicherheit, sondern schafft auch strategische Wettbewerbsvorteile durch erhöhtes Kundenvertrauen und verbesserte Risikosteuerung.',
        serviceDescription: 'Unser strukturierter Ansatz zur ISO 27001 Implementierung kombiniert bewährte Methoden mit individueller Beratung, um ein ISMS zu entwickeln, das optimal zu Ihrer Organisation passt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Umfassende ISMS Gap-Analyse und Risikoassessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung maßgeschneiderter Sicherheitsrichtlinien und -verfahren'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung von Sicherheitskontrollen und -maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Mitarbeiterschulungen und Awareness-Programme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Vorbereitung und Begleitung der Zertifizierungsaudit'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Implementierungsansatz',
        description: 'Wir verfolgen einen strukturierten, phasenorientierten Ansatz zur ISO 27001 Implementierung, der technische Exzellenz mit organisatorischer Transformation verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Initiale Analyse der aktuellen Informationssicherheitslage und Identifikation kritischer Gaps'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer umfassenden ISMS-Strategie und Implementierungsroadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Schrittweise Umsetzung der erforderlichen Kontrollen und Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Durchführung umfassender Tests und interner Audits zur Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Professionelle Begleitung durch das externe Zertifizierungsaudit'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'ISO 27001 ist mehr als ein Standard - es ist ein strategisches Investment in die Zukunftsfähigkeit Ihres Unternehmens. Ein gut implementiertes ISMS schützt nicht nur vor Risiken, sondern ermöglicht auch neue Geschäftschancen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ISMS Aufbau und Gap-Analyse',
          description: 'Wir führen eine umfassende Analyse Ihrer aktuellen Informationssicherheitslage durch und entwickeln einen strukturierten Plan für die ISO 27001 Implementierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Gap-Analyse gegen ISO 27001 Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Risikobewertung und Asset-Inventarisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung einer maßgeschneiderten Implementierungsstrategie'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Definition von Governance-Strukturen und Rollen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Implementierung und Zertifizierungsbegleitung',
          description: 'Wir unterstützen Sie bei der vollständigen Umsetzung aller ISO 27001 Anforderungen und begleiten Sie professionell durch den Zertifizierungsprozess.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung aller erforderlichen ISMS-Dokumentationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung von Sicherheitskontrollen und -verfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Durchführung interner Audits und Management Reviews'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Begleitung durch externe Zertifizierungsaudits'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001Data)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
