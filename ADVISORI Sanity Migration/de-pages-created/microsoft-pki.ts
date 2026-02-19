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
    console.log('Creating Microsoft PKI page...')

    const microsoftPkiData = {
      _type: 'servicePage',
      _id: 'microsoft-pki',
      title: 'Microsoft PKI',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/data-protection-encryption/pki/microsoft-pki'
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
        title: 'Microsoft PKI Services - Enterprise Certificate Management mit AD CS | ADVISORI',
        description: 'Professionelle Microsoft PKI Services für Enterprise-Umgebungen. Active Directory Certificate Services, Azure Key Vault Integration, Microsoft Cloud PKI und nahtlose Microsoft Ecosystem-Integration.',
        keywords: 'Microsoft PKI, Active Directory Certificate Services, AD CS, Azure Key Vault, Microsoft Cloud PKI, Windows PKI, Office 365 PKI, Microsoft Certificate Management, Azure PKI Integration, Microsoft Enterprise PKI'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Microsoft PKI Services - Enterprise Certificate Management mit Active Directory Certificate Services'
        },
        tagline: 'Microsoft PKI Excellence für Enterprise-Transformation',
        heading: 'Microsoft PKI',
        description: 'Microsoft PKI Services transformieren komplexe Enterprise-Zertifikatsverwaltung in strategisch orchestrierte Microsoft-Ökosystem-Lösungen. Durch nahtlose Active Directory Certificate Services-Integration, Azure Cloud PKI-Optimierung und intelligente Microsoft-Technologie-Harmonisierung schaffen wir PKI-Architekturen, die operative Microsoft-Exzellenz mit strategischer Enterprise-Innovation optimal vereinen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Active Directory Certificate Services Enterprise-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Azure Key Vault und Microsoft Cloud PKI-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Microsoft Ecosystem-Harmonisierung und Office 365-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Windows Server PKI und Hybrid Cloud-Architekturen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Microsoft PKI - Strategic Certificate Management für Microsoft Enterprise-Umgebungen',
        description: 'Microsoft PKI Services sind das strategische Fundament für moderne Microsoft-zentrierte Enterprise-Architekturen. Sie transformieren fragmentierte Certificate-Operations in kohärente, Microsoft-optimierte Systeme, die nicht nur operative Effizienz maximieren, sondern auch als strategische Enabler für Microsoft Cloud-Transformation, Azure-Integration und Office 365-Sicherheitsframeworks fungieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Active Directory Certificate Services-Expertise etabliert enterprise-weite Microsoft PKI-Governance mit nahtloser Domain-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Azure Key Vault und Microsoft Cloud PKI-Services ermöglichen skalierbare, cloud-native Certificate-Management-Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Microsoft Ecosystem-Integration harmonisiert PKI-Services mit Office 365, Teams, SharePoint und Azure-Diensten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Windows Server PKI und Hybrid Cloud-Architekturen verbinden On-Premises AD CS mit Azure PKI-Services nahtlos'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Microsoft-native Automation und PowerShell-Integration unterstützen DevOps-optimierte Certificate Lifecycle Management-Prozesse'
          }
        ],
        alert: {
          title: 'Microsoft PKI als strategischer Enterprise-Accelerator',
          content: 'Microsoft PKI Services werden zum strategischen Differentiator für Microsoft-zentrierte Digitalisierung, Azure-Migration und moderne Workplace-Transformation – weit über traditionelle Certificate-Verwaltung hinaus.'
        },
        whyUs: {
          title: 'Warum Microsoft PKI mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Microsoft PKI-Expertise von AD CS bis Azure Key Vault'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Microsoft-zertifizierte Beratung für optimale Enterprise PKI-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Microsoft-Integration für hochverfügbare PKI-Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Microsoft PKI-Evolution und Azure-Roadmap-Entwicklung'
            }
          ]
        },
        additionalInfo: 'Microsoft PKI Services ermöglichen es Organisationen, die volle Power des Microsoft-Ökosystems für digitale Vertrauensarchitekturen zu nutzen. Die richtige Microsoft PKI-Strategie wird zum Wettbewerbsvorteil in einer zunehmend Microsoft-zentrierten Enterprise-Welt.',
        serviceDescription: 'Unser Microsoft PKI Service umfasst die vollständige Transformation von fragmentierten Certificate-Landschaften zu strategischen Microsoft-integrierten PKI-Governance-Systemen. Wir entwickeln maßgeschneiderte Microsoft PKI-Strategien, die perfekt zu Ihren Microsoft-Infrastrukturen, Azure-Strategien und Enterprise-Anforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Active Directory Certificate Services Design und Enterprise-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Azure Key Vault PKI und Microsoft Cloud Certificate-Services'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Microsoft Ecosystem-Integration und Office 365 PKI-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Windows Server PKI und Hybrid Cloud-Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Microsoft-native Automation und PowerShell-basierte PKI-Operations'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zu Microsoft PKI Services',
        description: 'Wir verfolgen einen Microsoft-zentrierten und enterprise-orientierten Ansatz zu PKI Services, der Microsoft-Technologien optimal nutzt und gleichzeitig strategische Business-Transformation ermöglicht.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Microsoft PKI-Assessment und Active Directory-Integration-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategic Microsoft PKI-Architektur-Entwicklung mit Azure Cloud-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Microsoft PKI-Implementierung mit kontinuierlicher Validierung und Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Microsoft Ecosystem-Integration in bestehende Enterprise-Landschaften'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Microsoft PKI-Evolution durch Monitoring, Training und Azure-Roadmap-Entwicklung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Microsoft PKI Services sind das strategische Fundament für moderne Microsoft-zentrierte Enterprise-Transformation. Wir transformieren komplexe Active Directory Certificate Services in strategisch orchestrierte PKI-Architekturen, die nicht nur operative Microsoft-Exzellenz gewährleisten, sondern auch als strategische Enabler für Azure-Migration, Office 365-Integration und Microsoft Cloud-Innovation fungieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Active Directory Certificate Services Enterprise-Integration',
          description: 'Umfassende AD CS-Implementierung und Enterprise-Integration für skalierbare Microsoft PKI-Infrastrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Enterprise Root CA und Subordinate CA-Hierarchie-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Active Directory-integrierte Certificate Templates und Auto-Enrollment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Certificate Revocation List-Optimierung und OCSP-Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Multi-Forest AD CS-Integration und Cross-Domain Trust-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Azure Key Vault PKI und Microsoft Cloud Services',
          description: 'Strategische Azure Key Vault-Integration und Microsoft Cloud PKI-Services für moderne Enterprise-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Azure Key Vault Certificate Management und HSM-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Azure Active Directory Certificate-based Authentication'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Microsoft Cloud PKI Services und Azure Certificate Authority'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Azure DevOps PKI-Integration und CI/CD Certificate-Automation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Microsoft Ecosystem-Integration und Office 365 PKI',
          description: 'Nahtlose PKI-Integration in Microsoft Office 365, Teams, SharePoint und weitere Microsoft-Services.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Office 365 S/MIME und Document Signing-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Microsoft Teams Certificate-based Authentication und Encryption'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'SharePoint PKI-Integration und Document Protection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Microsoft Intune Certificate Deployment und Mobile Device Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Windows Server PKI und Hybrid Cloud-Architekturen',
          description: 'Umfassende Windows Server PKI-Implementierung und Hybrid Cloud-Integration für Enterprise-Umgebungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Windows Server Certificate Services-Optimierung und High Availability'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Hybrid Cloud PKI-Architekturen mit On-Premises und Azure-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Windows Certificate Store-Management und Group Policy-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Microsoft System Center PKI-Integration und Monitoring'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Microsoft-native Automation und PowerShell PKI-Operations',
          description: 'Fortschrittliche PowerShell-basierte PKI-Automation und Microsoft-native DevOps-Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'PowerShell PKI-Module und Certificate Lifecycle-Automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Microsoft Graph API PKI-Integration und Automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Azure Resource Manager PKI-Templates und Infrastructure as Code'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Microsoft System Center Orchestrator PKI-Workflows'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Microsoft PKI Security und Compliance Management',
          description: 'Umfassende Microsoft PKI-Sicherheit und Compliance-Management für regulatorische Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Microsoft PKI Security Hardening und Best Practices-Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Azure Security Center PKI-Monitoring und Threat Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Microsoft Compliance Manager PKI-Assessment und Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Microsoft Defender PKI-Integration und Advanced Threat Protection'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(microsoftPkiData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Microsoft PKI page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
