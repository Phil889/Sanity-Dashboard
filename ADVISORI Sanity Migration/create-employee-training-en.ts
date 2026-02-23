import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_TOKEN,
  apiVersion: '2024-01-01',
})

// English translation of Mitarbeiterschulungen (Employee Training)
// Source document ID: mitarbeiterschulungen
// Target document ID: employee-training-en

const employeeTrainingEnPage = {
  _id: 'employee-training-en',
  _type: 'servicePage',
  title: 'Employee Training',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'mitarbeiterschulungen'
  },
  slug: {
    _type: 'slug',
    current: 'information-security/security-awareness/employee-training-en'
  },
  parent: {
    _type: 'reference',
    _ref: 'security-awareness'
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
    title: 'Employee Training | ADVISORI',
    description: 'Effective employee training to strengthen information security in your organization. We develop and implement customized training programs for your employees.',
    keywords: 'Employee Training, Security Training, Information Security, Awareness Training, Cyber Security, Data Protection, Social Engineering'
  },
  heroSection: {
    _type: 'object',
    heading: 'Employee Training',
    tagline: 'Impart knowledge. Develop competencies. Strengthen security culture.',
    description: 'Employees are the key to sustainable information security. With customized training, we make your team active partners in protecting your organization and foster a strong security culture.',
    heroImage: {
      _type: 'image',
      alt: 'Employee Training'
    },
    benefits: [
      {
        _key: `benefit_${Date.now()}_1`,
        _type: 'object',
        text: 'Reduction of security incidents through practical training'
      },
      {
        _key: `benefit_${Date.now()}_2`,
        _type: 'object',
        text: 'Strengthening security culture and security awareness'
      },
      {
        _key: `benefit_${Date.now()}_3`,
        _type: 'object',
        text: 'Fulfillment of legal and regulatory requirements'
      },
      {
        _key: `benefit_${Date.now()}_4`,
        _type: 'object',
        text: 'Sustainable transfer of security competencies'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'Employee Training',
    description: 'Effective employee training is the foundation for a strong security culture. With customized training and practical exercises, we enable your employees to recognize security risks, respond correctly, and actively protect the organization.',
    additionalInfo: 'Studies show that organizations with regular, high-quality employee training experience up to 70% fewer security incidents. A strong security culture is a decisive competitive advantage and builds trust with customers and partners.',
    alert: {
      title: 'Expert Tip',
      content: 'Employee training is not a one-time project but a continuous process. Only through regular, practical training and a positive learning culture can sustainable behavioral changes be achieved.'
    },
    points: [
      {
        _key: `point_${Date.now()}_1`,
        _type: 'object',
        text: 'Analysis of training needs and identification of knowledge gaps'
      },
      {
        _key: `point_${Date.now()}_2`,
        _type: 'object',
        text: 'Development of customized training concepts and content'
      },
      {
        _key: `point_${Date.now()}_3`,
        _type: 'object',
        text: 'Integration of training into corporate culture and processes'
      },
      {
        _key: `point_${Date.now()}_4`,
        _type: 'object',
        text: 'Delivery of interactive in-person and online training'
      },
      {
        _key: `point_${Date.now()}_5`,
        _type: 'object',
        text: 'Continuous success monitoring, optimization, and reporting'
      }
    ],
    serviceDescription: 'Our offering includes the analysis, development, and delivery of employee training tailored to your individual requirements. We accompany you from strategy to practical implementation and success monitoring.',
    servicePoints: [
      {
        _key: `servicePoint_${Date.now()}_1`,
        _type: 'object',
        text: 'Needs analysis and development of training concepts'
      },
      {
        _key: `servicePoint_${Date.now()}_2`,
        _type: 'object',
        text: 'Creation of interactive training content and materials'
      },
      {
        _key: `servicePoint_${Date.now()}_3`,
        _type: 'object',
        text: 'Delivery of in-person and online training'
      },
      {
        _key: `servicePoint_${Date.now()}_4`,
        _type: 'object',
        text: 'Integration into corporate culture and processes'
      },
      {
        _key: `servicePoint_${Date.now()}_5`,
        _type: 'object',
        text: 'Success monitoring, optimization, and reporting'
      }
    ],
    whyUs: {
      title: 'Our Strengths',
      points: [
        {
          _key: `whyUs_${Date.now()}_1`,
          _type: 'object',
          text: 'Years of experience in developing and delivering security training'
        },
        {
          _key: `whyUs_${Date.now()}_2`,
          _type: 'object',
          text: 'Technical, pedagogical, and psychological expertise from a single source'
        },
        {
          _key: `whyUs_${Date.now()}_3`,
          _type: 'object',
          text: 'Practical, interactive training formats for all target groups'
        },
        {
          _key: `whyUs_${Date.now()}_4`,
          _type: 'object',
          text: 'Continuous adaptation to new threats and requirements'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'Our approach to employee training is holistic, practical, and individually tailored to your organization.',
    points: [
      {
        _key: `approach_${Date.now()}_1`,
        _type: 'object',
        text: 'Needs analysis and development of a training strategy'
      },
      {
        _key: `approach_${Date.now()}_2`,
        _type: 'object',
        text: 'Design of customized training formats and content'
      },
      {
        _key: `approach_${Date.now()}_3`,
        _type: 'object',
        text: 'Delivery of interactive and practical training'
      },
      {
        _key: `approach_${Date.now()}_4`,
        _type: 'object',
        text: 'Integration into corporate culture and processes'
      },
      {
        _key: `approach_${Date.now()}_5`,
        _type: 'object',
        text: 'Continuous success monitoring and optimization'
      }
    ]
  },
  services: [
    {
      _key: `service_${Date.now()}_1`,
      _type: 'object',
      title: 'Training Concept & Development',
      description: 'Analysis of training needs and development of customized training concepts and content.',
      features: [
        {
          _key: `serviceFeature_${Date.now()}_1`,
          _type: 'object',
          text: 'Needs analysis and target group definition'
        },
        {
          _key: `serviceFeature_${Date.now()}_2`,
          _type: 'object',
          text: 'Development of customized training concepts'
        },
        {
          _key: `serviceFeature_${Date.now()}_3`,
          _type: 'object',
          text: 'Creation of interactive training materials'
        },
        {
          _key: `serviceFeature_${Date.now()}_4`,
          _type: 'object',
          text: 'Integration into existing training programs'
        }
      ]
    },
    {
      _key: `service_${Date.now()}_2`,
      _type: 'object',
      title: 'Training Delivery & Evaluation',
      description: 'Delivery of interactive in-person and online training as well as continuous success monitoring.',
      features: [
        {
          _key: `serviceFeature_${Date.now()}_5`,
          _type: 'object',
          text: 'Interactive in-person training and workshops'
        },
        {
          _key: `serviceFeature_${Date.now()}_6`,
          _type: 'object',
          text: 'E-learning, webinars, and microlearning'
        },
        {
          _key: `serviceFeature_${Date.now()}_7`,
          _type: 'object',
          text: 'Practical exercises and simulations'
        },
        {
          _key: `serviceFeature_${Date.now()}_8`,
          _type: 'object',
          text: 'Evaluation, optimization, and reporting'
        }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'Employee training is the key to sustainable security awareness. Those who empower and motivate their employees make the organization more resilient, innovative, and better positioned for the future.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI DE'
  },
  faq: [] // FAQs will be added via separate batch files
}

async function createEmployeeTrainingEn() {
  console.log('Creating Employee Training EN page...')
  
  try {
    const result = await client.createOrReplace(employeeTrainingEnPage)
    console.log('Successfully created Employee Training EN page:', result._id)
    return result
  } catch (error) {
    console.error('Error creating Employee Training EN page:', error)
    throw error
  }
}

createEmployeeTrainingEn()
  .then(() => {
    console.log('Done!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Failed:', error)
    process.exit(1)
  })
