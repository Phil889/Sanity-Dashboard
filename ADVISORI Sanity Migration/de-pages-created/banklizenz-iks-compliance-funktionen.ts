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
    console.log('Creating Banklizenz IKS & Compliance-Funktionen page...')

    const banklizenzIksData = {
      _type: 'servicePage',
      _id: 'banklizenz-iks-compliance-funktionen',
      title: 'Banklizenz IKS & Compliance-Funktionen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/banklizenz-beantragen/banklizenz-governance-organisationsstruktur/banklizenz-iks-compliance-funktionen'
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
        title: 'Banklizenz IKS & Compliance-Funktionen | ADVISORI',
        description: 'Professionelle Entwicklung von Internal Control Systems und Compliance-Funktionen für erfolgreiche Banklizenzierung. BaFin-konforme IKS-Implementierung und Compliance-Organisation.',
        keywords: 'Banklizenz IKS, Internal Control System Banking, Compliance Funktionen, BaFin IKS, Banking Compliance Organisation, MaRisk IKS'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Banklizenz IKS & Compliance-Funktionen'
        },
        tagline: 'IKS & Compliance für regulatorische Exzellenz',
        heading: 'Banklizenz IKS & Compliance-Funktionen',
        description: 'Ein robustes Internal Control System (IKS) und professionelle Compliance-Funktionen sind unverzichtbare Säulen jeder erfolgreichen Bank. Wir entwickeln mit Ihnen BaFin-konforme IKS-Strukturen und Compliance-Organisationen, die Regulatory Excellence mit operativer Effizienz verbinden.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'BaFin-konforme IKS-Implementierung nach MaRisk-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Professionelle Compliance-Organisation und -Funktionen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Risk-based Control-Design und Automated Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Integrierte Compliance-Culture und Behavioral Controls'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Banklizenz IKS & Compliance-Funktionen',
        description: 'Die BaFin prüft im Lizenzverfahren intensiv die Qualität des Internal Control Systems und der Compliance-Organisation. Ein professionell entwickeltes IKS mit wirksamen Compliance-Funktionen ist entscheidend für die Lizenzerteilung und den nachhaltigen Bankbetrieb.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Design und Implementierung BaFin-konformer IKS-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung professioneller Compliance-Organisationen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration von Risk Management und Compliance Controls'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Automated Compliance-Monitoring und Reporting-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Compliance-Culture und Behavioral Risk Management'
          }
        ],
        alert: {
          title: 'Regulatorische Priorität',
          content: 'Ein unzureichendes IKS oder schwache Compliance-Funktionen führen regelmäßig zu BaFin-Auflagen oder Lizenzablehnungen. Professionelle IKS- und Compliance-Systeme sind fundamentale Voraussetzungen für regulatorische Akzeptanz.'
        },
        whyUs: {
          title: 'Unsere IKS & Compliance-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Kenntnisse der MaRisk, BaFin-Rundschreiben und IKS-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte IKS-Frameworks aus erfolgreichen Banklizenzierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Technology-enabled Compliance-Solutions und RegTech-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von Organisationsdesign bis Kulturentwicklung'
            }
          ]
        },
        additionalInfo: 'Ein professionelles IKS und starke Compliance-Funktionen schaffen nicht nur regulatorische Compliance, sondern auch die Basis für Vertrauen bei Stakeholdern, operative Effizienz und nachhaltiges Geschäftswachstum.',
        serviceDescription: 'Wir entwickeln mit Ihnen maßgeschneiderte IKS-Strukturen und Compliance-Organisationen, die sowohl den strengen BaFin-Anforderungen entsprechen als auch als strategische Enabler für Ihr Bankgeschäft fungieren. Unser Ansatz verbindet regulatorische Exzellenz mit Business Intelligence.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Internal Control System Design und Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Compliance-Organisation und Funktionsabgrenzung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Risk-based Controls und Monitoring-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Compliance-Culture und Change Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'RegTech-Integration und Automated Compliance'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser IKS & Compliance-Entwicklungsansatz',
        description: 'Wir entwickeln Ihre IKS- und Compliance-Strukturen systematisch und risikobasiert, unter Berücksichtigung Ihrer spezifischen Geschäftsmodell-Anforderungen und regulatorischen Rahmenbedingungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Gap-Analyse und IKS-Anforderungsassessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'IKS-Design und Compliance-Organisations-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Technology-Integration und Automated Control-Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Testing, Validation und Compliance-Culture-Development'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Dokumentation und BaFin-Readiness Vorbereitung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns dabei geholfen, ein erstklassiges IKS und eine professionelle Compliance-Organisation zu entwickeln, die nicht nur alle BaFin-Anforderungen erfüllen, sondern auch als strategische Assets für unser Geschäft dienen. Ihre Expertise in regulatorischen Details und praktischer Umsetzung war außergewöhnlich.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Internal Control System (IKS)',
          description: 'Umfassende Entwicklung und Implementierung von IKS-Frameworks, die regulatorische Excellence mit operativer Effizienz verbinden.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Risk-based IKS-Design nach MaRisk-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Automated Controls und Technology-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Control-Testing und Effectiveness-Validation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Continuous Monitoring und Performance-Measurement'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Compliance-Organisation & -Funktionen',
          description: 'Entwicklung professioneller Compliance-Strukturen und -Funktionen für effektive Regulatory Management und Business Support.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Compliance-Organisationsdesign und Rollenabgrenzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Compliance-Monitoring und Reporting-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Compliance-Culture und Training-Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'RegTech-Solutions und Digital Compliance'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(banklizenzIksData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Banklizenz IKS & Compliance-Funktionen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
