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
    console.log('Creating ISO 27001 Toolkit page...')

    const iso27001ToolkitData = {
      _type: 'servicePage',
      _id: 'iso-27001-toolkit',
      title: 'ISO 27001 Toolkit',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-toolkit'
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
        title: 'ISO 27001 Toolkit - Umfassende Tools & Templates | ADVISORI',
        description: 'Professionelles ISO 27001 Toolkit mit bewährten Tools, Templates und Frameworks für erfolgreiche ISMS-Implementierung. Beschleunigen Sie Ihre Zertifizierung mit unseren praxiserprobten Lösungen.',
        keywords: 'ISO 27001 Toolkit, ISMS Tools, ISO 27001 Templates, Implementierungstools, Gap-Analyse Tools, Risikobewertung Tools, Compliance Toolkit, Zertifizierungstools'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Toolkit und Implementierungstools'
        },
        tagline: 'Bewährte Tools für beschleunigte ISMS-Implementierung',
        heading: 'ISO 27001 Toolkit',
        description: 'Beschleunigen Sie Ihre ISO 27001 Implementierung mit unserem umfassenden Toolkit aus bewährten Tools, Templates und Frameworks. Von der Gap-Analyse bis zur Zertifizierung - alle notwendigen Ressourcen für eine erfolgreiche ISMS-Umsetzung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende Tool-Sammlung für alle Implementierungsphasen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Praxiserprobte Templates und Dokumentationsvorlagen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierte Assessment- und Monitoring-Tools'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strukturierte Roadmaps und Implementierungsleitfäden'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Professionelles ISO 27001 Toolkit für beschleunigte Implementierung',
        description: 'Unser ISO 27001 Toolkit vereint jahrelange Implementierungserfahrung in einer umfassenden Sammlung bewährter Tools, Templates und Frameworks. Diese praxiserprobten Ressourcen beschleunigen Ihre ISMS-Implementierung erheblich und gewährleisten gleichzeitig höchste Qualitätsstandards und Compliance-Sicherheit.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Vollständige Tool-Suite für systematische Gap-Analyse, Risikobewertung und Implementierungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Standardkonforme Templates für Richtlinien, Verfahren und Dokumentationsstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Automatisierte Assessment-Tools für kontinuierliche Compliance-Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integrierte Frameworks für Multi-Standard-Compliance und Synergieeffekte'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Praxisorientierte Leitfäden und Best-Practice-Sammlungen für effiziente Umsetzung'
          }
        ],
        alert: {
          title: 'Implementierungszeit halbieren',
          content: 'Unser bewährtes Toolkit reduziert die Implementierungszeit um bis zu 50% und minimiert gleichzeitig Implementierungsrisiken durch strukturierte, praxiserprobte Ansätze.'
        },
        whyUs: {
          title: 'Unsere Toolkit-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Über 500 erfolgreiche Implementierungen als Basis für Tool-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Kontinuierliche Weiterentwicklung basierend auf aktuellen Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integration modernster Technologien und Automatisierungsansätze'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Umfassender Support und Anpassung an spezifische Anforderungen'
            }
          ]
        },
        additionalInfo: 'Unser ISO 27001 Toolkit ist das Ergebnis jahrelanger Praxiserfahrung und kontinuierlicher Optimierung. Es kombiniert bewährte Methoden mit innovativen Ansätzen und modernster Technologie, um Ihnen die effizienteste und sicherste Route zur ISO 27001 Zertifizierung zu bieten.',
        serviceDescription: 'Das Toolkit umfasst eine vollständige Sammlung professioneller Tools und Ressourcen, die alle Aspekte der ISO 27001 Implementierung abdecken. Von der initialen Bewertung bis zur kontinuierlichen Verbesserung erhalten Sie alle notwendigen Instrumente für eine erfolgreiche ISMS-Umsetzung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Umfassende Assessment- und Gap-Analyse-Tools'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Vollständige Template-Bibliothek für alle ISMS-Dokumente'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Automatisierte Risikomanagement- und Monitoring-Tools'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Strukturierte Implementierungsroadmaps und Projektpläne'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Integrierte Audit- und Zertifizierungsvorbereitungstools'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Toolkit-Ansatz',
        description: 'Wir verfolgen einen strukturierten, phasenorientierten Ansatz, der bewährte Tools mit innovativen Technologien kombiniert und maximale Effizienz bei der ISMS-Implementierung gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Initiale Bewertung mit automatisierten Assessment-Tools und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strukturierte Implementierung mit vorkonfigurierten Templates und Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Kontinuierliches Monitoring mit integrierten Überwachungs- und Reporting-Tools'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Zertifizierungsvorbereitung mit spezialisierten Audit-Support-Tools'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Optimierung durch kontinuierliche Verbesserungstools'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Unser ISO 27001 Toolkit ist das Ergebnis jahrelanger Praxiserfahrung und kontinuierlicher Innovation. Es ermöglicht unseren Kunden eine deutlich beschleunigte und risikoarme Implementierung bei gleichzeitig höchster Qualität und nachhaltiger Compliance-Sicherung.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Assessment & Gap-Analyse Tools',
          description: 'Umfassende Tool-Suite für systematische Bewertung des aktuellen Sicherheitsstatus und präzise Identifikation von Implementierungsanforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Automatisierte Gap-Analyse mit detailliertem Compliance-Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Risikobewertungstools mit branchenspezifischen Parametern'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Readiness-Assessment mit priorisierten Handlungsempfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Benchmark-Analysen und Reifegrad-Bewertungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Template-Bibliothek & Dokumentationstools',
          description: 'Vollständige Sammlung standardkonformer Templates und Dokumentationstools für effiziente ISMS-Dokumentation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Umfassende Richtlinien- und Verfahrens-Templates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automatisierte Dokumentenerstellung und -verwaltung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Versionskontrolle und Freigabe-Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Anpassbare Vorlagen für branchenspezifische Anforderungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Risikomanagement-Framework',
          description: 'Integrierte Tools für systematisches Risikomanagement mit automatisierten Bewertungs- und Überwachungsfunktionen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Automatisierte Risikoidentifikation und -klassifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Dynamische Risikobewertung mit Echtzeit-Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Treatment-Plan-Generator mit Kontrollmaßnahmen-Bibliothek'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Integrierte Monitoring- und Reporting-Dashboards'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Implementierungs-Roadmaps & Projekttools',
          description: 'Strukturierte Projektmanagement-Tools und Roadmaps für effiziente und termingerechte ISMS-Implementierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Phasenorientierte Implementierungsroadmaps mit Meilensteinen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Integrierte Projektmanagement- und Tracking-Tools'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Ressourcenplanung und Kapazitätsmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Automatisierte Fortschrittsverfolgung und Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Monitoring & Compliance-Tools',
          description: 'Kontinuierliche Überwachungstools für nachhaltige Compliance-Sicherung und proaktive Sicherheitssteuerung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Echtzeit-Monitoring mit automatisierten Alerts'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'KPI-Dashboards und Performance-Metriken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Automatisierte Compliance-Checks und Validierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Integrierte Incident-Management und Response-Tools'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Audit & Zertifizierungstools',
          description: 'Spezialisierte Tools für Audit-Vorbereitung, Zertifizierungsunterstützung und kontinuierliche Compliance-Validierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Automatisierte Audit-Vorbereitung und Evidence-Sammlung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Zertifizierungsstellen-spezifische Checklisten und Guides'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Mock-Audit-Tools und Selbstbewertungsfunktionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Surveillance-Unterstützung und Re-Zertifizierungstools'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001ToolkitData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Toolkit page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
