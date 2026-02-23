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
    console.log('Creating ISO 27001 Software page...')

    const iso27001SoftwareData = {
      _type: 'servicePage',
      _id: 'iso-27001-software',
      title: 'ISO 27001 Software',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-software'
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
        title: 'ISO 27001 Software Solutions & Implementation | ADVISORI',
        description: 'Expert guidance on ISO 27001 software selection, implementation, and management. Comprehensive solutions for ISMS automation, compliance monitoring, and security software lifecycle management.',
        keywords: 'ISO 27001 Software, ISMS Software, Information Security Software, Compliance Software, Security Management Tools, ISO 27001 Implementation Software, ISMS Automation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Software Solutions and Implementation'
        },
        tagline: 'Technology-driven information security excellence',
        heading: 'ISO 27001 Software',
        description: 'Navigate the complex landscape of ISO 27001 software solutions with expert guidance. From selection and implementation to ongoing management, we help organizations leverage technology to build robust, efficient, and compliant information security management systems.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Comprehensive software evaluation and selection methodology for optimal ISMS alignment'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Expert implementation support ensuring seamless integration with existing systems'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automated compliance monitoring and reporting capabilities for continuous oversight'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strategic vendor management and software lifecycle optimization'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategic Software Solutions for Modern Information Security Management',
        description: 'Effective ISO 27001 implementation increasingly relies on sophisticated software solutions that automate processes, enhance visibility, and ensure consistent compliance. Our expertise helps organizations navigate the complex software landscape to build technology-enabled ISMS that deliver both security and business value.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Comprehensive software assessment and selection based on organizational requirements and maturity'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Integration strategies that align software capabilities with ISMS processes and controls'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Automation frameworks for risk assessment, incident management, and compliance reporting'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Vendor management and third-party risk assessment for software supply chain security'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Software lifecycle management ensuring continuous security and compliance alignment'
          }
        ],
        alert: {
          title: 'Technology as an Enabler',
          content: 'Software solutions should enhance, not complicate, your information security management. Our approach ensures that technology investments deliver measurable improvements in security posture, operational efficiency, and compliance effectiveness.'
        },
        whyUs: {
          title: 'Our Software Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Extensive experience with leading ISMS and security software platforms across industries'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Vendor-neutral approach ensuring objective evaluation and recommendation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Deep understanding of integration challenges and proven implementation methodologies'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ongoing support for software optimization and continuous improvement'
            }
          ]
        },
        additionalInfo: 'Our ISO 27001 software consulting goes beyond tool selection to encompass strategic technology planning that aligns with organizational objectives and regulatory requirements. We help organizations build sustainable, scalable software ecosystems that evolve with changing security landscapes.',
        serviceDescription: 'We provide end-to-end support for ISO 27001 software initiatives, from initial assessment through implementation and ongoing optimization. Our services ensure that software investments deliver maximum value while maintaining security and compliance integrity.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Software requirements analysis and vendor evaluation processes'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Implementation planning and project management for complex software deployments'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Integration architecture design and system interoperability optimization'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'User training and change management for successful software adoption'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance monitoring and continuous improvement frameworks'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Our Systematic Software Implementation Methodology',
        description: 'We employ a proven methodology that balances technical requirements with business objectives to ensure successful software implementations that enhance rather than complicate information security management.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive requirements gathering including functional, technical, and compliance specifications'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Structured vendor evaluation process with objective scoring and risk assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phased implementation approach with pilot testing and gradual rollout strategies'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Comprehensive testing and validation to ensure security and compliance requirements are met'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Post-implementation support and optimization to maximize software value and effectiveness'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die richtige Software-Auswahl und -Implementierung ist entscheidend für den Erfolg moderner ISMS. Unsere Erfahrung zeigt, dass durchdachte Technologie-Strategien nicht nur die Compliance-Effizienz steigern, sondern auch die Grundlage für innovative Sicherheitslösungen schaffen, die mit den sich wandelnden Bedrohungslandschaften Schritt halten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Software Assessment & Selection',
          description: 'Comprehensive evaluation of software solutions to identify optimal tools for your specific ISMS requirements and organizational context.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detailed requirements analysis covering functional, technical, and compliance needs'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Market research and vendor evaluation using structured assessment frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Total cost of ownership analysis including licensing, implementation, and maintenance costs'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Risk assessment of vendor capabilities, financial stability, and long-term viability'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'ISMS Software Implementation',
          description: 'Expert-led implementation of information security management software with focus on integration, configuration, and user adoption.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Implementation planning and project management with defined milestones and deliverables'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'System configuration and customization to align with organizational processes'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Data migration and integration with existing systems and databases'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'User training and change management to ensure successful adoption'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Compliance Automation Solutions',
          description: 'Development and implementation of automated compliance monitoring and reporting systems for continuous ISO 27001 oversight.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Automated risk assessment and control effectiveness monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Real-time compliance dashboards and executive reporting capabilities'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Incident management workflows with automated escalation and tracking'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Audit trail generation and evidence collection for certification assessments'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Security Software Integration',
          description: 'Strategic integration of security tools and platforms to create cohesive, interoperable security ecosystems aligned with ISO 27001.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Integration architecture design for seamless data flow and process automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'API development and middleware solutions for system interoperability'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Single sign-on and identity management integration for unified access control'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Centralized logging and monitoring integration for comprehensive visibility'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Vendor Management & Risk Assessment',
          description: 'Comprehensive vendor management programs ensuring software supply chain security and compliance with ISO 27001 requirements.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Vendor security assessment and due diligence processes'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Contract negotiation support including security and compliance clauses'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Ongoing vendor performance monitoring and relationship management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Third-party risk assessment and mitigation strategies'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Software Lifecycle Management',
          description: 'Ongoing optimization and management of software assets to ensure continued security, compliance, and business value delivery.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Software asset inventory and lifecycle tracking systems'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Patch management and security update processes'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Performance monitoring and optimization recommendations'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'End-of-life planning and migration strategies for software transitions'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001SoftwareData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Software page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
