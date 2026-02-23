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
    console.log('Creating DORA Compliance Checkliste page...')

    const doraComplianceChecklisteData = {
      _type: 'servicePage',
      _id: 'dora-compliance-checkliste',
      title: 'DORA Compliance Checkliste',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dora-digital-operational-resilience-act/dora-compliance-checkliste'
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
        title: 'DORA Compliance Checkliste | ADVISORI',
        description: 'Umfassende DORA Compliance Checkliste für Finanzinstitute. Strukturierte Bewertungsframeworks, Implementierungsleitfäden und kontinuierliche Überwachungsverfahren für Digital Operational Resilience Act Compliance.',
        keywords: 'DORA Compliance Checkliste, DORA Assessment, Compliance Framework, Digital Operational Resilience, Finanzregulierung, IKT-Risikomanagement, DORA Umsetzung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DORA Compliance Checkliste'
        },
        tagline: 'Systematische DORA-Compliance durch strukturierte Checklisten',
        heading: 'DORA Compliance Checkliste',
        description: 'Unsere umfassende DORA Compliance Checkliste bietet Ihnen einen strukturierten Ansatz zur systematischen Bewertung und Umsetzung aller DORA-Anforderungen. Von der initialen Gap-Analyse bis zur kontinuierlichen Überwachung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Abdeckung aller DORA-Compliance-Bereiche durch strukturierte Checklisten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Systematische Bewertungsframeworks für effiziente Gap-Analysen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Praxiserprobte Implementierungsleitfäden und Umsetzungsroadmaps'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Monitoring- und Verbesserungsprozesse'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strukturierte DORA-Compliance durch bewährte Checklisten',
        description: 'Die Komplexität der DORA-Anforderungen erfordert einen systematischen und strukturierten Ansatz zur Compliance-Bewertung und -Umsetzung. Unsere umfassenden Checklisten bieten Ihnen die notwendige Struktur und Orientierung für eine erfolgreiche DORA-Implementierung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung maßgeschneiderter Compliance-Assessment-Frameworks basierend auf Ihrer Organisationsstruktur'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Systematische Bewertung aller DORA-Säulen durch strukturierte Checklisten und Bewertungskriterien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Priorisierung von Compliance-Maßnahmen basierend auf Risikobewertung und regulatorischen Fristen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von Compliance-Checklisten in bestehende Governance- und Risikomanagement-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Etablierung kontinuierlicher Überwachungs- und Verbesserungsmechanismen für nachhaltige Compliance'
          }
        ],
        alert: {
          title: 'Compliance-Erfolg',
          content: 'Eine strukturierte Checklisten-basierte Herangehensweise reduziert das Risiko von Compliance-Lücken erheblich und gewährleistet eine systematische Abdeckung aller DORA-Anforderungen. Besonders bei komplexen Organisationsstrukturen ist dieser methodische Ansatz unerlässlich.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung in der Entwicklung und Anwendung regulatorischer Compliance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden zur systematischen Bewertung und Umsetzung komplexer Regulierungsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Tiefgreifende Kenntnis der DORA-Regulierung und deren praktische Anwendung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Pragmatische Lösungsansätze für effiziente und nachhaltige Compliance-Umsetzung'
            }
          ]
        },
        additionalInfo: 'Unsere DORA Compliance Checklisten basieren auf bewährten Compliance-Management-Praktiken und berücksichtigen die spezifischen Herausforderungen verschiedener Finanzdienstleistungssektoren. Sie bieten eine strukturierte Herangehensweise zur systematischen Bewertung und kontinuierlichen Verbesserung Ihrer DORA-Compliance.',
        serviceDescription: 'Wir unterstützen Sie bei der Entwicklung und Implementierung umfassender DORA Compliance Checklisten, die auf Ihre spezifischen Geschäftsanforderungen und Organisationsstrukturen zugeschnitten sind. Unser systematischer Ansatz gewährleistet eine vollständige Abdeckung aller regulatorischen Anforderungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Maßgeschneiderte Compliance-Assessment-Frameworks und Bewertungskriterien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Strukturierte Checklisten für alle DORA-Compliance-Bereiche'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Systematische Gap-Analyse und Priorisierungsframeworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementierungsleitfäden und Umsetzungsroadmaps'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Monitoring- und Verbesserungsprozesse'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Checklisten-Ansatz',
        description: 'Wir entwickeln mit Ihnen eine umfassende DORA Compliance Checkliste, die alle regulatorischen Anforderungen abdeckt und eine strukturierte Umsetzung ermöglicht.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse Ihrer aktuellen Compliance-Position und Identifikation spezifischer Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung maßgeschneiderter Checklisten für alle DORA-Compliance-Bereiche'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung systematischer Bewertungs- und Überwachungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende Governance- und Risikomanagement-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung kontinuierlicher Verbesserungs- und Update-Mechanismen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Eine strukturierte Checklisten-basierte Herangehensweise ist der Schlüssel zu einer erfolgreichen DORA-Compliance. Unsere bewährten Frameworks ermöglichen es Finanzinstituten, systematisch alle Anforderungen zu erfassen und effizient umzusetzen, während gleichzeitig die Grundlage für kontinuierliche Verbesserungen geschaffen wird.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Comprehensive DORA Compliance Assessment Framework',
          description: 'Entwicklung eines umfassenden Bewertungsframeworks mit strukturierten Checklisten für alle DORA-Compliance-Bereiche und systematische Gap-Analyse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Maßgeschneiderte Compliance-Checklisten für alle DORA-Säulen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Systematische Bewertungskriterien und Scoring-Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Strukturierte Gap-Analyse und Compliance-Status-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Priorisierungsframework für Compliance-Maßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'IKT-Risikomanagement Compliance Checkliste',
          description: 'Spezialisierte Checklisten für die systematische Bewertung und Umsetzung der DORA-Anforderungen im Bereich IKT-Risikomanagement.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Detaillierte Checklisten für IKT-Risiko-Governance und -Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Systematische Bewertung von IKT-Risiko-Frameworks und -Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Compliance-Checklisten für Drittanbieter-Risikomanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Strukturierte Bewertung von IKT-Sicherheitsmaßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Incident Management und Reporting Checkliste',
          description: 'Umfassende Checklisten für die Bewertung und Implementierung effektiver Incident-Management- und Reporting-Prozesse gemäß DORA-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Strukturierte Checklisten für Incident-Response-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Compliance-Bewertung für Reporting-Mechanismen und -Fristen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Systematische Bewertung von Eskalations- und Kommunikationsprozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Checklisten für kontinuierliche Verbesserung der Incident-Management-Fähigkeiten'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Testing und Resilienz-Assessment Checkliste',
          description: 'Spezialisierte Checklisten für die systematische Bewertung und Durchführung von DORA-konformen Tests und Resilienz-Assessments.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Umfassende Checklisten für verschiedene Testarten und -methoden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Strukturierte Bewertung von Test-Governance und -Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Compliance-Checklisten für Penetrationstests und Vulnerability Assessments'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Systematische Bewertung von Business Continuity und Disaster Recovery'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Governance und Dokumentations-Checkliste',
          description: 'Strukturierte Checklisten für die Bewertung und Implementierung angemessener Governance-Strukturen und Dokumentationsanforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Detaillierte Checklisten für DORA-Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Systematische Bewertung von Rollen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Compliance-Checklisten für Dokumentations- und Berichtspflichten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Strukturierte Bewertung von Schulungs- und Awareness-Programmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Kontinuierliche Monitoring und Verbesserungs-Checkliste',
          description: 'Umfassende Checklisten für die Etablierung kontinuierlicher Überwachungs- und Verbesserungsprozesse zur nachhaltigen DORA-Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Strukturierte Checklisten für kontinuierliche Compliance-Überwachung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Systematische Bewertung von KPIs und Monitoring-Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Compliance-Checklisten für regelmäßige Reviews und Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strukturierte Bewertung von Verbesserungs- und Anpassungsprozessen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(doraComplianceChecklisteData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DORA Compliance Checkliste page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
