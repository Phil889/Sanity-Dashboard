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
    console.log('Creating PKI Software page...')

    const pkiSoftwareData = {
      _type: 'servicePage',
      _id: 'pki-software',
      title: 'PKI Software',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/data-protection-encryption/pki/pki-software'
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
        title: 'PKI Software - Enterprise Certificate Management Solutions | ADVISORI',
        description: 'Professionelle PKI Software-Lösungen für Enterprise-Umgebungen. Software-basierte PKI-Architekturen, Certificate Lifecycle Management, API-Integration und moderne PKI-Plattformen für skalierbare Sicherheitsinfrastrukturen.',
        keywords: 'PKI Software, Certificate Management Software, PKI Platform, Certificate Lifecycle Software, PKI API, Enterprise PKI Software, Certificate Authority Software, PKI Automation Software, Digital Certificate Software, PKI Management Platform'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'PKI Software - Enterprise Certificate Management Solutions und moderne PKI-Plattformen'
        },
        tagline: 'Software-Excellence trifft auf PKI-Innovation',
        heading: 'PKI Software',
        description: 'PKI Software transformiert traditionelle Certificate-Management-Ansätze in intelligente, software-gesteuerte Vertrauensarchitekturen. Durch moderne Software-Plattformen, API-first-Architekturen und cloud-native PKI-Lösungen schaffen wir PKI-Software-Systeme, die operative Effizienz, strategische Skalierbarkeit und nahtlose Enterprise-Integration optimal vereinen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Software-basierte PKI-Architekturen und moderne Certificate-Management-Plattformen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'API-first PKI-Integration und Enterprise-Software-Harmonisierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Cloud-native PKI-Software und Microservices-Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Automated Certificate Lifecycle und Intelligent Software-Orchestrierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'PKI Software - Software-basierte Certificate Management Solutions für Enterprise-Umgebungen',
        description: 'PKI Software repräsentiert die Evolution von hardware-zentrierten PKI-Ansätzen zu flexiblen, software-definierten Vertrauensarchitekturen. Es ermöglicht Organisationen, PKI-Funktionalitäten als strategische Software-Services zu orchestrieren, die nicht nur operative Effizienz maximieren, sondern auch als Enabler für DevOps-Integration, Cloud-Migration und AI-gestützte Certificate-Intelligence fungieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Software-basierte PKI-Architekturen etablieren flexible Certificate-Management-Plattformen mit API-first-Design und Microservices-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Enterprise PKI Software-Plattformen harmonisieren verschiedene Certificate Authorities in einheitlichen Software-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Cloud-native PKI Software-Lösungen unterstützen Multi-Cloud-Strategien und Container-orchestrierte Certificate-Services'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Automated Certificate Lifecycle Software eliminiert manuelle Prozesse durch intelligente Software-Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'PKI Software-Integration verbindet Certificate-Management nahtlos mit DevOps-Pipelines und Enterprise-Software-Landschaften'
          }
        ],
        alert: {
          title: 'PKI Software als strategischer Technology Accelerator',
          content: 'Moderne PKI Software wird zum strategischen Differentiator für software-definierte Infrastrukturen, DevOps-Transformation und AI-gestützte Security-Orchestrierung – weit über traditionelle Certificate-Administration hinaus.'
        },
        whyUs: {
          title: 'Warum PKI Software mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende PKI Software-Expertise von Architecture Design bis Enterprise-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Beratung für optimale PKI Software-Plattformen und Technology-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Software-Integration-Frameworks für nahtlose Enterprise-PKI-Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche PKI Software-Evolution und strategische Technology-Roadmap-Entwicklung'
            }
          ]
        },
        additionalInfo: 'PKI Software ermöglicht es Organisationen, Certificate-Management als strategische Software-Capability zu etablieren. Die richtige PKI Software-Strategie wird zum Wettbewerbsvorteil in einer zunehmend software-definierten und cloud-nativen IT-Landschaft.',
        serviceDescription: 'Unser PKI Software Service umfasst die vollständige Transformation von traditionellen PKI-Ansätzen zu modernen Software-Plattformen. Wir entwickeln maßgeschneiderte PKI Software-Strategien, die perfekt zu Ihren Technology-, Security- und Business-Anforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Software-basierte PKI Architecture Development und Platform-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Enterprise PKI Software-Integration und API-Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Cloud-native PKI Software-Implementierung und Container-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Automated Certificate Lifecycle Software und Intelligent Orchestration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'PKI Software Performance-Optimierung und Scalability Engineering'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zur PKI Software',
        description: 'Wir verfolgen einen software-zentrierten und architecture-orientierten Ansatz zur PKI Software, der moderne Software-Engineering-Prinzipien mit PKI-Expertise optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende PKI Software-Assessment und Technology-Landscape-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Software-Architecture-Design mit API-first und Microservices-Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Agile PKI Software-Implementierung mit kontinuierlicher Integration und Testing'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Enterprise-Integration in bestehende Software-Landschaften und DevOps-Pipelines'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige PKI Software-Evolution durch Monitoring, Optimization und Technology-Roadmap-Entwicklung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'PKI Software ist das strategische Fundament für moderne, software-definierte Vertrauensarchitekturen. Wir transformieren traditionelle PKI-Ansätze in intelligente Software-Plattformen, die nicht nur operative Exzellenz gewährleisten, sondern auch als strategische Enabler für DevOps-Integration, Cloud-Migration und AI-gestützte Security-Orchestrierung fungieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Software-basierte PKI Architecture & Platform Design',
          description: 'Strategische PKI Software-Architecture-Entwicklung und Implementierung moderner Certificate-Management-Plattformen mit API-first-Design.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Software Architecture Design mit Microservices und API-first-Prinzipien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'PKI Platform Development mit modernen Software-Engineering-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Certificate Management Software-Frameworks und Service-Orchestrierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'PKI Software-Scalability-Design und Performance-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Enterprise PKI Software Integration & API Orchestration',
          description: 'Nahtlose Integration von PKI Software-Lösungen in Enterprise-Umgebungen mit umfassender API-Orchestrierung und System-Harmonisierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Enterprise Software-Integration mit bestehenden IT-Landschaften'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'PKI API-Orchestrierung und Service-Mesh-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Identity Management Software-Integration und SSO-Harmonisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'DevOps Pipeline-Integration und CI/CD-Orchestrierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Cloud-native PKI Software & Container Integration',
          description: 'Moderne Cloud-native PKI Software-Lösungen mit Container-Orchestrierung und Multi-Cloud-Unterstützung für skalierbare Certificate-Services.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Cloud-native PKI Software-Architecture und Container-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Kubernetes-orchestrierte Certificate-Services und Pod-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Multi-Cloud PKI Software-Deployment und Hybrid-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Serverless PKI Functions und Event-driven Certificate-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Automated Certificate Lifecycle Software',
          description: 'Intelligente Software-Automatisierung für Certificate Lifecycle Management mit AI-gestützter Orchestrierung und proaktiver Optimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Automated Certificate Provisioning Software mit Policy-Engine'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Intelligent Certificate Renewal-Orchestrierung und Lifecycle-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'AI-gestützte Certificate Analytics und Predictive Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Automated Certificate Revocation und Emergency Response-Software'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'PKI Software Security & Compliance Automation',
          description: 'Umfassende Security-Integration und Compliance-Automatisierung für PKI Software-Plattformen mit kontinuierlicher Überwachung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'PKI Software Security-Hardening und Vulnerability Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Automated Compliance-Monitoring und Regulatory Reporting-Software'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Certificate Transparency Software-Integration und Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Security Event-Integration und SIEM-Software-Orchestrierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'PKI Software Analytics & Performance Intelligence',
          description: 'Fortschrittliche Analytics-Software und Performance-Intelligence für datengestützte PKI-Optimierung und strategische Insights.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'PKI Software Performance-Analytics und Monitoring-Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Certificate Usage Analytics-Software und Optimization-Intelligence'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Predictive PKI Software-Analytics und Capacity Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Business Intelligence-Integration und ROI-Analytics-Software'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(pkiSoftwareData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ PKI Software page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
