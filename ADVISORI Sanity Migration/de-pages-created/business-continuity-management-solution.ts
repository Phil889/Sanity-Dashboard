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
    console.log('Creating Business Continuity Management Solution page...')

    const bcmSolutionData = {
      _type: 'servicePage',
      _id: 'business-continuity-management-solution',
      title: 'Business Continuity Management Solution',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/business-continuity-resilience/business-continuity-management-solution'
      },
      parent: {
        _type: 'reference',
        _ref: 'business-continuity-resilience'
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
        title: 'Business Continuity Management Solution - Integrierte Lösungsarchitekturen | ADVISORI',
        description: 'Umfassende BCM-Lösungsarchitekturen mit integrierten Technologie-Plattformen. End-to-End BCM-Implementierung, maßgeschneiderte Lösungsdesigns und strategische Resilienz-Transformation für nachhaltige Geschäftskontinuität.',
        keywords: 'BCM Solution, Business Continuity Lösung, BCM Platform, Resilienz-Lösung, BCM Implementation, Kontinuitäts-Lösung, BCM Architektur, Solution Design'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Business Continuity Management Solution - Integrierte Lösungsarchitekturen'
        },
        tagline: 'Ganzheitliche Resilienz durch integrierte Lösungsarchitekturen',
        heading: 'Business Continuity Management Solution',
        description: 'Business Continuity Management Lösungen schaffen integrierte Resilienz-Ökosysteme durch maßgeschneiderte Technologie-Plattformen, systematische Implementierungsstrategien und ganzheitliche Lösungsarchitekturen. Wir entwickeln End-to-End BCM-Lösungen für nachhaltige organisationale Transformation und operative Exzellenz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Integrierte Lösungsarchitektur-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'End-to-End Implementierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Maßgeschneiderte Technologie-Plattformen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strategische Resilienz-Transformation'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Business Continuity Management Solution - Ganzheitliche Resilienz-Ökosysteme',
        description: 'Business Continuity Management Lösungen sind integrierte Resilienz-Ökosysteme, die strategische Planung, operative Prozesse und technologische Plattformen zu ganzheitlichen Kontinuitäts-Architekturen verbinden. Sie schaffen nachhaltige Wettbewerbsvorteile durch systematische Resilienz-Transformation.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Integrierte Lösungsarchitekturen mit nahtloser Verbindung aller BCM-Komponenten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Maßgeschneiderte Technologie-Plattformen für organisationsspezifische Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'End-to-End Implementierungsstrategien von der Konzeption bis zur operativen Meisterschaft'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Skalierbare Lösungskonzepte für verschiedene Organisationsgrößen und Komplexitätsgrade'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Strategische Resilienz-Transformation durch systematische organisationale Entwicklung'
          }
        ],
        alert: {
          title: 'Lösung als strategischer Transformations-Katalysator',
          content: 'Professionell entwickelte BCM-Lösungen werden zum strategischen Transformations-Katalysator durch integrierte Resilienz-Ökosysteme, nachhaltige Wettbewerbsvorteile und systematische organisationale Exzellenz-Entwicklung.'
        },
        whyUs: {
          title: 'Warum BCM-Lösungsentwicklung mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in Lösungsarchitektur und Plattform-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodiken für End-to-End Lösungsimplementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integration modernster Technologien und KI-gestützter Ansätze'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung von der Vision bis zur operativen Meisterschaft'
            }
          ]
        },
        additionalInfo: 'Business Continuity Management Lösungen schaffen integrierte Resilienz-Ökosysteme durch systematische Verbindung von Strategie, Prozessen, Technologie und organisationaler Transformation.',
        serviceDescription: 'Unser Lösungs-Service umfasst die vollständige Konzeption, Entwicklung und Implementierung von BCM-Lösungen. Wir entwickeln maßgeschneiderte Lösungsarchitekturen, die strategische Vision mit operativer Umsetzung und technologischer Innovation verbinden.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Lösungsarchitektur und Plattform-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Technologie-Integration und System-Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'End-to-End Implementierung und Deployment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Performance-Optimierung und Skalierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Organisationale Transformation und Change Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zur BCM-Lösungsentwicklung',
        description: 'Wir verfolgen einen ganzheitlichen und technologie-orientierten Ansatz zur BCM-Lösungsentwicklung, der strategische Vision mit operativer Umsetzung und innovativer Technologie-Integration verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Lösungsanalyse und Architektur-Design für integrierte Resilienz-Ökosysteme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Kollaborative Lösungsentwicklung mit allen Stakeholdern und Technologie-Partnern'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Agile Implementierungszyklen mit kontinuierlicher Validierung und Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration bewährter Plattformen und innovativer Technologie-Ansätze'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Verankerung durch Schulung, Support und kontinuierliche Weiterentwicklung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Integrierte BCM-Lösungen sind der Schlüssel zu nachhaltiger organisationaler Resilienz. Wir entwickeln nicht nur Technologie-Plattformen, sondern schaffen ganzheitliche Resilienz-Ökosysteme für strategische Wettbewerbsvorteile und operative Exzellenz durch systematische Transformation.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Lösungsarchitektur & Plattform-Design',
          description: 'Entwicklung einer integrierten Lösungsarchitektur mit robusten technologischen Grundlagen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Enterprise-Architektur-Design und Lösungsblueprints'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Technologie-Stack-Auswahl und Plattform-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Microservices-Architektur und API-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Cloud-native Lösungskonzepte und Hybrid-Architekturen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technologie-Integration & System-Orchestrierung',
          description: 'Nahtlose Integration verschiedener Technologie-Komponenten zu einer einheitlichen Plattform.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Enterprise Service Bus und Middleware-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Legacy-System-Integration und Modernisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Real-time Data Processing und Event-Streaming'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Security-by-Design und Compliance-Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'End-to-End Implementierung & Deployment',
          description: 'Systematische Lösungsimplementierung von der Entwicklung bis zum produktiven Betrieb.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Agile Entwicklungsmethodiken und DevOps-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Continuous Integration und Deployment-Pipelines'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Testing-Strategien und Quality-Assurance-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Go-Live-Support und Produktions-Stabilisierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Performance-Optimierung & Skalierung',
          description: 'Kontinuierliche Lösungsoptimierung für maximale Performance und Skalierbarkeit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Performance-Monitoring und Bottleneck-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Auto-Scaling und Load-Balancing-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Caching-Strategien und Database-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Capacity Planning und Resource-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'KI-Integration & Automatisierung',
          description: 'Integration von Künstlicher Intelligenz und Automatisierung für intelligente BCM-Lösungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Machine Learning für Predictive Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Natural Language Processing für Dokumentenanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Robotic Process Automation für Workflow-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'AI-gestützte Entscheidungsunterstützung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Organisationale Transformation & Change Management',
          description: 'Systematische organisationale Transformation für nachhaltige Lösungsadoption.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Change-Management-Strategien und Kommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Training-Programme und Kompetenzentwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Kulturwandel-Initiativen und Adoption-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Success-Measurement und Continuous Improvement'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcmSolutionData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Business Continuity Management Solution page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
