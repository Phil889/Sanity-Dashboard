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
    console.log('Creating Basel III Überwachung aufsichtsrechtlicher Änderungen page...')

    const baselIIIMonitoringData = {
      _type: 'servicePage',
      _id: 'basel-iii-ueberwachung-aufsichtsrechtlicher-aenderungen',
      title: 'Basel III Überwachung aufsichtsrechtlicher Änderungen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/basel-iii/basel-iii-ongoing-compliance/basel-iii-ueberwachung-aufsichtsrechtlicher-aenderungen'
      },
      parent: {
        _type: 'reference',
        _ref: 'basel-iii-ongoing-compliance'
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
        title: 'Basel III Überwachung aufsichtsrechtlicher Änderungen | ADVISORI',
        description: 'Bleiben Sie stets auf dem neuesten Stand der Basel III-Vorschriften mit unserem spezialisierten Monitoring-Service für aufsichtsrechtliche Änderungen. Wir identifizieren, analysieren und bewerten proaktiv regulatorische Entwicklungen, um Ihr Institut rechtzeitig auf kommende Anforderungen vorzubereiten und Compliance-Risiken zu minimieren.',
        keywords: 'Basel III Überwachung, aufsichtsrechtliche Änderungen, regulatorisches Monitoring, Compliance-Management, Regulierungsänderungen, Bankenaufsicht, regulatorische Entwicklungen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Basel III Überwachung aufsichtsrechtlicher Änderungen'
        },
        tagline: 'Proaktives Management regulatorischer Änderungen',
        heading: 'Basel III Überwachung aufsichtsrechtlicher Änderungen',
        description: 'Navigieren Sie sicher durch die dynamische Regulierungslandschaft mit unserem spezialisierten Service zur Überwachung aufsichtsrechtlicher Änderungen im Basel III-Kontext. Wir identifizieren, analysieren und bewerten kontinuierlich regulatorische Entwicklungen, um Ihr Institut frühzeitig auf kommende Anforderungen vorzubereiten, Compliance-Risiken zu minimieren und strategische Entscheidungen auf Basis fundierter regulatorischer Erkenntnisse zu ermöglichen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Frühzeitige Erkennung und Bewertung regulatorischer Änderungen und deren Auswirkungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Minimierung von Compliance-Risiken durch proaktive Anpassungsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Optimierung des Ressourceneinsatzes durch priorisierte Umsetzungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strategischer Wettbewerbsvorteil durch fundierte regulatorische Intelligenz'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Basel III Überwachung aufsichtsrechtlicher Änderungen',
        description: 'Die kontinuierliche Anpassung der Basel III-Regulierungen stellt Finanzinstitute vor die Herausforderung, regulatorische Entwicklungen proaktiv zu verfolgen und deren Auswirkungen rechtzeitig zu bewerten. Unser spezialisierter Monitoring-Service etabliert systematische Prozesse zur Identifikation, Analyse und Bewertung aufsichtsrechtlicher Änderungen, um Ihr Institut optimal auf kommende Anforderungen vorzubereiten und strategische Handlungsspielräume zu sichern.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematisches Monitoring globaler und lokaler regulatorischer Entwicklungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Fundierte Impact-Analysen und institutsspezifische Bewertungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung priorisierter Umsetzungspläne und Handlungsempfehlungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration regulatorischer Erkenntnisse in strategische Entscheidungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Etablierung eines nachhaltigen Regulatory Change Management-Prozesses'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Für eine effektive Überwachung aufsichtsrechtlicher Änderungen ist die Etablierung eines institutionalisierten "Regulatory Radar" entscheidend. Dieser sollte nicht nur offizielle Regularien, sondern auch Diskussionspapiere, Konsultationen und internationale Best Practices umfassen. Eine solche 360°-Perspektive ermöglicht es, regulatorische Trends 12-18 Monate vor ihrer verbindlichen Implementierung zu antizipieren und proaktive Anpassungsmaßnahmen einzuleiten.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifendes Verständnis der internationalen und lokalen Bankenregulierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodik zur systematischen Analyse regulatorischer Entwicklungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Zugang zu umfassenden regulatorischen Informationsquellen und Expertennetzwerken'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Nachweisliche Erfolge bei der proaktiven Steuerung regulatorischer Änderungen'
            }
          ]
        },
        additionalInfo: 'Durch die Implementierung unseres Regulatory Monitoring-Ansatzes konnten unsere Kunden ihre Reaktionszeit auf regulatorische Änderungen um durchschnittlich 60% verkürzen und notwendige Anpassungsmaßnahmen deutlich kosteneffizienter umsetzen. Die frühzeitige Identifikation regulatorischer Trends ermöglicht zudem eine strategische Anpassung von Geschäftsmodellen und Produktangeboten, bevor regulatorische Anforderungen verbindlich werden.',
        serviceDescription: 'Unser Service zur Überwachung aufsichtsrechtlicher Änderungen bietet eine umfassende Lösung für die proaktive Steuerung regulatorischer Entwicklungen im Basel III-Kontext. Wir unterstützen Sie bei der Etablierung systematischer Monitoring-Prozesse, der Bewertung regulatorischer Auswirkungen und der Entwicklung effektiver Anpassungsstrategien.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Kontinuierliches Monitoring relevanter regulatorischer Quellen und Entwicklungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Institutsspezifische Impact-Analysen und Bewertungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung priorisierter Umsetzungspläne und Roadmaps'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Etablierung nachhaltiger Regulatory Change Management-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Integration regulatorischer Erkenntnisse in die strategische Planung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und bewährten Ansatz für die Etablierung eines effektiven Systems zur Überwachung aufsichtsrechtlicher Änderungen, der nachhaltige regulatorische Intelligenz sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Assessment bestehender Monitoring-Prozesse und Informationsquellen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung eines maßgeschneiderten Regulatory Radar-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung systematischer Impact-Analyse-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung eines institutionalisierten Regulatory Change Management-Prozesses'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Integration regulatorischer Erkenntnisse in Governance- und Entscheidungsstrukturen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Julia Müller',
        position: 'Senior Director Regulatory Affairs',
        quote: 'Die proaktive Überwachung und Analyse aufsichtsrechtlicher Änderungen ist in der heutigen dynamischen Regulierungslandschaft kein optionaler Luxus, sondern eine strategische Notwendigkeit. Unser spezialisierter Monitoring-Ansatz ermöglicht es Finanzinstituten, den regulatorischen Wandel nicht nur zu bewältigen, sondern als strategischen Vorteil zu nutzen. Durch die systematische Identifikation und Bewertung regulatorischer Entwicklungen schaffen wir die Voraussetzungen für informierte Entscheidungen, effiziente Anpassungsprozesse und nachhaltige Compliance. Die Integration unseres Regulatory Radar in die Governance-Strukturen und Entscheidungsprozesse unserer Kunden hat wiederholt zu signifikanten Effizienzgewinnen, reduzierten Compliance-Risiken und strategischen Wettbewerbsvorteilen geführt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Regulatory Radar & Intelligence',
          description: 'Wir etablieren ein umfassendes System zur kontinuierlichen Überwachung und Analyse regulatorischer Entwicklungen, das frühzeitige Erkenntnisse über kommende Anforderungen liefert und proaktive Anpassungen ermöglicht.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematisches Monitoring globaler und lokaler regulatorischer Quellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Trendanalysen und Frühindikatoren für regulatorische Entwicklungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Institutsspezifische Filterung und Priorisierung relevanter Änderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Regelmäßige Regulatory Intelligence-Berichte und Analysen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Impact-Analyse & Change Management',
          description: 'Wir unterstützen Sie bei der fundierten Bewertung regulatorischer Auswirkungen und der Entwicklung effektiver Anpassungsstrategien, die Compliance-Risiken minimieren und strategische Handlungsspielräume sichern.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Detaillierte Impact-Analysen identifizierter regulatorischer Änderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung priorisierter Umsetzungspläne und Roadmaps'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Etablierung nachhaltiger Regulatory Change Management-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration regulatorischer Erkenntnisse in strategische Entscheidungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(baselIIIMonitoringData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Basel III Überwachung aufsichtsrechtlicher Änderungen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
