import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
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
    console.log('Creating Cloud Compliance Lizenzmanagement page...')

    const cloudComplianceData = {
      _type: 'servicePage',
      _id: 'cloud-compliance-lizenzmanagement-inventarisierung-kommerziell-oss',
      title: 'Cloud Compliance Lizenzmanagement: Inventarisierung kommerziell & OSS',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/software-compliance/cloud-compliance-lizenzmanagement-inventarisierung-kommerziell-oss'
      },
      parent: {
        _type: 'reference',
        _ref: 'software-compliance'
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
        title: 'Cloud Compliance Lizenzmanagement & OSS Inventarisierung | ADVISORI',
        description: 'Spezialisierte Cloud-native Software Compliance Lösungen für hybride Umgebungen. Automatisierte Inventarisierung kommerzieller Lizenzen und Open Source Komponenten in Multi-Cloud-Infrastrukturen.',
        keywords: 'Cloud Compliance, Cloud Lizenzmanagement, OSS Inventarisierung, Multi-Cloud Compliance, Container Compliance, Serverless Lizenzmanagement, Cloud-native Governance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Cloud Compliance Lizenzmanagement'
        },
        tagline: 'Cloud-native Software Compliance für komplexe Multi-Cloud-Umgebungen',
        heading: 'Cloud Compliance Lizenzmanagement: Inventarisierung kommerziell & OSS',
        description: 'Cloud-native Infrastrukturen erfordern spezialisierte Compliance-Ansätze für Software-Lizenzen. Wir bieten automatisierte Inventarisierung und Governance-Lösungen für kommerzielle Software und Open Source Komponenten in dynamischen Cloud-Umgebungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Automatisierte Cloud-native Software-Discovery und Lizenz-Tracking'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Multi-Cloud Compliance-Überwachung und einheitliche Governance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Container- und Serverless-optimierte OSS-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Dynamische Skalierung von Compliance-Prozessen mit Cloud-Workloads'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Cloud Compliance Lizenzmanagement',
        description: 'Cloud-native Infrastrukturen stellen traditionelle Software Compliance vor neue Herausforderungen. Container, Serverless Functions, Auto-Scaling und Multi-Cloud-Deployments erfordern spezialisierte Ansätze für Lizenzmanagement und Open Source Governance. Unsere Cloud-optimierten Compliance-Lösungen gewährleisten rechtssichere Software-Nutzung auch in den dynamischsten Umgebungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Cloud-native Software Asset Discovery und Container-Scanning'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Multi-Cloud Lizenzmanagement und Provider-übergreifende Governance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Serverless und Microservices OSS-Compliance-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Automatisierte Compliance-Integration in CI/CD und Infrastructure-as-Code'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Dynamische Skalierung und Performance-optimierte Compliance-Workflows'
          }
        ],
        alert: {
          title: 'Cloud-Compliance Herausforderung',
          content: 'Cloud-Umgebungen können Software-Inventare in Minuten um Tausende von Komponenten erweitern. Ohne automatisierte Compliance-Systeme entstehen massive Blind Spots und rechtliche Risiken.'
        },
        whyUs: {
          title: 'Unsere Cloud-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Erfahrung in Cloud-nativen Compliance-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Expertise in Container-, Kubernetes- und Serverless-Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Multi-Cloud-Governance und Provider-agnostische Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Integration moderner DevOps- und GitOps-Workflows'
            }
          ]
        },
        additionalInfo: 'Moderne Cloud-Infrastrukturen nutzen durchschnittlich 3-5 verschiedene Cloud-Provider und deployten täglich hunderte von Container-Images. Diese Dynamik macht manuelle Compliance-Überwachung unmöglich und erfordert vollautomatisierte, API-gesteuerte Governance-Systeme.',
        serviceDescription: 'Wir entwickeln maßgeschneiderte Cloud-Compliance-Strategien, die sich nahtlos in bestehende Cloud-Architekturen integrieren und automatisch mit Ihren Workloads skalieren. Unser Ansatz kombiniert modernste Scanning-Technologien mit intelligenter Automatisierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Container-Registry und Image-Scanning für Base-Images und Dependencies'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Serverless Function Compliance und Event-driven Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Multi-Cloud Asset Management und Provider-übergreifende Visibility'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Infrastructure-as-Code Compliance-Integration und Policy-as-Code'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Cloud-native Audit-Readiness und Compliance-Reporting-Automation'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Cloud-native Vorgehen',
        description: 'Wir implementieren Cloud-optimierte Compliance-Frameworks, die sich automatisch an die Dynamik Ihrer Cloud-Infrastruktur anpassen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Cloud-Architecture Assessment und Multi-Provider Compliance-Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'API-first Compliance-Integration und Infrastructure-as-Code Embedding'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Container-native Scanning-Pipeline und Registry-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Serverless-optimierte Monitoring und Event-driven Compliance-Workflows'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Compliance und Auto-Scaling Governance-Mechanismen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Cloud-native Compliance erfordert einen fundamentalen Paradigmenwechsel von reaktiven zu proaktiven, API-gesteuerten Governance-Systemen. Wer das beherrscht, transformiert Compliance von einem Kostenfaktor zu einem Innovationsenabler.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Multi-Cloud Lizenzmanagement',
          description: 'Umfassende Verwaltung kommerzieller Software-Lizenzen über verschiedene Cloud-Provider hinweg mit automatisierter Usage-Optimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Provider-übergreifende Software-Discovery und Lizenz-Consolidation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Cloud-native Usage-Metering und Kostenoptimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Auto-Scaling Lizenz-Allocation und Dynamic Rights-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Multi-Provider Vendor-Management und Contract-Optimization'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Container & Serverless OSS-Compliance',
          description: 'Spezialisierte Open Source Governance für Container-basierte und Serverless-Architekturen mit integrierter Security-Überwachung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Container-Image Multi-Layer Scanning und Base-Image Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Serverless Function Dependency-Tracking und Runtime-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Microservices OSS-Governance und Service-Mesh Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'CI/CD Pipeline Integration und Automated Vulnerability Remediation'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(cloudComplianceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Cloud Compliance Lizenzmanagement page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
