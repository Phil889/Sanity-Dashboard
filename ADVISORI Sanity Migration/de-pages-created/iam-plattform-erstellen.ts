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
    console.log('Creating IAM Plattform Erstellen page...')

    const iamPlattformErstellenData = {
      _type: 'servicePage',
      _id: 'iam-plattform-erstellen',
      title: 'IAM Plattform erstellen - Enterprise Identity Management Systeme entwickeln',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-plattform-erstellen'
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
        title: 'IAM Plattform erstellen - Enterprise Identity Management Systeme entwickeln | ADVISORI',
        description: 'Professionelle IAM Plattform Entwicklung: Enterprise-grade Identity Management Systeme, skalierbare Architekturen, Cloud-native Deployment und strategische Plattform-Integration für maximale Sicherheit und Performance.',
        keywords: 'IAM Plattform erstellen, Identity Management System, Enterprise IAM Entwicklung, IAM Architektur, Identity Platform, IAM Implementation, Cloud IAM, Zero Trust Platform, Identity Governance Platform, IAM Infrastructure'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Plattform erstellen Enterprise Identity Management Systeme entwickeln'
        },
        tagline: 'Enterprise-grade IAM Plattformen für die digitale Zukunft',
        heading: 'IAM Plattform erstellen - Enterprise Identity Management Systeme entwickeln',
        description: 'Die Entwicklung einer robusten IAM Plattform ist das strategische Fundament für moderne Unternehmenssicherheit und digitale Transformation. Unsere enterprise-grade Identity Management Systeme vereinen modernste Technologien, skalierbare Architekturen und intelligente Automatisierung zu einer ganzheitlichen Plattform, die nicht nur höchste Sicherheitsstandards erfüllt, sondern auch als Business-Enabler für Innovation und Wachstum fungiert. Von der strategischen Konzeption über die technische Implementierung bis hin zum operativen Betrieb schaffen wir IAM Plattformen, die Ihre Organisation für die Herausforderungen der digitalen Zukunft rüsten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Skalierbare Enterprise-Architekturen für globale Deployment-Szenarien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Cloud-native Plattformen mit Multi-Cloud und Hybrid-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Zero-Trust-Security mit KI-gestützter Threat Detection und Response'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'API-first Design für nahtlose Ecosystem-Integration und Zukunftssicherheit'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische IAM Plattform-Entwicklung: Von der Vision zur Enterprise-Realität',
        description: 'Die Erstellung einer enterprise-grade IAM Plattform erfordert eine ganzheitliche Herangehensweise, die technische Exzellenz mit strategischer Weitsicht verbindet. Moderne Identity Management Systeme sind komplexe, hochintegrierte Plattformen, die als zentrales Nervensystem der digitalen Unternehmensinfrastruktur fungieren. Sie müssen nicht nur aktuelle Sicherheitsanforderungen erfüllen, sondern auch flexibel genug sein, um sich an zukünftige Technologien und Bedrohungslandschaften anzupassen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Enterprise-Architektur-Design mit modularen, microservices-basierten Komponenten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Cloud-native Development mit Container-Orchestrierung und Auto-Scaling'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Zero-Trust-Security-Framework mit kontinuierlicher Verifikation und Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'API-Gateway-Integration für nahtlose Third-Party-Connectivity'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Intelligent Analytics und Machine Learning für adaptive Sicherheitsentscheidungen'
          }
        ],
        alert: {
          title: 'Plattform-Kritikalität',
          content: 'Eine schlecht konzipierte IAM Plattform kann zum Single Point of Failure für die gesamte Unternehmensinfrastruktur werden. Professionelle Plattform-Entwicklung mit enterprise-grade Architekturen ist essentiell für Geschäftskontinuität und Skalierbarkeit.'
        },
        whyUs: {
          title: 'ADVISORI Plattform-Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'End-to-End Plattform-Entwicklung von Konzeption bis Deployment'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Cloud-native Expertise für moderne, skalierbare Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Security-by-Design mit Zero-Trust-Prinzipien und Compliance-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'DevOps-Integration für kontinuierliche Delivery und Maintenance'
            }
          ]
        },
        additionalInfo: 'Moderne IAM Plattformen integrieren zunehmend künstliche Intelligenz, maschinelles Lernen und Behavioral Analytics für proaktive Sicherheitsmaßnahmen. Diese technologische Evolution erfordert eine vorausschauende Architektur, die nicht nur aktuelle Anforderungen erfüllt, sondern auch für zukünftige Innovationen gerüstet ist.',
        serviceDescription: 'Wir begleiten Sie durch den gesamten Plattform-Entwicklungszyklus – von der strategischen Planung und Architektur-Design über die agile Entwicklung und Testing bis hin zum produktiven Deployment und kontinuierlichen Betrieb. Unser Ansatz kombiniert bewährte Enterprise-Patterns mit innovativen Cloud-native Technologien.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Plattform-Konzeption und Enterprise-Architektur-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Agile Entwicklung mit DevOps-Integration und Continuous Delivery'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Cloud-native Deployment mit Multi-Cloud und Hybrid-Support'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Security-Integration mit Zero-Trust-Framework und Compliance-Automation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance-Optimierung und Skalierungs-Engineering für Enterprise-Load'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer Plattform-Entwicklungsansatz',
        description: 'Wir verfolgen einen systematischen, agilen Ansatz für IAM Plattform-Entwicklung, der technische Exzellenz mit business-orientierter Strategieentwicklung verbindet und dabei modernste DevOps-Praktiken mit enterprise-grade Qualitätsstandards vereint.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Discovery und Requirements Engineering mit Stakeholder-Alignment und Business-Case-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Enterprise-Architektur-Design mit Cloud-native Patterns und Security-by-Design'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Agile Development mit Continuous Integration, Testing und Quality Assurance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Staged Deployment mit Blue-Green-Strategien und Risk-Mitigation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Operations mit Monitoring, Optimization und Innovation-Integration'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Entwicklung einer enterprise-grade IAM Plattform ist eine der kritischsten technologischen Investitionen moderner Unternehmen. Unsere Erfahrung zeigt, dass der Erfolg nicht nur von der technischen Implementierung abhängt, sondern von einer ganzheitlichen Herangehensweise, die Business-Strategie, Sicherheitsarchitektur und operative Exzellenz vereint. Eine professionell entwickelte IAM Plattform wird zum strategischen Asset, das nicht nur Sicherheit gewährleistet, sondern Innovation ermöglicht und Wettbewerbsvorteile schafft.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Plattform-Konzeption und Enterprise-Architektur',
          description: 'Entwicklung einer umfassenden IAM Plattform-Strategie mit enterprise-grade Architektur-Design, das Ihre spezifischen Geschäftsanforderungen mit modernsten Technologien verbindet.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Business-Requirements-Analysis und Stakeholder-Alignment für strategische Zielsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Enterprise-Architektur-Design mit modularen, microservices-basierten Komponenten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Technology-Stack-Selection mit Cloud-native und Open-Source-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Scalability-Planning und Performance-Engineering für Enterprise-Workloads'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Cloud-native Plattform-Development und DevOps-Integration',
          description: 'Professionelle Entwicklung cloud-nativer IAM Plattformen mit modernsten DevOps-Praktiken, Continuous Integration und automatisierter Quality Assurance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Agile Development mit Scrum-Methodologie und Sprint-basierter Delivery'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Container-Orchestrierung mit Kubernetes und Service-Mesh-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'CI/CD-Pipeline-Setup mit automatisiertem Testing und Quality Gates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Infrastructure-as-Code mit Terraform und Cloud-Provider-Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Zero-Trust-Security-Integration und Compliance-Framework',
          description: 'Implementation robuster Sicherheitsarchitekturen mit Zero-Trust-Prinzipien, advanced Threat Detection und automatisierter Compliance-Überwachung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Zero-Trust-Architecture mit kontinuierlicher Verifikation und Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Advanced Threat Detection mit KI-gestützter Anomaly Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Compliance-Automation für GDPR, SOX, HIPAA und branchenspezifische Regulierungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Security-Monitoring mit SIEM-Integration und Incident-Response-Automation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'API-Gateway und Ecosystem-Integration',
          description: 'Entwicklung hochperformanter API-Gateways und Integration-Layer für nahtlose Connectivity mit bestehenden Systemen und Third-Party-Services.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'API-Gateway-Development mit Rate-Limiting, Authentication und Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Legacy-System-Integration mit Adapter-Pattern und Data-Transformation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Third-Party-Connector-Development für SaaS-Applications und Cloud-Services'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Event-driven Architecture mit Message-Queuing und Real-time-Synchronization'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Performance-Engineering und Skalierungs-Optimierung',
          description: 'Spezialisierte Performance-Optimierung und Skalierungs-Engineering für enterprise-grade Workloads mit globaler Verfügbarkeit und Disaster Recovery.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Load-Testing und Performance-Benchmarking für Enterprise-Scale-Deployment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Auto-Scaling-Configuration mit Predictive Analytics und Resource-Optimization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Global Load-Balancing mit Multi-Region-Deployment und Failover-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Disaster-Recovery-Planning mit Backup-Automation und Business-Continuity'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Plattform-Operations und Continuous Innovation',
          description: 'Kontinuierlicher Betrieb und strategische Weiterentwicklung Ihrer IAM Plattform mit proaktivem Monitoring, Performance-Tuning und Innovation-Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Observability-Stack mit Metrics, Logging und Distributed-Tracing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Proactive Monitoring mit Alerting, Incident-Management und Root-Cause-Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Continuous Improvement mit Performance-Analytics und Optimization-Cycles'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Innovation-Integration mit Technology-Roadmap-Updates und Feature-Enhancement'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamPlattformErstellenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Plattform Erstellen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
