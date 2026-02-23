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
    console.log('Creating FRTB Prozessoptimierung & Schulungen page...')

    const frtbProzessoptimierungSchulungenData = {
      _type: 'servicePage',
      _id: 'frtb-prozessoptimierung-schulungen',
      title: 'FRTB Prozessoptimierung & Schulungen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/frtb/frtb-ongoing-compliance/frtb-prozessoptimierung-schulungen'
      },
      parent: {
        _type: 'reference',
        _ref: 'frtb-ongoing-compliance'
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
        title: 'FRTB Prozessoptimierung & Schulungen | ADVISORI',
        description: 'Optimieren Sie Ihre FRTB-Prozesse durch professionelle Schulungen und kontinuierliche Verbesserungsmaßnahmen. Stärken Sie die Kompetenz Ihrer Teams.',
        keywords: 'FRTB, Prozessoptimierung, Schulungen, Training, Kapitalmarkt, Trading Book, Basel III, Bankenregulierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FRTB Prozessoptimierung & Schulungen'
        },
        tagline: 'Stärken Sie Ihre FRTB-Kompetenz durch zielgerichtete Prozessoptimierung',
        heading: 'FRTB Prozessoptimierung & Schulungen',
        description: 'Optimieren Sie Ihre FRTB-Prozesse und stärken Sie die Kompetenz Ihrer Teams durch maßgeschneiderte Schulungen und kontinuierliche Verbesserungsmaßnahmen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Erhöhung der operativen Effizienz bei FRTB-Berechnungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Reduzierung von Fehlern durch geschulte Mitarbeiter'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kontinuierliche Verbesserung der FRTB-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Aufbau interner Expertise und Unabhängigkeit'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'FRTB Prozessoptimierung & Schulungen',
        description: 'Die erfolgreiche Umsetzung von FRTB erfordert nicht nur die richtige Technologie, sondern auch optimal geschulte Mitarbeiter und effiziente Prozesse. Wir unterstützen Sie bei der kontinuierlichen Optimierung Ihrer FRTB-Abläufe und dem Aufbau interner Kompetenzen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse bestehender FRTB-Prozesse und Identifikation von Optimierungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung effizienter Workflows und Automatisierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Zielgruppenspezifische Schulungen für verschiedene Stakeholder'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Train-the-Trainer Programme für nachhaltige Wissensvermittlung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliches Monitoring und Verbesserung der Prozesse'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche FRTB-Umsetzung ist zu 70% eine Frage der richtigen Prozesse und geschulten Mitarbeiter. Technologie allein reicht nicht aus – die menschliche Komponente ist entscheidend.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefe FRTB-Expertise kombiniert mit bewährten Change-Management-Methoden'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxisorientierte Schulungskonzepte basierend auf realen Use Cases'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Maßgeschneiderte Ansätze für verschiedene Rollen und Verantwortungsbereiche'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Langfristige Begleitung für nachhaltigen Erfolg'
            }
          ]
        },
        additionalInfo: 'Gut geschulte Teams reduzieren das operative Risiko um bis zu 60% und erhöhen die Effizienz der FRTB-Prozesse erheblich. Investieren Sie in Ihre wichtigste Ressource – Ihre Mitarbeiter!',
        serviceDescription: 'Wir bieten Ihnen umfassende Unterstützung bei der Optimierung Ihrer FRTB-Prozesse und dem Aufbau interner Kompetenzen. Von der Prozessanalyse über maßgeschneiderte Schulungen bis hin zur kontinuierlichen Verbesserung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'FRTB-Prozessanalyse und Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Rollenspezifische Schulungskonzepte'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Train-the-Trainer Programme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Change Management Begleitung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Prozessverbesserung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen systematischen Ansatz zur Optimierung Ihrer FRTB-Prozesse und dem nachhaltigen Aufbau interner Kompetenzen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Ist-Analyse der bestehenden FRTB-Prozesse und Kompetenzlücken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung zielgruppenspezifischer Schulungskonzepte'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung von Prozessverbesserungen und Schulungsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Monitoring und kontinuierliche Anpassung der Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Verankerung der Verbesserungen in der Organisation'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Kombination aus Prozessoptimierung und gezielten Schulungsmaßnahmen hat unsere FRTB-Umsetzung erheblich verbessert. ADVISORI versteht es, komplexe regulatorische Anforderungen in praktische und nachvollziehbare Lösungen zu übersetzen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'FRTB Prozessanalyse & Optimierung',
          description: 'Systematische Analyse und Optimierung Ihrer bestehenden FRTB-Prozesse für maximale Effizienz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Ist-Analyse der FRTB-Prozesslandschaft'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Ineffizienzen und Risikopunkten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung optimierter Prozessabläufe'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Implementierungsunterstützung und Change Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Maßgeschneiderte FRTB-Schulungen',
          description: 'Zielgruppenspezifische Schulungsprogramme für alle FRTB-relevanten Stakeholder.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Rollenspezifische Schulungskonzepte (Management, Risk, IT, Operations)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Praxisorientierte Trainings mit realen Fallbeispielen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Train-the-Trainer Programme für interne Multiplikatoren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Weiterbildung und Update-Schulungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(frtbProzessoptimierungSchulungenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FRTB Prozessoptimierung & Schulungen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
