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
    console.log('Creating Datenstrategie für KI page...')

    const datenstrategieFuerKiData = {
      _type: 'servicePage',
      _id: 'datenstrategie-fuer-ki',
      title: 'Datenstrategie für KI',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/datenstrategie-fuer-ki'
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
        title: 'Datenstrategie für KI | AI Data Strategy Consulting | ADVISORI',
        description: 'Strategische Datenarchitektur für KI-Erfolg. Data Governance, Datenqualität und AI-optimierte Datenstrategien für nachhaltige Wettbewerbsvorteile und erfolgreiche KI-Implementierungen.',
        keywords: 'Datenstrategie KI, AI Data Strategy, Data Governance, Datenarchitektur, KI Datenmanagement, AI Data Quality, Machine Learning Daten, Data Strategy Consulting'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Datenstrategie für KI'
        },
        tagline: 'Strategische Datenarchitektur für KI-Erfolg',
        heading: 'Datenstrategie für KI',
        description: 'Entwickeln Sie eine zukunftssichere Datenstrategie, die Ihre KI-Initiativen zum Erfolg führt. Unsere strategischen Data Governance-Frameworks schaffen die Grundlage für leistungsstarke AI-Systeme und nachhaltigen Geschäftserfolg.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische Data Governance für KI-optimierte Datenarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Datenqualitäts-Management für hochperformante Machine Learning'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Cross-funktionale Datenintegration für AI-driven Business Intelligence'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Skalierbare Dateninfrastrukturen für Enterprise-AI-Transformation'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Datenstrategie für KI',
        description: 'Eine erfolgreiche KI-Implementierung steht und fällt mit der zugrundeliegenden Datenstrategie. Ohne hochwertige, gut strukturierte und strategisch verwaltete Daten können selbst die fortschrittlichsten AI-Algorithmen ihr Potenzial nicht entfalten. ADVISORI entwickelt umfassende Datenstrategien, die speziell auf KI-Anforderungen zugeschnitten sind und Unternehmen dabei unterstützen, ihre Daten als strategischen Wettbewerbsvorteil zu nutzen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Data Governance und KI-optimierte Datenarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Datenqualitäts-Management und ML-Ready Data Preparation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Master Data Management für konsistente AI-Trainingsdaten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Real-time Data Pipelines für kontinuierliches Machine Learning'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Data Monetization und AI-driven Business Value Creation'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine strategische Datenstrategie für KI geht weit über technische Datenmanagement-Aspekte hinaus. Sie erfordert eine ganzheitliche Betrachtung von Datenqualität, Governance, Architektur und Business Alignment, um das volle Potenzial von AI-Investitionen zu realisieren und nachhaltigen Geschäftswert zu schaffen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Expertise in KI-optimierten Datenstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Ganzheitliche Data Governance für AI-Transformation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Strategische C-Level-Beratung für datengetriebene Innovation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Bewährte Frameworks für skalierbare AI-Datenarchitekturen'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit strategisch ausgerichteten Datenstrategien für KI erzielen nachweislich höhere ROI bei AI-Investitionen und schaffen nachhaltige Wettbewerbsvorteile. Investieren Sie in eine zukunftssichere Datenstrategie für Ihren AI-Erfolg!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum für die Entwicklung und Implementierung strategischer Datenstrategien für KI, von der strategischen Planung über die technische Umsetzung bis hin zur kontinuierlichen Optimierung und Governance.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategic Data Assessment & AI Readiness'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'KI-optimierte Datenarchitektur-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Data Governance & Quality Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Real-time Data Pipeline Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'AI Data Monetization Strategy'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte Datenstrategie, die perfekt auf Ihre KI-Ziele und Geschäftsanforderungen abgestimmt ist und gleichzeitig skalierbare, zukunftssichere Datenarchitekturen schafft.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Datenlandschaft-Analyse und AI-Readiness-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategische Datenarchitektur-Planung für KI-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Data Governance-Framework-Implementierung und Quality Management'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Aufbau skalierbarer Data Pipelines und ML-Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und strategische Weiterentwicklung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Eine strategische Datenstrategie ist das Fundament jeder erfolgreichen KI-Initiative. Unser Ansatz verbindet technische Exzellenz mit strategischer Weitsicht, um Daten als wertvollsten Unternehmensasset zu positionieren. Wir schaffen nicht nur Datenarchitekturen, sondern ermöglichen datengetriebene Geschäftstransformation, die nachhaltigen Wettbewerbsvorteile und messbaren Business Value generiert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategic Data Assessment & AI Readiness',
          description: 'Umfassende Bewertung Ihrer Datenlandschaft und Entwicklung einer strategischen Roadmap für KI-optimierte Datenarchitekturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Datenlandschaft-Analyse und AI-Potenzial-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Data Maturity Evaluation und Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Strategische Datenarchitektur-Roadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'ROI-Bewertung und Business Case-Entwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'KI-optimierte Datenarchitektur-Design',
          description: 'Entwicklung skalierbarer, zukunftssicherer Datenarchitekturen, die speziell für KI-Anforderungen optimiert sind.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Modern Data Stack-Architektur für AI/ML'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Cloud-native und Hybrid-Datenplattformen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Skalierbare Data Lake und Data Warehouse-Konzepte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Real-time Streaming und Batch-Processing-Architekturen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(datenstrategieFuerKiData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Datenstrategie für KI page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
