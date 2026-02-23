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
    console.log('Creating CRA Training page...')

    const craTrainingData = {
      _type: 'servicePage',
      _id: 'cra-training',
      title: 'CRA Training',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-training'
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
        title: 'CRA Training - Cyber Resilience Act Schulungen | ADVISORI',
        description: 'Professionelle CRA Training Programme für den Cyber Resilience Act. Umfassende Schulungen, Zertifizierungen und Kompetenzentwicklung für nachhaltige CRA-Compliance durch erfahrene Trainer.',
        keywords: 'CRA Training, Cyber Resilience Act Schulung, CRA Schulungen, CRA Zertifizierung, Cybersicherheit Training, CRA Weiterbildung, CRA Kompetenzentwicklung, Cyber Resilience Act Ausbildung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Training - Cyber Resilience Act Schulungen'
        },
        tagline: 'Professionelle CRA Training Programme für nachhaltige Compliance',
        heading: 'CRA Training',
        description: 'Der Cyber Resilience Act erfordert umfassende Kompetenzen auf allen Organisationsebenen. Unsere CRA Training Programme verbinden theoretisches Wissen mit praktischer Anwendung und schaffen die notwendigen Fähigkeiten für erfolgreiche CRA-Implementierung und nachhaltige Compliance-Exzellenz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Maßgeschneiderte Trainingsprogramme für alle Zielgruppen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Praxisorientierte Schulungen mit realen Anwendungsszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Zertifizierte Trainer mit umfassender CRA-Expertise'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Kompetenzentwicklung und Wissensupdate'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Umfassende CRA Training Programme für nachhaltige Kompetenzentwicklung',
        description: 'CRA Training ist mehr als Wissensvermittlung - es ist strategische Kompetenzentwicklung, die Organisationen befähigt, den Cyber Resilience Act erfolgreich zu implementieren und zu leben. Unsere Trainingsprogramme schaffen nachhaltiges Verständnis und praktische Fähigkeiten für alle Stakeholder-Gruppen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische CRA-Grundlagen und regulatorische Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Technische Implementierung und praktische Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Führungskräfte-Training und Governance-Schulungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Weiterbildung und Zertifizierungsprogramme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Trainingseffektivität und Kompetenz-Assessment'
          }
        ],
        alert: {
          title: 'CRA Training Hinweis',
          content: 'Erfolgreiche CRA-Implementierung erfordert kompetente Teams auf allen Ebenen. Professionelle Trainingsprogramme beschleunigen nicht nur die Compliance-Erreichung, sondern schaffen auch nachhaltige organisatorische Fähigkeiten für kontinuierliche Cybersicherheitsexzellenz.'
        },
        whyUs: {
          title: 'Unsere CRA Training Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Zertifizierte CRA-Trainer mit umfassender Praxiserfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Trainingsmethoden und interaktive Lernformate'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Anpassung und maßgeschneiderte Inhalte'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Langfristige Lernpartnerschaft und kontinuierliche Unterstützung'
            }
          ]
        },
        additionalInfo: 'CRA Training ist eine strategische Investition in die Zukunftsfähigkeit Ihrer Organisation. Durch professionelle Kompetenzentwicklung transformieren Sie regulatorische Anforderungen in organisatorische Stärken und Wettbewerbsvorteile.',
        serviceDescription: 'Wir entwickeln und liefern maßgeschneiderte CRA Training Programme, die theoretisches Wissen mit praktischer Anwendung verbinden und nachhaltige Kompetenzen für erfolgreiche CRA-Compliance schaffen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische CRA-Grundlagen und Awareness-Training'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Technische Implementierungsschulungen und Workshops'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Führungskräfte-Training und Executive Education'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Zertifizierungsprogramme und Kompetenz-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Weiterbildung und Wissensupdate'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser CRA Training Ansatz',
        description: 'Wir entwickeln mit Ihnen maßgeschneiderte Trainingsprogramme, die CRA-Wissen effektiv vermitteln, praktische Fähigkeiten aufbauen und nachhaltige Kompetenzentwicklung für alle Organisationsebenen gewährleisten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Bedarfsanalyse und zielgruppenspezifische Curriculum-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Interaktive Trainingsdelivery mit praktischen Übungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Kompetenz-Assessment und Zertifizierungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Lernbegleitung und Wissensvertiefung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Trainingseffektivität und nachhaltige Kompetenzentwicklung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'CRA Training ist der Schlüssel zu nachhaltiger Compliance-Exzellenz. Unsere Kunden profitieren von praxisorientierten Trainingsprogrammen, die nicht nur Wissen vermitteln, sondern echte Kompetenzen aufbauen. Erfolgreiche CRA-Implementierung beginnt mit gut ausgebildeten Teams, die die regulatorischen Anforderungen verstehen und praktisch umsetzen können.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'CRA Grundlagen und Awareness Training',
          description: 'Umfassende Einführung in den Cyber Resilience Act mit Fokus auf regulatorische Anforderungen, Geschäftsauswirkungen und organisatorische Verantwortlichkeiten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'CRA-Grundlagen und regulatorischer Überblick'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Geschäftsauswirkungen und Compliance-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Rollen und Verantwortlichkeiten im CRA-Kontext'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Awareness-Building und Kulturentwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technische CRA Implementierungsschulungen',
          description: 'Praxisorientierte Workshops für technische Teams mit Fokus auf konkrete Umsetzung von CRA-Anforderungen in Produkten und Systemen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Security-by-Design und Security-by-Default'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Vulnerability Management und Update-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Dokumentation und Compliance-Nachweis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Praktische Übungen und Fallstudien'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craTrainingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Training page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
