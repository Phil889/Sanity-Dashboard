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
    console.log('Creating CRA Cyber Resilience Act Deutsch page...')

    const craActDeutschData = {
      _type: 'servicePage',
      _id: 'cra-cyber-resilience-act-deutsch',
      title: 'CRA Cyber Resilience Act Deutsch',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-cyber-resilience-act-deutsch'
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
        title: 'CRA Cyber Resilience Act Deutschland Beratung | ADVISORI',
        description: 'Spezialisierte CRA Cyber Resilience Act Beratung für deutsche Unternehmen. Wir unterstützen Sie bei der strategischen Umsetzung der Cybersicherheitsanforderungen im deutschen Markt.',
        keywords: 'CRA Deutschland, Cyber Resilience Act Deutsch, Deutsche Cybersicherheit Compliance, CRA Beratung Deutschland, Digitale Produktsicherheit Deutschland, CRA Implementation Deutschland'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Cyber Resilience Act Deutschland'
        },
        tagline: 'Deutsche CRA Compliance Excellence',
        heading: 'CRA Cyber Resilience Act Deutsch',
        description: 'Der Cyber Resilience Act revolutioniert die Cybersicherheitslandschaft für digitale Produkte in Deutschland. Wir entwickeln mit Ihnen eine umfassende CRA-Compliance-Strategie, die deutsche Regulatorik-Anforderungen mit nachhaltigen Geschäftsvorteilen im deutschen Markt verbindet und internationale Standards erfüllt.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Deutsche CRA Compliance-Strategie'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'BSI-konforme Cybersicherheitsstandards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Deutsche Markterschließung und Wettbewerbsvorteile'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Integrierte IT-Sicherheitsarchitektur'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRA Cyber Resilience Act Deutschland Excellence',
        description: 'Die erfolgreiche Umsetzung der CRA-Anforderungen in Deutschland erfordert tiefgreifendes Verständnis der deutschen Cybersicherheitslandschaft und strategische Integration in bestehende IT-Sicherheitsframeworks. Wir begleiten Sie bei der Transformation zu einem CRA-konformen Unternehmen im deutschen Markt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Deutsche Produktklassifizierung und BSI-konforme Risikoanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Integration mit deutscher IT-Sicherheitsgesetzgebung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Deutsche Incident Response und Meldewesen-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'DSGVO-konforme Datenschutz-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche deutsche Marktüberwachung und Compliance'
          }
        ],
        alert: {
          title: 'Deutsche CRA Implementation',
          content: 'Die CRA-Umsetzung in Deutschland erfordert frühzeitige strategische Planung und Integration mit bestehenden deutschen Cybersicherheitsstandards. Proaktive Vorbereitung sichert Wettbewerbsvorteile im deutschen Markt.'
        },
        whyUs: {
          title: 'Unsere Deutsche CRA Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende deutsche Regulatorik-Expertise und Marktkenntnis'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praktische Erfahrung mit deutscher IT-Sicherheitsgesetzgebung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Strategische Integration von Cybersicherheit und Geschäftsprozessen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitliche deutsche Markt-Beratungskompetenz'
            }
          ]
        },
        additionalInfo: 'Die CRA-Compliance in Deutschland ist ein strategischer Enabler für nachhaltigen Erfolg im deutschen Markt und schafft Vertrauen bei deutschen Kunden, Partnern und Regulierungsbehörden.',
        serviceDescription: 'Wir entwickeln mit Ihnen eine maßgeschneiderte deutsche CRA-Compliance-Strategie, die von der initialen Bewertung über die praktische Implementierung bis zur kontinuierlichen Optimierung alle Aspekte der deutschen Regulatorik abdeckt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Deutsche CRA Readiness Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Strategische Compliance-Roadmap für den deutschen Markt'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'BSI-konforme Standards-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Deutsche Governance und Prozessoptimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche deutsche Compliance-Überwachung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Deutscher CRA Compliance Ansatz',
        description: 'Wir verfolgen einen ganzheitlichen Ansatz zur deutschen CRA-Compliance, der technische Exzellenz mit strategischem Geschäftsverständnis verbindet und nachhaltige Wettbewerbsvorteile im deutschen Markt schafft.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische deutsche Marktanalyse und Regulatorik-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Maßgeschneiderte Compliance-Architektur für deutsche Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Integrierte Implementierung mit deutschen Geschäftsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'BSI-konforme Koordination und lokale Anpassung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und deutsche Marktüberwachung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die CRA-Compliance in Deutschland ist der Schlüssel für nachhaltigen Erfolg im deutschen Markt. Unsere strategische Herangehensweise transformiert regulatorische Anforderungen in Wettbewerbsvorteile und schafft Vertrauen bei deutschen Kunden und Geschäftspartnern durch exzellente Cybersicherheitsstandards und BSI-konforme Implementierung.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Deutsche CRA Strategic Assessment',
          description: 'Umfassende Bewertung Ihrer CRA-Bereitschaft mit strategischer Roadmap für erfolgreiche Compliance im deutschen Markt und Integration mit bestehenden deutschen IT-Sicherheitsstandards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Deutsche Regulatorik-Analyse und Marktbewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Produktklassifizierung nach deutschen CRA-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'BSI-konforme Compliance Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Strategische deutsche Implementierungs-Roadmap'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Deutsche Standards Integration',
          description: 'Praktische Implementierung deutscher Cybersicherheitsstandards und Integration in Ihre Produktentwicklungs- und Qualitätsmanagementsysteme mit BSI-Konformität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'BSI-Standards und DIN-Normen Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Deutsche Konformitätsbewertung und Zertifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Deutsches Dokumentationsmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche deutsche Standards-Überwachung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craActDeutschData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Cyber Resilience Act Deutsch page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
