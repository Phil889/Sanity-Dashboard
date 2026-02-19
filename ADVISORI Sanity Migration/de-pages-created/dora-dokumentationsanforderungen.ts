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
    console.log('Creating DORA Dokumentationsanforderungen page...')

    const doraDocumentationData = {
      _type: 'servicePage',
      _id: 'dora-dokumentationsanforderungen',
      title: 'DORA Dokumentationsanforderungen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dora-digital-operational-resilience-act/dora-dokumentationsanforderungen'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management'
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
        title: 'DORA Dokumentationsanforderungen | ADVISORI',
        description: 'Expertenhilfe bei der Erfüllung aller DORA-Dokumentationsanforderungen. Beratung zu Compliance-Dokumentation, Audit-Trails, Dokumentationsgovernance und regulatorischen Berichtspflichten für digitale operationelle Resilienz.',
        keywords: 'DORA Dokumentation, Compliance Dokumentation, Audit Trails, Dokumentationsgovernance, regulatorische Berichtspflichten, IKT-Dokumentation, Finanzaufsicht, DORA Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DORA Dokumentationsanforderungen'
        },
        tagline: 'Vollständige Compliance durch strukturierte Dokumentation',
        heading: 'DORA Dokumentationsanforderungen',
        description: 'Umfassende Dokumentation ist das Fundament erfolgreicher DORA-Compliance. Wir unterstützen Sie beim Aufbau strukturierter Dokumentationssysteme, die alle regulatorischen Anforderungen erfüllen und gleichzeitig operative Effizienz gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige DORA-konforme Dokumentationsframeworks und -standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturierte Audit-Trails und Compliance-Nachweise für Aufsichtsprüfungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierte Dokumentationsprozesse und Management-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Dokumentationspflege und Qualitätssicherung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DORA-Dokumentationsanforderungen verstehen und erfüllen',
        description: 'DORA stellt umfassende Anforderungen an die Dokumentation digitaler operationeller Resilienz, die weit über traditionelle IT-Dokumentation hinausgehen. Effektive DORA-Dokumentation erfordert systematische Ansätze zur Erfassung, Verwaltung und Pflege aller compliance-relevanten Informationen und Nachweise.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung vollständiger IKT-Risikomanagement-Dokumentation und -Nachweise'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Aufbau strukturierter Incident-Dokumentation und Berichtssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung umfassender Drittanbieter-Dokumentation und -Register'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Etablierung kontinuierlicher Dokumentationspflege und -qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Sicherstellung aufsichtsrechtlicher Berichtsfähigkeit und Transparenz'
          }
        ],
        alert: {
          title: 'Dokumentations-Fokus',
          content: 'DORA-Dokumentation ist nicht nur Compliance-Pflicht, sondern strategisches Instrument für effektives Risikomanagement. Strukturierte Dokumentation ermöglicht fundierte Entscheidungsfindung und kontinuierliche Verbesserung der digitalen operationellen Resilienz.'
        },
        whyUs: {
          title: 'Unsere Dokumentations-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Erfahrung in regulatorischer Dokumentation und Compliance-Nachweisen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden zur Strukturierung und Automatisierung von Dokumentationsprozessen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praktische Erfahrung mit Aufsichtsprüfungen und regulatorischen Anfragen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz zur nachhaltigen Dokumentationsgovernance'
            }
          ]
        },
        additionalInfo: 'Effektive DORA-Dokumentation erfordert eine Balance zwischen regulatorischer Vollständigkeit und operativer Praktikabilität. Unsere Beratung fokussiert auf nachhaltige Dokumentationssysteme, die sowohl Compliance-Anforderungen erfüllen als auch den täglichen Betrieb unterstützen.',
        serviceDescription: 'Wir bieten umfassende Unterstützung beim Aufbau und der Optimierung von DORA-konformen Dokumentationssystemen. Unser Ansatz kombiniert regulatorische Expertise mit praktischer Dokumentationsmanagement-Erfahrung für nachhaltige Compliance-Lösungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'DORA-konforme Dokumentationsframeworks und -standards'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Strukturierte Audit-Trails und Compliance-Nachweise'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Automatisierte Dokumentationsprozesse und -systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kontinuierliche Dokumentationspflege und Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Regulatorische Berichtsfähigkeit und Transparenz-Mechanismen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Dokumentations-Transformations-Ansatz',
        description: 'Wir entwickeln mit Ihnen maßgeschneiderte DORA-Dokumentationssysteme, die nahtlos in Ihre bestehenden Prozesse integriert werden und nachhaltige Compliance-Fähigkeiten aufbauen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse bestehender Dokumentationslandschaft und Identifikation von Compliance-Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design strukturierter Dokumentationsframeworks und -standards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung automatisierter Dokumentationsprozesse und -systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Aufbau umfassender Audit-Trails und Compliance-Nachweise'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung kontinuierlicher Dokumentationspflege und -verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Strukturierte Dokumentation ist das Rückgrat erfolgreicher DORA-Compliance und ermöglicht es Organisationen, nicht nur regulatorische Anforderungen zu erfüllen, sondern auch ihre operative Resilienz kontinuierlich zu verbessern. Unsere Erfahrung zeigt, dass Unternehmen mit robusten Dokumentationssystemen deutlich effizienter auf Aufsichtsprüfungen reagieren und fundierte Risikomanagement-Entscheidungen treffen können.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'DORA-konforme Dokumentationsframeworks und Standards',
          description: 'Entwicklung umfassender Dokumentationsframeworks, die alle DORA-Anforderungen abdecken und gleichzeitig operative Effizienz und Benutzerfreundlichkeit gewährleisten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Vollständige Dokumentationsarchitektur für IKT-Risikomanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Standardisierte Templates und Dokumentationsvorlagen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Compliance-Mapping und Anforderungs-Traceability'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Dokumentations-Governance und Qualitätsstandards'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Strukturierte Audit-Trails und Compliance-Nachweise',
          description: 'Aufbau umfassender Audit-Trail-Systeme und Compliance-Nachweise, die lückenlose Dokumentation aller DORA-relevanten Aktivitäten und Entscheidungen gewährleisten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automatisierte Audit-Trail-Generierung und -Verwaltung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Compliance-Evidence-Management und -Archivierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Regulatorische Berichtsvorbereitung und -unterstützung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Aufsichtsprüfungs-Readiness und Dokumentations-Pakete'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'IKT-Risikomanagement-Dokumentation und -Register',
          description: 'Entwicklung vollständiger Dokumentationssysteme für IKT-Risikomanagement, einschließlich Risiko-Register, Assessment-Dokumentation und Mitigation-Nachweise.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Umfassende IKT-Risiko-Register und -Kataloge'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Risk-Assessment-Dokumentation und -Methodiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Mitigation-Maßnahmen-Dokumentation und -Tracking'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Kontinuierliche Risiko-Monitoring-Dokumentation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Incident-Dokumentation und Berichtssysteme',
          description: 'Implementierung strukturierter Incident-Dokumentationssysteme, die alle DORA-Anforderungen für Incident-Reporting und -Management erfüllen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Standardisierte Incident-Dokumentations-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Automatisierte Incident-Reporting und -Eskalation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Root-Cause-Analysis-Dokumentation und Lessons-Learned'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Regulatorische Incident-Meldungen und -Berichte'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Drittanbieter-Dokumentation und Vendor-Management-Register',
          description: 'Aufbau umfassender Dokumentationssysteme für kritische IKT-Drittanbieter, einschließlich Due-Diligence-Dokumentation und kontinuierlicher Monitoring-Nachweise.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Vollständige Vendor-Register und -Profile'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Due-Diligence-Dokumentation und -Nachweise'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Vertragsdokumentation und SLA-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kontinuierliche Vendor-Assessment-Dokumentation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Automatisierte Dokumentationsprozesse und Management-Systeme',
          description: 'Implementierung moderner Dokumentationsmanagement-Systeme mit Automatisierungsfunktionen für effiziente und konsistente DORA-Dokumentation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Document-Management-System-Integration und -Konfiguration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Workflow-Automatisierung für Dokumentationsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Versionskontrolle und Change-Management-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Dokumentations-Qualitätssicherung und -Monitoring'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(doraDocumentationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DORA Dokumentationsanforderungen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
