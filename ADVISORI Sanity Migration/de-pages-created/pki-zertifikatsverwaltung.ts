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
    console.log('Creating PKI Zertifikatsverwaltung page...')

    const pkiZertifikatsverwaltungData = {
      _type: 'servicePage',
      _id: 'pki-zertifikatsverwaltung',
      title: 'PKI Zertifikatsverwaltung',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/data-protection-encryption/pki/pki-zertifikatsverwaltung'
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
        title: 'PKI Zertifikatsverwaltung - Administrative Certificate Governance | ADVISORI',
        description: 'Professionelle PKI Zertifikatsverwaltung für Enterprise-Umgebungen. Administrative Certificate Governance, Lifecycle Management, Compliance-Automation und strategische PKI-Verwaltungsoptimierung.',
        keywords: 'PKI Zertifikatsverwaltung, Certificate Administration, PKI Governance, Certificate Lifecycle Management, PKI Compliance, Certificate Authority Administration, PKI Management, Digital Certificate Administration, PKI Operations, Certificate Security Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'PKI Zertifikatsverwaltung - Administrative Certificate Governance und strategische PKI-Verwaltungsoptimierung'
        },
        tagline: 'Administrative Exzellenz trifft auf strategische PKI-Governance',
        heading: 'PKI Zertifikatsverwaltung',
        description: 'PKI Zertifikatsverwaltung transformiert komplexe Certificate-Administrationsaufgaben in strategische Governance-Prozesse. Durch intelligente Verwaltungsframeworks, automatisierte Lifecycle-Prozesse und nahtlose Enterprise-Integration schaffen wir PKI-Verwaltungsstrukturen, die operative Effizienz, Compliance-Sicherheit und strategische Kontrolle optimal vereinen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Administrative PKI-Governance und Certificate Lifecycle-Verwaltung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automated Certificate Administration und Compliance-Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Multi-CA-Verwaltung und Trust Management-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Enterprise-Integration und skalierbare Verwaltungsarchitekturen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'PKI Zertifikatsverwaltung - Administrative Certificate Governance für Enterprise-Umgebungen',
        description: 'PKI Zertifikatsverwaltung ist das administrative Rückgrat moderner Vertrauensarchitekturen. Es transformiert fragmentierte Certificate-Verwaltungsaufgaben in kohärente, governance-gesteuerte Systeme, die nicht nur operative Effizienz steigern, sondern auch als strategische Enabler für digitale Transformation und Zero Trust-Architekturen fungieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Administrative PKI-Governance etabliert einheitliche Certificate-Verwaltungsprozesse und Trust-Management über alle Geschäftsbereiche'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Automated Certificate Lifecycle Administration eliminiert manuelle Verwaltungsaufgaben und gewährleistet kontinuierliche Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Multi-CA-Administration harmonisiert verschiedene Certificate Authorities in einheitlichen Verwaltungsplattformen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Enterprise-Integration verbindet PKI-Verwaltung nahtlos mit bestehenden IT-Operations und Security-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Skalierbare Verwaltungsarchitekturen unterstützen Wachstum und sich entwickelnde Geschäftsanforderungen dynamisch'
          }
        ],
        alert: {
          title: 'PKI-Verwaltung als strategischer Business Enabler',
          content: 'Moderne PKI Zertifikatsverwaltung wird zum strategischen Differentiator für digitale Geschäftsmodelle, Cloud-Migration und vertrauensbasierte Partnerschaften – weit über traditionelle Certificate-Administration hinaus.'
        },
        whyUs: {
          title: 'Warum PKI Zertifikatsverwaltung mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende PKI-Verwaltungsexpertise von Certificate Authority-Administration bis Enterprise-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Beratung für optimale PKI-Verwaltungstechnologie und Governance-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Automatisierungsframeworks für hochverfügbare PKI-Verwaltungsinfrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche PKI-Verwaltungsevolution und strategische Roadmap-Entwicklung'
            }
          ]
        },
        additionalInfo: 'PKI Zertifikatsverwaltung ermöglicht es Organisationen, digitale Vertrauensbeziehungen als strategisches Asset zu verwalten. Die richtige PKI-Verwaltungsstrategie wird zum Wettbewerbsvorteil in einer zunehmend vernetzten und regulierten Geschäftswelt.',
        serviceDescription: 'Unser PKI Zertifikatsverwaltung Service umfasst die vollständige Transformation von fragmentierten Certificate-Verwaltungslandschaften zu strategischen PKI-Governance-Systemen. Wir entwickeln maßgeschneiderte PKI-Verwaltungsstrategien, die perfekt zu Ihren Sicherheits-, Compliance- und Geschäftsanforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'PKI Administration Strategy Development und Certificate Management Framework-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Multi-CA-Administration und Trust Management-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Automated Certificate Lifecycle Administration und Governance-Enforcement'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'PKI Compliance Administration und Audit-Unterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Enterprise PKI-Administration und Operations-Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zur PKI Zertifikatsverwaltung',
        description: 'Wir verfolgen einen strategischen und governance-orientierten Ansatz zur PKI Zertifikatsverwaltung, der administrative Exzellenz mit langfristiger strategischer Vision optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende PKI-Verwaltungsassessment und Certificate Administration-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategische PKI-Verwaltungsgovernance-Entwicklung mit Administration Framework-Design'
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
            text: 'Nachhaltige PKI-Verwaltungsevolution durch Monitoring, Training und strategische Roadmap-Entwicklung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'PKI Zertifikatsverwaltung ist der administrative Grundstein für vertrauensvolle digitale Geschäftsmodelle. Wir transformieren komplexe Certificate Authority-Verwaltungslandschaften in governance-gesteuerte Verwaltungsarchitekturen, die nicht nur operative Effizienz steigern, sondern auch als strategische Enabler für digitale Innovation und Compliance-Excellence fungieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'PKI Administration Strategy & Governance Framework',
          description: 'Strategische PKI-Verwaltungsplanung und Entwicklung umfassender Governance-Frameworks für Enterprise-weite Certificate-Administration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'PKI Administration Strategy Development und Business Alignment-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Certificate Administration Framework-Design und Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Trust Management-Optimierung und CA-Administration-Planung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'PKI Administration Roadmap-Entwicklung und Evolution-Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Multi-CA Administration & Integration',
          description: 'Nahtlose Administration und Management verschiedener Certificate Authorities in einheitlichen PKI-Verwaltungsplattformen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Multi-CA-Administration und Harmonisierung verschiedener Certificate Authorities'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Public und Private CA-Administration mit einheitlichen Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Cross-CA Administration-Enforcement und Trust Chain-Validierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'CA-Performance-Administration und Availability-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Certificate Lifecycle Administration',
          description: 'Vollautomatisierte Certificate Lifecycle-Administration mit intelligenter Governance-Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Automated Certificate Enrollment Administration mit Policy-basierter Validierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Intelligent Certificate Renewal Administration mit Business Impact-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Certificate Revocation Administration und Emergency Response-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Lifecycle Administration Analytics und Optimization-Empfehlungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'PKI Compliance Administration',
          description: 'Umfassende Compliance-Administration und Audit-Management für regulatorische Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Regulatory Compliance-Administration und Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Automated Compliance Administration Reporting und Documentation-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'PKI Audit-Administration und Evidence-Collection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Continuous Compliance-Administration und Risk Assessment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Enterprise PKI Administration Integration',
          description: 'Nahtlose Integration von PKI-Administration in bestehende Enterprise-Architekturen und Operations.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Enterprise Architecture-Administration und Service-Orchestrierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'ITSM-Administration Integration und Workflow-Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Security Operations Center (SOC) Administration Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'PKI Operations-Administration und Performance-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Advanced PKI Administration Analytics',
          description: 'Fortschrittliche Analytics und Intelligence für optimierte PKI-Verwaltungsentscheidungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'PKI Administration Analytics und Performance-Intelligence'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Certificate Usage Analytics und Optimization-Empfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Predictive Administration Analytics und Capacity Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Administration Cost Analytics und ROI-Optimierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(pkiZertifikatsverwaltungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ PKI Zertifikatsverwaltung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
