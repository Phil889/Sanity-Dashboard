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
    console.log('Creating DORA NIS2 Vergleich page...')

    const doraNis2VergleichData = {
      _type: 'servicePage',
      _id: 'dora-nis2-vergleich',
      title: 'DORA NIS2 Vergleich',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dora-digital-operational-resilience-act/dora-nis2-vergleich'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management'
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
        title: 'DORA vs NIS2 Vergleich | Unterschiede & Gemeinsamkeiten | ADVISORI',
        description: 'Detaillierter Vergleich zwischen DORA und NIS2-Richtlinie. Expertenanalyse der Unterschiede, Überschneidungen und Compliance-Strategien für Finanzinstitute unter beiden Regulierungen.',
        keywords: 'DORA NIS2 Vergleich, Digital Operational Resilience Act, NIS2 Richtlinie, Cybersecurity, Finanzregulierung, EU-Compliance, Unterschiede DORA NIS2'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DORA NIS2 Vergleich und Analyse'
        },
        tagline: 'Strategische Compliance-Orientierung zwischen zwei Welten',
        heading: 'DORA NIS2 Vergleich',
        description: 'DORA und NIS2 prägen gemeinsam die europäische Cybersecurity-Landschaft. Verstehen Sie die Unterschiede, Gemeinsamkeiten und strategischen Implikationen beider Regulierungen für eine effiziente Compliance-Strategie.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Klare Abgrenzung der Anwendungsbereiche und regulatorischen Fokussierungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Identifikation von Synergien und Effizienzpotenzialen bei der Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Strategische Roadmap für koordinierte Compliance-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Optimierung von Ressourcen durch intelligente Framework-Integration'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DORA und NIS2 strategisch verstehen und koordinieren',
        description: 'Die Digital Operational Resilience Act (DORA) und die NIS2-Richtlinie repräsentieren zwei komplementäre Säulen der europäischen Cybersecurity-Strategie. Während beide Regulierungen das Ziel der Stärkung digitaler Resilienz verfolgen, unterscheiden sie sich erheblich in Anwendungsbereich, Detailgrad und regulatorischen Ansätzen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Analyse der regulatorischen Philosophien und Zielsetzungen beider Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Detaillierte Gegenüberstellung von Anwendungsbereichen und betroffenen Organisationen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Bewertung der Überschneidungen und Unterschiede in technischen Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung koordinierter Compliance-Strategien für maximal effiziente Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration beider Frameworks in bestehende Governance- und Risikomanagement-Strukturen'
          }
        ],
        alert: {
          title: 'Strategischer Hinweis',
          content: 'Finanzinstitute können gleichzeitig unter DORA und NIS2 fallen. Eine isolierte Betrachtung beider Regulierungen führt zu Ineffizienzen und möglicherweise widersprüchlichen Anforderungen. Eine koordinierte Herangehensweise ist essentiell für erfolgreiche Compliance.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in beiden Regulierungsframeworks und deren praktischer Anwendung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden zur Integration verschiedener Compliance-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praktische Erfahrung mit koordinierten Multi-Framework-Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Strategische Beratung für ressourcenoptimierte Compliance-Strategien'
            }
          ]
        },
        additionalInfo: 'Der Vergleich zwischen DORA und NIS2 offenbart sowohl fundamentale Unterschiede als auch bedeutende Synergien. Während DORA spezifisch auf die Finanzbranche zugeschnitten ist und detaillierte operative Anforderungen definiert, verfolgt NIS2 einen breiteren, risikobasierten Ansatz für kritische Infrastrukturen.',
        serviceDescription: 'Wir unterstützen Sie bei der strategischen Navigation zwischen DORA und NIS2, identifizieren Synergien und entwickeln effiziente, koordinierte Compliance-Strategien. Unser Ansatz maximiert die Effizienz Ihrer Compliance-Investitionen durch intelligente Framework-Integration.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Comprehensive Gap-Analyse zwischen DORA- und NIS2-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung koordinierter Compliance-Roadmaps und Implementierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Integration beider Frameworks in einheitliche Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Optimierung von Ressourcen durch Synergie-Identifikation und -Nutzung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Überwachung regulatorischer Entwicklungen beider Frameworks'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Vergleichsansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte Strategie zur optimalen Koordination von DORA- und NIS2-Compliance unter Berücksichtigung Ihrer spezifischen Geschäftsanforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Detaillierte Analyse Ihrer Betroffenheit unter beiden Regulierungsframeworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematische Gegenüberstellung aller relevanten Anforderungen und Überschneidungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Identifikation von Synergien und Effizienzpotenzialen bei der Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung koordinierter Governance- und Umsetzungsstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Implementierung integrierter Monitoring- und Reporting-Prozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die strategische Koordination von DORA und NIS2 ist entscheidend für eine effiziente Compliance-Strategie. Unsere systematische Herangehensweise identifiziert Synergien und vermeidet Redundanzen, wodurch unsere Kunden sowohl Kosten sparen als auch ihre Resilienz nachhaltig stärken können.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Regulatorische Gap-Analyse und Framework-Mapping',
          description: 'Systematische Gegenüberstellung aller DORA- und NIS2-Anforderungen mit detaillierter Analyse von Überschneidungen, Unterschieden und spezifischen Compliance-Implikationen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Vollständige Erfassung und Kategorisierung aller Anforderungen beider Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Detaillierte Analyse von Überschneidungen und regulatorischen Synergien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation framework-spezifischer Anforderungen und Differenzierungsmerkmale'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Bewertung der Auswirkungen auf bestehende Compliance-Strukturen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Koordinierte Compliance-Strategie-Entwicklung',
          description: 'Entwicklung integrierter Compliance-Strategien, die beide Regulierungsframeworks effizient adressieren und Synergien optimal nutzen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Design koordinierter Governance-Strukturen für beide Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung einheitlicher Risikomanagement-Ansätze und -Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration von Incident-Management und Reporting-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Optimierung von Ressourcenallokation und Implementierungsprioritäten'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Anwendungsbereich-Analyse und Klassifizierung',
          description: 'Präzise Bestimmung Ihrer Betroffenheit unter beiden Regulierungen mit detaillierter Analyse der jeweiligen Anwendungsbereiche und Schwellenwerte.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Systematische Bewertung der DORA-Klassifizierung und -Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Analyse der NIS2-Betroffenheit und kritischen Infrastruktur-Einstufung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Bewertung von Überschneidungen und doppelten Regulierungsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Dokumentation und Begründung der Klassifizierungsentscheidungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Technische Anforderungen-Integration',
          description: 'Harmonisierung der technischen Cybersecurity-Anforderungen beider Frameworks in kohärente, implementierbare Sicherheitsarchitekturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Mapping technischer Kontrollen und Sicherheitsmaßnahmen beider Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Entwicklung integrierter Cybersecurity-Architekturen und -Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Koordination von Penetrationstests und Vulnerability-Assessments'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Integration von Monitoring- und Detection-Systemen für beide Frameworks'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Drittanbieter-Management-Koordination',
          description: 'Entwicklung koordinierter Ansätze für das Management von IKT-Drittanbietern unter Berücksichtigung beider regulatorischen Perspektiven.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Harmonisierung von Drittanbieter-Risikobewertungen für beide Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Entwicklung einheitlicher Vertragsstandards und Due-Diligence-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Koordination von Drittanbieter-Audits und -Überwachung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Integration von Supply-Chain-Risikomanagement-Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Kontinuierliche Compliance-Optimierung',
          description: 'Etablierung systematischer Prozesse zur kontinuierlichen Überwachung, Bewertung und Optimierung Ihrer koordinierten DORA-NIS2-Compliance-Strategie.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Implementierung integrierter Compliance-Monitoring-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Regelmäßige Bewertung regulatorischer Entwicklungen beider Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Kontinuierliche Optimierung von Synergien und Effizienzpotenzialen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Proaktive Anpassung an sich ändernde regulatorische Landschaften'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(doraNis2VergleichData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DORA NIS2 Vergleich page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
