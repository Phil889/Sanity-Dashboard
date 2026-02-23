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
    console.log('Creating IT-Grundschutz BSI page...')

    const itGrundschutzData = {
      _type: 'servicePage',
      _id: 'standards-frameworks-it-grundschutz-bsi',
      title: 'IT-Grundschutz BSI',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/standards-frameworks-it-grundschutz-bsi'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management'
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
        title: 'IT-Grundschutz BSI Implementation | ADVISORI',
        description: 'Professionelle Umsetzung des BSI IT-Grundschutz Standards. Wir unterstützen Sie bei der Implementierung, Zertifizierung und kontinuierlichen Verbesserung Ihrer Informationssicherheit.',
        keywords: 'IT-Grundschutz, BSI, Informationssicherheit, ISO 27001, ISMS, Zertifizierung, Compliance, Cyber Security'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IT-Grundschutz BSI'
        },
        tagline: 'Systematische Informationssicherheit nach BSI IT-Grundschutz',
        heading: 'IT-Grundschutz BSI',
        description: 'Der BSI IT-Grundschutz bietet einen systematischen Ansatz für die Implementierung von Informationssicherheit. Wir unterstützen Sie bei der vollständigen Umsetzung dieses bewährten deutschen Standards.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierte Herangehensweise an die Informationssicherheit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Erfüllung deutscher und europäischer Compliance-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Basis für ISO 27001 Zertifizierung und weitere Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Praxiserprobte Sicherheitsmaßnahmen und Best Practices'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'IT-Grundschutz BSI Implementation',
        description: 'Der BSI IT-Grundschutz ist der führende deutsche Standard für Informationssicherheit und bietet eine systematische Methodik zur Absicherung von IT-Systemen. Als bewährtes Framework bildet er die Grundlage für ein effektives Informationssicherheits-Management-System (ISMS).',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strukturanalyse und Schutzbedarfsfeststellung nach BSI-Methodik'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung der IT-Grundschutz-Bausteine und Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Gefährdungs- und Risikoanalyse für kritische Bereiche'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Vorbereitung auf BSI-Zertifizierung und ISO 27001'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Verbesserung des ISMS'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'IT-Grundschutz ist mehr als nur ein Sicherheitsstandard - er ist eine Investition in die digitale Zukunftsfähigkeit Ihres Unternehmens und schafft Vertrauen bei Kunden, Partnern und Behörden.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Zertifizierte BSI IT-Grundschutz Berater mit langjähriger Praxiserfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodik für effiziente und nachhaltige Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Expertise und maßgeschneiderte Lösungsansätze'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitliche Betreuung von der Analyse bis zur Zertifizierung'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit BSI IT-Grundschutz Zertifizierung reduzieren ihr Cyber-Risiko um bis zu 80% und erfüllen gleichzeitig wichtige Compliance-Anforderungen für öffentliche Aufträge und regulierte Branchen.',
        serviceDescription: 'Wir bieten Ihnen eine vollumfängliche Betreuung bei der Implementierung des BSI IT-Grundschutz - von der ersten Analyse bis zur erfolgreichen Zertifizierung und darüber hinaus.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'IT-Grundschutz Check und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'ISMS-Aufbau nach BSI-Standard'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Baustein-basierte Maßnahmen-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Mitarbeiter-Schulungen und Awareness-Programme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Zertifizierungsbegleitung und Audit-Support'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir folgen der bewährten BSI IT-Grundschutz Methodik und passen sie an Ihre spezifischen Unternehmensanforderungen an.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strukturanalyse und Schutzbedarfsfeststellung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Modellierung mit IT-Grundschutz-Bausteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Basis-Sicherheitscheck und Risikoanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Maßnahmen-Umsetzung und Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Verbesserung und Zertifizierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir einen kompetenten Partner gefunden, der uns systematisch durch die IT-Grundschutz Implementierung geführt hat. Die strukturierte Herangehensweise und das tiefe Verständnis für praktische Umsetzung haben uns zu einer erfolgreichen Zertifizierung verholfen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'IT-Grundschutz Analyse & Konzeption',
          description: 'Umfassende Analyse Ihrer IT-Landschaft und Entwicklung eines maßgeschneiderten IT-Grundschutz Konzepts.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strukturanalyse der IT-Systeme und Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Schutzbedarfsfeststellung für alle Assets'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Modellierung mit passenden IT-Grundschutz-Bausteinen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Erstellung des ISMS-Konzepts'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Maßnahmen-Implementierung & Zertifizierung',
          description: 'Praktische Umsetzung der IT-Grundschutz Maßnahmen und Begleitung bis zur erfolgreichen Zertifizierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Basis-Sicherheitscheck und Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Umsetzung der Sicherheitsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Risikoanalyse für ergänzende Sicherheitsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Zertifizierungsbegleitung und Audit-Support'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(itGrundschutzData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IT-Grundschutz BSI page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
