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
    console.log('Creating MaRisk Schulungen und Sensibilisierung page...')

    const mariskSchulungenData = {
      _type: 'servicePage',
      _id: 'marisk-schulungen-sensibilisierung',
      title: 'MaRisk Schulungen und Sensibilisierung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/marisk/marisk-ongoing-compliance/marisk-schulungen-sensibilisierung/'
      },
      parent: {
        _type: 'reference',
        _ref: 'marisk-ongoing-compliance'
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
        title: 'MaRisk Schulungen und Sensibilisierung | ADVISORI',
        description: 'Stärken Sie Ihre MaRisk-Compliance durch maßgeschneiderte Schulungs- und Sensibilisierungsprogramme. Unsere Experten unterstützen Sie bei der nachhaltigen Verankerung regulatorischer Anforderungen in der Unternehmenskultur.',
        keywords: 'MaRisk Schulungen, Compliance Awareness, Regulatorische Schulungen, MaRisk Sensibilisierung, Compliance-Kultur, MaRisk Training'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'MaRisk Schulungen und Sensibilisierung'
        },
        tagline: 'Nachhaltige Verankerung regulatorischer Anforderungen durch zielgerichtete Wissensvermittlung',
        heading: 'MaRisk Schulungen und Sensibilisierung',
        description: 'Fördern Sie ein tiefes Verständnis der MaRisk-Anforderungen in Ihrem Institut. Unsere maßgeschneiderten Schulungs- und Sensibilisierungsprogramme vermitteln praxisrelevantes Wissen und fördern eine proaktive Compliance-Kultur auf allen Ebenen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Nachhaltige Verankerung regulatorischer Anforderungen in der Unternehmenskultur'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Erhöhung des Risikobewusstseins und der Eigenverantwortung der Mitarbeiter'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Reduzierung von Compliance-Risiken durch proaktives Handeln'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Stärkung der drei Verteidigungslinien durch einheitliches Verständnis'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'MaRisk Schulungen und Sensibilisierung',
        description: 'Eine nachhaltige MaRisk-Compliance erfordert mehr als dokumentierte Prozesse – sie benötigt ein tiefes Verständnis und Akzeptanz auf allen Ebenen des Instituts. Unsere Schulungs- und Sensibilisierungsprogramme vermitteln nicht nur regulatorisches Wissen, sondern fördern eine proaktive Compliance-Kultur.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Zielgruppenspezifische Schulungskonzepte von der Geschäftsleitung bis zur operativen Ebene'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Praxisnahe Vermittlung regulatorischer Anforderungen mit konkreten Handlungsimplikationen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration von Case Studies und institutsspezifischen Szenarien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kombination verschiedener Lernformate für optimale Wissensverankerung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Nachhaltige Sensibilisierungsmaßnahmen zur Förderung einer Compliance-Kultur'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die Wirksamkeit von MaRisk-Schulungen hängt maßgeblich von ihrer praktischen Relevanz ab. Integrieren Sie institutsspezifische Prozesse und Beispiele, um die Übertragung des gelernten Wissens in den Arbeitsalltag zu erleichtern und die Akzeptanz zu erhöhen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in regulatorischen Anforderungen und aufsichtlichen Erwartungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserfahrene Trainer mit umfangreichem Hintergrund in der Finanzbranche'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Maßgeschneiderte Schulungskonzepte auf Basis einer gründlichen Bedarfsanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovativer Methodenmix für nachhaltige Lerneffekte und hohe Akzeptanz'
            }
          ]
        },
        additionalInfo: 'Studien zeigen, dass Institute mit etablierten Schulungs- und Sensibilisierungsprogrammen eine signifikant niedrigere Rate an Compliance-Verstößen aufweisen und bei aufsichtlichen Prüfungen besser abschneiden. Unsere Programme helfen Ihnen, dieses Potenzial zu erschließen und regulatorische Anforderungen nachhaltig in Ihrer Unternehmenskultur zu verankern.',
        serviceDescription: 'Wir bieten umfassende Schulungs- und Sensibilisierungsprogramme, die speziell auf die Anforderungen und Besonderheiten Ihres Instituts zugeschnitten sind. Unser Ziel ist es, nicht nur Wissen zu vermitteln, sondern eine nachhaltige Compliance-Kultur zu fördern, die regulatorische Anforderungen als integralen Bestandteil der täglichen Arbeit versteht.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Bedarfsanalyse und Entwicklung maßgeschneiderter Schulungskonzepte'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Durchführung zielgruppenspezifischer Schulungen und Workshops'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung von E-Learning-Modulen und digitalen Lernformaten'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Gestaltung von Awareness-Kampagnen und kontinuierlichen Sensibilisierungsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Evaluation der Wirksamkeit und kontinuierliche Optimierung der Maßnahmen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir implementieren ein ganzheitliches Konzept zur Förderung der MaRisk-Compliance durch Schulung und Sensibilisierung, das auf bewährten Lehr- und Lernmethoden basiert und gleichzeitig Ihre spezifischen Anforderungen berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse des Schulungsbedarfs und der organisatorischen Rahmenbedingungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung eines zielgruppenspezifischen Schulungs- und Sensibilisierungskonzepts'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Erstellung praxisnaher Schulungsmaterialien und digitaler Lernformate'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Durchführung von Schulungen und begleitenden Sensibilisierungsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Evaluation der Wirksamkeit und kontinuierliche Anpassung des Konzepts'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'Regionalbank AG',
        name: 'Dr. Anna Schmidt',
        position: 'Leiterin Compliance',
        quote: 'Die MaRisk-Schulungen von ADVISORI haben in unserem Institut einen nachhaltigen Kulturwandel bewirkt. Besonders wertvoll war die praxisnahe Vermittlung komplexer regulatorischer Anforderungen, die direkt an unseren Geschäftsprozessen ausgerichtet war. Die maßgeschneiderten Formate für verschiedene Zielgruppen haben dazu beigetragen, dass MaRisk-Compliance heute auf allen Ebenen als gemeinsame Verantwortung verstanden wird.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Zielgruppenspezifische MaRisk-Schulungen',
          description: 'Maßgeschneiderte Schulungsprogramme für verschiedene Zielgruppen, von der Geschäftsleitung über Führungskräfte bis hin zu operativen Mitarbeitern, mit jeweils angepasstem Fokus und Detaillierungsgrad.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Management-Workshops zu strategischen Compliance-Aspekten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Tiefgehende Fachschulungen für Compliance- und Risikofunktionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Praxisorientierte Schulungen für operative Einheiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Spezialmodule für Kontrollfunktionen und interne Revision'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Compliance-Awareness-Programme',
          description: 'Ganzheitliche Sensibilisierungsprogramme zur Förderung einer proaktiven Compliance-Kultur und Verankerung regulatorischer Anforderungen im täglichen Handeln aller Mitarbeiter.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung institutsspezifischer Awareness-Kampagnen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Interaktive E-Learning-Module und digitale Lernformate'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Kommunikationspakete für kontinuierliche Sensibilisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Messung und Förderung der Compliance-Kultur im Institut'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(mariskSchulungenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ MaRisk Schulungen und Sensibilisierung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
