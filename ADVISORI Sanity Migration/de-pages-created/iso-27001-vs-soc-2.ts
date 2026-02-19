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
    console.log('Creating ISO 27001 vs SOC 2 comparison page...')

    const iso27001VsSoc2Data = {
      _type: 'servicePage',
      _id: 'iso-27001-vs-soc-2',
      title: 'ISO 27001 vs SOC 2',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-vs-soc-2'
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
        title: 'ISO 27001 vs SOC 2 Vergleich | Welcher Standard ist richtig? | ADVISORI',
        description: 'Detaillierter Vergleich zwischen ISO 27001 und SOC 2: Unterschiede, Gemeinsamkeiten, Anwendungsbereiche und strategische Entscheidungshilfen für die optimale Compliance-Strategie.',
        keywords: 'ISO 27001 vs SOC 2, Compliance Vergleich, Informationssicherheit Standards, SOC 2 Zertifizierung, ISO 27001 Implementierung, Audit Standards, Sicherheitsframeworks'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 vs SOC 2 Vergleich'
        },
        tagline: 'Strategische Entscheidungshilfe für optimale Compliance-Architektur',
        heading: 'ISO 27001 vs SOC 2: Der umfassende Vergleich',
        description: 'Navigieren Sie durch die komplexe Landschaft der Informationssicherheitsstandards mit unserem detaillierten Vergleich zwischen ISO 27001 und SOC 2. Verstehen Sie die strategischen Unterschiede, Anwendungsbereiche und Synergien beider Frameworks für eine fundierte Compliance-Entscheidung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Klare Abgrenzung der Anwendungsbereiche und Zielgruppen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategische Bewertung von Aufwand und Business Value'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Optimale Integration und Komplementarität beider Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Fundierte Entscheidungsgrundlage für Ihre Compliance-Strategie'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ISO 27001 vs SOC 2 - Zwei Welten der Informationssicherheit',
        description: 'ISO 27001 und SOC 2 repräsentieren unterschiedliche Philosophien im Informationssicherheitsmanagement: Während ISO 27001 als internationaler Standard einen systematischen, zertifizierbaren Ansatz für Informationssicherheitsmanagementsysteme bietet, fokussiert SOC 2 auf die Attestierung spezifischer Sicherheitskontrollen für Service-Organisationen. Beide Standards haben ihre Berechtigung und können sich strategisch ergänzen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'ISO 27001: Systematisches ISMS mit internationaler Zertifizierung und kontinuierlicher Verbesserung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'SOC 2: Fokussierte Kontrollattestation für Service-Provider mit flexiblen Berichtszeiträumen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Unterschiedliche Zielgruppen: Globale vs. US-amerikanische Marktausrichtung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Komplementäre Ansätze: Managementsystem vs. Kontrollnachweis'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Strategische Synergien durch parallele oder sequenzielle Implementierung'
          }
        ],
        alert: {
          title: 'Strategische Entscheidung',
          content: 'Die Wahl zwischen ISO 27001 und SOC 2 ist keine Entweder-Oder-Entscheidung, sondern eine strategische Überlegung basierend auf Zielmarkt, Geschäftsmodell und Stakeholder-Anforderungen.'
        },
        whyUs: {
          title: 'Warum ADVISORI für Ihre Compliance-Strategie',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in beiden Standards und deren strategischer Anwendung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für parallele und integrierte Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Strategische Beratung für optimale Compliance-Architektur'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Internationale Erfahrung mit verschiedenen Marktanforderungen'
            }
          ]
        },
        additionalInfo: 'Die Entscheidung zwischen ISO 27001 und SOC 2 hängt von verschiedenen Faktoren ab: Zielmarkt, Kundenanforderungen, Geschäftsmodell, verfügbare Ressourcen und strategische Ziele. Während ISO 27001 eine umfassende Managementsystem-Zertifizierung bietet, fokussiert SOC 2 auf spezifische Kontrollnachweise für Service-Organisationen.',
        serviceDescription: 'Unser Vergleichs- und Beratungsservice hilft Ihnen bei der strategischen Entscheidung zwischen ISO 27001 und SOC 2. Wir analysieren Ihre spezifischen Anforderungen, bewerten beide Optionen und entwickeln eine maßgeschneiderte Compliance-Strategie, die optimal zu Ihrem Geschäftsmodell und Ihren Zielen passt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Analyse und Anforderungsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Detaillierter Vergleich und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Kosten-Nutzen-Bewertung und ROI-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementierungsplanung und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Integrierte Compliance-Strategien und Synergieeffekte'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Vergleichs- und Entscheidungsansatz',
        description: 'Wir verfolgen einen strukturierten, evidenzbasierten Ansatz zur Bewertung und Auswahl der optimalen Compliance-Strategie zwischen ISO 27001 und SOC 2.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Stakeholder-Analyse und Anforderungserhebung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Detaillierte Vergleichsanalyse mit Fokus auf Business Value'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Strategische Bewertung von Implementierungsaufwand und Nutzen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung einer maßgeschneiderten Compliance-Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Begleitung bei der Umsetzung der gewählten Strategie'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die strategische Wahl zwischen ISO 27001 und SOC 2 erfordert tiefes Verständnis beider Standards und ihrer Marktdynamiken. Unsere Expertise ermöglicht es Kunden, fundierte Entscheidungen zu treffen, die sowohl kurzfristige Compliance-Ziele als auch langfristige Geschäftsstrategien optimal unterstützen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Compliance-Beratung',
          description: 'Umfassende Beratung zur optimalen Auswahl zwischen ISO 27001 und SOC 2 basierend auf Ihren spezifischen Geschäftsanforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Anforderungsanalyse und Stakeholder-Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strategische Bewertung von Marktanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Kosten-Nutzen-Analyse und ROI-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Maßgeschneiderte Compliance-Strategieentwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Vergleichsanalyse und Gap-Assessment',
          description: 'Detaillierte technische und strategische Vergleichsanalyse zwischen ISO 27001 und SOC 2 für Ihre Organisation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Umfassende Gap-Analyse für beide Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Mapping von Kontrollen und Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Bewertung bestehender Sicherheitsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Identifikation von Synergien und Überschneidungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Parallele Implementierungsstrategien',
          description: 'Entwicklung und Umsetzung integrierter Ansätze für die parallele oder sequenzielle Implementierung beider Standards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Integrierte Projektplanung und Ressourcenoptimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Synergieeffekte und Effizienzsteigerungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Koordinierte Audit- und Zertifizierungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Optimierte Dokumentations- und Prozessstrukturen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Marktspezifische Compliance-Strategien',
          description: 'Entwicklung zielmarktspezifischer Compliance-Ansätze für verschiedene geografische und branchenspezifische Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'US-Markt fokussierte SOC 2 Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Internationale ISO 27001 Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Branchenspezifische Anforderungsanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Regulatorische Compliance-Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Audit und Attestation Support',
          description: 'Professionelle Unterstützung bei Audits und Attestationen für beide Standards mit koordinierter Herangehensweise.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'ISO 27001 Zertifizierungsaudit-Begleitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'SOC 2 Attestation-Vorbereitung und Support'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Koordinierte Audit-Planung und -durchführung'
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
          title: 'Training und Kompetenzentwicklung',
          description: 'Umfassende Schulungsprogramme für beide Standards mit Fokus auf praktische Anwendung und strategisches Verständnis.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Vergleichende Schulungen zu beiden Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Strategische Entscheidungsfindung und Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Praktische Implementierungsworkshops'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Weiterbildung und Updates'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001VsSoc2Data)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 vs SOC 2 comparison page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
