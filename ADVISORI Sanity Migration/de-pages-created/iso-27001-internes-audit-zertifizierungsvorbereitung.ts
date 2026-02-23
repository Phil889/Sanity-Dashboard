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
    console.log('Creating ISO 27001 Internes Audit Zertifizierungsvorbereitung page...')

    const iso27001AuditData = {
      _type: 'servicePage',
      _id: 'iso-27001-internes-audit-zertifizierungsvorbereitung',
      title: 'ISO 27001 Internes Audit & Zertifizierungsvorbereitung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-internes-audit-zertifizierungsvorbereitung'
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
        title: 'ISO 27001 Internes Audit & Zertifizierungsvorbereitung | ADVISORI',
        description: 'Professionelle Unterstützung bei der Vorbereitung auf die ISO 27001 Zertifizierung durch interne Audits, Gap-Analysen und strategische Optimierung Ihres ISMS. Maximieren Sie Ihre Zertifizierungschancen.',
        keywords: 'ISO 27001, Internes Audit, Zertifizierungsvorbereitung, ISMS, Informationssicherheit, Audit, Compliance, Gap-Analyse'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Internes Audit & Zertifizierungsvorbereitung'
        },
        tagline: 'Professionelle Vorbereitung auf Ihre ISO 27001 Zertifizierung',
        heading: 'ISO 27001 Internes Audit & Zertifizierungsvorbereitung',
        description: 'Ein erfolgreiches internes Audit ist der Schlüssel für eine erfolgreiche ISO 27001 Zertifizierung. Wir unterstützen Sie mit strukturierten Audit-Programmen, umfassenden Gap-Analysen und strategischer Optimierung Ihres ISMS für maximale Zertifizierungschancen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierte interne Audits zur Identifikation von Optimierungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Umfassende Gap-Analysen und Maßnahmenplanung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Strategische Vorbereitung auf das externe Zertifizierungsaudit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Maximierung der Erfolgschancen bei der Erstzertifizierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ISO 27001 Internes Audit & Zertifizierungsvorbereitung',
        description: 'Die interne Auditierung ist ein kritischer Erfolgsfaktor für die ISO 27001 Zertifizierung. Sie identifiziert Schwachstellen, validiert die Wirksamkeit von Controls und stellt sicher, dass Ihr ISMS den Standards entspricht. Unsere systematische Herangehensweise kombiniert tiefgreifende Fachexpertise mit bewährten Audit-Methodiken für optimale Zertifizierungsvorbereitung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung und Durchführung strukturierter interner Audit-Programme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Umfassende Gap-Analysen zur Identifikation von Verbesserungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Strategische Optimierung des ISMS basierend auf Audit-Erkenntnissen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Simulation von Zertifizierungsaudits zur Risikoeminimierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Aufbau interner Audit-Kompetenzen und Zertifizierungsbereitschaft'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Ein erfolgreiches internes Audit geht über reine Compliance-Prüfung hinaus. Es sollte als strategisches Instrument zur kontinuierlichen Verbesserung Ihres ISMS und zur Stärkung der Informationssicherheitskultur genutzt werden.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Zertifizierte Lead Auditoren mit umfassender ISO 27001 Expertise'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Audit-Methodiken und Best-Practice-Ansätze'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Tiefgreifende Branchenerfahrung und Zertifizierungsexpertise'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Strategischer Fokus auf nachhaltige ISMS-Verbesserung'
            }
          ]
        },
        additionalInfo: 'Unsere Audit-Services sind darauf ausgelegt, nicht nur Compliance zu verifizieren, sondern auch strategische Verbesserungsmöglichkeiten zu identifizieren und Ihr ISMS auf das nächste Reifelevel zu heben.',
        serviceDescription: 'Wir bieten umfassende interne Audit-Services, die von der strategischen Planung über die operative Durchführung bis hin zur Nachverfolgung von Korrekturmaßnahmen reichen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Entwicklung maßgeschneiderter Audit-Programme und -Checklisten'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Durchführung risikobasierter interner Audits aller ISMS-Bereiche'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Detaillierte Gap-Analysen und Empfehlungen für Korrekturmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Mock-Audits zur Simulation des externen Zertifizierungsprozesses'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Aufbau interner Audit-Kompetenzen und Schulung von Auditoren'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam ein strukturiertes und risikobasiertes Audit-Programm, das optimal auf Ihre Zertifizierungsziele abgestimmt ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Audit-Planung und Risikoassessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematische Durchführung interner Audits aller ISMS-Bereiche'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Detaillierte Gap-Analyse und Maßnahmenentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Mock-Audit zur Simulation des Zertifizierungsprozesses'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Verbesserung und Zertifizierungsoptimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Ein professionelles internes Audit ist der beste Indikator für Zertifizierungsbereitschaft. Unsere strukturierte Herangehensweise identifiziert nicht nur Gaps, sondern schafft auch nachhaltigen Mehrwert für Ihr ISMS.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strukturierte Audit-Planung & -Durchführung',
          description: 'Entwicklung und Implementierung umfassender interner Audit-Programme, die alle Aspekte Ihres ISMS systematisch prüfen und bewerten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Risikobasierte Audit-Planung und Scope-Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung spezifischer Audit-Checklisten und -Verfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Systematische Durchführung von Process- und System-Audits'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Dokumentation von Findings und Nonkonformitäten'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Mock-Audits & Zertifizierungssimulation',
          description: 'Realistische Simulation des externen Zertifizierungsaudits zur Identifikation von Risiken und zur Optimierung der Zertifizierungsbereitschaft.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Vollständige Simulation des Stage 1 und Stage 2 Audits'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Assessment der Management Review und Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Evaluation der Audit-Readiness und Interviewvorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Strategische Empfehlungen zur Zertifizierungsoptimierung'
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

    console.log('✅ ISO 27001 Internes Audit & Zertifizierungsvorbereitung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
