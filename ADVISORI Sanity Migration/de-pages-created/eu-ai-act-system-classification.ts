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
    console.log('Creating EU AI Act System Classification page...')

    const euAiActSystemClassificationData = {
      _type: 'servicePage',
      _id: 'eu-ai-act-system-classification',
      title: 'EU AI Act System Classification',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eu-ai-act/eu-ai-act-ai-risk-classification/eu-ai-act-system-classification'
      },
      parent: {
        _type: 'reference',
        _ref: 'eu-ai-act-ai-risk-classification'
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
        title: 'EU AI Act System Classification | ADVISORI',
        description: 'Expert guidance for AI system classification under EU AI Act. Comprehensive classification services, risk categorization, and compliance strategies for AI governance.',
        keywords: 'EU AI Act, System Classification, AI Risk Categories, High Risk AI, AI Compliance, AI Governance, System Classification Framework'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EU AI Act System Classification'
        },
        tagline: 'Präzise KI-System Klassifizierung für EU AI Act Compliance',
        heading: 'EU AI Act System Classification',
        description: 'Unsere Expertise in der systematischen Klassifizierung von KI-Systemen gemäß EU AI Act ermöglicht präzise Compliance-Strategien. Von der initialen Kategorisierung bis zur kontinuierlichen Neubewertung - für sichere und konforme KI-Innovation.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Präzise Klassifizierung nach EU AI Act Risikokategorien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategische Beratung für kostenoptimierte Compliance-Pfade'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kontinuierliche Neubewertung bei System-Updates'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Integration in bestehende AI Governance Frameworks'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EU AI Act System Classification',
        description: 'Die korrekte Klassifizierung von KI-Systemen ist fundamental für EU AI Act Compliance. Wir unterstützen Sie bei der systematischen Kategorisierung Ihrer KI-Anwendungen und entwickeln maßgeschneiderte Compliance-Strategien basierend auf präziser Risikoklassifizierung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Comprehensive AI System Inventory und Classification Framework'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Risk Category Assignment nach EU AI Act Taxonomie'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Compliance Requirement Mapping für jede Systemkategorie'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Strategic Guidance für Classification Optimization'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Re-classification bei System-Evolution'
          }
        ],
        alert: {
          title: 'Classification Impact',
          content: 'Die Klassifizierung Ihrer KI-Systeme bestimmt direkt den Umfang und die Kosten der Compliance-Anforderungen. Eine falsche Klassifizierung kann zu unnötigen Compliance-Lasten oder regulatorischen Risiken führen.'
        },
        whyUs: {
          title: 'Unsere Classification Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in EU AI Act Classification Framework'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserfahrung mit komplexen Multi-Use-Case AI Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Strategic Perspective für kostenoptimierte Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Monitoring-Systeme für Dynamic Classification'
            }
          ]
        },
        additionalInfo: 'Eine strategische System-Klassifizierung optimiert nicht nur Compliance-Kosten, sondern schafft auch Klarheit für Investitionsentscheidungen und ermöglicht risikobasierte AI-Innovation. Klassifizierung als strategisches Instrument.',
        serviceDescription: 'Unser System Classification Service umfasst die vollständige Bewertung und Kategorisierung Ihrer KI-Landschaft mit strategischer Beratung für optimierte Compliance-Pfade und kontinuierliche Classification Governance.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'AI System Inventory und Initial Classification Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Risk Category Assignment nach EU AI Act Framework'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Compliance Requirement Mapping und Cost Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Strategic Classification Optimization Beratung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Dynamic Re-classification Framework Implementation'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Classification Ansatz',
        description: 'Wir verfolgen einen systematischen, business-orientierten Ansatz zur KI-System Klassifizierung, der technische Präzision mit strategischen Compliance-Optimierungen verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive AI System Discovery und Use Case Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematic Risk Category Evaluation nach EU AI Act Criteria'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Strategic Classification Optimization für Cost-Benefit Balance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementation von Dynamic Re-classification Processes'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Integration in Enterprise AI Governance Framework'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI AI Governance Excellence',
        name: 'Prof. Dr. Michael Weber',
        position: 'Lead AI Classification Consultant',
        quote: 'Präzise System-Klassifizierung ist der Grundstein für intelligente AI Compliance. Unser strategischer Ansatz transformiert regulatorische Anforderungen in Wettbewerbsvorteile und ermöglicht risikooptimierte Innovation.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Comprehensive System Classification',
          description: 'Vollständige Klassifizierung Ihrer KI-Systeme nach EU AI Act Kategorien mit strategischer Optimierung für minimale Compliance-Kosten bei maximaler Innovation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematic AI System Discovery und Use Case Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Precise Risk Category Assignment nach EU AI Act Framework'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Strategic Classification Optimization Beratung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Documentation und Audit Trail Erstellung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Dynamic Re-classification Framework',
          description: 'Aufbau kontinuierlicher Überwachungs- und Neubewertungssysteme für sich entwickelnde KI-Systeme und changing Use Cases.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automated Change Detection für AI System Evolution'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Trigger-based Re-classification Processes'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Impact Assessment für Classification Changes'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Stakeholder Communication und Update Management'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(euAiActSystemClassificationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EU AI Act System Classification page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
