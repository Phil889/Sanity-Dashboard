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
    console.log('Creating Azure PKI page...')

    const azurePkiData = {
      _type: 'servicePage',
      _id: 'azure-pki',
      title: 'Azure PKI',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/data-protection-encryption/pki/azure-pki'
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
        title: 'Azure PKI Services - Microsoft Azure Certificate Management | ADVISORI',
        description: 'Professionelle Azure PKI Services für Unternehmen. Azure Key Vault, Managed HSM, Active Directory Integration und umfassende Microsoft Cloud PKI-Lösungen für sichere digitale Transformation.',
        keywords: 'Azure PKI, Azure Key Vault, Azure Managed HSM, Azure Certificate Management, Microsoft PKI, Azure Active Directory PKI, Azure DevOps PKI, Hybrid Azure PKI, Azure Security'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Azure PKI Services - Microsoft Azure Certificate Management'
        },
        tagline: 'Microsoft Azure PKI Excellence',
        heading: 'Azure PKI',
        description: 'Azure PKI Services nutzen die volle Power der Microsoft Cloud-Plattform für enterprise-grade Certificate Management und kryptographische Services. Unsere Azure-nativen PKI-Lösungen integrieren nahtlos mit Azure Key Vault, Managed HSM und Active Directory für sichere, skalierbare und compliance-konforme PKI-Infrastrukturen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Azure Key Vault Integration für zentrale Certificate Verwaltung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Azure Managed HSM für FIPS-konforme Hardware Security'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Active Directory Integration für Identity-basierte PKI'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Hybrid Cloud PKI für On-Premises und Azure Integration'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Azure PKI - Enterprise Certificate Management in der Microsoft Cloud',
        description: 'Azure PKI Services bieten eine umfassende, cloud-native Lösung für Certificate Management und kryptographische Services in Microsoft Azure. Von Azure Key Vault über Managed HSM bis hin zu Active Directory Integration ermöglichen unsere Services sichere, skalierbare und compliance-konforme PKI-Implementierungen für moderne Unternehmen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Azure Key Vault bietet zentrale, sichere Verwaltung von Zertifikaten, Schlüsseln und Secrets mit globaler Verfügbarkeit'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Azure Managed HSM Services für FIPS-konforme Hardware Security Module mit dedizierter Tenant-Isolation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Active Directory Integration ermöglicht Identity-basierte PKI-Governance und Single Sign-On Funktionalitäten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Azure DevOps Integration für automatisierte Certificate Lifecycle Management in CI/CD-Pipelines'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Hybrid Cloud PKI-Architekturen für nahtlose Integration von On-Premises und Azure-Infrastrukturen'
          }
        ],
        alert: {
          title: 'Azure PKI als Fundament für sichere Cloud Transformation',
          content: 'Azure PKI Services sind der Schlüssel für sichere digitale Transformation in der Microsoft Cloud, die es Unternehmen ermöglicht, moderne Cloud-Services ohne Kompromisse bei Sicherheit und Compliance zu nutzen.'
        },
        whyUs: {
          title: 'Warum Azure PKI mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefe Microsoft Azure Expertise und zertifizierte Cloud-Architekten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassende Integration in Microsoft Ecosystem und Enterprise Services'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Hybrid Cloud Strategien für optimale On-Premises und Cloud Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Innovation mit neuesten Azure PKI Features und Services'
            }
          ]
        },
        additionalInfo: 'Azure PKI Services transformieren traditionelle Certificate Management Ansätze zu modernen, cloud-nativen Lösungen, die perfekt in das Microsoft Ecosystem integriert sind und höchste Sicherheits- und Compliance-Standards erfüllen.',
        serviceDescription: 'Unsere Azure PKI Services umfassen die komplette Bandbreite von Microsoft Azure Certificate Management, von der strategischen Architektur über die Implementierung bis zur kontinuierlichen Optimierung. Wir unterstützen Sie bei der Transformation zu einer modernen, Azure-optimierten PKI-Infrastruktur.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Azure Key Vault PKI-Architektur und -Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Azure Managed HSM Services und Hardware Security'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Active Directory PKI Integration und Identity Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Azure DevOps und CI/CD Pipeline Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Hybrid Cloud PKI-Strategien und Migration'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz für Azure PKI Services',
        description: 'Wir verfolgen einen Microsoft-nativen und cloud-first Ansatz für PKI-Services, der die spezifischen Stärken der Azure-Plattform optimal nutzt und gleichzeitig höchste Sicherheits- und Compliance-Standards gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Azure-native Architektur-Design mit Fokus auf Microsoft Ecosystem Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Identity-first Ansatz mit Azure Active Directory als zentralem Identity Provider'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Infrastructure as Code mit Azure Resource Manager und Bicep Templates'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Optimierung durch Azure Monitor und Security Center Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Agile Implementierung mit Azure DevOps und iterativen Verbesserungszyklen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Azure PKI Services repräsentieren die perfekte Symbiose aus Microsoft Cloud-Innovation und enterprise-grade Sicherheit. Wir ermöglichen es Unternehmen, die volle Power des Azure Ecosystems für ihre PKI-Infrastrukturen zu nutzen und dabei höchste Sicherheits- und Compliance-Standards zu erfüllen - das ist der Schlüssel für erfolgreiche Cloud-first Strategien.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Azure Key Vault PKI Services',
          description: 'Umfassende Certificate Management Lösungen basierend auf Azure Key Vault für sichere und skalierbare PKI-Operations.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Zentrale Certificate Verwaltung mit globaler Azure-Verfügbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Automatische Certificate Renewal und Lifecycle Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'RBAC-basierte Access Controls und Audit Logging'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'REST API Integration für programmatische Certificate Operations'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Azure Managed HSM Services',
          description: 'FIPS-konforme Hardware Security Module Services für höchste Sicherheitsanforderungen und regulatory Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'FIPS 140-2 Level 3 zertifizierte Hardware Security Modules'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Dedizierte Tenant-Isolation für maximale Sicherheit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Hardware-basierte Key Generation und Cryptographic Operations'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Multi-Region Backup und Disaster Recovery Funktionalitäten'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Azure Active Directory PKI Integration',
          description: 'Identity-basierte PKI-Services mit nahtloser Azure AD Integration für moderne Identity und Access Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Single Sign-On Integration für PKI-Services und Certificate Access'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Conditional Access Policies für Certificate-basierte Authentication'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Multi-Factor Authentication für kritische PKI-Operations'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Identity Governance und Privileged Identity Management Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Azure DevOps PKI Automation',
          description: 'Integration von PKI-Services in Azure DevOps Pipelines für automatisierte Certificate Management in CI/CD-Workflows.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Azure Pipelines Integration für automatische Certificate Provisioning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Azure Repos Integration für Infrastructure as Code PKI-Deployments'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Azure Artifacts Integration für Certificate Package Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Azure Test Plans Integration für PKI-Testing und Validation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Hybrid Azure PKI Architekturen',
          description: 'Nahtlose Integration von On-Premises PKI-Infrastrukturen mit Azure Cloud Services für optimale Hybrid Cloud Strategien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Azure Arc Integration für Hybrid PKI-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'ExpressRoute und VPN Gateway Integration für sichere Connectivity'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Azure Stack Hub Integration für konsistente Hybrid-Erfahrungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Cross-Premises Trust Relationships und Certificate Chain Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Azure PKI Monitoring und Governance',
          description: 'Umfassende Überwachung und Governance von Azure PKI-Services mit nativen Azure Management Tools.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Azure Monitor Integration für PKI-Performance und Health Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Azure Security Center Integration für Security Posture Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Azure Policy Integration für Compliance und Governance Automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Azure Sentinel Integration für Security Information und Event Management'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(azurePkiData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Azure PKI page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
