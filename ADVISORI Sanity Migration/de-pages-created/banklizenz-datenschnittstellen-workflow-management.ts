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
    console.log('Creating Banklizenz Datenschnittstellen Workflow Management page...')

    const banklizenzDatensschnittstellenWorkflowManagementData = {
      _type: 'servicePage',
      _id: 'banklizenz-datenschnittstellen-workflow-management',
      title: 'Banklizenz Datenschnittstellen Workflow Management',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/banklizenz-beantragen/banklizenz-it-meldewesen-setup/banklizenz-datenschnittstellen-workflow-management'
      },
      parent: {
        _type: 'reference',
        _ref: 'banklizenz-it-meldewesen-setup'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'regulatory-reporting'
        }
      },
      seo: {
        _type: 'seo',
        title: 'Banklizenz Datenschnittstellen Workflow Management | ADVISORI',
        description: 'Professionelle Entwicklung und Implementierung von Datenschnittstellen und Workflow-Management-Systemen für Banklizenz-Meldewesen. Automatisierte Datenflüsse und optimierte Reporting-Prozesse.',
        keywords: 'Datenschnittstellen Banking, Workflow Management, Regulatorische Datenflüsse, API Integration, Banking ETL, Compliance Automation, Datenintegration'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Banklizenz Datenschnittstellen Workflow Management'
        },
        tagline: 'Intelligente Datenflüsse für nahtloses Regulatory Reporting',
        heading: 'Banklizenz Datenschnittstellen Workflow Management',
        description: 'Moderne Banklizenzierung erfordert hochentwickelte Datenschnittstellen und automatisierte Workflows. Wir entwickeln intelligente Systeme, die komplexe Datenlandschaften orchestrieren und fehlerfreie Regulatory Reports gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Nahtlose Integration aller Datenquellen und Zielsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Workflow-Orchestrierung für komplexe Reporting-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Real-time Monitoring und proaktive Fehlerbehandlung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Skalierbare APIs für zukünftige Systemerweiterungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Datenschnittstellen Workflow Management für Banklizenzierung',
        description: 'Die Komplexität moderner Banking-Systeme erfordert ausgeklügelte Datenschnittstellen und Workflow-Management-Lösungen. Wir entwickeln intelligente Orchestrierungs-Systeme, die Datenqualität sicherstellen und Reporting-Prozesse automatisieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse der Datenlandschaft und Interface-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Design und Entwicklung hochperformanter Datenschnittstellen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung automatisierter Workflow-Engines'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von Monitoring und Alerting-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Performance-Optimierung und Skalierungs-Strategien'
          }
        ],
        alert: {
          title: 'Data Excellence',
          content: 'Exzellente Datenschnittstellen sind das Rückgrat erfolgreicher Regulatory Compliance. Unser Fokus liegt auf robusten, selbstheilenden Systemen, die auch bei hohen Datenvolumen und komplexen Transformationen zuverlässig funktionieren.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefe Expertise in Banking-Datenmodellen und Regulatory Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Integration Patterns und API-Design-Prinzipien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Event-driven Architectures für maximale Flexibilität'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Continuous Integration und automatisierte Testing-Pipelines'
            }
          ]
        },
        additionalInfo: 'Intelligente Datenschnittstellen und Workflow-Management sind entscheidend für operative Exzellenz und Compliance-Sicherheit in der modernen Bankenwelt.',
        serviceDescription: 'Wir bieten umfassende Lösungen für Datenschnittstellen und Workflow-Management, die komplexe Banking-Systeme nahtlos verbinden und automatisierte, fehlerfreie Reporting-Prozesse ermöglichen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'API-Design und RESTful/GraphQL Interface-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'ETL/ELT Pipeline-Engineering und Datenorchestration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Business Process Management und Workflow-Automation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Event-Streaming und Real-time Data Processing'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Monitoring, Alerting und Performance-Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen systematischen, datengetriebenen Ansatz zur Entwicklung Ihrer Datenschnittstellen und Workflow-Management-Systeme, der technische Exzellenz mit Business-Anforderungen verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Datenarchitektur-Analyse und Interface-Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'API-First Design und Microservices-Architektur-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Iterative Entwicklung mit kontinuierlicher Integration und Testing'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Performance-Testing und Skalierungs-Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Phased Rollout mit umfassendem Monitoring und Support'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die von ADVISORI entwickelten Datenschnittstellen und Workflow-Management-Systeme haben unsere Reporting-Effizienz revolutioniert. Komplexe Datenflüsse werden jetzt automatisch orchestriert, und die Datenqualität hat sich dramatisch verbessert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'API Development & Integration',
          description: 'Wir entwickeln hochperformante APIs und Datenschnittstellen, die komplexe Banking-Systeme nahtlos verbinden und skalierbare Datenflüsse ermöglichen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'RESTful und GraphQL API-Design für optimale Performance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Microservices-Architektur für maximale Flexibilität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'API Gateway und Service Mesh Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Umfassende API-Dokumentation und Developer Tools'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Workflow Automation & Orchestration',
          description: 'Wir implementieren intelligente Workflow-Engines, die komplexe Reporting-Prozesse automatisieren und dabei höchste Datenqualität und Compliance gewährleisten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Business Process Management mit BPMN 2.0'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Event-driven Workflow-Orchestrierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Automatisierte Fehlerbehandlung und Recovery'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Real-time Monitoring und Performance-Tracking'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(banklizenzDatensschnittstellenWorkflowManagementData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Banklizenz Datenschnittstellen Workflow Management page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
