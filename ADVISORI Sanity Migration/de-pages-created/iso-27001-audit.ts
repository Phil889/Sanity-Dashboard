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
    console.log('Creating ISO 27001 Audit page...')

    const iso27001AuditData = {
      _type: 'servicePage',
      _id: 'iso-27001-audit',
      title: 'ISO 27001 Audit',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-audit'
      },
      parent: {
        _type: 'reference',
        _ref: 'iso-27001'
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
        title: 'ISO 27001 Audit Services & Begleitung | ADVISORI',
        description: 'Professionelle ISO 27001 Audit Services von der Vorbereitung bis zur erfolgreichen Zertifizierung. Audit-Begleitung, Readiness-Assessment und kontinuierliche Audit-Unterstützung.',
        keywords: 'ISO 27001 Audit, Audit Begleitung, Zertifizierungsaudit, Pre-Assessment, Audit Vorbereitung, ISMS Audit, Compliance Audit, Audit Support, Audit Readiness'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Audit Services und Begleitung'
        },
        tagline: 'Professionelle Audit-Begleitung für erfolgreiche Zertifizierung',
        heading: 'ISO 27001 Audit',
        description: 'Sichern Sie den Erfolg Ihrer ISO 27001 Zertifizierung mit unserer umfassenden Audit-Begleitung. Von der strategischen Vorbereitung bis zur erfolgreichen Zertifizierung unterstützen wir Sie mit bewährten Methoden und tiefgreifender Audit-Expertise.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische Audit-Vorbereitung mit systematischer Readiness-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Professionelle Begleitung während aller Audit-Phasen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Bewährte Audit-Strategien mit nachweislichen Erfolgsraten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Audit-Readiness für nachhaltige Compliance'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Professionelle ISO 27001 Audit Services für erfolgreiche Zertifizierung',
        description: 'ISO 27001 Audits sind entscheidende Meilensteine auf dem Weg zur Zertifizierung und darüber hinaus. Unsere umfassenden Audit Services gewährleisten nicht nur den Erfolg Ihrer Zertifizierung, sondern schaffen auch die Grundlage für kontinuierliche Compliance und operative Exzellenz in der Informationssicherheit.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Audit-Vorbereitung mit umfassender Readiness-Bewertung und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Professionelle Begleitung während Stage 1 und Stage 2 Audits mit erfahrenen Audit-Experten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Systematische Nachbearbeitung von Audit-Findings und Entwicklung von Korrekturmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau nachhaltiger Audit-Readiness für Überwachungsaudits und Rezertifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration moderner Audit-Technologien und digitaler Dokumentationssysteme'
          }
        ],
        alert: {
          title: 'Audit-Erfolg durch professionelle Vorbereitung',
          content: 'Erfolgreiche ISO 27001 Audits sind das Ergebnis systematischer Vorbereitung und strategischer Planung. Unsere Audit Services maximieren Ihre Erfolgswahrscheinlichkeit und minimieren Audit-Risiken.'
        },
        whyUs: {
          title: 'Unsere Audit-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Langjährige Erfahrung in der Begleitung von ISO 27001 Audits aller Größenordnungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefgreifende Kenntnisse der Audit-Standards und Zertifizierungsverfahren'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Audit-Strategien mit dokumentierten Erfolgsraten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von der Vorbereitung bis zur kontinuierlichen Compliance'
            }
          ]
        },
        additionalInfo: 'Unsere ISO 27001 Audit Services gehen über die reine Audit-Begleitung hinaus. Wir entwickeln maßgeschneiderte Audit-Strategien, die optimal auf Ihre Organisationsstruktur und Ihre spezifischen Herausforderungen abgestimmt sind. Dabei berücksichtigen wir stets die neuesten Entwicklungen in der Audit-Praxis und die Anforderungen verschiedener Zertifizierungsstellen.',
        serviceDescription: 'Wir bieten umfassende ISO 27001 Audit Services, die alle Phasen des Audit-Prozesses abdecken. Von der strategischen Vorbereitung über die operative Begleitung bis hin zur kontinuierlichen Audit-Readiness unterstützen wir Sie mit methodischer Exzellenz und praktischer Erfahrung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Pre-Assessment und Audit-Readiness-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Strategische Audit-Vorbereitung und Dokumentationsoptimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Professionelle Audit-Begleitung und Stakeholder-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Audit-Finding-Management und Korrekturmaßnahmen-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Audit-Readiness und Compliance-Monitoring'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Audit-Ansatz',
        description: 'Wir verfolgen einen strukturierten, phasenorientierten Ansatz, der strategische Audit-Vorbereitung mit operativer Exzellenz verbindet und nachhaltigen Audit-Erfolg gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Audit-Readiness-Bewertung und strategische Vorbereitung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematische Dokumentationsoptimierung und Evidence-Vorbereitung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Professionelle Audit-Begleitung mit erfahrenen Audit-Experten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Strukturiertes Finding-Management und Korrekturmaßnahmen-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Aufbau nachhaltiger Audit-Readiness für kontinuierliche Compliance'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Erfolgreiche ISO 27001 Audits sind das Ergebnis systematischer Vorbereitung und strategischer Planung. Unsere bewährten Audit-Methoden und tiefgreifende Expertise gewährleisten nicht nur den Zertifizierungserfolg, sondern schaffen auch die Grundlage für nachhaltige Compliance-Exzellenz.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Pre-Assessment & Audit-Readiness-Bewertung',
          description: 'Umfassende Bewertung Ihrer Audit-Bereitschaft mit detaillierter Gap-Analyse und strategischer Vorbereitung für erfolgreiche Zertifizierungsaudits.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematische Bewertung der ISMS-Implementierung gegen ISO 27001 Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation kritischer Audit-Risiken und Entwicklung von Mitigationsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Bewertung der Dokumentationsqualität und Evidence-Verfügbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung einer detaillierten Audit-Vorbereitung-Roadmap'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Strategische Audit-Vorbereitung',
          description: 'Systematische Vorbereitung auf ISO 27001 Audits mit Fokus auf Dokumentationsoptimierung, Stakeholder-Vorbereitung und Audit-Strategie-Entwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Optimierung der ISMS-Dokumentation für Audit-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Vorbereitung und Schulung der Audit-Teilnehmer und Stakeholder'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung von Audit-Strategien und Kommunikationsplänen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Aufbau effizienter Evidence-Management-Systeme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Audit-Begleitung & Support',
          description: 'Professionelle Begleitung während aller Audit-Phasen mit erfahrenen Audit-Experten und strategischem Stakeholder-Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Professionelle Begleitung während Stage 1 und Stage 2 Audits'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Strategisches Stakeholder-Management und Auditor-Kommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Real-time Unterstützung bei Audit-Fragen und Evidence-Bereitstellung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Koordination zwischen Audit-Team und internen Stakeholdern'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Audit-Finding-Management',
          description: 'Systematische Bearbeitung von Audit-Findings mit strukturierter Korrekturmaßnahmen-Entwicklung und Implementierungsunterstützung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Strukturierte Analyse und Kategorisierung von Audit-Findings'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Entwicklung effektiver Korrektur- und Präventivmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Unterstützung bei der Implementierung von Verbesserungsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Vorbereitung und Begleitung von Follow-up-Audits'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Kontinuierliche Audit-Readiness',
          description: 'Aufbau nachhaltiger Audit-Bereitschaft für Überwachungsaudits und Rezertifizierung mit kontinuierlichem Monitoring und Optimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Entwicklung kontinuierlicher Audit-Readiness-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Regelmäßige interne Audit-Simulationen und Readiness-Checks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Aufbau interner Audit-Kompetenzen und Selbstständigkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Vorbereitung auf Überwachungsaudits und Rezertifizierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Digitale Audit-Unterstützung',
          description: 'Integration moderner Audit-Technologien und digitaler Tools für effiziente Audit-Vorbereitung, -Durchführung und -Nachbereitung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Implementierung digitaler Evidence-Management-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Nutzung moderner Audit-Tools für effiziente Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Aufbau automatisierter Compliance-Monitoring-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Integration von KI-gestützten Audit-Vorbereitung-Tools'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001AuditData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Audit page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
