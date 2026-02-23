import 'dotenv/config'
// Import script for Microsoft PKI Parent Page - English Translation
import { createClient } from '@sanity/client'
import { faqsBatch1 } from './microsoft-pki-parent-en-faqs-batch1'
import { faqsBatch2 } from './microsoft-pki-parent-en-faqs-batch2'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Combine all FAQ batches
const allFaqs = [...faqsBatch1, ...faqsBatch2]

// English translation document for Microsoft PKI Parent Page
const microsoftPkiParentEnglish = {
  _id: 'microsoft-pki-en',
  _type: 'servicePage',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'microsoft-pki'
  },
  title: 'Microsoft PKI',
  slug: {
    _type: 'slug',
    current: 'information-security/data-protection-encryption/pki/microsoft-pki-en'
  },
  seo: {
    _type: 'seo',
    title: 'Microsoft PKI Services - Enterprise Certificate Management with AD CS | ADVISORI',
    description: 'Professional Microsoft PKI Services for enterprise environments. Active Directory Certificate Services, Azure Key Vault Integration, Microsoft Cloud PKI, and seamless Microsoft Ecosystem integration.',
    keywords: 'Microsoft PKI, Active Directory Certificate Services, AD CS, Azure Key Vault, Microsoft Cloud PKI, Windows PKI, Office 365 PKI, Microsoft Certificate Management, Azure PKI Integration, Microsoft Enterprise PKI'
  },
  heroSection: {
    _type: 'object',
    heading: 'Microsoft PKI',
    tagline: 'Microsoft PKI Excellence for Enterprise Transformation',
    description: 'Microsoft PKI Services transform complex enterprise certificate management into strategically orchestrated Microsoft ecosystem solutions. Through seamless Active Directory Certificate Services integration, Azure Cloud PKI optimization, and intelligent Microsoft technology harmonization, we create PKI architectures that optimally combine operational Microsoft excellence with strategic enterprise innovation.',
    heroImage: {
      _type: 'image',
      alt: 'Microsoft PKI Services - Enterprise Certificate Management with Active Directory Certificate Services'
    },
    benefits: [
      {
        _key: 'benefit_ms_pki_parent_en_1',
        _type: 'object',
        text: 'Active Directory Certificate Services Enterprise Integration'
      },
      {
        _key: 'benefit_ms_pki_parent_en_2',
        _type: 'object',
        text: 'Azure Key Vault and Microsoft Cloud PKI Optimization'
      },
      {
        _key: 'benefit_ms_pki_parent_en_3',
        _type: 'object',
        text: 'Microsoft Ecosystem Harmonization and Office 365 Integration'
      },
      {
        _key: 'benefit_ms_pki_parent_en_4',
        _type: 'object',
        text: 'Windows Server PKI and Hybrid Cloud Architectures'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'Microsoft PKI - Strategic Certificate Management for Microsoft Enterprise Environments',
    description: 'Microsoft PKI Services are the strategic foundation for modern Microsoft-centric enterprise architectures. They transform fragmented certificate operations into coherent, Microsoft-optimized systems that not only maximize operational efficiency but also serve as strategic enablers for Microsoft Cloud transformation, Azure integration, and Office 365 security frameworks.',
    additionalInfo: 'Microsoft PKI Services enable organizations to leverage the full power of the Microsoft ecosystem for digital trust architectures. The right Microsoft PKI strategy becomes a competitive advantage in an increasingly Microsoft-centric enterprise world.',
    alert: {
      title: 'Microsoft PKI as Strategic Enterprise Accelerator',
      content: 'Microsoft PKI Services are becoming a strategic differentiator for Microsoft-centric digitalization, Azure migration, and modern workplace transformation – far beyond traditional certificate management.'
    },
    points: [
      {
        _key: 'point_ms_pki_parent_en_1',
        _type: 'object',
        text: 'Active Directory Certificate Services expertise establishes enterprise-wide Microsoft PKI governance with seamless domain integration'
      },
      {
        _key: 'point_ms_pki_parent_en_2',
        _type: 'object',
        text: 'Azure Key Vault and Microsoft Cloud PKI services enable scalable, cloud-native certificate management solutions'
      },
      {
        _key: 'point_ms_pki_parent_en_3',
        _type: 'object',
        text: 'Microsoft Ecosystem integration harmonizes PKI services with Office 365, Teams, SharePoint, and Azure services'
      },
      {
        _key: 'point_ms_pki_parent_en_4',
        _type: 'object',
        text: 'Windows Server PKI and Hybrid Cloud architectures seamlessly connect on-premises AD CS with Azure PKI services'
      },
      {
        _key: 'point_ms_pki_parent_en_5',
        _type: 'object',
        text: 'Microsoft-native automation and PowerShell integration support DevOps-optimized certificate lifecycle management processes'
      }
    ],
    serviceDescription: 'Our Microsoft PKI Service encompasses the complete transformation from fragmented certificate landscapes to strategic Microsoft-integrated PKI governance systems. We develop customized Microsoft PKI strategies that perfectly match your Microsoft infrastructures, Azure strategies, and enterprise requirements.',
    servicePoints: [
      {
        _key: 'servicePoint_ms_pki_parent_en_1',
        _type: 'object',
        text: 'Active Directory Certificate Services Design and Enterprise Integration'
      },
      {
        _key: 'servicePoint_ms_pki_parent_en_2',
        _type: 'object',
        text: 'Azure Key Vault PKI and Microsoft Cloud Certificate Services'
      },
      {
        _key: 'servicePoint_ms_pki_parent_en_3',
        _type: 'object',
        text: 'Microsoft Ecosystem Integration and Office 365 PKI Optimization'
      },
      {
        _key: 'servicePoint_ms_pki_parent_en_4',
        _type: 'object',
        text: 'Windows Server PKI and Hybrid Cloud Architectures'
      },
      {
        _key: 'servicePoint_ms_pki_parent_en_5',
        _type: 'object',
        text: 'Microsoft-native Automation and PowerShell-based PKI Operations'
      }
    ],
    whyUs: {
      title: 'Why Microsoft PKI with ADVISORI',
      points: [
        {
          _key: 'whyUs_ms_pki_parent_en_1',
          _type: 'object',
          text: 'Comprehensive Microsoft PKI expertise from AD CS to Azure Key Vault'
        },
        {
          _key: 'whyUs_ms_pki_parent_en_2',
          _type: 'object',
          text: 'Microsoft-certified consulting for optimal enterprise PKI strategies'
        },
        {
          _key: 'whyUs_ms_pki_parent_en_3',
          _type: 'object',
          text: 'Proven Microsoft integration for highly available PKI infrastructures'
        },
        {
          _key: 'whyUs_ms_pki_parent_en_4',
          _type: 'object',
          text: 'Continuous Microsoft PKI evolution and Azure roadmap development'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach to Microsoft PKI Services',
    description: 'We pursue a Microsoft-centric and enterprise-oriented approach to PKI Services that optimally leverages Microsoft technologies while enabling strategic business transformation.',
    points: [
      {
        _key: 'approach_ms_pki_parent_en_1',
        _type: 'object',
        text: 'Comprehensive Microsoft PKI assessment and Active Directory integration analysis'
      },
      {
        _key: 'approach_ms_pki_parent_en_2',
        _type: 'object',
        text: 'Strategic Microsoft PKI architecture development with Azure Cloud integration'
      },
      {
        _key: 'approach_ms_pki_parent_en_3',
        _type: 'object',
        text: 'Phased Microsoft PKI implementation with continuous validation and optimization'
      },
      {
        _key: 'approach_ms_pki_parent_en_4',
        _type: 'object',
        text: 'Microsoft Ecosystem integration into existing enterprise landscapes'
      },
      {
        _key: 'approach_ms_pki_parent_en_5',
        _type: 'object',
        text: 'Sustainable Microsoft PKI evolution through monitoring, training, and Azure roadmap development'
      }
    ]
  },
  services: [
    {
      _key: 'service_ms_pki_parent_en_1',
      _type: 'object',
      title: 'Active Directory Certificate Services Enterprise Integration',
      description: 'Comprehensive AD CS implementation and enterprise integration for scalable Microsoft PKI infrastructures.',
      features: [
        {
          _key: 'feature_ms_pki_parent_en_1',
          _type: 'object',
          text: 'Enterprise Root CA and Subordinate CA hierarchy design'
        },
        {
          _key: 'feature_ms_pki_parent_en_2',
          _type: 'object',
          text: 'Active Directory-integrated certificate templates and auto-enrollment'
        },
        {
          _key: 'feature_ms_pki_parent_en_3',
          _type: 'object',
          text: 'Certificate Revocation List optimization and OCSP implementation'
        },
        {
          _key: 'feature_ms_pki_parent_en_4',
          _type: 'object',
          text: 'Multi-Forest AD CS integration and cross-domain trust management'
        }
      ]
    },
    {
      _key: 'service_ms_pki_parent_en_2',
      _type: 'object',
      title: 'Azure Key Vault PKI and Microsoft Cloud Services',
      description: 'Strategic Azure Key Vault integration and Microsoft Cloud PKI services for modern enterprise requirements.',
      features: [
        {
          _key: 'feature_ms_pki_parent_en_5',
          _type: 'object',
          text: 'Azure Key Vault certificate management and HSM integration'
        },
        {
          _key: 'feature_ms_pki_parent_en_6',
          _type: 'object',
          text: 'Azure Active Directory certificate-based authentication'
        },
        {
          _key: 'feature_ms_pki_parent_en_7',
          _type: 'object',
          text: 'Microsoft Cloud PKI Services and Azure Certificate Authority'
        },
        {
          _key: 'feature_ms_pki_parent_en_8',
          _type: 'object',
          text: 'Azure DevOps PKI integration and CI/CD certificate automation'
        }
      ]
    },
    {
      _key: 'service_ms_pki_parent_en_3',
      _type: 'object',
      title: 'Microsoft Ecosystem Integration and Office 365 PKI',
      description: 'Seamless PKI integration into Microsoft Office 365, Teams, SharePoint, and other Microsoft services.',
      features: [
        {
          _key: 'feature_ms_pki_parent_en_9',
          _type: 'object',
          text: 'Office 365 S/MIME and document signing integration'
        },
        {
          _key: 'feature_ms_pki_parent_en_10',
          _type: 'object',
          text: 'Microsoft Teams certificate-based authentication and encryption'
        },
        {
          _key: 'feature_ms_pki_parent_en_11',
          _type: 'object',
          text: 'SharePoint PKI integration and document protection'
        },
        {
          _key: 'feature_ms_pki_parent_en_12',
          _type: 'object',
          text: 'Microsoft Intune certificate deployment and Mobile Device Management'
        }
      ]
    },
    {
      _key: 'service_ms_pki_parent_en_4',
      _type: 'object',
      title: 'Windows Server PKI and Hybrid Cloud Architectures',
      description: 'Comprehensive Windows Server PKI implementation and hybrid cloud integration for enterprise environments.',
      features: [
        {
          _key: 'feature_ms_pki_parent_en_13',
          _type: 'object',
          text: 'Windows Server Certificate Services optimization and high availability'
        },
        {
          _key: 'feature_ms_pki_parent_en_14',
          _type: 'object',
          text: 'Hybrid Cloud PKI architectures with on-premises and Azure integration'
        },
        {
          _key: 'feature_ms_pki_parent_en_15',
          _type: 'object',
          text: 'Windows Certificate Store management and Group Policy integration'
        },
        {
          _key: 'feature_ms_pki_parent_en_16',
          _type: 'object',
          text: 'Microsoft System Center PKI integration and monitoring'
        }
      ]
    },
    {
      _key: 'service_ms_pki_parent_en_5',
      _type: 'object',
      title: 'Microsoft-native Automation and PowerShell PKI Operations',
      description: 'Advanced PowerShell-based PKI automation and Microsoft-native DevOps integration.',
      features: [
        {
          _key: 'feature_ms_pki_parent_en_17',
          _type: 'object',
          text: 'PowerShell PKI modules and certificate lifecycle automation'
        },
        {
          _key: 'feature_ms_pki_parent_en_18',
          _type: 'object',
          text: 'Microsoft Graph API PKI integration and automation'
        },
        {
          _key: 'feature_ms_pki_parent_en_19',
          _type: 'object',
          text: 'Azure Resource Manager PKI templates and Infrastructure as Code'
        },
        {
          _key: 'feature_ms_pki_parent_en_20',
          _type: 'object',
          text: 'Microsoft System Center Orchestrator PKI workflows'
        }
      ]
    },
    {
      _key: 'service_ms_pki_parent_en_6',
      _type: 'object',
      title: 'Microsoft PKI Security and Compliance Management',
      description: 'Comprehensive Microsoft PKI security and compliance management for regulatory requirements.',
      features: [
        {
          _key: 'feature_ms_pki_parent_en_21',
          _type: 'object',
          text: 'Microsoft PKI security hardening and best practices implementation'
        },
        {
          _key: 'feature_ms_pki_parent_en_22',
          _type: 'object',
          text: 'Azure Security Center PKI monitoring and threat detection'
        },
        {
          _key: 'feature_ms_pki_parent_en_23',
          _type: 'object',
          text: 'Microsoft Compliance Manager PKI assessment and reporting'
        },
        {
          _key: 'feature_ms_pki_parent_en_24',
          _type: 'object',
          text: 'Microsoft Defender PKI integration and Advanced Threat Protection'
        }
      ]
    }
  ],
  faq: allFaqs,
  testimonial: {
    _type: 'object',
    quote: 'Microsoft PKI Services are the strategic foundation for modern Microsoft-centric enterprise transformation. We transform complex Active Directory Certificate Services into strategically orchestrated PKI architectures that not only ensure operational Microsoft excellence but also serve as strategic enablers for Azure migration, Office 365 integration, and Microsoft Cloud innovation.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI FTC GmbH'
  }
}

async function importMicrosoftPkiParentEn() {
  console.log('Starting import of Microsoft PKI Parent Page (English)...')
  console.log(`Total FAQs to import: ${allFaqs.length}`)
  
  try {
    const result = await client.createOrReplace(microsoftPkiParentEnglish)
    console.log('Successfully imported Microsoft PKI Parent Page (English)')
    console.log(`Document ID: ${result._id}`)
    console.log(`FAQs imported: ${allFaqs.length}`)
    return result
  } catch (error) {
    console.error('Error importing document:', error)
    throw error
  }
}

// Run the import
importMicrosoftPkiParentEn()
  .then(() => {
    console.log('Import completed successfully!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Import failed:', error)
    process.exit(1)
  })

export { importMicrosoftPkiParentEn }
