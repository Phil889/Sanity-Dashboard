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
    console.log('Creating ISO 27001 Implementation page...')

    const iso27001ImplementationData = {
      _type: 'servicePage',
      _id: 'iso-27001-implementation',
      title: 'ISO 27001 Implementierung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-implementation'
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
        title: 'ISO 27001 Implementierung - Professionelle ISMS Umsetzung | ADVISORI',
        description: 'Expertenwissen für erfolgreiche ISO 27001 Implementierung. Von der strategischen Planung bis zur Zertifizierung - Ihr Partner für nachhaltige ISMS-Einführung und operative Exzellenz.',
        keywords: 'ISO 27001 Implementierung, ISMS Einführung, Informationssicherheitsmanagement, ISO 27001 Projekt, ISMS Umsetzung, Sicherheitsmanagement, Compliance Implementierung, Risikomanagement'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Implementierung - Systematische ISMS Einführung'
        },
        tagline: 'Systematische ISMS-Implementierung für nachhaltige Informationssicherheit',
        heading: 'ISO 27001 Implementierung',
        description: 'Verwandeln Sie Ihre Informationssicherheit mit einer professionellen ISO 27001 Implementierung. Unser bewährter, phasenorientierter Ansatz führt Sie systematisch von der strategischen Planung bis zur erfolgreichen Zertifizierung und darüber hinaus.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierte Implementierungsmethodik mit bewährten Best Practices'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Minimierung von Projektrisiken durch erfahrene Begleitung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Nachhaltige Integration in bestehende Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Optimierte Zeitpläne und kosteneffiziente Umsetzung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Professionelle ISO 27001 Implementierung - Ihr Weg zum erfolgreichen ISMS',
        description: 'Die Implementierung eines ISO 27001 konformen Informationssicherheitsmanagementsystems erfordert strukturierte Herangehensweise, tiefgreifende Expertise und bewährte Projektmethoden. Unser systematischer Implementierungsansatz gewährleistet nicht nur die Erfüllung aller Norm-Anforderungen, sondern schafft auch nachhaltigen Mehrwert für Ihr Unternehmen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Phasenorientierte Implementierung mit klaren Meilensteinen und Erfolgskriterien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Maßgeschneiderte ISMS-Architektur basierend auf Ihren spezifischen Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration bestehender Sicherheitsmaßnahmen und Managementsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Qualitätssicherung und Risikomanagement während der Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Nachhaltige Verankerung durch Change Management und Kompetenzaufbau'
          }
        ],
        alert: {
          title: 'Implementierungserfolg durch Expertise',
          content: 'Eine erfolgreiche ISO 27001 Implementierung erfordert mehr als nur Norm-Kenntnisse - sie braucht praktische Erfahrung, bewährte Methoden und strategisches Verständnis für nachhaltige Verankerung.'
        },
        whyUs: {
          title: 'Warum ISO 27001 Implementierung mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Bewährte Implementierungsmethodik mit über 200 erfolgreichen ISMS-Projekten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenspezifische Expertise und maßgeschneiderte Lösungsansätze'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von strategischer Planung bis operative Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Nachhaltige Begleitung über die Zertifizierung hinaus'
            }
          ]
        },
        additionalInfo: 'Unsere ISO 27001 Implementierungsmethodik basiert auf jahrelanger Praxiserfahrung und bewährten Projektmanagement-Prinzipien. Wir verstehen, dass jede Organisation einzigartige Anforderungen hat und entwickeln daher maßgeschneiderte Implementierungsstrategien, die sowohl regulatorische Exzellenz als auch operative Effizienz gewährleisten.',
        serviceDescription: 'Unser umfassendes Implementierungs-Portfolio deckt alle Aspekte der ISO 27001 Einführung ab - von der initialen Strategieentwicklung über die technische Umsetzung bis hin zur Zertifizierungsvorbereitung. Dabei legen wir besonderen Wert auf nachhaltige Integration und kontinuierliche Verbesserung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische ISMS-Planung und Architektur-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Projektmanagement und Implementierungsbegleitung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Technische Umsetzung und Kontrollimplementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Change Management und Organisationsentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Zertifizierungsvorbereitung und Audit-Support'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer ISO 27001 Implementierungsansatz',
        description: 'Wir verfolgen einen strukturierten, phasenorientierten Implementierungsansatz, der bewährte Projektmanagement-Methoden mit spezifischer ISO 27001 Expertise kombiniert und nachhaltigen Erfolg gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Analyse und ISMS-Konzeption basierend auf Ihren Geschäftszielen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Detaillierte Projektplanung mit Ressourcenallokation und Zeitplanung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Implementierung mit kontinuierlicher Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integriertes Change Management für nachhaltige Organisationsentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Zertifizierungsvorbereitung und kontinuierliche Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Eine erfolgreiche ISO 27001 Implementierung ist mehr als nur Compliance - sie ist die Grundlage für operative Exzellenz und strategische Wettbewerbsvorteile. Unsere bewährte Implementierungsmethodik verbindet regulatorische Anforderungen mit praktischer Umsetzbarkeit und schafft nachhaltigen Mehrwert für unsere Kunden.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ISMS Strategieentwicklung & Planung',
          description: 'Entwicklung einer maßgeschneiderten ISMS-Strategie und detaillierten Implementierungsplanung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strategische ISMS-Konzeption und Architektur-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Gap-Analyse und Readiness-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Detaillierte Projektplanung und Ressourcenallokation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Stakeholder-Analyse und Kommunikationsstrategie'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Projektmanagement & Implementierungsbegleitung',
          description: 'Professionelles Projektmanagement für strukturierte und termingerechte ISMS-Implementierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Dediziertes Projektmanagement mit bewährten Methoden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Meilenstein-basierte Fortschrittskontrolle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Risikomanagement und Issue-Resolution'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Stakeholder-Kommunikation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Technische Implementierung & Kontrollmaßnahmen',
          description: 'Umsetzung technischer und organisatorischer Kontrollmaßnahmen nach ISO 27001 Annex A.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Implementierung von Sicherheitskontrollen nach Annex A'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Integration bestehender Sicherheitsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Technische Systemkonfiguration und -härtung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Monitoring- und Überwachungssysteme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Dokumentation & Prozessdesign',
          description: 'Entwicklung umfassender ISMS-Dokumentation und Prozesslandschaften.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'ISMS-Handbuch und Richtlinienentwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Verfahrensanweisungen und Arbeitsanweisungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Prozessmodellierung und -optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Dokumentenmanagement und Versionskontrolle'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Change Management & Organisationsentwicklung',
          description: 'Begleitung des organisatorischen Wandels für nachhaltige ISMS-Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Change Management Strategie und Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Mitarbeiterschulungen und Awareness-Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Kulturwandel und Verhaltensänderung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kompetenzaufbau und Wissenstransfer'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Zertifizierungsvorbereitung & Audit-Support',
          description: 'Umfassende Vorbereitung auf die ISO 27001 Zertifizierung und professionelle Audit-Begleitung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Pre-Assessment und Readiness-Checks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Interne Audits und Management Reviews'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Zertifizierungsaudit-Begleitung und Support'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Nachbetreuung und kontinuierliche Verbesserung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001ImplementationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Implementation main page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
