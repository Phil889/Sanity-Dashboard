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
    console.log('Creating Cloud PKI page...')

    const cloudPkiData = {
      _type: 'servicePage',
      _id: 'cloud-pki',
      title: 'Cloud PKI',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/data-protection-encryption/pki/cloud-pki'
      },
      parent: {
        _type: 'reference',
        _ref: 'pki'
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
        title: 'Cloud PKI Services - Skalierbare PKI-Infrastrukturen in der Cloud | ADVISORI',
        description: 'Professionelle Cloud PKI Services für moderne Unternehmen. Skalierbare Certificate Management Lösungen, Cloud-native PKI-Architekturen und nahtlose Integration in AWS, Azure und Google Cloud Platform.',
        keywords: 'Cloud PKI, Cloud Certificate Management, AWS PKI, Azure PKI, Google Cloud PKI, Cloud-native PKI, Hybrid Cloud PKI, DevOps PKI, Container PKI, Kubernetes PKI'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Cloud PKI Services - Moderne PKI-Infrastrukturen für die Cloud'
        },
        tagline: 'PKI-Innovation für die Cloud-Ära',
        heading: 'Cloud PKI',
        description: 'Cloud PKI Services revolutionieren die Art, wie Unternehmen Zertifikate und kryptographische Identitäten in modernen Cloud-Umgebungen verwalten. Unsere Cloud-nativen PKI-Lösungen bieten unübertroffene Skalierbarkeit, Flexibilität und Integration für digitale Transformation und DevOps-Workflows.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Cloud-native PKI-Architekturen mit elastischer Skalierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Nahtlose Integration in AWS, Azure und Google Cloud Platform'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'DevOps-optimierte Certificate Lifecycle Automation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Hybrid Cloud PKI für Multi-Cloud-Strategien'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Cloud PKI - Die Zukunft der Zertifikatsverwaltung in der Cloud',
        description: 'Cloud PKI Services ermöglichen es Unternehmen, die Vorteile moderner Cloud-Technologien für ihre PKI-Infrastrukturen zu nutzen. Von elastischer Skalierung über DevOps-Integration bis hin zu globaler Verfügbarkeit bieten Cloud PKI-Lösungen die Flexibilität und Performance, die moderne digitale Geschäftsmodelle erfordern.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Cloud-native Architekturen ermöglichen elastische Skalierung und globale Verfügbarkeit von PKI-Services'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'API-first Design und DevOps-Integration für automatisierte Certificate Lifecycle Management Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Multi-Cloud-Strategien mit einheitlicher PKI-Governance über verschiedene Cloud-Anbieter hinweg'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Container- und Kubernetes-optimierte PKI-Lösungen für moderne Anwendungsarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Hybrid Cloud PKI für nahtlose Integration von On-Premises und Cloud-Infrastrukturen'
          }
        ],
        alert: {
          title: 'Cloud PKI als Enabler für digitale Transformation',
          content: 'Cloud PKI Services sind der Schlüssel für sichere und skalierbare digitale Transformation, die es Unternehmen ermöglicht, moderne Cloud-Technologien ohne Kompromisse bei der Sicherheit zu nutzen.'
        },
        whyUs: {
          title: 'Warum Cloud PKI mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in Cloud-Technologien und PKI-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Multi-Cloud-Strategien für maximale Flexibilität'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'DevSecOps-Integration für automatisierte und sichere Entwicklungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Innovation und Anpassung an neue Cloud-Technologien'
            }
          ]
        },
        additionalInfo: 'Cloud PKI Services transformieren traditionelle PKI-Ansätze zu agilen, skalierbaren und kosteneffizienten Lösungen, die perfekt auf die Anforderungen moderner Cloud-first Unternehmen abgestimmt sind.',
        serviceDescription: 'Unsere Cloud PKI Services umfassen die komplette Bandbreite von Cloud-nativen PKI-Lösungen, von der strategischen Architektur über die Implementierung bis zur kontinuierlichen Optimierung. Wir unterstützen Sie bei der Transformation zu einer modernen, Cloud-optimierten PKI-Infrastruktur.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Cloud-native PKI-Architektur und -Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Multi-Cloud PKI-Implementierung und -Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'DevOps und CI/CD Pipeline Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Container und Kubernetes PKI-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Hybrid Cloud PKI-Strategien und -Migration'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz für Cloud PKI Services',
        description: 'Wir verfolgen einen Cloud-first und DevOps-orientierten Ansatz für PKI-Services, der moderne Cloud-Technologien optimal nutzt und gleichzeitig höchste Sicherheitsstandards gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Cloud-native Architektur-Design mit Fokus auf Skalierbarkeit und Performance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'API-first Entwicklung für nahtlose Integration in moderne Entwicklungsworkflows'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Infrastructure as Code Prinzipien für reproduzierbare und versionierte PKI-Deployments'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Optimierung durch Cloud-native Monitoring und Analytics'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Agile Implementierung mit iterativen Verbesserungen und Feedback-Zyklen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Cloud PKI Services repräsentieren die nächste Evolution der Zertifikatsverwaltung. Wir ermöglichen es Unternehmen, die volle Power moderner Cloud-Technologien für ihre PKI-Infrastrukturen zu nutzen, ohne dabei Kompromisse bei Sicherheit oder Compliance einzugehen - das ist der Schlüssel für erfolgreiche digitale Transformation.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Cloud-native PKI-Architektur',
          description: 'Entwicklung und Implementierung von PKI-Architekturen, die speziell für Cloud-Umgebungen optimiert sind.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Microservices-basierte PKI-Komponenten für maximale Skalierbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Serverless PKI-Functions für kostenoptimierte Operations'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Event-driven PKI-Workflows mit Cloud-nativen Messaging-Services'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Auto-scaling PKI-Services basierend auf Demand und Load'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Multi-Cloud PKI-Integration',
          description: 'Nahtlose Integration von PKI-Services in AWS, Azure, Google Cloud und andere Cloud-Plattformen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'AWS Certificate Manager und AWS Private CA Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Azure Key Vault und Azure Managed HSM Services'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Google Cloud Certificate Authority Service Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Cross-Cloud PKI-Governance und einheitliche Policy-Verwaltung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'DevOps PKI-Automation',
          description: 'Integration von PKI-Services in DevOps-Workflows und CI/CD-Pipelines für automatisierte Certificate Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'GitOps-basierte PKI-Konfiguration und Deployment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'CI/CD Pipeline Integration für automatische Certificate Provisioning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Infrastructure as Code für PKI-Komponenten und Policies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Automated Testing und Validation von PKI-Deployments'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Container und Kubernetes PKI',
          description: 'Spezialisierte PKI-Lösungen für Container-Umgebungen und Kubernetes-Cluster.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Kubernetes Certificate Management mit cert-manager Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Service Mesh PKI für Istio, Linkerd und Consul Connect'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Container Image Signing und Verification Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Pod-to-Pod mTLS Automation und Certificate Rotation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Hybrid Cloud PKI-Strategien',
          description: 'Entwicklung und Implementierung von PKI-Strategien für Hybrid Cloud und Multi-Cloud-Umgebungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Seamless On-Premises zu Cloud PKI-Migration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Cross-Cloud Trust Relationships und Certificate Chaining'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Unified PKI-Governance über Hybrid-Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Cloud Bursting PKI für dynamische Workload-Skalierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Cloud PKI-Monitoring und Analytics',
          description: 'Umfassende Überwachung und Analyse von Cloud PKI-Services mit modernen Observability-Tools.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Cloud-native Monitoring mit Prometheus und Grafana'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Distributed Tracing für PKI-Operations und Performance-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Predictive Analytics für Certificate Lifecycle Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Real-time Alerting und Incident Response Automation'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(cloudPkiData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Cloud PKI page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
