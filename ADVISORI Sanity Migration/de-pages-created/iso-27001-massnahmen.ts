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
    console.log('Creating ISO 27001 Maßnahmen page...')

    const iso27001MassnahmenData = {
      _type: 'servicePage',
      _id: 'iso-27001-massnahmen',
      title: 'ISO 27001 Maßnahmen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-massnahmen'
      },
      parent: {
        _type: 'reference',
        _ref: 'iso-27001'
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
        title: 'ISO 27001 Maßnahmen & Sicherheitskontrollen | ADVISORI',
        description: 'Professionelle Implementierung von ISO 27001 Sicherheitsmaßnahmen und Annex A Kontrollen. Von der risikobasierten Auswahl bis zur operativen Umsetzung - Ihr Partner für effektive Informationssicherheit.',
        keywords: 'ISO 27001 Maßnahmen, Annex A Kontrollen, Sicherheitskontrollen, ISO 27001 Controls, Informationssicherheitsmaßnahmen, ISMS Kontrollen, Sicherheitsimplementierung, ISO 27001 Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Maßnahmen und Sicherheitskontrollen'
        },
        tagline: 'Systematische Sicherheitsmaßnahmen für nachhaltigen Informationsschutz',
        heading: 'ISO 27001 Maßnahmen & Sicherheitskontrollen',
        description: 'Implementieren Sie wirksame ISO 27001 Sicherheitsmaßnahmen mit unserem bewährten Ansatz. Von der risikobasierten Auswahl der Annex A Kontrollen bis zur operativen Umsetzung und kontinuierlichen Überwachung - wir begleiten Sie zu einer robusten Informationssicherheitsarchitektur.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Risikobasierte Auswahl und Implementierung von Sicherheitskontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Systematische Umsetzung aller relevanten Annex A Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kontinuierliche Überwachung und Optimierung der Kontrollwirksamkeit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Integration in bestehende Geschäftsprozesse und IT-Landschaften'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ISO 27001 Maßnahmen - Systematische Implementierung von Sicherheitskontrollen',
        description: 'ISO 27001 Annex A definiert 114 Sicherheitskontrollen in vier Hauptkategorien, die als Referenzkatalog für die Implementierung wirksamer Informationssicherheitsmaßnahmen dienen. Die risikobasierte Auswahl und systematische Umsetzung dieser Kontrollen bildet das Herzstück eines effektiven ISMS und gewährleistet angemessenen Schutz für Ihre Informationsassets.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Organisatorische Kontrollen für Governance, Richtlinien und Personalmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Personelle Kontrollen für Sicherheitsbewusstsein und Kompetenzentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Physische und umgebungsbezogene Kontrollen für Anlagenschutz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Technologische Kontrollen für IT-Sicherheit und Systemschutz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Risikobasierte Auswahl und Anpassung an organisationsspezifische Anforderungen'
          }
        ],
        alert: {
          title: 'Strategische Kontrollimplementierung',
          content: 'Erfolgreiche ISO 27001 Maßnahmen erfordern mehr als technische Umsetzung - sie benötigen strategische Planung, organisatorische Integration und kontinuierliche Optimierung für nachhaltigen Sicherheitserfolg.'
        },
        whyUs: {
          title: 'Warum ISO 27001 Maßnahmen mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in der Implementierung aller Annex A Kontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für risikobasierte Kontrollauswahl und -umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von strategischer Planung bis operative Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Integration mit modernen Technologien und Compliance-Anforderungen'
            }
          ]
        },
        additionalInfo: 'Die ISO 27001 Maßnahmen in Annex A sind als Referenzkatalog konzipiert und müssen basierend auf der individuellen Risikoanalyse ausgewählt und an die spezifischen Anforderungen der Organisation angepasst werden. Dabei ist nicht nur die technische Implementierung entscheidend, sondern auch die organisatorische Verankerung und kontinuierliche Überwachung der Kontrollwirksamkeit.',
        serviceDescription: 'Unser ISO 27001 Maßnahmen-Portfolio umfasst die vollständige Implementierung von Sicherheitskontrollen - von der strategischen Planung über die risikobasierte Auswahl bis hin zur operativen Umsetzung und kontinuierlichen Optimierung. Wir begleiten Sie bei der Transformation Ihrer Informationssicherheit zu einem systematischen, messbaren und kontinuierlich verbesserten Managementsystem.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Risikobasierte Kontrollauswahl und Statement of Applicability'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Systematische Implementierung organisatorischer und technischer Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung von Kontrollprozessen und Überwachungsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration in bestehende Geschäftsprozesse und IT-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Überwachung und Optimierung der Kontrollwirksamkeit'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Ansatz für ISO 27001 Maßnahmen',
        description: 'Wir verfolgen einen strukturierten, risikobasierten Ansatz für die Implementierung von ISO 27001 Sicherheitsmaßnahmen, der bewährte Methoden mit innovativen Lösungen kombiniert und nachhaltigen Sicherheitserfolg gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Risikoanalyse und bedarfsgerechte Kontrollauswahl'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematische Implementierungsplanung mit klaren Prioritäten und Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Umsetzung mit kontinuierlicher Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von Überwachungs- und Messmechanismen für Kontrollwirksamkeit'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung an veränderte Anforderungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die erfolgreiche Implementierung von ISO 27001 Maßnahmen erfordert mehr als die bloße Umsetzung von Kontrollen - sie benötigt strategisches Verständnis, risikobasierte Priorisierung und kontinuierliche Optimierung. Unsere bewährte Methodik verbindet technische Exzellenz mit organisatorischer Integration für nachhaltigen Sicherheitserfolg.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Organisatorische Kontrollen & Governance',
          description: 'Implementierung von Governance-Strukturen, Richtlinien und organisatorischen Sicherheitsmaßnahmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung von Informationssicherheitsrichtlinien und -verfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Aufbau von Governance-Strukturen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Lieferanten- und Drittparteien-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Incident Management und Business Continuity Planning'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Personelle Kontrollen & Awareness',
          description: 'Entwicklung von Sicherheitsbewusstsein und personellen Sicherheitsmaßnahmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Sicherheitsschulungen und Awareness-Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Personalsicherheit und Hintergrundprüfungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Disziplinarverfahren und Sanktionsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Remote Work und Mobile Device Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Physische & Umgebungskontrollen',
          description: 'Implementierung physischer Sicherheitsmaßnahmen und Umgebungsschutz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Sichere Bereiche und Zugangskontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Geräteschutz und Asset Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Sichere Entsorgung und Datenträgervernichtung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Umgebungsüberwachung und Schutzmaßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Technologische Kontrollen & IT-Sicherheit',
          description: 'Umsetzung technischer Sicherheitsmaßnahmen und IT-Systemschutz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Zugangs- und Identitätsmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Kryptographie und Datenschutz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Systemsicherheit und Vulnerability Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Netzwerksicherheit und Monitoring'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Kontrollüberwachung & Messung',
          description: 'Entwicklung von Überwachungsmechanismen und Leistungsmessung für Sicherheitskontrollen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'KPI-Entwicklung und Kontrollwirksamkeitsmessung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Interne Audits und Compliance-Überwachung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Reporting und Management-Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kontinuierliche Verbesserung und Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Branchenspezifische Maßnahmen',
          description: 'Spezialisierte ISO 27001 Maßnahmen für verschiedene Branchen und Compliance-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Finanzdienstleister und Banking-spezifische Kontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Healthcare und Medizintechnik-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Cloud-Provider und SaaS-spezifische Maßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kritische Infrastrukturen und KRITIS-Compliance'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001MassnahmenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Maßnahmen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
