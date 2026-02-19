import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const mifidImplementationEn = {
  _id: 'mifid-implementation-en',
  _type: 'servicePage',
  title: 'MiFID Implementation',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'mifid-implementation'
  },
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/mifid/mifid-implementation-en'
  },
  parent: {
    _type: 'reference',
    _ref: 'mifid'
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
    title: 'MiFID Implementation | ADVISORI',
    description: 'Comprehensive support for the operational implementation and technical integration of MiFID requirements. We guide you from conception to complete implementation of all relevant processes and systems.',
    keywords: 'MiFID Implementation, MiFID II Implementation, Financial Markets Directive, regulatory implementation, investor protection, best execution, transaction reporting, product governance'
  },
  heroSection: {
    _type: 'object',
    heading: 'MiFID Implementation',
    tagline: 'Efficient and sustainable implementation of complex MiFID requirements',
    description: 'The operational implementation of MiFID requirements demands systematic integration into processes, systems, and governance structures. We support you in the efficient and sustainable integration of these complex regulatory requirements into your business operations.',
    heroImage: {
      _type: 'image',
      alt: 'MiFID Implementation'
    },
    benefits: [
      {
        _key: `benefit_${Date.now()}_1`,
        _type: 'object',
        text: 'Systematic implementation of all relevant MiFID requirements'
      },
      {
        _key: `benefit_${Date.now()}_2`,
        _type: 'object',
        text: 'Integration into existing processes and systems with minimal disruption'
      },
      {
        _key: `benefit_${Date.now()}_3`,
        _type: 'object',
        text: 'Efficient project management and resource allocation'
      },
      {
        _key: `benefit_${Date.now()}_4`,
        _type: 'object',
        text: 'Sustainable compliance assurance through robust governance structures'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'MiFID Implementation',
    description: 'The practical implementation of MiFID requirements presents financial institutions with complex challenges. Our experts support you in the systematic implementation of all regulatory requirements – from adapting business processes to implementing technical solutions to establishing effective governance structures. Our focus is on efficient, sustainable integration that ensures compliance while promoting operational excellence.',
    additionalInfo: 'MiFID implementation is a complex undertaking that affects numerous business areas, processes, and systems. Successful implementation requires not only regulatory know-how but also effective project management, change management, and technical expertise. Our holistic approach integrates all these aspects and ensures sustainable, efficient implementation.',
    alert: {
      _type: 'object',
      title: 'Expert Tip',
      content: 'Successful MiFID implementation requires not only technical know-how but also a deep understanding of business processes and organizational culture. The key to success lies in balancing regulatory compliance with operational efficiency – implement solutions that not only meet requirements but also optimize your business processes.'
    },
    points: [
      {
        _key: `point_${Date.now()}_1`,
        _type: 'object',
        text: 'Comprehensive implementation of investor protection and transparency requirements in advisory and distribution processes'
      },
      {
        _key: `point_${Date.now()}_2`,
        _type: 'object',
        text: 'Technical integration of best execution principles and transaction monitoring'
      },
      {
        _key: `point_${Date.now()}_3`,
        _type: 'object',
        text: 'Implementation of robust product governance and target market frameworks'
      },
      {
        _key: `point_${Date.now()}_4`,
        _type: 'object',
        text: 'Building efficient reporting and documentation systems for regulatory reporting'
      },
      {
        _key: `point_${Date.now()}_5`,
        _type: 'object',
        text: 'Establishing sustainable governance and control structures for long-term compliance assurance'
      }
    ],
    serviceDescription: 'Our service offering includes complete support for implementing all MiFID requirements – from initial planning through operational implementation to validation and continuous optimization.',
    servicePoints: [
      {
        _key: `servicePoint_${Date.now()}_1`,
        _type: 'object',
        text: 'Detailed implementation planning and project management'
      },
      {
        _key: `servicePoint_${Date.now()}_2`,
        _type: 'object',
        text: 'Process design and integration for investor protection and transparency'
      },
      {
        _key: `servicePoint_${Date.now()}_3`,
        _type: 'object',
        text: 'Technical implementation of best execution and reporting solutions'
      },
      {
        _key: `servicePoint_${Date.now()}_4`,
        _type: 'object',
        text: 'Documentation and validation of implemented solutions'
      },
      {
        _key: `servicePoint_${Date.now()}_5`,
        _type: 'object',
        text: 'Change management and training for sustainable compliance'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our Strengths',
      points: [
        {
          _key: `whyUs_${Date.now()}_1`,
          _type: 'object',
          text: 'Comprehensive expertise in all aspects of MiFID regulation and its practical implementation'
        },
        {
          _key: `whyUs_${Date.now()}_2`,
          _type: 'object',
          text: 'Proven implementation methodology with clear milestones and deliverables'
        },
        {
          _key: `whyUs_${Date.now()}_3`,
          _type: 'object',
          text: 'Deep experience in integrating regulatory requirements into existing business processes'
        },
        {
          _key: `whyUs_${Date.now()}_4`,
          _type: 'object',
          text: 'Innovative technology solutions for automating and optimizing complex compliance processes'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We pursue a structured, phase-based approach to implementing MiFID requirements that ensures efficient implementation and sustainable compliance.',
    points: [
      {
        _key: `approach_${Date.now()}_1`,
        _type: 'object',
        text: 'Detailed implementation planning based on gap analysis and roadmap'
      },
      {
        _key: `approach_${Date.now()}_2`,
        _type: 'object',
        text: 'Process design and adaptation for all relevant business areas'
      },
      {
        _key: `approach_${Date.now()}_3`,
        _type: 'object',
        text: 'Technical implementation and integration into existing system landscape'
      },
      {
        _key: `approach_${Date.now()}_4`,
        _type: 'object',
        text: 'Comprehensive validation and documentation of implemented solutions'
      },
      {
        _key: `approach_${Date.now()}_5`,
        _type: 'object',
        text: 'Training, change management, and transition to regular operations'
      }
    ]
  },
  services: [
    {
      _key: `service_${Date.now()}_1`,
      _type: 'object',
      title: 'Implementation of Investor Protection and Transparency Requirements',
      description: 'We support you in the systematic implementation of all investor protection and transparency requirements into your advisory and distribution processes.',
      features: [
        {
          _key: `feature_${Date.now()}_1`,
          _type: 'object',
          text: 'Operationalization of suitability and appropriateness assessments'
        },
        {
          _key: `feature_${Date.now()}_2`,
          _type: 'object',
          text: 'Implementation of robust cost transparency and documentation'
        },
        {
          _key: `feature_${Date.now()}_3`,
          _type: 'object',
          text: 'Integration of product governance and target market definitions'
        },
        {
          _key: `feature_${Date.now()}_4`,
          _type: 'object',
          text: 'Building effective documentation and evidence processes'
        }
      ]
    },
    {
      _key: `service_${Date.now()}_2`,
      _type: 'object',
      title: 'Technical Integration of Best Execution and Transaction Reporting',
      description: 'We implement technical solutions for best execution, transaction monitoring, and regulatory reporting into your existing system landscape.',
      features: [
        {
          _key: `feature_${Date.now()}_5`,
          _type: 'object',
          text: 'Development and integration of best execution monitoring systems'
        },
        {
          _key: `feature_${Date.now()}_6`,
          _type: 'object',
          text: 'Implementation of effective transaction monitoring and reporting'
        },
        {
          _key: `feature_${Date.now()}_7`,
          _type: 'object',
          text: 'Building automated reporting systems for regulatory reports'
        },
        {
          _key: `feature_${Date.now()}_8`,
          _type: 'object',
          text: 'Integration into existing trading systems and data architectures'
        }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'Successful implementation of MiFID requirements demands a perfect balance between regulatory compliance and operational efficiency. Our experience shows that companies that use these requirements as an opportunity for process optimization not only ensure compliance but also achieve significant competitive advantages.',
    name: 'Dr. Marcus Weber',
    position: 'Senior Manager',
    company: 'ADVISORI FTC GmbH'
  },
  faq: []
}

export async function createMifidImplementationEn() {
  console.log('Creating MiFID Implementation EN page...')
  
  try {
    const result = await client.createOrReplace(mifidImplementationEn)
    console.log('Created MiFID Implementation EN page:', result._id)
    return result
  } catch (error) {
    console.error('Error creating MiFID Implementation EN page:', error)
    throw error
  }
}

export { mifidImplementationEn }
