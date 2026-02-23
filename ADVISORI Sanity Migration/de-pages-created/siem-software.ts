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
    console.log('Creating SIEM Software page...')

    const siemSoftwareData = {
      _type: 'servicePage',
      _id: 'siem-software',
      title: 'SIEM Software - Auswahl und Implementierung',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/security-operations-secops/siem/siem-software'
      },
      parent: {
        _type: 'reference',
        _ref: 'siem'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'informationssicherheit'
        }
      },
      seo: {
        _type: 'seo',
        title: 'SIEM Software Auswahl & Implementierung | ADVISORI',
        description: 'Professionelle SIEM Software Beratung: Evaluierung, Auswahl und Implementierung der optimalen Security Information and Event Management Lösung für Ihr Unternehmen.',
        keywords: 'SIEM Software, Security Information Event Management, SIEM Auswahl, SIEM Implementierung, SIEM Vergleich, Enterprise SIEM, Cloud SIEM, SIEM Beratung, Cybersecurity Software'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'SIEM Software Auswahl und Implementierung'
        },
        tagline: 'Die richtige SIEM Software für maximale Sicherheitswirksamkeit',
        heading: 'SIEM Software - Auswahl und Implementierung',
        description: 'Die Auswahl der richtigen SIEM Software ist entscheidend für den Erfolg Ihrer Cybersecurity-Strategie. Wir unterstützen Sie bei der herstellerunabhängigen Evaluierung, strategischen Auswahl und professionellen Implementierung der optimalen SIEM-Lösung für Ihre spezifischen Anforderungen und Rahmenbedingungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Herstellerunabhängige SIEM Software Evaluierung und Vergleich'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategische Auswahl basierend auf Business-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Professionelle Implementierung mit bewährten Methoden'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltige Optimierung und kontinuierliche Weiterentwicklung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'SIEM Software: Strategische Auswahl für nachhaltige Sicherheit',
        description: 'Die SIEM Software Landschaft ist vielfältig und komplex. Von Enterprise-Lösungen bis hin zu spezialisierten Cloud-SIEM Plattformen bietet der Markt zahlreiche Optionen mit unterschiedlichen Stärken und Fokussierungen. Die richtige Auswahl erfordert eine systematische Evaluierung, die technische Anforderungen, organisatorische Gegebenheiten und strategische Ziele gleichermaßen berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Marktanalyse und Vendor-Evaluierung führender SIEM Anbieter'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Strukturierte Anforderungsanalyse und Technical Due Diligence'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Proof-of-Concept Durchführung mit realistischen Testszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'TCO-Analyse und ROI-Bewertung verschiedener SIEM Software Optionen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Implementierungsplanung und Change Management Strategien'
          }
        ],
        alert: {
          title: 'Strategischer Erfolgsfaktor',
          content: 'Die richtige SIEM Software Auswahl kann die Effektivität Ihrer Cybersecurity-Operations um ein Vielfaches steigern. Eine fundierte Evaluierung verhindert kostspielige Fehlentscheidungen und schafft die Basis für nachhaltige Sicherheitsverbesserungen.'
        },
        whyUs: {
          title: 'Unsere SIEM Software Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Langjährige Erfahrung mit allen führenden SIEM Software Plattformen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Beratung ohne Vendor-Lock-in Risiken'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methodiken für SIEM Software Evaluierung und Auswahl'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'End-to-End Begleitung von der Strategie bis zum operativen Betrieb'
            }
          ]
        },
        additionalInfo: 'Moderne SIEM Software Lösungen unterscheiden sich erheblich in ihren Architekturen, Analysefähigkeiten und Integrationsmöglichkeiten. Cloud-native SIEM Plattformen bieten andere Vorteile als traditionelle On-Premise Lösungen, während hybride Ansätze neue Möglichkeiten für flexible Deployment-Strategien eröffnen.',
        serviceDescription: 'Wir begleiten Sie durch den gesamten SIEM Software Lifecycle - von der initialen Bedarfsanalyse über die strukturierte Evaluierung bis hin zur erfolgreichen Implementierung und kontinuierlichen Optimierung. Unser herstellerunabhängiger Ansatz gewährleistet objektive Empfehlungen, die ausschließlich Ihren Interessen dienen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'SIEM Software Marktanalyse und Vendor-Screening'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Anforderungsanalyse und Technical Requirements Definition'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Proof-of-Concept Design und Durchführung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'SIEM Software Implementierung und Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance-Optimierung und Continuous Improvement'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer SIEM Software Auswahlprozess',
        description: 'Wir verfolgen einen strukturierten, datengetriebenen Ansatz für die SIEM Software Auswahl, der technische Exzellenz mit geschäftlichen Anforderungen optimal in Einklang bringt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer aktuellen Sicherheitslandschaft und Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strukturierte Marktanalyse und Vendor-Evaluierung mit objektiven Kriterien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Realistische Proof-of-Concept Durchführung mit Ihren Daten und Use Cases'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Professionelle Implementierung mit bewährten Deployment-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Performance-Monitoring'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die SIEM Software Auswahl ist eine der kritischsten Entscheidungen in der Cybersecurity-Strategie eines Unternehmens. Eine fundierte Evaluierung, die sowohl technische Exzellenz als auch organisatorische Passung berücksichtigt, ist der Schlüssel für nachhaltigen Erfolg. Unsere Erfahrung zeigt, dass die richtige SIEM Software nicht nur die Sicherheitslage verbessert, sondern auch die Effizienz der gesamten Security Operations transformiert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'SIEM Software Marktanalyse und Vendor-Evaluierung',
          description: 'Umfassende Analyse des SIEM Software Marktes mit objektiver Bewertung führender Anbieter und deren Lösungsportfolios.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematische Marktanalyse aller relevanten SIEM Software Anbieter'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Detaillierte Vendor-Profile mit Stärken-Schwächen-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Technologie-Roadmap Bewertung und Zukunftsfähigkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Marktpositionierung und Competitive Landscape Analyse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Anforderungsanalyse und Technical Requirements Definition',
          description: 'Strukturierte Erfassung und Dokumentation aller technischen und organisatorischen Anforderungen an die SIEM Software.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Umfassende Business Requirements Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Technische Spezifikationen und Architektur-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Compliance und regulatorische Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Performance und Skalierbarkeits-Kriterien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'SIEM Software Proof-of-Concept und Testing',
          description: 'Professionelle Durchführung von Proof-of-Concept Tests mit realistischen Szenarien und Ihren spezifischen Daten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Strukturierte PoC-Planung mit definierten Testszenarien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Realistische Testumgebung mit Ihren Log-Daten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Performance-Testing und Skalierbarkeits-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Objektive Bewertung und Vergleichsanalyse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'SIEM Software Auswahl und Entscheidungsunterstützung',
          description: 'Datengetriebene Entscheidungsunterstützung mit objektiven Bewertungskriterien und strategischen Empfehlungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Multi-Kriterien-Bewertung mit gewichteten Scoring-Modellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'TCO-Analyse und ROI-Bewertung verschiedener Optionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Risikobewertung und Mitigation-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Strategische Empfehlungen und Entscheidungsvorlagen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'SIEM Software Implementierung und Integration',
          description: 'Professionelle Implementierung der ausgewählten SIEM Software mit nahtloser Integration in bestehende IT-Infrastrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Detaillierte Implementierungsplanung und Projektmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Technische Installation und Konfiguration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Integration mit bestehenden Sicherheits- und IT-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Testing, Validierung und Go-Live Unterstützung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'SIEM Software Optimierung und Managed Services',
          description: 'Kontinuierliche Optimierung und professionelle Betreuung Ihrer SIEM Software für maximale Sicherheitswirksamkeit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Performance-Monitoring und kontinuierliche Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Regelmäßige Health-Checks und Maintenance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Update-Management und Technology-Roadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Managed SIEM Services und Remote-Support'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(siemSoftwareData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ SIEM Software page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
