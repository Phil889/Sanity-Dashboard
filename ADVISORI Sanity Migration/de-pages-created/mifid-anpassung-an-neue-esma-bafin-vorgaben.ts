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
    console.log('Creating MiFID Anpassung an neue ESMA/BaFin Vorgaben page...')

    const mifidAdaptationData = {
      _type: 'servicePage',
      _id: 'mifid-anpassung-an-neue-esma-bafin-vorgaben',
      title: 'MiFID Anpassung an neue ESMA/BaFin Vorgaben',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/mifid/mifid-ongoing-compliance/mifid-anpassung-an-neue-esma-bafin-vorgaben'
      },
      parent: {
        _type: 'reference',
        _ref: 'mifid-ongoing-compliance'
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
        title: 'MiFID Anpassung an neue ESMA/BaFin Vorgaben | ADVISORI',
        description: 'Sichern Sie die kontinuierliche Anpassung Ihrer MiFID-Compliance an neue ESMA- und BaFin-Vorgaben mit unseren spezialisierten Dienstleistungen. Wir analysieren regulatorische Änderungen, bewerten deren Auswirkungen und implementieren effiziente Anpassungsmaßnahmen, die nachhaltige Compliance und Wettbewerbsvorteile für Ihr Institut gewährleisten.',
        keywords: 'MiFID Anpassung, ESMA Vorgaben, BaFin Regelungen, regulatorische Änderungen, MiFID Updates, Compliance Management, Wertpapierregulierung, MiFID II Compliance, Regulatorisches Change Management, ESMA Guidelines'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'MiFID Anpassung an neue ESMA/BaFin Vorgaben'
        },
        tagline: 'Proaktive Anpassung an dynamische regulatorische Anforderungen',
        heading: 'MiFID Anpassung an neue ESMA/BaFin Vorgaben',
        description: 'Bewältigen Sie die kontinuierliche Evolution der MiFID-Regulierung durch unsere spezialisierten Anpassungsservices. Wir identifizieren, analysieren und bewerten neue ESMA- und BaFin-Vorgaben, entwickeln maßgeschneiderte Implementierungsstrategien und unterstützen Sie bei der effizienten Integration regulatorischer Änderungen in Ihre bestehenden Compliance-Strukturen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Frühzeitige Identifikation und Analyse relevanter regulatorischer Entwicklungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Maßgeschneiderte Impact-Assessments für Ihre spezifischen Geschäftsmodelle'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effiziente Implementierung neuer Anforderungen mit minimalem operativem Aufwand'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Compliance-Sicherheit in einem dynamischen regulatorischen Umfeld'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'MiFID Anpassung an neue ESMA/BaFin Vorgaben',
        description: 'Das regulatorische MiFID-Framework unterliegt kontinuierlichen Präzisierungen und Erweiterungen durch ESMA und nationale Aufsichtsbehörden. Unser spezialisierter Anpassungsservice gewährleistet, dass Ihr Institut frühzeitig auf regulatorische Entwicklungen reagiert, deren Auswirkungen präzise bewertet und notwendige Änderungen effizient implementiert – für nachhaltige Compliance-Sicherheit und strategische Wettbewerbsvorteile in einem komplexen regulatorischen Umfeld.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Kontinuierliches Monitoring neuer ESMA- und BaFin-Vorgaben zu MiFID'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Detaillierte Impact-Assessments und Gap-Analysen für regulatorische Änderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung effizienter Implementierungsstrategien und Maßnahmenpläne'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration neuer Anforderungen in bestehende Compliance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Schulung und Knowledge-Transfer zu neuen regulatorischen Anforderungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Etablieren Sie einen strukturierten Regulatory Change Management Prozess, der neue Vorgaben frühzeitig identifiziert, systematisch bewertet und effizient implementiert. Kombinieren Sie diesen mit einer dynamischen Regulatory Knowledge Base, die Interpretationen, Präzedenzfälle und Implementation Practices dokumentiert. Dieser duale Ansatz reduziert den Implementierungsaufwand für neue Anforderungen um bis zu 40% und transformiert regulatorische Anpassungen von reaktiven Pflichtübungen zu einem strategischen Wettbewerbsvorteil.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in MiFID-Regulierung und aufsichtsrechtlicher Praxis'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Frühzeitiger Zugang zu regulatorischen Entwicklungen und deren Interpretation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methodik für effiziente regulatorische Anpassungsprojekte'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Langjährige Erfahrung mit erfolgreichen MiFID-Implementierungsprojekten'
            }
          ]
        },
        additionalInfo: 'Unsere Kunden profitieren von unserer kontinuierlichen Überwachung des regulatorischen Umfelds und frühzeitigen Analysen neuer ESMA- und BaFin-Vorgaben. Durch unseren proaktiven Ansatz können Institute typischerweise 3-4 Monate Vorlaufzeit für regulatorische Anpassungen gewinnen, was die Implementierungskosten um durchschnittlich 30-40% reduziert und die Qualität der Umsetzung signifikant erhöht. Gleichzeitig minimiert unsere strukturierte Anpassungsmethodik operative Störungen und maximiert die Integration in bestehende Compliance-Prozesse.',
        serviceDescription: 'Unser MiFID Anpassungsservice für neue ESMA- und BaFin-Vorgaben bietet eine umfassende Lösung für die kontinuierliche Aktualisierung und Optimierung Ihrer MiFID-Compliance. Wir unterstützen Sie bei der frühzeitigen Identifikation regulatorischer Änderungen, der präzisen Bewertung ihrer Auswirkungen und der effizienten Implementation notwendiger Anpassungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Kontinuierliches Monitoring neuer ESMA- und BaFin-Vorgaben zu MiFID'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Detaillierte Impact-Assessments und Gap-Analysen für regulatorische Änderungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung effizienter Implementierungsstrategien und Maßnahmenpläne'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration neuer Anforderungen in bestehende Compliance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung und Knowledge-Transfer zu neuen regulatorischen Anforderungen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und bewährten Ansatz für die kontinuierliche Anpassung Ihrer MiFID-Compliance an neue regulatorische Anforderungen, der proaktives Monitoring mit effizienter Implementation verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Kontinuierliches Monitoring und Frühidentifikation neuer ESMA- und BaFin-Vorgaben'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Detaillierte Analyse und Interpretation regulatorischer Änderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Institutsspezifische Impact-Assessments und Gap-Analysen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung maßgeschneiderter Implementierungsstrategien und Maßnahmenpläne'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Effiziente Implementation und Integration in bestehende Compliance-Strukturen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Sarah Müller',
        position: 'Senior Director Regulatory Affairs',
        quote: 'Die kontinuierliche Anpassung an neue MiFID-Vorgaben von ESMA und BaFin stellt für viele Institute eine erhebliche Herausforderung dar. Unser proaktiver Ansatz transformiert diese Herausforderung in einen strategischen Vorteil: Wir identifizieren regulatorische Änderungen frühzeitig, bewerten ihre spezifischen Auswirkungen präzise und implementieren notwendige Anpassungen effizient. Dies reduziert nicht nur Compliance-Risiken, sondern optimiert auch den Ressourceneinsatz und schafft nachhaltige Wettbewerbsvorteile durch regulatorische Exzellenz. Unsere Kunden profitieren von einem signifikanten Zeitvorsprung, reduzierten Implementierungskosten und einer höheren Qualität der regulatorischen Anpassung – entscheidende Faktoren in einem zunehmend komplexen MiFID-Umfeld.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Regulatory Change Monitoring & Impact Assessment',
          description: 'Wir überwachen kontinuierlich das regulatorische Umfeld, identifizieren relevante Änderungen frühzeitig und bewerten deren spezifische Auswirkungen auf Ihre Geschäftsmodelle, Prozesse und Systeme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematisches Monitoring von ESMA-Veröffentlichungen und BaFin-Rundschreiben'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Detaillierte Analyse und Interpretation regulatorischer Änderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Institutsspezifische Impact-Assessments und Handlungsempfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Priorisierung von Anpassungsmaßnahmen nach Dringlichkeit und Komplexität'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'MiFID Implementation & Integration',
          description: 'Wir entwickeln maßgeschneiderte Implementierungsstrategien für neue regulatorische Anforderungen und unterstützen Sie bei deren effizienter Integration in bestehende Compliance-Strukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung detaillierter Umsetzungsfahrpläne und Maßnahmenpläne'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Anpassung von Policies, Prozessen und Kontrollen an neue Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration neuer Vorgaben in bestehende Compliance-Management-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Schulung und Knowledge-Transfer zu neuen regulatorischen Anforderungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(mifidAdaptationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ MiFID Anpassung an neue ESMA/BaFin Vorgaben page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
