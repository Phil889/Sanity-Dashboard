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
    console.log('Creating Banklizenz IT-Meldewesen Setup page...')

    const banklizenzItMeldewesenSetupData = {
      _type: 'servicePage',
      _id: 'banklizenz-it-meldewesen-setup',
      title: 'Banklizenz IT-Meldewesen Setup',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/banklizenz-beantragen/banklizenz-it-meldewesen-setup'
      },
      parent: {
        _type: 'reference',
        _ref: 'banklizenz-beantragen'
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
        title: 'Banklizenz IT-Meldewesen Setup | ADVISORI',
        description: 'Professioneller Aufbau und Implementierung von IT-Meldewesen-Systemen für Banklizenzierungen. Compliance-konforme Reporting-Infrastrukturen nach regulatorischen Anforderungen.',
        keywords: 'IT-Meldewesen, Banking Reporting, Regulatorische IT-Systeme, BaFin Meldewesen, Compliance IT, Banking Technology, Aufsichtsmeldungen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Banklizenz IT-Meldewesen Setup'
        },
        tagline: 'Robuste IT-Infrastrukturen für regulatorisches Reporting',
        heading: 'Banklizenz IT-Meldewesen Setup',
        description: 'Der Aufbau eines compliance-konformen IT-Meldewesens ist kritisch für jede Banklizenzierung. Wir entwickeln und implementieren maßgeschneiderte Reporting-Systeme, die höchste regulatorische Standards erfüllen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Compliance-konforme IT-Architektur für alle Aufsichtsmeldungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Datenvalidierung und Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Skalierbare Systeme für wachsende Meldeanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Integrierte Prüfpfade und Audit-Funktionalitäten'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'IT-Meldewesen Setup für Banklizenzierung',
        description: 'Ein professionelles IT-Meldewesen ist das Rückgrat jeder erfolgreichen Banklizenzierung. Wir konzipieren und implementieren Reporting-Systeme, die nicht nur aktuelle regulatorische Anforderungen erfüllen, sondern auch für zukünftige Entwicklungen gerüstet sind.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse der regulatorischen Meldeanforderungen und IT-Spezifikationen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Design und Architektur der IT-Meldewesen-Infrastruktur'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung automatisierter Reporting-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Testing, Validierung und Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Go-Live-Unterstützung und kontinuierliche Optimierung'
          }
        ],
        alert: {
          title: 'Technologie-Expertise',
          content: 'Moderne IT-Meldewesen erfordern nicht nur regulatorisches Verständnis, sondern auch tiefgreifende technische Expertise. Unser interdisziplinäres Team vereint Banking-Know-how mit cutting-edge IT-Architekturen für optimale Ergebnisse.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in regulatorischen IT-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Technologie-Stacks und Architektur-Patterns'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Agile Entwicklungsmethoden mit kontinuierlicher Validierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Langfristige Partnerschaft für System-Evolution'
            }
          ]
        },
        additionalInfo: 'Ein gut konzipiertes IT-Meldewesen ist mehr als nur Compliance - es ist ein strategischer Vorteil, der operative Effizienz steigert und Entscheidungsfindung auf allen Ebenen unterstützt.',
        serviceDescription: 'Wir bieten end-to-end IT-Meldewesen-Lösungen, von der initialen Bedarfsanalyse über die technische Implementierung bis hin zur langfristigen Systembetreuung. Unser Fokus liegt auf robusten, skalierbaren und zukunftssicheren Architekturen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Regulatorische IT-Anforderungsanalyse und Systemdesign'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Datenmodellierung und ETL-Prozess-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Reporting-Engine und Dashboard-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Automatisierte Validierung und Qualitätskontrolle'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'System-Integration und Deployment-Unterstützung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten, iterativen Ansatz zur Entwicklung Ihres IT-Meldewesens, der regulatorische Compliance mit technischer Exzellenz verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse der Meldeanforderungen und technischen Rahmenbedingungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Architektur-Design und Technologie-Stack-Definition'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Agile Entwicklung mit kontinuierlicher Stakeholder-Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Umfassendes Testing und Performance-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Controlled Rollout und Post-Implementation-Support'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Das von ADVISORI entwickelte IT-Meldewesen hat unsere regulatorischen Reporting-Prozesse revolutioniert. Die robuste Architektur und automatisierte Validierung haben nicht nur Compliance-Sicherheit geschaffen, sondern auch unsere operative Effizienz erheblich gesteigert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Systemarchitektur und Design',
          description: 'Wir entwickeln skalierbare IT-Architekturen, die alle regulatorischen Meldeanforderungen abdecken und für zukünftige Erweiterungen konzipiert sind.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Modulare Systemarchitektur für maximale Flexibilität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Cloud-native Designs für Skalierbarkeit und Verfügbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integrierte Sicherheits- und Datenschutz-Features'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Compliance-by-Design-Prinzipien in der Architektur'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Implementierung und Integration',
          description: 'Wir setzen Ihre IT-Meldewesen-Systeme professionell um und integrieren sie nahtlos in Ihre bestehende IT-Landschaft.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Agile Entwicklung mit regelmäßigen Releases'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Nahtlose Integration in bestehende Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Umfassende Testing- und Validierungs-Pipelines'
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
    transaction.createOrReplace(banklizenzItMeldewesenSetupData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Banklizenz IT-Meldewesen Setup page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
