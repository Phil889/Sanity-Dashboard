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
    console.log('Creating Explainable AI page...')

    const explainableAiData = {
      _type: 'servicePage',
      _id: 'explainable-ai',
      title: 'Explainable AI (XAI)',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/explainable-ai'
      },
      parent: {
        _type: 'reference',
        _ref: 'ki-kuenstliche-intelligenz'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'digitale-transformation'
        }
      },
      seo: {
        _type: 'seo',
        title: 'Explainable AI (XAI) | ADVISORI',
        description: 'GDPR-compliant implementation of explainable AI systems. Transparent AI solutions for trust, compliance, and traceable decision-making in enterprises.',
        keywords: 'Explainable AI, XAI, Transparent AI, AI Interpretability, GDPR, EU AI Act, AI Governance, Traceable AI, AI Transparency'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Explainable AI XAI'
        },
        tagline: 'Transparent AI Systems for Trust and Compliance',
        heading: 'Explainable AI (XAI)',
        description: 'Build trust through transparency. Our explainable AI solutions make AI decisions traceable, GDPR-compliant, and audit-ready while protecting your intellectual property.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Transparent AI decisions for trust and acceptance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'GDPR and EU AI Act compliant implementation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Audit-ready documentation and traceability'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Risk minimization through interpretable AI models'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Explainable AI (XAI)',
        description: 'In an era of increasing AI regulation and rising transparency requirements, Explainable AI is not just a technical necessity but a strategic competitive advantage. ADVISORI implements explainable AI systems that are not only powerful but also traceable, trustworthy, and compliant.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'XAI Readiness Assessment and transparency strategy development'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementation of interpretable Machine Learning models'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'GDPR and EU AI Act compliant explainability frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Development of AI governance for traceable decisions'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Audit-ready documentation and compliance monitoring'
          }
        ],
        alert: {
          title: 'Expert Insight',
          content: 'Explainable AI is the key to sustainable AI success. Transparent systems not only build stakeholder trust but also enable better decisions, reduce risks, and proactively meet regulatory requirements.'
        },
        whyUs: {
          title: 'Our Strengths',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Leading expertise in XAI methods and implementation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'GDPR and EU AI Act compliant transparency frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Safety-first approach with IP protection and data security'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Strategic C-level consulting for sustainable XAI adoption'
            }
          ]
        },
        additionalInfo: 'Companies with explainable AI systems significantly reduce compliance risks while creating higher stakeholder trust. Invest in transparent AI for sustainable business success!',
        serviceDescription: 'We offer you a comprehensive range of services for implementing explainable AI systems, from strategic planning through technical implementation to continuous governance and compliance monitoring.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'XAI Strategy & Transparency Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Interpretable ML Model Development'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Explainability Framework Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'AI Governance for Transparency'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Compliance Monitoring & Audit Support'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Our Approach',
        description: 'We develop an individual XAI strategy with you that optimally combines technical excellence with regulatory compliance and business requirements.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive analysis of your AI systems and transparency requirements'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Development of a tailored XAI strategy and roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementation of interpretable models and explainability tools'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Establishment of governance frameworks for traceable AI'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous monitoring, optimization, and compliance assurance'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Explainable AI is not just a technical requirement but a strategic enabler for trustworthy AI adoption. Our XAI implementations create transparency without compromising performance, enabling companies to develop AI systems that are both powerful and traceable – a decisive competitive advantage in a regulated world.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'XAI Strategy & Transparency Assessment',
          description: 'Comprehensive evaluation of your AI systems and development of a strategic roadmap for explainable AI.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analysis of existing AI models for interpretability'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identification of transparency requirements and use cases'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Development of XAI roadmap and implementation strategy'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Stakeholder analysis and transparency requirements management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Interpretable ML Model Development',
          description: 'Development and implementation of Machine Learning models with built-in interpretability.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Design of interpretable model architectures'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementation of LIME, SHAP, and other XAI methods'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Performance optimization without transparency loss'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Validation and testing of explainability features'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Explainability Framework Implementation',
          description: 'Building comprehensive frameworks for systematic explainability of your AI systems.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Development of explainability standards and processes'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Integration of XAI tools into existing AI pipelines'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Automated explanation generation and documentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'User interface design for AI transparency'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'AI Governance for Transparency',
          description: 'Establishment of governance structures for traceable and responsible AI usage.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Development of XAI governance guidelines'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Establishment of transparency KPIs and monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Training teams in XAI methods and tools'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Change management for transparent AI culture'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Compliance Monitoring & Audit Support',
          description: 'Continuous monitoring of XAI compliance and support for audits and regulatory inquiries.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'GDPR and EU AI Act compliance monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Audit trail documentation for AI decisions'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Regulatory reporting and documentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'External audit support and compliance validation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'XAI Tool Integration & Technology Consulting',
          description: 'Consulting and integration of state-of-the-art XAI tools and technologies into your existing IT landscape.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Evaluation and selection of suitable XAI tools'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Integration into existing ML-Ops and AI pipelines'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Custom XAI solution development for special requirements'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Performance optimization and scaling of XAI systems'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(explainableAiData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Explainable AI page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
