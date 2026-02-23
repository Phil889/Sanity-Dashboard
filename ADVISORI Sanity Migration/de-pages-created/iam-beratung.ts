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
    console.log('Creating IAM Beratung page...')

    const iamBeratungData = {
      _type: 'servicePage',
      _id: 'iam-beratung',
      title: 'IAM Beratung - Strategische Identity & Access Management Beratung',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-beratung'
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
        title: 'IAM Beratung - Strategische Identity & Access Management Beratung | ADVISORI',
        description: 'Professionelle IAM Beratung für strategische Identity & Access Management Transformation: Strategieentwicklung, Architektur-Design, Implementierungsbegleitung und Compliance-Optimierung für maximale Sicherheit.',
        keywords: 'IAM Beratung, Identity Access Management Consulting, IAM Strategie, IAM Architektur, IAM Implementierung, Identity Governance Beratung, Zero Trust Consulting, Privileged Access Management Beratung, IAM Compliance, Identity Security Consulting'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Beratung Strategische Identity Access Management Beratung'
        },
        tagline: 'Strategische IAM-Beratung für nachhaltige Identitätssicherheit',
        heading: 'IAM Beratung - Strategische Identity & Access Management Beratung',
        description: 'IAM Beratung ist der Schlüssel für eine erfolgreiche digitale Transformation und bildet das strategische Fundament für moderne Unternehmenssicherheit. Unsere ganzheitliche IAM-Beratung transformiert komplexe Identitätslandschaften in intelligente, adaptive Sicherheitsarchitekturen, die Geschäftsprozesse beschleunigen, Compliance automatisieren und gleichzeitig höchste Sicherheitsstandards gewährleisten. Als erfahrene IAM-Berater begleiten wir Sie von der strategischen Vision bis zur operativen Exzellenz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische IAM-Roadmap mit Business-Impact-Fokus und ROI-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Zero-Trust-Architektur-Design für moderne Sicherheitsanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Herstellerunabhängige Beratung für optimale Technologie-Auswahl'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Compliance-by-Design für regulatorische Exzellenz und Audit-Bereitschaft'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische IAM-Beratung: Von der Vision zur operativen Exzellenz',
        description: 'Professionelle IAM-Beratung ist weit mehr als technische Implementierungsunterstützung – sie ist strategische Unternehmensberatung, die Identity & Access Management als Business-Enabler positioniert und dabei komplexe Sicherheitsanforderungen mit operativer Effizienz vereint. In einer Ära zunehmender Cyber-Bedrohungen und regulatorischer Komplexität bildet expertenbetreute IAM-Transformation das unverzichtbare Fundament für nachhaltigen Geschäftserfolg und digitale Resilienz.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische IAM-Vision und Business-Case-Entwicklung mit messbaren Erfolgsmetriken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Enterprise-Architektur-Design mit Zero-Trust-Prinzipien und Cloud-native Ansätzen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Herstellerunabhängige Technologie-Bewertung und optimale Solution-Auswahl'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Change Management und Stakeholder-Alignment für nachhaltige Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Compliance-Integration und Governance-Framework für regulatorische Exzellenz'
          }
        ],
        alert: {
          title: 'Strategische Notwendigkeit',
          content: 'Unternehmen ohne professionelle IAM-Beratung riskieren suboptimale Technologie-Entscheidungen, ineffiziente Implementierungen und mangelnde strategische Ausrichtung. Expertenbetreute IAM-Transformation reduziert Projektrisiken signifikant und maximiert den Business-Value.'
        },
        whyUs: {
          title: 'ADVISORI IAM-Beratungsexzellenz',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Ganzheitliche Beratungsansätze mit strategischem Business-Impact-Fokus'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Expertise für objektive Technologie-Empfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methodiken und Best-Practice-Frameworks aus hunderten Projekten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'End-to-End-Begleitung von der Strategie bis zur operativen Optimierung'
            }
          ]
        },
        additionalInfo: 'Moderne IAM-Beratung integriert zunehmend künstliche Intelligenz, maschinelles Lernen und Behavioral Analytics in strategische Empfehlungen, um proaktive Sicherheitsmaßnahmen zu ermöglichen und Benutzererfahrungen zu optimieren. Diese technologische Evolution erfordert spezialisierte Beratungsexpertise für erfolgreiche Transformation.',
        serviceDescription: 'Wir begleiten Sie durch die komplette IAM-Transformation – von der strategischen Beratung und Architektur-Design über die Implementierungsbegleitung bis hin zur operativen Optimierung und kontinuierlichen Weiterentwicklung. Unser Beratungsansatz kombiniert bewährte Methoden mit innovativen Technologien für eine IAM-Landschaft, die Ihre spezifischen Geschäftsanforderungen optimal unterstützt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische IAM-Beratung und Enterprise-Vision-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Architektur-Design und Technologie-Roadmap-Beratung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierungsbegleitung und Project-Management-Support'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Compliance-Beratung und Governance-Framework-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Change Management und Stakeholder-Enablement-Beratung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer IAM-Beratungsansatz',
        description: 'Wir verfolgen einen ganzheitlichen, business-orientierten Beratungsansatz für IAM-Transformationen, der strategische Unternehmensberatung mit technischer Tiefenexpertise verbindet und dabei modernste Sicherheitsarchitekturen mit optimaler Geschäftsausrichtung vereint.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Assessment-Phase mit Business-Impact-Analyse und Stakeholder-Alignment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Architektur-Design-Beratung mit Zero-Trust-Prinzipien und Future-Readiness-Fokus'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierungsbegleitung mit agilen Methoden und kontinuierlicher Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Change-Management-Beratung für nachhaltige Adoption und User-Enablement'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Beratung und strategische Weiterentwicklung für langfristigen Erfolg'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Professionelle IAM-Beratung ist der entscheidende Erfolgsfaktor für jede digitale Transformation und bestimmt maßgeblich über den langfristigen Geschäftserfolg. Unsere Erfahrung zeigt, dass Unternehmen, die auf strategische IAM-Beratung setzen, nicht nur signifikant bessere Sicherheitsergebnisse erzielen, sondern auch ihre Geschäftsprozesse nachhaltig optimieren. Die richtige Beratungsexpertise ermöglicht es, IAM als strategischen Wettbewerbsvorteil zu positionieren und dabei Sicherheit, Compliance und Innovation erfolgreich zu vereinen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische IAM-Beratung und Vision-Entwicklung',
          description: 'Entwicklung einer umfassenden IAM-Strategie und Enterprise-Vision, die Ihre Geschäftsziele unterstützt und eine klare Roadmap für die strategische Transformation bereitstellt.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Business-orientierte IAM-Vision und strategische Zielsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Comprehensive Current-State-Assessment und Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'ROI-optimierte Transformations-Roadmap und Business-Case-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Stakeholder-Alignment und Executive-Sponsorship-Sicherung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Enterprise-Architektur-Beratung und Design',
          description: 'Professionelle Beratung für die Entwicklung moderner IAM-Architekturen mit Zero-Trust-Prinzipien, Cloud-native Ansätzen und zukunftssicherer Technologie-Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Zero-Trust-Architektur-Design und Security-Framework-Beratung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Cloud-native Architektur-Patterns und Hybrid-Integration-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Skalierbarkeits-Design und Performance-Optimierung-Beratung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration-Architecture und API-Strategy-Entwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Technologie-Beratung und Solution-Selection',
          description: 'Herstellerunabhängige Beratung für die optimale Auswahl von IAM-Technologien und -Lösungen basierend auf Ihren spezifischen Anforderungen und strategischen Zielen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Herstellerunabhängige Technologie-Bewertung und Vendor-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Requirements-Engineering und Solution-Matching-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'TCO-Analyse und Investment-Optimierung-Beratung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Proof-of-Concept-Begleitung und Pilot-Projekt-Beratung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Implementierungsbegleitung und Project-Management',
          description: 'Professionelle Begleitung während der IAM-Implementierung mit bewährten Projektmanagement-Methoden und kontinuierlicher Qualitätssicherung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Agile Implementierungs-Begleitung und Sprint-Planning-Support'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Quality-Assurance-Beratung und Testing-Strategy-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Risk-Management und Issue-Resolution-Support'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Go-Live-Begleitung und Rollout-Strategy-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Compliance-Beratung und Governance-Framework',
          description: 'Spezialisierte Beratung für die Entwicklung robuster Governance-Strukturen und die Sicherstellung kontinuierlicher Compliance-Exzellenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Regulatory-Compliance-Beratung und Framework-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Identity-Governance-Design und Policy-Management-Beratung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Audit-Readiness-Beratung und Documentation-Strategy'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Risk-Assessment-Methodiken und Continuous-Monitoring-Design'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Change Management und Organizational Enablement',
          description: 'Ganzheitliche Beratung für erfolgreiche organisatorische Transformation und nachhaltige Adoption neuer IAM-Prozesse und -Technologien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Change-Management-Strategy und Stakeholder-Engagement-Planung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Training-Program-Design und User-Enablement-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Communication-Strategy und Adoption-Measurement-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Organizational-Readiness-Assessment und Culture-Transformation-Beratung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamBeratungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Beratung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
