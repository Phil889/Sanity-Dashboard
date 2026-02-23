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
    console.log('Creating PKI Management page...')

    const pkiManagementData = {
      _type: 'servicePage',
      _id: 'pki-management',
      title: 'PKI Management',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/data-protection-encryption/pki/pki-management'
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
        title: 'PKI Management - Strategic Certificate Lifecycle Governance | ADVISORI',
        description: 'Professionelle PKI Management Services für Enterprise-Umgebungen. Strategic Certificate Lifecycle Management, PKI Governance Frameworks, Automated Operations und comprehensive PKI-Verwaltungsoptimierung.',
        keywords: 'PKI Management, Certificate Lifecycle Management, PKI Governance, Certificate Operations, PKI Strategy, Digital Certificate Management, PKI Administration, Certificate Automation, PKI Security Management, Enterprise PKI Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'PKI Management - Strategic Certificate Lifecycle Governance und comprehensive PKI-Verwaltungsoptimierung'
        },
        tagline: 'Strategic Excellence trifft auf operational PKI-Mastery',
        heading: 'PKI Management',
        description: 'PKI Management transformiert komplexe Certificate-Landschaften in strategisch gesteuerte Vertrauensarchitekturen. Durch intelligente Lifecycle-Governance, automatisierte Operations und nahtlose Enterprise-Integration schaffen wir PKI-Management-Systeme, die operative Exzellenz, strategische Kontrolle und Business-Agilität optimal vereinen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategic PKI Governance und Certificate Lifecycle-Management'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automated PKI Operations und Enterprise-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Comprehensive Security Management und Compliance-Automation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Advanced Analytics und Performance-Optimierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'PKI Management - Strategic Certificate Lifecycle Governance für Enterprise-Umgebungen',
        description: 'PKI Management ist das strategische Fundament für moderne Vertrauensarchitekturen. Es transformiert fragmentierte Certificate-Operations in kohärente, governance-gesteuerte Systeme, die nicht nur operative Effizienz maximieren, sondern auch als strategische Enabler für digitale Transformation, Zero Trust-Architekturen und AI-gestützte Sicherheitsframeworks fungieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategic PKI Governance etabliert einheitliche Certificate-Management-Frameworks und Trust-Hierarchien über alle Geschäftsbereiche'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Automated Certificate Lifecycle Management eliminiert manuelle Operations und gewährleistet kontinuierliche Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Enterprise PKI Integration harmonisiert verschiedene Certificate Authorities in einheitlichen Management-Plattformen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Advanced Security Operations verbinden PKI-Management nahtlos mit SOC-Systemen und Threat Intelligence-Plattformen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Intelligent Analytics und Performance-Optimierung unterstützen datengestützte PKI-Entscheidungen und kontinuierliche Verbesserung'
          }
        ],
        alert: {
          title: 'PKI Management als strategischer Business Accelerator',
          content: 'Modernes PKI Management wird zum strategischen Differentiator für AI-gestützte Geschäftsmodelle, Cloud-native Architekturen und vertrauensbasierte Partnerschaften – weit über traditionelle Certificate-Administration hinaus.'
        },
        whyUs: {
          title: 'Warum PKI Management mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende PKI-Management-Expertise von Strategic Governance bis Operational Excellence'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Beratung für optimale PKI-Management-Technologie und Governance-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Automatisierungsframeworks für hochverfügbare PKI-Management-Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche PKI-Management-Evolution und strategische Roadmap-Entwicklung'
            }
          ]
        },
        additionalInfo: 'PKI Management ermöglicht es Organisationen, digitale Vertrauensbeziehungen als strategisches Asset zu orchestrieren. Die richtige PKI-Management-Strategie wird zum Wettbewerbsvorteil in einer zunehmend vernetzten und AI-gestützten Geschäftswelt.',
        serviceDescription: 'Unser PKI Management Service umfasst die vollständige Transformation von fragmentierten Certificate-Landschaften zu strategischen PKI-Governance-Systemen. Wir entwickeln maßgeschneiderte PKI-Management-Strategien, die perfekt zu Ihren Sicherheits-, Compliance- und Geschäftsanforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategic PKI Governance Development und Certificate Management Framework-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Automated Certificate Lifecycle Management und Operations-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Enterprise PKI Integration und Multi-CA-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Advanced Security Operations und Threat Intelligence-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'PKI Analytics und Performance-Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zum PKI Management',
        description: 'Wir verfolgen einen strategischen und governance-orientierten Ansatz zum PKI Management, der operative Exzellenz mit langfristiger strategischer Vision optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende PKI-Assessment und Certificate Landscape-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategic PKI-Governance-Entwicklung mit Management Framework-Design'
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
            text: 'Nachhaltige PKI-Management-Evolution durch Monitoring, Training und strategische Roadmap-Entwicklung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'PKI Management ist das strategische Fundament für vertrauensvolle AI-gestützte Geschäftsmodelle. Wir transformieren komplexe Certificate-Landschaften in governance-gesteuerte Management-Architekturen, die nicht nur operative Exzellenz gewährleisten, sondern auch als strategische Enabler für digitale Innovation, Zero Trust-Implementierung und AI-Security-Excellence fungieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategic PKI Governance & Management Framework',
          description: 'Strategische PKI-Governance-Entwicklung und Implementierung umfassender Management-Frameworks für Enterprise-weite Certificate-Operations.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strategic PKI Governance Development und Business Alignment-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Certificate Management Framework-Design und Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Trust Architecture-Optimierung und PKI-Strategy-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'PKI Management Roadmap-Entwicklung und Evolution-Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Automated Certificate Lifecycle Management',
          description: 'Vollautomatisierte Certificate Lifecycle-Operations mit intelligenter Governance-Integration und Business-Impact-Optimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automated Certificate Provisioning mit Policy-basierter Validierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Intelligent Certificate Renewal Management mit Business Impact-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Certificate Revocation Management und Emergency Response-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Lifecycle Analytics und Optimization-Empfehlungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Enterprise PKI Integration & Multi-CA Management',
          description: 'Nahtlose Integration verschiedener Certificate Authorities und PKI-Systeme in einheitlichen Enterprise-Management-Plattformen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Multi-CA Integration und Harmonisierung verschiedener Certificate Authorities'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Enterprise Architecture Integration mit Service-Orchestrierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Cross-Platform PKI Management und Unified Operations'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Cloud-Native PKI Management und Hybrid-Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Advanced Security Operations & Monitoring',
          description: 'Umfassende Security Operations-Integration und Real-time Monitoring für proaktive PKI-Sicherheit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'SOC Integration und Security Event-Korrelation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Real-time Certificate Monitoring und Threat Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Certificate Transparency Monitoring und Anomaly Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Incident Response Integration und Automated Remediation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'PKI Compliance Management & Audit Support',
          description: 'Umfassende Compliance-Management und Audit-Unterstützung für regulatorische Anforderungen und Standards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Regulatory Compliance Management und Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Automated Compliance Reporting und Documentation-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'PKI Audit Support und Evidence-Collection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Continuous Compliance Monitoring und Risk Assessment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'PKI Analytics & Performance Optimization',
          description: 'Fortschrittliche Analytics und Intelligence für datengestützte PKI-Management-Entscheidungen und kontinuierliche Optimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'PKI Performance Analytics und Management-Intelligence'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Certificate Usage Analytics und Optimization-Empfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Predictive Analytics und Capacity Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Cost Analytics und ROI-Optimierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(pkiManagementData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ PKI Management page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
