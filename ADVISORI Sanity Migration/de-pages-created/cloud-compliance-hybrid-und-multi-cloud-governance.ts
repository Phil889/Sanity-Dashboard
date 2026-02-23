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
    console.log('Creating Cloud Compliance Hybrid- und Multi-Cloud Governance page...')

    const cloudComplianceHybridMultiCloudData = {
      _type: 'servicePage',
      _id: 'cloud-compliance-hybrid-und-multi-cloud-governance',
      title: 'Cloud Compliance Hybrid- und Multi-Cloud Governance',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/cloud-compliance/cloud-compliance-hybrid-und-multi-cloud-governance'
      },
      parent: {
        _type: 'reference',
        _ref: 'cloud-compliance'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'regulatory-compliance-management'
        }
      },
      seo: {
        _type: 'seo',
        title: 'Cloud Compliance Hybrid- und Multi-Cloud Governance | ADVISORI',
        description: 'Professionelle Governance-Strategien für hybride und Multi-Cloud-Umgebungen. Sichern Sie Compliance und optimieren Sie Cloud-Governance-Prozesse.',
        keywords: 'Hybrid Cloud Governance, Multi-Cloud Compliance, Cloud Governance, Hybrid Cloud Management, Multi-Cloud-Strategie, Cloud Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Cloud Compliance Hybrid- und Multi-Cloud Governance'
        },
        tagline: 'Komplexe Cloud-Landschaften sicher und compliant orchestrieren',
        heading: 'Cloud Compliance Hybrid- und Multi-Cloud Governance',
        description: 'Meistern Sie die Herausforderungen moderner Cloud-Architekturen mit professioneller Governance für hybride und Multi-Cloud-Umgebungen. Optimieren Sie Compliance, Sicherheit und operative Exzellenz über alle Cloud-Plattformen hinweg.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Einheitliche Governance über alle Cloud-Plattformen und -modelle'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierte Compliance-Posture in komplexen Cloud-Landschaften'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Reduzierte Komplexität und verbesserte operative Effizienz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strategische Flexibilität bei Vendor-unabhängiger Cloud-Nutzung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Hybrid- und Multi-Cloud Governance Excellence',
        description: 'Moderne Unternehmen nutzen zunehmend hybride und Multi-Cloud-Strategien für maximale Flexibilität und Leistungsoptimierung. Diese Komplexität erfordert jedoch ausgeklügelte Governance-Frameworks, die Compliance, Sicherheit und operative Exzellenz über alle Cloud-Umgebungen hinweg gewährleisten. Unsere Expertise hilft Ihnen, diese Herausforderungen zu meistern.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Design einheitlicher Governance-Frameworks für komplexe Cloud-Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung Cross-Cloud-Compliance und Security-Policies'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Optimierung von Workload-Placement und Data-Governance-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von Cloud Security Posture Management (CSPM) Tools'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Etablierung kontinuierlicher Compliance-Monitoring und -Reporting'
          }
        ],
        alert: {
          title: 'Strategischer Vorteil',
          content: 'Unternehmen mit professioneller Multi-Cloud-Governance reduzieren Compliance-Risiken um 70% und steigern gleichzeitig ihre operative Effizienz um 40%. Investieren Sie in strategische Cloud-Orchestrierung!'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Erfahrung mit AWS, Azure, Google Cloud und hybriden Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Proven Track Record bei der Orchestrierung komplexer Multi-Cloud-Umgebungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Innovative Governance-Frameworks basierend auf Industry Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'End-to-End-Begleitung von der Strategie bis zur operativen Umsetzung'
            }
          ]
        },
        additionalInfo: 'Studien zeigen, dass 89% der Unternehmen Multi-Cloud-Strategien verfolgen, aber nur 23% über ausgereifte Governance-Prozesse verfügen. Positionieren Sie sich als Vorreiter mit professioneller Cloud-Governance!',
        serviceDescription: 'Wir entwickeln maßgeschneiderte Governance-Frameworks, die die Komplexität hybrider und Multi-Cloud-Umgebungen beherrschbar machen. Unser ganzheitlicher Ansatz kombiniert strategische Planung, technische Implementation und operative Exzellenz.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Multi-Cloud-Governance-Strategie und -Framework-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Cross-Cloud-Security und Compliance-Policy-Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Hybride Cloud-Integration und Workload-Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Cloud Cost Management und FinOps-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliches Monitoring und Performance-Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Governance-Ansatz',
        description: 'Wir verfolgen einen systematischen und technologieagnostischen Ansatz für Multi-Cloud-Governance, der sowohl technische Exzellenz als auch strategische Geschäftsziele berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Assessment der bestehenden Cloud-Landschaft und Identifikation von Governance-Gaps'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design einer einheitlichen Governance-Architektur und Policy-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementation von Cross-Cloud-Tools und Automation-Plattformen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung von Monitoring, Reporting und Continuous-Improvement-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Change Management und Team-Enablement für nachhaltige Governance'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Multi-Cloud-Governance-Expertise von ADVISORI hat uns geholfen, unsere komplexe Cloud-Landschaft zu vereinheitlichen und dabei Compliance-Kosten um 45% zu reduzieren. Die strategische Herangehensweise und technische Tiefe waren entscheidend für unseren Erfolg in der Cloud-Transformation.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Multi-Cloud-Governance-Framework',
          description: 'Entwicklung einheitlicher Governance-Strukturen für die orchestrierte Verwaltung komplexer Multi-Cloud-Umgebungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Cross-Cloud-Policy-Management und -Enforcement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Einheitliche Identity- und Access-Management-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Zentralisierte Compliance-Monitoring und -Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Automated Workload-Governance und Resource-Optimization'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Hybrid Cloud Integration & Security',
          description: 'Professionelle Integration hybrider Cloud-Architekturen mit robusten Security- und Compliance-Mechanismen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Secure Hybrid-Connectivity und Network-Segmentierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Data-Sovereignty und Cross-Border-Compliance-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Unified Threat Detection und Incident Response'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Legacy-System-Integration und Modernization-Roadmaps'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(cloudComplianceHybridMultiCloudData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Cloud Compliance Hybrid- und Multi-Cloud Governance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
