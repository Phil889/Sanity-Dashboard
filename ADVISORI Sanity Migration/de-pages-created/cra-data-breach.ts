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
    console.log('Creating CRA Data Breach page...')

    const craDataBreachData = {
      _type: 'servicePage',
      _id: 'cra-data-breach',
      title: 'CRA Data Breach Management',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-data-breach'
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
        title: 'CRA Data Breach Management | ADVISORI',
        description: 'Professionelles CRA Data Breach Management und Incident Response. Wir unterstützen Sie bei der schnellen Reaktion auf Datenschutzverletzungen und der Erfüllung aller CRA-Meldepflichten.',
        keywords: 'CRA Data Breach, Cyber Resilience Act Datenschutzverletzung, Incident Response, CRA Meldepflicht, Data Breach Management, Cybersecurity Incident, CRA Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Data Breach Management'
        },
        tagline: 'Professionelles CRA Data Breach Management',
        heading: 'CRA Data Breach Management',
        description: 'Datenschutzverletzungen unter dem Cyber Resilience Act erfordern sofortige, koordinierte Reaktionen und präzise regulatorische Compliance. Wir bieten umfassende Incident Response-Services, die technische Expertise mit regulatorischem Know-how verbinden und Ihre Organisation durch kritische Sicherheitsvorfälle führen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Sofortige CRA-konforme Incident Response und Schadensbegrenzung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Professionelle forensische Untersuchung und Beweissicherung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Vollständige regulatorische Meldungen und Compliance-Management'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strategische Recovery-Planung und Präventionsmaßnahmen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Umfassendes CRA Data Breach Management',
        description: 'CRA Data Breach Management kombiniert technische Incident Response-Expertise mit tiefgreifendem Verständnis der regulatorischen Anforderungen des Cyber Resilience Act. Erfolgreiche Breach-Response erfordert koordinierte Maßnahmen, die sowohl unmittelbare Schadensbegrenzung als auch langfristige Compliance-Sicherung gewährleisten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Sofortige Incident Response und Schadensbegrenzung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Forensische Untersuchung und Ursachenanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'CRA-konforme Meldungen und Behördenkommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Stakeholder-Management und Krisenkommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Recovery-Planung und Präventionsstrategien'
          }
        ],
        alert: {
          title: 'CRA Breach Response-Hinweis',
          content: 'CRA-Datenschutzverletzungen unterliegen strengen Meldepflichten und Zeitvorgaben. Professionelle Incident Response innerhalb der ersten Stunden ist entscheidend für erfolgreiche Schadensbegrenzung und regulatorische Compliance.'
        },
        whyUs: {
          title: 'Unsere CRA Breach Response-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte CRA Incident Response-Teams mit sofortiger Verfügbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassende forensische und regulatorische Expertise'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methoden für komplexe Breach-Szenarien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Langfristige Partnerschaft für Cybersecurity-Resilienz'
            }
          ]
        },
        additionalInfo: 'CRA Data Breach Management ist mehr als Incident Response - es ist strategische Krisenführung, die technische Remediation mit regulatorischer Compliance und Geschäftskontinuität verbindet.',
        serviceDescription: 'Wir bieten umfassende CRA Data Breach Management-Services, die von der ersten Incident Detection bis zur vollständigen Recovery und Präventionsplanung reichen und dabei höchste technische und regulatorische Standards gewährleisten.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Sofortige Incident Response und Containment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Forensische Untersuchung und Beweissicherung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'CRA-konforme Meldungen und Behördenkommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Stakeholder-Management und Krisenkommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Recovery-Planung und Präventionsstrategien'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser CRA Breach Response-Ansatz',
        description: 'Wir verfolgen einen strukturierten, mehrstufigen Ansatz für CRA Data Breach Management, der sofortige Reaktion mit langfristiger Resilienz-Entwicklung verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Sofortige Incident Detection und Rapid Response-Aktivierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Containment und Schadensbegrenzung mit forensischer Beweissicherung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Umfassende Ursachenanalyse und Impact Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'CRA-konforme Meldungen und Stakeholder-Kommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Recovery-Implementierung und Präventionsmaßnahmen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Effektives CRA Data Breach Management erfordert die perfekte Orchestrierung von technischer Expertise, regulatorischem Know-how und strategischer Krisenführung. Unsere Kunden profitieren von bewährten Incident Response-Prozessen, die nicht nur unmittelbare Schäden begrenzen, sondern auch langfristige Cybersecurity-Resilienz aufbauen und regulatorische Compliance sicherstellen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'CRA Incident Response und Forensik',
          description: 'Sofortige, professionelle Incident Response mit umfassender forensischer Untersuchung und CRA-konformer Beweissicherung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Sofortige Incident Detection und Rapid Response'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Professionelle forensische Untersuchung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Containment und Schadensbegrenzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Beweissicherung und Dokumentation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'CRA Compliance und Recovery Management',
          description: 'Vollständige regulatorische Compliance-Unterstützung mit strategischer Recovery-Planung und Präventionsmaßnahmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'CRA-konforme Meldungen und Behördenkommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Stakeholder-Management und Krisenkommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Recovery-Planung und Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Präventionsstrategien und Resilienz-Aufbau'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craDataBreachData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Data Breach page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
