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
    console.log('Creating KRITIS Schulungen & Awareness-Kampagnen page...')

    const kritisSchulungenAwarenessKampagnenData = {
      _type: 'servicePage',
      _id: 'kritis-schulungen-awareness-kampagnen',
      title: 'KRITIS Schulungen & Awareness-Kampagnen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/kritis/kritis-ongoing-compliance/kritis-schulungen-awareness-kampagnen/'
      },
      parent: {
        _type: 'reference',
        _ref: 'kritis-ongoing-compliance'
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
        title: 'KRITIS Schulungen & Awareness-Kampagnen | ADVISORI',
        description: 'Spezialisierte KRITIS-Schulungen und Awareness-Kampagnen für Betreiber kritischer Infrastrukturen. Wir stärken das Sicherheitsbewusstsein Ihrer Mitarbeiter und gewährleisten nachhaltige Compliance.',
        keywords: 'KRITIS Schulungen, Security Awareness, IT-Sicherheit Training, Kritische Infrastrukturen, BSI, Cyber Security Training, Mitarbeiterschulungen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KRITIS Schulungen & Awareness-Kampagnen'
        },
        tagline: 'Sicherheitsbewusstsein als Fundament der KRITIS-Compliance',
        heading: 'KRITIS Schulungen & Awareness-Kampagnen',
        description: 'Der Mensch ist oft das schwächste Glied in der Sicherheitskette. Unsere spezialisierten KRITIS-Schulungen und Awareness-Kampagnen stärken das Sicherheitsbewusstsein Ihrer Mitarbeiter und schaffen eine robuste menschliche Firewall für Ihre kritische Infrastruktur.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Zielgruppenspezifische KRITIS-Schulungsprogramme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Praxisnahe Simulation realer Bedrohungsszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kontinuierliche Awareness-Kampagnen mit Erfolgsmessung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltige Verbesserung der Security-Culture'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KRITIS Schulungen & Awareness-Kampagnen',
        description: 'In kritischen Infrastrukturen sind qualifizierte und sensibilisierte Mitarbeiter der Schlüssel für effektive IT-Sicherheit. Technische Schutzmaßnahmen allein reichen nicht aus, wenn das menschliche Element nicht entsprechend geschult und für Cyberbedrohungen sensibilisiert ist. Unsere KRITIS-spezifischen Schulungs- und Awareness-Programme adressieren die besonderen Anforderungen und Bedrohungslagen kritischer Infrastrukturen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Rollenspezifische Schulungsprogramme für verschiedene Mitarbeitergruppen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Praxisnahe Simulation von KRITIS-spezifischen Angriffsszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Kontinuierliche Awareness-Kampagnen mit regelmäßigen Updates'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Messung und Bewertung der Trainingseffektivität'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration in bestehende Compliance- und Governance-Strukturen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Effektive KRITIS-Schulungen müssen über reine Wissensvermittlung hinausgehen und praktische Handlungskompetenzen für den Ernstfall entwickeln. Regelmäßige Übungen und Simulationen sind daher unverzichtbar.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Expertise in KRITIS-spezifischen Bedrohungslandschaften'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in der Schulung kritischer Infrastrukturbetreiber'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Innovative Schulungsmethoden mit hoher Praxisrelevanz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Messbare Verbesserung der Security-Awareness und Incident-Response-Fähigkeiten'
            }
          ]
        },
        additionalInfo: 'Die Bedrohungslandschaft für kritische Infrastrukturen entwickelt sich kontinuierlich weiter. Cyber-Angreifer werden immer ausgefeilter in ihren Social Engineering-Techniken. Daher ist es essentiell, dass alle Mitarbeiter regelmäßig geschult und über aktuelle Bedrohungen informiert werden.',
        serviceDescription: 'Wir entwickeln und implementieren umfassende KRITIS-spezifische Schulungs- und Awareness-Programme, die alle Ebenen Ihrer Organisation erreichen und nachhaltige Verhaltensänderungen bewirken. Unser Ansatz kombiniert theoretisches Wissen mit praktischen Übungen und kontinuierlicher Verstärkung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Entwicklung zielgruppenspezifischer Schulungsinhalte und -formate'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Durchführung von Phishing-Simulationen und Social Engineering-Tests'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Kontinuierliche Awareness-Kampagnen mit aktuellen Bedrohungsinformationen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Messung und Bewertung der Trainingseffektivität und Verhaltensänderungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Integration in bestehende HR- und Compliance-Prozesse'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam ein umfassendes KRITIS-Schulungs- und Awareness-Programm, das alle Mitarbeiterebenen erreicht und nachhaltige Verhaltensänderungen bewirkt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der aktuellen Security-Awareness und Identifikation von Schulungsbedarfen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung rollenspezifischer Schulungskonzepte und -materialien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung interaktiver Schulungsformate und praktischer Übungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Durchführung kontinuierlicher Awareness-Kampagnen und Verstärkungsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Messung der Effektivität und kontinuierliche Optimierung der Programme'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Der Mensch ist oft das schwächste Glied in der Sicherheitskette, aber mit der richtigen Schulung und Sensibilisierung wird er zur stärksten Verteidigungslinie. Unsere KRITIS-spezifischen Awareness-Programme schaffen eine robuste menschliche Firewall, die technische Sicherheitsmaßnahmen optimal ergänzt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Rollenspezifische KRITIS-Schulungsprogramme',
          description: 'Wir entwickeln maßgeschneiderte Schulungsprogramme für verschiedene Rollen und Verantwortlichkeiten in kritischen Infrastrukturen, von der Geschäftsführung bis zu operativen Mitarbeitern.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Führungskräfte-Schulungen zu strategischen KRITIS-Sicherheitsaspekten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'IT-Administrator-Trainings zu technischen Schutzmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Operator-Schulungen zu sicherheitsrelevanten Betriebsprozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Allgemeine Mitarbeiter-Awareness zu grundlegenden Sicherheitsprinzipien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Kontinuierliche Awareness-Kampagnen',
          description: 'Wir implementieren dauerhafte Awareness-Programme, die das Sicherheitsbewusstsein kontinuierlich aufrechterhalten und auf aktuelle Bedrohungen eingehen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Regelmäßige Threat Intelligence Updates und Warnungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Phishing-Simulationen und Social Engineering-Tests'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Interaktive E-Learning-Module und Microlearning-Einheiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Gamification-Ansätze zur Steigerung der Lernmotivation'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kritisSchulungenAwarenessKampagnenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KRITIS Schulungen & Awareness-Kampagnen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
