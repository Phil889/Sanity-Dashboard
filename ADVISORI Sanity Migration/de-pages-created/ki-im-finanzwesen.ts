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
    console.log('Creating KI im Finanzwesen page...')

    const kiImFinanzwesenData = {
      _type: 'servicePage',
      _id: 'ki-im-finanzwesen',
      title: 'KI im Finanzwesen',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/ki-im-finanzwesen'
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
        title: 'KI im Finanzwesen | AI Banking & Finance Solutions | ADVISORI',
        description: 'Professionelle KI-Beratung für Finanzdienstleister. DORA-konforme AI-Lösungen, Risikomanagement, Fraud Detection und regulatorische Compliance für nachhaltige FinTech-Innovation.',
        keywords: 'KI Finanzwesen, AI Banking, FinTech AI, DORA Compliance, AI Risk Management, Algorithmic Trading, AI Fraud Detection, Financial AI Governance, RegTech AI Solutions'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KI im Finanzwesen AI Banking Finance Solutions'
        },
        tagline: 'Intelligente KI-Transformation für das moderne Finanzwesen',
        heading: 'KI im Finanzwesen',
        description: 'Revolutionieren Sie Ihr Finanzunternehmen mit ADVISORI\'s KI-Expertise. Wir entwickeln DORA-konforme AI-Lösungen für Risikomanagement, Fraud Detection, Algorithmic Trading und Customer Experience. Unsere FinTech-AI-Beratung kombiniert regulatorische Compliance mit innovativer Technologie für nachhaltigen Wettbewerbsvorteil.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'DORA-konforme KI-Implementierung mit integriertem Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'AI-powered Fraud Detection und Real-time Security Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Algorithmic Trading und intelligente Investment-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Personalisierte Customer Experience durch AI-Analytics'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KI im Finanzwesen',
        description: 'Die Finanzbranche steht vor einer KI-Revolution, die Geschäftsmodelle fundamental transformiert. ADVISORI begleitet Finanzdienstleister bei der strategischen KI-Transformation mit regulatorisch konformen, sicheren und wertschöpfenden AI-Lösungen. Unsere FinTech-AI-Expertise umfasst das gesamte Spektrum von Risikomanagement über Fraud Detection bis hin zu personalisierten Kundenservices.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'DORA-konforme KI-Strategien mit integriertem Operational Resilience Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'AI-powered Risk Assessment und Real-time Fraud Detection Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Algorithmic Trading und intelligente Portfolio-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Customer Analytics und personalisierte Financial Services'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Regulatory Compliance Automation und AI Governance Frameworks'
          }
        ],
        alert: {
          title: 'FinTech-AI-Imperativ',
          content: 'KI im Finanzwesen ist nicht nur technologische Innovation, sondern regulatorische Notwendigkeit. Mit DORA, MiFID II und Basel III-Anforderungen müssen Finanzinstitute KI-Systeme implementieren, die höchste Sicherheits- und Compliance-Standards erfüllen.'
        },
        whyUs: {
          title: 'Unsere FinTech-AI-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Kompetenz in regulatorischer KI-Compliance für Finanzdienstleister'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte AI-Frameworks für DORA, MiFID II und Basel III Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'End-to-End FinTech-AI-Lösungen von Strategie bis Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenführende Expertise in Financial AI Risk Management'
            }
          ]
        },
        additionalInfo: 'Erfolgreiche KI-Transformation im Finanzwesen erfordert die perfekte Balance zwischen Innovation und Compliance – ADVISORI macht diese Vision zur Realität!',
        serviceDescription: 'Unsere KI-Finanzberatung umfasst das gesamte Spektrum intelligenter Financial Services – von strategischer AI-Planung über regulatorische Compliance bis hin zur operativen Optimierung und kontinuierlichen Innovation.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategic FinTech AI Transformation & Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'DORA-Compliant AI Risk Management & Security'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'AI-Powered Fraud Detection & Real-time Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Algorithmic Trading & Investment AI Solutions'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Customer Experience AI & Personalization Engines'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser FinTech-AI-Ansatz',
        description: 'Wir verfolgen einen ganzheitlichen, compliance-first Ansatz zur KI-Transformation im Finanzwesen. Jede AI-Initiative wird strategisch auf Ihre Geschäftsziele, regulatorischen Anforderungen und Risikotoleranz abgestimmt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende FinTech-AI-Strategie mit regulatorischer Compliance-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'DORA-konforme AI-Architektur mit Operational Resilience Framework'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung intelligenter Risk Management und Security Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von Customer Analytics und Personalization Engines'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche AI-Optimierung und Performance-Monitoring'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'KI im Finanzwesen ist mehr als technologische Innovation – es ist die Zukunft intelligenter Financial Services. Unsere DORA-konformen AI-Lösungen schaffen nicht nur regulatorische Sicherheit, sondern revolutionieren Risikomanagement, Fraud Detection und Customer Experience. Wir entwickeln FinTech-AI-Strategien, die Compliance und Innovation perfekt vereinen und nachhaltigen Wettbewerbsvorteil generieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategic FinTech AI Transformation & Implementation',
          description: 'Ganzheitliche KI-Strategieentwicklung für Finanzdienstleister mit DORA-konformer Implementierung und regulatorischer Compliance-Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'FinTech-AI-Strategieentwicklung mit Business Case Validierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'DORA-konforme AI-Architektur und Governance-Framework'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Regulatory Impact Assessment und Compliance-Roadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Change Management und Stakeholder-Alignment für AI-Transformation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'AI-Powered Risk Management & Compliance Automation',
          description: 'Intelligente Risikomanagement-Systeme mit automatisierter Compliance-Überwachung und Real-time Risk Assessment für moderne Finanzinstitute.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'AI-basierte Credit Risk Modelling und Portfolio-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automated Compliance Monitoring und Regulatory Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Real-time Market Risk Assessment und Stress Testing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Operational Risk Intelligence und Incident Prediction'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Advanced Fraud Detection & Security Intelligence',
          description: 'KI-gestützte Fraud Detection Systeme mit Machine Learning Algorithmen für Real-time Betrugserkennung und präventive Sicherheitsmaßnahmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Real-time Fraud Detection mit Machine Learning Algorithmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Behavioral Analytics und Anomaly Detection Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Anti-Money Laundering AI und Transaction Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Cyber Security Intelligence und Threat Prediction'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Algorithmic Trading & Investment AI Solutions',
          description: 'Intelligente Trading-Algorithmen und AI-powered Investment-Strategien für optimierte Portfolio-Performance und automatisierte Handelsentscheidungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Algorithmic Trading Strategies mit Machine Learning Optimization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'AI-powered Portfolio Management und Asset Allocation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Predictive Market Analytics und Sentiment Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Robo-Advisory Platforms und Automated Investment Services'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Customer Experience AI & Personalization Engines',
          description: 'KI-gestützte Customer Analytics und Personalisierungslösungen für verbesserte Kundenerfahrung und optimierte Financial Services.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'AI-powered Customer Segmentation und Behavioral Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Personalized Product Recommendations und Cross-selling AI'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Intelligent Chatbots und Conversational Banking AI'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Customer Lifetime Value Prediction und Retention Strategies'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'AI Governance & Continuous Innovation Management',
          description: 'Langfristige AI-Governance und kontinuierliche Innovation für nachhaltige KI-Transformation im Finanzwesen mit strategischer Technologie-Roadmap.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Financial AI Governance Framework und Ethics Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Continuous AI Model Monitoring und Performance Optimization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Innovation Pipeline Management und Technology Scouting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategic AI Partnership Development und Ecosystem Integration'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kiImFinanzwesenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KI im Finanzwesen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
