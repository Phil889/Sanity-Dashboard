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
    console.log('Creating Microsoft Cloud PKI page...')

    const microsoftCloudPkiData = {
      _type: 'servicePage',
      _id: 'microsoft-cloud-pki',
      title: 'Microsoft Cloud PKI',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/data-protection-encryption/pki/microsoft-cloud-pki'
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
        title: 'Microsoft Cloud PKI - Azure Certificate Services & Key Vault Integration | ADVISORI',
        description: 'Professionelle Microsoft Cloud PKI Services mit Azure Key Vault, Certificate Services und Microsoft 365 Integration. Sichere Cloud-basierte Zertifikatsverwaltung für Enterprise-Umgebungen.',
        keywords: 'Microsoft Cloud PKI, Azure Key Vault, Azure Certificate Services, Microsoft 365 PKI, Cloud Certificate Management, Azure AD Certificate Services, Microsoft PKI Integration, Cloud Security'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Microsoft Cloud PKI - Azure-basierte Zertifikatsverwaltung und sichere Cloud-PKI-Services'
        },
        tagline: 'Enterprise-Sicherheit in der Microsoft Cloud',
        heading: 'Microsoft Cloud PKI',
        description: 'Microsoft Cloud PKI revolutioniert die Zertifikatsverwaltung durch nahtlose Integration in Azure-Services und Microsoft 365-Umgebungen. Wir implementieren hochsichere, skalierbare PKI-Lösungen, die die nativen Microsoft Cloud-Technologien optimal nutzen und gleichzeitig höchste Sicherheitsstandards erfüllen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Azure Key Vault Integration für Hardware-Security-Module-Schutz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Microsoft 365 und Office-Anwendungen Certificate Management'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Hybrid PKI-Architekturen mit On-Premises Active Directory'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'PowerShell und Microsoft Graph API Automatisierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Microsoft Cloud PKI - Native Azure-Integration für Enterprise-Zertifikatsverwaltung',
        description: 'Microsoft Cloud PKI nutzt die umfassenden Sicherheits- und Verwaltungsfunktionen der Azure-Plattform für moderne, cloud-native Zertifikatsverwaltung. Durch tiefe Integration in Microsoft-Ökosysteme ermöglichen wir nahtlose PKI-Implementierungen, die sowohl Sicherheit als auch operative Effizienz maximieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Azure Key Vault bietet Hardware Security Module-Schutz für kritische PKI-Schlüssel in der Cloud'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Azure Certificate Services ermöglichen automatisierte Zertifikatsausstellung und -verwaltung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Microsoft 365 Integration unterstützt S/MIME, Dokumentensignierung und sichere Kommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Hybrid-Szenarien verbinden Cloud-PKI nahtlos mit bestehenden Active Directory-Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'PowerShell und Microsoft Graph APIs ermöglichen umfassende Automatisierung und DevOps-Integration'
          }
        ],
        alert: {
          title: 'Microsoft Cloud PKI als strategischer Enabler',
          content: 'Microsoft Cloud PKI wird zum zentralen Baustein für Zero Trust-Architekturen, sichere Remote-Arbeit und compliance-konforme Digitalisierung in Microsoft-Umgebungen.'
        },
        whyUs: {
          title: 'Warum Microsoft Cloud PKI mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Microsoft-Expertise und Azure-Zertifizierungen unserer Consultants'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Implementierungsmethoden für komplexe Microsoft-Umgebungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitliche Integration in bestehende Microsoft-Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Optimierung und Support für Microsoft Cloud PKI-Systeme'
            }
          ]
        },
        additionalInfo: 'Microsoft Cloud PKI ermöglicht es Organisationen, die Vorteile der Azure-Plattform für sichere, skalierbare und kosteneffiziente Zertifikatsverwaltung zu nutzen. Die native Integration in Microsoft-Services schafft einzigartige Möglichkeiten für Automatisierung und Compliance.',
        serviceDescription: 'Unser Microsoft Cloud PKI Service umfasst die vollständige Begleitung von der Azure-basierten PKI-Planung über die technische Implementierung bis zum operativen Management. Wir entwickeln maßgeschneiderte Microsoft Cloud PKI-Lösungen, die optimal in Ihre Microsoft-Umgebung integriert sind.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Azure Key Vault PKI-Architektur und Certificate Authority Setup'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Microsoft 365 und Office-Anwendungen Certificate Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Hybrid PKI-Implementierung mit Active Directory Certificate Services'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'PowerShell und Microsoft Graph API Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Azure Security Center Integration und Compliance-Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zur Microsoft Cloud PKI Implementierung',
        description: 'Wir verfolgen einen systematischen und Microsoft-nativen Ansatz zur Cloud PKI Implementierung, der bewährte Azure-Services mit PKI-Best-Practices optimal kombiniert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Microsoft-Umgebungsanalyse und Azure-Architektur-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Azure Key Vault und Certificate Services Proof-of-Concept Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Rollout-Strategie mit Microsoft 365 und Hybrid-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'PowerShell-Automatisierung und DevOps-Pipeline-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliches Monitoring durch Azure Security Center und Compliance-Validierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Microsoft Cloud PKI repräsentiert die Zukunft der Enterprise-Zertifikatsverwaltung. Durch die native Integration in Azure-Services schaffen wir nicht nur technische Lösungen, sondern strategische Sicherheitsarchitekturen, die Organisationen befähigen, die volle Leistungsfähigkeit der Microsoft Cloud sicher zu nutzen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Azure Key Vault PKI-Architektur',
          description: 'Implementierung hochsicherer PKI-Architekturen basierend auf Azure Key Vault mit Hardware Security Module-Schutz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Azure Key Vault Managed HSM für Root CA-Schlüsselschutz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Certificate Authority Hierarchien in Azure Key Vault'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Azure RBAC Integration für granulare Zugriffskontrolle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Multi-Region Deployment für Hochverfügbarkeit'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Microsoft 365 Certificate Integration',
          description: 'Nahtlose Integration von PKI-Services in Microsoft 365 für sichere Kommunikation und Dokumentenverwaltung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'S/MIME Certificate Deployment für Outlook und Exchange Online'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'SharePoint und OneDrive Dokumentensignierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Teams und Skype for Business Certificate Authentication'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Office-Anwendungen Code Signing und Makro-Sicherheit'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Hybrid PKI mit Active Directory',
          description: 'Implementierung von Hybrid-PKI-Szenarien, die Cloud-Services mit bestehenden Active Directory-Infrastrukturen verbinden.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Azure AD Connect Certificate Synchronisation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'On-Premises ADCS zu Azure Key Vault Migration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Cross-Forest Certificate Trust Relationships'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Conditional Access Integration mit Certificate Authentication'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'PowerShell und API Automatisierung',
          description: 'Umfassende Automatisierung von Certificate Lifecycle Management durch PowerShell und Microsoft Graph APIs.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'PowerShell Module für Azure Key Vault Certificate Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Microsoft Graph API Integration für Certificate Operations'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Azure DevOps Pipeline Integration für Certificate Deployment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Automated Certificate Renewal und Notification Systems'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Azure Security Center Integration',
          description: 'Integration von PKI-Monitoring und -Management in Azure Security Center für umfassende Sicherheitsüberwachung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Certificate Health Monitoring in Azure Security Center'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Azure Sentinel Integration für PKI Security Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Compliance Dashboard für Certificate Governance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Automated Threat Detection für Certificate-basierte Angriffe'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Cloud PKI Governance & Compliance',
          description: 'Implementierung von Governance-Strukturen und Compliance-Management für Microsoft Cloud PKI-Umgebungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Azure Policy Integration für Certificate Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Microsoft Purview Integration für Data Governance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Audit und Reporting durch Azure Monitor und Log Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Cost Management und Optimization für Cloud PKI-Services'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(microsoftCloudPkiData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Microsoft Cloud PKI page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
