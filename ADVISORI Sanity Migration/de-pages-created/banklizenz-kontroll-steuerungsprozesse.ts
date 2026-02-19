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
    console.log('Creating Banklizenz Kontroll- & Steuerungsprozesse page...')

    const banklizenzKontrollData = {
      _type: 'servicePage',
      _id: 'banklizenz-kontroll-steuerungsprozesse',
      title: 'Banklizenz Kontroll- & Steuerungsprozesse',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/banklizenz-beantragen/banklizenz-governance-organisationsstruktur/banklizenz-kontroll-steuerungsprozesse'
      },
      parent: {
        _type: 'reference',
        _ref: 'banklizenz-governance-organisationsstruktur'
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
        title: 'Banklizenz Kontroll- & Steuerungsprozesse | ADVISORI',
        description: 'Professionelle Entwicklung von Kontroll- und Steuerungsprozessen für erfolgreiche Banklizenzierung. BaFin-konforme Internal Controls und Risk Management Systeme.',
        keywords: 'Banklizenz Kontrollprozesse, Internal Controls Banking, BaFin Steuerungsprozesse, Banking Risk Controls, MaRisk Compliance, Bankenaufsicht Kontrollen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Banklizenz Kontroll- & Steuerungsprozesse'
        },
        tagline: 'Kontrollen für nachhaltige Banking-Exzellenz',
        heading: 'Banklizenz Kontroll- & Steuerungsprozesse',
        description: 'Effektive Kontroll- und Steuerungsprozesse sind das Rückgrat jeder erfolgreichen Bank. Wir entwickeln mit Ihnen robuste Internal Controls und Management-Systeme, die nicht nur BaFin-Anforderungen erfüllen, sondern auch operative Exzellenz fördern.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'BaFin-konforme Internal Control Systeme und Risk Management'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automated Controls und Real-time Monitoring Capabilities'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Three Lines of Defense Implementation und Oversight'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Prozessoptimierung und Control Effectiveness'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Banklizenz Kontroll- & Steuerungsprozesse',
        description: 'Die BaFin verlangt im Lizenzverfahren den Nachweis wirksamer Kontroll- und Steuerungsprozesse. Diese müssen nicht nur regulatorische Standards erfüllen, sondern auch als Grundlage für effizientes Risikomanagement und operative Kontrolle dienen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Design und Implementierung von Internal Control Systems'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung von Risk Control und Monitoring Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Three Lines of Defense Modell und Oversight-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Management Information Systems und Reporting Controls'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Compliance Monitoring und Control Testing Prozesse'
          }
        ],
        alert: {
          title: 'Kritischer Erfolgsfaktor',
          content: 'Unzureichende Kontroll- und Steuerungsprozesse sind einer der häufigsten Gründe für BaFin-Auflagen oder Lizenzablehnungen. Professionell entwickelte Internal Controls sind essentiell für regulatorische Akzeptanz und operative Stabilität.'
        },
        whyUs: {
          title: 'Unsere Control-Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in MaRisk, ICAAP und BaFin-Kontrollerwartungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Control Frameworks aus erfolgreichen Banklizenzierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Technology-enabled Controls und Automated Monitoring Solutions'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'End-to-End Ansatz von Design bis Testing und Optimization'
            }
          ]
        },
        additionalInfo: 'Professionelle Kontroll- und Steuerungsprozesse schaffen nicht nur regulatorische Compliance, sondern auch die Grundlage für operative Effizienz, Risikominimierung und nachhaltiges Geschäftswachstum.',
        serviceDescription: 'Wir entwickeln mit Ihnen umfassende Kontroll- und Steuerungssysteme, die sowohl den strengen BaFin-Anforderungen entsprechen als auch als strategische Enabler für Ihr Bankgeschäft fungieren. Unser Ansatz verbindet regulatorische Exzellenz mit operativer Effizienz.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Internal Control System Design und Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Risk Control Framework und Monitoring Systems'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Three Lines of Defense Struktur und Governance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Management Information und Reporting Controls'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Control Testing und Continuous Monitoring Prozesse'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Control-Design-Ansatz',
        description: 'Wir entwickeln Ihre Kontroll- und Steuerungsprozesse systematisch und risikobasiert, unter Berücksichtigung Ihrer spezifischen Geschäftsmodell-Anforderungen und regulatorischen Rahmenbedingungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Risk Assessment und Control-Bedarf-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Control Design und Three Lines of Defense Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Technology Integration und Automated Control Development'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Control Testing, Validation und Effectiveness Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Dokumentation und BaFin-Readiness Preparation'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns dabei unterstützt, ein erstklassiges Kontroll- und Steuerungssystem zu entwickeln, das nicht nur alle BaFin-Anforderungen übertrifft, sondern auch als strategisches Instrument für unser Risikomanagement und unsere operative Steuerung dient. Ihre methodische Herangehensweise und technische Expertise waren entscheidend.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Internal Control Systems',
          description: 'Umfassende Entwicklung und Implementierung von Internal Control Frameworks, die regulatorische Excellence mit operativer Effizienz verbinden.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Risk-based Control Design und Prioritization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Automated Controls und Technology Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Control Documentation und Process Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Control Testing und Effectiveness Validation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Management & Oversight Systems',
          description: 'Entwicklung strategischer Steuerungs- und Überwachungssysteme für effektive Unternehmensführung und regulatorische Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Management Information Systems und KPI Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Three Lines of Defense Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Board und Committee Oversight Structures'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Continuous Monitoring und Real-time Controls'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(banklizenzKontrollData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Banklizenz Kontroll- & Steuerungsprozesse page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
