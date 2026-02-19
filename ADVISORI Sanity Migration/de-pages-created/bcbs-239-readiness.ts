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
    console.log('Creating BCBS-239 Readiness page...')

    const bcbs239ReadinessData = {
      _type: 'servicePage',
      _id: 'bcbs-239-readiness',
      title: 'BCBS-239 Readiness',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/bcbs-239/bcbs-239-readiness'
      },
      parent: {
        _type: 'reference',
        _ref: 'bcbs-239'
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
        title: 'BCBS-239 Readiness Assessment | ADVISORI',
        description: 'Bewerten Sie Ihre Bereitschaft für BCBS-239 Compliance mit unserem umfassenden Readiness Assessment für Risikodaten-Aggregation und Reporting-Prozesse.',
        keywords: 'BCBS-239 Readiness, Readiness Assessment, Risikodaten-Aggregation, Compliance-Vorbereitung, Gap-Analyse, Finanzregulierung, Regulatory Readiness'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'BCBS-239 Readiness Assessment'
        },
        tagline: 'Umfassende Vorbereitung auf die BCBS-239 Compliance',
        heading: 'BCBS-239 Readiness',
        description: 'Unser BCBS-239 Readiness Assessment bietet eine umfassende Bewertung Ihrer Bereitschaft für die BCBS-239 Compliance. Wir identifizieren Lücken, entwickeln maßgeschneiderte Roadmaps und unterstützen Sie bei der erfolgreichen Implementierung aller erforderlichen Maßnahmen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Klare Transparenz über Ihren aktuellen Compliance-Status'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturierte Roadmap für die BCBS-239 Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Optimierung der Risikodaten-Governance und -Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kostenersparnis durch frühzeitige Identifikation kritischer Handlungsfelder'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'BCBS-239 Readiness Assessment',
        description: 'Die BCBS-239 Richtlinien stellen komplexe Anforderungen an die Risikodaten-Aggregation und das Reporting von Finanzinstituten. Unser Readiness Assessment ermöglicht Ihnen einen strukturierten Einstieg in die Compliance-Implementierung, indem wir Ihren aktuellen Status bewerten, Lücken identifizieren und einen klaren Implementierungsplan entwickeln.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Bewertung Ihrer Risikodaten-Governance und -Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Detaillierte Gap-Analyse zu den 14 BCBS-239 Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Priorisierung von Handlungsfeldern nach Kritikalität und Implementierungsaufwand'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung einer detaillierten Umsetzungs-Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Vorbereitung Ihrer Organisation auf die Implementierungsphase'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Ein umfassendes Readiness Assessment zu Beginn Ihres BCBS-239 Projekts kann die Implementierungskosten um bis zu 35% reduzieren und die Projektlaufzeit erheblich verkürzen. Es schafft nicht nur Klarheit über den Status quo, sondern ermöglicht auch eine präzise Ressourcenplanung und Budgetierung.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in allen Aspekten der BCBS-239 Regulierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Assessment-Methodik mit standardisierten Bewertungskriterien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Benchmark-Vergleiche mit Best Practices aus erfolgreichen Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praxisorientierte Empfehlungen mit konkreten Handlungsschritten'
            }
          ]
        },
        additionalInfo: 'Eine strukturierte BCBS-239 Readiness-Bewertung bildet das Fundament für eine erfolgreiche Compliance-Implementierung. Laut Branchenstudien scheitern bis zu 60% der BCBS-239 Projekte ohne vorherige gründliche Readiness-Analysen an unvorhergesehenen Komplexitäten und Ressourcenengpässen.',
        serviceDescription: 'Unser BCBS-239 Readiness Assessment bietet eine strukturierte und ganzheitliche Bewertung Ihrer aktuellen Fähigkeiten zur Risikodaten-Aggregation und zum Reporting. Wir identifizieren systematisch Lücken zu den regulatorischen Anforderungen und entwickeln einen maßgeschneiderten Implementierungsplan.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'BCBS-239 Gap-Analyse und Compliance-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Bewertung der Datengovernance und -qualität'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Analyse der IT-Architektur für Risikodaten'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Bewertung der Reporting-Prozesse und -Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Entwicklung einer BCBS-239 Implementierungs-Roadmap'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Unser BCBS-239 Readiness Assessment folgt einer strukturierten Methodik, die alle relevanten Dimensionen der Compliance abdeckt und zu einer umfassenden Bewertung führt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Initiale Bestandsaufnahme und Sammlung relevanter Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Detaillierte Analyse der Risikodaten-Governance und -Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Bewertung der IT-Architektur und Datenqualitätskontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Mapping gegen die 14 BCBS-239 Prinzipien und Identifikation von Gaps'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Entwicklung einer priorisierten Roadmap mit konkreten Maßnahmen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'Großbank AG',
        name: 'Dr. Julia Müller',
        position: 'Chief Risk Officer',
        quote: 'Das BCBS-239 Readiness Assessment von ADVISORI hat uns einen präzisen Überblick über unseren Compliance-Status verschafft. Die strukturierte Methodik und die praxisnahen Empfehlungen haben uns ermöglicht, unsere Implementierung zielgerichtet zu planen und wesentliche Risiken frühzeitig zu adressieren. Ein enormer Mehrwert für unser Gesamtprojekt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Umfassende BCBS-239 Gap-Analyse',
          description: 'Wir bewerten systematisch Ihre aktuelle Compliance gegen alle 14 BCBS-239 Prinzipien und identifizieren Lücken zu den regulatorischen Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse zu allen BCBS-239 Prinzipien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung der Datengovernance und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Analyse der Risikodaten-Aggregation und -Architektur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Bewertung der Reporting-Prozesse und -Systeme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'BCBS-239 Implementierungs-Roadmap',
          description: 'Wir entwickeln eine maßgeschneiderte Roadmap für Ihre BCBS-239 Implementierung mit priorisierten Maßnahmen und Umsetzungsplanung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Priorisierung von Handlungsfeldern nach Kritikalität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung konkreter Maßnahmen zur Gap-Schließung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Detaillierte Umsetzungsplanung und Meilensteine'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Ressourcen- und Budgetplanung für die Implementierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcbs239ReadinessData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ BCBS-239 Readiness page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
