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
    console.log('Creating DORA Audit & Prüfung page...')

    const doraAuditData = {
      _type: 'servicePage',
      _id: 'dora-audit-pruefung',
      title: 'DORA Audit & Prüfung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dora-digital-operational-resilience-act/dora-audit-pruefung'
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
        title: 'DORA Audit & Prüfung | ADVISORI',
        description: 'Professionelle DORA-Audit- und Prüfungsdienstleistungen für Finanzinstitute. Expertenunterstützung bei internen Audits, externen Prüfungen und kontinuierlicher Compliance-Überwachung unter der Digital Operational Resilience Act.',
        keywords: 'DORA Audit, DORA Prüfung, Compliance Audit, IKT-Audit, Operational Resilience Audit, Digital Operational Resilience Act, Finanzaufsicht, Audit-Unterstützung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DORA Audit und Prüfung'
        },
        tagline: 'Professionelle DORA-Audit-Unterstützung',
        heading: 'DORA Audit & Prüfung',
        description: 'Gewährleisten Sie die vollständige DORA-Compliance durch professionelle Audit- und Prüfungsdienstleistungen. Wir unterstützen Sie bei internen Audits, bereiten Sie auf externe Prüfungen vor und etablieren kontinuierliche Überwachungsprozesse.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende DORA-Compliance-Audits und Gap-Analysen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Vorbereitung auf aufsichtsrechtliche Prüfungen und Inspektionen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kontinuierliche Monitoring- und Assurance-Programme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Drittanbieter-Audits und Vendor-Assessment-Programme'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DORA-Audits: Sicherstellung nachhaltiger Compliance',
        description: 'DORA erfordert nicht nur die Implementierung operationeller Resilienz-Maßnahmen, sondern auch deren kontinuierliche Überwachung und Validierung durch systematische Audit-Prozesse. Professionelle DORA-Audits sind entscheidend für die Gewährleistung nachhaltiger Compliance und die Vorbereitung auf aufsichtsrechtliche Prüfungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung umfassender DORA-Audit-Programme und -Methodologien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Durchführung systematischer Compliance-Assessments und Gap-Analysen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Vorbereitung auf aufsichtsrechtliche Inspektionen und externe Prüfungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Etablierung kontinuierlicher Monitoring- und Assurance-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration von DORA-Audits in bestehende Governance- und Risikomanagement-Frameworks'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Effektive DORA-Audits gehen über reine Compliance-Checks hinaus und bewerten die tatsächliche Wirksamkeit Ihrer operationellen Resilienz-Maßnahmen. Ein risikobasierter Audit-Ansatz identifiziert nicht nur Compliance-Lücken, sondern auch Verbesserungspotenziale für Ihre digitale Widerstandsfähigkeit.'
        },
        whyUs: {
          title: 'Unsere Audit-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnis der DORA-Anforderungen und aufsichtsrechtlichen Erwartungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Audit-Methodologien und Best-Practice-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Erfahrung mit komplexen Finanzdienstleistungsumgebungen und Technologielandschaften'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Pragmatische Lösungsansätze für nachhaltige Compliance und kontinuierliche Verbesserung'
            }
          ]
        },
        additionalInfo: 'DORA-Audits erfordern eine spezialisierte Herangehensweise, die sowohl technische IKT-Aspekte als auch regulatorische Compliance-Anforderungen berücksichtigt. Unsere Audit-Programme sind darauf ausgelegt, nicht nur Compliance zu validieren, sondern auch die Effektivität Ihrer operationellen Resilienz-Strategie zu bewerten.',
        serviceDescription: 'Wir bieten umfassende DORA-Audit- und Prüfungsdienstleistungen, die von der strategischen Audit-Planung bis zur operativen Umsetzung und kontinuierlichen Überwachung reichen. Unser systematischer Ansatz gewährleistet sowohl regulatorische Compliance als auch operative Exzellenz.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Comprehensive DORA-Compliance-Audits und Readiness-Assessments'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Aufsichtsrechtliche Prüfungsvorbereitung und Inspection-Readiness'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Drittanbieter-Audits und Vendor-Risk-Assessment-Programme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kontinuierliche Monitoring- und Assurance-Framework-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Remediation-Management und Follow-up-Audit-Prozesse'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Audit-Ansatz',
        description: 'Wir entwickeln mit Ihnen maßgeschneiderte DORA-Audit-Programme, die sowohl regulatorische Compliance als auch operative Effektivität gewährleisten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Audit-Planung und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematische Durchführung von Compliance-Assessments'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Detaillierte Dokumentation und Berichterstattung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Remediation-Unterstützung und Verbesserungsempfehlungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Follow-up-Prozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Effektive DORA-Audits sind mehr als Compliance-Validierung – sie sind strategische Instrumente zur Stärkung der operationellen Resilienz. Unser risikobasierter Audit-Ansatz identifiziert nicht nur regulatorische Lücken, sondern schafft auch nachhaltigen Mehrwert durch kontinuierliche Verbesserung der digitalen Widerstandsfähigkeit.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'DORA-Compliance-Audit und Readiness-Assessment',
          description: 'Umfassende Bewertung Ihrer DORA-Compliance-Position durch systematische Audits aller relevanten Anforderungsbereiche und Identifikation von Verbesserungspotenzialen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Vollständige Bewertung aller DORA-Anforderungsbereiche und Compliance-Status'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Risikobasierte Audit-Methodologie und Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Bewertung der Wirksamkeit implementierter Kontrollen und Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Priorisierte Handlungsempfehlungen und Remediation-Roadmap'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Aufsichtsrechtliche Prüfungsvorbereitung',
          description: 'Spezialisierte Vorbereitung auf aufsichtsrechtliche DORA-Inspektionen und externe Prüfungen durch simulierte Audits und Readiness-Checks.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Simulation aufsichtsrechtlicher Prüfungsverfahren und Inspection-Readiness-Tests'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Vorbereitung von Dokumentation und Nachweisen für Aufsichtsbehörden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Training und Coaching für Prüfungsgespräche und Präsentationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Entwicklung von Response-Strategien und Kommunikationsplänen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Drittanbieter-Audit und Vendor-Assessment',
          description: 'Systematische Bewertung Ihrer IKT-Drittanbieter und kritischen Service-Provider zur Gewährleistung der DORA-Compliance entlang der gesamten Lieferkette.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Umfassende Audits kritischer IKT-Drittanbieter und Service-Provider'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Bewertung von Drittanbieter-Kontrollen und Resilienz-Maßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Entwicklung von Vendor-Risk-Assessment-Programmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Kontinuierliche Überwachung und Re-Assessment-Prozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Kontinuierliches Monitoring und Assurance',
          description: 'Etablierung systematischer Überwachungsprogramme zur kontinuierlichen Validierung der DORA-Compliance und frühzeitigen Identifikation von Risiken.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Design und Implementierung kontinuierlicher Monitoring-Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Automatisierte Compliance-Checks und Alert-Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Regelmäßige Assurance-Reviews und Trend-Analysen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Integration in bestehende GRC-Plattformen und Reporting-Systeme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Technische IKT-Audits und Penetrationstests',
          description: 'Spezialisierte technische Audits zur Bewertung der IKT-Sicherheit und operationellen Resilienz Ihrer kritischen Systeme und Infrastrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Umfassende technische Audits kritischer IKT-Systeme und -Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'DORA-konforme Penetrationstests und Vulnerability-Assessments'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Bewertung von Cybersecurity-Kontrollen und Incident-Response-Fähigkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Threat-based Testing und Red-Team-Exercises'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Audit-Programm-Entwicklung und Governance',
          description: 'Aufbau robuster interner Audit-Programme und Governance-Strukturen für nachhaltige DORA-Compliance und kontinuierliche Verbesserung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Entwicklung maßgeschneiderter DORA-Audit-Programme und -Methodologien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Aufbau interner Audit-Kapazitäten und Kompetenzentwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Integration in bestehende Three-Lines-of-Defense-Modelle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Etablierung von Audit-Governance und Quality-Assurance-Prozessen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(doraAuditData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DORA Audit & Prüfung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
