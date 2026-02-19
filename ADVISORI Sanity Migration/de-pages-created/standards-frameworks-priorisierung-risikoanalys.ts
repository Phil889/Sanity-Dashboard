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
    console.log('Creating Standards Frameworks Priorisierung Risikoanalyse page...')

    const standardsFrameworksPriorisierungRisikoanalyseData = {
      _type: 'servicePage',
      _id: 'standards-frameworks-priorisierung-risikoanalys',
      title: 'Standards & Frameworks Priorisierung & Risikoanalyse',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/standards-frameworks-cis-controls/standards-frameworks-priorisierung-risikoanalys'
      },
      parent: {
        _type: 'reference',
        _ref: 'standards-frameworks-cis-controls'
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
        title: 'Standards & Frameworks Priorisierung & Risikoanalyse | ADVISORI',
        description: 'Professionelle Priorisierung und Risikoanalyse für Standards & Frameworks. Optimieren Sie Ihre Compliance-Strategie mit datengetriebenen Ansätzen und strategischer Risikobewertung.',
        keywords: 'Standards Priorisierung, Risikoanalyse, Framework Assessment, Compliance Risk Management, Regulatory Prioritization, Risk Assessment'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Standards & Frameworks Priorisierung & Risikoanalyse'
        },
        tagline: 'Strategische Priorisierung und systematische Risikoanalyse für optimale Compliance-Effizienz',
        heading: 'Standards & Frameworks Priorisierung & Risikoanalyse',
        description: 'Entwickeln Sie eine datengetriebene Strategie zur Priorisierung von Standards und Frameworks basierend auf umfassender Risikoanalyse. Wir unterstützen Sie bei der optimalen Allokation von Ressourcen und der strategischen Ausrichtung Ihrer Compliance-Aktivitäten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Datengetriebene Priorisierung von Standards basierend auf Geschäftsrisiken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Systematische Risikoanalyse und -bewertung für Framework-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Optimale Ressourcenallokation durch strategische Compliance-Planung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Überwachung und Anpassung der Priorisierungsstrategie'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Standards & Frameworks Priorisierung & Risikoanalyse',
        description: 'In der komplexen Landschaft regulatorischer Anforderungen ist eine strategische Herangehensweise an die Priorisierung von Standards und Frameworks entscheidend. Unsere systematische Risikoanalyse und Priorisierungsmethodik ermöglicht es Ihnen, Compliance-Ressourcen optimal einzusetzen und die größten Risiken zuerst anzugehen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Analyse der regulatorischen Landschaft und Geschäftsrisiken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung einer risikobasierten Priorisierungsmatrix für Standards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Bewertung von Implementierungskosten und -nutzen verschiedener Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Erstellung strategischer Roadmaps für die gestaffelte Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Anpassung der Priorisierungsstrategie'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine effektive Priorisierung beginnt mit der klaren Verknüpfung von Compliance-Anforderungen mit Geschäftszielen. Nur durch diese strategische Ausrichtung können Sie sicherstellen, dass Ihre Investitionen in Standards und Frameworks den maximalen Geschäftswert generieren.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in Risk Assessment und strategischer Compliance-Planung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden zur quantitativen und qualitativen Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Kenntnis verschiedener Standards und Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praktische Erfahrung in der Implementierung priorisierter Compliance-Strategien'
            }
          ]
        },
        additionalInfo: 'Studien zeigen, dass Unternehmen mit einer strukturierten Priorisierungsstrategie ihre Compliance-Kosten um bis zu 40% reduzieren können, während sie gleichzeitig eine höhere Wirksamkeit ihrer Kontrollmaßnahmen erreichen.',
        serviceDescription: 'Unser umfassendes Leistungsspektrum zur Priorisierung und Risikoanalyse von Standards und Frameworks hilft Ihnen dabei, fundierte Entscheidungen über Ihre Compliance-Investitionen zu treffen und maximalen Geschäftswert zu generieren.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Risikoanalyse und -bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung von Priorisierungsmatrizen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Kosten-Nutzen-Analyse verschiedener Standards'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Erstellung strategischer Implementierungs-Roadmaps'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliches Monitoring und Anpassung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln eine maßgeschneiderte Priorisierungs- und Risikoanalysestrategie, die auf Ihre spezifischen Geschäftsanforderungen und regulatorischen Verpflichtungen zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer aktuellen Compliance-Landschaft'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Identifikation und Bewertung relevanter Standards und Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Quantitative und qualitative Risikoanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung einer risikobasierten Priorisierungsmatrix'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Erstellung strategischer Umsetzungsroadmaps'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns dabei geholfen, unsere Compliance-Strategie völlig neu zu durchdenken. Durch ihre systematische Priorisierung und Risikoanalyse konnten wir unsere Ressourcen viel effektiver einsetzen und dabei gleichzeitig unser Risikoprofil erheblich verbessern.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Risikoanalyse',
          description: 'Comprehensive assessment of regulatory risks and business impact for informed prioritization decisions.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Quantitative Risikobewertung mit statistischen Methoden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Qualitative Analyse von Compliance-Auswirkungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Bewertung regulatorischer Trends und Entwicklungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration von Geschäfts- und Compliance-Risiken'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Priorisierungsmatrix-Entwicklung',
          description: 'Creation of data-driven prioritization frameworks for optimal resource allocation in standards implementation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Multi-Kriterien-Bewertungsmodelle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Gewichtung nach Geschäftskritikalität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Kosten-Nutzen-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Stakeholder-Alignment und Governance-Integration'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(standardsFrameworksPriorisierungRisikoanalyseData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Standards Frameworks Priorisierung Risikoanalyse page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
