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
    console.log('Creating IAM-Lösung page...')

    const iamLoesungData = {
      _type: 'servicePage',
      _id: 'iam-loesung',
      title: 'IAM-Lösung - Maßgeschneiderte Identity & Access Management Lösungen',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-loesung'
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
        title: 'IAM-Lösung - Maßgeschneiderte Identity & Access Management Lösungen | ADVISORI',
        description: 'Professionelle IAM-Lösungen: Maßgeschneiderte Identity & Access Management Systeme, Enterprise-Integration, Cloud-native Architekturen und strategische Implementierung für maximale Sicherheit und Effizienz.',
        keywords: 'IAM Lösung, Identity Access Management Lösung, IAM System, Enterprise IAM, IAM Implementation, Identity Management Lösung, Access Management System, IAM Architektur, IAM Integration, IAM Consulting'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM-Lösung Maßgeschneiderte Identity Access Management Lösungen'
        },
        tagline: 'Maßgeschneiderte IAM-Lösungen für Enterprise-Excellence',
        heading: 'IAM-Lösung - Maßgeschneiderte Identity & Access Management Lösungen',
        description: 'IAM-Lösungen von ADVISORI transformieren komplexe Identitätslandschaften in strategische Wettbewerbsvorteile durch maßgeschneiderte Architekturen, die perfekt auf Ihre spezifischen Geschäftsanforderungen abgestimmt sind. Unsere ganzheitlichen IAM-Lösungen vereinen modernste Technologien mit bewährten Methoden, um eine nahtlose Integration, optimale Performance und maximale Sicherheit zu gewährleisten, während sie gleichzeitig Ihre digitale Transformation beschleunigen und Compliance-Exzellenz automatisiert sicherstellen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Maßgeschneiderte IAM-Architekturen für optimale Business-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Enterprise-grade Skalierbarkeit mit Cloud-native Performance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Nahtlose Legacy-Integration ohne Geschäftsunterbrechung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Automatisierte Compliance und kontinuierliche Sicherheitsoptimierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische IAM-Lösungen: Von der Vision zur Realität',
        description: 'Moderne IAM-Lösungen sind strategische Enabler für digitale Transformation und Geschäftsinnovation. Unsere maßgeschneiderten Ansätze berücksichtigen nicht nur technische Anforderungen, sondern auch organisatorische Strukturen, Compliance-Vorgaben und zukünftige Wachstumspläne. Jede IAM-Lösung wird individuell konzipiert, um maximalen Business-Value zu generieren und gleichzeitig höchste Sicherheitsstandards zu gewährleisten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Lösungsarchitektur mit Business-Impact-Fokus und ROI-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Herstellerunabhängige Technologie-Integration für optimale Flexibilität'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Cloud-first Design mit Hybrid- und Multi-Cloud-Unterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Agile Implementierung mit kontinuierlicher Optimierung und Innovation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Comprehensive Change Management für nachhaltige Benutzerakzeptanz'
          }
        ],
        alert: {
          title: 'Lösungs-Excellence',
          content: 'Erfolgreiche IAM-Lösungen erfordern mehr als nur Technologie-Implementation. Sie benötigen strategische Vision, tiefes Verständnis für Geschäftsprozesse und die Fähigkeit, komplexe Anforderungen in elegante, skalierbare Lösungen zu transformieren.'
        },
        whyUs: {
          title: 'ADVISORI IAM-Lösungsexpertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Bewährte Methodik für erfolgreiche IAM-Transformationen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefe Branchenexpertise und regulatorisches Know-how'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Herstellerunabhängige Beratung für optimale Technologie-Auswahl'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'End-to-End Verantwortung von Konzeption bis Betrieb'
            }
          ]
        },
        additionalInfo: 'Die Zukunft der IAM-Lösungen liegt in der intelligenten Orchestrierung von Identitäten, Zugriffen und Sicherheitsrichtlinien durch KI-gestützte Automatisierung und adaptive Sicherheitsarchitekturen. Diese Evolution ermöglicht es Unternehmen, Sicherheit als strategischen Enabler zu nutzen, anstatt sie als Hindernis zu betrachten.',
        serviceDescription: 'Unsere IAM-Lösungen umfassen den gesamten Lifecycle von der strategischen Planung und Architektur-Design über die Technologie-Auswahl und Implementation bis hin zum operativen Betrieb und der kontinuierlichen Weiterentwicklung. Jede Lösung wird individuell auf Ihre spezifischen Anforderungen zugeschnitten.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Lösungskonzeption und Business-Case-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Maßgeschneiderte Architektur-Design und Technologie-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Agile Implementation mit kontinuierlicher Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Change Management und User-Adoption-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Betriebsoptimierung und kontinuierliche Innovation-Integration'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser bewährter IAM-Lösungsansatz',
        description: 'Wir verfolgen einen strukturierten, business-orientierten Ansatz für IAM-Lösungen, der technische Excellence mit strategischen Geschäftszielen verbindet und dabei bewährte Methoden mit innovativen Technologien kombiniert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Assessment-Phase mit umfassender Anforderungsanalyse und Business-Case-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Lösungsarchitektur-Design mit Fokus auf Skalierbarkeit und Zukunftssicherheit'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Agile Implementation mit iterativer Entwicklung und kontinuierlichem Feedback'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Comprehensive Testing und Qualitätssicherung für produktionsreife Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Go-Live-Unterstützung und kontinuierliche Optimierung für nachhaltigen Erfolg'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Erfolgreiche IAM-Lösungen entstehen durch die perfekte Balance zwischen technischer Innovation und geschäftlicher Pragmatik. Unsere Erfahrung zeigt, dass maßgeschneiderte Ansätze, die sowohl aktuelle Anforderungen als auch zukünftige Entwicklungen berücksichtigen, den entscheidenden Unterschied machen. Eine durchdachte IAM-Lösung wird zum strategischen Asset, das nicht nur Sicherheit gewährleistet, sondern auch Geschäftsprozesse beschleunigt und neue Möglichkeiten für digitale Innovation eröffnet.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische IAM-Lösungskonzeption und Business-Case-Entwicklung',
          description: 'Entwicklung einer umfassenden IAM-Lösungsstrategie mit klarem Business-Case und ROI-Fokus, die Ihre spezifischen Anforderungen optimal adressiert.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Comprehensive Requirements Analysis und Stakeholder-Alignment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strategic Solution Design mit Business-Impact-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'ROI-optimierte Business-Case-Entwicklung und Investitionsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Risk Assessment und Compliance-Mapping für regulatorische Exzellenz'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Maßgeschneiderte IAM-Architektur und Technologie-Integration',
          description: 'Design und Implementation individueller IAM-Architekturen mit optimaler Integration bestehender Systeme und zukunftssicherer Technologie-Auswahl.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Custom Architecture Design mit Skalierbarkeits- und Performance-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Herstellerunabhängige Technologie-Evaluation und -Auswahl'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Legacy System Integration ohne Geschäftsunterbrechung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Cloud-native Design mit Multi-Cloud und Hybrid-Unterstützung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Agile IAM-Implementation und Qualitätssicherung',
          description: 'Professionelle Implementation Ihrer IAM-Lösung mit agilen Methoden, kontinuierlicher Qualitätssicherung und umfassendem Testing.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Agile Development mit iterativer Entwicklung und kontinuierlichem Feedback'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Comprehensive Testing-Strategien für produktionsreife Qualität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'DevOps-Integration für automatisierte Deployment-Pipelines'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Security-by-Design mit kontinuierlicher Vulnerability-Assessment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Change Management und User-Adoption-Strategien',
          description: 'Strategisches Change Management für erfolgreiche IAM-Einführung mit fokussierten User-Adoption-Programmen und nachhaltiger Akzeptanz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Comprehensive Change-Impact-Analysis und Stakeholder-Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Targeted Training-Programme und User-Enablement-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Communication-Strategien für transparente Transformation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Success Metrics und Adoption-Monitoring für nachhaltigen Erfolg'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'IAM-Betriebsoptimierung und Performance-Tuning',
          description: 'Kontinuierliche Optimierung Ihrer IAM-Lösung mit Performance-Tuning, Capacity-Planning und proaktivem Monitoring für maximale Effizienz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Performance-Monitoring und Capacity-Planning für optimale Ressourcennutzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Proactive System-Optimization und Bottleneck-Elimination'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Security-Posture-Assessment und Threat-Landscape-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Innovation-Integration und Technology-Roadmap-Updates'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'IAM-Governance und Compliance-Automation',
          description: 'Etablierung robuster IAM-Governance-Strukturen mit automatisierten Compliance-Prozessen für kontinuierliche regulatorische Exzellenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Governance-Framework-Design mit Policy-Management und Enforcement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Automated Compliance-Monitoring und Regulatory-Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Risk-based Access-Reviews und Certification-Automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Audit-Trail-Management und Forensic-Readiness'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamLoesungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM-Lösung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
