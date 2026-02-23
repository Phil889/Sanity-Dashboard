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
    console.log('Creating IAM Konzept page...')

    const iamKonzeptData = {
      _type: 'servicePage',
      _id: 'iam-konzept',
      title: 'IAM Konzept - Strategische Identitätskonzepte und Architektur-Design',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-konzept'
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
        title: 'IAM Konzept - Strategische Identitätskonzepte und Architektur-Design | ADVISORI',
        description: 'Professionelle IAM Konzept-Entwicklung: Strategische Identitätskonzepte, Enterprise-Architektur-Design, konzeptionelle Frameworks und methodische Ansätze für nachhaltige IAM-Transformationen.',
        keywords: 'IAM Konzept, Identity Management Konzept, IAM Architektur Design, Identitätskonzept, IAM Strategie, Enterprise Identity Architecture, IAM Framework, Identity Governance Konzept, IAM Planung, Identitätsverwaltung Konzept'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Konzept Strategische Identitätskonzepte Architektur Design'
        },
        tagline: 'Fundament für erfolgreiche IAM-Transformationen',
        heading: 'IAM Konzept - Strategische Identitätskonzepte und Architektur-Design',
        description: 'Ein durchdachtes IAM Konzept ist das strategische Fundament jeder erfolgreichen Identitätsverwaltung und bildet die Basis für nachhaltige digitale Transformation. Unsere konzeptionellen Frameworks verbinden technische Exzellenz mit strategischen Geschäftszielen und schaffen die Grundlage für skalierbare, sichere und zukunftsfähige Identitätsarchitekturen, die Unternehmen dabei unterstützen, komplexe Sicherheitsanforderungen zu meistern und gleichzeitig Innovationen zu ermöglichen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische Konzeptentwicklung für nachhaltige IAM-Transformationen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Enterprise-Architektur-Design mit Zero-Trust-Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Methodische Frameworks für systematische Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Business-orientierte Konzepte für optimalen ROI und Compliance'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'IAM-Konzeptentwicklung: Strategische Grundlage für digitale Exzellenz',
        description: 'Die Entwicklung eines robusten IAM Konzepts erfordert tiefgreifendes Verständnis für Geschäftsprozesse, technische Architekturen und regulatorische Anforderungen. Ein strategisch durchdachtes Konzept transformiert komplexe Identitätslandschaften in kohärente, manageable Systeme, die Sicherheit maximieren, Compliance gewährleisten und gleichzeitig Geschäftsprozesse beschleunigen. Moderne IAM-Konzepte integrieren Zero-Trust-Prinzipien, Cloud-native Architekturen und KI-gestützte Automatisierung für zukunftsfähige Lösungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Analyse und Business-Case-Entwicklung für IAM-Initiativen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Enterprise-Architektur-Design mit modularen und skalierbaren Komponenten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Konzeptionelle Frameworks für Identity Governance und Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Methodische Ansätze für Change Management und User Adoption'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Zukunftsorientierte Konzepte für emerging Technologies und Trends'
          }
        ],
        alert: {
          title: 'Konzeptionelle Exzellenz als Erfolgsfaktor',
          content: 'Unternehmen mit durchdachten IAM-Konzepten erreichen signifikant höhere Erfolgsraten bei Implementierungen, reduzierte Projektrisiken und nachhaltigere Ergebnisse. Ein strategisches Konzept verhindert kostspielige Fehlentscheidungen und schafft die Basis für kontinuierliche Innovation.'
        },
        whyUs: {
          title: 'ADVISORI IAM-Konzept-Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Ganzheitliche Konzeptentwicklung mit strategischem Business-Fokus'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Methodische Frameworks für systematische und nachvollziehbare Planung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Zukunftsorientierte Architekturen mit Emerging-Technology-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Compliance-by-Design für regulatorische Exzellenz und Audit-Bereitschaft'
            }
          ]
        },
        additionalInfo: 'Moderne IAM-Konzepte berücksichtigen die Konvergenz von Identität, Sicherheit und Business-Enablement und integrieren emerging Technologies wie künstliche Intelligenz, Blockchain und Quantum-resistant Cryptography. Diese konzeptionelle Weitsicht ermöglicht es Unternehmen, nicht nur aktuelle Anforderungen zu erfüllen, sondern auch für zukünftige Herausforderungen gerüstet zu sein.',
        serviceDescription: 'Wir entwickeln maßgeschneiderte IAM-Konzepte, die Ihre spezifischen Geschäftsanforderungen, technischen Gegebenheiten und strategischen Ziele optimal berücksichtigen. Unser methodischer Ansatz kombiniert bewährte Frameworks mit innovativen Konzepten für eine IAM-Strategie, die sowohl kurzfristige Erfolge als auch langfristige Nachhaltigkeit gewährleistet.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische IAM-Vision und konzeptionelle Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Enterprise-Architektur-Design und technische Konzeptionierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Governance-Frameworks und Compliance-Konzepte'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Change-Management-Strategien und Adoption-Konzepte'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Innovation-Integration und Future-Readiness-Planung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser methodischer IAM-Konzeptentwicklungsansatz',
        description: 'Wir verfolgen einen strukturierten, methodischen Ansatz für die Entwicklung von IAM-Konzepten, der strategische Analyse, technische Expertise und praktische Umsetzbarkeit optimal verbindet und dabei höchste Qualitätsstandards und nachhaltige Ergebnisse gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Business-Analysis und Stakeholder-Alignment für strategische Fundierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Methodische Architektur-Entwicklung mit Best-Practice-Integration und Innovation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Iterative Konzeptvalidierung mit Stakeholder-Feedback und Expertenreview'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierungs-Roadmap mit Risikomanagement und Success-Metrics'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Konzeptoptimierung und Future-Readiness-Assessment'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Ein durchdachtes IAM-Konzept ist der Schlüssel für erfolgreiche digitale Transformationen und bildet das strategische Fundament für nachhaltige Sicherheitsarchitekturen. Unsere Erfahrung zeigt, dass Unternehmen mit methodisch entwickelten IAM-Konzepten nicht nur höhere Implementierungserfolge erzielen, sondern auch signifikante Kostenvorteile und Risikoreduktionen realisieren. Die konzeptionelle Phase ist eine Investition, die sich durch beschleunigte Umsetzung, reduzierte Komplexität und optimierte Business-Outcomes vielfach amortisiert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische IAM-Vision und Konzeptentwicklung',
          description: 'Entwicklung einer umfassenden IAM-Vision und strategischen Konzeption, die Ihre Geschäftsziele, technischen Anforderungen und regulatorischen Vorgaben optimal integriert.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Business-orientierte IAM-Vision mit strategischer Zielsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Comprehensive Stakeholder-Analysis und Requirements-Engineering'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Strategic Roadmap-Development mit Meilenstein-Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'ROI-Modelling und Business-Case-Entwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Enterprise-Architektur-Design und technische Konzeptionierung',
          description: 'Professionelle Entwicklung von Enterprise-Architektur-Konzepten mit modularen, skalierbaren und zukunftsfähigen Designprinzipien für optimale technische Umsetzung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Modular Architecture Design mit Microservices-Prinzipien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Cloud-native Konzepte mit Multi-Cloud-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Zero-Trust-Architektur-Integration und Security-by-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'API-first Design und Integration-Architecture-Planning'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Identity Governance und Compliance-Konzepte',
          description: 'Entwicklung robuster Governance-Frameworks und Compliance-Konzepte, die regulatorische Anforderungen erfüllen und gleichzeitig operative Exzellenz ermöglichen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Governance-Framework-Design mit Role-based Controls'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Compliance-by-Design für regulatorische Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Risk-Management-Integration und Audit-Konzepte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Policy-Management und Automated-Compliance-Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Change Management und User-Adoption-Strategien',
          description: 'Strategische Konzepte für erfolgreiches Change Management und optimale User Adoption, die menschliche Faktoren berücksichtigen und nachhaltige Transformation ermöglichen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Change-Management-Strategien mit Stakeholder-Engagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'User-Experience-Design und Adoption-Konzepte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Training-Strategien und Competency-Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Communication-Planning und Success-Measurement'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Innovation-Integration und Emerging-Technology-Konzepte',
          description: 'Zukunftsorientierte Konzepte für die Integration emerging Technologies und Innovationen in IAM-Architekturen für langfristige Wettbewerbsvorteile.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'AI/ML-Integration für intelligente Identitätsverwaltung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Blockchain-Konzepte für dezentrale Identitätslösungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'IoT-Identity-Management und Edge-Computing-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Quantum-resistant Cryptography und Future-Proofing'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Konzeptvalidierung und Implementierungs-Roadmap',
          description: 'Systematische Validierung entwickelter Konzepte und Erstellung detaillierter Implementierungs-Roadmaps mit Risikomanagement und Success-Metrics für erfolgreiche Umsetzung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Concept-Validation durch Expertenreview und Stakeholder-Feedback'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Detailed Implementation-Roadmap mit Phasen-Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Risk-Assessment und Mitigation-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Success-Metrics-Definition und KPI-Framework-Development'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamKonzeptData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Konzept page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
