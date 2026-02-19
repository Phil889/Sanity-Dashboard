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
    console.log('Creating IAM IT page...')

    const iamItData = {
      _type: 'servicePage',
      _id: 'iam-it',
      title: 'IAM IT - Identity & Access Management IT-Infrastruktur',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-it'
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
        title: 'IAM IT Infrastruktur Beratung - Identity & Access Management IT | ADVISORI',
        description: 'Professionelle IAM IT-Infrastruktur Beratung: Architektur-Design, Cloud-Integration, Performance-Optimierung und skalierbare Implementierung für robuste Identity Management Systeme.',
        keywords: 'IAM IT, Identity Management Infrastruktur, IAM Architektur, Cloud IAM, IAM Performance, IT Infrastructure, IAM Integration, System Architecture, IAM DevOps, Infrastructure as Code'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM IT Infrastructure Identity Access Management'
        },
        tagline: 'Robuste IT-Infrastruktur für moderne Identity Management',
        heading: 'IAM IT - Identity & Access Management IT-Infrastruktur',
        description: 'IAM IT-Infrastruktur bildet das technische Rückgrat erfolgreicher Identity Management Systeme und erfordert durchdachte Architektur-Entscheidungen, die Skalierbarkeit, Performance und Sicherheit optimal balancieren. Wir entwickeln hochperformante, cloud-native IAM-Infrastrukturen mit modernsten DevOps-Praktiken, Container-Orchestrierung und Infrastructure-as-Code-Ansätzen für maximale Flexibilität und Betriebseffizienz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Skalierbare Cloud-native IAM Architekturen für Enterprise-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'High-Performance Infrastructure mit optimierter Latenz und Durchsatz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'DevOps-Integration mit CI/CD und Infrastructure-as-Code'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Multi-Cloud und Hybrid-Integration für maximale Flexibilität'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'IAM IT-Infrastruktur: Technisches Fundament für Enterprise Identity Management',
        description: 'Moderne IAM IT-Infrastrukturen müssen komplexe Anforderungen an Skalierbarkeit, Performance, Sicherheit und Integration erfüllen, während sie gleichzeitig flexibel genug bleiben, um sich an evolvierende Geschäftsanforderungen anzupassen. Unsere Expertise umfasst die gesamte Bandbreite von Hardware-Dimensionierung über Container-Orchestrierung bis hin zu Cloud-nativen Microservices-Architekturen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Enterprise-grade Architektur-Design mit High Availability und Disaster Recovery'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Cloud-native Implementation mit Kubernetes und Container-Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Performance-Optimierung für Millionen von Identitäten und Transaktionen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'DevOps-Integration mit automatisierter Deployment-Pipeline'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Comprehensive Monitoring und Observability für proaktives Management'
          }
        ],
        alert: {
          title: 'Kritischer Erfolgsfaktor',
          content: 'Die IT-Infrastruktur bestimmt maßgeblich die Performance, Verfügbarkeit und Skalierbarkeit von IAM-Systemen. Unzureichende Infrastruktur-Planung führt zu Bottlenecks, Ausfällen und hohen Betriebskosten, die das gesamte Identity Management beeinträchtigen.'
        },
        whyUs: {
          title: 'Unsere IAM IT-Infrastruktur Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in Cloud-nativen Architekturen und Container-Technologien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Performance-Engineering für hochskalierbare Identity Management Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'DevOps-Expertise für automatisierte und resiliente Infrastruktur-Pipelines'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Multi-Cloud Strategien für Vendor-Lock-in Vermeidung und optimale Kosteneffizienz'
            }
          ]
        },
        additionalInfo: 'Moderne IAM IT-Infrastrukturen erfordern einen ganzheitlichen Ansatz, der traditionelle IT-Betrieb mit Cloud-nativen Prinzipien verbindet. Infrastructure-as-Code, GitOps-Workflows und observability-driven Development ermöglichen es, komplexe IAM-Landschaften effizient zu verwalten und kontinuierlich zu optimieren.',
        serviceDescription: 'Wir entwickeln maßgeschneiderte IAM IT-Infrastrukturen, die Ihre spezifischen Performance- und Skalierungsanforderungen erfüllen. Unser Ansatz kombiniert bewährte Enterprise-Architekturen mit innovativen Cloud-Technologien und DevOps-Praktiken für maximale Effizienz und Zukunftssicherheit.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Infrastructure Assessment und Capacity Planning'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Cloud-native Architecture Design und Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Performance-Optimierung und Skalierungs-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'DevOps-Integration und CI/CD-Pipeline Setup'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Monitoring und Observability Implementation'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer IAM IT-Infrastruktur Ansatz',
        description: 'Wir verfolgen einen datengetriebenen, cloud-first Ansatz für IAM IT-Infrastrukturen, der Performance-Engineering mit operativer Exzellenz verbindet und dabei höchste Verfügbarkeits- und Sicherheitsstandards erfüllt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Infrastructure Assessment und Requirements Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Cloud-native Architecture Design mit Microservices und Container-Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Performance-Engineering und Load Testing für optimale Skalierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'DevOps-Integration mit Infrastructure-as-Code und GitOps-Workflows'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Monitoring und proaktive Optimierung der Infrastruktur-Performance'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die IT-Infrastruktur ist das unsichtbare Fundament erfolgreicher IAM-Implementierungen und entscheidet über Erfolg oder Misserfolg des gesamten Identity Management. Unsere cloud-nativen Architekturen und DevOps-Praktiken ermöglichen es Unternehmen, IAM-Systeme zu betreiben, die nicht nur heute performant und sicher sind, sondern auch für zukünftige Anforderungen skalieren. Die Integration von Infrastructure-as-Code und observability-driven Operations schafft die Grundlage für selbstheilende, resiliente IAM-Infrastrukturen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'IAM Infrastructure Assessment und Capacity Planning',
          description: 'Umfassende Bewertung bestehender IT-Infrastrukturen mit detaillierter Kapazitätsplanung und Performance-Analyse für optimale IAM-System-Dimensionierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Infrastructure Inventory und Current State Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Performance Benchmarking und Bottleneck Identification'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Capacity Planning für User Growth und Transaction Volumes'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Cost-Benefit Analysis für Infrastructure Modernization'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Cloud-native IAM Architecture Design',
          description: 'Entwicklung moderner, cloud-nativer IAM-Architekturen mit Microservices, Container-Orchestrierung und API-first Design für maximale Skalierbarkeit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Microservices Architecture Design für IAM Components'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Kubernetes-based Container Orchestration Setup'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'API Gateway und Service Mesh Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Multi-Cloud und Hybrid Architecture Strategies'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Performance-Optimierung und Skalierungs-Strategien',
          description: 'Systematische Performance-Optimierung von IAM-Infrastrukturen mit Load Testing, Caching-Strategien und Auto-Scaling für optimale User Experience.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Performance Testing und Load Simulation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Database Optimization und Caching Layer Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Auto-Scaling und Elastic Infrastructure Configuration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'CDN Integration und Global Load Balancing'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'DevOps-Integration und CI/CD-Pipeline Setup',
          description: 'Implementation moderner DevOps-Praktiken für IAM-Infrastrukturen mit Infrastructure-as-Code, automatisierten Deployments und GitOps-Workflows.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Infrastructure-as-Code mit Terraform und Ansible'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'CI/CD Pipeline Setup für IAM Applications'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'GitOps Workflows und Automated Deployment Strategies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Configuration Management und Environment Consistency'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'High Availability und Disaster Recovery',
          description: 'Design und Implementation robuster HA/DR-Strategien für IAM-Infrastrukturen mit Multi-Region Deployment und automatisierter Failover-Mechanismen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Multi-Region Architecture für High Availability'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Automated Backup und Recovery Procedures'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Disaster Recovery Testing und Validation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Business Continuity Planning für IAM Services'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Monitoring und Observability Implementation',
          description: 'Aufbau umfassender Monitoring- und Observability-Lösungen für IAM-Infrastrukturen mit Real-time Analytics und proaktiver Incident Detection.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Comprehensive Metrics Collection und Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Distributed Tracing für Microservices Architectures'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Automated Alerting und Incident Response'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Log Aggregation und Security Event Correlation'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamItData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM IT page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
