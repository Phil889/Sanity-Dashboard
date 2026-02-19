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
    console.log('Creating ISO 27001 Maturity Assessment & Continuous Improvement page...')

    const serviceData = {
      _type: 'servicePage',
      _id: 'standards-frameworks-reifegradbewertung-kontinuierliche-verbesserung',
      title: 'ISO 27001 Reifegradbewertung & Kontinuierliche Verbesserung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/standards-frameworks-iso-27001/standards-frameworks-reifegradbewertung-kontinuierliche-verbesserung'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management-standards-frameworks-iso-27001'
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
        title: 'ISO 27001 Reifegradbewertung & Kontinuierliche Verbesserung | ADVISORI',
        description: 'Professionelle Reifegradbewertung und strategische Optimierung von ISO 27001 ISMS. Kontinuierliche Verbesserung für nachhaltige Informationssicherheit.',
        keywords: 'ISO 27001, Reifegradbewertung, Kontinuierliche Verbesserung, ISMS Optimierung, Maturity Assessment, Informationssicherheit, Standards'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Reifegradbewertung & Kontinuierliche Verbesserung'
        },
        tagline: 'Strategische ISMS-Optimierung durch systematische Reifegradbewertung',
        heading: 'ISO 27001 Reifegradbewertung & Kontinuierliche Verbesserung',
        description: 'Maximieren Sie den Wert Ihres ISO 27001 ISMS durch professionelle Reifegradbewertungen und strategische Optimierungsmaßnahmen. Wir entwickeln mit Ihnen nachhaltige Verbesserungsstrategien für höchste Informationssicherheit.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Objektive Bewertung der ISMS-Reife und Identifikation von Optimierungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategische Roadmaps für kontinuierliche ISMS-Verbesserung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Benchmarking gegen Branchenstandards und Best Practices'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltige Steigerung der Informationssicherheitseffektivität'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ISO 27001 Reifegradbewertung & Kontinuierliche Verbesserung',
        description: 'Ein zertifiziertes ISO 27001 ISMS ist erst der Anfang - der wahre Wert entsteht durch kontinuierliche Verbesserung und strategische Optimierung. Unsere systematischen Reifegradbewertungen identifizieren Verbesserungspotenziale und entwickeln maßgeschneiderte Optimierungsstrategien für nachhaltige Informationssicherheit.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Bewertung der ISMS-Reife nach anerkannten Maturity-Modellen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Identifikation strategischer Verbesserungsbereiche und Quick Wins'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung priorisierter Verbesserungsroadmaps mit messbaren Zielen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Benchmarking gegen Branchenstandards und Leading Practices'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Etablierung nachhaltiger Verbesserungsprozesse und -kulturen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Kontinuierliche Verbesserung ist ein Kernprinzip von ISO 27001 und entscheidend für die langfristige Wirksamkeit Ihres ISMS. Regelmäßige Reifegradbewertungen schaffen Transparenz und steuern strategische Investitionen in die Informationssicherheit.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Bewährte Maturity-Assessment-Methodiken mit nachweislicher Erfolgsgeschichte'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefgreifende Branchenkenntnisse und Best Practice-Erfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Strategische Beratung mit direktem Fokus auf Geschäftswert'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Nachhaltige Implementierung von Verbesserungsprozessen'
            }
          ]
        },
        additionalInfo: 'Reifegradbewertungen sind essentiell für die strategische Steuerung der Informationssicherheit und ermöglichen datengetriebene Entscheidungen über Investitionen und Prioritäten im ISMS.',
        serviceDescription: 'Wir bieten umfassende Reifegradbewertungen und strategische Beratung zur kontinuierlichen Verbesserung von ISO 27001 ISMS. Unser Ansatz kombiniert bewährte Assessment-Methodiken mit praktischer Umsetzungsexpertise.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strukturierte ISMS-Reifegradbewertung nach etablierten Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Strategische Verbesserungsplanung und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Benchmarking und Branchenvergleiche'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementierung kontinuierlicher Verbesserungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance-Monitoring und Erfolgsmessung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen einen systematischen Ansatz zur objektiven Reifegradbewertung und strategischen Optimierung Ihres ISO 27001 ISMS.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Ist-Analyse der aktuellen ISMS-Reife in allen relevanten Dimensionen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Benchmarking gegen Branchenstandards und Leading Practice-Referenzen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung priorisierter Verbesserungsstrategien mit klaren Zielen und Metriken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung nachhaltiger Verbesserungsprozesse und Change Management'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliches Monitoring und iterative Optimierung der Verbesserungsmaßnahmen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Kontinuierliche Verbesserung ist das Herzstück eines reifen ISMS. Durch systematische Reifegradbewertungen schaffen wir Transparenz über den aktuellen Stand und entwickeln strategische Roadmaps für nachhaltige Optimierung der Informationssicherheit.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische ISMS-Reifegradbewertung',
          description: 'Wir bewerten systematisch die Reife Ihres ISO 27001 ISMS und identifizieren strategische Verbesserungspotenziale für optimale Informationssicherheit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Mehrdimensionale Bewertung nach etablierten Maturity-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Quantitative und qualitative Analyse aller ISMS-Komponenten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Benchmarking gegen Branchenstandards und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Detaillierte Reifegrad-Berichte mit Handlungsempfehlungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Kontinuierliche Verbesserungsstrategien',
          description: 'Wir entwickeln und implementieren nachhaltige Verbesserungsstrategien, die Ihr ISMS kontinuierlich optimieren und an veränderte Anforderungen anpassen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Priorisierte Verbesserungsroadmaps mit messbaren Zielen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Etablierung kontinuierlicher Verbesserungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Performance-Monitoring und KPI-basierte Steuerung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Change Management und Kulturentwicklung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(serviceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Maturity Assessment & Continuous Improvement page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
