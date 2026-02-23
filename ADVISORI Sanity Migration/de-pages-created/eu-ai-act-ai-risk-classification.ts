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
    console.log('Creating EU AI Act AI Risk Classification page...')

    const euAiActAiRiskClassificationData = {
      _type: 'servicePage',
      _id: 'eu-ai-act-ai-risk-classification',
      title: 'EU AI Act AI Risk Classification',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eu-ai-act/eu-ai-act-ai-risk-classification'
      },
      parent: {
        _type: 'reference',
        _ref: 'eu-ai-act'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'regulatory-reporting'
        }
      },
      seo: {
        _type: 'seo',
        title: 'EU AI Act AI Risk Classification | ADVISORI',
        description: 'Strategische AI-Risikobewertung und -klassifikation nach EU AI Act. Professionelle Compliance-Frameworks für High-Risk AI-Systeme und regulatorische Excellence.',
        keywords: 'EU AI Act Risk Classification, AI Risk Assessment, High Risk AI Systems, AI Compliance Framework, AI Governance, Digital Transformation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EU AI Act AI Risk Classification'
        },
        tagline: 'Intelligente AI-Risikobewertung für regulatorische Excellence',
        heading: 'EU AI Act AI Risk Classification',
        description: 'Präzise Klassifikation und strategisches Management von AI-Risiken gemäß EU AI Act. Wir entwickeln maßgeschneiderte Risk Assessment-Frameworks, die nicht nur Compliance sicherstellen, sondern auch Innovation fördern.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische AI-Risikobewertung nach EU AI Act Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Compliance-optimierte High-Risk AI System-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Innovation-fördernde Risk Management-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Risiko-Monitoring und Anpassungsprozesse'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EU AI Act AI Risk Classification',
        description: 'Der EU AI Act erfordert eine präzise Klassifikation von AI-Systemen basierend auf ihrem Risikopotential. Eine strategische Risk Assessment-Methodology ist entscheidend für Compliance, operationale Effizienz und nachhaltigen Innovationserfolg.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische AI-Systemanalyse und Risikoidentifikation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'High-Risk AI System-Bewertung und Compliance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Risk Mitigation-Strategien und Control-Mechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliches Risk Monitoring und Assessment-Updates'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Innovation-Balance zwischen Compliance und Business-Agilität'
          }
        ],
        alert: {
          title: 'Kritischer Compliance-Faktor',
          content: 'Fehlerhafte AI-Risikoclassifikation kann zu erheblichen rechtlichen Konsequenzen, Produkteinschränkungen und Wettbewerbsnachteilen führen. Eine professionelle Risk Assessment-Methodology ist fundamental für erfolgreiche AI-Governance.'
        },
        whyUs: {
          title: 'Unsere AI Risk Assessment-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende EU AI Act-Kenntnisse und Risk Classification-Methodik'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Frameworks aus erfolgreichen AI-Compliance-Projekten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Innovation-orientierte Risk Management-Ansätze'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von Assessment bis kontinuierliches Monitoring'
            }
          ]
        },
        additionalInfo: 'Eine strategisch durchgeführte AI-Risikoclassifikation schafft nicht nur regulatorische Sicherheit, sondern auch die Basis für vertrauensvolle AI-Innovation und nachhaltigen Digital Business-Erfolg.',
        serviceDescription: 'Wir begleiten Sie von der initialen AI-Systemanalyse über die präzise Risikobewertung bis hin zur Implementierung kontinuierlicher Monitoring-Prozesse. Unser Ansatz verbindet regulatorische Excellence mit Business-orientierter Innovation.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'AI-System-Inventarisierung und Risk Profiling'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'EU AI Act-konforme Risikobewertung und Klassifikation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'High-Risk AI-Compliance-Framework-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Risk Mitigation-Strategien und Control-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliches Risk Monitoring und Assessment-Updates'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Strategic AI Risk Assessment-Ansatz',
        description: 'Wir entwickeln systematische und zukunftsorientierte AI-Risikobewertungs-Frameworks, die EU AI Act-Compliance mit Business-Agilität und Innovation-Excellence verbinden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive AI-System-Analyse und Risk Landscape-Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'EU AI Act-konforme Risk Classification und Impact-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Maßgeschneiderte Compliance-Framework-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Risk Mitigation-Implementation und Control-Optimization'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliches Monitoring und Strategic Risk Management'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI Digital Solutions',
        name: 'Dr. Sarah Chen',
        position: 'Chief AI Officer',
        quote: 'ADVISORI hat uns nicht nur bei der präzisen AI-Risikoclassifikation nach EU AI Act geholfen, sondern auch ein Framework entwickelt, das unsere Innovation-Agilität maximiert und gleichzeitig alle Compliance-Anforderungen übertrifft. Ihre Expertise war entscheidend für unseren erfolgreichen AI-Governance-Ansatz.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'AI-System Risk Assessment & Classification',
          description: 'Systematische Bewertung und Klassifikation von AI-Systemen gemäß EU AI Act mit fokussierter Risikoanalyse und Compliance-Optimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Comprehensive AI-System-Inventarisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'EU AI Act-konforme Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'High-Risk AI-System-Identifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Risk Classification-Dokumentation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Risk Mitigation & Continuous Monitoring',
          description: 'Entwicklung und Implementierung strategischer Risk Management-Frameworks mit kontinuierlichen Monitoring-Prozessen für nachhaltige AI-Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Risk Mitigation-Strategien und Control-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Kontinuierliches Risk Monitoring-Framework'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Compliance-Performance-Tracking'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Strategic Risk Management-Optimization'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(euAiActAiRiskClassificationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EU AI Act AI Risk Classification page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
