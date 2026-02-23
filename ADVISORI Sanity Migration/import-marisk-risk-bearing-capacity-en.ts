import 'dotenv/config'
// Import script for MaRisk Risk Bearing Capacity - English Translation
// Complete page with ALL sections: heroSection, overview, approach, services, faq, testimonial, seo

import { createClient } from '@sanity/client'
import { mariskRiskBearingCapacityEnFaqsBatch1 } from './marisk-risk-bearing-capacity-en-faqs-batch1'
import { mariskRiskBearingCapacityEnFaqsBatch2 } from './marisk-risk-bearing-capacity-en-faqs-batch2'
import { mariskRiskBearingCapacityEnFaqsBatch3 } from './marisk-risk-bearing-capacity-en-faqs-batch3'
import { mariskRiskBearingCapacityEnFaqsBatch4 } from './marisk-risk-bearing-capacity-en-faqs-batch4'
import { mariskRiskBearingCapacityEnFaqsBatch5 } from './marisk-risk-bearing-capacity-en-faqs-batch5'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

// Combine all FAQ batches - 20 unique FAQs
const allFaqs = [
  ...mariskRiskBearingCapacityEnFaqsBatch1,
  ...mariskRiskBearingCapacityEnFaqsBatch2,
  ...mariskRiskBearingCapacityEnFaqsBatch3,
  ...mariskRiskBearingCapacityEnFaqsBatch4,
  ...mariskRiskBearingCapacityEnFaqsBatch5
]

