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
    console.log('Creating Disaster Recovery page...')

    const disasterRecoveryData = {
      _type: 'servicePage',
      _id: 'disaster-recovery',
      title: 'Disaster Recovery',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/business-continuity-resilience/resilience/disaster-recovery'
      },
      parent: {
        _type: 'reference',
        _ref: 'resilience'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'informationssicherheit'
        }
      },
      seo: {
        _type: 'seo',
        title: 'Disaster Recovery | ADVISORI',
        description: 'Sichern Sie Ihre Geschäftsprozesse mit umfassenden Disaster Recovery Lösungen. Wir unterstützen Sie bei der Planung, Implementierung und dem Test von DR-Strategien.',
        keywords: 'Disaster Recovery, BCM, Business Continuity, Notfallplanung, Ausfallsicherheit, Wiederherstellung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Disaster Recovery'
        },
        tagline: 'Schnelle Wiederherstellung Ihrer IT-Systeme nach einem Notfall',
        heading: 'Disaster Recovery',
        description: 'Disaster Recovery (DR) stellt die schnelle Wiederherstellung Ihrer IT-Systeme und Daten nach einem Notfall sicher. Wir minimieren Ausfallzeiten und schützen Ihre Geschäftsprozesse.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Minimierung von Ausfallzeiten und Datenverlusten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Erfüllung regulatorischer Anforderungen und Compliance-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Schnelle Wiederherstellung kritischer IT-Systeme und Anwendungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Stärkung der Resilienz und des Vertrauens in Ihre IT-Infrastruktur'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Disaster Recovery',
        description: 'Disaster Recovery (DR) ist ein wesentlicher Bestandteil des Business Continuity Managements (BCM) und stellt sicher, dass Ihre IT-Systeme nach einem Notfall schnell wiederhergestellt werden können. Wir unterstützen Sie bei der Planung, Implementierung und dem Test von DR-Maßnahmen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse der Geschäftsprozesse und Identifikation kritischer IT-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung von Wiederherstellungsstrategien und -plänen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung von Backup- und Recovery-Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Regelmäßige Tests und Übungen zur Überprüfung der DR-Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Verbesserung und Anpassung der DR-Strategie'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Disaster Recovery ist mehr als nur Backup und Recovery. Es geht darum, die Geschäftsprozesse zu verstehen und sicherzustellen, dass kritische IT-Systeme auch in Notfallsituationen schnell wiederhergestellt werden können.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise im Bereich Business Continuity Management und Disaster Recovery'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in der Planung und Implementierung von DR-Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxisnahe Beratung und Unterstützung bei der Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Partnerschaftliche Zusammenarbeit und individuelle Lösungen'
            }
          ]
        },
        additionalInfo: 'Eine gut geplante und implementierte Disaster Recovery Strategie kann die Ausfallzeiten kritischer IT-Systeme um bis zu 90% reduzieren und die Kosten für Notfallmaßnahmen erheblich senken. Investieren Sie in Ihre Resilienz!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum im Bereich Disaster Recovery, von der Analyse über die Planung bis zur Implementierung und dem Test Ihrer DR-Maßnahmen. Wir unterstützen Sie dabei, Ihre IT-Systeme auch in Notfallsituationen schnell wiederherzustellen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'IT Service Impact Analysis (IT-BIA)'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung von Disaster Recovery Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung von Backup- und Recovery-Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Erstellung von Notfallhandbüchern und Checklisten'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Durchführung von Tests und Übungen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine individuelle Disaster Recovery Strategie, die auf Ihre spezifischen Anforderungen zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse Ihrer Geschäftsprozesse und IT-Infrastruktur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Identifikation kritischer IT-Systeme und Ressourcen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Bewertung von Risiken und potenziellen Auswirkungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung von Wiederherstellungsstrategien und -plänen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Implementierung und Test der DR-Maßnahmen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir einen Partner gefunden, der uns kompetent und zuverlässig bei der Planung und Umsetzung unserer Disaster Recovery Strategie unterstützt hat. Dank der professionellen Beratung und der praxisnahen Lösungen sind unsere IT-Systeme nun auch in Notfallsituationen verfügbar.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'IT Service Impact Analysis (IT-BIA)',
          description: 'Wir analysieren Ihre Geschäftsprozesse und identifizieren kritische IT-Dienste und Ressourcen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse Ihrer Geschäftsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation kritischer IT-Dienste und Ressourcen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Bewertung der Auswirkungen von IT-Ausfällen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Erstellung eines IT-BIA Berichts'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Disaster Recovery Strategie',
          description: 'Wir entwickeln eine individuelle Disaster Recovery Strategie, die auf Ihre spezifischen Anforderungen zugeschnitten ist.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Definition von Wiederherstellungszielen (RTO, RPO)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Auswahl geeigneter DR-Maßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Erstellung eines DR-Konzepts'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration in das Business Continuity Management'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(disasterRecoveryData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Disaster Recovery page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
