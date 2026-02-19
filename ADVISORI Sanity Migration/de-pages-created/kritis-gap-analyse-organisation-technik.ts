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
    console.log('Creating KRITIS Gap-Analyse Organisation & Technik page...')

    const kritisGapAnalyseData = {
      _type: 'servicePage',
      _id: 'kritis-gap-analyse-organisation-technik',
      title: 'KRITIS Gap-Analyse Organisation & Technik',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/kritis/kritis-readiness/kritis-gap-analyse-organisation-technik'
      },
      parent: {
        _type: 'reference',
        _ref: 'kritis-readiness'
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
        title: 'KRITIS Gap-Analyse Organisation & Technik | ADVISORI',
        description: 'Umfassende Gap-Analyse für KRITIS-Compliance in organisatorischen und technischen Bereichen. Identifizierung von Schwachstellen und Entwicklung gezielter Lösungsstrategien.',
        keywords: 'KRITIS, Gap-Analyse, Kritische Infrastrukturen, Organisation, Technik, IT-Sicherheit, BSI, Compliance, Infrastruktursicherheit'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KRITIS Gap-Analyse Organisation & Technik'
        },
        tagline: 'Systematische Analyse für resiliente kritische Infrastrukturen',
        heading: 'KRITIS Gap-Analyse Organisation & Technik',
        description: 'Die KRITIS-Verordnung stellt kritische Infrastrukturen vor komplexe Herausforderungen. Unsere umfassende Gap-Analyse identifiziert systematisch Schwachstellen in organisatorischen Strukturen und technischen Systemen, um eine resiliente und compliance-konforme Infrastruktur zu gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende Bewertung organisatorischer und technischer KRITIS-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Systematische Identifikation kritischer Schwachstellen und Sicherheitslücken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Priorisierte Maßnahmenplanung für effiziente Ressourcenallokation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Zukunftsorientierte Strategien für nachhaltige Infrastruktursicherheit'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KRITIS Gap-Analyse Organisation & Technik',
        description: 'Kritische Infrastrukturen bilden das Rückgrat unserer Gesellschaft und Wirtschaft. Eine fundierte Gap-Analyse ist der erste Schritt zur Erreichung vollständiger KRITIS-Compliance. Wir evaluieren systematisch Ihre organisatorischen Strukturen und technischen Systeme, um Schwachstellen zu identifizieren und gezielte Verbesserungsmaßnahmen zu entwickeln.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Vollständige Bewertung der KRITIS-Compliance-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Analyse organisatorischer Strukturen und Sicherheitsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Technische Systemanalyse und IT-Sicherheitsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Risikobewertung und Bedrohungsanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Entwicklung priorisierter Maßnahmenpläne und Roadmaps'
          }
        ],
        alert: {
          title: 'Compliance-Hinweis',
          content: 'KRITIS-Betreiber sind verpflichtet, angemessene organisatorische und technische Vorkehrungen zur Aufrechterhaltung, Überwachung und Steuerung der Sicherheit und Funktionsfähigkeit ihrer kritischen Infrastrukturen zu treffen. Eine strukturierte Gap-Analyse ist der Grundstein für effektive Compliance.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnisse der KRITIS-Verordnung und BSI-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenübergreifende Erfahrung mit kritischen Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz für organisatorische und technische Aspekte'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praxiserprobte Methoden für nachhaltige Sicherheitsverbesserungen'
            }
          ]
        },
        additionalInfo: 'Eine professionelle KRITIS Gap-Analyse reduziert das Risiko von Sicherheitsvorfällen um bis zu 60% und beschleunigt die Compliance-Erreichung um durchschnittlich 40%. Investieren Sie in systematische Analyse für maximale Infrastruktursicherheit!',
        serviceDescription: 'Wir bieten umfassende Gap-Analysen für KRITIS-Compliance mit Fokus auf organisatorische Strukturen und technische Systeme. Unser strukturierter Ansatz gewährleistet vollständige Transparenz über Ihren aktuellen Compliance-Status und entwickelt gezielte Verbesserungsstrategien.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'KRITIS-Compliance Assessment und Ist-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Organisatorische Strukturanalyse und Prozessbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Technische Systemanalyse und IT-Sicherheitsevaluation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Risiko- und Bedrohungsanalyse für kritische Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Entwicklung priorisierter Maßnahmenpläne und Implementierungsroadmaps'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir führen eine systematische und umfassende Gap-Analyse durch, die sowohl organisatorische als auch technische Aspekte Ihrer kritischen Infrastruktur berücksichtigt und konkrete Handlungsempfehlungen für KRITIS-Compliance liefert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Vollständige Erfassung und Bewertung Ihrer kritischen Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Analyse organisatorischer Strukturen und Sicherheitsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Technische Evaluation von IT-Systemen und Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Identifikation und Priorisierung von Compliance-Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Entwicklung konkreter Maßnahmenpläne und Implementierungsstrategien'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'Energieversorgungsunternehmen',
        name: 'Dipl.-Ing. Michael Schmidt',
        position: 'Leiter IT-Sicherheit & Compliance',
        quote: 'Die KRITIS Gap-Analyse von ADVISORI hat uns einen umfassenden und strukturierten Überblick über unsere Compliance-Situation verschafft. Besonders wertvoll war die ganzheitliche Betrachtung organisatorischer und technischer Aspekte sowie die priorisierten Handlungsempfehlungen. Dadurch konnten wir unsere Ressourcen zielgerichtet einsetzen und die KRITIS-Compliance deutlich effizienter erreichen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Organisatorische Gap-Analyse',
          description: 'Umfassende Bewertung Ihrer organisatorischen Strukturen, Prozesse und Verfahren im Kontext der KRITIS-Anforderungen zur Identifikation von Optimierungspotenzialen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse der Governance-Strukturen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung von Sicherheitsprozessen und -verfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Evaluation der Notfall- und Krisenmanagement-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Assessment der Personal- und Kompetenzstrukturen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technische Gap-Analyse',
          description: 'Detaillierte Evaluation Ihrer technischen Systeme, IT-Infrastruktur und Sicherheitsmaßnahmen zur Identifikation technischer Schwachstellen und Verbesserungsmöglichkeiten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'IT-Sicherheitsarchitektur und Systemanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Bewertung von Schutzmaßnahmen und Sicherheitskontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Analyse der Monitoring- und Detektionssysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Evaluation der Backup- und Recovery-Konzepte'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kritisGapAnalyseData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KRITIS Gap-Analyse Organisation & Technik page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
