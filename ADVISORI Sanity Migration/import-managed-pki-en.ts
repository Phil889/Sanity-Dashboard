// Import script for Managed PKI - English Translation
import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
})

// Import FAQ batches
import { managedPkiEnFaqsBatch1 } from './managed-pki-en-faqs-batch1'
import { managedPkiEnFaqsBatch2 } from './managed-pki-en-faqs-batch2'
import { managedPkiEnFaqsBatch3 } from './managed-pki-en-faqs-batch3'
import { managedPkiEnFaqsBatch4 } from './managed-pki-en-faqs-batch4'
import { managedPkiEnFaqsBatch5 } from './managed-pki-en-faqs-batch5'

// Combine all FAQ batches
const allFaqs = [
  ...managedPkiEnFaqsBatch1,
  ...managedPkiEnFaqsBatch2,
  ...managedPkiEnFaqsBatch3,
  ...managedPkiEnFaqsBatch4,
  ...managedPkiEnFaqsBatch5,
]

const managedPkiEnDocument = {
  _id: 'managed-pki-en',
  _type: 'servicePage',
  title: 'Managed PKI',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'managed-pki',
  },
  slug: {
    _type: 'slug',
    current: 'informationssicherheit/data-protection-encryption/pki/managed-pki-en',
  },
  parent: {
    _ref: 'pki',
    _type: 'reference',
  },
  references: {
    _type: 'object',
    topLevelParent: {
      _ref: 'informationssicherheit',
      _type: 'reference',
    },
  },
  seo: {
    _type: 'seo',
    title: 'Managed PKI Services - PKI-as-a-Service & Outsourcing | ADVISORI',
    description: 'Professional Managed PKI Services and PKI-as-a-Service solutions. Outsourcing of PKI infrastructures, cloud-based certificate management, and 24/7 PKI operations for enterprises.',
    keywords: 'Managed PKI, PKI-as-a-Service, PKI Outsourcing, Cloud PKI, Managed Certificate Services, PKI Operations, Certificate Lifecycle Management, Managed HSM, PKI Service Provider',
  },
  heroSection: {
    _type: 'object',
    heading: 'Managed PKI',
    tagline: 'PKI Excellence Without Operational Complexity',
    description: 'Managed PKI Services enable companies to benefit from first-class PKI infrastructure without the operational complexity and investments of their own PKI environment. We assume complete responsibility for your PKI operations and ensure the highest security standards with optimal cost efficiency.',
    heroImage: {
      _type: 'image',
      alt: 'Managed PKI Services - Professional PKI Infrastructure as a Service',
    },
    benefits: [
      {
        _key: 'benefit_en_1752576169961_1',
        _type: 'object',
        text: 'Fully managed PKI infrastructure with 24/7 operations',
      },
      {
        _key: 'benefit_en_1752576169961_2',
        _type: 'object',
        text: 'PKI-as-a-Service with flexible scaling options',
      },
      {
        _key: 'benefit_en_1752576169961_3',
        _type: 'object',
        text: 'Managed HSM Services and hardware security management',
      },
      {
        _key: 'benefit_en_1752576169961_4',
        _type: 'object',
        text: 'Compliance-compliant PKI governance and audit support',
      },
    ],
  },
  overview: {
    _type: 'object',
    heading: 'Managed PKI - Professional PKI Services Without Operational Burden',
    description: 'Managed PKI Services offer companies the opportunity to benefit from highly secure and professionally managed PKI infrastructures without bearing the complexity and costs of their own PKI environment. As a strategic outsourcing solution, Managed PKI enables focus on core business processes while ensuring the highest security standards.',
    additionalInfo: 'Managed PKI Services transform PKI from a complex technical challenge into a strategic enabler for digital transformation and secure business processes.',
    serviceDescription: 'Our Managed PKI Service includes complete takeover of your PKI operations, from initial architecture through daily management to continuous optimization. We offer flexible service level agreements and customized solutions for your specific requirements.',
    alert: {
      title: 'Managed PKI as Strategic Advantage',
      content: 'Modern Managed PKI Services enable companies to benefit from enterprise-grade PKI security without having to build internal PKI expertise or make hardware investments.',
    },
    points: [
      {
        _key: 'point_en_1752576169961_1',
        _type: 'object',
        text: 'Fully managed PKI infrastructures reduce internal resource requirements and operational risks',
      },
      {
        _key: 'point_en_1752576169961_2',
        _type: 'object',
        text: 'PKI-as-a-Service models offer flexible scaling and demand-based cost structures',
      },
      {
        _key: 'point_en_1752576169961_3',
        _type: 'object',
        text: 'Professional PKI operations ensure continuous availability and security',
      },
      {
        _key: 'point_en_1752576169961_4',
        _type: 'object',
        text: 'Managed HSM Services provide highest security without hardware investments',
      },
      {
        _key: 'point_en_1752576169961_5',
        _type: 'object',
        text: 'Compliance management and audit support by PKI experts',
      },
    ],
    servicePoints: [
      {
        _key: 'servicePoint_en_1752576169961_1',
        _type: 'object',
        text: 'Fully managed Certificate Authority (CA) Services',
      },
      {
        _key: 'servicePoint_en_1752576169961_2',
        _type: 'object',
        text: 'Automated Certificate Lifecycle Management',
      },
      {
        _key: 'servicePoint_en_1752576169961_3',
        _type: 'object',
        text: 'Managed HSM Services and hardware security operations',
      },
      {
        _key: 'servicePoint_en_1752576169961_4',
        _type: 'object',
        text: '24/7 Monitoring, Support, and Incident Response',
      },
      {
        _key: 'servicePoint_en_1752576169961_5',
        _type: 'object',
        text: 'Compliance management and audit support',
      },
    ],
    whyUs: {
      title: 'Why Managed PKI with ADVISORI',
      points: [
        {
          _key: 'whyUs_en_1752576169961_1',
          _type: 'object',
          text: 'Comprehensive PKI expertise and years of experience in PKI operations',
        },
        {
          _key: 'whyUs_en_1752576169961_2',
          _type: 'object',
          text: 'Flexible service models from fully managed to hybrid PKI solutions',
        },
        {
          _key: 'whyUs_en_1752576169961_3',
          _type: 'object',
          text: 'Highest security standards with FIPS 140-2 Level 3/4 HSM integration',
        },
        {
          _key: 'whyUs_en_1752576169961_4',
          _type: 'object',
          text: 'Proactive monitoring and continuous optimization of your PKI services',
        },
      ],
    },
  },
  approach: {
    _type: 'object',
    title: 'Our Approach to Managed PKI Services',
    description: 'We pursue a customer-oriented and service-excellent approach to Managed PKI that optimally combines the highest security standards with operational efficiency and cost optimization.',
    points: [
      {
        _key: 'approach_en_1752576169961_1',
        _type: 'object',
        text: 'Comprehensive PKI assessment and service design based on your specific requirements',
      },
      {
        _key: 'approach_en_1752576169961_2',
        _type: 'object',
        text: 'Seamless migration of existing PKI infrastructures to managed services',
      },
      {
        _key: 'approach_en_1752576169961_3',
        _type: 'object',
        text: 'Continuous service optimization through proactive monitoring and analytics',
      },
      {
        _key: 'approach_en_1752576169961_4',
        _type: 'object',
        text: 'Flexible service level agreements with transparent SLAs and KPIs',
      },
      {
        _key: 'approach_en_1752576169961_5',
        _type: 'object',
        text: 'Strategic partnership with regular service reviews and roadmap planning',
      },
    ],
  },
  services: [
    {
      _key: 'service_en_1752576169961_1',
      _type: 'object',
      title: 'Fully Managed CA Services',
      description: 'Complete takeover of your Certificate Authority operations with professional management and 24/7 availability.',
      features: [
        {
          _key: 'serviceFeature_en_1752576169961_1',
          _type: 'object',
          text: 'Root CA and Intermediate CA Management with offline security',
        },
        {
          _key: 'serviceFeature_en_1752576169961_2',
          _type: 'object',
          text: 'Highly available Issuing CA Services with load balancing',
        },
        {
          _key: 'serviceFeature_en_1752576169961_3',
          _type: 'object',
          text: 'Automated Certificate Policy and CPS Management',
        },
        {
          _key: 'serviceFeature_en_1752576169961_4',
          _type: 'object',
          text: 'Disaster Recovery and Business Continuity for CA systems',
        },
      ],
    },
    {
      _key: 'service_en_1752576169961_2',
      _type: 'object',
      title: 'PKI-as-a-Service Platform',
      description: 'Cloud-based PKI services with flexible scaling and demand-based billing.',
      features: [
        {
          _key: 'serviceFeature_en_1752576169961_5',
          _type: 'object',
          text: 'Multi-Tenant PKI platform with tenant separation',
        },
        {
          _key: 'serviceFeature_en_1752576169961_6',
          _type: 'object',
          text: 'RESTful APIs for seamless integration into existing systems',
        },
        {
          _key: 'serviceFeature_en_1752576169961_7',
          _type: 'object',
          text: 'Self-Service Portal for Certificate Management',
        },
        {
          _key: 'serviceFeature_en_1752576169961_8',
          _type: 'object',
          text: 'Flexible pricing models and usage-based billing',
        },
      ],
    },
    {
      _key: 'service_en_1752576169961_3',
      _type: 'object',
      title: 'Managed Certificate Lifecycle Services',
      description: 'Complete automation and management of the entire certificate lifecycle.',
      features: [
        {
          _key: 'serviceFeature_en_1752576169961_9',
          _type: 'object',
          text: 'Automated Certificate Enrollment and Provisioning',
        },
        {
          _key: 'serviceFeature_en_1752576169961_10',
          _type: 'object',
          text: 'Proactive Certificate Renewal Management',
        },
        {
          _key: 'serviceFeature_en_1752576169961_11',
          _type: 'object',
          text: 'Certificate Discovery and Inventory Management',
        },
        {
          _key: 'serviceFeature_en_1752576169961_12',
          _type: 'object',
          text: 'Revocation Management and OCSP Services',
        },
      ],
    },
    {
      _key: 'service_en_1752576169961_4',
      _type: 'object',
      title: 'Managed HSM Services',
      description: 'Professionally managed Hardware Security Module Services for highest cryptographic security.',
      features: [
        {
          _key: 'serviceFeature_en_1752576169961_13',
          _type: 'object',
          text: 'FIPS 140-2 Level 3/4 HSM infrastructure as a service',
        },
        {
          _key: 'serviceFeature_en_1752576169961_14',
          _type: 'object',
          text: 'Highly available HSM clusters with load balancing',
        },
        {
          _key: 'serviceFeature_en_1752576169961_15',
          _type: 'object',
          text: 'Secure Key Generation and Key Ceremony Services',
        },
        {
          _key: 'serviceFeature_en_1752576169961_16',
          _type: 'object',
          text: 'HSM Performance Monitoring and Capacity Planning',
        },
      ],
    },
    {
      _key: 'service_en_1752576169961_5',
      _type: 'object',
      title: '24/7 PKI Operations & Support',
      description: 'Round-the-clock PKI operations with proactive monitoring and incident response.',
      features: [
        {
          _key: 'serviceFeature_en_1752576169961_17',
          _type: 'object',
          text: 'Security Operations Center (SOC) for PKI systems',
        },
        {
          _key: 'serviceFeature_en_1752576169961_18',
          _type: 'object',
          text: 'Proactive System Monitoring and Alerting',
        },
        {
          _key: 'serviceFeature_en_1752576169961_19',
          _type: 'object',
          text: 'Incident Response and Emergency Support',
        },
        {
          _key: 'serviceFeature_en_1752576169961_20',
          _type: 'object',
          text: 'Performance Analytics and Capacity Management',
        },
      ],
    },
    {
      _key: 'service_en_1752576169961_6',
      _type: 'object',
      title: 'PKI Compliance & Governance Services',
      description: 'Comprehensive compliance support and governance management for regulated environments.',
      features: [
        {
          _key: 'serviceFeature_en_1752576169961_21',
          _type: 'object',
          text: 'Compliance Monitoring for regulatory requirements',
        },
        {
          _key: 'serviceFeature_en_1752576169961_22',
          _type: 'object',
          text: 'Audit support and Compliance Reporting',
        },
        {
          _key: 'serviceFeature_en_1752576169961_23',
          _type: 'object',
          text: 'Policy Management and Governance Framework',
        },
        {
          _key: 'serviceFeature_en_1752576169961_24',
          _type: 'object',
          text: 'Risk Assessment and Security Controls Management',
        },
      ],
    },
  ],
  faq: allFaqs,
  testimonial: {
    _type: 'object',
    quote: 'Managed PKI Services represent the evolution of PKI infrastructures into strategic business enablers. We enable companies to benefit from first-class PKI security without bearing the operational complexity - that is the key to successful digital transformation.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI FTC GmbH',
  },
}

async function importManagedPkiEn() {
  console.log('Starting import of Managed PKI EN...')
  console.log(`Total FAQs to import: ${allFaqs.length}`)
  console.log(`Total Services to import: ${managedPkiEnDocument.services.length}`)

  try {
    const result = await client.createOrReplace(managedPkiEnDocument)
    console.log('Successfully imported Managed PKI EN:', result._id)
    console.log(`- FAQs: ${allFaqs.length}`)
    console.log(`- Services: ${managedPkiEnDocument.services.length}`)
    return result
  } catch (error) {
    console.error('Error importing Managed PKI EN:', error)
    throw error
  }
}

importManagedPkiEn()
  .then(() => {
    console.log('Import completed successfully')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Import failed:', error)
    process.exit(1)
  })
