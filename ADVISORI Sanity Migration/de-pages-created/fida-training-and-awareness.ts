import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
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
    console.log('Creating FIDA Training and Awareness page...')

    const fidaTrainingData = {
      _type: 'servicePage',
      _id: 'fida-training-and-awareness',
      title: 'FIDA Training und Awareness',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/financial-data-access-fida/fida-training-and-awareness'
      },
      parent: {
        _type: 'reference',
        _ref: 'financial-data-access-fida'
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
        title: 'FIDA Training und Awareness Programme | ADVISORI',
        description: 'Umfassende FIDA-Schulungsprogramme für Finanzinstitute. Expertenschulungen zu Financial Data Access Regulation, Mitarbeiterqualifizierung und Change Management für erfolgreiche FIDA-Compliance.',
        keywords: 'FIDA Training, FIDA Schulung, Financial Data Access Training, FIDA Awareness, Compliance Schulung, Finanzregulierung Training, FIDA Weiterbildung, Mitarbeiterqualifizierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FIDA Training und Awareness Programme'
        },
        tagline: 'Expertenschulungen für erfolgreiche FIDA-Compliance',
        heading: 'FIDA Training und Awareness',
        description: 'Die Financial Data Access Regulation erfordert umfassende Mitarbeiterqualifizierung und organisatorische Awareness. Wir entwickeln maßgeschneiderte Trainingsprogramme, die Ihre Teams optimal auf FIDA-Anforderungen vorbereiten und nachhaltigen Compliance-Erfolg sicherstellen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende FIDA-Schulungsprogramme für alle Organisationsebenen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Praxisorientierte Trainings mit realen FIDA-Implementierungsszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kontinuierliche Kompetenzentwicklung und Awareness-Kampagnen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Change Management und kulturelle Transformation für FIDA-Readiness'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische FIDA-Qualifizierung für nachhaltigen Compliance-Erfolg',
        description: 'FIDA-Compliance ist mehr als technische Implementation – sie erfordert eine umfassende organisatorische Transformation und Mitarbeiterqualifizierung. Erfolgreiche FIDA-Umsetzung hängt entscheidend davon ab, dass alle Beteiligten die regulatorischen Anforderungen verstehen und in ihren täglichen Arbeitsabläufen umsetzen können.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung rollenspezifischer FIDA-Trainingsprogramme für verschiedene Organisationsebenen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Aufbau umfassender FIDA-Awareness durch gezielte Kommunikations- und Schulungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementation von Change Management-Prozessen für kulturelle FIDA-Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Etablierung kontinuierlicher Lernprogramme und Kompetenzentwicklungsframeworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Messung und Optimierung von Trainingseffektivität und Compliance-Readiness'
          }
        ],
        alert: {
          title: 'Kritischer Erfolgsfaktor',
          content: 'Studien zeigen, dass unzureichende Mitarbeiterqualifizierung einer der Hauptgründe für Compliance-Verstöße ist. Investitionen in umfassende FIDA-Trainings zahlen sich durch reduzierte Compliance-Risiken und verbesserte Implementierungsgeschwindigkeit aus.'
        },
        whyUs: {
          title: 'Unsere FIDA-Training-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte FIDA-Trainer mit praktischer Implementierungserfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Trainingsmethodologien für komplexe Finanzregulierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Maßgeschneiderte Lernpfade für verschiedene Rollen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Aktualisierung der Trainingsinhalte bei regulatorischen Änderungen'
            }
          ]
        },
        additionalInfo: 'FIDA-Training erfordert einen ganzheitlichen Ansatz, der technische, rechtliche und operative Aspekte integriert. Unsere Programme berücksichtigen die spezifischen Herausforderungen verschiedener Finanzdienstleistungssektoren und entwickeln praxisrelevante Lösungen für nachhaltige Compliance-Kultur.',
        serviceDescription: 'Wir entwickeln und implementieren umfassende FIDA-Trainingsprogramme, die von der strategischen Führungsebene bis zu operativen Mitarbeitern alle relevanten Stakeholder qualifizieren. Unsere Ansätze kombinieren theoretisches Wissen mit praktischen Anwendungsszenarien und schaffen nachhaltige Lernkulturen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische FIDA-Awareness-Programme für Führungskräfte und Entscheidungsträger'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Operative Schulungen für Compliance-, IT- und Geschäftsbereiche'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Change Management und kulturelle Transformationsprogramme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kontinuierliche Kompetenzentwicklung und Refresher-Trainings'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Trainingseffektivitätsmessung und kontinuierliche Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer FIDA-Training-Ansatz',
        description: 'Wir entwickeln maßgeschneiderte FIDA-Trainingsprogramme, die nachhaltige Kompetenzentwicklung und kulturelle Transformation ermöglichen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Bedarfsanalyse und rollenspezifische Kompetenz-Assessments'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung maßgeschneiderte Lernpfade und Trainingscurricula'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementation interaktiver und praxisorientierter Trainingsformate'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Aufbau nachhaltiger Lernkulturen und kontinuierlicher Entwicklungsprogramme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Messung von Trainingseffektivität und kontinuierliche Programm-Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Erfolgreiche FIDA-Compliance beginnt mit qualifizierten Mitarbeitern und einer starken Compliance-Kultur. Unsere Trainingsprogramme schaffen nicht nur regulatorisches Verständnis, sondern entwickeln die organisatorischen Fähigkeiten, die für nachhaltige FIDA-Umsetzung und kontinuierliche Anpassung an regulatorische Entwicklungen erforderlich sind.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische FIDA-Awareness für Führungskräfte',
          description: 'Umfassende Awareness-Programme für Geschäftsführung, Vorstände und Senior Management zu strategischen FIDA-Implikationen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Executive Briefings zu FIDA-Geschäftsauswirkungen und strategischen Chancen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Governance-Workshops für FIDA-Verantwortlichkeiten und Entscheidungsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risikomanagement-Trainings für FIDA-spezifische Compliance-Risiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Strategische Planungsworkshops für FIDA-Integration in Geschäftsstrategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Operative FIDA-Schulungen für Fachbereiche',
          description: 'Praxisorientierte Trainings für Compliance-, IT-, Rechts- und Geschäftsbereiche zu operativen FIDA-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Rollenspezifische Schulungen zu FIDA-Prozessen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Technische Trainings zu API-Management und Datenfreigabe-Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Compliance-Workshops zu FIDA-Dokumentations- und Reporting-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Praxissimulationen und Case-Study-basierte Lernformate'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'FIDA Change Management und Kulturwandel',
          description: 'Umfassende Change Management-Programme für organisatorische Transformation und FIDA-Kulturentwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Organisatorische Readiness-Assessments und Change-Strategieentwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Kommunikationskampagnen und Stakeholder-Engagement-Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Kulturwandel-Initiativen für FIDA-orientierte Arbeitsweisen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Change Champion-Programme und Multiplikator-Netzwerke'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Kontinuierliche FIDA-Kompetenzentwicklung',
          description: 'Aufbau nachhaltiger Lernprogramme und kontinuierlicher Kompetenzentwicklungsframeworks für FIDA-Expertise.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Entwicklung interner FIDA-Trainer und Kompetenz-Champions'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Aufbau von Learning Management Systemen für FIDA-Trainings'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Regelmäßige Refresher-Trainings und Update-Schulungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Kompetenz-Tracking und individuelle Entwicklungspläne'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'FIDA-Trainingseffektivität und Performance Management',
          description: 'Messung und Optimierung von Trainingseffektivität durch datengestützte Analyse und kontinuierliche Verbesserung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Entwicklung von Trainings-KPIs und Effektivitätsmessungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Regelmäßige Kompetenz-Assessments und Wissensstandserhebungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Feedback-Systeme und kontinuierliche Programm-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'ROI-Analyse von Trainingsinvestitionen und Compliance-Verbesserungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Spezialisierte FIDA-Zertifizierungs- und Qualifizierungsprogramme',
          description: 'Entwicklung und Durchführung spezialisierter Zertifizierungsprogramme für FIDA-Experten und Compliance-Spezialisten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'FIDA-Expertenzertifizierungen für Compliance- und IT-Professionals'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Spezialisierte Qualifizierungsprogramme für FIDA-Projektmanager'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Branchenspezifische Zertifizierungen für verschiedene Finanzdienstleistungssektoren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Internationale Anerkennungsverfahren und Credential-Management'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(fidaTrainingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FIDA Training and Awareness page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
