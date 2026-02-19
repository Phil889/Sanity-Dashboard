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
    console.log('Creating Banklizenz Implementierung aufsichtsrechtlicher Meldesysteme page...')

    const pageData = {
      _type: 'servicePage',
      _id: 'banklizenz-implementierung-aufsichtsrechtlicher-meldesysteme',
      title: 'Implementierung aufsichtsrechtlicher Meldesysteme',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/banklizenz-beantragen/banklizenz-it-meldewesen-setup/banklizenz-implementierung-aufsichtsrechtlicher-meldesysteme'
      },
      parent: {
        _type: 'reference',
        _ref: 'banklizenz-it-meldewesen-setup'
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
        title: 'Implementierung aufsichtsrechtlicher Meldesysteme | ADVISORI',
        description: 'Professionelle Unterstützung bei der Implementierung aufsichtsrechtlicher Meldesysteme für Banklizenzen. Compliance-konforme IT-Systeme und regulatorische Berichterstattung.',
        keywords: 'Aufsichtsrechtliche Meldesysteme, Bankaufsicht, Regulatory Reporting, BaFin Meldewesen, Compliance IT, COREP, FINREP'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Implementierung aufsichtsrechtlicher Meldesysteme'
        },
        tagline: 'Sichere und effiziente Umsetzung regulatorischer Meldepflichten',
        heading: 'Implementierung aufsichtsrechtlicher Meldesysteme',
        description: 'Die professionelle Implementierung aufsichtsrechtlicher Meldesysteme ist entscheidend für die Erfüllung regulatorischer Anforderungen und die erfolgreiche Banklizenzierung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Compliance mit aufsichtsrechtlichen Meldepflichten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte und fehlerfreie Datenübertragung an Aufsichtsbehörden'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Validierungs- und Qualitätssicherungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Zukunftssichere und skalierbare IT-Architektur'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Implementierung aufsichtsrechtlicher Meldesysteme',
        description: 'Die Implementierung robuster aufsichtsrechtlicher Meldesysteme ist ein kritischer Erfolgsfaktor für die Banklizenzierung. Wir unterstützen Sie bei der technischen Umsetzung, Integration und Optimierung Ihrer Meldeprozesse.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse bestehender IT-Systeme und Datenarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Design und Implementierung von Meldesystem-Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration mit Core-Banking-Systemen und Datenquellen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Automatisierung von Datenaufbereitung und Validierungsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Testing, Qualitätssicherung und Go-Live-Begleitung'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine erfolgreiche Implementierung aufsichtsrechtlicher Meldesysteme erfordert nicht nur technische Expertise, sondern auch tiefes Verständnis der regulatorischen Anforderungen und deren praktische Umsetzung.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in Bankregulierung und IT-Systemintegration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodiken für komplexe Meldesystem-Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Langjährige Erfahrung mit Aufsichtsbehörden und Compliance-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von der Planung bis zum produktiven Betrieb'
            }
          ]
        },
        additionalInfo: 'Professionell implementierte aufsichtsrechtliche Meldesysteme reduzieren das operationelle Risiko erheblich und schaffen die Grundlage für eine vertrauensvolle Zusammenarbeit mit den Aufsichtsbehörden.',
        serviceDescription: 'Wir begleiten Sie bei der vollständigen Implementierung Ihrer aufsichtsrechtlichen Meldesysteme - von der Anforderungsanalyse über die technische Umsetzung bis hin zur erfolgreichen Inbetriebnahme und dem laufenden Betrieb.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Systemarchitektur und technisches Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Datenintegration und ETL-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Validierung und Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Benutzeroberflächen und Reporting-Tools'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Dokumentation und Schulungen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und praxiserprobten Ansatz für die Implementierung aufsichtsrechtlicher Meldesysteme.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Anforderungsanalyse und Systemdesign'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Technische Implementierung und Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Umfassende Tests und Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Benutzertraining und Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Go-Live-Begleitung und Support'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns bei der Implementierung unserer aufsichtsrechtlichen Meldesysteme professionell unterstützt. Die technische Expertise und das tiefe Verständnis für regulatorische Anforderungen haben zu einer erfolgreichen und zukunftssicheren Lösung geführt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Systemarchitektur und Design',
          description: 'Entwicklung einer robusten und skalierbaren Architektur für Ihre aufsichtsrechtlichen Meldesysteme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Anforderungsanalyse und Systemdesign'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Technologie-Evaluierung und -Auswahl'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Skalierbare und zukunftssichere Architektur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration mit bestehenden Systemen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technische Implementierung',
          description: 'Professionelle Umsetzung und Integration Ihrer Meldesystem-Lösung mit umfassender Qualitätssicherung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung und Konfiguration der Meldesysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Datenintegration und ETL-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Automatisierte Validierung und Fehlerbehandlung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Umfassende Tests und Abnahme'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(pageData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Banklizenz Implementierung aufsichtsrechtlicher Meldesysteme page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
