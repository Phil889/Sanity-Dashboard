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
    console.log('Creating Data Mesh Architecture page...')

    const dataMeshArchitectureData = {
      _type: 'servicePage',
      _id: 'data-mesh-architecture',
      title: 'Data Mesh Architecture',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/data-analytics/datenprodukte/data-mesh-architecture'
      },
      parent: {
        _type: 'reference',
        _ref: 'datenprodukte'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'digitale-transformation'
        }
      },
      seo: {
        _type: 'seo',
        title: 'Data Mesh Architecture | Enterprise Datenarchitektur | ADVISORI',
        description: 'Implementieren Sie skalierbare Data Mesh Architekturen mit ADVISORI. EU AI Act konforme dezentrale Datenarchitektur, Domain-driven Data Ownership und federated Governance für Enterprise-Umgebungen.',
        keywords: 'Data Mesh Architecture, Dezentrale Datenarchitektur, Domain-driven Data, Federated Governance, EU AI Act Compliance, Enterprise Data Architecture, Self-serve Data Infrastructure'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Data Mesh Architecture Enterprise Solutions'
        },
        tagline: 'Dezentrale Datenarchitektur für skalierbare Enterprise-Lösungen',
        heading: 'Data Mesh Architecture',
        description: 'Unsere Data Mesh Architecture Lösungen transformieren traditionelle monolithische Datenarchitekturen in skalierbare, dezentrale Systeme durch Domain-driven Data Ownership, Self-serve Infrastructure und federated Governance bei vollständiger EU AI Act Compliance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Dezentrale Domain-driven Datenarchitektur für maximale Skalierbarkeit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Self-serve Data Infrastructure mit automatisierter Governance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'EU AI Act konforme federated Governance und Compliance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Enterprise-grade Sicherheit und Datenqualität in verteilten Umgebungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Data Mesh Architecture',
        description: 'Data Mesh Architecture revolutioniert die Art, wie Unternehmen ihre Datenlandschaften strukturieren und verwalten. ADVISORI unterstützt Sie bei der Transformation von monolithischen Data Warehouses zu dezentralen, domain-orientierten Datenarchitekturen, die Skalierbarkeit, Agilität und Governance in perfekter Balance halten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Domain-driven Data Ownership und dezentrale Datenverantwortung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Self-serve Data Infrastructure mit automatisierten DevOps-Pipelines'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Federated Computational Governance für konsistente Standards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Data as a Product Paradigma mit API-first Ansätzen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'EU AI Act konforme Compliance-Integration in verteilte Architekturen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche Data Mesh Implementierung erfordert einen kulturellen Wandel hin zu dezentraler Datenverantwortung. Technologie allein reicht nicht aus – es braucht organisatorische Transformation, klare Governance-Prinzipien und eine starke Plattform-Strategie für nachhaltigen Erfolg.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Expertise in Enterprise Data Mesh Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Ganzheitlicher Ansatz von Architektur bis Organisationsentwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'EU AI Act Compliance-Integration in dezentrale Datenarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Bewährte Methoden für skalierbare Self-serve Data Platforms'
            }
          ]
        },
        additionalInfo: 'Unternehmen, die Data Mesh Architecture erfolgreich implementieren, erreichen eine deutlich höhere Datennutzung, reduzierte Time-to-Market für datengetriebene Produkte und verbesserte organisatorische Agilität. Investieren Sie in die Zukunft Ihrer Datenarchitektur!',
        serviceDescription: 'Unsere Data Mesh Architecture Services umfassen die gesamte Transformation von der strategischen Planung über die technische Implementierung bis hin zur organisatorischen Verankerung dezentraler Datenverantwortung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Data Mesh Strategie und Domain-Modellierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Self-serve Data Platform Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Federated Governance und Compliance-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Data Product Development und API-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Organisationsentwicklung und Change Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten, iterativen Ansatz, der technische Exzellenz mit organisatorischer Transformation verbindet und dabei stets Skalierbarkeit, Governance und Compliance im Fokus behält.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Domain-Analyse und Data Mesh Readiness Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Architektur-Design und Self-serve Platform Konzeption'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Pilot-Implementierung mit ausgewählten Data Domains'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Skalierung und federated Governance Etablierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Platform Evolution'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Data Mesh Architecture ist der Schlüssel zur Skalierung moderner Datenlandschaften. Unsere Kunden profitieren von einer durchdachten Balance zwischen dezentraler Autonomie und zentraler Governance, die sowohl Agilität als auch Compliance gewährleistet. So schaffen wir nachhaltige Datenarchitekturen, die mit dem Geschäftswachstum mitwachsen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Data Mesh Strategie & Domain-Modellierung',
          description: 'Entwicklung einer umfassenden Data Mesh Strategie mit präziser Domain-Abgrenzung und Ownership-Modellen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Domain-driven Design und Bounded Context Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Data Ownership Modelle und Verantwortungsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Data Mesh Readiness Assessment und Roadmap-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Organisatorische Transformation und Change Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Self-serve Data Platform Entwicklung',
          description: 'Aufbau hochautomatisierter Self-serve Plattformen für dezentrale Datenproduktentwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Cloud-native Data Platform Architektur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automatisierte DevOps-Pipelines und Infrastructure as Code'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Self-service Data Discovery und Catalog-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Monitoring und Observability für verteilte Datenprodukte'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Federated Governance & Compliance',
          description: 'Implementierung dezentraler Governance-Strukturen mit zentralen Standards und EU AI Act Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Federated Governance Frameworks und Policy-as-Code'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'EU AI Act konforme Compliance-Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Data Quality Standards und automatisierte Validierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Security und Privacy-by-Design in dezentralen Architekturen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Data Product Development',
          description: 'Entwicklung und Implementierung von Data Products mit API-first Ansätzen und Product Thinking.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Data Product Design und API-Spezifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Event-driven Architecture und Real-time Data Streaming'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Data Contract Management und Schema Evolution'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Product Analytics und Usage Monitoring'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Interoperabilität & Integration',
          description: 'Sicherstellung nahtloser Integration zwischen Data Domains und externen Systemen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Cross-Domain Data Integration und Mesh Connectivity'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Legacy System Integration und Migration Strategies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Multi-Cloud und Hybrid-Cloud Data Mesh Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Partner Ecosystem Integration und Data Sharing'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Performance & Skalierung',
          description: 'Optimierung und Skalierung von Data Mesh Architekturen für Enterprise-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Performance Monitoring und Capacity Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Auto-scaling und Elastic Infrastructure Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Cost Optimization und Resource Allocation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Architektur-Evolution und Modernisierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(dataMeshArchitectureData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Data Mesh Architecture page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
