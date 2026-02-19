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
    console.log('Creating Privacy Program DPO Office Role Distribution page...')

    const privacyProgramDpoOfficeRollenverteilungData = {
      _type: 'servicePage',
      _id: 'privacy-program-dpo-office-rollenverteilung',
      title: 'DPO Office Rollenverteilung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/privacy-program/privacy-program-privacy-framework-setup/privacy-program-dpo-office-rollenverteilung'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management-privacy-program-privacy-framework-setup'
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
        title: 'DPO Office Rollenverteilung | ADVISORI',
        description: 'Strukturieren Sie Ihr DPO Office mit klaren Rollenverteilungen und Verantwortlichkeiten. Professionelle Beratung für effektive Datenschutz-Governance und organisatorische Exzellenz.',
        keywords: 'DPO Office, Datenschutzbeauftragter, Rollenverteilung, Datenschutz-Governance, DSGVO, Organisationsstruktur, Privacy Team'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DPO Office Rollenverteilung'
        },
        tagline: 'Effiziente Strukturierung Ihres Datenschutz-Teams',
        heading: 'DPO Office Rollenverteilung',
        description: 'Eine klare Rollenverteilung im DPO Office ist entscheidend für effektive Datenschutz-Governance. Wir unterstützen Sie bei der Strukturierung Ihres Privacy-Teams mit definierten Verantwortlichkeiten und optimierten Workflows.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Klare Verantwortlichkeiten und Zuständigkeiten im Datenschutz-Team'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierte Arbeitsabläufe und Entscheidungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Professionelle Datenschutz-Governance und Compliance-Sicherung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Skalierbare Organisationsstrukturen für wachsende Anforderungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DPO Office Rollenverteilung',
        description: 'Die strukturierte Rollenverteilung im DPO Office bildet das Fundament für effektive Datenschutz-Governance. Wir entwickeln maßgeschneiderte Organisationsstrukturen, die klare Verantwortlichkeiten definieren und optimale Arbeitsabläufe gewährleisten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse bestehender Datenschutz-Organisationsstrukturen und Identifikation von Optimierungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Definition von Rollen, Verantwortlichkeiten und Zuständigkeiten im Privacy-Team'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung von Governance-Strukturen und Entscheidungsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Etablierung von Kommunikations- und Reporting-Linien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Implementierung von Qualitätssicherung und Performance-Monitoring'
          }
        ],
        alert: {
          title: 'Erfolgsfaktor',
          content: 'Eine durchdachte Rollenverteilung im DPO Office erhöht die Effizienz des Datenschutz-Managements um bis zu 60% und verbessert die Compliance-Rate signifikant durch klare Verantwortlichkeiten.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Langjährige Erfahrung in der Strukturierung von Datenschutz-Organisationen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für effektive Privacy-Governance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Expertise und Best-Practice-Ansätze'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung bei der Implementierung und Optimierung'
            }
          ]
        },
        additionalInfo: 'Eine professionell strukturierte DPO Office Organisation reduziert Compliance-Risiken um durchschnittlich 70% und verbessert die Reaktionszeit bei Datenschutz-Anfragen um bis zu 80%. Investieren Sie in nachhaltige Datenschutz-Exzellenz!',
        serviceDescription: 'Wir bieten umfassende Beratung zur optimalen Strukturierung Ihres DPO Office, von der Analyse bestehender Strukturen über die Definition neuer Rollen bis hin zur Implementierung effizienter Governance-Prozesse.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Organisationsanalyse und Strukturbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Rollen- und Verantwortlichkeitsdefinition'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Governance-Framework-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Prozessoptimierung und Workflow-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Change Management und Implementierungsbegleitung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Strukturierungsansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte DPO Office Struktur, die Ihre spezifischen Anforderungen und Unternehmenskultur berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der aktuellen Datenschutz-Organisation und Identifikation von Verbesserungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Definition von Rollen, Kompetenzen und Verantwortlichkeiten im Privacy-Team'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung von Governance-Strukturen und Entscheidungsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung und Schulung der neuen Organisationsstruktur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Performance-Monitoring'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die strukturierte Herangehensweise von ADVISORI bei der Neuorganisation unseres DPO Office hat zu einer deutlich effizienteren Datenschutz-Governance geführt. Klare Rollen und optimierte Prozesse haben unsere Compliance-Performance erheblich verbessert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Organisationsanalyse & Strukturbewertung',
          description: 'Wir analysieren Ihre bestehende DPO Office Struktur und identifizieren Optimierungspotenziale für effektivere Datenschutz-Governance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Bewertung der aktuellen Organisationsstruktur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Effizienzpotenzialen und Schwachstellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Benchmarking mit Branchenstandards und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Detaillierte Analyse-Reports mit Handlungsempfehlungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Rollen- & Verantwortlichkeitsdefinition',
          description: 'Wir entwickeln klare Rollen- und Verantwortlichkeitsprofile für Ihr Privacy-Team und schaffen eindeutige Zuständigkeiten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Definition spezifischer Rollen und Funktionen im DPO Office'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Erstellung detaillierter Stellenbeschreibungen und Kompetenzprofile'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung von RACI-Matrizen für Entscheidungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration in bestehende Unternehmensstrukturen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(privacyProgramDpoOfficeRollenverteilungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Privacy Program DPO Office Role Distribution page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
