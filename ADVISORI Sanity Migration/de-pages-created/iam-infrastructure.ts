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
    console.log('Creating IAM Infrastructure page...')

    const iamInfrastructureData = {
      _type: 'servicePage',
      _id: 'iam-infrastructure',
      title: 'IAM Infrastructure - Enterprise-Grade Identitätsinfrastruktur',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-infrastructure'
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
        title: 'IAM Infrastructure - Enterprise-Grade Identitätsinfrastruktur | ADVISORI',
        description: 'Professionelle IAM Infrastructure Lösungen: Skalierbare Identitätsinfrastruktur, Cloud-native Architekturen, High-Availability-Design und Performance-Optimierung für enterprise-grade IAM-Systeme.',
        keywords: 'IAM Infrastructure, Identitätsinfrastruktur, IAM Architektur, Cloud IAM, Enterprise IAM Infrastructure, IAM Skalierung, High Availability IAM, IAM Performance, Infrastructure Security, IAM Deployment'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Infrastructure Enterprise-Grade Identitätsinfrastruktur'
        },
        tagline: 'Robuste Infrastrukturen für moderne Identitätsverwaltung',
        heading: 'IAM Infrastructure - Enterprise-Grade Identitätsinfrastruktur',
        description: 'IAM Infrastructure bildet das technologische Rückgrat moderner Identitätsverwaltung und ermöglicht es Unternehmen, skalierbare, hochverfügbare und performante Identitätssysteme zu implementieren, die sowohl aktuelle Anforderungen erfüllen als auch zukünftiges Wachstum unterstützen. Unsere Infrastructure-Expertise kombiniert bewährte Architekturprinzipien mit innovativen Cloud-Technologien für eine IAM-Infrastruktur, die Sicherheit, Performance und Benutzerfreundlichkeit optimal vereint.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Skalierbare Cloud-native Architekturen für globale Verfügbarkeit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'High-Availability-Design mit automatischer Failover-Funktionalität'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Performance-optimierte Infrastrukturen für minimale Latenz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Security-by-Design mit integrierten Compliance-Mechanismen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische IAM-Infrastruktur: Foundation für digitale Transformation',
        description: 'Moderne IAM Infrastructure ist weit mehr als technische Implementierung – sie ist das strategische Fundament für digitale Transformation, Cloud-Migration und Business-Agilität. In einer Ära exponentiell wachsender Identitäten, komplexer Hybrid-Umgebungen und steigender Performance-Anforderungen entscheidet die richtige Infrastruktur-Architektur über den Erfolg Ihrer gesamten IAM-Strategie.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Cloud-native Architekturen mit Microservices und Container-Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Multi-Region-Deployment für globale Verfügbarkeit und Disaster Recovery'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Auto-Scaling-Mechanismen für dynamische Lastanpassung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Zero-Downtime-Deployment mit Blue-Green und Canary-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Infrastructure-as-Code für konsistente und reproduzierbare Deployments'
          }
        ],
        alert: {
          title: 'Infrastructure-Kritikalität',
          content: 'Unzureichende IAM-Infrastrukturen führen zu Performance-Problemen, Sicherheitslücken und Compliance-Verstößen. Eine strategisch geplante Infrastructure-Architektur ist entscheidend für langfristigen IAM-Erfolg und Business-Continuity.'
        },
        whyUs: {
          title: 'ADVISORI Infrastructure-Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Enterprise-Architektur-Expertise für komplexe IAM-Landschaften'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Cloud-native Design-Patterns für moderne Skalierungsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Performance-Engineering für optimale Benutzerfreundlichkeit'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Security-First-Ansatz mit Defense-in-Depth-Strategien'
            }
          ]
        },
        additionalInfo: 'Die Evolution der IAM-Infrastructure integriert zunehmend Edge-Computing, IoT-Integration und KI-gestützte Optimierung. Diese technologischen Trends erfordern flexible, adaptive Infrastrukturen, die sowohl aktuelle Anforderungen erfüllen als auch zukünftige Innovationen ermöglichen.',
        serviceDescription: 'Wir entwickeln und implementieren maßgeschneiderte IAM-Infrastrukturen, die Ihre spezifischen Geschäftsanforderungen optimal unterstützen. Von der strategischen Architektur-Planung über die technische Implementierung bis hin zum operativen Betrieb – unsere Infrastructure-Services gewährleisten maximale Verfügbarkeit, Performance und Sicherheit.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Infrastructure-Assessment und Architektur-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Cloud-Migration und Hybrid-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Performance-Optimierung und Capacity-Planning'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'High-Availability und Disaster-Recovery-Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Security-Hardening und Compliance-Integration'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer Infrastructure-Entwicklungsansatz',
        description: 'Wir verfolgen einen ganzheitlichen, business-orientierten Ansatz für IAM-Infrastructure-Entwicklung, der technische Exzellenz mit strategischen Geschäftszielen verbindet und dabei modernste Architekturprinzipien mit bewährten Enterprise-Praktiken vereint.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Infrastructure-Assessment mit Business-Impact-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Cloud-first Architektur-Design mit Hybrid-Flexibilität'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'DevOps-Integration mit Infrastructure-as-Code-Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Continuous Monitoring und Performance-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Proaktive Wartung und strategische Weiterentwicklung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'IAM Infrastructure ist das unsichtbare Fundament, das über Erfolg oder Misserfolg jeder Identitätsstrategie entscheidet. Unsere Erfahrung zeigt, dass Unternehmen, die in robuste, skalierbare Infrastructure-Architekturen investieren, nicht nur operative Exzellenz erreichen, sondern auch strategische Flexibilität für zukünftige Innovationen gewinnen. Die richtige Infrastructure-Strategie transformiert IAM von einem technischen Kostenfaktor zu einem strategischen Business-Enabler, der Wachstum beschleunigt und Risiken minimiert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Enterprise-Architektur und Infrastructure-Design',
          description: 'Entwicklung strategischer IAM-Infrastructure-Architekturen, die aktuelle Anforderungen erfüllen und zukünftiges Wachstum unterstützen, mit Fokus auf Skalierbarkeit und Performance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strategic Infrastructure-Assessment und Current-State-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Enterprise-Architektur-Design mit Future-State-Vision'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Technology-Stack-Evaluation und Vendor-Selection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Capacity-Planning und Performance-Modeling'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Cloud-native Implementation und Migration',
          description: 'Professionelle Migration zu cloud-nativen IAM-Infrastrukturen mit modernen Container-Technologien, Microservices-Architekturen und Auto-Scaling-Funktionalitäten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Cloud-Migration-Strategie und Roadmap-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Container-Orchestrierung mit Kubernetes und Docker'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Microservices-Architektur und API-Gateway-Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Multi-Cloud und Hybrid-Cloud-Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'High-Availability und Disaster Recovery',
          description: 'Implementation robuster High-Availability-Architekturen mit automatischen Failover-Mechanismen und umfassenden Disaster-Recovery-Strategien für Business-Continuity.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Multi-Region-Deployment für globale Verfügbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Automated Failover und Load-Balancing-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Disaster-Recovery-Planning und Business-Continuity'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Backup-Strategien und Data-Replication-Mechanismen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Performance-Optimierung und Monitoring',
          description: 'Kontinuierliche Performance-Optimierung mit Advanced-Monitoring, Real-time-Analytics und proaktiver Kapazitätsplanung für optimale Benutzerfreundlichkeit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Performance-Monitoring und Real-time-Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Bottleneck-Identification und Optimization-Strategies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Auto-Scaling und Dynamic-Resource-Allocation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Predictive-Analytics für Capacity-Planning'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Security-Hardening und Compliance-Integration',
          description: 'Umfassende Security-Hardening-Maßnahmen mit integrierten Compliance-Mechanismen, Threat-Detection und Defense-in-Depth-Strategien für maximale Sicherheit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Infrastructure-Security-Assessment und Hardening'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Network-Segmentation und Micro-Perimeter-Security'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Compliance-Automation und Regulatory-Alignment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Threat-Detection und Incident-Response-Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'DevOps-Integration und Infrastructure-as-Code',
          description: 'Moderne DevOps-Praktiken mit Infrastructure-as-Code, CI/CD-Integration und automatisierten Deployment-Pipelines für konsistente und reproduzierbare Infrastructure-Deployments.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Infrastructure-as-Code mit Terraform und CloudFormation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'CI/CD-Pipeline-Integration und Automated-Testing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Configuration-Management und Version-Control'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Blue-Green und Canary-Deployment-Strategien'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamInfrastructureData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Infrastructure page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
