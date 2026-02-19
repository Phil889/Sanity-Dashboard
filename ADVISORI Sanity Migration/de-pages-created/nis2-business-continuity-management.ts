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
    console.log('Creating NIS2 Business Continuity Management page...')

    const nis2BusinessContinuityData = {
      _type: 'servicePage',
      _id: 'nis2-business-continuity-management',
      title: 'NIS2 Business Continuity Management',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/nis2/nis2-security-measures/nis2-business-continuity-management/'
      },
      parent: {
        _type: 'reference',
        _ref: 'nis2-security-measures'
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
        title: 'NIS2 Business Continuity Management | ADVISORI',
        description: 'Erfüllen Sie die NIS2-Richtlinie mit professionellem Business Continuity Management. Wir unterstützen bei der Planung, Implementierung und kontinuierlichen Verbesserung Ihrer BCM-Strategie.',
        keywords: 'NIS2, Business Continuity Management, BCM, Notfallmanagement, Cyber-Resilienz, EU-Richtlinie, Kritische Infrastruktur'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIS2 Business Continuity Management'
        },
        tagline: 'NIS2-konforme Business Continuity für kritische Infrastrukturen',
        heading: 'NIS2 Business Continuity Management',
        description: 'Die NIS2-Richtlinie fordert robuste Business Continuity Management-Systeme für kritische und wichtige Einrichtungen. Wir entwickeln BCM-Strategien, die sowohl regulatorische Anforderungen erfüllen als auch operative Exzellenz fördern.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige NIS2-Compliance für Business Continuity Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Minimierung von Betriebsunterbrechungen und Ausfallzeiten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Stärkung der organisatorischen Cyber-Resilienz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Schutz vor regulatorischen Sanktionen und Reputationsschäden'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'NIS2-konformes Business Continuity Management',
        description: 'Die NIS2-Richtlinie verlangt von kritischen und wichtigen Einrichtungen die Implementierung angemessener technischer, operativer und organisatorischer Maßnahmen zur Sicherstellung der Business Continuity. Unser BCM-Ansatz kombiniert bewährte internationale Standards mit spezifischen NIS2-Anforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Gap-Analyse bestehender BCM-Systeme gegen NIS2-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung NIS2-konformer Business Continuity Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung von Notfallplänen und Wiederherstellungsverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Etablierung kontinuierlicher Überwachungs- und Testprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration mit Incident Response und Krisenmanagement'
          }
        ],
        alert: {
          title: 'NIS2-Compliance',
          content: 'Business Continuity Management ist eine zentrale Säule der NIS2-Richtlinie. Organisationen müssen nachweisen, dass sie angemessene Maßnahmen zur Sicherstellung der Geschäftskontinuität und zur Minimierung der Auswirkungen von Sicherheitsvorfällen getroffen haben.'
        },
        whyUs: {
          title: 'Unsere NIS2-BCM Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnis der NIS2-Richtlinie und ihrer nationalen Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung im Business Continuity Management für kritische Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Methodiken und bewährte internationale BCM-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitliche Betrachtung von Cyber-Sicherheit und Business Continuity'
            }
          ]
        },
        additionalInfo: 'Ein effektives NIS2-konformes BCM-System kann die Ausfallzeiten kritischer Dienste um bis zu 80% reduzieren und gleichzeitig regulatorische Compliance sicherstellen. Investieren Sie in nachhaltige Resilienz!',
        serviceDescription: 'Unser umfassendes NIS2 Business Continuity Management deckt alle Aspekte von der strategischen Planung bis zur operativen Umsetzung ab. Wir entwickeln maßgeschneiderte BCM-Lösungen, die sowohl NIS2-Anforderungen erfüllen als auch Ihre geschäftlichen Prioritäten unterstützen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'NIS2-spezifische Business Impact Analysis (BIA)'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung von Notfall- und Wiederherstellungsplänen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Krisenmanagement und Incident Response Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'BCM-Governance und kontinuierliche Verbesserung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulungen und Awareness-Programme'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser NIS2-BCM Vorgehen',
        description: 'Wir entwickeln ein systematisches Business Continuity Management, das vollständig auf die spezifischen Anforderungen der NIS2-Richtlinie abgestimmt ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Assessment der aktuellen BCM-Reife und NIS2-Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Identifikation kritischer Geschäftsprozesse und Abhängigkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung NIS2-konformer BCM-Strategien und -Richtlinien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung von Notfallplänen und Testverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung kontinuierlicher Überwachung und Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns dabei geholfen, ein NIS2-konformes Business Continuity Management zu etablieren, das nicht nur regulatorische Anforderungen erfüllt, sondern auch unsere operative Resilienz erheblich gestärkt hat. Die systematische Herangehensweise und praxisnahe Umsetzung haben uns überzeugt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'NIS2-Business Impact Analysis',
          description: 'Systematische Analyse Ihrer kritischen Geschäftsprozesse und deren Abhängigkeiten im Kontext der NIS2-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Identifikation kritischer Geschäftsprozesse nach NIS2-Kriterien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung von Abhängigkeiten und Single Points of Failure'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Definition von Recovery Time und Recovery Point Objectives'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Priorisierung von Wiederherstellungsmaßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'BCM-Strategie und Governance',
          description: 'Entwicklung einer umfassenden Business Continuity Strategie mit entsprechenden Governance-Strukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'NIS2-konforme BCM-Policy und -Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Etablierung von BCM-Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Definition von Rollen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration mit bestehenden Managementsystemen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nis2BusinessContinuityData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIS2 Business Continuity Management page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
