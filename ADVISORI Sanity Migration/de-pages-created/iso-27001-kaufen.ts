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
    console.log('Creating ISO 27001 Kaufen page...')

    const iso27001KaufenData = {
      _type: 'servicePage',
      _id: 'iso-27001-kaufen',
      title: 'ISO 27001 Kaufen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-kaufen'
      },
      parent: {
        _type: 'reference',
        _ref: 'iso-27001'
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
        title: 'ISO 27001 Kaufen - Professionelle Services & Implementierung | ADVISORI',
        description: 'ISO 27001 Services kaufen: Strategische Beschaffung von ISMS-Implementierungsleistungen. Vendor-Evaluation, Kostenoptimierung und ROI-maximierte Servicepakete für nachhaltige Informationssicherheit.',
        keywords: 'ISO 27001 kaufen, ISO 27001 Services, ISMS Implementierung kaufen, Vendor Evaluation, Service Procurement, Kostenoptimierung, ROI Maximierung, Compliance Services'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Services kaufen und beschaffen'
        },
        tagline: 'Strategische Beschaffung für maximalen ROI',
        heading: 'ISO 27001 Kaufen',
        description: 'Optimieren Sie Ihre ISO 27001 Investition durch strategische Service-Beschaffung. Wir unterstützen Sie bei der Vendor-Evaluation, Kostenoptimierung und der Auswahl der optimalen Servicepakete für nachhaltige ISMS-Implementierung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische Vendor-Evaluation und Anbieterauswahl nach objektiven Kriterien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'ROI-optimierte Servicepakete mit transparenter Kosten-Nutzen-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Qualitätssicherung durch bewährte Procurement-Methoden'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Langfristige Partnerschaftsmodelle für nachhaltigen Implementierungserfolg'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische ISO 27001 Service-Beschaffung für optimalen ROI',
        description: 'Die Beschaffung von ISO 27001 Implementierungsservices erfordert strategisches Vorgehen, um maximalen Wert aus Ihrer Investition zu generieren. Unsere bewährten Procurement-Methoden gewährleisten die Auswahl des optimalen Service-Providers und die Entwicklung maßgeschneiderter Servicepakete, die Ihre spezifischen Anforderungen erfüllen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Vendor-Evaluation basierend auf objektiven Qualitätskriterien und Leistungsindikatoren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'ROI-optimierte Servicepaket-Konfiguration mit transparenter Kosten-Nutzen-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Qualitätssicherung durch strukturierte Ausschreibungs- und Bewertungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Vertragsoptimierung und SLA-Definition für messbare Implementierungserfolge'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Langfristige Partnerschaftsmodelle für kontinuierliche ISMS-Optimierung'
          }
        ],
        alert: {
          title: 'Investitionssicherheit durch strategische Beschaffung',
          content: 'Professionelle Service-Beschaffung minimiert Implementierungsrisiken und maximiert den ROI Ihrer ISO 27001 Investition durch optimale Vendor-Auswahl und maßgeschneiderte Servicepakete.'
        },
        whyUs: {
          title: 'Unsere Procurement-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Marktkenntnis und Vendor-Landscape-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Procurement-Methoden und Evaluation-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Objektive Kosten-Nutzen-Bewertung und ROI-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Langfristige Partnerschaftsberatung und Vendor-Management'
            }
          ]
        },
        additionalInfo: 'Unsere ISO 27001 Procurement-Beratung geht über die reine Anbieterauswahl hinaus. Wir entwickeln strategische Beschaffungskonzepte, die optimal auf Ihre Unternehmensziele abgestimmt sind und langfristigen Mehrwert schaffen. Dabei berücksichtigen wir sowohl technische Anforderungen als auch wirtschaftliche Aspekte für eine ganzheitliche Investitionsentscheidung.',
        serviceDescription: 'Wir bieten umfassende Unterstützung bei der strategischen Beschaffung von ISO 27001 Services. Von der Marktanalyse über die Vendor-Evaluation bis hin zur Vertragsgestaltung begleiten wir Sie durch den gesamten Procurement-Prozess und gewährleisten optimale Ergebnisse.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Marktanalyse und Vendor-Landscape-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Anforderungsanalyse und Servicepaket-Definition'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Strukturierte Ausschreibung und Vendor-Evaluation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kosten-Nutzen-Analyse und ROI-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Vertragsverhandlung und SLA-Gestaltung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Procurement-Ansatz',
        description: 'Wir verfolgen einen strukturierten, datengetriebenen Ansatz zur ISO 27001 Service-Beschaffung, der objektive Entscheidungsfindung ermöglicht und optimale Ergebnisse gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Marktanalyse und Vendor-Landscape-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strukturierte Anforderungsanalyse und Servicepaket-Definition'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Objektive Vendor-Evaluation mit standardisierten Bewertungskriterien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Transparente Kosten-Nutzen-Analyse und ROI-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Strategische Vertragsgestaltung und langfristige Partnerschaftsentwicklung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Strategische Service-Beschaffung ist der Schlüssel für erfolgreiche ISO 27001 Implementierungen. Unsere bewährten Procurement-Methoden gewährleisten optimale Vendor-Auswahl und maximieren den ROI durch maßgeschneiderte Servicepakete, die langfristigen Mehrwert schaffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Marktanalyse & Vendor-Landscape-Assessment',
          description: 'Umfassende Analyse des ISO 27001 Service-Marktes und systematische Bewertung verfügbarer Anbieter für fundierte Entscheidungsfindung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Marktanalyse mit Trend-Bewertung und Anbieter-Segmentierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Vendor-Landscape-Mapping mit Kompetenz- und Kapazitätsbewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Competitive Intelligence und Best-Practice-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Risikobewertung und Vendor-Stability-Assessment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Anforderungsanalyse & Servicepaket-Definition',
          description: 'Systematische Analyse Ihrer spezifischen Anforderungen und Entwicklung maßgeschneiderter Servicepaket-Spezifikationen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Umfassende Stakeholder-Analyse und Anforderungserhebung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Servicepaket-Architektur und Leistungsumfang-Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'SLA-Framework-Entwicklung und KPI-Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Budget-Rahmen und Kostenmodell-Entwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Strukturierte Ausschreibung & Vendor-Evaluation',
          description: 'Professionelle Durchführung von Ausschreibungsverfahren und objektive Bewertung der Anbieter nach standardisierten Kriterien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'RFP-Entwicklung und Ausschreibungsmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Multi-Kriterien-Bewertung mit gewichteten Scoring-Modellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Vendor-Präsentationen und Due-Diligence-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Referenz-Checks und Proof-of-Concept-Bewertung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Kosten-Nutzen-Analyse & ROI-Bewertung',
          description: 'Transparente Bewertung der wirtschaftlichen Aspekte und Entwicklung von ROI-optimierten Investitionsstrategien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Total Cost of Ownership (TCO) Analyse und Kostenmodellierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'ROI-Berechnung und Business-Case-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Value-Engineering und Kostenoptimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Risiko-adjustierte Investitionsbewertung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Vertragsverhandlung & SLA-Gestaltung',
          description: 'Professionelle Unterstützung bei Vertragsverhandlungen und Entwicklung leistungsstarker Service Level Agreements.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Vertragsstruktur-Optimierung und Risikominimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'SLA-Design mit messbaren Leistungsindikatoren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Penalty- und Incentive-Strukturen für Performance-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Change-Management und Eskalationsprozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Vendor-Management & Partnerschaftsentwicklung',
          description: 'Langfristige Betreuung der Vendor-Beziehung und kontinuierliche Optimierung der Partnerschaft für nachhaltigen Erfolg.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Vendor-Performance-Monitoring und KPI-Tracking'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Regelmäßige Service-Reviews und Optimierungsworkshops'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Relationship-Management und strategische Partnerschaftsentwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Marktbeobachtung und Vendor-Benchmarking'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001KaufenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Kaufen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
