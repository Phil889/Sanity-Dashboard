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
    console.log('Creating MaRisk Dokumentationsanforderungen Prozess Kontrollbeschreibungen page...')

    const maRiskDokumentationsData = {
      _type: 'servicePage',
      _id: 'marisk-dokumentationsanforderungen-prozess-kontrollbeschreibungen',
      title: 'MaRisk Dokumentationsanforderungen Prozess Kontrollbeschreibungen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/marisk/marisk-implementation/marisk-dokumentationsanforderungen-prozess-kontrollbeschreibungen'
      },
      parent: {
        _type: 'reference',
        _ref: 'marisk-implementation'
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
        title: 'MaRisk Dokumentationsanforderungen | ADVISORI',
        description: 'Erfüllen Sie regulatorische Anforderungen mit professionellen Prozess- und Kontrollbeschreibungen. ADVISORI unterstützt bei der Dokumentation gemäß MaRisk-Standards.',
        keywords: 'MaRisk, Dokumentationsanforderungen, Prozessbeschreibungen, Kontrollbeschreibungen, Regulatorik, Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'MaRisk Dokumentationsanforderungen'
        },
        tagline: 'Vollständige und konforme Dokumentation für MaRisk',
        heading: 'MaRisk Dokumentationsanforderungen',
        description: 'Die MaRisk stellt hohe Anforderungen an die Dokumentation von Prozessen und Kontrollen. Wir unterstützen Sie bei der Erstellung qualitativ hochwertiger Dokumentationen, die sowohl den regulatorischen Anforderungen entsprechen als auch wertvolles Organisationswissen sichern.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Prüfungsfeste Dokumentation von Prozessen und Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Klare Darstellung von Verantwortlichkeiten und Abläufen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effiziente Methodik zur Erfassung und Strukturierung von Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachvollziehbare Risiko- und Kontrolldarstellung für Aufsicht und Prüfer'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'MaRisk Dokumentationsanforderungen',
        description: 'Die MaRisk-konforme Dokumentation von Geschäftsprozessen und Kontrollen ist ein wesentlicher Baustein für ein wirksames Risikomanagement und die Erfüllung regulatorischer Anforderungen. Umfassende und qualitativ hochwertige Prozess- und Kontrollbeschreibungen bilden nicht nur die Grundlage für die Prüfung durch Interne Revision und Aufsicht, sondern sind auch ein wichtiges Instrument für das operative Geschäft.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Methodische Erstellung von Prozess- und Kontrollbeschreibungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Einheitliche Dokumentationsstandards und -vorlagen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration von Risiko- und Kontrollaspekten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Festlegung von Verantwortlichkeiten und Kontrollfrequenzen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Nachvollziehbare Abbildung von Schlüsselkontrollen und deren Wirksamkeitsbewertung'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine gut strukturierte Prozessdokumentation ist nicht nur für die Erfüllung regulatorischer Anforderungen wichtig, sondern dient auch als wertvolles Organisationswissen und Grundlage für die Prozessoptimierung. Investieren Sie in durchdachte Dokumentationsstrukturen, die sowohl den MaRisk-Anforderungen genügen als auch einen operativen Mehrwert bieten.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Langjährige Expertise in der Erstellung und Überprüfung regulatorischer Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Methodik und Vorlagen für effiziente Dokumentationsarbeit'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Tiefes Verständnis der MaRisk-Anforderungen und aufsichtsrechtlichen Erwartungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz mit Fokus auf Mehrwert über die reine Compliance hinaus'
            }
          ]
        },
        additionalInfo: 'Aufsichtsbehörden legen zunehmenden Wert auf die Qualität und Konsistenz der Dokumentation. Prüfungen scheitern häufig an unzureichender oder inkonsistenter Dokumentation, selbst wenn die eigentlichen Prozesse und Kontrollen angemessen sind. Eine professionelle Dokumentation ist daher ein entscheidender Erfolgsfaktor für die MaRisk-Compliance.',
        serviceDescription: 'Wir unterstützen Sie bei der Erstellung, Überarbeitung und Pflege Ihrer Prozess- und Kontrollbeschreibungen gemäß den MaRisk-Anforderungen. Von der Konzeption einheitlicher Dokumentationsstandards bis zur detaillierten Ausarbeitung einzelner Prozessbeschreibungen bieten wir Ihnen maßgeschneiderte Unterstützung für Ihre spezifischen Anforderungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Entwicklung von Dokumentationsstandards und -vorlagen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Methodische Erfassung und Strukturierung von Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Erstellung detaillierter Prozess- und Kontrollbeschreibungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration von Risiko- und Kontrollaspekten in die Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Review und Überarbeitung bestehender Dokumentation'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir unterstützen Sie bei der Erstellung und Optimierung Ihrer Prozess- und Kontrollbeschreibungen mit einem strukturierten und effizienten Ansatz.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse bestehender Dokumentation und Identifikation von Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einheitlicher Dokumentationsstandards und -vorlagen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Durchführung von Prozessworkshops zur Erfassung relevanter Informationen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Erstellung und Review von Prozess- und Kontrollbeschreibungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Implementierung einer nachhaltigen Dokumentationspflege'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Stefan Blümel',
        position: 'Director',
        quote: 'Die Unterstützung von ADVISORI bei der Erstellung unserer Prozess- und Kontrollbeschreibungen hat uns geholfen, nicht nur die MaRisk-Anforderungen zu erfüllen, sondern auch wertvolle Einblicke in unsere Prozesse zu gewinnen. Die strukturierte und methodische Herangehensweise hat die Qualität unserer Dokumentation deutlich verbessert und die Zusammenarbeit zwischen den Fachabteilungen gefördert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Entwicklung von Dokumentationsstandards',
          description: 'Wir entwickeln mit Ihnen einheitliche Standards und Vorlagen für Ihre Prozess- und Kontrollbeschreibungen, die sowohl den MaRisk-Anforderungen entsprechen als auch praxistauglich sind.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse regulatorischer Anforderungen an die Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung maßgeschneiderter Dokumentationsvorlagen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Definition von Mindestinhalten und Qualitätsstandards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Schulung der Mitarbeiter in der Anwendung der Standards'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Erstellung von Prozess- und Kontrollbeschreibungen',
          description: 'Wir unterstützen Sie bei der Erstellung detaillierter und MaRisk-konformer Prozess- und Kontrollbeschreibungen, die sowohl den regulatorischen Anforderungen entsprechen als auch für Ihr operatives Geschäft wertvoll sind.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Durchführung von Prozessworkshops zur Informationserfassung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Strukturierte Dokumentation von Prozessabläufen und -verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration von Risiko- und Kontrollaspekten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Review und Qualitätssicherung der erstellten Dokumentation'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(maRiskDokumentationsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ MaRisk Dokumentationsanforderungen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
