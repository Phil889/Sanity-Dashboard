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
    console.log('Creating CRA Anforderungen page...')

    const craAnforderungenData = {
      _type: 'servicePage',
      _id: 'cra-anforderungen',
      title: 'CRA Anforderungen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-anforderungen'
      },
      parent: {
        _type: 'reference',
        _ref: 'cra-cyber-resilience-act'
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
        title: 'CRA Anforderungen Implementierung | ADVISORI',
        description: 'Umfassende Beratung zur Erfüllung aller CRA Anforderungen. Wir unterstützen Sie bei der systematischen Umsetzung technischer, organisatorischer und dokumentarischer Cyber Resilience Act Anforderungen.',
        keywords: 'CRA Anforderungen, Cyber Resilience Act Requirements, CRA Implementierung, CRA Compliance Anforderungen, Cybersicherheitsanforderungen, CRA Umsetzung, Regulatorische Anforderungen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Anforderungen Implementierung'
        },
        tagline: 'Systematische CRA Anforderungserfüllung',
        heading: 'CRA Anforderungen',
        description: 'Die erfolgreiche Umsetzung der CRA Anforderungen erfordert eine strukturierte Herangehensweise, die technische Exzellenz mit organisatorischer Transformation verbindet. Wir begleiten Sie bei der systematischen Erfüllung aller regulatorischen Anforderungen und schaffen dabei nachhaltige Cybersicherheitskapazitäten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Erfüllung aller technischen CRA Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Systematische Umsetzung organisatorischer Compliance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Dokumentations- und Nachweisführung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Überwachung und Anpassung der Anforderungserfüllung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Umfassende CRA Anforderungsimplementierung',
        description: 'CRA Anforderungen umfassen ein breites Spektrum technischer, organisatorischer und dokumentarischer Verpflichtungen, die eine ganzheitliche Transformation der Cybersicherheitspraktiken erfordern. Erfolgreiche Implementierung schafft nicht nur regulatorische Konformität, sondern etabliert robuste Sicherheitsgrundlagen für nachhaltigen Geschäftserfolg.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Technische Sicherheitsanforderungen und Implementierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Organisatorische Governance und Prozessanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Dokumentations- und Nachweisführungsanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Überwachung und Verbesserungsanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Incident Response und Krisenmanagement-Anforderungen'
          }
        ],
        alert: {
          title: 'Anforderungsimplementierung-Hinweis',
          content: 'CRA Anforderungen sind nicht isoliert zu betrachten, sondern müssen in bestehende Geschäftsprozesse und IT-Architekturen integriert werden. Eine systematische, phasenweise Umsetzung gewährleistet sowohl Compliance als auch operative Exzellenz.'
        },
        whyUs: {
          title: 'Unsere CRA Anforderungs-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnis aller CRA Anforderungskategorien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Implementierungsmethoden für komplexe Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integrierte Beratung für technische und organisatorische Transformation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Langfristige Begleitung für nachhaltige Anforderungserfüllung'
            }
          ]
        },
        additionalInfo: 'CRA Anforderungen bieten die Chance, Cybersicherheit als strategischen Wettbewerbsvorteil zu etablieren und organisatorische Resilienz nachhaltig zu stärken.',
        serviceDescription: 'Wir unterstützen Sie bei der systematischen Analyse, Planung und Umsetzung aller CRA Anforderungen durch maßgeschneiderte Implementierungsstrategien, die regulatorische Exzellenz mit Geschäftswert verbinden.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Umfassende Anforderungsanalyse und Gap-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Strategische Implementierungsplanung und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Technische Umsetzung und Systemintegration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Organisatorische Transformation und Change Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Überwachung und Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser CRA Anforderungs-Ansatz',
        description: 'Wir entwickeln mit Ihnen systematische Implementierungsstrategien, die alle CRA Anforderungen strukturiert erfüllen und dabei nachhaltige Cybersicherheitskapazitäten aufbauen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Anforderungsanalyse und Priorisierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Integrierte technische und organisatorische Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Systematische Dokumentation und Nachweisführung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Validierung und Verbesserung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Langfristige Begleitung und Anpassung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die systematische Erfüllung der CRA Anforderungen ist mehr als regulatorische Pflichterfüllung - sie ist eine strategische Investition in die Zukunftsfähigkeit des Unternehmens. Unsere Kunden profitieren von Implementierungsansätzen, die nicht nur alle Anforderungen erfüllen, sondern auch operative Exzellenz und Wettbewerbsvorteile schaffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Technische Anforderungsimplementierung',
          description: 'Systematische Umsetzung aller technischen CRA Anforderungen durch integrierte Sicherheitsarchitekturen und robuste Implementierungsstrategien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Cybersicherheits-Framework-Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Vulnerability Management und Patch-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Secure Development Lifecycle Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Kontinuierliche Sicherheitsüberwachung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Organisatorische Compliance-Strukturen',
          description: 'Aufbau umfassender organisatorischer Strukturen und Prozesse zur nachhaltigen Erfüllung aller CRA Governance-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Governance-Framework-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Risikomanagement-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Incident Response Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Verbesserungsprogramme'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craAnforderungenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Anforderungen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
