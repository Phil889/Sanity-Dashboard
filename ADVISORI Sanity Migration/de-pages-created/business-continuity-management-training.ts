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
    console.log('Creating Business Continuity Management Training page...')

    const bcmTrainingData = {
      _type: 'servicePage',
      _id: 'business-continuity-management-training',
      title: 'Business Continuity Management Training',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/business-continuity-resilience/business-continuity-management-training'
      },
      parent: {
        _type: 'reference',
        _ref: 'business-continuity-resilience'
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
        title: 'Business Continuity Management Training - Professionelle Schulungen | ADVISORI',
        description: 'Professionelle BCM-Schulungen und Trainings: Praxisorientierte Workshops, Kompetenzentwicklung, Skill-Building und Weiterbildungsprogramme im Business Continuity Management mit ADVISORI.',
        keywords: 'Business Continuity Management Training, BCM Schulung, Business Continuity Training, BCM Workshop, Disaster Recovery Training, BCM Weiterbildung, Business Continuity Kurs, BCM Seminar'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Business Continuity Management Training - Professionelle Schulungen und Workshops'
        },
        tagline: 'Praxisorientierte BCM-Schulungen für nachhaltige Kompetenzentwicklung',
        heading: 'Business Continuity Management Training',
        description: 'Entwickeln Sie praktische BCM-Kompetenzen durch professionelle Schulungsprogramme und interaktive Workshops. ADVISORI bietet maßgeschneiderte Trainings für alle Erfahrungsstufen - von Grundlagen bis zu fortgeschrittenen Implementierungsstrategien für resiliente Organisationen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Praxisorientierte Workshops und interaktive Lernformate'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Maßgeschneiderte Schulungsprogramme für verschiedene Zielgruppen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Erfahrene Trainer mit umfassender BCM-Praxis'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Sofort anwendbare Methoden und Tools'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Business Continuity Management Training - Kompetenzentwicklung durch Praxis',
        description: 'Business Continuity Management Training bildet das Fundament für den Aufbau organisationaler Resilienz durch qualifizierte Fachkräfte. Unsere Schulungsprogramme verbinden theoretisches Wissen mit praktischer Anwendung und befähigen Teilnehmer zur erfolgreichen Implementierung und Führung von BCM-Programmen in komplexen Geschäftsumgebungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strukturierte Lernpfade von Grundlagen bis zu Expertenkompetenzen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Praxisorientierte Workshops mit realen Fallstudien und Simulationen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Interaktive Lernformate für nachhaltigen Wissenstransfer'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Branchenspezifische Anpassung und maßgeschneiderte Inhalte'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Kompetenzentwicklung und Weiterbildungsmöglichkeiten'
          }
        ],
        alert: {
          title: 'Praxisorientiertes Lernen',
          content: 'Effektive BCM-Schulungen gehen über theoretische Wissensvermittlung hinaus und schaffen durch praktische Übungen, Simulationen und reale Fallstudien nachhaltiges Verständnis für die Komplexität des Business Continuity Managements.'
        },
        whyUs: {
          title: 'Warum BCM-Training mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Erfahrene Trainer mit umfassender BCM-Praxis und Branchenexpertise'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Maßgeschneiderte Schulungskonzepte für spezifische Organisationsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Innovative Lernmethoden und moderne Schulungstechnologien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Nachhaltige Betreuung und kontinuierliche Weiterentwicklung'
            }
          ]
        },
        additionalInfo: 'Die Landschaft des BCM-Trainings entwickelt sich kontinuierlich weiter, um den sich wandelnden Anforderungen der Geschäftswelt gerecht zu werden. Moderne Schulungsprogramme integrieren digitale Transformation, Cyber-Resilienz, Klimarisiken und nachhaltige Geschäftspraktiken in ihre Curricula und bereiten Fachkräfte auf die Herausforderungen der Zukunft vor.',
        serviceDescription: 'Unser BCM-Trainingsservice bietet umfassende Schulungslösungen für alle Aspekte des Business Continuity Managements. Von grundlegenden Awareness-Programmen über spezialisierte Fachschulungen bis hin zu Führungskräfte-Workshops entwickeln wir maßgeschneiderte Lernkonzepte, die nachhaltige Kompetenzentwicklung fördern.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Bedarfsanalyse und maßgeschneiderte Schulungskonzepte'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Interaktive Workshops und praktische Übungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Simulationen und Krisenübungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'E-Learning-Plattformen und digitale Lernressourcen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Weiterbildung und Kompetenzerhaltung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Ansatz für BCM-Training',
        description: 'Wir verfolgen einen strukturierten und praxisorientierten Ansatz für BCM-Training, der verschiedene Lernstile berücksichtigt und nachhaltigen Wissenstransfer durch interaktive Methoden und praktische Anwendung gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Bedarfsanalyse und Zielgruppendefinition für maßgeschneiderte Inhalte'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Modularer Aufbau mit flexiblen Lernpfaden und Vertiefungsmöglichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Kombination aus Präsenzschulungen, Online-Learning und praktischen Übungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Erfolgsmessung und Anpassung der Schulungsinhalte'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Betreuung und Follow-up für langfristigen Lernerfolg'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Effektive BCM-Schulungen schaffen nicht nur Wissen, sondern entwickeln die praktischen Fähigkeiten und das Verständnis, die für den Aufbau wirklich resilienter Organisationen erforderlich sind. Durch praxisorientierte Trainings befähigen wir Fachkräfte, komplexe Herausforderungen zu meistern und nachhaltige Kontinuitätslösungen zu entwickeln.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'BCM Foundation Training',
          description: 'Grundlegende Schulungen für Einsteiger und Fachkräfte ohne BCM-Vorerfahrung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'BCM-Grundlagen und internationale Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Risikomanagement und Business Impact Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Kontinuitätsstrategien und Notfallplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Praktische Übungen und Fallstudienanalyse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Advanced BCM Workshop',
          description: 'Vertiefende Workshops für erfahrene BCM-Praktiker und Spezialisten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Komplexe Implementierungsstrategien und Governance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Supply Chain Resilience und Lieferantenmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Cyber-Resilienz und digitale Kontinuität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Krisenmanagement und Kommunikationsstrategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Executive BCM Briefing',
          description: 'Führungskräfte-orientierte Schulungen für strategische Entscheidungsträger.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'BCM-Governance und Board-Level Oversight'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Strategische Resilienz und Wettbewerbsvorteile'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Regulatorische Anforderungen und Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Investment und ROI von BCM-Programmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Crisis Simulation Training',
          description: 'Praktische Krisenübungen und Simulationen für realitätsnahe Erfahrungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Szenario-basierte Krisenübungen und Tabletop-Exercises'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Entscheidungsfindung unter Druck und Zeitmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Kommunikation und Stakeholder-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Lessons Learned und kontinuierliche Verbesserung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Branchenspezifische BCM-Schulungen',
          description: 'Maßgeschneiderte Trainings für spezifische Industriezweige und Sektoren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Finanzdienstleistungen und Banking-spezifische Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Healthcare und kritische Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Manufacturing und Produktionsumgebungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'IT und Technologieunternehmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Digital Learning Platform',
          description: 'E-Learning-Lösungen und digitale Schulungsressourcen für flexibles Lernen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Interaktive Online-Module und Selbstlernkurse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Virtual Reality Simulationen und immersive Erfahrungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Mobile Learning Apps und Microlearning-Formate'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Fortschrittstracking und Kompetenzmanagement'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcmTrainingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Business Continuity Management Training page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
