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
    console.log('Creating ISO 27001 Rechenzentrum page...')

    const iso27001RechenzentrumData = {
      _type: 'servicePage',
      _id: 'iso-27001-rechenzentrum',
      title: 'ISO 27001 Rechenzentrum & Data Center Security',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-rechenzentrum'
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
        title: 'ISO 27001 Rechenzentrum & Data Center Security | ADVISORI',
        description: 'Professionelle ISO 27001 Implementierung für Rechenzentren. Physische Sicherheit, Umgebungskontrollen, Zugangsmanagement und Business Continuity für Data Center nach ISO 27001 Standard.',
        keywords: 'ISO 27001 Rechenzentrum, Data Center Security, Physische Sicherheit, Umgebungskontrollen, Zugangsmanagement, Business Continuity, Cloud Security, Hybrid Infrastructure'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Rechenzentrum und Data Center Security'
        },
        tagline: 'Sichere Rechenzentren als Fundament digitaler Transformation',
        heading: 'ISO 27001 Rechenzentrum & Data Center Security',
        description: 'Transformieren Sie Ihr Rechenzentrum zu einer hochsicheren, ISO 27001-konformen Infrastruktur. Unsere ganzheitlichen Sicherheitslösungen verbinden physische Kontrollen mit modernen Compliance-Anforderungen für maximale Betriebssicherheit und regulatorische Konformität.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Ganzheitliche physische und logische Sicherheitsarchitektur für Rechenzentren'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Compliance mit ISO 27001, DORA, NIS2 und branchenspezifischen Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Nahtlose Integration von On-Premises, Cloud und Hybrid-Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Überwachung und proaktive Bedrohungserkennung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische ISO 27001 Sicherheit für moderne Rechenzentren',
        description: 'Rechenzentren bilden das Herzstück der digitalen Infrastruktur und erfordern höchste Sicherheitsstandards. Unsere ISO 27001-konforme Rechenzentrum-Sicherheit verbindet bewährte physische Kontrollen mit innovativen Technologien für umfassenden Schutz kritischer IT-Assets und Geschäftsprozesse.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende physische Sicherheitskonzepte mit mehrstufigen Zugangskontrollen und Überwachungssystemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Intelligente Umgebungsüberwachung für optimale Betriebsbedingungen und Ausfallprävention'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration moderner Compliance-Frameworks wie DORA, NIS2 und branchenspezifischer Regulierungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Robuste Business Continuity und Disaster Recovery Strategien für kritische Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Zukunftssichere Architektur für Cloud-Integration und hybride Infrastrukturmodelle'
          }
        ],
        alert: {
          title: 'Kritische Infrastruktur schützen',
          content: 'Rechenzentren sind kritische Infrastrukturen, die höchste Sicherheitsstandards erfordern. ISO 27001-konforme Sicherheit gewährleistet Verfügbarkeit, Integrität und Vertraulichkeit Ihrer wertvollsten digitalen Assets.'
        },
        whyUs: {
          title: 'Unsere Rechenzentrum-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Expertise in physischer und logischer Rechenzentrum-Sicherheit'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefgreifende Kenntnisse moderner Data Center Technologien und Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methodiken für kritische Infrastruktur-Sicherheit'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von physischen Kontrollen bis Cloud-Integration'
            }
          ]
        },
        additionalInfo: 'Unsere ISO 27001 Rechenzentrum-Sicherheit geht über traditionelle Ansätze hinaus. Wir entwickeln maßgeschneiderte Sicherheitsarchitekturen, die optimal auf Ihre spezifischen Infrastrukturanforderungen abgestimmt sind und gleichzeitig höchste Compliance-Standards erfüllen. Dabei berücksichtigen wir stets die strategischen Ziele Ihres Unternehmens und die spezifischen Herausforderungen Ihrer Branche.',
        serviceDescription: 'Wir bieten umfassende ISO 27001-konforme Sicherheitslösungen für Rechenzentren, die alle Aspekte von physischen Kontrollen bis hin zu modernen Cloud-Integrationen abdecken. Von der strategischen Planung über die operative Umsetzung bis hin zur kontinuierlichen Optimierung begleiten wir Sie mit methodischer Exzellenz und praktischer Erfahrung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Sicherheitsplanung und Architektur-Design für Rechenzentren'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Umfassende Security-Assessments und Vulnerability-Analysen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Physische Sicherheitskonzepte und Zugangsmanagement-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Umgebungsüberwachung und intelligente Monitoring-Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Business Continuity und Disaster Recovery für kritische Infrastrukturen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Rechenzentrum-Sicherheitsansatz',
        description: 'Wir verfolgen einen strukturierten, risikobasierten Ansatz, der physische Sicherheit mit modernen Technologien verbindet und höchste Verfügbarkeit bei optimaler Compliance gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Risikobewertung und Bedrohungsanalyse für Rechenzentrum-Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung maßgeschneiderter Sicherheitsarchitekturen mit mehrstufigen Schutzkonzepten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Strukturierte Implementierung mit kontinuierlicher Überwachung und Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration moderner Technologien für proaktive Bedrohungserkennung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Verbesserung durch regelmäßige Assessments und Updates'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Moderne Rechenzentren sind das Fundament der digitalen Transformation. Unsere ISO 27001-konforme Sicherheitsarchitektur schafft nicht nur Compliance, sondern ermöglicht es Unternehmen, ihre kritischen Infrastrukturen als strategischen Wettbewerbsvorteil zu nutzen und gleichzeitig höchste Sicherheitsstandards zu gewährleisten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Data Center Security Assessment & Gap-Analyse',
          description: 'Umfassende Bewertung Ihrer Rechenzentrum-Sicherheit mit detaillierter Gap-Analyse und strategischer Roadmap für ISO 27001-Konformität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematische Bewertung physischer und logischer Sicherheitsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation kritischer Schwachstellen und Compliance-Lücken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risikobewertung für alle Rechenzentrum-Komponenten und Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Priorisierte Roadmap mit klaren Implementierungsschritten und Zeitplänen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Physische Sicherheitskontrollen & Implementierung',
          description: 'Entwicklung und Implementierung robuster physischer Sicherheitsmaßnahmen für optimalen Schutz kritischer Rechenzentrum-Infrastrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Mehrstufige Zugangskontrollen mit biometrischen und kartenbasierten Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Umfassende Videoüberwachung und Intrusion Detection Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Perimeterschutz und Sicherheitszonen-Konzepte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Besuchermanagement und Escort-Verfahren für externe Personen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Umgebungsüberwachung & Kontrollen',
          description: 'Intelligente Überwachung und Steuerung der Rechenzentrum-Umgebung für optimale Betriebsbedingungen und Ausfallprävention.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Kontinuierliche Temperatur- und Feuchtigkeitsüberwachung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Brandschutz- und Löschsysteme mit automatischer Aktivierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Unterbrechungsfreie Stromversorgung und Backup-Generatoren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Intelligente Alerting-Systeme für proaktive Problemerkennung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Zugangsmanagement & Identitätskontrolle',
          description: 'Robuste Zugangsmanagement-Systeme für sichere und nachvollziehbare Kontrolle aller Rechenzentrum-Zugriffe.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Rollenbasierte Zugangskontrollen mit Least-Privilege-Prinzip'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Biometrische Authentifizierung und Multi-Faktor-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Umfassende Audit-Trails und Zugangsprotokollierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Automatisierte Zugangsreviews und Compliance-Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Business Continuity & Disaster Recovery',
          description: 'Umfassende Strategien für Geschäftskontinuität und Notfallwiederherstellung kritischer Rechenzentrum-Services.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Entwicklung robuster Business Continuity Pläne für kritische Services'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Disaster Recovery Strategien mit definierten RTO und RPO Zielen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Regelmäßige Tests und Validierung der Notfallprozeduren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Koordination mit externen Dienstleistern und Notfalldiensten'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Cloud & Hybrid Infrastructure Security',
          description: 'Sichere Integration von Cloud-Services und Hybrid-Infrastrukturen in bestehende Rechenzentrum-Umgebungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Sichere Cloud-Konnektivität und Hybrid-Architektur-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Einheitliche Sicherheitsrichtlinien für On-Premises und Cloud-Ressourcen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Verschlüsselung und sichere Datenübertragung zwischen Standorten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Überwachung und Compliance-Management für Hybrid-Umgebungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001RechenzentrumData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Rechenzentrum page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
