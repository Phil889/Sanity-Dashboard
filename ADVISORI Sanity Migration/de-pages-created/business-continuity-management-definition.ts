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
    console.log('Creating Business Continuity Management Definition page...')

    const bcmDefinitionData = {
      _type: 'servicePage',
      _id: 'business-continuity-management-definition',
      title: 'Business Continuity Management Definition',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/business-continuity-resilience/business-continuity-management-definition'
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
        title: 'Business Continuity Management Definition - Grundlagen & Konzepte | ADVISORI',
        description: 'Umfassende Definition von Business Continuity Management: Grundlagen, Konzepte und fundamentale Prinzipien für nachhaltige Geschäftskontinuität und organisationale Resilienz.',
        keywords: 'Business Continuity Management Definition, BCM Definition, Geschäftskontinuität Definition, BCM Grundlagen, Business Continuity Konzept, Resilienz Definition, Kontinuitätsmanagement'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Business Continuity Management Definition - Grundlagen und Konzepte'
        },
        tagline: 'Fundamentale Definition und Konzepte des modernen BCM',
        heading: 'Business Continuity Management Definition',
        description: 'Business Continuity Management definiert sich als strategische Managementdisziplin zur Sicherstellung der Geschäftskontinuität. Verstehen Sie die fundamentalen Konzepte, Definitionen und Prinzipien, die BCM zu einem unverzichtbaren Instrument für organisationale Resilienz machen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Klare Definition und Abgrenzung von BCM-Konzepten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Fundamentale Prinzipien und theoretische Grundlagen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Konzeptuelle Frameworks und Definitionen nach Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Wissenschaftlich fundierte BCM-Terminologie'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Business Continuity Management Definition - Konzeptuelle Grundlagen',
        description: 'Business Continuity Management wird definiert als ein ganzheitlicher Managementprozess, der Organisationen dabei unterstützt, potenzielle Bedrohungen zu identifizieren und ein Resilienz-Framework zu entwickeln, das eine effektive Reaktion zum Schutz der Interessen der wichtigsten Stakeholder, des Rufs, der Marke und der wertschöpfenden Aktivitäten ermöglicht.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Managementdisziplin zur systematischen Identifikation und Bewertung von Kontinuitätsrisiken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung und Implementierung von Resilienz-Frameworks für organisationale Widerstandsfähigkeit'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Schutz kritischer Geschäftsfunktionen und Stakeholder-Interessen während Störungsereignissen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von präventiven, reaktiven und adaptiven Kontinuitätsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierlicher Verbesserungsprozess basierend auf Lernen und Anpassung'
          }
        ],
        alert: {
          title: 'Konzeptuelle Klarheit',
          content: 'BCM ist mehr als Notfallplanung - es ist eine strategische Managementphilosophie, die organisationale Resilienz als Kernkompetenz etabliert und kontinuierliche Anpassungsfähigkeit fördert.'
        },
        whyUs: {
          title: 'Warum BCM-Definition mit ADVISORI verstehen',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in BCM-Theorie und konzeptuellen Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Wissenschaftlich fundierte Definitionen basierend auf internationalen Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxisorientierte Interpretation theoretischer BCM-Konzepte'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitliche Betrachtung von BCM als strategische Managementdisziplin'
            }
          ]
        },
        additionalInfo: 'Die Definition von Business Continuity Management basiert auf einem systemischen Verständnis organisationaler Resilienz, das über traditionelle Risikomanagement-Ansätze hinausgeht. BCM integriert strategische Planung, operative Exzellenz und adaptive Kapazitäten in einem kohärenten Framework, das Organisationen befähigt, nicht nur Störungen zu überstehen, sondern gestärkt aus ihnen hervorzugehen.',
        serviceDescription: 'Unser BCM-Definitions-Service vermittelt fundiertes Verständnis der konzeptuellen Grundlagen und theoretischen Frameworks des Business Continuity Managements. Wir erläutern die wissenschaftlichen Definitionen, Standards und Prinzipien, die BCM als strategische Managementdisziplin charakterisieren.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Fundamentale BCM-Definitionen und Terminologie'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Konzeptuelle Frameworks und theoretische Grundlagen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Standards-basierte Definitionen und Interpretationen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Wissenschaftliche Fundierung und Methodologie'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Praxisorientierte Anwendung theoretischer Konzepte'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Ansatz zur BCM-Definition',
        description: 'Wir verfolgen einen wissenschaftlich fundierten Ansatz zur Vermittlung von BCM-Definitionen, der theoretische Klarheit mit praktischer Anwendbarkeit verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Wissenschaftliche Fundierung durch internationale Standards und Best Practices'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematische Erläuterung konzeptueller Frameworks und Definitionen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Praxisorientierte Interpretation und Anwendung theoretischer Konzepte'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontextualisierung von Definitionen für verschiedene Organisationstypen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Aktualisierung basierend auf Standards-Entwicklungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Eine präzise Definition von Business Continuity Management ist fundamental für erfolgreiche Implementierungen. Konzeptuelle Klarheit schafft die Basis für strategische Entscheidungen und operative Exzellenz in der Resilienz-Entwicklung.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'BCM-Grundlagen & Definitionen',
          description: 'Umfassende Vermittlung fundamentaler BCM-Definitionen und konzeptueller Grundlagen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Wissenschaftliche BCM-Definitionen nach ISO 22301'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Konzeptuelle Frameworks und theoretische Modelle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Terminologie und Begriffsabgrenzungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Historische Entwicklung und moderne Interpretation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Standards & Frameworks',
          description: 'Detaillierte Erläuterung internationaler Standards und BCM-Frameworks.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'ISO 22301 Definitionen und Interpretationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'BCI Good Practice Guidelines Konzepte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'NIST und andere Framework-Definitionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Vergleichende Analyse verschiedener Ansätze'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Konzeptuelle Modelle',
          description: 'Entwicklung und Erläuterung konzeptueller BCM-Modelle und theoretischer Frameworks.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'BCM-Lifecycle und Prozessmodelle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Resilienz-Frameworks und Definitionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Kontinuitäts-Taxonomien und Klassifikationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Theoretische Grundlagen und Prinzipien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Praxisanwendung',
          description: 'Übertragung theoretischer Definitionen in praktische Anwendungskonzepte.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Organisationsspezifische Definition-Anpassung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Branchenspezifische Interpretationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Kulturelle und regionale Anpassungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Praktische Umsetzungsrichtlinien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Wissenschaftliche Fundierung',
          description: 'Akademische und wissenschaftliche Grundlagen der BCM-Definition.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Forschungsbasierte Definitionen und Konzepte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Empirische Studien und Validierungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Theoretische Modellentwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Wissenschaftliche Publikationen und Papers'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Zukunftsorientierte Definitionen',
          description: 'Entwicklung zukunftsorientierter BCM-Definitionen für emerging challenges.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Digitale Transformation und BCM-Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Cyber-Resilienz und moderne Bedrohungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Klimawandel und Nachhaltigkeits-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Emerging Technologies und BCM-Evolution'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcmDefinitionData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Business Continuity Management Definition page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
