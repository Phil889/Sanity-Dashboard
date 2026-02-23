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
    console.log('Creating IAM Architektur page...')

    const iamArchitekturData = {
      _type: 'servicePage',
      _id: 'iam-architektur',
      title: 'IAM Architektur - Enterprise Identity Architecture Design',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-architektur'
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
        title: 'IAM Architektur - Enterprise Identity Architecture Design | ADVISORI',
        description: 'Professionelle IAM Architektur-Lösungen: Enterprise Identity Architecture Design, skalierbare Authentifizierungssysteme, Zero-Trust-Frameworks und moderne Identitätsarchitekturen für maximale Sicherheit und Performance.',
        keywords: 'IAM Architektur, Identity Architecture, Enterprise Architecture, Zero Trust Architecture, Authentication Framework, Identity Federation, Scalable IAM, Cloud Identity Architecture, Hybrid IAM, Identity Governance Architecture'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Architektur Enterprise Identity Architecture Design'
        },
        tagline: 'Zukunftssichere Identitätsarchitekturen für Enterprise-Umgebungen',
        heading: 'IAM Architektur - Enterprise Identity Architecture Design',
        description: 'IAM Architektur bildet das strategische Fundament moderner Unternehmenssicherheit und ermöglicht es Organisationen, hochskalierbare, resiliente und adaptive Identitätssysteme zu entwickeln, die komplexe Geschäftsanforderungen erfüllen und gleichzeitig höchste Sicherheitsstandards gewährleisten. Unsere architektonischen Ansätze transformieren traditionelle Identitätsverwaltung in intelligente, cloud-native Systeme, die Geschäftsprozesse beschleunigen und dabei regulatorische Exzellenz automatisiert sicherstellen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Enterprise-grade Architektur-Design für skalierbare Identitätssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Zero-Trust-Frameworks mit adaptiven Sicherheitsarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Cloud-native Integration mit Hybrid- und Multi-Cloud-Support'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Microservices-basierte Architekturen für maximale Flexibilität'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische IAM-Architektur: Foundation für digitale Transformation',
        description: 'Moderne IAM-Architekturen sind das Rückgrat erfolgreicher digitaler Transformationsinitiativen und bilden die technologische Grundlage für sichere, skalierbare und zukunftsfähige Identitätssysteme. Eine durchdachte Architektur ermöglicht es Unternehmen, komplexe Identitätslandschaften zu orchestrieren, während sie gleichzeitig Flexibilität für zukünftige Anforderungen und Technologien bewahrt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Layered Architecture Design mit klarer Trennung von Präsentation, Logik und Datenschicht'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Microservices-Architektur für modulare, skalierbare und wartbare Identitätsdienste'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Event-driven Architecture für Real-time Synchronisation und Benachrichtigungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'API-first Design für nahtlose Integration und Ecosystem-Konnektivität'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Cloud-native Patterns für elastische Skalierung und globale Verfügbarkeit'
          }
        ],
        alert: {
          title: 'Architektonische Exzellenz',
          content: 'Eine professionell konzipierte IAM-Architektur ist entscheidend für langfristigen Erfolg. Unternehmen mit durchdachten Identitätsarchitekturen können schneller auf Marktveränderungen reagieren, neue Technologien integrieren und dabei Sicherheit und Compliance gewährleisten.'
        },
        whyUs: {
          title: 'ADVISORI Architektur-Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Enterprise Architecture Expertise mit bewährten Design-Patterns'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Technology-agnostic Ansätze für optimale Vendor-Unabhängigkeit'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Cloud-native und Hybrid-Integration für moderne IT-Landschaften'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Security-by-Design mit Zero-Trust-Prinzipien und Defense-in-Depth'
            }
          ]
        },
        additionalInfo: 'Die Evolution von IAM-Architekturen integriert zunehmend Container-Technologien, Serverless-Computing und Edge-Computing-Paradigmen. Diese technologischen Trends erfordern neue architektonische Ansätze, die Skalierbarkeit, Performance und Sicherheit in verteilten, cloud-nativen Umgebungen gewährleisten.',
        serviceDescription: 'Wir entwickeln maßgeschneiderte IAM-Architekturen, die Ihre spezifischen Geschäftsanforderungen erfüllen und gleichzeitig Flexibilität für zukünftige Entwicklungen bieten. Unser Ansatz kombiniert bewährte Enterprise-Architecture-Prinzipien mit innovativen Cloud-native-Technologien für eine Identitätsarchitektur, die Ihr Unternehmen langfristig unterstützt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Enterprise Architecture Assessment und Strategic Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Cloud-native Architecture Development und Migration Planning'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Microservices Design und API Architecture'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Security Architecture Integration und Zero-Trust Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance Optimization und Scalability Engineering'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Architektur-Entwicklungsansatz',
        description: 'Wir verfolgen einen strukturierten, methodischen Ansatz für die Entwicklung von IAM-Architekturen, der bewährte Enterprise-Architecture-Frameworks mit agilen Entwicklungsmethoden kombiniert und dabei stets Business-Alignment und technische Exzellenz sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Architecture Assessment und Current-State-Analyse mit Gap-Identifikation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Target Architecture Design mit Future-State-Vision und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Proof-of-Concept Development und Architecture Validation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Iterative Implementation mit kontinuierlicher Architektur-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Governance Establishment und Architecture Evolution Management'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Eine durchdachte IAM-Architektur ist das unsichtbare Fundament erfolgreicher digitaler Transformation und entscheidet maßgeblich über die Zukunftsfähigkeit von Unternehmen. Unsere Erfahrung zeigt, dass Organisationen mit professionell konzipierten Identitätsarchitekturen nicht nur sicherer und compliance-konformer operieren, sondern auch deutlich agiler auf Marktveränderungen reagieren können. Die richtige Architektur ermöglicht es, Innovation und Sicherheit zu vereinen, während sie gleichzeitig die Grundlage für skalierbare Geschäftsmodelle schafft.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Enterprise Architecture Assessment und Strategic Design',
          description: 'Umfassende Bewertung bestehender Identitätsarchitekturen und Entwicklung strategischer Zielarchitekturen, die Geschäftsanforderungen optimal unterstützen und Zukunftssicherheit gewährleisten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Current-State Architecture Analysis und Capability Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Business Requirements Mapping und Stakeholder Alignment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Target Architecture Vision und Strategic Roadmap Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Architecture Governance Framework und Decision Rights'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Cloud-native Architecture Development und Migration',
          description: 'Entwicklung moderner, cloud-nativer IAM-Architekturen mit Fokus auf Skalierbarkeit, Resilienz und Performance für Multi-Cloud und Hybrid-Umgebungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Cloud-native Design Patterns und Container-Orchestrierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Multi-Cloud Strategy und Vendor-Lock-in-Vermeidung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Serverless Architecture Integration und Event-driven Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Migration Strategy und Legacy System Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Microservices Design und API Architecture',
          description: 'Entwicklung modularer, microservices-basierter IAM-Architekturen mit robusten API-Designs für maximale Flexibilität und Wartbarkeit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Domain-driven Design und Service Decomposition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'API-first Architecture und RESTful Service Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Service Mesh Integration und Inter-Service Communication'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Event Sourcing und CQRS Pattern Implementation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Security Architecture Integration und Zero-Trust',
          description: 'Integration umfassender Sicherheitsarchitekturen mit Zero-Trust-Prinzipien und Defense-in-Depth-Strategien für maximalen Schutz kritischer Identitätsdaten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Zero-Trust Architecture Design und Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Defense-in-Depth Strategy und Security Layer Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Threat Modeling und Risk-based Architecture Decisions'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Compliance-by-Design und Regulatory Architecture Alignment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Performance Optimization und Scalability Engineering',
          description: 'Optimierung von IAM-Architekturen für höchste Performance und elastische Skalierbarkeit zur Bewältigung wachsender Benutzer- und Transaktionsvolumen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Performance Architecture Design und Bottleneck Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Horizontal und Vertical Scaling Strategies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Caching Architecture und Data Distribution Patterns'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Load Balancing und High Availability Design'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Architecture Governance und Evolution Management',
          description: 'Etablierung robuster Architecture-Governance-Strukturen und kontinuierliche Evolution-Management-Prozesse für nachhaltige Architektur-Excellence.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Architecture Governance Framework und Review Processes'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Technology Radar und Innovation Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Architecture Debt Management und Technical Debt Reduction'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Continuous Architecture Assessment und Improvement'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamArchitekturData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Architektur page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
