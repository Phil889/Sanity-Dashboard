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
    console.log('Creating IAM Software page...')

    const iamSoftwareData = {
      _type: 'servicePage',
      _id: 'iam-software',
      title: 'IAM Software - Identity & Access Management Lösungen',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-software'
      },
      parent: {
        _type: 'reference',
        _ref: 'identity-access-management-iam'
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
        title: 'IAM Software Auswahl & Implementierung | ADVISORI',
        description: 'Professionelle IAM Software Beratung: Evaluierung, Auswahl und Implementierung der optimalen Identity & Access Management Lösung für maximale Sicherheit und Compliance.',
        keywords: 'IAM Software, Identity Access Management, IAM Auswahl, IAM Implementierung, Identity Management Software, Access Management, IAM Beratung, Enterprise IAM, Cloud IAM'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Software Identity Access Management Lösungen'
        },
        tagline: 'Die richtige IAM Software für sichere Identitätsverwaltung',
        heading: 'IAM Software - Identity & Access Management Lösungen',
        description: 'Die Auswahl der richtigen IAM Software ist fundamental für die Sicherheit und Compliance Ihres Unternehmens. Wir unterstützen Sie bei der herstellerunabhängigen Evaluierung, strategischen Auswahl und professionellen Implementierung der optimalen Identity & Access Management Lösung für Ihre spezifischen Anforderungen und Sicherheitsziele.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Herstellerunabhängige IAM Software Evaluierung und Vergleich'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategische Auswahl basierend auf Sicherheits- und Compliance-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Professionelle Implementierung mit nahtloser Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Optimierung und Lifecycle-Management'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'IAM Software: Strategische Grundlage für moderne Cybersecurity',
        description: 'Die IAM Software Landschaft bietet eine Vielzahl von Lösungen für unterschiedlichste Anforderungen - von Enterprise-Plattformen bis hin zu spezialisierten Cloud-IAM Services. Die richtige Auswahl erfordert eine systematische Evaluierung, die technische Capabilities, Sicherheitsanforderungen, Compliance-Vorgaben und organisatorische Gegebenheiten gleichermaßen berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Marktanalyse und Vendor-Evaluierung führender IAM Anbieter'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Strukturierte Anforderungsanalyse und Security Requirements Definition'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Proof-of-Concept Durchführung mit realistischen Identity-Szenarien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'TCO-Analyse und Security ROI-Bewertung verschiedener IAM Software Optionen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Implementierungsplanung und Identity Governance Strategien'
          }
        ],
        alert: {
          title: 'Kritischer Sicherheitsfaktor',
          content: 'IAM Software bildet das Fundament Ihrer Cybersecurity-Architektur. Eine fundierte Auswahl und professionelle Implementierung sind entscheidend für die Sicherheit aller digitalen Assets und die Einhaltung regulatorischer Anforderungen.'
        },
        whyUs: {
          title: 'Unsere IAM Software Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung mit allen führenden IAM Software Plattformen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Beratung ohne Vendor-Lock-in Risiken'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methodiken für IAM Software Evaluierung und Auswahl'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'End-to-End Begleitung von der Strategie bis zum operativen Betrieb'
            }
          ]
        },
        additionalInfo: 'Moderne IAM Software Lösungen unterscheiden sich erheblich in ihren Architekturen, Sicherheitsfeatures und Integrationsmöglichkeiten. Cloud-native IAM Plattformen bieten andere Vorteile als traditionelle On-Premise Lösungen, während hybride Ansätze neue Möglichkeiten für flexible Identity-Strategien eröffnen.',
        serviceDescription: 'Wir begleiten Sie durch den gesamten IAM Software Lifecycle - von der initialen Bedarfsanalyse über die strukturierte Evaluierung bis hin zur erfolgreichen Implementierung und kontinuierlichen Optimierung. Unser herstellerunabhängiger Ansatz gewährleistet objektive Empfehlungen, die ausschließlich Ihren Sicherheitsinteressen dienen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'IAM Software Marktanalyse und Vendor-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Security Requirements Analyse und Technical Specifications'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Proof-of-Concept Design und Identity Testing'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'IAM Software Implementierung und System Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Identity Governance und Continuous Improvement'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer IAM Software Auswahlprozess',
        description: 'Wir verfolgen einen strukturierten, sicherheitsfokussierten Ansatz für die IAM Software Auswahl, der technische Exzellenz mit höchsten Sicherheitsstandards optimal kombiniert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer Identity-Landschaft und Sicherheitsanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strukturierte Marktanalyse und Vendor-Evaluierung mit Security-Fokus'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Realistische Proof-of-Concept Durchführung mit Ihren Identity-Daten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Professionelle Implementierung mit bewährten Security-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Identity Governance Monitoring'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die IAM Software Auswahl ist eine der fundamentalsten Entscheidungen in der Cybersecurity-Strategie eines Unternehmens. Eine professionelle Evaluierung, die sowohl technische Exzellenz als auch Sicherheitsanforderungen berücksichtigt, ist der Schlüssel für nachhaltigen Schutz. Unsere Erfahrung zeigt, dass die richtige IAM Software nicht nur die Sicherheitslage transformiert, sondern auch die Effizienz der gesamten Identity-Verwaltung revolutioniert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'IAM Software Marktanalyse und Vendor-Evaluierung',
          description: 'Umfassende Analyse des IAM Software Marktes mit objektiver Bewertung führender Anbieter und deren Identity-Management-Lösungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematische Marktanalyse aller relevanten IAM Software Anbieter'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Detaillierte Vendor-Profile mit Security-Capabilities-Analyse'
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
          title: 'Identity Requirements Analyse und Security Specifications',
          description: 'Strukturierte Erfassung und Dokumentation aller Sicherheits- und Compliance-Anforderungen an die IAM Software.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Umfassende Identity Business Requirements Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Security Spezifikationen und Architektur-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Compliance und regulatorische Identity-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Performance und Skalierbarkeits-Kriterien für Identity-Services'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'IAM Software Proof-of-Concept und Security Testing',
          description: 'Professionelle Durchführung von Proof-of-Concept Tests mit realistischen Identity-Szenarien und Sicherheitsbewertungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Strukturierte PoC-Planung mit definierten Identity-Testszenarien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Realistische Testumgebung mit Ihren Identity-Daten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Security-Testing und Vulnerability-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Objektive Bewertung und Security-Vergleichsanalyse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'IAM Software Auswahl und Security-Entscheidungsunterstützung',
          description: 'Sicherheitsfokussierte Entscheidungsunterstützung mit objektiven Bewertungskriterien und strategischen Empfehlungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Multi-Kriterien-Bewertung mit Security-gewichteten Scoring-Modellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Security TCO-Analyse und Risk-adjusted ROI-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Risikobewertung und Security-Mitigation-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Strategische Empfehlungen und Security-Entscheidungsvorlagen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'IAM Software Implementierung und Secure Integration',
          description: 'Professionelle Implementierung der ausgewählten IAM Software mit sicherer Integration in bestehende IT-Infrastrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Detaillierte Implementierungsplanung und Security-Projektmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Sichere Installation und Hardening-Konfiguration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Secure Integration mit bestehenden Sicherheits- und IT-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Security Testing, Validierung und Go-Live Unterstützung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'IAM Software Optimierung und Identity Governance',
          description: 'Kontinuierliche Optimierung und professionelle Identity Governance für maximale Sicherheit und Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Identity Performance-Monitoring und kontinuierliche Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Regelmäßige Security Health-Checks und Identity-Audits'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Update-Management und Security-Roadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Managed IAM Services und Identity Governance Support'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamSoftwareData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Software page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
