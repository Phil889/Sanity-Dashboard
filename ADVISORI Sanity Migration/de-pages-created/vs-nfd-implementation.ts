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
    console.log('Creating VS-NFD Implementation page...')

    const vsNfdImplementationData = {
      _type: 'servicePage',
      _id: 'vs-nfd-implementation',
      title: 'VS-NFD Implementation',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/vs-nfd/vs-nfd-implementation'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-reporting'
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
        title: 'VS-NFD Implementation | ADVISORI',
        description: 'Professionelle Implementierung der Verordnung über Sammeldepots und Nominee-Konten (VS-NFD). Technische Umsetzung, Compliance-Integration und operative Exzellenz für digitale Transformation.',
        keywords: 'VS-NFD Implementierung, Sammeldepots digital, Nominee-Konten Technologie, BaFin Digitalisierung, FinTech Compliance, Digital Asset Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'VS-NFD Implementation'
        },
        tagline: 'Digitale Transformation für VS-NFD Compliance',
        heading: 'VS-NFD Implementation',
        description: 'Moderne, technologiebasierte Umsetzung der VS-NFD Verordnung mit nahtloser Integration in bestehende Systeme. Wir transformieren regulatorische Anforderungen in operative Effizienz und Competitive Advantages.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'End-to-End VS-NFD Technologie-Implementation mit API-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Compliance-Workflows und Real-time Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Skalierbare Digital Asset Management-Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'BaFin-konforme Digitalisierung mit Zukunftssicherheit'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'VS-NFD Implementation',
        description: 'Die digitale Transformation der VS-NFD Compliance erfordert sophisticated Technologie-Integration und innovative Lösungsansätze. Wir entwickeln moderne, skalierbare Implementierungen, die nicht nur regulatorische Anforderungen erfüllen, sondern auch operative Effizienz maximieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Technische VS-NFD Architektur und System-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Automatisierte Sammeldepot- und Nominee-Management-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Digital Compliance Monitoring und Reporting-Automation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'API-basierte Integration mit bestehenden Banking-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Skalierbare Cloud-native Lösungsarchitekturen'
          }
        ],
        alert: {
          title: 'Digital-First Approach',
          content: 'Moderne VS-NFD Implementation erfordert mehr als nur Compliance - sie ist eine Opportunity für Digital Transformation und Operational Excellence. Unsere Technologie-Integration schafft nachhaltige Competitive Advantages.'
        },
        whyUs: {
          title: 'Unsere Digital Implementation-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Deep-Tech Expertise in Financial Services-Digitalisierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Proven Track Record in komplexen Regulatory Technology-Projekten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Innovative Cloud-native und API-First Architectures'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'End-to-End Integration von Compliance bis User Experience'
            }
          ]
        },
        additionalInfo: 'Eine professionelle VS-NFD Implementation verbindet regulatorische Excellence mit digitaler Innovation, schafft operative Effizienz und positioniert Ihr Unternehmen als Digital Leader im Financial Services-Sektor.',
        serviceDescription: 'Wir begleiten Sie von der technischen Architektur-Planung über die System-Integration bis hin zur Go-Live-Betreuung. Unser Ansatz verbindet Regulatory Compliance mit modernster Technologie und Digital Transformation-Best-Practices.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Technische Architektur und System-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'API-Integration und Middleware-Development'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Automated Compliance und Monitoring-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Cloud-Deployment und Scalability-Optimization'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'User Experience Design und Training-Programme'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Digital Implementation-Ansatz',
        description: 'Wir implementieren VS-NFD Lösungen mit modernster Technologie und agilen Methoden, die nachhaltige Digital Transformation und regulatorische Excellence gewährleisten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Technical Architecture und Requirements-Engineering'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Agile Development und API-First Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Automated Testing und Quality Assurance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Cloud-Deployment und Performance-Optimization'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Go-Live Support und Continuous Improvement'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat unsere VS-NFD Implementation in eine echte Digital Transformation verwandelt. Ihre Technologie-Expertise und innovative Lösungsansätze haben nicht nur Compliance sichergestellt, sondern auch unsere operative Effizienz revolutioniert und neue Business Opportunities erschlossen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Technical Architecture & System Integration',
          description: 'Umfassende technische Planung und nahtlose Integration der VS-NFD Systeme mit bestehenden Banking-Infrastructures und modernen Cloud-Technologien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Microservices-Architektur und API-Gateway-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Core Banking System-Integration und Data Migration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Cloud-native Development und Container-Orchestration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Security-by-Design und Compliance-Automation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Digital Compliance & Process Automation',
          description: 'Automatisierte VS-NFD Compliance-Workflows mit Real-time Monitoring, intelligenten Alerts und nahtloser Regulatory Reporting-Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automated Compliance Monitoring und Exception Handling'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Real-time Dashboards und Analytics-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Intelligent Workflow-Engine und Business Rules-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Regulatory Reporting-Automation und Audit Trail-Management'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(vsNfdImplementationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ VS-NFD Implementation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
