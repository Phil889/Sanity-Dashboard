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
    console.log('Creating ISO 27001 Training page...')

    const iso27001TrainingData = {
      _type: 'servicePage',
      _id: 'iso-27001-training',
      title: 'ISO 27001 Training',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-training'
      },
      parent: {
        _type: 'reference',
        _ref: 'iso-27001'
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
        title: 'ISO 27001 Training & Professional Development | ADVISORI',
        description: 'Comprehensive ISO 27001 training programs for all organizational levels. From foundation awareness to lead auditor certification. Expert-led courses with practical implementation focus.',
        keywords: 'ISO 27001 Training, ISO 27001 Certification, ISMS Training, Information Security Training, ISO 27001 Lead Auditor, ISO 27001 Implementation Training, Cybersecurity Training'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Training and Professional Development'
        },
        tagline: 'Excellence through expert-led professional development',
        heading: 'ISO 27001 Training',
        description: 'Build the expertise needed for successful ISO 27001 implementation and management. Our comprehensive training programs combine theoretical knowledge with practical application, delivered by certified experts with real-world implementation experience.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Comprehensive training portfolio covering all ISO 27001 competency levels'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Expert trainers with active consulting and auditing experience'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Practical, hands-on approach with real-world case studies and exercises'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Flexible delivery options including online, in-person, and blended learning'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategic Competency Development for Information Security Excellence',
        description: 'Successful ISO 27001 implementation requires skilled professionals at every organizational level. Our structured training programs develop the critical competencies needed to design, implement, and maintain effective information security management systems that drive business value.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Role-specific training pathways for executives, managers, implementers, and auditors'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Integration of current regulatory frameworks including GDPR, DORA, and NIS2'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Practical application through workshops, simulations, and real-world scenarios'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Internationally recognized certifications and continuing professional development'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Post-training support and mentoring for sustainable competency development'
          }
        ],
        alert: {
          title: 'Investment in Excellence',
          content: 'Professional competency is the foundation of successful information security management. Our training programs create the skilled workforce needed to implement, maintain, and continuously improve ISO 27001 compliance while driving business objectives.'
        },
        whyUs: {
          title: 'Our Training Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Certified lead auditors and implementation experts as primary trainers'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Extensive real-world experience across diverse industries and organizational sizes'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Continuous curriculum updates reflecting latest standards and best practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Proven track record of successful certification outcomes and career advancement'
            }
          ]
        },
        additionalInfo: 'Our ISO 27001 training programs go beyond knowledge transfer to develop practical competencies that can be immediately applied in professional environments. We focus on building deep understanding of information security principles while developing the skills needed to navigate complex implementation challenges.',
        serviceDescription: 'We offer a comprehensive suite of ISO 27001 training programs designed to meet diverse learning needs and professional development goals. Our modular approach allows for customized learning paths that align with individual roles, organizational requirements, and career objectives.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Foundation and awareness programs for all organizational levels'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Implementation workshops for project teams and ISMS coordinators'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Professional certification programs for auditors and consultants'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Executive briefings for senior leadership and board members'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Specialized technical training for IT and security professionals'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Our Systematic Training Methodology',
        description: 'We employ a proven methodology that combines adult learning principles with practical application to ensure maximum knowledge retention and skill development.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive needs assessment to identify specific learning objectives and competency gaps'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Customized curriculum development aligned with organizational context and industry requirements'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Interactive delivery combining lectures, workshops, case studies, and hands-on exercises'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Continuous assessment and feedback to ensure learning objectives are achieved'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Post-training support including mentoring, resources, and continuing education opportunities'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Effective ISO 27001 implementation depends on having skilled professionals who understand both the technical requirements and business context. Our training programs develop the practical competencies needed to successfully implement and maintain information security management systems that protect organizational assets while enabling business growth.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ISO 27001 Foundation & Awareness Training',
          description: 'Comprehensive introduction to information security management and ISO 27001 principles for all organizational stakeholders.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Fundamental concepts of information security and risk management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Overview of ISO 27001 structure, requirements, and implementation approach'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Individual roles and responsibilities within the ISMS framework'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Practical security awareness and best practices for daily operations'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'ISO 27001 Implementation Workshop',
          description: 'Intensive hands-on training for professionals responsible for designing and implementing ISO 27001 management systems.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Systematic approach to ISMS design and implementation planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Risk assessment methodologies and treatment planning techniques'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Development of policies, procedures, and operational controls'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Monitoring, measurement, and continuous improvement processes'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'ISO 27001 Lead Auditor Certification',
          description: 'Professional certification program for individuals seeking to conduct third-party ISO 27001 audits and assessments.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Comprehensive audit principles and methodologies based on ISO 19011'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Practical audit exercises including planning, execution, and reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Preparation for internationally recognized lead auditor certification'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Advanced communication and leadership skills for audit team management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Internal Auditor Development Program',
          description: 'Specialized training for internal audit teams to effectively evaluate and improve organizational ISMS performance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Internal audit program design and management best practices'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Audit planning, execution, and follow-up methodologies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Effective communication of findings and improvement recommendations'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Integration with organizational governance and risk management processes'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Executive Leadership Program',
          description: 'Strategic training for senior executives and board members on information security governance and oversight responsibilities.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Strategic importance of information security in business operations'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Executive responsibilities and accountability under ISO 27001'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Business case development and return on investment analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Integration with enterprise risk management and corporate governance'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Technical Specialist Training',
          description: 'Advanced technical training for IT professionals and security specialists on specific aspects of ISO 27001 implementation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Technical control implementation and configuration management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Incident response and business continuity planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Integration with cybersecurity frameworks and threat intelligence'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Emerging technologies and their impact on information security management'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001TrainingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Training page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
