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
    console.log('Creating ISO 27001 DSGVO Integration page...')

    const iso27001DsgvoData = {
      _type: 'servicePage',
      _id: 'iso-27001-dsgvo',
      title: 'ISO 27001 & DSGVO Integration',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-dsgvo'
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
        title: 'ISO 27001 & DSGVO Integration | Datenschutz & Informationssicherheit | ADVISORI',
        description: 'Professionelle Integration von ISO 27001 und DSGVO für ganzheitliche Compliance. Synergetische Umsetzung von Informationssicherheit und Datenschutz mit bewährten Methoden.',
        keywords: 'ISO 27001 DSGVO, Datenschutz Informationssicherheit, GDPR ISO 27001, Privacy by Design, DSFA, Technische organisatorische Maßnahmen, TOM, Compliance Integration'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 DSGVO Integration Datenschutz Informationssicherheit'
        },
        tagline: 'Synergetische Compliance für Datenschutz und Informationssicherheit',
        heading: 'ISO 27001 & DSGVO Integration',
        description: 'Maximieren Sie Ihre Compliance-Effizienz durch die strategische Integration von ISO 27001 und DSGVO. Unsere bewährte Methodik verbindet Informationssicherheitsmanagement mit Datenschutzanforderungen zu einem kohärenten, kosteneffizienten Managementsystem.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Synergetische Umsetzung von Datenschutz und Informationssicherheit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierte Compliance-Kosten durch integrierte Managementsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Privacy by Design und Security by Design in einem System'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Ganzheitliche Risikobewertung für Daten und Informationsassets'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ISO 27001 & DSGVO - Strategische Integration für maximale Compliance-Effizienz',
        description: 'Die Integration von ISO 27001 und DSGVO schafft ein leistungsstarkes, synergetisches Managementsystem, das sowohl Informationssicherheit als auch Datenschutz systematisch und kosteneffizient adressiert. Diese strategische Verbindung nutzt die natürlichen Überschneidungen beider Frameworks und eliminiert Redundanzen bei der Umsetzung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Harmonisierte Risikoanalyse für Informationssicherheit und Datenschutz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Integrierte technische und organisatorische Maßnahmen nach beiden Standards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Einheitliche Dokumentation und Prozesslandschaft für beide Compliance-Bereiche'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Optimierte Audit-Zyklen und Zertifizierungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Privacy by Design als integraler Bestandteil des ISMS'
          }
        ],
        alert: {
          title: 'Compliance-Synergie nutzen',
          content: 'Die strategische Integration von ISO 27001 und DSGVO reduziert Implementierungsaufwand um bis zu vierzig Prozent und schafft ein robustes, zukunftsfähiges Compliance-Framework.'
        },
        whyUs: {
          title: 'Warum ISO 27001 & DSGVO Integration mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Expertise in der synergetischen Umsetzung beider Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Integrationsmethoden für maximale Effizienz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von rechtlicher Compliance bis technischer Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung bei sich ändernden Anforderungen'
            }
          ]
        },
        additionalInfo: 'Die Integration von ISO 27001 und DSGVO basiert auf der Erkenntnis, dass beide Standards komplementäre Ziele verfolgen: den Schutz von Informationen und personenbezogenen Daten. Während ISO 27001 einen systematischen Ansatz für Informationssicherheit bietet, definiert die DSGVO spezifische Anforderungen für den Schutz personenbezogener Daten. Die strategische Verbindung beider Frameworks schafft Synergien und reduziert den Implementierungsaufwand erheblich.',
        serviceDescription: 'Unser integrierter ISO 27001 & DSGVO Service kombiniert bewährte Methoden aus beiden Compliance-Bereichen zu einem kohärenten Managementsystem. Wir begleiten Sie von der strategischen Planung über die operative Umsetzung bis hin zur Zertifizierung und kontinuierlichen Optimierung Ihres integrierten Compliance-Systems.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Integrierte Gap-Analyse und Compliance-Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Harmonisierte Risikobewertung und Datenschutz-Folgenabschätzung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Einheitliche TOM-Implementierung für beide Standards'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integrierte Audit-Vorbereitung und Zertifizierungsbegleitung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Compliance-Optimierung und Anpassung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Integrationsansatz für ISO 27001 & DSGVO',
        description: 'Wir verfolgen einen strukturierten, phasenorientierten Ansatz, der die natürlichen Synergien zwischen ISO 27001 und DSGVO optimal nutzt und ein integriertes, effizientes Compliance-System schafft.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Analyse der Überschneidungen und Synergiepotentiale beider Standards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Integrierte Gap-Analyse und Entwicklung einer harmonisierten Compliance-Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Systematische Implementierung mit einheitlichen Prozessen und Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Koordinierte Zertifizierungsvorbereitung für beide Standards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung des integrierten Managementsystems'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die strategische Integration von ISO 27001 und DSGVO ist ein Paradigmenwechsel in der Compliance-Umsetzung. Unsere bewährte Integrationsmethodik schafft nicht nur Kosteneffizienz, sondern auch ein robustes, zukunftsfähiges Framework für ganzheitlichen Daten- und Informationsschutz.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Integrierte Compliance-Strategie',
          description: 'Strategische Planung und Konzeption für die synergetische Umsetzung von ISO 27001 und DSGVO.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strategische Analyse der Compliance-Anforderungen und Synergiepotentiale'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Integrierte Gap-Analyse und Readiness-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Harmonisierte Compliance-Roadmap und Implementierungsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Kosten-Nutzen-Analyse der Integrationsstrategie'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Harmonisierte Risikobewertung',
          description: 'Integrierte Risikoanalyse für Informationssicherheit und Datenschutz mit einheitlicher Methodik.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Einheitliche Risikobewertung für ISMS und Datenschutz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integrierte Datenschutz-Folgenabschätzung und Risikoanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Harmonisierte Risikomanagement-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Risikobewertung und -überwachung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'TOM-Integration & Privacy by Design',
          description: 'Implementierung technischer und organisatorischer Maßnahmen für beide Standards mit Privacy by Design Prinzipien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Integrierte TOM-Implementierung für ISO 27001 und DSGVO'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Privacy by Design und Security by Design Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Harmonisierte Kontrollmaßnahmen und Sicherheitskontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Datenschutzfreundliche Systemarchitektur'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Integrierte Dokumentation & Prozesse',
          description: 'Einheitliche Dokumentationsstruktur und Prozesslandschaft für beide Compliance-Bereiche.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Harmonisierte Dokumentationsstruktur und Richtlinien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Integrierte Prozesslandschaft für ISMS und Datenschutz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Einheitliche Verfahrensverzeichnisse und Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Kontinuierliche Dokumentationspflege und -aktualisierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Koordinierte Audit & Zertifizierung',
          description: 'Optimierte Audit-Zyklen und Zertifizierungsprozesse für beide Standards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Koordinierte Audit-Planung und Zertifizierungsstrategie'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Integrierte interne Audit-Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Optimierte externe Audit-Begleitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kontinuierliche Compliance-Überwachung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Kontinuierliche Compliance-Optimierung',
          description: 'Laufende Betreuung und Optimierung des integrierten Compliance-Systems.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Kontinuierliche Überwachung regulatorischer Entwicklungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Regelmäßige Compliance-Reviews und Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Anpassung an neue Anforderungen und Technologien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Schulungen und Kompetenzentwicklung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001DsgvoData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 DSGVO Integration page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
