import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
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
    console.log('Creating FIDA Gap-Analyse page...')

    const fidaGapAnalysisData = {
      _type: 'servicePage',
      _id: 'fida-gap-analysis',
      title: 'FIDA Gap-Analyse',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/financial-data-access-fida/fida-gap-analysis'
      },
      parent: {
        _type: 'reference',
        _ref: 'financial-data-access-fida'
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
        title: 'FIDA Gap-Analyse | Compliance-Readiness Assessment | ADVISORI',
        description: 'Professionelle FIDA Gap-Analyse zur Bewertung Ihrer Compliance-Readiness. Identifikation von Umsetzungslücken, Risikobewertung und strategische Roadmap-Entwicklung für FIDA-Compliance.',
        keywords: 'FIDA Gap-Analyse, Compliance Assessment, Readiness Evaluation, Financial Data Access, Regulatory Gap Analysis, FIDA Implementation, Compliance Roadmap'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FIDA Gap-Analyse Compliance Assessment'
        },
        tagline: 'Strategische FIDA-Readiness durch systematische Gap-Analyse',
        heading: 'FIDA Gap-Analyse',
        description: 'Eine umfassende FIDA Gap-Analyse ist der Grundstein für erfolgreiche Compliance. Wir bewerten systematisch Ihre aktuelle Position, identifizieren kritische Umsetzungslücken und entwickeln eine maßgeschneiderte Roadmap für FIDA-konforme Transformation.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Bewertung Ihrer FIDA-Compliance-Readiness'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Systematische Identifikation kritischer Umsetzungslücken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Priorisierte Implementierungs-Roadmap mit Zeitplan'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Risikobewertung und Mitigation-Strategien'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Systematische FIDA-Readiness-Bewertung',
        description: 'Die Financial Data Access Regulation stellt komplexe Anforderungen an Finanzdienstleister. Eine professionelle Gap-Analyse bildet die Basis für eine erfolgreiche und kosteneffiziente FIDA-Implementation, indem sie präzise aufzeigt, wo Ihr Unternehmen steht und welche Schritte für vollständige Compliance erforderlich sind.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Bewertung bestehender Systeme, Prozesse und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Detaillierte Analyse der FIDA-Anforderungen und deren Auswirkungen auf Ihr Geschäftsmodell'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Identifikation technischer, organisatorischer und regulatorischer Compliance-Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung priorisierter Umsetzungsstrategien mit Kosten-Nutzen-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Anpassung der Compliance-Strategie'
          }
        ],
        alert: {
          title: 'Proaktiver Vorteil',
          content: 'Eine frühzeitige und gründliche Gap-Analyse ermöglicht es, FIDA-Compliance strategisch zu planen und dabei Kosten zu optimieren sowie Wettbewerbsvorteile zu schaffen, anstatt reaktiv auf regulatorische Anforderungen zu reagieren.'
        },
        whyUs: {
          title: 'Unsere Gap-Analyse-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Bewährte Methodiken für umfassende Compliance-Assessments'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefgreifende FIDA-Expertise und regulatorische Kenntnisse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Bewertungsframeworks und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Strategische Beratung von der Analyse bis zur Umsetzung'
            }
          ]
        },
        additionalInfo: 'FIDA-Gap-Analysen erfordern ein tiefes Verständnis sowohl der regulatorischen Anforderungen als auch der spezifischen Geschäfts- und Technologielandschaft Ihres Unternehmens. Unsere systematische Herangehensweise gewährleistet, dass keine kritischen Aspekte übersehen werden und alle Stakeholder optimal auf die FIDA-Transformation vorbereitet sind.',
        serviceDescription: 'Wir führen strukturierte Gap-Analysen durch, die alle Dimensionen der FIDA-Compliance abdecken: von technischen API-Anforderungen über Datenschutz und Governance bis hin zu organisatorischen Veränderungen. Das Ergebnis ist eine klare, umsetzbare Roadmap für Ihre FIDA-Compliance-Journey.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strukturierte Bewertung aller FIDA-relevanten Geschäftsbereiche'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Technische Architektur-Analyse und API-Readiness-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Governance- und Prozess-Evaluation mit Verbesserungsempfehlungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Risikobewertung und Compliance-Monitoring-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Detaillierte Implementierungs-Roadmap mit Meilensteinen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Gap-Analyse-Ansatz',
        description: 'Wir verwenden eine bewährte, strukturierte Methodik, die alle kritischen Aspekte der FIDA-Compliance systematisch bewertet und priorisierte Handlungsempfehlungen liefert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Bestandsaufnahme Ihrer aktuellen Systeme und Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Detaillierte Analyse der FIDA-Anforderungen und deren Auswirkungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Systematische Identifikation und Bewertung von Compliance-Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung priorisierter Umsetzungsstrategien und Roadmaps'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Validierung und Anpassung der Compliance-Strategie'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Eine professionelle FIDA Gap-Analyse ist der Schlüssel für eine erfolgreiche und kosteneffiziente Compliance-Transformation. Unsere systematische Herangehensweise ermöglicht es Unternehmen, nicht nur regulatorische Anforderungen zu erfüllen, sondern dabei strategische Vorteile zu realisieren und die Grundlage für nachhaltige Geschäftsinnovation zu schaffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Current State Assessment und Baseline-Analyse',
          description: 'Umfassende Bewertung Ihrer aktuellen Position in Bezug auf FIDA-Anforderungen und Etablierung einer klaren Ausgangsbasis für die Compliance-Transformation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Vollständige Inventarisierung bestehender Systeme und Datenarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung aktueller Governance-Strukturen und Compliance-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Analyse bestehender Datenschutz- und Sicherheitsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Dokumentation der aktuellen Stakeholder-Landschaft und Verantwortlichkeiten'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'FIDA-Anforderungsanalyse und Impact Assessment',
          description: 'Detaillierte Analyse der spezifischen FIDA-Anforderungen für Ihr Geschäftsmodell und Bewertung deren Auswirkungen auf Ihre Organisation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Branchenspezifische Interpretation der FIDA-Regulierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Bewertung der Auswirkungen auf bestehende Geschäftsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Identifikation neuer Compliance-Verpflichtungen und -Chancen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Analyse der Wechselwirkungen mit anderen regulatorischen Anforderungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Technische Gap-Analyse und Architektur-Assessment',
          description: 'Umfassende Bewertung Ihrer technischen Infrastruktur und Identifikation der erforderlichen technischen Anpassungen für FIDA-Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'API-Readiness-Assessment und Architektur-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Datenqualitäts- und -verfügbarkeitsanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Sicherheitsarchitektur-Evaluation und Schwachstellenanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Integration und Interoperabilitäts-Assessment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Organisatorische Readiness-Bewertung',
          description: 'Analyse der organisatorischen Bereitschaft für FIDA-Implementation und Identifikation erforderlicher Veränderungen in Struktur und Prozessen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Bewertung der Governance-Strukturen und Entscheidungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Analyse der Kompetenzen und Schulungsbedarfe'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Change-Management-Readiness und Kulturanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Ressourcenplanung und Kapazitätsbewertung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Risikobewertung und Compliance-Gap-Identifikation',
          description: 'Systematische Identifikation und Bewertung von Compliance-Risiken sowie Entwicklung von Mitigation-Strategien für identifizierte Lücken.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Umfassende Risikoinventarisierung und -bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Priorisierung von Compliance-Lücken nach Kritikalität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Entwicklung von Risiko-Mitigation-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kontinuierliche Risiko-Monitoring-Frameworks'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Strategische Roadmap-Entwicklung und Umsetzungsplanung',
          description: 'Entwicklung einer detaillierten, priorisierten Umsetzungsroadmap mit klaren Meilensteinen, Zeitplänen und Ressourcenanforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Priorisierte Implementierungs-Roadmap mit Zeitplan'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Kosten-Nutzen-Analyse verschiedener Umsetzungsoptionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Meilenstein-Definition und Success-Metriken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Roadmap-Validierung und -Anpassung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(fidaGapAnalysisData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FIDA Gap-Analyse page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
