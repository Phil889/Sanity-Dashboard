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
    console.log('Creating CRA EU page...')

    const craEuData = {
      _type: 'servicePage',
      _id: 'cra-eu',
      title: 'CRA EU',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-eu'
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
        title: 'CRA EU Compliance Beratung | ADVISORI',
        description: 'Spezialisierte CRA EU Compliance-Beratung für den europäischen Markt. Wir unterstützen Sie bei der strategischen Umsetzung der Cyber Resilience Act Anforderungen in der EU.',
        keywords: 'CRA EU, Cyber Resilience Act Europa, EU Cybersicherheit Compliance, CRA Beratung EU, Digitale Produktsicherheit Europa, EU CRA Implementation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA EU Compliance'
        },
        tagline: 'CRA EU Compliance Leadership',
        heading: 'CRA EU',
        description: 'Der Cyber Resilience Act definiert neue Standards für Cybersicherheit digitaler Produkte in der Europäischen Union. Wir entwickeln mit Ihnen eine umfassende CRA EU Compliance-Strategie, die regulatorische Anforderungen mit nachhaltigen Geschäftsvorteilen im europäischen Binnenmarkt verbindet.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende CRA EU Compliance-Strategie'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Cross-Border EU Markterschließung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Harmonisierte Standards Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strategische Wettbewerbsvorteile EU-weit'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRA EU Compliance Excellence',
        description: 'Die erfolgreiche Umsetzung der CRA EU Anforderungen erfordert tiefgreifendes Verständnis der europäischen Regulatorik-Landschaft und strategische Integration in Ihre Geschäftsprozesse. Wir begleiten Sie bei der Transformation zu einem CRA-konformen Unternehmen im EU-Markt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'EU-weite Produktklassifizierung und Risikoanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Harmonisierte Standards und CE-Kennzeichnung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Cross-Border Incident Management und Meldewesen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'EU-Datenschutz Integration und NIS2 Alignment'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Marktüberwachung und Compliance-Sicherstellung'
          }
        ],
        alert: {
          title: 'EU Regulatorik Update',
          content: 'Die CRA EU Implementierung erfordert frühzeitige strategische Planung und kontinuierliche Anpassung an sich entwickelnde Standards. Proaktive Vorbereitung sichert Wettbewerbsvorteile im europäischen Binnenmarkt.'
        },
        whyUs: {
          title: 'Unsere CRA EU Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende EU-Regulatorik Expertise und Marktkenntnis'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praktische Erfahrung mit Cross-Border Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Strategische Integration von Cybersicherheit und Business'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitliche EU-Markt Beratungskompetenz'
            }
          ]
        },
        additionalInfo: 'Die CRA EU Compliance ist ein strategischer Enabler für nachhaltigen Erfolg im europäischen Binnenmarkt und schafft Vertrauen bei Kunden, Partnern und Regulierungsbehörden.',
        serviceDescription: 'Wir entwickeln mit Ihnen eine maßgeschneiderte CRA EU Compliance-Strategie, die von der initialen Bewertung über die praktische Implementierung bis zur kontinuierlichen Optimierung alle Aspekte der EU-Regulatorik abdeckt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'CRA EU Readiness Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Strategische Compliance-Roadmap für EU-Märkte'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Harmonisierte Standards Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Cross-Border Governance und Prozessoptimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche EU-Compliance Überwachung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser CRA EU Compliance Ansatz',
        description: 'Wir verfolgen einen ganzheitlichen Ansatz zur CRA EU Compliance, der technische Exzellenz mit strategischem Geschäftsverständnis verbindet und nachhaltige Wettbewerbsvorteile im europäischen Markt schafft.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische EU-Marktanalyse und Regulatorik-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Maßgeschneiderte Compliance-Architektur für EU-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Integrierte Implementierung mit Business-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Cross-Border Koordination und lokale Anpassung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Marktüberwachung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die CRA EU Compliance ist der Schlüssel für nachhaltigen Erfolg im europäischen Binnenmarkt. Unsere strategische Herangehensweise transformiert regulatorische Anforderungen in Wettbewerbsvorteile und schafft Vertrauen bei europäischen Kunden und Geschäftspartnern durch exzellente Cybersicherheitsstandards.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'CRA EU Strategic Assessment',
          description: 'Umfassende Bewertung Ihrer CRA EU Bereitschaft mit strategischer Roadmap für erfolgreiche Compliance im europäischen Binnenmarkt.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'EU-weite Regulatorik-Analyse und Marktbewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Produktklassifizierung nach CRA EU Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Cross-Border Compliance Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Strategische Implementierungs-Roadmap'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'EU Harmonized Standards Integration',
          description: 'Praktische Implementierung harmonisierter EU-Standards und Integration in Ihre Produktentwicklungs- und Qualitätsmanagementsysteme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'EN/ISO/ETSI Standards Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'CE-Kennzeichnung und Konformitätsbewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Cross-Border Dokumentationsmanagement'
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
    transaction.createOrReplace(craEuData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA EU page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
