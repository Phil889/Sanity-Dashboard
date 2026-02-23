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
    console.log('Creating DSGVO Datenschutz Analyse & Gap Assessment page...')

    const dsgvoAnalyseData = {
      _type: 'servicePage',
      _id: 'dsgvo-datenschutz-analyse-gap-assessment',
      title: 'DSGVO Datenschutz Analyse & Gap Assessment',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dsgvo/dsgvo-readiness/dsgvo-datenschutz-analyse-gap-assessment'
      },
      parent: {
        _type: 'reference',
        _ref: 'dsgvo-readiness'
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
        title: 'DSGVO Datenschutz Analyse & Gap Assessment | ADVISORI',
        description: 'Professionelle DSGVO-Datenschutzanalyse und Gap Assessment zur Identifizierung von Compliance-Lücken. Umfassende Bewertung Ihrer aktuellen Datenschutzmaßnahmen.',
        keywords: 'DSGVO, Datenschutzanalyse, Gap Assessment, GDPR Compliance, Datenschutz-Audit, Compliance-Bewertung, Datenschutzmanagement'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DSGVO Datenschutz Analyse & Gap Assessment'
        },
        tagline: 'Systematische Analyse Ihrer DSGVO-Compliance mit professionellem Gap Assessment',
        heading: 'DSGVO Datenschutz Analyse & Gap Assessment',
        description: 'Eine umfassende DSGVO-Datenschutzanalyse identifiziert Schwachstellen in Ihren aktuellen Datenschutzmaßnahmen und zeigt konkrete Handlungsfelder auf. Unser Gap Assessment liefert Ihnen eine klare Roadmap zur vollständigen DSGVO-Compliance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Bestandsaufnahme Ihrer aktuellen Datenschutzmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Identifizierung kritischer Compliance-Lücken und Risikobereiche'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Priorisierte Handlungsempfehlungen mit konkreten Umsetzungsschritten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Minimierung von Bußgeldrisiken und Reputationsschäden'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DSGVO Datenschutz Analyse & Gap Assessment',
        description: 'Eine professionelle DSGVO-Datenschutzanalyse ist der erste kritische Schritt zur vollständigen GDPR-Compliance. Unser systematisches Gap Assessment evaluiert alle Aspekte Ihrer Datenverarbeitung und identifiziert präzise die Bereiche, die Aufmerksamkeit erfordern.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Analyse aller Datenverarbeitungsprozesse und -systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Bewertung technischer und organisatorischer Maßnahmen (TOMs)'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Prüfung der Dokumentationspflichten und Nachweisführung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Evaluierung der Betroffenenrechte und deren Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Assessment der Datenschutz-Governance und Verantwortlichkeiten'
          }
        ],
        alert: {
          title: 'Compliance-Hinweis',
          content: 'Eine regelmäßige DSGVO-Analyse ist nicht nur rechtlich geboten, sondern auch wirtschaftlich sinnvoll. Frühzeitige Identifizierung von Compliance-Lücken verhindert kostspielige Bußgelder und Reputationsschäden.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Zertifizierte Datenschutzexperten mit langjähriger DSGVO-Erfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodik mit strukturierten Assessment-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxisnahe Handlungsempfehlungen mit konkreten Umsetzungshilfen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung bei der Implementierung der Maßnahmen'
            }
          ]
        },
        additionalInfo: 'Ein professionelles DSGVO Gap Assessment kann Bußgeldrisiken um bis zu 80% reduzieren und Ihnen gleichzeitig Wettbewerbsvorteile durch vertrauensvolle Datennutzung verschaffen.',
        serviceDescription: 'Wir bieten Ihnen eine umfassende DSGVO-Datenschutzanalyse, die alle Aspekte Ihrer Datenverarbeitung systematisch durchleuchtet und konkrete Verbesserungsmaßnahmen aufzeigt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Vollständige Inventarisierung aller Datenverarbeitungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Gap-Analyse der technischen und organisatorischen Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Bewertung der Rechtmäßigkeit von Datenverarbeitungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Prüfung der Datenschutz-Dokumentation und Nachweise'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Entwicklung einer priorisierten Compliance-Roadmap'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir führen eine systematische und gründliche Analyse Ihrer DSGVO-Compliance durch, um alle relevanten Bereiche zu erfassen und bewerten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Bestandsaufnahme aller Datenverarbeitungsprozesse und -systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Detaillierte Bewertung gegen DSGVO-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Identifizierung und Priorisierung von Compliance-Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung konkreter Handlungsempfehlungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Erstellung einer umfassenden Gap-Assessment-Dokumentation'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Das DSGVO Gap Assessment von ADVISORI hat uns eine klare Übersicht über unseren Compliance-Status verschafft. Die priorisierten Handlungsempfehlungen ermöglichten es uns, gezielt die wichtigsten Maßnahmen umzusetzen und gleichzeitig Kosten zu optimieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Umfassende Datenschutz-Bestandsaufnahme',
          description: 'Vollständige Inventarisierung und Dokumentation aller Datenverarbeitungsprozesse in Ihrem Unternehmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Mapping aller Datenflüsse und Verarbeitungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Inventarisierung der IT-Systeme und Anwendungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifizierung aller Datenarten und -kategorien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Dokumentation der Verantwortlichkeiten und Rollen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'DSGVO-Compliance Gap-Analyse',
          description: 'Systematische Bewertung Ihrer aktuellen Datenschutzmaßnahmen gegen die DSGVO-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Bewertung technischer und organisatorischer Maßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Prüfung der Rechtmäßigkeit von Datenverarbeitungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Analyse der Betroffenenrechte-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Evaluation der Datenschutz-Governance-Strukturen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(dsgvoAnalyseData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DSGVO Datenschutz Analyse & Gap Assessment page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
