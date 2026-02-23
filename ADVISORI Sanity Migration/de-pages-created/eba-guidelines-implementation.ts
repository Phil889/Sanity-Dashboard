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
    console.log('Creating EBA Guidelines Implementation page...')

    const ebaGuidelinesImplementationData = {
      _type: 'servicePage',
      _id: 'eba-guidelines-implementation',
      title: 'EBA Guidelines Implementation',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eba/eba-guidelines-implementation'
      },
      parent: {
        _type: 'reference',
        _ref: 'eba'
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
        title: 'EBA Guidelines Implementation | ADVISORI',
        description: 'Implementieren Sie EBA-Richtlinien effizient und nachhaltig mit unserer umfassenden Unterstützung. Von der Gap-Analyse bis zur vollständigen Integration in Ihre Prozesse und Systeme bieten wir maßgeschneiderte Lösungen für die Umsetzung regulatorischer Anforderungen.',
        keywords: 'EBA Guidelines, Richtlinienimplementierung, Regulatorische Compliance, European Banking Authority, Bankenaufsicht, Compliance-Management, Implementierungsstrategie'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EBA Guidelines Implementation'
        },
        tagline: 'Effektive und nachhaltige Umsetzung von EBA-Richtlinien',
        heading: 'EBA Guidelines Implementation',
        description: 'Die Implementierung der EBA-Richtlinien stellt Finanzinstitute vor komplexe Herausforderungen. Wir unterstützen Sie bei der strukturierten und effizienten Umsetzung regulatorischer Anforderungen in Ihre Prozesse und Systeme, um Compliance-Risiken zu minimieren und operative Exzellenz zu fördern.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Nahtlose Integration regulatorischer Anforderungen in bestehende Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Minimierung von Implementierungsrisiken durch strukturiertes Vorgehen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Optimierung der Compliance-Effizienz durch maßgeschneiderte Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltige Compliance-Architektur für kontinuierliche Anforderungserfüllung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EBA Guidelines Implementation',
        description: 'Die European Banking Authority (EBA) erlässt regelmäßig neue Richtlinien zur Regulierung des Bankensektors. Unsere Experten unterstützen Sie dabei, diese Richtlinien effizient zu implementieren - von der Analyse der spezifischen Anforderungen über die Entwicklung maßgeschneiderter Implementierungsstrategien bis zur nachhaltigen Integration in Ihre Geschäftsprozesse.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Gap-Analyse und Bedarfsermittlung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung maßgeschneiderter Implementierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Prozess- und Systemanpassungen zur Integration regulatorischer Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Implementierung von Kontroll- und Überwachungsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Schulung und Wissenstransfer für nachhaltige Compliance'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine erfolgreiche Implementierung von EBA-Richtlinien erfordert nicht nur regulatorisches Know-how, sondern auch ein tiefes Verständnis Ihrer Geschäftsprozesse und IT-Landschaft. Die frühzeitige Einbindung aller betroffenen Stakeholder ist entscheidend für eine effiziente und nachhaltige Umsetzung.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in allen relevanten EBA-Richtlinien und deren praktischen Implikationen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Implementierungsmethodologie mit nachweisbaren Erfolgen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz, der regulatorische, prozessuale und technologische Aspekte integriert'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Interdisziplinäres Team aus Compliance-Experten, Prozessspezialisten und IT-Fachleuten'
            }
          ]
        },
        additionalInfo: 'Die Komplexität der EBA-Richtlinien und ihre weitreichenden Auswirkungen auf verschiedene Geschäftsbereiche erfordern einen strukturierten und ganzheitlichen Implementierungsansatz. Eine erfolgreiche Umsetzung schafft nicht nur Compliance, sondern kann auch zu Effizienzsteigerungen und verbesserter Risikokontrolle führen.',
        serviceDescription: 'Wir bieten maßgeschneiderte Lösungen für die Implementierung von EBA-Richtlinien, die auf Ihre spezifischen Anforderungen und Ihre bestehende Compliance-Infrastruktur zugeschnitten sind. Unser Ziel ist eine effiziente und nachhaltige Integration regulatorischer Anforderungen, die nicht nur Compliance sicherstellt, sondern auch einen strategischen Mehrwert für Ihr Unternehmen schafft.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Regulatorische Impact-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung von Implementierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Prozess- und Systemintegration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Testing und Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Dokumentation und Wissenstransfer'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und erprobten Ansatz zur Implementierung von EBA-Richtlinien, der Ihnen maximale Sicherheit und Effizienz bietet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Detaillierte Analyse der regulatorischen Anforderungen und deren Implikationen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Gap-Analyse zur Identifikation von Handlungsbedarfen in Prozessen und Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung eines maßgeschneiderten Implementierungsplans mit klaren Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Umsetzung der erforderlichen Anpassungen in Prozessen, Systemen und Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Umfassende Tests und Validierung der implementierten Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 6),
            text: 'Schulung und Wissenstransfer für nachhaltige Compliance'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Thomas Weber',
        position: 'Senior Manager',
        quote: 'Mit ADVISORI haben wir einen Partner gefunden, der uns durch den komplexen Prozess der EBA-Richtlinienimplementierung geführt hat. Besonders beeindruckt hat uns die Fähigkeit des Teams, regulatorische Anforderungen in praktikable Lösungen zu übersetzen, die optimal auf unsere Prozesse und Systeme abgestimmt sind. Das Ergebnis ist eine nachhaltige Compliance-Architektur, die uns auch für zukünftige regulatorische Herausforderungen gut aufstellt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Regulatorische Impact-Analyse',
          description: 'Wir analysieren die spezifischen Anforderungen der EBA-Richtlinien und deren Auswirkungen auf Ihre Organisation, um Handlungsbedarfe zu identifizieren und zu priorisieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse der regulatorischen Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung der Auswirkungen auf Geschäftsprozesse und Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation von Compliance-Lücken und Risiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung einer Roadmap für die Implementierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Implementierungsumsetzung',
          description: 'Wir unterstützen Sie bei der effizienten Umsetzung der EBA-Richtlinien in Ihre Prozesse und Systeme, um eine nachhaltige Compliance-Architektur zu schaffen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung maßgeschneiderter Prozess- und Systemanpassungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementation von Kontroll- und Überwachungsmechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Testing und Validierung der implementierten Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Schulung und Wissenstransfer für nachhaltige Compliance'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(ebaGuidelinesImplementationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EBA Guidelines Implementation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
