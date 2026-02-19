import 'dotenv/config'
import { createClient } from '@sanity/client'
import { faqsBatch1 } from './microsoft-cloud-pki-en-faqs-batch1'
import { faqsBatch2 } from './microsoft-cloud-pki-en-faqs-batch2'
import { faqsBatch3 } from './microsoft-cloud-pki-en-faqs-batch3'
import { faqsBatch4 } from './microsoft-cloud-pki-en-faqs-batch4'
import { faqsBatch5 } from './microsoft-cloud-pki-en-faqs-batch5'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Combine all FAQ batches
const allFaqs = [...faqsBatch1, ...faqsBatch2, ...faqsBatch3, ...faqsBatch4, ...faqsBatch5]

const microsoftCloudPkiEn = {
  _id: 'microsoft-cloud-pki-en',
  _type: 'servicePage',
  title: 'Microsoft Cloud PKI',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'microsoft-cloud-pki'
  },
  slug: {
    _type: 'slug',
    current: 'informationssicherheit/data-protection-encryption/pki/microsoft-cloud-pki-en'
  },
  seo: {
    _type: 'seo',
    title: 'Microsoft Cloud PKI - Azure Certificate Services & Key Vault Integration | ADVISORI',
    description: 'Professional Microsoft Cloud PKI services with Azure Key Vault, Certificate Services, and Microsoft 365 integration. Secure cloud-based certificate management for enterprise environments.',
    keywords: 'Microsoft Cloud PKI, Azure Key Vault, Azure Certificate Services, Microsoft 365 PKI, Cloud Certificate Management, Azure AD Certificate Services, Microsoft PKI Integration, Cloud Security'
  },
  heroSection: {
    _type: 'object',
    heading: 'Microsoft Cloud PKI',
    tagline: 'Enterprise Security in the Microsoft Cloud',
    description: 'Microsoft Cloud PKI revolutionizes certificate management through seamless integration with Azure services and Microsoft 365 environments. We implement highly secure, scalable PKI solutions that optimally leverage native Microsoft cloud technologies while meeting the highest security standards.',
    heroImage: {
      _type: 'image',
      alt: 'Microsoft Cloud PKI - Azure-based certificate management and secure cloud PKI services'
    },
    benefits: [
      {
        _key: 'benefit_ms_cloud_pki_en_1',
        _type: 'object',
        text: 'Azure Key Vault integration for Hardware Security Module protection'
      },
      {
        _key: 'benefit_ms_cloud_pki_en_2',
        _type: 'object',
        text: 'Microsoft 365 and Office applications certificate management'
      },
      {
        _key: 'benefit_ms_cloud_pki_en_3',
        _type: 'object',
        text: 'Hybrid PKI architectures with on-premises Active Directory'
      },
      {
        _key: 'benefit_ms_cloud_pki_en_4',
        _type: 'object',
        text: 'PowerShell and Microsoft Graph API automation'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'Microsoft Cloud PKI - Native Azure Integration for Enterprise Certificate Management',
    description: 'Microsoft Cloud PKI leverages the comprehensive security and management capabilities of the Azure platform for modern, cloud-native certificate management. Through deep integration into Microsoft ecosystems, we enable seamless PKI implementations that maximize both security and operational efficiency.',
    additionalInfo: 'Microsoft Cloud PKI enables organizations to leverage the advantages of the Azure platform for secure, scalable, and cost-effective certificate management. Native integration with Microsoft services creates unique opportunities for automation and compliance.',
    alert: {
      title: 'Microsoft Cloud PKI as Strategic Enabler',
      content: 'Microsoft Cloud PKI is becoming a central building block for Zero Trust architectures, secure remote work, and compliance-compliant digitalization in Microsoft environments.'
    },
    points: [
      {
        _key: 'point_ms_cloud_pki_en_1',
        _type: 'object',
        text: 'Azure Key Vault provides Hardware Security Module protection for critical PKI keys in the cloud'
      },
      {
        _key: 'point_ms_cloud_pki_en_2',
        _type: 'object',
        text: 'Azure Certificate Services enable automated certificate issuance and management'
      },
      {
        _key: 'point_ms_cloud_pki_en_3',
        _type: 'object',
        text: 'Microsoft 365 integration supports S/MIME, document signing, and secure communication'
      },
      {
        _key: 'point_ms_cloud_pki_en_4',
        _type: 'object',
        text: 'Hybrid scenarios seamlessly connect cloud PKI with existing Active Directory infrastructures'
      },
      {
        _key: 'point_ms_cloud_pki_en_5',
        _type: 'object',
        text: 'PowerShell and Microsoft Graph APIs enable comprehensive automation and DevOps integration'
      }
    ],
    serviceDescription: 'Our Microsoft Cloud PKI service encompasses complete support from Azure-based PKI planning through technical implementation to operational management. We develop customized Microsoft Cloud PKI solutions that are optimally integrated into your Microsoft environment.',
    servicePoints: [
      {
        _key: 'servicePoint_ms_cloud_pki_en_1',
        _type: 'object',
        text: 'Azure Key Vault PKI architecture and Certificate Authority setup'
      },
      {
        _key: 'servicePoint_ms_cloud_pki_en_2',
        _type: 'object',
        text: 'Microsoft 365 and Office applications certificate integration'
      },
      {
        _key: 'servicePoint_ms_cloud_pki_en_3',
        _type: 'object',
        text: 'Hybrid PKI implementation with Active Directory Certificate Services'
      },
      {
        _key: 'servicePoint_ms_cloud_pki_en_4',
        _type: 'object',
        text: 'PowerShell and Microsoft Graph API automation'
      },
      {
        _key: 'servicePoint_ms_cloud_pki_en_5',
        _type: 'object',
        text: 'Azure Security Center integration and compliance management'
      }
    ],
    whyUs: {
      title: 'Why Microsoft Cloud PKI with ADVISORI',
      points: [
        {
          _key: 'whyUs_ms_cloud_pki_en_1',
          _type: 'object',
          text: 'Deep Microsoft expertise and Azure certifications of our consultants'
        },
        {
          _key: 'whyUs_ms_cloud_pki_en_2',
          _type: 'object',
          text: 'Proven implementation methods for complex Microsoft environments'
        },
        {
          _key: 'whyUs_ms_cloud_pki_en_3',
          _type: 'object',
          text: 'Holistic integration into existing Microsoft infrastructures'
        },
        {
          _key: 'whyUs_ms_cloud_pki_en_4',
          _type: 'object',
          text: 'Continuous optimization and support for Microsoft Cloud PKI systems'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach to Microsoft Cloud PKI Implementation',
    description: 'We pursue a systematic and Microsoft-native approach to Cloud PKI implementation that optimally combines proven Azure services with PKI best practices.',
    points: [
      {
        _key: 'approach_ms_cloud_pki_en_1',
        _type: 'object',
        text: 'Comprehensive Microsoft environment analysis and Azure architecture assessment'
      },
      {
        _key: 'approach_ms_cloud_pki_en_2',
        _type: 'object',
        text: 'Azure Key Vault and Certificate Services proof-of-concept implementation'
      },
      {
        _key: 'approach_ms_cloud_pki_en_3',
        _type: 'object',
        text: 'Phased rollout strategy with Microsoft 365 and hybrid integration'
      },
      {
        _key: 'approach_ms_cloud_pki_en_4',
        _type: 'object',
        text: 'PowerShell automation and DevOps pipeline integration'
      },
      {
        _key: 'approach_ms_cloud_pki_en_5',
        _type: 'object',
        text: 'Continuous monitoring through Azure Security Center and compliance validation'
      }
    ]
  },
  services: [
    {
      _key: 'service_ms_cloud_pki_en_1',
      _type: 'object',
      title: 'Azure Key Vault PKI Architecture',
      description: 'Implementation of highly secure PKI architectures based on Azure Key Vault with Hardware Security Module protection.',
      features: [
        {
          _key: 'serviceFeature_ms_cloud_pki_en_1',
          _type: 'object',
          text: 'Azure Key Vault Managed HSM for Root CA key protection'
        },
        {
          _key: 'serviceFeature_ms_cloud_pki_en_2',
          _type: 'object',
          text: 'Certificate Authority hierarchies in Azure Key Vault'
        },
        {
          _key: 'serviceFeature_ms_cloud_pki_en_3',
          _type: 'object',
          text: 'Azure RBAC integration for granular access control'
        },
        {
          _key: 'serviceFeature_ms_cloud_pki_en_4',
          _type: 'object',
          text: 'Multi-region deployment for high availability'
        }
      ]
    },
    {
      _key: 'service_ms_cloud_pki_en_2',
      _type: 'object',
      title: 'Microsoft 365 Certificate Integration',
      description: 'Seamless integration of PKI services into Microsoft 365 for secure communication and document management.',
      features: [
        {
          _key: 'serviceFeature_ms_cloud_pki_en_5',
          _type: 'object',
          text: 'S/MIME certificate deployment for Outlook and Exchange Online'
        },
        {
          _key: 'serviceFeature_ms_cloud_pki_en_6',
          _type: 'object',
          text: 'SharePoint and OneDrive document signing'
        },
        {
          _key: 'serviceFeature_ms_cloud_pki_en_7',
          _type: 'object',
          text: 'Teams and Skype for Business certificate authentication'
        },
        {
          _key: 'serviceFeature_ms_cloud_pki_en_8',
          _type: 'object',
          text: 'Office applications code signing and macro security'
        }
      ]
    },
    {
      _key: 'service_ms_cloud_pki_en_3',
      _type: 'object',
      title: 'Hybrid PKI with Active Directory',
      description: 'Implementation of hybrid PKI scenarios that connect cloud services with existing Active Directory infrastructures.',
      features: [
        {
          _key: 'serviceFeature_ms_cloud_pki_en_9',
          _type: 'object',
          text: 'Azure AD Connect certificate synchronization'
        },
        {
          _key: 'serviceFeature_ms_cloud_pki_en_10',
          _type: 'object',
          text: 'On-premises ADCS to Azure Key Vault migration'
        },
        {
          _key: 'serviceFeature_ms_cloud_pki_en_11',
          _type: 'object',
          text: 'Cross-forest certificate trust relationships'
        },
        {
          _key: 'serviceFeature_ms_cloud_pki_en_12',
          _type: 'object',
          text: 'Conditional Access integration with certificate authentication'
        }
      ]
    },
    {
      _key: 'service_ms_cloud_pki_en_4',
      _type: 'object',
      title: 'PowerShell and API Automation',
      description: 'Comprehensive automation of Certificate Lifecycle Management through PowerShell and Microsoft Graph APIs.',
      features: [
        {
          _key: 'serviceFeature_ms_cloud_pki_en_13',
          _type: 'object',
          text: 'PowerShell modules for Azure Key Vault certificate management'
        },
        {
          _key: 'serviceFeature_ms_cloud_pki_en_14',
          _type: 'object',
          text: 'Microsoft Graph API integration for certificate operations'
        },
        {
          _key: 'serviceFeature_ms_cloud_pki_en_15',
          _type: 'object',
          text: 'Azure DevOps pipeline integration for certificate deployment'
        },
        {
          _key: 'serviceFeature_ms_cloud_pki_en_16',
          _type: 'object',
          text: 'Automated certificate renewal and notification systems'
        }
      ]
    },
    {
      _key: 'service_ms_cloud_pki_en_5',
      _type: 'object',
      title: 'Azure Security Center Integration',
      description: 'Integration of PKI monitoring and management into Azure Security Center for comprehensive security monitoring.',
      features: [
        {
          _key: 'serviceFeature_ms_cloud_pki_en_17',
          _type: 'object',
          text: 'Certificate health monitoring in Azure Security Center'
        },
        {
          _key: 'serviceFeature_ms_cloud_pki_en_18',
          _type: 'object',
          text: 'Azure Sentinel integration for PKI security analytics'
        },
        {
          _key: 'serviceFeature_ms_cloud_pki_en_19',
          _type: 'object',
          text: 'Compliance dashboard for certificate governance'
        },
        {
          _key: 'serviceFeature_ms_cloud_pki_en_20',
          _type: 'object',
          text: 'Automated threat detection for certificate-based attacks'
        }
      ]
    },
    {
      _key: 'service_ms_cloud_pki_en_6',
      _type: 'object',
      title: 'Cloud PKI Governance & Compliance',
      description: 'Implementation of governance structures and compliance management for Microsoft Cloud PKI environments.',
      features: [
        {
          _key: 'serviceFeature_ms_cloud_pki_en_21',
          _type: 'object',
          text: 'Azure Policy integration for certificate compliance'
        },
        {
          _key: 'serviceFeature_ms_cloud_pki_en_22',
          _type: 'object',
          text: 'Microsoft Purview integration for data governance'
        },
        {
          _key: 'serviceFeature_ms_cloud_pki_en_23',
          _type: 'object',
          text: 'Audit and reporting through Azure Monitor and Log Analytics'
        },
        {
          _key: 'serviceFeature_ms_cloud_pki_en_24',
          _type: 'object',
          text: 'Cost management and optimization for cloud PKI services'
        }
      ]
    }
  ],
  faq: allFaqs,
  testimonial: {
    _type: 'object',
    quote: 'Microsoft Cloud PKI represents the future of enterprise certificate management. Through native integration with Azure services, we create not just technical solutions but strategic security architectures that enable organizations to securely leverage the full power of the Microsoft Cloud.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI FTC GmbH'
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
  }
}

async function importMicrosoftCloudPkiEn() {
  console.log('Starting import of Microsoft Cloud PKI EN page...')
  console.log(`Total FAQs: ${allFaqs.length}`)
  
  try {
    const result = await client.createOrReplace(microsoftCloudPkiEn)
    console.log('Successfully imported Microsoft Cloud PKI EN page!')
    console.log(`Document ID: ${result._id}`)
    console.log(`Title: ${result.title}`)
    console.log(`FAQs imported: ${allFaqs.length}`)
  } catch (error) {
    console.error('Error importing Microsoft Cloud PKI EN page:', error)
    throw error
  }
}

importMicrosoftCloudPkiEn()
  .then(() => {
    console.log('Import completed successfully!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Import failed:', error)
    process.exit(1)
  })
