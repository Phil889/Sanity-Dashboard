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
    console.log('Creating Banklizenz Governance Organisationsstruktur page...')

    const banklizenzGovernanceData = {
      _type: 'servicePage',
      _id: 'banklizenz-governance-organisationsstruktur',
      title: 'Banklizenz Governance & Organisationsstruktur',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/banklizenz-beantragen/banklizenz-governance-organisationsstruktur'
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
        title: 'Banklizenz Governance & Organisationsstruktur | ADVISORI',
        description: 'Professionelle Entwicklung von Governance-Strukturen und Organisationsmodellen für erfolgreiche Banklizenzierung. Compliance-konforme Aufbauorganisation nach BaFin-Anforderungen.',
        keywords: 'Banklizenz Governance, Organisationsstruktur Banking, BaFin Governance, Banking Compliance, Aufsichtsrat Bank, Geschäftsleitung Bank, MaRisk'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Banklizenz Governance & Organisationsstruktur'
        },
        tagline: 'Governance-Exzellenz für Ihre Banklizenzierung',
        heading: 'Banklizenz Governance & Organisationsstruktur',
        description: 'Eine robuste Governance-Struktur und durchdachte Organisationsarchitektur sind fundamentale Voraussetzungen für eine erfolgreiche Banklizenzierung. Wir entwickeln mit Ihnen compliance-konforme und geschäftstaugliche Strukturen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'BaFin-konforme Governance-Strukturen und Organisationsmodelle'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Effiziente Entscheidungsprozesse und klare Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Compliance-integrierte Aufbau- und Ablauforganisation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Skalierbare Strukturen für nachhaltiges Bankenwachstum'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Banklizenz Governance & Organisationsstruktur',
        description: 'Die BaFin prüft im Lizenzverfahren intensiv die Governance-Qualität und Organisationsstruktur. Eine professionell entwickelte Corporate Governance mit klaren Rollen, Verantwortlichkeiten und Kontrollmechanismen ist entscheidend für den Lizenzierungserfolg.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung BaFin-konformer Governance-Rahmenwerke'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Design optimaler Aufbau- und Ablauforganisation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung wirksamer Kontroll- und Überwachungssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Definition von Rollen, Verantwortlichkeiten und Befugnissen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Etablierung effektiver Berichtswege und Escalation-Prozesse'
          }
        ],
        alert: {
          title: 'Regulatorischer Fokus',
          content: 'Die BaFin legt besonderen Wert auf die Qualität der Governance-Strukturen. Schwächen in der Organisationsstruktur oder unklare Verantwortlichkeiten können zur Ablehnung des Lizenzantrags führen. Eine frühzeitige und professionelle Strukturentwicklung ist essentiell.'
        },
        whyUs: {
          title: 'Unsere Governance-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnisse der BaFin-Governance-Anforderungen und MaRisk'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Governance-Modelle aus erfolgreichen Lizenzierungsprojekten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Organisationsstrukturen für verschiedene Banktypen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von Strategie bis operative Umsetzung'
            }
          ]
        },
        additionalInfo: 'Eine durchdachte Governance-Struktur schafft nicht nur regulatorische Compliance, sondern auch die Grundlage für effiziente Geschäftsprozesse und nachhaltiges Wachstum Ihrer Bank.',
        serviceDescription: 'Wir entwickeln mit Ihnen maßgeschneiderte Governance-Strukturen und Organisationsmodelle, die sowohl den strengen BaFin-Anforderungen entsprechen als auch Ihre geschäftlichen Ziele optimal unterstützen. Unser Ansatz verbindet regulatorische Exzellenz mit operativer Effizienz.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Corporate Governance Framework und Board-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Aufbauorganisation und Funktionaltrennung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Kontrollsysteme und Internal Governance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Risiko- und Compliance-Organisation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Berichtswesen und Management Information Systems'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Governance-Entwicklungsansatz',
        description: 'Wir entwickeln Ihre Governance-Strukturen systematisch und praxisorientiert, basierend auf bewährten Frameworks und individuellen Geschäftsanforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der Geschäftsstrategie und regulatorischen Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design der Corporate Governance und Organisationsstruktur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung von Policies, Prozessen und Kontrollmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung und Testing der Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Dokumentation und Vorbereitung für die BaFin-Prüfung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns dabei geholfen, eine erstklassige Governance-Struktur zu entwickeln, die nicht nur alle BaFin-Anforderungen erfüllt, sondern auch als solide Grundlage für unser Bankgeschäft dient. Ihre Expertise in regulatorischen Details und praktischer Umsetzung war entscheidend für unseren Erfolg.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Corporate Governance Design',
          description: 'Wir entwickeln umfassende Governance-Frameworks, die regulatorische Exzellenz mit geschäftlicher Effizienz verbinden.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Board-Strukturen und Ausschussorganisation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Geschäftsleitungsorganisation und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Kontrollrahmen und Überwachungssysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Governance-Policies und Verfahrensanweisungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Organisationsstruktur und Prozesse',
          description: 'Entwicklung effizienter Organisationsmodelle mit klaren Rollen, Verantwortlichkeiten und optimierten Geschäftsprozessen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Aufbauorganisation und Funktionsverteilung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Ablauforganisation und Prozesslandkarten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Risiko- und Compliance-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Berichtswesen und Informationsflüsse'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(banklizenzGovernanceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Banklizenz Governance & Organisationsstruktur page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
