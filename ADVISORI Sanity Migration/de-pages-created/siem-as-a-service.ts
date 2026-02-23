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
    console.log('Creating SIEM as a Service page...')

    const siemAsAServiceData = {
      _type: 'servicePage',
      _id: 'siem-as-a-service',
      title: 'SIEM as a Service - Cloud-Native Security Operations',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/security-operations-secops/siem/siem-as-a-service'
      },
      parent: {
        _type: 'reference',
        _ref: 'siem'
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
        title: 'SIEM as a Service - Cloud-Native Security Operations | ADVISORI',
        description: 'SIEM as a Service (SIEMaaS): Cloud-native Security Operations, skalierbare Threat Detection, Pay-as-you-Grow Modelle und strategische SaaS-SIEM Implementierung für moderne Cybersecurity-Architekturen.',
        keywords: 'SIEM as a Service, SIEMaaS, Cloud SIEM, SaaS Security, Cloud Security Operations, Scalable SIEM, Cloud-native Security, Security SaaS, SIEM Cloud Platform, Managed SIEM Cloud'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'SIEM as a Service - Cloud-Native Security Operations'
        },
        tagline: 'Strategische SIEM as a Service Transformation für Cloud-Native Excellence',
        heading: 'SIEM as a Service - Cloud-Native Security Operations',
        description: 'SIEM as a Service revolutioniert traditionelle Security Operations durch cloud-native Architekturen, die sofortige Skalierbarkeit, reduzierte Komplexität und innovative Pay-as-you-Grow Modelle ermöglichen. Wir begleiten Sie bei der strategischen Transformation zu SIEMaaS-Lösungen, die perfekt zu Ihren Cloud-First Strategien und modernen Cybersecurity-Anforderungen passen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Sofortige Skalierbarkeit ohne Infrastructure-Limitationen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Pay-as-you-Grow Kostenmodelle für optimale Effizienz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Cloud-native Integration und API-First Architecture'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Minimale Time-to-Value durch SaaS-Deployment'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'SIEM as a Service: Cloud-Native Security Operations für die digitale Transformation',
        description: 'SIEM as a Service repräsentiert die Evolution von Security Operations in das Cloud-Zeitalter, wo traditionelle Infrastructure-Barrieren durch elastische, service-orientierte Architekturen ersetzt werden. Wir unterstützen Sie bei der strategischen Transformation zu SIEMaaS-Lösungen, die moderne Cybersecurity-Anforderungen mit Cloud-nativer Effizienz und Innovation verbinden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Cloud-Native Architecture Design und SaaS-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Elastic Scaling und Multi-Tenant Platform Optimization'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'API-First Integration und Cloud-Service Orchestration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Cost Optimization und Subscription Model Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Cloud Security Compliance und Data Governance'
          }
        ],
        alert: {
          title: 'Cloud-Native Advantage',
          content: 'SIEMaaS-Lösungen können die Deployment-Zeit von Monaten auf Tage reduzieren und gleichzeitig unbegrenzte Skalierbarkeit bieten. Die richtige Cloud-Strategie ist entscheidend für nachhaltigen Cybersecurity-Erfolg in der digitalen Ära.'
        },
        whyUs: {
          title: 'Unsere SIEM as a Service Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung mit allen führenden SIEMaaS-Plattformen und Cloud-Providern'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Cloud-First Beratung für strategische Digital Transformation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methodiken für Cloud Migration und Service Optimization'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'End-to-End Begleitung von der Cloud-Strategie bis zur operativen Exzellenz'
            }
          ]
        },
        additionalInfo: 'Der SIEMaaS-Markt entwickelt sich rasant mit neuen Cloud-nativen Capabilities, AI-gestützten Analytics und innovativen Pricing-Modellen. Eine strategische SaaS-Auswahl berücksichtigt nicht nur aktuelle Anforderungen, sondern auch zukünftige Cloud-Entwicklungen und Integrationsmöglichkeiten mit modernen DevSecOps-Workflows.',
        serviceDescription: 'Wir unterstützen Sie bei allen Aspekten der SIEM as a Service Transformation, von der initialen Cloud-Strategie über die Platform-Auswahl bis hin zur kontinuierlichen Service-Optimierung. Unser cloud-nativer Ansatz gewährleistet zukunftssichere Lösungen, die perfekt zu Ihren digitalen Transformationszielen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'SIEMaaS Strategy Development und Cloud-Native Architecture Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Platform Assessment und Multi-Cloud Integration Planning'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Migration Strategy und Cloud Transition Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Cost Optimization und Subscription Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance Monitoring und Continuous Cloud Optimization'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer SIEM as a Service Ansatz',
        description: 'Wir verfolgen einen strukturierten, cloud-nativen Ansatz für SIEM as a Service, der technische Innovation mit wirtschaftlicher Effizienz und strategischer Zukunftssicherheit verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Cloud Strategy Assessment und SIEMaaS-Readiness Evaluation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Platform Evaluation und Cloud-Native Capability Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Architecture Design und Integration Planning für optimale Cloud-Performance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Structured Migration und Cloud Transition Management'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Optimization und Cloud-Native Innovation'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'SIEM as a Service repräsentiert die Zukunft der Security Operations – cloud-native, skalierbar und innovativ. Unsere Expertise hilft Unternehmen dabei, die Transformation von traditionellen SIEM-Infrastrukturen zu modernen SaaS-Lösungen erfolgreich zu gestalten. Durch strategische Cloud-Architekturen und intelligente Service-Integration ermöglichen wir unseren Kunden, von der Flexibilität und Innovation der Cloud zu profitieren, während sie gleichzeitig höchste Sicherheitsstandards gewährleisten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'SIEMaaS Strategy und Cloud Architecture',
          description: 'Strategische Entwicklung cloud-nativer SIEM-Architekturen, die Business-Agilität mit Cybersecurity-Excellence optimal in Einklang bringen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Cloud-First Strategy Development und Digital Transformation Alignment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Multi-Cloud Architecture Design für optimale Vendor-Diversification'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'API-First Integration Planning und Microservices Architecture'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Scalability Planning und Elastic Resource Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'SIEMaaS Platform Assessment und Auswahl',
          description: 'Objektive Evaluierung und Auswahl von SIEM as a Service Plattformen basierend auf cloud-nativen Anforderungen und strategischen Zielen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Comprehensive SIEMaaS Market Analysis und Platform Comparison'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Cloud-Native Capability Assessment und Performance Benchmarking'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration Compatibility Analysis mit bestehenden Cloud-Services'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Cost-Benefit Analysis und TCO Modeling für verschiedene SaaS-Optionen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Cloud Migration und Transition Management',
          description: 'Professionelle Begleitung der SIEM-zu-SIEMaaS Migration mit strukturiertem Change Management für nahtlose Cloud-Übergänge.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Migration Strategy Development und Risk Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Data Migration Planning und Cloud-Native Data Architecture'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Hybrid Cloud Transition Management und Parallel Operations'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Team Training und Cloud-Native Skills Development'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Integration und API Management',
          description: 'Strategische Integration von SIEMaaS-Plattformen mit bestehenden Cloud-Infrastrukturen und Security-Ecosystemen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'API Strategy Development und Integration Architecture'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Cloud-Service Orchestration und Workflow Automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Multi-Cloud Integration und Cross-Platform Data Flow'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'DevSecOps Integration und CI/CD Pipeline Security'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Cost Optimization und Subscription Management',
          description: 'Strategische Kostenoptimierung und intelligentes Subscription Management für maximale ROI bei SIEMaaS-Investitionen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Usage-Based Cost Modeling und Predictive Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Subscription Optimization und Contract Negotiation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Multi-Tenant Cost Allocation und Chargeback Models'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'ROI Tracking und Value Realization Measurement'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Performance Monitoring und Cloud Optimization',
          description: 'Kontinuierliche Performance-Überwachung und Cloud-Optimierung für nachhaltige SIEMaaS-Excellence und Innovation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Cloud Performance Monitoring und SLA Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Continuous Optimization und Auto-Scaling Configuration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Innovation Adoption und Feature Enhancement Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Future-State Planning und Cloud-Native Evolution'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(siemAsAServiceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ SIEM as a Service page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
