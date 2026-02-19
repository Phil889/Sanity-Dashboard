import 'dotenv/config'
// Import script for MaRisk Risk Control Function - English Translation
// Complete page with ALL sections: heroSection, overview, approach, services, faq, testimonial, seo

import { createClient } from '@sanity/client'
import { mariskRiskControlFunctionEnFaqsBatch1 } from './marisk-risk-control-function-en-faqs-batch1'
import { mariskRiskControlFunctionEnFaqsBatch2 } from './marisk-risk-control-function-en-faqs-batch2'
import { mariskRiskControlFunctionEnFaqsBatch3 } from './marisk-risk-control-function-en-faqs-batch3'
import { mariskRiskControlFunctionEnFaqsBatch4 } from './marisk-risk-control-function-en-faqs-batch4'
import { mariskRiskControlFunctionEnFaqsBatch5 } from './marisk-risk-control-function-en-faqs-batch5'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

// Combine all FAQ batches - 20 unique FAQs (source has duplicates, we use unique ones)
const allFaqs = [
  ...mariskRiskControlFunctionEnFaqsBatch1,
  ...mariskRiskControlFunctionEnFaqsBatch2,
  ...mariskRiskControlFunctionEnFaqsBatch3,
  ...mariskRiskControlFunctionEnFaqsBatch4,
  ...mariskRiskControlFunctionEnFaqsBatch5
]

