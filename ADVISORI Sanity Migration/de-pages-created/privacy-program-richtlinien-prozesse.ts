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
    console.log('Creating Privacy Program Richtlinien & Prozesse page...')

    const privacyProgramRichtlinienProzesseData = {
      _type: 'servicePage',
      _id: 'privacy-program-richtlinien-prozesse',
      title: 'Privacy Program Richtlinien & Prozesse',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/privacy-program/privacy-program-privacy-framework-setup/privacy-program-richtlinien-prozesse'
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
        title: 'Privacy Program Richtlinien & Prozesse | ADVISORI',
        description: 'Entwicklung und Implementierung umfassender Datenschutz-Richtlinien und -Prozesse für Ihr Privacy Program. Strukturierte Herangehensweise für DSGVO-Compliance und Datenschutz-Governance.',
        keywords: 'Privacy Program, Datenschutz-Richtlinien, Datenschutz-Prozesse, DSGVO, Data Protection, Compliance, Governance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Privacy Program Richtlinien & Prozesse'
        },
        tagline: 'Strukturierte Datenschutz-Governance durch professionelle Richtlinien und Prozesse',
        heading: 'Privacy Program Richtlinien & Prozesse',
        description: 'Etablieren Sie ein robustes Fundament für Ihr Datenschutzmanagement durch die Entwicklung und Implementierung strukturierter Richtlinien und Prozesse, die DSGVO-Compliance sicherstellen und Datenschutz-Risiken minimieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Entwicklung von Datenschutz-Richtlinien und -Verfahren'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Sicherstellung der DSGVO-Konformität durch strukturierte Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Klare Governance-Strukturen und Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Operative Exzellenz im Datenschutzmanagement'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Privacy Program Richtlinien & Prozesse',
        description: 'Die Entwicklung strukturierter Datenschutz-Richtlinien und -Prozesse bildet das Rückgrat eines erfolgreichen Privacy Programs. Wir unterstützen Sie bei der Erstellung umfassender Governance-Strukturen, die nicht nur regulatorische Anforderungen erfüllen, sondern auch praktikabel und nachhaltig implementierbar sind.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung einer umfassenden Datenschutz-Policy-Architektur'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Definition klarer Datenschutz-Prozesse und Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung von Governance-Mechanismen und Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Etablierung von Monitoring- und Review-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration in bestehende Unternehmensprozesse und -strukturen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Effektive Datenschutz-Richtlinien und -Prozesse müssen sowohl regulatorische Anforderungen erfüllen als auch praktisch umsetzbar sein. Eine zu komplexe Struktur führt oft zu mangelnder Akzeptanz und Compliance-Problemen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in DSGVO-Compliance und Datenschutz-Governance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für die Entwicklung praktischer und nachhaltiger Richtlinien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Erfahrung in der Integration von Datenschutzprozessen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praxisorientierte Beratung mit Fokus auf Umsetzbarkeit'
            }
          ]
        },
        additionalInfo: 'Studien zeigen, dass Unternehmen mit strukturierten Datenschutz-Richtlinien und -Prozessen bis zu 60% weniger Datenschutzvorfälle verzeichnen und Compliance-Audits deutlich erfolgreicher bestehen.',
        serviceDescription: 'Unser umfassendes Leistungsspektrum deckt die Entwicklung, Implementierung und kontinuierliche Verbesserung von Datenschutz-Richtlinien und -Prozessen ab. Von der strategischen Planung bis zur operativen Umsetzung begleiten wir Sie bei allen Aspekten der Datenschutz-Governance.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Entwicklung einer Datenschutz-Policy-Architektur'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Definition von Datenschutz-Prozessen und -Verfahren'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung von Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Etablierung von Monitoring- und Kontrollmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung und Change Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine maßgeschneiderte Datenschutz-Governance-Struktur, die sowohl regulatorische Anforderungen erfüllt als auch praktisch umsetzbar ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse bestehender Strukturen und Identifikation von Governance-Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer umfassenden Policy-Architektur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Design praktischer und nachhaltiger Datenschutz-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung und Integration in bestehende Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung von Monitoring und kontinuierlicher Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir ein strukturiertes und nachhaltiges Datenschutz-Governance-System implementiert, das nicht nur regulatorische Anforderungen erfüllt, sondern auch praktisch umsetzbar ist. Die professionelle Herangehensweise und die umfassende Expertise haben zu einer deutlichen Verbesserung unserer Datenschutz-Compliance geführt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Datenschutz-Policy-Architektur',
          description: 'Entwicklung einer umfassenden und strukturierten Datenschutz-Policy-Landschaft, die alle relevanten Bereiche abdeckt.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse regulatorischer Anforderungen und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung einer hierarchischen Policy-Struktur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Definition von Standards und Verfahrensdokumenten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration mit bestehenden Unternehmensrichtlinien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Datenschutz-Prozessdesign',
          description: 'Gestaltung effektiver und praktikable Datenschutz-Prozesse, die operative Exzellenz und Compliance sicherstellen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Mapping von Datenschutz-Kernprozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Definition von Rollen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung von Workflow-Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Implementierung von Kontroll- und Überwachungsmechanismen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(privacyProgramRichtlinienProzesseData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Privacy Program Richtlinien & Prozesse page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
