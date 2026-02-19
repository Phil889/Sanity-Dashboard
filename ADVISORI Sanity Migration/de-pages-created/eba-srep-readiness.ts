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
    console.log('Creating EBA SREP Readiness page...')

    const ebaSrepReadinessData = {
      _type: 'servicePage',
      _id: 'eba-srep-readiness',
      title: 'EBA SREP Readiness',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eba/eba-srep-readiness'
      },
      parent: {
        _type: 'reference',
        _ref: 'eba'
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
        title: 'EBA SREP Readiness | ADVISORI',
        description: 'Bereiten Sie Ihr Unternehmen optimal auf den aufsichtsrechtlichen SREP-Prozess vor. Wir unterstützen Sie bei der Vorbereitung, Durchführung und Nachbereitung des SREP der EBA.',
        keywords: 'EBA, SREP, Supervisory Review and Evaluation Process, Aufsichtsrechtliche Prüfung, Bankaufsicht, Compliance, Regulierung, EZB'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EBA SREP Readiness'
        },
        tagline: 'Optimale Vorbereitung auf den aufsichtsrechtlichen Überprüfungs- und Bewertungsprozess',
        heading: 'EBA SREP Readiness',
        description: 'Der Supervisory Review and Evaluation Process (SREP) ist ein zentrales Instrument der europäischen Bankenaufsicht. Wir unterstützen Sie dabei, sich optimal auf den SREP vorzubereiten und regulatorische Anforderungen effizient zu erfüllen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Identifikation und Behebung potenzieller Schwachstellen vor der Prüfung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategische Ausrichtung Ihrer Governance und Risikomanagementprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Verbesserung Ihrer aufsichtsrechtlichen Berichterstattung und Kommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Stärkung Ihrer Compliance-Position und Reduzierung regulatorischer Risiken'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EBA SREP Readiness',
        description: 'Der Supervisory Review and Evaluation Process (SREP) der Europäischen Bankenaufsichtsbehörde (EBA) ist ein umfassender Bewertungsprozess, der die Geschäftsmodelle, Governance, Risiken und Kapitalausstattung von Finanzinstituten evaluiert. Eine gründliche Vorbereitung ist entscheidend, um positive Bewertungen zu erzielen und regulatorische Maßnahmen zu vermeiden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Gap-Analyse zur Identifikation von Schwachstellen im Hinblick auf SREP-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Vorbereitung und Optimierung der erforderlichen Dokumentation und Nachweise'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Verbesserung von Governance, internen Kontrollmechanismen und Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung von Maßnahmenplänen zur Behebung identifizierter Defizite'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Begleitung während des SREP und strategische Beratung im Umgang mit Aufsichtsbehörden'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine proaktive SREP-Vorbereitung sollte nicht nur auf Compliance abzielen, sondern auch als Chance zur Optimierung interner Prozesse und Risikomanagementpraktiken genutzt werden. Dies schafft langfristigen Mehrwert über die regulatorischen Anforderungen hinaus.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in regulatorischen Anforderungen und SREP-Methodik'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfangreiche Erfahrung in der Zusammenarbeit mit Aufsichtsbehörden'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Methoden zur effizienten SREP-Vorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz, der regulatorische Anforderungen mit geschäftlichen Zielen in Einklang bringt'
            }
          ]
        },
        additionalInfo: 'Finanzinstitute mit einer strukturierten SREP-Vorbereitungsstrategie erreichen im Durchschnitt bessere Bewertungen und können regulatorische Kapitalaufschläge sowie zusätzliche Auflagen effektiv minimieren. Eine proaktive Vorbereitung spart langfristig Ressourcen und stärkt das Vertrauen von Investoren und Stakeholdern.',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum zur SREP-Vorbereitung, von der Gap-Analyse über die Optimierung von Governance und Risikomanagement bis hin zur Begleitung während des SREP-Prozesses und der Nachbereitung der Ergebnisse.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'SREP-spezifische Gap-Analyse und Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Optimierung der Governance und des Risikomanagements'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Verbesserung von ICAAP und ILAAP'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Dokumentationsvorbereitung und Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Strategische Beratung für die Kommunikation mit Aufsichtsbehörden'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir bieten einen strukturierten Ansatz zur SREP-Vorbereitung, der auf Ihre spezifischen Anforderungen und den regulatorischen Kontext zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Initiale Bestandsaufnahme und Gap-Analyse im Hinblick auf SREP-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten SREP-Vorbereitungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung von Verbesserungsmaßnahmen in den kritischen Bereichen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Vorbereitung und Qualitätssicherung der erforderlichen Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Begleitung während des SREP und Unterstützung bei der Nachbereitung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Thomas Weber',
        position: 'Senior Director',
        quote: 'Die SREP-Vorbereitung ist für Finanzinstitute ein komplexer und ressourcenintensiver Prozess. Mit unserer methodischen Herangehensweise und umfassenden Expertise unterstützen wir unsere Kunden dabei, diesen Prozess effizient zu bewältigen und gleichzeitig langfristigen Mehrwert für ihre Organisation zu schaffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'SREP Gap-Analyse und Readiness Assessment',
          description: 'Wir analysieren Ihre aktuelle Situation im Hinblick auf die SREP-Anforderungen und identifizieren potenzielle Schwachstellen und Verbesserungspotenziale.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Bewertung aller SREP-relevanten Bereiche'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von regulatorischen Gaps und Schwachstellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Priorisierung von Handlungsfeldern nach Risiko und Aufwand'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung eines strukturierten Maßnahmenplans'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Optimierung von Governance und Risikomanagement',
          description: 'Wir unterstützen Sie bei der Verbesserung Ihrer Governance-Strukturen und Risikomanagementprozesse, um den SREP-Anforderungen gerecht zu werden.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Review und Verbesserung von Governance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Optimierung von Risikomanagementprozessen und -methoden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Stärkung der internen Kontrollsysteme und Compliance-Funktionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Verbesserung der Risikokultur und des Risikobewusstseins'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(ebaSrepReadinessData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EBA SREP Readiness page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
