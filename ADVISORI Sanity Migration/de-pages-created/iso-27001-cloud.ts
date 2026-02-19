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
    console.log('Creating ISO 27001 Cloud page...')

    const iso27001CloudData = {
      _type: 'servicePage',
      _id: 'iso-27001-cloud',
      title: 'ISO 27001 Cloud',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-cloud'
      },
      parent: {
        _type: 'reference',
        _ref: 'iso-27001'
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
        title: 'ISO 27001 Cloud Security | Cloud ISMS Implementierung | ADVISORI',
        description: 'Professionelle ISO 27001 Implementierung für Cloud-Umgebungen. Von Multi-Cloud-Strategien bis Cloud-spezifische Kontrollen - Ihr Partner für sichere Cloud-Transformation.',
        keywords: 'ISO 27001 Cloud, Cloud Security, Cloud ISMS, Multi-Cloud Security, Hybrid Cloud Compliance, Cloud Governance, Cloud Risk Management, Cloud Audit, Cloud Zertifizierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Cloud Security Implementation'
        },
        tagline: 'Sichere Cloud-Transformation mit ISO 27001 Excellence',
        heading: 'ISO 27001 Cloud Security',
        description: 'Meistern Sie die Komplexität der Cloud-Sicherheit mit ISO 27001 - dem bewährten Framework für systematisches Informationssicherheitsmanagement in Cloud-Umgebungen. Unsere spezialisierte Expertise begleitet Sie bei der sicheren Transformation zu Multi-Cloud- und Hybrid-Architekturen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Cloud-native ISMS-Implementierung nach ISO 27001'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Multi-Cloud und Hybrid-Cloud Sicherheitsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierte Compliance-Überwachung in der Cloud'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Cloud Service Provider Assessment und Due Diligence'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ISO 27001 für Cloud-Umgebungen - Sicherheit in der digitalen Transformation',
        description: 'Die Cloud-Transformation erfordert eine Neuausrichtung traditioneller Sicherheitsansätze. ISO 27001 bietet den strukturierten Rahmen für systematisches Informationssicherheitsmanagement in Cloud-Umgebungen und adressiert die einzigartigen Herausforderungen von Multi-Cloud-, Hybrid- und Edge-Computing-Architekturen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Cloud-spezifische Risikobewertung und Kontrollimplementierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Shared Responsibility Model Integration in ISMS-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Multi-Cloud Governance und einheitliche Sicherheitsstandards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Automatisierte Compliance-Monitoring und kontinuierliche Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Cloud Service Provider Assessment und Vendor Risk Management'
          }
        ],
        alert: {
          title: 'Cloud Security Excellence',
          content: 'ISO 27001 in der Cloud ist mehr als Compliance - es ist die Grundlage für vertrauensvolle, skalierbare und resiliente Cloud-Architekturen in der digitalen Wirtschaft.'
        },
        whyUs: {
          title: 'Warum ISO 27001 Cloud mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Expertise in Cloud-nativen ISMS-Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für Multi-Cloud und Hybrid-Umgebungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integration mit modernen DevSecOps und Cloud-Native-Praktiken'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Automatisierte Compliance-Tools und kontinuierliche Überwachung'
            }
          ]
        },
        additionalInfo: 'Cloud-Umgebungen bringen einzigartige Sicherheitsherausforderungen mit sich: geteilte Verantwortlichkeiten, dynamische Infrastrukturen, Multi-Tenancy und globale Datenverteilung. ISO 27001 bietet den strukturierten Ansatz, um diese Komplexität zu managen und gleichzeitig die Agilität und Skalierbarkeit der Cloud zu nutzen.',
        serviceDescription: 'Unser ISO 27001 Cloud Service-Portfolio adressiert alle Aspekte der Cloud-Sicherheit - von der strategischen Cloud-Governance über die operative Implementierung bis hin zur kontinuierlichen Optimierung. Wir begleiten Sie bei der Transformation zu einer sicheren, compliant und effizienten Cloud-Architektur.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Cloud Security Strategy und ISMS-Architektur-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Multi-Cloud Risikomanagement und Kontrollimplementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Cloud Service Provider Assessment und Vendor Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Automatisierte Compliance-Monitoring und Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Cloud-native Audit-Vorbereitung und Zertifizierungsunterstützung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Cloud-ISMS Implementierungsansatz',
        description: 'Wir verfolgen einen cloud-nativen, phasenorientierten Ansatz, der bewährte ISO 27001 Methoden mit modernen Cloud-Technologien und DevSecOps-Praktiken kombiniert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Cloud Security Assessment und Multi-Cloud Architektur-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Cloud-spezifische Risikobewertung und Shared Responsibility Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Automatisierte Kontrollimplementierung und Infrastructure as Code Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Compliance-Überwachung und Cloud-native Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Cloud-Audit-Vorbereitung und Multi-Cloud Zertifizierungsunterstützung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Cloud-Transformation erfordert eine fundamentale Neuausrichtung der Informationssicherheit. Unsere cloud-native ISO 27001 Implementierungen verbinden bewährte Sicherheitsprinzipien mit modernen Cloud-Technologien und schaffen die Grundlage für sichere, skalierbare und agile Geschäftsmodelle.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Cloud Security Strategy & ISMS Design',
          description: 'Strategische Entwicklung cloud-nativer ISMS-Architekturen für Multi-Cloud und Hybrid-Umgebungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Multi-Cloud Security Architecture und Governance-Framework'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Cloud-spezifische Risikobewertung und Threat Modeling'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Shared Responsibility Model Integration und Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Cloud Service Provider Assessment Framework'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Multi-Cloud Compliance Management',
          description: 'Einheitliche Compliance-Überwachung und -management über verschiedene Cloud-Plattformen hinweg.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automatisierte Compliance-Monitoring und Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Cross-Cloud Policy Management und Enforcement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Cloud Configuration Management und Drift Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Risikobewertung und Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Cloud-Native Security Controls',
          description: 'Implementierung und Automatisierung von ISO 27001 Kontrollen in Cloud-Umgebungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Infrastructure as Code Security Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Container und Kubernetes Security Controls'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Serverless Security und Function-Level Controls'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Cloud-native Identity und Access Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Cloud Data Protection & Encryption',
          description: 'Umfassende Datenschutz- und Verschlüsselungsstrategien für Cloud-Umgebungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'End-to-End Encryption und Key Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Data Loss Prevention in Multi-Cloud Umgebungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Cloud Data Classification und Governance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Cross-Border Data Transfer Compliance'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Cloud Incident Response & Recovery',
          description: 'Cloud-spezifische Incident Response und Business Continuity Strategien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Cloud-native Incident Detection und Response'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Multi-Cloud Disaster Recovery Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Automated Backup und Recovery Orchestration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Cloud Forensics und Evidence Collection'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Cloud Audit & Zertifizierung',
          description: 'Spezialisierte Audit-Services und Zertifizierungsunterstützung für Cloud-Umgebungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Cloud-spezifische ISO 27001 Audit-Vorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Multi-Cloud Evidence Collection und Documentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Cloud Service Provider Audit Coordination'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Compliance-Validierung und Monitoring'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001CloudData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Cloud page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
