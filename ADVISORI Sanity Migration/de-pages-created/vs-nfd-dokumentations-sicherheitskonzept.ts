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
    console.log('Creating VS-NFD Dokumentations- & Sicherheitskonzept page...')

    const vsNfdDokumentationData = {
      _type: 'servicePage',
      _id: 'vs-nfd-dokumentations-sicherheitskonzept',
      title: 'VS-NFD Dokumentations- & Sicherheitskonzept',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/vs-nfd/vs-nfd-readiness/vs-nfd-dokumentations-sicherheitskonzept'
      },
      parent: {
        _type: 'reference',
        _ref: 'vs-nfd-readiness'
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
        title: 'VS-NFD Dokumentations- & Sicherheitskonzept | ADVISORI',
        description: 'Professionelle Entwicklung von Dokumentations- und Sicherheitskonzepten für VS-NFD-Meldungen. Wir unterstützen Sie bei der Erfüllung aller aufsichtsrechtlichen Anforderungen für nachhaltigen Compliance-Erfolg.',
        keywords: 'VS-NFD, Dokumentation, Sicherheitskonzept, Compliance, Bankenaufsicht, Meldewesen, Datenschutz, IT-Sicherheit'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'VS-NFD Dokumentations- & Sicherheitskonzept'
        },
        tagline: 'Robuste Dokumentation für sichere VS-NFD-Compliance',
        heading: 'VS-NFD Dokumentations- & Sicherheitskonzept',
        description: 'Eine umfassende Dokumentation und ein durchdachtes Sicherheitskonzept sind essentiell für erfolgreiche VS-NFD-Implementierung. Wir entwickeln mit Ihnen maßgeschneiderte Konzepte, die sowohl regulatorische Anforderungen erfüllen als auch operative Sicherheit gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Erfüllung aller VS-NFD-Dokumentationsanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Robuste IT-Sicherheitskonzepte für vertrauliche Meldedaten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Praxistaugliche Verfahrensdokumentation für nachhaltige Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Aktualisierung bei sich ändernden Anforderungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'VS-NFD Dokumentations- & Sicherheitskonzept',
        description: 'Die Entwicklung einer umfassenden Dokumentation und eines robusten Sicherheitskonzepts für VS-NFD-Meldungen erfordert tiefgreifende Expertise in regulatorischen Anforderungen und IT-Sicherheit. Eine professionelle Dokumentation schafft nicht nur Compliance-Sicherheit, sondern auch Transparenz und Nachvollziehbarkeit für alle Stakeholder.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung vollständiger Verfahrensdokumentation gemäß VS-NFD-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Design robuster IT-Sicherheitskonzepte für sensible Meldedaten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung von Datenschutz- und Vertraulichkeitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Erstellung von Notfall- und Kontinuitätsplänen für VS-NFD-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Etablierung von Versionskontrolle und Änderungsmanagement'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine erfolgreiche VS-NFD-Dokumentation zeichnet sich durch Vollständigkeit, Praxistauglichkeit und kontinuierliche Aktualität aus. Das Sicherheitskonzept muss dabei sowohl technische als auch organisatorische Maßnahmen umfassen, um umfassenden Schutz zu gewährleisten.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in regulatorischer Dokumentation und IT-Sicherheit'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Vorlagen und Methoden für VS-NFD-Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von der Konzeption bis zur Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Betreuung und Aktualisierung der Dokumentation'
            }
          ]
        },
        additionalInfo: 'Die Dokumentation und das Sicherheitskonzept für VS-NFD müssen nicht nur regulatorische Anforderungen erfüllen, sondern auch praktikabel und wartbar sein. Eine durchdachte Struktur erleichtert sowohl die Implementierung als auch künftige Anpassungen.',
        serviceDescription: 'Wir bieten umfassende Unterstützung bei der Entwicklung von Dokumentations- und Sicherheitskonzepten für VS-NFD-Meldungen. Unser Ansatz kombiniert regulatorische Compliance mit praktischer Umsetzbarkeit für nachhaltige Lösungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Vollständige Verfahrensdokumentation für alle VS-NFD-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung umfassender IT-Sicherheitskonzepte und Datenschutzmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Erstellung von Notfall- und Business Continuity-Plänen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementierung von Qualitätssicherungs- und Kontrollmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung der Mitarbeiter in der Anwendung der Dokumentation'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine umfassende Dokumentations- und Sicherheitsstrategie für VS-NFD-Meldungen, die sowohl regulatorische Anforderungen erfüllt als auch praktische Umsetzbarkeit gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der regulatorischen Anforderungen und bestehenden Dokumentationslandschaft'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer strukturierten Dokumentationsarchitektur und Sicherheitsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Erstellung detaillierter Verfahrensdokumentation und Sicherheitsrichtlinien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung und Schulung der Anwender in der praktischen Anwendung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Pflege und Aktualisierung der Dokumentation'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Eine durchdachte Dokumentation und ein robustes Sicherheitskonzept sind das Fundament erfolgreicher VS-NFD-Umsetzung. Mit unserer Expertise schaffen wir die Basis für nachhaltigen Compliance-Erfolg.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Vollständige Verfahrensdokumentation',
          description: 'Wir erstellen eine umfassende Dokumentation aller VS-NFD-relevanten Verfahren, die sowohl regulatorische Anforderungen erfüllt als auch praktische Anwendbarkeit gewährleistet.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strukturierte Dokumentation aller VS-NFD-Prozesse und Verfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Klare Beschreibung von Rollen, Verantwortlichkeiten und Arbeitsabläufen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Praxistaugliche Arbeitsanweisungen und Checklisten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Versionskontrolle und systematisches Änderungsmanagement'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'IT-Sicherheitskonzept und Datenschutz',
          description: 'Wir entwickeln robuste Sicherheitskonzepte für VS-NFD-Systeme und -Daten, die höchste Sicherheitsstandards erfüllen und gleichzeitig operative Effizienz ermöglichen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Umfassende IT-Sicherheitsarchitektur für VS-NFD-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Datenschutzkonzepte und Vertraulichkeitsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Notfall- und Business Continuity-Planung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Überwachung und Aktualisierung der Sicherheitsmaßnahmen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(vsNfdDokumentationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ VS-NFD Dokumentations- & Sicherheitskonzept page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
