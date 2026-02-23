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
    console.log('Creating IAM Projekte page...')

    const iamProjekteData = {
      _type: 'servicePage',
      _id: 'iam-projekte',
      title: 'IAM Projekte - Strategische Projektführung für Identity & Access Management',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-projekte'
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
        title: 'IAM Projekte - Strategische Projektführung für Identity & Access Management | ADVISORI',
        description: 'Professionelle IAM Projektführung: Strategische Planung, agile Implementierung, Risikomanagement und Change Management für erfolgreiche Identity & Access Management Transformationen.',
        keywords: 'IAM Projekte, Identity Access Management Projekte, IAM Projektmanagement, IAM Implementation, IAM Transformation, Projektführung IAM, IAM Consulting, Identity Management Projekte, Access Management Projekte, IAM Roadmap'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Projekte Strategische Projektführung Identity Access Management'
        },
        tagline: 'Excellence in IAM-Projektdelivery für nachhaltige Transformation',
        heading: 'IAM Projekte - Strategische Projektführung für Identity & Access Management',
        description: 'IAM Projekte erfordern eine einzigartige Kombination aus technischer Expertise, strategischem Weitblick und exzellenter Projektführung, um komplexe Identity & Access Management Transformationen erfolgreich zu realisieren. Unsere bewährten Projektmethodologien verbinden agile Entwicklungsansätze mit robusten Governance-Strukturen und ermöglichen es Organisationen, auch die anspruchsvollsten IAM-Initiativen termingerecht, budgetkonform und mit maximaler Geschäftswirkung umzusetzen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische Projektplanung mit Business-Impact-Fokus und ROI-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Agile Implementierungsmethodologien für flexible und iterative Delivery'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Umfassendes Risikomanagement und proaktive Problemlösung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Change Management und Stakeholder-Engagement für nachhaltige Adoption'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische IAM-Projektexzellenz: Von der Vision zur erfolgreichen Umsetzung',
        description: 'IAM Projekte gehören zu den komplexesten und kritischsten Transformationsinitiativen in modernen Unternehmen, da sie sowohl technische Innovation als auch organisatorische Veränderungen vorantreiben müssen. Erfolgreiche IAM-Projektführung erfordert eine ganzheitliche Herangehensweise, die strategische Planung, technische Exzellenz, effektives Stakeholder-Management und robuste Governance-Strukturen nahtlos miteinander verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Projektarchitektur mit klarer Vision, messbaren Zielen und Business-Case-Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Agile Projektmethodologien mit iterativer Entwicklung und kontinuierlicher Stakeholder-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Umfassendes Risikomanagement mit proaktiver Identifikation und Mitigation kritischer Projektrisiken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Change Management und Organizational Readiness für nachhaltige Transformation und User Adoption'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Qualitätssicherung und Compliance-Integration für regulatorische Exzellenz und Audit-Bereitschaft'
          }
        ],
        alert: {
          title: 'Kritischer Erfolgsfaktor',
          content: 'IAM Projekte scheitern häufig nicht an technischen Herausforderungen, sondern an unzureichender strategischer Planung, mangelhaftem Stakeholder-Management oder fehlender organisatorischer Vorbereitung. Professionelle Projektführung ist daher entscheidend für den nachhaltigen Erfolg.'
        },
        whyUs: {
          title: 'ADVISORI IAM-Projektexzellenz',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Bewährte Projektmethodologien mit nachweislicher Erfolgshistorie in komplexen IAM-Transformationen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Ganzheitlicher Ansatz mit Integration von Technologie, Prozessen und organisatorischen Aspekten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Agile und adaptive Projektführung für flexible Reaktion auf sich ändernde Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Umfassende Expertise in Change Management und Stakeholder-Engagement für nachhaltige Adoption'
            }
          ]
        },
        additionalInfo: 'Moderne IAM Projekte erfordern eine neue Generation von Projektführungsansätzen, die traditionelle Wasserfallmethodologien mit agilen Prinzipien verbinden und dabei die spezifischen Herausforderungen von Identitäts- und Zugriffsverwaltungssystemen berücksichtigen. Diese Hybrid-Ansätze ermöglichen es, sowohl die Komplexität enterprise-weiter Systeme als auch die Notwendigkeit schneller Iterationen und kontinuierlicher Verbesserungen zu bewältigen.',
        serviceDescription: 'Wir begleiten Sie durch den gesamten IAM-Projektlebenszyklus – von der initialen Strategieentwicklung und Projektplanung über die agile Implementierung bis hin zum erfolgreichen Go-Live und der nachhaltigen Betriebsübergabe. Unser Ansatz kombiniert bewährte Projektmanagement-Frameworks mit spezialisierten IAM-Methodologien für optimale Projektergebnisse.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Projektplanung und Business-Case-Entwicklung mit ROI-Fokus'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Agile Projektführung mit Scrum/Kanban-Integration und kontinuierlicher Delivery'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Risikomanagement und Quality Assurance für robuste Projektausführung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Change Management und Stakeholder-Engagement für nachhaltige Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Compliance-Integration und Audit-Vorbereitung für regulatorische Exzellenz'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer IAM-Projektführungsansatz',
        description: 'Wir verfolgen einen ganzheitlichen, business-orientierten Ansatz für IAM-Projektführung, der bewährte Projektmanagement-Prinzipien mit spezialisierten IAM-Methodologien verbindet und dabei agile Flexibilität mit strategischer Governance vereint.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Projektinitiierung mit umfassender Stakeholder-Analyse und Business-Case-Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Agile Projektplanung mit iterativer Roadmap-Entwicklung und kontinuierlicher Anpassung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Risikoorientierte Projektausführung mit proaktivem Monitoring und adaptiver Steuerung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Qualitätssicherung und Compliance-Validierung während aller Projektphasen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Projektabschluss mit Knowledge Transfer und Betriebsübergabe-Exzellenz'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Erfolgreiche IAM Projekte sind weit mehr als technische Implementierungen – sie sind strategische Transformationsinitiativen, die das Fundament für digitale Innovation und Geschäftswachstum legen. Unsere Erfahrung zeigt, dass die Kombination aus bewährten Projektmanagement-Prinzipien, agilen Methodologien und tiefgreifender IAM-Expertise entscheidend ist, um auch die komplexesten Identity-Transformationen erfolgreich zu realisieren. Professionelle Projektführung macht den Unterschied zwischen technischer Implementation und nachhaltiger Geschäftstransformation.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Projektplanung und Business-Case-Entwicklung',
          description: 'Entwicklung einer umfassenden Projektstrategie mit klarer Vision, messbaren Zielen und robustem Business-Case für maximale Stakeholder-Unterstützung und ROI-Optimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strategische Projektinitiierung mit Stakeholder-Analyse und Vision-Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Business-Case-Entwicklung mit ROI-Kalkulation und Benefit-Realization-Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Projektcharter-Erstellung mit klaren Zielen, Scope und Success-Kriterien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Ressourcenplanung und Budget-Entwicklung mit Contingency-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Agile Projektführung und Iterative Delivery',
          description: 'Implementation agiler Projektmethodologien mit kontinuierlicher Delivery, flexibler Anpassung an sich ändernde Anforderungen und optimaler Stakeholder-Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Agile Framework-Implementation mit Scrum/Kanban-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Sprint-Planning und Backlog-Management für kontinuierliche Delivery'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Daily Standups und Sprint Reviews für transparente Kommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Retrospectives und Continuous Improvement für Prozessoptimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Umfassendes Risikomanagement und Quality Assurance',
          description: 'Proaktive Identifikation, Bewertung und Mitigation von Projektrisiken mit robusten Quality-Assurance-Prozessen für erfolgreiche Projektausführung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Risk Assessment und Risk Register Management mit kontinuierlicher Überwachung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Mitigation-Strategien und Contingency-Planning für kritische Risiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Quality Gates und Testing-Strategien für robuste Deliverables'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Issue Management und Escalation-Prozesse für schnelle Problemlösung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Change Management und Stakeholder-Engagement',
          description: 'Strategisches Change Management mit umfassendem Stakeholder-Engagement für nachhaltige Transformation und optimale User Adoption.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Change Impact Assessment und Readiness-Evaluation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Stakeholder-Mapping und Communication-Strategy-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Training-Programme und User-Adoption-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Resistance Management und Feedback-Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Compliance-Integration und Governance-Framework',
          description: 'Integration regulatorischer Anforderungen und Etablierung robuster Governance-Strukturen für Compliance-konforme Projektausführung und Audit-Bereitschaft.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Compliance-Mapping und Regulatory-Requirement-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Governance-Framework-Etablierung mit klaren Rollen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Audit-Trail-Management und Documentation-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Compliance-Monitoring und Reporting-Automation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Projektabschluss und Betriebsübergabe-Exzellenz',
          description: 'Strukturierter Projektabschluss mit umfassendem Knowledge Transfer, Betriebsübergabe und Post-Implementation-Support für nachhaltige Projektergebnisse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Go-Live-Planung und Cutover-Management für reibungslose Transition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Knowledge Transfer und Documentation-Handover'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Hypercare-Support und Post-Implementation-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Lessons Learned und Continuous Improvement für zukünftige Projekte'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamProjekteData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Projekte page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
