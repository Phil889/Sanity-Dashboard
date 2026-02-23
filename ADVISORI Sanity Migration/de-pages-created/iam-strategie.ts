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
    console.log('Creating IAM Strategie page...')

    const iamStrategieData = {
      _type: 'servicePage',
      _id: 'iam-strategie',
      title: 'IAM Strategie - Strategische Identitätsverwaltung für Unternehmen',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-strategie'
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
        title: 'IAM Strategie - Strategische Identitätsverwaltung für Unternehmen | ADVISORI',
        description: 'Professionelle IAM Strategieentwicklung: Strategische Identitätsverwaltung, Business-Alignment, Governance-Frameworks und ROI-optimierte Roadmaps für nachhaltige digitale Transformation.',
        keywords: 'IAM Strategie, Identitätsstrategie, IAM Governance, Identity Strategy, Strategic IAM Planning, IAM Roadmap, Identity Governance Framework, IAM Business Case, Strategic Identity Management, Enterprise IAM Strategy'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Strategie Strategische Identitätsverwaltung für Unternehmen'
        },
        tagline: 'Strategische IAM-Transformation für nachhaltigen Geschäftserfolg',
        heading: 'IAM Strategie - Strategische Identitätsverwaltung für Unternehmen',
        description: 'IAM Strategie ist das strategische Fundament für erfolgreiche digitale Transformation und bildet die Grundlage für intelligente Identitätsverwaltung, die Geschäftsprozesse beschleunigt, Sicherheitsrisiken minimiert und Compliance-Exzellenz ermöglicht. Unsere strategischen IAM-Ansätze transformieren Identitätsverwaltung von einem technischen Kostenfaktor zu einem strategischen Business-Enabler, der Innovation fördert, Wettbewerbsvorteile schafft und nachhaltiges Wachstum unterstützt.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Business-orientierte IAM-Strategieentwicklung mit messbarem ROI'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Ganzheitliche Governance-Frameworks für Enterprise-Scale-Deployment'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Strategische Roadmaps für nachhaltige digitale Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Zukunftssichere Architekturen für Innovation und Skalierbarkeit'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische IAM-Transformation: Von Vision zur Realität',
        description: 'Eine professionelle IAM Strategie ist das strategische Nervensystem moderner Unternehmen und entscheidet maßgeblich über den Erfolg digitaler Transformationsinitiativen. Sie orchestriert die komplexe Balance zwischen Sicherheit, Compliance, Benutzerfreundlichkeit und Geschäftsagilität, während sie gleichzeitig die Grundlage für Innovation, Wachstum und Wettbewerbsfähigkeit schafft. Strategische IAM-Planung geht weit über technische Implementierung hinaus und umfasst Governance, Change Management, Risikomanagement und kontinuierliche Optimierung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Business-Alignment mit strategischen Unternehmenszielen und digitalen Transformationsinitiativen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Governance-Framework-Entwicklung für nachhaltige Identitätsverwaltung und Compliance-Exzellenz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'ROI-optimierte Roadmap-Entwicklung mit priorisierten Implementierungsphasen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Risikomanagement-Integration für proaktive Bedrohungsabwehr und Compliance-Sicherheit'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Change-Management-Strategien für erfolgreiche Organisationstransformation'
          }
        ],
        alert: {
          title: 'Strategische Notwendigkeit',
          content: 'Unternehmen ohne kohärente IAM-Strategie sind exponentiell höheren Sicherheitsrisiken, Compliance-Verstößen und Ineffizienzen ausgesetzt. Eine durchdachte IAM-Strategie ist nicht nur ein Sicherheitsimperativ, sondern ein kritischer Erfolgsfaktor für digitale Transformation und nachhaltiges Geschäftswachstum.'
        },
        whyUs: {
          title: 'ADVISORI Strategic IAM Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Business-orientierte Strategieentwicklung mit messbarem Geschäftsimpact'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Ganzheitliche Governance-Expertise für Enterprise-Scale-Transformationen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Herstellerunabhängige Beratung für optimale Technologie-Entscheidungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Bewährte Methodiken für nachhaltige Organisationstransformation'
            }
          ]
        },
        additionalInfo: 'Moderne IAM-Strategien integrieren zunehmend künstliche Intelligenz, Zero-Trust-Prinzipien und Cloud-native Architekturen, um adaptive, intelligente Identitätsverwaltung zu ermöglichen. Diese strategische Evolution erfordert eine ganzheitliche Herangehensweise, die technische Innovation mit Geschäftsstrategie, Risikomanagement und Organisationsentwicklung verbindet.',
        serviceDescription: 'Wir entwickeln maßgeschneiderte IAM-Strategien, die Ihre spezifischen Geschäftsanforderungen, Risikoprofile und Wachstumsziele optimal unterstützen. Unser strategischer Ansatz kombiniert bewährte Governance-Frameworks mit innovativen Technologien und Change-Management-Expertise für eine IAM-Transformation, die nachhaltigen Geschäftserfolg ermöglicht.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische IAM-Vision und Business-Case-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Governance-Framework-Design und Compliance-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'ROI-optimierte Roadmap-Entwicklung und Priorisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Risikomanagement-Integration und Security-Framework-Alignment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Change-Management und Stakeholder-Engagement-Strategien'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer IAM-Entwicklungsansatz',
        description: 'Wir verfolgen einen ganzheitlichen, business-orientierten Ansatz für IAM-Strategieentwicklung, der strategische Vision mit praktischer Umsetzbarkeit verbindet und dabei alle relevanten Stakeholder, Risikofaktoren und Geschäftsziele berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Vision und Business-Alignment mit umfassender Stakeholder-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Current-State-Assessment und Gap-Analyse für fundierte Strategieentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Governance-Framework-Design mit Compliance- und Risikomanagement-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'ROI-optimierte Roadmap-Entwicklung mit priorisierten Implementierungsphasen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Change-Management und kontinuierliche Optimierung für nachhaltige Transformation'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Eine durchdachte IAM-Strategie ist das strategische Fundament für erfolgreiche digitale Transformation und entscheidet maßgeblich über die Zukunftsfähigkeit von Unternehmen. Unsere Erfahrung zeigt, dass Organisationen mit kohärenten IAM-Strategien nicht nur signifikant sicherer sind, sondern auch agiler, innovativer und wettbewerbsfähiger agieren. Die richtige strategische Herangehensweise transformiert Identitätsverwaltung von einem Kostenfaktor zu einem strategischen Wettbewerbsvorteil, der Geschäftswachstum ermöglicht und gleichzeitig höchste Sicherheits- und Compliance-Standards gewährleistet.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische IAM-Vision und Business-Case-Entwicklung',
          description: 'Entwicklung einer umfassenden IAM-Vision, die strategische Geschäftsziele mit technischen Möglichkeiten verbindet und einen überzeugenden Business Case für nachhaltige Investitionsentscheidungen bereitstellt.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Business-orientierte IAM-Vision mit strategischem Alignment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'ROI-Analyse und Business-Case-Entwicklung mit Kosten-Nutzen-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Stakeholder-Analyse und Executive-Engagement-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Strategic Value Proposition und Competitive Advantage Assessment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Governance-Framework-Design und Compliance-Integration',
          description: 'Entwicklung robuster Governance-Frameworks, die strategische Kontrolle, operative Effizienz und regulatorische Compliance optimal balancieren und nachhaltige IAM-Excellence ermöglichen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Enterprise-Governance-Framework mit Rollen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Compliance-Integration für regulatorische Exzellenz und Audit-Bereitschaft'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Policy-Framework-Entwicklung mit automatisierten Enforcement-Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Continuous Governance und Performance-Monitoring-Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'ROI-optimierte Roadmap-Entwicklung und Priorisierung',
          description: 'Erstellung strategischer Implementierungs-Roadmaps mit ROI-optimierter Priorisierung, die schnelle Erfolge mit langfristigen strategischen Zielen intelligent verbinden.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Phasenbasierte Roadmap mit Quick-Wins und strategischen Meilensteinen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'ROI-Priorisierung mit Business-Impact-Assessment und Ressourcenoptimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Risk-adjusted Timeline mit Contingency-Planning und Flexibilität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Success Metrics und KPI-Framework für kontinuierliche Erfolgsmessung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Risikomanagement-Integration und Security-Framework-Alignment',
          description: 'Integration umfassender Risikomanagement-Strategien in die IAM-Planung mit strategischem Security-Framework-Alignment für proaktive Bedrohungsabwehr und Compliance-Sicherheit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Strategic Risk Assessment mit Bedrohungsmodellierung und Impact-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Security-Framework-Integration mit Zero-Trust und Defense-in-Depth'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Compliance-Risk-Management für regulatorische Sicherheit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Continuous Risk Monitoring und Adaptive Security-Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Change-Management und Stakeholder-Engagement-Strategien',
          description: 'Entwicklung umfassender Change-Management-Strategien, die organisatorische Transformation ermöglichen und nachhaltiges Stakeholder-Engagement für erfolgreiche IAM-Adoption sicherstellen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Organizational Change Strategy mit Cultural Transformation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Stakeholder-Engagement-Framework mit Executive Sponsorship'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Training und Awareness-Programme für nachhaltige Adoption'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Communication Strategy und Success Story Development'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Kontinuierliche Strategieoptimierung und Innovation-Integration',
          description: 'Etablierung kontinuierlicher Strategieoptimierung mit proaktiver Innovation-Integration für zukunftssichere IAM-Strategien, die sich dynamisch an verändernde Geschäftsanforderungen anpassen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Strategic Review Cycles mit Performance-Assessment und Anpassung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Innovation-Integration mit Emerging Technology Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Market Intelligence und Competitive Analysis für strategische Vorteile'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Future-Proofing-Strategien für nachhaltige Wettbewerbsfähigkeit'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamStrategieData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Strategie page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
