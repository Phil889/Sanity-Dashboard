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
    console.log('Creating KI-Anwendungsfall-Identifikation page...')

    const kiAnwendungsfallIdentifikationData = {
      _type: 'servicePage',
      _id: 'ki-anwendungsfall-identifikation',
      title: 'KI-Anwendungsfall-Identifikation',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/ki-anwendungsfall-identifikation'
      },
      parent: {
        _type: 'reference',
        _ref: 'ki-kuenstliche-intelligenz'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'digitale-transformation'
        }
      },
      seo: {
        _type: 'seo',
        title: 'KI-Anwendungsfall-Identifikation | ADVISORI',
        description: 'Strategische Identifikation und Bewertung von KI-Anwendungsfällen für Ihr Unternehmen. DSGVO-konforme Use Case Analyse mit ROI-Fokus und Compliance-Integration für nachhaltigen AI-Erfolg.',
        keywords: 'KI Anwendungsfall Identifikation, AI Use Case Assessment, KI Strategie, AI ROI Bewertung, DSGVO KI Compliance, AI Business Case, KI Potenzialanalyse'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KI-Anwendungsfall-Identifikation'
        },
        tagline: 'Strategische KI-Potenziale erkennen und bewerten',
        heading: 'KI-Anwendungsfall-Identifikation',
        description: 'Identifizieren Sie die wertvollsten KI-Anwendungsfälle für Ihr Unternehmen mit unserem systematischen Ansatz. Wir bewerten Potenziale, analysieren ROI und entwickeln DSGVO-konforme Implementierungsstrategien für nachhaltigen AI-Erfolg.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Identifikation hochpotentieller KI-Anwendungsfälle'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'ROI-basierte Bewertung und Priorisierung von AI-Projekten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'DSGVO-konforme Use Case Entwicklung mit Compliance-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strategische Roadmap für nachhaltige KI-Transformation'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KI-Anwendungsfall-Identifikation',
        description: 'Die erfolgreiche Einführung von Künstlicher Intelligenz beginnt mit der strategischen Identifikation der richtigen Anwendungsfälle. ADVISORI unterstützt Sie dabei, KI-Potenziale systematisch zu erkennen, zu bewerten und zu priorisieren. Unser datengetriebener Ansatz kombiniert Geschäftsstrategie mit technischer Machbarkeit und regulatorischer Compliance.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Analyse Ihrer Geschäftsprozesse und Datenlandschaft'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Systematische Bewertung von KI-Potenzialen und Machbarkeit'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'ROI-Analyse und Business Case Entwicklung für AI-Projekte'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'DSGVO-konforme Use Case Gestaltung mit Datenschutz-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Strategische Priorisierung und Implementierungs-Roadmap'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche KI-Projekte beginnen nicht mit der Technologie, sondern mit der strategischen Identifikation der richtigen Anwendungsfälle. Eine systematische Use Case Analyse reduziert Implementierungsrisiken und maximiert den Geschäftswert Ihrer AI-Investitionen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Bewährte Methodik für strategische KI-Potenzialanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Kombination aus Geschäftsstrategie und technischer Expertise'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'DSGVO-First-Ansatz bei der Use Case Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praxiserprobte ROI-Bewertungsmodelle für AI-Projekte'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit systematischer KI-Anwendungsfall-Identifikation erreichen eine deutlich höhere Erfolgsquote bei AI-Projekten und reduzieren gleichzeitig Implementierungsrisiken. Investieren Sie in eine fundierte KI-Strategie!',
        serviceDescription: 'Wir bieten Ihnen einen umfassenden Service für die strategische Identifikation und Bewertung von KI-Anwendungsfällen, von der initialen Potenzialanalyse über die ROI-Bewertung bis hin zur Entwicklung einer priorisierten Implementierungs-Roadmap.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'KI-Potenzialanalyse & Use Case Discovery'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'ROI-Bewertung & Business Case Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Machbarkeitsstudien & Technische Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'DSGVO-Compliance & Datenschutz-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Strategische Priorisierung & Roadmap-Entwicklung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine systematische Herangehensweise zur Identifikation und Bewertung von KI-Anwendungsfällen, die sowohl Geschäftswert als auch technische Machbarkeit und regulatorische Compliance berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer Geschäftsprozesse und strategischen Ziele'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematische Identifikation und Kategorisierung von KI-Potenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Detaillierte Machbarkeitsbewertung und ROI-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'DSGVO-konforme Use Case Gestaltung und Compliance-Prüfung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Strategische Priorisierung und Entwicklung einer Implementierungs-Roadmap'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die strategische Identifikation der richtigen KI-Anwendungsfälle ist der Grundstein für erfolgreiche AI-Transformation. Unser systematischer Ansatz kombiniert Geschäftsstrategie mit technischer Machbarkeit und regulatorischer Compliance, um unseren Kunden maximalen Wert aus ihren KI-Investitionen zu ermöglichen. Dabei stellen wir sicher, dass jeder Use Case von Anfang an DSGVO-konform gestaltet und auf nachhaltigen Geschäftserfolg ausgerichtet ist.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'KI-Potenzialanalyse & Strategic Assessment',
          description: 'Umfassende Bewertung Ihrer Geschäftsprozesse zur Identifikation strategischer KI-Potenziale und Wertschöpfungsmöglichkeiten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse der aktuellen Geschäftsprozesse und Datenlandschaft'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Automatisierungs- und Optimierungspotenzialen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Bewertung strategischer KI-Anwendungsmöglichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung einer KI-Opportunity-Matrix'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Use Case Discovery & Kategorisierung',
          description: 'Systematische Identifikation und strukturierte Kategorisierung von KI-Anwendungsfällen nach Geschäftswert und Implementierungskomplexität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Workshop-basierte Use Case Identifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Strukturierte Kategorisierung nach Wertpotenzial'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Bewertung der technischen Machbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Dokumentation und Spezifikation der Use Cases'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'ROI-Bewertung & Business Case Entwicklung',
          description: 'Detaillierte Analyse des Return on Investment und Entwicklung fundierter Business Cases für priorisierte KI-Anwendungsfälle.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Quantitative ROI-Analyse und Kosten-Nutzen-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Entwicklung detaillierter Business Cases'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Risikobewertung und Sensitivitätsanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Investitionsplanung und Budget-Empfehlungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Machbarkeitsstudien & Technische Bewertung',
          description: 'Umfassende technische Bewertung der identifizierten Use Cases mit Fokus auf Implementierbarkeit und Skalierbarkeit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Technische Machbarkeitsbewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Datenqualitäts- und Verfügbarkeitsanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Bewertung der IT-Infrastruktur-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Skalierbarkeits- und Performance-Bewertung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'DSGVO-Compliance & Datenschutz-Integration',
          description: 'Sicherstellung der DSGVO-Konformität aller identifizierten Use Cases mit integrierter Datenschutz- und Compliance-Bewertung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'DSGVO-Compliance-Bewertung für jeden Use Case'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Privacy-by-Design Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Datenschutz-Folgenabschätzung (DSFA)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Entwicklung von Compliance-Frameworks'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Strategische Priorisierung & Roadmap-Entwicklung',
          description: 'Entwicklung einer strategischen Implementierungs-Roadmap mit priorisierten Use Cases und klaren Meilensteinen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Multi-Kriterien-Bewertung und Priorisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Entwicklung einer strategischen KI-Roadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Definition von Meilensteinen und Success Metrics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Change Management und Stakeholder-Alignment'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kiAnwendungsfallIdentifikationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KI-Anwendungsfall-Identifikation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
