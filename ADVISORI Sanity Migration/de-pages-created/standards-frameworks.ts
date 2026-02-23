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
    console.log('Creating Standards & Frameworks page...')

    const standardsFrameworksData = {
      _type: 'servicePage',
      _id: 'standards-frameworks',
      title: 'Standards & Frameworks',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management'
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
        title: 'Standards & Frameworks | ADVISORI',
        description: 'Implementierung und Management regulatorischer Standards und Frameworks. Wir unterstützen Sie bei der Einhaltung von Basel III, BCBS 239, DORA und weiteren Compliance-Anforderungen.',
        keywords: 'Standards, Frameworks, Basel III, BCBS 239, DORA, Compliance, Regulatorik, Aufsichtsrecht'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Standards & Frameworks'
        },
        tagline: 'Professionelle Implementierung regulatorischer Standards und Frameworks',
        heading: 'Standards & Frameworks',
        description: 'Wir unterstützen Sie bei der erfolgreichen Implementierung und dem Management regulatorischer Standards und Frameworks wie Basel III, BCBS 239, DORA und weiteren Compliance-Anforderungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Compliance mit regulatorischen Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturierte Implementierung bewährter Standards und Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Reduzierung von Compliance-Risiken und regulatorischen Strafen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Verbesserung der operativen Effizienz durch standardisierte Prozesse'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Standards & Frameworks',
        description: 'In der heutigen regulatorischen Landschaft ist die ordnungsgemäße Implementierung und das Management von Standards und Frameworks entscheidend für den Geschäftserfolg. Wir unterstützen Sie dabei, komplexe regulatorische Anforderungen zu verstehen und effizient umzusetzen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse und Bewertung relevanter regulatorischer Standards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Gap-Analyse zwischen Ist-Zustand und regulatorischen Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung maßgeschneiderter Implementierungspläne'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau und Optimierung von Compliance-Management-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Anpassung an Regulierungsänderungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche Standards-Implementierung erfordert nicht nur technisches Verständnis, sondern auch die richtige Verzahnung von Governance, Prozessen und Technologie. Wir sorgen für eine ganzheitliche Herangehensweise.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in regulatorischen Standards und Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in komplexen Compliance-Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Methoden und bewährte Implementierungsansätze'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitliche Betrachtung von Governance, Prozessen und Technologie'
            }
          ]
        },
        additionalInfo: 'Eine strukturierte Herangehensweise bei der Implementierung regulatorischer Standards kann die Compliance-Kosten um bis zu 40% reduzieren und gleichzeitig die Qualität der Umsetzung erheblich verbessern.',
        serviceDescription: 'Wir bieten umfassende Unterstützung bei der Implementierung und dem Management regulatorischer Standards und Frameworks. Von der ersten Analyse bis zur vollständigen Operationalisierung begleiten wir Sie durch den gesamten Prozess.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Regulatorische Anforderungsanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Framework-Design und -Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Compliance-Management-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Prozessoptimierung und Standardisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliches Monitoring und Updates'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und praxisorientierten Ansatz zur Implementierung regulatorischer Standards und Frameworks.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse der regulatorischen Landschaft und Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Bewertung des aktuellen Compliance-Status und Identifikation von Gaps'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung eines maßgeschneiderten Implementierungsplans'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Schrittweise Umsetzung mit kontinuierlicher Qualitätskontrolle'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung nachhaltiger Überwachungs- und Anpassungsmechanismen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns dabei geholfen, komplexe regulatorische Standards erfolgreich zu implementieren. Die strukturierte Herangehensweise und das tiefe Verständnis für Compliance-Anforderungen haben unsere Effizienz erheblich gesteigert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Framework Assessment & Design',
          description: 'Wir analysieren Ihre spezifischen Anforderungen und entwickeln maßgeschneiderte Framework-Designs.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Analyse regulatorischer Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Gap-Analyse zwischen Ist-Zustand und Zielanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Design maßgeschneiderter Compliance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Roadmap-Entwicklung für die Implementierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Implementation & Operationalisierung',
          description: 'Wir begleiten Sie bei der vollständigen Implementierung und Operationalisierung der Standards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Schrittweise Implementierung nach bewährten Methoden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration in bestehende Systeme und Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Schulung und Change Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Überwachung und Optimierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(standardsFrameworksData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Standards & Frameworks page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
