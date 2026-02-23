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
    console.log('Creating EBA Mitarbeiterschulungen & Sensibilisierung page...')

    const ebaTrainingData = {
      _type: 'servicePage',
      _id: 'eba-mitarbeiterschulungen-sensibilisierung',
      title: 'EBA Mitarbeiterschulungen & Sensibilisierung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eba/eba-ongoing-compliance/eba-mitarbeiterschulungen-sensibilisierung'
      },
      parent: {
        _type: 'reference',
        _ref: 'eba-ongoing-compliance'
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
        title: 'EBA Mitarbeiterschulungen & Sensibilisierung | ADVISORI',
        description: 'Maßgeschneiderte Schulungs- und Sensibilisierungsprogramme für EBA-Compliance. Stärken Sie das Bewusstsein Ihrer Mitarbeiter für regulatorische Anforderungen und fördern Sie eine nachhaltige Compliance-Kultur.',
        keywords: 'EBA Schulungen, Mitarbeitersensibilisierung, Compliance Training, regulatorische Awareness, EBA Vorschriften, Compliance-Kultur, Bankenregulierung, Finanzaufsicht'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EBA Mitarbeiterschulungen & Sensibilisierung'
        },
        tagline: 'Nachhaltige Compliance-Kultur durch zielgerichtete Mitarbeiterschulungen',
        heading: 'EBA Mitarbeiterschulungen & Sensibilisierung',
        description: 'Entwickeln Sie eine proaktive Compliance-Kultur durch maßgeschneiderte Schulungs- und Sensibilisierungsprogramme zu EBA-Vorschriften. Unsere Programme stärken das Bewusstsein Ihrer Mitarbeiter für regulatorische Anforderungen und befähigen sie, Compliance-Risiken frühzeitig zu erkennen und angemessen zu handeln.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Erhöhtes Compliance-Bewusstsein auf allen Organisationsebenen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Reduzierung von Compliance-Verstößen und damit verbundenen Risiken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Förderung einer proaktiven Compliance-Kultur im gesamten Unternehmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Effiziente Integration regulatorischer Anforderungen in tägliche Arbeitsprozesse'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EBA Mitarbeiterschulungen & Sensibilisierung',
        description: 'Die zunehmende Komplexität der EBA-Regulierungen erfordert ein tiefgreifendes Verständnis auf allen Ebenen Ihrer Organisation. Unsere spezialisierten Schulungs- und Sensibilisierungsprogramme vermitteln nicht nur Fachwissen zu EBA-Vorschriften, sondern fördern auch eine nachhaltige Compliance-Kultur, die regulatorische Anforderungen als integralen Bestandteil der Unternehmensstrategie versteht.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Zielgruppenspezifische Schulungskonzepte für verschiedene Organisationsebenen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Praxisnahe Vermittlung komplexer regulatorischer Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration von Compliance-Bewusstsein in tägliche Entscheidungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung nachhaltiger Awareness-Maßnahmen für langfristige Wirksamkeit'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Messung und kontinuierliche Verbesserung des Compliance-Bewusstseins'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Effektive Compliance-Schulungen gehen über reine Wissensvermittlung hinaus. Integrieren Sie interaktive Elemente, praxisnahe Fallstudien und kontinuierliche Auffrischungsmaßnahmen, um eine nachhaltige Verhaltensänderung zu bewirken und Compliance als Teil der Unternehmenskultur zu etablieren.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Kombinierte Expertise in regulatorischen Anforderungen und moderner Erwachsenenbildung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Methoden zur nachhaltigen Verankerung von Compliance-Wissen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Maßgeschneiderte Lösungen, die auf die spezifischen Bedürfnisse und Risikofelder Ihres Instituts zugeschnitten sind'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovative digitale Lernformate, die flexibles und effizientes Lernen ermöglichen'
            }
          ]
        },
        additionalInfo: 'Ein nachhaltiges Compliance-Bewusstsein ist nicht nur ein wichtiger Schutzfaktor gegen regulatorische Risiken, sondern kann auch zu einer verbesserten Geschäftsleistung beitragen. Durch die Integration von Compliance-Überlegungen in tägliche Entscheidungsprozesse werden Risiken frühzeitig erkannt und proaktiv adressiert, wodurch kostspielige Compliance-Verstöße vermieden werden können.',
        serviceDescription: 'Unsere Schulungs- und Sensibilisierungsprogramme zu EBA-Vorschriften sind darauf ausgerichtet, ein tiefgreifendes Verständnis regulatorischer Anforderungen zu vermitteln und eine proaktive Compliance-Kultur in Ihrem Institut zu etablieren.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Bedarfsanalyse und Entwicklung maßgeschneiderter Schulungsprogramme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Zielgruppenspezifische Trainings für verschiedene Organisationsebenen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung digitaler Lernformate und -plattformen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Design und Implementierung kontinuierlicher Awareness-Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Erfolgsmessung und kontinuierliche Optimierung der Schulungsmaßnahmen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam ein maßgeschneidertes Schulungs- und Sensibilisierungsprogramm, das auf die spezifischen EBA-Compliance-Anforderungen Ihres Instituts zugeschnitten ist und eine nachhaltige Compliance-Kultur fördert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der spezifischen Compliance-Anforderungen und Identifikation von Wissenslücken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung zielgruppenspezifischer Schulungskonzepte und -materialien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Durchführung interaktiver und praxisnaher Schulungsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementation kontinuierlicher Awareness-Maßnahmen zur Verankerung des Gelernten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Erfolgsmessung und kontinuierliche Anpassung der Schulungsstrategie'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Andreas Müller',
        position: 'Partner',
        quote: 'Eine effektive Compliance-Kultur beginnt mit dem Bewusstsein und Verständnis jedes einzelnen Mitarbeiters. Unsere maßgeschneiderten Schulungs- und Sensibilisierungsprogramme befähigen Ihre Mitarbeiter, EBA-Anforderungen nicht nur zu verstehen, sondern sie als integralen Bestandteil ihrer täglichen Arbeit zu begreifen und umzusetzen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Maßgeschneiderte EBA-Compliance-Schulungen',
          description: 'Wir entwickeln und implementieren maßgeschneiderte Schulungsprogramme zu EBA-Vorschriften, die auf die spezifischen Bedürfnisse und Risikofelder Ihres Instituts zugeschnitten sind.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Zielgruppenspezifische Schulungskonzepte für verschiedene Organisationsebenen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Praxisnahe Vermittlung komplexer regulatorischer Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Interaktive Formate mit Fallstudien und praxisnahen Übungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Kontinuierliche Aktualisierung der Schulungsinhalte bei regulatorischen Änderungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Nachhaltige Compliance-Sensibilisierung',
          description: 'Wir unterstützen Sie bei der Entwicklung und Implementierung nachhaltiger Sensibilisierungsmaßnahmen, die ein kontinuierliches Compliance-Bewusstsein in Ihrem Institut fördern.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung langfristiger Awareness-Kampagnen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration von Compliance-Aspekten in interne Kommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementierung digitaler Lernformate und Mikrolerninhalte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Messung und kontinuierliche Verbesserung des Compliance-Bewusstseins'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(ebaTrainingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EBA Mitarbeiterschulungen & Sensibilisierung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
