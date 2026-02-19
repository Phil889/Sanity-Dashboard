// Import script for EBA Employee Training & Awareness EN
// Run with: npx ts-node import-eba-employee-training-awareness-en.ts

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import * as path from 'path'

// Import FAQ batches
import { faqsBatch1 } from './eba-employee-training-awareness-en-faqs-batch1'
import { faqsBatch2 } from './eba-employee-training-awareness-en-faqs-batch2'
import { faqsBatch3 } from './eba-employee-training-awareness-en-faqs-batch3'
import { faqsBatch4 } from './eba-employee-training-awareness-en-faqs-batch4'
import { faqsBatch5 } from './eba-employee-training-awareness-en-faqs-batch5'

dotenv.config({ path: path.resolve(__dirname, '.env') })

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'wwmm9rbb',
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
})

// Combine all FAQs
const allFaqs = [
  ...faqsBatch1,
  ...faqsBatch2,
  ...faqsBatch3,
  ...faqsBatch4,
  ...faqsBatch5
]

// EBA Employee Training & Awareness EN - Main Document
const ebaEmployeeTrainingEnDocument = {
  _id: 'eba-employee-training-awareness-en',
  _type: 'servicePage',
  title: 'EBA Employee Training & Awareness',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'eba-mitarbeiterschulungen-sensibilisierung'
  },
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/eba/eba-ongoing-compliance/eba-employee-training-awareness-en'
  },
  parent: {
    _ref: 'eba-ongoing-compliance',
    _type: 'reference'
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
    title: 'EBA Employee Training & Awareness | ADVISORI',
    description: 'Customized training and awareness programs for EBA compliance. Strengthen your employees\' awareness of regulatory requirements and foster a sustainable compliance culture.',
    keywords: 'EBA Training, Employee Awareness, Compliance Training, Regulatory Awareness, EBA Regulations, Compliance Culture, Banking Regulation, Financial Supervision'
  },
  heroSection: {
    _type: 'object',
    heroImage: {
      _type: 'image',
      alt: 'EBA Employee Training & Awareness'
    },
    tagline: 'Sustainable Compliance Culture through Targeted Employee Training',
    heading: 'EBA Employee Training & Awareness',
    description: 'Develop a proactive compliance culture through customized training and awareness programs on EBA regulations. Our programs strengthen your employees\' awareness of regulatory requirements and empower them to recognize compliance risks early and act appropriately.',
    benefits: [
      {
        _type: 'object',
        _key: `benefit_eba_training_en_${Date.now()}_1`,
        text: 'Increased compliance awareness at all organizational levels'
      },
      {
        _type: 'object',
        _key: `benefit_eba_training_en_${Date.now()}_2`,
        text: 'Reduction of compliance violations and associated risks'
      },
      {
        _type: 'object',
        _key: `benefit_eba_training_en_${Date.now()}_3`,
        text: 'Promotion of a proactive compliance culture throughout the company'
      },
      {
        _type: 'object',
        _key: `benefit_eba_training_en_${Date.now()}_4`,
        text: 'Efficient integration of regulatory requirements into daily work processes'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'EBA Employee Training & Awareness',
    description: 'The increasing complexity of EBA regulations requires a profound understanding at all levels of your organization. Our specialized training and awareness programs not only convey expertise on EBA regulations but also foster a sustainable compliance culture that understands regulatory requirements as an integral part of corporate strategy.',
    points: [
      {
        _type: 'object',
        _key: `point_eba_training_en_${Date.now()}_1`,
        text: 'Target group-specific training concepts for different organizational levels'
      },
      {
        _type: 'object',
        _key: `point_eba_training_en_${Date.now()}_2`,
        text: 'Practical communication of complex regulatory requirements'
      },
      {
        _type: 'object',
        _key: `point_eba_training_en_${Date.now()}_3`,
        text: 'Integration of compliance awareness into daily decision-making processes'
      },
      {
        _type: 'object',
        _key: `point_eba_training_en_${Date.now()}_4`,
        text: 'Development of sustainable awareness measures for long-term effectiveness'
      },
      {
        _type: 'object',
        _key: `point_eba_training_en_${Date.now()}_5`,
        text: 'Measurement and continuous improvement of compliance awareness'
      }
    ],
    alert: {
      title: 'Expert Tip',
      content: 'Effective compliance training goes beyond mere knowledge transfer. Integrate interactive elements, practical case studies, and continuous refresher measures to effect sustainable behavioral change and establish compliance as part of corporate culture.'
    },
    whyUs: {
      title: 'Our Strengths',
      points: [
        {
          _type: 'object',
          _key: `whyUs_eba_training_en_${Date.now()}_1`,
          text: 'Combined expertise in regulatory requirements and modern adult education'
        },
        {
          _type: 'object',
          _key: `whyUs_eba_training_en_${Date.now()}_2`,
          text: 'Proven methods for sustainable anchoring of compliance knowledge'
        },
        {
          _type: 'object',
          _key: `whyUs_eba_training_en_${Date.now()}_3`,
          text: 'Customized solutions tailored to the specific needs and risk areas of your institution'
        },
        {
          _type: 'object',
          _key: `whyUs_eba_training_en_${Date.now()}_4`,
          text: 'Innovative digital learning formats that enable flexible and efficient learning'
        }
      ]
    },
    additionalInfo: 'Sustainable compliance awareness is not only an important protective factor against regulatory risks but can also contribute to improved business performance. By integrating compliance considerations into daily decision-making processes, risks are identified early and proactively addressed, thereby avoiding costly compliance violations.',
    serviceDescription: 'Our training and awareness programs on EBA regulations are designed to convey a profound understanding of regulatory requirements and establish a proactive compliance culture in your institution.',
    servicePoints: [
      {
        _type: 'object',
        _key: `servicePoint_eba_training_en_${Date.now()}_1`,
        text: 'Needs analysis and development of customized training programs'
      },
      {
        _type: 'object',
        _key: `servicePoint_eba_training_en_${Date.now()}_2`,
        text: 'Target group-specific training for different organizational levels'
      },
      {
        _type: 'object',
        _key: `servicePoint_eba_training_en_${Date.now()}_3`,
        text: 'Development of digital learning formats and platforms'
      },
      {
        _type: 'object',
        _key: `servicePoint_eba_training_en_${Date.now()}_4`,
        text: 'Design and implementation of continuous awareness measures'
      },
      {
        _type: 'object',
        _key: `servicePoint_eba_training_en_${Date.now()}_5`,
        text: 'Success measurement and continuous optimization of training measures'
      }
    ]
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'Together with you, we develop a customized training and awareness program tailored to the specific EBA compliance requirements of your institution and fostering a sustainable compliance culture.',
    points: [
      {
        _type: 'object',
        _key: `approach_eba_training_en_${Date.now()}_1`,
        text: 'Analysis of specific compliance requirements and identification of knowledge gaps'
      },
      {
        _type: 'object',
        _key: `approach_eba_training_en_${Date.now()}_2`,
        text: 'Development of target group-specific training concepts and materials'
      },
      {
        _type: 'object',
        _key: `approach_eba_training_en_${Date.now()}_3`,
        text: 'Delivery of interactive and practical training measures'
      },
      {
        _type: 'object',
        _key: `approach_eba_training_en_${Date.now()}_4`,
        text: 'Implementation of continuous awareness measures to anchor what was learned'
      },
      {
        _type: 'object',
        _key: `approach_eba_training_en_${Date.now()}_5`,
        text: 'Success measurement and continuous adaptation of the training strategy'
      }
    ]
  },
  testimonial: {
    _type: 'object',
    company: 'ADVISORI FTC GmbH',
    name: 'Dr. Andreas Müller',
    position: 'Partner',
    quote: 'An effective compliance culture begins with the awareness and understanding of each individual employee. Our customized training and awareness programs empower your employees not only to understand EBA requirements but to grasp and implement them as an integral part of their daily work.'
  },
  services: [
    {
      _type: 'object',
      _key: `service_eba_training_en_${Date.now()}_1`,
      title: 'Customized EBA Compliance Training',
      description: 'We develop and implement customized training programs on EBA regulations tailored to the specific needs and risk areas of your institution.',
      features: [
        {
          _type: 'object',
          _key: `serviceFeature_eba_training_en_${Date.now()}_1`,
          text: 'Target group-specific training concepts for different organizational levels'
        },
        {
          _type: 'object',
          _key: `serviceFeature_eba_training_en_${Date.now()}_2`,
          text: 'Practical communication of complex regulatory requirements'
        },
        {
          _type: 'object',
          _key: `serviceFeature_eba_training_en_${Date.now()}_3`,
          text: 'Interactive formats with case studies and practical exercises'
        },
        {
          _type: 'object',
          _key: `serviceFeature_eba_training_en_${Date.now()}_4`,
          text: 'Continuous updating of training content with regulatory changes'
        }
      ]
    },
    {
      _type: 'object',
      _key: `service_eba_training_en_${Date.now()}_2`,
      title: 'Sustainable Compliance Awareness',
      description: 'We support you in developing and implementing sustainable awareness measures that promote continuous compliance awareness in your institution.',
      features: [
        {
          _type: 'object',
          _key: `serviceFeature_eba_training_en_${Date.now()}_5`,
          text: 'Development of long-term awareness campaigns'
        },
        {
          _type: 'object',
          _key: `serviceFeature_eba_training_en_${Date.now()}_6`,
          text: 'Integration of compliance aspects into internal communication'
        },
        {
          _type: 'object',
          _key: `serviceFeature_eba_training_en_${Date.now()}_7`,
          text: 'Implementation of digital learning formats and microlearning content'
        },
        {
          _type: 'object',
          _key: `serviceFeature_eba_training_en_${Date.now()}_8`,
          text: 'Measurement and continuous improvement of compliance awareness'
        }
      ]
    }
  ],
  faq: allFaqs
}

async function importEbaEmployeeTrainingEn() {
  console.log('='.repeat(60))
  console.log('EBA Employee Training & Awareness EN - Import Script')
  console.log('='.repeat(60))
  
  try {
    // Check if document already exists
    console.log('\n📋 Checking for existing document...')
    const existingDoc = await client.fetch(`*[_id == $id][0]`, { id: 'eba-employee-training-awareness-en' })
    
    if (existingDoc) {
      console.log('⚠️  Document already exists. Deleting and recreating...')
      await client.delete('eba-employee-training-awareness-en')
      console.log('✅ Existing document deleted')
    }
    
    // Create the document
    console.log('\n📝 Creating new document...')
    const result = await client.create(ebaEmployeeTrainingEnDocument)
    
    console.log('\n' + '='.repeat(60))
    console.log('✅ SUCCESS: EBA Employee Training & Awareness EN created')
    console.log('='.repeat(60))
    console.log(`📄 Document ID: ${result._id}`)
    console.log(`📌 Title: ${result.title}`)
    console.log(`🌐 Language: ${result.language}`)
    console.log(`🔗 Slug: ${result.slug.current}`)
    console.log(`❓ FAQs: ${result.faq.length}`)
    console.log(`🛠️  Services: ${result.services.length}`)
    console.log(`📚 i18n Base: ${result.__i18n_base._ref}`)
    console.log('='.repeat(60))
    
    // Verification
    console.log('\n🔍 Verifying document structure...')
    const verifyDoc = await client.fetch(`*[_id == $id][0]`, { id: 'eba-employee-training-awareness-en' })
    
    if (verifyDoc) {
      console.log('✅ Document verified in Sanity')
      console.log(`   - heroSection: ${verifyDoc.heroSection ? '✓' : '✗'}`)
      console.log(`   - overview: ${verifyDoc.overview ? '✓' : '✗'}`)
      console.log(`   - approach: ${verifyDoc.approach ? '✓' : '✗'}`)
      console.log(`   - services: ${verifyDoc.services?.length || 0} items`)
      console.log(`   - testimonial: ${verifyDoc.testimonial ? '✓' : '✗'}`)
      console.log(`   - faq: ${verifyDoc.faq?.length || 0} items`)
      console.log(`   - seo: ${verifyDoc.seo ? '✓' : '✗'}`)
    }
    
  } catch (error) {
    console.error('\n❌ ERROR:', error)
    throw error
  }
}

// Run the import
importEbaEmployeeTrainingEn()
