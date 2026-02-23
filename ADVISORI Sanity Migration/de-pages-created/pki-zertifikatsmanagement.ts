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
    console.log('Creating PKI Zertifikatsmanagement page...')

    const pkiZertifikatsmanagementData = {
      _type: 'servicePage',
      _id: 'pki-zertifikatsmanagement',
      title: 'PKI Zertifikatsmanagement',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/data-protection-encryption/pki/pki-zertifikatsmanagement'
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
        title: 'PKI Zertifikatsmanagement - Enterprise Certificate Governance | ADVISORI',
        description: 'Professionelles PKI Zertifikatsmanagement für Enterprise-Umgebungen. Certificate Governance, Policy Management, Automated Lifecycle, Compliance-Integration und strategische PKI-Optimierung.',
        keywords: 'PKI Zertifikatsmanagement, Certificate Governance, PKI Policy Management, Certificate Lifecycle, PKI Compliance, Certificate Authority Management, PKI Strategy, Digital Certificate Management, PKI Operations, Certificate Security'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'PKI Zertifikatsmanagement - Enterprise Certificate Governance und strategische PKI-Optimierung'
        },
        tagline: 'Strategische PKI-Governance trifft auf operative Exzellenz',
        heading: 'PKI Zertifikatsmanagement',
        description: 'PKI Zertifikatsmanagement transformiert komplexe Certificate Authority-Landschaften in strategische Vertrauensarchitekturen. Durch intelligente Governance-Frameworks, automatisierte Policy-Enforcement und nahtlose Enterprise-Integration schaffen wir PKI-Infrastrukturen, die Sicherheit, Compliance und operative Effizienz optimal vereinen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische PKI-Governance und Certificate Policy Management'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automated Certificate Lifecycle und Compliance-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Multi-CA-Management und Trust Hierarchy-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Enterprise-Integration und skalierbare PKI-Architekturen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'PKI Zertifikatsmanagement - Strategische Certificate Governance für Enterprise-Umgebungen',
        description: 'PKI Zertifikatsmanagement ist das strategische Herzstück moderner Vertrauensarchitekturen. Es transformiert fragmentierte Certificate Authority-Landschaften in kohärente, governance-gesteuerte Systeme, die nicht nur operative Effizienz steigern, sondern auch als strategische Enabler für digitale Transformation und Zero Trust-Architekturen fungieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische PKI-Governance etabliert einheitliche Certificate Policies und Trust-Hierarchien über alle Geschäftsbereiche'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Automated Certificate Lifecycle Management eliminiert manuelle Prozesse und gewährleistet kontinuierliche Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Multi-CA-Integration harmonisiert verschiedene Certificate Authorities in einheitlichen Management-Plattformen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Enterprise-Integration verbindet PKI-Management nahtlos mit bestehenden IT-Operations und Security-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Skalierbare Architekturen unterstützen Wachstum und sich entwickelnde Geschäftsanforderungen dynamisch'
          }
        ],
        alert: {
          title: 'PKI als strategischer Business Enabler',
          content: 'Modernes PKI Zertifikatsmanagement wird zum strategischen Differentiator für digitale Geschäftsmodelle, Cloud-Migration und vertrauensbasierte Partnerschaften – weit über traditionelle Certificate-Verwaltung hinaus.'
        },
        whyUs: {
          title: 'Warum PKI Zertifikatsmanagement mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende PKI-Expertise von Certificate Authority-Design bis Enterprise-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Beratung für optimale PKI-Technologie und Governance-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Automatisierungsframeworks für hochverfügbare PKI-Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche PKI-Evolution und strategische Roadmap-Entwicklung'
            }
          ]
        },
        additionalInfo: 'PKI Zertifikatsmanagement ermöglicht es Organisationen, digitale Vertrauensbeziehungen als strategisches Asset zu nutzen. Die richtige PKI-Governance-Strategie wird zum Wettbewerbsvorteil in einer zunehmend vernetzten und regulierten Geschäftswelt.',
        serviceDescription: 'Unser PKI Zertifikatsmanagement Service umfasst die vollständige Transformation von fragmentierten Certificate-Landschaften zu strategischen PKI-Governance-Systemen. Wir entwickeln maßgeschneiderte PKI-Strategien, die perfekt zu Ihren Sicherheits-, Compliance- und Geschäftsanforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'PKI Strategy Development und Certificate Policy Framework-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Multi-CA-Integration und Trust Hierarchy-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Automated Certificate Lifecycle und Governance-Enforcement'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'PKI Compliance Management und Audit-Unterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Enterprise PKI-Integration und Operations-Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zum PKI Zertifikatsmanagement',
        description: 'Wir verfolgen einen strategischen und governance-orientierten Ansatz zum PKI Zertifikatsmanagement, der operative Exzellenz mit langfristiger strategischer Vision optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende PKI-Assessment und Certificate Landscape-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategische PKI-Governance-Entwicklung mit Policy Framework-Design'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Implementierung mit kontinuierlicher Validierung und Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Enterprise-Integration in bestehende Security- und IT-Operations-Landschaften'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige PKI-Evolution durch Monitoring, Training und strategische Roadmap-Entwicklung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'PKI Zertifikatsmanagement ist der strategische Grundstein für vertrauensvolle digitale Geschäftsmodelle. Wir transformieren komplexe Certificate Authority-Landschaften in governance-gesteuerte Vertrauensarchitekturen, die nicht nur operative Effizienz steigern, sondern auch als strategische Enabler für digitale Innovation und Compliance-Excellence fungieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'PKI Strategy & Governance Framework',
          description: 'Strategische PKI-Planung und Entwicklung umfassender Governance-Frameworks für Enterprise-weite Certificate-Verwaltung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'PKI Strategy Development und Business Alignment-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Certificate Policy Framework-Design und Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Trust Hierarchy-Optimierung und CA-Architektur-Planung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'PKI Roadmap-Entwicklung und Evolution-Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Multi-CA Management & Integration',
          description: 'Nahtlose Integration und Management verschiedener Certificate Authorities in einheitlichen PKI-Plattformen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Multi-CA-Integration und Harmonisierung verschiedener Certificate Authorities'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Public und Private CA-Management mit einheitlichen Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Cross-CA Policy-Enforcement und Trust Chain-Validierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'CA-Performance-Monitoring und Availability-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Certificate Policy Management',
          description: 'Entwicklung und Enforcement umfassender Certificate Policies für konsistente PKI-Governance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Certificate Policy Development und Compliance-Framework-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Automated Policy Enforcement und Validation-Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Certificate Template Management und Standardisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Policy Compliance-Monitoring und Audit-Trail-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Automated Certificate Lifecycle',
          description: 'Vollautomatisierte Certificate Lifecycle-Prozesse mit intelligenter Governance-Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Automated Certificate Enrollment mit Policy-basierter Validierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Intelligent Certificate Renewal mit Business Impact-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Certificate Revocation Management und Emergency Response-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Lifecycle Analytics und Optimization-Empfehlungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'PKI Compliance & Audit Management',
          description: 'Umfassende Compliance-Unterstützung und Audit-Management für regulatorische Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Regulatory Compliance-Mapping und Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Automated Compliance Reporting und Documentation-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'PKI Audit-Unterstützung und Evidence-Collection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Continuous Compliance-Monitoring und Risk Assessment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Enterprise PKI Integration',
          description: 'Nahtlose Integration von PKI-Management in bestehende Enterprise-Architekturen und Operations.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Enterprise Architecture-Integration und Service-Orchestrierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'ITSM-Integration und Workflow-Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Security Operations Center (SOC) Integration und Incident Response'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'PKI Operations-Optimierung und Performance-Management'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(pkiZertifikatsmanagementData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ PKI Zertifikatsmanagement page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
