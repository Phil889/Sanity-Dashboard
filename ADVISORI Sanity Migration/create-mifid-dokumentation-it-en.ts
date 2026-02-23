import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const mifidDokumentationItEn = {
  _id: 'mifid-dokumentation-it-anbindung-en',
  _type: 'servicePage',
  title: 'MiFID Documentation and IT Integration',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'mifid-dokumentation-it-anbindung'
  },
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/mifid/mifid-implementation/mifid-documentation-it-integration-en'
  },
  parent: {
    _type: 'reference',
    _ref: 'mifid-implementation'
  },
  references: {
    _type: 'object',
    topLevelParent: {
      _type: 'reference',
      _ref: 'regulatory-compliance-management'
    }
  },
  seo: {
    _type: 'seo',
    title: 'MiFID Documentation and IT Integration | ADVISORI',
    description: 'Optimize your MiFID documentation and IT integration with ADVISORI. Our tailored solutions seamlessly integrate regulatory requirements into your IT systems and ensure complete compliance with maximum process efficiency.',
    keywords: 'MiFID documentation, MiFID IT integration, regulatory documentation, MiFID II compliance, IT integration, financial regulation, documentation processes, regulatory IT solutions'
  },
  heroSection: {
    _type: 'object',
    heading: 'MiFID Documentation and IT Integration',
    tagline: 'Seamless Integration of MiFID Requirements into Your IT Systems and Documentation Processes',
    description: 'Implement efficient and compliant MiFID documentation with optimal IT integration. Our solution supports you in systematically integrating regulatory documentation requirements into your IT landscape while increasing your process efficiency and minimizing compliance risks.',
    heroImage: {
      _type: 'image',
      alt: 'MiFID Documentation and IT Integration'
    },
    benefits: [
      {
        _key: `benefit_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Complete and audit-proof documentation of all MiFID-relevant processes'
      },
      {
        _key: `benefit_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Seamless integration into existing IT systems and data architectures'
      },
      {
        _key: `benefit_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Automation of documentation processes for higher efficiency'
      },
      {
        _key: `benefit_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Ensuring regulatory compliance through systematic process integration'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'MiFID Documentation and IT Integration',
    description: 'The regulatory requirements for documentation under MiFID II present financial institutions with significant challenges that require systematic IT integration. Our comprehensive solution combines compliance requirements with efficient IT systems and optimized processes to ensure complete, audit-proof documentation without compromising operational efficiency.',
    serviceDescription: 'Our MiFID documentation and IT integration service provides a holistic solution for the systematic integration of regulatory documentation requirements into your IT landscape. We support you from analysis through conception to implementation and continuous optimization.',
    alert: {
      title: 'Expert Tip',
      content: 'Successful MiFID documentation requires more than just data capture – it must be audit-proof, consistent, and procedurally anchored. The key lies in the seamless integration of documentation requirements into daily business processes through intelligent IT solutions that automate compliance rather than establishing it as an additional burden.'
    },
    additionalInfo: 'Our experience shows that well-implemented MiFID documentation and IT integration not only minimizes compliance risks but can also lead to significant efficiency gains. Clients report up to 40% reduced documentation times while simultaneously improving data quality and availability. Additionally, systematic IT integration reduces error rates by an average of 60% and significantly improves auditability.',
    points: [
      {
        _key: `point_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Analysis and optimization of existing documentation processes and IT systems'
      },
      {
        _key: `point_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Development of an integrated documentation strategy according to MiFID II'
      },
      {
        _key: `point_en_${Date.now()}_3`,
        _type: 'object',
        text: 'IT system integration and interface implementation'
      },
      {
        _key: `point_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Automation and digitalization of documentation workflows'
      },
      {
        _key: `point_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Implementation of control and quality assurance mechanisms'
      }
    ],
    servicePoints: [
      {
        _key: `sp_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Comprehensive analysis of existing documentation processes and IT system landscape'
      },
      {
        _key: `sp_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Development of a customized documentation strategy and IT architecture'
      },
      {
        _key: `sp_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Implementation or adaptation of IT systems and interfaces'
      },
      {
        _key: `sp_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Automation and digitalization of documentation processes'
      },
      {
        _key: `sp_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Establishment of quality assurance and control mechanisms'
      }
    ],
    whyUs: {
      title: 'Our Strengths',
      points: [
        {
          _key: `why_en_${Date.now()}_1`,
          _type: 'object',
          text: 'Combination of deep regulatory expertise and IT implementation experience'
        },
        {
          _key: `why_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Proven methodology for seamless integration into existing IT landscapes'
        },
        {
          _key: `why_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Comprehensive knowledge of standard banking systems and their customization options'
        },
        {
          _key: `why_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Holistic approach that equally considers processes, technology, and employees'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We follow a structured and proven approach for implementing efficient MiFID documentation and IT integration that ensures both regulatory compliance and technological integration.',
    points: [
      {
        _key: `approach_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Analysis of existing documentation processes, IT systems, and regulatory requirements'
      },
      {
        _key: `approach_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Development of a holistic documentation strategy and IT integration architecture'
      },
      {
        _key: `approach_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Conception and implementation of system adaptations and interfaces'
      },
      {
        _key: `approach_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Process automation and digitalization of documentation workflows'
      },
      {
        _key: `approach_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Training, testing, and continuous optimization of implemented solutions'
      }
    ]
  },
  services: [
    {
      _key: `service_en_${Date.now()}_1`,
      _type: 'object',
      title: 'Documentation Strategy & System Integration',
      description: 'We support you in developing a comprehensive documentation strategy according to MiFID II and its seamless integration into your existing IT landscape to ensure both compliance and operational efficiency.',
      features: [
        {
          _key: `feat_en_${Date.now()}_1`,
          _type: 'object',
          text: 'Analysis and optimization of documentation-relevant data models'
        },
        {
          _key: `feat_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Conception of an integrated system architecture for MiFID documentation'
        },
        {
          _key: `feat_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Implementation of interfaces to existing systems'
        },
        {
          _key: `feat_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Development of a consistent, audit-proof documentation concept'
        }
      ]
    },
    {
      _key: `service_en_${Date.now()}_2`,
      _type: 'object',
      title: 'Digitalization & Process Automation',
      description: 'We support you in digitalizing and automating your MiFID documentation processes to reduce manual effort, eliminate error sources, and sustainably secure compliance.',
      features: [
        {
          _key: `feat_en_${Date.now()}_5`,
          _type: 'object',
          text: 'Implementation of digital documentation and archiving solutions'
        },
        {
          _key: `feat_en_${Date.now()}_6`,
          _type: 'object',
          text: 'Automation of documentation workflows and validation processes'
        },
        {
          _key: `feat_en_${Date.now()}_7`,
          _type: 'object',
          text: 'Integration of data quality controls and compliance checks'
        },
        {
          _key: `feat_en_${Date.now()}_8`,
          _type: 'object',
          text: 'Development of management dashboards and reporting solutions'
        }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'The successful integration of MiFID documentation requirements into existing IT systems requires more than just technical know-how. It is about building a bridge between regulation and technology that combines compliance security with operational efficiency. Our integrated approach creates exactly this balance and leads to sustainably viable solutions that both meet regulatory requirements and support operational business.',
    name: 'Dr. Thomas Weber',
    position: 'Partner - Regulatory Technology',
    company: 'ADVISORI FTC GmbH'
  },
  faq: []
}

export async function createMifidDokumentationItEn() {
  console.log('Creating MiFID Documentation IT Integration EN page...')
  
  try {
    const result = await client.createOrReplace(mifidDokumentationItEn)
    console.log(`✅ Created MiFID Documentation IT Integration EN page with ID: ${result._id}`)
    return result
  } catch (error) {
    console.error('Error creating page:', error)
    throw error
  }
}

if (require.main === module) {
  createMifidDokumentationItEn()
    .then(() => {
      console.log('Done')
      process.exit(0)
    })
    .catch((error) => {
      console.error('Failed:', error)
      process.exit(1)
    })
}
