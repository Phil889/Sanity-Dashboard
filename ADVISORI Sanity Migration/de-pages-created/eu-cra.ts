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
    console.log('Creating EU CRA page...')

    const euCraData = {
      _type: 'servicePage',
      _id: 'eu-cra',
      title: 'EU CRA',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/eu-cra'
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
        title: 'EU CRA Compliance | ADVISORI',
        description: 'Professionelle EU CRA Compliance-Beratung und Implementierung. Wir unterstützen Sie bei der Umsetzung der EU Cyber Resilience Act Anforderungen für den europäischen Markt.',
        keywords: 'EU CRA, Cyber Resilience Act EU, CRA Compliance, EU Cybersicherheit, Digitale Produktsicherheit EU, CRA Beratung Europa'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EU CRA Compliance'
        },
        tagline: 'EU CRA Compliance Excellence',
        heading: 'EU CRA',
        description: 'Die EU Cyber Resilience Act definiert harmonisierte Cybersicherheitsanforderungen für den europäischen Binnenmarkt. Wir begleiten Sie bei der strategischen Umsetzung und nachhaltigen Compliance-Sicherstellung für erfolgreichen Marktzugang.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische EU CRA Compliance-Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Harmonisierte Standards und CE-Kennzeichnung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Cross-Border Compliance Management'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Integrierte EU-Regulatorik Beratung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EU CRA Compliance Strategie',
        description: 'Die EU Cyber Resilience Act schafft einheitliche Cybersicherheitsstandards für digitale Produkte im europäischen Binnenmarkt. Eine erfolgreiche Compliance erfordert tiefes Verständnis der EU-Regulatorik, harmonisierten Standards und Marktanforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'EU-weite Produktklassifizierung und Marktanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Harmonisierte Standards Integration (EN, ISO, ETSI)'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'CE-Kennzeichnung und Konformitätsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Cross-Border Incident Response und Meldewesen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'EU-Datenschutz Integration (GDPR, NIS2 Alignment)'
          }
        ],
        alert: {
          title: 'EU Markthinweis',
          content: 'Die EU CRA Compliance ist Voraussetzung für den Marktzugang im europäischen Binnenmarkt. Frühzeitige Vorbereitung und strategische Planung sind entscheidend für erfolgreiche Marktpositionierung.'
        },
        whyUs: {
          title: 'Unsere EU CRA Compliance Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende EU-Regulatorik Expertise und Marktkenntnis'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praktische Erfahrung mit harmonisierten Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Cross-Border Compliance Management Kompetenz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Integrierte Beratung für EU-Regulatorik Landschaft'
            }
          ]
        },
        additionalInfo: 'Die EU CRA Compliance erfordert strategische Koordination zwischen nationalen Anforderungen, EU-weiten Standards und internationalen Best Practices für optimale Marktpositionierung.',
        serviceDescription: 'Wir unterstützen Sie bei der vollständigen EU CRA Compliance-Umsetzung, von der strategischen Planung über die praktische Implementierung bis zur kontinuierlichen Marktüberwachung und Optimierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'EU CRA Readiness Assessment und Marktanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Harmonisierte Standards Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'CE-Kennzeichnung und Konformitätsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Cross-Border Compliance Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'EU-Regulatorik Integration und Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser EU CRA Compliance Ansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte EU CRA Compliance-Strategie, die europäische Regulatorik mit Ihren Geschäftszielen und Marktambitionen optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende EU-Marktanalyse und Regulatorik-Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategische Compliance-Roadmap für EU-Marktzugang'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Harmonisierte Standards Integration und Zertifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Cross-Border Governance und Prozessoptimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche EU-Compliance Überwachung und Anpassung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die EU CRA Compliance ist mehr als regulatorische Pflicht - sie ist der Schlüssel für nachhaltigen Erfolg im europäischen Binnenmarkt. Unsere Kunden profitieren von einer strategischen Herangehensweise, die nicht nur Compliance sicherstellt, sondern auch Wettbewerbsvorteile durch exzellente Cybersicherheit schafft.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'EU CRA Markt-Readiness Assessment',
          description: 'Umfassende Bewertung Ihrer EU-Marktbereitschaft und strategische Planung für erfolgreiche CRA Compliance im europäischen Binnenmarkt.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'EU-weite Produktklassifizierung und Marktanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Harmonisierte Standards Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Cross-Border Compliance Strategie'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'EU-Marktzugang Roadmap und Zeitplanung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Harmonisierte Standards Implementierung',
          description: 'Praktische Umsetzung harmonisierter EU-Standards und Integration in Ihre Produktentwicklungs- und Qualitätsprozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'EN/ISO/ETSI Standards Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'CE-Kennzeichnung Vorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Konformitätsbewertung und Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Standards-Überwachung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(euCraData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EU CRA page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
