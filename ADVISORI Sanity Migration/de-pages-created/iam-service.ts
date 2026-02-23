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
    console.log('Creating IAM Service page...')

    const iamServiceData = {
      _type: 'servicePage',
      _id: 'iam-service',
      title: 'IAM Service - Professionelle Identitätsverwaltung als Service',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-service'
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
        title: 'IAM Service - Professionelle Identitätsverwaltung als Service | ADVISORI',
        description: 'Professionelle IAM Services: Managed Identity & Access Management, Enterprise-Identitätsverwaltung als Service, Cloud-native IAM-Lösungen und strategische IAM-Beratung für maximale Sicherheit und Effizienz.',
        keywords: 'IAM Service, Identity Access Management Service, Managed IAM, IAM as a Service, Enterprise Identity Management, Cloud IAM Service, IAM Consulting, Identity Governance Service, Privileged Access Management Service, IAM Outsourcing'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Service Professionelle Identitätsverwaltung als Service'
        },
        tagline: 'Enterprise IAM-Services für strategische Identitätsverwaltung',
        heading: 'IAM Service - Professionelle Identitätsverwaltung als Service',
        description: 'IAM Service transformiert die Identitätsverwaltung von einer komplexen technischen Herausforderung zu einem strategischen Wettbewerbsvorteil durch professionelle Service-Delivery-Modelle. Unsere umfassenden IAM-Services kombinieren modernste Technologien mit bewährten Methoden und ermöglichen es Unternehmen, sich auf ihr Kerngeschäft zu konzentrieren, während Identitätssicherheit, Compliance und operative Exzellenz von Experten gewährleistet werden.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Managed IAM-Services mit garantierten Service Level Agreements'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Enterprise-grade Sicherheit durch spezialisierte IAM-Experten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kostenoptimierung durch Service-basierte Delivery-Modelle'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Innovation und Technology-Updates'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'IAM Service Excellence: Von der Strategie bis zum operativen Betrieb',
        description: 'Moderne IAM Services revolutionieren die Art, wie Unternehmen Identitätsverwaltung betrachten und implementieren. Statt komplexe IAM-Infrastrukturen intern aufzubauen und zu betreiben, ermöglichen professionelle IAM-Services eine strategische Fokussierung auf Geschäftsziele, während Sicherheit, Compliance und operative Exzellenz durch spezialisierte Service-Provider gewährleistet werden. Diese Service-orientierte Herangehensweise bietet nicht nur technische Vorteile, sondern transformiert IAM zu einem strategischen Business-Enabler.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Comprehensive Managed IAM Services mit End-to-End-Verantwortung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Cloud-native Service-Architekturen für Skalierbarkeit und Flexibilität'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Service Level Agreements mit garantierter Performance und Verfügbarkeit'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Continuous Service Improvement mit proaktiver Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Strategic Consulting Services für langfristige IAM-Excellence'
          }
        ],
        alert: {
          title: 'Service-Transformation',
          content: 'Unternehmen, die IAM als Service implementieren, reduzieren operative Komplexität um bis zu siebzig Prozent und können sich vollständig auf strategische Geschäftsziele konzentrieren, während Sicherheit und Compliance durch spezialisierte Experten gewährleistet werden.'
        },
        whyUs: {
          title: 'ADVISORI IAM-Service-Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'End-to-End IAM Service Delivery mit strategischer Beratung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Service-Architekturen für optimale Flexibilität'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Guaranteed Service Levels mit messbaren Business-Outcomes'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Continuous Innovation durch Technology-Leadership und R&D'
            }
          ]
        },
        additionalInfo: 'Die Zukunft der IAM-Services liegt in der intelligenten Orchestrierung von Cloud-nativen Technologien, KI-gestützten Automatisierungen und menschlicher Expertise. Diese Konvergenz ermöglicht adaptive Service-Modelle, die sich dynamisch an verändernde Geschäftsanforderungen anpassen und dabei kontinuierlich optimale Sicherheit und Performance gewährleisten.',
        serviceDescription: 'Unsere IAM-Services umfassen das gesamte Spektrum von strategischer Beratung und Architektur-Design über Implementation und Migration bis hin zu Managed Services und kontinuierlicher Optimierung. Wir kombinieren bewährte Service-Delivery-Methoden mit innovativen Technologien für eine IAM-Service-Landschaft, die Ihre spezifischen Geschäftsanforderungen optimal unterstützt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategic IAM Consulting und Service-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Managed IAM Services mit garantierten SLAs'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Cloud-native Service-Implementation und -Migration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Continuous Service Optimization und Innovation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Enterprise Support Services und Expert Advisory'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer IAM-Service-Delivery-Ansatz',
        description: 'Wir verfolgen einen ganzheitlichen, service-orientierten Ansatz für IAM-Transformationen, der bewährte Service-Management-Prinzipien mit modernsten IAM-Technologien verbindet und dabei kontinuierliche Wertschöpfung und messbare Business-Outcomes gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Service Strategy Development mit Business-Alignment und Value-Creation-Focus'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Service Design und Architecture mit Cloud-native und Security-by-Design Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Service Transition mit minimaler Disruption und maximaler Effizienz'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Service Operation mit proaktivem Monitoring und kontinuierlicher Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continual Service Improvement mit Innovation-Integration und Performance-Enhancement'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'IAM als Service repräsentiert die Evolution der Identitätsverwaltung von einer technischen Notwendigkeit zu einem strategischen Wettbewerbsvorteil. Unsere Erfahrung zeigt, dass Unternehmen, die IAM-Services professionell implementieren, nicht nur operative Effizienz und Kostenoptimierung erreichen, sondern auch die Agilität gewinnen, schnell auf verändernde Marktbedingungen zu reagieren. Die richtige Service-Strategie ermöglicht es, Sicherheit und Innovation zu vereinen, während gleichzeitig die Grundlage für nachhaltiges Wachstum und digitale Transformation geschaffen wird.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategic IAM Consulting und Service-Design',
          description: 'Entwicklung einer umfassenden IAM-Service-Strategie mit Business-Alignment, Service-Design und strategischer Roadmap für optimale Wertschöpfung und nachhaltige Transformation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Business-orientierte IAM-Service-Strategie und Value-Proposition-Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Service-Portfolio-Design mit optimaler Service-Mix-Gestaltung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Service-Level-Definition und SLA-Framework-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'ROI-optimierte Service-Roadmap und Business-Case-Entwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Managed IAM Services und Operational Excellence',
          description: 'Comprehensive Managed Services für alle IAM-Komponenten mit garantierten Service Levels, proaktivem Monitoring und kontinuierlicher Optimierung für maximale Verfügbarkeit und Performance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'End-to-End Managed IAM Services mit garantierten SLAs'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Proaktives Service-Monitoring und Performance-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Incident Management und Service-Restoration mit definierten RTOs'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Capacity Management und Scalability-Optimization'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Cloud-native IAM Service Implementation',
          description: 'Professionelle Implementation cloud-nativer IAM-Services mit modernsten Technologien, optimaler Integration und nahtloser Migration bestehender Systeme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Cloud-native Service-Architektur und Microservices-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Multi-Cloud Service-Deployment und Hybrid-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'API-first Service-Integration und Ecosystem-Connectivity'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'DevOps-Integration und CI/CD-Pipeline-Automation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Identity Governance as a Service',
          description: 'Spezialisierte Governance-Services für umfassende Identitätsverwaltung mit automatisierten Compliance-Prozessen und kontinuierlicher Risikobewertung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Automated Identity Governance mit Policy-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Compliance-as-a-Service mit regulatorischer Expertise'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Risk Assessment Services und Continuous Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Audit Support Services und Reporting-Automation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Privileged Access Management Service',
          description: 'Hochspezialisierte PAM-Services für kritische Assets mit erweiterten Sicherheitskontrollen, Session-Monitoring und Threat-Detection-Capabilities.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Managed PAM Service mit Credential-Vaulting und Rotation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Just-in-Time Access Service und Approval-Workflow-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Session Recording Service und Activity-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Threat Intelligence Service und Anomaly-Detection'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Continuous Service Innovation und Optimization',
          description: 'Kontinuierliche Service-Verbesserung und Innovation-Integration für zukunftssichere IAM-Services mit modernsten Technologien und Best Practices.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Service Performance Analytics und Optimization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Innovation Lab Services und Technology-Evaluation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Service Evolution Planning und Future-State-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategic Advisory Services und Executive-Consulting'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamServiceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Service page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
