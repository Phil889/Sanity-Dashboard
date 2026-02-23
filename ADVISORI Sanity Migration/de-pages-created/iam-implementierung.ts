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
    console.log('Creating IAM Implementierung page...')

    const iamImplementierungData = {
      _type: 'servicePage',
      _id: 'iam-implementierung',
      title: 'IAM Implementierung - Professionelle Umsetzung von Identity & Access Management Systemen',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-implementierung'
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
        title: 'IAM Implementierung - Professionelle Umsetzung von Identity & Access Management | ADVISORI',
        description: 'Expertenwissen für erfolgreiche IAM Implementierung: Strategische Planung, technische Umsetzung, Change Management und nachhaltige Integration von Identity & Access Management Systemen.',
        keywords: 'IAM Implementierung, Identity Access Management Umsetzung, IAM Deployment, IAM Integration, IAM Rollout, IAM Migration, Identity Management Implementation, Access Management Einführung, IAM Projekt, IAM Go-Live'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Implementierung Professionelle Umsetzung Identity Access Management'
        },
        tagline: 'Erfolgreiche IAM-Transformationen durch bewährte Implementierungsexpertise',
        heading: 'IAM Implementierung - Professionelle Umsetzung von Identity & Access Management Systemen',
        description: 'IAM Implementierung ist ein hochkomplexer Transformationsprozess, der strategische Planung, technische Exzellenz und umfassendes Change Management vereint, um moderne Identity & Access Management Systeme erfolgreich in Unternehmenslandschaften zu integrieren. Unsere bewährten Implementierungsmethoden gewährleisten reibungslose Übergänge, minimale Betriebsunterbrechungen und maximale Benutzerakzeptanz bei gleichzeitiger Erfüllung höchster Sicherheits- und Compliance-Standards.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierte Implementierungsroadmaps mit risikominimierten Rollout-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Nahtlose Integration in bestehende IT-Landschaften ohne Betriebsunterbrechungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Umfassendes Change Management für optimale Benutzerakzeptanz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Optimierung und Performance-Monitoring für nachhaltigen Erfolg'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische IAM-Implementierung: Von der Vision zur operativen Exzellenz',
        description: 'Erfolgreiche IAM-Implementierungen erfordern weit mehr als technische Installation – sie sind strategische Transformationsprojekte, die Geschäftsprozesse, Technologie und Menschen in Einklang bringen. Unsere ganzheitliche Implementierungsmethodik kombiniert bewährte Projektmanagement-Ansätze mit spezialisierten IAM-Expertisen, um komplexe Identity & Access Management Systeme erfolgreich und nachhaltig in Unternehmensumgebungen zu etablieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Implementierungsplanung mit Business-Impact-Analyse und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Agile Deployment-Methoden mit iterativen Rollouts und kontinuierlichem Feedback'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Umfassende Systemintegration mit Legacy-Systemen und modernen Cloud-Plattformen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Change Management und User-Adoption-Strategien für nachhaltige Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Performance-Optimierung und kontinuierliche Verbesserung nach Go-Live'
          }
        ],
        alert: {
          title: 'Kritischer Erfolgsfaktor',
          content: 'Studien zeigen, dass über 60% der IAM-Implementierungen aufgrund unzureichender Planung, mangelndem Change Management oder technischen Integrationsproblemen scheitern. Professionelle Implementierungsexpertise ist entscheidend für den Projekterfolg.'
        },
        whyUs: {
          title: 'ADVISORI Implementierungs-Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Bewährte Implementierungsmethoden mit über 200 erfolgreichen IAM-Projekten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Expertise für optimale Technologie-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitliches Change Management für maximale Benutzerakzeptanz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Betreuung von der Planung bis zum operativen Betrieb'
            }
          ]
        },
        additionalInfo: 'Moderne IAM-Implementierungen nutzen zunehmend Cloud-native Architekturen, DevOps-Prinzipien und automatisierte Deployment-Pipelines, um Implementierungszeiten zu verkürzen und Risiken zu minimieren. Diese technologische Evolution ermöglicht es, auch komplexe Enterprise-IAM-Systeme agil und iterativ zu implementieren.',
        serviceDescription: 'Wir begleiten Sie durch den gesamten Implementierungszyklus – von der detaillierten Projektplanung und Architektur-Vorbereitung über die technische Umsetzung und Systemintegration bis hin zum Go-Live-Support und der kontinuierlichen Optimierung. Unser Ansatz gewährleistet termingerechte, budgetkonforme und qualitativ hochwertige IAM-Implementierungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Implementierungsplanung und Projekt-Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Technische Systemkonfiguration und Integration in bestehende Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Umfassendes Testing und Qualitätssicherung vor Produktionsfreigabe'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Change Management und Benutzer-Training für erfolgreiche Adoption'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Go-Live-Support und kontinuierliche Optimierung nach Implementierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser bewährter IAM-Implementierungsansatz',
        description: 'Wir verfolgen einen strukturierten, risikominimierten Implementierungsansatz, der bewährte Projektmanagement-Methoden mit spezialisierten IAM-Expertisen kombiniert und dabei höchste Qualitätsstandards mit agiler Flexibilität vereint.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Assessment und detaillierte Implementierungsplanung mit Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Agile Deployment-Zyklen mit iterativen Rollouts und kontinuierlichem Stakeholder-Feedback'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Rigorose Testing-Strategien mit automatisierten Tests und umfassender Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Strukturiertes Change Management mit gezielten Training-Programmen und Support-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Performance-Monitoring für nachhaltigen Betriebserfolg'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Erfolgreiche IAM-Implementierungen sind das Ergebnis strategischer Planung, technischer Exzellenz und umfassenden Change Managements. Unsere Erfahrung zeigt, dass Unternehmen, die IAM-Implementierungen als ganzheitliche Transformationsprojekte verstehen und nicht nur als technische Installationen, signifikant höhere Erfolgsraten und Benutzerakzeptanz erzielen. Der Schlüssel liegt in der Balance zwischen technischer Perfektion und menschenzentriertem Design, kombiniert mit einer klaren Vision für die digitale Zukunft des Unternehmens.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Implementierungsplanung und Projekt-Setup',
          description: 'Entwicklung einer umfassenden Implementierungsstrategie mit detaillierter Projektplanung, Ressourcenallokation und Risikomanagement für erfolgreiche IAM-Transformationen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Comprehensive Project Charter und Stakeholder-Alignment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Detaillierte Implementierungs-Roadmap mit Meilenstein-Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risk Assessment und Mitigation-Strategien für kritische Projektrisiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Resource Planning und Team-Strukturierung für optimale Projektdurchführung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technische Systemkonfiguration und Integration',
          description: 'Professionelle technische Umsetzung der IAM-Lösung mit nahtloser Integration in bestehende IT-Landschaften und optimaler Systemkonfiguration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Enterprise-Architektur-Implementation mit Best-Practice-Konfigurationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Legacy-System-Integration ohne Betriebsunterbrechungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Cloud-native Deployment mit Hybrid-Integration und Multi-Cloud-Support'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Performance-Optimierung und Skalierbarkeits-Konfiguration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Umfassendes Testing und Qualitätssicherung',
          description: 'Rigorose Testing-Strategien mit automatisierten Tests, Penetration Testing und umfassender Qualitätssicherung vor Produktionsfreigabe.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Automated Testing-Pipelines mit kontinuierlicher Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Security Testing und Penetration Testing für robuste Sicherheit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Performance Testing und Load Testing für Produktionsbereitschaft'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'User Acceptance Testing mit strukturierten Feedback-Prozessen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Change Management und User-Adoption-Strategien',
          description: 'Strukturiertes Change Management mit gezielten Training-Programmen, Kommunikationsstrategien und Support-Strukturen für maximale Benutzerakzeptanz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Change Impact Assessment und Stakeholder-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Zielgruppenspezifische Training-Programme und Schulungskonzepte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Kommunikationsstrategien und Awareness-Kampagnen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Support-Strukturen und Help-Desk-Integration für Go-Live-Phase'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Go-Live-Support und Rollout-Management',
          description: 'Professioneller Go-Live-Support mit strukturiertem Rollout-Management, Incident-Response und sofortiger Problemlösung während der kritischen Einführungsphase.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Structured Rollout-Strategien mit Pilot-Gruppen und schrittweiser Ausweitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Real-time Monitoring und Incident-Response während Go-Live'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Immediate Support und Troubleshooting für kritische Issues'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Post-Go-Live-Assessment und Lessons-Learned-Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Kontinuierliche Optimierung und Performance-Management',
          description: 'Nachhaltige Betreuung nach der Implementierung mit kontinuierlicher Optimierung, Performance-Monitoring und strategischer Weiterentwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Performance Monitoring und KPI-basierte Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Continuous Improvement-Prozesse mit regelmäßigen Reviews'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Capacity Planning und Skalierungsstrategien für Wachstum'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategic Roadmap-Updates und Innovation-Integration'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamImplementierungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Implementierung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
