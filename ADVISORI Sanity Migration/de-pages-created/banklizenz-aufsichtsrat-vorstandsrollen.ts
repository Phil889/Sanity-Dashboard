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
    console.log('Creating Banklizenz Aufsichtsrat & Vorstandsrollen page...')

    const banklizenzAufsichtsratVorstandsrollenData = {
      _type: 'servicePage',
      _id: 'banklizenz-aufsichtsrat-vorstandsrollen',
      title: 'Banklizenz Aufsichtsrat & Vorstandsrollen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/banklizenz-beantragen/banklizenz-governance-organisationsstruktur/banklizenz-aufsichtsrat-vorstandsrollen/'
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
        title: 'Banklizenz Aufsichtsrat & Vorstandsrollen | ADVISORI',
        description: 'Professionelle Besetzung und Strukturierung von Aufsichtsrat und Vorstand für erfolgreiche Banklizenzierung. Fit & Proper Assessments und Governance-Excellence nach BaFin-Standards.',
        keywords: 'Banklizenz Aufsichtsrat, Vorstand Banking, Fit Proper Assessment, BaFin Governance, Banking Board, Geschäftsleitung Bank, MaRisk Führung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Banklizenz Aufsichtsrat & Vorstandsrollen'
        },
        tagline: 'Führungsexzellenz für Ihre Banklizenzierung',
        heading: 'Banklizenz Aufsichtsrat & Vorstandsrollen',
        description: 'Die Qualität von Aufsichtsrat und Vorstand ist entscheidend für den Lizenzierungserfolg. Wir unterstützen Sie bei der strategischen Besetzung, Fit & Proper Bewertung und optimalen Strukturierung Ihrer Führungsgremien.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'BaFin-konforme Fit & Proper Assessments und Kandidatenauswahl'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategische Besetzung von Schlüsselpositionen mit Banking-Expertise'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Optimierte Board-Strukturen und effektive Governance-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Compliance-integrierte Rollen- und Verantwortungsverteilung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Banklizenz Aufsichtsrat & Vorstandsrollen',
        description: 'Die BaFin prüft intensiv die fachliche Eignung, Zuverlässigkeit und Governance-Kompetenz der Führungskräfte. Eine strategische Besetzung von Aufsichtsrat und Vorstand mit qualifizierten Kandidaten ist fundamental für den Lizenzierungserfolg.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Fit & Proper Assessments und Kandidatenbewertung nach BaFin-Kriterien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Strategische Besetzung von Vorstandspositionen und Schlüsselfunktionen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Aufsichtsratsstrukturen und Board-Effectiveness-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Governance-Prozesse und Entscheidungsstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Compliance-Integration und Risikomanagement-Verantwortlichkeiten'
          }
        ],
        alert: {
          title: 'Kritischer Erfolgsfaktor',
          content: 'Die BaFin lehnt Lizenzanträge ab, wenn Zweifel an der fachlichen Eignung oder Zuverlässigkeit der Führungskräfte bestehen. Eine professionelle Kandidatenauswahl und -vorbereitung ist essentiell für den Lizenzierungserfolg.'
        },
        whyUs: {
          title: 'Unsere Board-Excellence-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnisse der BaFin Fit & Proper Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassendes Netzwerk qualifizierter Banking-Führungskräfte'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Board-Strukturen aus erfolgreichen Lizenzierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von Kandidatensuche bis Board-Effectiveness'
            }
          ]
        },
        additionalInfo: 'Eine strategisch besetzte und professionell strukturierte Führungsebene schafft nicht nur regulatorische Compliance, sondern auch die Grundlage für nachhaltigen Geschäftserfolg und Stakeholder-Vertrauen.',
        serviceDescription: 'Wir begleiten Sie von der strategischen Planung der Führungsstruktur über die Kandidatenidentifikation und -bewertung bis hin zur optimalen Positionierung gegenüber der BaFin. Unser Ansatz verbindet regulatorische Exzellenz mit Business-orientierter Führungskompetenz.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Fit & Proper Assessments und BaFin-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Executive Search und Kandidatenbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Board-Strukturierung und Governance-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Rollen- und Verantwortlichkeitsdefinition'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'BaFin-Präsentation und Regulatory Interface'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Board-Excellence-Ansatz',
        description: 'Wir entwickeln und besetzen Ihre Führungsstrukturen systematisch und strategisch, basierend auf BaFin-Requirements und Best-Practice-Governance-Standards.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Anforderungsanalyse und strategische Führungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Kandidatenidentifikation und Fit & Proper Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Board-Strukturierung und Governance-Prozess-Design'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'BaFin-Dokumentation und Regulatory Preparation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Board-Effectiveness-Optimierung und Ongoing Support'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns nicht nur bei der Identifikation erstklassiger Führungskräfte geholfen, sondern auch eine Board-Struktur entwickelt, die sowohl BaFin-Standards übertrifft als auch operative Exzellenz ermöglicht. Ihre Expertise in Fit & Proper Assessments war entscheidend für unseren Lizenzierungserfolg.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Fit & Proper Assessments & Executive Search',
          description: 'Umfassende Bewertung und Identifikation qualifizierter Führungskräfte nach BaFin-Kriterien mit strategischem Fokus auf Banking-Excellence.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'BaFin-konforme Fit & Proper Bewertungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Executive Search und Kandidatenidentifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Fachliche und persönliche Eignungsprüfung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Regulatory Documentation und BaFin-Preparation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Board-Strukturierung & Governance-Excellence',
          description: 'Strategisches Design von Aufsichtsrats- und Vorstandsstrukturen mit optimierten Governance-Prozessen und effektiver Entscheidungsfindung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Board-Composition und Ausschussstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Rollen- und Verantwortlichkeitsdefinition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Governance-Prozesse und Decision-Making-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Board-Effectiveness und Performance-Monitoring'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(banklizenzAufsichtsratVorstandsrollenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Banklizenz Aufsichtsrat & Vorstandsrollen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
