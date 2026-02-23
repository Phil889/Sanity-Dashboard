import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
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
    console.log('Creating FIDA Regulation page...')

    const fidaRegulationData = {
      _type: 'servicePage',
      _id: 'fida-regulation',
      title: 'FIDA Regulation',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/financial-data-access-fida/fida-regulation'
      },
      parent: {
        _type: 'reference',
        _ref: 'financial-data-access-fida'
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
        title: 'FIDA Regulation Compliance Implementation | ADVISORI',
        description: 'Expert guidance for FIDA regulation compliance implementation. Strategic regulatory frameworks, technical implementation, and ongoing compliance monitoring for financial data access requirements.',
        keywords: 'FIDA regulation, financial data access regulation, compliance implementation, regulatory frameworks, EU financial regulation, data access compliance, financial services regulation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FIDA Regulation Compliance Implementation'
        },
        tagline: 'Strategic FIDA regulation compliance for financial institutions',
        heading: 'FIDA Regulation',
        description: 'Navigate the complexities of FIDA regulation implementation with expert guidance. We provide comprehensive compliance frameworks, technical implementation strategies, and ongoing regulatory monitoring to ensure your organization meets all financial data access requirements.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Comprehensive FIDA regulation compliance framework development'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Technical implementation roadmaps and system integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Regulatory risk assessment and mitigation strategies'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Continuous compliance monitoring and regulatory updates'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Mastering FIDA regulation compliance',
        description: 'The Financial Data Access Regulation represents a significant evolution in European financial regulation, extending data access rights beyond traditional banking to insurance, investment services, and pension funds. Successful compliance requires a strategic approach that balances regulatory requirements with operational efficiency and business innovation.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Comprehensive regulatory impact assessment and compliance gap analysis'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Development of robust technical implementation frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration with existing regulatory compliance systems'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Establishment of ongoing monitoring and reporting mechanisms'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Strategic alignment with business objectives and innovation goals'
          }
        ],
        alert: {
          title: 'Regulatory Excellence',
          content: 'FIDA regulation compliance is not just about meeting minimum requirements. A strategic approach can transform regulatory obligations into competitive advantages and innovation catalysts for your organization.'
        },
        whyUs: {
          title: 'Our FIDA regulation expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Deep understanding of FIDA regulation requirements and implementation challenges'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Proven experience in financial services regulatory compliance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Technical expertise in data access systems and API development'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Comprehensive approach from strategy to implementation'
            }
          ]
        },
        additionalInfo: 'FIDA regulation extends the principles of open banking to a broader range of financial services, creating new opportunities for data sharing and innovation while establishing strict requirements for data protection, customer consent, and technical standards. The regulation affects banks, insurance companies, investment firms, and pension providers across the European Union.',
        serviceDescription: 'We provide end-to-end FIDA regulation compliance services that combine regulatory expertise with technical implementation capabilities. Our approach ensures not only compliance with current requirements but also prepares your organization for future regulatory developments and market opportunities.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Regulatory compliance assessment and gap analysis'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Technical implementation planning and system design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Data governance and privacy framework development'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Ongoing compliance monitoring and regulatory updates'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Training and change management support'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Our strategic FIDA regulation approach',
        description: 'We develop comprehensive FIDA regulation compliance strategies that integrate regulatory requirements with your business objectives and operational capabilities.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Detailed regulatory impact assessment and compliance requirements mapping'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Development of integrated compliance frameworks and implementation roadmaps'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Technical system design and API implementation strategies'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Establishment of governance structures and risk management processes'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous monitoring and adaptation to regulatory changes'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'FIDA regulation represents a paradigm shift in financial data governance that requires both technical excellence and strategic vision. Our comprehensive approach ensures organizations not only achieve compliance but also leverage these requirements to drive innovation and competitive advantage in the evolving financial services landscape.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'FIDA Regulation Compliance Assessment',
          description: 'Comprehensive evaluation of your current position against FIDA regulation requirements and development of detailed compliance roadmaps.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detailed regulatory requirements analysis and applicability assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Current state evaluation and compliance gap identification'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risk assessment and impact analysis across business functions'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Prioritized implementation roadmap with timeline and resource requirements'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technical Implementation Framework',
          description: 'Development of robust technical architectures and implementation strategies for FIDA regulation compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'API design and development for compliant data access interfaces'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'System integration planning and legacy system modernization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Security architecture design and implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Performance optimization and scalability planning'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Data Governance and Privacy Framework',
          description: 'Establishment of comprehensive data governance structures and privacy protection mechanisms for FIDA compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Data classification and inventory management systems'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Customer consent management and preference systems'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Data quality assurance and validation frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Privacy by design implementation and GDPR alignment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Regulatory Risk Management',
          description: 'Development of comprehensive risk management frameworks specifically designed for FIDA regulation compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Regulatory risk identification and assessment methodologies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Risk mitigation strategies and control implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Incident response procedures and breach notification protocols'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Regular risk monitoring and assessment updates'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Compliance Monitoring and Reporting',
          description: 'Implementation of continuous monitoring systems and automated reporting mechanisms for ongoing FIDA regulation compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Real-time compliance monitoring and alerting systems'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Automated regulatory reporting and documentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Performance metrics and KPI tracking dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Regular compliance audits and assessment reports'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Ongoing Regulatory Support',
          description: 'Continuous support and guidance to maintain FIDA regulation compliance as requirements evolve and business needs change.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Regular regulatory updates and impact assessments'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'System updates and enhancement recommendations'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Staff training and competency development programs'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategic advisory services for regulatory evolution'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(fidaRegulationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FIDA Regulation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