const mariskRiskBearingCapacityEnPage = {
  _id: 'marisk-risk-bearing-capacity-en',
  _type: 'servicePage',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'marisk-risk-bearing-capacity'
  },
  title: 'MaRisk Risk Bearing Capacity',
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/marisk/marisk-risk-bearing-capacity-en'
  },
  parent: {
    _type: 'reference',
    _ref: 'marisk'
  },
  references: {
    _type: 'object',
    topLevelParent: {
      _type: 'reference',
      _ref: 'regulatory-compliance-management'
    }
  },
  heroSection: {
    _type: 'object',
    heading: 'MaRisk Risk Bearing Capacity',
    tagline: 'Holistic MaRisk Risk Bearing Capacity Excellence for Strategic Banking Innovation',
    description: 'Modern banks need more than isolated capital management approaches – they need integrated risk bearing capacity frameworks that connect MaRisk requirements with strategic business goals and operational excellence. Successful risk bearing capacity excellence requires holistic approaches that seamlessly unite capital management, strategic capacity steering, technology integration, and continuous optimization. We develop comprehensive MaRisk Risk Bearing Capacity systems that not only ensure regulatory compliance but also create strategic competitive advantages, enable business innovation, and establish sustainable risk excellence for banking institutions.',
    heroImage: {
      _type: 'image',
      alt: 'MaRisk Risk Bearing Capacity'
    },
    benefits: [
      {
        _key: `benefit_rbc_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Integrated Risk Bearing Capacity frameworks with holistic MaRisk compliance'
      },
      {
        _key: `benefit_rbc_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Strategic Capital Management for operational excellence and business value'
      },
      {
        _key: `benefit_rbc_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Innovative RegTech integration for intelligent risk bearing capacity steering'
      },
      {
        _key: `benefit_rbc_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Sustainable Risk Culture for continuous capacity optimization'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'MaRisk Risk Bearing Capacity as Strategic Foundation for Banking Excellence',
    description: 'An effective MaRisk Risk Bearing Capacity is the strategic backbone of successful banking institutions and connects regulatory compliance with business strategy optimization and risk management excellence. Modern risk bearing capacity systems go beyond traditional capital management approaches and create integrated frameworks that seamlessly connect risk bearing capacity, business alignment, technology, and governance. Our risk bearing capacity expertise combines proven capital management principles with innovative technologies for sustainable MaRisk excellence.',
    additionalInfo: 'Successful risk bearing capacity systems require not only strategic planning but also organizational integration and cultural anchoring. Our holistic approach combines risk bearing capacity design with change management and continuous optimization.',
    serviceDescription: 'We develop and implement comprehensive MaRisk Risk Bearing Capacity systems that meet regulatory requirements while increasing strategic flexibility, enabling business innovation, and creating sustainable competitive advantages. From capacity development to technical implementation.',
    alert: {
      _type: 'object',
      title: 'Strategic Risk Bearing Capacity Innovation',
      content: 'MaRisk Risk Bearing Capacity systems are more than compliance tools – they are strategic enablers for operational excellence and business innovation. Our integrated approaches create not only regulatory security but also enable strategic flexibility and sustainable business development.'
    },
    points: [
      {
        _key: `point_rbc_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Holistic risk bearing capacity architecture for integrated capital management excellence'
      },
      {
        _key: `point_rbc_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Strategic risk capacity systems with precise business-risk alignment'
      },
      {
        _key: `point_rbc_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Capital adequacy framework for continuous capacity assessment and optimization'
      },
      {
        _key: `point_rbc_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Technology-integrated risk platforms for real-time capacity monitoring and steering'
      },
      {
        _key: `point_rbc_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Continuous risk bearing capacity evolution through performance monitoring and best practice integration'
      }
    ],
    servicePoints: [
      {
        _key: `servicePoint_rbc_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Integrated risk bearing capacity architecture development for holistic capital management excellence'
      },
      {
        _key: `servicePoint_rbc_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Strategic risk capacity with precise business-risk alignment and assessment'
      },
      {
        _key: `servicePoint_rbc_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Capital adequacy framework for continuous capacity assessment and optimization'
      },
      {
        _key: `servicePoint_rbc_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Technology integration for intelligent risk bearing capacity monitoring and steering'
      },
      {
        _key: `servicePoint_rbc_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Continuous risk bearing capacity development and performance optimization'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our Risk Bearing Capacity Expertise',
      points: [
        {
          _key: `whyUs_rbc_en_${Date.now()}_1`,
          _type: 'object',
          text: 'Comprehensive experience in developing integrated risk bearing capacity frameworks'
        },
        {
          _key: `whyUs_rbc_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Proven expertise in MaRisk-compliant risk bearing capacity implementation and optimization'
        },
        {
          _key: `whyUs_rbc_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Innovative technology integration for future-proof risk bearing capacity solutions'
        },
        {
          _key: `whyUs_rbc_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Holistic consulting approaches for sustainable risk bearing capacity excellence and business value'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Strategic Risk Bearing Capacity Development Approach',
    description: 'We develop together with you a tailored MaRisk Risk Bearing Capacity that not only ensures regulatory compliance but also increases strategic flexibility and creates sustainable competitive advantages for banking institutions.',
    points: [
      {
        _key: `approach_rbc_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Comprehensive Risk Assessment and current-state analysis of your risk bearing capacity position'
      },
      {
        _key: `approach_rbc_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Strategic Capacity Design with focus on business integration and operational excellence'
      },
      {
        _key: `approach_rbc_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Agile implementation with continuous stakeholder engagement and feedback integration'
      },
      {
        _key: `approach_rbc_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Technology integration with modern RegTech solutions for intelligent risk bearing capacity steering'
      },
      {
        _key: `approach_rbc_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Continuous optimization and performance monitoring for long-term risk bearing capacity excellence'
      }
    ]
  },
  services: [
    {
      _key: `service_rbc_en_${Date.now()}_1`,
      _type: 'object',
      title: 'Integrated Risk Bearing Capacity Architecture Development',
      description: 'We develop holistic risk bearing capacity architectures that seamlessly integrate all aspects of strategic capacity steering while connecting MaRisk compliance with strategic flexibility.',
      features: [
        {
          _key: `feature_rbc_en_${Date.now()}_1`,
          _type: 'object',
          text: 'Holistic risk bearing capacity design principles for integrated capital management excellence'
        },
        {
          _key: `feature_rbc_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Modular capacity architecture components for flexible system adaptation and extension'
        },
        {
          _key: `feature_rbc_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Cross-functional integration of different risk categories and business areas'
        },
        {
          _key: `feature_rbc_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Scalable risk bearing capacity structures for growing business requirements'
        }
      ]
    },
    {
      _key: `service_rbc_en_${Date.now()}_2`,
      _type: 'object',
      title: 'Strategic Capital Management',
      description: 'We implement comprehensive capital management structures that create strategic capacity steering while ensuring optimal balance between risk control and business flexibility.',
      features: [
        {
          _key: `feature_rbc_en_${Date.now()}_5`,
          _type: 'object',
          text: 'Capital management framework development for precise risk bearing capacity steering and assessment'
        },
        {
          _key: `feature_rbc_en_${Date.now()}_6`,
          _type: 'object',
          text: 'Strategic capital committee structures based on business requirements and regulation'
        },
        {
          _key: `feature_rbc_en_${Date.now()}_7`,
          _type: 'object',
          text: 'Capital decision-making processes for comprehensive capacity integration and efficiency optimization'
        },
        {
          _key: `feature_rbc_en_${Date.now()}_8`,
          _type: 'object',
          text: 'Continuous capital management assessment and adaptive structure optimization'
        }
      ]
    },
    {
      _key: `service_rbc_en_${Date.now()}_3`,
      _type: 'object',
      title: 'Capital Adequacy Framework',
      description: 'We develop comprehensive capital adequacy frameworks that define strategic capital adequacy while systematically monitoring risk bearing capacity performance, efficiency, and business alignment.',
      features: [
        {
          _key: `feature_rbc_en_${Date.now()}_9`,
          _type: 'object',
          text: 'Capital adequacy methodologies for systematic risk bearing capacity assessment'
        },
        {
          _key: `feature_rbc_en_${Date.now()}_10`,
          _type: 'object',
          text: 'Key Capital Indicators (KCIs) for continuous capacity performance monitoring'
        },
        {
          _key: `feature_rbc_en_${Date.now()}_11`,
          _type: 'object',
          text: 'Capital buffer management and adjustment processes for proactive improvement'
        },
        {
          _key: `feature_rbc_en_${Date.now()}_12`,
          _type: 'object',
          text: 'Continuous capital adequacy optimization and best practice integration'
        }
      ]
    },
    {
      _key: `service_rbc_en_${Date.now()}_4`,
      _type: 'object',
      title: 'Technology-integrated Capacity Platforms',
      description: 'We implement modern RegTech solutions that automate risk bearing capacity systems while enabling real-time monitoring, intelligent analytics, and efficient capacity steering.',
      features: [
        {
          _key: `feature_rbc_en_${Date.now()}_13`,
          _type: 'object',
          text: 'Integrated capacity platforms for central risk bearing capacity management'
        },
        {
          _key: `feature_rbc_en_${Date.now()}_14`,
          _type: 'object',
          text: 'Real-time capacity monitoring and automated capacity adjustment systems'
        },
        {
          _key: `feature_rbc_en_${Date.now()}_15`,
          _type: 'object',
          text: 'Advanced analytics and machine learning for intelligent risk bearing capacity assessment'
        },
        {
          _key: `feature_rbc_en_${Date.now()}_16`,
          _type: 'object',
          text: 'Automated capacity reporting and dashboard solutions for management transparency'
        }
      ]
    },
    {
      _key: `service_rbc_en_${Date.now()}_5`,
      _type: 'object',
      title: 'Stress Testing and Scenario Analysis',
      description: 'We create comprehensive stress testing frameworks that assess risk bearing capacity under different scenarios while promoting robust capacity planning and risk excellence.',
      features: [
        {
          _key: `feature_rbc_en_${Date.now()}_17`,
          _type: 'object',
          text: 'Stress testing structures for sustainable risk bearing capacity assessment'
        },
        {
          _key: `feature_rbc_en_${Date.now()}_18`,
          _type: 'object',
          text: 'Scenario analysis and capacity assessment for risk bearing capacity excellence'
        },
        {
          _key: `feature_rbc_en_${Date.now()}_19`,
          _type: 'object',
          text: 'Reverse stress testing programs for comprehensive capacity transformation'
        },
        {
          _key: `feature_rbc_en_${Date.now()}_20`,
          _type: 'object',
          text: 'Continuous stress testing assessment and optimization'
        }
      ]
    },
    {
      _key: `service_rbc_en_${Date.now()}_6`,
      _type: 'object',
      title: 'Continuous Risk Bearing Capacity Optimization',
      description: 'We ensure long-term risk bearing capacity excellence through continuous monitoring, performance assessment, and proactive optimization of your MaRisk Risk Bearing Capacity systems.',
      features: [
        {
          _key: `feature_rbc_en_${Date.now()}_21`,
          _type: 'object',
          text: 'Risk bearing capacity performance monitoring and effectiveness assessment'
        },
        {
          _key: `feature_rbc_en_${Date.now()}_22`,
          _type: 'object',
          text: 'Continuous improvement through best practice integration and innovation'
        },
        {
          _key: `feature_rbc_en_${Date.now()}_23`,
          _type: 'object',
          text: 'Regulatory updates and risk bearing capacity adjustments for sustainable compliance'
        },
        {
          _key: `feature_rbc_en_${Date.now()}_24`,
          _type: 'object',
          text: 'Strategic risk bearing capacity evolution for future business requirements'
        }
      ]
    }
  ],
  faq: allFaqs,
  testimonial: {
    _type: 'object',
    quote: 'An effective MaRisk Risk Bearing Capacity is the strategic foundation for sustainable banking excellence and connects regulatory compliance with business strategy optimization and capital management integration. Modern risk bearing capacity systems create not only compliance security but also enable strategic flexibility and operational efficiency. Our integrated risk bearing capacity approaches transform traditional capital management practices into strategic business enablers that ensure sustainable business success and operational excellence for banking institutions.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI FTC GmbH'
  },
  seo: {
    _type: 'seo',
    title: 'MaRisk Risk Bearing Capacity | ADVISORI',
    description: 'Strategic MaRisk Risk Bearing Capacity development for Austrian and German banks. We implement holistic risk bearing capacity frameworks, develop capital-based capacity structures, and create sustainable risk excellence through innovative RegTech integration and strategic risk bearing capacity optimization.',
    keywords: 'MaRisk Risk Bearing Capacity, Risk Bearing Capacity, Banking Risk Capacity, MaRisk Compliance, Capital Adequacy, Risk Capacity Framework, Banking Risk Management, Stress Testing'
  }
}

async function importMariskRiskBearingCapacityEn() {
  console.log('Starting MaRisk Risk Bearing Capacity EN import...')
  console.log(`Total FAQs to import: ${allFaqs.length}`)
  
  try {
    // Check if document exists
    const existing = await client.getDocument('marisk-risk-bearing-capacity-en')
    
    if (existing) {
      console.log('Document exists, updating...')
      const result = await client
        .patch('marisk-risk-bearing-capacity-en')
        .set(mariskRiskBearingCapacityEnPage)
        .commit()
      console.log('Updated successfully:', result._id)
    } else {
      console.log('Creating new document...')
      const result = await client.create(mariskRiskBearingCapacityEnPage)
      console.log('Created successfully:', result._id)
    }
    
    // Verify the import
    const verification = await client.fetch(`
      *[_id == "marisk-risk-bearing-capacity-en"][0] {
        _id,
        title,
        language,
        "faqCount": count(faq),
        "servicesCount": count(services),
        "hasHeroSection": defined(heroSection),
        "hasOverview": defined(overview),
        "hasApproach": defined(approach),
        "hasTestimonial": defined(testimonial),
        "hasSeo": defined(seo),
        "overviewHasAlert": defined(overview.alert),
        "overviewHasAdditionalInfo": defined(overview.additionalInfo),
        "overviewHasWhyUs": defined(overview.whyUs)
      }
    `)
    
    console.log('\n✅ Verification Results:')
    console.log('========================')
    console.log(`Document ID: ${verification._id}`)
    console.log(`Title: ${verification.title}`)
    console.log(`Language: ${verification.language}`)
    console.log(`FAQ Count: ${verification.faqCount}`)
    console.log(`Services Count: ${verification.servicesCount}`)
    console.log(`Has Hero Section: ${verification.hasHeroSection}`)
    console.log(`Has Overview: ${verification.hasOverview}`)
    console.log(`Has Approach: ${verification.hasApproach}`)
    console.log(`Has Testimonial: ${verification.hasTestimonial}`)
    console.log(`Has SEO: ${verification.hasSeo}`)
    console.log(`Overview has Alert: ${verification.overviewHasAlert}`)
    console.log(`Overview has AdditionalInfo: ${verification.overviewHasAdditionalInfo}`)
    console.log(`Overview has WhyUs: ${verification.overviewHasWhyUs}`)
    
    console.log('\n✅ MaRisk Risk Bearing Capacity EN import completed successfully!')
    
  } catch (error) {
    console.error('Import failed:', error)
    throw error
  }
}

importMariskRiskBearingCapacityEn()
  .then(() => {
    console.log('Import process finished')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Import process failed:', error)
    process.exit(1)
  })