const mariskRiskControlFunctionEnPage = {
  _id: 'marisk-risk-control-function-en',
  _type: 'servicePage',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'marisk-risk-control-function'
  },
  title: 'MaRisk Risk Control Function',
  slug: {
    _type: 'slug',
    current: 'regulatory-compliance-management/marisk/marisk-risk-control-function-en'
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
    heading: 'MaRisk Risk Control Function',
    tagline: 'Strategic MaRisk Risk Control Function Excellence for Austrian Banking Innovation',
    description: 'Austrian banks require robust risk control functions that not only meet MaRisk requirements but also promote strategic business development and operational excellence. Successful risk control functions require more than traditional monitoring approaches – they demand innovative control technologies, independent methods, and deep understanding of the Austrian regulatory landscape. We develop comprehensive MaRisk Risk Control Function strategies that ensure FMA conformity while creating value, risk management excellence, and sustainable competitive advantages for Austrian banking institutions.',
    heroImage: {
      _type: 'image',
      alt: 'MaRisk Risk Control Function'
    },
    benefits: [
      {
        _key: `benefit_rcf_en_${Date.now()}_1`,
        _type: 'object',
        text: 'FMA-compliant risk control functions with Austrian regulatory standards'
      },
      {
        _key: `benefit_rcf_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Independent risk control monitoring for maximum objectivity and effectiveness'
      },
      {
        _key: `benefit_rcf_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Innovative risk control technologies for automated monitoring and continuous control'
      },
      {
        _key: `benefit_rcf_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Strategic governance integration for sustainable risk control excellence and business value'
      }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'MaRisk Risk Control Function as Foundation for Austrian Banking Excellence',
    description: 'The MaRisk Risk Control Function requirements define specific standards for risk control functions that go beyond traditional monitoring approaches and enable strategic value creation. Successful implementation requires not only technical compliance but also innovative control methods, technology integration, and deep understanding of the Austrian banking landscape. Our MaRisk Risk Control Function expertise combines local regulatory knowledge with international best practices for comprehensive risk control solutions.',
    additionalInfo: 'Successful MaRisk Risk Control Function implementation requires not only technical execution but also cultural transformation and strategic realignment of the risk control function. Our holistic approach combines risk control expertise with change management and technology innovation.',
    serviceDescription: 'We develop and implement comprehensive MaRisk Risk Control Function strategies that meet Austrian regulatory requirements while enabling risk control efficiency, risk management excellence, and strategic business development. From strategy development to technical implementation.',
    alert: {
      _type: 'object',
      title: 'Austrian Risk Control Function Innovation',
      content: 'MaRisk Risk Control Function is more than regulatory obligation – it is a strategic opportunity for operational excellence and risk management innovation. Our Austria-specific risk control solutions create not only FMA conformity but also enable sustainable business development and strategic competitive differentiation.'
    },
    points: [
      {
        _key: `point_rcf_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Three lines of defense model with clear risk control function positioning and independence'
      },
      {
        _key: `point_rcf_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Risk-oriented control functions based on institution-specific risk profiles'
      },
      {
        _key: `point_rcf_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Continuous risk control methods with real-time monitoring and automated data analysis'
      },
      {
        _key: `point_rcf_en_${Date.now()}_4`,
        _type: 'object',
        text: 'FMA-compliant risk control reporting with strategic management recommendations'
      },
      {
        _key: `point_rcf_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Technology-supported risk control processes for efficiency enhancement and quality improvement'
      }
    ],
    servicePoints: [
      {
        _key: `servicePoint_rcf_en_${Date.now()}_1`,
        _type: 'object',
        text: 'FMA-compliant risk control function framework development and implementation'
      },
      {
        _key: `servicePoint_rcf_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Independent risk control with strategic business alignment'
      },
      {
        _key: `servicePoint_rcf_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Continuous risk control methods with automated monitoring and data analysis'
      },
      {
        _key: `servicePoint_rcf_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Risk control technology integration for efficient control processes and quality enhancement'
      },
      {
        _key: `servicePoint_rcf_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Change management and employee development for sustainable risk control excellence'
      }
    ],
    whyUs: {
      _type: 'object',
      title: 'Our MaRisk Risk Control Function Expertise',
      points: [
        {
          _key: `whyUs_rcf_en_${Date.now()}_1`,
          _type: 'object',
          text: 'Specialized expertise in Austrian risk control function regulation and FMA requirements'
        },
        {
          _key: `whyUs_rcf_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Proven experience with MaRisk Risk Control Function implementations in Austrian banks'
        },
        {
          _key: `whyUs_rcf_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Deep understanding of local risk control practices and regulatory expectations'
        },
        {
          _key: `whyUs_rcf_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Innovative risk control technologies for sustainable risk control function excellence and future-proofing'
        }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Austria-specific MaRisk Risk Control Function Approach',
    description: 'We develop together with you a tailored MaRisk Risk Control Function strategy that not only ensures FMA compliance but also identifies strategic business opportunities and creates sustainable competitive advantages for Austrian banking institutions.',
    points: [
      {
        _key: `approach_rcf_en_${Date.now()}_1`,
        _type: 'object',
        text: 'Comprehensive Risk Control Function assessment and current-state analysis of your risk control function'
      },
      {
        _key: `approach_rcf_en_${Date.now()}_2`,
        _type: 'object',
        text: 'Strategic Risk Control Framework design with focus on Austrian regulatory requirements'
      },
      {
        _key: `approach_rcf_en_${Date.now()}_3`,
        _type: 'object',
        text: 'Agile implementation with continuous FMA alignment and stakeholder engagement'
      },
      {
        _key: `approach_rcf_en_${Date.now()}_4`,
        _type: 'object',
        text: 'Technology integration with risk control tech solutions for automated control processes'
      },
      {
        _key: `approach_rcf_en_${Date.now()}_5`,
        _type: 'object',
        text: 'Continuous optimization and regulatory updates for long-term risk control function excellence'
      }
    ]
  },
  services: [
    {
      _key: `service_rcf_en_${Date.now()}_1`,
      _type: 'object',
      title: 'FMA-compliant Risk Control Function Frameworks',
      description: 'We develop comprehensive risk control functions specifically tailored to Austrian MaRisk requirements while combining international best practices with local regulatory standards.',
      features: [
        {
          _key: `feature_rcf_en_${Date.now()}_1`,
          _type: 'object',
          text: 'Three lines of defense model with clear risk control function positioning'
        },
        {
          _key: `feature_rcf_en_${Date.now()}_2`,
          _type: 'object',
          text: 'Risk control charter and governance structures according to FMA requirements'
        },
        {
          _key: `feature_rcf_en_${Date.now()}_3`,
          _type: 'object',
          text: 'Independence and objectivity frameworks for effective risk control'
        },
        {
          _key: `feature_rcf_en_${Date.now()}_4`,
          _type: 'object',
          text: 'Quality assurance programs for continuous risk control function excellence'
        }
      ]
    },
    {
      _key: `service_rcf_en_${Date.now()}_2`,
      _type: 'object',
      title: 'Independent Risk Control Monitoring',
      description: 'We implement strategic risk control monitoring approaches that link independence with business objectives while ensuring maximum control efficiency and effectiveness.',
      features: [
        {
          _key: `feature_rcf_en_${Date.now()}_5`,
          _type: 'object',
          text: 'Risk-based control universe development with strategic business alignment'
        },
        {
          _key: `feature_rcf_en_${Date.now()}_6`,
          _type: 'object',
          text: 'Dynamic risk control planning with continuous risk assessment'
        },
        {
          _key: `feature_rcf_en_${Date.now()}_7`,
          _type: 'object',
          text: 'Resource optimization through intelligent risk control prioritization'
        },
        {
          _key: `feature_rcf_en_${Date.now()}_8`,
          _type: 'object',
          text: 'Stakeholder integration for strategic risk control alignment'
        }
      ]
    },
    {
      _key: `service_rcf_en_${Date.now()}_3`,
      _type: 'object',
      title: 'Continuous Risk Control Methods',
      description: 'We create innovative risk control approaches that complement traditional periodic control with continuous monitoring and real-time analysis while significantly increasing risk control efficiency.',
      features: [
        {
          _key: `feature_rcf_en_${Date.now()}_9`,
          _type: 'object',
          text: 'Continuous risk control systems with automated data analysis'
        },
        {
          _key: `feature_rcf_en_${Date.now()}_10`,
          _type: 'object',
          text: 'Real-time risk monitoring for proactive risk control'
        },
        {
          _key: `feature_rcf_en_${Date.now()}_11`,
          _type: 'object',
          text: 'Exception-based risk control for focused control activities'
        },
        {
          _key: `feature_rcf_en_${Date.now()}_12`,
          _type: 'object',
          text: 'Predictive analytics for preventive risk control assessment'
        }
      ]
    },
    {
      _key: `service_rcf_en_${Date.now()}_4`,
      _type: 'object',
      title: 'Risk Control Technology Integration',
      description: 'We implement innovative risk control technologies that automate control processes while significantly improving risk control quality, efficiency, and strategic value creation.',
      features: [
        {
          _key: `feature_rcf_en_${Date.now()}_13`,
          _type: 'object',
          text: 'Data analytics platforms for comprehensive risk control data analysis'
        },
        {
          _key: `feature_rcf_en_${Date.now()}_14`,
          _type: 'object',
          text: 'Risk control management systems for efficient control processing'
        },
        {
          _key: `feature_rcf_en_${Date.now()}_15`,
          _type: 'object',
          text: 'Robotic process automation for standardized risk control activities'
        },
        {
          _key: `feature_rcf_en_${Date.now()}_16`,
          _type: 'object',
          text: 'AI-powered anomaly detection for intelligent risk control assessment'
        }
      ]
    },
    {
      _key: `service_rcf_en_${Date.now()}_5`,
      _type: 'object',
      title: 'Strategic Risk Control Reporting',
      description: 'We develop comprehensive risk control reporting systems that not only meet FMA requirements but also deliver strategic management insights and action-relevant recommendations.',
      features: [
        {
          _key: `feature_rcf_en_${Date.now()}_17`,
          _type: 'object',
          text: 'FMA-compliant risk control reports with strategic management recommendations'
        },
        {
          _key: `feature_rcf_en_${Date.now()}_18`,
          _type: 'object',
          text: 'Executive dashboards for real-time risk control performance monitoring'
        },
        {
          _key: `feature_rcf_en_${Date.now()}_19`,
          _type: 'object',
          text: 'Follow-up systems for effective action tracking'
        },
        {
          _key: `feature_rcf_en_${Date.now()}_20`,
          _type: 'object',
          text: 'Stakeholder-specific communication for maximum risk control effectiveness'
        }
      ]
    },
    {
      _key: `service_rcf_en_${Date.now()}_6`,
      _type: 'object',
      title: 'Continuous Risk Control Function Optimization',
      description: 'We ensure long-term risk control function excellence through continuous monitoring, regulatory updates, and proactive optimization of your risk control systems and processes.',
      features: [
        {
          _key: `feature_rcf_en_${Date.now()}_21`,
          _type: 'object',
          text: 'Regulatory trend analysis and proactive risk control adaptation strategies'
        },
        {
          _key: `feature_rcf_en_${Date.now()}_22`,
          _type: 'object',
          text: 'Continuous risk control quality assessment and performance monitoring'
        },
        {
          _key: `feature_rcf_en_${Date.now()}_23`,
          _type: 'object',
          text: 'Best practice integration and international benchmark analyses'
        },
        {
          _key: `feature_rcf_en_${Date.now()}_24`,
          _type: 'object',
          text: 'Employee development and competency building for risk control function excellence'
        }
      ]
    }
  ],
  faq: allFaqs,
  testimonial: {
    _type: 'object',
    quote: 'The risk control function is the strategic heart of modern risk management and far more than regulatory compliance. Modern MaRisk Risk Control Functions are strategic business enablers that, through innovative control approaches and technology integration, not only ensure risk control but also promote operational excellence and business development. Our Austria-specific risk control function solutions create sustainable competitive advantages through intelligent risk assessment, continuous monitoring, and strategic management support.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI FTC GmbH'
  },
  seo: {
    _type: 'seo',
    title: 'MaRisk Risk Control Function | ADVISORI',
    description: 'Professional MaRisk Risk Control Function consulting for Austrian banks. We implement strategic risk control functions, develop independent monitoring systems, and ensure sustainable FMA conformity through innovative risk control technologies and strategic governance optimization.',
    keywords: 'MaRisk Risk Control Function, Risk Control Function Austria, FMA Risk Control Management, Austrian Banking Risk Control, MaRisk Austria Risk Control, Independent Risk Control, Banking Risk Control Austria, FMA Risk Control Requirements, Austrian Financial Risk Control'
  }
}

async function importMariskRiskControlFunctionEn() {
  console.log('Starting MaRisk Risk Control Function EN import...')
  console.log(`Total FAQs to import: ${allFaqs.length}`)
  
  try {
    // Check if document exists
    const existing = await client.getDocument('marisk-risk-control-function-en')
    
    if (existing) {
      console.log('Document exists, updating...')
      const result = await client
        .patch('marisk-risk-control-function-en')
        .set(mariskRiskControlFunctionEnPage)
        .commit()
      console.log('Updated successfully:', result._id)
    } else {
      console.log('Creating new document...')
      const result = await client.create(mariskRiskControlFunctionEnPage)
      console.log('Created successfully:', result._id)
    }
    
    // Verify the import
    const verification = await client.fetch(`
      *[_id == "marisk-risk-control-function-en"][0] {
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
    
    console.log('\n✅ MaRisk Risk Control Function EN import completed successfully!')
    
  } catch (error) {
    console.error('Import failed:', error)
    throw error
  }
}

importMariskRiskControlFunctionEn()
  .then(() => {
    console.log('Import process finished')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Import process failed:', error)
    process.exit(1)
  })
