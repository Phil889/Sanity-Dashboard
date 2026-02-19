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
    console.log('Creating DSGVO Laufende Audits & Kontrollen page...')

    const dsgvoAuditsData = {
      _type: 'servicePage',
      _id: 'dsgvo-laufende-audits-kontrollen',
      title: 'DSGVO Laufende Audits & Kontrollen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dsgvo/dsgvo-ongoing-compliance/dsgvo-laufende-audits-kontrollen'
      },
      parent: {
        _type: 'reference',
        _ref: 'dsgvo-ongoing-compliance'
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
        title: 'DSGVO Laufende Audits & Kontrollen | ADVISORI',
        description: 'Gewährleisten Sie kontinuierliche DSGVO-Compliance mit professionellen Audits und Kontrollen. Regelmäßige Überprüfungen für nachhaltigen Datenschutz.',
        keywords: 'DSGVO Audits, Datenschutz Kontrollen, GDPR Compliance, Datenschutz Audit, Compliance Überwachung, Datenschutz Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DSGVO Laufende Audits & Kontrollen'
        },
        tagline: 'Kontinuierliche DSGVO-Compliance durch systematische Audits und Kontrollen',
        heading: 'DSGVO Laufende Audits & Kontrollen',
        description: 'Sichern Sie dauerhafte DSGVO-Compliance durch professionelle laufende Audits und systematische Kontrollen. Wir gewährleisten kontinuierliche Überwachung und Optimierung Ihrer Datenschutzprozesse.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Kontinuierliche Überwachung der DSGVO-Compliance-Status'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Frühzeitige Identifikation von Compliance-Lücken und Risiken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Systematische Verbesserung der Datenschutzprozesse'
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
        heading: 'DSGVO Laufende Audits & Kontrollen',
        description: 'Laufende Audits und systematische Kontrollen sind essentiell für die nachhaltige DSGVO-Compliance. Wir unterstützen Sie bei der kontinuierlichen Überwachung, Bewertung und Optimierung Ihrer Datenschutzmaßnahmen durch professionelle Audit- und Kontrollprozesse.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung systematischer Audit- und Kontrollprogramme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Regelmäßige Überprüfung der Datenschutzprozesse und -maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Kontinuierliche Bewertung der Wirksamkeit von Schutzmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Identifikation und Behebung von Compliance-Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Dokumentation und Berichterstattung für Aufsichtsbehörden'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Laufende Audits und Kontrollen sind nicht nur DSGVO-Anforderung, sondern strategisches Instrument zur kontinuierlichen Verbesserung Ihrer Datenschutzkultur und zur proaktiven Risikominimierung.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in DSGVO-Compliance und Audit-Methodiken'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Strukturierte und systematische Herangehensweise an Audits'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxisorientierte Lösungen für nachhaltige Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung und partnerschaftliche Zusammenarbeit'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit systematischen laufenden Audits reduzieren ihr DSGVO-Bußgeldrisiko um bis zu 80% und stärken gleichzeitig das Vertrauen ihrer Kunden und Partner in den verantwortungsvollen Umgang mit personenbezogenen Daten.',
        serviceDescription: 'Wir bieten Ihnen umfassende Dienstleistungen für laufende DSGVO-Audits und -Kontrollen, von der Entwicklung systematischer Audit-Programme bis zur kontinuierlichen Überwachung und Optimierung Ihrer Datenschutzprozesse.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Entwicklung individueller Audit- und Kontrollprogramme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Durchführung regelmäßiger DSGVO-Compliance-Audits'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Kontinuierliche Überwachung der Datenschutzmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Gap-Analysen und Maßnahmenempfehlungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Berichterstattung und Dokumentation für Compliance-Nachweis'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen ein systematisches und nachhaltiges Audit- und Kontrollsystem, das kontinuierliche DSGVO-Compliance gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse Ihrer aktuellen Datenschutzprozesse und -systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung individueller Audit- und Kontrollkonzepte'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung systematischer Überwachungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Regelmäßige Durchführung von Audits und Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung der Maßnahmen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die laufenden DSGVO-Audits und Kontrollen von ADVISORI haben uns geholfen, eine proaktive Datenschutzkultur zu etablieren. Durch die systematische Überwachung und kontinuierliche Optimierung sind wir stets compliance und können Risiken frühzeitig identifizieren und beheben.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Systematische Audit-Programme',
          description: 'Wir entwickeln und implementieren strukturierte Audit-Programme für kontinuierliche DSGVO-Compliance-Überwachung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung individueller Audit-Zyklen und -Methoden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Definition von Audit-Kriterien und Bewertungsmaßstäben'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Erstellung von Audit-Checklisten und Prüfungstools'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Schulung interner Audit-Teams'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Kontinuierliche Compliance-Kontrollen',
          description: 'Wir etablieren systematische Kontrollmechanismen für die laufende Überwachung der DSGVO-Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Implementierung automatisierter Kontrollsysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Regelmäßige Überprüfung kritischer Datenschutzprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Monitoring von Datenschutz-KPIs und Compliance-Indikatoren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Frühwarnsysteme für Compliance-Abweichungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(dsgvoAuditsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DSGVO Laufende Audits & Kontrollen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
